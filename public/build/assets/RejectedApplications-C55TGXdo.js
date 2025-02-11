import{Q as N}from"./QSpace-DqWtO-l_.js";import{r as f,T as q,A as F,j as I,o as y,d as R,w as d,b as t,a as s,Q as B,D as T,z as U,n as u,m as $,I as E,J as b,K as L,t as p,c as j,p as z,E as O,L as J,H as K,F as M,C as x}from"./app-dcaBrJ0A.js";import{Q as H}from"./QTabs-DROw8FzC.js";import{Q as v}from"./QSelect-C-6DolNF.js";import{Q as Y}from"./QBtnDropdown-CLeZZ0sh.js";import{Q as G}from"./QPage--AueRtob.js";import{A as W}from"./Admin-BfIQrQ2P.js";import{u as X}from"./use-quasar-C5l40j-L.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./QLayout-CYe35r64.js";import"./rtl-DFPa-2ov.js";import"./QChip-FeGsgm-F.js";import"./QMenu-BS74onJp.js";const ee={class:"flex justify-between items-center zcard q-pa-md"},te={class:"flex items-center q-gutter-md"},ae={class:"row q-mt-sm"},le={class:"page-title"},se={class:"col-xs-12"},oe={class:"border-collapse border border-gray-300 rounded-lg w-full mt-4"},ne={class:"bg-gray-100"},ie={class:"px-4 py-2 text-left text-gray-600"},re=["checked"],de={class:"px-4 py-2"},pe=["value"],ue={class:"px-4 py-2"},ce={class:"px-4 py-2"},me={class:"px-4 py-2"},ge={class:"px-4 py-2"},fe={class:"px-4 py-2"},ye={class:"px-4 py-2"},be={class:"px-4 py-2"},xe=["onClick"],ve={class:"flex justify-between items-center mt-4"},he={class:"flex items-center q-gutter-sm"},ke={class:"text-gray-600"},Ce=Object.assign({layout:W},{__name:"RejectedApplications",props:["jobDetails","applications","search","perPage"],setup(o){const h=X(),n=o;f(!1);const m=q({application_ids:[],status:""}),i=F({search:n==null?void 0:n.search,tab:route().current(),perPage:(n==null?void 0:n.perPage)||3});f("");const k=a=>{x.get(route("admin.applications.show_rejected",n.jobDetails.id),{search:i.search,perPage:i.perPage})},V=a=>{x.get(route(a))},g=a=>{a&&x.get(a,{search:i.search,perPage:i.perPage})},D=a=>({"bg-green-100 text-green-800":a==="approved","bg-red-100 text-red-800":a==="rejected","bg-yellow-100 text-yellow-800":a==="pending"});f(null);const r=f([]),_=I({get:()=>n.applications.data.length>0&&r.value.length===n.applications.data.length,set:a=>C(a)});function C(a){r.value=a?n.applications.data.map(e=>e.id):[]}const S=()=>{var a;if(r.value.length===0){alert("Please select at least one applicant.");return}m.application_ids=r.value,m.status="approved",h.dialog({title:"Confirmation",message:"Do you want to proceed with "+((a=r.value)==null?void 0:a.length)+" Applications",ok:"Yes",cancel:"No"}).onOk(()=>{m.put(route("admin.applications.bulkChangeStatus"),{onSuccess:()=>{var c;const e=((c=r.value)==null?void 0:c.length)+" Applications marked as not eligible";h.notify({type:"positive",message:e}),m.reset(),r.value=[]}})})};return(a,e)=>(y(),R(G,{padding:""},{default:d(()=>{var c;return[e[19]||(e[19]=t("p",{class:"page-title"},"REJECTED APPLICATIONS",-1)),t("div",ee,[s(H,{stretch:"",shrink:"",modelValue:i.tab,"onUpdate:modelValue":[e[1]||(e[1]=l=>i.tab=l),V],align:"start"},{default:d(()=>[s(N),s(B,{modelValue:i.search,"onUpdate:modelValue":e[0]||(e[0]=l=>i.search=l),autofocus:"",outlined:"",dense:"",onKeyup:T(k,["enter"]),"bg-color":"white",placeholder:"Search"},{append:d(()=>[s(U,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),t("div",te,[s(u,{onClick:S,color:"primary",disabled:r.value.length===0,label:"Mark as Qualified"},null,8,["disabled"]),s($,{vertical:""}),s(Y,{class:"q-ma-xs q-pa-xs",color:"primary",flat:"","dropdown-icon":"sort"},{default:d(()=>[s(E,{class:"q-pa-sm",style:{"min-width":"280px"}},{default:d(()=>[s(b,null,{default:d(()=>e[11]||(e[11]=[t("p",{class:"q-ma-none ztext-lg"},"Filter",-1)])),_:1}),s(b,null,{default:d(()=>[s(v,{modelValue:a.filterData.job,"onUpdate:modelValue":e[2]||(e[2]=l=>a.filterData.job=l),options:a.jobs,class:"my-input",dense:"",label:"Job",outlined:""},null,8,["modelValue","options"])]),_:1}),s(b,null,{default:d(()=>[s(v,{modelValue:a.filterData.district,"onUpdate:modelValue":e[3]||(e[3]=l=>a.filterData.district=l),options:a.districts,class:"my-input",dense:"",label:"District",outlined:""},null,8,["modelValue","options"])]),_:1}),s(L,null,{default:d(()=>[s(u,{flat:"",label:"Reset",onClick:a.resetFilter},null,8,["onClick"]),s(u,{color:"primary",label:"Filter",rounded:"",style:{"min-width":"100px"},onClick:a.doFilter},null,8,["onClick"])]),_:1})]),_:1})]),_:1})])]),t("div",ae,[t("p",le,"APPLICATIONS: "+p((c=o.jobDetails)==null?void 0:c.post_name),1),t("div",se,[t("table",oe,[t("thead",ne,[t("tr",null,[t("th",ie,[t("input",{type:"checkbox",onChange:e[4]||(e[4]=l=>C(l.target.checked)),checked:_.value},null,40,re)]),e[12]||(e[12]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Applicant Name",-1)),e[13]||(e[13]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Application No.",-1)),e[14]||(e[14]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Parent Name",-1)),e[15]||(e[15]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Community",-1)),e[16]||(e[16]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Status",-1)),e[17]||(e[17]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Reason",-1)),e[18]||(e[18]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Actions",-1))])]),t("tbody",null,[(y(!0),j(M,null,z(o.applications.data,l=>{var A,w,P;return y(),j("tr",{key:l.id,class:"hover:bg-gray-50"},[t("td",de,[O(t("input",{type:"checkbox","onUpdate:modelValue":e[5]||(e[5]=Q=>r.value=Q),value:l.id},null,8,pe),[[J,r.value]])]),t("td",ue,p(((A=l.applicant.user)==null?void 0:A.name)||"N/A"),1),t("td",ce,p(l.application_id||"N/A"),1),t("td",me,p(((w=l.applicant)==null?void 0:w.parents_name)||"N/A"),1),t("td",ge,p(((P=l.applicant)==null?void 0:P.community)||"N/A"),1),t("td",fe,[t("span",{class:K(D(l.status))},p(l.status||"Pending"),3)]),t("td",ye,p(l.rejection_note||"N/A"),1),t("td",be,[t("button",{onClick:Q=>a.$inertia.get(a.route("admin.application.show_applicant_detail",{jobDetails:o.jobDetails.id,application:l.id})),class:"bg-blue-500 text-white py-1 px-4 rounded"}," Preview ",8,xe)])])}),128))])]),t("div",ve,[s(v,{modelValue:i.perPage,"onUpdate:modelValue":[e[6]||(e[6]=l=>i.perPage=l),k],dense:"",outlined:"",options:[5,10,20,25],label:"Results per page",style:{width:"150px"}},null,8,["modelValue"]),t("div",he,[s(u,{disable:o.applications.current_page===1,onClick:e[7]||(e[7]=l=>g(o.applications.first_page_url)),flat:"",round:"",icon:"first_page"},null,8,["disable"]),s(u,{disable:!o.applications.prev_page_url,onClick:e[8]||(e[8]=l=>g(o.applications.prev_page_url)),flat:"",round:"",icon:"chevron_left"},null,8,["disable"]),t("span",ke," Page "+p(o.applications.current_page)+" of "+p(o.applications.last_page),1),s(u,{disable:!o.applications.next_page_url,onClick:e[9]||(e[9]=l=>g(o.applications.next_page_url)),flat:"",round:"",icon:"chevron_right"},null,8,["disable"]),s(u,{disable:o.applications.current_page===o.applications.last_page,onClick:e[10]||(e[10]=l=>g(o.applications.last_page_url)),flat:"",round:"",icon:"last_page"},null,8,["disable"])])])])])]}),_:1}))}}),Re=Z(Ce,[["__scopeId","data-v-052396fc"]]);export{Re as default};
