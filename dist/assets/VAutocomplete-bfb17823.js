import{J as T,p as Ce,S as Ve,g as Pe,X as Ae,r as I,s as k,l as q,e as S,w as U,u as Se,c,F as M,v as E,N as we,$ as xe,W as Re,a0 as W,A as J,a1 as Te}from"./index-c247efdd.js";import{b as ke,c as _e,u as De,d as be,e as Fe,f as Ie,V as Ee,a as Me}from"./filter-1499cb31.js";import{m as Oe,V as X}from"./VTextField-7f1725b3.js";import{i as Ge,g as j,V as Le}from"./index-5d552a30.js";import{h as Ne,d as Ye}from"./VInput-05702754.js";import{u as qe,V as Ue}from"./VOverlay-ea1fb1c6.js";import{m as $e}from"./VAvatar-397c5db9.js";import{V as Q}from"./scopeId-551e5591.js";const Be={namespaced:!0,state:()=>({categoryPage:{docs:[],totalDocs:0,limit:10,hasPrevPage:!1,hasNextPage:!1,page:void 0,totalPages:0,offset:0,prevPage:void 0,nextPage:void 0,pagingCounter:0}}),getters:{getCategory:e=>l=>e.categoryPage.docs.find(t=>t._id===l),categoryPage:e=>e.categoryPage},mutations:{ADD_CATEGORY:(e,l)=>{let t=-1;e.categoryPage.docs.map((i,u)=>{i._id===l._id&&(t=u)}),t===-1?e.categoryPage.docs.push(l):e.categoryPage.docs[t]=l},SET_CATEGORY_PAGE:(e,l)=>{e.categoryPage=l},REMOVE_CATEGORY(e,l){let t=-1;e.categoryPage.docs.map((i,u)=>{i._id===l._id&&(t=u)}),t>-1&&e.categoryPage.docs.splice(t,1)}},actions:{fetchCategory(e,l=""){T.get(`/v1/category${l}`).then(t=>{e.commit("ADD_CATEGORY",t.data)}).catch(t=>{var i,u,s;e.dispatch("setToast",{title:"Request failed!",type:"error",text:(s=(u=(i=t.response)==null?void 0:i.data)==null?void 0:u.error)==null?void 0:s.message},{root:!0})})},async fetchCategoryList(e,l=""){return await T.get(`/v1/category${l}`).then(t=>(e.commit("SET_CATEGORY_PAGE",t.data),t.data)).catch(t=>{var i,u,s;e.dispatch("setToast",{title:"Request failed!",type:"error",text:(s=(u=(i=t.response)==null?void 0:i.data)==null?void 0:u.error)==null?void 0:s.message},{root:!0})})},async createCategory(e,l){return await T.post("/v1/category",l).then(t=>(e.commit("ADD_CATEGORY",t.data),e.dispatch("setToast",{title:"Success",type:"success",text:"Category created"},{root:!0}),t.data.category)).catch(t=>{var i,u,s;e.dispatch("setToast",{title:"Request failed!",type:"error",text:(s=(u=(i=t.response)==null?void 0:i.data)==null?void 0:u.error)==null?void 0:s.message},{root:!0})})},updateCategory(e,l){T.put("/v1/category",l).then(t=>{e.commit("ADD_CATEGORY",t.data),e.dispatch("setToast",{title:"Success",type:"success",text:"Category updated"},{root:!0})}).catch(t=>{var i,u,s;e.dispatch("setToast",{title:"Request failed!",type:"error",text:(s=(u=(i=t.response)==null?void 0:i.data)==null?void 0:u.error)==null?void 0:s.message},{root:!0})})},deleteCategory(e,l){T.delete(`/v1/category${l}`).then(t=>{e.commit("REMOVE_CATEGORY",t.data),e.dispatch("setToast",{title:"Success",type:"success",text:"Category deleted"},{root:!0})}).catch(t=>{var i,u,s;e.dispatch("setToast",{title:"Request failed!",type:"error",text:(s=(u=(i=t.response)==null?void 0:i.data)==null?void 0:u.error)==null?void 0:s.message},{root:!0})})}}},tt=Be;function Ke(e,l,t){if(l==null)return e;if(Array.isArray(l))throw new Error("Multiple matches is not implemented");return typeof l=="number"&&~l?c(M,null,[c("span",{class:"v-autocomplete__unmask"},[e.substr(0,l)]),c("span",{class:"v-autocomplete__mask"},[e.substr(l,t)]),c("span",{class:"v-autocomplete__unmask"},[e.substr(l+t)])]):e}const ze=Ce({autoSelectFirst:{type:[Boolean,String]},search:String,...ke({filterKeys:["title"]}),..._e(),...Ve(Oe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...$e({transition:!1})},"VAutocomplete"),at=Pe()({name:"VAutocomplete",props:ze(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,l){let{slots:t}=l;const{t:i}=Ae(),u=I(),s=k(!1),P=k(!0),_=k(!1),$=I(),B=I(),O=q(e,"menu"),m=S({get:()=>O.value,set:a=>{var o;O.value&&!a&&((o=$.value)!=null&&o.ΨopenChildren)||(O.value=a)}}),d=k(-1),Z=S(()=>{var a;return(a=u.value)==null?void 0:a.color}),K=S(()=>m.value?e.closeText:e.openText),{items:G,transformIn:ee,transformOut:te}=qe(e),{textColorClasses:ae,textColorStyles:le}=Ge(Z),p=q(e,"search",""),r=q(e,"modelValue",[],a=>ee(a===null?[null]:Re(a)),a=>{const o=te(a);return e.multiple?o:o[0]??null}),w=Ne(),{filteredItems:L,getMatches:ue}=De(e,G,()=>P.value?"":p.value),V=S(()=>e.hideSelected?L.value.filter(a=>!r.value.some(o=>o.value===a.value)):L.value),oe=S(()=>r.value.map(a=>a.props.value)),D=S(()=>{var o;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&p.value===((o=V.value[0])==null?void 0:o.title))&&V.value.length>0&&!P.value&&!_.value}),N=S(()=>e.hideNoData&&!G.value.length||e.readonly||(w==null?void 0:w.isReadonly.value)),Y=I(),{onListScroll:ne,onListKeydown:se}=be(Y,u);function re(a){e.openOnClear&&(m.value=!0),p.value=""}function ie(){N.value||(m.value=!0)}function ce(a){N.value||(s.value&&(a.preventDefault(),a.stopPropagation()),m.value=!m.value)}function de(a){var x,n,g;if(e.readonly||w!=null&&w.isReadonly.value)return;const o=u.value.selectionStart,v=r.value.length;if((d.value>-1||["Enter","ArrowDown","ArrowUp"].includes(a.key))&&a.preventDefault(),["Enter","ArrowDown"].includes(a.key)&&(m.value=!0),["Escape"].includes(a.key)&&(m.value=!1),D.value&&["Enter","Tab"].includes(a.key)&&A(V.value[0]),a.key==="ArrowDown"&&D.value&&((x=Y.value)==null||x.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(a.key)){if(d.value<0){a.key==="Backspace"&&!p.value&&(d.value=v-1);return}const f=d.value,C=r.value[d.value];C&&!C.props.disabled&&A(C),d.value=f>=v-1?v-2:f}if(a.key==="ArrowLeft"){if(d.value<0&&o>0)return;const f=d.value>-1?d.value-1:v-1;r.value[f]?d.value=f:(d.value=-1,u.value.setSelectionRange((n=p.value)==null?void 0:n.length,(g=p.value)==null?void 0:g.length))}if(a.key==="ArrowRight"){if(d.value<0)return;const f=d.value+1;r.value[f]?d.value=f:(d.value=-1,u.value.setSelectionRange(0,0))}}}function ve(a){p.value=a.target.value}function fe(a){if(W(u.value,":autofill")||W(u.value,":-webkit-autofill")){const o=G.value.find(v=>v.title===a.target.value);o&&A(o)}}function me(){var a;s.value&&(P.value=!0,(a=u.value)==null||a.focus())}function pe(a){s.value=!0,setTimeout(()=>{_.value=!0})}function ge(a){_.value=!1}function he(a){(a==null||a===""&&!e.multiple)&&(r.value=[])}const R=k(!1);function A(a){if(e.multiple){const o=r.value.findIndex(v=>e.valueComparator(v.value,a.value));if(o===-1)r.value=[...r.value,a];else{const v=[...r.value];v.splice(o,1),r.value=v}}else r.value=[a],R.value=!0,p.value=a.title,m.value=!1,P.value=!0,J(()=>R.value=!1)}return U(s,(a,o)=>{var v;a!==o&&(a?(R.value=!0,p.value=e.multiple?"":String(((v=r.value.at(-1))==null?void 0:v.props.title)??""),P.value=!0,J(()=>R.value=!1)):(!e.multiple&&!p.value?r.value=[]:D.value&&!_.value&&!r.value.some(x=>{let{value:n}=x;return n===V.value[0].value})&&A(V.value[0]),m.value=!1,p.value="",d.value=-1))}),U(p,a=>{!s.value||R.value||(a&&(m.value=!0),P.value=!a)}),U(m,()=>{if(!e.hideSelected&&m.value&&r.value.length){const a=V.value.findIndex(o=>r.value.some(v=>o.value===v.value));Te&&window.requestAnimationFrame(()=>{var o;a>=0&&((o=B.value)==null||o.scrollToIndex(a))})}}),Se(()=>{const a=!!(e.chips||t.chip),o=!!(!e.hideNoData||V.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),v=r.value.length>0,[x]=X.filterProps(e);return c(X,E({ref:u},x,{modelValue:p.value,"onUpdate:modelValue":he,focused:s.value,"onUpdate:focused":n=>s.value=n,validationValue:r.externalValue,counterValue:r.value.length,dirty:v,onInput:ve,onChange:fe,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":m.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":d.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:v?void 0:e.placeholder,"onClick:clear":re,"onMousedown:control":ie,onKeydown:de}),{...t,default:()=>c(M,null,[c(Fe,E({ref:$,modelValue:m.value,"onUpdate:modelValue":n=>m.value=n,activator:"parent",contentClass:"v-autocomplete__content",disabled:N.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:me},e.menuProps),{default:()=>[o&&c(Ue,{ref:Y,selected:oe.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:n=>n.preventDefault(),onKeydown:se,onFocusin:pe,onFocusout:ge,onScrollPassive:ne,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var n,g,f;return[(n=t["prepend-item"])==null?void 0:n.call(t),!V.value.length&&!e.hideNoData&&(((g=t["no-data"])==null?void 0:g.call(t))??c(Q,{title:i(e.noDataText)},null)),c(Ie,{ref:B,renderless:!0,items:V.value},{default:C=>{var H;let{item:h,index:y,itemRef:ye}=C;const z=E(h.props,{ref:ye,key:y,active:D.value&&y===0?!0:void 0,onClick:()=>A(h)});return((H=t.item)==null?void 0:H.call(t,{item:h,index:y,props:z}))??c(Q,z,{prepend:b=>{let{isSelected:F}=b;return c(M,null,[e.multiple&&!e.hideSelected?c(Ee,{key:h.value,modelValue:F,ripple:!1,tabindex:"-1"},null):void 0,h.props.prependIcon&&c(j,{icon:h.props.prependIcon},null)])},title:()=>{var b,F;return P.value?h.title:Ke(h.title,(b=ue(h))==null?void 0:b.title,((F=p.value)==null?void 0:F.length)??0)}})}}),(f=t["append-item"])==null?void 0:f.call(t)]}})]}),r.value.map((n,g)=>{var h;function f(y){y.stopPropagation(),y.preventDefault(),A(n)}const C={"onClick:close":f,onMousedown(y){y.preventDefault(),y.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return c("div",{key:n.value,class:["v-autocomplete__selection",g===d.value&&["v-autocomplete__selection--selected",ae.value]],style:g===d.value?le.value:{}},[a?t.chip?c(Le,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:n.title}}},{default:()=>{var y;return[(y=t.chip)==null?void 0:y.call(t,{item:n,index:g,props:C})]}}):c(Me,E({key:"chip",closable:e.closableChips,size:"small",text:n.title,disabled:n.props.disabled},C),null):((h=t.selection)==null?void 0:h.call(t,{item:n,index:g}))??c("span",{class:"v-autocomplete__selection-text"},[n.title,e.multiple&&g<r.value.length-1&&c("span",{class:"v-autocomplete__selection-comma"},[we(",")])])])})]),"append-inner":function(){var C;for(var n=arguments.length,g=new Array(n),f=0;f<n;f++)g[f]=arguments[f];return c(M,null,[(C=t["append-inner"])==null?void 0:C.call(t,...g),e.menuIcon?c(j,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:ce,onClick:xe,"aria-label":i(K.value),title:i(K.value)},null):void 0])}})}),Ye({isFocused:s,isPristine:P,menu:m,search:p,filteredItems:L,select:A},u)}});export{at as V,tt as c};
