import{b as f}from"./QMenu-DEZSvYCL.js";import{o as s,a as m,b as o,d as t,e as a,F as k,l as y,i,ab as D,a5 as d,t as _,p as b}from"./app-DGSfB9v9.js";import{Q as g,a as n,b as u,c as p}from"./QLayout-Bjn0ecJ_.js";import{Q}from"./QBtnDropdown-BzoPAAqj.js";import{C as x}from"./ClosePopup-CAhJ0Jeo.js";import{A as h}from"./Admin-DeMXaItS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={class:"py-12"},A={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},C={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},B={class:"container mx-auto p-6"},I={class:"flex items-center"},S=Object.assign({layout:h},{__name:"Eligible",props:["jobDetails"],setup(w){function v(r){const e={timeZone:"Asia/Kolkata",weekday:"long",year:"numeric",month:"2-digit",day:"2-digit"};return new Intl.DateTimeFormat("en-IN",e).format(new Date(r)).replace(/(\d{2})\/(\d{2})\/(\d{4}),/,"$1/$2/$3")}return(r,e)=>(s(),m("div",q,[o("div",A,[o("div",C,[o("div",B,[e[3]||(e[3]=o("h1",{class:"text-3xl font-bold text-gray-800 mb-6"},"Eligible Application",-1)),t(g,null,{default:a(()=>[(s(!0),m(k,null,y(w.jobDetails,(l,c)=>(s(),i(p,{class:"zcard q-mt-sm",key:c},{default:a(()=>[t(n,{avatar:""},{default:a(()=>[t(D,{square:""},{default:a(()=>[t(f,{square:"",label:c+1},null,8,["label"])]),_:2},1024)]),_:2},1024),t(n,null,{default:a(()=>[t(u,null,{default:a(()=>[d(_(l==null?void 0:l.post_name)+" Posted on: "+_(v(l==null?void 0:l.created_at)),1)]),_:2},1024)]),_:2},1024),t(n,{side:""},{default:a(()=>[o("div",I,[e[2]||(e[2]=o("div",{class:"text-caption"},"No of Applications",-1)),t(f,{"text-color":"white",square:"",color:"primary",label:l==null?void 0:l.applications_count},null,8,["label"]),t(Q,{rounded:"",flat:"","dropdown-icon":"more_vert",class:"q-pa-sm"},{default:a(()=>[t(g,{class:"q-pa-sm"},{default:a(()=>[b((s(),i(p,{clickable:"",onClick:N=>r.$inertia.get(r.route("admin.applications.show_eligible",l.id))},{default:a(()=>[t(n,null,{default:a(()=>[t(u,null,{default:a(()=>e[0]||(e[0]=[d("Detail of applications")])),_:1})]),_:1})]),_:2},1032,["onClick"])),[[x]]),b((s(),i(p,{clickable:""},{default:a(()=>[t(n,null,{default:a(()=>[t(u,null,{default:a(()=>e[1]||(e[1]=[d("Generate Excel")])),_:1})]),_:1})]),_:1})),[[x]])]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1})])])])]))}});export{S as default};