import{Q as h}from"./QImg-Djd0tHBW.js";import{A as _}from"./ApplicantLayout-BqzgOWwN.js";import{r as q,T as tt,o as i,c as a,b as t,t as e,a as nt,g as s,e as u,F as W,p as lt,u as m}from"./app-CAJ6WP2Z.js";import"./QLayout-C2CuVbmg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const et={class:"p-4 bg-background rounded-lg shadow-md"},st={class:"text-base"},ot={class:"text-base"},it={class:"text-base"},at={class:"text-base"},rt={class:"p-4"},dt={key:0,class:"flex flex-col md:flex-row p-4 bg-background rounded-lg shadow-md"},ut={class:"w-full md:w-1/2 p-4 border-r border-border"},mt={class:"flex items-center mb-4"},pt={class:"text-md font-bold"},gt={class:"w-full md:w-1/2 p-4"},bt={class:"p-4 bg-background rounded-lg shadow-md"},ft={class:"p-4 bg-background rounded-lg shadow-md"},ct={class:"grid grid-cols-2 gap-4"},xt={class:"block text-sm font-medium text-foreground"},yt={class:"mt-1 flex items-center border border-border rounded-md p-2 bg-card"},vt=["id","name","onChange"],Dt={class:"mt-1 text-xs text-muted-foreground"},wt={key:0},kt={class:"mx-auto bg-white dark:bg-card shadow-lg rounded-lg p-6 flex flex-col items-center"},Pt={class:"mt-6 flex justify-between w-full"},Ct={class:"text-red-500"},Nt={class:"flex items-center justify-end flex-col"},At=["src"],Vt=Object.assign({layout:_},{__name:"JobApplication",props:["jobDetail","mandatoryDocuments","applicant"],setup(l){const J=l,d=q(!1),Y=()=>{d.value=!d.value},r=tt({documents:{}});function G(p){const n={day:"numeric",month:"long",year:"numeric"};return new Intl.DateTimeFormat("en-US",n).format(p)}const K=q(G(new Date)),X=()=>{r.post(route("application.apply",{jobDetail:J.jobDetail.id}),{onSuccess:()=>{r.reset()}})};return(p,n)=>{var g,b,f,c,x,y,v,D,w,k,P,C,N,A,S,L,j,T,I,V,B,E,F,H,z,O,Q,U,$,M,R;return i(),a(W,null,[t("div",et,[n[0]||(n[0]=t("h2",{class:"text-lg font-bold"},"Name of Post",-1)),t("p",st,e(l.jobDetail.post_name),1),n[1]||(n[1]=t("h2",{class:"text-lg font-bold mt-4"},"Number of Post",-1)),t("p",ot,e(l.jobDetail.no_of_post),1),n[2]||(n[2]=t("h2",{class:"text-lg font-bold mt-4"},"Application Last Date",-1)),t("p",it,e(l.jobDetail.application_deadline),1),n[3]||(n[3]=t("h2",{class:"text-lg font-bold mt-4"},"Application Fee",-1)),t("p",at,e(l.jobDetail.application_fee),1),n[4]||(n[4]=t("h2",{class:"text-lg font-bold mt-4"},"Certification by Head of Department / Cadre Authority (PDF)",-1)),n[5]||(n[5]=t("a",{href:"#",class:"inline-block mt-2 bg-destructive text-destructive-foreground py-2 px-4 rounded-lg hover:bg-destructive/80"}," DOWNLOAD TEMPLATE ",-1))]),t("div",rt,[t("button",{onClick:Y,class:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"},e(d.value?"Hide Profile":"Show Profile"),1)]),d.value?(i(),a("div",dt,[t("div",ut,[t("div",mt,[nt(h,{src:`/storage/${l.applicant.passport_photo}`,alt:"Passport Size Photo",class:"mr-4",style:{width:"120px",height:"120px","object-fit":"cover"}},null,8,["src"]),t("div",null,[t("h3",pt,e((g=l.applicant)==null?void 0:g.user.name),1),n[6]||(n[6]=t("p",{class:"text-muted-foreground"},"Name (As HSLC Cert. / Service Book)",-1))])]),t("p",null,[n[7]||(n[7]=t("strong",null,"Sex:",-1)),s(" "+e((b=l.applicant)==null?void 0:b.sex),1)]),t("p",null,[n[8]||(n[8]=t("strong",null,"Mobile No:",-1)),s(" "+e((f=l.applicant)==null?void 0:f.user.phone),1)]),t("p",null,[n[9]||(n[9]=t("strong",null,"Parent's Name:",-1)),s(" "+e((c=l.applicant)==null?void 0:c.parents_name),1)]),t("p",null,[n[10]||(n[10]=t("strong",null,"Date of Birth:",-1)),s(" "+e((x=l.applicant)==null?void 0:x.date_of_birth),1)]),t("p",null,[n[11]||(n[11]=t("strong",null,"Community:",-1)),s(" "+e((y=l.applicant)==null?void 0:y.community),1)]),t("p",null,[n[12]||(n[12]=t("strong",null,"Religion:",-1)),s(" "+e((v=l.applicant)==null?void 0:v.religion),1)]),t("p",null,[n[13]||(n[13]=t("strong",null,"Nationality:",-1)),s(" "+e((D=l.applicant)==null?void 0:D.nationality),1)]),t("p",null,[n[14]||(n[14]=t("strong",null,"Qualification:",-1)),s(e((w=l.applicant)==null?void 0:w.qualification)+", "+e((k=l.applicant)==null?void 0:k.graduateDegree),1)]),t("p",null,[n[15]||(n[15]=t("strong",null,"Working knowledge of Mizo Language:",-1)),s(" "+e((P=l.applicant)==null?void 0:P.mizo_proficiency),1)]),t("p",null,[n[16]||(n[16]=t("strong",null,"Person with Disability:",-1)),s(" "+e((C=l.applicant)==null?void 0:C.disability),1)]),t("p",null,[n[17]||(n[17]=t("strong",null,"Person with Disability Detail:",-1)),s(e((N=l.applicant)==null?void 0:N.disability_type),1)])]),t("div",gt,[n[34]||(n[34]=t("h2",{class:"text-lg font-semibold"},"Permanent Address",-1)),t("p",null,[n[18]||(n[18]=t("strong",null,"House No:",-1)),s(e((A=l.applicant)==null?void 0:A.user.address.permanent_house_no),1)]),t("p",null,[n[19]||(n[19]=t("strong",null,"Street:",-1)),s(" "+e((S=l.applicant)==null?void 0:S.user.address.permanent_street),1)]),t("p",null,[n[20]||(n[20]=t("strong",null,"Locality (Veng):",-1)),s(" "+e((L=l.applicant)==null?void 0:L.user.address.permanent_locality),1)]),t("p",null,[n[21]||(n[21]=t("strong",null,"Landmark:",-1)),s(" "+e((j=l.applicant)==null?void 0:j.user.address.permanent_landmark),1)]),t("p",null,[n[22]||(n[22]=t("strong",null,"Town / City:",-1)),s(" "+e((T=l.applicant)==null?void 0:T.user.address.permanent_city),1)]),t("p",null,[n[23]||(n[23]=t("strong",null,"District:",-1)),s(" "+e((I=l.applicant)==null?void 0:I.user.address.permanent_district),1)]),t("p",null,[n[24]||(n[24]=t("strong",null,"State / UT:",-1)),s(" "+e((V=l.applicant)==null?void 0:V.user.address.permanent_state),1)]),t("p",null,[n[25]||(n[25]=t("strong",null,"PIN:",-1)),s(" "+e((B=l.applicant)==null?void 0:B.user.address.permanent_pin_code),1)]),n[35]||(n[35]=t("h2",{class:"text-lg font-semibold mt-4"},"Communication Address",-1)),t("p",null,[n[26]||(n[26]=t("strong",null,"House No:",-1)),s(" "+e((E=l.applicant)==null?void 0:E.user.address.communication_house_no),1)]),t("p",null,[n[27]||(n[27]=t("strong",null,"Street:",-1)),s(" "+e((F=l.applicant)==null?void 0:F.user.address.communication_street),1)]),t("p",null,[n[28]||(n[28]=t("strong",null,"Locality (Veng):",-1)),s(" "+e((H=l.applicant)==null?void 0:H.user.address.communication_locality),1)]),t("p",null,[n[29]||(n[29]=t("strong",null,"Landmark:",-1)),s(" "+e((z=l.applicant)==null?void 0:z.user.address.communication_landmark),1)]),t("p",null,[n[30]||(n[30]=t("strong",null,"Town / City:",-1)),s(" "+e((O=l.applicant)==null?void 0:O.user.address.communication_city),1)]),t("p",null,[n[31]||(n[31]=t("strong",null,"District:",-1)),s(" "+e((Q=l.applicant)==null?void 0:Q.user.address.communication_district),1)]),t("p",null,[n[32]||(n[32]=t("strong",null,"State / UT:",-1)),s(e((U=l.applicant)==null?void 0:U.user.address.communication_state),1)]),t("p",null,[n[33]||(n[33]=t("strong",null,"PIN:",-1)),s(" "+e(($=l.applicant)==null?void 0:$.user.address.communication_pin_code),1)])])])):u("",!0),t("div",bt,[t("div",ft,[n[37]||(n[37]=t("h2",{class:"text-lg font-bold mb-3"},"Required Documents",-1)),t("div",ct,[(i(!0),a(W,null,lt(l.mandatoryDocuments,o=>(i(),a("div",{key:o.id,class:"mb-4"},[t("label",xt," Upload Proof of Prescribed Essential Qualification: "+e(o.document_name),1),t("div",yt,[t("input",{type:"file",id:"document-"+o.id,name:"documents["+o.id+"]",onChange:Z=>m(r).documents[o.id]=Z.target.files[0],class:"flex-grow border-none focus:ring-0"},null,40,vt),n[36]||(n[36]=t("span",{class:"ml-2 text-blue-600"},"+",-1))]),t("p",Dt,e(o.document_description),1),m(r).errors[`documents.${o.id}`]?(i(),a("span",wt,e(m(r).errors[`documents.${o.id}`]),1)):u("",!0)]))),128))])])]),t("div",kt,[n[40]||(n[40]=t("h2",{class:"text-red-500 text-2xl font-bold text-center tracking-widest"},"D E C L A R A T I O N",-1)),n[41]||(n[41]=t("p",{class:"text-red-500 mt-4"}," I hereby declare that all the statements made in this application are true and complete to the best of my knowledge and belief. I understand that action can be taken against me by the Commission, if I am declared by them to be guilty of any type of misconduct mentioned herein. ",-1)),t("div",Pt,[t("div",null,[n[38]||(n[38]=t("span",{class:"text-red-500 font-semibold"},"Date :",-1)),t("span",Ct,e(K.value),1)]),t("div",Nt,[(M=l.applicant)!=null&&M.signature_photo?(i(),a("img",{key:0,alt:"Signature of the Candidate",src:`/storage/${(R=l.applicant)==null?void 0:R.signature_photo}`,class:"border border-zinc-300 rounded w-40 h-40 object-contain"},null,8,At)):u("",!0),n[39]||(n[39]=t("p",{class:"text-red-500 text-center mt-2"},"Signature of the Candidate",-1))])]),t("button",{onClick:X,class:"bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-4 p-2 rounded-lg w-full"},"APPLY")])],64)}}});export{Vt as default};