import{p,m as v,g as b,r as F,u as V,c as y}from"./index-a293e11a.js";import{e as h,g as R,d as P}from"./VInput-7c5570be.js";const g=p({...v(),...h()},"VForm"),D=b()({name:"VForm",props:g(),emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,i){let{slots:n,emit:f}=i;const r=R(o),s=F();function u(t){t.preventDefault(),r.reset()}function l(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),f("submit",a),a.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return V(()=>{var t;return y("form",{ref:s,class:["v-form",o.class],style:o.style,novalidate:!0,onReset:u,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,r)])}),P(r,s)}});export{D as V};