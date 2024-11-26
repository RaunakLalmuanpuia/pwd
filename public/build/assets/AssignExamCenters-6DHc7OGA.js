import{r as b,T as g,o as s,a,b as e,t as d,F as u,i as x,u as m,f,C as h,aX as v,j as y}from"./app-CZ7qfYVO.js";import{A as w}from"./Admin-TmSClCnV.js";import"./QLayout-DHXd5nnE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={class:"max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg"},C={class:"text-2xl font-semibold text-center mb-6"},E={class:"text-lg font-semibold mb-2"},S=["onUpdate:modelValue","id"],j=["value"],A={key:0,class:"text-red-500 text-sm mt-2",id:"exam-center-help-{{ applicant.applicant_id }}",role:"alert"},O={class:"text-center"},V=["disabled"],B={key:0},D={key:1},U=Object.assign({layout:w},{__name:"AssignExamCenters",props:{exam:Object,applicants:Object,examCenters:Object},setup(l){const p=l,r=b({});p.applicants.forEach(t=>{r.value[t.applicant_id]=t.exam_center_id||null});const o=g({assignments:[]}),_=()=>{o.assignments=Object.keys(r.value).map(t=>({applicant_id:t,exam_center_id:r.value[t]})),o.post(route("exams.storeCenters",p.exam.id),{onSuccess:()=>{},onError:t=>{console.error(t)}})};return(t,c)=>(s(),a("div",k,[e("h1",C,"Assign/Edit Exam Centers for Exam: "+d(l.exam.exam_name),1),e("form",{onSubmit:f(_,["prevent"]),class:"space-y-6"},[(s(!0),a(u,null,x(l.applicants,n=>(s(),a("div",{key:n.id,class:"border p-4 rounded-lg shadow-sm"},[e("h2",E,d(n.applicant.user.name),1),e("div",null,[c[1]||(c[1]=e("label",{for:"exam-center-{{ applicant.applicant_id }}",class:"block text-sm font-medium text-gray-700"},"Select Exam Center",-1)),h(e("select",{"onUpdate:modelValue":i=>r.value[n.applicant_id]=i,id:"exam-center-"+n.applicant_id,class:"mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500","aria-describedby":"exam-center-help-{{ applicant.applicant_id }}"},[c[0]||(c[0]=e("option",{value:"",disabled:""},"Select Exam Center",-1)),(s(!0),a(u,null,x(l.examCenters,i=>(s(),a("option",{key:i.id,value:i.id},d(i.center_name)+" - "+d(i.location),9,j))),128))],8,S),[[v,r.value[n.applicant_id]]]),m(o).errors["assignments."+n.applicant_id]?(s(),a("div",A,d(m(o).errors["assignments."+n.applicant_id]),1)):y("",!0)])]))),128)),e("div",O,[e("button",{type:"submit",disabled:m(o).processing,class:"bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md w-full sm:w-auto disabled:opacity-50"},[m(o).processing?(s(),a("span",B,"Saving...")):(s(),a("span",D,"Save Assignments"))],8,V)])],32)]))}});export{U as default};
