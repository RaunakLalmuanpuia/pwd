import{T,r as v,h as R,j as ae,o as r,d as $,w as o,b as t,a as l,z as se,Q as oe,n as x,m as ne,I as P,J as _,K as N,t as i,c as b,p as j,E as ie,L as de,H as re,F as q,e as E,g as z,v as M,u as I,C as ue}from"./app-dcaBrJ0A.js";import{Q as V}from"./QSelect-C-6DolNF.js";import{Q as pe}from"./QBtnDropdown-CLeZZ0sh.js";import{Q as F}from"./QBanner-YgQ_hxra.js";import{Q as me,c as ce,a as J}from"./QLayout-CYe35r64.js";import{Q as ge}from"./QPage--AueRtob.js";import{A as ve}from"./Admin-BfIQrQ2P.js";import{u as xe}from"./use-quasar-C5l40j-L.js";import{_ as be}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./QChip-FeGsgm-F.js";import"./QMenu-BS74onJp.js";import"./rtl-DFPa-2ov.js";const fe={class:"flex justify-between items-center zcard q-pa-md"},ye={class:"flex items-center q-gutter-md"},_e={class:"row q-mt-sm"},ke={class:"page-title"},Ce={class:"col-xs-12"},he={class:"table-auto border-collapse border border-gray-300 w-full mt-6 text-sm"},we={class:"bg-gray-100"},Ae={class:"px-4 py-2 text-left text-gray-600"},Pe=["checked"],Ve={class:"px-4 py-2"},De=["value"],Se={class:"px-4 py-2"},Qe={class:"px-4 py-2"},Ne={class:"px-4 py-2"},je={class:"px-4 py-2"},qe={class:"px-4 py-2"},Ee={class:"px-4 py-2"},Ie={class:"px-4 py-2"},Fe={class:"px-4 py-2"},Ue=["onClick"],Oe={class:"px-4 py-2"},Be=["onClick"],Le={class:"flex justify-between items-center mt-4"},Te=["disabled"],Re=["disabled"],$e={class:"text-h6 q-mb-md"},ze={key:0},Me={key:1},Je={key:2},Ye={class:"q-pa-sm"},He={class:"text-caption"},Ke={class:"text-h6"},Ge=Object.assign({layout:ve},{__name:"ApprovedApplications_old",props:["jobDetails","examCenters","applications"],setup(h){const k=xe(),Y=h,m=T({application_ids:[],status:""}),f=T({exam_center_id:[],application_ids:[]}),w=v(!1),C=v(!1),A=v(""),u=v({data:[],last_page:1}),d=v({page:1,rowsPerPage:10}),U=v(!1),O=[10,20,50,100];d.value.rowsPerPage=O[0];const H=()=>{d.value.page=1,c()},c=()=>{U.value=!0;const s={page:d.value.page,per_page:d.value.rowsPerPage,search:A.value};ue.get(route("admin.applications.show_approved",{jobDetails:Y.jobDetails.id}),s,{preserveState:!0,preserveScroll:!0,onSuccess:({props:e})=>{u.value=e.applications,U.value=!1}})},K=()=>{d.value.page<u.value.last_page&&(d.value.page++,c())},G=()=>{d.value.page>1&&(d.value.page--,c())};R([d,A],c,{immediate:!0});const y=v(null),n=v([]),W=ae({get:()=>u.value.data.length>0&&n.value.length===u.value.data.length,set:s=>B(s)});function B(s){n.value=s?u.value.data.map(e=>e.id):[]}R(()=>u.value.data,()=>{n.value=[]});const X=s=>{y.value=s.applicant,w.value=!0},Z=()=>{C.value=!0},ee=()=>{if(!f.exam_center_id){alert("Please select an exam center.");return}f.application_ids=n.value,f.post(route("exams.allotCenters"),{onSuccess:()=>{var e;const s="Exam Center assigned for "+((e=n.value)==null?void 0:e.length)+" applications";k.notify({type:"positive",message:s}),C.value=!1,f.reset(),c()},onError:s=>{console.error(s),alert("An error occurred while assigning exam centers.")}})},te=()=>{var s;if(n.value.length===0){alert("Please select at least one applicant.");return}m.application_ids=n.value,m.status="pending",k.dialog({title:"Confirmation",message:"Do you want to proceed with "+((s=n.value)==null?void 0:s.length)+" Applications",ok:"Yes",cancel:"No"}).onOk(()=>{m.put(route("admin.applications.bulkChangeStatus"),{onSuccess:()=>{var g;const e=((g=n.value)==null?void 0:g.length)+" Applications marked as disqualified";k.notify({type:"positive",message:e}),m.reset(),n.value=[],c()}})})},le=()=>{var s;if(n.value.length===0){alert("Please select at least one applicant.");return}m.application_ids=n.value,m.status="eligible",k.dialog({title:"Confirmation",message:"Do you want to proceed with "+((s=n.value)==null?void 0:s.length)+" Applications",ok:"Yes",cancel:"No"}).onOk(()=>{m.put(route("admin.applications.bulkChangeStatus"),{onSuccess:()=>{var g;const e=((g=n.value)==null?void 0:g.length)+" Applications marked as eligible";k.notify({type:"positive",message:e}),m.reset(),n.value=[],c()}})})};return(s,e)=>(r(),$(ge,{padding:""},{default:o(()=>{var g;return[e[28]||(e[28]=t("p",{class:"page-title"},"QUALIFIED LIST",-1)),t("div",fe,[l(oe,{modelValue:A.value,"onUpdate:modelValue":e[0]||(e[0]=a=>A.value=a),dense:"",outlined:"",placeholder:"Search",style:{width:"240px"},onInput:c},{append:o(()=>[l(se,{name:"search"})]),_:1},8,["modelValue"]),t("div",ye,[l(x,{onClick:Z,color:"primary",disabled:n.value.length===0,label:"Assign Exam Center"},null,8,["disabled"]),l(x,{onClick:te,color:"primary",disabled:n.value.length===0,label:"Mark as Disqualified"},null,8,["disabled"]),l(x,{onClick:le,color:"primary",disabled:n.value.length===0,label:"Mark as Eligible"},null,8,["disabled"]),l(ne,{vertical:""}),l(pe,{class:"q-ma-xs q-pa-xs",color:"primary",flat:"","dropdown-icon":"sort"},{default:o(()=>[l(P,{class:"q-pa-sm",style:{"min-width":"280px"}},{default:o(()=>[l(_,null,{default:o(()=>e[11]||(e[11]=[t("p",{class:"q-ma-none ztext-lg"},"Filter",-1)])),_:1}),l(_,null,{default:o(()=>[l(V,{modelValue:s.filterData.job,"onUpdate:modelValue":e[1]||(e[1]=a=>s.filterData.job=a),options:s.jobs,class:"my-input",dense:"",label:"Job",outlined:""},null,8,["modelValue","options"])]),_:1}),l(_,null,{default:o(()=>[l(V,{modelValue:s.filterData.district,"onUpdate:modelValue":e[2]||(e[2]=a=>s.filterData.district=a),options:s.districts,class:"my-input",dense:"",label:"District",outlined:""},null,8,["modelValue","options"])]),_:1}),l(N,null,{default:o(()=>[l(x,{flat:"",label:"Reset",onClick:s.resetFilter},null,8,["onClick"]),l(x,{color:"primary",label:"Filter",rounded:"",style:{"min-width":"100px"},onClick:s.doFilter},null,8,["onClick"])]),_:1})]),_:1})]),_:1})])]),t("div",_e,[t("p",ke,i((g=h.jobDetails)==null?void 0:g.post_name)+" : APPLICATIONS",1),t("div",Ce,[t("table",he,[t("thead",we,[t("tr",null,[t("th",Ae,[t("input",{type:"checkbox",onChange:e[3]||(e[3]=a=>B(a.target.checked)),checked:W.value},null,40,Pe)]),e[12]||(e[12]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Applicant Name",-1)),e[13]||(e[13]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Application No",-1)),e[14]||(e[14]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Roll No",-1)),e[15]||(e[15]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Parent Name",-1)),e[16]||(e[16]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Community",-1)),e[17]||(e[17]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Exam Center",-1)),e[18]||(e[18]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Status",-1)),e[19]||(e[19]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Actions",-1)),e[20]||(e[20]=t("th",{class:"px-4 py-2 text-left text-gray-600"},"Marks",-1))])]),t("tbody",null,[(r(!0),b(q,null,j(u.value.data,a=>{var D,p,S,L;return r(),b("tr",{key:a.id,class:"hover:bg-gray-50 transition duration-150"},[t("td",Ve,[ie(t("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=Q=>n.value=Q),value:a.id},null,8,De),[[de,n.value]])]),t("td",Se,i(((D=a.applicant.user)==null?void 0:D.name)||"N/A"),1),t("td",Qe,i(a.application_id||"N/A"),1),t("td",Ne,i(a.roll_no||"N/A"),1),t("td",je,i(((p=a.applicant)==null?void 0:p.parents_name)||"N/A"),1),t("td",qe,i(((S=a.applicant)==null?void 0:S.community)||"N/A"),1),t("td",Ee,i(((L=a.exam_center)==null?void 0:L.center_name)||"N/A"),1),t("td",Ie,[t("span",{class:re(["px-2 py-1 rounded-full text-xs font-semibold",a.status==="approved"?"bg-green-100 text-green-800":a.status==="rejected"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"])},i(a.status||"Pending"),3)]),t("td",Fe,[t("button",{onClick:Q=>s.$inertia.get(s.route("admin.application.show_applicant_detail",{jobDetails:h.jobDetails.id,application:a.id})),class:"bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded mr-2 transition duration-150"}," OPEN ",8,Ue)]),t("td",Oe,[t("button",{onClick:Q=>X(a),class:"bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded mr-2 transition duration-150"}," View Marks ",8,Be)])])}),128))])]),t("div",Le,[l(V,{modelValue:d.value.rowsPerPage,"onUpdate:modelValue":[e[5]||(e[5]=a=>d.value.rowsPerPage=a),H],options:O,label:"Rows per page",dense:"",outlined:"",style:{width:"130px"}},null,8,["modelValue"]),t("div",null,[t("button",{onClick:G,disabled:d.value.page===1,class:"bg-gray-200 text-black py-1 px-4 rounded"}," Previous ",8,Te),t("span",null,"Page "+i(d.value.page)+" of "+i(u.value.last_page),1),t("button",{onClick:K,disabled:d.value.page===u.value.last_page,class:"bg-gray-200 text-black py-1 px-4 rounded"}," Next ",8,Re)])])])]),l(M,{modelValue:w.value,"onUpdate:modelValue":e[7]||(e[7]=a=>w.value=a),persistent:""},{default:o(()=>[l(P,{style:{"min-width":"450px"}},{default:o(()=>[l(_,null,{default:o(()=>[t("div",$e,"Exam Details: "+i(y.value.user.name),1),y.value.exams.length===0?(r(),b("div",ze,[l(F,{class:"bg-warning text-black q-mb-md"},{default:o(()=>e[21]||(e[21]=[t("div",null,"No exams found for this applicant.",-1)])),_:1})])):E("",!0),y.value.exam_marks.length===0?(r(),b("div",Me,[l(F,{class:"bg-warning text-black q-mb-md"},{default:o(()=>e[22]||(e[22]=[t("div",null,"No marks assigned for the selected exams.",-1)])),_:1})])):E("",!0),y.value.exam_marks.length!==0?(r(),b("div",Je,[(r(!0),b(q,null,j(y.value.exams,(a,D)=>(r(),b("div",{key:a.id,class:"q-mt-md"},[t("div",Ye,[l(F,{class:"bg-primary text-white q-mb-md"},{default:o(()=>[t("div",null,[e[23]||(e[23]=t("strong",null,"Exam Name:",-1)),z(" "+i(a.exam_name)+" ",1),e[24]||(e[24]=t("br",null,null,-1)),e[25]||(e[25]=t("strong",null,"Exam Date:",-1)),z(" "+i(a.exam_date),1)])]),_:2},1024),l(P,{bordered:"",class:"q-pa-none"},{default:o(()=>[l(_,null,{default:o(()=>[e[26]||(e[26]=t("div",null,[t("strong",null,"Subjects:")],-1)),l(me,{class:"q-mt-sm"},{default:o(()=>[(r(!0),b(q,null,j(y.value.exam_marks.filter(p=>p.subject.exam_id===a.id),(p,S)=>(r(),$(ce,{key:p.id,class:"q-mb-xs"},{default:o(()=>[l(J,null,{default:o(()=>[t("div",null,[t("strong",null,i(p.subject.subject_name),1)]),t("div",He,"Exam Date: "+i(p.subject.exam_date),1)]),_:2},1024),l(J,{side:""},{default:o(()=>[t("div",Ke,i(p.marks)+" Marks",1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))])):E("",!0)]),_:1}),l(N,null,{default:o(()=>[l(x,{flat:"",label:"Close",onClick:e[6]||(e[6]=a=>w.value=!1),color:"primary"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(M,{modelValue:C.value,"onUpdate:modelValue":e[10]||(e[10]=a=>C.value=a),persistent:""},{default:o(()=>[l(P,{style:{"min-width":"450px"}},{default:o(()=>[l(_,null,{default:o(()=>[e[27]||(e[27]=t("div",{class:"text-h6 q-mb-md"},"Assign Exam Center to Selected Applicants",-1)),l(V,{modelValue:I(f).exam_center_id,"onUpdate:modelValue":e[8]||(e[8]=a=>I(f).exam_center_id=a),options:h.examCenters,label:"Select Exam Center",dense:"",outlined:"","option-label":"center_name","option-value":"id"},null,8,["modelValue","options"])]),_:1}),l(N,null,{default:o(()=>[l(x,{flat:"",label:"Cancel",onClick:e[9]||(e[9]=a=>C.value=!1),color:"primary"}),l(x,{flat:"",disable:!I(f).exam_center_id,label:"Assign",onClick:ee,color:"primary"},null,8,["disable"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]}),_:1}))}}),rt=be(Ge,[["__scopeId","data-v-39f06a5e"]]);export{rt as default};
