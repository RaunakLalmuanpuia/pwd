import{T as u,o as r,d,w as i,a as t,u as a,Z as c,b as o,c as f,t as p,e as w,g as _,$ as g,k as y}from"./app-tAb7HeJo.js";import{_ as b,P as k}from"./PrimaryButton-Bu1KB6GS.js";import{_ as x,a as V,b as v}from"./TextInput-De8rau6V.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={key:0,class:"mb-4 font-medium text-sm text-green-600"},N={class:"flex items-center justify-end mt-4"},S={__name:"ForgotPassword",props:{status:{type:String}},setup(l){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(P,s)=>(r(),d(b,null,{default:i(()=>[t(a(c),{title:"Forgot Password"}),s[2]||(s[2]=o("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1)),l.status?(r(),f("div",B,p(l.status),1)):w("",!0),o("form",{onSubmit:y(m,["prevent"])},[o("div",null,[t(x,{for:"email",value:"Email"}),t(V,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a(e).email,"onUpdate:modelValue":s[0]||(s[0]=n=>a(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(v,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),o("div",N,[t(k,{class:g({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:i(()=>s[1]||(s[1]=[_(" Email Password Reset Link ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{S as default};