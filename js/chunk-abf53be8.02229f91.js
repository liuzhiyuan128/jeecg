(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abf53be8","chunk-22d93a32"],{"5c4b":function(e,t,a){"use strict";var r=a("779e"),n=a.n(r);n.a},"779e":function(e,t,a){},8428:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单号"}},[a("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.queryParam.orderCode,callback:function(t){e.$set(e.queryParam,"orderCode",t)},expression:"queryParam.orderCode"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单类型"}},[a("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.queryParam.ctype,callback:function(t){e.$set(e.queryParam,"ctype",t)},expression:"queryParam.ctype"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:!1,expandedRowKeys:e.expandedRowKeys,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange,expand:e.handleExpand},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)}},{key:"expandedRowRender",fn:function(t){return a("a-table",{attrs:{columns:e.innerColumns,dataSource:e.innerData,size:"middle",bordered:"",rowKey:"id",pagination:!1,loading:e.loading}})}}])})],1),a("jeecgOrderDMain-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},n=[],o=a("0fea"),l=a("dd9d"),i=a("b65a"),d={name:"TableDemo",mixins:[i["a"]],components:{JeecgOrderDMainModal:l["default"]},data:function(){return{innerColumns:[{title:"客户名",align:"center",width:100,dataIndex:"name",key:"name"},{title:"性别",align:"center",dataIndex:"sex",customRender:function(e){return 1==e?"男":2==e?"女":e}},{title:"身份证号码",align:"center",dataIndex:"idcard"},{title:"电话",dataIndex:"telphone",align:"center"}],innerData:[],expandedRowKeys:[],id:" ",description:"列表展开子表Demo",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"订单号",align:"center",dataIndex:"orderCode"},{title:"订单类型",align:"center",dataIndex:"ctype",customRender:function(e){var t="";return"1"===e?t="国内订单":"2"===e&&(t="国际订单"),t}},{title:"订单日期",align:"center",dataIndex:"orderDate"},{title:"订单金额",align:"center",dataIndex:"orderMoney"},{title:"订单备注",align:"center",dataIndex:"content"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],type:"radio",url:{list:"/test/order/orderList",delete:"/test/order/delete",deleteBatch:"/test/order/deleteBatch",customerListByMainId:"/test/order/listOrderCustomerByMainId"}}},computed:{currentId:function(){return this.id}},methods:{handleExpand:function(e,t){var a=this;this.expandedRowKeys=[],this.innerData=[],!0===e&&(this.loading=!0,this.expandedRowKeys.push(t.id),Object(o["c"])(this.url.customerListByMainId,{mainId:t.id}).then((function(e){e.success&&(a.loading=!1,a.innerData=e.result.records)})))}}},s=d,c=(a("5c4b"),a("2877")),u=Object(c["a"])(s,r,n,!1,null,"24d3d77e",null);t["default"]=u.exports},9775:function(e,t,a){},dd9d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{model:e.orderMainModel,rules:e.validatorRules}},[a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"orderCode",label:"订单号",required:"",hasFeedback:""}},[a("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.orderMainModel.orderCode,callback:function(t){e.$set(e.orderMainModel,"orderCode",t)},expression:"orderMainModel.orderCode"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[a("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.orderMainModel.ctype,callback:function(t){e.$set(e.orderMainModel,"ctype",t)},expression:"orderMainModel.ctype"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[a("a-date-picker",{attrs:{showTime:"",valueFormat:"YYYY-MM-DD HH:mm:ss"},model:{value:e.orderMainModel.orderDate,callback:function(t){e.$set(e.orderMainModel,"orderDate",t)},expression:"orderMainModel.orderDate"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[a("a-input-number",{staticStyle:{width:"200px"},model:{value:e.orderMainModel.orderMoney,callback:function(t){e.$set(e.orderMainModel,"orderMoney",t)},expression:"orderMainModel.orderMoney"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[a("a-input",{attrs:{placeholder:"请输入订单备注"},model:{value:e.orderMainModel.content,callback:function(t){e.$set(e.orderMainModel,"content",t)},expression:"orderMainModel.content"}})],1)],1)],1)],1)},n=[],o=a("0fea"),l=a("2dab"),i=(a("88bc"),a("c1df"),{name:"JeecgOrderDMainModal",components:{JDate:l["default"]},data:function(){return{title:"操作",visible:!1,orderMainModel:{jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{orderCode:[{required:!0,message:"请输入订单号!"}]},url:{add:"/test/order/add",edit:"/test/order/edit",orderCustomerList:"/test/order/listOrderCustomerByMainId",orderTicketList:"/test/order/listOrderTicketByMainId"}}},methods:{add:function(){this.edit({})},edit:function(e){this.orderMainModel=Object.assign({},e),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(!a)return!1;t.confirmLoading=!0;var r="",n="";e.orderMainModel.id?(r+=e.url.edit,n="put"):(r+=e.url.add,n="post"),Object(o["h"])(r,e.orderMainModel,n).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()}}}),d=i,s=(a("f271"),a("2877")),c=Object(s["a"])(d,r,n,!1,null,"0fe69b4b",null);t["default"]=c.exports},f271:function(e,t,a){"use strict";var r=a("9775"),n=a.n(r);n.a}}]);