import{m as b,a as y,c as f}from"./VOverlay-9073929d.js";import{d as D}from"./VInput-7c5570be.js";import{p as h,g as S,l as w,r as x,a0 as B,w as v,e as F,v as m,u as I,c as g,A as R,ak as T}from"./index-a293e11a.js";import{u as A}from"./scopeId-6c64961f.js";import{V as O}from"./index-32067264.js";const k=h({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...b({origin:"center center",scrollStrategy:"block",transition:{component:y},zIndex:2400})},"VDialog"),U=S()({name:"VDialog",props:k(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=w(a,"modelValue"),{scopeId:V}=A(),o=x();function i(l){var r,s;const e=l.relatedTarget,t=l.target;if(e!==t&&((r=o.value)!=null&&r.contentEl)&&((s=o.value)!=null&&s.globalTop)&&![document,o.value.contentEl].includes(t)&&!o.value.contentEl.contains(t)){const u=T(o.value.contentEl);if(!u.length)return;const d=u[0],P=u[u.length-1];e===d?P.focus():d.focus()}}B&&v(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),v(n,async l=>{var e,t;await R(),l?(e=o.value.contentEl)==null||e.focus({preventScroll:!0}):(t=o.value.activatorEl)==null||t.focus({preventScroll:!0})});const E=F(()=>m({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return I(()=>{const[l]=f.filterProps(a);return g(f,m({ref:o,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:E.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return g(O,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...t)]}})}})}),D({},o)}});export{U as V};