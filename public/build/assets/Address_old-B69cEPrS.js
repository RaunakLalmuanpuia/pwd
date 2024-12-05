import{r as ke,T as Ae,w as Te,c as ze,o as he,a as Ce,b as s,d as a,e as ve,f as we,Q as i,u as r,g as Qe,i as Le}from"./app-BT0dome_.js";import{Q as Pe}from"./QForm-D-BeSauz.js";import{Q as Be}from"./QPage-PfisjsKG.js";import{A as Ne}from"./ApplicantLayout-BkNQoGWD.js";import"./QLayout-BHHOhaoO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const je={class:"py-12"},Ee={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},He={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},Ie={class:"container mx-auto p-4"},Oe={class:"q-mb-lg"},Fe={class:"grid grid-cols-1 sm:grid-cols-2 gap-4"},Me={class:"q-mb-lg"},Ge={class:"grid grid-cols-1 sm:grid-cols-2 gap-4"},Ze=Object.assign({layout:Ne},{__name:"Address_old",props:{existingData:Object},setup(Ue){var _,p,g,y,V,x,b,f,D,S,k,v,U,q,A,T,z;const n=Ue,d=ke(!1),l=ke({communication_house_no:((_=n.existingData)==null?void 0:_.communication_house_no)||"",communication_street:((p=n.existingData)==null?void 0:p.communication_street)||"",communication_locality:((g=n.existingData)==null?void 0:g.communication_locality)||"",communication_landmark:((y=n.existingData)==null?void 0:y.communication_landmark)||"",communication_city:((V=n.existingData)==null?void 0:V.communication_city)||"",communication_district:((x=n.existingData)==null?void 0:x.communication_district)||"",communication_state:((b=n.existingData)==null?void 0:b.communication_state)||"",communication_pin_code:((f=n.existingData)==null?void 0:f.communication_pin_code)||""}),e=Ae({permanent_house_no:((D=n.existingData)==null?void 0:D.permanent_house_no)||"",permanent_street:((S=n.existingData)==null?void 0:S.permanent_street)||"",permanent_locality:((k=n.existingData)==null?void 0:k.permanent_locality)||"",permanent_landmark:((v=n.existingData)==null?void 0:v.permanent_landmark)||"",permanent_city:((U=n.existingData)==null?void 0:U.permanent_city)||"",permanent_district:((q=n.existingData)==null?void 0:q.permanent_district)||"",permanent_state:((A=n.existingData)==null?void 0:A.permanent_state)||"",permanent_pin_code:((T=n.existingData)==null?void 0:T.permanent_pin_code)||"",communication_house_no:l.value.communication_house_no,communication_street:l.value.communication_street,communication_locality:l.value.communication_locality,communication_landmark:l.value.communication_landmark,communication_city:l.value.communication_city,communication_district:l.value.communication_district,communication_state:l.value.communication_state,communication_pin_code:l.value.communication_pin_code,country:((z=n.existingData)==null?void 0:z.country)||"India"});Te(d,m=>{m?(e.communication_house_no=e.permanent_house_no,e.communication_street=e.permanent_street,e.communication_locality=e.permanent_locality,e.communication_landmark=e.permanent_landmark,e.communication_city=e.permanent_city,e.communication_district=e.permanent_district,e.communication_state=e.permanent_state,e.communication_pin_code=e.permanent_pin_code):(e.communication_house_no="",e.communication_street="",e.communication_locality="",e.communication_landmark="",e.communication_city="",e.communication_district="",e.communication_state="",e.communication_pin_code="")});const qe=ze(()=>n.existingData?"Update Address":"Submit Address"),c=()=>{var t;const m=n.existingData?"applicant.address_update":"applicant.address_store";e.post(route(m,(t=n.existingData)==null?void 0:t.id),{onSuccess:()=>{alert(n.existingData?"Address updated successfully!":"Address saved successfully!")},onError:u=>{console.error(u)}})};return(m,t)=>(he(),Ce("div",je,[s("div",Ee,[s("div",He,[s("div",Ie,[t[19]||(t[19]=s("h2",{class:"text-2xl font-bold mb-4"},"Address",-1)),a(Be,null,{default:ve(()=>[a(Pe,{onSubmit:we(c,["prevent"]),class:"q-gutter-md"},{default:ve(()=>{var u,h,C,w,Q,L,P,B,N,j,E,H,I,O,F,M,G,J,K,R,W,X,Y,Z,$,ee,re,oe,te,ne,ae,ie,se,le,me,ue,de,ce,_e,pe,ge,ye,Ve,xe,be,fe,De,Se;return[s("div",Oe,[t[17]||(t[17]=s("h4",{class:"text-subtitle1 text-accent mb-4 mt-10"},"Permanent Address",-1)),s("div",Fe,[a(i,{modelValue:r(e).permanent_house_no,"onUpdate:modelValue":t[0]||(t[0]=o=>r(e).permanent_house_no=o),outlined:"",label:"House No","lazy-rules":"",error:!!((u=r(e).errors)!=null&&u.permanent_house_no),"error-message":(C=(h=r(e).errors)==null?void 0:h.permanent_house_no)==null?void 0:C.toString(),rules:[o=>!!o||"This field is required"]},null,8,["modelValue","error","error-message","rules"]),a(i,{modelValue:r(e).permanent_street,"onUpdate:modelValue":t[1]||(t[1]=o=>r(e).permanent_street=o),outlined:"",label:"Street",error:!!((w=r(e).errors)!=null&&w.permanent_street),"error-message":(L=(Q=r(e).errors)==null?void 0:Q.permanent_street)==null?void 0:L.toString()},null,8,["modelValue","error","error-message"]),a(i,{modelValue:r(e).permanent_locality,"onUpdate:modelValue":t[2]||(t[2]=o=>r(e).permanent_locality=o),outlined:"",label:"Locality","lazy-rules":"",error:!!((P=r(e).errors)!=null&&P.permanent_locality),"error-message":(N=(B=r(e).errors)==null?void 0:B.permanent_locality)==null?void 0:N.toString(),rules:[o=>!!o||"This field is required"]},null,8,["modelValue","error","error-message","rules"]),a(i,{modelValue:r(e).permanent_landmark,"onUpdate:modelValue":t[3]||(t[3]=o=>r(e).permanent_landmark=o),outlined:"",label:"Landmark",error:!!((j=r(e).errors)!=null&&j.permanent_landmark),"error-message":(H=(E=r(e).errors)==null?void 0:E.permanent_landmark)==null?void 0:H.toString()},null,8,["modelValue","error","error-message"]),a(i,{modelValue:r(e).permanent_city,"onUpdate:modelValue":t[4]||(t[4]=o=>r(e).permanent_city=o),outlined:"",label:"City","lazy-rules":"",error:!!((I=r(e).errors)!=null&&I.permanent_city),"error-message":(F=(O=r(e).errors)==null?void 0:O.permanent_city)==null?void 0:F.toString(),rules:[o=>!!o||"This field is required"]},null,8,["modelValue","error","error-message","rules"]),a(i,{modelValue:r(e).permanent_district,"onUpdate:modelValue":t[5]||(t[5]=o=>r(e).permanent_district=o),outlined:"",label:"District","lazy-rules":"",error:!!((M=r(e).errors)!=null&&M.permanent_district),"error-message":(J=(G=r(e).errors)==null?void 0:G.permanent_district)==null?void 0:J.toString(),rules:[o=>!!o||"This field is required"]},null,8,["modelValue","error","error-message","rules"]),a(i,{modelValue:r(e).permanent_state,"onUpdate:modelValue":t[6]||(t[6]=o=>r(e).permanent_state=o),outlined:"",label:"State","lazy-rules":"",error:!!((K=r(e).errors)!=null&&K.permanent_state),"error-message":(W=(R=r(e).errors)==null?void 0:R.permanent_state)==null?void 0:W.toString(),rules:[o=>!!o||"This field is required"]},null,8,["modelValue","error","error-message","rules"]),a(i,{modelValue:r(e).permanent_pin_code,"onUpdate:modelValue":t[7]||(t[7]=o=>r(e).permanent_pin_code=o),outlined:"",label:"Pin Code","lazy-rules":"",type:"number",maxlength:"6",error:!!((X=r(e).errors)!=null&&X.permanent_pin_code),"error-message":(Z=(Y=r(e).errors)==null?void 0:Y.permanent_pin_code)==null?void 0:Z.toString(),rules:[o=>!!o||"This field is required"]},null,8,["modelValue","error","error-message","rules"])])]),a(Qe,{modelValue:d.value,"onUpdate:modelValue":t[8]||(t[8]=o=>d.value=o),label:"Same as Permanent Address"},null,8,["modelValue"]),s("div",Me,[t[18]||(t[18]=s("h4",{class:"text-subtitle1 text-accent mb-4"},"Communication Address",-1)),s("div",Ge,[a(i,{modelValue:r(e).communication_house_no,"onUpdate:modelValue":t[9]||(t[9]=o=>r(e).communication_house_no=o),outlined:"",label:"House No","lazy-rules":"",error:!!(($=r(e).errors)!=null&&$.communication_house_no),"error-message":(re=(ee=r(e).errors)==null?void 0:ee.communication_house_no)==null?void 0:re.toString(),rules:[o=>!!o||"This field is required"]},null,8,["modelValue","error","error-message","rules"]),a(i,{modelValue:r(e).communication_street,"onUpdate:modelValue":t[10]||(t[10]=o=>r(e).communication_street=o),outlined:"",label:"Street",error:!!((oe=r(e).errors)!=null&&oe.communication_street),"error-message":(ne=(te=r(e).errors)==null?void 0:te.communication_street)==null?void 0:ne.toString()},null,8,["modelValue","error","error-message"]),a(i,{modelValue:r(e).communication_locality,"onUpdate:modelValue":t[11]||(t[11]=o=>r(e).communication_locality=o),outlined:"",label:"Locality","lazy-rules":"",error:!!((ae=r(e).errors)!=null&&ae.communication_locality),"error-message":(se=(ie=r(e).errors)==null?void 0:ie.communication_locality)==null?void 0:se.toString(),rules:[o=>!!o||"This field is required"]},null,8,["modelValue","error","error-message","rules"]),a(i,{modelValue:r(e).communication_landmark,"onUpdate:modelValue":t[12]||(t[12]=o=>r(e).communication_landmark=o),outlined:"",label:"Landmark",error:!!((le=r(e).errors)!=null&&le.communication_landmark),"error-message":(ue=(me=r(e).errors)==null?void 0:me.communication_landmark)==null?void 0:ue.toString()},null,8,["modelValue","error","error-message"]),a(i,{modelValue:r(e).communication_city,"onUpdate:modelValue":t[13]||(t[13]=o=>r(e).communication_city=o),outlined:"",label:"City","lazy-rules":"",error:!!((de=r(e).errors)!=null&&de.communication_city),"error-message":(_e=(ce=r(e).errors)==null?void 0:ce.communication_city)==null?void 0:_e.toString(),rules:[o=>!!o||"This field is required"]},null,8,["modelValue","error","error-message","rules"]),a(i,{modelValue:r(e).communication_district,"onUpdate:modelValue":t[14]||(t[14]=o=>r(e).communication_district=o),outlined:"",label:"District","lazy-rules":"",error:!!((pe=r(e).errors)!=null&&pe.communication_district),"error-message":(ye=(ge=r(e).errors)==null?void 0:ge.communication_district)==null?void 0:ye.toString(),rules:[o=>!!o||"This field is required"]},null,8,["modelValue","error","error-message","rules"]),a(i,{modelValue:r(e).communication_state,"onUpdate:modelValue":t[15]||(t[15]=o=>r(e).communication_state=o),outlined:"",label:"State","lazy-rules":"",error:!!((Ve=r(e).errors)!=null&&Ve.communication_state),"error-message":(be=(xe=r(e).errors)==null?void 0:xe.communication_state)==null?void 0:be.toString(),rules:[o=>!!o||"This field is required"]},null,8,["modelValue","error","error-message","rules"]),a(i,{modelValue:r(e).communication_pin_code,"onUpdate:modelValue":t[16]||(t[16]=o=>r(e).communication_pin_code=o),outlined:"",label:"Pin Code","lazy-rules":"",type:"number",maxlength:"6",error:!!((fe=r(e).errors)!=null&&fe.communication_pin_code),"error-message":(Se=(De=r(e).errors)==null?void 0:De.communication_pin_code)==null?void 0:Se.toString(),rules:[o=>!!o||"This field is required"]},null,8,["modelValue","error","error-message","rules"])])]),s("div",null,[a(Le,{color:"primary",label:qe.value,onClick:c},null,8,["label"])])]}),_:1})]),_:1})])])])]))}});export{Ze as default};
