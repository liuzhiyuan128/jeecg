(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16cfe858"],{4686:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{height:"160px","margin-bottom":"20px"}},[e("a-row",[e("a-col",{attrs:{span:12}},[e("a-row",{staticClass:"euqipment-chart-left"},[e("a-col",{attrs:{span:12}},[e("v-chart",{staticClass:"chart",attrs:{forceFit:!0,height:t.height,data:t.data,scale:t.scale}},[e("v-tooltip",{attrs:{showTitle:!1,dataKey:"item*percent"}}),e("v-axis"),e("v-pie",{attrs:{position:"percent",color:"item",vStyle:t.pieStyle,label:t.labelConfig}}),e("v-coord",{attrs:{type:"theta",radius:.75,innerRadius:.6}})],1)],1),e("a-col",{attrs:{span:12}},[e("a-row",{staticClass:"data"},[e("a-col",{attrs:{span:8}},[e("h1",[t._v("设备总数 "),e("br"),t._v(" "+t._s(t.number.total))])]),e("a-col",{attrs:{span:16}},[e("ul",[e("li",{staticClass:"data-on"},[t._v("在线　"+t._s(t.number.on))]),e("li",{staticClass:"data-up"},[t._v("离线　"+t._s(t.number.off))])])])],1)],1)],1)],1),e("a-col",{attrs:{span:12}})],1)],1)},s=[],r=e("7104"),i=[{dataKey:"percent",min:0,formatter:".0%"}],o={name:"EquipmentChart",props:{equpment:Array,number:Object},data:function(){return{data:[],scale:i,height:250,pieStyle:{stroke:"#fff",lineWidth:1},labelConfig:["percent",{formatter:function(t,a){return a.point.item+": "+t}}]}},methods:{},watch:{equpment:function(t){var a=(new r.View).source(t);a.transform({type:"percent",field:"count",dimension:"item",as:"percent"}),this.data=a.rows}}},c=o,l=(e("bc3aa"),e("2877")),p=Object(l["a"])(c,n,s,!1,null,"85b66aa0",null);a["default"]=p.exports},6270:function(t,a,e){},bc3aa:function(t,a,e){"use strict";var n=e("6270"),s=e.n(n);s.a}}]);