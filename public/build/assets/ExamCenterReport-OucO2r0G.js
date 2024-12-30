import{d as N,a as y,c as k}from"./QLayout-JWWl6beK.js";import{Q as R}from"./QTabs-BTawdUKC.js";import{Q as p}from"./QSelect-Dg7pEaj8.js";import{r as v,O as T,T as D,o as r,c as b,a as o,w as n,F as P,W as w,d as f,g as C,Y as E,b as s,u as d,e as S,m as B,n as $,V as q,s as I,ai as Q}from"./app-C12-dnAq.js";import{Q as J}from"./QForm-Bv5gc734.js";import{Q as O}from"./QPage-BosfxYsi.js";import{A as _}from"./Admin-xNXOEYA_.js";import{u as L}from"./use-quasar-CXXkpYFi.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./rtl-DFPa-2ov.js";import"./QChip-Cm1h6iMi.js";import"./QMenu-CXADbK3n.js";const z={class:"col-xs-12 col-sm-6"},G={class:"col-xs-12 col-sm-6"},X={key:0},W={key:2},Y={key:0,class:"col-xs-12 col-sm-6"},H={key:0},K={class:"col-xs-12 col-sm-6"},Z={class:"col-xs-12 col-sm-6"},h={class:"col-xs-12 col-sm-6"},ee={class:"col-xs-12"},te={class:"col-xs-12"},le=Object.assign({layout:_},{__name:"ExamCenterReport",props:["departments","jobs","exams","exam_center"],setup(x){v("mails");const c=L();T();const a=D({status:"",state:"",district:"",gender:"",exam_center:null,posts:"",department:""}),u=v(null),i=v(null),g=v([]),V=v([]),j=()=>{i.value=null,V.value=[],u.value?q.get(route("report.exam_center"),{department:u.value.value},{preserveState:!0,replace:!0,onSuccess:l=>{g.value=l.props.jobs}}):g.value=[]},U=()=>{a.exam=null,i.value?q.get(route("report.exam_center"),{job_id:i.value.value},{preserveState:!0,replace:!0,onSuccess:l=>{V.value=l.props.exams}}):V.value=[]},A=[{value:"Male",label:"Male"},{value:"Female",label:"Female"}],F=()=>{c.loading.show(),console.log(i),a.posts=i,a.department=u,(!u||!a.posts)&&(c.notify({type:"warning",message:u?"No Job Avaliable for the selected department.":"Please select a department.",position:"bottom"}),c.loading.hide());const l=route("report.exam_center.download");I.post(l,a,{responseType:"blob"}).then(e=>{const t=window.URL.createObjectURL(new Blob([e.data])),m=document.createElement("a");m.href=t,m.setAttribute("download",Date.now()+".xlsx"),m.click()}).catch(e=>{var t,m;c.notify({type:"negative",message:((m=(t=e.response)==null?void 0:t.data)==null?void 0:m.message)||"Failed to download file"})}).finally(()=>{c.loading.hide()})};return(l,e)=>(r(),b(P,null,[o(N,{padding:"",class:"card justify-center"},{default:n(()=>[o(R,{padding:""},{default:n(()=>[w((r(),f(k,{clickable:"",active:l.route().current()==="report.submitted",class:E({"q-item--active":l.route().current()==="report.submitted"}),onClick:e[0]||(e[0]=t=>l.$inertia.get(l.route("report.submitted")))},{default:n(()=>[o(y,null,{default:n(()=>e[9]||(e[9]=[C(" APPLICATIONS ")])),_:1})]),_:1},8,["active","class"])),[[Q]]),w((r(),f(k,{clickable:"",class:E({"q-item--active":l.route().current()==="report.writtenExam"}),active:l.route().current()==="report.writtenExam",onClick:e[1]||(e[1]=t=>l.$inertia.get(l.route("report.writtenExam")))},{default:n(()=>[o(y,null,{default:n(()=>e[10]||(e[10]=[C(" EXAM REPORT ")])),_:1})]),_:1},8,["class","active"])),[[Q]]),w((r(),f(k,{clickable:"",class:E({"q-item--active":l.route().current()==="report.exam_center"}),active:l.route().current()==="report.exam_center",onClick:e[2]||(e[2]=t=>l.$inertia.get(l.route("report.exam_center")))},{default:n(()=>[o(y,null,{default:n(()=>e[11]||(e[11]=[C(" EXAM CENTER ")])),_:1})]),_:1},8,["class","active"])),[[Q]])]),_:1})]),_:1}),o(O,{padding:""},{default:n(()=>[e[14]||(e[14]=s("p",{class:"q-ma-none page-title py-3"}," Exam Center ",-1)),e[15]||(e[15]=s("br",null,null,-1)),o(J,{onSubmit:F,class:"row q-col-gutter-md q-pa-md"},{default:n(()=>[s("div",z,[o(p,{modelValue:u.value,"onUpdate:modelValue":[e[3]||(e[3]=t=>u.value=t),j],outlined:"",dense:"",options:x.departments,clearable:"",label:"Select Department",rules:[t=>!!t||"Department is required"]},null,8,["modelValue","options","rules"])]),s("div",G,[u.value?g.value.length>0?(r(),f(p,{key:1,modelValue:i.value,"onUpdate:modelValue":[e[4]||(e[4]=t=>i.value=t),U],outlined:"",dense:"",clearable:"",options:g.value,label:"Select Job",rules:[t=>!!t||"Job is required"]},null,8,["modelValue","options","rules"])):(r(),b("p",W,"No jobs available for the selected department.")):(r(),b("p",X,"Please select a department to see jobs."))]),i.value?(r(),b("div",Y,[i.value?x.exam_center.length>0?(r(),f(p,{key:1,modelValue:d(a).exam_center,"onUpdate:modelValue":e[5]||(e[5]=t=>d(a).exam_center=t),outlined:"",dense:"",clearable:"",options:x.exam_center,label:"Select Exam Center",rules:[t=>!!t||"Exam Center is required"]},null,8,["modelValue","options","rules"])):S("",!0):(r(),b("p",H,"Please select a job to see exams center."))])):S("",!0),e[12]||(e[12]=s("div",{class:"col-xs-12 col-sm-6"},null,-1)),e[13]||(e[13]=s("div",{class:"col-xs-12"},[s("p",{class:"ztext q-ma-none"},"optional")],-1)),s("div",K,[o(p,{modelValue:d(a).state,"onUpdate:modelValue":[e[6]||(e[6]=t=>d(a).state=t),l.onStateChange],outlined:"",class:"my-input",dense:"",options:l.states,clearable:"",label:"State"},null,8,["modelValue","onUpdate:modelValue","options"])]),s("div",Z,[o(p,{modelValue:d(a).district,"onUpdate:modelValue":e[7]||(e[7]=t=>d(a).district=t),outlined:"",class:"my-input",dense:"",options:l.districts,clearable:"",label:"District"},null,8,["modelValue","options"])]),s("div",h,[o(p,{modelValue:d(a).gender,"onUpdate:modelValue":e[8]||(e[8]=t=>d(a).gender=t),outlined:"",class:"my-input",dense:"",options:A,clearable:"",label:"Gender"},null,8,["modelValue"])]),s("div",ee,[o(B)]),s("div",te,[o($,{type:"submit",color:"primary",rounded:"",label:"Generate"})])]),_:1})]),_:1})],64))}}),be=M(le,[["__scopeId","data-v-0a2d17f0"]]);export{be as default};
