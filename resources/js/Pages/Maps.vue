<script setup>
import {Head} from "@inertiajs/vue3";
import { ref, onMounted, watch } from 'vue'
import { GoogleMap, Marker, Polyline } from 'vue3-google-map'
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";

defineOptions({
    layout:ApplicantLayout
})
const mapRef = ref(null)
const directionsService = ref(null)
const directionsRenderer = ref(null)
const googleApi = ref(null)

const center = ref({ lat:23.164543, lng: 92.9375739 }) // Default: India
const origin = ref('')
const destination = ref('')
const originCoords = ref(null)
const destinationCoords = ref(null)
const distance = ref(null)
const duration = ref(null)
const routePath = ref([])
const showMarkers = ref(true) // Control marker visibility

const cost = ref(null);

// Load Google API when map is ready
onMounted(() => {
    watch(
        () => mapRef.value?.ready,
        (ready) => {
            if (ready) {
                googleApi.value = mapRef.value.api
                directionsService.value = new googleApi.value.DirectionsService()
                directionsRenderer.value = new googleApi.value.DirectionsRenderer({ map: mapRef.value.map })
                initAutocomplete()
                resetSelection()
            }
        }
    )
})

// Initialize Google Maps Places Autocomplete
const initAutocomplete = () => {
    if (!googleApi.value) return

    const autocompleteOrigin = new googleApi.value.places.Autocomplete(document.getElementById('origin'))
    const autocompleteDestination = new googleApi.value.places.Autocomplete(document.getElementById('destination'))

    autocompleteOrigin.addListener('place_changed', () => {
        const place = autocompleteOrigin.getPlace()
        if (place.geometry) {
            origin.value = place.formatted_address
            originCoords.value = place.geometry.location.toJSON()
        }
    })

    autocompleteDestination.addListener('place_changed', () => {
        const place = autocompleteDestination.getPlace()
        if (place.geometry) {
            destination.value = place.formatted_address
            destinationCoords.value = place.geometry.location.toJSON()
        }
    })
}

// Handle Map Click to Set Source & Destination
const handleMapClick = (event) => {
    const clickedLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
    }

    const geocoder = new googleApi.value.Geocoder()

    if (!originCoords.value) {
        originCoords.value = clickedLocation
        geocoder.geocode({ location: clickedLocation }, (results, status) => {
            if (status === 'OK' && results[0]) {
                origin.value = results[0].formatted_address
            } else {
                origin.value = `Lat: ${clickedLocation.lat}, Lng: ${clickedLocation.lng}`
            }
        })
    } else if (!destinationCoords.value) {
        destinationCoords.value = clickedLocation
        geocoder.geocode({ location: clickedLocation }, (results, status) => {
            if (status === 'OK' && results[0]) {
                destination.value = results[0].formatted_address
            } else {
                destination.value = `Lat: ${clickedLocation.lat}, Lng: ${clickedLocation.lng}`
            }
        })
    }

}

// Calculate Distance & Show Route on Map
const calculateRoute = () => {
    if (!mapRef.value?.ready || !originCoords.value || !destinationCoords.value) {
        alert('Please select valid origin and destination.')
        return
    }

    directionsRenderer.value.setMap(mapRef.value.map) // Attach map when calculating route

    directionsService.value.route(
        {
            origin: originCoords.value,
            destination: destinationCoords.value,
            travelMode: googleApi.value.TravelMode.DRIVING,
        },
        (response, status) => {
            if (status === 'OK') {
                directionsRenderer.value.setDirections(response)

                // Extract route path
                routePath.value = response.routes[0].overview_path.map(point => ({
                    lat: point.lat(),
                    lng: point.lng()
                }))

                // Hide markers when route is shown
                showMarkers.value = false

                // Calculate Distance & Duration
                const service = new googleApi.value.DistanceMatrixService()
                service.getDistanceMatrix(
                    {
                        origins: [originCoords.value],
                        destinations: [destinationCoords.value],
                        travelMode: googleApi.value.TravelMode.DRIVING,
                    },
                    (result, status) => {
                        if (status === 'OK' && result.rows[0].elements[0].status === 'OK') {
                            distance.value = result.rows[0].elements[0].distance.text
                            duration.value = result.rows[0].elements[0].duration.text
                            const numericDistance = parseFloat(distance.value.replace(/[^0-9.]/g, '')); // Extract numbers
                            cost.value = numericDistance * 40;
                        } else {
                            alert('Error fetching distance.')
                        }
                    }
                )
            } else {
                alert('Error fetching route.')
            }
        }
    )
}

// Reset Selection
const resetSelection = () => {
    origin.value = ''
    destination.value = ''
    originCoords.value = null
    destinationCoords.value = null
    routePath.value = []
    distance.value = null
    duration.value = null
    // directionsRenderer.value.setDirections(null)
    directionsRenderer.value.setMap(null) // Remove the route from the map
    showMarkers.value = true // Show markers again
}
</script>
<template>
    <q-page padding>
        <Head title="Maps"/>
        <div class="container">
            <GoogleMap
                ref="mapRef"
                api-key="AIzaSyAGK-HMMYfseKAJY356jUJLnz2ILC5bN_g"
                class="map"
                :center="center"
                :zoom="7"
                @click="handleMapClick"
            >

                <Marker v-if="showMarkers && originCoords" :options="{ position: originCoords, label: 'S' }" />
                <Marker v-if="showMarkers && destinationCoords" :options="{ position: destinationCoords, label: 'D' }" />
                <!--            <Polyline v-if="routePath.length" :options="{ path: routePath, strokeColor: '#FF0000', strokeWeight: 4 }" />-->
            </GoogleMap>

            <div class="input-container">
                <input id="origin"  v-model="origin" placeholder="Enter origin or click on map" />
                <input id="destination" v-model="destination" placeholder="Enter destination or click on map" />

            </div>

            <div class="input-container">

                <button @click="calculateRoute">Show Route</button>
                <button @click="resetSelection">Reset</button>
            </div>

            <div class="info" v-if="distance && duration">
                <p><strong>Source:</strong> {{ origin }}</p>
                <p><strong>Destination:</strong> {{ destination }}</p>

                <p><strong>Source Cords:</strong> {{ originCoords }}</p>
                <p><strong>Destination Cords:</strong> {{ destinationCoords }}</p>

                <p><strong>Distance:</strong> {{ distance }}</p>
                <p><strong>Duration:</strong> {{ duration }}</p>
                <p><strong>Rate:</strong> Rs 40 per Km</p>
                <p><strong>Cost:</strong>Rs {{ cost }}</p>


            </div>
        </div>
    </q-page>

</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.map {
    width: 80%;
    height: 500px;
    padding-top: 5px;
    margin-top: 5px;
}

.input-container {
    margin-top: 20px;
    display: flex;
    gap: 10px;
}

input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 250px;
}

button {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.info {
    margin-top: 10px;
}
</style>
