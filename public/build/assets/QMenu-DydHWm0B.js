import{z as se,B as re,b5 as ke,C as ce,b6 as we,c as y,aQ as Te,J as Q,G as T,p as F,b7 as Ee,an as He,R as de,r as p,aw as Me,a0 as U,L as Be,aE as Z,w as B,a3 as We,ao as I,aH as pe,aq as K,b8 as ee,S as Pe,aT as Le,aM as Re,b9 as ze,ax as Ae,aN as _e,ba as $e,a1 as Fe,bb as De,aO as Ke,bc as Oe,bd as Qe,aG as Ie,be as Ve,bf as te,ay as je,bg as Ne,I as Ge,H as Xe,bh as Ye,al as Je,bi as Ue}from"./app-CLnFNOc4.js";import{m as Ze}from"./QLayout-DLfvAPOX.js";const et={xs:8,sm:10,md:14,lg:20,xl:24},ft=se({name:"QChip",props:{...re,...ke,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=Q(),i=ce(e,t),d=we(e,et),a=y(()=>e.selected===!0||e.icon!==void 0),h=y(()=>e.selected===!0?e.iconSelected||t.iconSet.chip.selected:e.icon),v=y(()=>e.iconRemove||t.iconSet.chip.remove),s=y(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),f=y(()=>{const c=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(c?` text-${c} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(s.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(i.value===!0?" q-chip--dark q-dark":"")}),g=y(()=>{const c=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},C={...c,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||t.lang.label.remove};return{chip:c,remove:C}});function b(c){c.keyCode===13&&o(c)}function o(c){e.disable||(n("update:selected",!e.selected),n("click",c))}function r(c){(c.keyCode===void 0||c.keyCode===13)&&(de(c),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function H(){const c=[];s.value===!0&&c.push(T("div",{class:"q-focus-helper"})),a.value===!0&&c.push(T(F,{class:"q-chip__icon q-chip__icon--left",name:h.value}));const C=e.label!==void 0?[T("div",{class:"ellipsis"},[e.label])]:void 0;return c.push(T("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Ee(l.default,C))),e.iconRight&&c.push(T(F,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&c.push(T(F,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:v.value,...g.value.remove,onClick:r,onKeyup:r})),c}return()=>{if(e.modelValue===!1)return;const c={class:f.value,style:d.value};return s.value===!0&&Object.assign(c,g.value.chip,{onClick:o,onKeyup:b}),Te("div",c,H(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[He,e.ripple]])}}}),tt={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},lt={...tt,contextMenu:Boolean};function nt({showing:e,avoidEmit:l,configureAnchorEl:n}){const{props:t,proxy:i,emit:d}=Q(),a=p(null);let h=null;function v(o){return a.value===null?!1:o===void 0||o.touches===void 0||o.touches.length<=1}const s={};n===void 0&&(Object.assign(s,{hide(o){i.hide(o)},toggle(o){i.toggle(o),o.qAnchorHandled=!0},toggleKey(o){Me(o,13)===!0&&s.toggle(o)},contextClick(o){i.hide(o),U(o),Be(()=>{i.show(o),o.qAnchorHandled=!0})},prevent:U,mobileTouch(o){if(s.mobileCleanup(o),v(o)!==!0)return;i.hide(o),a.value.classList.add("non-selectable");const r=o.target;Z(s,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),h=setTimeout(()=>{h=null,i.show(o),o.qAnchorHandled=!0},300)},mobileCleanup(o){a.value.classList.remove("non-selectable"),h!==null&&(clearTimeout(h),h=null),e.value===!0&&o!==void 0&&Ze()}}),n=function(o=t.contextMenu){if(t.noParentEvent===!0||a.value===null)return;let r;o===!0?i.$q.platform.is.mobile===!0?r=[[a.value,"touchstart","mobileTouch","passive"]]:r=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:r=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],Z(s,"anchor",r)});function f(){pe(s,"anchor")}function g(o){for(a.value=o;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;n()}function b(){if(t.target===!1||t.target===""||i.$el.parentNode===null)a.value=null;else if(t.target===!0)g(i.$el.parentNode);else{let o=t.target;if(typeof t.target=="string")try{o=document.querySelector(t.target)}catch{o=void 0}o!=null?(a.value=o.$el||o,n()):(a.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return B(()=>t.contextMenu,o=>{a.value!==null&&(f(),n(o))}),B(()=>t.target,()=>{a.value!==null&&f(),b()}),B(()=>t.noParentEvent,o=>{a.value!==null&&(o===!0?f():n())}),We(()=>{b(),l!==!0&&t.modelValue===!0&&a.value===null&&d("update:modelValue",!1)}),I(()=>{h!==null&&clearTimeout(h),f()}),{anchorEl:a,canShow:v,anchorEvents:s}}function ot(e,l){const n=p(null);let t;function i(h,v){const s=`${v!==void 0?"add":"remove"}EventListener`,f=v!==void 0?v:t;h!==window&&h[s]("scroll",f,K.passive),window[s]("scroll",f,K.passive),t=v}function d(){n.value!==null&&(i(n.value),n.value=null)}const a=B(()=>e.noParentEvent,()=>{n.value!==null&&(d(),l())});return I(a),{localScrollTarget:n,unconfigureScrollTarget:d,changeScrollEvent:i}}const{notPassiveCapture:P}=K,E=[];function L(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let n=ee.length-1;for(;n>=0;){const t=ee[n].$;if(t.type.name==="QTooltip"){n--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;n--}for(let t=E.length-1;t>=0;t--){const i=E[t];if((i.anchorEl.value===null||i.anchorEl.value.contains(l)===!1)&&(l===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(l)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function it(e){E.push(e),E.length===1&&(document.addEventListener("mousedown",L,P),document.addEventListener("touchstart",L,P))}function le(e){const l=E.findIndex(n=>n===e);l!==-1&&(E.splice(l,1),E.length===0&&(document.removeEventListener("mousedown",L,P),document.removeEventListener("touchstart",L,P)))}let ne,oe;function ie(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function at(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const O={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{O[`${e}#ltr`]=e,O[`${e}#rtl`]=e});function ae(e,l){const n=e.split(" ");return{vertical:n[0],horizontal:O[`${n[1]}#${l===!0?"rtl":"ltr"}`]}}function ut(e,l){let{top:n,left:t,right:i,bottom:d,width:a,height:h}=e.getBoundingClientRect();return l!==void 0&&(n-=l[1],t-=l[0],d+=l[1],i+=l[0],a+=l[0],h+=l[1]),{top:n,bottom:d,height:h,left:t,right:i,width:a,middle:t+(i-t)/2,center:n+(d-n)/2}}function st(e,l,n){let{top:t,left:i}=e.getBoundingClientRect();return t+=l.top,i+=l.left,n!==void 0&&(t+=n[1],i+=n[0]),{top:t,bottom:t+1,height:1,left:i,right:i+1,width:1,middle:i,center:t}}function rt(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function ue(e,l,n,t){return{top:e[n.vertical]-l[t.vertical],left:e[n.horizontal]-l[t.horizontal]}}function fe(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{fe(e,l+1)},10);return}const{targetEl:n,offset:t,anchorEl:i,anchorOrigin:d,selfOrigin:a,absoluteOffset:h,fit:v,cover:s,maxHeight:f,maxWidth:g}=e;if(Pe.is.ios===!0&&window.visualViewport!==void 0){const M=document.body.style,{offsetLeft:S,offsetTop:q}=window.visualViewport;S!==ne&&(M.setProperty("--q-pe-left",S+"px"),ne=S),q!==oe&&(M.setProperty("--q-pe-top",q+"px"),oe=q)}const{scrollLeft:b,scrollTop:o}=n,r=h===void 0?ut(i,s===!0?[0,0]:t):st(i,h,t);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g,maxHeight:f,visibility:"visible"});const{offsetWidth:H,offsetHeight:c}=n,{elWidth:C,elHeight:R}=v===!0||s===!0?{elWidth:Math.max(r.width,H),elHeight:s===!0?Math.max(r.height,c):c}:{elWidth:H,elHeight:c};let x={maxWidth:g,maxHeight:f};(v===!0||s===!0)&&(x.minWidth=r.width+"px",s===!0&&(x.minHeight=r.height+"px")),Object.assign(n.style,x);const k=rt(C,R);let m=ue(r,k,d,a);if(h===void 0||t===void 0)D(m,r,k,d,a);else{const{top:M,left:S}=m;D(m,r,k,d,a);let q=!1;if(m.top!==M){q=!0;const w=2*t[1];r.center=r.top-=w,r.bottom-=w+2}if(m.left!==S){q=!0;const w=2*t[0];r.middle=r.left-=w,r.right-=w+2}q===!0&&(m=ue(r,k,d,a),D(m,r,k,d,a))}x={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(x.maxHeight=m.maxHeight+"px",r.height>m.maxHeight&&(x.minHeight=x.maxHeight)),m.maxWidth!==void 0&&(x.maxWidth=m.maxWidth+"px",r.width>m.maxWidth&&(x.minWidth=x.maxWidth)),Object.assign(n.style,x),n.scrollTop!==o&&(n.scrollTop=o),n.scrollLeft!==b&&(n.scrollLeft=b)}function D(e,l,n,t,i){const d=n.bottom,a=n.right,h=Le(),v=window.innerHeight-h,s=document.body.clientWidth;if(e.top<0||e.top+d>v)if(i.vertical==="center")e.top=l[t.vertical]>v/2?Math.max(0,v-d):0,e.maxHeight=Math.min(d,v);else if(l[t.vertical]>v/2){const f=Math.min(v,t.vertical==="center"?l.center:t.vertical===i.vertical?l.bottom:l.top);e.maxHeight=Math.min(d,f),e.top=Math.max(0,f-d)}else e.top=Math.max(0,t.vertical==="center"?l.center:t.vertical===i.vertical?l.top:l.bottom),e.maxHeight=Math.min(d,v-e.top);if(e.left<0||e.left+a>s)if(e.maxWidth=Math.min(a,s),i.horizontal==="middle")e.left=l[t.horizontal]>s/2?Math.max(0,s-a):0;else if(l[t.horizontal]>s/2){const f=Math.min(s,t.horizontal==="middle"?l.middle:t.horizontal===i.horizontal?l.right:l.left);e.maxWidth=Math.min(a,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?l.middle:t.horizontal===i.horizontal?l.left:l.right),e.maxWidth=Math.min(a,s-e.left)}const ht=se({name:"QMenu",inheritAttrs:!1,props:{...lt,...Re,...re,...ze,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ie},self:{type:String,validator:ie},offset:{type:Array,validator:at},scrollTarget:Ae,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[..._e,"click","escapeKey"],setup(e,{slots:l,emit:n,attrs:t}){let i=null,d,a,h;const v=Q(),{proxy:s}=v,{$q:f}=s,g=p(null),b=p(!1),o=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),r=ce(e,f),{registerTick:H,removeTick:c}=$e(),{registerTimeout:C}=Fe(),{transitionProps:R,transitionStyle:x}=De(e),{localScrollTarget:k,changeScrollEvent:m,unconfigureScrollTarget:M}=ot(e,Y),{anchorEl:S,canShow:q}=nt({showing:b}),{hide:w}=Ke({showing:b,canShow:q,handleShow:be,handleHide:xe,hideOnRouteChange:o,processOnMount:!0}),{showPortal:V,hidePortal:j,renderPortal:he}=Oe(v,g,Se,"menu"),z={anchorEl:S,innerRef:g,onClickOutside(u){if(e.persistent!==!0&&b.value===!0)return w(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&de(u),!0}},N=y(()=>ae(e.anchor||(e.cover===!0?"center middle":"bottom start"),f.lang.rtl)),ve=y(()=>e.cover===!0?N.value:ae(e.self||"top start",f.lang.rtl)),me=y(()=>(e.square===!0?" q-menu--square":"")+(r.value===!0?" q-menu--dark q-dark":"")),ge=y(()=>e.autoClose===!0?{onClick:ye}:{}),G=y(()=>b.value===!0&&e.persistent!==!0);B(G,u=>{u===!0?(Ye(_),it(z)):(te(_),le(z))});function A(){Je(()=>{let u=g.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function be(u){if(i=e.noRefocus===!1?document.activeElement:null,Qe(J),V(),Y(),d=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const $=Ie(u);if($.left!==void 0){const{top:qe,left:Ce}=S.value.getBoundingClientRect();d={left:$.left-Ce,top:$.top-qe}}}a===void 0&&(a=B(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,W)),e.noFocus!==!0&&document.activeElement.blur(),H(()=>{W(),e.noFocus!==!0&&A()}),C(()=>{f.platform.is.ios===!0&&(h=e.autoClose,g.value.click()),W(),V(!0),n("show",u)},e.transitionDuration)}function xe(u){c(),j(),X(!0),i!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),C(()=>{j(!0),n("hide",u)},e.transitionDuration)}function X(u){d=void 0,a!==void 0&&(a(),a=void 0),(u===!0||b.value===!0)&&(Ve(J),M(),le(z),te(_)),u!==!0&&(i=null)}function Y(){(S.value!==null||e.scrollTarget!==void 0)&&(k.value=je(S.value,e.scrollTarget),m(k.value,W))}function ye(u){h!==!0?(Ne(s,u),n("click",u)):h=!1}function J(u){G.value===!0&&e.noFocus!==!0&&Ue(g.value,u.target)!==!0&&A()}function _(u){n("escapeKey"),w(u)}function W(){fe({targetEl:g.value,offset:e.offset,anchorEl:S.value,anchorOrigin:N.value,selfOrigin:ve.value,absoluteOffset:d,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Se(){return T(Xe,R.value,()=>b.value===!0?T("div",{role:"menu",...t,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+me.value,t.class],style:[t.style,x.value],...ge.value},Ge(l.default)):null)}return I(X),Object.assign(s,{focus:A,updatePosition:W}),he}});export{ht as Q,nt as a,ft as b,lt as u};
