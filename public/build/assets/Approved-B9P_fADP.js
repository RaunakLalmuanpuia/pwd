import{b as _}from"./QMenu-DydHWm0B.js";import{o as i,a as b,b as r,d as t,e,F as D,l as Q,j as u,a8 as q,v as p,t as w,q as x,a9 as A}from"./app-CLnFNOc4.js";import{Q as g,a as d,b as f,c as m}from"./QLayout-DLfvAPOX.js";import{Q as C}from"./QBtnDropdown-CMCqR2fm.js";import{C as v}from"./ClosePopup-ahYTvXr4.js";import{A as j}from"./Admin-DUpmoHaT.js";import{u as B}from"./use-quasar-BLOAHIeo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L={class:"py-12"},$={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},I={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},N={class:"container mx-auto p-6"},F={class:"flex items-center"},z=Object.assign({layout:j},{__name:"Approved",props:["jobDetails"],setup(k){const c=B();function y(n){const o={timeZone:"Asia/Kolkata",weekday:"long",year:"numeric",month:"2-digit",day:"2-digit"};return new Intl.DateTimeFormat("en-IN",o).format(new Date(n)).replace(/(\d{2})\/(\d{2})\/(\d{4}),/,"$1/$2/$3")}const h=n=>{c.loading.show();const o=route("export.job.details",n);A.get(o,{responseType:"blob"}).then(a=>{const s=window.URL.createObjectURL(new Blob([a.data])),l=document.createElement("a");l.href=s,l.setAttribute("download",Date.now()+".xlsx"),l.click()}).catch(a=>{var s,l;c.notify({type:"negative",message:((l=(s=a.response)==null?void 0:s.data)==null?void 0:l.message)||"Failed to download file"})}).finally(()=>{c.loading.hide()})};return(n,o)=>(i(),b("div",L,[r("div",$,[r("div",I,[r("div",N,[o[3]||(o[3]=r("h1",{class:"text-3xl font-bold text-gray-800 mb-6"},"Qualified Application",-1)),t(g,null,{default:e(()=>[(i(!0),b(D,null,Q(k.jobDetails,(a,s)=>(i(),u(m,{class:"zcard q-mt-sm",key:s},{default:e(()=>[t(d,{avatar:""},{default:e(()=>[t(q,{square:""},{default:e(()=>[t(_,{square:"",label:s+1},null,8,["label"])]),_:2},1024)]),_:2},1024),t(d,null,{default:e(()=>[t(f,null,{default:e(()=>[p(w(a==null?void 0:a.post_name)+" Posted on: "+w(y(a==null?void 0:a.created_at)),1)]),_:2},1024)]),_:2},1024),t(d,{side:""},{default:e(()=>[r("div",F,[o[2]||(o[2]=r("div",{class:"text-caption"},"No of Applications",-1)),t(_,{"text-color":"white",square:"",color:"primary",label:a==null?void 0:a.applications_count},null,8,["label"]),t(C,{rounded:"",flat:"","dropdown-icon":"more_vert",class:"q-pa-sm"},{default:e(()=>[t(g,{class:"q-pa-sm"},{default:e(()=>[x((i(),u(m,{clickable:"",onClick:l=>n.$inertia.get(n.route("admin.applications.show_approved",a.id))},{default:e(()=>[t(d,null,{default:e(()=>[t(f,null,{default:e(()=>o[0]||(o[0]=[p("Detail of applications")])),_:1})]),_:1})]),_:2},1032,["onClick"])),[[v]]),x((i(),u(m,{clickable:"",onClick:l=>h(a.id)},{default:e(()=>[t(d,null,{default:e(()=>[t(f,null,{default:e(()=>o[1]||(o[1]=[p("Generate Excel")])),_:1})]),_:1})]),_:2},1032,["onClick"])),[[v]])]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1})])])])]))}});export{z as default};