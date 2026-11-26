(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diyPage/pageFooterPlaceholder"],{"5a4c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("f8ab"),c=n("713e"),o={name:"pageFooterPlaceholder",props:{tabbarConfig:{type:Object},appendHeight:{type:Number,default:30}},computed:{compStyle:function(){var e=this.tabbarConfig?a.diyUtil.calcTabbarHeight(this.tabbarConfig):(0,c.getSystemInfo)().safeAreaInsets.bottom,n=t.upx2px(this.appendHeight||0);return{"--placeholder-height":"".concat(e+n,"px")}}}};e.default=o}).call(this,n("df3c")["default"])},6260:function(t,e,n){},"6eb9":function(t,e,n){"use strict";n.r(e);var a=n("fc65"),c=n("79c8");for(var o in c)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n("d8af");var i=n("828b"),r=Object(i["a"])(c["default"],a["b"],a["c"],!1,null,"76028b71",null,!1,a["a"],void 0);e["default"]=r.exports},"79c8":function(t,e,n){"use strict";n.r(e);var a=n("5a4c"),c=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=c.a},d8af:function(t,e,n){"use strict";var a=n("6260"),c=n.n(a);c.a},fc65:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=(this._self._c,this.__get_style([this.compStyle]));this.$mp.data=Object.assign({},{$root:{s0:e}})},c=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diyPage/pageFooterPlaceholder-create-component',
    {
        'components/diyPage/pageFooterPlaceholder-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("6eb9"))
        })
    },
    [['components/diyPage/pageFooterPlaceholder-create-component']]
]);
