(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-080fef74"],{"16a0":function(t,e,i){"use strict";var a=i("650e"),n=i.n(a);n.a},"2ee0":function(t,e,i){t.exports=i.p+"img/titleone.63158f12.png"},5616:function(t,e,i){t.exports=i.p+"img/phoneone.4e6fe8aa.png"},"650e":function(t,e,i){},7205:function(t,e,i){t.exports=i.p+"img/titletwo.11825a22.png"},"8f7a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"prod"},[a("headerBar"),a("div",{staticClass:"prod-main"},[t._m(0),a("div",{staticClass:"prod-main-body"},[a("div",{staticClass:"prod-main-title",staticStyle:{}},[a("transition",{attrs:{name:"fade"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.active==t.content.active,expression:"active==content.active"}],attrs:{src:t.content.titleUrl,alt:""}})])],1),a("div",{staticClass:"prod-main-info"},[a("div",{staticClass:"prod-main-phone"},[a("transition",{attrs:{name:"fade"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.active==t.content.active,expression:"active==content.active"}],attrs:{src:t.content.phoneUrl,alt:""}})])],1),a("div",{staticClass:"prod-main-circle"},[a("div",{style:0==t.activeCircle?"background:#000;":""}),a("div",{style:1==t.activeCircle?"background:#000;":""}),a("div",{style:2==t.activeCircle?"background:#000;":""})])]),a("div",{staticClass:"prod-main-bg"},[a("div",{staticClass:"prod-swiper-btn"},[a("div",{staticClass:"prod-left-swiper-btn",on:{click:function(e){return t.goleft()}}},[a("img",{attrs:{src:i("1f58"),alt:""}})]),a("div",{staticClass:"prod-right-swiper-btn",on:{click:function(e){return t.goright()}}},[a("img",{attrs:{src:i("e0a6"),alt:""}})])]),a("div",{staticClass:"prod-phone-tips"},[a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.active==t.content.active,expression:"active==content.active"}],staticClass:"red-line"})]),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.active==t.content.active,expression:"active==content.active"}]},[t._v(t._s(t.content.tips))])])],1)]),t._m(1)])]),a("footerBar")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"prod-main-top"},[a("div",{staticClass:"chinese-name"},[t._v("发型纪")]),a("div",{staticClass:"english-name"},[t._v("HAIR STYLING")]),a("div",{staticClass:"whitearrow"},[a("img",{attrs:{src:i("a0b2"),alt:""}})]),a("div",{staticClass:"tips"},[t._v("\n        拥有数百万的发型师作品，通过人工智能自动分析，使用大数据匹配每个人\n        "),a("br"),t._v("适合的脸型并提供解决方案，连接爱美的年轻人与顶级发型设计师进行交流\n      ")]),a("ul",{staticClass:"three-type"},[a("li",[t._v("海量作品")]),a("li",[t._v("优质发型师")]),a("li",[t._v("人工智能")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"prode-code"},[a("img",{attrs:{src:i("74bb"),alt:""}})])}],s=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),r=i("2293"),c=i("6a8a"),o=i("5118");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(i,!0).forEach(function(e){Object(s["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var p={data:function(){return{activeCircle:0,active:0,content:{active:0,titleUrl:i("2ee0"),phoneUrl:i("5616"),tips:"拥有数十万的作品，平台每天有上千名设计师不断提供自己作品，设计师遍布在全国各地。"},list:[{active:0,titleUrl:i("2ee0"),phoneUrl:i("5616"),tips:"拥有数十万的作品，平台每天有上千名设计师不断提供自己作品，设计师遍布在全国各地。"},{active:1,titleUrl:i("7205"),phoneUrl:i("f7ae"),tips:"多名知名发型师入驻，提供专业的在线咨询，可以根据不同风格，不同脸型提供定制化服务。"},{active:2,titleUrl:i("a026"),phoneUrl:i("aaa4"),tips:"使用人工智能技术对脸部进行分析，通过大数据在上万种发型中挑选最适合的那款发型。"}]}},components:{headerBar:r["a"],footerBar:c["a"]},methods:{goright:function(){var t=this;if(this.active<2){this.activeCircle+=1;var e=this.active;this.active="占位";Object(o["setTimeout"])(function(){e+=1,t.active=e,t.content=v({},t.list[e])},500)}},goleft:function(){var t=this;if(this.active>0){this.activeCircle-=1;var e=this.active;this.active="占位";Object(o["setTimeout"])(function(){e-=1,t.active=e,t.content=v({},t.list[e])},500)}}}},d=p,f=(i("16a0"),i("2877")),u=Object(f["a"])(d,a,n,!1,null,"d2cdc402",null);e["default"]=u.exports},a026:function(t,e,i){t.exports=i.p+"img/titlethree.7d4e9967.png"},aaa4:function(t,e,i){t.exports=i.p+"img/phonethree.18580a4d.png"},f7ae:function(t,e,i){t.exports=i.p+"img/phonetwo.71b088d7.png"}}]);
//# sourceMappingURL=chunk-080fef74.7c9528c3.js.map