import{c as S,k as gr,r as v,l as ur,m as cr,p as yr,q as D,s as fr,v as pr,x as br,w as hr,y as H,z as Sr,A as vr,T as Dr,o as u,a as d,b as n,d as o,e as V,Q as c,u as t,B as W,C as Vr,h as M,j as x,D as xr}from"./app-DPkQUZ_H.js";import{Q as h,a as _r,b as Pr,c as dr,C as wr}from"./ClosePopup-DEsjZOwk.js";import{Q as zr,a as qr}from"./QPage-DRzMPffQ.js";import{A as kr}from"./ApplicantLayout-dHWvIgxJ.js";import"./QLayout-WtSi1Uhk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Nr={ratio:[String,Number]};function Cr(l,i){return S(()=>{const p=Number(l.ratio||(i!==void 0?i.value:void 0));return isNaN(p)!==!0&&p>0?{paddingBottom:`${100/p}%`}:null})}const Ur=1.7778,mr=gr({name:"QImg",props:{...Nr,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ur},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(l,{slots:i,emit:p}){const q=v(l.initialRatio),C=Cr(l,q),e=Sr(),{registerTimeout:U,removeTimeout:_}=ur(),{registerTimeout:j,removeTimeout:Q}=ur(),k=S(()=>l.placeholderSrc!==void 0?{src:l.placeholderSrc}:null),T=S(()=>l.errorSrc!==void 0?{src:l.errorSrc,__qerror:!0}:null),m=[v(null),v(k.value)],g=v(0),P=v(!1),w=v(!1),I=S(()=>`q-img q-img--${l.noNativeMenu===!0?"no-":""}menu`),E=S(()=>({width:l.width,height:l.height})),L=S(()=>`q-img__image ${l.imgClass!==void 0?l.imgClass+" ":""}q-img__image--with${l.noTransition===!0?"out":""}-transition q-img__image--`),O=S(()=>({...l.imgStyle,objectFit:l.fit,objectPosition:l.position}));function R(){if(Q(),l.loadingShowDelay===0){P.value=!0;return}j(()=>{P.value=!0},l.loadingShowDelay)}function N(){Q(),P.value=!1}function $({target:s}){H(e)===!1&&(_(),q.value=s.naturalHeight===0?.5:s.naturalWidth/s.naturalHeight,G(s,1))}function G(s,y){y===1e3||H(e)===!0||(s.complete===!0?A(s):U(()=>{G(s,y+1)},50))}function A(s){H(e)!==!0&&(g.value=g.value^1,m[g.value].value=null,N(),s.getAttribute("__qerror")!=="true"&&(w.value=!1),p("load",s.currentSrc||s.src))}function F(s){_(),N(),w.value=!0,m[g.value].value=T.value,m[g.value^1].value=k.value,p("error",s)}function B(s){const y=m[s].value,z={key:"img_"+s,class:L.value,style:O.value,alt:l.alt,crossorigin:l.crossorigin,decoding:l.decoding,referrerpolicy:l.referrerpolicy,height:l.height,width:l.width,loading:l.loading,fetchpriority:l.fetchpriority,"aria-hidden":"true",draggable:l.draggable,...y};return g.value===s?Object.assign(z,{class:z.class+"current",onLoad:$,onError:F}):z.class+="loaded",D("div",{class:"q-img__container absolute-full",key:"img"+s},D("img",z))}function Y(){return P.value===!1?D("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},pr(i[w.value===!0?"error":"default"])):D("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},i.loading!==void 0?i.loading():l.noSpinner===!0?void 0:[D(br,{color:l.spinnerColor,size:l.spinnerSize})])}{let s=function(){hr(()=>l.src||l.srcset||l.sizes?{src:l.src,srcset:l.srcset,sizes:l.sizes}:null,y=>{_(),w.value=!1,y===null?(N(),m[g.value^1].value=k.value):R(),m[g.value].value=y},{immediate:!0})};cr.value===!0?yr(s):s()}return()=>{const s=[];return C.value!==null&&s.push(D("div",{key:"filler",style:C.value})),m[0].value!==null&&s.push(B(0)),m[1].value!==null&&s.push(B(1)),s.push(D(fr,{name:"q-transition--fade"},Y)),D("div",{key:"main",class:I.value,style:E.value,role:"img","aria-label":l.alt},s)}}}),Gr={class:"py-12"},Br={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Mr={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},jr={class:"container mx-auto p-4"},Qr={class:"row items-center justify-end"},Tr={key:0},Ir={key:1},Er={key:2},Lr={key:3},Or={key:4},Rr={key:5},$r={class:"flex gap-20 items-start"},Ar={class:"flex flex-col items-center"},Fr={key:0,class:"flex flex-col items-center gap-4"},Yr={key:0,class:"mt-4"},Hr={key:1},Wr={class:"flex flex-col items-center"},Kr={key:0,class:"flex flex-col items-center gap-4"},Jr={key:0,class:"mt-4"},Xr={key:1},Zr={class:"q-pa-md"},it=Object.assign({layout:kr},{__name:"Bio",props:{existingData:Object},setup(l){var T,m,g,P,w,I,E,L,O,R,N,$,G,A,F,B,Y,s,y,z,K,J;const i=l,p=v(!1),q=vr();function C({totalSize:f,filesNumber:a,maxFiles:b}){return`${a} files of ${b} | ${f}`}const e=Dr({name:((T=q.props.auth.user)==null?void 0:T.name)||"",phone:((m=q.props.auth.user)==null?void 0:m.phone)||"",email:((g=q.props.auth.user)==null?void 0:g.email)||"",parents_name:((P=i.existingData)==null?void 0:P.parents_name)||"",sex:((w=i.existingData)==null?void 0:w.sex)||"",date_of_birth:((I=i.existingData)==null?void 0:I.date_of_birth)||"",community:(E=i.existingData)!=null&&E.community?{label:i.existingData.community,value:i.existingData.community}:null,religion:(L=i.existingData)!=null&&L.religion?{label:i.existingData.religion,value:i.existingData.religion}:null,marital_status:((O=i.existingData)==null?void 0:O.marital_status)||"",nationality:(R=i.existingData)!=null&&R.nationality?{label:i.existingData.nationality,value:i.existingData.nationality}:null,qualification:((N=i.existingData)==null?void 0:N.qualification)||"",graduateDegree:(($=i.existingData)==null?void 0:$.graduateDegree)||"",graduateStream:((G=i.existingData)==null?void 0:G.graduateStream)||"",postGraduateDegree:((A=i.existingData)==null?void 0:A.postGraduateDegree)||"",postGraduateStream:((F=i.existingData)==null?void 0:F.postGraduateStream)||"",doctorateDegree:((B=i.existingData)==null?void 0:B.doctorateDegree)||"",doctorateStream:((Y=i.existingData)==null?void 0:Y.doctorateStream)||"",mizo_proficiency:((s=i.existingData)==null?void 0:s.mizo_proficiency)===1?"Yes":((y=i.existingData)==null?void 0:y.mizo_proficiency)===0?"No":"",disability:((z=i.existingData)==null?void 0:z.disability)===1?"Yes":((K=i.existingData)==null?void 0:K.disability)===0?"No":"",disability_type:((J=i.existingData)==null?void 0:J.disability_type)||"",community_attachment:null,passport_attachment:null,signature_attachment:null}),U=v(!1),_=v(!1),j=(f,a)=>{const b=f.target.files[0];b&&(e[a]=b)};S(()=>{var f;return((f=e.community)==null?void 0:f.value)&&e.community.value!=="General"});const Q=S(()=>i.existingData?"Update":"Submit"),k=()=>{var a;e.mizo_proficiency=!!e.mizo_proficiency,e.disability=!!e.disability;const f=i.existingData?"applicant.bio_update":"applicant.bio_store";e.post(route(f,(a=i.existingData)==null?void 0:a.id),{onSuccess:()=>{alert(i.existingData?"Applicant created successfully!":"Applicant updated successfully!")},onError:b=>{console.error(b)}})};return(f,a)=>(u(),d("div",Gr,[n("div",Br,[n("div",Mr,[n("div",jr,[a[32]||(a[32]=n("h3",{class:"text-h5 q-mb-md py-4"},"Personal Details",-1)),o(zr,null,{default:V(()=>[o(qr,{onSubmit:k,onReset:f.onReset},{default:V(()=>{var b,X,Z,ee,re,te,ae,le,oe,ie,se,ne,ue,de,me,ge,ce,ye,fe,pe,be,he,Se,ve,De,Ve,xe,_e,Pe,we,ze,qe,ke,Ne,Ce,Ue,Ge,Be,Me,je,Qe,Te,Ie,Ee,Le,Oe,Re,$e,Ae,Fe,Ye,He,We,Ke,Je,Xe,Ze,er,rr,tr,ar,lr,or,ir,sr,nr;return[o(c,{filled:"",modelValue:t(e).name,"onUpdate:modelValue":a[0]||(a[0]=r=>t(e).name=r),modelModifiers:{trim:!0},label:"Your Name *","lazy-rules":"",error:!!((b=t(e).errors)!=null&&b.name),"error-message":(Z=(X=t(e).errors)==null?void 0:X.name)==null?void 0:Z.toString(),rules:[r=>!!r||"Name is required"]},null,8,["modelValue","error","error-message","rules"]),o(c,{filled:"",modelValue:t(e).phone,"onUpdate:modelValue":a[1]||(a[1]=r=>t(e).phone=r),modelModifiers:{trim:!0},label:"Phone Number *",type:"tel",maxlength:"10","lazy-rules":"",error:!!((ee=t(e).errors)!=null&&ee.phone),"error-message":(te=(re=t(e).errors)==null?void 0:re.phone)==null?void 0:te.toString(),rules:[r=>r&&r.length<=10||"Phone number is required"]},null,8,["modelValue","error","error-message","rules"]),o(c,{filled:"",modelValue:t(e).email,"onUpdate:modelValue":a[2]||(a[2]=r=>t(e).email=r),label:"Email *","lazy-rules":"",error:!!((ae=t(e).errors)!=null&&ae.email),"error-message":(oe=(le=t(e).errors)==null?void 0:le.email)==null?void 0:oe.toString(),rules:[r=>r&&r.length>0||"Email is required"]},null,8,["modelValue","error","error-message","rules"]),o(c,{filled:"",modelValue:t(e).parents_name,"onUpdate:modelValue":a[3]||(a[3]=r=>t(e).parents_name=r),label:"Parents Name *","lazy-rules":"",error:!!((ie=t(e).errors)!=null&&ie.parents_name),"error-message":(ne=(se=t(e).errors)==null?void 0:se.parents_name)==null?void 0:ne.toString(),rules:[r=>r&&r.length>0||"Parents Name is required"]},null,8,["modelValue","error","error-message","rules"]),o(h,{filled:"",modelValue:t(e).sex,"onUpdate:modelValue":a[4]||(a[4]=r=>t(e).sex=r),label:"Sex *","lazy-rules":"",error:!!((ue=t(e).errors)!=null&&ue.sex),"error-message":(me=(de=t(e).errors)==null?void 0:de.sex)==null?void 0:me.toString(),rules:[r=>r&&r.length>0||"Sex is required"],options:["Male","Female","Others"]},null,8,["modelValue","error","error-message","rules"]),o(h,{filled:"",modelValue:t(e).marital_status,"onUpdate:modelValue":a[5]||(a[5]=r=>t(e).marital_status=r),label:"Marital Status *",error:!!((ge=t(e).errors)!=null&&ge.marital_status),"error-message":(ye=(ce=t(e).errors)==null?void 0:ce.marital_status)==null?void 0:ye.toString(),rules:[r=>r&&r.length>0||"Marital Status is required"],options:["Single","Married","Divorced","Widowed"]},null,8,["modelValue","error","error-message","rules"]),o(c,{label:"Date Of Birth",filled:"",modelValue:t(e).date_of_birth,"onUpdate:modelValue":a[7]||(a[7]=r=>t(e).date_of_birth=r),error:!!((fe=t(e).errors)!=null&&fe.date_of_birth),"error-message":(be=(pe=t(e).errors)==null?void 0:pe.date_of_birth)==null?void 0:be.toString(),mask:"date",rules:["date"]},{append:V(()=>[o(W,{name:"event",class:"cursor-pointer"},{default:V(()=>[o(_r,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:V(()=>[o(Pr,{modelValue:t(e).date_of_birth,"onUpdate:modelValue":a[6]||(a[6]=r=>t(e).date_of_birth=r),"today-btn":""},{default:V(()=>[n("div",Qr,[Vr(o(M,{label:"Close",color:"primary",flat:""},null,512),[[wr]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","error","error-message"]),o(h,{filled:"",modelValue:t(e).community,"onUpdate:modelValue":a[8]||(a[8]=r=>t(e).community=r),label:"Community","lazy-rules":"",error:!!((he=t(e).errors)!=null&&he.community),"error-message":(ve=(Se=t(e).errors)==null?void 0:Se.community)==null?void 0:ve.toString(),rules:[r=>r!==null&&r!==""||"Please select your community"],options:[{label:"Scheduled Tribe",value:"Scheduled Tribe"},{label:"Scheduled Caste",value:"Scheduled Caste"},{label:"Other Backward Class",value:"Other Backward Class"},{label:"General",value:"General"}]},null,8,["modelValue","error","error-message","rules"]),o(h,{filled:"",modelValue:t(e).religion,"onUpdate:modelValue":a[9]||(a[9]=r=>t(e).religion=r),label:"Religion","lazy-rules":"",error:!!((De=t(e).errors)!=null&&De.religion),"error-message":(xe=(Ve=t(e).errors)==null?void 0:Ve.religion)==null?void 0:xe.toString(),rules:[r=>r!==null&&r!==""||"Please Enter your Religion"],options:[{label:"Hindu",value:"Hindu"},{label:"Muslim",value:"Muslim"},{label:"Sikh",value:"Sikh"},{label:"Christian",value:"Christian"},{label:"Buddhist",value:"Buddhist"},{label:"Others",value:"Others"}]},null,8,["modelValue","error","error-message","rules"]),o(h,{filled:"",modelValue:t(e).nationality,"onUpdate:modelValue":a[10]||(a[10]=r=>t(e).nationality=r),label:"Nationality","lazy-rules":"",error:!!((_e=t(e).errors)!=null&&_e.nationality),"error-message":(we=(Pe=t(e).errors)==null?void 0:Pe.nationality)==null?void 0:we.toString(),rules:[r=>r!==null&&r!==""||"Please Enter your Nationality"],options:[{label:"Indian",value:"Indian"},{label:"Others",value:"Others"}]},null,8,["modelValue","error","error-message","rules"]),o(h,{filled:"",modelValue:t(e).qualification,"onUpdate:modelValue":a[11]||(a[11]=r=>t(e).qualification=r),label:"Qualification","lazy-rules":"",error:!!((ze=t(e).errors)!=null&&ze.qualification),"error-message":(ke=(qe=t(e).errors)==null?void 0:qe.qualification)==null?void 0:ke.toString(),rules:[r=>r!==null&&r!==""||"Please Select your qualification"],options:["Non Graduate","Graduate","Post Graduate","Doctorate"]},null,8,["modelValue","error","error-message","rules"]),t(e).qualification==="Graduate"||t(e).qualification==="Post Graduate"||t(e).qualification==="Doctorate"?(u(),d("div",Tr,[o(c,{filled:"",modelValue:t(e).graduateDegree,"onUpdate:modelValue":a[12]||(a[12]=r=>t(e).graduateDegree=r),label:"Graduate Degree","lazy-rules":"",error:!!((Ne=t(e).errors)!=null&&Ne.graduateDegree),"error-message":(Ue=(Ce=t(e).errors)==null?void 0:Ce.graduateDegree)==null?void 0:Ue.toString(),rules:[r=>r!==null&&r!==""||"Please enter your graduate degree"]},null,8,["modelValue","error","error-message","rules"]),o(c,{filled:"",modelValue:t(e).graduateStream,"onUpdate:modelValue":a[13]||(a[13]=r=>t(e).graduateStream=r),label:"Graduate Stream","lazy-rules":"",error:!!((Ge=t(e).errors)!=null&&Ge.graduateStream),"error-message":(Me=(Be=t(e).errors)==null?void 0:Be.graduateStream)==null?void 0:Me.toString(),rules:[r=>r!==null&&r!==""||"Please enter your graduate stream"]},null,8,["modelValue","error","error-message","rules"])])):x("",!0),t(e).qualification==="Post Graduate"||t(e).qualification==="Doctorate"?(u(),d("div",Ir,[o(c,{filled:"",modelValue:t(e).postGraduateDegree,"onUpdate:modelValue":a[14]||(a[14]=r=>t(e).postGraduateDegree=r),label:"Post Graduate Degree","lazy-rules":"",error:!!((je=t(e).errors)!=null&&je.postGraduateDegree),"error-message":(Te=(Qe=t(e).errors)==null?void 0:Qe.postGraduateDegree)==null?void 0:Te.toString(),rules:[r=>r!==null&&r!==""||"Please enter your post graduate degree"]},null,8,["modelValue","error","error-message","rules"]),o(c,{filled:"",modelValue:t(e).postGraduateStream,"onUpdate:modelValue":a[15]||(a[15]=r=>t(e).postGraduateStream=r),label:"Post Graduate Stream","lazy-rules":"",error:!!((Ie=t(e).errors)!=null&&Ie.postGraduateStream),"error-message":(Le=(Ee=t(e).errors)==null?void 0:Ee.postGraduateStream)==null?void 0:Le.toString(),rules:[r=>r!==null&&r!==""||"Please enter your post graduate stream"]},null,8,["modelValue","error","error-message","rules"])])):x("",!0),t(e).qualification==="Doctorate"?(u(),d("div",Er,[o(c,{filled:"",modelValue:t(e).doctorateDegree,"onUpdate:modelValue":a[16]||(a[16]=r=>t(e).doctorateDegree=r),label:"Doctorate Degree","lazy-rules":"",error:!!((Oe=t(e).errors)!=null&&Oe.doctorateDegree),"error-message":($e=(Re=t(e).errors)==null?void 0:Re.doctorateDegree)==null?void 0:$e.toString(),rules:[r=>r!==null&&r!==""||"Please enter your doctorate degree"]},null,8,["modelValue","error","error-message","rules"]),o(c,{filled:"",modelValue:t(e).doctorateStream,"onUpdate:modelValue":a[17]||(a[17]=r=>t(e).doctorateStream=r),label:"Doctorate Stream","lazy-rules":"",error:!!((Ae=t(e).errors)!=null&&Ae.doctorateStream),"error-message":(Ye=(Fe=t(e).errors)==null?void 0:Fe.doctorateStream)==null?void 0:Ye.toString(),rules:[r=>r!==null&&r!==""||"Please enter your doctorate stream"]},null,8,["modelValue","error","error-message","rules"])])):x("",!0),o(h,{filled:"",modelValue:t(e).mizo_proficiency,"onUpdate:modelValue":a[18]||(a[18]=r=>t(e).mizo_proficiency=r),label:"Knowledge Of Mizo Language","lazy-rules":"",error:!!((He=t(e).errors)!=null&&He.mizo_proficiency),"error-message":(Ke=(We=t(e).errors)==null?void 0:We.mizo_proficiency)==null?void 0:Ke.toString(),rules:[r=>r!==null&&r!==""||"Please Enter your Mizo Proficiency"],options:[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},null,8,["modelValue","error","error-message","rules"]),o(h,{filled:"",modelValue:t(e).disability,"onUpdate:modelValue":a[19]||(a[19]=r=>t(e).disability=r),label:"Person With Disability","lazy-rules":"",error:!!((Je=t(e).errors)!=null&&Je.disability),"error-message":(Ze=(Xe=t(e).errors)==null?void 0:Xe.disability)==null?void 0:Ze.toString(),rules:[r=>r!==null&&r!==""||"Please Enter your Nationality"],options:[{label:"Yes",value:"1"},{label:"No",value:"0"}]},null,8,["modelValue","error","error-message","rules"]),t(e).disability==="Yes"||t(e).disability.value==="1"?(u(),d("div",Lr,[o(h,{filled:"",modelValue:t(e).disability_type,"onUpdate:modelValue":a[20]||(a[20]=r=>t(e).disability_type=r),label:"Disability Type","lazy-rules":"",error:!!((er=t(e).errors)!=null&&er.disability_type),"error-message":(tr=(rr=t(e).errors)==null?void 0:rr.disability_type)==null?void 0:tr.toString(),rules:[r=>r!==null&&r!==""||"Please Select your disability type"],options:["Hearing","Locomotor","Vision","Autism, Intellectual & Learning Disability, Mental Illness","Multiple Disability (Amongst Above)"]},null,8,["modelValue","error","error-message","rules"])])):x("",!0),l.existingData?x("",!0):(u(),d("div",Or,[o(dr,{modelValue:t(e).passport_attachment,"onUpdate:modelValue":a[21]||(a[21]=r=>t(e).passport_attachment=r),label:"Passport Photo",filled:"",counter:"",error:!!((ar=t(e).errors)!=null&&ar.passport_attachment),"error-message":(or=(lr=t(e).errors)==null?void 0:lr.passport_attachment)==null?void 0:or.toString(),accept:".jpg, .jpeg, .png","counter-label":C,style:{"max-width":"300px"},hint:"Max file size: 2 MB / only .jpeg, .png, .jpg"},{prepend:V(()=>[o(W,{name:"attach_file"})]),_:1},8,["modelValue","error","error-message"]),o(dr,{modelValue:t(e).signature_attachment,"onUpdate:modelValue":a[22]||(a[22]=r=>t(e).signature_attachment=r),label:"Signature",filled:"",counter:"",error:!!((ir=t(e).errors)!=null&&ir.signature_attachment),"error-message":(nr=(sr=t(e).errors)==null?void 0:sr.signature_attachment)==null?void 0:nr.toString(),accept:".jpg, .jpeg, .png","counter-label":C,style:{"max-width":"300px"},hint:"Max file size: 2 MB / only .jpeg, .png, .jpg"},{prepend:V(()=>[o(W,{name:"attach_file"})]),_:1},8,["modelValue","error","error-message"])])),l.existingData?(u(),d("div",Rr,[n("div",$r,[n("div",Ar,[a[29]||(a[29]=n("p",null,"Passport Photo:",-1)),l.existingData.passport_photo?(u(),d("div",Fr,[o(mr,{src:`/storage/${l.existingData.passport_photo}`,alt:"Passport Photo",class:"w-32 h-32 object-cover rounded border",width:"150px",height:"150px",fit:"fill"},null,8,["src"]),o(M,{icon:"edit",label:"Edit",color:"primary",class:"mt-2",onClick:a[23]||(a[23]=r=>U.value=!U.value)}),U.value?(u(),d("div",Yr,[a[28]||(a[28]=n("p",null,"Upload New Passport Photo:",-1)),n("input",{type:"file",accept:"image/*",onChange:a[24]||(a[24]=r=>j(r,"passport_attachment"))},null,32)])):x("",!0)])):(u(),d("p",Hr,"No passport photo uploaded"))]),n("div",Wr,[a[31]||(a[31]=n("p",null,"Signature Photo:",-1)),l.existingData.signature_photo?(u(),d("div",Kr,[o(mr,{src:`/storage/${l.existingData.signature_photo}`,alt:"Signature Photo",class:"w-32 h-32 object-cover rounded border",width:"150px",height:"150px",fit:"fill"},null,8,["src"]),o(M,{icon:"edit",label:"Edit",color:"primary",class:"mt-2",onClick:a[25]||(a[25]=r=>_.value=!_.value)}),_.value?(u(),d("div",Jr,[a[30]||(a[30]=n("p",null,"Upload New Signature Photo:",-1)),n("input",{type:"file",accept:"image/*",onChange:a[26]||(a[26]=r=>j(r,"signature_attachment"))},null,32)])):x("",!0)])):(u(),d("p",Xr,"No signature photo uploaded"))])])])):x("",!0),n("div",Zr,[o(xr,{modelValue:p.value,"onUpdate:modelValue":a[27]||(a[27]=r=>p.value=r),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:"I hereby declare that the information given above and in the enclosed documents is true to the best of my knowledge and belief and nothing has been concealed therein. I understand that if the information given by me is proved false/not true, I will have to face the punishment as per the law. Also, all the benefits availed by me shall be summarily withdrawn."},null,8,["modelValue"])]),n("div",null,[o(M,{onClick:k,label:Q.value,type:"submit",color:"primary"},null,8,["label"]),o(M,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]}),_:1},8,["onReset"])]),_:1})])])])]))}});export{it as default};