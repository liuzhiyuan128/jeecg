(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57e9f3fe","chunk-77006a64"],{"59a3":function(e,t,a){"use strict";var l=a("8310"),r=a.n(l);r.a},8310:function(e,t,a){},b2da:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单号"}},[a("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.queryParam.orderCode,callback:function(t){e.$set(e.queryParam,"orderCode",t)},expression:"queryParam.orderCode"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单类型"}},[a("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.queryParam.ctype,callback:function(t){e.$set(e.queryParam,"ctype",t)},expression:"queryParam.ctype"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),a("span",[e._v("已选择")]),a("a",{staticStyle:{"font-weight":"600"}},[e._v("\n        "+e._s(e.selectedRowKeys.length)+"\n      ")]),a("span",[e._v("项")]),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,l){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(l)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(l.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("jeecg-order-modal-for-j-editable-table",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},r=[],n=a("b65a"),o=a("b8ad3"),i={name:"JeecgOrderMainListForJEditableTable",mixins:[n["a"]],components:{JeecgOrderModalForJEditableTable:o["default"]},data:function(){return{description:"订单管理页面",url:{list:"/test/jeecgOrderMain/list",delete:"/test/jeecgOrderMain/delete",deleteBatch:"/test/jeecgOrderMain/deleteBatch"},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"订单号",align:"center",dataIndex:"orderCode"},{title:"订单类型",align:"center",dataIndex:"ctype",customRender:function(e){var t="";return"1"===e?t="国内订单":"2"===e&&(t="国际订单"),t}},{title:"订单日期",align:"center",dataIndex:"orderDate"},{title:"订单金额",align:"center",dataIndex:"orderMoney"},{title:"订单备注",align:"center",dataIndex:"content"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}]}},methods:{initDictConfig:function(){}}},s=i,c=(a("59a3"),a("2877")),d=Object(c["a"])(s,l,r,!1,null,"34e080b0",null);t["default"]=d.exports},b8ad3:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol,model:e.model}},[a("a-row",{staticClass:"form-row",attrs:{gutter:0}},[a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单号",prop:"orderCode",rules:[{required:!0,message:"请输入订单号!"}]}},[a("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.model.orderCode,callback:function(t){e.$set(e.model,"orderCode",t)},expression:"model.orderCode"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单类型"}},[a("a-select",{attrs:{placeholder:"请选择订单类型"},model:{value:e.model.ctype,callback:function(t){e.$set(e.model,"ctype",t)},expression:"model.ctype"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单日期"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{showTime:"",valueFormat:"YYYY-MM-DD HH:mm:ss"},model:{value:e.model.orderDate,callback:function(t){e.$set(e.model,"orderDate",t)},expression:"model.orderDate"}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:0}},[a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单金额"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入订单金额"},model:{value:e.model.orderMoney,callback:function(t){e.$set(e.model,"orderMoney",t)},expression:"model.orderMoney"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-model-item",{attrs:{label:"订单备注"}},[a("a-input",{attrs:{placeholder:"请输入订单备注"},model:{value:e.model.content,callback:function(t){e.$set(e.model,"content",t)},expression:"model.content"}})],1)],1)],1)],1),a("a-tabs",{on:{change:e.handleChangeTabs},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[a("a-tab-pane",{key:"1",attrs:{tab:"客户信息",forceRender:!0}},[a("j-editable-table",{ref:"editableTable1",attrs:{loading:e.table1.loading,columns:e.table1.columns,dataSource:e.table1.dataSource,maxHeight:300,rowNumber:!0,rowSelection:!0,actionButton:!0}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"机票信息",forceRender:!0}},[a("j-editable-table",{ref:"editableTable2",attrs:{loading:e.table2.loading,columns:e.table2.columns,dataSource:e.table2.dataSource,maxHeight:300,rowNumber:!0,rowSelection:!0,actionButton:!0}})],1)],1)],1)],1)},r=[],n=a("7550"),o=a("e2e0"),i=a("0fea"),s=a("2dab");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m={name:"JeecgOrderModalForJEditableTable",components:{JDate:s["default"],JEditableTable:n["default"]},data:function(){return{title:"操作",visible:!1,confirmLoading:!1,model:{},labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}},activeKey:"1",table1:{loading:!1,dataSource:[],columns:[{title:"客户名",key:"name",width:"24%",type:o["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"性别",key:"sex",width:"18%",type:o["a"].select,options:[{title:"男",value:"1"},{title:"女",value:"2"}],defaultValue:"",placeholder:"请选择${title}"},{title:"身份证号",key:"idcard",width:"24%",type:o["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{pattern:"^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|[xX])$",message:"${title}格式不正确"}]},{title:"手机号",key:"telphone",width:"24%",type:o["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{pattern:"^1(3|4|5|7|8)\\d{9}$",message:"${title}格式不正确"}]}]},table2:{loading:!1,dataSource:[],columns:[{title:"航班号",key:"ticketCode",width:"40%",type:o["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"航班时间",key:"tickectDate",width:"30%",type:o["a"].date,placeholder:"请选择${title}",defaultValue:""}]},url:{add:"/test/jeecgOrderMain/add",edit:"/test/jeecgOrderMain/edit",orderCustomerList:"/test/jeecgOrderMain/queryOrderCustomerListByMainId",orderTicketList:"/test/jeecgOrderMain/queryOrderTicketListByMainId"}}},created:function(){},methods:{getAllTable:function(){return Promise.all([Object(o["c"])(this,"editableTable1"),Object(o["c"])(this,"editableTable2")])},add:function(){this.getAllTable().then((function(e){e[0].add(),e[1].add()})),this.edit({})},edit:function(e){if(this.visible=!0,this.activeKey="1",this.model=Object.assign({},e),this.model.id){var t={id:this.model.id};this.requestTableData(this.url.orderCustomerList,t,this.table1),this.requestTableData(this.url.orderTicketList,t,this.table2)}},close:function(){this.visible=!1,this.getAllTable().then((function(e){e[0].initialize(),e[1].initialize()})),this.$emit("close"),this.$refs.form.resetFields()},requestTableData:function(e,t,a){a.loading=!0,Object(i["c"])(e,t).then((function(e){a.dataSource=e.result||[]})).finally((function(){a.loading=!1}))},handleOk:function(){this.validateFields()},handleCancel:function(){this.close()},handleChangeTabs:function(e){Object(o["c"])(this,"editableTable".concat(e)).then((function(e){e.resetScrollTop()}))},validateFields:function(){var e=this;this.getAllTable().then((function(t){return Object(o["d"])(e.$refs.form,e.model,t)})).then((function(t){var a=e.classifyIntoFormData(t);return e.requestAddOrEdit(a)})).catch((function(t){t.error===o["b"]&&(e.activeKey=null==t.index?e.activeKey:(t.index+1).toString())}))},classifyIntoFormData:function(e){var t=Object.assign(this.model,e.formValue);return d(d({},t),{},{jeecgOrderCustomerList:e.tablesValue[0].values,jeecgOrderTicketList:e.tablesValue[1].values})},requestAddOrEdit:function(e){var t=this,a=this.url.add,l="post";this.model.id&&(a=this.url.edit,l="put"),this.confirmLoading=!0,Object(i["h"])(a,e,l).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok"),t.close()):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}},b=m,p=a("2877"),f=Object(p["a"])(b,l,r,!1,null,"2e31c7d0",null);t["default"]=f.exports}}]);