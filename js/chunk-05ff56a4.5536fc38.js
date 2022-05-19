(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05ff56a4"],{"0541":function(e,a,l){"use strict";var o=l("e4ea"),t=l.n(o);t.a},"06a5":function(e,a,l){"use strict";var o=l("5aed"),t=l.n(o);t.a},"255b":function(e,a,l){"use strict";l.r(a);var o=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("a-modal",{attrs:{title:e.title,width:800,ok:!1,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[l("a-spin",{attrs:{spinning:e.confirmLoading}},[l("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构名称",prop:"departName",hidden:!1,hasFeedback:""}},[l("a-input",{attrs:{id:"departName",placeholder:"请输入机构名称"},model:{value:e.model.departName,callback:function(a){e.$set(e.model,"departName",a)},expression:"model.departName"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构编码",prop:"orgCode",hidden:!1,hasFeedback:""}},[l("a-input",{attrs:{id:"orgCode",placeholder:"请输入机构/部门编码"},model:{value:e.model.orgCode,callback:function(a){e.$set(e.model,"orgCode",a)},expression:"model.orgCode"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,hidden:e.seen,label:"上级单位",hasFeedback:""}},[l("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,placeholder:"请选择上级单位",disabled:e.condition},model:{value:e.model.parentId,callback:function(a){e.$set(e.model,"parentId",a)},expression:"model.parentId"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"unitNature",label:"单位性质"}},[l("a-input",{attrs:{placeholder:"请输入单位性质(企业,政府机构等)"},model:{value:e.model.unitNature,callback:function(a){e.$set(e.model,"unitNature",a)},expression:"model.unitNature"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"所属区域"}},[l("j-tree-select",{attrs:{dict:"ufpp_monitor_area,area_name,id","pid-field":"pid",pidValue:"0"},model:{value:e.model.departAreaId,callback:function(a){e.$set(e.model,"departAreaId",a)},expression:"model.departAreaId"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"mobile",label:"电话"}},[l("a-input",{attrs:{placeholder:"请输入电话"},model:{value:e.model.mobile,callback:function(a){e.$set(e.model,"mobile",a)},expression:"model.mobile"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"传真"}},[l("a-input",{attrs:{placeholder:"请输入传真"},model:{value:e.model.fax,callback:function(a){e.$set(e.model,"fax",a)},expression:"model.fax"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"地址"}},[l("a-input",{attrs:{placeholder:"请输入地址"},model:{value:e.model.address,callback:function(a){e.$set(e.model,"address",a)},expression:"model.address"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[l("a-input-number",{model:{value:e.model.departOrder,callback:function(a){e.$set(e.model,"departOrder",a)},expression:"model.departOrder"}})],1),l("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[l("a-textarea",{attrs:{placeholder:"请输入备注"},model:{value:e.model.memo,callback:function(a){e.$set(e.model,"memo",a)},expression:"model.memo"}})],1)],1)],1)],1)},t=[],r=l("0fea"),d=l("4ec3"),i=(l("88bc"),l("261e")),s={name:"SysUnitModal",components:{ATextarea:i["a"]},data:function(){return{departTree:[],orgTypeData:[],phoneWarning:"",departName:"",title:"操作",seen:!1,visible:!1,condition:!0,disableSubmit:!1,model:{},defaultModel:{departOrder:0,orgCategory:"1"},menuhidden:!1,menuusing:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{departName:[{required:!0,message:"请输入机构/部门名称!"}],orgCode:[{required:!0,message:"请输入机构编码!"}],mobile:[{validator:this.validateMobile}],orgCategory:[{required:!0,message:"请输入机构类型!"}]},url:{add:"/sys/sysUnit/add"},dictDisabled:!0}},created:function(){},methods:{loadTreeData:function(){var e=this;Object(d["G"])().then((function(a){if(a.success){e.departTree=[];for(var l=0;l<a.result.length;l++){var o=a.result[l];e.departTree.push(o)}}}))},add:function(e){e?(this.seen=!1,this.dictDisabled=!1):(this.seen=!0,this.dictDisabled=!0),this.edit(e)},edit:function(e){this.visible=!0,this.model=Object.assign({},this.defaultModel,e),this.loadTreeData(),this.model.parentId=null!=e?e.toString():null,this.model.orgCategory="1"},close:function(){this.$emit("close"),this.disableSubmit=!1,this.visible=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this,a=this;this.$refs.form.validate((function(l){if(!l)return!1;a.confirmLoading=!0,Object(r["h"])(e.url.add,e.model,"post").then((function(e){e.success?(a.$message.success(e.message),a.loadTreeData(),a.$emit("ok")):a.$message.warning(e.message)})).finally((function(){a.confirmLoading=!1,a.close()}))}))},handleCancel:function(){this.close()},validateMobile:function(e,a,l){!a||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(a)?l():l("您的手机号码格式不正确!")}}},n=s,m=(l("0541"),l("06a5"),l("2877")),p=Object(m["a"])(n,o,t,!1,null,"75dff6e9",null);a["default"]=p.exports},"5aed":function(e,a,l){},e4ea:function(e,a,l){}}]);