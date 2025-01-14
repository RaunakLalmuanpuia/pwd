import{r as h,S as k,o as f,d as g,w as t,b as s,a,n as p,Q as y,X as w,z as V,c as $,p as q,g as d,t as v,m as S,F as z,V as b}from"./app-tAb7HeJo.js";import{Q as B}from"./QSpace-BavW0qO5.js";import{Q as I}from"./QTabs-D1BaQnJX.js";import{c as m,a as i,b as u,Q as x}from"./QLayout-C-aK8GLB.js";import{Q as N}from"./QChip-DgZWuRaJ.js";import{Q as E}from"./QBtnDropdown-C-tVZWWg.js";import{Q as L}from"./QPage-12zwgBUH.js";import{A as D}from"./Admin-Dd5DeIHf.js";import"./rtl-DFPa-2ov.js";import"./QMenu-hxlzhuYd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const F={class:"row q-gutter-md"},O={class:"flex zcard justify-between flex-inline col-12 q-pa-md"},j={class:"col-12 zcard q-pa-md"},A={class:"flex flex-inline items-center q-gutter-sm"},K={class:"col-12"},P={class:"flex q-gutter-sm"},ee=Object.assign({layout:D},{__name:"Index",props:["examCenters","search"],setup(n){const c=n;h("");const o=k({search:c==null?void 0:c.search,tab:route().current()}),Q=r=>{b.get(route("exam_center.index"),{search:o.search})},C=r=>{b.get(route(r))};return(r,l)=>(f(),g(L,{padding:""},{default:t(()=>[l[7]||(l[7]=s("p",{class:"page-title"},"Exam Center",-1)),s("div",F,[s("div",O,[a(p,{onClick:l[0]||(l[0]=e=>r.$inertia.get(r.route("exam_center.create"))),rounded:"",label:"New center",color:"primary"}),a(I,{stretch:"",shrink:"",modelValue:o.tab,"onUpdate:modelValue":[l[2]||(l[2]=e=>o.tab=e),C],align:"start"},{default:t(()=>[a(B),a(y,{modelValue:o.search,"onUpdate:modelValue":l[1]||(l[1]=e=>o.search=e),autofocus:"",outlined:"",dense:"",onKeyup:w(Q,["enter"]),"bg-color":"white",placeholder:"Search"},{append:t(()=>[a(V,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),s("div",j,[a(x,{separator:""},{default:t(()=>[(f(!0),$(z,null,q(n.examCenters.data,e=>(f(),g(m,{key:e.id},{default:t(()=>[a(i,null,{default:t(()=>[a(u,{class:"ztext"},{default:t(()=>[d(v(e.center_name),1)]),_:2},1024),a(u,{class:"ztext",caption:""},{default:t(()=>[d("Capacity : "+v(e==null?void 0:e.capacity),1)]),_:2},1024)]),_:2},1024),a(i,{side:""},{default:t(()=>[s("div",A,[a(N,{class:"text-white",color:(e==null?void 0:e.available)===1?"positive":"negative",square:"",label:(e==null?void 0:e.available)===1?"OPEN":"CLOSE"},null,8,["color","label"]),a(S,{vertical:""}),a(E,{class:"q-ma-none q-pa-sm",flat:"",rounded:"","dropdown-icon":"more_vert"},{default:t(()=>[a(x,{separator:""},{default:t(()=>[a(m,{onClick:_=>r.$inertia.get(r.route("exam_center.edit",e)),clickable:""},{default:t(()=>[a(i,null,{default:t(()=>[a(u,{class:"ztext"},{default:t(()=>l[5]||(l[5]=[d("Edit")])),_:1})]),_:1})]),_:2},1032,["onClick"]),a(m,{onClick:_=>r.$inertia.delete(r.route("exam_center.destroy",e==null?void 0:e.id)),clickable:""},{default:t(()=>[a(i,null,{default:t(()=>[a(u,{class:"ztext"},{default:t(()=>l[6]||(l[6]=[d("Delete")])),_:1})]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1}),s("div",K,[s("div",P,[a(p,{disable:!n.examCenters.prev_page_url,onClick:l[3]||(l[3]=e=>r.$inertia.get(n.examCenters.prev_page_url)),flat:"",round:"",icon:"chevron_left"},null,8,["disable"]),a(p,{disable:!n.examCenters.next_page_url,onClick:l[4]||(l[4]=e=>r.$inertia.get(n.examCenters.next_page_url)),flat:"",round:"",icon:"chevron_right"},null,8,["disable"])])])])])]),_:1}))}});export{ee as default};