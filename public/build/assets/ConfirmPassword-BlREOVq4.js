import{T as l,o as n,d,w as t,a as r,u as a,Z as p,b as e,g as u,U as f,k as c}from"./app-CAJ6WP2Z.js";import{_ as w}from"./GuestLayout-CT3lF7Xw.js";import{_,a as b,b as g}from"./TextInput-Bzbl6Hiz.js";import{P as x}from"./PrimaryButton-D69Xcy5H.js";import"./ApplicationLogo-DiOcstoc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={class:"flex justify-end mt-4"},T={__name:"ConfirmPassword",setup(P){const s=l({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(V,o)=>(n(),d(w,null,{default:t(()=>[r(a(p),{title:"Confirm Password"}),o[2]||(o[2]=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1)),e("form",{onSubmit:c(i,["prevent"])},[e("div",null,[r(_,{for:"password",value:"Password"}),r(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":o[0]||(o[0]=m=>a(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),r(g,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",y,[r(x,{class:f(["ms-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>o[1]||(o[1]=[u(" Confirm ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{T as default};