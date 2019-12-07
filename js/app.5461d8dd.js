(function(t){function n(n){for(var i,r,o=n[0],c=n[1],l=n[2],f=0,p=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(n);while(p.length)p.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],i=!0,o=1;o<e.length;o++){var c=e[o];0!==s[c]&&(i=!1)}i&&(a.splice(n--,1),t=r(r.s=e[0]))}return t}var i={},s={app:0},a=[];function r(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/DryerAnimation/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var l=0;l<o.length;l++)n(o[l]);var u=c;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("85ec"),s=e.n(i);s.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Dryer",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Notification",{attrs:{isSpinning:t.isSpinning,notificationText1:"Dryer Running!",notificationText2:"Finished!"}}),e("a",{staticClass:"btn-sample",style:t.buttonStyle,attrs:{type:"button"},on:{click:function(n){return t.toggleOnOff()}}},[t._v(t._s(t.isSpinning?"ON":"OFF"))]),e("div",{staticClass:"main"},[e("div",{staticClass:"l",style:[t.isSpinning?null:{animationDuration:"0.05s"}]},[e("div",{staticClass:"l__face l__face--front"},[e("div",{staticClass:"l__control"}),e("div",{staticClass:"l__control"}),e("div",{staticClass:"l__buttons"},t._l(t.runningLights,(function(n,i){return e("div",{key:n,staticClass:"l__button"},[t.isSpinning?t._e():e("span",{class:["running-lights","running-light-"+i]})])})),0),e("div",{staticClass:"l__c1"},[e("div",{staticClass:"l__c2"},[e("div",{ref:"box",staticClass:"l__clothes",style:t.buttonStyle},[e("div",{staticClass:"l__clothes-i"}),e("div",{staticClass:"l__clothes-i"})])])])]),e("div",{staticClass:"l__face l__face--back"}),e("div",{staticClass:"l__face l__face--right"}),e("div",{staticClass:"l__face l__face--left"}),e("div",{staticClass:"l__face l__face--top"}),e("div",{staticClass:"l__face l__face--bottom"})]),e("div",{staticClass:"s"},[e("div",{staticClass:"l__face s__shadow",style:[t.isSpinning?null:{animationDuration:"0.05s"}]})])])],1)},o=[],c=(e("cb29"),e("d81d"),e("fb6a"),e("d3b7"),e("96cf"),e("a5cf")),l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ctrl"},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.isSpinning,expression:"!isSpinning"}],staticClass:"nortification animateOpen"},[t._v(" "+t._s(t.notificationStart)+" ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isSpinning,expression:"isSpinning"}],staticClass:"nortification animateOpen"},[t._v(" "+t._s(t.notificationEnd)+" ")])])},u=[],f={name:"NotificationAnimation",props:{isSpinning:Boolean,notificationText1:String,notificationText2:String},computed:{notificationStart:function(){return this.notificationText1},notificationEnd:function(){return this.notificationText2}}},p=f,d=(e("6e6a"),e("2877")),h=Object(d["a"])(p,l,u,!1,null,"0cdaf77a",null),g=h.exports;function _(t,n){return Array(n-t+1).fill().map((function(n,e){return t+e})).reverse()}var v={name:"DryerAnimation",components:{Notification:g},props:{msg:String},data:function(){return{clothes:"l__clothes",isSpinning:!0,animate:"0.8s",spinner:_(3,8),currentMsgId:0,currentMessage:[],sentMessages:[],delayBy:1e3,maxVisible:4,startIndexVis:0,endIndexVis:0,start:!0}},created:function(){this.endIndexVis=this.maxVisible},mounted:function(){this.spinStart()},computed:{buttonStyle:function(){return{"--color":this.isSpinning?"green":"#f36955","--color-hover":"#434343","--animation-iteration-count":this.isSpinning?"3":"infinite","--animation-duration":this.isSpinning?"0.9s":"0.6s","--animation-timing-function":this.isSpinning?"ease-out":"ease-in"}},visibleMessages:function(){return this.batch(this.sentMessages)},runningLights:function(){return["one","two","three"]},spin:function(){var t=this.$refs.box,n=new c["b"];return{box:t,timeline:n}}},methods:{toggleOnOff:function(){this.isSpinning?this.spinStart():this.spinStop()},spinStart:function(){var t=this.spin;t.box,t.timeline;this.isSpinning=!1},spinStop:function(){var t=this.spin,n=t.box;t.timeline;this.isSpinning=!0,c["c"].to(n,.6,{rotation:"+=480",ease:c["a"].easeOut,yoyo:!0})},startSendingMessages:function(){this.start=!0,console.log("startSendingMessages called",this.start),this.sendMessages()},stopSendingMessages:function(){this.start=!1,console.log(this.start,"so stop")},delay:function(t){return new Promise((function(n){return setTimeout(n,t)}))},sendMessages:function(){var t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.start){n.next=10;break}if(!(this.currentMsgId<this.spinner.length)){n.next=8;break}return t=this.currentMsgId,n.next=5,regeneratorRuntime.awrap(this.sendNextMessage(t));case 5:this.sendMessages(),n.next=10;break;case 8:console.log("No more messages to send!"),this.stopSendingMessages();case 10:case"end":return n.stop()}}),null,this)},sendNextMessage:function(t){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return this.currentMessage=this.spinner.slice(this.currentMsgId,t),this.currentMsgId++,console.log("currentMsgId updated:",this.currentMsgId,t),n.next=5,regeneratorRuntime.awrap(this.delay(1e3*this.spinner[t]));case 5:return this.animate="0.".concat(this.spinner[t],"s"),this.sentMessages.length>=this.maxVisible&&(this.startIndexVis++,this.endIndexVis++),n.abrupt("return",this.sentMessages.push(this.currentMessage[0]));case 8:case"end":return n.stop()}}),null,this)},batch:function(t){return t.slice(this.startIndexVis,this.endIndexVis)},reset:function(){this.start=!1,console.log("reset!"),this.currentMsgId=0,this.currentMessage=[],this.sentMessages=[],this.startIndexVis=0,this.endIndexVis=this.maxVisible}}},m=v,b=(e("ad3a"),Object(d["a"])(m,r,o,!1,null,"5c43eb9c",null)),x=b.exports,S={name:"app",components:{Dryer:x}},y=S,M=(e("034f"),Object(d["a"])(y,s,a,!1,null,null,null)),w=M.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(w)}}).$mount("#app")},"58c7":function(t,n,e){},"6e6a":function(t,n,e){"use strict";var i=e("58c7"),s=e.n(i);s.a},"85ec":function(t,n,e){},ad3a:function(t,n,e){"use strict";var i=e("f074"),s=e.n(i);s.a},f074:function(t,n,e){}});
//# sourceMappingURL=app.5461d8dd.js.map