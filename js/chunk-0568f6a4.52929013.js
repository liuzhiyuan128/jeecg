(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0568f6a4","chunk-2d0cfe94"],{"1be7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[this.departId?[a("a-spin",{attrs:{spinning:e.loading}},[a("a-form",[a("a-form-item",{attrs:{label:"所拥有的权限"}},[a("a-tree",{staticStyle:{height:"500px",overflow:"auto"},attrs:{checkable:"",checkedKeys:e.checkedKeys,treeData:e.treeData,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeysss,checkStrictly:e.checkStrictly},on:{check:e.onCheck,expand:e.onExpand,select:e.onTreeNodeSelect},scopedSlots:e._u([{key:"hasDatarule",fn:function(t){var n=t.slotTitle,r=t.ruleFlag;return a("span",{},[e._v("\n              "+e._s(n)+"\n              "),r?a("a-icon",{staticStyle:{"margin-left":"5px",color:"red"},attrs:{type:"align-left"}}):e._e()],1)}}],null,!1,3403517078)})],1)],1)],1),a("div",{staticClass:"anty-form-btn"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n          树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-button",{staticStyle:{float:"right"},attrs:{type:"primary",htmlType:"button",icon:"form"},on:{click:e.handleSubmit}},[e._v("保存")])],1)]:a("a-card",{staticStyle:{height:"200px"},attrs:{bordered:!1}},[a("a-empty",[a("span",{attrs:{slot:"description"},slot:"description"},[e._v(" 请先选择一个部门! ")])])],1),a("depart-datarule-modal",{ref:"datarule"})],2)},r=[],s=a("4ec3"),i=a("6675");function o(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=d(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==a.return||a.return()}finally{if(o)throw s}}}}function c(e){return h(e)||u(e)||d(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(e,t):void 0}}function u(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function h(e){if(Array.isArray(e))return f(e)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var y={name:"DepartAuthModal",components:{DepartDataruleModal:i["default"]},data:function(){return{departId:"",treeData:[],defaultCheckedKeys:[],checkedKeys:[],halfCheckedKeys:[],expandedKeysss:[],allTreeKeys:[],autoExpandParent:!0,checkStrictly:!1,title:"部门权限配置",visible:!1,loading:!1,selectedKeys:[]}},methods:{onTreeNodeSelect:function(e){e&&e.length>0&&(this.selectedKeys=e),this.$refs.datarule.show(this.selectedKeys[0],this.departId)},onCheck:function(e,t){var a=t.halfCheckedKeys;this.checkedKeys=e,this.halfCheckedKeys=a},show:function(e){this.departId=e,this.loadData()},close:function(){this.reset(),this.$emit("close"),this.visible=!1},onExpand:function(e){this.expandedKeysss=e,this.autoExpandParent=!1},reset:function(){this.expandedKeysss=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.loading=!1},expandAll:function(){this.expandedKeysss=this.allTreeKeys},closeAll:function(){this.expandedKeysss=[]},checkALL:function(){this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},handleCancel:function(){this.close()},handleSubmit:function(){var e=this;e.departId||this.$message.warning("请点击选择一个部门!");var t=[].concat(c(e.checkedKeys),c(e.halfCheckedKeys)),a=t.join(","),n={departId:e.departId,permissionIds:a,lastpermissionIds:e.defaultCheckedKeys.join(",")};e.loading=!0,Object(s["S"])(n).then((function(t){t.success?(e.$message.success(t.message),e.loading=!1,e.loadData()):(e.$message.error(t.message),e.loading=!1)}))},convertTreeListToKeyLeafPairs:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=o(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,s=r.key,i=r.isLeaf,c=r.children;a.push({key:s,isLeaf:i}),c&&c.length>0&&this.convertTreeListToKeyLeafPairs(c,a)}}catch(l){n.e(l)}finally{n.f()}return a},emptyCurrForm:function(){this.form.resetFields()},loadData:function(){var e=this;this.loading=!0,Object(s["N"])().then((function(t){e.treeData=t.result.treeList,e.allTreeKeys=t.result.ids;var a=e.convertTreeListToKeyLeafPairs(e.treeData);Object(s["C"])({departId:e.departId}).then((function(t){var n=c(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&t.isLeaf})),r=c(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&!t.isLeaf}));e.checkedKeys=c(n),e.halfCheckedKeys=c(r),e.defaultCheckedKeys=[].concat(c(r),c(n)),e.expandedKeysss=e.allTreeKeys,e.loading=!1}))}))}}},p=y,m=a("2877"),v=Object(m["a"])(p,n,r,!1,null,"a4e89130",null);t["default"]=v.exports},6675:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,n){return a("a-col",{key:"dr"+n,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},r=[],s=a("290c"),i=a("da05"),o=a("0fea"),c={name:"DepartDataruleModal",components:{ACol:i["b"],ARow:s["a"]},data:function(){return{functionId:"",departId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/sysDepartPermission/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(o["c"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.departId)).then((function(t){if(t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,departId:this.departId,dataRuleIds:this.dataruleChecked.join(",")};Object(o["i"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t){this.onReset(),this.functionId=e,this.departId=t,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.departId="",this.dataruleList=[],this.dataruleChecked=[]}}},l=c,d=a("2877"),u=Object(d["a"])(l,n,r,!1,null,"47ca2114",null);t["default"]=u.exports}}]);