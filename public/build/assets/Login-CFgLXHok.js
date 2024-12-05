import{c as v,q as x,ac as _,o as n,a as w,T as h,j as c,e as d,d as o,u as t,Z as V,t as B,k as p,b as r,ag as C,v as f,a6 as $,f as q}from"./app-BT0dome_.js";import{_ as P}from"./GuestLayout-BioO19QK.js";import{_ as g,a as b,b as k}from"./TextInput-BAU6GgU5.js";import{P as N}from"./PrimaryButton-Duk_3P1m.js";import"./ApplicationLogo-D3GYLEHY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const U=["value"],L={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:s}){const m=s,i=l,e=v({get(){return i.checked},set(a){m("update:checked",a)}});return(a,u)=>x((n(),w("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":u[0]||(u[0]=y=>e.value=y),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,U)),[[_,e.value]])}},R={key:0,class:"mb-4 font-medium text-sm text-green-600"},S={class:"mt-4"},j={class:"block mt-4"},D={class:"flex items-center"},E={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const s=h({email:"",password:"",remember:!1}),m=()=>{s.post(route("login"),{onFinish:()=>s.reset("password")})};return(i,e)=>(n(),c(P,null,{default:d(()=>[o(t(V),{title:"Log in"}),l.status?(n(),w("div",R,B(l.status),1)):p("",!0),r("form",{onSubmit:q(m,["prevent"])},[r("div",null,[o(g,{for:"email",value:"Email"}),o(b,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(s).email,"onUpdate:modelValue":e[0]||(e[0]=a=>t(s).email=a),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(k,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),r("div",S,[o(g,{for:"password",value:"Password"}),o(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:t(s).password,"onUpdate:modelValue":e[1]||(e[1]=a=>t(s).password=a),required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(k,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),r("div",j,[r("label",D,[o(L,{name:"remember",checked:t(s).remember,"onUpdate:checked":e[2]||(e[2]=a=>t(s).remember=a)},null,8,["checked"]),e[3]||(e[3]=r("span",{class:"ms-2 text-sm text-gray-600"},"Remember me",-1))])]),r("div",E,[l.canResetPassword?(n(),c(t(C),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>e[4]||(e[4]=[f(" Forgot your password? ")])),_:1},8,["href"])):p("",!0),o(N,{class:$(["ms-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:d(()=>e[5]||(e[5]=[f(" Log in ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{G as default};
