import{Q as u}from"./QChip-BZdNOvga.js";import{o as r,d as m,w as e,a,u as v,Z as _,b as s,c as d,F as y,p as w,q as Q,g as f,t as g}from"./app-C0HpZeVe.js";import{c as h,a as p,b as k,Q as x}from"./QLayout-C48ZH50D.js";import{Q as q}from"./QPage-CoR-6Q9E.js";import{A}from"./ApplicantLayout-C0JAybMz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const D={class:"row q-gutter-md"},S={key:0,class:"col-12 zcard q-pa-md"},z={key:1,class:"col-12 zcard q-pa-md"},j=Object.assign({layout:A},{__name:"DraftSubmission",props:["applications"],setup(c){const b=n=>{const t=new Date(n),l=String(t.getDate()).padStart(2,"0"),i=String(t.getMonth()+1).padStart(2,"0"),o=t.getFullYear();return`${l}/${i}/${o}`};return(n,t)=>(r(),m(q,{padding:""},{default:e(()=>[a(v(_),{title:"Drafts"}),t[2]||(t[2]=s("p",{class:"page-title"},"Draft Applications",-1)),s("div",D,[c.applications.length===0?(r(),d("div",S,t[0]||(t[0]=[s("svg",{class:"w-16 h-16 mx-auto mb-4 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M9 4a3 3 0 016 0v9a3 3 0 11-6 0V4zM5 6a3 3 0 016 0v7a3 3 0 11-6 0V6z","clip-rule":"evenodd"})],-1),s("p",{class:"text-gray-600 text-lg text-center"},"You have not submitted any applications yet.",-1)]))):(r(),d("div",z,[a(x,null,{default:e(()=>[(r(!0),d(y,null,w(c.applications,(l,i)=>(r(),m(h,{class:"zcard q-mt-sm",key:i},{default:e(()=>[a(p,{avatar:""},{default:e(()=>[a(Q,{square:""},{default:e(()=>[a(u,{square:"",label:i+1},null,8,["label"])]),_:2},1024)]),_:2},1024),a(p,null,{default:e(()=>[a(k,null,{default:e(()=>{var o;return[f("Post Name: "+g(((o=l.job_detail)==null?void 0:o.post_name)||"N/A")+" ",1),t[1]||(t[1]=s("br",null,null,-1)),f(" Applied on: "+g(b(l==null?void 0:l.created_at)),1)]}),_:2},1024)]),_:2},1024),a(p,{side:""},{default:e(()=>[a(u,{clickable:"",onClick:o=>n.$inertia.get(n.route("application.viewApplicationDraft",l.job_detail.id)),"text-color":"white",square:"",color:"primary",label:"Submit Application"},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]))])]),_:1}))}});export{j as default};
