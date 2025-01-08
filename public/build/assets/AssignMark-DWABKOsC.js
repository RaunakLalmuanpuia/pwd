import{r as y,T as h,o as r,c as o,b as e,t as m,F as u,p as c,k as g,e as v,W as M,X as _}from"./app-CdMXUWxO.js";import{A as w}from"./Admin-BLHX9y9k.js";import"./QLayout-DqCdtrDG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const A={class:"max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg"},j={class:"text-2xl font-semibold text-center mb-6"},E={class:"text-lg font-semibold text-gray-700 mb-4"},D={class:"block text-sm font-medium text-gray-700"},V=["onUpdate:modelValue","placeholder"],B={key:0,class:"mt-8"},F={class:"overflow-x-auto"},L={class:"min-w-full table-auto"},N={class:"bg-gray-200"},S={class:"border px-4 py-2"},W=Object.assign({layout:w},{__name:"AssignMark",props:{exam:Object,applicants:Array,subjects:Array,examMarks:Array},setup(l){const d=l,b=(i,n)=>{const t=d.examMarks[i];if(t){const a=t.find(s=>s.subject_id===n);return a?a.marks:null}return null},p=y(d.applicants.map((i,n)=>{const t={};return d.subjects.forEach(a=>{const s=b(i.id,a.id);t[a.id]=s!==null?s:null}),t})),x=h({marks:[]}),k=()=>{const i=[];d.applicants.forEach((n,t)=>{d.subjects.forEach(a=>{const s=p.value[t][a.id];s!==null&&i.push({applicant_id:n.id,subject_id:a.id,marks:s})})}),x.marks=i,x.post(route("exams.storeMarks",d.exam.id))};return(i,n)=>(r(),o("div",A,[e("h1",j,"Assign Marks for Exam: "+m(l.exam.exam_name),1),e("form",{onSubmit:g(k,["prevent"]),class:"space-y-6"},[(r(!0),o(u,null,c(l.applicants,(t,a)=>(r(),o("div",{key:t.id,class:"border p-4 rounded-lg shadow-sm bg-gray-50"},[e("h2",E,m(t.user.name),1),(r(!0),o(u,null,c(l.subjects,(s,O)=>(r(),o("div",{key:s.id,class:"mb-4"},[e("label",D,m(s.subject_name),1),M(e("input",{"onUpdate:modelValue":f=>p.value[a][s.id]=f,type:"number",min:"0",placeholder:`Marks for ${s.subject_name}`,class:"mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,8,V),[[_,p.value[a][s.id]]])]))),128))]))),128)),n[0]||(n[0]=e("div",{class:"text-center"},[e("button",{type:"submit",class:"bg-blue-600 text-white px-6 py-3 rounded-md shadow-md disabled:opacity-50"},[e("span",null,"Save Marks")])],-1))],32),l.examMarks.length?(r(),o("div",B,[n[2]||(n[2]=e("h2",{class:"text-lg font-semibold mb-4"},"Marks List",-1)),e("div",F,[e("table",L,[e("thead",N,[e("tr",null,[n[1]||(n[1]=e("th",{class:"border px-4 py-2 text-left"},"Applicant Name",-1)),(r(!0),o(u,null,c(l.subjects,t=>(r(),o("th",{key:t.id,class:"border px-4 py-2 text-left"},m(t.subject_name),1))),128))])]),e("tbody",null,[(r(!0),o(u,null,c(l.applicants,(t,a)=>(r(),o("tr",{key:t.id},[e("td",S,m(t.user.name),1),(r(!0),o(u,null,c(l.subjects,s=>(r(),o("td",{key:s.id,class:"border px-4 py-2"},m(b(t.id,s.id)),1))),128))]))),128))])])])])):v("",!0)]))}});export{W as default};