_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"3niX":function(e,t,s){"use strict";t.__esModule=!0,t.flush=function(){var e=n.cssRules();return n.flush(),e},t.default=void 0;var i,r=s("q1tI");var n=new(((i=s("SevZ"))&&i.__esModule?i:{default:i}).default),o=function(e){var t,s;function i(t){var s;return(s=e.call(this,t)||this).prevProps={},s}s=e,(t=i).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,i.dynamic=function(e){return e.map((function(e){var t=e[0],s=e[1];return n.computeId(t,s)})).join(" ")};var r=i.prototype;return r.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},r.componentWillUnmount=function(){n.remove(this.props)},r.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&n.remove(this.prevProps),n.add(this.props),this.prevProps=this.props),null},i}(r.Component);t.default=o},"97Is":function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return s("uNx/")}])},"9kyW":function(e,t,s){"use strict";e.exports=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0}},Japd:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var i=s("nKUr"),r=s("MX0m"),n=s.n(r),o=s("ZMKu");function u(e){var t=e.src;return Object(i.jsxs)(o.b.div,{initial:{opacity:0,height:"100vh",width:"100vw",position:"absolute"},animate:{opacity:.5},transition:{opacity:{duration:.65}},children:[Object(i.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,className:"jsx-3078988236 backgroundVideo",children:Object(i.jsx)("source",{src:t,type:"video/mp4",className:"jsx-3078988236"})}),Object(i.jsx)(n.a,{id:"3078988236",children:[".backgroundVideo.jsx-3078988236{position:absolute;object-fit:cover;height:100vh;width:100vw;}"]})]})}},MX0m:function(e,t,s){e.exports=s("3niX")},Qetd:function(e,t,s){"use strict";var i=Object.assign.bind(Object);e.exports=i,e.exports.default=e.exports},SevZ:function(e,t,s){"use strict";t.__esModule=!0,t.default=void 0;var i=n(s("9kyW")),r=n(s("bVZc"));function n(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,i=void 0===s?null:s,n=t.optimizeForSpeed,o=void 0!==n&&n,u=t.isBrowser,c=void 0===u?"undefined"!==typeof window:u;this._sheet=i||new r.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),i&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var s=this.getIdAndRules(e),i=s.styleId,r=s.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var n=r.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[i]=n,this._instancesCounts[i]=1}},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var i=this._fromServer&&this._fromServer[s];i?(i.parentNode.removeChild(i),delete this._fromServer[s]):(this._indices[s].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return s[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,s){if(!s)return"jsx-"+t;var r=String(s),n=t+r;return e[n]||(e[n]="jsx-"+(0,i.default)(t+"-"+r)),e[n]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(s,i){this._isBrowser||(i=i.replace(/\/style/gi,"\\/style"));var r=s+i;return t[r]||(t[r]=i.replace(e,s)),t[r]}},t.getIdAndRules=function(e){var t=this,s=e.children,i=e.dynamic,r=e.id;if(i){var n=this.computeId(r,i);return{styleId:n,rules:Array.isArray(s)?s.map((function(e){return t.computeSelector(n,e)})):[this.computeSelector(n,s)]}}return{styleId:this.computeId(r),rules:Array.isArray(s)?s:[s]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},bVZc:function(e,t,s){"use strict";(function(e){function s(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof e&&e.env&&!0,r=function(e){return"[object String]"===Object.prototype.toString.call(e)},n=function(){function e(e){var t=void 0===e?{}:e,s=t.name,n=void 0===s?"stylesheet":s,u=t.optimizeForSpeed,c=void 0===u?i:u,h=t.isBrowser,l=void 0===h?"undefined"!==typeof window:h;o(r(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var a=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=a?a.getAttribute("content"):null}var t,n,u,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"===typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(r(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var s=this.getSheet();"number"!==typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(u){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var s=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(n){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];o(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,s){t&&o(r(t),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var n=document.head||document.getElementsByTagName("head")[0];return s?n.insertBefore(i,s):n.appendChild(i),i},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&s(t.prototype,n),u&&s(t,u),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=n}).call(this,s("8oxB"))},"uNx/":function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return n}));var i=s("nKUr"),r=s("Japd");function n(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("section",{children:[Object(i.jsxs)("div",{className:"notFound",children:[Object(i.jsx)("h1",{children:"404"}),Object(i.jsx)("h3",{children:"Something has gone wrong... don't worry, someone will be fired for this!"})]}),Object(i.jsx)(r.a,{src:"/static/videos/notFound/backgroundVideo.mp4"})]})})}}},[["97Is",0,1,2,4]]]);