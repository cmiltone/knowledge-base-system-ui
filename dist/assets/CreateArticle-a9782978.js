import{K as p,_ as c,B as g,D as d,E as y,c as o,G as r,L as f,F as A,H as h,I as v,P as b,N as m}from"./index-a293e11a.js";import{a as E}from"./article-aaf176f6.js";import{c as T,V as R}from"./VAutocomplete-984352b7.js";import{C as $,V as D,a as U}from"./VFileInput-b64068e3.js";import{V as F}from"./VDialog-f07f83f7.js";import{V as I,b as M}from"./VCard-2d52b043.js";import{V as k}from"./VForm-e73661f2.js";import{V as S}from"./VTextField-4cf8a7a9.js";import{V as w}from"./VTextarea-3df8ac4c.js";import{V as n}from"./VBtn-c63c89fe.js";import{d as u}from"./index-32067264.js";import"./filter-46a1cd1e.js";import"./VInput-7c5570be.js";import"./index-64adca37.js";import"./VAvatar-e7cde86f.js";import"./VProgressLinear-cb5797f3.js";import"./VOverlay-9073929d.js";import"./scopeId-6c64961f.js";import"./ssrBoot-585b05d8.js";const{mapActions:B}=p("CREATE_ARTICLE"),{mapGetters:G,mapActions:L}=p("CATEGORY"),N={components:{CategoryForm:$},name:"ArticleForm",data:()=>({valid:!1,title:"",content:"",category:"",publish:!1,loadingCategories:!1,images:[],categoryDialog:!1}),computed:{...G(["categoryPage"]),user(){return this.$store.getters.user}},created(){this.fetchCategories()},methods:{...B(["createArticle"]),...L(["fetchCategoryList"]),getRules(e){return[t=>!!t||`${e} is required`]},save(){if(!this.valid)return;const e=new FormData;e.append("title",this.title),e.append("content",this.content),e.append("category",this.category),e.append("creator",this.user._id),e.append("status",this.publish?"published":"draft"),this.images.forEach(t=>e.append("files",t)),this.createArticle(e).then(t=>{t&&this.$router.push(`/article/${t._id}`)})},fetchCategories(e=""){this.loadingCategories=!0;let t="?status=active&limit=1000";e&&(t+=e),this.fetchCategoryList(t).then(s=>{s&&(this.loadingCategories=!1)})},searchCategories(e){e?this.fetchCategories(`&q=${e}`):this.fetchCategories()},addCategory(){this.categoryDialog=!0},exitCat(e){e&&this.searchCategories(e.name),this.categoryDialog=!1}},beforeCreate(){this.$store.hasModule("CREATE_ARTICLE")||this.$store.registerModule("CREATE_ARTICLE",E),this.$store.hasModule("CATEGORY")||this.$store.registerModule("CATEGORY",T)},beforeUnmount(){this.$store.unregisterModule("CREATE_ARTICLE"),this.$store.unregisterModule("CATEGORY")}},x=f("h1",{class:"mx-auto my-6 text-center",style:{"max-width":"500px"}}," Create Article ",-1);function O(e,t,s,C,V,l){const i=g("category-form");return d(),y(A,null,[o(F,{modelValue:e.categoryDialog,"onUpdate:modelValue":t[1]||(t[1]=a=>e.categoryDialog=a),persistent:"","max-width":"300"},{default:r(()=>[e.categoryDialog?(d(),h(i,{key:0,onCategorySaved:t[0]||(t[0]=a=>e.categoryDialog=!1)})):v("",!0)]),_:1},8,["modelValue"]),f("div",null,[x,o(I,{class:"mx-auto pa-12 pb-8",elevation:"8","max-width":"700",rounded:"lg"},{default:r(()=>[o(k,{modelValue:e.valid,"onUpdate:modelValue":t[7]||(t[7]=a=>e.valid=a),onSubmit:b(l.save,["prevent"])},{default:r(()=>[o(S,{modelValue:e.title,"onUpdate:modelValue":t[2]||(t[2]=a=>e.title=a),label:"Title",rules:l.getRules("Title"),placeholder:"Enter title",variant:"outlined"},null,8,["modelValue","rules"]),o(w,{modelValue:e.content,"onUpdate:modelValue":t[3]||(t[3]=a=>e.content=a),label:"Content",rules:l.getRules("Content"),density:"compact",placeholder:"Enter Content",variant:"outlined"},null,8,["modelValue","rules"]),o(R,{modelValue:e.category,"onUpdate:modelValue":t[4]||(t[4]=a=>e.category=a),label:"Category",rules:l.getRules("Category"),items:e.categoryPage.docs,"item-title":"name","item-value":"_id",placeholder:"Select Category",variant:"outlined","no-data-text":"No category","no-filter":!0,loading:e.loadingCategories,"onUpdate:search":l.searchCategories},{append:r(()=>[o(n,{color:"blue",variant:"text",class:"ma-2",onClick:l.addCategory},{default:r(()=>[o(u,{icon:"mdi-plus"})]),_:1},8,["onClick"])]),_:1},8,["modelValue","rules","items","loading","onUpdate:search"]),o(D,{modelValue:e.publish,"onUpdate:modelValue":t[5]||(t[5]=a=>e.publish=a),label:"Publish"},null,8,["modelValue"]),o(U,{modelValue:e.images,"onUpdate:modelValue":t[6]||(t[6]=a=>e.images=a),chips:"",label:"Images and/or Videos(optional, max: 4)",placeholder:"Select Images",multiple:"",variant:"outlined"},null,8,["modelValue"]),o(M,{class:"text-right"},{default:r(()=>[o(n,{class:"mx-3",color:"blue",variant:"tonal",type:"submit"},{default:r(()=>[m(" Save ")]),_:1}),o(n,{class:"mx-4",variant:"tonal",to:"/article",type:"button"},{default:r(()=>[o(u,{icon:"mdi-chevron-left"}),m(" Back ")]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})])],64)}const P=c(N,[["render",O]]),Y={name:"ArticleView",components:{ArticleForm:P}};function _(e,t,s,C,V,l){const i=g("article-form");return d(),h(i)}const de=c(Y,[["render",_]]);export{de as default};