import{c as x,p as v,af as _,o as n,a as w,T as h,i as c,e as d,d as a,u as t,Z as V,t as B,k as p,b as r,as as C,a5 as f,aa as $,f as P}from"./app-Aoxauc37.js";import{_ as q}from"./GuestLayout-ClRAxE4l.js";import{_ as g,a as b,b as k}from"./TextInput-izUesUHX.js";import{P as N}from"./PrimaryButton-BhDkZVxl.js";import"./ApplicationLogo-D7skw2or.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const U=["value"],L={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:s}){const i=s,m=l,e=x({get(){return m.checked},set(o){i("update:checked",o)}});return(o,u)=>v((n(),w("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":u[0]||(u[0]=y=>e.value=y),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,U)),[[_,e.value]])}},R={key:0,class:"mb-4 font-medium text-sm text-green-600"},S={class:"mt-4"},D={class:"block mt-4"},E={class:"flex items-center"},F={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const s=h({email:"",password:"",remember:!1}),i=()=>{s.post(route("login"),{onFinish:()=>s.reset("password")})};return(m,e)=>(n(),c(q,null,{default:d(()=>[a(t(V),{title:"Log in"}),l.status?(n(),w("div",R,B(l.status),1)):p("",!0),r("form",{onSubmit:P(i,["prevent"])},[r("div",null,[a(g,{for:"email",value:"Email"}),a(b,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(s).email,"onUpdate:modelValue":e[0]||(e[0]=o=>t(s).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(k,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),r("div",S,[a(g,{for:"password",value:"Password"}),a(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:t(s).password,"onUpdate:modelValue":e[1]||(e[1]=o=>t(s).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(k,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),r("div",D,[r("label",E,[a(L,{name:"remember",checked:t(s).remember,"onUpdate:checked":e[2]||(e[2]=o=>t(s).remember=o)},null,8,["checked"]),e[3]||(e[3]=r("span",{class:"ms-2 text-sm text-gray-600"},"Remember me",-1))])]),r("div",F,[l.canResetPassword?(n(),c(t(C),{key:0,href:m.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>e[4]||(e[4]=[f(" Forgot your password? ")])),_:1},8,["href"])):p("",!0),a(N,{class:$(["ms-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:d(()=>e[5]||(e[5]=[f(" Log in ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{G as default};