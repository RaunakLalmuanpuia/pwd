import{Q as f}from"./QChip-fGoSSzPe.js";import{o as l,c as m,b as s,a as t,w as a,F as k,p as y,d as i,V as Q,g as d,t as _,R as b}from"./app-CAJ6WP2Z.js";import{Q as w,a as n,b as u,c as p}from"./QLayout-C2CuVbmg.js";import{Q as D}from"./QBtnDropdown-CNYvYApr.js";import{C as x}from"./ClosePopup-DSk8A0Kw.js";import{A as h}from"./Admin-CzhbdQRn.js";import"./QMenu-FSLAM983.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={class:"py-12"},A={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},C={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},N={class:"container mx-auto p-6"},B={class:"flex items-center"},S=Object.assign({layout:h},{__name:"Jobs",props:["jobDetails"],setup(g){function v(r){const e={timeZone:"Asia/Kolkata",weekday:"long",year:"numeric",month:"2-digit",day:"2-digit"};return new Intl.DateTimeFormat("en-IN",e).format(new Date(r)).replace(/(\d{2})\/(\d{2})\/(\d{4}),/,"$1/$2/$3")}return(r,e)=>(l(),m("div",q,[s("div",A,[s("div",C,[s("div",N,[e[3]||(e[3]=s("h1",{class:"text-3xl font-bold text-gray-800 mb-6"},"New Job Applications List",-1)),t(w,null,{default:a(()=>[(l(!0),m(k,null,y(g.jobDetails,(o,c)=>(l(),i(p,{class:"zcard q-mt-sm",key:c},{default:a(()=>[t(n,{avatar:""},{default:a(()=>[t(Q,{square:""},{default:a(()=>[t(f,{square:"",label:c+1},null,8,["label"])]),_:2},1024)]),_:2},1024),t(n,null,{default:a(()=>[t(u,null,{default:a(()=>[d(_(o==null?void 0:o.post_name)+" Posted on: "+_(v(o==null?void 0:o.created_at)),1)]),_:2},1024)]),_:2},1024),t(n,{side:""},{default:a(()=>[s("div",B,[e[2]||(e[2]=s("div",{class:"text-caption"},"No of Applications",-1)),t(f,{"text-color":"white",square:"",color:"primary",label:o==null?void 0:o.applications_count},null,8,["label"]),t(D,{rounded:"",flat:"","dropdown-icon":"more_vert",class:"q-pa-sm"},{default:a(()=>[t(w,{class:"q-pa-sm"},{default:a(()=>[b((l(),i(p,{clickable:"",onClick:I=>r.$inertia.get(r.route("admin.applications.show_submission",o.id))},{default:a(()=>[t(n,null,{default:a(()=>[t(u,null,{default:a(()=>e[0]||(e[0]=[d("Detail of applications")])),_:1})]),_:1})]),_:2},1032,["onClick"])),[[x]]),b((l(),i(p,{clickable:""},{default:a(()=>[t(n,null,{default:a(()=>[t(u,null,{default:a(()=>e[1]||(e[1]=[d("Generate Excel")])),_:1})]),_:1})]),_:1})),[[x]])]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1})])])])]))}});export{S as default};