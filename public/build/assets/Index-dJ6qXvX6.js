import{r as j,W as w,o as f,c as g,a,u as $,w as l,F as Q,Z as q,b as s,n as p,Q as C,X as V,O as y,p as z,d as I,g as d,t as b,m as S,Y as _}from"./app-hFreFEoK.js";import{Q as B}from"./QSpace-yyLrBBkb.js";import{Q as N}from"./QTabs-BrylgiDF.js";import{Q as h,a as i,b as u,c as v}from"./QLayout-DWrMXjv5.js";import{Q as F}from"./QChip-DHcCih2r.js";import{Q as L}from"./QBtnDropdown-LWgjbHFg.js";import{Q as A}from"./QPage-PJihS_ZJ.js";import{A as D}from"./Admin-BptqES0q.js";import"./rtl-DFPa-2ov.js";import"./QMenu-CUuZkrYu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const P={class:"q-pa-md"},T={class:"row q-col-gutter-md"},E={class:"flex zcard justify-between flex-inline col-12 q-pa-md"},J={class:"col-12 zcard q-pa-md"},K={class:"text-weight-medium ztext"},O={class:"flex items-center flex-inline q-gutter-sm"},U={class:"col-12"},W={class:"flex q-gutter-sm"},oe={__name:"Index",props:["jobs","search"],setup(r){const c=r;j("");const n=w({search:c==null?void 0:c.search,tab:route().current()}),k=o=>{_.get(route("job.index"),{search:n.search})},m=o=>{_.get(route(o))};return(o,t)=>(f(),g(Q,null,[a($(q),{title:"Posts"}),a(D,null,{default:l(()=>[a(A,{class:"container-lg",padding:""},{default:l(()=>[t[8]||(t[8]=s("p",{class:"page-title"},"Job profiles",-1)),s("div",P,[s("div",T,[s("div",E,[a(p,{onClick:t[0]||(t[0]=e=>o.$inertia.get(o.route("job.create"))),rounded:"",label:"New Job profile",color:"primary"}),a(N,{stretch:"",shrink:"",modelValue:n.tab,"onUpdate:modelValue":[t[2]||(t[2]=e=>n.tab=e),m],align:"start"},{default:l(()=>[a(B),a(C,{modelValue:n.search,"onUpdate:modelValue":t[1]||(t[1]=e=>n.search=e),autofocus:"",outlined:"",dense:"",onKeyup:V(k,["enter"]),"bg-color":"white",placeholder:"Search"},{append:l(()=>[a(y,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),t[7]||(t[7]=s("div",{class:"col-12"},null,-1)),s("div",J,[a(h,{separator:""},{default:l(()=>[(f(!0),g(Q,null,z(r.jobs.data,e=>(f(),I(v,{key:e.id},{default:l(()=>[a(i,null,{default:l(()=>[a(u,{class:"ztext"},{default:l(()=>[d(b(e==null?void 0:e.post_name),1)]),_:2},1024),a(u,{class:"ztext",caption:""},{default:l(()=>[d("Fee : "+b(e==null?void 0:e.application_fee),1)]),_:2},1024),s("div",K,"POST : "+b(e==null?void 0:e.no_of_post),1)]),_:2},1024),a(i,{side:""},{default:l(()=>[s("div",O,[a(F,{class:"text-white",color:(e==null?void 0:e.active)===1?"positive":"negative",square:"",label:(e==null?void 0:e.active)===1?"Active":"Inactive"},null,8,["color","label"]),a(S,{vertical:""}),a(L,{color:"q-ma-none q-pa-xs",flat:"",rounded:"","dropdown-icon":"more_vert"},{default:l(()=>[a(h,{separator:""},{default:l(()=>[a(v,{onClick:x=>o.$inertia.get(o.route("job.edit",e==null?void 0:e.id)),clickable:""},{default:l(()=>[a(i,null,{default:l(()=>[a(u,{class:"ztext"},{default:l(()=>t[5]||(t[5]=[d("Edit")])),_:1})]),_:1})]),_:2},1032,["onClick"]),a(v,{onClick:x=>o.$inertia.delete(o.route("job.destroy",e==null?void 0:e.id)),clickable:""},{default:l(()=>[a(i,null,{default:l(()=>[a(u,{class:"ztext"},{default:l(()=>t[6]||(t[6]=[d("Delete")])),_:1})]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1}),s("div",U,[s("div",W,[a(p,{disable:!r.jobs.prev_page_url,onClick:t[3]||(t[3]=e=>o.$inertia.get(r.jobs.prev_page_url)),flat:"",round:"",icon:"chevron_left"},null,8,["disable"]),a(p,{disable:!r.jobs.next_page_url,onClick:t[4]||(t[4]=e=>o.$inertia.get(r.jobs.next_page_url)),flat:"",round:"",icon:"chevron_right"},null,8,["disable"])])])])])])]),_:1})]),_:1})],64))}};export{oe as default};
