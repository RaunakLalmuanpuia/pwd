import{m as g,T as x,o as r,a as n,b as s,d as o,u as t,a5 as m,e as u,p as V,b4 as b,k as c,D as k,f as _,aw as w}from"./app-DSYfDdqw.js";import{_ as p,a as v,b as y}from"./TextInput-BacoiqmN.js";import{P as h}from"./PrimaryButton-CbSAGeaM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={key:0},B={class:"text-sm mt-2 text-gray-800"},N={class:"mt-2 font-medium text-sm text-green-600"},E={class:"flex items-center gap-4"},P={key:0,class:"text-sm text-gray-600"},q={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(d){const l=g().props.auth.user,a=x({name:l.name,email:l.email});return(f,e)=>(r(),n("section",null,[e[6]||(e[6]=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),s("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1)),s("form",{onSubmit:e[2]||(e[2]=_(i=>t(a).patch(f.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[o(p,{for:"name",value:"Name"}),o(v,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t(a).name,"onUpdate:modelValue":e[0]||(e[0]=i=>t(a).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(y,{class:"mt-2",message:t(a).errors.name},null,8,["message"])]),s("div",null,[o(p,{for:"email",value:"Email"}),o(v,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(a).email,"onUpdate:modelValue":e[1]||(e[1]=i=>t(a).email=i),required:"",autocomplete:"username"},null,8,["modelValue"]),o(y,{class:"mt-2",message:t(a).errors.email},null,8,["message"])]),d.mustVerifyEmail&&t(l).email_verified_at===null?(r(),n("div",S,[s("p",B,[e[4]||(e[4]=m(" Your email address is unverified. ")),o(t(w),{href:f.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:u(()=>e[3]||(e[3]=[m(" Click here to re-send the verification email. ")])),_:1},8,["href"])]),V(s("div",N," A new verification link has been sent to your email address. ",512),[[b,d.status==="verification-link-sent"]])])):c("",!0),s("div",E,[o(h,{disabled:t(a).processing},{default:u(()=>e[5]||(e[5]=[m("Save")])),_:1},8,["disabled"]),o(k,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:u(()=>[t(a).recentlySuccessful?(r(),n("p",P,"Saved.")):c("",!0)]),_:1})])],32)]))}};export{q as default};
