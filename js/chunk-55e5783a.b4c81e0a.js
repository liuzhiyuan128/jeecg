(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55e5783a"],{5978:function(t,a,e){"use strict";var n=e("e34f"),s=e.n(n);s.a},e34f:function(t,a,e){},ea69:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"IOT"},[t._m(0),e("div",{staticClass:"right"},t._l(t.list,(function(a){return e("div",{key:a.name,staticClass:"item"},[e("div",{staticClass:"name"},[t._v(t._s(a.name))]),e("div",{staticClass:"bar"},[e("div",{staticClass:"bg",style:"width: "+a.value/t.total*100+"%"})]),e("div",{staticClass:"num"},[t._v(t._s(a.value))])])})),0)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"left"},[e("div",{staticClass:"equipment"},[e("div",{staticClass:"num"},[t._v("30")]),e("div",{staticClass:"name"},[t._v("总设备数")])])])}],i={data:function(){return{list:[{name:"电气火灾监控系统",value:0},{name:"火灾报警系统",value:0},{name:"独立式烟感系统",value:0},{name:"消防水系统",value:0},{name:"充电桩系统",value:0},{name:"视频监控系统",value:0},{name:"可燃气体系统",value:0},{name:"其他系统",value:0}]}},mounted:function(){this.init()},methods:{setList:function(){var t=this;setTimeout((function(){t.list=[{name:"电气火灾监控系统",value:15},{name:"火灾报警系统",value:13},{name:"独立式烟感系统",value:5},{name:"消防水系统",value:8},{name:"充电桩系统",value:4},{name:"视频监控系统",value:12},{name:"可燃气体系统",value:3},{name:"其他系统",value:0}]}),1e3)},init:function(){this.setList()}},computed:{total:function(){for(var t=0,a=0;a<this.list.length;a++){var e=this.list[a];t+=e.value}return t}}},l=i,u=(e("5978"),e("2877")),v=Object(u["a"])(l,n,s,!1,null,"50a37512",null);a["default"]=v.exports}}]);