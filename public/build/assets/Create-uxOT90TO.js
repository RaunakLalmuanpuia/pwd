import{T as w,r as q,o as a,a as d,d as b,u as l,e as _,F as v,Z as V,b as e,f as U,C as n,aS as r,n as u,t as m,j as p,i as h,aX as D}from"./app-DPkQUZ_H.js";import{A as C}from"./Admin-DjyVIRTV.js";import"./QLayout-WtSi1Uhk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const A={class:"py-12 bg-gray-50"},N={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},P={class:"bg-white shadow sm:rounded-lg"},S={class:"p-6"},F={class:"mb-3"},M={key:0,class:"input-error"},B={class:"mb-3"},L={key:0,class:"input-error"},j={class:"mb-3"},E={key:0,class:"input-error"},J={class:"mb-3"},R={key:0,class:"input-error"},T={class:"mb-3"},z={key:0,class:"input-error"},O={class:"mb-3"},Q={key:0,class:"input-error"},X={class:"mb-3"},Z={key:0,class:"input-error"},$={class:"mb-3"},G={key:0,class:"input-error"},H=["onUpdate:modelValue"],I=["onUpdate:modelValue"],K=["onUpdate:modelValue"],W=["onClick"],so={__name:"Create",setup(Y){const i=w({post_name:"",department_id:1,no_of_post:"",salary:"",age_limit:"",qualification:"",application_deadline:"",application_fee:"",description:"",documents:[]}),t=q({}),x=()=>{i.documents.push({name:"",is_mandatory:1})},y=f=>{i.documents.splice(f,1)},k=()=>{i.post(route("job.store"),{onError:f=>{t.value=f}})};return(f,o)=>(a(),d(v,null,[b(l(V),{title:"Posts"}),b(C,null,{header:_(()=>o[8]||(o[8]=[e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Posts",-1)])),default:_(()=>[e("div",A,[e("div",N,[e("div",P,[e("div",S,[o[20]||(o[20]=e("h3",{class:"text-lg font-medium text-gray-900 mb-6"},"Job Details",-1)),e("form",{onSubmit:U(k,["prevent"])},[e("div",F,[o[9]||(o[9]=e("label",{for:"post_name",class:"block text-sm font-medium text-gray-700"},"Post Name",-1)),n(e("input",{type:"text",id:"post_name","onUpdate:modelValue":o[0]||(o[0]=s=>l(i).post_name=s),class:u(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":t.value.post_name}]),required:""},null,2),[[r,l(i).post_name]]),l(i).errors.post_name?(a(),d("div",M,m(l(i).errors.post_name),1)):p("",!0)]),e("div",B,[o[10]||(o[10]=e("label",{for:"no_of_post",class:"block text-sm font-medium text-gray-700"},"Number of Posts",-1)),n(e("input",{type:"text",id:"no_of_post","onUpdate:modelValue":o[1]||(o[1]=s=>l(i).no_of_post=s),class:u(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":t.value.no_of_post}]),required:""},null,2),[[r,l(i).no_of_post]]),t.value.no_of_post?(a(),d("div",L,m(t.value.no_of_post),1)):p("",!0)]),e("div",j,[o[11]||(o[11]=e("label",{for:"salary",class:"block text-sm font-medium text-gray-700"},"Salary",-1)),n(e("input",{type:"text",id:"salary","onUpdate:modelValue":o[2]||(o[2]=s=>l(i).salary=s),class:u(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":t.value.salary}]),required:""},null,2),[[r,l(i).salary]]),t.value.salary?(a(),d("div",E,m(t.value.salary),1)):p("",!0)]),e("div",J,[o[12]||(o[12]=e("label",{for:"age_limit",class:"block text-sm font-medium text-gray-700"},"Age Limit",-1)),n(e("input",{type:"text",id:"age_limit","onUpdate:modelValue":o[3]||(o[3]=s=>l(i).age_limit=s),class:u(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":t.value.age_limit}]),required:""},null,2),[[r,l(i).age_limit]]),t.value.age_limit?(a(),d("div",R,m(t.value.age_limit),1)):p("",!0)]),e("div",T,[o[13]||(o[13]=e("label",{for:"qualification",class:"block text-sm font-medium text-gray-700"},"Qualification",-1)),n(e("input",{type:"text",id:"qualification","onUpdate:modelValue":o[4]||(o[4]=s=>l(i).qualification=s),class:u(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":t.value.qualification}]),required:""},null,2),[[r,l(i).qualification]]),t.value.qualification?(a(),d("div",z,m(t.value.qualification),1)):p("",!0)]),e("div",O,[o[14]||(o[14]=e("label",{for:"application_deadline",class:"block text-sm font-medium text-gray-700"},"Application Deadline",-1)),n(e("input",{type:"date",id:"application_deadline","onUpdate:modelValue":o[5]||(o[5]=s=>l(i).application_deadline=s),class:u(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":t.value.application_deadline}]),required:""},null,2),[[r,l(i).application_deadline]]),t.value.application_deadline?(a(),d("div",Q,m(t.value.application_deadline),1)):p("",!0)]),e("div",X,[o[15]||(o[15]=e("label",{for:"application_fee",class:"block text-sm font-medium text-gray-700"},"Application Fee",-1)),n(e("input",{type:"text",id:"application_fee","onUpdate:modelValue":o[6]||(o[6]=s=>l(i).application_fee=s),class:u(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":t.value.application_fee}]),required:""},null,2),[[r,l(i).application_fee]]),t.value.application_fee?(a(),d("div",Z,m(t.value.application_fee),1)):p("",!0)]),e("div",$,[o[16]||(o[16]=e("label",{for:"description",class:"block text-sm font-medium text-gray-700"},"Description",-1)),n(e("textarea",{id:"description","onUpdate:modelValue":o[7]||(o[7]=s=>l(i).description=s),class:u(["mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",{"is-invalid":t.value.description}])},null,2),[[r,l(i).description]]),t.value.description?(a(),d("div",G,m(t.value.description),1)):p("",!0)]),e("div",null,[o[18]||(o[18]=e("h4",{class:"text-sm font-medium text-gray-700 mb-3"},"Required Documents",-1)),(a(!0),d(v,null,h(l(i).documents,(s,g)=>(a(),d("div",{key:g,class:"flex space-x-4 items-center mb-3"},[n(e("input",{type:"text","onUpdate:modelValue":c=>s.name=c,placeholder:"Document Name",class:"flex-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",required:""},null,8,H),[[r,s.name]]),n(e("input",{type:"text","onUpdate:modelValue":c=>s.description=c,placeholder:"Document Description",class:"flex-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",required:""},null,8,I),[[r,s.description]]),n(e("select",{"onUpdate:modelValue":c=>s.is_mandatory=c,class:"block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"},o[17]||(o[17]=[e("option",{value:"1"},"Mandatory",-1),e("option",{value:"0"},"Optional",-1)]),8,K),[[D,s.is_mandatory]]),e("button",{type:"button",class:"text-red-600 hover:text-red-800",onClick:c=>y(g)}," Remove ",8,W)]))),128)),e("button",{type:"button",class:"text-indigo-600 hover:text-indigo-800",onClick:x}," Add Document ")]),o[19]||(o[19]=e("button",{type:"submit",class:"w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}," Create Job Posting ",-1))],32)])])])])]),_:1})],64))}};export{so as default};