(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2545fcf4","chunk-091a690d","chunk-2d0d5c0b"],{"1ae9":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}})],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("ufpp维保单关联设备")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),a("j-super-query",{ref:"superQueryModal",attrs:{fieldList:e.superFieldList},on:{handleSuperQuery:e.handleSuperQuery}}),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",scroll:{x:!0},bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"htmlSlot",fn:function(t){return[a("div",{domProps:{innerHTML:e._s(t)}})]}},{key:"imgSlot",fn:function(t){return[t?a("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:e.getImgView(t),height:"25px",alt:""}}):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无图片")])]}},{key:"fileSlot",fn:function(t){return[t?a("a-button",{attrs:{ghost:!0,type:"primary",icon:"download",size:"small"},on:{click:function(a){return e.downloadFile(t)}}},[e._v("\n          下载\n        ")]):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无文件")])]}},{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(i)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(t){return e.handleDetail(i)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(i.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("repair-bill-equipment-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},l=[],n=(a("6eb7"),a("ac0d")),r=a("b65a"),o=a("d2f1"),s={name:"RepairBillEquipmentList",mixins:[r["a"],n["b"]],components:{RepairBillEquipmentModal:o["default"]},data:function(){return{description:"ufpp维保单关联设备管理页面",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"维保单id",align:"center",dataIndex:"repairBillId"},{title:"设备id",align:"center",dataIndex:"equipmentId"},{title:"过期/异常过多/故障/其他",align:"center",dataIndex:"cause"},{title:"完成状态：0：已完成，1：未完成",align:"center",dataIndex:"state"},{title:"操作",dataIndex:"action",align:"center",fixed:"right",width:147,scopedSlots:{customRender:"action"}}],url:{list:"/repair/repairBillEquipment/list",delete:"/repair/repairBillEquipment/delete",deleteBatch:"/repair/repairBillEquipment/deleteBatch",exportXlsUrl:"/repair/repairBillEquipment/exportXls",importExcelUrl:"repair/repairBillEquipment/importExcel"},dictOptions:{},superFieldList:[]}},created:function(){this.getSuperFieldList()},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{initDictConfig:function(){},getSuperFieldList:function(){var e=[];e.push({type:"string",value:"repairBillId",text:"维保单id",dictCode:""}),e.push({type:"string",value:"equipmentId",text:"设备id",dictCode:""}),e.push({type:"string",value:"cause",text:"过期/异常过多/故障/其他",dictCode:""}),e.push({type:"int",value:"state",text:"完成状态：0：已完成，1：未完成",dictCode:""}),this.superFieldList=e}}},d=s,c=(a("7d34"),a("2877")),u=Object(c["a"])(d,i,l,!1,null,"361a36a6",null);t["default"]=u.exports},"6dd3":function(e,t,a){},7040:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("j-form-container",{attrs:{disabled:e.formDisabled}},[a("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"维保单id",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"repairBillId"}},[a("a-input",{attrs:{placeholder:"请输入维保单id"},model:{value:e.model.repairBillId,callback:function(t){e.$set(e.model,"repairBillId",t)},expression:"model.repairBillId"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"设备id",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"equipmentId"}},[a("a-input",{attrs:{placeholder:"请输入设备id"},model:{value:e.model.equipmentId,callback:function(t){e.$set(e.model,"equipmentId",t)},expression:"model.equipmentId"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"过期/异常过多/故障/其他",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"cause"}},[a("a-input",{attrs:{placeholder:"请输入过期/异常过多/故障/其他"},model:{value:e.model.cause,callback:function(t){e.$set(e.model,"cause",t)},expression:"model.cause"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"完成状态：0：已完成，1：未完成",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"state"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入完成状态：0：已完成，1：未完成"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1)],1)],1)],1)],1)],1)},l=[],n=a("0fea"),r=(a("ca00"),{name:"RepairBillEquipmentForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/repair/repairBillEquipment/add",edit:"/repair/repairBillEquipment/edit",queryById:"/repair/repairBillEquipment/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(a){t.confirmLoading=!0;var i="",l="";e.model.id?(i+=e.url.edit,l="put"):(i+=e.url.add,l="post"),Object(n["h"])(i,e.model,l).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}))}}}),o=r,s=a("2877"),d=Object(s["a"])(o,i,l,!1,null,null,null);t["default"]=d.exports},"7d34":function(e,t,a){"use strict";var i=a("6dd3"),l=a.n(i);l.a},d2f1:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("repair-bill-equipment-form",{ref:"realForm",attrs:{disabled:e.disableSubmit},on:{ok:e.submitCallback}})],1)},l=[],n=a("7040"),r={name:"RepairBillEquipmentModal",components:{RepairBillEquipmentForm:n["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},o=r,s=a("2877"),d=Object(s["a"])(o,i,l,!1,null,null,null);t["default"]=d.exports}}]);