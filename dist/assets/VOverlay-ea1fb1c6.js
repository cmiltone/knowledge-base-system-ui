import{aq as De,ar as Me,g as U,c as S,v as $,T as de,p as I,as as rt,a6 as Q,m as ae,t as V,e as C,u as ie,a2 as Re,ak as _e,ad as st,ag as W,at as Ne,a as $e,b as He,f as lt,s as Y,r as z,an as ut,a1 as K,n as he,w as M,ai as H,au as ct,A as re,h as N,i as Se,x as be,av as je,ab as qe,aw as ft,ah as We,a0 as dt,y as vt,o as mt,ax as ze,aa as yt,ay as gt,az as ht,l as bt,d as wt,aA as pt,a3 as St,F as xt}from"./index-c247efdd.js";import{j as J,n as Ge,k as Et,s as ve,l as Ct,B as se,o as xe}from"./VInput-05702754.js";import{V as kt}from"./index-9672de2e.js";import{b as Pt,c as Ot,d as At,e as Ye,a as Lt,V as Ee,m as Vt,f as Ft,u as Tt}from"./scopeId-551e5591.js";import{u as Bt}from"./ssrBoot-d6f660a8.js";import{m as we}from"./tag-d920acd8.js";import{M as Ke,m as It}from"./VAvatar-397c5db9.js";import{V as Dt,i as Mt,m as Rt,j as _t,x as Xe,a as Nt,b as $t,l as Ht,u as Ue,c as jt,p as qt,y as Ze,d as Wt,e as zt,D as Ce,E as le,F as ue,G as ke,H as Pe,f as Gt,I as Yt}from"./index-5d552a30.js";const ee=new WeakMap;function Kt(e,n){Object.keys(n).forEach(t=>{if(De(t)){const o=Me(t),a=ee.get(e);if(n[t]==null)a==null||a.forEach(s=>{const[r,i]=s;r===o&&(e.removeEventListener(o,i),a.delete(s))});else if(!a||![...a].some(s=>s[0]===o&&s[1]===n[t])){e.addEventListener(o,n[t]);const s=a||new Set;s.add([o,n[t]]),ee.has(e)||ee.set(e,s)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Xt(e,n){Object.keys(n).forEach(t=>{if(De(t)){const o=Me(t),a=ee.get(e);a==null||a.forEach(s=>{const[r,i]=s;r===o&&(e.removeEventListener(o,i),a.delete(s))})}else e.removeAttribute(t)})}function Je(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Ut(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Zt(e):pe(e))return e;e=e.parentElement}return document.scrollingElement}function ne(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(pe(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function pe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Zt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Jt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Qt=I({target:Object},"v-dialog-transition"),Yn=U()({name:"VDialogTransition",props:Qt(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,s){var m;await new Promise(y=>requestAnimationFrame(y)),await new Promise(y=>requestAnimationFrame(y)),a.style.visibility="";const{x:r,y:i,sx:u,sy:f,speed:c}=Ae(e.target,a),v=J(a,[{transform:`translate(${r}px, ${i}px) scale(${u}, ${f})`,opacity:0},{}],{duration:225*c,easing:Et});(m=Oe(a))==null||m.forEach(y=>{J(y,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*c,easing:ve})}),v.finished.then(()=>s())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,s){var m;await new Promise(y=>requestAnimationFrame(y));const{x:r,y:i,sx:u,sy:f,speed:c}=Ae(e.target,a);J(a,[{},{transform:`translate(${r}px, ${i}px) scale(${u}, ${f})`,opacity:0}],{duration:125*c,easing:Ct}).finished.then(()=>s()),(m=Oe(a))==null||m.forEach(y=>{J(y,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*c,easing:ve})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?S(de,$({name:"dialog-transition"},o,{css:!1}),t):S(de,{name:"dialog-transition"},t)}});function Oe(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ae(e,n){const t=e.getBoundingClientRect(),o=Ge(n),[a,s]=getComputedStyle(n).transformOrigin.split(" ").map(x=>parseFloat(x)),[r,i]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;r==="left"||i==="left"?u-=t.width/2:(r==="right"||i==="right")&&(u+=t.width/2);let f=t.top+t.height/2;r==="top"||i==="top"?f-=t.height/2:(r==="bottom"||i==="bottom")&&(f+=t.height/2);const c=t.width/o.width,v=t.height/o.height,m=Math.max(1,c,v),y=c/m||0,g=v/m||0,d=o.width*o.height/(window.innerWidth*window.innerHeight),h=d>.12?Math.min(1.5,(d-.12)*10+1):1;return{x:u-(a+o.left),y:f-(s+o.top),sx:y,sy:g,speed:h}}const en=rt({name:"VListGroupActivator",setup(e,n){let{slots:t}=n;return Pt(),()=>{var o;return(o=t.default)==null?void 0:o.call(t)}}}),tn=I({activeColor:String,baseColor:String,color:String,collapseIcon:{type:Q,default:"$collapse"},expandIcon:{type:Q,default:"$expand"},prependIcon:Q,appendIcon:Q,fluid:Boolean,subgroup:Boolean,title:String,value:null,...ae(),...we()},"VListGroup"),Le=U()({name:"VListGroup",props:tn(),setup(e,n){let{slots:t}=n;const{isOpen:o,open:a,id:s}=Ot(V(e,"value"),!0),r=C(()=>`v-list-group--id-${String(s.value)}`),i=At(),{isBooted:u}=Bt();function f(y){a(!o.value,y)}const c=C(()=>({onClick:f,class:"v-list-group__header",id:r.value})),v=C(()=>o.value?e.collapseIcon:e.expandIcon),m=C(()=>({VListItem:{active:o.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&v.value,appendIcon:e.appendIcon||!e.subgroup&&v.value,title:e.title,value:e.value}}));return ie(()=>S(e.tag,{class:["v-list-group",{"v-list-group--prepend":i==null?void 0:i.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":o.value},e.class],style:e.style},{default:()=>[t.activator&&S(Dt,{defaults:m.value},{default:()=>[S(en,null,{default:()=>[t.activator({props:c.value,isOpen:o.value})]})]}),S(Ke,{transition:{component:kt},disabled:!u.value},{default:()=>{var y;return[Re(S("div",{class:"v-list-group__items",role:"group","aria-labelledby":r.value},[(y=t.default)==null?void 0:y.call(t)]),[[_e,o.value]])]}})]})),{}}}),nn=I({color:String,inset:Boolean,sticky:Boolean,title:String,...ae(),...we()},"VListSubheader"),on=U()({name:"VListSubheader",props:nn(),setup(e,n){let{slots:t}=n;const{textColorClasses:o,textColorStyles:a}=Mt(V(e,"color"));return ie(()=>{const s=!!(t.default||e.title);return S(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},o.value,e.class],style:[{textColorStyles:a},e.style]},{default:()=>{var r;return[s&&S("div",{class:"v-list-subheader__text"},[((r=t.default)==null?void 0:r.call(t))??e.title])]}})}),{}}}),an=I({items:Array,returnObject:Boolean},"VListChildren"),Qe=U()({name:"VListChildren",props:an(),setup(e,n){let{slots:t}=n;return Ye(),()=>{var o,a;return((o=t.default)==null?void 0:o.call(t))??((a=e.items)==null?void 0:a.map(s=>{var y,g;let{children:r,props:i,type:u,raw:f}=s;if(u==="divider")return((y=t.divider)==null?void 0:y.call(t,{props:i}))??S(Lt,i,null);if(u==="subheader")return((g=t.subheader)==null?void 0:g.call(t,{props:i}))??S(on,i,null);const c={subtitle:t.subtitle?d=>{var h;return(h=t.subtitle)==null?void 0:h.call(t,{...d,item:f})}:void 0,prepend:t.prepend?d=>{var h;return(h=t.prepend)==null?void 0:h.call(t,{...d,item:f})}:void 0,append:t.append?d=>{var h;return(h=t.append)==null?void 0:h.call(t,{...d,item:f})}:void 0,title:t.title?d=>{var h;return(h=t.title)==null?void 0:h.call(t,{...d,item:f})}:void 0},[v,m]=Le.filterProps(i);return r?S(Le,$({value:i==null?void 0:i.value},v),{activator:d=>{let{props:h}=d;const x={...i,...h,value:e.returnObject?f:i.value};return t.header?t.header({props:x}):S(Ee,x,c)},default:()=>S(Qe,{items:r},t)}):t.item?t.item({props:i}):S(Ee,$(i,{value:e.returnObject?f:i.value}),c)}))}}}),rn=I({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:st}},"list-items");function me(e,n){const t=W(n,e.itemTitle,n),o=W(n,e.itemValue,t),a=W(n,e.itemChildren),s=e.itemProps===!0?typeof n=="object"&&n!=null&&!Array.isArray(n)?"children"in n?Ne(n,["children"])[1]:n:void 0:W(n,e.itemProps),r={title:t,value:o,...s};return{title:String(r.title??""),value:r.value,props:r,children:Array.isArray(a)?et(e,a):void 0,raw:n}}function et(e,n){const t=[];for(const o of n)t.push(me(e,o));return t}function Kn(e){const n=C(()=>et(e,e.items)),t=C(()=>n.value.some(s=>s.value===null));function o(s){return t.value||(s=s.filter(r=>r!==null)),s.map(r=>e.returnObject&&typeof r=="string"?me(e,r):n.value.find(i=>e.valueComparator(r,i.value))||me(e,r))}function a(s){return e.returnObject?s.map(r=>{let{raw:i}=r;return i}):s.map(r=>{let{value:i}=r;return i})}return{items:n,transformIn:o,transformOut:a}}function sn(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function ln(e,n){const t=W(n,e.itemType,"item"),o=sn(n)?n:W(n,e.itemTitle),a=W(n,e.itemValue,void 0),s=W(n,e.itemChildren),r=e.itemProps===!0?Ne(n,["children"])[1]:W(n,e.itemProps),i={title:o,value:a,...r};return{type:t,title:i.title,value:i.value,props:i,children:t==="item"&&s?tt(e,s):void 0,raw:n}}function tt(e,n){const t=[];for(const o of n)t.push(ln(e,o));return t}function un(e){return{items:C(()=>tt(e,e.items))}}const cn=I({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Vt({selectStrategy:"single-leaf",openStrategy:"list"}),...Rt(),...ae(),..._t(),...Xe(),...Nt(),itemType:{type:String,default:"type"},...rn(),...$t(),...we(),...$e(),...Ht({variant:"text"})},"VList"),Xn=U()({name:"VList",props:cn(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,n){let{slots:t}=n;const{items:o}=un(e),{themeClasses:a}=He(e),{backgroundColorClasses:s,backgroundColorStyles:r}=Ue(V(e,"bgColor")),{borderClasses:i}=jt(e),{densityClasses:u}=qt(e),{dimensionStyles:f}=Ze(e),{elevationClasses:c}=Wt(e),{roundedClasses:v}=zt(e),{open:m,select:y}=Ft(e),g=C(()=>e.lines?`v-list--${e.lines}-line`:void 0),d=V(e,"activeColor"),h=V(e,"baseColor"),x=V(e,"color");Ye(),lt({VListGroup:{activeColor:d,baseColor:h,color:x},VListItem:{activeClass:V(e,"activeClass"),activeColor:d,baseColor:h,color:x,density:V(e,"density"),disabled:V(e,"disabled"),lines:V(e,"lines"),nav:V(e,"nav"),variant:V(e,"variant")}});const w=Y(!1),l=z();function L(P){w.value=!0}function R(P){w.value=!1}function j(P){var T;!w.value&&!(P.relatedTarget&&((T=l.value)!=null&&T.contains(P.relatedTarget)))&&F()}function q(P){if(l.value){if(P.key==="ArrowDown")F("next");else if(P.key==="ArrowUp")F("prev");else if(P.key==="Home")F("first");else if(P.key==="End")F("last");else return;P.preventDefault()}}function F(P){if(l.value)return ut(l.value,P)}return ie(()=>S(e.tag,{ref:l,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},a.value,s.value,i.value,u.value,c.value,g.value,v.value,e.class],style:[r.value,f.value,e.style],tabindex:e.disabled||w.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:L,onFocusout:R,onFocus:j,onKeydown:q},{default:()=>[S(Qe,{items:o.value,returnObject:e.returnObject},t)]})),{open:m,select:y,focus:F}}});function ce(e,n){return{x:e.x+n.x,y:e.y+n.y}}function fn(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ve(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,s=t==="top"?0:t==="bottom"?n.height:t;return ce({x:a,y:s},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,s=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ce({x:a,y:s},n)}return ce({x:n.width/2,y:n.height/2},n)}const nt={static:mn,connected:gn},dn=I({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in nt},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function vn(e,n){const t=z({}),o=z();K&&(he(()=>!!(n.isActive.value&&e.locationStrategy),s=>{var r,i;M(()=>e.locationStrategy,s),H(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(r=e.locationStrategy(n,e,t))==null?void 0:r.updateLocation:o.value=(i=nt[e.locationStrategy](n,e,t))==null?void 0:i.updateLocation}),window.addEventListener("resize",a,{passive:!0}),H(()=>{window.removeEventListener("resize",a),o.value=void 0}));function a(s){var r;(r=o.value)==null||r.call(o,s)}return{contentStyles:t,updateLocation:o}}function mn(){}function yn(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Ge(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function gn(e,n,t){Jt(e.activatorEl.value)&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:s}=ct(()=>{const g=Ce(n.location,e.isRtl.value),d=n.origin==="overlap"?g:n.origin==="auto"?le(g):Ce(n.origin,e.isRtl.value);return g.side===d.side&&g.align===ue(d).align?{preferredAnchor:ke(g),preferredOrigin:ke(d)}:{preferredAnchor:g,preferredOrigin:d}}),[r,i,u,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(g=>C(()=>{const d=parseFloat(n[g]);return isNaN(d)?1/0:d})),c=C(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const g=n.offset.split(" ").map(parseFloat);return g.length<2&&g.push(0),g}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let v=!1;const m=new ResizeObserver(()=>{v&&y()});M([e.activatorEl,e.contentEl],(g,d)=>{let[h,x]=g,[w,l]=d;w&&m.unobserve(w),h&&m.observe(h),l&&m.unobserve(l),x&&m.observe(x)},{immediate:!0}),H(()=>{m.disconnect()});function y(){if(v=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>v=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const g=e.activatorEl.value.getBoundingClientRect(),d=yn(e.contentEl.value,e.isRtl.value),h=ne(e.contentEl.value),x=12;h.length||(h.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(d.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),d.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=h.reduce((O,k)=>{const b=k.getBoundingClientRect(),E=new se({x:k===document.documentElement?0:b.x,y:k===document.documentElement?0:b.y,width:k.clientWidth,height:k.clientHeight});return O?new se({x:Math.max(O.left,E.left),y:Math.max(O.top,E.top),width:Math.min(O.right,E.right)-Math.max(O.left,E.left),height:Math.min(O.bottom,E.bottom)-Math.max(O.top,E.top)}):E},void 0);w.x+=x,w.y+=x,w.width-=x*2,w.height-=x*2;let l={anchor:a.value,origin:s.value};function L(O){const k=new se(d),b=Ve(O.anchor,g),E=Ve(O.origin,k);let{x:D,y:_}=fn(b,E);switch(O.anchor.side){case"top":_-=c.value[0];break;case"bottom":_+=c.value[0];break;case"left":D-=c.value[0];break;case"right":D+=c.value[0];break}switch(O.anchor.align){case"top":_-=c.value[1];break;case"bottom":_+=c.value[1];break;case"left":D-=c.value[1];break;case"right":D+=c.value[1];break}return k.x+=D,k.y+=_,k.width=Math.min(k.width,u.value),k.height=Math.min(k.height,f.value),{overflows:xe(k,w),x:D,y:_}}let R=0,j=0;const q={x:0,y:0},F={x:!1,y:!1};let P=-1;for(;!(P++>10);){const{x:O,y:k,overflows:b}=L(l);R+=O,j+=k,d.x+=O,d.y+=k;{const E=Pe(l.anchor),D=b.x.before||b.x.after,_=b.y.before||b.y.after;let X=!1;if(["x","y"].forEach(A=>{if(A==="x"&&D&&!F.x||A==="y"&&_&&!F.y){const p={anchor:{...l.anchor},origin:{...l.origin}},B=A==="x"?E==="y"?ue:le:E==="y"?le:ue;p.anchor=B(p.anchor),p.origin=B(p.origin);const{overflows:G}=L(p);(G[A].before<=b[A].before&&G[A].after<=b[A].after||G[A].before+G[A].after<(b[A].before+b[A].after)/2)&&(l=p,X=F[A]=!0)}}),X)continue}b.x.before&&(R+=b.x.before,d.x+=b.x.before),b.x.after&&(R-=b.x.after,d.x-=b.x.after),b.y.before&&(j+=b.y.before,d.y+=b.y.before),b.y.after&&(j-=b.y.after,d.y-=b.y.after);{const E=xe(d,w);q.x=w.width-E.x.before-E.x.after,q.y=w.height-E.y.before-E.y.after,R+=E.x.before,d.x+=E.x.before,j+=E.y.before,d.y+=E.y.before}break}const T=Pe(l.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${l.anchor.side} ${l.anchor.align}`,transformOrigin:`${l.origin.side} ${l.origin.align}`,top:N(fe(j)),left:e.isRtl.value?void 0:N(fe(R)),right:e.isRtl.value?N(fe(-R)):void 0,minWidth:N(T==="y"?Math.min(r.value,g.width):r.value),maxWidth:N(Fe(Se(q.x,r.value===1/0?0:r.value,u.value))),maxHeight:N(Fe(Se(q.y,i.value===1/0?0:i.value,f.value)))}),{available:q,contentBox:d}}return M(()=>[a.value,s.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>y()),re(()=>{const g=y();if(!g)return;const{available:d,contentBox:h}=g;h.height>d.y&&requestAnimationFrame(()=>{y(),requestAnimationFrame(()=>{y()})})}),{updateLocation:y}}function fe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Fe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ye=!0;const oe=[];function hn(e){!ye||oe.length?(oe.push(e),ge()):(ye=!1,e(),ge())}let Te=-1;function ge(){cancelAnimationFrame(Te),Te=requestAnimationFrame(()=>{const e=oe.shift();e&&e(),oe.length?ge():ye=!0})}const te={none:null,close:pn,block:Sn,reposition:xn},bn=I({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in te}},"VOverlay-scroll-strategies");function wn(e,n){if(!K)return;let t;be(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=je(),await re(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=te[e.scrollStrategy])==null||o.call(te,n,e,t)}))}),H(()=>{t==null||t.stop()})}function pn(e){function n(t){e.isActive.value=!1}ot(e.activatorEl.value??e.contentEl.value,n)}function Sn(e,n){var r;const t=(r=e.root.value)==null?void 0:r.offsetParent,o=[...new Set([...ne(e.activatorEl.value,n.contained?t:void 0),...ne(e.contentEl.value,n.contained?t:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,s=(i=>pe(i)&&i)(t||document.documentElement);s&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,u)=>{i.style.setProperty("--v-body-scroll-x",N(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",N(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",N(a)),i.classList.add("v-overlay-scroll-blocked")}),H(()=>{o.forEach((i,u)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),c=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-c}),s&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function xn(e,n,t){let o=!1,a=-1,s=-1;function r(i){hn(()=>{var c,v;const u=performance.now();(v=(c=e.updateLocation).value)==null||v.call(c,i),o=(performance.now()-u)/(1e3/60)>2})}s=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{t.run(()=>{ot(e.activatorEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{r(i)})})):r(i)})})}),H(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(s),cancelAnimationFrame(a)})}function ot(e,n){const t=[document,...ne(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),H(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const En=Symbol.for("vuetify:v-menu"),Cn=I({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function kn(e,n){const t={},o=a=>()=>{if(!K)return Promise.resolve(!0);const s=a==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(r=>{const i=parseInt(e[a]??0,10);t[a]=window.setTimeout(()=>{n==null||n(s),r(s)},i)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const Pn=I({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Cn()},"VOverlay-activator");function On(e,n){let{isActive:t,isTop:o}=n;const a=z();let s=!1,r=!1,i=!0;const u=C(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=C(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:c,runCloseDelay:v}=kn(e,l=>{l===(e.openOnHover&&s||u.value&&r)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(i=!0),t.value=l)}),m={onClick:l=>{l.stopPropagation(),a.value=l.currentTarget||l.target,t.value=!t.value},onMouseenter:l=>{var L;(L=l.sourceCapabilities)!=null&&L.firesTouchEvents||(s=!0,a.value=l.currentTarget||l.target,c())},onMouseleave:l=>{s=!1,v()},onFocus:l=>{dt(l.target,":focus-visible")!==!1&&(r=!0,l.stopPropagation(),a.value=l.currentTarget||l.target,c())},onBlur:l=>{r=!1,l.stopPropagation(),v()}},y=C(()=>{const l={};return f.value&&(l.onClick=m.onClick),e.openOnHover&&(l.onMouseenter=m.onMouseenter,l.onMouseleave=m.onMouseleave),u.value&&(l.onFocus=m.onFocus,l.onBlur=m.onBlur),l}),g=C(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{s=!0,c()},l.onMouseleave=()=>{s=!1,v()}),u.value&&(l.onFocusin=()=>{r=!0,c()},l.onFocusout=()=>{r=!1,v()}),e.closeOnContentClick){const L=qe(En,null);l.onClick=()=>{t.value=!1,L==null||L.closeParents()}}return l}),d=C(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{i&&(s=!0,i=!1,c())},l.onMouseleave=()=>{s=!1,v()}),l});M(o,l=>{l&&(e.openOnHover&&!s&&(!u.value||!r)||u.value&&!r&&(!e.openOnHover||!s))&&(t.value=!1)});const h=z();be(()=>{h.value&&re(()=>{a.value=ft(h.value)})});const x=We("useActivator");let w;return M(()=>!!e.activator,l=>{l&&K?(w=je(),w.run(()=>{An(e,x,{activatorEl:a,activatorEvents:y})})):w&&w.stop()},{flush:"post",immediate:!0}),H(()=>{w==null||w.stop()}),{activatorEl:a,activatorRef:h,activatorEvents:y,contentEvents:g,scrimEvents:d}}function An(e,n,t){let{activatorEl:o,activatorEvents:a}=t;M(()=>e.activator,(u,f)=>{if(f&&u!==f){const c=i(f);c&&r(c)}u&&re(()=>s())},{immediate:!0}),M(()=>e.activatorProps,()=>{s()}),H(()=>{r()});function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Kt(u,$(a.value,f))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Xt(u,$(a.value,f))}function i(){var c,v;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,f;if(u)if(u==="parent"){let m=(v=(c=n==null?void 0:n.proxy)==null?void 0:c.$el)==null?void 0:v.parentNode;for(;m!=null&&m.hasAttribute("data-no-activator");)m=m.parentNode;f=m}else typeof u=="string"?f=document.querySelector(u):"$el"in u?f=u.$el:f=u;return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:null,o.value}}function Ln(){if(!K)return Y(!1);const{ssr:e}=vt();if(e){const n=Y(!1);return mt(()=>{n.value=!0}),n}else return Y(!0)}const Vn=I({eager:Boolean},"lazy");function Fn(e,n){const t=Y(!1),o=C(()=>t.value||e.eager||n.value);M(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}const Be=Symbol.for("vuetify:stack"),Z=ze([]);function Tn(e,n,t){const o=We("useStack"),a=!t,s=qe(Be,void 0),r=ze({activeChildren:new Set});yt(Be,r);const i=Y(+n.value);he(e,()=>{var v;const c=(v=Z.at(-1))==null?void 0:v[1];i.value=c?c+10:+n.value,a&&Z.push([o.uid,i.value]),s==null||s.activeChildren.add(o.uid),H(()=>{if(a){const m=ht(Z).findIndex(y=>y[0]===o.uid);Z.splice(m,1)}s==null||s.activeChildren.delete(o.uid)})});const u=Y(!0);a&&be(()=>{var v;const c=((v=Z.at(-1))==null?void 0:v[0])===o.uid;setTimeout(()=>u.value=c)});const f=C(()=>!r.activeChildren.size);return{globalTop:gt(u),localTop:f,stackStyles:C(()=>({zIndex:i.value}))}}function Bn(e){return{teleportTarget:C(()=>{const t=e.value;if(t===!0||!K)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function In(){return!0}function at(e,n,t){if(!e||it(e,t)===!1)return!1;const o=Je(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(s=>s==null?void 0:s.contains(e.target))}function it(e,n){return(typeof n.value=="object"&&n.value.closeConditional||In)(e)}function Dn(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&at(e,n,t)&&setTimeout(()=>{it(e,t)&&o&&o(e)},0)}function Ie(e,n){const t=Je(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Mn={mounted(e,n){const t=a=>Dn(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=at(a,e,n)};Ie(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Ie(e,t=>{var s;if(!t||!((s=e._clickOutside)!=null&&s[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Rn(e){const{modelValue:n,color:t,...o}=e;return S(de,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&S("div",$({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const _n=I({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Pn(),...ae(),...Xe(),...Vn(),...dn(),...bn(),...$e(),...It()},"VOverlay"),Un=U()({name:"VOverlay",directives:{ClickOutside:Mn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,..._n()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const s=bt(e,"modelValue"),r=C({get:()=>s.value,set:p=>{p&&e.disabled||(s.value=p)}}),{teleportTarget:i}=Bn(C(()=>e.attach||e.contained)),{themeClasses:u}=He(e),{rtlClasses:f,isRtl:c}=wt(),{hasContent:v,onAfterLeave:m}=Fn(e,r),y=Ue(C(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:g,localTop:d,stackStyles:h}=Tn(r,V(e,"zIndex"),e._disableGlobalStack),{activatorEl:x,activatorRef:w,activatorEvents:l,contentEvents:L,scrimEvents:R}=On(e,{isActive:r,isTop:d}),{dimensionStyles:j}=Ze(e),q=Ln(),{scopeId:F}=Tt();M(()=>e.disabled,p=>{p&&(r.value=!1)});const P=z(),T=z(),{contentStyles:O,updateLocation:k}=vn(e,{isRtl:c,contentEl:T,activatorEl:x,isActive:r});wn(e,{root:P,contentEl:T,activatorEl:x,isActive:r,updateLocation:k});function b(p){a("click:outside",p),e.persistent?A():r.value=!1}function E(){return r.value&&g.value}K&&M(r,p=>{p?window.addEventListener("keydown",D):window.removeEventListener("keydown",D)},{immediate:!0});function D(p){var B,G;p.key==="Escape"&&g.value&&(e.persistent?A():(r.value=!1,(B=T.value)!=null&&B.contains(document.activeElement)&&((G=x.value)==null||G.focus())))}const _=Gt();he(()=>e.closeOnBack,()=>{Yt(_,p=>{g.value&&r.value?(p(!1),e.persistent?A():r.value=!1):p()})});const X=z();M(()=>r.value&&(e.absolute||e.contained)&&i.value==null,p=>{if(p){const B=Ut(P.value);B&&B!==document.scrollingElement&&(X.value=B.scrollTop)}});function A(){e.noClickAnimation||T.value&&J(T.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ve})}return ie(()=>{var p;return S(xt,null,[(p=t.activator)==null?void 0:p.call(t,{isActive:r.value,props:$({ref:w},l.value,e.activatorProps)}),q.value&&v.value&&S(pt,{disabled:!i.value,to:i.value},{default:()=>[S("div",$({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":r.value,"v-overlay--contained":e.contained},u.value,f.value,e.class],style:[h.value,{top:N(X.value)},e.style],ref:P},F,o),[S(Rn,$({color:y,modelValue:r.value&&!!e.scrim},R.value),null),S(Ke,{appear:!0,persisted:!0,transition:e.transition,target:x.value,onAfterLeave:()=>{m(),a("afterLeave")}},{default:()=>{var B;return[Re(S("div",$({ref:T,class:["v-overlay__content",e.contentClass],style:[j.value,O.value]},L.value,e.contentProps),[(B=t.default)==null?void 0:B.call(t,{isActive:r})]),[[_e,r.value],[St("click-outside"),{handler:b,closeConditional:E,include:()=>[x.value]}]])]}})])]})])}),{activatorEl:x,animateClick:A,contentEl:T,globalTop:g,localTop:d,updateLocation:k}}});export{Xn as V,Yn as a,En as b,Un as c,rn as d,Ut as g,_n as m,Kn as u};
