import{N as M,j as c,S as w,U as G,r as _,a6 as _e,B as ae,a7 as U,a8 as Te,Y as re,V as R,a9 as pe,a0 as ue,a1 as A,a2 as le,h as k,aa as je,ab as se,ac as rt,ad as ce,ae as ut,af as st,X as We,E as Ce,ag as ct,ah as dt,ai as vt,aj as ft,ak as ht,al as mt,am as ee,an as bt,ao as oe,ap as be,aq as Le,ar as ge,as as Be,at as ye,au as gt,P as yt,R as zt,av as ke,aw as ze,ax as Pe,ay as St,az as wt,aA as qt,aB as pt,aC as Ct,aD as Me,aE as Bt,O as Ne,a3 as _t,aF as Se,A as ie,aG as Tt}from"./app-dcaBrJ0A.js";const Qt=M({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const l=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:l.value},G(n.default))}}),Dt=M({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const l=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:l.value,role:"toolbar"},G(n.default))}});function kt(){const e=_(!_e.value);return e.value===!1&&ae(()=>{e.value=!0}),{isHydrated:e}}const Xe=typeof ResizeObserver<"u",Ee=Xe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},J=M({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let l=null,r,t={width:-1,height:-1};function a(v){v===!0||e.debounce===0||e.debounce==="0"?i():l===null&&(l=setTimeout(i,e.debounce))}function i(){if(l!==null&&(clearTimeout(l),l=null),r){const{offsetWidth:v,offsetHeight:d}=r;(v!==t.width||d!==t.height)&&(t={width:v,height:d},n("resize",t))}}const{proxy:o}=R();if(o.trigger=a,Xe===!0){let v;const d=s=>{r=o.$el.parentNode,r?(v=new ResizeObserver(a),v.observe(r),i()):s!==!0&&re(()=>{d(!0)})};return ae(()=>{d()}),U(()=>{l!==null&&clearTimeout(l),v!==void 0&&(v.disconnect!==void 0?v.disconnect():r&&v.unobserve(r))}),Te}else{let v=function(){l!==null&&(clearTimeout(l),l=null),z!==void 0&&(z.removeEventListener!==void 0&&z.removeEventListener("resize",a,pe.passive),z=void 0)},d=function(){v(),r&&r.contentDocument&&(z=r.contentDocument.defaultView,z.addEventListener("resize",a,pe.passive),i())};const{isHydrated:s}=kt();let z;return ae(()=>{re(()=>{r=o.$el,r&&d()})}),U(v),()=>{if(s.value===!0)return w("object",{class:"q--avoid-card-border",style:Ee.style,tabindex:-1,type:"text/html",data:Ee.url,"aria-hidden":"true",onLoad:d})}}}}),It=M({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:l}){const{proxy:{$q:r}}=R(),t=ue(le,A);if(t===A)return console.error("QHeader needs to be child of QLayout"),A;const a=_(parseInt(e.heightHint,10)),i=_(!0),o=c(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||r.platform.is.ios&&t.isContainer.value===!0),v=c(()=>{if(e.modelValue!==!0)return 0;if(o.value===!0)return i.value===!0?a.value:0;const b=a.value-t.scroll.value.position;return b>0?b:0}),d=c(()=>e.modelValue!==!0||o.value===!0&&i.value!==!0),s=c(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),z=c(()=>"q-header q-layout__section--marginal "+(o.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=c(()=>{const b=t.rows.value.top,q={};return b[0]==="l"&&t.left.space===!0&&(q[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),b[2]==="r"&&t.right.space===!0&&(q[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),q});function m(b,q){t.update("header",b,q)}function y(b,q){b.value!==q&&(b.value=q)}function $({height:b}){y(a,b),m("size",b)}function O(b){s.value===!0&&y(i,!0),l("focusin",b)}k(()=>e.modelValue,b=>{m("space",b),y(i,!0),t.animate()}),k(v,b=>{m("offset",b)}),k(()=>e.reveal,b=>{b===!1&&y(i,e.modelValue)}),k(i,b=>{t.animate(),l("reveal",b)}),k(t.scroll,b=>{e.reveal===!0&&y(i,b.direction==="up"||b.position<=e.revealOffset||b.position-b.inflectionPoint<100)});const C={};return t.instances.header=C,e.modelValue===!0&&m("size",a.value),m("space",e.modelValue),m("offset",v.value),U(()=>{t.instances.header===C&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const b=je(n.default,[]);return e.elevated===!0&&b.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),b.push(w(J,{debounce:0,onResize:$})),w("header",{class:z.value,style:S.value,onFocusin:O},b)}}}),Rt=M({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const l=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>w("div",{class:l.value},G(n.default))}}),Vt=M({name:"QItem",props:{...se,...rt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:l}){const{proxy:{$q:r}}=R(),t=ce(e,r),{hasLink:a,linkAttrs:i,linkClass:o,linkTag:v,navigateOnClick:d}=ut(),s=_(null),z=_(null),S=c(()=>e.clickable===!0||a.value===!0||e.tag==="label"),m=c(()=>e.disable!==!0&&S.value===!0),y=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(a.value===!0&&e.active===null?o.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),$=c(()=>e.insetLevel===void 0?null:{["padding"+(r.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function O(q){m.value===!0&&(z.value!==null&&(q.qKeyEvent!==!0&&document.activeElement===s.value?z.value.focus():document.activeElement===z.value&&s.value.focus()),d(q))}function C(q){if(m.value===!0&&st(q,[13,32])===!0){We(q),q.qKeyEvent=!0;const p=new MouseEvent("click",q);p.qKeyEvent=!0,s.value.dispatchEvent(p)}l("keyup",q)}function b(){const q=je(n.default,[]);return m.value===!0&&q.unshift(w("div",{class:"q-focus-helper",tabindex:-1,ref:z})),q}return()=>{const q={ref:s,class:y.value,style:$.value,role:"listitem",onClick:O,onKeyup:C};return m.value===!0?(q.tabindex=e.tabindex||"0",Object.assign(q,i.value)):S.value===!0&&(q["aria-disabled"]="true"),w(v.value,q,b())}}}),Ft=M({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const l=c(()=>parseInt(e.lines,10)),r=c(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),t=c(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>w("div",{style:t.value,class:r.value},G(n.default))}}),xt=["ul","ol"],jt=M({name:"QList",props:{...se,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const l=R(),r=ce(e,l.proxy.$q),t=c(()=>xt.includes(e.tag)?null:"list"),a=c(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>w(e.tag,{class:a.value,role:t.value},G(n.default))}}),Ot=M({props:["store","barStyle","verticalBarStyle","horizontalBarStyle"],setup(e){return()=>[w("div",{class:e.store.scroll.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:e.store.onVerticalMousedown}),w("div",{class:e.store.scroll.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:e.store.onHorizontalMousedown}),Ce(w("div",{ref:e.store.scroll.vertical.ref,class:e.store.scroll.vertical.thumbClass.value,style:e.store.scroll.vertical.style.value,"aria-hidden":"true"}),e.store.thumbVertDir),Ce(w("div",{ref:e.store.scroll.horizontal.ref,class:e.store.scroll.horizontal.thumbClass.value,style:e.store.scroll.horizontal.style.value,"aria-hidden":"true"}),e.store.thumbHorizDir)]}}),{passive:He}=pe,$t=["both","horizontal","vertical"],Ke=M({name:"QScrollObserver",props:{axis:{type:String,validator:e=>$t.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ct},emits:["scroll"],setup(e,{emit:n}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,a;k(()=>e.scrollTarget,()=>{v(),o()});function i(){r!==null&&r();const z=Math.max(0,vt(t)),S=ft(t),m={top:z-l.position.top,left:S-l.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const y=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";l.position={top:z,left:S},l.directionChanged=l.direction!==y,l.delta=m,l.directionChanged===!0&&(l.direction=y,l.inflectionPoint=l.position),n("scroll",{...l})}function o(){t=dt(a,e.scrollTarget),t.addEventListener("scroll",d,He),d(!0)}function v(){t!==void 0&&(t.removeEventListener("scroll",d,He),t=void 0)}function d(z){if(z===!0||e.debounce===0||e.debounce==="0")i();else if(r===null){const[S,m]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];r=()=>{m(S),r=null}}}const{proxy:s}=R();return k(()=>s.$q.lang.rtl,i),ae(()=>{a=s.$el.parentNode,o()}),U(()=>{r!==null&&r(),v()}),Object.assign(s,{trigger:d,getPosition:()=>l}),Te}}),xe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Lt=Object.keys(xe);xe.all=!0;function Ae(e){const n={};for(const l of Lt)e[l]===!0&&(n[l]=!0);return Object.keys(n).length===0?xe:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const Pt=["INPUT","TEXTAREA"];function Qe(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&Pt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Mt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ht.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function we(e,n,l){const r=Be(e);let t,a=r.left-n.event.x,i=r.top-n.event.y,o=Math.abs(a),v=Math.abs(i);const d=n.direction;d.horizontal===!0&&d.vertical!==!0?t=a<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=i<0?"up":"down":d.up===!0&&i<0?(t="up",o>v&&(d.left===!0&&a<0?t="left":d.right===!0&&a>0&&(t="right"))):d.down===!0&&i>0?(t="down",o>v&&(d.left===!0&&a<0?t="left":d.right===!0&&a>0&&(t="right"))):d.left===!0&&a<0?(t="left",o<v&&(d.up===!0&&i<0?t="up":d.down===!0&&i>0&&(t="down"))):d.right===!0&&a>0&&(t="right",o<v&&(d.up===!0&&i<0?t="up":d.down===!0&&i>0&&(t="down")));let s=!1;if(t===void 0&&l===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,s=!0,t==="left"||t==="right"?(r.left-=a,o=0,a=0):(r.top-=i,v=0,i=0)}return{synthetic:s,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:r,direction:t,isFirst:n.event.isFirst,isFinal:l===!0,duration:Date.now()-n.event.time,distance:{x:o,y:v},offset:{x:a,y:i},delta:{x:r.left-n.event.lastX,y:r.top-n.event.lastY}}}}let Et=0;const te=mt({name:"touch-pan",beforeMount(e,{value:n,modifiers:l}){if(l.mouse!==!0&&ee.has.touch!==!0)return;function r(a,i){l.mouse===!0&&i===!0?We(a):(l.stop===!0&&ge(a),l.prevent===!0&&Le(a))}const t={uid:"qvtp_"+Et++,handler:n,modifiers:l,direction:Ae(l),noop:Te,mouseStart(a){Qe(a,t)&&bt(a)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Qe(a,t)){const i=a.target;oe(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,i){if(ee.is.firefox===!0&&be(e,!0),t.lastEvt=a,i===!0||l.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Le(d),a.cancelBubble===!0&&ge(d),Object.assign(d,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:d}}ge(a)}const{left:o,top:v}=Be(a);t.event={x:o,y:v,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:o,lastY:v}},move(a){if(t.event===void 0)return;const i=Be(a),o=i.left-t.event.x,v=i.top-t.event.y;if(o===0&&v===0)return;t.lastEvt=a;const d=t.event.mouse===!0,s=()=>{r(a,d);let m;l.preserveCursor!==!0&&l.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Mt(),t.styleCleanup=y=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),d===!0){const $=()=>{document.body.classList.remove("no-pointer-events--children")};y!==void 0?setTimeout(()=>{$(),y()},50):$()}else y!==void 0&&y()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(a,t.event.mouse);const{payload:m,synthetic:y}=we(a,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&s(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=y===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){s(),t.event.detected=!0,t.move(a);return}const z=Math.abs(o),S=Math.abs(v);z!==S&&(t.direction.horizontal===!0&&z>S||t.direction.vertical===!0&&z<S||t.direction.up===!0&&z<S&&v<0||t.direction.down===!0&&z<S&&v>0||t.direction.left===!0&&z>S&&o<0||t.direction.right===!0&&z>S&&o>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,i){if(t.event!==void 0){if(ye(t,"temp"),ee.is.firefox===!0&&be(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(we(a===void 0?t.lastEvt:a,t).payload);const{payload:o}=we(a===void 0?t.lastEvt:a,t,!0),v=()=>{t.handler(o)};t.styleCleanup!==void 0?t.styleCleanup(v):v()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const a=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}ee.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchpan;l!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&l.end(),l.handler=n.value),l.direction=Ae(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ye(n,"main"),ye(n,"temp"),ee.is.firefox===!0&&be(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}}),De=["B","KB","MB","GB","TB","PB"];function Wt(e,n=1){let l=0;for(;parseInt(e,10)>=1024&&l<De.length-1;)e/=1024,++l;return`${e.toFixed(n)}${De[l]}`}function F(e,n,l){return l<=n?n:Math.min(l,Math.max(n,e))}function Nt(e,n,l){if(l<=n)return n;const r=l-n+1;let t=n+(e-n)%r;return t<n&&(t=r+t),t===0?0:t}function Xt(e,n=2,l="0"){if(e==null)return e;const r=""+e;return r.length>=n?r:new Array(n-r.length+1).join(l)+r}const Ie=["vertical","horizontal"],qe={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Re={prevent:!0,mouse:!0,mouseAllDir:!0},Ve=e=>e>=250?50:Math.ceil(e/5),Kt=M({name:"QScrollArea",props:{...se,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],verticalOffset:{type:Array,default:[0,0]},horizontalOffset:{type:Array,default:[0,0]},contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:n,emit:l}){const r=_(!1),t=_(!1),a=_(!1),i={vertical:_(0),horizontal:_(0)},o={vertical:{ref:_(null),position:_(0),size:_(0)},horizontal:{ref:_(null),position:_(0),size:_(0)}},{proxy:v}=R(),d=ce(e,v.$q);let s=null,z;const S=_(null),m=c(()=>"q-scrollarea"+(d.value===!0?" q-scrollarea--dark":""));Object.assign(i,{verticalInner:c(()=>i.vertical.value-e.verticalOffset[0]-e.verticalOffset[1]),horizontalInner:c(()=>i.horizontal.value-e.horizontalOffset[0]-e.horizontalOffset[1])}),o.vertical.percentage=c(()=>{const f=o.vertical.size.value-i.vertical.value;if(f<=0)return 0;const g=F(o.vertical.position.value/f,0,1);return Math.round(g*1e4)/1e4}),o.vertical.thumbHidden=c(()=>(e.visible===null?a.value:e.visible)!==!0&&r.value===!1&&t.value===!1||o.vertical.size.value<=i.vertical.value+1),o.vertical.thumbStart=c(()=>e.verticalOffset[0]+o.vertical.percentage.value*(i.verticalInner.value-o.vertical.thumbSize.value)),o.vertical.thumbSize=c(()=>Math.round(F(i.verticalInner.value*i.verticalInner.value/o.vertical.size.value,Ve(i.verticalInner.value),i.verticalInner.value))),o.vertical.style=c(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${o.vertical.thumbStart.value}px`,height:`${o.vertical.thumbSize.value}px`,right:`${e.horizontalOffset[1]}px`})),o.vertical.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(o.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),o.vertical.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(o.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),o.horizontal.percentage=c(()=>{const f=o.horizontal.size.value-i.horizontal.value;if(f<=0)return 0;const g=F(Math.abs(o.horizontal.position.value)/f,0,1);return Math.round(g*1e4)/1e4}),o.horizontal.thumbHidden=c(()=>(e.visible===null?a.value:e.visible)!==!0&&r.value===!1&&t.value===!1||o.horizontal.size.value<=i.horizontal.value+1),o.horizontal.thumbStart=c(()=>e.horizontalOffset[0]+o.horizontal.percentage.value*(i.horizontalInner.value-o.horizontal.thumbSize.value)),o.horizontal.thumbSize=c(()=>Math.round(F(i.horizontalInner.value*i.horizontalInner.value/o.horizontal.size.value,Ve(i.horizontalInner.value),i.horizontalInner.value))),o.horizontal.style=c(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[v.$q.lang.rtl===!0?"right":"left"]:`${o.horizontal.thumbStart.value}px`,width:`${o.horizontal.thumbSize.value}px`,bottom:`${e.verticalOffset[1]}px`})),o.horizontal.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(o.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),o.horizontal.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(o.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const y=c(()=>o.vertical.thumbHidden.value===!0&&o.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle);function $(){const f={};return Ie.forEach(g=>{const T=o[g];Object.assign(f,{[g+"Position"]:T.position.value,[g+"Percentage"]:T.percentage.value,[g+"Size"]:T.size.value,[g+"ContainerSize"]:i[g].value,[g+"ContainerInnerSize"]:i[g+"Inner"].value})}),f}const O=gt(()=>{const f=$();f.ref=v,l("scroll",f)},0);function C(f,g,T){if(Ie.includes(f)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(f==="vertical"?Pe:ze)(S.value,g,T)}function b({height:f,width:g}){let T=!1;i.vertical.value!==f&&(i.vertical.value=f,T=!0),i.horizontal.value!==g&&(i.horizontal.value=g,T=!0),T===!0&&L()}function q({position:f}){let g=!1;o.vertical.position.value!==f.top&&(o.vertical.position.value=f.top,g=!0),o.horizontal.position.value!==f.left&&(o.horizontal.position.value=f.left,g=!0),g===!0&&L()}function p({height:f,width:g}){o.horizontal.size.value!==g&&(o.horizontal.size.value=g,L()),o.vertical.size.value!==f&&(o.vertical.size.value=f,L())}function h(f,g){const T=o[g];if(f.isFirst===!0){if(T.thumbHidden.value===!0)return;z=T.position.value,t.value=!0}else if(t.value!==!0)return;f.isFinal===!0&&(t.value=!1);const D=qe[g],V=(T.size.value-i[g].value)/(i[g+"Inner"].value-T.thumbSize.value),I=f.distance[D.dist],Z=z+(f.direction===D.dir?1:-1)*I*V;j(Z,g)}function x(f,g){const T=o[g];if(T.thumbHidden.value!==!0){const D=g==="vertical"?e.verticalOffset[0]:e.horizontalOffset[0],V=f[qe[g].offset]-D,I=T.thumbStart.value-D;if(V<I||V>I+T.thumbSize.value){const Z=V-T.thumbSize.value/2,de=F(Z/(i[g+"Inner"].value-T.thumbSize.value),0,1);j(de*Math.max(0,T.size.value-i[g].value),g)}T.ref.value!==null&&T.ref.value.dispatchEvent(new MouseEvent(f.type,f))}}function L(){r.value=!0,s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,r.value=!1},e.delay),e.onScroll!==void 0&&O()}function j(f,g){S.value[qe[g].scroll]=f}let P=null;function Q(){P!==null&&clearTimeout(P),P=setTimeout(()=>{P=null,a.value=!0},v.$q.platform.is.ios?50:0)}function W(){P!==null&&(clearTimeout(P),P=null),a.value=!1}let Y=null;k(()=>v.$q.lang.rtl,f=>{S.value!==null&&ze(S.value,Math.abs(o.horizontal.position.value)*(f===!0?-1:1))}),yt(()=>{Y={top:o.vertical.position.value,left:o.horizontal.position.value}}),zt(()=>{if(Y===null)return;const f=S.value;f!==null&&(ze(f,Y.left),Pe(f,Y.top))}),U(O.cancel),Object.assign(v,{getScrollTarget:()=>S.value,getScroll:$,getScrollPosition:()=>({top:o.vertical.position.value,left:o.horizontal.position.value}),getScrollPercentage:()=>({top:o.vertical.percentage.value,left:o.horizontal.percentage.value}),setScrollPosition:C,setScrollPercentage(f,g,T){C(f,g*(o[f].size.value-i[f].value)*(f==="horizontal"&&v.$q.lang.rtl===!0?-1:1),T)}});const N={scroll:o,thumbVertDir:[[te,f=>{h(f,"vertical")},void 0,{vertical:!0,...Re}]],thumbHorizDir:[[te,f=>{h(f,"horizontal")},void 0,{horizontal:!0,...Re}]],onVerticalMousedown(f){x(f,"vertical")},onHorizontalMousedown(f){x(f,"horizontal")}};return()=>w("div",{class:m.value,onMouseenter:Q,onMouseleave:W},[w("div",{ref:S,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[w("div",{class:"q-scrollarea__content absolute",style:y.value},ke(n.default,[w(J,{debounce:0,onResize:p})])),w(Ke,{axis:"both",onScroll:q})]),w(J,{debounce:0,onResize:b}),w(Ot,{store:N,barStyle:e.barStyle,verticalBarStyle:e.verticalBarStyle,horizontalBarStyle:e.horizontalBarStyle})])}}),Fe=150,Yt=M({name:"QDrawer",inheritAttrs:!1,props:{...St,...se,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...wt,"onLayout","miniState"],setup(e,{slots:n,emit:l,attrs:r}){const t=R(),{proxy:{$q:a}}=t,i=ce(e,a),{preventBodyScroll:o}=Bt(),{registerTimeout:v,removeTimeout:d}=qt(),s=ue(le,A);if(s===A)return console.error("QDrawer needs to be child of QLayout"),A;let z,S=null,m;const y=_(e.behavior==="mobile"||e.behavior!=="desktop"&&s.totalWidth.value<=e.breakpoint),$=c(()=>e.mini===!0&&y.value!==!0),O=c(()=>$.value===!0?e.miniWidth:e.width),C=_(e.showIfAbove===!0&&y.value===!1?!0:e.modelValue===!0),b=c(()=>e.persistent!==!0&&(y.value===!0||Z.value===!0));function q(u,B){if(L(),u!==!1&&s.animate(),H(0),y.value===!0){const E=s.instances[T.value];E!==void 0&&E.belowBreakpoint===!0&&E.hide(!1),X(1),s.isContainer.value!==!0&&o(!0)}else X(0),u!==!1&&fe(!1);v(()=>{u!==!1&&fe(!0),B!==!0&&l("show",u)},Fe)}function p(u,B){j(),u!==!1&&s.animate(),X(0),H(W.value*O.value),he(),B!==!0?v(()=>{l("hide",u)},Fe):d()}const{show:h,hide:x}=pt({showing:C,hideOnRouteChange:b,handleShow:q,handleHide:p}),{addToHistory:L,removeFromHistory:j}=Ct(C,x,b),P={belowBreakpoint:y,hide:x},Q=c(()=>e.side==="right"),W=c(()=>(a.lang.rtl===!0?-1:1)*(Q.value===!0?1:-1)),Y=_(0),N=_(!1),f=_(!1),g=_(O.value*W.value),T=c(()=>Q.value===!0?"left":"right"),D=c(()=>C.value===!0&&y.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:O.value:0),V=c(()=>e.overlay===!0||e.miniToOverlay===!0||s.view.value.indexOf(Q.value?"R":"L")!==-1||a.platform.is.ios===!0&&s.isContainer.value===!0),I=c(()=>e.overlay===!1&&C.value===!0&&y.value===!1),Z=c(()=>e.overlay===!0&&C.value===!0&&y.value===!1),de=c(()=>"fullscreen q-drawer__backdrop"+(C.value===!1&&N.value===!1?" hidden":"")),Ye=c(()=>({backgroundColor:`rgba(0,0,0,${Y.value*.4})`})),Oe=c(()=>Q.value===!0?s.rows.value.top[2]==="r":s.rows.value.top[0]==="l"),Ue=c(()=>Q.value===!0?s.rows.value.bottom[2]==="r":s.rows.value.bottom[0]==="l"),Ge=c(()=>{const u={};return s.header.space===!0&&Oe.value===!1&&(V.value===!0?u.top=`${s.header.offset}px`:s.header.space===!0&&(u.top=`${s.header.size}px`)),s.footer.space===!0&&Ue.value===!1&&(V.value===!0?u.bottom=`${s.footer.offset}px`:s.footer.space===!0&&(u.bottom=`${s.footer.size}px`)),u}),Je=c(()=>{const u={width:`${O.value}px`,transform:`translateX(${g.value}px)`};return y.value===!0?u:Object.assign(u,Ge.value)}),Ze=c(()=>"q-drawer__content fit "+(s.isContainer.value!==!0?"scroll":"overflow-auto")),et=c(()=>`q-drawer q-drawer--${e.side}`+(f.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":C.value===!0?"":" q-layout--prevent-focus")+(y.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${$.value===!0?"mini":"standard"}`+(V.value===!0||I.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Oe.value===!0?" q-drawer--top-padding":""))),tt=c(()=>{const u=a.lang.rtl===!0?e.side:T.value;return[[te,ot,void 0,{[u]:!0,mouse:!0}]]}),at=c(()=>{const u=a.lang.rtl===!0?T.value:e.side;return[[te,$e,void 0,{[u]:!0,mouse:!0}]]}),lt=c(()=>{const u=a.lang.rtl===!0?T.value:e.side;return[[te,$e,void 0,{[u]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){it(y,e.behavior==="mobile"||e.behavior!=="desktop"&&s.totalWidth.value<=e.breakpoint)}k(y,u=>{u===!0?(z=C.value,C.value===!0&&x(!1)):e.overlay===!1&&e.behavior!=="mobile"&&z!==!1&&(C.value===!0?(H(0),X(0),he()):h(!1))}),k(()=>e.side,(u,B)=>{s.instances[B]===P&&(s.instances[B]=void 0,s[B].space=!1,s[B].offset=0),s.instances[u]=P,s[u].size=O.value,s[u].space=I.value,s[u].offset=D.value}),k(s.totalWidth,()=>{(s.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),k(()=>e.behavior+e.breakpoint,ve),k(s.isContainer,u=>{C.value===!0&&o(u!==!0),u===!0&&ve()}),k(s.scrollbarWidth,()=>{H(C.value===!0?0:void 0)}),k(D,u=>{K("offset",u)}),k(I,u=>{l("onLayout",u),K("space",u)}),k(Q,()=>{H()}),k(O,u=>{H(),me(e.miniToOverlay,u)}),k(()=>e.miniToOverlay,u=>{me(u,O.value)}),k(()=>a.lang.rtl,()=>{H()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(nt(),s.animate())}),k($,u=>{l("miniState",u)});function H(u){u===void 0?re(()=>{u=C.value===!0?0:O.value,H(W.value*u)}):(s.isContainer.value===!0&&Q.value===!0&&(y.value===!0||Math.abs(u)===O.value)&&(u+=W.value*s.scrollbarWidth.value),g.value=u)}function X(u){Y.value=u}function fe(u){const B=u===!0?"remove":s.isContainer.value!==!0?"add":"";B!==""&&document.body.classList[B]("q-body--drawer-toggle")}function nt(){S!==null&&clearTimeout(S),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),f.value=!0,S=setTimeout(()=>{S=null,f.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ot(u){if(C.value!==!1)return;const B=O.value,E=F(u.distance.x,0,B);if(u.isFinal===!0){E>=Math.min(75,B)===!0?h():(s.animate(),X(0),H(W.value*B)),N.value=!1;return}H((a.lang.rtl===!0?Q.value!==!0:Q.value)?Math.max(B-E,0):Math.min(0,E-B)),X(F(E/B,0,1)),u.isFirst===!0&&(N.value=!0)}function $e(u){if(C.value!==!0)return;const B=O.value,E=u.direction===e.side,ne=(a.lang.rtl===!0?E!==!0:E)?F(u.distance.x,0,B):0;if(u.isFinal===!0){Math.abs(ne)<Math.min(75,B)===!0?(s.animate(),X(1),H(0)):x(),N.value=!1;return}H(W.value*ne),X(F(1-ne/B,0,1)),u.isFirst===!0&&(N.value=!0)}function he(){o(!1),fe(!0)}function K(u,B){s.update(e.side,u,B)}function it(u,B){u.value!==B&&(u.value=B)}function me(u,B){K("size",u===!0?e.miniWidth:B)}return s.instances[e.side]=P,me(e.miniToOverlay,O.value),K("space",I.value),K("offset",D.value),e.showIfAbove===!0&&e.modelValue!==!0&&C.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),ae(()=>{l("onLayout",I.value),l("miniState",$.value),z=e.showIfAbove===!0;const u=()=>{(C.value===!0?q:p)(!1,!0)};if(s.totalWidth.value!==0){re(u);return}m=k(s.totalWidth,()=>{m(),m=void 0,C.value===!1&&e.showIfAbove===!0&&y.value===!1?h(!1):u()})}),U(()=>{m!==void 0&&m(),S!==null&&(clearTimeout(S),S=null),C.value===!0&&he(),s.instances[e.side]===P&&(s.instances[e.side]=void 0,K("size",0),K("offset",0),K("space",!1))}),()=>{const u=[];y.value===!0&&(e.noSwipeOpen===!1&&u.push(Ce(w("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),tt.value)),u.push(Me("div",{ref:"backdrop",class:de.value,style:Ye.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",e.noSwipeBackdrop!==!0&&C.value===!0,()=>lt.value)));const B=$.value===!0&&n.mini!==void 0,E=[w("div",{...r,key:""+B,class:[Ze.value,r.class]},B===!0?n.mini():G(n.default))];return e.elevated===!0&&C.value===!0&&E.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(Me("aside",{ref:"content",class:et.value,style:Je.value},E,"contentclose",e.noSwipeClose!==!0&&y.value===!0,()=>at.value)),w("div",{class:"q-drawer-container"},u)}}}),Ut=M({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:l}}=R(),r=ue(le,A);if(r===A)return console.error("QPageContainer needs to be child of QLayout"),A;Ne(_t,!0);const t=c(()=>{const a={};return r.header.space===!0&&(a.paddingTop=`${r.header.size}px`),r.right.space===!0&&(a[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(a.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(a[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),a});return()=>w("div",{class:"q-page-container",style:t.value},G(n.default))}}),Gt=M({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:l}){const{proxy:{$q:r}}=R(),t=ue(le,A);if(t===A)return console.error("QFooter needs to be child of QLayout"),A;const a=_(parseInt(e.heightHint,10)),i=_(!0),o=_(_e.value===!0||t.isContainer.value===!0?0:window.innerHeight),v=c(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||r.platform.is.ios&&t.isContainer.value===!0),d=c(()=>t.isContainer.value===!0?t.containerHeight.value:o.value),s=c(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return i.value===!0?a.value:0;const h=t.scroll.value.position+d.value+a.value-t.height.value;return h>0?h:0}),z=c(()=>e.modelValue!==!0||v.value===!0&&i.value!==!0),S=c(()=>e.modelValue===!0&&z.value===!0&&e.reveal===!0),m=c(()=>"q-footer q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(z.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(v.value!==!0?" hidden":""):"")),y=c(()=>{const h=t.rows.value.bottom,x={};return h[0]==="l"&&t.left.space===!0&&(x[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&(x[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),x});function $(h,x){t.update("footer",h,x)}function O(h,x){h.value!==x&&(h.value=x)}function C({height:h}){O(a,h),$("size",h)}function b(){if(e.reveal!==!0)return;const{direction:h,position:x,inflectionPoint:L}=t.scroll.value;O(i,h==="up"||x-L<100||t.height.value-d.value-x-a.value<300)}function q(h){S.value===!0&&O(i,!0),l("focusin",h)}k(()=>e.modelValue,h=>{$("space",h),O(i,!0),t.animate()}),k(s,h=>{$("offset",h)}),k(()=>e.reveal,h=>{h===!1&&O(i,e.modelValue)}),k(i,h=>{t.animate(),l("reveal",h)}),k([a,t.scroll,t.height],b),k(()=>r.screen.height,h=>{t.isContainer.value!==!0&&O(o,h)});const p={};return t.instances.footer=p,e.modelValue===!0&&$("size",a.value),$("space",e.modelValue),$("offset",s.value),U(()=>{t.instances.footer===p&&(t.instances.footer=void 0,$("size",0),$("offset",0),$("space",!1))}),()=>{const h=ke(n.default,[w(J,{debounce:0,onResize:C})]);return e.elevated===!0&&h.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:m.value,style:y.value,onFocusin:q},h)}}}),Jt=M({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:l}){const{proxy:{$q:r}}=R(),t=_(null),a=_(r.screen.height),i=_(e.container===!0?0:r.screen.width),o=_({position:0,direction:"down",inflectionPoint:0}),v=_(0),d=_(_e.value===!0?0:Se()),s=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),z=c(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),S=c(()=>d.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),m=c(()=>d.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function y(p){if(e.container===!0||document.qScrollPrevented!==!0){const h={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};o.value=h,e.onScroll!==void 0&&l("scroll",h)}}function $(p){const{height:h,width:x}=p;let L=!1;a.value!==h&&(L=!0,a.value=h,e.onScrollHeight!==void 0&&l("scrollHeight",h),C()),i.value!==x&&(L=!0,i.value=x),L===!0&&e.onResize!==void 0&&l("resize",p)}function O({height:p}){v.value!==p&&(v.value=p,C())}function C(){if(e.container===!0){const p=a.value>v.value?Se():0;d.value!==p&&(d.value=p)}}let b=null;const q={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:t,height:a,containerHeight:v,scrollbarWidth:d,totalWidth:c(()=>i.value+d.value),rows:c(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:ie({size:0,offset:0,space:!1}),right:ie({size:300,offset:0,space:!1}),footer:ie({size:0,offset:0,space:!1}),left:ie({size:300,offset:0,space:!1}),scroll:o,animate(){b!==null?clearTimeout(b):document.body.classList.add("q-body--layout-animate"),b=setTimeout(()=>{b=null,document.body.classList.remove("q-body--layout-animate")},155)},update(p,h,x){q[p][h]=x}};if(Ne(le,q),Se()>0){let p=function(){L=null,j.classList.remove("hide-scrollbar")},h=function(){if(L===null){if(j.scrollHeight>r.screen.height)return;j.classList.add("hide-scrollbar")}else clearTimeout(L);L=setTimeout(p,300)},x=function(P){L!==null&&P==="remove"&&(clearTimeout(L),p()),window[`${P}EventListener`]("resize",h)},L=null;const j=document.body;k(()=>e.container!==!0?"add":"remove",x),e.container!==!0&&x("add"),Tt(()=>{x("remove")})}return()=>{const p=ke(n.default,[w(Ke,{onScroll:y}),w(J,{onResize:$})]),h=w("div",{class:s.value,style:z.value,ref:e.container===!0?void 0:t,tabindex:-1},p);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:t},[w(J,{onResize:O}),w("div",{class:"absolute-full",style:S.value},[w("div",{class:"scroll",style:m.value},[h])])]):h}}});export{jt as Q,Rt as a,Ft as b,Vt as c,Dt as d,Qt as e,It as f,Kt as g,Yt as h,Ut as i,Gt as j,Jt as k,Wt as l,Mt as m,Nt as n,J as o,Xt as p};
