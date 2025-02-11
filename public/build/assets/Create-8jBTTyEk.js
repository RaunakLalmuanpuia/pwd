import{Q as q}from"./QSpace-DqWtO-l_.js";import{Q as x,a as O}from"./QBreadcrumbs-v2LnRKoW.js";import{T as $,o as A,d as C,w as m,b as t,a as l,Q as n,u as s,m as N,K as R,n as S}from"./app-dcaBrJ0A.js";import{Q as k}from"./QSelect-C-6DolNF.js";import{Q as z}from"./QForm-PvruYkDa.js";import{Q as E}from"./QPage--AueRtob.js";import{A as F}from"./Admin-BfIQrQ2P.js";import{u as j}from"./use-quasar-C5l40j-L.js";import"./QChip-FeGsgm-F.js";import"./QLayout-CYe35r64.js";import"./QMenu-BS74onJp.js";import"./rtl-DFPa-2ov.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I={class:"flex flex-inline items-center"},M={class:"row q-col-gutter-sm"},T={class:"col-xs-12 col-sm-6"},Z={class:"col-xs-12 col-sm-6"},D={class:"col-xs-12 col-sm-6"},K={class:"col-xs-12 col-sm-6"},L={class:"col-xs-12 col-sm-6"},G={class:"col-xs-12 col-sm-6"},H={class:"col-xs-12"},me=Object.assign({layout:F},{__name:"Create",props:{roles:Object},setup(B){const i=j(),e=$({name:"",phone:"",email:"",roles:[],password:"",password_confirmation:""}),P=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,U=a=>{h()},h=()=>{e.name="",e.mobile="",e.email="",e.roles=[],e.password="",e.password_confirmation=""},_=a=>{a.preventDefault(),i.loading.show(),e.post(route("user.store"),{onSuccess:()=>{i.notify({type:"positive",message:"User created successfully!"}),e.reset()},onError:o=>{i.notify({type:"negative",message:"There were errors in your submission."})},onFinish:()=>{var o;i.loading.hide(),(o=a==null?void 0:a.target)==null||o.reset()}})};return(a,o)=>(A(),C(E,{padding:""},{default:m(()=>[t("div",I,[o[12]||(o[12]=t("p",{class:"page-title"},"New User",-1)),l(q),l(O,{align:"right",gutter:"xs"},{default:m(()=>[l(x,{to:{name:"user:read"},label:"Users"}),l(x,{label:"New User"})]),_:1})]),l(z,{class:"zcard q-pa-md",onReset:U,onSubmit:_},{default:m(()=>{var d,u,p,g,w,c,f,y,b,V,v,Q;return[t("div",M,[t("div",T,[l(n,{modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).name=r),class:"my-input",dense:"",label:"Name",outlined:"",error:s(e).errors.hasOwnProperty("name"),"error-message":(u=(d=s(e).errors)==null?void 0:d.name)==null?void 0:u.toString(),onBlur:o[1]||(o[1]=r=>delete s(e).errors.name),rules:[r=>!!r||"Username is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",Z,[l(n,{modelValue:s(e).phone,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).phone=r),class:"my-input",mask:"##########",dense:"",label:"Mobile",outlined:"",error:s(e).errors.hasOwnProperty("phone"),"error-message":(g=(p=s(e).errors)==null?void 0:p.phone)==null?void 0:g.toString(),onBlur:o[3]||(o[3]=r=>delete s(e).errors.phone),rules:[r=>r.length===10||"Mobile is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",D,[l(n,{modelValue:s(e).email,"onUpdate:modelValue":o[4]||(o[4]=r=>s(e).email=r),class:"my-input",dense:"",label:"Email",outlined:"",error:s(e).errors.hasOwnProperty("email"),"error-message":(c=(w=s(e).errors)==null?void 0:w.email)==null?void 0:c.toString(),onBlur:o[5]||(o[5]=r=>delete s(e).errors.email),rules:[r=>P.test(r)||"Invalid email"]},null,8,["modelValue","error","error-message","rules"])]),t("div",K,[l(k,{modelValue:s(e).roles,"onUpdate:modelValue":o[6]||(o[6]=r=>s(e).roles=r),multiple:"","use-chips":"",options:B.roles,dense:"",class:"my-input",label:"Roles",outlined:"","option-value":"id","option-label":"name",error:s(e).errors.hasOwnProperty("roles"),"error-message":(y=(f=s(e).errors)==null?void 0:f.roles)==null?void 0:y.toString(),onBlur:o[7]||(o[7]=r=>delete s(e).errors.roles),rules:[r=>r.length>0||"roles is required"]},null,8,["modelValue","options","error","error-message","rules"])]),t("div",L,[l(n,{modelValue:s(e).password,"onUpdate:modelValue":o[8]||(o[8]=r=>s(e).password=r),type:"password",class:"my-input",dense:"",label:"Password",outlined:"",error:s(e).errors.hasOwnProperty("password"),"error-message":(V=(b=s(e).errors)==null?void 0:b.password)==null?void 0:V.toString(),onBlur:o[9]||(o[9]=r=>delete s(e).errors.password),rules:[r=>(r==null?void 0:r.length)>6||"Password must be atleast 6 digit character"]},null,8,["modelValue","error","error-message","rules"])]),t("div",G,[l(n,{modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[10]||(o[10]=r=>s(e).password_confirmation=r),type:"password",class:"my-input",dense:"",label:"Confirm Password",outlined:"",error:s(e).errors.hasOwnProperty("password_confirmation"),"error-message":(Q=(v=s(e).errors)==null?void 0:v.password_confirmation)==null?void 0:Q.toString(),onBlur:o[11]||(o[11]=r=>delete s(e).errors.password_confirmation),rules:[r=>r===s(e).password||"Confirm password doesn't match Password"]},null,8,["modelValue","error","error-message","rules"])])]),t("div",H,[l(N,{class:"q-my-md"})]),l(R,{class:"q-mt-md"},{default:m(()=>[l(S,{color:"primary",flat:"",type:"submit",label:"Save"}),l(S,{color:"negative",flat:"",type:"reset",label:"Reset"})]),_:1})]}),_:1})]),_:1}))}});export{me as default};
