(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-328bb1a2","chunk-328bb1a2","chunk-ee72dd28","chunk-3914bd3a","chunk-e4c1e51e","chunk-71d39e60","chunk-0e68d9a0","chunk-23d3f5f6"],{"3e4a":function(e,t,l){},5101:function(e,t,l){},6455:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("a-card",{attrs:{bordered:!1}},[l("div",[l("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",scroll:{x:!0},bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"htmlSlot",fn:function(t){return[l("div",{domProps:{innerHTML:e._s(t)}})]}},{key:"imgSlot",fn:function(t){return[t?l("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:e.getImgView(t),height:"25px",alt:""}}):l("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无图片")])]}},{key:"fileSlot",fn:function(t){return[t?l("a-button",{attrs:{ghost:!0,type:"primary",icon:"download",size:"small"},on:{click:function(l){return e.downloadFile(t)}}},[e._v("\n          下载\n        ")]):l("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无文件")])]}},{key:"threshold",fn:function(t,s){return l("span",{},[e._v("\n        "+e._s(s.sensorThreshold)+"\n        "),l("span",{directives:[{name:"show",rawName:"v-show",value:null!=s.sensorThresholdAfter,expression:"record.sensorThresholdAfter!=null"}]},[e._v("~"+e._s(s.sensorThresholdAfter))]),l("span",{directives:[{name:"show",rawName:"v-show",value:null!=s.sensorThreshold,expression:"record.sensorThreshold!=null"}]},[e._v(e._s(e.unitCompute(s)))])])}},{key:"action",fn:function(t,s){return l("span",{},[l("a-menu-item",[l("a-button",{attrs:{type:"link",ghost:"",disabled:4!=s.thresholdStatus},on:{click:function(t){return e.thresholdIssue(s)}}},[l("a-icon",{attrs:{type:"apartment"}})],1)],1),l("a-divider",{attrs:{type:"vertical"}}),l("a",{on:{click:function(t){return e.myHandleEdit(s)}}},[e._v("编辑")]),l("a-divider",{attrs:{type:"vertical"}}),l("a",{on:{click:function(t){return e.handleDetail(s)}}},[e._v("详情")]),l("a-divider",{attrs:{type:"vertical"}}),l("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(s.id)}}},[l("a",[e._v("删除")])])],1)}}])})],1),l("sensor-equipment-table-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),l("SensorThresholdIssueModal",{ref:"issueModalForm",on:{ok:e.modalFormOk}}),l("ToConfigureModalTwo",{ref:"toConfigureModalFrom",on:{ok:e.modalFormOk}})],1)},o=[],a=(l("6eb7"),l("ac0d")),i=l("b65a"),n=l("6865"),r=l("7d0a8"),d=(l("89f2"),l("f15f")),p={name:"ToConfigureList",mixins:[i["a"],a["b"]],components:{SensorEquipmentTableModal:n["default"],SensorThresholdIssueModal:r["default"],ToConfigureModalTwo:d["default"]},data:function(){return{description:"传感器管理页面",columns:[{title:"通道",align:"center",dataIndex:"passNumber"},{title:"传感器名称",align:"center",dataIndex:"equipmentName"},{title:"传感器类型",align:"center",dataIndex:"equipmentType_dictText"},{title:"阈值",align:"center",scopedSlots:{customRender:"threshold"}},{title:"操作",dataIndex:"action",align:"center",fixed:"right",width:170,scopedSlots:{customRender:"action"}}],url:{list:"/equipment/sensorEquipmentTable/listById",delete:"/equipment/sensorEquipmentTable/delete",deleteBatch:"/equipment/sensorEquipmentTable/deleteBatch",exportXlsUrl:"/equipment/sensorEquipmentTable/exportXls",importExcelUrl:"equipment/sensorEquipmentTable/importExcel"},dictOptions:{},superFieldList:[]}},created:function(){this.getSuperFieldList()},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{myHandleEdit:function(e){this.$refs.toConfigureModalFrom.edit(e),this.$refs.toConfigureModalFrom.title="编辑",this.$refs.toConfigureModalFrom.disableSubmit=!1},edit:function(e){this.queryParam.equipmentIdBelong=e,this.loadData(1)},unitCompute:function(e){var t="";switch(e.equipmentType){case"1":t="mA";break;case"2":case"3":t="℃";break;case"5":case"6":case"7":t="V";break;case"8":case"9":case"10":case"11":t="A";break;case"13":t="Mpa";break;case"14":t="m";break}return t},thresholdIssue:function(e){this.$refs.issueModalForm.edit(e),this.$refs.issueModalForm.title="阈值下发",this.$refs.issueModalForm.disableSubmit=!1},initDictConfig:function(){},getSuperFieldList:function(){var e=[];e.push({type:"string",value:"passNumber",text:"通道",dictCode:""}),e.push({type:"string",value:"equipmentName",text:"传感器名称",dictCode:""}),e.push({type:"string",value:"equipmentType",text:"传感器类型",dictCode:"sensor_type"}),e.push({type:"int",value:"faultState",text:"传感器状态",dictCode:"fault_state"}),e.push({type:"string",value:"sensorThreshold",text:"阈值",dictCode:""}),this.superFieldList=e}}},m=p,u=(l("67f6"),l("2877")),c=Object(u["a"])(m,s,o,!1,null,"9fe6206a",null);t["default"]=c.exports},"67f6":function(e,t,l){"use strict";var s=l("5101"),o=l.n(s);o.a},6865:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[l("sensor-equipment-table-form",{ref:"realForm",attrs:{disabled:e.disableSubmit},on:{ok:e.submitCallback}})],1)},o=[],a=l("b6a8"),i={name:"SensorEquipmentTableModal",components:{SensorEquipmentTableForm:a["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},n=i,r=l("2877"),d=Object(r["a"])(n,s,o,!1,null,null,null);t["default"]=d.exports},"71f2":function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("a-spin",{attrs:{spinning:e.confirmLoading}},[l("j-form-container",{attrs:{disabled:e.formDisabled}},[l("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[l("a-row",[l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1491780287409872897"==e.model.equipmentType,expression:"model.equipmentType=='1491780287409872897'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"阈值",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sensorThreshold"}},[l("a-input",{attrs:{placeholder:"请输入阈值",suffix:"mA"},model:{value:e.model.sensorThreshold,callback:function(t){e.$set(e.model,"sensorThreshold",t)},expression:"model.sensorThreshold"}})],1)],1),l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1491788513429872642"==e.model.equipmentType||"1491788545625350146"==e.model.equipmentType,expression:"model.equipmentType=='1491788513429872642'||model.equipmentType=='1491788545625350146'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"阈值",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sensorThreshold"}},[l("a-input",{attrs:{placeholder:"请输入阈值",suffix:"℃"},model:{value:e.model.sensorThreshold,callback:function(t){e.$set(e.model,"sensorThreshold",t)},expression:"model.sensorThreshold"}})],1)],1),l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1491788620313321474"==e.model.equipmentType||"1491788765696286721"==e.model.equipmentType||"1491788797833043970"==e.model.equipmentType,expression:"model.equipmentType=='1491788620313321474'||model.equipmentType=='1491788765696286721'||model.equipmentType=='1491788797833043970'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"阈值",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sensorThreshold"}},[l("a-input",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请输入阈值",suffix:"V"},model:{value:e.model.sensorThreshold,callback:function(t){e.$set(e.model,"sensorThreshold",t)},expression:"model.sensorThreshold"}}),l("span",{staticStyle:{float:"left",color:"#ffffff"}},[e._v("-")]),l("a-input",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请输入阈值",suffix:"V"},model:{value:e.model.sensorThresholdAfter,callback:function(t){e.$set(e.model,"sensorThresholdAfter",t)},expression:"model.sensorThresholdAfter"}})],1)],1),l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1491788872487460865"==e.model.equipmentType||"1491788903365926914"==e.model.equipmentType||"1491789078146768897"==e.model.equipmentType||"1491789131670282242"==e.model.equipmentType,expression:"model.equipmentType=='1491788872487460865'||model.equipmentType=='1491788903365926914'||model.equipmentType=='1491789078146768897'||model.equipmentType=='1491789131670282242'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"阈值",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sensorThreshold"}},[l("a-input",{attrs:{placeholder:"请输入阈值",suffix:"A"},model:{value:e.model.sensorThreshold,callback:function(t){e.$set(e.model,"sensorThreshold",t)},expression:"model.sensorThreshold"}})],1)],1),l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1491789201954234369"==e.model.equipmentType,expression:"model.equipmentType=='1491789201954234369'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"阈值",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sensorThreshold"}},[l("a-input",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请输入阈值",suffix:"Mpa"},model:{value:e.model.sensorThreshold,callback:function(t){e.$set(e.model,"sensorThreshold",t)},expression:"model.sensorThreshold"}}),l("span",{staticStyle:{float:"left",color:"#ffffff"}},[e._v("-")]),l("a-input",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请输入阈值",suffix:"Mpa"},model:{value:e.model.sensorThresholdAfter,callback:function(t){e.$set(e.model,"sensorThresholdAfter",t)},expression:"model.sensorThresholdAfter"}})],1)],1),l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1491789234858549250"==e.model.equipmentType,expression:"model.equipmentType=='1491789234858549250'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"阈值",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sensorThreshold"}},[l("a-input",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请输入阈值",suffix:"m"},model:{value:e.model.sensorThreshold,callback:function(t){e.$set(e.model,"sensorThreshold",t)},expression:"model.sensorThreshold"}}),l("span",{staticStyle:{float:"left",color:"#ffffff"}},[e._v("-")]),l("a-input",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请输入阈值",suffix:"m"},model:{value:e.model.sensorThresholdAfter,callback:function(t){e.$set(e.model,"sensorThresholdAfter",t)},expression:"model.sensorThresholdAfter"}})],1)],1)],1)],1)],1)],1)},o=[],a=l("0fea"),i=(l("ca00"),l("b775"),{name:"SensorThresholdIssueForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{serialNumber:[{required:!0,message:"请输入序列号!"}]},url:{add:"/equipment/sensorEquipmentTable/add",edit:"/equipment/sensorEquipmentTable/edit",queryById:"/equipment/sensorEquipmentTable/queryById",selectDepart:"/baseMethod/equipment/selectDepart"}}},computed:{formDisabled:function(){return this.disabled}},watch:{},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(l){if(l){t.confirmLoading=!0;var s="",o="";e.model.id?(s+=e.url.edit,o="put"):(s+=e.url.add,o="post"),Object(a["h"])(s,e.model,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}))},popupCallback:function(e,t){this.model=Object.assign(this.model,t)}}}),n=i,r=(l("8669"),l("2877")),d=Object(r["a"])(n,s,o,!1,null,"d79eb156",null);t["default"]=d.exports},"7d0a8":function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[l("SensorThresholdIssueForm",{ref:"realForm",attrs:{disabled:e.disableSubmit},on:{ok:e.submitCallback}})],1)},o=[],a=l("71f2"),i={name:"SensorThresholdIssueModal",components:{SensorThresholdIssueForm:a["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},n=i,r=l("2877"),d=Object(r["a"])(n,s,o,!1,null,null,null);t["default"]=d.exports},8669:function(e,t,l){"use strict";var s=l("9b3b"),o=l.n(s);o.a},"95a7":function(e,t,l){"use strict";var s=l("e447"),o=l.n(s);o.a},"9b3b":function(e,t,l){},b6a8:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("a-spin",{attrs:{spinning:e.confirmLoading}},[l("j-form-container",{attrs:{disabled:e.formDisabled}},[l("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[l("a-row",[l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1"===e.model.isAutoAdd,expression:"model.isAutoAdd === '1'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"通道",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"passNumber"}},[l("a-input",{attrs:{placeholder:"请输入序列号",disabled:"1"===e.model.isAutoAdd},model:{value:e.model.passNumber,callback:function(t){e.$set(e.model,"passNumber",t)},expression:"model.passNumber"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"序列号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"serialNumber"}},[l("a-input",{attrs:{placeholder:"请输入序列号",disabled:"1"===e.model.isAutoAdd},model:{value:e.model.serialNumber,callback:function(t){e.$set(e.model,"serialNumber",t)},expression:"model.serialNumber"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"传感器名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"equipmentName"}},[l("a-input",{attrs:{placeholder:"请输入传感器名称"},model:{value:e.model.equipmentName,callback:function(t){e.$set(e.model,"equipmentName",t)},expression:"model.equipmentName"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"传感器类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"equipmentType",required:"true"}},[l("a-select",{attrs:{placeholder:"请选择传感器类型",disabled:"1"===e.model.isAutoAdd},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),e._l(e.sensors,(function(t,s){return l("a-select-option",{key:s,attrs:{value:t.id}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:t.sensorTypeName||t.id}},[e._v("\n                   "+e._s(t.sensorTypeName||t.id)+"\n                ")])])}))],2)],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"所属区域",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"region"}},[l("j-dict-select-tag",{attrs:{type:"list",dictCode:"ufpp_monitor_area,area_name,id",placeholder:"请选择所属区域"},model:{value:e.model.region,callback:function(t){e.$set(e.model,"region",t)},expression:"model.region"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"详细位置",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"detailedLocation"}},[l("a-input",{attrs:{placeholder:"请输入详细位置"},model:{value:e.model.detailedLocation,callback:function(t){e.$set(e.model,"detailedLocation",t)},expression:"model.detailedLocation"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"所属设备",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"equipmentBelong",required:"true"}},[l("j-popup",{attrs:{field:"equipmentBelong","org-fields":"equipment_name,id","dest-fields":"equipmentBelong,equipmentIdBelong",code:"sensor_belong_equipment",multi:!1,disabled:"1"===e.model.isAutoAdd},on:{input:e.popupCallback},model:{value:e.model.equipmentBelong,callback:function(t){e.$set(e.model,"equipmentBelong",t)},expression:"model.equipmentBelong"}})],1)],1)],1)],1)],1)],1)},o=[],a=l("0fea"),i=(l("ca00"),l("b775")),n={name:"SensorEquipmentTableForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{sensors:[],model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{serialNumber:[{required:!0,message:"请输入序列号!"}]},url:{add:"/equipment/sensorEquipmentTable/add",edit:"/equipment/sensorEquipmentTable/edit",queryById:"/equipment/sensorEquipmentTable/queryById",selectSensorByIsAutoAdd:"/equipment/sensorEquipmentTable/selectSensorByIsAutoAdd"}}},computed:{formDisabled:function(){return this.disabled}},watch:{"model.isAutoAdd":{immediate:!0,handler:function(e,t){var l=this;i["b"].get(this.url.selectSensorByIsAutoAdd,{params:{isAutoAdd:e}}).then((function(e){l.sensors=e.result}))}}},created:function(){var e=this;this.modelDefault=JSON.parse(JSON.stringify(this.model)),i["b"].get(this.url.selectSensorByIsAutoAdd,{params:{isAutoAdd:"0"}}).then((function(t){e.sensors=t.result}))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(l){if(l){t.confirmLoading=!0;var s="",o="";e.model.id?(s+=e.url.edit,o="put"):(s+=e.url.add,o="post"),Object(a["h"])(s,e.model,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}))},popupCallback:function(e,t){this.model=Object.assign(this.model,t)}}},r=n,d=(l("95a7"),l("2877")),p=Object(d["a"])(r,s,o,!1,null,"074156c5",null);t["default"]=p.exports},bd82:function(e,t,l){"use strict";var s=l("3e4a"),o=l.n(s);o.a},e447:function(e,t,l){},e964:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("a-spin",{attrs:{spinning:e.confirmLoading}},[l("j-form-container",{attrs:{disabled:e.formDisabled}},[l("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[l("a-row",[l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"传感器类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"equipmentType",required:"true"}},["1488478696745455618"!==this.equipmentIdBelong||1!=e.model.passNumber&&2!=e.model.passNumber&&3!=e.model.passNumber&&4!=e.model.passNumber?e._e():l("a-select",{attrs:{placeholder:"请选择传感器类型"},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),l("a-select-option",{attrs:{value:"1491780287409872897"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"剩余电流传感器"}},[e._v("\n                   "+e._s("剩余电流传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"1491788513429872642"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"电气温度传感器"}},[e._v("\n                   "+e._s("电气温度传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"x"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"禁用"}},[e._v("\n                   "+e._s("禁用")+"\n                ")])])],1),"1488478696745455618"===this.equipmentIdBelong&&5==e.model.passNumber?l("a-select",{attrs:{placeholder:"请选择传感器类型"},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),l("a-select-option",{attrs:{value:"1491788545625350146"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"温度传感器"}},[e._v("\n                   "+e._s("温度传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"x"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"禁用"}},[e._v("\n                   "+e._s("禁用")+"\n                ")])])],1):e._e(),"1488478696745455618"===this.equipmentIdBelong&&6==e.model.passNumber?l("a-select",{attrs:{placeholder:"请选择传感器类型"},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),l("a-select-option",{attrs:{value:"1491788581801222145"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"故障电弧传感器"}},[e._v("\n                   "+e._s("故障电弧传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"x"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"禁用"}},[e._v("\n                   "+e._s("禁用")+"\n                ")])])],1):e._e(),"1488478696745455618"===this.equipmentIdBelong&&7==e.model.passNumber?l("a-select",{attrs:{placeholder:"请选择传感器类型"},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),l("a-select-option",{attrs:{value:"1491788620313321474"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"A相电压传感器"}},[e._v("\n                   "+e._s("A相电压传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"x"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"禁用"}},[e._v("\n                   "+e._s("禁用")+"\n                ")])])],1):e._e(),"1488478696745455618"===this.equipmentIdBelong&&8==e.model.passNumber?l("a-select",{attrs:{placeholder:"请选择传感器类型"},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),l("a-select-option",{attrs:{value:"1491788765696286721"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"B相电压传感器"}},[e._v("\n                   "+e._s("B相电压传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"x"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"禁用"}},[e._v("\n                   "+e._s("禁用")+"\n                ")])])],1):e._e(),"1488478696745455618"===this.equipmentIdBelong&&9==e.model.passNumber?l("a-select",{attrs:{placeholder:"请选择传感器类型"},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),l("a-select-option",{attrs:{value:"1491788797833043970"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"C相电压传感器"}},[e._v("\n                   "+e._s("C相电压传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"x"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"禁用"}},[e._v("\n                   "+e._s("禁用")+"\n                ")])])],1):e._e(),"1488478696745455618"===this.equipmentIdBelong&&10==e.model.passNumber?l("a-select",{attrs:{placeholder:"请选择传感器类型"},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),l("a-select-option",{attrs:{value:"1491788872487460865"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"A相电流传感器"}},[e._v("\n                   "+e._s("A相电流传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"x"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"禁用"}},[e._v("\n                   "+e._s("禁用")+"\n                ")])])],1):e._e(),"1488478696745455618"===this.equipmentIdBelong&&11==e.model.passNumber?l("a-select",{attrs:{placeholder:"请选择传感器类型"},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),l("a-select-option",{attrs:{value:"1491788903365926914"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"B相电流传感器"}},[e._v("\n                   "+e._s("B相电流传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"x"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"禁用"}},[e._v("\n                   "+e._s("禁用")+"\n                ")])])],1):e._e(),"1488478696745455618"===this.equipmentIdBelong&&12==e.model.passNumber?l("a-select",{attrs:{placeholder:"请选择传感器类型"},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),l("a-select-option",{attrs:{value:"1491789078146768897"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"C相电流传感器"}},[e._v("\n                   "+e._s("C相电流传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"x"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"禁用"}},[e._v("\n                   "+e._s("禁用")+"\n                ")])])],1):e._e(),"1488478696745455618"===this.equipmentIdBelong&&13==e.model.passNumber?l("a-select",{attrs:{placeholder:"请选择传感器类型"},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),l("a-select-option",{attrs:{value:"1491789131670282242"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"N相电流传感器"}},[e._v("\n                   "+e._s("N相电流传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"x"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"禁用"}},[e._v("\n                   "+e._s("禁用")+"\n                ")])])],1):e._e(),"1488478696745455618"===this.equipmentIdBelong&&15==e.model.passNumber?l("a-select",{attrs:{placeholder:"请选择传感器类型"},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),l("a-select-option",{attrs:{value:"1491789162334838786"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"湿度传感器"}},[e._v("\n                   "+e._s("湿度传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"x"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"禁用"}},[e._v("\n                   "+e._s("禁用")+"\n                ")])])],1):e._e(),"1488483600067186689"===this.equipmentModel&&1==e.model.passNumber?l("a-select",{attrs:{placeholder:"请选择传感器类型"},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),l("a-select-option",{attrs:{value:"1491789201954234369"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"水压传感器"}},[e._v("\n                   "+e._s("水压传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"x"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"禁用"}},[e._v("\n                   "+e._s("禁用")+"\n                ")])])],1):e._e(),"1488483280272478210"!==this.equipmentModel&&"1488483208205946882"!==this.equipmentModel||1!=e.model.passNumber&&2!=e.model.passNumber?e._e():l("a-select",{attrs:{placeholder:"请选择传感器类型"},model:{value:e.model.equipmentType,callback:function(t){e.$set(e.model,"equipmentType",t)},expression:"model.equipmentType"}},[l("a-select-option",{attrs:{value:void 0}},[e._v("请选择")]),l("a-select-option",{attrs:{value:"1491789201954234369"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"水压传感器"}},[e._v("\n                   "+e._s("水压传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"1491789234858549250"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"液位传感器"}},[e._v("\n                   "+e._s("液位传感器")+"\n                ")])]),l("a-select-option",{attrs:{value:"x"}},[l("span",{staticStyle:{display:"inline-block",width:"100%"},attrs:{title:"禁用"}},[e._v("\n                   "+e._s("禁用")+"\n                ")])])],1)],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"传感器名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"equipmentName"}},[l("a-input",{attrs:{placeholder:"请输入传感器名称"},model:{value:e.model.equipmentName,callback:function(t){e.$set(e.model,"equipmentName",t)},expression:"model.equipmentName"}})],1)],1),l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1491780287409872897"==e.model.equipmentType,expression:"model.equipmentType=='1491780287409872897'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"阈值",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sensorThreshold"}},[l("a-input",{attrs:{placeholder:"请输入阈值",suffix:"mA"},model:{value:e.model.sensorThreshold,callback:function(t){e.$set(e.model,"sensorThreshold",t)},expression:"model.sensorThreshold"}})],1)],1),l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1491788513429872642"==e.model.equipmentType||"1491788545625350146"==e.model.equipmentType,expression:"model.equipmentType=='1491788513429872642'||model.equipmentType=='1491788545625350146'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"阈值",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sensorThreshold"}},[l("a-input",{attrs:{placeholder:"请输入阈值",suffix:"℃"},model:{value:e.model.sensorThreshold,callback:function(t){e.$set(e.model,"sensorThreshold",t)},expression:"model.sensorThreshold"}})],1)],1),l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1491788620313321474"==e.model.equipmentType||"1491788765696286721"==e.model.equipmentType||"1491788797833043970"==e.model.equipmentType,expression:"model.equipmentType=='1491788620313321474'||model.equipmentType=='1491788765696286721'||model.equipmentType=='1491788797833043970'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"阈值",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sensorThreshold"}},[l("a-input",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请输入阈值",suffix:"V"},model:{value:e.model.sensorThreshold,callback:function(t){e.$set(e.model,"sensorThreshold",t)},expression:"model.sensorThreshold"}}),l("span",{staticStyle:{float:"left",color:"#ffffff"}},[e._v("-")]),l("a-input",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请输入阈值",suffix:"V"},model:{value:e.model.sensorThresholdAfter,callback:function(t){e.$set(e.model,"sensorThresholdAfter",t)},expression:"model.sensorThresholdAfter"}})],1)],1),l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1491788872487460865"==e.model.equipmentType||"1491788903365926914"==e.model.equipmentType||"1491789078146768897"==e.model.equipmentType||"1491789131670282242"==e.model.equipmentType,expression:"model.equipmentType=='1491788872487460865'||model.equipmentType=='1491788903365926914'||model.equipmentType=='1491789078146768897'||model.equipmentType=='1491789131670282242'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"阈值",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sensorThreshold"}},[l("a-input",{attrs:{placeholder:"请输入阈值",suffix:"A"},model:{value:e.model.sensorThreshold,callback:function(t){e.$set(e.model,"sensorThreshold",t)},expression:"model.sensorThreshold"}})],1)],1),l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1491789162334838786"==e.model.equipmentType,expression:"model.equipmentType=='1491789162334838786'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"阈值",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sensorThreshold"}},[l("a-input",{attrs:{placeholder:"请输入阈值",suffix:"%RH"},model:{value:e.model.sensorThreshold,callback:function(t){e.$set(e.model,"sensorThreshold",t)},expression:"model.sensorThreshold"}})],1)],1),l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1491789201954234369"==e.model.equipmentType,expression:"model.equipmentType=='1491789201954234369'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"阈值",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sensorThreshold"}},[l("a-input",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请输入阈值",suffix:"Mpa"},model:{value:e.model.sensorThreshold,callback:function(t){e.$set(e.model,"sensorThreshold",t)},expression:"model.sensorThreshold"}}),l("span",{staticStyle:{float:"left",color:"#ffffff"}},[e._v("-")]),l("a-input",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请输入阈值",suffix:"Mpa"},model:{value:e.model.sensorThresholdAfter,callback:function(t){e.$set(e.model,"sensorThresholdAfter",t)},expression:"model.sensorThresholdAfter"}})],1)],1),l("a-col",{directives:[{name:"show",rawName:"v-show",value:"1491789234858549250"==e.model.equipmentType,expression:"model.equipmentType=='1491789234858549250'"}],attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"阈值",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sensorThreshold"}},[l("a-input",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请输入阈值",suffix:"m"},model:{value:e.model.sensorThreshold,callback:function(t){e.$set(e.model,"sensorThreshold",t)},expression:"model.sensorThreshold"}}),l("span",{staticStyle:{float:"left",color:"#ffffff"}},[e._v("-")]),l("a-input",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请输入阈值",suffix:"m"},model:{value:e.model.sensorThresholdAfter,callback:function(t){e.$set(e.model,"sensorThresholdAfter",t)},expression:"model.sensorThresholdAfter"}})],1)],1)],1)],1)],1)],1)},o=[],a=l("0fea"),i=(l("ca00"),l("b775")),n={name:"ToConfigureForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{equipmentIdBelong:"",equipmentModel:"",allResult:[],model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{serialNumber:[{required:!0,message:"请输入序列号!"}]},url:{add:"/equipment/sensorEquipmentTable/add",edit:"/equipment/sensorEquipmentTable/edit",queryById:"/equipment/sensorEquipmentTable/queryById",selectSensorById:"/equipment/equipmentTable/selectSensorById",selectEqTypeById:"/equipment/equipmentTable/selectEqTypeById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){var t=this;i["b"].get(this.url.selectEqTypeById,{params:{id:e.equipmentIdBelong}}).then((function(e){t.equipmentIdBelong=e.result.equipmentType,t.equipmentModel=e.result.equipmentModel})),this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(l){if(l){t.confirmLoading=!0;var s="",o="";e.model.id?(s+=e.url.edit,o="put"):(s+=e.url.add,o="post"),Object(a["h"])(s,e.model,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}))},popupCallback:function(e,t){this.model=Object.assign(this.model,t)}}},r=n,d=(l("bd82"),l("2877")),p=Object(d["a"])(r,s,o,!1,null,"14d7522c",null);t["default"]=p.exports},f15f:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[l("ToConfigureForm",{ref:"realForm",attrs:{disabled:e.disableSubmit},on:{ok:e.submitCallback}})],1)},o=[],a=l("e964"),i={name:"ToConfigureModal",components:{ToConfigureForm:a["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},n=i,r=l("2877"),d=Object(r["a"])(n,s,o,!1,null,null,null);t["default"]=d.exports}}]);