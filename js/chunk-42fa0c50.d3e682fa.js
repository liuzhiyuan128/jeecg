(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42fa0c50","chunk-2ed047c2","chunk-ebeeefc0"],{8080:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("j-form-container",{attrs:{disabled:e.formDisabled}},[a("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"设备序列号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"serialNumber"}},[a("a-input",{attrs:{placeholder:"请输入设备序列号"},model:{value:e.model.serialNumber,callback:function(t){e.$set(e.model,"serialNumber",t)},expression:"model.serialNumber"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"设备名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"equipmentName"}},[a("a-input",{attrs:{placeholder:"请输入设备名称"},model:{value:e.model.equipmentName,callback:function(t){e.$set(e.model,"equipmentName",t)},expression:"model.equipmentName"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"设备所属区域",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"region"}},[a("j-area-linkage",{attrs:{type:"cascader",placeholder:"请输入设备所属区域"},model:{value:e.model.region,callback:function(t){e.$set(e.model,"region",t)},expression:"model.region"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"设备所属厂商",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"manufacturer"}},[a("a-input",{attrs:{placeholder:"请输入设备所属厂商"},model:{value:e.model.manufacturer,callback:function(t){e.$set(e.model,"manufacturer",t)},expression:"model.manufacturer"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"设备到期时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"equipmentExpireTime"}},[a("j-date",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择设备到期时间"},model:{value:e.model.equipmentExpireTime,callback:function(t){e.$set(e.model,"equipmentExpireTime",t)},expression:"model.equipmentExpireTime"}})],1)],1)],1)],1)],1)],1)},o=[],i=a("0fea"),r=(a("ca00"),{name:"EquipmentForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{serialNumber:[{required:!0,message:"请输入设备序列号，唯一标识!"}],region:[{required:!0,message:"请输入设备所属区域!"}],manufacturer:[{required:!0,message:"请输入设备所属厂商!"}]},url:{add:"/repair/equipment/add",edit:"/repair/equipment/edit",queryById:"/repair/equipment/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(a){t.confirmLoading=!0;var l="",o="";e.model.id?(l+=e.url.edit,o="put"):(l+=e.url.add,o="post"),Object(i["h"])(l,e.model,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}))}}}),n=r,s=(a("e48d"),a("2877")),m=Object(s["a"])(n,l,o,!1,null,null,null);t["default"]=m.exports},"8c69":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.todos,(function(t,l){return a("a-row",{key:t},[a("a-col",{staticClass:"list-title",attrs:{span:4}},[e._v("\n          设备"+e._s(l+1)+"：\n        ")]),a("a-col",{staticClass:"list-name",attrs:{span:13}},[a("div",{ref:"menuItem",refInFor:!0},[e._v(e._s(t.text))])]),a("a-col",{staticClass:"list-operation",attrs:{span:7}},[a("a-button",{on:{click:function(t){return e.handleDetail(e.record)}}},[e._v("查看详情")]),a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.removeTodo(l)}}},[e._v("删除")])],1)],1)})),a("equipment-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],2)},o=[],i=a("ac0d"),r=a("b65a"),n=a("ea71"),s={mixins:[r["a"],i["b"]],components:{EquipmentModal:n["default"]},props:{},data:function(){return{todos:[{text:"A111111"},{text:"A222222"},{text:"A333333"},{text:"A444444"}]}},computed:{},methods:{removeTodo:function(e){this.todos.splice(e,1)}}},m=s,u=(a("e64c"),a("2877")),c=Object(u["a"])(m,l,o,!1,null,null,null);t["default"]=c.exports},db4b6:function(e,t,a){},e48d:function(e,t,a){"use strict";var l=a("db4b6"),o=a.n(l);o.a},e48f:function(e,t,a){},e64c:function(e,t,a){"use strict";var l=a("e48f"),o=a.n(l);o.a},ea71:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("equipment-form",{ref:"realForm",attrs:{disabled:e.disableSubmit},on:{ok:e.submitCallback}})],1)},o=[],i=a("8080"),r={name:"EquipmentModal",components:{EquipmentForm:i["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},n=r,s=a("2877"),m=Object(s["a"])(n,l,o,!1,null,null,null);t["default"]=m.exports}}]);