import{r as $,U as q,o as d,j as g,e as s,b as o,d as e,i as v,Q as z,V as S,L as B,a as h,l as k,M as u,t as y,F as _,h as I,W as Q}from"./app-CBxBqPrd.js";import{Q as D}from"./QSpace-B9bq5LZ2.js";import{Q as F}from"./QTabs-BnRN_Xtd.js";import{c as b,a as c,b as m,Q as C}from"./QLayout-CSUJ40El.js";import{Q as L}from"./QChip-B_4bSyla.js";import{Q as N}from"./QBtnDropdown-CYiiFYoH.js";import{Q as U}from"./QPage-DL2ugT8Z.js";import{A as j}from"./Admin-B0jRLtRZ.js";import{u as E}from"./use-quasar-DrUIM-jD.js";import"./rtl-DFPa-2ov.js";import"./QMenu-D6F7Abx1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const A={class:"row q-gutter-md"},K={class:"flex zcard justify-between flex-inline col-12 q-pa-md"},O={class:"col-12 zcard q-pa-md"},T={class:"flex flex-inline items-center q-gutter-sm"},W={class:"col-12"},M={class:"flex q-gutter-sm"},le=Object.assign({layout:j},{__name:"Index",props:["users","search"],setup(n){const r=E();$("");const f=n,i=q({search:f==null?void 0:f.search,tab:route().current()}),x=l=>{Q.get(route("user.index"),{search:i.search})},V=l=>{Q.get(route(l))},w=l=>{r.dialog({title:"Confirm",message:"Would you like to delete?",cancel:!0,persistent:!0}).onOk(()=>{r.loading.show(),Q.delete(route("user.destroy",l),{onSuccess:()=>{r.notify({type:"positive",message:"User deleted successfully"})},onError:t=>{r.notify({type:"negative",message:(t==null?void 0:t.message)||"Failed to delete user."})},onFinish:()=>{r.loading.hide()}})}).onCancel(()=>{}).onDismiss(()=>{})};return(l,t)=>(d(),g(U,{padding:""},{default:s(()=>[t[7]||(t[7]=o("p",{class:"page-title"},"Users",-1)),o("div",A,[o("div",K,[e(v,{onClick:t[0]||(t[0]=a=>l.$inertia.get(l.route("user.create"))),rounded:"",label:"New user",color:"primary"}),e(F,{stretch:"",shrink:"",modelValue:i.tab,"onUpdate:modelValue":[t[2]||(t[2]=a=>i.tab=a),V],align:"start"},{default:s(()=>[e(D),e(z,{modelValue:i.search,"onUpdate:modelValue":t[1]||(t[1]=a=>i.search=a),autofocus:"",outlined:"",dense:"",onKeyup:S(x,["enter"]),"bg-color":"white",placeholder:"Search"},{append:s(()=>[e(B,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),o("div",O,[e(C,{separator:""},{default:s(()=>[(d(!0),h(_,null,k(n.users.data,a=>(d(),g(b,{key:a.id},{default:s(()=>[e(c,null,{default:s(()=>[e(m,{class:"ztext"},{default:s(()=>[u(y((a==null?void 0:a.name)??"--"),1)]),_:2},1024),e(m,{class:"ztext",caption:""},{default:s(()=>[u(y((a==null?void 0:a.email)??"--"),1)]),_:2},1024)]),_:2},1024),e(c,{side:""},{default:s(()=>[o("div",T,[(d(!0),h(_,null,k(a.roles,p=>(d(),g(L,{key:l.name,label:p.name},null,8,["label"]))),128)),e(I,{size:"sm",vertical:""}),e(N,{class:"q-ma-none q-pa-sm",flat:"",rounded:"","dropdown-icon":"more_vert"},{default:s(()=>[e(C,{separator:""},{default:s(()=>[e(b,{onClick:p=>l.$inertia.get(l.route("user.edit",a)),clickable:""},{default:s(()=>[e(c,null,{default:s(()=>[e(m,{class:"ztext"},{default:s(()=>t[5]||(t[5]=[u("Edit")])),_:1})]),_:1})]),_:2},1032,["onClick"]),e(b,{onClick:p=>w(a),clickable:""},{default:s(()=>[e(c,null,{default:s(()=>[e(m,{class:"ztext"},{default:s(()=>t[6]||(t[6]=[u("Delete")])),_:1})]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1}),o("div",W,[o("div",M,[e(v,{disable:!n.users.prev_page_url,onClick:t[3]||(t[3]=a=>l.$inertia.get(n.users.prev_page_url)),flat:"",round:"",icon:"chevron_left"},null,8,["disable"]),e(v,{disable:!n.users.next_page_url,onClick:t[4]||(t[4]=a=>l.$inertia.get(n.users.next_page_url)),flat:"",round:"",icon:"chevron_right"},null,8,["disable"])])])])])]),_:1}))}});export{le as default};
