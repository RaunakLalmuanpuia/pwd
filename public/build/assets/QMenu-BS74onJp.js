import{r as q,af as be,aq as _,Y as ye,ao as U,h as H,B as pe,a7 as j,V as ae,at as Te,a9 as K,b4 as G,am as Ee,aF as we,N as Ce,ay as He,ab as Se,b5 as ke,ag as Me,az as We,j as C,ad as qe,b6 as Pe,aA as Be,b7 as Le,aB as Ae,b8 as ze,b9 as Fe,as as $e,ba as Re,bb as J,ah as Ke,bc as De,S as Z,U as je,aK as Oe,bd as Qe,_ as Ve,X as Ie,be as Ne}from"./app-dcaBrJ0A.js";import{m as Xe}from"./QLayout-CYe35r64.js";const Ye={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},_e={...Ye,contextMenu:Boolean};function Ue({showing:e,avoidEmit:n,configureAnchorEl:o}){const{props:t,proxy:l,emit:c}=ae(),i=q(null);let f=null;function h(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};o===void 0&&(Object.assign(r,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){be(a,13)===!0&&r.toggle(a)},contextClick(a){l.hide(a),_(a),ye(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:_,mobileTouch(a){if(r.mobileCleanup(a),h(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const s=a.target;U(r,"anchor",[[s,"touchmove","mobileCleanup","passive"],[s,"touchend","mobileCleanup","passive"],[s,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&a!==void 0&&Xe()}}),o=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let s;a===!0?l.$q.platform.is.mobile===!0?s=[[i.value,"touchstart","mobileTouch","passive"]]:s=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:s=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],U(r,"anchor",s)});function d(){Te(r,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function x(){if(t.target===!1||t.target===""||l.$el.parentNode===null)i.value=null;else if(t.target===!0)g(l.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return H(()=>t.contextMenu,a=>{i.value!==null&&(d(),o(a))}),H(()=>t.target,()=>{i.value!==null&&d(),x()}),H(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?d():o())}),pe(()=>{x(),n!==!0&&t.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),j(()=>{f!==null&&clearTimeout(f),d()}),{anchorEl:i,canShow:h,anchorEvents:r}}function Ge(e,n){const o=q(null);let t;function l(f,h){const r=`${h!==void 0?"add":"remove"}EventListener`,d=h!==void 0?h:t;f!==window&&f[r]("scroll",d,K.passive),window[r]("scroll",d,K.passive),t=h}function c(){o.value!==null&&(l(o.value),o.value=null)}const i=H(()=>e.noParentEvent,()=>{o.value!==null&&(c(),n())});return j(i),{localScrollTarget:o,unconfigureScrollTarget:c,changeScrollEvent:l}}const{notPassiveCapture:P}=K,E=[];function B(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let o=G.length-1;for(;o>=0;){const t=G[o].$;if(t.type.name==="QTooltip"){o--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;o--}for(let t=E.length-1;t>=0;t--){const l=E[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(n)===!1)&&(n===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(n)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Je(e){E.push(e),E.length===1&&(document.addEventListener("mousedown",B,P),document.addEventListener("touchstart",B,P))}function ee(e){const n=E.findIndex(o=>o===e);n!==-1&&(E.splice(n,1),E.length===0&&(document.removeEventListener("mousedown",B,P),document.removeEventListener("touchstart",B,P)))}let te,ne;function oe(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ze(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const D={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{D[`${e}#ltr`]=e,D[`${e}#rtl`]=e});function le(e,n){const o=e.split(" ");return{vertical:o[0],horizontal:D[`${o[1]}#${n===!0?"rtl":"ltr"}`]}}function et(e,n){let{top:o,left:t,right:l,bottom:c,width:i,height:f}=e.getBoundingClientRect();return n!==void 0&&(o-=n[1],t-=n[0],c+=n[1],l+=n[0],i+=n[0],f+=n[1]),{top:o,bottom:c,height:f,left:t,right:l,width:i,middle:t+(l-t)/2,center:o+(c-o)/2}}function tt(e,n,o){let{top:t,left:l}=e.getBoundingClientRect();return t+=n.top,l+=n.left,o!==void 0&&(t+=o[1],l+=o[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function nt(e,n){return{top:0,center:n/2,bottom:n,left:0,middle:e/2,right:e}}function ie(e,n,o,t){return{top:e[o.vertical]-n[t.vertical],left:e[o.horizontal]-n[t.horizontal]}}function ue(e,n=0){if(e.targetEl===null||e.anchorEl===null||n>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ue(e,n+1)},10);return}const{targetEl:o,offset:t,anchorEl:l,anchorOrigin:c,selfOrigin:i,absoluteOffset:f,fit:h,cover:r,maxHeight:d,maxWidth:g}=e;if(Ee.is.ios===!0&&window.visualViewport!==void 0){const w=document.body.style,{offsetLeft:b,offsetTop:y}=window.visualViewport;b!==te&&(w.setProperty("--q-pe-left",b+"px"),te=b),y!==ne&&(w.setProperty("--q-pe-top",y+"px"),ne=y)}const{scrollLeft:x,scrollTop:a}=o,s=f===void 0?et(l,r===!0?[0,0]:t):tt(l,f,t);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g,maxHeight:d,visibility:"visible"});const{offsetWidth:M,offsetHeight:S}=o,{elWidth:W,elHeight:L}=h===!0||r===!0?{elWidth:Math.max(s.width,M),elHeight:r===!0?Math.max(s.height,S):S}:{elWidth:M,elHeight:S};let v={maxWidth:g,maxHeight:d};(h===!0||r===!0)&&(v.minWidth=s.width+"px",r===!0&&(v.minHeight=s.height+"px")),Object.assign(o.style,v);const p=nt(W,L);let m=ie(s,p,c,i);if(f===void 0||t===void 0)R(m,s,p,c,i);else{const{top:w,left:b}=m;R(m,s,p,c,i);let y=!1;if(m.top!==w){y=!0;const T=2*t[1];s.center=s.top-=T,s.bottom-=T+2}if(m.left!==b){y=!0;const T=2*t[0];s.middle=s.left-=T,s.right-=T+2}y===!0&&(m=ie(s,p,c,i),R(m,s,p,c,i))}v={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(v.maxHeight=m.maxHeight+"px",s.height>m.maxHeight&&(v.minHeight=v.maxHeight)),m.maxWidth!==void 0&&(v.maxWidth=m.maxWidth+"px",s.width>m.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(o.style,v),o.scrollTop!==a&&(o.scrollTop=a),o.scrollLeft!==x&&(o.scrollLeft=x)}function R(e,n,o,t,l){const c=o.bottom,i=o.right,f=we(),h=window.innerHeight-f,r=document.body.clientWidth;if(e.top<0||e.top+c>h)if(l.vertical==="center")e.top=n[t.vertical]>h/2?Math.max(0,h-c):0,e.maxHeight=Math.min(c,h);else if(n[t.vertical]>h/2){const d=Math.min(h,t.vertical==="center"?n.center:t.vertical===l.vertical?n.bottom:n.top);e.maxHeight=Math.min(c,d),e.top=Math.max(0,d-c)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===l.vertical?n.top:n.bottom),e.maxHeight=Math.min(c,h-e.top);if(e.left<0||e.left+i>r)if(e.maxWidth=Math.min(i,r),l.horizontal==="middle")e.left=n[t.horizontal]>r/2?Math.max(0,r-i):0;else if(n[t.horizontal]>r/2){const d=Math.min(r,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.right:n.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.left:n.right),e.maxWidth=Math.min(i,r-e.left)}const it=Ce({name:"QMenu",inheritAttrs:!1,props:{..._e,...He,...Se,...ke,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:oe},self:{type:String,validator:oe},offset:{type:Array,validator:Ze},scrollTarget:Me,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...We,"click","escapeKey"],setup(e,{slots:n,emit:o,attrs:t}){let l=null,c,i,f;const h=ae(),{proxy:r}=h,{$q:d}=r,g=q(null),x=q(!1),a=C(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),s=qe(e,d),{registerTick:M,removeTick:S}=Pe(),{registerTimeout:W}=Be(),{transitionProps:L,transitionStyle:v}=Le(e),{localScrollTarget:p,changeScrollEvent:m,unconfigureScrollTarget:w}=Ge(e,X),{anchorEl:b,canShow:y}=Ue({showing:x}),{hide:T}=Ae({showing:x,canShow:y,handleShow:fe,handleHide:he,hideOnRouteChange:a,processOnMount:!0}),{showPortal:O,hidePortal:Q,renderPortal:se}=ze(h,g,ve,"menu"),A={anchorEl:b,innerRef:g,onClickOutside(u){if(e.persistent!==!0&&x.value===!0)return T(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Ie(u),!0}},V=C(()=>le(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),re=C(()=>e.cover===!0?V.value:le(e.self||"top start",d.lang.rtl)),ce=C(()=>(e.square===!0?" q-menu--square":"")+(s.value===!0?" q-menu--dark q-dark":"")),de=C(()=>e.autoClose===!0?{onClick:me}:{}),I=C(()=>x.value===!0&&e.persistent!==!0);H(I,u=>{u===!0?(Qe(F),Je(A)):(J(F),ee(A))});function z(){Ve(()=>{let u=g.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function fe(u){if(l=e.noRefocus===!1?document.activeElement:null,Fe(Y),O(),X(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const $=$e(u);if($.left!==void 0){const{top:ge,left:xe}=b.value.getBoundingClientRect();c={left:$.left-xe,top:$.top-ge}}}i===void 0&&(i=H(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,k)),e.noFocus!==!0&&document.activeElement.blur(),M(()=>{k(),e.noFocus!==!0&&z()}),W(()=>{d.platform.is.ios===!0&&(f=e.autoClose,g.value.click()),k(),O(!0),o("show",u)},e.transitionDuration)}function he(u){S(),Q(),N(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),W(()=>{Q(!0),o("hide",u)},e.transitionDuration)}function N(u){c=void 0,i!==void 0&&(i(),i=void 0),(u===!0||x.value===!0)&&(Re(Y),w(),ee(A),J(F)),u!==!0&&(l=null)}function X(){(b.value!==null||e.scrollTarget!==void 0)&&(p.value=Ke(b.value,e.scrollTarget),m(p.value,k))}function me(u){f!==!0?(De(r,u),o("click",u)):f=!1}function Y(u){I.value===!0&&e.noFocus!==!0&&Ne(g.value,u.target)!==!0&&z()}function F(u){o("escapeKey"),T(u)}function k(){ue({targetEl:g.value,offset:e.offset,anchorEl:b.value,anchorOrigin:V.value,selfOrigin:re.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ve(){return Z(Oe,L.value,()=>x.value===!0?Z("div",{role:"menu",...t,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+ce.value,t.class],style:[t.style,v.value],...de.value},je(n.default)):null)}return j(N),Object.assign(r,{focus:z,updatePosition:k}),se}});export{it as Q,Ue as a,Ye as b,Ze as c,Ge as d,Je as e,le as p,ee as r,ue as s,_e as u,oe as v};
