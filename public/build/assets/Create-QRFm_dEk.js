import{Q as v}from"./QSpace-obZ1CS7b.js";import{Q as f,a as Q}from"./QBreadcrumbs-B1dsszlg.js";import{T as x,o as V,d as C,w as l,b as t,a as s,Q as n,u as a,l as B,m as w,a2 as S,n as y}from"./app-ahP4YWLO.js";import{Q as _}from"./QForm-Bb2GUsnQ.js";import{Q as q}from"./QPage-DSGv5ZHW.js";import{A as N}from"./Admin-DB3rvOWu.js";import"./QLayout-3ARnjGrK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={class:"flex flex-inline items-center"},A={class:"row q-col-gutter-sm"},O={class:"col-xs-12"},P={class:"col-xs-12"},R={class:"col-xs-12"},U={class:"col-xs-12"},L={class:"col-xs-12"},H=Object.assign({layout:N},{__name:"Create",setup(T){const e=x({name:"",location:"",capacity:"",available:!1}),b=()=>{e.post(route("exam_center.store"),{})};return(g,r)=>(V(),C(q,{padding:""},{default:l(()=>[t("div",k,[r[7]||(r[7]=t("p",{class:"page-title"},"New Center",-1)),s(v),s(Q,{align:"right",gutter:"xs"},{default:l(()=>[s(f,{to:{name:"exam-center:read"},label:"Test center"}),s(f,{label:"New center"})]),_:1})]),s(_,{class:"zcard q-pa-md",ref:"formRef",onReset:g.resetForm,onSubmit:b},{default:l(()=>{var i,m,d,u,p,c;return[t("div",A,[r[8]||(r[8]=t("div",{class:"col-xs-12 primary-title"},"Test center detail",-1)),t("div",O,[s(n,{modelValue:a(e).name,"onUpdate:modelValue":r[0]||(r[0]=o=>a(e).name=o),class:"my-input",dense:"",label:"Center Name",outlined:"",error:a(e).errors.hasOwnProperty("name"),"error-message":(m=(i=a(e).errors)==null?void 0:i.name)==null?void 0:m.toString(),onBlur:r[1]||(r[1]=o=>delete a(e).errors.name),rules:[o=>!!o||"Center name is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",P,[s(n,{modelValue:a(e).location,"onUpdate:modelValue":r[2]||(r[2]=o=>a(e).location=o),class:"my-input",dense:"",label:"Center Location",outlined:"",error:a(e).errors.hasOwnProperty("location"),"error-message":(u=(d=a(e).errors)==null?void 0:d.location)==null?void 0:u.toString(),onBlur:r[3]||(r[3]=o=>delete a(e).errors.location),rules:[o=>!!o||"Center Location is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",R,[s(n,{modelValue:a(e).capacity,"onUpdate:modelValue":r[4]||(r[4]=o=>a(e).capacity=o),mask:"#####",dense:"",class:"my-input",label:"Capacity",outlined:"",error:a(e).errors.hasOwnProperty("capacity"),"error-message":(c=(p=a(e).errors)==null?void 0:p.capacity)==null?void 0:c.toString(),onBlur:r[5]||(r[5]=o=>delete a(e).errors.capacity),rules:[o=>Number(o)||"Capacity is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",U,[s(B,{modelValue:a(e).available,"onUpdate:modelValue":r[6]||(r[6]=o=>a(e).available=o),label:"Availability"},null,8,["modelValue"])])]),t("div",L,[s(w,{class:"q-my-md"})]),s(S,{class:"q-mt-md"},{default:l(()=>[s(y,{color:"primary",flat:"",type:"submit",label:"Save"}),s(y,{color:"negative",flat:"",type:"reset",label:"Reset"})]),_:1})]}),_:1},8,["onReset"])]),_:1}))}});export{H as default};