(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22d93a32"],{9775:function(e,r,o){},dd9d:function(e,r,o){"use strict";o.r(r);var a=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[o("a-spin",{attrs:{spinning:e.confirmLoading}},[o("a-form-model",{ref:"form",attrs:{model:e.orderMainModel,rules:e.validatorRules}},[o("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"orderCode",label:"订单号",required:"",hasFeedback:""}},[o("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.orderMainModel.orderCode,callback:function(r){e.$set(e.orderMainModel,"orderCode",r)},expression:"orderMainModel.orderCode"}})],1),o("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[o("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.orderMainModel.ctype,callback:function(r){e.$set(e.orderMainModel,"ctype",r)},expression:"orderMainModel.ctype"}},[o("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),o("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1),o("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[o("a-date-picker",{attrs:{showTime:"",valueFormat:"YYYY-MM-DD HH:mm:ss"},model:{value:e.orderMainModel.orderDate,callback:function(r){e.$set(e.orderMainModel,"orderDate",r)},expression:"orderMainModel.orderDate"}})],1),o("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[o("a-input-number",{staticStyle:{width:"200px"},model:{value:e.orderMainModel.orderMoney,callback:function(r){e.$set(e.orderMainModel,"orderMoney",r)},expression:"orderMainModel.orderMoney"}})],1),o("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[o("a-input",{attrs:{placeholder:"请输入订单备注"},model:{value:e.orderMainModel.content,callback:function(r){e.$set(e.orderMainModel,"content",r)},expression:"orderMainModel.content"}})],1)],1)],1)],1)},l=[],t=o("0fea"),d=o("2dab"),i=(o("88bc"),o("c1df"),{name:"JeecgOrderDMainModal",components:{JDate:d["default"]},data:function(){return{title:"操作",visible:!1,orderMainModel:{jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{orderCode:[{required:!0,message:"请输入订单号!"}]},url:{add:"/test/order/add",edit:"/test/order/edit",orderCustomerList:"/test/order/listOrderCustomerByMainId",orderTicketList:"/test/order/listOrderTicketByMainId"}}},methods:{add:function(){this.edit({})},edit:function(e){this.orderMainModel=Object.assign({},e),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this,r=this;this.$refs.form.validate((function(o){if(!o)return!1;r.confirmLoading=!0;var a="",l="";e.orderMainModel.id?(a+=e.url.edit,l="put"):(a+=e.url.add,l="post"),Object(t["h"])(a,e.orderMainModel,l).then((function(e){e.success?(r.$message.success(e.message),r.$emit("ok")):r.$message.warning(e.message)})).finally((function(){r.confirmLoading=!1,r.close()}))}))},handleCancel:function(){this.close()}}}),n=i,s=(o("f271"),o("2877")),c=Object(s["a"])(n,a,l,!1,null,"0fe69b4b",null);r["default"]=c.exports},f271:function(e,r,o){"use strict";var a=o("9775"),l=o.n(a);l.a}}]);