import{r as u,T as B,w as D,c as O,o as b,j as T,e as d,b as t,d as l,p as U,Q as R,i as y,h as L,aa as z,ab as f,ac as E,t as p,a as Q,l as M,q as Y,ad as $,a7 as J,F as G,x as H}from"./app-CLnFNOc4.js";import{Q as x}from"./QSelect-BrvTVNhL.js";import{Q as K}from"./QBtnDropdown-CMCqR2fm.js";import{Q as W}from"./QPage-DhxHqyfT.js";import{A as X}from"./Admin-DUpmoHaT.js";import{u as Z}from"./use-quasar-BLOAHIeo.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./QMenu-DydHWm0B.js";import"./QLayout-DLfvAPOX.js";const te={class:"flex justify-between items-center zcard q-pa-md"},ae={class:"flex items-center q-gutter-md"},se={class:"row q-mt-sm"},le={class:"page-title"},oe={class:"col-xs-12"},ie={class:"table-auto border-collapse border border-gray-300 w-full mt-6 text-sm"},ne={class:"bg-gray-100"},de={class:"px-4 py-2 text-left text-gray-600"},pe=["checked"],re={class:"px-4 py-2"},ue=["value"],ce={class:"px-4 py-2"},me={class:"px-4 py-2"},ge={class:"px-4 py-2"},ve={class:"px-4 py-2"},be={class:"px-4 py-2"},ye={class:"px-4 py-2"},fe=["onClick"],xe={class:"flex justify-between items-center mt-4"},he=["disabled"],_e=["disabled"],we=Object.assign({layout:X},{__name:"SubmittedApplication",props:["jobDetails","applications"],setup(v){const h=Z(),j=v,m=u(""),n=u({data:[],last_page:1}),o=u({page:1,rowsPerPage:10}),_=u(!1),w=[10,20,50,100];o.value.rowsPerPage=w[0];const V=()=>{o.value.page=1,r()},g=B({application_ids:[],status:""}),r=()=>{_.value=!0;const s={page:o.value.page,per_page:o.value.rowsPerPage,search:m.value};H.get(route("admin.applications.show_submission",{jobDetails:j.jobDetails.id}),s,{preserveState:!0,preserveScroll:!0,onSuccess:({props:e})=>{n.value=e.applications,_.value=!1}})},N=()=>{o.value.page<n.value.last_page&&(o.value.page++,r())},q=()=>{o.value.page>1&&(o.value.page--,r())};D([o,m],r,{immediate:!0}),u(!1);const i=u([]),I=O({get:()=>n.value.data.length>0&&i.value.length===n.value.data.length,set:s=>k(s)});function k(s){i.value=s?n.value.data.map(e=>e.id):[]}D(()=>n.value.data,()=>{i.value=[]});const F=()=>{var s;if(i.value.length===0){alert("Please select at least one applicant.");return}g.application_ids=i.value,g.status="approved",h.dialog({title:"Confirmation",message:"Do you want to proceed with "+((s=i.value)==null?void 0:s.length)+" Applications",ok:"Yes",cancel:"No"}).onOk(()=>{g.put(route("admin.applications.bulkChangeStatus"),{onSuccess:()=>{var c;const e=((c=i.value)==null?void 0:c.length)+" Applications marked as Qualified";h.notify({type:"positive",message:e}),g.reset(),i.value=[],r()}})})};return(s,e)=>(b(),T(W,{padding:""},{default:d(()=>{var c;return[e[13]||(e[13]=t("p",{class:"page-title"},"SUBMITTED APPLICATIONS",-1)),t("div",te,[l(R,{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=a=>m.value=a),dense:"",outlined:"",placeholder:"Search",style:{width:"240px"},onInput:r},{append:d(()=>[l(U,{name:"search"})]),_:1},8,["modelValue"]),t("div",ae,[l(y,{onClick:F,color:"primary",disabled:i.value.length===0,label:"Mark as Qualified"},null,8,["disabled"]),l(L,{vertical:""}),l(K,{class:"q-ma-xs q-pa-xs",color:"primary",flat:"","dropdown-icon":"sort"},{default:d(()=>[l(z,{class:"q-pa-sm",style:{"min-width":"280px"}},{default:d(()=>[l(f,null,{default:d(()=>e[6]||(e[6]=[t("p",{class:"q-ma-none ztext-lg"},"Filter",-1)])),_:1}),l(f,null,{default:d(()=>[l(x,{modelValue:s.filterData.job,"onUpdate:modelValue":e[1]||(e[1]=a=>s.filterData.job=a),options:s.jobs,class:"my-input",dense:"",label:"Job",outlined:""},null,8,["modelValue","options"])]),_:1}),l(f,null,{default:d(()=>[l(x,{modelValue:s.filterData.district,"onUpdate:modelValue":e[2]||(e[2]=a=>s.filterData.district=a),options:s.districts,class:"my-input",dense:"",label:"District",outlined:""},null,8,["modelValue","options"])]),_:1}),l(E,null,{default:d(()=>[l(y,{flat:"",label:"Reset",onClick:s.resetFilter},null,8,["onClick"]),l(y,{color:"primary",label:"Filter",rounded:"",style:{"min-width":"100px"},onClick:s.doFilter},null,8,["onClick"])]),_:1})]),_:1})]),_:1})])]),t("div",se,[t("p",le,p((c=v.jobDetails)==null?void 0:c.post_name)+" : APPLICATIONS",1),t("div",oe,[t("table",ie,[t("thead",ne,[t("tr",null,[t("th",de,[t("input",{type:"checkbox",onChange:e[3]||(e[3]=a=>k(a.target.checked)),checked:I.value},null,40,pe)]),e[7]||(e[7]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Applicant Name",-1)),e[8]||(e[8]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Roll No",-1)),e[9]||(e[9]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Community",-1)),e[10]||(e[10]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Disability",-1)),e[11]||(e[11]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Status",-1)),e[12]||(e[12]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Actions",-1))])]),t("tbody",null,[(b(!0),Q(G,null,M(n.value.data,a=>{var P,C,A;return b(),Q("tr",{key:a.id,class:"hover:bg-gray-50 transition duration-150"},[t("td",re,[Y(t("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=S=>i.value=S),value:a.id},null,8,ue),[[$,i.value]])]),t("td",ce,p(((P=a.applicant.user)==null?void 0:P.name)||"N/A"),1),t("td",me,p(a.application_id||"N/A"),1),t("td",ge,p(((C=a.applicant)==null?void 0:C.community)||"N/A"),1),t("td",ve,p((A=a.applicant)!=null&&A.disability?"Yes":"No"),1),t("td",be,[t("span",{class:J(["px-2 py-1 rounded-full text-xs font-semibold",a.status==="approved"?"bg-green-100 text-green-800":a.status==="rejected"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"])},p(a.status||"Pending"),3)]),t("td",ye,[t("button",{onClick:S=>s.$inertia.get(s.route("admin.application.show_applicant_detail",{jobDetails:v.jobDetails.id,application:a.id})),class:"bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded mr-2 transition duration-150"}," OPEN ",8,fe)])])}),128))])]),t("div",xe,[l(x,{modelValue:o.value.rowsPerPage,"onUpdate:modelValue":[e[5]||(e[5]=a=>o.value.rowsPerPage=a),V],options:w,label:"Rows per page",dense:"",outlined:"",style:{width:"130px"}},null,8,["modelValue"]),t("div",null,[t("button",{onClick:q,disabled:o.value.page===1,class:"bg-gray-200 text-black py-1 px-4 rounded"}," Previous ",8,he),t("span",null,"Page "+p(o.value.page)+" of "+p(n.value.last_page),1),t("button",{onClick:N,disabled:o.value.page===n.value.last_page,class:"bg-gray-200 text-black py-1 px-4 rounded"}," Next ",8,_e)])])])])]}),_:1}))}}),Ne=ee(we,[["__scopeId","data-v-9bd0286d"]]);export{Ne as default};
