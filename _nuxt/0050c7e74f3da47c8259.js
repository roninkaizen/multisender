(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1452:function(t,e,r){"use strict";r(49),r(29),r(25),r(21),r(39);var n=r(11),o=r(50);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={props:{txs:{type:[Array,Object],default:function(){return[]}},title:{type:String,default:""},subtitle:{type:String,default:""},txName:{type:String,default:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("txHashKeeper",["txExplorerUrl","txHashToRender","txStatusClass"]),{show:function(){return"multisendTxs"===this.txName?this.txs.length>0:this.txs.txHash},multisend:function(){return"multisendTxs"===this.txName}})},d=r(17),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("div",{staticClass:"token-field"},[t.title?r("div",{staticClass:"title",class:{"is-spaced":t.subtitle}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.subtitle?r("div",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),t.multisend?r("ol",{staticClass:"txs"},t._l(t.txs,(function(e){var n=e.txHash,o=e.status;return r("li",{key:n,staticClass:"txs__item",class:t.txStatusClass(o)},[r("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl(t.txName,n),target:"_blank"}},[t._v("\n        "+t._s(t.txHashToRender(t.txName,n))+"\n      ")]),t._v(" "),r("div",{staticClass:"txs__status"})])})),0):r("div",{staticClass:"txs"},[r("div",{staticClass:"txs__item",class:t.txStatusClass(t.txs.status)},[r("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl(t.txName),target:"_blank"}},[t._v("\n        "+t._s(t.txHashToRender(t.txName))+"\n      ")]),t._v(" "),r("div",{staticClass:"txs__status"})])])]):t._e()}),[],!1,null,null,null);e.a=component.exports},1466:function(t,e,r){"use strict";r.r(e);r(49),r(29),r(25),r(39),r(21),r(34);var n=r(3),o=(r(94),r(119),r(11)),l=r(1452),c=r(50),d=r(20);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m,_={components:{Tx:l.a},data:function(){return{addressFilterValue:"",errorMessage:""}},computed:f({},Object(c.d)("txHashKeeper",["approveTx"]),{},Object(c.d)("metamask",["tokensList"]),{},Object(c.d)("provider",["account"]),{},Object(c.c)("provider",["getNetwork"]),{},Object(c.c)("txStorage",["txsToRender"]),{},Object(c.c)("token",["toDecimals","getTokenSymbol","allowance","isUnlimitedAllowance"]),{addressFilter:{set:function(t){this.addressFilterValue=t},get:function(){return"0x000000000000000000000000000000000000bEEF"===this.addressFilterValue?this.$store.state.metamask.tokensList[0].label:this.addressFilterValue}},tokenSelectLoading:function(){return 1===this.$store.state.metamask.tokensList.length&&""===this.$store.state.metamask.tokensList[0].symbol},filteredTokenList:function(){var t=this,e=this.$store.state.metamask.tokensList.slice(1);if(this.addressFilter){var r=e.filter((function(e){return e.label.toLowerCase().includes(t.addressFilter.toLowerCase())}));return r.length||this.$store.dispatch("token/setTokenAddress",{address:this.addressFilter,label:this.addressFilter,symbol:""}),r}return e},isLoading:function(){if(!this.account)return!0;switch(this.approveTx.status){case d.default.waitingForReciept:return!0}return!1},strategy:{get:function(){return this.$store.state.distribution.strategy},set:function(t){this.$store.commit("distribution/SET_STRATEGY",t)}}}),mounted:(m=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,e){setTimeout(t,1e3)}));case 2:case"end":return t.stop()}}),t)}))),function(){return m.apply(this,arguments)}),methods:f({},Object(c.b)("token",["sendApprove"]),{revokeButtonAction:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.sendApprove(0);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t.errorMessage=e.t0.message;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},onTokenSelect:function(t){t&&this.$store.dispatch("token/setTokenAddress",{address:t.value,label:t.label,symbol:t.symbol})},renderableAllowance:function(){return this.isUnlimitedAllowance?this.$t("infinite"):this.toDecimals(this.allowance)}})},h=r(17),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-container"},[r("div",{staticClass:"title"},[t._v(t._s(t.$t("revokeAllowance")))]),t._v(" "),r("div",{staticClass:"subtitle"},[t._v(t._s(t.$t("revokeAllowanceDesc")))]),t._v(" "),r("div",{staticClass:"columns field-columns"},[r("div",{staticClass:"column"},[r("b-field",{attrs:{label:t.$t("tokenAddress")}},[r("b-autocomplete",{attrs:{id:"token-address-input",data:t.filteredTokenList,placeholder:t.$t("selectToken"),loading:t.tokenSelectLoading,icon:"magnify","open-on-focus":"",expanded:""},on:{select:t.onTokenSelect},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.option.label)+"\n          ")]}}]),model:{value:t.addressFilter,callback:function(e){t.addressFilter=e},expression:"addressFilter"}},[r("template",{slot:"header"},[r("span",{staticClass:"placeholder"}),t._v(" "),3===t.getNetwork.id||4===t.getNetwork.id||5===t.getNetwork.id||42===t.getNetwork.id?r("span",{staticClass:"has-text-info"},[t._v("\n              "+t._s(t.$t("tokenApiIsNotAvailable",{networkName:t.getNetwork.networkName}))+"\n            ")]):t._e()])],2)],1)],1)]),t._v(" "),r("div",{staticClass:"field-strategy"},[r("div",{staticClass:"label"},[t._v("\n      "+t._s(t.$t("multisenderAddress"))+"\n    ")]),t._v(" "),r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("div",{staticClass:"field"},[r("b-radio",{attrs:{"native-value":"push",size:"is-small"},model:{value:t.strategy,callback:function(e){t.strategy=e},expression:"strategy"}},[r("span",{staticClass:"label-name"},[t._v(t._s(t.$t("push"))+" "+t._s(t.getNetwork.multisenderContractAddress))])])],1)]),t._v(" "),r("div",{staticClass:"column is-1 is-separator"}),t._v(" "),r("div",{staticClass:"column"},[r("div",{staticClass:"field"},[r("b-radio",{attrs:{"native-value":"pull",size:"is-small"},model:{value:t.strategy,callback:function(e){t.strategy=e},expression:"strategy"}},[r("span",{staticClass:"label-name"},[t._v(t._s(t.$t("pull"))+" "+t._s(t.getNetwork.multisenderMerkleContractAddress))])])],1)])])]),t._v(" "),r("div",[r("div",{staticClass:"columns is-multiline is-centered"},[r("div",{staticClass:"column"},[r("div",{staticClass:"token-info"},[r("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("currentApproval")))]),t._v(" "),r("div",{staticClass:"token-info__value"},[t._v(t._s(t.renderableAllowance())+" "+t._s(t.getTokenSymbol))])])])]),t._v(" "),r("div",{staticClass:"buttons is-centered"},[r("b-button",{staticClass:"is-next",attrs:{id:"revoke-button",loading:t.isLoading,type:"is-primary"},on:{click:function(e){return t.revokeButtonAction()}}},[t._v("\n        "+t._s(t.$t("revoke"))+"\n      ")])],1)]),t._v(" "),r("Tx",{attrs:{txs:t.approveTx,title:t.$t("approveTransactionHash"),"tx-name":"approveTx"}}),t._v(" "),t.errorMessage?r("b-notification",{attrs:{closable:!1,type:"is-danger",role:"alert"}},[r("ul",[r("li",[t._v("\n        "+t._s(t.errorMessage)+"\n      ")])])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);