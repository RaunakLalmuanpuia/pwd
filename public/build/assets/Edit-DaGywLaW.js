import{A as c}from"./ApplicantLayout-CEIN5TP5.js";import{A as p}from"./Admin-BFqidMhZ.js";import{_ as r}from"./AuthenticatedLayout-qbmOWvKK.js";import u from"./DeleteUserForm-B9N9s8UJ.js";import d from"./UpdatePasswordForm-Cn2ZpYPm.js";import f from"./UpdateProfileInformationForm-Coh4OYm9.js";import{O as _,j as x,o as m,c as h,a as e,u as g,d as y,w as l,bp as w,F as v,Z as b,b as s}from"./app-Cd5YZrNO.js";import"./QLayout-CfpDi0SV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./TextInput-p_AfB7Bs.js";import"./PrimaryButton-Bu0WK6o7.js";const A={class:"py-12"},B={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},E={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},V={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},$={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},q={__name:"Edit",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(i){const a=_().props.auth.user,n=x(()=>{if(!a||!a.roles)return r;const o=a.roles.map(t=>t.name);return o.includes("Admin")?p:o.includes("Applicant")?c:r});return(o,t)=>(m(),h(v,null,[e(g(b),{title:"Profile"}),(m(),y(w(n.value),null,{header:l(()=>t[0]||(t[0]=[s("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Profile",-1)])),default:l(()=>[s("div",A,[s("div",B,[s("div",E,[e(f,{"must-verify-email":i.mustVerifyEmail,status:i.status,class:"max-w-xl"},null,8,["must-verify-email","status"])]),s("div",V,[e(d,{class:"max-w-xl"})]),s("div",$,[e(u,{class:"max-w-xl"})])])])]),_:1}))],64))}};export{q as default};
