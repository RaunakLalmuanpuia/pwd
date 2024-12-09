import{T as M,r as V,o as S,j as w,e as o,b as s,d as t,Q as d,u as n,h as N,i as p,v as c,a as z,l as L,t as y,F as R,g as H,aa as E,q as j,p as Q,N as U}from"./app-CLnFNOc4.js";import{Q as O,a as D,b,c as v}from"./QMarkupTable-CCxXkVX4.js";import{Q as G}from"./QForm-CBEz9XBg.js";import{Q as J}from"./QPage-DhxHqyfT.js";import{C as g}from"./ClosePopup-ahYTvXr4.js";import{A as K}from"./Admin-DUpmoHaT.js";import"./QLayout-DLfvAPOX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const W={class:"col-xs-12 col-sm-12"},X={class:"col-xs-12 col-sm-12 q-mb-md"},Y={class:"col-xs-12 col-sm-6"},Z={class:"col-xs-12 col-sm-6"},h={class:"col-xs-12 col-sm-6"},ee={class:"col-xs-12 col-sm-6"},le={class:"col-xs-12"},te={class:"col-xs-12 flex justify-between items-center"},ae={class:"col-xs-12"},se={class:"col-xs-12 col-sm-6"},ue={class:"col-xs-12"},oe={class:"col-xs-12 flex justify-center items-center q-gutter-sm"},ne={class:"flex justify-between items-center"},de={class:"flex q-gutter-sm"},ie={class:"flex justify-between items-center"},me={class:"flex q-gutter-sm"},je=Object.assign({layout:K},{__name:"Edit",props:{exam:Object},setup(A){const r=A,u=M({exam_name:r.exam.exam_name,exam_date:r.exam.exam_date,description:r.exam.description,pass_mark:r.exam.pass_mark,full_mark:r.exam.full_mark,start_at:r.exam.start_at,end_at:r.exam.end_at,active:!!r.exam.active,subjects:r.exam.subjects.map(a=>({id:a.id,subject_name:a.subject_name,exam_date:a.exam_date,start_time:a.start_time,end_time:a.end_time}))}),_=V(!1),x=V(!1),i=V({id:"",subject_name:"",exam_date:"",start_time:"",end_time:""}),m=V({id:"",subject_name:"",exam_date:"",start_time:"",end_time:""});function q(){i.value={subject_name:"",exam_date:"",start_time:"",end_time:""}}function I(){const a={id:null,subject_name:i.value.subject_name,exam_date:i.value.exam_date,start_time:i.value.start_time,end_time:i.value.end_time};u.subjects.push(a),q(),_.value=!1}function F(a){const l=u.subjects[a];m.value={...l},x.value=!0}function P(){const a=u.subjects.findIndex(l=>l.id===m.value.id);a!==-1&&(u.subjects[a]={...m.value},x.value=!1)}function T(a){u.subjects.splice(a,1)}const B=()=>{u.put(route("exams.update",r.exam.id))};function C(a){if(!a)return"";const[l,e]=a.split(":"),f=parseInt(l,10),k=f>=12;return`${f%12||12}:${e} ${k?"PM":"AM"}`}function $(a){if(!a)return"";const l=new Date(a),e={day:"2-digit",month:"long",year:"numeric"};return l.toLocaleDateString("en-IN",e)}return(a,l)=>(S(),w(J,{padding:""},{default:o(()=>[l[28]||(l[28]=s("p",{class:"page-title"},"Edit Examinations",-1)),t(G,{onSubmit:B,onReset:a.reset,class:"row q-col-gutter-sm zcard q-pa-md"},{default:o(()=>[s("div",W,[t(d,{modelValue:n(u).exam_name,"onUpdate:modelValue":l[0]||(l[0]=e=>n(u).exam_name=e),outlined:"",dense:"",class:"my-input",label:"Name of examination",rules:[e=>!!e||"Name is required"]},null,8,["modelValue","rules"])]),s("div",X,[t(d,{modelValue:n(u).description,"onUpdate:modelValue":l[1]||(l[1]=e=>n(u).description=e),type:"textarea",dense:"",outlined:"",class:"my-input",label:"Name of examination"},null,8,["modelValue"])]),s("div",Y,[t(d,{modelValue:n(u).pass_mark,"onUpdate:modelValue":l[2]||(l[2]=e=>n(u).pass_mark=e),outlined:"",dense:"",class:"my-input",label:"Pass mark",rules:[e=>!isNaN(e)||"Invalid format"]},null,8,["modelValue","rules"])]),s("div",Z,[t(d,{modelValue:n(u).full_mark,"onUpdate:modelValue":l[3]||(l[3]=e=>n(u).full_mark=e),outlined:"",dense:"",class:"my-input",label:"Full mark mark",rules:[e=>!isNaN(e)||"Invalid format"]},null,8,["modelValue","rules"])]),s("div",h,[t(d,{modelValue:n(u).start_at,"onUpdate:modelValue":l[4]||(l[4]=e=>n(u).start_at=e),type:"datetime-local",outlined:"",dense:"","stack-label":"",class:"my-input",label:"Start",rules:[e=>!!e||"Invalid Date time"]},null,8,["modelValue","rules"])]),s("div",ee,[t(d,{modelValue:n(u).end_at,"onUpdate:modelValue":l[5]||(l[5]=e=>n(u).end_at=e),type:"datetime-local","stack-label":"",outlined:"",dense:"",class:"my-input",label:"End",rules:[e=>!!e||"Invalid Date time"]},null,8,["modelValue","rules"])]),s("div",le,[t(N)]),s("div",te,[l[18]||(l[18]=s("div",{class:"text-grey-7"},"Click Add button to add paper",-1)),t(p,{onClick:l[6]||(l[6]=e=>_.value=!0),rounded:"",color:"primary",outline:"",label:"Add"})]),s("div",ae,[t(O,{flat:""},{default:o(()=>[t(D,null,{default:o(()=>[t(b,{align:"left",style:{width:"30%"}},{default:o(()=>l[19]||(l[19]=[c("Subject")])),_:1}),t(b,{align:"center",style:{width:"20%"}},{default:o(()=>l[20]||(l[20]=[c("Date")])),_:1}),t(b,{align:"center",style:{width:"20%"}},{default:o(()=>l[21]||(l[21]=[c("Start")])),_:1}),t(b,{align:"center",style:{width:"20%"}},{default:o(()=>l[22]||(l[22]=[c("End")])),_:1}),t(b,{align:"center",style:{width:"10%"}},{default:o(()=>l[23]||(l[23]=[c("Action")])),_:1})]),_:1}),(S(!0),z(R,null,L(n(u).subjects,(e,f)=>(S(),w(D,{key:f},{default:o(()=>[t(v,{align:"left"},{default:o(()=>[c(y(e==null?void 0:e.subject_name),1)]),_:2},1024),t(v,{align:"center"},{default:o(()=>[c(y($(e==null?void 0:e.exam_date)),1)]),_:2},1024),t(v,{align:"center"},{default:o(()=>[c(y(C(e==null?void 0:e.start_time)),1)]),_:2},1024),t(v,{align:"center"},{default:o(()=>[c(y(C(e==null?void 0:e.end_time)),1)]),_:2},1024),t(v,{align:"center"},{default:o(()=>[t(p,{flat:"",icon:"edit",onClick:k=>F(f)},null,8,["onClick"]),t(p,{flat:"",icon:"cancel",onClick:k=>T(f)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),s("div",se,[t(H,{modelValue:n(u).active,"onUpdate:modelValue":l[7]||(l[7]=e=>n(u).active=e),label:"Active"},null,8,["modelValue"])]),s("div",ue,[t(N)]),s("div",oe,[t(p,{type:"reset",label:"Cancel",flat:""}),t(p,{class:"q-px-lg",type:"submit",label:"Save",rounded:"",color:"primary"})])]),_:1},8,["onReset"]),t(U,{modelValue:_.value,"onUpdate:modelValue":l[12]||(l[12]=e=>_.value=e)},{default:o(()=>[t(E,{class:"q-pa-md"},{default:o(()=>[s("div",ne,[l[24]||(l[24]=s("div",{class:"ztext-lg"},"New Subject",-1)),j(t(Q,{name:"cancel",class:"cursor-pointer"},null,512),[[g]])]),l[25]||(l[25]=s("br",null,null,-1)),t(d,{modelValue:i.value.subject_name,"onUpdate:modelValue":l[8]||(l[8]=e=>i.value.subject_name=e),outlined:"",class:"my-input",rules:[e=>!!e||"Name is required"],label:"Paper Name"},null,8,["modelValue","rules"]),t(d,{modelValue:i.value.exam_date,"onUpdate:modelValue":l[9]||(l[9]=e=>i.value.exam_date=e),outlined:"",class:"my-input",rules:[e=>!!e||"Exam Date is required"],type:"date",label:"Date of Exam"},null,8,["modelValue","rules"]),t(d,{modelValue:i.value.start_time,"onUpdate:modelValue":l[10]||(l[10]=e=>i.value.start_time=e),outlined:"",type:"time",class:"my-input",rules:[e=>!!e||"Start time is required"],label:"Start At"},null,8,["modelValue","rules"]),t(d,{modelValue:i.value.end_time,"onUpdate:modelValue":l[11]||(l[11]=e=>i.value.end_time=e),outlined:"",type:"time",class:"my-input",rules:[e=>!!e||"End tim is required"],label:"End At"},null,8,["modelValue","rules"]),s("div",de,[t(p,{type:"submit",style:{"min-width":"90px"},rounded:"",color:"primary",onClick:I,label:"Add"}),j(t(p,{rounded:"",color:"negative",outline:"",label:"Reset",onClick:q},null,512),[[g]])])]),_:1})]),_:1},8,["modelValue"]),t(U,{modelValue:x.value,"onUpdate:modelValue":l[17]||(l[17]=e=>x.value=e)},{default:o(()=>[t(E,{class:"q-pa-md"},{default:o(()=>[s("div",ie,[l[26]||(l[26]=s("div",{class:"ztext-lg"},"Edit Subject",-1)),j(t(Q,{name:"cancel",class:"cursor-pointer"},null,512),[[g]])]),l[27]||(l[27]=s("br",null,null,-1)),t(d,{modelValue:m.value.subject_name,"onUpdate:modelValue":l[13]||(l[13]=e=>m.value.subject_name=e),outlined:"",class:"my-input",rules:[e=>!!e||"Name is required"],label:"Paper Name"},null,8,["modelValue","rules"]),t(d,{modelValue:m.value.exam_date,"onUpdate:modelValue":l[14]||(l[14]=e=>m.value.exam_date=e),outlined:"",class:"my-input",rules:[e=>!!e||"Exam Date is required"],type:"date",label:"Date of Exam"},null,8,["modelValue","rules"]),t(d,{modelValue:m.value.start_time,"onUpdate:modelValue":l[15]||(l[15]=e=>m.value.start_time=e),outlined:"",type:"time",class:"my-input",rules:[e=>!!e||"Start time is required"],label:"Start At"},null,8,["modelValue","rules"]),t(d,{modelValue:m.value.end_time,"onUpdate:modelValue":l[16]||(l[16]=e=>m.value.end_time=e),outlined:"",type:"time",class:"my-input",rules:[e=>!!e||"End time is required"],label:"End At"},null,8,["modelValue","rules"]),s("div",me,[t(p,{type:"submit",style:{"min-width":"90px"},rounded:"",color:"primary",onClick:P,label:"Save Changes"}),j(t(p,{rounded:"",color:"negative",outline:"",label:"Cancel",onClick:a.resetEditSubjectForm},null,8,["onClick"]),[[g]])])]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{je as default};