(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26a22548","chunk-7c6f285e"],{"123e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"time"},[n("img",{attrs:{src:"datascreenB/header/weather.png",alt:""}}),t._v(" "+t._s(t.weather)+" "+t._s(t.date)+" / "+t._s(t.week)+" / "+t._s(t.time))])},c=[],s={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"},a={data:function(){return{date:"",week:"",time:"",weather:"多云 22-266℃ "}},created:function(){this.init()},methods:{init:function(){this.setDate(),this.setWeek(),this.setTime(),setTimeout(this.init.bind(this),1e3)},setDate:function(){var t=new Date,e=t.getFullYear(),n=this.join0(t.getMonth()+1),i=this.join0(t.getDate());this.date="".concat(e,"年").concat(n,"月").concat(i,"日")},setWeek:function(){this.week="星期".concat(s[(new Date).getDay()])},setTime:function(){var t=new Date,e=this.join0(t.getHours()),n=this.join0(t.getMinutes()),i=this.join0(t.getSeconds());this.time="".concat(e,":").concat(n,":").concat(i)},join0:function(t){return t<10&&(t="0"+t),t}}},r=a,o=(n("71ca"),n("2877")),u=Object(o["a"])(r,i,c,!1,null,"4c88f7b0",null);e["default"]=u.exports},"2c79":function(t,e,n){},"5fc6":function(t,e,n){t.exports=n.p+"img/top.2bec7225.png"},"71ca":function(t,e,n){"use strict";var i=n("2c79"),c=n.n(i);c.a},cd3d:function(t,e,n){"use strict";var i=n("f57b"),c=n.n(i);c.a},cf1b:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("Time"),t._m(0)],1)},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"name"},[i("img",{attrs:{src:n("5fc6"),alt:"",srcset:""}})])}],s=n("123e"),a={components:{Time:s["default"]}},r=a,o=(n("cd3d"),n("2877")),u=Object(o["a"])(r,i,c,!1,null,"426c15a7",null);e["default"]=u.exports},f57b:function(t,e,n){}}]);