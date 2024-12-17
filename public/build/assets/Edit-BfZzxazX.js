import{Q as C}from"./QSpace-yyLrBBkb.js";import{Q as O,a as R}from"./QBreadcrumbs-DemydOwe.js";import{T as k,j as z,o as F,d as N,w as m,b as l,a,Q as i,u as s,m as I,a0 as M,n as _}from"./app-hFreFEoK.js";import{Q as T}from"./QSelect-DfKM7wJG.js";import{Q as Z}from"./QForm-DeYgiAED.js";import{Q as L}from"./QPage-PJihS_ZJ.js";import{A as D}from"./Admin-BptqES0q.js";import{u as G}from"./use-quasar-C-mQpRgK.js";import"./QChip-DHcCih2r.js";import"./QLayout-DWrMXjv5.js";import"./QMenu-CUuZkrYu.js";import"./rtl-DFPa-2ov.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const H={class:"flex flex-inline items-center"},J={class:"row q-col-gutter-sm"},K={class:"col-xs-12 col-sm-6"},W={class:"col-xs-12 col-sm-6"},X={class:"col-xs-12 col-sm-6"},Y={class:"col-xs-12 col-sm-6"},ee={class:"col-xs-12 col-sm-6"},re={class:"col-xs-12 col-sm-6"},se={class:"col-xs-12"},fe=Object.assign({layout:D},{__name:"Edit",props:{data:Object,roles:Object},setup(q){var p,g,c,w;const d=G(),t=q,e=k({name:(p=t.data)==null?void 0:p.name,phone:(g=t.data)==null?void 0:g.phone,email:(c=t.data)==null?void 0:c.email,roles:((w=t.data)==null?void 0:w.roles.map(n=>n.name))||[],password:"",password_confirmation:""}),u=z(()=>t.roles.map(n=>({id:n.id,name:n.name})));console.log(u.value);const $=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,E=n=>A(),A=()=>{e.name="",e.mobile="",e.email="",e.password="",e.roles=[],e.password_confirmation=""},j=()=>{e.put(route("user.update",t.data.id),{onStart:()=>{d.loading.show()},onSuccess:()=>{d.notify({type:"positive",message:"User updated successfully!"}),e.reset()},onError:()=>{d.notify({type:"negative",message:"There was an error updating the user."})},onFinish:()=>{d.loading.hide()}})};return(n,o)=>(F(),N(L,{padding:""},{default:m(()=>[l("div",H,[o[12]||(o[12]=l("p",{class:"page-title"},"Edit User",-1)),a(C),a(R,{align:"right",gutter:"xs"},{default:m(()=>[a(O,{to:{name:"user:read"},label:"Users"}),a(O,{label:"Edit User"})]),_:1})]),a(Z,{class:"zcard q-pa-md",onReset:E,onSubmit:j},{default:m(()=>{var f,y,b,V,v,Q,x,S,B,h,P,U;return[l("div",J,[l("div",K,[a(i,{modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).name=r),class:"my-input",dense:"",label:"Name",outlined:"",error:s(e).errors.hasOwnProperty("name"),"error-message":(y=(f=s(e).errors)==null?void 0:f.name)==null?void 0:y.toString(),onBlur:o[1]||(o[1]=r=>delete s(e).errors.name),rules:[r=>!!r||"Username is required"]},null,8,["modelValue","error","error-message","rules"])]),l("div",W,[a(i,{modelValue:s(e).phone,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).phone=r),class:"my-input",mask:"##########",dense:"",label:"Mobile",outlined:"",error:s(e).errors.hasOwnProperty("phone"),"error-message":(V=(b=s(e).errors)==null?void 0:b.phone)==null?void 0:V.toString(),onBlur:o[3]||(o[3]=r=>delete s(e).errors.phone),rules:[r=>r.length===10||"Mobile is required"]},null,8,["modelValue","error","error-message","rules"])]),l("div",X,[a(i,{modelValue:s(e).email,"onUpdate:modelValue":o[4]||(o[4]=r=>s(e).email=r),class:"my-input",dense:"",label:"Email",outlined:"",error:s(e).errors.hasOwnProperty("email"),"error-message":(Q=(v=s(e).errors)==null?void 0:v.email)==null?void 0:Q.toString(),onBlur:o[5]||(o[5]=r=>delete s(e).errors.email),rules:[r=>$.test(r)||"Invalid email"]},null,8,["modelValue","error","error-message","rules"])]),l("div",Y,[a(T,{modelValue:s(e).roles,"onUpdate:modelValue":o[6]||(o[6]=r=>s(e).roles=r),multiple:"","use-chips":"",options:u.value,dense:"",class:"my-input",label:"Roles",outlined:"","option-value":"id","option-label":"name",error:s(e).errors.hasOwnProperty("roles"),"error-message":(S=(x=s(e).errors)==null?void 0:x.roles)==null?void 0:S.toString(),onBlur:o[7]||(o[7]=r=>delete s(e).errors.roles),rules:[r=>r.length>0||"roles is required"]},null,8,["modelValue","options","error","error-message","rules"])]),l("div",ee,[a(i,{modelValue:s(e).password,"onUpdate:modelValue":o[8]||(o[8]=r=>s(e).password=r),type:"password",class:"my-input",dense:"",label:"Password",outlined:"",error:s(e).errors.hasOwnProperty("password"),"error-message":(h=(B=s(e).errors)==null?void 0:B.password)==null?void 0:h.toString(),onBlur:o[9]||(o[9]=r=>delete s(e).errors.password),rules:[r=>(r==null?void 0:r.length)>=6||"Password must be at least 6 digit character"]},null,8,["modelValue","error","error-message","rules"])]),l("div",re,[a(i,{modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[10]||(o[10]=r=>s(e).password_confirmation=r),type:"password",class:"my-input",dense:"",label:"Confirm Password",outlined:"",error:s(e).errors.hasOwnProperty("password_confirmation"),"error-message":(U=(P=s(e).errors)==null?void 0:P.password_confirmation)==null?void 0:U.toString(),onBlur:o[11]||(o[11]=r=>delete s(e).errors.password_confirmation),rules:[r=>r===s(e).password||"Confirm password doesn't match Password"]},null,8,["modelValue","error","error-message","rules"])])]),l("div",se,[a(I,{class:"q-my-md"})]),a(M,{class:"q-mt-md"},{default:m(()=>[a(_,{color:"primary",flat:"",type:"submit",label:"Save"}),a(_,{color:"negative",flat:"",type:"reset",label:"Reset"})]),_:1})]}),_:1})]),_:1}))}});export{fe as default};
