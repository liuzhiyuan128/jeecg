(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fadf8362","chunk-2d0cfe82"],{"665a":function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("a-spin",{attrs:{spinning:e.confirmLoading}},[l("j-form-container",{attrs:{disabled:e.formDisabled}},[l("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[l("a-row",[l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"代理商编号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"name"}},[l("a-input",{attrs:{placeholder:"请输入代理商编号+时间(yyyymmdd)+流水号"},model:{value:e.model.name,callback:function(a){e.$set(e.model,"name",a)},expression:"model.name"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"联系人ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"linkmanId"}},[l("a-input",{attrs:{placeholder:"请输入联系人ID，去维保的地方联系的人"},model:{value:e.model.linkmanId,callback:function(a){e.$set(e.model,"linkmanId",a)},expression:"model.linkmanId"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"制订人ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"makerId"}},[l("a-input",{attrs:{placeholder:"请输入制订人ID，找到制定维保单的人"},model:{value:e.model.makerId,callback:function(a){e.$set(e.model,"makerId",a)},expression:"model.makerId"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"工单状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"state"}},[l("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入0 待确认，1 进行中，2 挂起，3 已完成"},model:{value:e.model.state,callback:function(a){e.$set(e.model,"state",a)},expression:"model.state"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"挂起原因",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"putUpCause"}},[l("a-input",{attrs:{placeholder:"请输入挂起原因"},model:{value:e.model.putUpCause,callback:function(a){e.$set(e.model,"putUpCause",a)},expression:"model.putUpCause"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"维保开始时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"startTime"}},[l("j-date",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择维保开始时间"},model:{value:e.model.startTime,callback:function(a){e.$set(e.model,"startTime",a)},expression:"model.startTime"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"技术人员ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"artisanId"}},[l("a-input",{attrs:{placeholder:"请输入技术人员ID"},model:{value:e.model.artisanId,callback:function(a){e.$set(e.model,"artisanId",a)},expression:"model.artisanId"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"技术人员要去维修设备的地点",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"site"}},[l("a-input",{attrs:{placeholder:"请输入技术人员要去维修设备的地点"},model:{value:e.model.site,callback:function(a){e.$set(e.model,"site",a)},expression:"model.site"}})],1)],1)],1)],1)],1)],1)},o=[],r=l("0fea"),i=(l("ca00"),{name:"RepairBillForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{ids:[],model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{name:[{required:!0,message:"请输入代理商编号"}]},url:{add:"/repair/repairBill/add",edit:"/repair/repairBill/edit",queryById:"/repair/repairBill/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,a=this;this.$refs.form.validate((function(l){if(l){a.confirmLoading=!0;var t="",o="";e.model.id?(t+=e.url.edit,o="put"):(t+=e.url.add,o="post"),e.model.equipmentIds=e.ids,Object(r["h"])(t,e.model,o).then((function(e){e.success?(a.$message.success(e.message),a.$emit("ok")):a.$message.warning(e.message)})).finally((function(){a.confirmLoading=!1}))}}))}}}),s=i,n=l("2877"),d=Object(n["a"])(s,t,o,!1,null,null,null);a["default"]=d.exports},"73bc":function(e,a,l){},bf08:function(e,a,l){"use strict";var t=l("73bc"),o=l.n(t);o.a},c3ae:function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("a-drawer",{attrs:{title:e.title,width:e.width,placement:"right",closable:!1,destroyOnClose:"",visible:e.visible},on:{close:e.close}},[l("repair-bill-form",{ref:"realForm",attrs:{disabled:e.disableSubmit,normal:""},on:{ok:e.submitCallback}}),l("div",{staticClass:"drawer-footer"},[l("a-button",{staticStyle:{"margin-bottom":"0"},on:{click:e.handleCancel}},[e._v("关闭")]),e.disableSubmit?e._e():l("a-button",{staticStyle:{"margin-bottom":"0"},attrs:{type:"primary"},on:{click:e.handleOk}},[e._v("提交")])],1)],1)},o=[],r=l("665a"),i={name:"RepairBillModal",components:{RepairBillForm:r["default"]},data:function(){return{title:"操作",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var a=this;this.visible=!0,this.$nextTick((function(){a.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},handleCancel:function(){this.close()}}},s=i,n=(l("bf08"),l("2877")),d=Object(n["a"])(s,t,o,!1,null,"1d42548b",null);a["default"]=d.exports}}]);