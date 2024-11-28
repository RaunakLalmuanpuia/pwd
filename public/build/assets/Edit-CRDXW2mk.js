import{aY as R,T as H,r as J,o as n,a as l,b as e,f as Y,p as u,a9 as c,u as i,aa as b,t as d,k as g,F as v,l as w,d as f,h as _,bl as M,av as G,e as h,a5 as C}from"./app-CKpvvMs_.js";import{A as I}from"./Admin-tUpMJlFe.js";import"./QLayout-CsQH2OCr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const K={class:"py-12 bg-gray-50"},W={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},X={class:"bg-white shadow sm:rounded-lg"},Z={class:"p-6"},ee={class:"mb-3"},te={key:0,class:"input-error"},oe={class:"mb-3"},se={key:0,class:"input-error"},ie={class:"mb-3"},ae={key:0,class:"input-error"},ne={class:"mb-3"},le={key:0,class:"input-error"},re={class:"mb-3"},de={key:0,class:"input-error"},me={class:"mb-3"},ue={key:0,class:"input-error"},pe={class:"mb-3"},ce={key:0,class:"input-error"},be={class:"mb-3"},ge={key:0,class:"input-error"},fe=["onUpdate:modelValue"],_e=["onUpdate:modelValue"],ye=["onUpdate:modelValue"],xe=["onUpdate:modelValue"],ve=["onClick"],ke={class:"col-xs-12"},we={class:"flex q-gutter-sm"},he={class:"bg-gray-50"},Ce={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},qe={class:"bg-white shadow sm:rounded-lg"},De={class:"container mx-auto p-4"},Ve={class:"flex justify-between items-center mb-6"},Ue={class:"flex justify-between items-center"},Se={class:"text-xl font-semibold"},$e={class:"text-gray-600 mt-2"},je={class:"mt-4"},Ee={class:"mt-2 space-y-2"},Ae={class:"flex justify-between"},Ne={class:"text-gray-500 text-sm"},Te=Object.assign({layout:I},{__name:"Edit",props:{data:Object},setup(k){var D,V,U,S,$,j,E,A,N,F;const m=k,x=R({submitting:!1}),o=H({post_name:(D=m.data)==null?void 0:D.post_name,department_id:(V=m.data)==null?void 0:V.department_id,no_of_post:(U=m.data)==null?void 0:U.no_of_post,salary:(S=m.data)==null?void 0:S.salary,age_limit:($=m.data)==null?void 0:$.age_limit,qualification:(j=m.data)==null?void 0:j.qualification,application_deadline:(E=m.data)==null?void 0:E.application_deadline,application_fee:(A=m.data)==null?void 0:A.application_fee,description:(N=m.data)==null?void 0:N.description,documents:((F=m.data)==null?void 0:F.documents.map(a=>({id:a.id,job_detail_id:a.job_detail_id,name:a.document_name,description:a.document_description,is_mandatory:a.is_mandatory})))||[]});console.log(o.documents);const y=J({}),z=()=>{o.documents.push({name:"",description:"",is_mandatory:1})},L=a=>{o.documents.splice(a,1)},T=()=>{o.put(route("job.update",m.data.id),{onError:a=>{y.value=a}})},B=()=>{M.delete(route("job.destroy",m.data.id),{preserveState:!1,onStart:()=>x.submitting=!0,onFinish:()=>x.submitting=!1})},q=a=>{const t={year:"numeric",month:"long",day:"numeric"};return new Date(a).toLocaleDateString(void 0,t)};function O(a){const[t,s,r]=a.split(":"),p=new Date;p.setHours(t,s,r);const Q={hour:"numeric",minute:"numeric",hour12:!0};return p.toLocaleTimeString([],Q)}const P=a=>{M.delete(route("exam.destroy",a),{preserveState:!1,onStart:t=>x.submitting=!0,onFinish:t=>x.submitting=!1})};return(a,t)=>(n(),l(v,null,[e("div",K,[e("div",W,[e("div",X,[e("div",Z,[t[20]||(t[20]=e("h3",{class:"text-lg font-medium text-gray-900 mb-6"},"Edit Job Details",-1)),e("form",{onSubmit:Y(T,["prevent"])},[e("div",ee,[t[10]||(t[10]=e("label",{for:"post_name",class:"block text-sm font-medium text-gray-700"},"Post Name",-1)),u(e("input",{type:"text",id:"post_name","onUpdate:modelValue":t[0]||(t[0]=s=>i(o).post_name=s),class:b(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":y.value.post_name}]),required:""},null,2),[[c,i(o).post_name]]),i(o).errors.post_name?(n(),l("div",te,d(i(o).errors.post_name),1)):g("",!0)]),e("div",oe,[t[11]||(t[11]=e("label",{for:"no_of_post",class:"block text-sm font-medium text-gray-700"},"Number of Posts",-1)),u(e("input",{type:"text",id:"no_of_post","onUpdate:modelValue":t[1]||(t[1]=s=>i(o).no_of_post=s),class:b(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":i(o).errors.no_of_post}]),required:""},null,2),[[c,i(o).no_of_post]]),i(o).errors.no_of_post?(n(),l("div",se,d(i(o).errors.no_of_post),1)):g("",!0)]),e("div",ie,[t[12]||(t[12]=e("label",{for:"salary",class:"block text-sm font-medium text-gray-700"},"Salary",-1)),u(e("input",{type:"text",id:"salary","onUpdate:modelValue":t[2]||(t[2]=s=>i(o).salary=s),class:b(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":y.value.salary}]),required:""},null,2),[[c,i(o).salary]]),i(o).errors.salary?(n(),l("div",ae,d(i(o).errors.salary),1)):g("",!0)]),e("div",ne,[t[13]||(t[13]=e("label",{for:"age_limit",class:"block text-sm font-medium text-gray-700"},"Age Limit",-1)),u(e("input",{type:"text",id:"age_limit","onUpdate:modelValue":t[3]||(t[3]=s=>i(o).age_limit=s),class:b(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":y.value.age_limit}]),required:""},null,2),[[c,i(o).age_limit]]),i(o).errors.age_limit?(n(),l("div",le,d(i(o).errors.age_limit),1)):g("",!0)]),e("div",re,[t[14]||(t[14]=e("label",{for:"qualification",class:"block text-sm font-medium text-gray-700"},"Qualification",-1)),u(e("input",{type:"text",id:"qualification","onUpdate:modelValue":t[4]||(t[4]=s=>i(o).qualification=s),class:b(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":i(o).errors.qualification}]),required:""},null,2),[[c,i(o).qualification]]),i(o).errors.qualification?(n(),l("div",de,d(i(o).errors.qualification),1)):g("",!0)]),e("div",me,[t[15]||(t[15]=e("label",{for:"application_deadline",class:"block text-sm font-medium text-gray-700"},"Application Deadline",-1)),u(e("input",{type:"date",id:"application_deadline","onUpdate:modelValue":t[5]||(t[5]=s=>i(o).application_deadline=s),class:b(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":i(o).errors.application_deadline}]),required:""},null,2),[[c,i(o).application_deadline]]),i(o).errors.application_deadline?(n(),l("div",ue,d(i(o).errors.application_deadline),1)):g("",!0)]),e("div",pe,[t[16]||(t[16]=e("label",{for:"application_fee",class:"block text-sm font-medium text-gray-700"},"Application Fee",-1)),u(e("input",{type:"text",id:"application_fee","onUpdate:modelValue":t[6]||(t[6]=s=>i(o).application_fee=s),class:b(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":i(o).errors.application_fee}]),required:""},null,2),[[c,i(o).application_fee]]),i(o).errors.application_fee?(n(),l("div",ce,d(i(o).errors.application_fee),1)):g("",!0)]),e("div",be,[t[17]||(t[17]=e("label",{for:"description",class:"block text-sm font-medium text-gray-700"},"Description",-1)),u(e("textarea",{id:"description","onUpdate:modelValue":t[7]||(t[7]=s=>i(o).description=s),class:b(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":y.value.description}])},null,2),[[c,i(o).description]]),i(o).errors.description?(n(),l("div",ge,d(i(o).errors.description),1)):g("",!0)]),e("div",null,[t[19]||(t[19]=e("h4",{class:"text-sm font-medium text-gray-700 mb-3"},"Required Documents",-1)),(n(!0),l(v,null,w(i(o).documents,(s,r)=>(n(),l("div",{key:r,class:"flex space-x-4 items-center mb-3"},[u(e("input",{type:"hidden","onUpdate:modelValue":p=>s.id=p},null,8,fe),[[c,s.id]]),u(e("input",{type:"text","onUpdate:modelValue":p=>s.name=p,placeholder:"Document Name",class:"flex-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",required:""},null,8,_e),[[c,s.name]]),u(e("input",{type:"text","onUpdate:modelValue":p=>s.description=p,placeholder:"Document Description",class:"flex-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",required:""},null,8,ye),[[c,s.description]]),u(e("select",{"onUpdate:modelValue":p=>s.is_mandatory=p,class:"block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"},t[18]||(t[18]=[e("option",{value:"1"},"Mandatory",-1),e("option",{value:"0"},"Optional",-1)]),8,xe),[[G,s.is_mandatory]]),e("button",{type:"button",class:"text-red-600 hover:text-red-800",onClick:p=>L(r)}," Remove ",8,ve)]))),128)),e("button",{type:"button",class:"text-indigo-600 hover:text-indigo-800",onClick:z}," Add Document ")]),e("div",ke,[e("div",we,[f(_,{class:"sized-btn",color:"primary",label:"Update",type:"submit"}),f(_,{class:"sized-btn",color:"negative",label:"Cancel",outline:"",onClick:t[8]||(t[8]=s=>a.$inertia.replace(a.route("job.index")))}),e("div",null,[f(_,{onClick:B,class:"sized-btn",color:"negative",outline:"",label:"Delete"})])])])],32)])])])]),e("div",he,[e("div",Ce,[e("div",qe,[e("div",De,[e("div",Ve,[t[21]||(t[21]=e("h1",{class:"text-2xl font-bold mb-6"},"Exams and Subjects",-1)),e("button",{class:"px-4 py-2 text-sm font-medium bg-blue-500 rounded hover:bg-blue-600 transition",onClick:t[9]||(t[9]=s=>a.$inertia.get(a.route("exams.create",k.data.id)))}," Create Exam ")]),(n(!0),l(v,null,w(k.data.exams,s=>(n(),l("div",{key:s.id,class:"mb-6 p-4 border rounded-lg shadow-md bg-white"},[e("div",Ue,[e("h2",Se,d(s.exam_name),1),f(_,{class:"bg-yellow-500 hover:bg-yellow-600",onClick:r=>a.$inertia.get(a.route("exams.assignMarks",s.id))},{default:h(()=>t[22]||(t[22]=[C(" Assign Marks ")])),_:2},1032,["onClick"]),f(_,{class:"bg-yellow-500 hover:bg-yellow-600",onClick:r=>a.$inertia.get(a.route("exams.assignCenters",s.id))},{default:h(()=>t[23]||(t[23]=[C(" Assign Exam Center ")])),_:2},1032,["onClick"]),f(_,{class:"bg-yellow-500 hover:bg-yellow-600",onClick:r=>a.$inertia.get(a.route("exams.edit",s.id))},{default:h(()=>t[24]||(t[24]=[C(" Edit ")])),_:2},1032,["onClick"]),f(_,{onClick:r=>P(s.id),class:"sized-btn",color:"negative",outline:"",label:"Delete"},null,8,["onClick"])]),e("p",$e,"Exam Date: "+d(q(s.exam_date)),1),e("div",je,[t[25]||(t[25]=e("h3",{class:"text-lg font-semibold"},"Subjects",-1)),e("ul",Ee,[(n(!0),l(v,null,w(s.subjects,r=>(n(),l("li",{key:r.id,class:"p-3 border rounded-lg bg-gray-50"},[e("div",Ae,[e("span",null,d(r.subject_name),1),e("span",Ne,d(q(r.exam_date))+" - "+d(O(r.exam_time)),1)])]))),128))])])]))),128))])])])])],64))}});export{Te as default};
