(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a08e65ea"],{"062d":function(t,n,e){},"787f":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("van-nav-bar",{attrs:{title:"标题","left-text":"返回","right-text":"按钮","left-arrow":""},on:{"click-left":t.onClickLeft}})],1),e("div",{staticClass:"zhu_ti"},[e("div",{staticClass:"tese_count"},t._l(t.zhuti,(function(n,i){return e("div",{key:i},[e("div",{class:["tese_name",{active:t.indexs===i}],on:{click:function(n){return t.color(i)}}},[t._v(t._s(n.name))])])})),0)])])},a=[],c={data:function(){return{zhuti:[{name:"直播课(1)"},{name:"点播课(1)"},{name:"音频课(1)"},{name:"图文课(1)"},{name:"面授课(1)"},{name:"会员课(1)"}],indexs:-1}},mounted:function(){this.$http.get("/api/app/myStudy/2").then((function(t){console.log(t)}))},methods:{onClickLeft:function(){this.$router.push({name:"MyMine"})},color:function(t){this.indexs=t}}},o=c,s=(e("fe29"),e("2877")),u=Object(s["a"])(o,i,a,!1,null,"4a64ce85",null);n["default"]=u.exports},fe29:function(t,n,e){"use strict";var i=e("062d"),a=e.n(i);a.a}}]);
//# sourceMappingURL=chunk-a08e65ea.e2cae7ad.js.map