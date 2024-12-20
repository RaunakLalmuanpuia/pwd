import{r as $,W as q,o as d,d as g,w as s,b as o,a as e,n as v,Q as z,X as S,O as B,c as h,p as k,g as u,t as y,F as _,m as I,Y as Q}from"./app-CAJ6WP2Z.js";import{Q as D}from"./QSpace-Bh9iOKIK.js";import{Q as F}from"./QTabs-D4yvRXaP.js";import{c as b,a as c,b as m,Q as C}from"./QLayout-C2CuVbmg.js";import{Q as N}from"./QChip-fGoSSzPe.js";import{Q as L}from"./QBtnDropdown-CNYvYApr.js";import{Q as U}from"./QPage-BwYQc1pj.js";import{A as E}from"./Admin-CzhbdQRn.js";import{u as O}from"./use-quasar--fFUav68.js";import"./rtl-DFPa-2ov.js";import"./QMenu-FSLAM983.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const j={class:"row q-gutter-md"},A={class:"flex zcard justify-between flex-inline col-12 q-pa-md"},K={class:"col-12 zcard q-pa-md"},T={class:"flex flex-inline items-center q-gutter-sm"},W={class:"col-12"},P={class:"flex q-gutter-sm"},le=Object.assign({layout:E},{__name:"Index",props:["users","search"],setup(n){const r=O();$("");const f=n,i=q({search:f==null?void 0:f.search,tab:route().current()}),w=l=>{Q.get(route("user.index"),{search:i.search})},x=l=>{Q.get(route(l))},V=l=>{r.dialog({title:"Confirm",message:"Would you like to delete?",cancel:!0,persistent:!0}).onOk(()=>{r.loading.show(),Q.delete(route("user.destroy",l),{onSuccess:()=>{r.notify({type:"positive",message:"User deleted successfully"})},onError:t=>{r.notify({type:"negative",message:(t==null?void 0:t.message)||"Failed to delete user."})},onFinish:()=>{r.loading.hide()}})}).onCancel(()=>{}).onDismiss(()=>{})};return(l,t)=>(d(),g(U,{padding:""},{default:s(()=>[t[7]||(t[7]=o("p",{class:"page-title"},"Users",-1)),o("div",j,[o("div",A,[e(v,{onClick:t[0]||(t[0]=a=>l.$inertia.get(l.route("user.create"))),rounded:"",label:"New user",color:"primary"}),e(F,{stretch:"",shrink:"",modelValue:i.tab,"onUpdate:modelValue":[t[2]||(t[2]=a=>i.tab=a),x],align:"start"},{default:s(()=>[e(D),e(z,{modelValue:i.search,"onUpdate:modelValue":t[1]||(t[1]=a=>i.search=a),autofocus:"",outlined:"",dense:"",onKeyup:S(w,["enter"]),"bg-color":"white",placeholder:"Search"},{append:s(()=>[e(B,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),o("div",K,[e(C,{separator:""},{default:s(()=>[(d(!0),h(_,null,k(n.users.data,a=>(d(),g(b,{key:a.id},{default:s(()=>[e(c,null,{default:s(()=>[e(m,{class:"ztext"},{default:s(()=>[u(y((a==null?void 0:a.name)??"--"),1)]),_:2},1024),e(m,{class:"ztext",caption:""},{default:s(()=>[u(y((a==null?void 0:a.email)??"--"),1)]),_:2},1024)]),_:2},1024),e(c,{side:""},{default:s(()=>[o("div",T,[(d(!0),h(_,null,k(a.roles,p=>(d(),g(N,{key:l.name,label:p.name},null,8,["label"]))),128)),e(I,{size:"sm",vertical:""}),e(L,{class:"q-ma-none q-pa-sm",flat:"",rounded:"","dropdown-icon":"more_vert"},{default:s(()=>[e(C,{separator:""},{default:s(()=>[e(b,{onClick:p=>l.$inertia.get(l.route("user.edit",a)),clickable:""},{default:s(()=>[e(c,null,{default:s(()=>[e(m,{class:"ztext"},{default:s(()=>t[5]||(t[5]=[u("Edit")])),_:1})]),_:1})]),_:2},1032,["onClick"]),e(b,{onClick:p=>V(a),clickable:""},{default:s(()=>[e(c,null,{default:s(()=>[e(m,{class:"ztext"},{default:s(()=>t[6]||(t[6]=[u("Delete")])),_:1})]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1}),o("div",W,[o("div",P,[e(v,{disable:!n.users.prev_page_url,onClick:t[3]||(t[3]=a=>l.$inertia.get(n.users.prev_page_url)),flat:"",round:"",icon:"chevron_left"},null,8,["disable"]),e(v,{disable:!n.users.next_page_url,onClick:t[4]||(t[4]=a=>l.$inertia.get(n.users.next_page_url)),flat:"",round:"",icon:"chevron_right"},null,8,["disable"])])])])])]),_:1}))}});export{le as default};