import{o as l,a as i,d as a,u,e as d,F as y,Z as h,b as r,h as n,aR as p,i as _,t as s,n as m}from"./app-DPkQUZ_H.js";import{A as f}from"./Admin-DjyVIRTV.js";import"./QLayout-WtSi1Uhk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={class:"py-12 bg-gray-100"},w={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},k={class:"bg-white shadow sm:rounded-lg p-6"},C={class:"flex justify-between items-center mb-6"},N={class:"overflow-auto"},A={class:"w-full table-auto border-collapse border border-gray-300"},D={class:"border border-gray-300 px-4 py-2"},$={class:"border border-gray-300 px-4 py-2"},P={class:"border border-gray-300 px-4 py-2"},B={class:"border border-gray-300 px-4 py-2"},L={class:"border border-gray-300 px-4 py-2"},S={class:"border border-gray-300 px-4 py-2"},E={class:"border border-gray-300 px-4 py-2"},F={class:"border border-gray-300 px-4 py-2"},M={class:"border border-gray-300 px-4 py-2"},V={class:"border border-gray-300 px-4 py-2"},I={class:"border border-gray-300 px-4 py-2"},R={__name:"Index",props:{jobs:Object},setup(b){console.log(b.jobs);const c=o=>new Date(o).toLocaleString();return(o,e)=>(l(),i(y,null,[a(u(h),{title:"Posts"}),a(f,null,{header:d(()=>e[1]||(e[1]=[r("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Posts",-1)])),default:d(()=>[r("div",v,[r("div",w,[r("div",k,[r("div",C,[e[3]||(e[3]=r("h3",{class:"text-lg font-semibold text-gray-900"},"Job Postings",-1)),a(n,{class:"bg-blue-500 hover:bg-blue-600",onClick:e[0]||(e[0]=t=>o.$inertia.get(o.route("job.create")))},{default:d(()=>e[2]||(e[2]=[p(" Create New ")])),_:1})]),r("div",N,[r("table",A,[e[6]||(e[6]=r("thead",{class:"bg-gray-200 text-left"},[r("tr",null,[r("th",{class:"border border-gray-300 px-4 py-2"},"Post Name"),r("th",{class:"border border-gray-300 px-4 py-2"},"No. of Posts"),r("th",{class:"border border-gray-300 px-4 py-2"},"Salary"),r("th",{class:"border border-gray-300 px-4 py-2"},"Age Limit"),r("th",{class:"border border-gray-300 px-4 py-2"},"Qualification"),r("th",{class:"border border-gray-300 px-4 py-2"},"Application Deadline"),r("th",{class:"border border-gray-300 px-4 py-2"},"Application Fee"),r("th",{class:"border border-gray-300 px-4 py-2"},"Description"),r("th",{class:"border border-gray-300 px-4 py-2"},"Status"),r("th",{class:"border border-gray-300 px-4 py-2"},"Marks"),r("th",{class:"border border-gray-300 px-4 py-2"},"Edit")])],-1)),r("tbody",null,[(l(!0),i(y,null,_(b.jobs,(t,g)=>(l(),i("tr",{key:g,class:"hover:bg-gray-100"},[r("td",D,s(t.post_name),1),r("td",$,s(t.no_of_post),1),r("td",P,s(t.salary),1),r("td",B,s(t.age_limit),1),r("td",L,s(t.qualification),1),r("td",S,s(c(t.application_deadline)),1),r("td",E,s(t.application_fee),1),r("td",F,s(t.description||"No Description"),1),r("td",M,[r("span",{class:m(["px-2 py-1 text-sm rounded-full",t.active===1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},s(t.active===1?"Active":"Inactive"),3)]),r("td",V,[a(n,{class:"bg-yellow-500 hover:bg-yellow-600",onClick:x=>o.$inertia.get(o.route("job.showMarks",t.id))},{default:d(()=>e[4]||(e[4]=[p(" Marks ")])),_:2},1032,["onClick"])]),r("td",I,[a(n,{class:"bg-yellow-500 hover:bg-yellow-600",onClick:x=>o.$inertia.get(o.route("job.edit",t.id))},{default:d(()=>e[5]||(e[5]=[p(" Edit ")])),_:2},1032,["onClick"])])]))),128))])])])])])])]),_:1})],64))}};export{R as default};