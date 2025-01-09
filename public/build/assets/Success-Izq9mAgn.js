import{O as q,S as j,U as N,o as S,d as z,w as T,s as Q,b as s,t as i,a as c,m as b,n as I,e as P,V as B}from"./app-BqZ5vi9Q.js";import{Q as E}from"./QPage-l2tOw9iN.js";import{A as M}from"./ApplicantLayout-D9LigcZm.js";import{u as O}from"./use-quasar-C9aLArF3.js";import"./QLayout-DMxazfGy.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const U={class:"full-print flex justify-center items-center"},V={style:{"max-width":"480px"},class:"row zcard q-pa-md"},X={class:"col-xs-12 col-sm-9 text-weight-medium"},F={class:"col-xs-12 col-sm-9 text-weight-medium"},H={class:"col-xs-12 col-sm-9 text-weight-medium"},L={class:"col-xs-12 col-sm-9 text-weight-medium"},R={class:"col-xs-12 col-sm-9 text-weight-medium"},$={class:"col-xs-12"},J={class:"col-xs-12 col-sm-9 text-weight-medium"},W={class:"col-xs-12 col-sm-9 text-weight-medium"},G={class:"col-xs-12 col-sm-9 text-weight-medium"},K={class:"col-xs-12 col-sm-9 text-weight-medium"},Y={class:"col-xs-12"},Z={class:"col-xs-12 print-hide"},rt=Object.assign({layout:M},{__name:"Success",setup(tt){const d=O(),A=q(),e=j({resultInfo:{},txnId:"",txnAmount:"",txnDate:"",reference:{}}),D=async o=>{var t,r;d.loading.show();try{const{data:n}=await Q.get(route("transaction.checkStatus",{order_id:o})),{body:l,reference:a}=n;Object.assign(e.resultInfo,l.resultInfo),e.txnId=l.txnId,e.txnAmount=l.txnAmount,e.txnDate=l.txnDate,e.reference=a}catch(n){d.notify({type:"negative",message:((r=(t=n.response)==null?void 0:t.data)==null?void 0:r.message)||n.message})}finally{d.loading.hide()}},C=()=>{var o;((o=e.resultInfo)==null?void 0:o.resultStatus)!=="TXN_SUCCESS"&&B.get(route("application.viewApplicationDraft",e.reference.job_detail.id))},k=()=>{const o=document.querySelector(".full-print").innerHTML,t=window.open("","_blank");t.document.open(),t.document.write(`
        <html>
        <head>
            <title>Print</title>
            <link rel="stylesheet" href="${document.querySelector('link[rel="stylesheet"]').href}" />
            <style>
                @media print {
                    .print-hide {
                        display: none; /* Hide elements with the "print-hide" class */
                    }
                    body {
                        margin: 0;
                        padding: 0;
                    }
                    .full-print {
                        width: 100%;
                        position: static;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column; /* Ensure correct layout */
                    }
                    .ztext {
                        font-size: 14px;
                        font-weight: bold;
                    }
                    .text-weight-medium {
                        font-weight: 500;
                    }
                    .q-my-sm {
                        margin: 1em 0;
                    }
                }
            </style>
        </head>
        <body>${o}</body>
        </html>
    `),t.document.close(),t.print()};return N(()=>{const o=A.props.order_id;o?D(o):console.error("Order ID is missing.")}),(o,t)=>(S(),z(E,{padding:""},{default:T(()=>{var r,n,l,a,m,x,p,u,f,g,y,v,h,w,_;return[s("div",U,[s("div",V,[t[0]||(t[0]=s("div",{class:"col-xs-12"},[s("p",{class:"ztext ztext-md"},"Payment Detail")],-1)),t[1]||(t[1]=s("div",{class:"col-xs-12 col-sm-3 ztext"},"Status",-1)),s("div",X,i(((r=e.resultInfo)==null?void 0:r.resultStatus)==="TXN_SUCCESS"?"Success":"Failed"),1),t[2]||(t[2]=s("div",{class:"col-xs-12 col-sm-3 ztext"},"Message",-1)),s("div",F,i(((n=e.resultInfo)==null?void 0:n.resultMsg)||""),1),t[3]||(t[3]=s("div",{class:"col-xs-12 col-sm-3 ztext"},"Transaction ID",-1)),s("div",H,i(e.txnId),1),t[4]||(t[4]=s("div",{class:"col-xs-12 col-sm-3 ztext"},"Date",-1)),s("div",L,i(e==null?void 0:e.txnDate),1),t[5]||(t[5]=s("div",{class:"col-xs-12 col-sm-3 ztext"},"Amount",-1)),s("div",R,i(e==null?void 0:e.txnAmount),1),s("div",$,[c(b,{class:"q-my-sm"})]),t[6]||(t[6]=s("div",{class:"col-xs-12"},[s("p",{class:"ztext ztext-md"},"Application")],-1)),t[7]||(t[7]=s("div",{class:"col-xs-12 col-sm-3 ztext"},"Regn No",-1)),s("div",J,i((l=e.reference)==null?void 0:l.application_id),1),t[8]||(t[8]=s("div",{class:"col-xs-12 col-sm-3 ztext"},"Applicant",-1)),s("div",W,i((x=(m=(a=e.reference)==null?void 0:a.applicant)==null?void 0:m.user)==null?void 0:x.name),1),t[9]||(t[9]=s("div",{class:"col-xs-12 col-sm-3 ztext"},"District",-1)),s("div",G,i((g=(f=(u=(p=e.reference)==null?void 0:p.applicant)==null?void 0:u.user)==null?void 0:f.address)==null?void 0:g.permanent_district),1),t[10]||(t[10]=s("div",{class:"col-xs-12 col-sm-3 ztext"},"Applied Jobs",-1)),s("div",K,i((v=(y=e.reference)==null?void 0:y.job_detail)==null?void 0:v.post_name)+" / "+i((w=(h=e.reference)==null?void 0:h.job_detail)==null?void 0:w.department.name),1),s("div",Y,[c(b,{class:"q-my-sm"})]),s("div",Z,[c(I,{onClick:k,style:{"min-width":"120px"},color:"primary",rounded:"",label:"Print"}),((_=e.resultInfo)==null?void 0:_.resultStatus)!=="TXN_SUCCESS"?(S(),z(I,{key:0,class:"q-ml-sm",onClick:C,style:{"min-width":"120px"},color:"primary",outline:"",rounded:"",label:"Retry"})):P("",!0)])])])]}),_:1}))}});export{rt as default};
