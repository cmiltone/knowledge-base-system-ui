import{c as Se,a as ke,m as be,b as we}from"./VProgressLinear-9470a2be.js";import{p as D,m as W,a as q,g as z,b as J,t as Ae,e as m,h as j,u as Q,c as f,aa as V,s as I,a9 as P,ay as w,r as k,l as G,j as X,ag as Y,S as Ce,a5 as F,ai as $,w as Ie,aA as Ve,a1 as Pe,a2 as Me,F as E}from"./index-a34f1c7a.js";import{c as Z,a as H}from"./VAvatar-46cd40f9.js";import{m as Oe,e as Le,q as De,a as Be,k as Ne,g as Re,R as _e,o as xe,u as Te,l as je,j as Ge,r as Fe,b as $e,p as Ee,d as U,V as K}from"./index-1296000c.js";const He=D({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...W(),...q()},"VDivider"),lt=z()({name:"VDivider",props:He(),setup(e,i){let{attrs:l}=i;const{themeClasses:t}=J(e),{textColorClasses:a,textColorStyles:n}=Se(Ae(e,"color")),s=m(()=>{const c={};return e.length&&(c[e.vertical?"maxHeight":"maxWidth"]=j(e.length)),e.thickness&&(c[e.vertical?"borderRightWidth":"borderTopWidth"]=j(e.thickness)),c});return Q(()=>f("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},t.value,a.value,e.class],style:[s.value,n.value,e.style],"aria-orientation":!l.role||l.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${l.role||"separator"}`},null)),{}}}),L=Symbol.for("vuetify:list");function st(){const e=V(L,{hasPrepend:I(!1),updateHasPrepend:()=>null}),i={hasPrepend:I(!1),updateHasPrepend:l=>{l&&(i.hasPrepend.value=l)}};return P(L,i),e}function Ue(){return V(L,null)}const Ke={open:e=>{let{id:i,value:l,opened:t,parents:a}=e;if(l){const n=new Set;n.add(i);let s=a.get(i);for(;s!=null;)n.add(s),s=a.get(s);return n}else return t.delete(i),t},select:()=>null},ee={open:e=>{let{id:i,value:l,opened:t,parents:a}=e;if(l){let n=a.get(i);for(t.add(i);n!=null&&n!==i;)t.add(n),n=a.get(n);return t}else t.delete(i);return t},select:()=>null},We={open:ee.open,select:e=>{let{id:i,value:l,opened:t,parents:a}=e;if(!l)return t;const n=[];let s=a.get(i);for(;s!=null;)n.push(s),s=a.get(s);return new Set(n)}},B=e=>{const i={select:l=>{let{id:t,value:a,selected:n}=l;if(t=w(t),e&&!a){const s=Array.from(n.entries()).reduce((c,h)=>{let[p,y]=h;return y==="on"?[...c,p]:c},[]);if(s.length===1&&s[0]===t)return n}return n.set(t,a?"on":"off"),n},in:(l,t,a)=>{let n=new Map;for(const s of l||[])n=i.select({id:s,value:!0,selected:new Map(n),children:t,parents:a});return n},out:l=>{const t=[];for(const[a,n]of l.entries())n==="on"&&t.push(a);return t}};return i},te=e=>{const i=B(e);return{select:t=>{let{selected:a,id:n,...s}=t;n=w(n);const c=a.has(n)?new Map([[n,a.get(n)]]):new Map;return i.select({...s,id:n,selected:c})},in:(t,a,n)=>{let s=new Map;return t!=null&&t.length&&(s=i.in(t.slice(0,1),a,n)),s},out:(t,a,n)=>i.out(t,a,n)}},qe=e=>{const i=B(e);return{select:t=>{let{id:a,selected:n,children:s,...c}=t;return a=w(a),s.has(a)?n:i.select({id:a,selected:n,children:s,...c})},in:i.in,out:i.out}},ze=e=>{const i=te(e);return{select:t=>{let{id:a,selected:n,children:s,...c}=t;return a=w(a),s.has(a)?n:i.select({id:a,selected:n,children:s,...c})},in:i.in,out:i.out}},Je=e=>{const i={select:l=>{let{id:t,value:a,selected:n,children:s,parents:c}=l;t=w(t);const h=new Map(n),p=[t];for(;p.length;){const r=p.shift();n.set(r,a?"on":"off"),s.has(r)&&p.push(...s.get(r))}let y=c.get(t);for(;y;){const r=s.get(y),o=r.every(u=>n.get(u)==="on"),d=r.every(u=>!n.has(u)||n.get(u)==="off");n.set(y,o?"on":d?"off":"indeterminate"),y=c.get(y)}return e&&!a&&Array.from(n.entries()).reduce((o,d)=>{let[u,S]=d;return S==="on"?[...o,u]:o},[]).length===0?h:n},in:(l,t,a)=>{let n=new Map;for(const s of l||[])n=i.select({id:s,value:!0,selected:new Map(n),children:t,parents:a});return n},out:(l,t)=>{const a=[];for(const[n,s]of l.entries())s==="on"&&!t.has(n)&&a.push(n);return a}};return i},A=Symbol.for("vuetify:nested"),ne={id:I(),root:{register:()=>null,unregister:()=>null,parents:k(new Map),children:k(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:k(new Set),selected:k(new Map),selectedValues:k([])}},it=D({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),rt=e=>{let i=!1;const l=k(new Map),t=k(new Map),a=G(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),n=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return ze(e.mandatory);case"leaf":return qe(e.mandatory);case"independent":return B(e.mandatory);case"single-independent":return te(e.mandatory);case"classic":default:return Je(e.mandatory)}}),s=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return We;case"single":return Ke;case"multiple":default:return ee}}),c=G(e,"selected",e.selected,r=>n.value.in(r,l.value,t.value),r=>n.value.out(r,l.value,t.value));X(()=>{i=!0});function h(r){const o=[];let d=r;for(;d!=null;)o.unshift(d),d=t.value.get(d);return o}const p=Y("nested"),y={id:I(),root:{opened:a,selected:c,selectedValues:m(()=>{const r=[];for(const[o,d]of c.value.entries())d==="on"&&r.push(o);return r}),register:(r,o,d)=>{o&&r!==o&&t.value.set(r,o),d&&l.value.set(r,[]),o!=null&&l.value.set(o,[...l.value.get(o)||[],r])},unregister:r=>{if(i)return;l.value.delete(r);const o=t.value.get(r);if(o){const d=l.value.get(o)??[];l.value.set(o,d.filter(u=>u!==r))}t.value.delete(r),a.value.delete(r)},open:(r,o,d)=>{p.emit("click:open",{id:r,value:o,path:h(r),event:d});const u=s.value.open({id:r,value:o,opened:new Set(a.value),children:l.value,parents:t.value,event:d});u&&(a.value=u)},openOnSelect:(r,o,d)=>{const u=s.value.select({id:r,value:o,selected:new Map(c.value),opened:new Set(a.value),children:l.value,parents:t.value,event:d});u&&(a.value=u)},select:(r,o,d)=>{p.emit("click:select",{id:r,value:o,path:h(r),event:d});const u=n.value.select({id:r,value:o,selected:new Map(c.value),children:l.value,parents:t.value,event:d});u&&(c.value=u),y.root.openOnSelect(r,o,d)},children:l,parents:t}};return P(A,y),y.root},Qe=(e,i)=>{const l=V(A,ne),t=Symbol(Ce()),a=m(()=>e.value!==void 0?e.value:t),n={...l,id:a,open:(s,c)=>l.root.open(a.value,s,c),openOnSelect:(s,c)=>l.root.openOnSelect(a.value,s,c),isOpen:m(()=>l.root.opened.value.has(a.value)),parent:m(()=>l.root.parents.value.get(a.value)),select:(s,c)=>l.root.select(a.value,s,c),isSelected:m(()=>l.root.selected.value.get(w(a.value))==="on"),isIndeterminate:m(()=>l.root.selected.value.get(a.value)==="indeterminate"),isLeaf:m(()=>!l.root.children.value.get(a.value)),isGroupActivator:l.isGroupActivator};return!l.isGroupActivator&&l.root.register(a.value,l.id.value,i),X(()=>{!l.isGroupActivator&&l.root.unregister(a.value)}),i&&P(A,n),n},ot=()=>{const e=V(A,ne);P(A,{...e,isGroupActivator:!0})};const Xe=Z("v-list-item-subtitle"),Ye=Z("v-list-item-title"),Ze=D({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:F,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:F,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:$(),onClickOnce:$(),...Oe(),...W(),...Le(),...De(),...Be(),...ke(),...Ne(),...be(),...q(),...Re({variant:"text"})},"VListItem"),ct=z()({name:"VListItem",directives:{Ripple:_e},props:Ze(),emits:{click:e=>!0},setup(e,i){let{attrs:l,slots:t,emit:a}=i;const n=xe(e,l),s=m(()=>e.value===void 0?n.href.value:e.value),{select:c,isSelected:h,isIndeterminate:p,isGroupActivator:y,root:r,parent:o,openOnSelect:d}=Qe(s,!1),u=Ue(),S=m(()=>{var v;return e.active!==!1&&(e.active||((v=n.isActive)==null?void 0:v.value)||h.value)}),N=m(()=>e.link!==!1&&n.isLink.value),b=m(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||e.value!=null&&!!u)),ae=m(()=>e.rounded||e.nav),le=m(()=>e.color??e.activeColor),se=m(()=>({color:S.value?le.value??e.baseColor:e.baseColor,variant:e.variant}));Ie(()=>{var v;return(v=n.isActive)==null?void 0:v.value},v=>{v&&o.value!=null&&r.open(o.value,!0),v&&d(v)},{immediate:!0});const{themeClasses:ie}=J(e),{borderClasses:re}=Te(e),{colorClasses:oe,colorStyles:ce,variantClasses:ue}=je(se),{densityClasses:de}=Ge(e),{dimensionStyles:ve}=Fe(e),{elevationClasses:me}=$e(e),{roundedClasses:fe}=we(ae),ye=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),M=m(()=>({isActive:S.value,select:c,isSelected:h.value,isIndeterminate:p.value}));function R(v){var C;a("click",v),!(y||!b.value)&&((C=n.navigate)==null||C.call(n,v),e.value!=null&&c(!h.value,v))}function ge(v){(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),R(v))}return Q(()=>{const v=N.value?"a":e.tag,C=t.title||e.title,he=t.subtitle||e.subtitle,_=!!(e.appendAvatar||e.appendIcon),pe=!!(_||t.append),x=!!(e.prependAvatar||e.prependIcon),O=!!(x||t.prepend);return u==null||u.updateHasPrepend(O),e.activeColor&&Ve("active-color",["color","base-color"]),Pe(f(v,{class:["v-list-item",{"v-list-item--active":S.value,"v-list-item--disabled":e.disabled,"v-list-item--link":b.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!O&&(u==null?void 0:u.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&S.value},ie.value,re.value,oe.value,de.value,me.value,ye.value,fe.value,ue.value,e.class],style:[ce.value,ve.value,e.style],href:n.href.value,tabindex:b.value?u?-2:0:void 0,onClick:R,onKeydown:b.value&&!N.value&&ge},{default:()=>{var T;return[Ee(b.value||S.value,"v-list-item"),O&&f("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?f(K,{key:"prepend-defaults",disabled:!x,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var g;return[(g=t.prepend)==null?void 0:g.call(t,M.value)]}}):f(E,null,[e.prependAvatar&&f(H,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&f(U,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),f("div",{class:"v-list-item__spacer"},null)]),f("div",{class:"v-list-item__content","data-no-activator":""},[C&&f(Ye,{key:"title"},{default:()=>{var g;return[((g=t.title)==null?void 0:g.call(t,{title:e.title}))??e.title]}}),he&&f(Xe,{key:"subtitle"},{default:()=>{var g;return[((g=t.subtitle)==null?void 0:g.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(T=t.default)==null?void 0:T.call(t,M.value)]),pe&&f("div",{key:"append",class:"v-list-item__append"},[t.append?f(K,{key:"append-defaults",disabled:!_,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var g;return[(g=t.append)==null?void 0:g.call(t,M.value)]}}):f(E,null,[e.appendIcon&&f(U,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&f(H,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),f("div",{class:"v-list-item__spacer"},null)])]}}),[[Me("ripple"),b.value&&e.ripple]])}),{}}});function ut(){const i=Y("useScopeId").vnode.scopeId;return{scopeId:i?{[i]:""}:void 0}}export{ct as V,lt as a,ot as b,Qe as c,Ue as d,st as e,rt as f,it as m,ut as u};
