import{j as v,E as h,L as _,o as d,c as y,T as V,d as f,w as l,a as o,u as t,Z as B,t as C,e as p,b as a,g as m,i as g,H as $,k as P}from"./app-dcaBrJ0A.js";import{_ as q,P as L}from"./PrimaryButton-D1a_j3Vo.js";import{_ as x,a as b,b as w}from"./TextInput-CpbFDc9R.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N=["value"],R={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(i,{emit:s}){const u=s,n=i,e=v({get(){return n.checked},set(r){u("update:checked",r)}});return(r,c)=>h((d(),y("input",{type:"checkbox",value:i.value,"onUpdate:modelValue":c[0]||(c[0]=k=>e.value=k),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,N)),[[_,e.value]])}},U={key:0,class:"mb-4 font-medium text-sm text-green-600"},E={class:"mt-4"},M={class:"block mt-4"},S={class:"flex items-center"},j={class:"flex items-center justify-end mt-4"},A={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(i){const s=V({identifier:"",password:"",remember:!1}),u=()=>{s.post(route("login"),{onFinish:()=>s.reset("password")})};return(n,e)=>(d(),f(q,null,{default:l(()=>[o(t(B),{title:"Log in"}),i.status?(d(),y("div",U,C(i.status),1)):p("",!0),a("form",{onSubmit:P(u,["prevent"])},[a("div",null,[o(x,{for:"email",value:"Email/Mobile"}),o(b,{id:"identifier",type:"text",class:"mt-1 block w-full",modelValue:t(s).identifier,"onUpdate:modelValue":e[0]||(e[0]=r=>t(s).identifier=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(w,{class:"mt-2",message:t(s).errors.identifier},null,8,["message"])]),a("div",E,[o(x,{for:"password",value:"Password"}),o(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:t(s).password,"onUpdate:modelValue":e[1]||(e[1]=r=>t(s).password=r),required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(w,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),a("div",M,[a("label",S,[o(R,{name:"remember",checked:t(s).remember,"onUpdate:checked":e[2]||(e[2]=r=>t(s).remember=r)},null,8,["checked"]),e[3]||(e[3]=a("span",{class:"ms-2 text-sm text-gray-600"},"Remember me",-1))])]),a("div",j,[o(t(g),{href:n.route("register"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-10"},{default:l(()=>e[4]||(e[4]=[m(" Register ")])),_:1},8,["href"]),i.canResetPassword?(d(),f(t(g),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:l(()=>e[5]||(e[5]=[m(" Forgot your password? ")])),_:1},8,["href"])):p("",!0),o(L,{class:$(["ms-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:l(()=>e[6]||(e[6]=[m(" Log in ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{A as default};
