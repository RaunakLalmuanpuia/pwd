import{Q as B}from"./QSpace-BavW0qO5.js";import{Q as v,a as S}from"./QBreadcrumbs-O11KNkku.js";import{T as q,o as w,d as O,w as n,b as o,a as s,Q as i,u as t,l as k,m as A,a2 as E,n as C}from"./app-tAb7HeJo.js";import{Q as N}from"./QForm-DWmn4_Hf.js";import{Q as P}from"./QPage-12zwgBUH.js";import{A as U}from"./Admin-Dd5DeIHf.js";import"./QLayout-C-aK8GLB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L={class:"flex flex-inline items-center"},R={class:"row q-col-gutter-sm"},T={class:"col-xs-12"},$={class:"col-xs-12"},j={class:"col-xs-12"},F={class:"col-xs-12"},z={class:"col-xs-12"},X=Object.assign({layout:U},{__name:"Edit",props:{examCenters:Object},setup(Q){var m,d,u,c;const l=Q,e=q({center_name:(m=l.examCenters)==null?void 0:m.center_name,location:(d=l.examCenters)==null?void 0:d.location,capacity:(u=l.examCenters)==null?void 0:u.capacity,available:!!((c=l.examCenters)!=null&&c.available)}),V=()=>{e.put(route("exam_center.update",l.examCenters.id),{})};return(_,r)=>(w(),O(P,{padding:""},{default:n(()=>[o("div",L,[r[7]||(r[7]=o("p",{class:"page-title"},"Edit Center",-1)),s(B),s(S,{align:"right",gutter:"xs"},{default:n(()=>[s(v,{to:{name:"exam-center:read"},label:"Test center"}),s(v,{label:"Edit center"})]),_:1})]),s(N,{class:"zcard q-pa-md",onReset:_.resetForm,onSubmit:V},{default:n(()=>{var p,b,y,x,f,g;return[o("div",R,[r[8]||(r[8]=o("div",{class:"col-xs-12 primary-title"},"Test center detail",-1)),o("div",T,[s(i,{modelValue:t(e).center_name,"onUpdate:modelValue":r[0]||(r[0]=a=>t(e).center_name=a),class:"my-input",dense:"",label:"Center Name",outlined:"",error:t(e).errors.hasOwnProperty("center_name"),"error-message":(b=(p=t(e).errors)==null?void 0:p.center_name)==null?void 0:b.toString(),onBlur:r[1]||(r[1]=a=>delete t(e).errors.center_name),rules:[a=>!!a||"Center name is required"]},null,8,["modelValue","error","error-message","rules"])]),o("div",$,[s(i,{modelValue:t(e).location,"onUpdate:modelValue":r[2]||(r[2]=a=>t(e).location=a),class:"my-input",dense:"",label:"Center Location",outlined:"",error:t(e).errors.hasOwnProperty("location"),"error-message":(x=(y=t(e).errors)==null?void 0:y.location)==null?void 0:x.toString(),onBlur:r[3]||(r[3]=a=>delete t(e).errors.location),rules:[a=>!!a||"Center Location is required"]},null,8,["modelValue","error","error-message","rules"])]),o("div",j,[s(i,{modelValue:t(e).capacity,"onUpdate:modelValue":r[4]||(r[4]=a=>t(e).capacity=a),mask:"#####",dense:"",class:"my-input",label:"Capacity",outlined:"",error:t(e).errors.hasOwnProperty("capacity"),"error-message":(g=(f=t(e).errors)==null?void 0:f.capacity)==null?void 0:g.toString(),onBlur:r[5]||(r[5]=a=>delete t(e).errors.capacity),rules:[a=>Number(a)||"Capacity is required"]},null,8,["modelValue","error","error-message","rules"])]),o("div",F,[s(k,{modelValue:t(e).available,"onUpdate:modelValue":r[6]||(r[6]=a=>t(e).available=a),label:"Availability"},null,8,["modelValue"])])]),o("div",z,[s(A,{class:"q-my-md"})]),s(E,{class:"q-mt-md"},{default:n(()=>[s(C,{color:"primary",flat:"",type:"submit",label:"Save"}),s(C,{color:"negative",flat:"",type:"reset",label:"Reset"})]),_:1})]}),_:1},8,["onReset"])]),_:1}))}});export{X as default};