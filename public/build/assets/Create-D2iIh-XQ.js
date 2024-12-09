import{Q as v,a as b,b as x}from"./QBreadcrumbs-Dk9YcsS2.js";import{T as Q,o as V,j as C,e as l,b as t,d as o,Q as n,u as a,g as B,h as S,ac as _,i as y}from"./app-CLnFNOc4.js";import{Q as q}from"./QForm-CBEz9XBg.js";import{Q as w}from"./QPage-DhxHqyfT.js";import{A as N}from"./Admin-DUpmoHaT.js";import"./QLayout-DLfvAPOX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={class:"flex flex-inline items-center"},A={class:"row q-col-gutter-sm"},O={class:"col-xs-12"},P={class:"col-xs-12"},R={class:"col-xs-12"},U={class:"col-xs-12"},L={class:"col-xs-12"},G=Object.assign({layout:N},{__name:"Create",setup(T){const e=Q({name:"",location:"",capacity:"",available:!1}),f=()=>{e.post(route("exam_center.store"),{})};return(g,r)=>(V(),C(w,{padding:""},{default:l(()=>[t("div",k,[r[7]||(r[7]=t("p",{class:"page-title"},"New Center",-1)),o(v),o(x,{align:"right",gutter:"xs"},{default:l(()=>[o(b,{to:{name:"exam-center:read"},label:"Test center"}),o(b,{label:"New center"})]),_:1})]),o(q,{class:"zcard q-pa-md",ref:"formRef",onReset:g.resetForm,onSubmit:f},{default:l(()=>{var i,m,d,u,c,p;return[t("div",A,[r[8]||(r[8]=t("div",{class:"col-xs-12 primary-title"},"Test center detail",-1)),t("div",O,[o(n,{modelValue:a(e).name,"onUpdate:modelValue":r[0]||(r[0]=s=>a(e).name=s),class:"my-input",dense:"",label:"Center Name",outlined:"",error:a(e).errors.hasOwnProperty("name"),"error-message":(m=(i=a(e).errors)==null?void 0:i.name)==null?void 0:m.toString(),onBlur:r[1]||(r[1]=s=>delete a(e).errors.name),rules:[s=>!!s||"Center name is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",P,[o(n,{modelValue:a(e).location,"onUpdate:modelValue":r[2]||(r[2]=s=>a(e).location=s),class:"my-input",dense:"",label:"Center Location",outlined:"",error:a(e).errors.hasOwnProperty("location"),"error-message":(u=(d=a(e).errors)==null?void 0:d.location)==null?void 0:u.toString(),onBlur:r[3]||(r[3]=s=>delete a(e).errors.location),rules:[s=>!!s||"Center Location is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",R,[o(n,{modelValue:a(e).capacity,"onUpdate:modelValue":r[4]||(r[4]=s=>a(e).capacity=s),mask:"#####",dense:"",class:"my-input",label:"Capacity",outlined:"",error:a(e).errors.hasOwnProperty("capacity"),"error-message":(p=(c=a(e).errors)==null?void 0:c.capacity)==null?void 0:p.toString(),onBlur:r[5]||(r[5]=s=>delete a(e).errors.capacity),rules:[s=>Number(s)||"Capacity is required"]},null,8,["modelValue","error","error-message","rules"])]),t("div",U,[o(B,{modelValue:a(e).available,"onUpdate:modelValue":r[6]||(r[6]=s=>a(e).available=s),label:"Availability"},null,8,["modelValue"])])]),t("div",L,[o(S,{class:"q-my-md"})]),o(_,{class:"q-mt-md"},{default:l(()=>[o(y,{color:"primary",flat:"",type:"submit",label:"Save"}),o(y,{color:"negative",flat:"",type:"reset",label:"Reset"})]),_:1})]}),_:1},8,["onReset"])]),_:1}))}});export{G as default};