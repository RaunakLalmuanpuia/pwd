import{T as F,r as y,c as T,o as l,a,b as t,t as o,aR as i,F as c,i as v,C as U,aS as $,j as p,n as q}from"./app-DPkQUZ_H.js";import{A as B}from"./Admin-DjyVIRTV.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./QLayout-WtSi1Uhk.js";const Y={class:"py-12"},z={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},E={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},J={class:"container mx-auto p-6"},M={class:"mb-8 bg-white shadow-lg rounded-lg p-6 border border-gray-200"},O={class:"text-2xl font-semibold text-gray-800 mt-4"},Q={class:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"},G={class:"text-sm text-gray-600"},H={class:"font-semibold"},K={class:"text-sm text-gray-600"},W={class:"font-semibold"},X={class:"text-sm text-gray-600"},Z={class:"font-semibold text-green-600"},tt={class:"text-sm text-gray-600"},st={class:"font-semibold"},et={class:"text-sm text-gray-600"},ot={class:"font-semibold"},nt={class:"text-sm text-gray-600"},lt={class:"font-semibold"},at={class:"text-sm text-gray-600"},it={class:"font-semibold text-green-600"},dt={class:"text-sm text-gray-600 mt-4"},rt={class:"font-semibold"},ut={key:0,class:"mt-6"},mt={class:"list-disc pl-5 mt-2"},ct={key:1,class:"text-gray-500 mt-2"},pt={class:"mt-4 mb-6"},xt={class:"table-auto border-collapse border border-gray-300 w-full mt-6 text-sm"},gt={class:"px-4 py-2"},bt={class:"px-4 py-2"},yt={class:"px-4 py-2"},vt={class:"px-4 py-2"},ft={class:"px-4 py-2"},_t=["onClick"],ht=["onClick"],Dt=["onClick"],wt={key:0,class:"fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"},At={class:"bg-white rounded-lg p-6 w-3/4 max-w-3xl transition-all transform scale-105"},jt={key:0,class:"mt-4"},kt={class:"list-disc pl-5"},Nt=["href"],Ct={class:"mt-4 text-right"},St=Object.assign({layout:B},{__name:"AdminApplication",props:["jobDetails"],setup(n){const L=n,x=F({status:""}),g=y(!1),d=y(null),b=y(""),P=T(()=>L.jobDetails.applications.filter(r=>{var u;return(((u=r.applicant.user)==null?void 0:u.name.toLowerCase())||"").includes(b.value.toLowerCase())})),V=r=>{d.value=r,g.value=!0},f=(r,s)=>{x.status=s,x.put(route("admin.applications.changeStatus",{application:r}),{onSuccess:()=>{x.reset()}})},R=r=>{const s={year:"numeric",month:"long",day:"numeric"};return new Date(r).toLocaleDateString(void 0,s)};return(r,s)=>{var u,_,h,D,w,A,j,k;return l(),a(c,null,[t("div",Y,[t("div",z,[t("div",E,[t("div",J,[s[12]||(s[12]=t("h1",{class:"text-3xl font-bold mb-8 text-center text-gray-800"},"Admin - Job Applications",-1)),t("div",M,[t("h2",O,o(n.jobDetails.post_name),1),t("div",Q,[t("p",G,[s[2]||(s[2]=i("Department ID: ")),t("span",H,o(n.jobDetails.department_id),1)]),t("p",K,[s[3]||(s[3]=i("Number of Posts: ")),t("span",W,o(n.jobDetails.no_of_post),1)]),t("p",X,[s[4]||(s[4]=i("Salary: ")),t("span",Z,"₹"+o(n.jobDetails.salary),1)]),t("p",tt,[s[5]||(s[5]=i("Age Limit: ")),t("span",st,o(n.jobDetails.age_limit),1)]),t("p",et,[s[6]||(s[6]=i("Qualification: ")),t("span",ot,o(n.jobDetails.qualification),1)]),t("p",nt,[s[7]||(s[7]=i("Application Deadline: ")),t("span",lt,o(R(n.jobDetails.application_deadline)),1)]),t("p",at,[s[8]||(s[8]=i("Application Fee: ")),t("span",it,"₹"+o(n.jobDetails.application_fee),1)])]),t("p",dt,[s[9]||(s[9]=i("Description: ")),t("span",rt,o(n.jobDetails.description),1)]),n.jobDetails.documents&&n.jobDetails.documents.length>0?(l(),a("div",ut,[s[10]||(s[10]=t("h3",{class:"font-semibold text-lg text-gray-700"},"Required Documents",-1)),t("ul",mt,[(l(!0),a(c,null,v(n.jobDetails.documents,e=>(l(),a("li",{key:e.id,class:"text-gray-600"},o(e.document_name||"Unnamed Document"),1))),128))])])):(l(),a("p",ct,"No Required Documents")),t("div",pt,[U(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>b.value=e),placeholder:"Search by Applicant Name",class:"w-full p-2 border border-gray-300 rounded"},null,512),[[$,b.value]])]),t("table",xt,[s[11]||(s[11]=t("thead",{class:"bg-gray-100"},[t("tr",null,[t("th",{class:"px-4 py-2 text-left text-gray-600"},"Applicant Name"),t("th",{class:"px-4 py-2 text-left text-gray-600"},"Community"),t("th",{class:"px-4 py-2 text-left text-gray-600"},"Disability"),t("th",{class:"px-4 py-2 text-left text-gray-600"},"Status"),t("th",{class:"px-4 py-2 text-left text-gray-600"},"Actions")])],-1)),t("tbody",null,[(l(!0),a(c,null,v(P.value,e=>{var m,N,C;return l(),a("tr",{key:e.id,class:"hover:bg-gray-50 transition duration-150"},[t("td",gt,o(((m=e.applicant.user)==null?void 0:m.name)||"N/A"),1),t("td",bt,o(((N=e.applicant)==null?void 0:N.community)||"N/A"),1),t("td",yt,o((C=e.applicant)!=null&&C.disability?"Yes":"No"),1),t("td",vt,[t("span",{class:q(["px-2 py-1 rounded-full text-xs font-semibold",e.status==="approved"?"bg-green-100 text-green-800":e.status==="rejected"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"])},o(e.status||"Pending"),3)]),t("td",ft,[t("button",{onClick:S=>V(e),class:"bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded mr-2 transition duration-150"}," Preview ",8,_t),e.status!=="approved"?(l(),a("button",{key:0,onClick:S=>f(e.id,"approved"),class:"bg-green-500 hover:bg-green-700 text-white py-1 px-4 rounded mr-2 transition duration-150"}," Approve ",8,ht)):p("",!0),e.status!=="rejected"?(l(),a("button",{key:1,onClick:S=>f(e.id,"rejected"),class:"bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded transition duration-150"}," Reject ",8,Dt)):p("",!0)])])}),128))])])])])])])]),g.value?(l(),a("div",wt,[t("div",At,[s[20]||(s[20]=t("h2",{class:"text-xl font-semibold mb-4"},"Application Preview",-1)),t("p",null,[s[13]||(s[13]=t("strong",null,"Applicant Name:",-1)),i(" "+o(((_=(u=d.value)==null?void 0:u.applicant.user)==null?void 0:_.name)||"N/A"),1)]),t("p",null,[s[14]||(s[14]=t("strong",null,"Community:",-1)),i(" "+o(((D=(h=d.value)==null?void 0:h.applicant)==null?void 0:D.community)||"N/A"),1)]),t("p",null,[s[15]||(s[15]=t("strong",null,"Disability:",-1)),i(" "+o((A=(w=d.value)==null?void 0:w.applicant)!=null&&A.disability?"Yes":"No"),1)]),t("p",null,[s[16]||(s[16]=t("strong",null,"Status:",-1)),i(" "+o(((j=d.value)==null?void 0:j.status)||"Pending"),1)]),(k=d.value)!=null&&k.application_documents&&d.value.application_documents.length>0?(l(),a("div",jt,[s[19]||(s[19]=t("strong",null,"Uploaded Documents:",-1)),t("ul",kt,[(l(!0),a(c,null,v(d.value.application_documents,e=>{var m;return l(),a("li",{key:e.id,class:"text-gray-600"},[t("div",null,[s[17]||(s[17]=t("strong",null,"Document Name:",-1)),i(" "+o(((m=e.job_document)==null?void 0:m.document_name)||"Unnamed Document"),1)]),t("div",null,[s[18]||(s[18]=t("strong",null,"Path:",-1)),t("a",{href:e.document_path,target:"_blank",class:"text-blue-500 underline"},"View Document",8,Nt)])])}),128))])])):p("",!0),t("div",Ct,[t("button",{onClick:s[1]||(s[1]=e=>g.value=!1),class:"bg-gray-500 hover:bg-gray-700 text-white py-1 px-4 rounded"}," Close ")])])])):p("",!0)],64)}}}),Ft=I(St,[["__scopeId","data-v-f7a0b593"]]);export{Ft as default};
