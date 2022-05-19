(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c71ee21c","chunk-59924308"],{"15f0":function(e,t,a){"use strict";var r=a("e33b"),o=a.n(r);o.a},"63e1":function(e,t,a){},"8a45":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol,model:e.orderMainModel,rules:e.validatorRules}},[a("a-row",{staticClass:"form-row",attrs:{gutter:16}},[a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单号",required:"",prop:"orderCode"}},[a("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.orderMainModel.orderCode,callback:function(t){e.$set(e.orderMainModel,"orderCode",t)},expression:"orderMainModel.orderCode"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单类型",prop:"ctype"}},[a("a-select",{attrs:{placeholder:"请选择订单类型"},model:{value:e.orderMainModel.ctype,callback:function(t){e.$set(e.orderMainModel,"ctype",t)},expression:"orderMainModel.ctype"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单日期",prop:"orderDate"}},[a("a-date-picker",{attrs:{showTime:"",valueFormat:"YYYY-MM-DD HH:mm:ss"},model:{value:e.orderMainModel.orderDate,callback:function(t){e.$set(e.orderMainModel,"orderDate",t)},expression:"orderMainModel.orderDate"}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:16}},[a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单金额",prop:"orderMoney"}},[a("a-input-number",{staticStyle:{width:"200px"},model:{value:e.orderMainModel.orderMoney,callback:function(t){e.$set(e.orderMainModel,"orderMoney",t)},expression:"orderMainModel.orderMoney"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单备注",prop:"content"}},[a("a-input",{attrs:{placeholder:"请输入订单备注"},model:{value:e.orderMainModel.content,callback:function(t){e.$set(e.orderMainModel,"content",t)},expression:"orderMainModel.content"}})],1)],1)],1),a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"客户信息"}},[a("div",[a("a-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[a("a-col",{attrs:{span:5}},[e._v("客户名")]),a("a-col",{attrs:{span:5}},[e._v("性别")]),a("a-col",{attrs:{span:6}},[e._v("身份证号码")]),a("a-col",{attrs:{span:6}},[e._v("手机号")]),a("a-col",{attrs:{span:2}},[e._v("操作")])],1),e._l(e.orderMainModel.jeecgOrderCustomerList,(function(t,r){return a("a-row",{key:r,staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[a("a-col",{staticStyle:{display:"none"},attrs:{span:6}},[a("a-form-model-item",[a("a-input",{attrs:{placeholder:"id"},model:{value:t.id,callback:function(a){e.$set(t,"id",a)},expression:"item.id"}})],1)],1),a("a-col",{attrs:{span:5}},[a("a-form-model-item",[a("a-input",{attrs:{placeholder:"客户名"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1)],1),a("a-col",{attrs:{span:5}},[a("a-form-model-item",[a("a-select",{attrs:{placeholder:"性别"},model:{value:t.sex,callback:function(a){e.$set(t,"sex",a)},expression:"item.sex"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("男")]),a("a-select-option",{attrs:{value:"2"}},[e._v("女")])],1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-model-item",{attrs:{prop:"jeecgOrderCustomerList."+r+".idcard",rules:[{required:!0,message:"请输入身份证号",trigger:"blur"},{pattern:e.rules.IDCard,message:"身份证号格式不对!"}]}},[a("a-input",{attrs:{placeholder:"身份证号"},model:{value:t.idcard,callback:function(a){e.$set(t,"idcard",a)},expression:"item.idcard"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-model-item",{attrs:{prop:"jeecgOrderCustomerList."+r+".telphone",rules:e.rules.mobile}},[a("a-input",{attrs:{placeholder:"手机号"},model:{value:t.telphone,callback:function(a){e.$set(t,"telphone",a)},expression:"item.telphone"}})],1)],1),a("a-col",{attrs:{span:2}},[a("a-form-model-item",[a("a-icon",{staticStyle:{fontSize:"20px"},attrs:{type:"minus-circle"},on:{click:function(t){return e.delRowCustom(r)}}})],1)],1)],1)})),a("a-button",{staticStyle:{width:"98%","margin-top":"10px"},attrs:{type:"dashed"},on:{click:e.addRowCustom}},[a("a-icon",{attrs:{type:"plus"}}),e._v(" 添加客户信息\n            ")],1)],2)]),a("a-tab-pane",{key:"2",attrs:{tab:"机票信息",forceRender:""}},[a("div",[a("a-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[a("a-col",{attrs:{span:6}},[e._v("航班号")]),a("a-col",{attrs:{span:6}},[e._v("航班时间")]),a("a-col",{attrs:{span:6}},[e._v("操作")])],1),e._l(e.orderMainModel.jeecgOrderTicketList,(function(t,r){return a("a-row",{key:r,staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[a("a-col",{staticStyle:{display:"none"},attrs:{span:6}},[a("a-form-model-item",[a("a-input",{attrs:{placeholder:"id"},model:{value:t.id,callback:function(a){e.$set(t,"id",a)},expression:"item.id"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-model-item",{attrs:{prop:"jeecgOrderTicketList."+r+".ticketCode",rules:{required:!0,message:"请输入航班号",trigger:"blur"}}},[a("a-input",{attrs:{placeholder:"航班号"},model:{value:t.ticketCode,callback:function(a){e.$set(t,"ticketCode",a)},expression:"item.ticketCode"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-model-item",[a("a-date-picker",{attrs:{placeholder:"航班时间",valueFormat:"YYYY-MM-DD"},model:{value:t.tickectDate,callback:function(a){e.$set(t,"tickectDate",a)},expression:"item.tickectDate"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-model-item",[a("a-icon",{staticStyle:{fontSize:"20px"},attrs:{type:"minus-circle"},on:{click:function(t){return e.delRowTicket(r)}}})],1)],1)],1)})),a("a-button",{staticStyle:{width:"98%","margin-top":"10px"},attrs:{type:"dashed"},on:{click:e.addRowTicket}},[a("a-icon",{attrs:{type:"plus"}}),e._v(" 添加机票信息\n            ")],1)],2)])],1)],1)],1)],1)},o=[],i=a("0fea"),n=a("2dab"),l={name:"JeecgOrderMainModal",components:{JDate:n["default"]},data:function(){return{title:"操作",visible:!1,orderMainModel:{jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{orderCode:[{required:!0,message:"订单号不能为空",trigger:"blur"}]},url:{add:"/test/jeecgOrderMain/add",edit:"/test/jeecgOrderMain/edit",orderCustomerList:"/test/jeecgOrderMain/queryOrderCustomerListByMainId",orderTicketList:"/test/jeecgOrderMain/queryOrderTicketListByMainId"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;if(this.orderMainModel=Object.assign({jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},e),this.orderMainModel.id){var a={id:this.orderMainModel.id};Object(i["c"])(this.url.orderCustomerList,a).then((function(e){e.success&&(t.orderMainModel.jeecgOrderCustomerList=e.result,t.$forceUpdate())})),Object(i["c"])(this.url.orderTicketList,a).then((function(e){e.success&&(t.orderMainModel.jeecgOrderTicketList=e.result,t.$forceUpdate())}))}this.visible=!0},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(a){t.confirmLoading=!0;var r="",o="";e.orderMainModel.id?(r+=e.url.edit,o="put"):(r+=e.url.add,o="post"),Object(i["h"])(r,e.orderMainModel,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},addRowCustom:function(){this.orderMainModel.jeecgOrderCustomerList.push({}),this.$forceUpdate()},delRowCustom:function(e){var t=this.orderMainModel;t["jeecgOrderCustomerList"].splice(e,1),this.orderMainModel.jeecgOrderCustomerList.splice(e,1),this.$forceUpdate()},addRowTicket:function(){this.orderMainModel.jeecgOrderTicketList.push({}),this.$forceUpdate()},delRowTicket:function(e){var t=this.orderMainModel;t["jeecgOrderTicketList"].splice(e,1),this.orderMainModel.jeecgOrderTicketList.splice(e,1),this.$forceUpdate()}}},s=l,c=(a("a340"),a("2877")),d=Object(c["a"])(s,r,o,!1,null,"f5211f06",null);t["default"]=d.exports},"9b15":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单号"}},[a("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.queryParam.orderCode,callback:function(t){e.$set(e.queryParam,"orderCode",t)},expression:"queryParam.orderCode"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单类型"}},[a("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.queryParam.ctype,callback:function(t){e.$set(e.queryParam,"ctype",t)},expression:"queryParam.ctype"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("一对多示例")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("jeecgOrderMain-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},o=[],i=a("8a45"),n=a("b65a"),l={name:"JeecgOrderMainList",mixins:[n["a"]],components:{JeecgOrderMainModal:i["default"]},data:function(){return{description:"订单管理页面",importExcelUrl:"".concat(window._CONFIG["domianURL"],"/test/jeecgOrderMain/importExcel"),columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"订单号",align:"center",dataIndex:"orderCode"},{title:"订单类型",align:"center",dataIndex:"ctype",customRender:function(e,t,a){var r="";return"1"===e?r="国内订单":"2"===e&&(r="国际订单"),r}},{title:"订单日期",align:"center",dataIndex:"orderDate"},{title:"订单金额",align:"center",dataIndex:"orderMoney"},{title:"订单备注",align:"center",dataIndex:"content"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/test/jeecgOrderMain/list",delete:"/test/jeecgOrderMain/delete",deleteBatch:"/test/jeecgOrderMain/deleteBatch",exportXlsUrl:"/test/jeecgOrderMain/exportXls"}}},methods:{}},s=l,c=(a("15f0"),a("2877")),d=Object(c["a"])(s,r,o,!1,null,"7e1cf2f8",null);t["default"]=d.exports},a340:function(e,t,a){"use strict";var r=a("63e1"),o=a.n(r);o.a},e33b:function(e,t,a){}}]);