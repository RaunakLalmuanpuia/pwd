import{o as a,a as i,b as e,F as m,l as u,t as l,d as b,e as h,a5 as y,h as g,bl as f}from"./app-DGSfB9v9.js";import{A as v}from"./Admin-DeMXaItS.js";import"./QLayout-Bjn0ecJ_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const w={class:"py-12 bg-gray-50"},k={class:"bg-gray-50"},C={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},D={class:"bg-white shadow sm:rounded-lg"},j={class:"container mx-auto p-4"},E={class:"flex justify-between items-center mb-6"},S={class:"flex justify-between items-center"},$={class:"text-xl font-semibold"},B={class:"text-gray-600 mt-2"},L={class:"mt-4"},F={class:"mt-2 space-y-2"},N={class:"flex justify-between"},T={class:"text-gray-500 text-sm"},H=Object.assign({layout:v},{__name:"Show",props:{data:Object},setup(r){const d=s=>{const t={year:"numeric",month:"long",day:"numeric"};return new Date(s).toLocaleDateString(void 0,t)};function x(s){const[t,o,n]=s.split(":"),c=new Date;c.setHours(t,o,n);const p={hour:"numeric",minute:"numeric",hour12:!0};return c.toLocaleTimeString([],p)}const _=s=>{f.delete(route("exam.destroy",s),{})};return(s,t)=>(a(),i("div",w,[e("div",k,[e("div",C,[e("div",D,[e("div",j,[e("div",E,[t[1]||(t[1]=e("h1",{class:"text-2xl font-bold mb-6"},"Exams and Subjects",-1)),e("button",{class:"px-4 py-2 text-sm font-medium bg-blue-500 rounded hover:bg-blue-600 transition",onClick:t[0]||(t[0]=o=>s.$inertia.get(s.route("exams.create",r.data.id)))}," Create Exam ")]),(a(!0),i(m,null,u(r.data.exams,o=>(a(),i("div",{key:o.id,class:"mb-6 p-4 border rounded-lg shadow-md bg-white"},[e("div",S,[e("h2",$,l(o.exam_name),1),b(g,{class:"bg-yellow-500 hover:bg-yellow-600",onClick:n=>s.$inertia.get(s.route("exams.edit",o.id))},{default:h(()=>t[2]||(t[2]=[y(" Edit ")])),_:2},1032,["onClick"]),b(g,{onClick:n=>_(o.id),class:"sized-btn",color:"negative",outline:"",label:"Delete"},null,8,["onClick"])]),e("p",B,"Exam Date: "+l(d(o.exam_date)),1),e("div",L,[t[3]||(t[3]=e("h3",{class:"text-lg font-semibold"},"Subjects",-1)),e("ul",F,[(a(!0),i(m,null,u(o.subjects,n=>(a(),i("li",{key:n.id,class:"p-3 border rounded-lg bg-gray-50"},[e("div",N,[e("span",null,l(n.subject_name),1),e("span",T,l(d(n.exam_date))+" - "+l(x(n.exam_time)),1)])]))),128))])])]))),128))])])])])]))}});export{H as default};