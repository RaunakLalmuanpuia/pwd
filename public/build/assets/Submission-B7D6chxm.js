import{b}from"./QMenu-DydHWm0B.js";import{o as r,a as _,b as i,d as e,e as t,F as D,l as Q,j as c,a8 as q,v as p,t as w,q as x,a9 as C}from"./app-CLnFNOc4.js";import{Q as g,a as d,b as f,c as m}from"./QLayout-DLfvAPOX.js";import{Q as A}from"./QBtnDropdown-CMCqR2fm.js";import{C as v}from"./ClosePopup-ahYTvXr4.js";import{A as L}from"./Admin-DUpmoHaT.js";import{u as j}from"./use-quasar-BLOAHIeo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={class:"py-12"},N={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},$={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},I={class:"container mx-auto p-6"},F={class:"flex items-center"},R=Object.assign({layout:L},{__name:"Submission",props:["jobDetails"],setup(k){const u=j();function y(n){const o={timeZone:"Asia/Kolkata",weekday:"long",year:"numeric",month:"2-digit",day:"2-digit"};return new Intl.DateTimeFormat("en-IN",o).format(new Date(n)).replace(/(\d{2})\/(\d{2})\/(\d{4}),/,"$1/$2/$3")}const h=n=>{u.loading.show();const o=route("export.job.submitted.details",n);C.get(o,{responseType:"blob"}).then(a=>{const l=window.URL.createObjectURL(new Blob([a.data])),s=document.createElement("a");s.href=l,s.setAttribute("download",Date.now()+".xlsx"),s.click()}).catch(a=>{var l,s;u.notify({type:"negative",message:((s=(l=a.response)==null?void 0:l.data)==null?void 0:s.message)||"Failed to download file"})}).finally(()=>{u.loading.hide()})};return(n,o)=>(r(),_("div",B,[i("div",N,[i("div",$,[i("div",I,[o[3]||(o[3]=i("h1",{class:"text-3xl font-bold text-gray-800 mb-6"},"New Job Applications List",-1)),e(g,null,{default:t(()=>[(r(!0),_(D,null,Q(k.jobDetails,(a,l)=>(r(),c(m,{class:"zcard q-mt-sm",key:l},{default:t(()=>[e(d,{avatar:""},{default:t(()=>[e(q,{square:""},{default:t(()=>[e(b,{square:"",label:l+1},null,8,["label"])]),_:2},1024)]),_:2},1024),e(d,null,{default:t(()=>[e(f,null,{default:t(()=>[p(w(a==null?void 0:a.post_name)+" Posted on: "+w(y(a==null?void 0:a.created_at)),1)]),_:2},1024)]),_:2},1024),e(d,{side:""},{default:t(()=>[i("div",F,[o[2]||(o[2]=i("div",{class:"text-caption"},"No of Applications",-1)),e(b,{"text-color":"white",square:"",color:"primary",label:a==null?void 0:a.applications_count},null,8,["label"]),e(A,{rounded:"",flat:"","dropdown-icon":"more_vert",class:"q-pa-sm"},{default:t(()=>[e(g,{class:"q-pa-sm"},{default:t(()=>[x((r(),c(m,{clickable:"",onClick:s=>n.$inertia.get(n.route("admin.applications.show_submission",a.id))},{default:t(()=>[e(d,null,{default:t(()=>[e(f,null,{default:t(()=>o[0]||(o[0]=[p("Detail of applications")])),_:1})]),_:1})]),_:2},1032,["onClick"])),[[v]]),x((r(),c(m,{clickable:"",onClick:s=>h(a.id)},{default:t(()=>[e(d,null,{default:t(()=>[e(f,null,{default:t(()=>o[1]||(o[1]=[p("Generate Excel")])),_:1})]),_:1})]),_:2},1032,["onClick"])),[[v]])]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1})])])])]))}});export{R as default};