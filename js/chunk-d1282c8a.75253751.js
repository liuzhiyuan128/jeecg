(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1282c8a","chunk-15894112","chunk-d263e8c2"],{1187:function(t,e,i){"use strict";var s=i("a49d"),a=i.n(s);a.a},"12d8":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("j-modal",{attrs:{title:t.title,width:t.width,visible:t.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":t.disableSubmit}},cancelText:"关闭"},on:{ok:t.handleOk,cancel:t.handleCancel}},[i("historyfrom",{ref:"historyfrom"})],1)},a=[],n=i("d502"),o={name:"HistoryModel",components:{historyfrom:n["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1,equipId:""}},methods:{add:function(){this.visible=!0},close:function(){this.visible=!1},submitCallback:function(){this.visible=!1},handleOk:function(){this.close()},handleCancel:function(){this.close()},getEquipId:function(t,e){var i=this;this.equipId=t,this.$nextTick((function(){i.$refs.historyfrom.getId(i.equipId),i.$refs.historyfrom.LoadList(e)}))}}},l=o,r=i("2877"),c=Object(r["a"])(l,s,a,!1,null,null,null);e["default"]=c.exports},4657:function(t,e,i){"use strict";var s=i("46c1"),a=i.n(s);a.a},"46c1":function(t,e,i){},"770f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"datamonitoringparticulars"},[i("a-row",[i("a-col",{attrs:{span:24}},[i("a-icon",{staticClass:"goback",attrs:{type:"left-circle"},on:{click:t.doClose}})],1)],1),i("a-row",[i("a-col",[i("div",[i("span",{staticClass:"data-title"},[t._v("基本信息")])]),i("div",{staticClass:"data-content information"},[i("ul",[i("li",[t._v("所属单位："+t._s(t.affiliatedAgent))]),i("li",[t._v("设备编号："+t._s(t.serialNumber))]),i("li",[t._v("设备类型："+t._s(t.equipmentType))]),i("li",[t._v("设备状态："+t._s(t.equipmentState))]),i("li",[t._v("上报时间："+t._s(t.createTime))]),i("li",[t._v("详细地址："+t._s(t.detailedLocation))])])])])],1),i("a-row",[i("a-col",[i("div",[i("span",{staticClass:"data-title "},[t._v("实时数据")])]),i("div",{staticClass:"data-content realtimedata"},[i("ul",[i("li",[i("div",{staticClass:"realtimedata-content"},[i("p",[t._v("信号")]),i("h2",[t._v(t._s(t.smSignal))]),i("p",[t._v("当前值（%）")]),i("hr"),i("p",[t._v("参考阈值  100%")])])])])])])],1),i("a-row",[i("a-col",[i("div",[i("span",{staticClass:"data-title"},[t._v("设备检测值")])]),i("div",{staticClass:"data-content equipmentvalue"},[i("div",{staticClass:"equipmentvalue-content"},[i("a-row",[i("a-col",{attrs:{span:6}},[i("ul",{staticClass:"equipmentvalue-information sensorvalue-information"},[i("li",[t._v("信号--当前值")]),i("li",[i("div",{staticClass:"sensordata-content"},[i("p",[t._v("信号")]),i("h2",[t._v(t._s(t.smSignal))]),i("p",[t._v("当前值（%）")]),i("hr"),i("p",[t._v("参考阈值  100%")])])]),i("li",[i("span",{on:{click:function(e){return t.historyModel(1)}}},[t._v("查看历史记录>")])])])]),i("a-col",{attrs:{span:18}},[i("div",{staticClass:"equipmentvalue-chart"},[i("p",[t._v("监测值历史趋势")]),i("Signalchart",{ref:"signalChart"})],1)])],1)],1)])])],1),i("HistoryModel",{ref:"historyModel"})],1)},a=[],n=i("eae6"),o=i("12d8"),l=i("b775"),r=(i("0fea"),{name:"CombustibleParticulars",components:{Signalchart:n["default"],HistoryModel:o["default"]},props:{showList:{type:Boolean,default:!1}},data:function(){return{systemId:"",affiliatedAgent:"",serialNumber:"",equipmentType:"",equipmentState:"",createTime:"",detailedLocation:"",smokeValue:"",id:"",smEletric:"",smPollution:"",smConcentration:"",smSignal:"",signal:[],electric:[],pollution:[],smokescope:[]}},created:function(){},computed:{},methods:{doClose:function(){this.$emit("parEvnn",this.systemId)},historyModel:function(t){this.$refs.historyModel.add(),this.$refs.historyModel.title="历史记录",this.$refs.historyModel.disableSubmit=!1,this.$refs.historyModel.getEquipId(this.id,t)},getParticularsData:function(t){this.id=t.cgEqumentId,this.affiliatedAgent=t.affiliatedAgent_dictText,this.serialNumber=t.serialNumber,this.equipmentType=t.equipmentType_dictText,this.equipmentState=t.equipmentState_dictText,this.createTime=t.createTime,this.detailedLocation=t.detailedLocation,this.smokeValue=t.smConcentration,this.systemId=t.systemBelong,this.smEletric=t.smEletric,this.smPollution=t.smPollution,this.smConcentration=t.smConcentration,this.smSignal=t.cgSignal,this.loadStatisticalChartData()},loadStatisticalChartData:function(){var t=this;l["b"].get(window._CONFIG["domianURL"]+"/frontenddatamonitoring/combustibleGas/queryCombustibleById",{params:{id:this.id}}).then((function(e){for(var i=0;i<e.result.length;i++)t.signal.push({ReporTime:e.result[i].createTimeTwo,smSignal:e.result[i].cgSignal}),t.electric.push({ReporTime:e.result[i].createTimeTwo,smSignal:e.result[i].cgEletric});t.$refs.signalChart.getData(t.signal)}))}}}),c=r,u=(i("4657"),i("2877")),m=Object(u["a"])(c,s,a,!1,null,"06935293",null);e["default"]=m.exports},a49d:function(t,e,i){},d502:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"historyfrom"},[i("div",{staticClass:"query-box"},[i("a-row",[i("a-col",[i("h3",{staticClass:"statistical-time"},[t._v("统计时间:")])]),i("a-col",[i("a-range-picker",{on:{change:t.changeTime}})],1),i("a-col",[i("div",{staticClass:"query-btn"},[i("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.Count()}}},[t._v("查询")]),i("a-button",{attrs:{type:"danger"},on:{click:function(e){return t.reset()}}},[t._v("重置")])],1)])],1)],1),1==t.num?i("div",{staticClass:"history-table"},[i("a-table",{attrs:{columns:t.columnsSignal,"data-source":t.signal,pagination:{pageSize:10}}})],1):t._e(),2==t.num?i("div",{staticClass:"history-table"},[i("a-table",{attrs:{columns:t.columnsSignal,"data-source":t.electric,pagination:{pageSize:10}}})],1):t._e(),3==t.num?i("div",{staticClass:"history-table"},[i("a-table",{attrs:{columns:t.columnsSignal,"data-source":t.pollution,pagination:{pageSize:10}}})],1):t._e(),4==t.num?i("div",{staticClass:"history-table"},[i("a-table",{attrs:{columns:t.columnsSignal,"data-source":t.smokescope,pagination:{pageSize:10}}})],1):t._e()])},a=[],n=i("c1df"),o=i.n(n),l=i("b775"),r={name:"HistoryFrom",components:{},props:{},data:function(){return{signal:[],electric:[],pollution:[],smokescope:[],columnsSignal:[{title:"上报时间",dataIndex:"ReporTime",align:"center"},{title:"检测类型",dataIndex:"monitorType",align:"center"},{title:"设备状态",dataIndex:"state",align:"center"},{title:"数值",dataIndex:"smSignal",align:"center"}],createTime:"",SelectTime:{beginTime:"",byTime:""},equipId:"",equipId1:"",num:0}},computed:{},created:function(){},methods:{getId:function(t){this.equipId1=t},LoadList:function(t){var e=this;this.num=t,l["b"].get(window._CONFIG["domianURL"]+"/frontenddatamonitoring/combustibleGas/queryList",{params:{cgEqumentId:this.equipId1}}).then((function(t){for(var i=0;i<t.result.records.length;i++)e.signal.push({ReporTime:t.result.records[i].createTime,monitorType:"信号",state:"正常",smSignal:t.result.records[i].cgSignal}),e.electric.push({ReporTime:t.result.records[i].createTime,monitorType:"电量",state:"正常",smSignal:t.result.records[i].smEletric})}))},changeTime:function(t,e){this.SelectTime.beginTime=o()(e[0]).format("YYYY-MM-DD"),this.SelectTime.byTime=o()(e[1]).format("YYYY-MM-DD")},Count:function(){var t=this;l["b"].get(window._CONFIG["domianURL"]+"/frontenddatamonitoring/combustibleGas/queryList",{params:{cgEqumentId:this.equipId1,begin:this.SelectTime.beginTime,endTime:this.SelectTime.byTime}}).then((function(e){1==t.num&&(t.signal=[]),2==t.num&&(t.electric=[]),3==t.num&&(t.pollution=[]),4==t.num&&(t.smokescope=[]);for(var i=0;i<e.result.records.length;i++)1==t.num&&t.signal.push({ReporTime:e.result.records[i].createTime,monitorType:"信号",state:"正常",smSignal:e.result.records[i].cgSignal}),2==t.num&&t.electric.push({ReporTime:e.result.records[i].createTime,monitorType:"电量",state:"正常",smSignal:e.result.records[i].smEletric}),3==t.num&&t.pollution.push({ReporTime:e.result.records[i].createTime,monitorType:"迷宫污染程度",state:"正常",smSignal:e.result.records[i].smPollution}),4==t.num&&t.smokescope.push({ReporTime:e.result.records[i].createTime,monitorType:"烟雾浓度",state:"正常",smSignal:e.result.records[i].smConcentration})}))},reset:function(){1==this.num&&(this.signal=[]),2==this.num&&(this.electric=[]),3==this.num&&(this.pollution=[]),4==this.num&&(this.smokescope=[]),this.LoadList(this.num)}}},c=r,u=(i("1187"),i("2877")),m=Object(u["a"])(c,s,a,!1,null,"35131552",null);e["default"]=m.exports}}]);