import{T as l,o as n,j as d,e as t,d as e,u as a,Z as p,b as r,v as u,a6 as f,f as c}from"./app-BT0dome_.js";import{_ as w}from"./GuestLayout-BioO19QK.js";import{_,a as b,b as x}from"./TextInput-BAU6GgU5.js";import{P as g}from"./PrimaryButton-Duk_3P1m.js";import"./ApplicationLogo-D3GYLEHY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={class:"flex justify-end mt-4"},T={__name:"ConfirmPassword",setup(y){const s=l({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(P,o)=>(n(),d(w,null,{default:t(()=>[e(a(p),{title:"Confirm Password"}),o[2]||(o[2]=r("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1)),r("form",{onSubmit:c(i,["prevent"])},[r("div",null,[e(_,{for:"password",value:"Password"}),e(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":o[0]||(o[0]=m=>a(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),e(x,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),r("div",v,[e(g,{class:f(["ms-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>o[1]||(o[1]=[u(" Confirm ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{T as default};
