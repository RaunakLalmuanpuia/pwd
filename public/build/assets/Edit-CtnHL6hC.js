import{Q as Ve}from"./QSpace-BavW0qO5.js";import{Q as ge,a as xe}from"./QBreadcrumbs-O11KNkku.js";import{S as Se,T as we,r as Pe,o as c,d as qe,w as u,b as s,a as t,Q as i,u as o,m as y,c as _e,p as Be,Y as ce,_ as Ue,bp as Qe,n as g,F as Oe,g as Ce,y as ye,a2 as $e}from"./app-tAb7HeJo.js";import{Q as _}from"./QSelect-BWtcxeSM.js";import{Q as De}from"./QForm-DWmn4_Hf.js";import{Q as Ae}from"./QPage-12zwgBUH.js";import{A as Ne}from"./Admin-Dd5DeIHf.js";import{u as ze}from"./use-quasar-YQ5_zhr6.js";import"./QChip-DgZWuRaJ.js";import"./QLayout-C-aK8GLB.js";import"./QMenu-hxlzhuYd.js";import"./rtl-DFPa-2ov.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ke={class:"flex flex-inline items-center"},Fe={class:"row q-col-gutter-sm"},Le={class:"col-xs-12"},Me={class:"col-xs-12"},Re={class:"col-xs-12"},je={class:"col-xs-12"},Ee={class:"col-xs-12"},Ge={class:"col-xs-12"},Te={class:"col-xs-12"},Ie={class:"col-xs-12"},Je={class:"col-xs-12"},He={class:"col-xs-12"},Xe={class:"col-xs-12"},Ye={class:"col-xs-12"},Ke={class:"col-xs-12"},We={class:"col-xs-12"},Ze={class:"col-xs-12"},he={class:"col-xs-12"},er=["onUpdate:modelValue"],rr=["onUpdate:modelValue"],or={class:"col-xs-12"},lr={class:"col-xs-12"},sr={class:"col-xs-12"},tr={class:"col-xs-12"},vr=Object.assign({layout:Ne},{__name:"Edit",props:["data","current_department","departments"],setup(f){var v,V,x,S,w,P,q,B,U,Q,O,C,$,D,A,N,z,k;const b=ze(),a=f;Se({submitting:!1});const e=we({post_name:(v=a.data)==null?void 0:v.post_name,code:(V=a.data)==null?void 0:V.code,category:(x=a.data)==null?void 0:x.category,departments:{label:(S=a==null?void 0:a.current_department)==null?void 0:S.name,value:(w=a==null?void 0:a.current_department)==null?void 0:w.id},no_of_post:(P=a.data)==null?void 0:P.no_of_post,salary:(q=a.data)==null?void 0:q.salary,upper_age_limit:(B=a.data)==null?void 0:B.upper_age_limit,lower_age_limit:(U=a.data)==null?void 0:U.lower_age_limit,age_relaxation:(Q=a.data)==null?void 0:Q.age_relaxation,application_fee_general:(O=a.data)==null?void 0:O.application_fee_general,application_fee_other:(C=a.data)==null?void 0:C.application_fee_other,qualification:($=a.data)==null?void 0:$.qualification,application_deadline:(D=a.data)==null?void 0:D.application_deadline,active:(A=a.data)==null?void 0:A.active,description:(N=a.data)==null?void 0:N.description,mizo_proficiency:(z=a.data)==null?void 0:z.mizo_proficiency,documents:((k=a.data)==null?void 0:k.documents.map(n=>({id:n.id,job_detail_id:n.job_detail_id,name:n.document_name,description:n.document_description,is_mandatory:n.is_mandatory})))||[]});console.log(e.documents),Pe({});const fe=()=>{e.documents.push({name:"",description:"",is_mandatory:1})},be=n=>{e.documents.splice(n,1)},ve=n=>{var l;e.transform(d=>{var m;return{department_id:(m=d.departments)==null?void 0:m.value,...d}}).put(route("job.update",(l=a.data)==null?void 0:l.id),{onStart:d=>b.loading.show({message:"Updating..."}),onFinish:d=>b.loading.hide()})};return(n,l)=>(c(),qe(Ae,{padding:""},{default:u(()=>[s("div",ke,[l[31]||(l[31]=s("p",{class:"page-title"},"Edit Job profile",-1)),t(Ve),t(xe,{align:"right",gutter:"xs"},{default:u(()=>[t(ge,{to:{name:"job-profile:read"},label:"Jobs"}),t(ge,{label:"Edit "})]),_:1})]),t(De,{class:"zcard q-pa-md",onReset:n.resetForm,onSubmit:ve},{default:u(()=>{var d,m,F,L,M,R,j,E,G,T,I,J,H,X,Y,K,W,Z,h,ee,re,oe,le,se,te,ae,ie,ne,de,me,ue;return[s("div",Fe,[l[35]||(l[35]=s("div",{class:"col-xs-12 primary-title q-my-md"},"Job Profile",-1)),s("div",Le,[t(i,{modelValue:o(e).code,"onUpdate:modelValue":l[0]||(l[0]=r=>o(e).code=r),class:"my-input",dense:"",label:"Code",outlined:"",error:o(e).errors.hasOwnProperty("code"),"error-message":(m=(d=o(e).errors)==null?void 0:d.code)==null?void 0:m.toString(),onBlur:l[1]||(l[1]=r=>delete o(e).errors.code),rules:[r=>!!r||"Code is required"]},null,8,["modelValue","error","error-message","rules"])]),s("div",Me,[t(i,{modelValue:o(e).post_name,"onUpdate:modelValue":l[2]||(l[2]=r=>o(e).post_name=r),class:"my-input",dense:"",label:"Name",outlined:"",error:o(e).errors.hasOwnProperty("post_name"),"error-message":(L=(F=o(e).errors)==null?void 0:F.post_name)==null?void 0:L.toString(),onBlur:l[3]||(l[3]=r=>delete o(e).errors.post_name),rules:[r=>!!r||"Name is required"]},null,8,["modelValue","error","error-message","rules"])]),s("div",Re,[t(_,{modelValue:o(e).departments,"onUpdate:modelValue":l[4]||(l[4]=r=>o(e).departments=r),clearable:"",error:!!((M=o(e).errors)!=null&&M.departments),"error-message":(j=(R=o(e).errors)==null?void 0:R.departments)==null?void 0:j.toString(),options:f.departments,"bg-color":"white",label:"Department","no-error-icon":"",outlined:"","option-value":"value","option-label":"label"},null,8,["modelValue","error","error-message","options"])]),s("div",je,[t(_,{modelValue:o(e).category,"onUpdate:modelValue":l[5]||(l[5]=r=>o(e).category=r),class:"my-input",options:["A","B","C","D"],dense:"",label:"Group",outlined:"",error:o(e).errors.hasOwnProperty("category"),"error-message":(G=(E=o(e).errors)==null?void 0:E.category)==null?void 0:G.toString(),onBlur:l[6]||(l[6]=r=>delete o(e).errors.category),rules:[r=>!!r||"Group is required"]},null,8,["modelValue","error","error-message","rules"])]),s("div",Ee,[t(i,{modelValue:o(e).description,"onUpdate:modelValue":l[7]||(l[7]=r=>o(e).description=r),class:"my-input",dense:"",label:"Description",outlined:"",error:o(e).errors.hasOwnProperty("description"),"error-message":(I=(T=o(e).errors)==null?void 0:T.description)==null?void 0:I.toString(),onBlur:l[8]||(l[8]=r=>delete o(e).errors.description),rules:[r=>!!r||"Description is required"]},null,8,["modelValue","error","error-message","rules"])]),s("div",Ge,[t(i,{modelValue:o(e).salary,"onUpdate:modelValue":l[9]||(l[9]=r=>o(e).salary=r),class:"my-input",dense:"",label:"Salary",outlined:"",error:o(e).errors.hasOwnProperty("salary"),"error-message":(H=(J=o(e).errors)==null?void 0:J.salary)==null?void 0:H.toString(),onBlur:l[10]||(l[10]=r=>delete o(e).errors.salary),rules:[r=>!!r||"Salary is required"]},null,8,["modelValue","error","error-message","rules"])]),s("div",Te,[t(i,{modelValue:o(e).no_of_post,"onUpdate:modelValue":l[11]||(l[11]=r=>o(e).no_of_post=r),class:"my-input",dense:"",label:"POST",outlined:"",error:o(e).errors.hasOwnProperty("no_of_post"),"error-message":(Y=(X=o(e).errors)==null?void 0:X.no_of_post)==null?void 0:Y.toString(),onBlur:l[12]||(l[12]=r=>delete o(e).errors.no_of_post),rules:[r=>Number(r)||"Post must be number"]},null,8,["modelValue","error","error-message","rules"])]),s("div",Ie,[t(i,{modelValue:o(e).application_deadline,"onUpdate:modelValue":l[13]||(l[13]=r=>o(e).application_deadline=r),class:"my-input",dense:"",type:"date",label:"Application Deadline",outlined:"",error:o(e).errors.hasOwnProperty("application_deadline"),"error-message":(W=(K=o(e).errors)==null?void 0:K.application_deadline)==null?void 0:W.toString(),onBlur:l[14]||(l[14]=r=>delete o(e).errors.application_deadline),rules:[r=>!!r||"Deadline is required"]},null,8,["modelValue","error","error-message","rules"])]),s("div",Je,[t(i,{modelValue:o(e).upper_age_limit,"onUpdate:modelValue":l[15]||(l[15]=r=>o(e).upper_age_limit=r),class:"my-input",dense:"",label:"Upper Age Limit",outlined:"",error:o(e).errors.hasOwnProperty("upper_age_limit"),"error-message":(h=(Z=o(e).errors)==null?void 0:Z.upper_age_limit)==null?void 0:h.toString(),onBlur:l[16]||(l[16]=r=>delete o(e).errors.upper_age_limit),rules:[r=>Number(r)||"Age must be number"]},null,8,["modelValue","error","error-message","rules"])]),s("div",He,[t(i,{modelValue:o(e).lower_age_limit,"onUpdate:modelValue":l[17]||(l[17]=r=>o(e).lower_age_limit=r),class:"my-input",dense:"",label:"Lower Age Limit",outlined:"",error:o(e).errors.hasOwnProperty("lower_age_limit"),"error-message":(re=(ee=o(e).errors)==null?void 0:ee.lower_age_limit)==null?void 0:re.toString(),onBlur:l[18]||(l[18]=r=>delete o(e).errors.lower_age_limit),rules:[r=>Number(r)||"Age must be number"]},null,8,["modelValue","error","error-message","rules"])]),s("div",Xe,[t(i,{modelValue:o(e).age_relaxation,"onUpdate:modelValue":l[19]||(l[19]=r=>o(e).age_relaxation=r),class:"my-input",dense:"",label:"Age Relaxation",outlined:"",error:o(e).errors.hasOwnProperty("age_relaxation"),"error-message":(le=(oe=o(e).errors)==null?void 0:oe.age_relaxation)==null?void 0:le.toString(),onBlur:l[20]||(l[20]=r=>delete o(e).errors.age_relaxation),rules:[r=>Number(r)||"Age must be number"]},null,8,["modelValue","error","error-message","rules"])]),s("div",Ye,[t(i,{modelValue:o(e).application_fee_other,"onUpdate:modelValue":l[21]||(l[21]=r=>o(e).application_fee_other=r),class:"my-input",dense:"",label:"Fee for SC/ST/OBC",outlined:"",error:o(e).errors.hasOwnProperty("application_fee_other"),"error-message":(te=(se=o(e).errors)==null?void 0:se.application_fee_other)==null?void 0:te.toString(),onBlur:l[22]||(l[22]=r=>delete o(e).errors.application_fee_other),rules:[r=>Number(r)||"Fee must be number"]},null,8,["modelValue","error","error-message","rules"])]),s("div",Ke,[t(i,{modelValue:o(e).application_fee_general,"onUpdate:modelValue":l[23]||(l[23]=r=>o(e).application_fee_general=r),class:"my-input",dense:"",label:"Fee for General",outlined:"",error:o(e).errors.hasOwnProperty("application_fee_general"),"error-message":(ie=(ae=o(e).errors)==null?void 0:ae.application_fee_general)==null?void 0:ie.toString(),onBlur:l[24]||(l[24]=r=>delete o(e).errors.application_fee_general),rules:[r=>Number(r)||"Fee must be number"]},null,8,["modelValue","error","error-message","rules"])]),s("div",We,[t(_,{modelValue:o(e).qualification,"onUpdate:modelValue":l[25]||(l[25]=r=>o(e).qualification=r),class:"my-input",options:["Class 8","HSLC","HSSLC","Graduate","Post Graduate","PhD"],dense:"",label:"Minimum Qualification",outlined:"",error:o(e).errors.hasOwnProperty("qualification"),"error-message":(de=(ne=o(e).errors)==null?void 0:ne.qualification)==null?void 0:de.toString(),onBlur:l[26]||(l[26]=r=>delete o(e).errors.qualification),rules:[r=>!!r||"Please select Qualification"]},null,8,["modelValue","error","error-message","rules"])]),s("div",Ze,[t(_,{modelValue:o(e).mizo_proficiency,"onUpdate:modelValue":l[27]||(l[27]=r=>o(e).mizo_proficiency=r),class:"my-input",options:["Class VII","Class X"],dense:"",label:"Mizo Proficiency",outlined:"",error:o(e).errors.hasOwnProperty("mizo_proficiency"),"error-message":(ue=(me=o(e).errors)==null?void 0:me.mizo_proficiency)==null?void 0:ue.toString(),onBlur:l[28]||(l[28]=r=>delete o(e).errors.mizo_proficiency),rules:[r=>!!r||"Please select Mizo Proficiency"]},null,8,["modelValue","error","error-message","rules"])]),s("div",he,[t(y,{class:"q-my-md"})]),s("div",null,[l[33]||(l[33]=s("h4",{class:"text-sm font-medium text-gray-700 mb-3"},"Required Documents",-1)),(c(!0),_e(Oe,null,Be(o(e).documents,(r,pe)=>(c(),_e("div",{key:pe,class:"flex space-x-4 items-center mb-3"},[ce(s("input",{type:"text","onUpdate:modelValue":p=>r.name=p,placeholder:"Document Name",class:"flex-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",required:""},null,8,er),[[Ue,r.name]]),ce(s("select",{"onUpdate:modelValue":p=>r.is_mandatory=p,class:"block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"},l[32]||(l[32]=[s("option",{value:"1"},"Mandatory",-1),s("option",{value:"0"},"Optional",-1)]),8,rr),[[Qe,r.is_mandatory]]),t(g,{round:"",color:"red",style:{"font-size":"12px"},onClick:p=>be(pe),icon:"delete"},null,8,["onClick"])]))),128))]),s("div",or,[t(g,{outline:"",color:"primary",onClick:fe},{default:u(()=>l[34]||(l[34]=[Ce(" Add Document ")])),_:1})]),s("div",lr,[t(y,{class:"q-my-md"})]),s("div",sr,[t(ye,{modelValue:o(e).active,"onUpdate:modelValue":l[29]||(l[29]=r=>o(e).active=r),val:1,label:"Open"},null,8,["modelValue"]),t(ye,{modelValue:o(e).active,"onUpdate:modelValue":l[30]||(l[30]=r=>o(e).active=r),val:0,label:"Closed"},null,8,["modelValue"])])]),s("div",tr,[t(y,{class:"q-my-md"})]),t($e,{class:"q-mt-md"},{default:u(()=>[t(g,{color:"primary",flat:"",type:"submit",label:"Save"}),t(g,{color:"negative",flat:"",type:"reset",label:"Reset"})]),_:1})]}),_:1},8,["onReset"])]),_:1}))}});export{vr as default};