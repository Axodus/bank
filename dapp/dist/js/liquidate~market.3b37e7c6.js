(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["liquidate~market"],{"9d01":function(t,e,n){},a006:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"RedeemForm mx-5",attrs:{"lazy-validation":!0}},[n("v-card-text",{staticClass:"pb-0"},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("h2",[t._v("Redeem from market "+t._s(t.marketAddress)+" of token "+t._s(t.tokenSymbol))])]),n("v-row",[n("v-col",{staticClass:"pb-0",attrs:{cols:"10"}},[n("v-text-field",{attrs:{label:"Redeem amount",type:"number",rules:[t.rules.required,t.rules.marketSupply,t.rules.userSupply],required:""},model:{value:t.amount,callback:function(e){t.amount=t._n(e)},expression:"amount"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-switch",{attrs:{color:"success",label:"Máximo"},model:{value:t.maxAmount,callback:function(e){t.maxAmount=e},expression:"maxAmount"}})],1)],1)],1)],1),n("v-card-actions",{staticClass:"pl-6 pb-4 pt-0"},[n("v-btn",{attrs:{color:"success",disabled:!t.validForm},on:{click:t.redeem}},[t._v(" Redeem ")])],1)],1)},i=[],s=(n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("3835")),o=n("5530"),r=n("2f62"),u=n("8cc6"),l=n("0514"),c={name:"RedeemForm",props:{marketAddress:{type:String,required:!0},maxAmountAllowed:{type:Number,required:!0}},data:function(){var t=this;return{market:null,amount:null,tokenName:null,tokenSymbol:null,validForm:!1,userSupply:null,balanceOfMarket:null,maxAmount:!1,rules:{required:function(){return!!t.amount||"Required."},marketSupply:function(){return t.balanceOfMarket>=t.amount||"Market does not have enough funds"},userSupply:function(){return t.userSupply>=t.amount||"You do not have enough funds on this market"}}}},computed:Object(o["a"])({},Object(r["d"])({account:function(t){return t.Session.account}})),methods:{redeem:function(){var t=this;this.market.redeem(this.account,this.amount).then((function(){return t.$emit("formSucceed")}))}},watch:{amount:function(){this.validForm="string"!==typeof this.rules.required()&&"string"!==typeof this.rules.marketSupply()&&"string"!==typeof this.rules.userSupply()},maxAmount:function(){this.maxAmount?this.amount=this.maxAmountAllowed:this.amount=null}},created:function(){var t=this;this.market=new u["a"](this.marketAddress),this.market.eventualTokenAddress.then((function(e){var n=new l["a"](e);return[n.eventualName,n.eventualSymbol,n.balanceOf(t.marketAddress)]})).then((function(t){return Promise.all(t)})).then((function(e){var n=Object(s["a"])(e,3),a=n[0],i=n[1],o=n[2];t.tokenName=a,t.tokenSymbol=i,t.balanceOfMarket=Number(o)})),this.market.getUpdatedSupplyOf(this.account).then((function(e){t.userSupply=Number(e)}))}},h=c,d=n("2877"),m=n("6544"),p=n.n(m),f=n("8336"),v=n("b0af"),b=n("99d9"),k=n("62ad"),y=n("a523"),g=n("0fd9"),w=n("b73d"),S=n("8654"),C=Object(d["a"])(h,a,i,!1,null,null,null);e["a"]=C.exports;p()(C,{VBtn:f["a"],VCard:v["a"],VCardActions:b["a"],VCardText:b["b"],VCol:k["a"],VContainer:y["a"],VRow:g["a"],VSwitch:w["a"],VTextField:S["a"]})},b73d:function(t,e,n){"use strict";n("0481"),n("4069");var a=n("5530"),i=(n("ec29"),n("9d01"),n("4de4"),n("45fc"),n("d3b7"),n("25f0"),n("c37a")),s=n("5607"),o=n("2b0e"),r=o["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),u=n("80d2"),l=o["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:u["h"]}}}),c=n("58df"),h=Object(c["a"])(i["a"],r,l).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=i["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var a=n.length;n=n.filter((function(n){return!t.valueComparator(n,e)})),n.length===a&&n.push(e)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(n,e)?null:e:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),d=n("c3f0"),m=n("0789"),p=n("490a");e["a"]=h.extend({name:"v-switch",directives:{Touch:d["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])({},i["a"].options.computed.classes.call(this),{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.disabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])({},this.attrs,{},this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(m["b"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(p["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===u["n"].left&&this.isActive||t.keyCode===u["n"].right&&!this.isActive)&&this.onChange()}}})},bfdc:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"PayBorrowForm ma-5",attrs:{"lazy-validation":!0,"max-width":"80%"}},[n("v-card-text",{staticClass:"pb-0"},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("h2",[t._v("PayBorrow of market "+t._s(t.marketAddress)+" of token "+t._s(t.tokenSymbol))])]),n("v-row",[n("v-col",{staticClass:"pb-0"},[n("v-text-field",{attrs:{label:"Debt amount",type:"number",rules:[t.rules.required,t.rules.debtExists,t.rules.notBiggerThanDebt,t.rules.hasEnoughTokens],required:""},model:{value:t.amount,callback:function(e){t.amount=t._n(e)},expression:"amount"}})],1)],1)],1)],1),n("v-card-actions",{staticClass:"pl-6 pb-4 pt-0"},[n("v-btn",{attrs:{color:"success",disabled:!t.validForm},on:{click:t.payBorrow}},[t._v(" Pay Debt ")])],1)],1)},i=[],s=(n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("3835")),o=n("5530"),r=n("2f62"),u=n("8cc6"),l=n("0514"),c={name:"PayBorrowForm",props:{marketAddress:{type:String,required:!0}},data:function(){var t=this;return{market:null,amount:null,token:null,tokenName:null,tokenSymbol:null,borrowByUser:null,balanceOfUser:null,validForm:!1,rules:{required:function(){return!!t.amount||"Required."},debtExists:function(){return t.borrowByUser>0&&!!t.amount||"You do not have a debt on this market."},hasEnoughTokens:function(){return t.balanceOfUser>=t.amount||"You do not have enough ".concat(t.tokenSymbol,"s")},notBiggerThanDebt:function(){return t.borrowByUser>=t.amount||"You do not owe that much."}}}},computed:Object(o["a"])({},Object(r["d"])({account:function(t){return t.Session.account}})),methods:{payBorrow:function(){var t=this;this.token.approve(this.account,this.marketAddress,this.amount).then((function(){return t.market.payBorrow(t.account,t.amount)})).then((function(){t.$emit("formSucceed")}))}},watch:{amount:function(){this.validForm="string"!==typeof this.rules.required()&&"string"!==typeof this.rules.debtExists()&&"string"!==typeof this.rules.hasEnoughTokens()&&"string"!==typeof this.rules.notBiggerThanDebt()}},created:function(){var t=this;this.market=new u["a"](this.marketAddress),this.market.eventualTokenAddress.then((function(e){return t.token=new l["a"](e),[t.token.eventualName,t.token.eventualSymbol,t.token.balanceOf(t.account)]})).then((function(t){return Promise.all(t)})).then((function(e){var n=Object(s["a"])(e,3),a=n[0],i=n[1],o=n[2];t.tokenName=a,t.tokenSymbol=i,t.balanceOfUser=Number(o)})),this.market.getUpdatedBorrowBy(this.account).then((function(e){t.borrowByUser=Number(e)}))}},h=c,d=n("2877"),m=n("6544"),p=n.n(m),f=n("8336"),v=n("b0af"),b=n("99d9"),k=n("62ad"),y=n("a523"),g=n("0fd9"),w=n("8654"),S=Object(d["a"])(h,a,i,!1,null,null,null);e["a"]=S.exports;p()(S,{VBtn:f["a"],VCard:v["a"],VCardActions:b["a"],VCardText:b["b"],VCol:k["a"],VContainer:y["a"],VRow:g["a"],VTextField:w["a"]})},c0fc:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"SupplyForm mx-5",attrs:{"lazy-validation":!0}},[n("v-card-text",{staticClass:"pb-0"},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("h2",[t._v("Supply to market "+t._s(t.marketAddress)+" of token "+t._s(t.tokenSymbol))])]),n("v-row",[n("v-col",{staticClass:"pb-0",attrs:{cols:"10"}},[n("v-text-field",{attrs:{label:"Supply amount",type:"number",rules:[t.rules.required,t.rules.minBalance],required:""},model:{value:t.amount,callback:function(e){t.amount=t._n(e)},expression:"amount"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-switch",{attrs:{color:"success",label:"Máximo"},model:{value:t.maxAmount,callback:function(e){t.maxAmount=e},expression:"maxAmount"}})],1)],1)],1)],1),n("v-card-actions",{staticClass:"pl-6 pb-4 pt-0"},[n("v-btn",{attrs:{color:"success",disabled:!t.validForm},on:{click:t.supply}},[t._v(" Supply ")])],1)],1)},i=[],s=(n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("3835")),o=n("5530"),r=n("2f62"),u=n("8cc6"),l=n("0514"),c={name:"SupplyForm",props:{marketAddress:{type:String,required:!0}},data:function(){var t=this;return{maxAmount:!1,market:null,token:null,amount:null,tokenName:null,tokenSymbol:null,tokenBalance:null,validForm:!1,rules:{required:function(){return!!t.amount||"Required."},minBalance:function(){return t.tokenBalance>=t.amount||"Not enough funds"}}}},computed:Object(o["a"])({},Object(r["d"])({account:function(t){return t.Session.account},isOwner:function(t){return t.Session.isOwner}})),methods:{supply:function(){var t=this;this.token.approve(this.account,this.marketAddress,this.amount).then((function(){return t.market.supply(t.account,t.amount)})).then((function(){t.$emit("formSucceed")}))},getBalance:function(){var t=this;this.token.balanceOf(this.account).then((function(e){t.tokenBalance=Number(e)}))}},watch:{amount:function(){this.validForm="string"!==typeof this.rules.minBalance()&&"string"!==typeof this.rules.required()},maxAmount:function(){this.maxAmount?this.amount=this.tokenBalance:this.amount=null}},created:function(){var t=this;this.market=new u["a"](this.marketAddress),this.market.eventualTokenAddress.then((function(e){return t.token=new l["a"](e),[t.token.eventualName,t.token.eventualSymbol]})).then((function(t){return Promise.all(t)})).then((function(e){var n=Object(s["a"])(e,2),a=n[0],i=n[1];t.tokenName=a,t.tokenSymbol=i,t.getBalance()}))}},h=c,d=n("2877"),m=n("6544"),p=n.n(m),f=n("8336"),v=n("b0af"),b=n("99d9"),k=n("62ad"),y=n("a523"),g=n("0fd9"),w=n("b73d"),S=n("8654"),C=Object(d["a"])(h,a,i,!1,null,null,null);e["a"]=C.exports;p()(C,{VBtn:f["a"],VCard:v["a"],VCardActions:b["a"],VCardText:b["b"],VCol:k["a"],VContainer:y["a"],VRow:g["a"],VSwitch:w["a"],VTextField:S["a"]})},ec29:function(t,e,n){}}]);
//# sourceMappingURL=liquidate~market.3b37e7c6.js.map