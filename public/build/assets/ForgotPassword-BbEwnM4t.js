import{T as u,o as r,j as d,e as i,d as a,u as t,Z as c,b as o,a as f,t as p,k as w,M as _,R as y,f as g}from"./app-CBxBqPrd.js";import{_ as b}from"./GuestLayout-DTHC_R-v.js";import{_ as k,a as x,b as V}from"./TextInput-DUS6zvmU.js";import{P as v}from"./PrimaryButton-DOjlKxIK.js";import"./ApplicationLogo-BMEW9qhb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={key:0,class:"mb-4 font-medium text-sm text-green-600"},N={class:"flex items-center justify-end mt-4"},M={__name:"ForgotPassword",props:{status:{type:String}},setup(l){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(P,s)=>(r(),d(b,null,{default:i(()=>[a(t(c),{title:"Forgot Password"}),s[2]||(s[2]=o("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1)),l.status?(r(),f("div",B,p(l.status),1)):w("",!0),o("form",{onSubmit:g(m,["prevent"])},[o("div",null,[a(k,{for:"email",value:"Email"}),a(x,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(e).email,"onUpdate:modelValue":s[0]||(s[0]=n=>t(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(V,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),o("div",N,[a(v,{class:y({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:i(()=>s[1]||(s[1]=[_(" Email Password Reset Link ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{M as default};
