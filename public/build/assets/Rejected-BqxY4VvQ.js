import{Q as $}from"./QSpace-DqWtO-l_.js";import{A as V,r as A,o as u,d as p,w as o,b as n,a as t,Q as B,D as I,z as L,c as N,p as F,q as S,g as b,t as v,E as _,F as U,n as w,C as Q,s as z}from"./app-dcaBrJ0A.js";import{Q as E}from"./QTabs-DROw8FzC.js";import{Q as k}from"./QChip-FeGsgm-F.js";import{c as g,a as c,b as h,Q as D}from"./QLayout-CYe35r64.js";import{Q as R}from"./QBtnDropdown-CLeZZ0sh.js";import{Q as T}from"./QPage--AueRtob.js";import{C as y}from"./ClosePopup-D9-0ZGq6.js";import{A as K}from"./Admin-BfIQrQ2P.js";import{u as P}from"./use-quasar-C5l40j-L.js";import"./rtl-DFPa-2ov.js";import"./QMenu-BS74onJp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const J={class:"row q-gutter-md"},O={class:"flex zcard justify-between flex-inline col-12 q-pa-md"},G={class:"col-12 zcard q-pa-md"},Z={class:"flex items-center"},H={class:"col-12"},M={class:"flex q-gutter-sm"},ue=Object.assign({layout:K},{__name:"Rejected",props:["jobDetails","search"],setup(i){const f=P(),m=i,d=V({search:m==null?void 0:m.search,tab:route().current()});A("");const j=l=>{Q.get(route("admin.applications.index_submission"),{search:d.search})},x=l=>{Q.get(route(l))};function q(l){const a={timeZone:"Asia/Kolkata",weekday:"long",year:"numeric",month:"2-digit",day:"2-digit"};return new Intl.DateTimeFormat("en-IN",a).format(new Date(l)).replace(/(\d{2})\/(\d{2})\/(\d{4}),/,"$1/$2/$3")}const C=l=>{f.loading.show();const a=route("export.job.rejected.details",l);z.get(a,{responseType:"blob"}).then(e=>{const r=window.URL.createObjectURL(new Blob([e.data])),s=document.createElement("a");s.href=r,s.setAttribute("download",Date.now()+".xlsx"),s.click()}).catch(e=>{var r,s;f.notify({type:"negative",message:((s=(r=e.response)==null?void 0:r.data)==null?void 0:s.message)||"Failed to download file"})}).finally(()=>{f.loading.hide()})};return(l,a)=>(u(),p(T,{padding:""},{default:o(()=>[a[7]||(a[7]=n("p",{class:"page-title"},"Jobs Rejected List",-1)),n("div",J,[n("div",O,[t(E,{stretch:"",shrink:"",modelValue:d.tab,"onUpdate:modelValue":[a[1]||(a[1]=e=>d.tab=e),x],align:"start"},{default:o(()=>[t($),t(B,{modelValue:d.search,"onUpdate:modelValue":a[0]||(a[0]=e=>d.search=e),autofocus:"",outlined:"",dense:"",onKeyup:I(j,["enter"]),"bg-color":"white",placeholder:"Search"},{append:o(()=>[t(L,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),n("div",G,[t(D,null,{default:o(()=>[(u(!0),N(U,null,F(i.jobDetails.data,(e,r)=>(u(),p(g,{class:"zcard q-mt-sm",key:r},{default:o(()=>[t(c,{avatar:""},{default:o(()=>[t(S,{square:""},{default:o(()=>[t(k,{square:"",label:r+1},null,8,["label"])]),_:2},1024)]),_:2},1024),t(c,null,{default:o(()=>[t(h,null,{default:o(()=>[b(v(e==null?void 0:e.post_name)+" Posted on: "+v(q(e==null?void 0:e.created_at)),1)]),_:2},1024)]),_:2},1024),t(c,{side:""},{default:o(()=>[n("div",Z,[a[6]||(a[6]=n("div",{class:"text-caption"},"No of Applications",-1)),t(k,{"text-color":"white",square:"",color:"primary",label:e==null?void 0:e.applications_count},null,8,["label"]),t(R,{rounded:"",flat:"","dropdown-icon":"more_vert",class:"q-pa-sm"},{default:o(()=>[t(D,{class:"q-pa-sm"},{default:o(()=>[_((u(),p(g,{clickable:"",onClick:s=>l.$inertia.get(l.route("admin.applications.show_rejected",e.id))},{default:o(()=>[t(c,null,{default:o(()=>[t(h,null,{default:o(()=>a[4]||(a[4]=[b("Detail of applications")])),_:1})]),_:1})]),_:2},1032,["onClick"])),[[y]]),_((u(),p(g,{clickable:"",onClick:s=>C(e.id)},{default:o(()=>[t(c,null,{default:o(()=>[t(h,null,{default:o(()=>a[5]||(a[5]=[b("Generate Excel")])),_:1})]),_:1})]),_:2},1032,["onClick"])),[[y]])]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1}),n("div",H,[n("div",M,[t(w,{disable:!i.jobDetails.prev_page_url,onClick:a[2]||(a[2]=e=>l.$inertia.get(i.jobDetails.prev_page_url)),flat:"",round:"",icon:"chevron_left"},null,8,["disable"]),t(w,{disable:!i.jobDetails.next_page_url,onClick:a[3]||(a[3]=e=>l.$inertia.get(i.jobDetails.next_page_url)),flat:"",round:"",icon:"chevron_right"},null,8,["disable"])])])])])]),_:1}))}});export{ue as default};
