(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b552432"],{"174f":function(t,s,i){"use strict";var c=i("3801"),a=i.n(c);a.a},"1dfa":function(t,s,i){"use strict";var c=i("b2e5"),a=i.n(c);a.a},2293:function(t,s,i){"use strict";var c=function(){var t=this,s=t.$createElement,c=t._self._c||s;return c("div",{staticClass:"header"},[c("div",{staticClass:"header-container"},[c("img",{staticClass:"logo",attrs:{src:i("f35a"),alt:""}}),c("div",[c("ul",{staticClass:"header-bar"},[c("li",{staticClass:"font-hover",class:1==t.active?"active":"",on:{click:function(s){return t.gohome()}}},[t._v("\n          首页\n          "),c("div",{staticClass:"circle",style:1==t.active?"background: #4af6cd;":""})]),c("li",{staticClass:"prod-container font-hover",class:2==t.active?"active":"",on:{mouseenter:function(s){return t.enter()},mouseleave:function(s){return t.leave()}}},[t._v("\n          产品\n          "),c("div",{staticClass:"circle",style:2==t.active?"background: #4af6cd;":""}),c("div",{staticClass:"prod-list",style:t.isShow?"display:block":""},[c("div",{staticClass:"font-hover",class:1==t.prodActive?"prod-active":"",on:{click:function(s){return t.goprod()}}},[t._v("发型纪")]),c("div",{staticClass:"font-hover",class:2==t.prodActive?"prod-active":"",on:{click:function(s){return t.goprodAssistant()}}},[t._v("发型纪助手")]),c("div",{staticClass:"font-hover",class:3==t.prodActive?"prod-active":"",on:{click:function(s){return t.goprodMerchants()}}},[t._v("发型纪商家版")])])]),c("li",{staticClass:"font-hover",class:3==t.active?"active":"",on:{click:function(s){return t.gosuccess()}}},[t._v("\n          成功案例\n          "),c("div",{staticClass:"circle",style:3==t.active?"background: #4af6cd;":""})]),c("li",{staticClass:"font-hover",class:4==t.active?"active":"",on:{click:function(s){return t.goaboutus()}}},[t._v("\n          关于我们\n          "),c("div",{staticClass:"circle",style:4==t.active?"background: #4af6cd;":""})])])])])])},a=[],e=(i("7f7f"),{data:function(){return{active:0,prodActive:0,isShow:!1}},created:function(){this.getRouter()},methods:{leave:function(){this.isShow=!1},enter:function(){this.isShow=!0},gosuccess:function(){this.$router.push("/success")},goaboutus:function(){this.$router.push("/aboutus")},gohome:function(){this.$router.push("/")},goprod:function(){this.$router.push("/prod")},goprodAssistant:function(){this.$router.push("/prodAssistant")},goprodMerchants:function(){this.$router.push("/prodMerchants")},getRouter:function(){"home"==this.$route.name?this.active=1:"success"==this.$route.name?this.active=3:"aboutus"==this.$route.name?this.active=4:(this.active=2,"prod"==this.$route.name?this.prodActive=1:"prodAssistant"==this.$route.name?this.prodActive=2:"prodMerchants"==this.$route.name&&(this.prodActive=3))}}}),n=e,o=(i("1dfa"),i("2877")),r=Object(o["a"])(n,c,a,!1,null,"4df6d234",null);s["a"]=r.exports},3801:function(t,s,i){},"53d6":function(t,s,i){"use strict";var c=i("ad2e"),a=i.n(c);a.a},"6a8a":function(t,s,i){"use strict";var c=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"footer"},[i("div",{staticClass:"footer-main"},[t._m(0),i("div",{staticClass:"listinfo"},[i("ul",[i("li",[i("span",[t._v("产品服务")]),i("div",{staticClass:"opc60",on:{click:function(s){return t.goprod()}}},[t._v("发型纪")]),i("div",{staticClass:"opc60",on:{click:function(s){return t.goprodAssistant()}}},[t._v("发型纪商家版")]),i("div",{staticClass:"opc60",on:{click:function(s){return t.goprodMerchants()}}},[t._v("发型纪工作室助手")])]),t._m(1),t._m(2)])]),t._m(3)]),i("div",{staticClass:"footer-our opc60"},[t._v("Copyright © 2018 杭州长时科技有限公司 ALL RIGHTS RESERVED 浙ICP备18001973号")])])},a=[function(){var t=this,s=t.$createElement,c=t._self._c||s;return c("div",{staticClass:"logoInfo"},[c("div",[c("img",{attrs:{src:i("f35a"),alt:""}})]),c("div",{staticClass:"opc60"},[t._v("杭州长时科技有限公司")]),c("div",{staticClass:"opc60"},[t._v("杭州市西湖区文三路553号浙江中小企业大厦")]),c("div",{staticClass:"opc60"},[t._v("联系方式：4000-365-724")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",[i("span",[t._v("关于我们")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",[i("span",[t._v("加入我们")])])},function(){var t=this,s=t.$createElement,c=t._self._c||s;return c("div",{staticClass:"twocode"},[c("div",[c("img",{attrs:{src:i("ba47"),alt:""}}),c("div",{staticClass:"opc60"},[t._v("官方微信")])]),c("div",[c("img",{attrs:{src:i("c3fd"),alt:""}}),c("div",{staticClass:"opc60"},[t._v("官方微博")])])])}],e={data:function(){return{}},methods:{goprod:function(){this.$router.push("/prod")},goprodAssistant:function(){this.$router.push("/prodAssistant")},goprodMerchants:function(){this.$router.push("/prodMerchants")}}},n=e,o=(i("174f"),i("2877")),r=Object(o["a"])(n,c,a,!1,null,"38e2ee58",null);s["a"]=r.exports},"7f7f":function(t,s,i){var c=i("86cc").f,a=Function.prototype,e=/^\s*function ([^ (]*)/,n="name";n in a||i("9e1e")&&c(a,n,{configurable:!0,get:function(){try{return(""+this).match(e)[1]}catch(t){return""}}})},a01e:function(t,s,i){t.exports=i.p+"img/casetwo.367c0d85.png"},ad2e:function(t,s,i){},b2e5:function(t,s,i){},ba47:function(t,s,i){t.exports=i.p+"img/twocode1.199ae4d6.png"},c3fd:function(t,s,i){t.exports=i.p+"img/twocode2.bd6c167a.png"},e68a:function(t,s,i){t.exports=i.p+"img/caseone.c68058f7.png"},f35a:function(t,s,i){t.exports=i.p+"img/LOGO.4e92fd5b.png"},f77d:function(t,s,i){"use strict";i.r(s);var c=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"success"},[i("headerBar"),t._m(0),i("footerBar")],1)},a=[function(){var t=this,s=t.$createElement,c=t._self._c||s;return c("div",{staticClass:"success-main"},[c("div",{staticClass:"success-top"},[c("div",{staticClass:"english-name"},[t._v("SUCCESS CASE")]),c("div",[t._v("成功案例")])]),c("div",{staticClass:"success-bottom"},[c("div",{staticClass:"success-case-container"},[c("div",{staticClass:"case-one-img"},[c("img",{attrs:{src:i("e68a"),alt:""}})]),c("div",{staticClass:"success-case-one"},[c("div",[c("div",{staticClass:"case-title"},[t._v("目前情况")]),c("div",[t._v("\n              抖音粉丝数9.2万（持续上涨）\n              "),c("br"),t._v("拥有淘宝店铺\n              "),c("br"),t._v("目前每天平均30笔在线设计\n            ")])]),c("div",[c("div",{staticClass:"case-title mt-23"},[t._v("营销策略")]),c("div",[t._v("\n              在抖音中提供各种发型的教学，让粉丝通过看视频了解不同发型适合的脸型，提供在线设计服务。"),c("br"),t._v("\n              在淘宝店和自己的微信粉丝群中根据不同的节日进行促销，效果明显。\n            ")])]),c("div",[c("div",{staticClass:"case-title mt-23"},[t._v("用户原声")]),c("div",[t._v("没用发型纪之前其实也用过其他类似的产品，但是感觉还是发型纪简单、方便，报告内容也很靠谱。")])])])]),c("div",{staticClass:"success-case-container"},[c("div",{staticClass:"success-case-two"},[c("div",[c("div",{staticClass:"case-title"},[t._v("目前情况")]),c("div",[t._v("\n              抖音粉丝数9.5万（持续上涨）\n              "),c("br"),t._v("微信公众号粉丝数千人\n              "),c("br"),t._v("目前每天平均 20+笔在线设计\n            ")])]),c("div",[c("div",{staticClass:"case-title mt-23"},[t._v("营销策略")]),c("div",[t._v("抖音上每天都会发自己工作室发型设计成果，前后差异对比，吸引粉丝观看，同时每天会提供2个免费名额吸引粉丝进行发型设计。")])]),c("div",[c("div",{staticClass:"case-title mt-23"},[t._v("用户原声")]),c("div",[t._v("给自己多一个赚钱的方式，每天拍抖音小视频需要花费大量的时间，但是关注的粉丝没办法变现，现在做在线设计后，每天都会有粉丝联系我设计发型，设计费就可以赚几百块，还有很多粉丝会到店消费，效果蛮不错的。")])])]),c("div",{staticClass:"case-two-img"},[c("img",{attrs:{src:i("a01e"),alt:""}})])])])])}],e=i("2293"),n=i("6a8a"),o={data:function(){return{}},components:{headerBar:e["a"],footerBar:n["a"]}},r=o,u=(i("53d6"),i("2877")),v=Object(u["a"])(r,c,a,!1,null,"09b3ccb1",null);s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-8b552432.71ac7bae.js.map