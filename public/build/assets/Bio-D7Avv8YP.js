import{r as P,x as Ee,T as He,j as Ce,o as i,c as n,a,u as r,w as v,F as Le,Z as Fe,b as s,Q as d,e as u,m as h,y as Ae,t as Re,z as Ne,n as _}from"./app-tAb7HeJo.js";import{Q as c}from"./QSelect-BWtcxeSM.js";import{Q as f}from"./QFile-8RvC2Btd.js";import{Q as Me}from"./QImg-D-MS_rSD.js";import{Q as Te}from"./QForm-DWmn4_Hf.js";import{Q as Ye}from"./QPage-12zwgBUH.js";import{A as Ke}from"./ApplicantLayout-DLV_jTYc.js";import{_ as We}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./QChip-DgZWuRaJ.js";import"./QLayout-C-aK8GLB.js";import"./QMenu-hxlzhuYd.js";import"./rtl-DFPa-2ov.js";const Ze={class:"col-xs-12 col-sm-6"},Je={class:"col-xs-12 col-sm-6"},Xe={class:"col-xs-12 col-sm-6"},et={class:"col-xs-12 col-sm-6"},tt={class:"col-xs-12 col-sm-6"},lt={class:"col-xs-12 col-sm-6"},rt={class:"col-xs-12 col-sm-6"},st={class:"col-xs-12 col-sm-6"},at={class:"col-xs-12 col-sm-6"},ot={class:"col-xs-12 col-sm-6"},it={class:"col-xs-12 col-sm-6"},nt={key:0,class:"col-xs-12 col-sm-6"},dt={class:"col-xs-12"},ut={class:"col-xs-12 col-sm-6"},mt={key:1,class:"col-xs-12 col-sm-6"},pt={style:{display:"flex",width:"203%",gap:"1rem"}},gt={style:{flex:"1","max-width":"calc(50% - 0.5rem)"}},ct={style:{flex:"1","max-width":"calc(50% - 0.5rem)"}},yt={key:2,class:"col-xs-12 col-sm-6"},xt={style:{display:"flex",width:"203%",gap:"1rem"}},bt={style:{flex:"1","max-width":"calc(50% - 0.5rem)"}},vt={style:{flex:"1","max-width":"calc(50% - 0.5rem)"}},ft={key:3,class:"col-xs-12 col-sm-6"},Dt={style:{display:"flex",width:"203%",gap:"1rem"}},Vt={style:{flex:"1","max-width":"calc(50% - 0.5rem)"}},St={style:{flex:"1","max-width":"calc(50% - 0.5rem)"}},Pt={class:"col-xs-12"},qt={class:"col-xs-12 col-sm-12"},ht={class:"flex justify-between items-center"},_t={class:"flex q-gutter-md"},wt={key:0,class:"input-error"},Gt={class:"col-xs-12"},Ut={key:4,class:"col-xs-12 col-sm-6"},Bt={key:5,class:"col-xs-12 col-sm-6"},kt={key:6,class:"col-xs-12 col-sm-6"},Ot={key:0,class:"mt-4"},Qt={key:7,class:"col-xs-12 col-sm-6"},Ct={key:0,class:"mt-4"},At={class:"col-xs-12 flex justify-center q-mt-lg"},Nt=Object.assign({layout:Ke},{__name:"Bio",props:{existingData:Object},setup(y){var G,U,B,k,O,Q,C,A,N,M,z,j,$,I,E,H,L,F,R,T;const o=y;P(!1);const D=Ee(),t=He({name:((G=D.props.auth.user)==null?void 0:G.name)||"",phone:((U=D.props.auth.user)==null?void 0:U.phone)||"",email:((B=D.props.auth.user)==null?void 0:B.email)||"",parents_name:((k=o.existingData)==null?void 0:k.parents_name)||"",sex:((O=o.existingData)==null?void 0:O.sex)||"",date_of_birth:((Q=o.existingData)==null?void 0:Q.date_of_birth)||"",community:(C=o.existingData)!=null&&C.community?{label:o.existingData.community,value:o.existingData.community}:null,religion:(A=o.existingData)!=null&&A.religion?{label:o.existingData.religion,value:o.existingData.religion}:null,marital_status:((N=o.existingData)==null?void 0:N.marital_status)||"",nationality:(M=o.existingData)!=null&&M.nationality?{label:o.existingData.nationality,value:o.existingData.nationality}:null,qualification:((z=o.existingData)==null?void 0:z.qualification)||"",graduateDegree:((j=o.existingData)==null?void 0:j.graduateDegree)||"",graduateStream:(($=o.existingData)==null?void 0:$.graduateStream)||"",postGraduateDegree:((I=o.existingData)==null?void 0:I.postGraduateDegree)||"",postGraduateStream:((E=o.existingData)==null?void 0:E.postGraduateStream)||"",doctorateDegree:((H=o.existingData)==null?void 0:H.doctorateDegree)||"",doctorateStream:((L=o.existingData)==null?void 0:L.doctorateStream)||"",mizo_proficiency:(F=o.existingData)==null?void 0:F.mizo_proficiency,disability:(R=o.existingData)!=null&&R.disability?1:0,disability_type:((T=o.existingData)==null?void 0:T.disability_type)||"",community_attachment:null,passport_attachment:null,signature_attachment:null}),V=P(!1),S=P(!1),w=(p,e)=>{const g=p.target.files[0];g&&(t[e]=g)};Ce(()=>{var p;return((p=t.community)==null?void 0:p.value)&&t.community.value!=="General"});const ze=Ce(()=>o.existingData?"Update":"Submit"),je=[{value:"Schedule Caste",label:"Schedule Caste"},{value:"Schedule Tribe",label:"Schedule Tribe"},{value:"General",label:"General"},{value:"OBC",label:"OBC"}],$e=[{value:"Hindu",label:"Hindu"},{value:"Muslim",label:"Muslim"},{value:"Sikh",label:"Sikh"},{value:"Christian",label:"Christian"},{value:"Buddhist",label:"Buddhist"},{value:"Others",label:"Others"}],Ie=()=>{var g;t.mizo_proficiency=!!t.mizo_proficiency;const p=t.disability===1;console.log("Disability (boolean):",p);const e=o.existingData?"applicant.bio_update":"applicant.bio_store";t.post(route(e,(g=o.existingData)==null?void 0:g.id),{data:{...t,disability:p},onSuccess:m=>{var x,b;q.notify({type:"positive",message:((b=(x=m==null?void 0:m.props)==null?void 0:x.flash)==null?void 0:b.success)||"Successfully submitted!"}),t.reset()},onError:m=>{q.notify({type:"negative",message:(m==null?void 0:m.message)||"An error occurred!"})},onFinish:()=>{q.loading.hide()}})};return(p,e)=>(i(),n(Le,null,[a(r(Fe),{title:"Bio"}),a(Ye,{padding:""},{default:v(()=>[a(Te,{class:"row q-col-gutter-sm",onSubmit:Ie},{default:v(()=>{var g,m,x,b,Y,K,W,Z,J,X,ee,te,le,re,se,ae,oe,ie,ne,de,ue,me,pe,ge,ce,ye,xe,be,ve,fe,De,Ve,Se,Pe,qe,he,_e,we,Ge,Ue,Be,ke,Oe,Qe;return[e[45]||(e[45]=s("div",{class:"col-xs-12 primary-title"},"Applicant details",-1)),e[46]||(e[46]=s("div",{class:"col-xs-12"},"Applicant Information",-1)),s("div",Ze,[a(d,{modelValue:r(t).name,"onUpdate:modelValue":e[0]||(e[0]=l=>r(t).name=l),error:r(t).errors.hasOwnProperty("name"),"error-message":(m=(g=r(t).errors)==null?void 0:g.name)==null?void 0:m.toString(),rules:[l=>!!(l!=null&&l.trim())||"Applicant name is required"],class:"my-input",dense:"",disable:"","input-class":"test","item-aligned":"",label:"Applicant's Name",outlined:"",onBlur:e[1]||(e[1]=l=>delete r(t).errors.name)},null,8,["modelValue","error","error-message","rules"])]),s("div",Je,[a(d,{modelValue:r(t).email,"onUpdate:modelValue":e[2]||(e[2]=l=>r(t).email=l),error:r(t).errors.hasOwnProperty("email"),"error-message":(b=(x=r(t).errors)==null?void 0:x.email)==null?void 0:b.toString(),rules:[l=>!!(l!=null&&l.trim())||"Email is required"],disable:"",class:"my-input",dense:"","item-aligned":"",label:"Email",outlined:"",onBlur:e[3]||(e[3]=l=>delete r(t).errors.email)},null,8,["modelValue","error","error-message","rules"])]),s("div",Xe,[a(d,{modelValue:r(t).phone,"onUpdate:modelValue":e[4]||(e[4]=l=>r(t).phone=l),disable:"",rules:[l=>!!l||"Mobile No is required",l=>l.length===10||"Mobile No must be 10 digit No"],class:"my-input",dense:"","item-aligned":"",label:"Mobile No",mask:"##########",outlined:"",error:!!((Y=r(t).errors)!=null&&Y.phone),"error-message":(W=(K=r(t).errors)==null?void 0:K.phone)==null?void 0:W.toString()},null,8,["modelValue","rules","error","error-message"])]),s("div",et,[a(d,{modelValue:r(t).parents_name,"onUpdate:modelValue":e[5]||(e[5]=l=>r(t).parents_name=l),error:r(t).errors.hasOwnProperty("parents_name"),"error-message":(J=(Z=r(t).errors)==null?void 0:Z.parents_name)==null?void 0:J.toString(),rules:[l=>!!l||"Parent name is required"],class:"my-input",dense:"","item-aligned":"",label:"Parent Name",outlined:"",onBlur:e[6]||(e[6]=l=>delete r(t).errors.parents_name)},null,8,["modelValue","error","error-message","rules"])]),s("div",tt,[a(c,{modelValue:r(t).sex,"onUpdate:modelValue":e[7]||(e[7]=l=>r(t).sex=l),options:["Male","Female","Others"],rules:[l=>!!l||"Gender is required"],class:"my-input",dense:"","item-aligned":"",label:"Gender",outlined:"",error:!!((X=r(t).errors)!=null&&X.phone),"error-message":(te=(ee=r(t).errors)==null?void 0:ee.phone)==null?void 0:te.toString()},null,8,["modelValue","rules","error","error-message"])]),s("div",lt,[a(d,{modelValue:r(t).date_of_birth,"onUpdate:modelValue":e[8]||(e[8]=l=>r(t).date_of_birth=l),rules:[l=>!!l||"DOB is required"],class:"my-input",dense:"","item-aligned":"",label:"Date of Birth",outlined:"","stack-label":"",type:"date",error:r(t).errors.hasOwnProperty("date_of_birth"),"error-message":(re=(le=r(t).errors)==null?void 0:le.date_of_birth)==null?void 0:re.toString()},null,8,["modelValue","rules","error","error-message"])]),s("div",rt,[a(c,{modelValue:r(t).community,"onUpdate:modelValue":e[9]||(e[9]=l=>r(t).community=l),options:je,rules:[l=>!!l||"Category is required"],class:"my-input",dense:"","item-aligned":"",label:"Category",outlined:""},null,8,["modelValue","rules"])]),s("div",st,[a(c,{modelValue:r(t).religion,"onUpdate:modelValue":e[10]||(e[10]=l=>r(t).religion=l),options:$e,rules:[l=>!!l||"Religion is required"],class:"my-input",dense:"","item-aligned":"",label:"Religion",outlined:""},null,8,["modelValue","rules"])]),s("div",at,[a(c,{modelValue:r(t).nationality,"onUpdate:modelValue":e[11]||(e[11]=l=>r(t).nationality=l),options:[{label:"Indian",value:"Indian"},{label:"Others",value:"Others"}],rules:[l=>!!l||"Nationality is required"],class:"my-input",dense:"","item-aligned":"",label:"Nationality",outlined:""},null,8,["modelValue","rules"])]),s("div",ot,[a(c,{modelValue:r(t).marital_status,"onUpdate:modelValue":e[12]||(e[12]=l=>r(t).marital_status=l),options:["Single","Married","Divorced","Widowed"],rules:[l=>!!l||"Marital Status is required"],class:"my-input",dense:"","item-aligned":"",label:"Marital Status",outlined:""},null,8,["modelValue","rules"])]),s("div",it,[a(c,{modelValue:r(t).disability,"onUpdate:modelValue":e[13]||(e[13]=l=>r(t).disability=l),options:[{label:"Yes",value:1},{label:"No",value:0}],rules:[l=>l!==null||"Please select an option"],class:"my-input",dense:"","item-aligned":"",label:"Person With Disability",outlined:"","emit-value":"","map-options":""},null,8,["modelValue","rules"])]),r(t).disability.value===1||r(t).disability==="Yes"?(i(),n("div",nt,[a(c,{modelValue:r(t).disability_type,"onUpdate:modelValue":e[14]||(e[14]=l=>r(t).disability_type=l),options:["Hearing","Locomotor","Vision","Autism, Intellectual & Learning Disability, Mental Illness","Multiple Disability (Amongst Above)"],rules:[l=>!!l||"Please Select your disability type"],class:"my-input",dense:"","item-aligned":"",label:"Disability Type",outlined:""},null,8,["modelValue","rules"])])):u("",!0),e[47]||(e[47]=s("div",{class:"col-xs-12 col-sm-12"},null,-1)),s("div",dt,[a(h)]),e[48]||(e[48]=s("div",{class:"col-xs-12"}," Education Detail ",-1)),s("div",ut,[a(c,{modelValue:r(t).qualification,"onUpdate:modelValue":e[15]||(e[15]=l=>r(t).qualification=l),options:["Class 8","HSLC","HSSLC","Graduate","Post Graduate","Doctorate"],rules:[l=>!!l||"Qualification is required"],class:"my-input",dense:"","item-aligned":"",label:"Qualification",outlined:""},null,8,["modelValue","rules"])]),e[49]||(e[49]=s("div",{class:"col-xs-12 col-sm-6"},null,-1)),r(t).qualification==="Graduate"||r(t).qualification==="Post Graduate"||r(t).qualification==="Doctorate"?(i(),n("div",mt,[s("div",pt,[s("div",gt,[a(d,{modelValue:r(t).graduateDegree,"onUpdate:modelValue":e[16]||(e[16]=l=>r(t).graduateDegree=l),error:r(t).errors.hasOwnProperty("graduateDegree"),"error-message":(ae=(se=r(t).errors)==null?void 0:se.graduateDegree)==null?void 0:ae.toString(),rules:[l=>!!l||"Graduate Degree is required"],class:"my-input",dense:"","item-aligned":"",label:"Graduate Degree",outlined:"",onBlur:e[17]||(e[17]=l=>delete r(t).errors.graduateDegree)},null,8,["modelValue","error","error-message","rules"])]),s("div",ct,[a(d,{modelValue:r(t).graduateStream,"onUpdate:modelValue":e[18]||(e[18]=l=>r(t).graduateStream=l),error:r(t).errors.hasOwnProperty("graduateStream"),"error-message":(ie=(oe=r(t).errors)==null?void 0:oe.graduateStream)==null?void 0:ie.toString(),rules:[l=>!!l||"Graduate Stream is required"],class:"my-input",dense:"","item-aligned":"",label:"Graduate Stream",outlined:"",onBlur:e[19]||(e[19]=l=>delete r(t).errors.graduateStream)},null,8,["modelValue","error","error-message","rules"])])])])):u("",!0),e[50]||(e[50]=s("div",{class:"col-xs-12 col-sm-6"},null,-1)),r(t).qualification==="Post Graduate"||r(t).qualification==="Doctorate"?(i(),n("div",yt,[s("div",xt,[s("div",bt,[a(d,{modelValue:r(t).postGraduateDegree,"onUpdate:modelValue":e[20]||(e[20]=l=>r(t).postGraduateDegree=l),error:r(t).errors.hasOwnProperty("postGraduateDegree"),"error-message":(de=(ne=r(t).errors)==null?void 0:ne.postGraduateDegree)==null?void 0:de.toString(),rules:[l=>!!l||"Post Graduate Degree is required"],class:"my-input",dense:"","item-aligned":"",label:"Post Graduate Degree",outlined:"",onBlur:e[21]||(e[21]=l=>delete r(t).errors.postGraduateDegree)},null,8,["modelValue","error","error-message","rules"])]),s("div",vt,[a(d,{modelValue:r(t).postGraduateStream,"onUpdate:modelValue":e[22]||(e[22]=l=>r(t).postGraduateStream=l),error:r(t).errors.hasOwnProperty("postGraduateStream"),"error-message":(me=(ue=r(t).errors)==null?void 0:ue.postGraduateStream)==null?void 0:me.toString(),rules:[l=>!!l||"Post Graduate Stream is required"],class:"my-input",dense:"","item-aligned":"",label:"Post Graduate Stream",outlined:"",onBlur:e[23]||(e[23]=l=>delete r(t).errors.postGraduateStream)},null,8,["modelValue","error","error-message","rules"])])])])):u("",!0),e[51]||(e[51]=s("div",{class:"col-xs-12 col-sm-6"},null,-1)),r(t).qualification==="Doctorate"?(i(),n("div",ft,[s("div",Dt,[s("div",Vt,[a(d,{modelValue:r(t).doctorateDegree,"onUpdate:modelValue":e[24]||(e[24]=l=>r(t).doctorateDegree=l),error:r(t).errors.hasOwnProperty("doctorateDegree"),"error-message":(ge=(pe=r(t).errors)==null?void 0:pe.doctorateDegree)==null?void 0:ge.toString(),rules:[l=>!!l||"Doctorate Degree is required"],class:"my-input",dense:"","item-aligned":"",label:"Doctorate Degree",outlined:"",onBlur:e[25]||(e[25]=l=>delete r(t).errors.doctorateDegree)},null,8,["modelValue","error","error-message","rules"])]),s("div",St,[a(d,{modelValue:r(t).doctorateStream,"onUpdate:modelValue":e[26]||(e[26]=l=>r(t).doctorateStream=l),error:r(t).errors.hasOwnProperty("doctorateStream"),"error-message":(ye=(ce=r(t).errors)==null?void 0:ce.doctorateStream)==null?void 0:ye.toString(),rules:[l=>!!l||"Doctorate Stream is required"],class:"my-input",dense:"","item-aligned":"",label:"Doctorate Stream",outlined:"",onBlur:e[27]||(e[27]=l=>delete r(t).errors.parents_name)},null,8,["modelValue","error","error-message","rules"])])])])):u("",!0),e[52]||(e[52]=s("div",{class:"col-xs-12 col-sm-12"},null,-1)),s("div",Pt,[a(h)]),e[53]||(e[53]=s("div",{class:"col-xs-12"}," Mizo Language Proficiency ",-1)),s("div",qt,[s("div",ht,[e[38]||(e[38]=s("div",{class:"text-grey-6"},"Did you study MIZO language in HSLC or HIGHER",-1)),s("div",_t,[a(Ae,{modelValue:r(t).mizo_proficiency,"onUpdate:modelValue":e[28]||(e[28]=l=>r(t).mizo_proficiency=l),dense:"",val:1,label:"Yes"},null,8,["modelValue"]),a(Ae,{modelValue:r(t).mizo_proficiency,"onUpdate:modelValue":e[29]||(e[29]=l=>r(t).mizo_proficiency=l),dense:"",val:0,label:"No"},null,8,["modelValue"]),r(t).errors.mizo_proficiency?(i(),n("div",wt,Re(r(t).errors.mizo_proficiency),1)):u("",!0)])])]),s("div",Gt,[a(h)]),e[54]||(e[54]=s("div",{class:"col-xs-12"}," Document ",-1)),e[55]||(e[55]=s("div",{class:"row q-col-gutter-sm"},[s("div",{class:"col-xs-12 text-grey-5"},[s("div",null,[s("div",null," Please upload relevant documents (Upload ngai te)"),s("div",{class:"text-red-5"}," All Applicants are requested to upload true and authentic documents")]),s("br")])],-1)),e[56]||(e[56]=s("div",{class:"col-xs-12 col-sm-6"},null,-1)),y.existingData?u("",!0):(i(),n("div",Ut,[a(f,{modelValue:r(t).passport_attachment,"onUpdate:modelValue":e[30]||(e[30]=l=>r(t).passport_attachment=l),label:"Passport Photo",filled:"",error:!!((xe=r(t).errors)!=null&&xe.passport_attachment),"error-message":(ve=(be=r(t).errors)==null?void 0:be.passport_attachment)==null?void 0:ve.toString(),accept:".jpg, .jpeg, .png",class:"col-xs-12",color:"grey",hint:"Max file size: 512KB / only .jpeg, .png, .jpg/ Aspect Ratio 3:4"},{prepend:v(()=>[a(Ne,{name:"attach_file"})]),_:1},8,["modelValue","error","error-message"])])),y.existingData?u("",!0):(i(),n("div",Bt,[a(f,{modelValue:r(t).signature_attachment,"onUpdate:modelValue":e[31]||(e[31]=l=>r(t).signature_attachment=l),label:"Signature",filled:"",error:!!((fe=r(t).errors)!=null&&fe.signature_attachment),"error-message":(Ve=(De=r(t).errors)==null?void 0:De.signature_attachment)==null?void 0:Ve.toString(),accept:".jpg, .jpeg, .png",class:"col-xs-12",color:"grey",hint:"Max file size: 512KB / only .jpeg, .png, .jpg/ Aspect Ratio 16:9"},{prepend:v(()=>[a(Ne,{name:"attach_file"})]),_:1},8,["modelValue","error","error-message"])])),y.existingData?(i(),n("div",kt,[e[40]||(e[40]=s("p",null,"Passport Photo:",-1)),a(Me,{src:`/storage/${y.existingData.passport_photo}`,alt:"Passport Photo",width:"300px",height:"400px",fit:"fill",ratio:3/4,error:!!((Se=r(t).errors)!=null&&Se.passport_attachment),"error-message":(qe=(Pe=r(t).errors)==null?void 0:Pe.passport_attachment)==null?void 0:qe.toString()},null,8,["src","error","error-message"]),e[41]||(e[41]=s("br",null,null,-1)),a(_,{icon:"edit",color:"primary",class:"mt-2",onClick:e[32]||(e[32]=l=>V.value=!V.value)}),V.value?(i(),n("div",Ot,[e[39]||(e[39]=s("p",null,"Upload New Passport Photo:",-1)),a(f,{modelValue:r(t).passport_attachment,"onUpdate:modelValue":e[33]||(e[33]=l=>r(t).passport_attachment=l),label:"Upload Passport Photo",style:{width:"300px"},filled:"",accept:"image/*",error:!!((he=r(t).errors)!=null&&he.passport_attachment),"error-message":(we=(_e=r(t).errors)==null?void 0:_e.passport_attachment)==null?void 0:we.toString(),onAdded:e[34]||(e[34]=l=>w(l,"passport_attachment"))},null,8,["modelValue","error","error-message"])])):u("",!0)])):u("",!0),y.existingData?(i(),n("div",Qt,[e[43]||(e[43]=s("p",null,"Signature:",-1)),a(Me,{src:`/storage/${y.existingData.signature_photo}`,alt:"Signature Photo",style:{display:"inline-block","vertical-align":"middle"},class:"inline-block vertical-middle",width:"320px",height:"180px",fit:"fill",ratio:16/9,error:!!((Ge=r(t).errors)!=null&&Ge.passport_attachment),"error-message":(Be=(Ue=r(t).errors)==null?void 0:Ue.passport_attachment)==null?void 0:Be.toString()},null,8,["src","error","error-message"]),e[44]||(e[44]=s("br",null,null,-1)),a(_,{icon:"edit",color:"primary",class:"mt-2",onClick:e[35]||(e[35]=l=>S.value=!S.value)}),S.value?(i(),n("div",Ct,[e[42]||(e[42]=s("p",null,"Upload New Signature Photo:",-1)),a(f,{modelValue:r(t).signature_attachment,"onUpdate:modelValue":e[36]||(e[36]=l=>r(t).signature_attachment=l),label:"Upload Signature Photo",filled:"",style:{width:"320px"},accept:"image/*",error:!!((ke=r(t).errors)!=null&&ke.signature_attachment),"error-message":(Qe=(Oe=r(t).errors)==null?void 0:Oe.signature_attachment)==null?void 0:Qe.toString(),onAdded:e[37]||(e[37]=l=>w(l,"signature_attachment")),class:"q-mb-md"},null,8,["modelValue","error","error-message"])])):u("",!0)])):u("",!0),s("div",At,[a(_,{class:"q-px-xl",color:"primary",label:ze.value,rounded:"",type:"submit"},null,8,["label"])])]}),_:1})]),_:1})],64))}}),Kt=We(Nt,[["__scopeId","data-v-144f8a27"]]);export{Kt as default};