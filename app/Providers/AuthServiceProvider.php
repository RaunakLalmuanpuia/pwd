<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use App\Models\Address;
use App\Models\Applicants;
use App\Policies\AddressPolicy;
use App\Policies\BioPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
        Address::class => AddressPolicy::class,
        Applicants::class =>BioPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        //
        $this->registerPolicies();
    }
}
