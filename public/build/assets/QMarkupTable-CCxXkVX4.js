import{z as d,G as o,I as n,at as v,p as f,J as b,c as h,B as m,C as _}from"./app-CLnFNOc4.js";const B=d({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:r}){const l=b(),{proxy:{$q:c}}=l,s=t=>{r("click",t)};return()=>{if(e.props===void 0)return o("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:s},n(a.default));let t,u;const p=l.vnode.key;if(p){if(t=e.props.colsMap[p],t===void 0)return}else t=e.props.col;if(t.sortable===!0){const i=t.align==="right"?"unshift":"push";u=v(a.default,[]),u[i](o(f,{class:t.__iconClass,name:c.iconSet.table.arrowUp}))}else u=n(a.default);const q={class:t.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:t.headerStyle,onClick:i=>{t.sortable===!0&&e.props.sort(t),s(i)}};return o("th",q,u)}}}),Q=d({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:a}){const r=h(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>o("tr",{class:r.value},n(a.default))}}),y=d({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:a}){const r=b(),l=h(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return o("td",{class:l.value},n(a.default));const c=r.vnode.key,s=(e.props.colsMap!==void 0?e.props.colsMap[c]:null)||e.props.col;if(s===void 0)return;const{row:t}=e.props;return o("td",{class:l.value+s.__tdClass(t),style:s.__tdStyle(t)},n(a.default))}}}),k=["horizontal","vertical","cell","none"],w=d({name:"QMarkupTable",props:{...m,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>k.includes(e)}},setup(e,{slots:a}){const r=b(),l=_(e,r.proxy.$q),c=h(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(l.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>o("div",{class:c.value},[o("table",{class:"q-table"},n(a.default))])}});export{w as Q,Q as a,B as b,y as c};