import{r as p,T as w,o as m,c as g,b as r,a as o,u as l,n as u,w as t,v as b,aa as x,a0 as v,a1 as f,Q as k,X as V,d as C,g as Q,t as _,e as D,a2 as B}from"./app-D4OQzegt.js";import{Q as U}from"./QBanner-CXYyDDl3.js";const A={class:"space-y-6"},I={__name:"DeleteUserForm",setup(q){const n=p(!1),d=p(null),e=w({password:""}),y=()=>{n.value=!0,x(()=>d.value.focus())},c=()=>{e.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>i(),onError:()=>d.value.focus(),onFinish:()=>e.reset()})},i=()=>{n.value=!1,e.reset()};return(N,a)=>(m(),g("section",A,[a[3]||(a[3]=r("header",null,[r("h2",{class:"text-lg font-medium text-gray-900"},"Delete Account"),r("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1)),o(u,{class:"q-px-xl",onClick:y,disabled:l(e).processing,color:"secondary",label:"Delete Account",rounded:"",type:"submit"},null,8,["disabled"]),o(b,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=s=>n.value=s)},{default:t(()=>[o(v,null,{default:t(()=>[o(f,null,{default:t(()=>a[2]||(a[2]=[r("div",{class:"text-h6"}," Are you sure you want to delete your account? ",-1),r("div",{class:"q-mt-md"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1)])),_:1}),o(f,null,{default:t(()=>[o(k,{modelValue:l(e).password,"onUpdate:modelValue":a[0]||(a[0]=s=>l(e).password=s),label:"Password",type:"password",class:"q-mb-md",rules:[s=>s&&s.length>0||"Password is required"],ref_key:"passwordInput",ref:d,onKeyup:V(c,["enter"])},null,8,["modelValue","rules"]),l(e).errors.password?(m(),C(U,{key:0,color:"negative"},{default:t(()=>[Q(_(l(e).errors.password),1)]),_:1})):D("",!0)]),_:1}),o(B,null,{default:t(()=>[o(u,{flat:"",label:"Cancel",color:"secondary",onClick:i}),o(u,{flat:"",label:"Delete Account",color:"negative",loading:l(e).processing,disabled:l(e).processing,onClick:c},null,8,["loading","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{I as default};
