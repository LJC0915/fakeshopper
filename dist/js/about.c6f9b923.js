(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"15ab":function(e,t,a){},"1dde":function(e,t,a){var r=a("d039"),c=a("b622"),n=a("2d00"),o=c("species");e.exports=function(e){return n>=51||!r((function(){var t=[],a=t.constructor={};return a[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1edd":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:"jumbotron"}},[a("div",{staticClass:"mask"},[a("div",{staticClass:"h1"},[e._v("現在就預約諮詢")]),a("div",{staticClass:"h2"},[e._v("與 Real-Shopper 一起共創商機")])])])}],n=a("d4ec"),o=a("262e"),s=a("2caf"),l=a("9ab4"),i=a("60a3"),u=function(e){Object(o["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return a}(i["c"]);u=Object(l["a"])([i["a"]],u);var f=u,b=f,d=(a("3e78"),a("2877")),m=Object(d["a"])(b,r,c,!1,null,"7f999632",null);t["a"]=m.exports},"26c5":function(e,t,a){},"30f6":function(e,t,a){"use strict";var r=a("40d9"),c=a.n(r);c.a},3589:function(e,t,a){},"3e78":function(e,t,a){"use strict";var r=a("3589"),c=a.n(r);c.a},"40d9":function(e,t,a){},"4de4":function(e,t,a){"use strict";var r=a("23e7"),c=a("b727").filter,n=a("1dde"),o=a("ae40"),s=n("filter"),l=o("filter");r({target:"Array",proto:!0,forced:!s||!l},{filter:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},"574f":function(e,t,a){e.exports=a.p+"img/success.fb5f8c4b.gif"},"6ea4":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{attrs:{direction:"vertical"}},[a("navbar",{attrs:{hide:!0}}),a("jumbotron"),a("steps",{attrs:{step:2}}),a("form-title",{attrs:{title:"Real-Shopper 預約設定(必填)"}}),a("form-two"),a("site-footer")],1)},c=[],n=a("d4ec"),o=a("262e"),s=a("2caf"),l=a("9ab4"),i=a("60a3"),u=a("1808"),f=a("1edd"),b=a("28ea"),d=a("7ab7"),m=a("c317"),p=a("d10d"),v=function(e){Object(o["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return a}(i["c"]);v=Object(l["a"])([Object(i["a"])({components:{FormTwo:p["a"],FormTitle:m["a"],Steps:d["a"],SiteFooter:b["a"],Jumbotron:f["a"],Navbar:u["a"]}})],v);var h=v,O=h,j=a("2877"),_=Object(j["a"])(O,r,c,!1,null,"2b9e1c28",null);t["default"]=_.exports},"7ab7":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"steps-container",attrs:{id:"steps"}},[a("el-steps",{attrs:{active:e.step,"finish-status":"process","process-status":""}},[a("el-step",{attrs:{title:"聯繫資訊"}}),a("el-step",{attrs:{title:"預約廣告"}}),a("el-step",{attrs:{title:"完成預約"}})],1)],1)},c=[],n=(a("a9e3"),a("d4ec")),o=a("262e"),s=a("2caf"),l=a("9ab4"),i=a("60a3"),u=function(e){Object(o["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return a}(i["c"]);Object(l["a"])([Object(i["b"])({type:Number,default:0})],u.prototype,"step",void 0),u=Object(l["a"])([i["a"]],u);var f=u,b=f,d=(a("dfb8"),a("2877")),m=Object(d["a"])(b,r,c,!1,null,"47ea66e6",null);t["a"]=m.exports},8895:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{attrs:{direction:"vertical"}},[a("navbar",{attrs:{hide:!0}}),a("jumbotron"),a("steps",{attrs:{step:1}}),a("form-title",{attrs:{title:"聯繫窗口 (必填)"}}),a("form-one"),a("site-footer")],1)},c=[],n=a("d4ec"),o=a("262e"),s=a("2caf"),l=a("9ab4"),i=a("60a3"),u=a("1808"),f=a("1edd"),b=a("28ea"),d=a("7ab7"),m=a("c317"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-one-container",attrs:{id:"form-one"}},[a("el-form",{attrs:{"label-width":"80px","label-position":"left"}},[a("el-form-item",{attrs:{label:"公司名稱",required:""}},[a("el-input",{model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})],1),a("el-form-item",{attrs:{label:"姓名",required:""}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"電話",required:""}},[a("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),a("el-form-item",{attrs:{label:"E-mail",required:""}},[a("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("el-form-item",{attrs:{label:"職稱",required:""}},[a("el-input",{model:{value:e.form.jobTitle,callback:function(t){e.$set(e.form,"jobTitle",t)},expression:"form.jobTitle"}})],1)],1),a("el-button",{staticClass:"next-button",attrs:{type:"primary"},on:{click:e.goToFormTwo}},[e._v("下一步")])],1)},v=[],h=a("bee2"),O=function(e){Object(o["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.form={company:"",name:"",phone:"",email:"",jobTitle:""},e}return Object(h["a"])(a,[{key:"goToFormTwo",value:function(){this.$router.push({name:"Form2"})}}]),a}(i["c"]);O=Object(l["a"])([i["a"]],O);var j=O,_=j,y=(a("30f6"),a("2877")),E=Object(y["a"])(_,p,v,!1,null,"06634780",null),T=E.exports,C=function(e){Object(o["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return a}(i["c"]);C=Object(l["a"])([Object(i["a"])({components:{FormOne:T,FormTitle:m["a"],Steps:d["a"],SiteFooter:b["a"],Jumbotron:f["a"],Navbar:u["a"]}})],C);var x=C,k=x,g=Object(y["a"])(k,r,c,!1,null,"25a0082e",null);t["default"]=g.exports},"9fdc":function(e,t,a){},a40c:function(e,t,a){},a623:function(e,t,a){"use strict";var r=a("23e7"),c=a("b727").every,n=a("a640"),o=a("ae40"),s=n("every"),l=o("every");r({target:"Array",proto:!0,forced:!s||!l},{every:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},a640:function(e,t,a){"use strict";var r=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&r((function(){a.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,a){var r=a("83ab"),c=a("d039"),n=a("5135"),o=Object.defineProperty,s={},l=function(e){throw e};e.exports=function(e,t){if(n(s,e))return s[e];t||(t={});var a=[][e],i=!!n(t,"ACCESSORS")&&t.ACCESSORS,u=n(t,0)?t[0]:l,f=n(t,1)?t[1]:void 0;return s[e]=!!a&&!c((function(){if(i&&!r)return!0;var e={length:-1};i?o(e,1,{enumerable:!0,get:l}):e[1]=1,a.call(e,u,f)}))}},be51:function(e,t,a){"use strict";var r=a("15ab"),c=a.n(r);c.a},c317:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-title-container",attrs:{id:"form-title"}},[a("div",{staticClass:"title"},[e._v(e._s(e.title))])])},c=[],n=a("d4ec"),o=a("262e"),s=a("2caf"),l=a("9ab4"),i=a("60a3"),u=function(e){Object(o["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return a}(i["c"]);Object(l["a"])([Object(i["b"])(String)],u.prototype,"title",void 0),u=Object(l["a"])([i["a"]],u);var f=u,b=f,d=(a("be51"),a("2877")),m=Object(d["a"])(b,r,c,!1,null,"7ccdf7a6",null);t["a"]=m.exports},cf21:function(e,t,a){"use strict";var r=a("a40c"),c=a.n(r);c.a},d10d:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-one-container",attrs:{id:"form-one"}},[a("el-form",{attrs:{"label-width":"100px","label-position":"left"}},[a("el-form-item",{attrs:{label:"選擇電商",required:""}},[a("el-select",{staticClass:"selection",attrs:{value:e.selectedEcOne,placeholder:"排序1*",clearable:!e.selectedEcTwo},model:{value:e.selectedEcOne,callback:function(t){e.selectedEcOne=t},expression:"selectedEcOne"}},e._l(e.ecOptionsOne,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1),e.selectedEcOne?a("el-select",{staticClass:"selection",attrs:{value:e.selectedEcTwo,placeholder:"排序2",clearable:!e.selectedEcThree},model:{value:e.selectedEcTwo,callback:function(t){e.selectedEcTwo=t},expression:"selectedEcTwo"}},e._l(e.ecOptionsTwo,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1):e._e(),e.selectedEcTwo?a("el-select",{staticClass:"selection",attrs:{value:e.selectedEcThree,placeholder:"排序3",clearable:""},model:{value:e.selectedEcThree,callback:function(t){e.selectedEcThree=t},expression:"selectedEcThree"}},e._l(e.ecOptionsThree,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1):e._e()],1),a("el-form-item",[a("div",{staticClass:"description"},[e._v(" 請依各電商平台( momo購物網、PChome 24h購物、ETMall東森購物網 ) 銷售額由大到小排序選擇您想預約的電商平台，並須確認您的商品有在該電商平台上架銷。如未上架商品，可自行先與電商平台合作上架商品後再進行預約。 ")])]),a("el-form-item",{attrs:{label:"執行總預算",required:""}},[a("el-input",{attrs:{type:"number",placeholder:"輸入預算金額"},model:{value:e.form.budget,callback:function(t){e.$set(e.form,"budget",t)},expression:"form.budget"}})],1),a("el-form-item",[a("div",{staticClass:"description"},[e._v(" 建議單一電商平台執行預算至少 NTD 30 萬台幣，如增加一電商平台則總預算金額為 NTD 60 萬台幣，以此類推。 ")])]),a("el-form-item",{attrs:{label:"預算走期",required:""}},[a("el-date-picker",{attrs:{"prefix-icon":"el-icon-date",type:"daterange","range-separator":"至","start-placeholder":"選擇廣告預計開始時間","end-placeholder":"選擇廣告預計結束時間"},model:{value:e.form.dateRange,callback:function(t){e.$set(e.form,"dateRange",t)},expression:"form.dateRange"}})],1),a("el-form-item",[a("div",{staticClass:"description"},[e._v("請選擇廣告預計執行時間，建議至少執行一個月或以上。")])]),a("el-form-item",{attrs:{label:"投放品牌",required:""}},[a("el-input",{attrs:{placeholder:"輸入預計投放之商品品牌"},model:{value:e.form.brand,callback:function(t){e.$set(e.form,"brand",t)},expression:"form.brand"}})],1),a("el-form-item",[a("div",{staticClass:"description"},[e._v(" 請確認您的商品是否有在上述所選的電商平台上架並銷售。如尚未上架商品，可自行先與電商平台討論商品上架事宜後再進行預約。 ")])])],1),a("el-row",{staticClass:"button-wrap"},[a("el-button",{staticClass:"next-button",on:{click:e.goBack}},[e._v("返回上一頁")]),a("el-button",{staticClass:"next-button",attrs:{type:"primary"},on:{click:e.submit}},[e._v("送出表單")])],1)],1)},c=[],n=(a("a623"),a("4de4"),a("d4ec")),o=a("bee2"),s=a("262e"),l=a("2caf"),i=a("9ab4"),u=a("60a3"),f=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.form={ecs:[],budget:null,dateRange:[],brand:""},e.selectedEcOne="",e.selectedEcTwo="",e.selectedEcThree="",e.ecs=[{label:"momo購物網",value:"momo"},{label:"PChome 24h購物",value:"pchome"},{label:"ETMall東森購物網",value:"etmall"}],e}return Object(o["a"])(a,[{key:"submit",value:function(){this.$router.push({name:"Form3"})}},{key:"goBack",value:function(){this.$router.push({name:"Form1"})}},{key:"ecOptionsOne",get:function(){return this.ecs}},{key:"ecOptionsTwo",get:function(){var e=this;return this.ecs.filter((function(t){return e.selectedEcOne!==t.value}))}},{key:"ecOptionsThree",get:function(){var e=[this.selectedEcOne,this.selectedEcTwo];return this.ecs.filter((function(t){return e.every((function(e){return e!==t.value}))}))}}]),a}(u["c"]);f=Object(i["a"])([u["a"]],f);var b=f,d=b,m=(a("cf21"),a("2877")),p=Object(m["a"])(d,r,c,!1,null,"3ecae222",null);t["a"]=p.exports},df8f:function(e,t,a){"use strict";var r=a("9fdc"),c=a.n(r);c.a},dfb8:function(e,t,a){"use strict";var r=a("26c5"),c=a.n(r);c.a},e005:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{attrs:{direction:"vertical"}},[a("navbar",{attrs:{hide:!0}}),a("form-success"),a("site-footer")],1)},c=[],n=a("d4ec"),o=a("262e"),s=a("2caf"),l=a("9ab4"),i=a("60a3"),u=a("1808"),f=a("1edd"),b=a("28ea"),d=a("7ab7"),m=a("c317"),p=a("d10d"),v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-success-container",attrs:{id:"form-success"}},[r("div",{staticClass:"success-wrapper"},[r("img",{staticClass:"gif",attrs:{src:a("574f"),alt:"success"}}),r("div",{staticClass:"title"},[e._v("預約成功")]),r("div",{staticClass:"description"},[e._v("我們將於 3 個工作天內與您聯繫， 後續執行與規劃將會有專人為您服務，謝謝！")])])])}],O=function(e){Object(o["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return a}(i["c"]);O=Object(l["a"])([i["a"]],O);var j=O,_=j,y=(a("df8f"),a("2877")),E=Object(y["a"])(_,v,h,!1,null,"0293f696",null),T=E.exports,C=function(e){Object(o["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return a}(i["c"]);C=Object(l["a"])([Object(i["a"])({components:{FormSuccess:T,FormTwo:p["a"],FormTitle:m["a"],Steps:d["a"],SiteFooter:b["a"],Jumbotron:f["a"],Navbar:u["a"]}})],C);var x=C,k=x,g=Object(y["a"])(k,r,c,!1,null,"e05fdc8c",null);t["default"]=g.exports}}]);
//# sourceMappingURL=about.c6f9b923.js.map