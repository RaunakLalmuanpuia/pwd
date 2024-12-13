import{o as f,a as v,a4 as g,w as $,a8 as C,aN as B,c as D,j as V,d as n,e as r,O as p,aT as y,b as s,aO as w,R as h,k as S,bp as E,r as b,T,aa as U,M as x,u as c,V as N}from"./app-CBxBqPrd.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as A,a as M,b as P}from"./TextInput-DUS6zvmU.js";const W={},j={class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"};function z(t,l){return f(),v("button",j,[g(t.$slots,"default")])}const _=O(W,[["render",z]]),F={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},I={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:l}){const o=t,a=l;$(()=>o.show,()=>{o.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const u=()=>{o.closeable&&a("close")},i=m=>{m.key==="Escape"&&o.show&&u()};C(()=>document.addEventListener("keydown",i)),B(()=>{document.removeEventListener("keydown",i),document.body.style.overflow=null});const d=D(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[o.maxWidth]);return(m,e)=>(f(),V(E,{to:"body"},[n(w,{"leave-active-class":"duration-200"},{default:r(()=>[p(s("div",F,[n(w,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:r(()=>[p(s("div",{class:"fixed inset-0 transform transition-all",onClick:u},e[0]||(e[0]=[s("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1)]),512),[[y,t.show]])]),_:1}),n(w,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:r(()=>[p(s("div",{class:h(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",d.value])},[t.show?g(m.$slots,"default",{key:0}):S("",!0)],2),[[y,t.show]])]),_:3})],512),[[y,t.show]])]),_:3})]))}},K=["type"],L={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(t){return(l,o)=>(f(),v("button",{type:t.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},[g(l.$slots,"default")],8,K))}},R={class:"space-y-6"},q={class:"p-6"},G={class:"mt-6"},H={class:"mt-6 flex justify-end"},Y={__name:"DeleteUserForm",setup(t){const l=b(!1),o=b(null),a=T({password:""}),u=()=>{l.value=!0,U(()=>o.value.focus())},i=()=>{a.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>d(),onError:()=>o.value.focus(),onFinish:()=>a.reset()})},d=()=>{l.value=!1,a.reset()};return(m,e)=>(f(),v("section",R,[e[6]||(e[6]=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Delete Account"),s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1)),n(_,{onClick:u},{default:r(()=>e[1]||(e[1]=[x("Delete Account")])),_:1}),n(I,{show:l.value,onClose:d},{default:r(()=>[s("div",q,[e[4]||(e[4]=s("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete your account? ",-1)),e[5]||(e[5]=s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1)),s("div",G,[n(A,{for:"password",value:"Password",class:"sr-only"}),n(M,{id:"password",ref_key:"passwordInput",ref:o,modelValue:c(a).password,"onUpdate:modelValue":e[0]||(e[0]=k=>c(a).password=k),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:N(i,["enter"])},null,8,["modelValue"]),n(P,{message:c(a).errors.password,class:"mt-2"},null,8,["message"])]),s("div",H,[n(L,{onClick:d},{default:r(()=>e[2]||(e[2]=[x(" Cancel ")])),_:1}),n(_,{class:h(["ms-3",{"opacity-25":c(a).processing}]),disabled:c(a).processing,onClick:i},{default:r(()=>e[3]||(e[3]=[x(" Delete Account ")])),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{Y as default};
