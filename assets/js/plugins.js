/* --- wdp-swiper.min.js --- */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(i,s){void 0===i&&(i={}),void 0===s&&(s={}),Object.keys(s).forEach((function(a){void 0===i[a]?i[a]=s[a]:e(s[a])&&e(i[a])&&Object.keys(s[a]).length>0&&t(i[a],s[a])}))}var i="undefined"!=typeof document?document:{},s={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};t(i,s);var a="undefined"!=typeof window?window:{};t(a,{document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}}});var r=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function n(e,t){var s=[],n=0;if(e&&!t&&e instanceof r)return e;if(e)if("string"==typeof e){var o,l,d=e.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(l=i.createElement(h)).innerHTML=d,n=0;n<l.childNodes.length;n+=1)s.push(l.childNodes[n])}else for(o=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||i).querySelectorAll(e.trim()):[i.getElementById(e.trim().split("#")[1])],n=0;n<o.length;n+=1)o[n]&&s.push(o[n])}else if(e.nodeType||e===a||e===i)s.push(e);else if(e.length>0&&e[0].nodeType)for(n=0;n<e.length;n+=1)s.push(e[n]);return new r(s)}function o(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}n.fn=r.prototype,n.Class=r,n.Dom7=r;var l={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i,a;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0])return i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage?i.dom7ElementDataStorage[e]:i.getAttribute("data-"+e)||void 0},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],o=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),n(t).is(a))r.apply(t,i);else for(var s=n(t).parents(),o=0;o<s.length;o+=1)n(s[o]).is(a)&&r.apply(s[o],i)}}function d(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&(s=(e=t)[0],r=e[1],o=e[2],a=void 0),o||(o=!1);for(var h,p=s.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(a)for(h=0;h<p.length;h+=1){var v=p[h];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[v]||(u.dom7LiveListeners[v]=[]),u.dom7LiveListeners[v].push({listener:r,proxyListener:l}),u.addEventListener(v,l,o)}else for(h=0;h<p.length;h+=1){var f=p[h];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[f]||(u.dom7Listeners[f]=[]),u.dom7Listeners[f].push({listener:r,proxyListener:d}),u.addEventListener(f,d,o)}}return this},off:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=(e=t)[0],r=e[1],n=e[2],a=void 0),n||(n=!1);for(var o=s.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],h=0;h<this.length;h+=1){var p=this[h],c=void 0;if(!a&&p.dom7Listeners?c=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(c=p.dom7LiveListeners[d]),c&&c.length)for(var u=c.length-1;u>=0;u-=1){var v=c[u];r&&v.listener===r||r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r||(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1))}}return this},trigger:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var s=e[0].split(" "),r=e[1],n=0;n<s.length;n+=1)for(var o=s[n],l=0;l<this.length;l+=1){var d=this[l],h=void 0;try{h=new a.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0})}catch(e){(h=i.createEvent("Event")).initEvent(o,!0,!0),h.detail=r}d.dom7EventData=e.filter((function(e,t){return t>0})),d.dispatchEvent(h),d.dom7EventData=[],delete d.dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var e=this[0],t=e.getBoundingClientRect(),s=i.body,r=e.clientTop||s.clientTop||0,n=e.clientLeft||s.clientLeft||0,o=e===a?a.scrollY:e.scrollTop,l=e===a?a.scrollX:e.scrollLeft;return{top:t.top+o-r,left:t.left+l-n}}return null},css:function(e,t){var i;if(1===arguments.length){if("string"!=typeof e){for(i=0;i<this.length;i+=1)for(var s in e)this[i].style[s]=e[s];return this}if(this[0])return a.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(i=0;i<this.length;i+=1)this[i].style[e]=t;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,s,o=this[0];if(!o||void 0===e)return!1;if("string"==typeof e){if(o.matches)return o.matches(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);for(t=n(e),s=0;s<t.length;s+=1)if(t[s]===o)return!0;return!1}if(e===i)return o===i;if(e===a)return o===a;if(e.nodeType||e instanceof r){for(t=e.nodeType?[e]:e,s=0;s<t.length;s+=1)if(t[s]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,i=this.length;return new r(e>i-1?[]:e<0?(t=i+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var e,t=[],s=arguments.length;s--;)t[s]=arguments[s];for(var a=0;a<t.length;a+=1){e=t[a];for(var n=0;n<this.length;n+=1)if("string"==typeof e){var o=i.createElement("div");for(o.innerHTML=e;o.firstChild;)this[n].appendChild(o.firstChild)}else if(e instanceof r)for(var l=0;l<e.length;l+=1)this[n].appendChild(e[l]);else this[n].appendChild(e)}return this},prepend:function(e){var t,s;for(t=0;t<this.length;t+=1)if("string"==typeof e){var a=i.createElement("div");for(a.innerHTML=e,s=a.childNodes.length-1;s>=0;s-=1)this[t].insertBefore(a.childNodes[s],this[t].childNodes[0])}else if(e instanceof r)for(s=0;s<e.length;s+=1)this[t].insertBefore(e[s],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&n(this[0].nextElementSibling).is(e)?new r([this[0].nextElementSibling]):new r([]):this[0].nextElementSibling?new r([this[0].nextElementSibling]):new r([]):new r([])},nextAll:function(e){var t=[],i=this[0];if(!i)return new r([]);for(;i.nextElementSibling;){var s=i.nextElementSibling;e?n(s).is(e)&&t.push(s):t.push(s),i=s}return new r(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&n(t.previousElementSibling).is(e)?new r([t.previousElementSibling]):new r([]):t.previousElementSibling?new r([t.previousElementSibling]):new r([])}return new r([])},prevAll:function(e){var t=[],i=this[0];if(!i)return new r([]);for(;i.previousElementSibling;){var s=i.previousElementSibling;e?n(s).is(e)&&t.push(s):t.push(s),i=s}return new r(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?n(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return n(o(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var s=this[i].parentNode;s;)e?n(s).is(e)&&t.push(s):t.push(s),s=s.parentNode;return n(o(t))},closest:function(e){var t=this;return void 0===e?new r([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var s=this[i].querySelectorAll(e),a=0;a<s.length;a+=1)t.push(s[a]);return new r(t)},children:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var s=this[i].childNodes,a=0;a<s.length;a+=1)e?1===s[a].nodeType&&n(s[a]).is(e)&&t.push(s[a]):1===s[a].nodeType&&t.push(s[a]);return new r(o(t))},filter:function(e){for(var t=[],i=0;i<this.length;i+=1)e.call(this[i],i,this[i])&&t.push(this[i]);return new r(t)},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a=this;for(i=0;i<e.length;i+=1){var r=n(e[i]);for(s=0;s<r.length;s+=1)a[a.length]=r[s],a.length+=1}return a},styles:function(){return this[0]?a.getComputedStyle(this[0],null):{}}};Object.keys(l).forEach((function(e){n.fn[e]=n.fn[e]||l[e]}));var d={deleteProps:function(e){var t=e;Object.keys(t).forEach((function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var i,s,r;void 0===t&&(t="x");var n=a.getComputedStyle(e,null);return a.WebKitCSSMatrix?((s=n.transform||n.webkitTransform).split(",").length>6&&(s=s.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),r=new a.WebKitCSSMatrix("none"===s?"":s)):i=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(s=a.WebKitCSSMatrix?r.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(s=a.WebKitCSSMatrix?r.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),s||0},parseUrlQuery:function(e){var t,i,s,r,n={},o=e||a.location.href;if("string"==typeof o&&o.length)for(r=(i=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter((function(e){return""!==e}))).length,t=0;t<r;t+=1)s=i[t].replace(/#\S+/g,"").split("="),n[decodeURIComponent(s[0])]=void 0===s[1]?void 0:decodeURIComponent(s[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(null!=a)for(var r=Object.keys(Object(a)),n=0,o=r.length;n<o;n+=1){var l=r[n],h=Object.getOwnPropertyDescriptor(a,l);void 0!==h&&h.enumerable&&(d.isObject(i[l])&&d.isObject(a[l])?d.extend(i[l],a[l]):!d.isObject(i[l])&&d.isObject(a[l])?(i[l]={},d.extend(i[l],a[l])):i[l]=a[l])}}return i}},h={touch:!!("ontouchstart"in a||a.DocumentTouch&&i instanceof a.DocumentTouch),pointerEvents:!!a.PointerEvent&&"maxTouchPoints"in a.navigator&&a.navigator.maxTouchPoints>=0,observer:"MutationObserver"in a||"WebkitMutationObserver"in a,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});a.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in a},p=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach((function(e){t.on(e,t.params.on[e])}))},c={components:{configurable:!0}};p.prototype.on=function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach((function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)})),s},p.prototype.once=function(e,t,i){var s=this;if("function"!=typeof t)return s;function a(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];s.off(e,a),a.f7proxy&&delete a.f7proxy,t.apply(s,i)}return a.f7proxy=t,s.on(e,a,i)},p.prototype.off=function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].length&&i.eventsListeners[e].forEach((function(s,a){(s===t||s.f7proxy&&s.f7proxy===t)&&i.eventsListeners[e].splice(a,1)}))})),i):i},p.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,r=this;if(!r.eventsListeners)return r;"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=r):(i=e[0].events,s=e[0].data,a=e[0].context||r);var n=Array.isArray(i)?i:i.split(" ");return n.forEach((function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach((function(e){t.push(e)})),t.forEach((function(e){e.apply(a,s)}))}})),r},p.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i];s.params&&d.extend(e,s.params)}))},p.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach((function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i})),s.on&&t.on&&Object.keys(s.on).forEach((function(e){t.on(e,s.on[e])})),s.create&&s.create.bind(t)(a)}))},c.components.set=function(e){this.use&&this.use(e)},p.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+d.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach((function(t){s.prototype[t]=e.proto[t]})),e.static&&Object.keys(e.static).forEach((function(t){s[t]=e.static[t]})),e.install&&e.install.apply(s,t),s},p.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach((function(e){return s.installModule(e)})),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(p,c);var u={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),d.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,t=this.$wrapperEl,i=this.size,s=this.rtlTranslate,r=this.wrongRTL,n=this.virtual&&e.virtual.enabled,o=n?this.virtual.slides.length:this.slides.length,l=t.children("."+this.params.slideClass),h=n?this.virtual.slides.length:l.length,p=[],c=[],u=[];function v(t){return!e.cssMode||t!==l.length-1}var f=e.slidesOffsetBefore;"function"==typeof f&&(f=e.slidesOffsetBefore.call(this));var m=e.slidesOffsetAfter;"function"==typeof m&&(m=e.slidesOffsetAfter.call(this));var g=this.snapGrid.length,b=this.snapGrid.length,w=e.spaceBetween,y=-f,x=0,E=0;if(void 0!==i){var T,S;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*i),this.virtualSize=-w,s?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(T=Math.floor(h/e.slidesPerColumn)===h/this.params.slidesPerColumn?h:Math.ceil(h/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(T=Math.max(T,e.slidesPerView*e.slidesPerColumn)));for(var C,M=e.slidesPerColumn,P=T/M,z=Math.floor(h/e.slidesPerColumn),k=0;k<h;k+=1){S=0;var $=l.eq(k);if(e.slidesPerColumn>1){var L=void 0,I=void 0,D=void 0;if("row"===e.slidesPerColumnFill&&e.slidesPerGroup>1){var O=Math.floor(k/(e.slidesPerGroup*e.slidesPerColumn)),A=k-e.slidesPerColumn*e.slidesPerGroup*O,G=0===O?e.slidesPerGroup:Math.min(Math.ceil((h-O*M*e.slidesPerGroup)/M),e.slidesPerGroup);L=(I=A-(D=Math.floor(A/G))*G+O*e.slidesPerGroup)+D*T/M,$.css({"-webkit-box-ordinal-group":L,"-moz-box-ordinal-group":L,"-ms-flex-order":L,"-webkit-order":L,order:L})}else"column"===e.slidesPerColumnFill?(D=k-(I=Math.floor(k/M))*M,(I>z||I===z&&D===M-1)&&(D+=1)>=M&&(D=0,I+=1)):I=k-(D=Math.floor(k/P))*P;$.css("margin-"+(this.isHorizontal()?"top":"left"),0!==D&&e.spaceBetween&&e.spaceBetween+"px")}if("none"!==$.css("display")){if("auto"===e.slidesPerView){var H=a.getComputedStyle($[0],null),B=$[0].style.transform,N=$[0].style.webkitTransform;if(B&&($[0].style.transform="none"),N&&($[0].style.webkitTransform="none"),e.roundLengths)S=this.isHorizontal()?$.outerWidth(!0):$.outerHeight(!0);else if(this.isHorizontal()){var X=parseFloat(H.getPropertyValue("width")),V=parseFloat(H.getPropertyValue("padding-left")),Y=parseFloat(H.getPropertyValue("padding-right")),F=parseFloat(H.getPropertyValue("margin-left")),W=parseFloat(H.getPropertyValue("margin-right")),R=H.getPropertyValue("box-sizing");S=R&&"border-box"===R?X+F+W:X+V+Y+F+W}else{var q=parseFloat(H.getPropertyValue("height")),j=parseFloat(H.getPropertyValue("padding-top")),K=parseFloat(H.getPropertyValue("padding-bottom")),U=parseFloat(H.getPropertyValue("margin-top")),_=parseFloat(H.getPropertyValue("margin-bottom")),Z=H.getPropertyValue("box-sizing");S=Z&&"border-box"===Z?q+U+_:q+j+K+U+_}B&&($[0].style.transform=B),N&&($[0].style.webkitTransform=N),e.roundLengths&&(S=Math.floor(S))}else S=(i-(e.slidesPerView-1)*w)/e.slidesPerView,e.roundLengths&&(S=Math.floor(S)),l[k]&&(this.isHorizontal()?l[k].style.width=S+"px":l[k].style.height=S+"px");l[k]&&(l[k].swiperSlideSize=S),u.push(S),e.centeredSlides?(y=y+S/2+x/2+w,0===x&&0!==k&&(y=y-i/2-w),0===k&&(y=y-i/2-w),Math.abs(y)<.001&&(y=0),e.roundLengths&&(y=Math.floor(y)),E%e.slidesPerGroup==0&&p.push(y),c.push(y)):(e.roundLengths&&(y=Math.floor(y)),(E-Math.min(this.params.slidesPerGroupSkip,E))%this.params.slidesPerGroup==0&&p.push(y),c.push(y),y=y+S+w),this.virtualSize+=S+w,x=S,E+=1}}if(this.virtualSize=Math.max(this.virtualSize,i)+m,s&&r&&("slide"===e.effect||"coverflow"===e.effect)&&t.css({width:this.virtualSize+e.spaceBetween+"px"}),e.setWrapperSize&&(this.isHorizontal()?t.css({width:this.virtualSize+e.spaceBetween+"px"}):t.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(S+e.spaceBetween)*T,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?t.css({width:this.virtualSize+e.spaceBetween+"px"}):t.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){C=[];for(var Q=0;Q<p.length;Q+=1){var J=p[Q];e.roundLengths&&(J=Math.floor(J)),p[Q]<this.virtualSize+p[0]&&C.push(J)}p=C}if(!e.centeredSlides){C=[];for(var ee=0;ee<p.length;ee+=1){var te=p[ee];e.roundLengths&&(te=Math.floor(te)),p[ee]<=this.virtualSize-i&&C.push(te)}p=C,Math.floor(this.virtualSize-i)-Math.floor(p[p.length-1])>1&&p.push(this.virtualSize-i)}if(0===p.length&&(p=[0]),0!==e.spaceBetween&&(this.isHorizontal()?s?l.filter(v).css({marginLeft:w+"px"}):l.filter(v).css({marginRight:w+"px"}):l.filter(v).css({marginBottom:w+"px"})),e.centeredSlides&&e.centeredSlidesBounds){var ie=0;u.forEach((function(t){ie+=t+(e.spaceBetween?e.spaceBetween:0)}));var se=(ie-=e.spaceBetween)-i;p=p.map((function(e){return e<0?-f:e>se?se+m:e}))}if(e.centerInsufficientSlides){var ae=0;if(u.forEach((function(t){ae+=t+(e.spaceBetween?e.spaceBetween:0)})),(ae-=e.spaceBetween)<i){var re=(i-ae)/2;p.forEach((function(e,t){p[t]=e-re})),c.forEach((function(e,t){c[t]=e+re}))}}d.extend(this,{slides:l,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),h!==o&&this.emit("slidesLengthChange"),p.length!==g&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),c.length!==b&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)if(this.params.centeredSlides)this.visibleSlides.each((function(e,t){i.push(t)}));else for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,s=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var a=-e;s&&(a=e),i.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(var r=0;r<i.length;r+=1){var o=i[r],l=(a+(t.centeredSlides?this.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility||t.centeredSlides&&t.autoHeight){var d=-(a-o.swiperSlideOffset),h=d+this.slidesSizesGrid[r];(d>=0&&d<this.size-1||h>1&&h<=this.size||d<=0&&h>=this.size)&&(this.visibleSlides.push(o),this.visibleSlidesIndexes.push(r),i.eq(r).addClass(t.slideVisibleClass))}o.progress=s?-l:l}this.visibleSlides=n(this.visibleSlides)}},updateProgress:function(e){if(void 0===e){var t=this.rtlTranslate?-1:1;e=this&&this.translate&&this.translate*t||0}var i=this.params,s=this.maxTranslate()-this.minTranslate(),a=this.progress,r=this.isBeginning,n=this.isEnd,o=r,l=n;0===s?(a=0,r=!0,n=!0):(r=(a=(e-this.minTranslate())/s)<=0,n=a>=1),d.extend(this,{progress:a,isBeginning:r,isEnd:n}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&this.updateSlidesProgress(e),r&&!o&&this.emit("reachBeginning toEdge"),n&&!l&&this.emit("reachEnd toEdge"),(o&&!r||l&&!n)&&this.emit("fromEdge"),this.emit("progress",a)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=t.eq(0)).addClass(i.slideNextClass);var l=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===l.length&&(l=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,n=this.activeIndex,o=this.realIndex,l=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);r.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if(a.indexOf(i)>=0)t=a.indexOf(i);else{var c=Math.min(r.slidesPerGroupSkip,h);t=c+Math.floor((h-c)/r.slidesPerGroup)}if(t>=a.length&&(t=a.length-1),h!==n){var u=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);d.extend(this,{snapIndex:t,realIndex:u,previousIndex:n,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),o!==u&&this.emit("realIndexChange"),(this.initialized||this.params.runCallbacksOnInit)&&this.emit("slideChange")}else t!==l&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=n(e.target).closest("."+t.slideClass)[0],s=!1;if(i)for(var a=0;a<this.slides.length;a+=1)this.slides[a]===i&&(s=!0);if(!i||!s)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(n(i).attr("data-swiper-slide-index"),10):this.clickedIndex=n(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}},v={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;var r=d.getTranslate(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.wrapperEl,n=this.progress,o=0,l=0;this.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.cssMode?r[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-o:-l:s.virtualTranslate||a.transform("translate3d("+o+"px, "+l+"px, 0px)"),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?o:l;var d=this.maxTranslate()-this.minTranslate();(0===d?0:(e-this.minTranslate())/d)!==n&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,i,s,a){var r;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),void 0===s&&(s=!0);var n=this,o=n.params,l=n.wrapperEl;if(n.animating&&o.preventInteractionOnTransition)return!1;var d,h=n.minTranslate(),p=n.maxTranslate();if(d=s&&e>h?h:s&&e<p?p:e,n.updateProgress(d),o.cssMode){var c=n.isHorizontal();return 0===t?l[c?"scrollLeft":"scrollTop"]=-d:l.scrollTo?l.scrollTo(((r={})[c?"left":"top"]=-d,r.behavior="smooth",r)):l[c?"scrollLeft":"scrollTop"]=-d,!0}return 0===t?(n.setTransition(0),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(e){n&&!n.destroyed&&e.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,i&&n.emit("transitionEnd"))}),n.$wrapperEl[0].addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd))),!0}},f={setTransition:function(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;if(!s.cssMode){s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex,a=this.params;if(this.animating=!1,!a.cssMode){this.setTransition(0);var r=t;if(r||(r=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===r?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}}},m={slideTo:function(e,t,i,s){var a;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var r=this,n=e;n<0&&(n=0);var o=r.params,l=r.snapGrid,d=r.slidesGrid,h=r.previousIndex,p=r.activeIndex,c=r.rtlTranslate,u=r.wrapperEl;if(r.animating&&o.preventInteractionOnTransition)return!1;var v=Math.min(r.params.slidesPerGroupSkip,n),f=v+Math.floor((n-v)/r.params.slidesPerGroup);f>=l.length&&(f=l.length-1),(p||o.initialSlide||0)===(h||0)&&i&&r.emit("beforeSlideChangeStart");var m,g=-l[f];if(r.updateProgress(g),o.normalizeSlideIndex)for(var b=0;b<d.length;b+=1)-Math.floor(100*g)>=Math.floor(100*d[b])&&(n=b);if(r.initialized&&n!==p){if(!r.allowSlideNext&&g<r.translate&&g<r.minTranslate())return!1;if(!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(p||0)!==n)return!1}if(m=n>p?"next":n<p?"prev":"reset",c&&-g===r.translate||!c&&g===r.translate)return r.updateActiveIndex(n),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==o.effect&&r.setTranslate(g),"reset"!==m&&(r.transitionStart(i,m),r.transitionEnd(i,m)),!1;if(o.cssMode){var w=r.isHorizontal(),y=-g;return c&&(y=u.scrollWidth-u.offsetWidth-y),0===t?u[w?"scrollLeft":"scrollTop"]=y:u.scrollTo?u.scrollTo(((a={})[w?"left":"top"]=y,a.behavior="smooth",a)):u[w?"scrollLeft":"scrollTop"]=y,!0}return 0===t?(r.setTransition(0),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.transitionEnd(i,m)):(r.setTransition(t),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(i,m))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}return this.slideTo(this.activeIndex+r,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,o=this.rtlTranslate;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function l(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=l(o?this.translate:-this.translate),p=r.map((function(e){return l(e)})),c=(n.map((function(e){return l(e)})),r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0===c&&s.cssMode&&r.forEach((function(e){!c&&h>=e&&(c=e)})),void 0!==c&&(d=n.indexOf(c))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===s&&(s=.5);var a=this.activeIndex,r=Math.min(this.params.slidesPerGroupSkip,a),n=r+Math.floor((a-r)/this.params.slidesPerGroup),o=this.rtlTranslate?this.translate:-this.translate;if(o>=this.snapGrid[n]){var l=this.snapGrid[n];o-l>(this.snapGrid[n+1]-l)*s&&(a+=this.params.slidesPerGroup)}else{var d=this.snapGrid[n-1];o-d<=(this.snapGrid[n]-d)*s&&(a-=this.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,this.slidesGrid.length-1),this.slideTo(a,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,s=t.$wrapperEl,a="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,r=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?r<t.loopedSlides-a/2||r>t.slides.length-t.loopedSlides+a/2?(t.loopFix(),r=s.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),d.nextTick((function(){t.slideTo(r)}))):t.slideTo(r):r>t.slides.length-a?(t.loopFix(),r=s.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),d.nextTick((function(){t.slideTo(r)}))):t.slideTo(r)}else t.slideTo(r)}},g={loopCreate:function(){var e=this,t=e.params,s=e.$wrapperEl;s.children("."+t.slideClass+"."+t.slideDuplicateClass).remove();var a=s.children("."+t.slideClass);if(t.loopFillGroupWithBlank){var r=t.slidesPerGroup-a.length%t.slidesPerGroup;if(r!==t.slidesPerGroup){for(var o=0;o<r;o+=1){var l=n(i.createElement("div")).addClass(t.slideClass+" "+t.slideBlankClass);s.append(l)}a=s.children("."+t.slideClass)}}"auto"!==t.slidesPerView||t.loopedSlides||(t.loopedSlides=a.length),e.loopedSlides=Math.ceil(parseFloat(t.loopedSlides||t.slidesPerView,10)),e.loopedSlides+=t.loopAdditionalSlides,e.loopedSlides>a.length&&(e.loopedSlides=a.length);var d=[],h=[];a.each((function(t,i){var s=n(i);t<e.loopedSlides&&h.push(i),t<a.length&&t>=a.length-e.loopedSlides&&d.push(i),s.attr("data-swiper-slide-index",t)}));for(var p=0;p<h.length;p+=1)s.append(n(h[p].cloneNode(!0)).addClass(t.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)s.prepend(n(d[c].cloneNode(!0)).addClass(t.slideDuplicateClass))},loopFix:function(){this.emit("beforeLoopFix");var e,t=this.activeIndex,i=this.slides,s=this.loopedSlides,a=this.allowSlidePrev,r=this.allowSlideNext,n=this.snapGrid,o=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var l=-n[t]-this.getTranslate();t<s?(e=i.length-3*s+t,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l)):t>=i.length-s&&(e=-i.length+t+s,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l)),this.allowSlidePrev=a,this.allowSlideNext=r,this.emit("loopFix")},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}},b={setGrabCursor:function(e){if(!(h.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){h.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this.el.style.cursor="")}},w,y,x,E,T,S,C,M,P,z,k,$,L,I,D,O={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&h.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&h.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,o=[],l=r-1;l>=e;l-=1){var d=this.slides.eq(l);d.remove(),o.unshift(d)}if("object"==typeof t&&"length"in t){for(var p=0;p<t.length;p+=1)t[p]&&i.append(t[p]);n=a>e?a+t.length:a}else i.append(t);for(var c=0;c<o.length;c+=1)i.append(o[c]);s.loop&&this.loopCreate(),s.observer&&h.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&h.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},A=(w=a.navigator.platform,y=a.navigator.userAgent,x={ios:!1,android:!1,androidChrome:!1,desktop:!1,iphone:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!(!a.cordova&&!a.phonegap),phonegap:!(!a.cordova&&!a.phonegap),electron:!1},E=a.screen.width,T=a.screen.height,S=y.match(/(Android);?[\s\/]+([\d.]+)?/),C=y.match(/(iPad).*OS\s([\d_]+)/),M=y.match(/(iPod)(.*OS\s([\d_]+))?/),P=!C&&y.match(/(iPhone\sOS|iOS)\s([\d_]+)/),z=y.indexOf("MSIE ")>=0||y.indexOf("Trident/")>=0,k=y.indexOf("Edge/")>=0,$=y.indexOf("Gecko/")>=0&&y.indexOf("Firefox/")>=0,L="Win32"===w,I=y.toLowerCase().indexOf("electron")>=0,D="MacIntel"===w,!C&&D&&h.touch&&(1024===E&&1366===T||834===E&&1194===T||834===E&&1112===T||768===E&&1024===T)&&(C=y.match(/(Version)\/([\d.]+)/),D=!1),x.ie=z,x.edge=k,x.firefox=$,S&&!L&&(x.os="android",x.osVersion=S[2],x.android=!0,x.androidChrome=y.toLowerCase().indexOf("chrome")>=0),(C||P||M)&&(x.os="ios",x.ios=!0),P&&!M&&(x.osVersion=P[2].replace(/_/g,"."),x.iphone=!0),C&&(x.osVersion=C[2].replace(/_/g,"."),x.ipad=!0),M&&(x.osVersion=M[3]?M[3].replace(/_/g,"."):null,x.ipod=!0),x.ios&&x.osVersion&&y.indexOf("Version/")>=0&&"10"===x.osVersion.split(".")[0]&&(x.osVersion=y.toLowerCase().split("version/")[1].split(" ")[0]),x.webView=!(!(P||C||M)||!y.match(/.*AppleWebKit(?!.*Safari)/i)&&!a.navigator.standalone)||a.matchMedia&&a.matchMedia("(display-mode: standalone)").matches,x.webview=x.webView,x.standalone=x.webView,x.desktop=!(x.ios||x.android)||I,x.desktop&&(x.electron=I,x.macos=D,x.windows=L,x.macos&&(x.os="macos"),x.windows&&(x.os="windows")),x.pixelRatio=a.devicePixelRatio||1,x);function G(e){var t=this.touchEventsData,s=this.params,r=this.touches;if(!this.animating||!s.preventInteractionOnTransition){var o=e;o.originalEvent&&(o=o.originalEvent);var l=n(o.target);if(("wrapper"!==s.touchEventsTarget||l.closest(this.wrapperEl).length)&&(t.isTouchEvent="touchstart"===o.type,(t.isTouchEvent||!("which"in o)||3!==o.which)&&!(!t.isTouchEvent&&"button"in o&&o.button>0||t.isTouched&&t.isMoved)))if(s.noSwiping&&l.closest(s.noSwipingSelector?s.noSwipingSelector:"."+s.noSwipingClass)[0])this.allowClick=!0;else if(!s.swipeHandler||l.closest(s.swipeHandler)[0]){r.currentX="touchstart"===o.type?o.targetTouches[0].pageX:o.pageX,r.currentY="touchstart"===o.type?o.targetTouches[0].pageY:o.pageY;var h=r.currentX,p=r.currentY,c=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,u=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(!c||!(h<=u||h>=a.screen.width-u)){if(d.extend(t,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=h,r.startY=p,t.touchStartTime=d.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,s.threshold>0&&(t.allowThresholdMove=!1),"touchstart"!==o.type){var v=!0;l.is(t.formElements)&&(v=!1),i.activeElement&&n(i.activeElement).is(t.formElements)&&i.activeElement!==l[0]&&i.activeElement.blur();var f=v&&this.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||f)&&o.preventDefault()}this.emit("touchStart",o)}}}}function H(e){var t=this.touchEventsData,s=this.params,a=this.touches,r=this.rtlTranslate,o=e;if(o.originalEvent&&(o=o.originalEvent),t.isTouched){if(!t.isTouchEvent||"touchmove"===o.type){var l="touchmove"===o.type&&o.targetTouches&&(o.targetTouches[0]||o.changedTouches[0]),h="touchmove"===o.type?l.pageX:o.pageX,p="touchmove"===o.type?l.pageY:o.pageY;if(o.preventedByNestedSwiper)return a.startX=h,void(a.startY=p);if(!this.allowTouchMove)return this.allowClick=!1,void(t.isTouched&&(d.extend(a,{startX:h,startY:p,currentX:h,currentY:p}),t.touchStartTime=d.now()));if(t.isTouchEvent&&s.touchReleaseOnEdges&&!s.loop)if(this.isVertical()){if(p<a.startY&&this.translate<=this.maxTranslate()||p>a.startY&&this.translate>=this.minTranslate())return t.isTouched=!1,void(t.isMoved=!1)}else if(h<a.startX&&this.translate<=this.maxTranslate()||h>a.startX&&this.translate>=this.minTranslate())return;if(t.isTouchEvent&&i.activeElement&&o.target===i.activeElement&&n(o.target).is(t.formElements))return t.isMoved=!0,void(this.allowClick=!1);if(t.allowTouchCallbacks&&this.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){a.currentX=h,a.currentY=p;var c=a.currentX-a.startX,u=a.currentY-a.startY,v;if(!(this.params.threshold&&Math.sqrt(Math.pow(c,2)+Math.pow(u,2))<this.params.threshold))if(void 0===t.isScrolling&&(this.isHorizontal()&&a.currentY===a.startY||this.isVertical()&&a.currentX===a.startX?t.isScrolling=!1:c*c+u*u>=25&&(v=180*Math.atan2(Math.abs(u),Math.abs(c))/Math.PI,t.isScrolling=this.isHorizontal()?v>s.touchAngle:90-v>s.touchAngle)),t.isScrolling&&this.emit("touchMoveOpposite",o),void 0===t.startMoving&&(a.currentX===a.startX&&a.currentY===a.startY||(t.startMoving=!0)),t.isScrolling)t.isTouched=!1;else if(t.startMoving){this.allowClick=!1,!s.cssMode&&o.cancelable&&o.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&o.stopPropagation(),t.isMoved||(s.loop&&this.loopFix(),t.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),t.allowMomentumBounce=!1,!s.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",o)),this.emit("sliderMove",o),t.isMoved=!0;var f=this.isHorizontal()?c:u;a.diff=f,f*=s.touchRatio,r&&(f=-f),this.swipeDirection=f>0?"prev":"next",t.currentTranslate=f+t.startTranslate;var m=!0,g=s.resistanceRatio;if(s.touchReleaseOnEdges&&(g=0),f>0&&t.currentTranslate>this.minTranslate()?(m=!1,s.resistance&&(t.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+t.startTranslate+f,g))):f<0&&t.currentTranslate<this.maxTranslate()&&(m=!1,s.resistance&&(t.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-t.startTranslate-f,g))),m&&(o.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&t.currentTranslate<t.startTranslate&&(t.currentTranslate=t.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&t.currentTranslate>t.startTranslate&&(t.currentTranslate=t.startTranslate),s.threshold>0){if(!(Math.abs(f)>s.threshold||t.allowThresholdMove))return void(t.currentTranslate=t.startTranslate);if(!t.allowThresholdMove)return t.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,t.currentTranslate=t.startTranslate,void(a.diff=this.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY)}s.followFinger&&!s.cssMode&&((s.freeMode||s.watchSlidesProgress||s.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),s.freeMode&&(0===t.velocities.length&&t.velocities.push({position:a[this.isHorizontal()?"startX":"startY"],time:t.touchStartTime}),t.velocities.push({position:a[this.isHorizontal()?"currentX":"currentY"],time:d.now()})),this.updateProgress(t.currentTranslate),this.setTranslate(t.currentTranslate))}}}}else t.startMoving&&t.isScrolling&&this.emit("touchMoveOpposite",o)}function B(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=d.now(),u=c-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap click",h),u<300&&c-i.lastClickTime<300&&t.emit("doubleTap doubleClick",h)),i.lastClickTime=d.now(),d.nextTick((function(){t.destroyed||(t.allowClick=!0)})),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,!s.cssMode)if(s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||d.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var b=1e3*s.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,E,T=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),x=t.maxTranslate(),T=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(E=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),x=t.minTranslate(),T=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(E=!0);else if(s.freeModeSticky){for(var C,M=0;M<l.length;M+=1)if(l[M]>-y){C=M;break}y=-(y=Math.abs(l[C]-y)<Math.abs(l[C-1]-y)||"next"===t.swipeDirection?l[C]:l[C-1])}if(E&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),s.freeModeSticky){var P=Math.abs((r?-y:y)-t.translate),z=t.slidesSizesGrid[t.activeIndex];b=P<z?s.speed:P<2*z?1.5*s.speed:2.5*s.speed}}else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&T?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),setTimeout((function(){t.setTranslate(x),n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var k=0,$=t.slidesSizesGrid[0],L=0;L<o.length;L+=L<s.slidesPerGroupSkip?1:s.slidesPerGroup){var I=L<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==o[L+I]?p>=o[L]&&p<o[L+I]&&(k=L,$=o[L+I]-o[L]):p>=o[L]&&(k=L,$=o[o.length-1]-o[o.length-2])}var D=(p-o[k])/$,O=k<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(D>=s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k)),"prev"===t.swipeDirection&&(D>1-s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);!t.navigation||h.target!==t.navigation.nextEl&&h.target!==t.navigation.prevEl?("next"===t.swipeDirection&&t.slideTo(k+O),"prev"===t.swipeDirection&&t.slideTo(k)):h.target===t.navigation.nextEl?t.slideTo(k+O):t.slideTo(k)}}}function N(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.isBeginning&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0),this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}function X(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function V(){var e=this.wrapperEl,t=this.rtlTranslate;this.previousTranslate=this.translate,this.isHorizontal()?this.translate=t?e.scrollWidth-e.offsetWidth-e.scrollLeft:-e.scrollLeft:this.translate=-e.scrollTop,-0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();var i=this.maxTranslate()-this.minTranslate();(0===i?0:(this.translate-this.minTranslate())/i)!==this.progress&&this.updateProgress(t?-this.translate:this.translate),this.emit("setTranslate",this.translate,!1)}var Y=!1;function F(){}var W={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},R={update:u,translate:v,transition:f,slide:m,loop:g,grabCursor:b,manipulation:O,events:{attachEvents:function(){var e=this.params,t=this.touchEvents,s=this.el,a=this.wrapperEl;this.onTouchStart=G.bind(this),this.onTouchMove=H.bind(this),this.onTouchEnd=B.bind(this),e.cssMode&&(this.onScroll=V.bind(this)),this.onClick=X.bind(this);var r=!!e.nested;if(!h.touch&&h.pointerEvents)s.addEventListener(t.start,this.onTouchStart,!1),i.addEventListener(t.move,this.onTouchMove,r),i.addEventListener(t.end,this.onTouchEnd,!1);else{if(h.touch){var n=!("touchstart"!==t.start||!h.passiveListener||!e.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(t.start,this.onTouchStart,n),s.addEventListener(t.move,this.onTouchMove,h.passiveListener?{passive:!1,capture:r}:r),s.addEventListener(t.end,this.onTouchEnd,n),t.cancel&&s.addEventListener(t.cancel,this.onTouchEnd,n),Y||(i.addEventListener("touchstart",F),Y=!0)}(e.simulateTouch&&!A.ios&&!A.android||e.simulateTouch&&!h.touch&&A.ios)&&(s.addEventListener("mousedown",this.onTouchStart,!1),i.addEventListener("mousemove",this.onTouchMove,r),i.addEventListener("mouseup",this.onTouchEnd,!1))}(e.preventClicks||e.preventClicksPropagation)&&s.addEventListener("click",this.onClick,!0),e.cssMode&&a.addEventListener("scroll",this.onScroll),e.updateOnWindowResize?this.on(A.ios||A.android?"resize orientationchange observerUpdate":"resize observerUpdate",N,!0):this.on("observerUpdate",N,!0)},detachEvents:function(){var e=this.params,t=this.touchEvents,s=this.el,a=this.wrapperEl,r=!!e.nested;if(!h.touch&&h.pointerEvents)s.removeEventListener(t.start,this.onTouchStart,!1),i.removeEventListener(t.move,this.onTouchMove,r),i.removeEventListener(t.end,this.onTouchEnd,!1);else{if(h.touch){var n=!("onTouchStart"!==t.start||!h.passiveListener||!e.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(t.start,this.onTouchStart,n),s.removeEventListener(t.move,this.onTouchMove,r),s.removeEventListener(t.end,this.onTouchEnd,n),t.cancel&&s.removeEventListener(t.cancel,this.onTouchEnd,n)}(e.simulateTouch&&!A.ios&&!A.android||e.simulateTouch&&!h.touch&&A.ios)&&(s.removeEventListener("mousedown",this.onTouchStart,!1),i.removeEventListener("mousemove",this.onTouchMove,r),i.removeEventListener("mouseup",this.onTouchEnd,!1))}(e.preventClicks||e.preventClicksPropagation)&&s.removeEventListener("click",this.onClick,!0),e.cssMode&&a.removeEventListener("scroll",this.onScroll),this.off(A.ios||A.android?"resize orientationchange observerUpdate":"resize observerUpdate",N)}},breakpoints:{setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides;void 0===i&&(i=0);var s=this.params,a=this.$el,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var n=this.getBreakpoint(r);if(n&&this.currentBreakpoint!==n){var o=n in r?r[n]:void 0;o&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=o[e];void 0!==t&&(o[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var l=o||this.originalParams,h=s.slidesPerColumn>1,p=l.slidesPerColumn>1;h&&!p?a.removeClass(s.containerModifierClass+"multirow "+s.containerModifierClass+"multirow-column"):!h&&p&&(a.addClass(s.containerModifierClass+"multirow"),"column"===l.slidesPerColumnFill&&a.addClass(s.containerModifierClass+"multirow-column"));var c=l.direction&&l.direction!==s.direction,u=s.loop&&(l.slidesPerView!==s.slidesPerView||c);c&&t&&this.changeDirection(),d.extend(this.params,l),d.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=n,u&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-i+this.loopedSlides,0,!1)),this.emit("breakpoint",l)}}},getBreakpoint:function(e){if(e){var t=!1,i=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var t=parseFloat(e.substr(1));return{value:a.innerHeight*t,point:e}}return{value:e,point:e}}));i.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var s=0;s<i.length;s+=1){var r=i[s],n=r.point;r.value<=a.innerWidth&&(t=n)}return t||"max"}}},checkOverflow:{checkOverflow:function(){var e=this.params,t=this.isLocked,i=this.slides.length>0&&e.slidesOffsetBefore+e.spaceBetween*(this.slides.length-1)+this.slides[0].offsetWidth*this.slides.length;e.slidesOffsetBefore&&e.slidesOffsetAfter&&i?this.isLocked=i<=this.size:this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,t!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),t&&t!==this.isLocked&&(this.isEnd=!1,this.navigation&&this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push("initialized"),a.push(t.direction),t.freeMode&&a.push("free-mode"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&(a.push("multirow"),"column"===t.slidesPerColumnFill&&a.push("multirow-column")),A.android&&a.push("android"),A.ios&&a.push("ios"),t.cssMode&&a.push("css-mode"),a.forEach((function(i){e.push(t.containerModifierClass+i)})),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,i,s,r,o){var l;function d(){o&&o()}n(e).parent("picture")[0]||e.complete&&r?d():t?((l=new a.Image).onload=d,l.onerror=d,s&&(l.sizes=s),i&&(l.srcset=i),t&&(l.src=t)):d()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},q={},j=function(e){function t(){for(var i,s,a,r=[],o=arguments.length;o--;)r[o]=arguments[o];1===r.length&&r[0].constructor&&r[0].constructor===Object?a=r[0]:(s=(i=r)[0],a=i[1]),a||(a={}),a=d.extend({},a),s&&!a.el&&(a.el=s),e.call(this,a),Object.keys(R).forEach((function(e){Object.keys(R[e]).forEach((function(i){t.prototype[i]||(t.prototype[i]=R[e][i])}))}));var l=this;void 0===l.modules&&(l.modules={}),Object.keys(l.modules).forEach((function(e){var t=l.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(!(i in a&&"enabled"in s))return;!0===a[i]&&(a[i]={enabled:!0}),"object"!=typeof a[i]||"enabled"in a[i]||(a[i].enabled=!0),a[i]||(a[i]={enabled:!1})}}));var p=d.extend({},W);l.useModulesParams(p),l.params=d.extend({},p,q,a),l.originalParams=d.extend({},l.params),l.passedParams=d.extend({},a),l.$=n;var c=n(l.params.el);if(s=c[0]){if(c.length>1){var u=[];return c.each((function(e,i){var s=d.extend({},a,{el:i});u.push(new t(s))})),u}var v,f,m;return s.swiper=l,c.data("swiper",l),s&&s.shadowRoot&&s.shadowRoot.querySelector?(v=n(s.shadowRoot.querySelector("."+l.params.wrapperClass))).children=function(e){return c.children(e)}:v=c.children("."+l.params.wrapperClass),d.extend(l,{$el:c,el:s,$wrapperEl:v,wrapperEl:v[0],classNames:[],slides:n(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===l.params.direction},isVertical:function(){return"vertical"===l.params.direction},rtl:"rtl"===s.dir.toLowerCase()||"rtl"===c.css("direction"),rtlTranslate:"horizontal"===l.params.direction&&("rtl"===s.dir.toLowerCase()||"rtl"===c.css("direction")),wrongRTL:"-webkit-box"===v.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEvents:(f=["touchstart","touchmove","touchend","touchcancel"],m=["mousedown","mousemove","mouseup"],h.pointerEvents&&(m=["pointerdown","pointermove","pointerup"]),l.touchEventsTouch={start:f[0],move:f[1],end:f[2],cancel:f[3]},l.touchEventsDesktop={start:m[0],move:m[1],end:m[2]},h.touch||!l.params.simulateTouch?l.touchEventsTouch:l.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:d.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.useModules(),l.params.init&&l.init(),l}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,o=t[a].swiperSlideSize,l=a+1;l<t.length;l+=1)t[l]&&!n&&(r+=1,(o+=t[l].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(o+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},t.prototype.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.changeDirection=function(e,t){void 0===t&&(t=!0);var i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(this.$el.removeClass(""+this.params.containerModifierClass+i).addClass(""+this.params.containerModifierClass+e),this.params.direction=e,this.slides.each((function(t,i){"vertical"===e?i.style.width="":i.style.height=""})),this.emit("changeDirection"),t&&this.update()),this},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,r=i.$wrapperEl,n=i.slides;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),d.deleteProps(i)),i.destroyed=!0),null},t.extendDefaults=function(e){d.extend(q,e)},i.extendedDefaults.get=function(){return q},i.defaults.get=function(){return W},i.Class.get=function(){return e},i.$.get=function(){return n},Object.defineProperties(t,i),t}(p),K={name:"device",proto:{device:A},static:{device:A}},U={name:"support",proto:{support:h},static:{support:h}},_={isEdge:!!a.navigator.userAgent.match(/Edge/g),isSafari:function(){var e=a.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a.navigator.userAgent)},Z={name:"browser",proto:{browser:_},static:{browser:_}},Q={name:"resize",create:function(){var e=this;d.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){a.addEventListener("resize",this.resize.resizeHandler),a.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){a.removeEventListener("resize",this.resize.resizeHandler),a.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},J={func:a.MutationObserver||a.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var i=this,s=new(0,J.func)((function(e){if(1!==e.length){var t=function(){i.emit("observerUpdate",e[0])};a.requestAnimationFrame?a.requestAnimationFrame(t):a.setTimeout(t,0)}else i.emit("observerUpdate",e[0])}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.observer.observers.push(s)},init:function(){if(h.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:this.params.observeSlideChildren}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},ee={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){d.extend(this,{observer:{init:J.init.bind(this),attach:J.attach.bind(this),destroy:J.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},te={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,n=t.params.virtual,o=n.addSlidesBefore,l=n.addSlidesAfter,h=t.virtual,p=h.from,c=h.to,u=h.slides,v=h.slidesGrid,f=h.renderSlide,m=h.offset;t.updateActiveIndex();var g,b,w,y=t.activeIndex||0;g=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(b=Math.floor(s/2)+a+o,w=Math.floor(s/2)+a+l):(b=s+(a-1)+o,w=a+l);var x=Math.max((y||0)-w,0),E=Math.min((y||0)+b,u.length-1),T=(t.slidesGrid[x]||0)-(t.slidesGrid[0]||0);function S(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(d.extend(t.virtual,{from:x,to:E,offset:T,slidesGrid:t.slidesGrid}),p===x&&c===E&&!e)return t.slidesGrid!==v&&T!==m&&t.slides.css(g,T+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:T,from:x,to:E,slides:function(){for(var e=[],t=x;t<=E;t+=1)e.push(u[t]);return e}()}),void S();var C=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var P=p;P<=c;P+=1)(P<x||P>E)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+P+'"]').remove();for(var z=0;z<u.length;z+=1)z>=x&&z<=E&&(void 0===c||e?M.push(z):(z>c&&M.push(z),z<p&&C.push(z)));M.forEach((function(e){t.$wrapperEl.append(f(u[e],e))})),C.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(f(u[e],e))})),t.$wrapperEl.children(".swiper-slide").css(g,T+"px"),S()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var s=i.renderSlide?n(i.renderSlide.call(this,e,t)):n('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=s),s},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this.activeIndex,i=t+1,s=1;if(Array.isArray(e)){for(var a=0;a<e.length;a+=1)e[a]&&this.virtual.slides.unshift(e[a]);i=t+e.length,s=e.length}else this.virtual.slides.unshift(e);if(this.params.virtual.cache){var r=this.virtual.cache,n={};Object.keys(r).forEach((function(e){var t=r[e],i=t.attr("data-swiper-slide-index");i&&t.attr("data-swiper-slide-index",parseInt(i,10)+1),n[parseInt(e,10)+s]=t})),this.virtual.cache=n}this.virtual.update(!0),this.slideTo(i,0)},removeSlide:function(e){if(null!=e){var t=this.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)this.virtual.slides.splice(e[i],1),this.params.virtual.cache&&delete this.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else this.virtual.slides.splice(e,1),this.params.virtual.cache&&delete this.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);this.virtual.update(!0),this.slideTo(t,0)}},removeAllSlides:function(){this.virtual.slides=[],this.params.virtual.cache&&(this.virtual.cache={}),this.virtual.update(!0),this.slideTo(0,0)}},ie={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){d.extend(this,{virtual:{update:te.update.bind(this),appendSlide:te.appendSlide.bind(this),prependSlide:te.prependSlide.bind(this),removeSlide:te.removeSlide.bind(this),removeAllSlides:te.removeAllSlides.bind(this),renderSlide:te.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};d.extend(this.params,e),d.extend(this.originalParams,e),this.params.initialSlide||this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},se={handle:function(e){var t=this.rtlTranslate,s=e;s.originalEvent&&(s=s.originalEvent);var r=s.keyCode||s.charCode,n=this.params.keyboard.pageUpDown,o=n&&33===r,l=n&&34===r,d=37===r,h=39===r,p=38===r,c=40===r;if(!this.allowSlideNext&&(this.isHorizontal()&&h||this.isVertical()&&c||l))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&d||this.isVertical()&&p||o))return!1;if(!(s.shiftKey||s.altKey||s.ctrlKey||s.metaKey||i.activeElement&&i.activeElement.nodeName&&("input"===i.activeElement.nodeName.toLowerCase()||"textarea"===i.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(o||l||d||h||p||c)){var u=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var v=a.innerWidth,f=a.innerHeight,m=this.$el.offset();t&&(m.left-=this.$el[0].scrollLeft);for(var g=[[m.left,m.top],[m.left+this.width,m.top],[m.left,m.top+this.height],[m.left+this.width,m.top+this.height]],b=0;b<g.length;b+=1){var w=g[b];w[0]>=0&&w[0]<=v&&w[1]>=0&&w[1]<=f&&(u=!0)}if(!u)return}this.isHorizontal()?((o||l||d||h)&&(s.preventDefault?s.preventDefault():s.returnValue=!1),((l||h)&&!t||(o||d)&&t)&&this.slideNext(),((o||d)&&!t||(l||h)&&t)&&this.slidePrev()):((o||l||p||c)&&(s.preventDefault?s.preventDefault():s.returnValue=!1),(l||c)&&this.slideNext(),(o||p)&&this.slidePrev()),this.emit("keyPress",r)}},enable:function(){this.keyboard.enabled||(n(i).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(n(i).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},ae={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}},create:function(){d.extend(this,{keyboard:{enabled:!1,enable:se.enable.bind(this),disable:se.disable.bind(this),handle:se.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}},re={lastScrollTime:d.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return a.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e="onwheel"in i;if(!e){var t=i.createElement("div");t.setAttribute("onwheel","return;"),e="function"==typeof t.onwheel}return!e&&i.implementation&&i.implementation.hasFeature&&!0!==i.implementation.hasFeature("","")&&(e=i.implementation.hasFeature("Events.wheel","3.0")),e}()?"wheel":"mousewheel"},normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),e.shiftKey&&!s&&(s=a,a=0),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,i=this,s=i.params.mousewheel;i.params.cssMode&&t.preventDefault();var a=i.$el;if("container"!==i.params.mousewheel.eventsTarged&&(a=n(i.params.mousewheel.eventsTarged)),!i.mouseEntered&&!a[0].contains(t.target)&&!s.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var r=0,o=i.rtlTranslate?-1:1,l=re.normalize(t);if(s.forceToAxis)if(i.isHorizontal()){if(!(Math.abs(l.pixelX)>Math.abs(l.pixelY)))return!0;r=-l.pixelX*o}else{if(!(Math.abs(l.pixelY)>Math.abs(l.pixelX)))return!0;r=-l.pixelY}else r=Math.abs(l.pixelX)>Math.abs(l.pixelY)?-l.pixelX*o:-l.pixelY;if(0===r)return!0;if(s.invert&&(r=-r),i.params.freeMode){var h={time:d.now(),delta:Math.abs(r),direction:Math.sign(r)},p=i.mousewheel.lastEventBeforeSnap,c=p&&h.time<p.time+500&&h.delta<=p.delta&&h.direction===p.direction;if(!c){i.mousewheel.lastEventBeforeSnap=void 0,i.params.loop&&i.loopFix();var u=i.getTranslate()+r*s.sensitivity,v=i.isBeginning,f=i.isEnd;if(u>=i.minTranslate()&&(u=i.minTranslate()),u<=i.maxTranslate()&&(u=i.maxTranslate()),i.setTransition(0),i.setTranslate(u),i.updateProgress(),i.updateActiveIndex(),i.updateSlidesClasses(),(!v&&i.isBeginning||!f&&i.isEnd)&&i.updateSlidesClasses(),i.params.freeModeSticky){clearTimeout(i.mousewheel.timeout),i.mousewheel.timeout=void 0;var m=i.mousewheel.recentWheelEvents;m.length>=15&&m.shift();var g=m.length?m[m.length-1]:void 0,b=m[0];if(m.push(h),g&&(h.delta>g.delta||h.direction!==g.direction))m.splice(0);else if(m.length>=15&&h.time-b.time<500&&b.delta-h.delta>=1&&h.delta<=6){var w=r>0?.8:.2;i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.mousewheel.timeout=d.nextTick((function(){i.slideToClosest(i.params.speed,!0,void 0,w)}),0)}i.mousewheel.timeout||(i.mousewheel.timeout=d.nextTick((function(){i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.slideToClosest(i.params.speed,!0,void 0,.5)}),500))}if(c||i.emit("scroll",t),i.params.autoplay&&i.params.autoplayDisableOnInteraction&&i.autoplay.stop(),u===i.minTranslate()||u===i.maxTranslate())return!0}}else{var y={time:d.now(),delta:Math.abs(r),direction:Math.sign(r),raw:e},x=i.mousewheel.recentWheelEvents;x.length>=2&&x.shift();var E=x.length?x[x.length-1]:void 0;if(x.push(y),E?(y.direction!==E.direction||y.delta>E.delta||y.time>E.time+150)&&i.mousewheel.animateSlider(y):i.mousewheel.animateSlider(y),i.mousewheel.releaseScroll(y))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},animateSlider:function(e){return e.delta>=6&&d.now()-this.mousewheel.lastScrollTime<60||(e.direction<0?this.isEnd&&!this.params.loop||this.animating||(this.slideNext(),this.emit("scroll",e.raw)):this.isBeginning&&!this.params.loop||this.animating||(this.slidePrev(),this.emit("scroll",e.raw)),this.mousewheel.lastScrollTime=(new a.Date).getTime(),!1)},releaseScroll:function(e){var t=this.params.mousewheel;if(e.direction<0){if(this.isEnd&&!this.params.loop&&t.releaseOnEdges)return!0}else if(this.isBeginning&&!this.params.loop&&t.releaseOnEdges)return!0;return!1},enable:function(){var e=re.event();if(this.params.cssMode)return this.wrapperEl.removeEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=n(this.params.mousewheel.eventsTarged)),t.on("mouseenter",this.mousewheel.handleMouseEnter),t.on("mouseleave",this.mousewheel.handleMouseLeave),t.on(e,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){var e=re.event();if(this.params.cssMode)return this.wrapperEl.addEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(!this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=n(this.params.mousewheel.eventsTarged)),t.off(e,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},ne={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,i=this.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=n(i.nextEl),this.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===this.$el.find(i.nextEl).length&&(e=this.$el.find(i.nextEl))),i.prevEl&&(t=n(i.prevEl),this.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===this.$el.find(i.prevEl).length&&(t=this.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",this.navigation.onNextClick),t&&t.length>0&&t.on("click",this.navigation.onPrevClick),d.extend(this.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click",this.navigation.onNextClick),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click",this.navigation.onPrevClick),i.removeClass(this.params.navigation.disabledClass))}},oe={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,s=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,a=this.pagination.$el,r=this.params.loop?Math.ceil((s-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>s-1-2*this.loopedSlides&&(i-=s-2*this.loopedSlides),i>r-1&&(i-=r),i<0&&"bullets"!==this.params.paginationType&&(i=r+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var o,l,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),a.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),o=i-this.pagination.dynamicBulletIndex,d=((l=o+(Math.min(h.length,t.dynamicMainBullets)-1))+o)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),a.length>1)h.each((function(e,s){var a=n(s),r=a.index();r===i&&a.addClass(t.bulletActiveClass),t.dynamicBullets&&(r>=o&&r<=l&&a.addClass(t.bulletActiveClass+"-main"),r===o&&a.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),r===l&&a.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var p=h.eq(i),c=p.index();if(p.addClass(t.bulletActiveClass),t.dynamicBullets){for(var u=h.eq(o),v=h.eq(l),f=o;f<=l;f+=1)h.eq(f).addClass(t.bulletActiveClass+"-main");if(this.params.loop)if(c>=h.length-t.dynamicMainBullets){for(var m=t.dynamicMainBullets;m>=0;m-=1)h.eq(h.length-m).addClass(t.bulletActiveClass+"-main");h.eq(h.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var g=Math.min(h.length,t.dynamicMainBullets+4),b=(this.pagination.bulletSize*g-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,w=e?"right":"left";h.css(this.isHorizontal()?w:"top",b+"px")}}if("fraction"===t.type&&(a.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),a.find("."+t.totalClass).text(t.formatFractionTotal(r))),"progressbar"===t.type){var y;y=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var x=(i+1)/r,E=1,T=1;"horizontal"===y?E=x:T=x,a.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+E+") scaleY("+T+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(a.html(t.renderCustom(this,i+1,r)),this.emit("paginationRender",this,a[0])):this.emit("paginationUpdate",this,a[0]),a[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=n(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,(function(t){t.preventDefault();var i=n(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)})),d.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},le={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,o=this.params.scrollbar,l=s,d=(a-s)*i;t?(d=-d)>0?(l=s-d,d=0):-d+s>a&&(l=a+d):d<0?(l=s+d,d=0):d+s>a&&(l=a-d),this.isHorizontal()?(r.transform("translate3d("+d+"px, 0, 0)"),r[0].style.width=l+"px"):(r.transform("translate3d(0px, "+d+"px, 0)"),r[0].style.height=l+"px"),o.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout((function(){n[0].style.opacity=0,n.transition(400)}),1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,n=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbar.hide&&(i[0].style.opacity=0),d.extend(e,{trackSize:a,divider:r,moveDivider:n,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize,o=i.dragStartPos;t=(i.getPointerPosition(e)-a.offset()[this.isHorizontal()?"left":"top"]-(null!==o?o:r/2))/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(l),this.setTranslate(l),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,this.scrollbar.dragStartPos=e.target===r[0]||e.target===r?i.getPointerPosition(e)-e.target.getBoundingClientRect()[this.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.params.cssMode&&this.$wrapperEl.css("scroll-snap-type","none"),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,this.params.cssMode&&(this.$wrapperEl.css("scroll-snap-type",""),s.transition("")),t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=d.nextTick((function(){a.css("opacity",0),a.transition(400)}),1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=e.$el[0],n=!(!h.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},o=!(!h.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};h.touch?(r.addEventListener(t.start,this.scrollbar.onDragStart,n),r.addEventListener(t.move,this.scrollbar.onDragMove,n),r.addEventListener(t.end,this.scrollbar.onDragEnd,o)):(r.addEventListener(s.start,this.scrollbar.onDragStart,n),i.addEventListener(s.move,this.scrollbar.onDragMove,n),i.addEventListener(s.end,this.scrollbar.onDragEnd,o))}},disableDraggable:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=e.$el[0],n=!(!h.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},o=!(!h.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};h.touch?(r.removeEventListener(t.start,this.scrollbar.onDragStart,n),r.removeEventListener(t.move,this.scrollbar.onDragMove,n),r.removeEventListener(t.end,this.scrollbar.onDragEnd,o)):(r.removeEventListener(s.start,this.scrollbar.onDragStart,n),i.removeEventListener(s.move,this.scrollbar.onDragMove,n),i.removeEventListener(s.end,this.scrollbar.onDragEnd,o))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,s=n(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&s.length>1&&1===t.find(i.el).length&&(s=t.find(i.el));var a=s.find("."+this.params.scrollbar.dragClass);0===a.length&&(a=n('<div class="'+this.params.scrollbar.dragClass+'"></div>'),s.append(a)),d.extend(e,{$el:s,el:s[0],$dragEl:a,dragEl:a[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},de={setTransform:function(e,t){var i=this.rtl,s=n(e),a=i?-1:1,r=s.attr("data-swiper-parallax")||"0",o=s.attr("data-swiper-parallax-x"),l=s.attr("data-swiper-parallax-y"),d=s.attr("data-swiper-parallax-scale"),h=s.attr("data-swiper-parallax-opacity");if(o||l?(o=o||"0",l=l||"0"):this.isHorizontal()?(o=r,l="0"):(l=r,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*t*a+"%":o*t*a+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=h){var p=h-(h-1)*(1-Math.abs(t));s[0].style.opacity=p}if(null==d)s.transform("translate3d("+o+", "+l+", 0px)");else{var c=d-(d-1)*(1-Math.abs(t));s.transform("translate3d("+o+", "+l+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,s=e.progress,a=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,s)})),i.each((function(t,i){var r=i.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(r+=Math.ceil(t/2)-s*(a.length-1)),r=Math.min(Math.max(r,-1),1),n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,r)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed),this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){var s=n(i),a=parseInt(s.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),s.transition(a)}))}},he={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!h.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,s.scaleStart=he.getDistanceBetweenTouches(e)}s.$slideEl&&s.$slideEl.length||(s.$slideEl=n(e.target).closest("."+this.params.slideClass),0===s.$slideEl.length&&(s.$slideEl=this.slides.eq(this.activeIndex)),s.$imageEl=s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),s.$imageWrapEl=s.$imageEl.parent("."+t.containerClass),s.maxRatio=s.$imageWrapEl.attr("data-swiper-zoom")||t.maxRatio,0!==s.$imageWrapEl.length)?(s.$imageEl&&s.$imageEl.transition(0),this.zoom.isScaling=!0):s.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!h.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=he.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=h.gestures?e.scale*i.currentScale:s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<t.minRatio&&(i.scale=t.minRatio+1-Math.pow(t.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!h.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!A.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),t.minRatio),s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,i=t.gesture,s=t.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(A.android&&e.cancelable&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=d.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=d.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,n=s.height*t.scale;if(!(r<i.slideWidth&&n<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-n/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,o=i.currentX+n,l=s.y*r,d=i.currentY+l;0!==s.x&&(a=Math.abs((o-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=o,i.currentY=d;var p=i.width*e.scale,c=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-c/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl&&t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl&&t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,s,a,r,n,o,l,d,h,p,c,u,v,f,m,g=this.zoom,b=this.params.zoom,w=g.gesture,y=g.image;w.$slideEl||(this.params.virtual&&this.params.virtual.enabled&&this.virtual?w.$slideEl=this.$wrapperEl.children("."+this.params.slideActiveClass):w.$slideEl=this.slides.eq(this.activeIndex),w.$imageEl=w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),w.$imageWrapEl=w.$imageEl.parent("."+b.containerClass)),w.$imageEl&&0!==w.$imageEl.length&&(w.$slideEl.addClass(""+b.zoomedSlideClass),void 0===y.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=y.touchesStart.x,i=y.touchesStart.y),g.scale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,g.currentScale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,e?(f=w.$slideEl[0].offsetWidth,m=w.$slideEl[0].offsetHeight,s=w.$slideEl.offset().left+f/2-t,a=w.$slideEl.offset().top+m/2-i,o=w.$imageEl[0].offsetWidth,l=w.$imageEl[0].offsetHeight,d=o*g.scale,h=l*g.scale,u=-(p=Math.min(f/2-d/2,0)),v=-(c=Math.min(m/2-h/2,0)),(r=s*g.scale)<p&&(r=p),r>u&&(r=u),(n=a*g.scale)<c&&(n=c),n>v&&(n=v)):(r=0,n=0),w.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),w.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+g.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(this.params.virtual&&this.params.virtual.enabled&&this.virtual?i.$slideEl=this.$wrapperEl.children("."+this.params.slideActiveClass):i.$slideEl=this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this.zoom;if(!e.enabled){e.enabled=!0;var t=!("touchstart"!==this.touchEvents.start||!h.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!h.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;h.gestures?(this.$wrapperEl.on("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.on("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.on("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.on(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.on(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.on(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}},disable:function(){var e=this.zoom;if(e.enabled){this.zoom.enabled=!1;var t=!("touchstart"!==this.touchEvents.start||!h.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!h.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;h.gestures?(this.$wrapperEl.off("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.off("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.off("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.off(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.off(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.off(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}}},pe={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,s=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var a=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),r=a.find("."+s.elementClass+":not(."+s.loadedClass+"):not(."+s.loadingClass+")");!a.hasClass(s.elementClass)||a.hasClass(s.loadedClass)||a.hasClass(s.loadingClass)||(r=r.add(a[0])),0!==r.length&&r.each((function(e,r){var o=n(r);o.addClass(s.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),h=o.attr("data-srcset"),p=o.attr("data-sizes"),c=o.parent("picture");i.loadImage(o[0],d||l,h,p,!1,(function(){if(null!=i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(h&&(o.attr("srcset",h),o.removeAttr("data-srcset")),p&&(o.attr("sizes",p),o.removeAttr("data-sizes")),c.length&&c.children("source").each((function(e,t){var i=n(t);i.attr("data-srcset")&&(i.attr("srcset",i.attr("data-srcset")),i.removeAttr("data-srcset"))})),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(s.loadedClass).removeClass(s.loadingClass),a.find("."+s.preloaderClass).remove(),i.params.loop&&t){var e=a.attr("data-swiper-slide-index");if(a.hasClass(i.params.slideDuplicateClass)){var r=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(r.index(),!1)}else{var u=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(u.index(),!1)}}i.emit("lazyImageReady",a[0],o[0]),i.params.autoHeight&&i.updateAutoHeight()}})),i.emit("lazyImageLoad",a[0],o[0])}))}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,s=e.slides,a=e.activeIndex,r=e.virtual&&i.virtual.enabled,o=i.lazy,l=i.slidesPerView;function d(e){if(r){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function h(e){return r?n(e).attr("data-swiper-slide-index"):n(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each((function(t,i){var s=r?n(i).attr("data-swiper-slide-index"):n(i).index();e.lazy.loadInSlide(s)}));else if(l>1)for(var p=a;p<a+l;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(a);if(o.loadPrevNext)if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){for(var c=o.loadPrevNextAmount,u=l,v=Math.min(a+u+Math.max(c,u),s.length),f=Math.max(a-Math.max(u,c),0),m=a+l;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<a;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+i.slideNextClass);b.length>0&&e.lazy.loadInSlide(h(b));var w=t.children("."+i.slidePrevClass);w.length>0&&e.lazy.loadInSlide(h(w))}}},ce={LinearSpline:function(e,t){var i,s,a,r,n,o=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new ce.LinearSpline(this.slidesGrid,e.slidesGrid):new ce.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control;function n(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof j&&n(r[o]);else r instanceof j&&t!==r&&n(r)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function r(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.params.autoHeight&&d.nextTick((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof j&&r(a[i]);else a instanceof j&&t!==a&&r(a)}},ue={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},makeElNotFocusable:function(e){return e.attr("tabIndex","-1"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=n(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop&&this.navigation){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?(this.a11y.disableEl(i),this.a11y.makeElNotFocusable(i)):(this.a11y.enableEl(i),this.a11y.makeElFocusable(i))),t&&t.length>0&&(this.isEnd?(this.a11y.disableEl(t),this.a11y.makeElNotFocusable(t)):(this.a11y.enableEl(t),this.a11y.makeElFocusable(t)))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(i,s){var a=n(s);e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,t.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1))}))},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},ve={init:function(){if(this.params.history){if(!a.history||!a.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var e=this.history;e.initialized=!0,e.paths=ve.getPathValues(),(e.paths.key||e.paths.value)&&(e.scrollToSlide(0,e.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||a.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||a.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=ve.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=a.location.pathname.slice(1).split("/").filter((function(e){return""!==e})),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(this.history.initialized&&this.params.history.enabled){var i=this.slides.eq(t),s=ve.slugify(i.attr("data-history"));a.location.pathname.includes(e)||(s=e+"/"+s);var r=a.history.state;r&&r.value===s||(this.params.history.replaceState?a.history.replaceState({value:s},null,s):a.history.pushState({value:s},null,s))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(ve.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},fe={onHashCange:function(){this.emit("hashChange");var e=i.location.hash.replace("#","");if(e!==this.slides.eq(this.activeIndex).attr("data-hash")){var t=this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+e+'"]').index();if(void 0===t)return;this.slideTo(t)}},setHash:function(){if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&a.history&&a.history.replaceState)a.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||""),this.emit("hashSet");else{var e=this.slides.eq(this.activeIndex),t=e.attr("data-hash")||e.attr("data-history");i.location.hash=t||"",this.emit("hashSet")}},init:function(){if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var e=i.location.hash.replace("#","");if(e)for(var t=0,s=this.slides.length;t<s;t+=1){var r=this.slides.eq(t);if((r.attr("data-hash")||r.attr("data-history"))===e&&!r.hasClass(this.params.slideDuplicateClass)){var o=r.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&n(a).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&n(a).off("hashchange",this.hashNavigation.onHashCange)}},me={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=d.nextTick((function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),e.params.cssMode&&e.autoplay.running&&e.autoplay.run()}),i)},start:function(){return void 0===this.autoplay.timeout&&!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0)},stop:function(){return!!this.autoplay.running&&void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0)},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))}},ge={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd((function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}}))}}},be={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,s=this.slides,a=this.width,r=this.height,o=this.rtlTranslate,l=this.size,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,c=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=n('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:a+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=n('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var u=0;u<s.length;u+=1){var v=s.eq(u),f=u;p&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),h||(y=w,w=0);var E="rotateX("+(h?0:-m)+"deg) rotateY("+(h?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&b>-1&&(c=90*f+90*b,o&&(c=90*-f-90*b)),v.transform(E),d.slideShadows){var T=h?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=h?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===T.length&&(T=n('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),v.append(T)),0===S.length&&(S=n('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),v.append(S)),T.length&&(T[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(a/2+d.shadowOffset)+"px, "+-a/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(c)-90*Math.floor(Math.abs(c)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),P=d.shadowScale,z=d.shadowScale/M,k=d.shadowOffset;e.transform("scale3d("+P+", 1, "+z+") translate3d(0px, "+(r/2+k)+"px, "+-r/2/z+"px) rotateX(-90deg)")}var $=_.isSafari||_.isWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(this.isHorizontal()?0:c)+"deg) rotateY("+(this.isHorizontal()?-c:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},we={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var s=e.eq(i),a=s[0].progress;this.params.flipEffect.limitRotation&&(a=Math.max(Math.min(s[0].progress,1),-1));var r=-180*a,o=0,l=-s[0].swiperSlideOffset,d=0;if(this.isHorizontal()?t&&(r=-r):(d=l,l=0,o=-r,r=0),s[0].style.zIndex=-Math.abs(Math.round(a))+e.length,this.params.flipEffect.slideShadows){var h=this.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),p=this.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===h.length&&(h=n('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),s.append(h)),0===p.length&&(p=n('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),s.append(p)),h.length&&(h[0].style.opacity=Math.max(-a,0)),p.length&&(p[0].style.opacity=Math.max(a,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+r+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}}))}}},ye={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,s=this.$wrapperEl,a=this.slidesSizesGrid,r=this.params.coverflowEffect,o=this.isHorizontal(),l=this.translate,d=o?e/2-l:t/2-l,p=o?r.rotate:-r.rotate,c=r.depth,u=0,v=i.length;u<v;u+=1){var f=i.eq(u),m=a[u],g=(d-f[0].swiperSlideOffset-m/2)/m*r.modifier,b=o?p*g:0,w=o?0:p*g,y=-c*Math.abs(g),x=r.stretch;"string"==typeof x&&-1!==x.indexOf("%")&&(x=parseFloat(r.stretch)/100*m);var E=o?0:x*g,T=o?x*g:0,S=1-(1-r.scale)*Math.abs(g);Math.abs(T)<.001&&(T=0),Math.abs(E)<.001&&(E=0),Math.abs(y)<.001&&(y=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0),Math.abs(S)<.001&&(S=0);var C="translate3d("+T+"px,"+E+"px,"+y+"px)  rotateX("+w+"deg) rotateY("+b+"deg) scale("+S+")";if(f.transform(C),f[0].style.zIndex=1-Math.abs(Math.round(g)),r.slideShadows){var M=o?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),P=o?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===M.length&&(M=n('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),f.append(M)),0===P.length&&(P=n('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),f.append(P)),M.length&&(M[0].style.opacity=g>0?g:0),P.length&&(P[0].style.opacity=-g>0?-g:0)}}(h.pointerEvents||h.prefixedPointerEvents)&&(s[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},xe={init:function(){var e=this.params.thumbs,t=this.constructor;e.swiper instanceof t?(this.thumbs.swiper=e.swiper,d.extend(this.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),d.extend(this.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):d.isObject(e.swiper)&&(this.thumbs.swiper=new t(d.extend({},e.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),this.thumbs.swiperCreated=!0),this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),this.thumbs.swiper.on("tap",this.thumbs.onThumbClick)},onThumbClick:function(){var e=this.thumbs.swiper;if(e){var t=e.clickedIndex,i=e.clickedSlide;if(!(i&&n(i).hasClass(this.params.thumbs.slideThumbActiveClass)||null==t)){var s;if(s=e.params.loop?parseInt(n(e.clickedSlide).attr("data-swiper-slide-index"),10):t,this.params.loop){var a=this.activeIndex;this.slides.eq(a).hasClass(this.params.slideDuplicateClass)&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,a=this.activeIndex);var r=this.slides.eq(a).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),o=this.slides.eq(a).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===r?o:void 0===o?r:o-a<a-r?o:r}this.slideTo(s)}}},update:function(e){var t=this.thumbs.swiper;if(t){var i="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView,s=this.params.thumbs.autoScrollOffset,a=s&&!t.params.loop;if(this.realIndex!==t.realIndex||a){var r,n,o=t.activeIndex;if(t.params.loop){t.slides.eq(o).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,o=t.activeIndex);var l=t.slides.eq(o).prevAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index(),d=t.slides.eq(o).nextAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index();r=void 0===l?d:void 0===d?l:d-o==o-l?o:d-o<o-l?d:l,n=this.activeIndex>this.previousIndex?"next":"prev"}else n=(r=this.realIndex)>this.previousIndex?"next":"prev";a&&(r+="next"===n?s:-1*s),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(r)<0&&(t.params.centeredSlides?r=r>o?r-Math.floor(i/2)+1:r+Math.floor(i/2)-1:r>o&&(r=r-i+1),t.slideTo(r,e?0:void 0))}var h=1,p=this.params.thumbs.slideThumbActiveClass;if(this.params.slidesPerView>1&&!this.params.centeredSlides&&(h=this.params.slidesPerView),this.params.thumbs.multipleActiveThumbs||(h=1),h=Math.floor(h),t.slides.removeClass(p),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(var c=0;c<h;c+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(this.realIndex+c)+'"]').addClass(p);else for(var u=0;u<h;u+=1)t.slides.eq(this.realIndex+u).addClass(p)}}},Ee=[K,U,Z,Q,ee,ie,ae,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){d.extend(this,{mousewheel:{enabled:!1,enable:re.enable.bind(this),disable:re.disable.bind(this),handle:re.handle.bind(this),handleMouseEnter:re.handleMouseEnter.bind(this),handleMouseLeave:re.handleMouseLeave.bind(this),animateSlider:re.animateSlider.bind(this),releaseScroll:re.releaseScroll.bind(this),lastScrollTime:d.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[]}})},on:{init:function(){!this.params.mousewheel.enabled&&this.params.cssMode&&this.mousewheel.disable(),this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.params.cssMode&&this.mousewheel.enable(),this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){d.extend(this,{navigation:{init:ne.init.bind(this),update:ne.update.bind(this),destroy:ne.destroy.bind(this),onNextClick:ne.onNextClick.bind(this),onPrevClick:ne.onPrevClick.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,i=this.navigation,s=i.$nextEl,a=i.$prevEl;!this.params.navigation.hideOnClick||n(e.target).is(a)||n(e.target).is(s)||(s?t=s.hasClass(this.params.navigation.hiddenClass):a&&(t=a.hasClass(this.params.navigation.hiddenClass)),!0===t?this.emit("navigationShow",this):this.emit("navigationHide",this),s&&s.toggleClass(this.params.navigation.hiddenClass),a&&a.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){d.extend(this,{pagination:{init:oe.init.bind(this),render:oe.render.bind(this),update:oe.update.bind(this),destroy:oe.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){(this.params.loop||void 0===this.snapIndex)&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!n(e.target).hasClass(this.params.pagination.bulletClass)&&(!0===this.pagination.$el.hasClass(this.params.pagination.hiddenClass)?this.emit("paginationShow",this):this.emit("paginationHide",this),this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){d.extend(this,{scrollbar:{init:le.init.bind(this),destroy:le.destroy.bind(this),updateSize:le.updateSize.bind(this),setTranslate:le.setTranslate.bind(this),setTransition:le.setTransition.bind(this),enableDraggable:le.enableDraggable.bind(this),disableDraggable:le.disableDraggable.bind(this),setDragPosition:le.setDragPosition.bind(this),getPointerPosition:le.getPointerPosition.bind(this),onDragStart:le.onDragStart.bind(this),onDragMove:le.onDragMove.bind(this),onDragEnd:le.onDragEnd.bind(this),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){d.extend(this,{parallax:{setTransform:de.setTransform.bind(this),setTranslate:de.setTranslate.bind(this),setTransition:de.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i){t[i]=he[i].bind(e)})),d.extend(e,{zoom:t});var i=1;Object.defineProperty(e.zoom,"scale",{get:function(){return i},set:function(t){if(i!==t){var s=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,a=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,s,a)}i=t}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()},slideChange:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.params.cssMode&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){d.extend(this,{lazy:{initialImageLoaded:!1,load:pe.load.bind(this),loadInSlide:pe.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()},slideChange:function(){this.params.lazy.enabled&&this.params.cssMode&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){d.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:ce.getInterpolateFunction.bind(this),setTranslate:ce.setTranslate.bind(this),setTransition:ce.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;d.extend(e,{a11y:{liveRegion:n('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(ue).forEach((function(t){e.a11y[t]=ue[t].bind(e)}))},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){d.extend(this,{history:{init:ve.init.bind(this),setHistory:ve.setHistory.bind(this),setHistoryPopState:ve.setHistoryPopState.bind(this),scrollToSlide:ve.scrollToSlide.bind(this),destroy:ve.destroy.bind(this)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)},slideChange:function(){this.history.initialized&&this.params.cssMode&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){d.extend(this,{hashNavigation:{initialized:!1,init:fe.init.bind(this),destroy:fe.destroy.bind(this),setHash:fe.setHash.bind(this),onHashCange:fe.onHashCange.bind(this)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()},slideChange:function(){this.hashNavigation.initialized&&this.params.cssMode&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var e=this;d.extend(e,{autoplay:{running:!1,paused:!1,run:me.run.bind(e),start:me.start.bind(e),stop:me.stop.bind(e),pause:me.pause.bind(e),onVisibilityChange:function(){"hidden"===document.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===document.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&(this.autoplay.start(),document.addEventListener("visibilitychange",this.autoplay.onVisibilityChange))},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},touchEnd:function(){this.params.cssMode&&this.autoplay.paused&&!this.params.autoplay.disableOnInteraction&&this.autoplay.run()},destroy:function(){this.autoplay.running&&this.autoplay.stop(),document.removeEventListener("visibilitychange",this.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){d.extend(this,{fadeEffect:{setTranslate:ge.setTranslate.bind(this),setTransition:ge.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){d.extend(this,{cubeEffect:{setTranslate:be.setTranslate.bind(this),setTransition:be.setTransition.bind(this)}})},on:{beforeInit:function(){if("cube"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){d.extend(this,{flipEffect:{setTranslate:we.setTranslate.bind(this),setTransition:we.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}},create:function(){d.extend(this,{coverflowEffect:{setTranslate:ye.setTranslate.bind(this),setTransition:ye.setTransition.bind(this)}})},on:{beforeInit:function(){"coverflow"===this.params.effect&&(this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){d.extend(this,{thumbs:{swiper:null,init:xe.init.bind(this),update:xe.update.bind(this),onThumbClick:xe.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===j.use&&(j.use=j.Class.use,j.installModule=j.Class.installModule),j.use(Ee),j}));;
/* --- qr-code.js --- */
/*! https://github.com/jeromeetienne/jquery-qrcode/blob/master/MIT-LICENSE.txt */
(function(r){r.fn.qrcode=function(h){var s;function u(a){this.mode=s;this.data=a}function o(a,c){this.typeNumber=a;this.errorCorrectLevel=c;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]}function q(a,c){if(void 0==a.length)throw Error(a.length+"/"+c);for(var d=0;d<a.length&&0==a[d];)d++;this.num=Array(a.length-d+c);for(var b=0;b<a.length-d;b++)this.num[b]=a[b+d]}function p(a,c){this.totalCount=a;this.dataCount=c}function t(){this.buffer=[];this.length=0}u.prototype={getLength:function(){return this.data.length},
write:function(a){for(var c=0;c<this.data.length;c++)a.put(this.data.charCodeAt(c),8)}};o.prototype={addData:function(a){this.dataList.push(new u(a));this.dataCache=null},isDark:function(a,c){if(0>a||this.moduleCount<=a||0>c||this.moduleCount<=c)throw Error(a+","+c);return this.modules[a][c]},getModuleCount:function(){return this.moduleCount},make:function(){if(1>this.typeNumber){for(var a=1,a=1;40>a;a++){for(var c=p.getRSBlocks(a,this.errorCorrectLevel),d=new t,b=0,e=0;e<c.length;e++)b+=c[e].dataCount;
for(e=0;e<this.dataList.length;e++)c=this.dataList[e],d.put(c.mode,4),d.put(c.getLength(),j.getLengthInBits(c.mode,a)),c.write(d);if(d.getLengthInBits()<=8*b)break}this.typeNumber=a}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17;this.modules=Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=Array(this.moduleCount);for(var b=0;b<this.moduleCount;b++)this.modules[d][b]=null}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-
7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(a,c);7<=this.typeNumber&&this.setupTypeNumber(a);null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList));this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,c){for(var d=-1;7>=d;d++)if(!(-1>=a+d||this.moduleCount<=a+d))for(var b=-1;7>=b;b++)-1>=c+b||this.moduleCount<=c+b||(this.modules[a+d][c+b]=
0<=d&&6>=d&&(0==b||6==b)||0<=b&&6>=b&&(0==d||6==d)||2<=d&&4>=d&&2<=b&&4>=b?!0:!1)},getBestMaskPattern:function(){for(var a=0,c=0,d=0;8>d;d++){this.makeImpl(!0,d);var b=j.getLostPoint(this);if(0==d||a>b)a=b,c=d}return c},createMovieClip:function(a,c,d){a=a.createEmptyMovieClip(c,d);this.make();for(c=0;c<this.modules.length;c++)for(var d=1*c,b=0;b<this.modules[c].length;b++){var e=1*b;this.modules[c][b]&&(a.beginFill(0,100),a.moveTo(e,d),a.lineTo(e+1,d),a.lineTo(e+1,d+1),a.lineTo(e,d+1),a.endFill())}return a},
setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(a=8;a<this.moduleCount-8;a++)null==this.modules[6][a]&&(this.modules[6][a]=0==a%2)},setupPositionAdjustPattern:function(){for(var a=j.getPatternPosition(this.typeNumber),c=0;c<a.length;c++)for(var d=0;d<a.length;d++){var b=a[c],e=a[d];if(null==this.modules[b][e])for(var f=-2;2>=f;f++)for(var i=-2;2>=i;i++)this.modules[b+f][e+i]=-2==f||2==f||-2==i||2==i||0==f&&0==i?!0:!1}},setupTypeNumber:function(a){for(var c=
j.getBCHTypeNumber(this.typeNumber),d=0;18>d;d++){var b=!a&&1==(c>>d&1);this.modules[Math.floor(d/3)][d%3+this.moduleCount-8-3]=b}for(d=0;18>d;d++)b=!a&&1==(c>>d&1),this.modules[d%3+this.moduleCount-8-3][Math.floor(d/3)]=b},setupTypeInfo:function(a,c){for(var d=j.getBCHTypeInfo(this.errorCorrectLevel<<3|c),b=0;15>b;b++){var e=!a&&1==(d>>b&1);6>b?this.modules[b][8]=e:8>b?this.modules[b+1][8]=e:this.modules[this.moduleCount-15+b][8]=e}for(b=0;15>b;b++)e=!a&&1==(d>>b&1),8>b?this.modules[8][this.moduleCount-
b-1]=e:9>b?this.modules[8][15-b-1+1]=e:this.modules[8][15-b-1]=e;this.modules[this.moduleCount-8][8]=!a},mapData:function(a,c){for(var d=-1,b=this.moduleCount-1,e=7,f=0,i=this.moduleCount-1;0<i;i-=2)for(6==i&&i--;;){for(var g=0;2>g;g++)if(null==this.modules[b][i-g]){var n=!1;f<a.length&&(n=1==(a[f]>>>e&1));j.getMask(c,b,i-g)&&(n=!n);this.modules[b][i-g]=n;e--; -1==e&&(f++,e=7)}b+=d;if(0>b||this.moduleCount<=b){b-=d;d=-d;break}}}};o.PAD0=236;o.PAD1=17;o.createData=function(a,c,d){for(var c=p.getRSBlocks(a,
c),b=new t,e=0;e<d.length;e++){var f=d[e];b.put(f.mode,4);b.put(f.getLength(),j.getLengthInBits(f.mode,a));f.write(b)}for(e=a=0;e<c.length;e++)a+=c[e].dataCount;if(b.getLengthInBits()>8*a)throw Error("code length overflow. ("+b.getLengthInBits()+">"+8*a+")");for(b.getLengthInBits()+4<=8*a&&b.put(0,4);0!=b.getLengthInBits()%8;)b.putBit(!1);for(;!(b.getLengthInBits()>=8*a);){b.put(o.PAD0,8);if(b.getLengthInBits()>=8*a)break;b.put(o.PAD1,8)}return o.createBytes(b,c)};o.createBytes=function(a,c){for(var d=
0,b=0,e=0,f=Array(c.length),i=Array(c.length),g=0;g<c.length;g++){var n=c[g].dataCount,h=c[g].totalCount-n,b=Math.max(b,n),e=Math.max(e,h);f[g]=Array(n);for(var k=0;k<f[g].length;k++)f[g][k]=255&a.buffer[k+d];d+=n;k=j.getErrorCorrectPolynomial(h);n=(new q(f[g],k.getLength()-1)).mod(k);i[g]=Array(k.getLength()-1);for(k=0;k<i[g].length;k++)h=k+n.getLength()-i[g].length,i[g][k]=0<=h?n.get(h):0}for(k=g=0;k<c.length;k++)g+=c[k].totalCount;d=Array(g);for(k=n=0;k<b;k++)for(g=0;g<c.length;g++)k<f[g].length&&
(d[n++]=f[g][k]);for(k=0;k<e;k++)for(g=0;g<c.length;g++)k<i[g].length&&(d[n++]=i[g][k]);return d};s=4;for(var j={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,
78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var c=a<<10;0<=j.getBCHDigit(c)-j.getBCHDigit(j.G15);)c^=j.G15<<j.getBCHDigit(c)-j.getBCHDigit(j.G15);return(a<<10|c)^j.G15_MASK},getBCHTypeNumber:function(a){for(var c=a<<12;0<=j.getBCHDigit(c)-
j.getBCHDigit(j.G18);)c^=j.G18<<j.getBCHDigit(c)-j.getBCHDigit(j.G18);return a<<12|c},getBCHDigit:function(a){for(var c=0;0!=a;)c++,a>>>=1;return c},getPatternPosition:function(a){return j.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,c,d){switch(a){case 0:return 0==(c+d)%2;case 1:return 0==c%2;case 2:return 0==d%3;case 3:return 0==(c+d)%3;case 4:return 0==(Math.floor(c/2)+Math.floor(d/3))%2;case 5:return 0==c*d%2+c*d%3;case 6:return 0==(c*d%2+c*d%3)%2;case 7:return 0==(c*d%3+(c+d)%2)%2;default:throw Error("bad maskPattern:"+
a);}},getErrorCorrectPolynomial:function(a){for(var c=new q([1],0),d=0;d<a;d++)c=c.multiply(new q([1,l.gexp(d)],0));return c},getLengthInBits:function(a,c){if(1<=c&&10>c)switch(a){case 1:return 10;case 2:return 9;case s:return 8;case 8:return 8;default:throw Error("mode:"+a);}else if(27>c)switch(a){case 1:return 12;case 2:return 11;case s:return 16;case 8:return 10;default:throw Error("mode:"+a);}else if(41>c)switch(a){case 1:return 14;case 2:return 13;case s:return 16;case 8:return 12;default:throw Error("mode:"+
a);}else throw Error("type:"+c);},getLostPoint:function(a){for(var c=a.getModuleCount(),d=0,b=0;b<c;b++)for(var e=0;e<c;e++){for(var f=0,i=a.isDark(b,e),g=-1;1>=g;g++)if(!(0>b+g||c<=b+g))for(var h=-1;1>=h;h++)0>e+h||c<=e+h||0==g&&0==h||i==a.isDark(b+g,e+h)&&f++;5<f&&(d+=3+f-5)}for(b=0;b<c-1;b++)for(e=0;e<c-1;e++)if(f=0,a.isDark(b,e)&&f++,a.isDark(b+1,e)&&f++,a.isDark(b,e+1)&&f++,a.isDark(b+1,e+1)&&f++,0==f||4==f)d+=3;for(b=0;b<c;b++)for(e=0;e<c-6;e++)a.isDark(b,e)&&!a.isDark(b,e+1)&&a.isDark(b,e+
2)&&a.isDark(b,e+3)&&a.isDark(b,e+4)&&!a.isDark(b,e+5)&&a.isDark(b,e+6)&&(d+=40);for(e=0;e<c;e++)for(b=0;b<c-6;b++)a.isDark(b,e)&&!a.isDark(b+1,e)&&a.isDark(b+2,e)&&a.isDark(b+3,e)&&a.isDark(b+4,e)&&!a.isDark(b+5,e)&&a.isDark(b+6,e)&&(d+=40);for(e=f=0;e<c;e++)for(b=0;b<c;b++)a.isDark(b,e)&&f++;a=Math.abs(100*f/c/c-50)/5;return d+10*a}},l={glog:function(a){if(1>a)throw Error("glog("+a+")");return l.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;256<=a;)a-=255;return l.EXP_TABLE[a]},EXP_TABLE:Array(256),
LOG_TABLE:Array(256)},m=0;8>m;m++)l.EXP_TABLE[m]=1<<m;for(m=8;256>m;m++)l.EXP_TABLE[m]=l.EXP_TABLE[m-4]^l.EXP_TABLE[m-5]^l.EXP_TABLE[m-6]^l.EXP_TABLE[m-8];for(m=0;255>m;m++)l.LOG_TABLE[l.EXP_TABLE[m]]=m;q.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var c=Array(this.getLength()+a.getLength()-1),d=0;d<this.getLength();d++)for(var b=0;b<a.getLength();b++)c[d+b]^=l.gexp(l.glog(this.get(d))+l.glog(a.get(b)));return new q(c,0)},mod:function(a){if(0>
this.getLength()-a.getLength())return this;for(var c=l.glog(this.get(0))-l.glog(a.get(0)),d=Array(this.getLength()),b=0;b<this.getLength();b++)d[b]=this.get(b);for(b=0;b<a.getLength();b++)d[b]^=l.gexp(l.glog(a.get(b))+c);return(new q(d,0)).mod(a)}};p.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],
[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,
116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,
43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,
3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,
55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,
45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];p.getRSBlocks=function(a,c){var d=p.getRsBlockTable(a,c);if(void 0==d)throw Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+c);for(var b=d.length/3,e=[],f=0;f<b;f++)for(var h=d[3*f+0],g=d[3*f+1],j=d[3*f+2],l=0;l<h;l++)e.push(new p(g,j));return e};p.getRsBlockTable=function(a,c){switch(c){case 1:return p.RS_BLOCK_TABLE[4*(a-1)+0];case 0:return p.RS_BLOCK_TABLE[4*(a-1)+1];case 3:return p.RS_BLOCK_TABLE[4*
(a-1)+2];case 2:return p.RS_BLOCK_TABLE[4*(a-1)+3]}};t.prototype={get:function(a){return 1==(this.buffer[Math.floor(a/8)]>>>7-a%8&1)},put:function(a,c){for(var d=0;d<c;d++)this.putBit(1==(a>>>c-d-1&1))},getLengthInBits:function(){return this.length},putBit:function(a){var c=Math.floor(this.length/8);this.buffer.length<=c&&this.buffer.push(0);a&&(this.buffer[c]|=128>>>this.length%8);this.length++}};"string"===typeof h&&(h={text:h});h=r.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,
correctLevel:2,background:"#ffffff",foreground:"#000000"},h);return this.each(function(){var a;if("canvas"==h.render){a=new o(h.typeNumber,h.correctLevel);a.addData(h.text);a.make();var c=document.createElement("canvas");c.width=h.width;c.height=h.height;for(var d=c.getContext("2d"),b=h.width/a.getModuleCount(),e=h.height/a.getModuleCount(),f=0;f<a.getModuleCount();f++)for(var i=0;i<a.getModuleCount();i++){d.fillStyle=a.isDark(f,i)?h.foreground:h.background;var g=Math.ceil((i+1)*b)-Math.floor(i*b),
j=Math.ceil((f+1)*b)-Math.floor(f*b);d.fillRect(Math.round(i*b),Math.round(f*e),g,j)}}else{a=new o(h.typeNumber,h.correctLevel);a.addData(h.text);a.make();c=r("<table></table>").css("width",h.width+"px").css("height",h.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",h.background);d=h.width/a.getModuleCount();b=h.height/a.getModuleCount();for(e=0;e<a.getModuleCount();e++){f=r("<tr></tr>").css("height",b+"px").appendTo(c);for(i=0;i<a.getModuleCount();i++)r("<td></td>").css("width",
d+"px").css("background-color",a.isDark(e,i)?h.foreground:h.background).appendTo(f)}}a=c;jQuery(a).appendTo(this)})}})(jQuery);;
/* --- exad-scripts.min.js --- */
(function ($) {
    "use strict";

    var editMode = false;

// modal popup script starts

var exclusiveModalPopup = function ($scope, $) {

    var modalWrapper    = $scope.find( '.exad-modal' ).eq(0),
    modalOverlayWrapper = $scope.find( '.exad-modal-overlay' ),
    modalItem           = $scope.find( '.exad-modal-item' ),
    modalAction         = modalWrapper.find( '.exad-modal-image-action' ),
    closeButton         = modalWrapper.find( '.exad-close-btn' );

    modalAction.on( 'click', function(e) {
        e.preventDefault();
        var modalOverlay = $(this).parents().eq(1).next();
        var modal         = $(this).data( 'exad-modal' );
        
        var overlay = $(this).data( 'exad-overlay' );
        modalItem.css( 'display', 'block' );
        setTimeout( function() {
            $(modal).addClass( 'active' );
        }, 100);
        if ( 'yes' === overlay ) {
            modalOverlay.addClass( 'active' );
        }
        
    } );

    closeButton.click( function() {
        var modalOverlay = $(this).parents().eq(3).next();
        var modalItem    = $(this).parents().eq(2);
        modalOverlay.removeClass( 'active' );
        modalItem.removeClass( 'active' );

        var modal_iframe = modalWrapper.find( 'iframe' ),
        $modal_video_tag  = modalWrapper.find( 'video' );

        if ( modal_iframe.length ) {
            var modal_src = modal_iframe.attr( 'src' ).replace( '&autoplay=1', '' );
            modal_iframe.attr( 'src', '' );
            modal_iframe.attr( 'src', modal_src );
        }
        if ( $modal_video_tag.length ) {
            $modal_video_tag[0].pause();
            $modal_video_tag[0].currentTime = 0;
        }
        
    } );

    modalOverlayWrapper.click( function() {
        var overlay_click_close = $(this).data( 'exad_overlay_click_close' );
        if( 'yes' === overlay_click_close ){
            $(this).removeClass( 'active' );
            $( '.exad-modal-item' ).removeClass( 'active' );

            var modal_iframe = modalWrapper.find( 'iframe' ),
            $modal_video_tag = modalWrapper.find( 'video' );

            if ( modal_iframe.length ) {
                var modal_src = modal_iframe.attr( 'src' ).replace( '&autoplay=1', '' );
                modal_iframe.attr( 'src', '' );
                modal_iframe.attr( 'src', modal_src );
            }
            if ( $modal_video_tag.length ) {
                $modal_video_tag[0].pause();
                $modal_video_tag[0].currentTime = 0;
            }
        }
    } );
}

// modal popup script ends



$(window).on('elementor/frontend/init', function () {
    if( elementorFrontend.isEditMode() ) {
        editMode = true;
    }
    
    
    elementorFrontend.hooks.addAction( 'frontend/element_ready/weddingpress-modal-popup.default', exclusiveModalPopup );

});	

}(jQuery));;
/* --- jquery.jPages.min.js --- */
/**
 * jQuery jPages v0.7
 * Client side pagination with jQuery
 * http://luis-almeida.github.com/jPages
 *
 * Licensed under the MIT license.
 * Copyright 2012 Luís Almeida
 * https://github.com/luis-almeida
 */

 ;(function($,window,document,undefined){var name="jPages",instance=null,defaults={containerID:"",first:false,previous:"← previous",next:"next →",last:false,links:"numeric",startPage:1,perPage:10,midRange:5,startRange:1,endRange:1,keyBrowse:false,scrollBrowse:false,pause:0,clickStop:false,delay:50,direction:"forward",animation:"",fallback:400,minHeight:true,callback:undefined};function Plugin(element,options){this.options=$.extend({},defaults,options);this._container=$("#"+this.options.containerID);if(!this._container.length)return;this.jQwindow=$(window);this.jQdocument=$(document);this._holder=$(element);this._nav={};this._first=$(this.options.first);this._previous=$(this.options.previous);this._next=$(this.options.next);this._last=$(this.options.last);this._items=this._container.children(":visible");this._itemsShowing=$([]);this._itemsHiding=$([]);this._numPages=Math.ceil(this._items.length/this.options.perPage);this._currentPageNum=this.options.startPage;this._clicked=false;this._cssAnimSupport=this.getCSSAnimationSupport();this.init();}Plugin.prototype={constructor:Plugin,getCSSAnimationSupport:function(){var animation=false,animationstring='animation',keyframeprefix='',domPrefixes='Webkit Moz O ms Khtml'.split(' '),pfx='',elm=this._container.get(0);if(elm.style.animationName)animation=true;if(animation===false){for(var i=0;i<domPrefixes.length;i++){if(elm.style[domPrefixes[i]+'AnimationName']!==undefined){pfx=domPrefixes[i];animationstring=pfx+'Animation';keyframeprefix='-'+pfx.toLowerCase()+'-';animation=true;break;}}}return animation;},init:function(){this.setStyles();this.setNav();this.paginate(this._currentPageNum);this.setMinHeight();},setStyles:function(){var requiredStyles="<style>"+".jp-invisible { visibility: hidden !important; } "+".jp-hidden { display: none !important; }"+"</style>";$(requiredStyles).appendTo("head");if(this._cssAnimSupport&&this.options.animation.length)this._items.addClass("animated jp-hidden");else this._items.hide();},setNav:function(){var navhtml=this.writeNav();this._holder.each(this.bind(function(index,element){var holder=$(element);holder.html(navhtml);this.cacheNavElements(holder,index);this.bindNavHandlers(index);this.disableNavSelection(element);},this));if(this.options.keyBrowse)this.bindNavKeyBrowse();if(this.options.scrollBrowse)this.bindNavScrollBrowse();},writeNav:function(){var i=1,navhtml;navhtml=this.writeBtn("first")+this.writeBtn("previous");for(;i<=this._numPages;i++){if(i===1&&this.options.startRange===0)navhtml+="<span>...</span>";if(i>this.options.startRange&&i<=this._numPages-this.options.endRange)navhtml+="<a href='#' class='jp-hidden'>";else
navhtml+="<a>";switch(this.options.links){case"numeric":navhtml+=i;break;case"blank":break;case"title":var title=this._items.eq(i-1).attr("data-title");navhtml+=title!==undefined?title:"";break;}navhtml+="</a>";if(i===this.options.startRange||i===this._numPages-this.options.endRange)navhtml+="<span>...</span>";}navhtml+=this.writeBtn("next")+this.writeBtn("last")+"</div>";return navhtml;},writeBtn:function(which){return this.options[which]!==false&&!$(this["_"+which]).length?"<a class='jp-"+which+"'>"+this.options[which]+"</a>":"";},cacheNavElements:function(holder,index){this._nav[index]={};this._nav[index].holder=holder;this._nav[index].first=this._first.length?this._first:this._nav[index].holder.find("a.jp-first");this._nav[index].previous=this._previous.length?this._previous:this._nav[index].holder.find("a.jp-previous");this._nav[index].next=this._next.length?this._next:this._nav[index].holder.find("a.jp-next");this._nav[index].last=this._last.length?this._last:this._nav[index].holder.find("a.jp-last");this._nav[index].fstBreak=this._nav[index].holder.find("span:first");this._nav[index].lstBreak=this._nav[index].holder.find("span:last");this._nav[index].pages=this._nav[index].holder.find("a").not(".jp-first, .jp-previous, .jp-next, .jp-last");this._nav[index].permPages=this._nav[index].pages.slice(0,this.options.startRange).add(this._nav[index].pages.slice(this._numPages-this.options.endRange,this._numPages));this._nav[index].pagesShowing=$([]);this._nav[index].currentPage=$([]);},bindNavHandlers:function(index){var nav=this._nav[index];nav.holder.bind("click.jPages",this.bind(function(evt){var newPage=this.getNewPage(nav,$(evt.target));if(this.validNewPage(newPage)){this._clicked=true;this.paginate(newPage);}evt.preventDefault();},this));if(this._first.length){this._first.bind("click.jPages",this.bind(function(){if(this.validNewPage(1)){this._clicked=true;this.paginate(1);}},this));}if(this._previous.length){this._previous.bind("click.jPages",this.bind(function(){var newPage=this._currentPageNum-1;if(this.validNewPage(newPage)){this._clicked=true;this.paginate(newPage);}},this));}if(this._next.length){this._next.bind("click.jPages",this.bind(function(){var newPage=this._currentPageNum+1;if(this.validNewPage(newPage)){this._clicked=true;this.paginate(newPage);}},this));}if(this._last.length){this._last.bind("click.jPages",this.bind(function(){if(this.validNewPage(this._numPages)){this._clicked=true;this.paginate(this._numPages);}},this));}},disableNavSelection:function(element){if(typeof element.onselectstart!="undefined")element.onselectstart=function(){return false;};else if(typeof element.style.MozUserSelect!="undefined")element.style.MozUserSelect="none";else
element.onmousedown=function(){return false;};},bindNavKeyBrowse:function(){this.jQdocument.bind("keydown.jPages",this.bind(function(evt){var target=evt.target.nodeName.toLowerCase();if(this.elemScrolledIntoView()&&target!=="input"&&target!="textarea"){var newPage=this._currentPageNum;if(evt.which==37)newPage=this._currentPageNum-1;if(evt.which==39)newPage=this._currentPageNum+1;if(this.validNewPage(newPage)){this._clicked=true;this.paginate(newPage);}}},this));},elemScrolledIntoView:function(){var docViewTop,docViewBottom,elemTop,elemBottom;docViewTop=this.jQwindow.scrollTop();docViewBottom=docViewTop+this.jQwindow.height();elemTop=this._container.offset().top;elemBottom=elemTop+this._container.height();return((elemBottom>=docViewTop)&&(elemTop<=docViewBottom));},bindNavScrollBrowse:function(){this._container.bind("mousewheel.jPages DOMMouseScroll.jPages",this.bind(function(evt){var newPage=(evt.originalEvent.wheelDelta||-evt.originalEvent.detail)>0?(this._currentPageNum-1):(this._currentPageNum+1);if(this.validNewPage(newPage)){this._clicked=true;this.paginate(newPage);}evt.preventDefault();return false;},this));},getNewPage:function(nav,target){if(target.is(nav.currentPage))return this._currentPageNum;if(target.is(nav.pages))return nav.pages.index(target)+1;if(target.is(nav.first))return 1;if(target.is(nav.last))return this._numPages;if(target.is(nav.previous))return nav.pages.index(nav.currentPage);if(target.is(nav.next))return nav.pages.index(nav.currentPage)+2;},validNewPage:function(newPage){return newPage!==this._currentPageNum&&newPage>0&&newPage<=this._numPages;},paginate:function(page){var itemRange,pageInterval;itemRange=this.updateItems(page);pageInterval=this.updatePages(page);this._currentPageNum=page;if($.isFunction(this.options.callback))this.callback(page,itemRange,pageInterval);this.updatePause();},updateItems:function(page){var range=this.getItemRange(page);this._itemsHiding=this._itemsShowing;this._itemsShowing=this._items.slice(range.start,range.end);if(this._cssAnimSupport&&this.options.animation.length)this.cssAnimations(page);else this.jQAnimations(page);return range;},getItemRange:function(page){var range={};range.start=(page-1)*this.options.perPage;range.end=range.start+this.options.perPage;if(range.end>this._items.length)range.end=this._items.length;return range;},cssAnimations:function(page){clearInterval(this._delay);this._itemsHiding.removeClass(this.options.animation+" jp-invisible").addClass("jp-hidden");this._itemsShowing.removeClass("jp-hidden").addClass("jp-invisible");this._itemsOriented=this.getDirectedItems(page);this._index=0;this._delay=setInterval(this.bind(function(){if(this._index===this._itemsOriented.length)clearInterval(this._delay);else{this._itemsOriented.eq(this._index).removeClass("jp-invisible").addClass(this.options.animation);}this._index=this._index+1;},this),this.options.delay);},jQAnimations:function(page){clearInterval(this._delay);this._itemsHiding.addClass("jp-hidden");this._itemsShowing.fadeTo(0,0).removeClass("jp-hidden");this._itemsOriented=this.getDirectedItems(page);this._index=0;this._delay=setInterval(this.bind(function(){if(this._index===this._itemsOriented.length)clearInterval(this._delay);else{this._itemsOriented.eq(this._index).fadeTo(this.options.fallback,1);}this._index=this._index+1;},this),this.options.delay);},getDirectedItems:function(page){var itemsToShow;switch(this.options.direction){case"backwards":itemsToShow=$(this._itemsShowing.get().reverse());break;case"random":itemsToShow=$(this._itemsShowing.get().sort(function(){return(Math.round(Math.random())-0.5);}));break;case"auto":itemsToShow=page>=this._currentPageNum?this._itemsShowing:$(this._itemsShowing.get().reverse());break;default:itemsToShow=this._itemsShowing;}return itemsToShow;},updatePages:function(page){var interval,index,nav;interval=this.getInterval(page);for(index in this._nav){if(this._nav.hasOwnProperty(index)){nav=this._nav[index];this.updateBtns(nav,page);this.updateCurrentPage(nav,page);this.updatePagesShowing(nav,interval);this.updateBreaks(nav,interval);}}return interval;},getInterval:function(page){var neHalf,upperLimit,start,end;neHalf=Math.ceil(this.options.midRange/2);upperLimit=this._numPages-this.options.midRange;start=page>neHalf?Math.max(Math.min(page-neHalf,upperLimit),0):0;end=page>neHalf?Math.min(page+neHalf-(this.options.midRange%2>0?1:0),this._numPages):Math.min(this.options.midRange,this._numPages);return{start:start,end:end};},updateBtns:function(nav,page){if(page===1){nav.first.addClass("jp-disabled");nav.previous.addClass("jp-disabled");}if(page===this._numPages){nav.next.addClass("jp-disabled");nav.last.addClass("jp-disabled");}if(this._currentPageNum===1&&page>1){nav.first.removeClass("jp-disabled");nav.previous.removeClass("jp-disabled");}if(this._currentPageNum===this._numPages&&page<this._numPages){nav.next.removeClass("jp-disabled");nav.last.removeClass("jp-disabled");}},updateCurrentPage:function(nav,page){nav.currentPage.removeClass("jp-current");nav.currentPage=nav.pages.eq(page-1).addClass("jp-current");},updatePagesShowing:function(nav,interval){var newRange=nav.pages.slice(interval.start,interval.end).not(nav.permPages);nav.pagesShowing.not(newRange).addClass("jp-hidden");newRange.not(nav.pagesShowing).removeClass("jp-hidden");nav.pagesShowing=newRange;},updateBreaks:function(nav,interval){if(interval.start>this.options.startRange||(this.options.startRange===0&&interval.start>0))nav.fstBreak.removeClass("jp-hidden");else nav.fstBreak.addClass("jp-hidden");if(interval.end<this._numPages-this.options.endRange)nav.lstBreak.removeClass("jp-hidden");else nav.lstBreak.addClass("jp-hidden");},callback:function(page,itemRange,pageInterval){var pages={current:page,interval:pageInterval,count:this._numPages},items={showing:this._itemsShowing,oncoming:this._items.slice(itemRange.start+this.options.perPage,itemRange.end+this.options.perPage),range:itemRange,count:this._items.length};pages.interval.start=pages.interval.start+1;items.range.start=items.range.start+1;this.options.callback(pages,items);},updatePause:function(){if(this.options.pause&&this._numPages>1){clearTimeout(this._pause);if(this.options.clickStop&&this._clicked)return;else{this._pause=setTimeout(this.bind(function(){this.paginate(this._currentPageNum!==this._numPages?this._currentPageNum+1:1);},this),this.options.pause);}}},setMinHeight:function(){if(this.options.minHeight&&!this._container.is("table, tbody")){setTimeout(this.bind(function(){this._container.css({"min-height":this._container.css("height")});},this),1000);}},bind:function(fn,me){return function(){return fn.apply(me,arguments);};},destroy:function(){this.jQdocument.unbind("keydown.jPages");this._container.unbind("mousewheel.jPages DOMMouseScroll.jPages");if(this.options.minHeight)this._container.css("min-height","");if(this._cssAnimSupport&&this.options.animation.length)this._items.removeClass("animated jp-hidden jp-invisible "+this.options.animation);else this._items.removeClass("jp-hidden").fadeTo(0,1);this._holder.unbind("click.jPages").empty();}};$.fn[name]=function(arg){var type=$.type(arg);if(type==="object"){if(this.length&&!$.data(this,name)){instance=new Plugin(this,arg);this.each(function(){$.data(this,name,instance);});}return this;}if(type==="string"&&arg==="destroy"){instance.destroy();this.each(function(){$.removeData(this,name);});return this;}if(type==='number'&&arg%1===0){if(instance.validNewPage(arg))instance.paginate(arg);return this;}return this;};})(jQuery,window,document);;
/* --- jquery.placeholder.min.js --- */
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));;
/* --- autosize.min.js --- */
/*!
	Autosize 3.0.13
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);c=t.overflowY,"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),f="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(f)&&(f=0),i()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,c=t,u&&(e.style.overflowY=t),o()}function o(){var t=window.pageYOffset,n=document.body.scrollTop,o=e.style.height;e.style.height="auto";var i=e.scrollHeight+f;return 0===e.scrollHeight?void(e.style.height=o):(e.style.height=i+"px",v=e.clientWidth,document.documentElement.scrollTop=t,void(document.body.scrollTop=n))}function i(){var t=e.style.height;o();var i=window.getComputedStyle(e,null);if(i.height!==e.style.height?"visible"!==c&&n("visible"):"hidden"!==c&&n("hidden"),t!==e.style.height){var r=document.createEvent("Event");r.initEvent("autosize:resized",!0,!1),e.dispatchEvent(r)}}var d=void 0===arguments[1]?{}:arguments[1],s=d.setOverflowX,l=void 0===s?!0:s,a=d.setOverflowY,u=void 0===a?!0:a;if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var f=null,c=null,v=e.clientWidth,p=function(){e.clientWidth!==v&&i()},h=function(t){window.removeEventListener("resize",p),e.removeEventListener("input",i),e.removeEventListener("keyup",i),e.removeEventListener("autosize:destroy",h),r["delete"](e),Object.keys(t).forEach(function(n){e.style[n]=t[n]})}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",h),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",i),window.addEventListener("resize",p),e.addEventListener("input",i),e.addEventListener("autosize:update",i),r.add(e),l&&(e.style.overflowX="hidden",e.style.wordWrap="break-word"),t()}}function o(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=document.createEvent("Event");t.initEvent("autosize:destroy",!0,!1),e.dispatchEvent(t)}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=document.createEvent("Event");t.initEvent("autosize:update",!0,!1),e.dispatchEvent(t)}}var r="function"==typeof Set?new Set:function(){var e=[];return{has:function(t){return Boolean(e.indexOf(t)>-1)},add:function(t){e.push(t)},"delete":function(t){e.splice(e.indexOf(t),1)}}}(),d=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(d=function(e){return e},d.destroy=function(e){return e},d.update=function(e){return e}):(d=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},d.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},d.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),t.exports=d});;
/* --- hello-frontend.min.js --- */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


class elementorHelloThemeHandler {
  constructor() {
    this.initSettings();
    this.initElements();
    this.bindEvents();
  }
  initSettings() {
    this.settings = {
      selectors: {
        menuToggle: '.site-header .site-navigation-toggle',
        menuToggleHolder: '.site-header .site-navigation-toggle-holder',
        dropdownMenu: '.site-header .site-navigation-dropdown'
      }
    };
  }
  initElements() {
    this.elements = {
      window,
      menuToggle: document.querySelector(this.settings.selectors.menuToggle),
      menuToggleHolder: document.querySelector(this.settings.selectors.menuToggleHolder),
      dropdownMenu: document.querySelector(this.settings.selectors.dropdownMenu)
    };
  }
  bindEvents() {
    var _this$elements$menuTo;
    if (!this.elements.menuToggleHolder || (_this$elements$menuTo = this.elements.menuToggleHolder) !== null && _this$elements$menuTo !== void 0 && _this$elements$menuTo.classList.contains('hide')) {
      return;
    }
    this.elements.menuToggle.addEventListener('click', () => this.handleMenuToggle());
    this.elements.dropdownMenu.querySelectorAll('.menu-item-has-children > a').forEach(anchorElement => anchorElement.addEventListener('click', event => this.handleMenuChildren(event)));
  }
  closeMenuItems() {
    this.elements.menuToggleHolder.classList.remove('elementor-active');
    this.elements.window.removeEventListener('resize', () => this.closeMenuItems());
  }
  handleMenuToggle() {
    const isDropdownVisible = !this.elements.menuToggleHolder.classList.contains('elementor-active');
    this.elements.menuToggle.setAttribute('aria-expanded', isDropdownVisible);
    this.elements.dropdownMenu.setAttribute('aria-hidden', !isDropdownVisible);
    this.elements.dropdownMenu.inert = !isDropdownVisible;
    this.elements.menuToggleHolder.classList.toggle('elementor-active', isDropdownVisible);

    // Always close all sub active items.
    this.elements.dropdownMenu.querySelectorAll('.elementor-active').forEach(item => item.classList.remove('elementor-active'));
    if (isDropdownVisible) {
      this.elements.window.addEventListener('resize', () => this.closeMenuItems());
    } else {
      this.elements.window.removeEventListener('resize', () => this.closeMenuItems());
    }
  }
  handleMenuChildren(event) {
    const anchor = event.currentTarget;
    const parentLi = anchor.parentElement;
    if (!(parentLi !== null && parentLi !== void 0 && parentLi.classList)) {
      return;
    }
    parentLi.classList.toggle('elementor-active');
  }
}
document.addEventListener('DOMContentLoaded', () => {
  new elementorHelloThemeHandler();
});
/******/ })()
;;
/* --- lottie.min.js --- */
/*
Version: 5.6.8
License: MIT
 */
(typeof navigator !== "undefined") && (function(root, factory) {
	if (typeof define === "function" && define.amd) {
		define(function() {
			return factory(root);
		});
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory(root);
	} else {
		root.lottie = factory(root);
		root.bodymovin = root.lottie;
	}
}((window || {}), function(window) {
	"use strict";var svgNS="http://www.w3.org/2000/svg",locationHref="",initialDefaultFrame=-999999,subframeEnabled=!0,expressionsPlugin,isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),cachedColors={},bm_rounder=Math.round,bm_rnd,bm_pow=Math.pow,bm_sqrt=Math.sqrt,bm_abs=Math.abs,bm_floor=Math.floor,bm_max=Math.max,bm_min=Math.min,blitter=10,BMMath={};function ProjectInterface(){return{}}!function(){var t,e=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],r=e.length;for(t=0;t<r;t+=1)BMMath[e[t]]=Math[e[t]]}(),BMMath.random=Math.random,BMMath.abs=function(t){if("object"===typeof t&&t.length){var e,r=createSizedArray(t.length),i=t.length;for(e=0;e<i;e+=1)r[e]=Math.abs(t[e]);return r}return Math.abs(t)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;function roundValues(t){bm_rnd=t?Math.round:function(t){return t}}function styleDiv(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin=t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility=t.style.webkitBackfaceVisibility="visible",t.style.transformStyle=t.style.webkitTransformStyle=t.style.mozTransformStyle="preserve-3d"}function BMEnterFrameEvent(t,e,r,i){this.type=t,this.currentTime=e,this.totalTime=r,this.direction=i<0?-1:1}function BMCompleteEvent(t,e){this.type=t,this.direction=e<0?-1:1}function BMCompleteLoopEvent(t,e,r,i){this.type=t,this.currentLoop=r,this.totalLoops=e,this.direction=i<0?-1:1}function BMSegmentStartEvent(t,e,r){this.type=t,this.firstFrame=e,this.totalFrames=r}function BMDestroyEvent(t,e){this.type=t,this.target=e}function BMRenderFrameErrorEvent(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function BMConfigErrorEvent(t){this.type="configError",this.nativeError=t}function BMAnimationConfigErrorEvent(t,e){this.type=t,this.nativeError=e,this.currentTime=currentTime}roundValues(!1);var createElementID=(G=0,function(){return"__lottie_element_"+ ++G}),G;function HSVtoRGB(t,e,r){var i,s,a,n,o,h,l,p;switch(h=r*(1-e),l=r*(1-(o=6*t-(n=Math.floor(6*t)))*e),p=r*(1-(1-o)*e),n%6){case 0:i=r,s=p,a=h;break;case 1:i=l,s=r,a=h;break;case 2:i=h,s=r,a=p;break;case 3:i=h,s=l,a=r;break;case 4:i=p,s=h,a=r;break;case 5:i=r,s=h,a=l}return[i,s,a]}function RGBtoHSV(t,e,r){var i,s=Math.max(t,e,r),a=Math.min(t,e,r),n=s-a,o=0===s?0:n/s,h=s/255;switch(s){case a:i=0;break;case t:i=e-r+n*(e<r?6:0),i/=6*n;break;case e:i=r-t+2*n,i/=6*n;break;case r:i=t-e+4*n,i/=6*n}return[i,o,h]}function addSaturationToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[1]+=e,1<r[1]?r[1]=1:r[1]<=0&&(r[1]=0),HSVtoRGB(r[0],r[1],r[2])}function addBrightnessToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[2]+=e,1<r[2]?r[2]=1:r[2]<0&&(r[2]=0),HSVtoRGB(r[0],r[1],r[2])}function addHueToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[0]+=e/360,1<r[0]?r[0]-=1:r[0]<0&&(r[0]+=1),HSVtoRGB(r[0],r[1],r[2])}var rgbToHex=function(){var t,e,i=[];for(t=0;t<256;t+=1)e=t.toString(16),i[t]=1==e.length?"0"+e:e;return function(t,e,r){return t<0&&(t=0),e<0&&(e=0),r<0&&(r=0),"#"+i[t]+i[e]+i[r]}}();function BaseEvent(){}BaseEvent.prototype={triggerEvent:function(t,e){if(this._cbs[t])for(var r=this._cbs[t].length,i=0;i<r;i++)this._cbs[t][i](e)},addEventListener:function(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),function(){this.removeEventListener(t,e)}.bind(this)},removeEventListener:function(t,e){if(e){if(this._cbs[t]){for(var r=0,i=this._cbs[t].length;r<i;)this._cbs[t][r]===e&&(this._cbs[t].splice(r,1),r-=1,i-=1),r+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}};var createTypedArray="function"==typeof Uint8ClampedArray&&"function"==typeof Float32Array?function(t,e){return"float32"===t?new Float32Array(e):"int16"===t?new Int16Array(e):"uint8c"===t?new Uint8ClampedArray(e):void 0}:function(t,e){var r,i=0,s=[];switch(t){case"int16":case"uint8c":r=1;break;default:r=1.1}for(i=0;i<e;i+=1)s.push(r);return s};function createSizedArray(t){return Array.apply(null,{length:t})}function createNS(t){return document.createElementNS(svgNS,t)}function createTag(t){return document.createElement(t)}function DynamicPropertyContainer(){}DynamicPropertyContainer.prototype={addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&(this.dynamicProperties.push(t),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(t){this.container=t,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var getBlendMode=(Pa={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"},function(t){return Pa[t]||""}),Pa,Matrix=function(){var s=Math.cos,a=Math.sin,n=Math.tan,i=Math.round;function t(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function e(t){if(0===t)return this;var e=s(t),r=a(t);return this._t(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1)}function r(t){if(0===t)return this;var e=s(t),r=a(t);return this._t(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1)}function o(t){if(0===t)return this;var e=s(t),r=a(t);return this._t(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1)}function h(t){if(0===t)return this;var e=s(t),r=a(t);return this._t(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1)}function l(t,e){return this._t(1,e,t,1,0,0)}function p(t,e){return this.shear(n(t),n(e))}function m(t,e){var r=s(e),i=a(e);return this._t(r,i,0,0,-i,r,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,n(t),1,0,0,0,0,1,0,0,0,0,1)._t(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1)}function f(t,e,r){return r||0===r||(r=1),1===t&&1===e&&1===r?this:this._t(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1)}function c(t,e,r,i,s,a,n,o,h,l,p,m,f,c,d,u){return this.props[0]=t,this.props[1]=e,this.props[2]=r,this.props[3]=i,this.props[4]=s,this.props[5]=a,this.props[6]=n,this.props[7]=o,this.props[8]=h,this.props[9]=l,this.props[10]=p,this.props[11]=m,this.props[12]=f,this.props[13]=c,this.props[14]=d,this.props[15]=u,this}function d(t,e,r){return r=r||0,0!==t||0!==e||0!==r?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,r,1):this}function u(t,e,r,i,s,a,n,o,h,l,p,m,f,c,d,u){var y=this.props;if(1===t&&0===e&&0===r&&0===i&&0===s&&1===a&&0===n&&0===o&&0===h&&0===l&&1===p&&0===m)return y[12]=y[12]*t+y[15]*f,y[13]=y[13]*a+y[15]*c,y[14]=y[14]*p+y[15]*d,y[15]=y[15]*u,this._identityCalculated=!1,this;var g=y[0],v=y[1],b=y[2],E=y[3],x=y[4],S=y[5],P=y[6],_=y[7],A=y[8],C=y[9],T=y[10],k=y[11],M=y[12],D=y[13],w=y[14],F=y[15];return y[0]=g*t+v*s+b*h+E*f,y[1]=g*e+v*a+b*l+E*c,y[2]=g*r+v*n+b*p+E*d,y[3]=g*i+v*o+b*m+E*u,y[4]=x*t+S*s+P*h+_*f,y[5]=x*e+S*a+P*l+_*c,y[6]=x*r+S*n+P*p+_*d,y[7]=x*i+S*o+P*m+_*u,y[8]=A*t+C*s+T*h+k*f,y[9]=A*e+C*a+T*l+k*c,y[10]=A*r+C*n+T*p+k*d,y[11]=A*i+C*o+T*m+k*u,y[12]=M*t+D*s+w*h+F*f,y[13]=M*e+D*a+w*l+F*c,y[14]=M*r+D*n+w*p+F*d,y[15]=M*i+D*o+w*m+F*u,this._identityCalculated=!1,this}function y(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function g(t){for(var e=0;e<16;){if(t.props[e]!==this.props[e])return!1;e+=1}return!0}function v(t){var e;for(e=0;e<16;e+=1)t.props[e]=this.props[e]}function b(t){var e;for(e=0;e<16;e+=1)this.props[e]=t[e]}function E(t,e,r){return{x:t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}}function x(t,e,r){return t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12]}function S(t,e,r){return t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13]}function P(t,e,r){return t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}function _(){var t=this.props[0]*this.props[5]-this.props[1]*this.props[4],e=this.props[5]/t,r=-this.props[1]/t,i=-this.props[4]/t,s=this.props[0]/t,a=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/t,n=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/t,o=new Matrix;return o.props[0]=e,o.props[1]=r,o.props[4]=i,o.props[5]=s,o.props[12]=a,o.props[13]=n,o}function A(t){return this.getInverseMatrix().applyToPointArray(t[0],t[1],t[2]||0)}function C(t){var e,r=t.length,i=[];for(e=0;e<r;e+=1)i[e]=A(t[e]);return i}function T(t,e,r){var i=createTypedArray("float32",6);if(this.isIdentity())i[0]=t[0],i[1]=t[1],i[2]=e[0],i[3]=e[1],i[4]=r[0],i[5]=r[1];else{var s=this.props[0],a=this.props[1],n=this.props[4],o=this.props[5],h=this.props[12],l=this.props[13];i[0]=t[0]*s+t[1]*n+h,i[1]=t[0]*a+t[1]*o+l,i[2]=e[0]*s+e[1]*n+h,i[3]=e[0]*a+e[1]*o+l,i[4]=r[0]*s+r[1]*n+h,i[5]=r[0]*a+r[1]*o+l}return i}function k(t,e,r){return this.isIdentity()?[t,e,r]:[t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]]}function M(t,e){if(this.isIdentity())return t+","+e;var r=this.props;return Math.round(100*(t*r[0]+e*r[4]+r[12]))/100+","+Math.round(100*(t*r[1]+e*r[5]+r[13]))/100}function D(){for(var t=0,e=this.props,r="matrix3d(";t<16;)r+=i(1e4*e[t])/1e4,r+=15===t?")":",",t+=1;return r}function w(t){return t<1e-6&&0<t||-1e-6<t&&t<0?i(1e4*t)/1e4:t}function F(){var t=this.props;return"matrix("+w(t[0])+","+w(t[1])+","+w(t[4])+","+w(t[5])+","+w(t[12])+","+w(t[13])+")"}return function(){this.reset=t,this.rotate=e,this.rotateX=r,this.rotateY=o,this.rotateZ=h,this.skew=p,this.skewFromAxis=m,this.shear=l,this.scale=f,this.setTransform=c,this.translate=d,this.transform=u,this.applyToPoint=E,this.applyToX=x,this.applyToY=S,this.applyToZ=P,this.applyToPointArray=k,this.applyToTriplePoints=T,this.applyToPointStringified=M,this.toCSS=D,this.to2dCSS=F,this.clone=v,this.cloneFromProps=b,this.equals=g,this.inversePoints=C,this.inversePoint=A,this.getInverseMatrix=_,this._t=this.transform,this.isIdentity=y,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();!function(o,h){var l,p=this,m=256,f=6,c="random",d=h.pow(m,f),u=h.pow(2,52),y=2*u,g=m-1;function v(t){var e,r=t.length,n=this,i=0,s=n.i=n.j=0,a=n.S=[];for(r||(t=[r++]);i<m;)a[i]=i++;for(i=0;i<m;i++)a[i]=a[s=g&s+t[i%r]+(e=a[i])],a[s]=e;n.g=function(t){for(var e,r=0,i=n.i,s=n.j,a=n.S;t--;)e=a[i=g&i+1],r=r*m+a[g&(a[i]=a[s=g&s+e])+(a[s]=e)];return n.i=i,n.j=s,r}}function b(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function E(t,e){for(var r,i=t+"",s=0;s<i.length;)e[g&s]=g&(r^=19*e[g&s])+i.charCodeAt(s++);return x(e)}function x(t){return String.fromCharCode.apply(0,t)}h["seed"+c]=function(t,e,r){var i=[],s=E(function t(e,r){var i,s=[],a=typeof e;if(r&&"object"==a)for(i in e)try{s.push(t(e[i],r-1))}catch(t){}return s.length?s:"string"==a?e:e+"\0"}((e=!0===e?{entropy:!0}:e||{}).entropy?[t,x(o)]:null===t?function(){try{if(l)return x(l.randomBytes(m));var t=new Uint8Array(m);return(p.crypto||p.msCrypto).getRandomValues(t),x(t)}catch(t){var e=p.navigator,r=e&&e.plugins;return[+new Date,p,r,p.screen,x(o)]}}():t,3),i),a=new v(i),n=function(){for(var t=a.g(f),e=d,r=0;t<u;)t=(t+r)*m,e*=m,r=a.g(1);for(;y<=t;)t/=2,e/=2,r>>>=1;return(t+r)/e};return n.int32=function(){return 0|a.g(4)},n.quick=function(){return a.g(4)/4294967296},n.double=n,E(x(a.S),o),(e.pass||r||function(t,e,r,i){return i&&(i.S&&b(i,a),t.state=function(){return b(a,{})}),r?(h[c]=t,e):t})(n,s,"global"in e?e.global:this==h,e.state)},E(h.random(),o)}([],BMMath);var BezierFactory=function(){var t={getBezierEasing:function(t,e,r,i,s){var a=s||("bez_"+t+"_"+e+"_"+r+"_"+i).replace(/\./g,"p");if(o[a])return o[a];var n=new h([t,e,r,i]);return o[a]=n}},o={};var l=11,p=1/(l-1),e="function"==typeof Float32Array;function i(t,e){return 1-3*e+3*t}function s(t,e){return 3*e-6*t}function a(t){return 3*t}function m(t,e,r){return((i(e,r)*t+s(e,r))*t+a(e))*t}function f(t,e,r){return 3*i(e,r)*t*t+2*s(e,r)*t+a(e)}function h(t){this._p=t,this._mSampleValues=e?new Float32Array(l):new Array(l),this._precomputed=!1,this.get=this.get.bind(this)}return h.prototype={get:function(t){var e=this._p[0],r=this._p[1],i=this._p[2],s=this._p[3];return this._precomputed||this._precompute(),e===r&&i===s?t:0===t?0:1===t?1:m(this._getTForX(t),r,s)},_precompute:function(){var t=this._p[0],e=this._p[1],r=this._p[2],i=this._p[3];this._precomputed=!0,t===e&&r===i||this._calcSampleValues()},_calcSampleValues:function(){for(var t=this._p[0],e=this._p[2],r=0;r<l;++r)this._mSampleValues[r]=m(r*p,t,e)},_getTForX:function(t){for(var e=this._p[0],r=this._p[2],i=this._mSampleValues,s=0,a=1,n=l-1;a!==n&&i[a]<=t;++a)s+=p;var o=s+(t-i[--a])/(i[a+1]-i[a])*p,h=f(o,e,r);return.001<=h?function(t,e,r,i){for(var s=0;s<4;++s){var a=f(e,r,i);if(0===a)return e;e-=(m(e,r,i)-t)/a}return e}(t,o,e,r):0===h?o:function(t,e,r,i,s){for(var a,n,o=0;0<(a=m(n=e+(r-e)/2,i,s)-t)?r=n:e=n,1e-7<Math.abs(a)&&++o<10;);return n}(t,s,s+p,e,r)}},t}();function extendPrototype(t,e){var r,i,s=t.length;for(r=0;r<s;r+=1)for(var a in i=t[r].prototype)i.hasOwnProperty(a)&&(e.prototype[a]=i[a])}function getDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)}function createProxyFunction(t){function e(){}return e.prototype=t,e}function bezFunction(){Math;function y(t,e,r,i,s,a){var n=t*i+e*s+r*a-s*i-a*t-r*e;return-.001<n&&n<.001}var p=function(t,e,r,i){var s,a,n,o,h,l,p=defaultCurveSegments,m=0,f=[],c=[],d=bezier_length_pool.newElement();for(n=r.length,s=0;s<p;s+=1){for(h=s/(p-1),a=l=0;a<n;a+=1)o=bm_pow(1-h,3)*t[a]+3*bm_pow(1-h,2)*h*r[a]+3*(1-h)*bm_pow(h,2)*i[a]+bm_pow(h,3)*e[a],f[a]=o,null!==c[a]&&(l+=bm_pow(f[a]-c[a],2)),c[a]=f[a];l&&(m+=l=bm_sqrt(l)),d.percents[s]=h,d.lengths[s]=m}return d.addedLength=m,d};function g(t){this.segmentLength=0,this.points=new Array(t)}function v(t,e){this.partialLength=t,this.point=e}var b,t=(b={},function(t,e,r,i){var s=(t[0]+"_"+t[1]+"_"+e[0]+"_"+e[1]+"_"+r[0]+"_"+r[1]+"_"+i[0]+"_"+i[1]).replace(/\./g,"p");if(!b[s]){var a,n,o,h,l,p,m,f=defaultCurveSegments,c=0,d=null;2===t.length&&(t[0]!=e[0]||t[1]!=e[1])&&y(t[0],t[1],e[0],e[1],t[0]+r[0],t[1]+r[1])&&y(t[0],t[1],e[0],e[1],e[0]+i[0],e[1]+i[1])&&(f=2);var u=new g(f);for(o=r.length,a=0;a<f;a+=1){for(m=createSizedArray(o),l=a/(f-1),n=p=0;n<o;n+=1)h=bm_pow(1-l,3)*t[n]+3*bm_pow(1-l,2)*l*(t[n]+r[n])+3*(1-l)*bm_pow(l,2)*(e[n]+i[n])+bm_pow(l,3)*e[n],m[n]=h,null!==d&&(p+=bm_pow(m[n]-d[n],2));c+=p=bm_sqrt(p),u.points[a]=new v(p,m),d=m}u.segmentLength=c,b[s]=u}return b[s]});function M(t,e){var r=e.percents,i=e.lengths,s=r.length,a=bm_floor((s-1)*t),n=t*e.addedLength,o=0;if(a===s-1||0===a||n===i[a])return r[a];for(var h=i[a]>n?-1:1,l=!0;l;)if(i[a]<=n&&i[a+1]>n?(o=(n-i[a])/(i[a+1]-i[a]),l=!1):a+=h,a<0||s-1<=a){if(a===s-1)return r[a];l=!1}return r[a]+(r[a+1]-r[a])*o}var D=createTypedArray("float32",8);return{getSegmentsLength:function(t){var e,r=segments_length_pool.newElement(),i=t.c,s=t.v,a=t.o,n=t.i,o=t._length,h=r.lengths,l=0;for(e=0;e<o-1;e+=1)h[e]=p(s[e],s[e+1],a[e],n[e+1]),l+=h[e].addedLength;return i&&o&&(h[e]=p(s[e],s[0],a[e],n[0]),l+=h[e].addedLength),r.totalLength=l,r},getNewSegment:function(t,e,r,i,s,a,n){var o,h=M(s=s<0?0:1<s?1:s,n),l=M(a=1<a?1:a,n),p=t.length,m=1-h,f=1-l,c=m*m*m,d=h*m*m*3,u=h*h*m*3,y=h*h*h,g=m*m*f,v=h*m*f+m*h*f+m*m*l,b=h*h*f+m*h*l+h*m*l,E=h*h*l,x=m*f*f,S=h*f*f+m*l*f+m*f*l,P=h*l*f+m*l*l+h*f*l,_=h*l*l,A=f*f*f,C=l*f*f+f*l*f+f*f*l,T=l*l*f+f*l*l+l*f*l,k=l*l*l;for(o=0;o<p;o+=1)D[4*o]=Math.round(1e3*(c*t[o]+d*r[o]+u*i[o]+y*e[o]))/1e3,D[4*o+1]=Math.round(1e3*(g*t[o]+v*r[o]+b*i[o]+E*e[o]))/1e3,D[4*o+2]=Math.round(1e3*(x*t[o]+S*r[o]+P*i[o]+_*e[o]))/1e3,D[4*o+3]=Math.round(1e3*(A*t[o]+C*r[o]+T*i[o]+k*e[o]))/1e3;return D},getPointInSegment:function(t,e,r,i,s,a){var n=M(s,a),o=1-n;return[Math.round(1e3*(o*o*o*t[0]+(n*o*o+o*n*o+o*o*n)*r[0]+(n*n*o+o*n*n+n*o*n)*i[0]+n*n*n*e[0]))/1e3,Math.round(1e3*(o*o*o*t[1]+(n*o*o+o*n*o+o*o*n)*r[1]+(n*n*o+o*n*n+n*o*n)*i[1]+n*n*n*e[1]))/1e3]},buildBezierData:t,pointOnLine2D:y,pointOnLine3D:function(t,e,r,i,s,a,n,o,h){if(0===r&&0===a&&0===h)return y(t,e,i,s,n,o);var l,p=Math.sqrt(Math.pow(i-t,2)+Math.pow(s-e,2)+Math.pow(a-r,2)),m=Math.sqrt(Math.pow(n-t,2)+Math.pow(o-e,2)+Math.pow(h-r,2)),f=Math.sqrt(Math.pow(n-i,2)+Math.pow(o-s,2)+Math.pow(h-a,2));return-1e-4<(l=m<p?f<p?p-m-f:f-m-p:m<f?f-m-p:m-p-f)&&l<1e-4}}}!function(){for(var a=0,t=["ms","moz","webkit","o"],e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var r=(new Date).getTime(),i=Math.max(0,16-(r-a)),s=setTimeout(function(){t(r+i)},i);return a=r+i,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var bez=bezFunction();function dataFunctionManager(){function m(t,e,r){var i,s,a,n,o,h,l=t.length;for(s=0;s<l;s+=1)if("ks"in(i=t[s])&&!i.completed){if(i.completed=!0,i.tt&&(t[s-1].td=i.tt),[],-1,i.hasMask){var p=i.masksProperties;for(n=p.length,a=0;a<n;a+=1)if(p[a].pt.k.i)d(p[a].pt.k);else for(h=p[a].pt.k.length,o=0;o<h;o+=1)p[a].pt.k[o].s&&d(p[a].pt.k[o].s[0]),p[a].pt.k[o].e&&d(p[a].pt.k[o].e[0])}0===i.ty?(i.layers=f(i.refId,e),m(i.layers,e,r)):4===i.ty?c(i.shapes):5==i.ty&&u(i,r)}}function f(t,e){for(var r=0,i=e.length;r<i;){if(e[r].id===t)return e[r].layers.__used?JSON.parse(JSON.stringify(e[r].layers)):(e[r].layers.__used=!0,e[r].layers);r+=1}}function c(t){var e,r,i;for(e=t.length-1;0<=e;e-=1)if("sh"==t[e].ty){if(t[e].ks.k.i)d(t[e].ks.k);else for(i=t[e].ks.k.length,r=0;r<i;r+=1)t[e].ks.k[r].s&&d(t[e].ks.k[r].s[0]),t[e].ks.k[r].e&&d(t[e].ks.k[r].e[0]);!0}else"gr"==t[e].ty&&c(t[e].it)}function d(t){var e,r=t.i.length;for(e=0;e<r;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}function o(t,e){var r=e?e.split("."):[100,100,100];return t[0]>r[0]||!(r[0]>t[0])&&(t[1]>r[1]||!(r[1]>t[1])&&(t[2]>r[2]||!(r[2]>t[2])&&void 0))}var h,r=function(){var i=[4,4,14];function s(t){var e,r,i,s=t.length;for(e=0;e<s;e+=1)5===t[e].ty&&(r=t[e],void 0,i=r.t.d,r.t.d={k:[{s:i,t:0}]})}return function(t){if(o(i,t.v)&&(s(t.layers),t.assets)){var e,r=t.assets.length;for(e=0;e<r;e+=1)t.assets[e].layers&&s(t.assets[e].layers)}}}(),i=(h=[4,7,99],function(t){if(t.chars&&!o(h,t.v)){var e,r,i,s,a,n=t.chars.length;for(e=0;e<n;e+=1)if(t.chars[e].data&&t.chars[e].data.shapes)for(i=(a=t.chars[e].data.shapes[0].it).length,r=0;r<i;r+=1)(s=a[r].ks.k).__converted||(d(a[r].ks.k),s.__converted=!0)}}),s=function(){var i=[4,1,9];function a(t){var e,r,i,s=t.length;for(e=0;e<s;e+=1)if("gr"===t[e].ty)a(t[e].it);else if("fl"===t[e].ty||"st"===t[e].ty)if(t[e].c.k&&t[e].c.k[0].i)for(i=t[e].c.k.length,r=0;r<i;r+=1)t[e].c.k[r].s&&(t[e].c.k[r].s[0]/=255,t[e].c.k[r].s[1]/=255,t[e].c.k[r].s[2]/=255,t[e].c.k[r].s[3]/=255),t[e].c.k[r].e&&(t[e].c.k[r].e[0]/=255,t[e].c.k[r].e[1]/=255,t[e].c.k[r].e[2]/=255,t[e].c.k[r].e[3]/=255);else t[e].c.k[0]/=255,t[e].c.k[1]/=255,t[e].c.k[2]/=255,t[e].c.k[3]/=255}function s(t){var e,r=t.length;for(e=0;e<r;e+=1)4===t[e].ty&&a(t[e].shapes)}return function(t){if(o(i,t.v)&&(s(t.layers),t.assets)){var e,r=t.assets.length;for(e=0;e<r;e+=1)t.assets[e].layers&&s(t.assets[e].layers)}}}(),a=function(){var i=[4,4,18];function l(t){var e,r,i;for(e=t.length-1;0<=e;e-=1)if("sh"==t[e].ty){if(t[e].ks.k.i)t[e].ks.k.c=t[e].closed;else for(i=t[e].ks.k.length,r=0;r<i;r+=1)t[e].ks.k[r].s&&(t[e].ks.k[r].s[0].c=t[e].closed),t[e].ks.k[r].e&&(t[e].ks.k[r].e[0].c=t[e].closed);!0}else"gr"==t[e].ty&&l(t[e].it)}function s(t){var e,r,i,s,a,n,o=t.length;for(r=0;r<o;r+=1){if((e=t[r]).hasMask){var h=e.masksProperties;for(s=h.length,i=0;i<s;i+=1)if(h[i].pt.k.i)h[i].pt.k.c=h[i].cl;else for(n=h[i].pt.k.length,a=0;a<n;a+=1)h[i].pt.k[a].s&&(h[i].pt.k[a].s[0].c=h[i].cl),h[i].pt.k[a].e&&(h[i].pt.k[a].e[0].c=h[i].cl)}4===e.ty&&l(e.shapes)}}return function(t){if(o(i,t.v)&&(s(t.layers),t.assets)){var e,r=t.assets.length;for(e=0;e<r;e+=1)t.assets[e].layers&&s(t.assets[e].layers)}}}();function u(t,e){0!==t.t.a.length||"m"in t.t.p||(t.singleShape=!0)}var t={completeData:function(t,e){t.__complete||(s(t),r(t),i(t),a(t),m(t.layers,t.assets,e),t.__complete=!0)}};return t.checkColors=s,t.checkChars=i,t.checkShapes=a,t.completeLayers=m,t}var dataManager=dataFunctionManager(),FontManager=function(){var a={w:0,size:0,shapes:[]},t=[];function u(t,e){var r=createTag("span");r.style.fontFamily=e;var i=createTag("span");i.innerHTML="giItT1WQy@!-/#",r.style.position="absolute",r.style.left="-10000px",r.style.top="-10000px",r.style.fontSize="300px",r.style.fontVariant="normal",r.style.fontStyle="normal",r.style.fontWeight="normal",r.style.letterSpacing="0",r.appendChild(i),document.body.appendChild(r);var s=i.offsetWidth;return i.style.fontFamily=t+", "+e,{node:i,w:s,parent:r}}t=t.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var e=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this.initTime=Date.now()};return e.getCombinedCharacterCodes=function(){return t},e.prototype.addChars=function(t){if(t){this.chars||(this.chars=[]);var e,r,i,s=t.length,a=this.chars.length;for(e=0;e<s;e+=1){for(r=0,i=!1;r<a;)this.chars[r].style===t[e].style&&this.chars[r].fFamily===t[e].fFamily&&this.chars[r].ch===t[e].ch&&(i=!0),r+=1;i||(this.chars.push(t[e]),a+=1)}}},e.prototype.addFonts=function(t,e){if(t){if(this.chars)return this.isLoaded=!0,void(this.fonts=t.list);var r,i,s,a,n=t.list,o=n.length,h=o;for(r=0;r<o;r+=1){var l,p,m=!0;if(n[r].loaded=!1,n[r].monoCase=u(n[r].fFamily,"monospace"),n[r].sansCase=u(n[r].fFamily,"sans-serif"),n[r].fPath){if("p"===n[r].fOrigin||3===n[r].origin){if(0<(l=document.querySelectorAll('style[f-forigin="p"][f-family="'+n[r].fFamily+'"], style[f-origin="3"][f-family="'+n[r].fFamily+'"]')).length&&(m=!1),m){var f=createTag("style");f.setAttribute("f-forigin",n[r].fOrigin),f.setAttribute("f-origin",n[r].origin),f.setAttribute("f-family",n[r].fFamily),f.type="text/css",f.innerHTML="@font-face {font-family: "+n[r].fFamily+"; font-style: normal; src: url('"+n[r].fPath+"');}",e.appendChild(f)}}else if("g"===n[r].fOrigin||1===n[r].origin){for(l=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),p=0;p<l.length;p++)-1!==l[p].href.indexOf(n[r].fPath)&&(m=!1);if(m){var c=createTag("link");c.setAttribute("f-forigin",n[r].fOrigin),c.setAttribute("f-origin",n[r].origin),c.type="text/css",c.rel="stylesheet",c.href=n[r].fPath,document.body.appendChild(c)}}else if("t"===n[r].fOrigin||2===n[r].origin){for(l=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),p=0;p<l.length;p++)n[r].fPath===l[p].src&&(m=!1);if(m){var d=createTag("link");d.setAttribute("f-forigin",n[r].fOrigin),d.setAttribute("f-origin",n[r].origin),d.setAttribute("rel","stylesheet"),d.setAttribute("href",n[r].fPath),e.appendChild(d)}}}else n[r].loaded=!0,h-=1;n[r].helper=(i=e,s=n[r],a=void 0,(a=createNS("text")).style.fontSize="100px",a.setAttribute("font-family",s.fFamily),a.setAttribute("font-style",s.fStyle),a.setAttribute("font-weight",s.fWeight),a.textContent="1",s.fClass?(a.style.fontFamily="inherit",a.setAttribute("class",s.fClass)):a.style.fontFamily=s.fFamily,i.appendChild(a),createTag("canvas").getContext("2d").font=s.fWeight+" "+s.fStyle+" 100px "+s.fFamily,a),n[r].cache={},this.fonts.push(n[r])}0===h?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}else this.isLoaded=!0},e.prototype.getCharData=function(t,e,r){for(var i=0,s=this.chars.length;i<s;){if(this.chars[i].ch===t&&this.chars[i].style===e&&this.chars[i].fFamily===r)return this.chars[i];i+=1}return("string"==typeof t&&13!==t.charCodeAt(0)||!t)&&console&&console.warn&&console.warn("Missing character from exported characters list: ",t,e,r),a},e.prototype.getFontByName=function(t){for(var e=0,r=this.fonts.length;e<r;){if(this.fonts[e].fName===t)return this.fonts[e];e+=1}return this.fonts[0]},e.prototype.measureText=function(t,e,r){var i=this.getFontByName(e),s=t.charCodeAt(0);if(!i.cache[s+1]){var a=i.helper;if(" "===t){a.textContent="|"+t+"|";var n=a.getComputedTextLength();a.textContent="||";var o=a.getComputedTextLength();i.cache[s+1]=(n-o)/100}else a.textContent=t,i.cache[s+1]=a.getComputedTextLength()/100}return i.cache[s+1]*r},e.prototype.checkLoadedFonts=function(){var t,e,r,i=this.fonts.length,s=i;for(t=0;t<i;t+=1)this.fonts[t].loaded?s-=1:"n"===this.fonts[t].fOrigin||0===this.fonts[t].origin?this.fonts[t].loaded=!0:(e=this.fonts[t].monoCase.node,r=this.fonts[t].monoCase.w,e.offsetWidth!==r?(s-=1,this.fonts[t].loaded=!0):(e=this.fonts[t].sansCase.node,r=this.fonts[t].sansCase.w,e.offsetWidth!==r&&(s-=1,this.fonts[t].loaded=!0)),this.fonts[t].loaded&&(this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));0!==s&&Date.now()-this.initTime<5e3?setTimeout(this.checkLoadedFonts.bind(this),20):setTimeout(function(){this.isLoaded=!0}.bind(this),0)},e.prototype.loaded=function(){return this.isLoaded},e}(),PropertyFactory=function(){var m=initialDefaultFrame,s=Math.abs;function f(t,e){var r,i=this.offsetTime;"multidimensional"===this.propType&&(r=createTypedArray("float32",this.pv.length));for(var s,a,n,o,h,l,p,m,f=e.lastIndex,c=f,d=this.keyframes.length-1,u=!0;u;){if(s=this.keyframes[c],a=this.keyframes[c+1],c===d-1&&t>=a.t-i){s.h&&(s=a),f=0;break}if(a.t-i>t){f=c;break}c<d-1?c+=1:(f=0,u=!1)}var y,g,v,b,E,x,S,P,_,A,C=a.t-i,T=s.t-i;if(s.to){s.bezierData||(s.bezierData=bez.buildBezierData(s.s,a.s||s.e,s.to,s.ti));var k=s.bezierData;if(C<=t||t<T){var M=C<=t?k.points.length-1:0;for(o=k.points[M].point.length,n=0;n<o;n+=1)r[n]=k.points[M].point[n]}else{s.__fnct?m=s.__fnct:(m=BezierFactory.getBezierEasing(s.o.x,s.o.y,s.i.x,s.i.y,s.n).get,s.__fnct=m),h=m((t-T)/(C-T));var D,w=k.segmentLength*h,F=e.lastFrame<t&&e._lastKeyframeIndex===c?e._lastAddedLength:0;for(p=e.lastFrame<t&&e._lastKeyframeIndex===c?e._lastPoint:0,u=!0,l=k.points.length;u;){if(F+=k.points[p].partialLength,0===w||0===h||p===k.points.length-1){for(o=k.points[p].point.length,n=0;n<o;n+=1)r[n]=k.points[p].point[n];break}if(F<=w&&w<F+k.points[p+1].partialLength){for(D=(w-F)/k.points[p+1].partialLength,o=k.points[p].point.length,n=0;n<o;n+=1)r[n]=k.points[p].point[n]+(k.points[p+1].point[n]-k.points[p].point[n])*D;break}p<l-1?p+=1:u=!1}e._lastPoint=p,e._lastAddedLength=F-k.points[p].partialLength,e._lastKeyframeIndex=c}}else{var I,V,R,B,L;if(d=s.s.length,y=a.s||s.e,this.sh&&1!==s.h)if(C<=t)r[0]=y[0],r[1]=y[1],r[2]=y[2];else if(t<=T)r[0]=s.s[0],r[1]=s.s[1],r[2]=s.s[2];else{var G=N(s.s),z=N(y);g=r,v=function(t,e,r){var i,s,a,n,o,h=[],l=t[0],p=t[1],m=t[2],f=t[3],c=e[0],d=e[1],u=e[2],y=e[3];(s=l*c+p*d+m*u+f*y)<0&&(s=-s,c=-c,d=-d,u=-u,y=-y);o=1e-6<1-s?(i=Math.acos(s),a=Math.sin(i),n=Math.sin((1-r)*i)/a,Math.sin(r*i)/a):(n=1-r,r);return h[0]=n*l+o*c,h[1]=n*p+o*d,h[2]=n*m+o*u,h[3]=n*f+o*y,h}(G,z,(t-T)/(C-T)),b=v[0],E=v[1],x=v[2],S=v[3],P=Math.atan2(2*E*S-2*b*x,1-2*E*E-2*x*x),_=Math.asin(2*b*E+2*x*S),A=Math.atan2(2*b*S-2*E*x,1-2*b*b-2*x*x),g[0]=P/degToRads,g[1]=_/degToRads,g[2]=A/degToRads}else for(c=0;c<d;c+=1)1!==s.h&&(h=C<=t?1:t<T?0:(s.o.x.constructor===Array?(s.__fnct||(s.__fnct=[]),s.__fnct[c]?m=s.__fnct[c]:(I=void 0===s.o.x[c]?s.o.x[0]:s.o.x[c],V=void 0===s.o.y[c]?s.o.y[0]:s.o.y[c],R=void 0===s.i.x[c]?s.i.x[0]:s.i.x[c],B=void 0===s.i.y[c]?s.i.y[0]:s.i.y[c],m=BezierFactory.getBezierEasing(I,V,R,B).get,s.__fnct[c]=m)):s.__fnct?m=s.__fnct:(I=s.o.x,V=s.o.y,R=s.i.x,B=s.i.y,m=BezierFactory.getBezierEasing(I,V,R,B).get,s.__fnct=m),m((t-T)/(C-T)))),y=a.s||s.e,L=1===s.h?s.s[c]:s.s[c]+(y[c]-s.s[c])*h,"multidimensional"===this.propType?r[c]=L:r=L}return e.lastIndex=f,r}function N(t){var e=t[0]*degToRads,r=t[1]*degToRads,i=t[2]*degToRads,s=Math.cos(e/2),a=Math.cos(r/2),n=Math.cos(i/2),o=Math.sin(e/2),h=Math.sin(r/2),l=Math.sin(i/2);return[o*h*n+s*a*l,o*a*n+s*h*l,s*h*n-o*a*l,s*a*n-o*h*l]}function c(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,r=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==m&&(this._caching.lastFrame>=r&&r<=t||this._caching.lastFrame<e&&t<e))){this._caching.lastFrame>=t&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var i=this.interpolateValue(t,this._caching);this.pv=i}return this._caching.lastFrame=t,this.pv}function d(t){var e;if("unidimensional"===this.propType)e=t*this.mult,1e-5<s(this.v-e)&&(this.v=e,this._mdf=!0);else for(var r=0,i=this.v.length;r<i;)e=t[r]*this.mult,1e-5<s(this.v[r]-e)&&(this.v[r]=e,this._mdf=!0),r+=1}function u(){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{this.lock=!0,this._mdf=this._isFirstFrame;var t,e=this.effectsSequence.length,r=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)r=this.effectsSequence[t](r);this.setVValue(r),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function y(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function n(t,e,r,i){this.propType="unidimensional",this.mult=r||1,this.data=e,this.v=r?e.k*r:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=u,this.setVValue=d,this.addEffect=y}function o(t,e,r,i){this.propType="multidimensional",this.mult=r||1,this.data=e,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var s,a=e.k.length;this.v=createTypedArray("float32",a),this.pv=createTypedArray("float32",a);createTypedArray("float32",a);for(this.vel=createTypedArray("float32",a),s=0;s<a;s+=1)this.v[s]=e.k[s]*this.mult,this.pv[s]=e.k[s];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=u,this.setVValue=d,this.addEffect=y}function h(t,e,r,i){this.propType="unidimensional",this.keyframes=e.k,this.offsetTime=t.data.st,this.frameId=-1,this._caching={lastFrame:m,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=e,this.mult=r||1,this.elem=t,this.container=i,this.comp=t.comp,this.v=m,this.pv=m,this._isFirstFrame=!0,this.getValue=u,this.setVValue=d,this.interpolateValue=f,this.effectsSequence=[c.bind(this)],this.addEffect=y}function l(t,e,r,i){this.propType="multidimensional";var s,a,n,o,h,l=e.k.length;for(s=0;s<l-1;s+=1)e.k[s].to&&e.k[s].s&&e.k[s+1]&&e.k[s+1].s&&(a=e.k[s].s,n=e.k[s+1].s,o=e.k[s].to,h=e.k[s].ti,(2===a.length&&(a[0]!==n[0]||a[1]!==n[1])&&bez.pointOnLine2D(a[0],a[1],n[0],n[1],a[0]+o[0],a[1]+o[1])&&bez.pointOnLine2D(a[0],a[1],n[0],n[1],n[0]+h[0],n[1]+h[1])||3===a.length&&(a[0]!==n[0]||a[1]!==n[1]||a[2]!==n[2])&&bez.pointOnLine3D(a[0],a[1],a[2],n[0],n[1],n[2],a[0]+o[0],a[1]+o[1],a[2]+o[2])&&bez.pointOnLine3D(a[0],a[1],a[2],n[0],n[1],n[2],n[0]+h[0],n[1]+h[1],n[2]+h[2]))&&(e.k[s].to=null,e.k[s].ti=null),a[0]===n[0]&&a[1]===n[1]&&0===o[0]&&0===o[1]&&0===h[0]&&0===h[1]&&(2===a.length||a[2]===n[2]&&0===o[2]&&0===h[2])&&(e.k[s].to=null,e.k[s].ti=null));this.effectsSequence=[c.bind(this)],this.keyframes=e.k,this.offsetTime=t.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=r||1,this.elem=t,this.container=i,this.comp=t.comp,this.getValue=u,this.setVValue=d,this.interpolateValue=f,this.frameId=-1;var p=e.k[0].s.length;for(this.v=createTypedArray("float32",p),this.pv=createTypedArray("float32",p),s=0;s<p;s+=1)this.v[s]=m,this.pv[s]=m;this._caching={lastFrame:m,lastIndex:0,value:createTypedArray("float32",p)},this.addEffect=y}return{getProp:function(t,e,r,i,s){var a;if(e.k.length)if("number"==typeof e.k[0])a=new o(t,e,i,s);else switch(r){case 0:a=new h(t,e,i,s);break;case 1:a=new l(t,e,i,s)}else a=new n(t,e,i,s);return a.effectsSequence.length&&s.addDynamicProperty(a),a}}}(),TransformPropertyFactory=function(){var n=[0,0];function i(t,e,r){if(this.elem=t,this.frameId=-1,this.propType="transform",this.data=e,this.v=new Matrix,this.pre=new Matrix,this.appliedTransformations=0,this.initDynamicPropertyContainer(r||t),e.p&&e.p.s?(this.px=PropertyFactory.getProp(t,e.p.x,0,0,this),this.py=PropertyFactory.getProp(t,e.p.y,0,0,this),e.p.z&&(this.pz=PropertyFactory.getProp(t,e.p.z,0,0,this))):this.p=PropertyFactory.getProp(t,e.p||{k:[0,0,0]},1,0,this),e.rx){if(this.rx=PropertyFactory.getProp(t,e.rx,0,degToRads,this),this.ry=PropertyFactory.getProp(t,e.ry,0,degToRads,this),this.rz=PropertyFactory.getProp(t,e.rz,0,degToRads,this),e.or.k[0].ti){var i,s=e.or.k.length;for(i=0;i<s;i+=1)e.or.k[i].to=e.or.k[i].ti=null}this.or=PropertyFactory.getProp(t,e.or,1,degToRads,this),this.or.sh=!0}else this.r=PropertyFactory.getProp(t,e.r||{k:0},0,degToRads,this);e.sk&&(this.sk=PropertyFactory.getProp(t,e.sk,0,degToRads,this),this.sa=PropertyFactory.getProp(t,e.sa,0,degToRads,this)),this.a=PropertyFactory.getProp(t,e.a||{k:[0,0,0]},1,0,this),this.s=PropertyFactory.getProp(t,e.s||{k:[100,100,100]},1,.01,this),e.o?this.o=PropertyFactory.getProp(t,e.o,0,.01,t):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}return i.prototype={applyToMatrix:function(t){var e=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||e,this.a&&t.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&t.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&t.skewFromAxis(-this.sk.v,this.sa.v),this.r?t.rotate(-this.r.v):t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?t.translate(this.px.v,this.py.v,-this.pz.v):t.translate(this.px.v,this.py.v,0):t.translate(this.p.v[0],this.p.v[1],-this.p.v[2])},getValue:function(t){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||t){if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var e,r,i=this.elem.globalData.frameRate;if(this.p&&this.p.keyframes&&this.p.getValueAtTime)r=this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(e=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/i,0),this.p.getValueAtTime(this.p.keyframes[0].t/i,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(e=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/i,0),this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/i,0)):(e=this.p.pv,this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/i,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){e=[],r=[];var s=this.px,a=this.py;s._caching.lastFrame+s.offsetTime<=s.keyframes[0].t?(e[0]=s.getValueAtTime((s.keyframes[0].t+.01)/i,0),e[1]=a.getValueAtTime((a.keyframes[0].t+.01)/i,0),r[0]=s.getValueAtTime(s.keyframes[0].t/i,0),r[1]=a.getValueAtTime(a.keyframes[0].t/i,0)):s._caching.lastFrame+s.offsetTime>=s.keyframes[s.keyframes.length-1].t?(e[0]=s.getValueAtTime(s.keyframes[s.keyframes.length-1].t/i,0),e[1]=a.getValueAtTime(a.keyframes[a.keyframes.length-1].t/i,0),r[0]=s.getValueAtTime((s.keyframes[s.keyframes.length-1].t-.01)/i,0),r[1]=a.getValueAtTime((a.keyframes[a.keyframes.length-1].t-.01)/i,0)):(e=[s.pv,a.pv],r[0]=s.getValueAtTime((s._caching.lastFrame+s.offsetTime-.01)/i,s.offsetTime),r[1]=a.getValueAtTime((a._caching.lastFrame+a.offsetTime-.01)/i,a.offsetTime))}else e=r=n;this.v.rotate(-Math.atan2(e[1]-r[1],e[0]-r[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}},precalculateMatrix:function(){if(!this.a.k&&(this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1,!this.s.effectsSequence.length)){if(this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2,this.sk){if(this.sk.effectsSequence.length||this.sa.effectsSequence.length)return;this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3}if(this.r){if(this.r.effectsSequence.length)return;this.pre.rotate(-this.r.v),this.appliedTransformations=4}else this.rz.effectsSequence.length||this.ry.effectsSequence.length||this.rx.effectsSequence.length||this.or.effectsSequence.length||(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}},autoOrient:function(){}},extendPrototype([DynamicPropertyContainer],i),i.prototype.addDynamicProperty=function(t){this._addDynamicProperty(t),this.elem.addDynamicProperty(t),this._isDirty=!0},i.prototype._addDynamicProperty=DynamicPropertyContainer.prototype.addDynamicProperty,{getTransformProperty:function(t,e,r){return new i(t,e,r)}}}();function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=createSizedArray(this._maxLength),this.o=createSizedArray(this._maxLength),this.i=createSizedArray(this._maxLength)}ShapePath.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var r=0;r<e;)this.v[r]=point_pool.newElement(),this.o[r]=point_pool.newElement(),this.i[r]=point_pool.newElement(),r+=1},ShapePath.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength)),this.i=this.i.concat(createSizedArray(this._maxLength)),this.o=this.o.concat(createSizedArray(this._maxLength)),this._maxLength*=2},ShapePath.prototype.setXYAt=function(t,e,r,i,s){var a;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),r){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o}(!a[i]||a[i]&&!s)&&(a[i]=point_pool.newElement()),a[i][0]=t,a[i][1]=e},ShapePath.prototype.setTripleAt=function(t,e,r,i,s,a,n,o){this.setXYAt(t,e,"v",n,o),this.setXYAt(r,i,"o",n,o),this.setXYAt(s,a,"i",n,o)},ShapePath.prototype.reverse=function(){var t=new ShapePath;t.setPathData(this.c,this._length);var e=this.v,r=this.o,i=this.i,s=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],i[0][0],i[0][1],r[0][0],r[0][1],0,!1),s=1);var a,n=this._length-1,o=this._length;for(a=s;a<o;a+=1)t.setTripleAt(e[n][0],e[n][1],i[n][0],i[n][1],r[n][0],r[n][1],a,!1),n-=1;return t};var ShapePropertyFactory=function(){var s=-999999;function t(t,e,r){var i,s,a,n,o,h,l,p,m,f=r.lastIndex,c=this.keyframes;if(t<c[0].t-this.offsetTime)i=c[0].s[0],a=!0,f=0;else if(t>=c[c.length-1].t-this.offsetTime)i=c[c.length-1].s?c[c.length-1].s[0]:c[c.length-2].e[0],a=!0;else{for(var d,u,y=f,g=c.length-1,v=!0;v&&(d=c[y],!((u=c[y+1]).t-this.offsetTime>t));)y<g-1?y+=1:v=!1;if(f=y,!(a=1===d.h)){if(t>=u.t-this.offsetTime)p=1;else if(t<d.t-this.offsetTime)p=0;else{var b;d.__fnct?b=d.__fnct:(b=BezierFactory.getBezierEasing(d.o.x,d.o.y,d.i.x,d.i.y).get,d.__fnct=b),p=b((t-(d.t-this.offsetTime))/(u.t-this.offsetTime-(d.t-this.offsetTime)))}s=u.s?u.s[0]:d.e[0]}i=d.s[0]}for(h=e._length,l=i.i[0].length,r.lastIndex=f,n=0;n<h;n+=1)for(o=0;o<l;o+=1)m=a?i.i[n][o]:i.i[n][o]+(s.i[n][o]-i.i[n][o])*p,e.i[n][o]=m,m=a?i.o[n][o]:i.o[n][o]+(s.o[n][o]-i.o[n][o])*p,e.o[n][o]=m,m=a?i.v[n][o]:i.v[n][o]+(s.v[n][o]-i.v[n][o])*p,e.v[n][o]=m}function a(){this.paths=this.localShapeCollection}function e(t){(function(t,e){if(t._length!==e._length||t.c!==e.c)return!1;var r,i=t._length;for(r=0;r<i;r+=1)if(t.v[r][0]!==e.v[r][0]||t.v[r][1]!==e.v[r][1]||t.o[r][0]!==e.o[r][0]||t.o[r][1]!==e.o[r][1]||t.i[r][0]!==e.i[r][0]||t.i[r][1]!==e.i[r][1])return!1;return!0})(this.v,t)||(this.v=shape_pool.clone(t),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function r(){if(this.elem.globalData.frameId!==this.frameId)if(this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{this.lock=!0,this._mdf=!1;var t,e=this.kf?this.pv:this.data.ks?this.data.ks.k:this.data.pt.k,r=this.effectsSequence.length;for(t=0;t<r;t+=1)e=this.effectsSequence[t](e);this.setVValue(e),this.lock=!1,this.frameId=this.elem.globalData.frameId}else this._mdf=!1}function n(t,e,r){this.propType="shape",this.comp=t.comp,this.container=t,this.elem=t,this.data=e,this.k=!1,this.kf=!1,this._mdf=!1;var i=3===r?e.pt.k:e.ks.k;this.v=shape_pool.clone(i),this.pv=shape_pool.clone(this.v),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=a,this.effectsSequence=[]}function i(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function o(t,e,r){this.propType="shape",this.comp=t.comp,this.elem=t,this.container=t,this.offsetTime=t.data.st,this.keyframes=3===r?e.pt.k:e.ks.k,this.k=!0,this.kf=!0;var i=this.keyframes[0].s[0].i.length;this.keyframes[0].s[0].i[0].length;this.v=shape_pool.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,i),this.pv=shape_pool.clone(this.v),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=s,this.reset=a,this._caching={lastFrame:s,lastIndex:0},this.effectsSequence=[function(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,r=this.keyframes[this.keyframes.length-1].t-this.offsetTime,i=this._caching.lastFrame;return i!==s&&(i<e&&t<e||r<i&&r<t)||(this._caching.lastIndex=i<t?this._caching.lastIndex:0,this.interpolateShape(t,this.pv,this._caching)),this._caching.lastFrame=t,this.pv}.bind(this)]}n.prototype.interpolateShape=t,n.prototype.getValue=r,n.prototype.setVValue=e,n.prototype.addEffect=i,o.prototype.getValue=r,o.prototype.interpolateShape=t,o.prototype.setVValue=e,o.prototype.addEffect=i;var h=function(){var n=roundCorner;function t(t,e){this.v=shape_pool.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=e.d,this.elem=t,this.comp=t.comp,this.frameId=-1,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return t.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var t=this.p.v[0],e=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2,s=3!==this.d,a=this.v;a.v[0][0]=t,a.v[0][1]=e-i,a.v[1][0]=s?t+r:t-r,a.v[1][1]=e,a.v[2][0]=t,a.v[2][1]=e+i,a.v[3][0]=s?t-r:t+r,a.v[3][1]=e,a.i[0][0]=s?t-r*n:t+r*n,a.i[0][1]=e-i,a.i[1][0]=s?t+r:t-r,a.i[1][1]=e-i*n,a.i[2][0]=s?t+r*n:t-r*n,a.i[2][1]=e+i,a.i[3][0]=s?t-r:t+r,a.i[3][1]=e+i*n,a.o[0][0]=s?t+r*n:t-r*n,a.o[0][1]=e-i,a.o[1][0]=s?t+r:t-r,a.o[1][1]=e+i*n,a.o[2][0]=s?t-r*n:t+r*n,a.o[2][1]=e+i,a.o[3][0]=s?t-r:t+r,a.o[3][1]=e-i*n}},extendPrototype([DynamicPropertyContainer],t),t}(),l=function(){function t(t,e){this.v=shape_pool.newElement(),this.v.setPathData(!0,0),this.elem=t,this.comp=t.comp,this.data=e,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),1===e.sy?(this.ir=PropertyFactory.getProp(t,e.ir,0,0,this),this.is=PropertyFactory.getProp(t,e.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=PropertyFactory.getProp(t,e.pt,0,0,this),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,degToRads,this),this.or=PropertyFactory.getProp(t,e.or,0,0,this),this.os=PropertyFactory.getProp(t,e.os,0,.01,this),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return t.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var t,e,r,i,s=2*Math.floor(this.pt.v),a=2*Math.PI/s,n=!0,o=this.or.v,h=this.ir.v,l=this.os.v,p=this.is.v,m=2*Math.PI*o/(2*s),f=2*Math.PI*h/(2*s),c=-Math.PI/2;c+=this.r.v;var d=3===this.data.d?-1:1;for(t=this.v._length=0;t<s;t+=1){r=n?l:p,i=n?m:f;var u=(e=n?o:h)*Math.cos(c),y=e*Math.sin(c),g=0===u&&0===y?0:y/Math.sqrt(u*u+y*y),v=0===u&&0===y?0:-u/Math.sqrt(u*u+y*y);u+=+this.p.v[0],y+=+this.p.v[1],this.v.setTripleAt(u,y,u-g*i*r*d,y-v*i*r*d,u+g*i*r*d,y+v*i*r*d,t,!0),n=!n,c+=a*d}},convertPolygonToPath:function(){var t,e=Math.floor(this.pt.v),r=2*Math.PI/e,i=this.or.v,s=this.os.v,a=2*Math.PI*i/(4*e),n=-Math.PI/2,o=3===this.data.d?-1:1;for(n+=this.r.v,t=this.v._length=0;t<e;t+=1){var h=i*Math.cos(n),l=i*Math.sin(n),p=0===h&&0===l?0:l/Math.sqrt(h*h+l*l),m=0===h&&0===l?0:-h/Math.sqrt(h*h+l*l);h+=+this.p.v[0],l+=+this.p.v[1],this.v.setTripleAt(h,l,h-p*a*s*o,l-m*a*s*o,h+p*a*s*o,l+m*a*s*o,t,!0),n+=r*o}this.paths.length=0,this.paths[0]=this.v}},extendPrototype([DynamicPropertyContainer],t),t}(),p=function(){function t(t,e){this.v=shape_pool.newElement(),this.v.c=!0,this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=t,this.comp=t.comp,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return t.prototype={convertRectToPath:function(){var t=this.p.v[0],e=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2,s=bm_min(r,i,this.r.v),a=s*(1-roundCorner);this.v._length=0,2===this.d||1===this.d?(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+s,t+r,e-i+a,0,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-a,t+r,e+i-s,1,!0),0!==s?(this.v.setTripleAt(t+r-s,e+i,t+r-s,e+i,t+r-a,e+i,2,!0),this.v.setTripleAt(t-r+s,e+i,t-r+a,e+i,t-r+s,e+i,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-s,t-r,e+i-a,4,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+a,t-r,e-i+s,5,!0),this.v.setTripleAt(t-r+s,e-i,t-r+s,e-i,t-r+a,e-i,6,!0),this.v.setTripleAt(t+r-s,e-i,t+r-a,e-i,t+r-s,e-i,7,!0)):(this.v.setTripleAt(t-r,e+i,t-r+a,e+i,t-r,e+i,2),this.v.setTripleAt(t-r,e-i,t-r,e-i+a,t-r,e-i,3))):(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+a,t+r,e-i+s,0,!0),0!==s?(this.v.setTripleAt(t+r-s,e-i,t+r-s,e-i,t+r-a,e-i,1,!0),this.v.setTripleAt(t-r+s,e-i,t-r+a,e-i,t-r+s,e-i,2,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+s,t-r,e-i+a,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-a,t-r,e+i-s,4,!0),this.v.setTripleAt(t-r+s,e+i,t-r+s,e+i,t-r+a,e+i,5,!0),this.v.setTripleAt(t+r-s,e+i,t+r-a,e+i,t+r-s,e+i,6,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-s,t+r,e+i-a,7,!0)):(this.v.setTripleAt(t-r,e-i,t-r+a,e-i,t-r,e-i,1,!0),this.v.setTripleAt(t-r,e+i,t-r,e+i-a,t-r,e+i,2,!0),this.v.setTripleAt(t+r,e+i,t+r-a,e+i,t+r,e+i,3,!0)))},getValue:function(t){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:a},extendPrototype([DynamicPropertyContainer],t),t}();var m={getShapeProp:function(t,e,r){var i;return 3===r||4===r?i=(3===r?e.pt:e.ks).k.length?new o(t,e,r):new n(t,e,r):5===r?i=new p(t,e):6===r?i=new h(t,e):7===r&&(i=new l(t,e)),i.k&&t.addDynamicProperty(i),i},getConstructorFunction:function(){return n},getKeyframedConstructorFunction:function(){return o}};return m}(),ShapeModifiers=($r={},_r={},$r.registerModifier=function(t,e){_r[t]||(_r[t]=e)},$r.getModifier=function(t,e,r){return new _r[t](e,r)},$r),$r,_r;function ShapeModifier(){}function TrimModifier(){}function RoundCornersModifier(){}function RepeaterModifier(){}function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=createSizedArray(this._maxLength)}function DashProperty(t,e,r,i){this.elem=t,this.frameId=-1,this.dataProps=createSizedArray(e.length),this.renderer=r,this.k=!1,this.dashStr="",this.dashArray=createTypedArray("float32",e.length?e.length-1:0),this.dashoffset=createTypedArray("float32",1),this.initDynamicPropertyContainer(i);var s,a,n=e.length||0;for(s=0;s<n;s+=1)a=PropertyFactory.getProp(t,e[s].v,0,0,this),this.k=a.k||this.k,this.dataProps[s]={n:e[s].n,p:a};this.k||this.getValue(!0),this._isAnimated=this.k}function GradientProperty(t,e,r){this.data=e,this.c=createTypedArray("uint8c",4*e.p);var i=e.k.k[0].s?e.k.k[0].s.length-4*e.p:e.k.k.length-4*e.p;this.o=createTypedArray("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this.initDynamicPropertyContainer(r),this.prop=PropertyFactory.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:shapeCollection_pool.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},ShapeModifier.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=initialDefaultFrame,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ShapeModifier.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},extendPrototype([DynamicPropertyContainer],ShapeModifier),extendPrototype([ShapeModifier],TrimModifier),TrimModifier.prototype.initModifierProperties=function(t,e){this.s=PropertyFactory.getProp(t,e.s,0,.01,this),this.e=PropertyFactory.getProp(t,e.e,0,.01,this),this.o=PropertyFactory.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},TrimModifier.prototype.addShapeToModifier=function(t){t.pathsData=[]},TrimModifier.prototype.calculateShapeEdges=function(t,e,r,i,s){var a=[];e<=1?a.push({s:t,e:e}):1<=t?a.push({s:t-1,e:e-1}):(a.push({s:t,e:1}),a.push({s:0,e:e-1}));var n,o,h=[],l=a.length;for(n=0;n<l;n+=1){var p,m;if((o=a[n]).e*s<i||o.s*s>i+r);else p=o.s*s<=i?0:(o.s*s-i)/r,m=o.e*s>=i+r?1:(o.e*s-i)/r,h.push([p,m])}return h.length||h.push([0,0]),h},TrimModifier.prototype.releasePathsData=function(t){var e,r=t.length;for(e=0;e<r;e+=1)segments_length_pool.release(t[e]);return t.length=0,t},TrimModifier.prototype.processShapes=function(t){var e,r,i;if(this._mdf||t){var s=this.o.v%360/360;if(s<0&&(s+=1),e=(1<this.s.v?1:this.s.v<0?0:this.s.v)+s,(r=(1<this.e.v?1:this.e.v<0?0:this.e.v)+s)<e){var a=e;e=r,r=a}e=1e-4*Math.round(1e4*e),r=1e-4*Math.round(1e4*r),this.sValue=e,this.eValue=r}else e=this.sValue,r=this.eValue;var n,o,h,l,p,m,f=this.shapes.length,c=0;if(r===e)for(n=0;n<f;n+=1)this.shapes[n].localShapeCollection.releaseShapes(),this.shapes[n].shape._mdf=!0,this.shapes[n].shape.paths=this.shapes[n].localShapeCollection;else if(1===r&&0===e||0===r&&1===e){if(this._mdf)for(n=0;n<f;n+=1)this.shapes[n].pathsData.length=0,this.shapes[n].shape._mdf=!0}else{var d,u,y=[];for(n=0;n<f;n+=1)if((d=this.shapes[n]).shape._mdf||this._mdf||t||2===this.m){if(h=(i=d.shape.paths)._length,m=0,!d.shape._mdf&&d.pathsData.length)m=d.totalShapeLength;else{for(l=this.releasePathsData(d.pathsData),o=0;o<h;o+=1)p=bez.getSegmentsLength(i.shapes[o]),l.push(p),m+=p.totalLength;d.totalShapeLength=m,d.pathsData=l}c+=m,d.shape._mdf=!0}else d.shape.paths=d.localShapeCollection;var g,v=e,b=r,E=0;for(n=f-1;0<=n;n-=1)if((d=this.shapes[n]).shape._mdf){for((u=d.localShapeCollection).releaseShapes(),2===this.m&&1<f?(g=this.calculateShapeEdges(e,r,d.totalShapeLength,E,c),E+=d.totalShapeLength):g=[[v,b]],h=g.length,o=0;o<h;o+=1){v=g[o][0],b=g[o][1],y.length=0,b<=1?y.push({s:d.totalShapeLength*v,e:d.totalShapeLength*b}):1<=v?y.push({s:d.totalShapeLength*(v-1),e:d.totalShapeLength*(b-1)}):(y.push({s:d.totalShapeLength*v,e:d.totalShapeLength}),y.push({s:0,e:d.totalShapeLength*(b-1)}));var x=this.addShapes(d,y[0]);if(y[0].s!==y[0].e){if(1<y.length)if(d.shape.paths.shapes[d.shape.paths._length-1].c){var S=x.pop();this.addPaths(x,u),x=this.addShapes(d,y[1],S)}else this.addPaths(x,u),x=this.addShapes(d,y[1]);this.addPaths(x,u)}}d.shape.paths=u}}},TrimModifier.prototype.addPaths=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e.addShape(t[r])},TrimModifier.prototype.addSegment=function(t,e,r,i,s,a,n){s.setXYAt(e[0],e[1],"o",a),s.setXYAt(r[0],r[1],"i",a+1),n&&s.setXYAt(t[0],t[1],"v",a),s.setXYAt(i[0],i[1],"v",a+1)},TrimModifier.prototype.addSegmentFromArray=function(t,e,r,i){e.setXYAt(t[1],t[5],"o",r),e.setXYAt(t[2],t[6],"i",r+1),i&&e.setXYAt(t[0],t[4],"v",r),e.setXYAt(t[3],t[7],"v",r+1)},TrimModifier.prototype.addShapes=function(t,e,r){var i,s,a,n,o,h,l,p,m=t.pathsData,f=t.shape.paths.shapes,c=t.shape.paths._length,d=0,u=[],y=!0;for(p=r?(o=r._length,r._length):(r=shape_pool.newElement(),o=0),u.push(r),i=0;i<c;i+=1){for(h=m[i].lengths,r.c=f[i].c,a=f[i].c?h.length:h.length+1,s=1;s<a;s+=1)if(d+(n=h[s-1]).addedLength<e.s)d+=n.addedLength,r.c=!1;else{if(d>e.e){r.c=!1;break}e.s<=d&&e.e>=d+n.addedLength?(this.addSegment(f[i].v[s-1],f[i].o[s-1],f[i].i[s],f[i].v[s],r,o,y),y=!1):(l=bez.getNewSegment(f[i].v[s-1],f[i].v[s],f[i].o[s-1],f[i].i[s],(e.s-d)/n.addedLength,(e.e-d)/n.addedLength,h[s-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1),d+=n.addedLength,o+=1}if(f[i].c&&h.length){if(n=h[s-1],d<=e.e){var g=h[s-1].addedLength;e.s<=d&&e.e>=d+g?(this.addSegment(f[i].v[s-1],f[i].o[s-1],f[i].i[0],f[i].v[0],r,o,y),y=!1):(l=bez.getNewSegment(f[i].v[s-1],f[i].v[0],f[i].o[s-1],f[i].i[0],(e.s-d)/g,(e.e-d)/g,h[s-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1)}else r.c=!1;d+=n.addedLength,o+=1}if(r._length&&(r.setXYAt(r.v[p][0],r.v[p][1],"i",p),r.setXYAt(r.v[r._length-1][0],r.v[r._length-1][1],"o",r._length-1)),d>e.e)break;i<c-1&&(r=shape_pool.newElement(),y=!0,u.push(r),o=0)}return u},ShapeModifiers.registerModifier("tm",TrimModifier),extendPrototype([ShapeModifier],RoundCornersModifier),RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},RoundCornersModifier.prototype.processPath=function(t,e){var r=shape_pool.newElement();r.c=t.c;var i,s,a,n,o,h,l,p,m,f,c,d,u,y=t._length,g=0;for(i=0;i<y;i+=1)s=t.v[i],n=t.o[i],a=t.i[i],s[0]===n[0]&&s[1]===n[1]&&s[0]===a[0]&&s[1]===a[1]?0!==i&&i!==y-1||t.c?(o=0===i?t.v[y-1]:t.v[i-1],l=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=d=s[0]+(o[0]-s[0])*l,m=u=s[1]-(s[1]-o[1])*l,f=p-(p-s[0])*roundCorner,c=m-(m-s[1])*roundCorner,r.setTripleAt(p,m,f,c,d,u,g),g+=1,o=i===y-1?t.v[0]:t.v[i+1],l=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=f=s[0]+(o[0]-s[0])*l,m=c=s[1]+(o[1]-s[1])*l,d=p-(p-s[0])*roundCorner,u=m-(m-s[1])*roundCorner,r.setTripleAt(p,m,f,c,d,u,g)):r.setTripleAt(s[0],s[1],n[0],n[1],a[0],a[1],g):r.setTripleAt(t.v[i][0],t.v[i][1],t.o[i][0],t.o[i][1],t.i[i][0],t.i[i][1],g),g+=1;return r},RoundCornersModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.rd.v;if(0!==h)for(r=0;r<o;r+=1){if((a=this.shapes[r]).shape.paths,n=a.localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},ShapeModifiers.registerModifier("rd",RoundCornersModifier),extendPrototype([ShapeModifier],RepeaterModifier),RepeaterModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(t,e.c,0,null,this),this.o=PropertyFactory.getProp(t,e.o,0,null,this),this.tr=TransformPropertyFactory.getTransformProperty(t,e.tr,this),this.so=PropertyFactory.getProp(t,e.tr.so,0,.01,this),this.eo=PropertyFactory.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(t,e,r,i,s,a){var n=a?-1:1,o=i.s.v[0]+(1-i.s.v[0])*(1-s),h=i.s.v[1]+(1-i.s.v[1])*(1-s);t.translate(i.p.v[0]*n*s,i.p.v[1]*n*s,i.p.v[2]),e.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),e.rotate(-i.r.v*n*s),e.translate(i.a.v[0],i.a.v[1],i.a.v[2]),r.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),r.scale(a?1/o:o,a?1/h:h),r.translate(i.a.v[0],i.a.v[1],i.a.v[2])},RepeaterModifier.prototype.init=function(t,e,r,i){this.elem=t,this.arr=e,this.pos=r,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[r]);for(;0<r;)r-=1,this._elements.unshift(e[r]),1;this.dynamicProperties.length?this.k=!0:this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e]._processed=!1,"gr"===t[e].ty&&this.resetElements(t[e].it)},RepeaterModifier.prototype.cloneElements=function(t){t.length;var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},RepeaterModifier.prototype.changeGroupRender=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]._render=e,"gr"===t[r].ty&&this.changeGroupRender(t[r].it,e)},RepeaterModifier.prototype.processShapes=function(t){var e,r,i,s,a;if(this._mdf||t){var n,o=Math.ceil(this.c.v);if(this._groups.length<o){for(;this._groups.length<o;){var h={it:this.cloneElements(this._elements),ty:"gr"};h.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,h),this._groups.splice(0,0,h),this._currentCopies+=1}this.elem.reloadShapes()}for(i=a=0;i<=this._groups.length-1;i+=1)n=a<o,this._groups[i]._render=n,this.changeGroupRender(this._groups[i].it,n),a+=1;this._currentCopies=o;var l=this.o.v,p=l%1,m=0<l?Math.floor(l):Math.ceil(l),f=(this.tr.v.props,this.pMatrix.props),c=this.rMatrix.props,d=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var u,y,g=0;if(0<l){for(;g<m;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),g+=1;p&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,p,!1),g+=p)}else if(l<0){for(;m<g;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),g-=1;p&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-p,!0),g-=p)}for(i=1===this.data.m?0:this._currentCopies-1,s=1===this.data.m?1:-1,a=this._currentCopies;a;){if(y=(r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props).length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1)),0!==g){for((0!==i&&1===s||i!==this._currentCopies-1&&-1===s)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15]),this.matrix.transform(d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8],d[9],d[10],d[11],d[12],d[13],d[14],d[15]),this.matrix.transform(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9],f[10],f[11],f[12],f[13],f[14],f[15]),u=0;u<y;u+=1)r[u]=this.matrix.props[u];this.matrix.reset()}else for(this.matrix.reset(),u=0;u<y;u+=1)r[u]=this.matrix.props[u];g+=1,a-=1,i+=s}}else for(a=this._currentCopies,i=0,s=1;a;)r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,a-=1,i+=s},RepeaterModifier.prototype.addShape=function(){},ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeCollection.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(createSizedArray(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)shape_pool.release(this.shapes[t]);this._length=0},DashProperty.prototype.getValue=function(t){if((this.elem.globalData.frameId!==this.frameId||t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,r=this.dataProps.length;for("svg"===this.renderer&&(this.dashStr=""),e=0;e<r;e+=1)"o"!=this.dataProps[e].n?"svg"===this.renderer?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},extendPrototype([DynamicPropertyContainer],DashProperty),GradientProperty.prototype.comparePoints=function(t,e){for(var r=0,i=this.o.length/2;r<i;){if(.01<Math.abs(t[4*r]-t[4*e+2*r]))return!1;r+=1}return!0},GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!=this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},GradientProperty.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,r,i,s=4*this.data.p;for(e=0;e<s;e+=1)r=e%4==0?100:255,i=Math.round(this.prop.v[e]*r),this.c[e]!==i&&(this.c[e]=i,this._cmdf=!t);if(this.o.length)for(s=this.prop.v.length,e=4*this.data.p;e<s;e+=1)r=e%2==0?100:1,i=e%2==0?Math.round(100*this.prop.v[e]):this.prop.v[e],this.o[e-4*this.data.p]!==i&&(this.o[e-4*this.data.p]=i,this._omdf=!t);this._mdf=!t}},extendPrototype([DynamicPropertyContainer],GradientProperty);var buildShapeString=function(t,e,r,i){if(0===e)return"";var s,a=t.o,n=t.i,o=t.v,h=" M"+i.applyToPointStringified(o[0][0],o[0][1]);for(s=1;s<e;s+=1)h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[s][0],n[s][1])+" "+i.applyToPointStringified(o[s][0],o[s][1]);return r&&e&&(h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[0][0],n[0][1])+" "+i.applyToPointStringified(o[0][0],o[0][1]),h+="z"),h},ImagePreloader=function(){var s=function(){var t=createTag("canvas");t.width=1,t.height=1;var e=t.getContext("2d");return e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,1,1),t}();function t(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function e(t){var e=function(t,e,r){var i="";if(t.e)i=t.p;else if(e){var s=t.p;-1!==s.indexOf("images/")&&(s=s.split("/")[1]),i=e+s}else i=r,i+=t.u?t.u:"",i+=t.p;return i}(t,this.assetsPath,this.path),r=createTag("img");r.crossOrigin="anonymous",r.addEventListener("load",this._imageLoaded.bind(this),!1),r.addEventListener("error",function(){i.img=s,this._imageLoaded()}.bind(this),!1),r.src=e;var i={img:r,assetData:t};return i}function r(t,e){this.imagesLoadedCb=e;var r,i=t.length;for(r=0;r<i;r+=1)t[r].layers||(this.totalImages+=1,this.images.push(this._createImageData(t[r])))}function i(t){this.path=t||""}function a(t){this.assetsPath=t||""}function n(t){for(var e=0,r=this.images.length;e<r;){if(this.images[e].assetData===t)return this.images[e].img;e+=1}}function o(){this.imagesLoadedCb=null,this.images.length=0}function h(){return this.totalImages===this.loadedAssets}return function(){this.loadAssets=r,this.setAssetsPath=a,this.setPath=i,this.loaded=h,this.destroy=o,this.getImage=n,this._createImageData=e,this._imageLoaded=t,this.assetsPath="",this.path="",this.totalImages=0,this.loadedAssets=0,this.imagesLoadedCb=null,this.images=[]}}(),featureSupport=(sw={maskType:!0},(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(sw.maskType=!1),sw),sw,filtersFactory=(tw={},tw.createFilter=function(t){var e=createNS("filter");return e.setAttribute("id",t),e.setAttribute("filterUnits","objectBoundingBox"),e.setAttribute("x","0%"),e.setAttribute("y","0%"),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e},tw.createAlphaToLuminanceFilter=function(){var t=createNS("feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),t},tw),tw,assetLoader=function(){function a(t){return t.response&&"object"==typeof t.response?t.response:t.response&&"string"==typeof t.response?JSON.parse(t.response):t.responseText?JSON.parse(t.responseText):void 0}return{load:function(t,e,r){var i,s=new XMLHttpRequest;s.open("GET",t,!0);try{s.responseType="json"}catch(t){}s.send(),s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status)i=a(s),e(i);else try{i=a(s),e(i)}catch(t){r&&r(t)}}}}}();function TextAnimatorProperty(t,e,r){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=r,this._animatorsData=createSizedArray(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(r)}function TextAnimatorDataProperty(t,e,r){var i={propType:!1},s=PropertyFactory.getProp,a=e.a;this.a={r:a.r?s(t,a.r,0,degToRads,r):i,rx:a.rx?s(t,a.rx,0,degToRads,r):i,ry:a.ry?s(t,a.ry,0,degToRads,r):i,sk:a.sk?s(t,a.sk,0,degToRads,r):i,sa:a.sa?s(t,a.sa,0,degToRads,r):i,s:a.s?s(t,a.s,1,.01,r):i,a:a.a?s(t,a.a,1,0,r):i,o:a.o?s(t,a.o,0,.01,r):i,p:a.p?s(t,a.p,1,0,r):i,sw:a.sw?s(t,a.sw,0,0,r):i,sc:a.sc?s(t,a.sc,1,0,r):i,fc:a.fc?s(t,a.fc,1,0,r):i,fh:a.fh?s(t,a.fh,0,0,r):i,fs:a.fs?s(t,a.fs,0,.01,r):i,fb:a.fb?s(t,a.fb,0,.01,r):i,t:a.t?s(t,a.t,0,0,r):i},this.s=TextSelectorProp.getTextSelectorProp(t,e.s,r),this.s.t=e.s.t}function LetterProps(t,e,r,i,s,a){this.o=t,this.sw=e,this.sc=r,this.fc=i,this.m=s,this.p=a,this._mdf={o:!0,sw:!!e,sc:!!r,fc:!!i,m:!0,p:!0}}function TextProperty(t,e){this._frameId=initialDefaultFrame,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}TextAnimatorProperty.prototype.searchProperties=function(){var t,e,r=this._textData.a.length,i=PropertyFactory.getProp;for(t=0;t<r;t+=1)e=this._textData.a[t],this._animatorsData[t]=new TextAnimatorDataProperty(this._elem,e,this);this._textData.p&&"m"in this._textData.p?(this._pathData={f:i(this._elem,this._textData.p.f,0,0,this),l:i(this._elem,this._textData.p.l,0,0,this),r:this._textData.p.r,m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=i(this._elem,this._textData.m.a,1,0,this)},TextAnimatorProperty.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,this._mdf||this._isFirstFrame||e||this._hasMaskedPath&&this._pathData.m._mdf){this._isFirstFrame=!1;var r,i,s,a,n,o,h,l,p,m,f,c,d,u,y,g,v,b,E,x=this._moreOptions.alignment.v,S=this._animatorsData,P=this._textData,_=this.mHelper,A=this._renderType,C=this.renderedLetters.length,T=(this.data,t.l);if(this._hasMaskedPath){if(E=this._pathData.m,!this._pathData.n||this._pathData._mdf){var k,M=E.v;for(this._pathData.r&&(M=M.reverse()),n={tLength:0,segments:[]},a=M._length-1,s=g=0;s<a;s+=1)k=bez.buildBezierData(M.v[s],M.v[s+1],[M.o[s][0]-M.v[s][0],M.o[s][1]-M.v[s][1]],[M.i[s+1][0]-M.v[s+1][0],M.i[s+1][1]-M.v[s+1][1]]),n.tLength+=k.segmentLength,n.segments.push(k),g+=k.segmentLength;s=a,E.v.c&&(k=bez.buildBezierData(M.v[s],M.v[0],[M.o[s][0]-M.v[s][0],M.o[s][1]-M.v[s][1]],[M.i[0][0]-M.v[0][0],M.i[0][1]-M.v[0][1]]),n.tLength+=k.segmentLength,n.segments.push(k),g+=k.segmentLength),this._pathData.pi=n}if(n=this._pathData.pi,o=this._pathData.f.v,m=1,p=!(l=f=0),u=n.segments,o<0&&E.v.c)for(n.tLength<Math.abs(o)&&(o=-Math.abs(o)%n.tLength),m=(d=u[f=u.length-1].points).length-1;o<0;)o+=d[m].partialLength,(m-=1)<0&&(m=(d=u[f-=1].points).length-1);c=(d=u[f].points)[m-1],y=(h=d[m]).partialLength}a=T.length,i=r=0;var D,w,F,I,V=1.2*t.finalSize*.714,R=!0;F=S.length;var B,L,G,z,N,O,H,j,q,W,Y,X,$,K=-1,U=o,J=f,Z=m,Q=-1,tt="",et=this.defaultPropsArray;if(2===t.j||1===t.j){var rt=0,it=0,st=2===t.j?-.5:-1,at=0,nt=!0;for(s=0;s<a;s+=1)if(T[s].n){for(rt&&(rt+=it);at<s;)T[at].animatorJustifyOffset=rt,at+=1;nt=!(rt=0)}else{for(w=0;w<F;w+=1)(D=S[w].a).t.propType&&(nt&&2===t.j&&(it+=D.t.v*st),(B=S[w].s.getMult(T[s].anIndexes[w],P.a[w].s.totalChars)).length?rt+=D.t.v*B[0]*st:rt+=D.t.v*B*st);nt=!1}for(rt&&(rt+=it);at<s;)T[at].animatorJustifyOffset=rt,at+=1}for(s=0;s<a;s+=1){if(_.reset(),N=1,T[s].n)r=0,i+=t.yOffset,i+=R?1:0,o=U,R=!1,0,this._hasMaskedPath&&(m=Z,c=(d=u[f=J].points)[m-1],y=(h=d[m]).partialLength,l=0),$=W=X=tt="",et=this.defaultPropsArray;else{if(this._hasMaskedPath){if(Q!==T[s].line){switch(t.j){case 1:o+=g-t.lineWidths[T[s].line];break;case 2:o+=(g-t.lineWidths[T[s].line])/2}Q=T[s].line}K!==T[s].ind&&(T[K]&&(o+=T[K].extra),o+=T[s].an/2,K=T[s].ind),o+=x[0]*T[s].an/200;var ot=0;for(w=0;w<F;w+=1)(D=S[w].a).p.propType&&((B=S[w].s.getMult(T[s].anIndexes[w],P.a[w].s.totalChars)).length?ot+=D.p.v[0]*B[0]:ot+=D.p.v[0]*B),D.a.propType&&((B=S[w].s.getMult(T[s].anIndexes[w],P.a[w].s.totalChars)).length?ot+=D.a.v[0]*B[0]:ot+=D.a.v[0]*B);for(p=!0;p;)o+ot<=l+y||!d?(v=(o+ot-l)/h.partialLength,G=c.point[0]+(h.point[0]-c.point[0])*v,z=c.point[1]+(h.point[1]-c.point[1])*v,_.translate(-x[0]*T[s].an/200,-x[1]*V/100),p=!1):d&&(l+=h.partialLength,(m+=1)>=d.length&&(m=0,d=u[f+=1]?u[f].points:E.v.c?u[f=m=0].points:(l-=h.partialLength,null)),d&&(c=h,y=(h=d[m]).partialLength));L=T[s].an/2-T[s].add,_.translate(-L,0,0)}else L=T[s].an/2-T[s].add,_.translate(-L,0,0),_.translate(-x[0]*T[s].an/200,-x[1]*V/100,0);for(T[s].l/2,w=0;w<F;w+=1)(D=S[w].a).t.propType&&(B=S[w].s.getMult(T[s].anIndexes[w],P.a[w].s.totalChars),0===r&&0===t.j||(this._hasMaskedPath?B.length?o+=D.t.v*B[0]:o+=D.t.v*B:B.length?r+=D.t.v*B[0]:r+=D.t.v*B));for(T[s].l/2,t.strokeWidthAnim&&(H=t.sw||0),t.strokeColorAnim&&(O=t.sc?[t.sc[0],t.sc[1],t.sc[2]]:[0,0,0]),t.fillColorAnim&&t.fc&&(j=[t.fc[0],t.fc[1],t.fc[2]]),w=0;w<F;w+=1)(D=S[w].a).a.propType&&((B=S[w].s.getMult(T[s].anIndexes[w],P.a[w].s.totalChars)).length?_.translate(-D.a.v[0]*B[0],-D.a.v[1]*B[1],D.a.v[2]*B[2]):_.translate(-D.a.v[0]*B,-D.a.v[1]*B,D.a.v[2]*B));for(w=0;w<F;w+=1)(D=S[w].a).s.propType&&((B=S[w].s.getMult(T[s].anIndexes[w],P.a[w].s.totalChars)).length?_.scale(1+(D.s.v[0]-1)*B[0],1+(D.s.v[1]-1)*B[1],1):_.scale(1+(D.s.v[0]-1)*B,1+(D.s.v[1]-1)*B,1));for(w=0;w<F;w+=1){if(D=S[w].a,B=S[w].s.getMult(T[s].anIndexes[w],P.a[w].s.totalChars),D.sk.propType&&(B.length?_.skewFromAxis(-D.sk.v*B[0],D.sa.v*B[1]):_.skewFromAxis(-D.sk.v*B,D.sa.v*B)),D.r.propType&&(B.length?_.rotateZ(-D.r.v*B[2]):_.rotateZ(-D.r.v*B)),D.ry.propType&&(B.length?_.rotateY(D.ry.v*B[1]):_.rotateY(D.ry.v*B)),D.rx.propType&&(B.length?_.rotateX(D.rx.v*B[0]):_.rotateX(D.rx.v*B)),D.o.propType&&(B.length?N+=(D.o.v*B[0]-N)*B[0]:N+=(D.o.v*B-N)*B),t.strokeWidthAnim&&D.sw.propType&&(B.length?H+=D.sw.v*B[0]:H+=D.sw.v*B),t.strokeColorAnim&&D.sc.propType)for(q=0;q<3;q+=1)B.length?O[q]=O[q]+(D.sc.v[q]-O[q])*B[0]:O[q]=O[q]+(D.sc.v[q]-O[q])*B;if(t.fillColorAnim&&t.fc){if(D.fc.propType)for(q=0;q<3;q+=1)B.length?j[q]=j[q]+(D.fc.v[q]-j[q])*B[0]:j[q]=j[q]+(D.fc.v[q]-j[q])*B;D.fh.propType&&(j=B.length?addHueToRGB(j,D.fh.v*B[0]):addHueToRGB(j,D.fh.v*B)),D.fs.propType&&(j=B.length?addSaturationToRGB(j,D.fs.v*B[0]):addSaturationToRGB(j,D.fs.v*B)),D.fb.propType&&(j=B.length?addBrightnessToRGB(j,D.fb.v*B[0]):addBrightnessToRGB(j,D.fb.v*B))}}for(w=0;w<F;w+=1)(D=S[w].a).p.propType&&(B=S[w].s.getMult(T[s].anIndexes[w],P.a[w].s.totalChars),this._hasMaskedPath?B.length?_.translate(0,D.p.v[1]*B[0],-D.p.v[2]*B[1]):_.translate(0,D.p.v[1]*B,-D.p.v[2]*B):B.length?_.translate(D.p.v[0]*B[0],D.p.v[1]*B[1],-D.p.v[2]*B[2]):_.translate(D.p.v[0]*B,D.p.v[1]*B,-D.p.v[2]*B));if(t.strokeWidthAnim&&(W=H<0?0:H),t.strokeColorAnim&&(Y="rgb("+Math.round(255*O[0])+","+Math.round(255*O[1])+","+Math.round(255*O[2])+")"),t.fillColorAnim&&t.fc&&(X="rgb("+Math.round(255*j[0])+","+Math.round(255*j[1])+","+Math.round(255*j[2])+")"),this._hasMaskedPath){if(_.translate(0,-t.ls),_.translate(0,x[1]*V/100+i,0),P.p.p){b=(h.point[1]-c.point[1])/(h.point[0]-c.point[0]);var ht=180*Math.atan(b)/Math.PI;h.point[0]<c.point[0]&&(ht+=180),_.rotate(-ht*Math.PI/180)}_.translate(G,z,0),o-=x[0]*T[s].an/200,T[s+1]&&K!==T[s+1].ind&&(o+=T[s].an/2,o+=t.tr/1e3*t.finalSize)}else{switch(_.translate(r,i,0),t.ps&&_.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:_.translate(T[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[T[s].line]),0,0);break;case 2:_.translate(T[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[T[s].line])/2,0,0)}_.translate(0,-t.ls),_.translate(L,0,0),_.translate(x[0]*T[s].an/200,x[1]*V/100,0),r+=T[s].l+t.tr/1e3*t.finalSize}"html"===A?tt=_.toCSS():"svg"===A?tt=_.to2dCSS():et=[_.props[0],_.props[1],_.props[2],_.props[3],_.props[4],_.props[5],_.props[6],_.props[7],_.props[8],_.props[9],_.props[10],_.props[11],_.props[12],_.props[13],_.props[14],_.props[15]],$=N}this.lettersChangedFlag=C<=s?(I=new LetterProps($,W,Y,X,tt,et),this.renderedLetters.push(I),C+=1,!0):(I=this.renderedLetters[s]).update($,W,Y,X,tt,et)||this.lettersChangedFlag}}},TextAnimatorProperty.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],extendPrototype([DynamicPropertyContainer],TextAnimatorProperty),LetterProps.prototype.update=function(t,e,r,i,s,a){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1;var n=this._mdf.p=!1;return this.o!==t&&(this.o=t,n=this._mdf.o=!0),this.sw!==e&&(this.sw=e,n=this._mdf.sw=!0),this.sc!==r&&(this.sc=r,n=this._mdf.sc=!0),this.fc!==i&&(this.fc=i,n=this._mdf.fc=!0),this.m!==s&&(this.m=s,n=this._mdf.m=!0),!a.length||this.p[0]===a[0]&&this.p[1]===a[1]&&this.p[4]===a[4]&&this.p[5]===a[5]&&this.p[12]===a[12]&&this.p[13]===a[13]||(this.p=a,n=this._mdf.p=!0),n},TextProperty.prototype.defaultBoxWidth=[0,0],TextProperty.prototype.copyData=function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},TextProperty.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},TextProperty.prototype.searchProperty=function(){return this.searchKeyframes()},TextProperty.prototype.searchKeyframes=function(){return this.kf=1<this.data.d.k.length,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},TextProperty.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},TextProperty.prototype.getValue=function(t){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length||t){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,r=this.keysIndex;if(this.lock)this.setCurrentData(this.currentData);else{this.lock=!0,this._mdf=!1;var i,s=this.effectsSequence.length,a=t||this.data.d.k[this.keysIndex].s;for(i=0;i<s;i+=1)a=r!==this.keysIndex?this.effectsSequence[i](a,a.t):this.effectsSequence[i](this.currentData,a.t);e!==a&&this.setCurrentData(a),this.pv=this.v=this.currentData,this.lock=!1,this.frameId=this.elem.globalData.frameId}}},TextProperty.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,r=0,i=t.length;r<=i-1&&(t[r].s,!(r===i-1||t[r+1].t>e));)r+=1;return this.keysIndex!==r&&(this.keysIndex=r),this.data.d.k[this.keysIndex].s},TextProperty.prototype.buildFinalText=function(t){for(var e,r=FontManager.getCombinedCharacterCodes(),i=[],s=0,a=t.length;s<a;)e=t.charCodeAt(s),-1!==r.indexOf(e)?i[i.length-1]+=t.charAt(s):55296<=e&&e<=56319&&56320<=(e=t.charCodeAt(s+1))&&e<=57343?(i.push(t.substr(s,2)),++s):i.push(t.charAt(s)),s+=1;return i},TextProperty.prototype.completeTextData=function(t){t.__complete=!0;var e,r,i,s,a,n,o,h=this.elem.globalData.fontManager,l=this.data,p=[],m=0,f=l.m.g,c=0,d=0,u=0,y=[],g=0,v=0,b=h.getFontByName(t.f),E=0,x=b.fStyle?b.fStyle.split(" "):[],S="normal",P="normal";for(r=x.length,e=0;e<r;e+=1)switch(x[e].toLowerCase()){case"italic":P="italic";break;case"bold":S="700";break;case"black":S="900";break;case"medium":S="500";break;case"regular":case"normal":S="400";break;case"light":case"thin":S="200"}t.fWeight=b.fWeight||S,t.fStyle=P,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),r=t.finalText.length,t.finalLineHeight=t.lh;var _,A=t.tr/1e3*t.finalSize;if(t.sz)for(var C,T,k=!0,M=t.sz[0],D=t.sz[1];k;){g=C=0,r=(T=this.buildFinalText(t.t)).length,A=t.tr/1e3*t.finalSize;var w=-1;for(e=0;e<r;e+=1)_=T[e].charCodeAt(0),i=!1," "===T[e]?w=e:13!==_&&3!==_||(i=!(g=0),C+=t.finalLineHeight||1.2*t.finalSize),M<g+(E=h.chars?(o=h.getCharData(T[e],b.fStyle,b.fFamily),i?0:o.w*t.finalSize/100):h.measureText(T[e],t.f,t.finalSize))&&" "!==T[e]?(-1===w?r+=1:e=w,C+=t.finalLineHeight||1.2*t.finalSize,T.splice(e,w===e?1:0,"\r"),w=-1,g=0):(g+=E,g+=A);C+=b.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&D<C?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=T,r=t.finalText.length,k=!1)}g=-A;var F,I=E=0;for(e=0;e<r;e+=1)if(i=!1,13===(_=(F=t.finalText[e]).charCodeAt(0))||3===_?(I=0,y.push(g),v=v<g?g:v,g=-2*A,i=!(s=""),u+=1):s=F,E=h.chars?(o=h.getCharData(F,b.fStyle,h.getFontByName(t.f).fFamily),i?0:o.w*t.finalSize/100):h.measureText(s,t.f,t.finalSize)," "===F?I+=E+A:(g+=E+A+I,I=0),p.push({l:E,an:E,add:c,n:i,anIndexes:[],val:s,line:u,animatorJustifyOffset:0}),2==f){if(c+=E,""===s||" "===s||e===r-1){for(""!==s&&" "!==s||(c-=E);d<=e;)p[d].an=c,p[d].ind=m,p[d].extra=E,d+=1;m+=1,c=0}}else if(3==f){if(c+=E,""===s||e===r-1){for(""===s&&(c-=E);d<=e;)p[d].an=c,p[d].ind=m,p[d].extra=E,d+=1;c=0,m+=1}}else p[m].ind=m,p[m].extra=0,m+=1;if(t.l=p,v=v<g?g:v,y.push(g),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=v,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=y;var V,R,B=l.a;n=B.length;var L,G,z=[];for(a=0;a<n;a+=1){for((V=B[a]).a.sc&&(t.strokeColorAnim=!0),V.a.sw&&(t.strokeWidthAnim=!0),(V.a.fc||V.a.fh||V.a.fs||V.a.fb)&&(t.fillColorAnim=!0),G=0,L=V.s.b,e=0;e<r;e+=1)(R=p[e]).anIndexes[a]=G,(1==L&&""!==R.val||2==L&&""!==R.val&&" "!==R.val||3==L&&(R.n||" "==R.val||e==r-1)||4==L&&(R.n||e==r-1))&&(1===V.s.rn&&z.push(G),G+=1);l.a[a].s.totalChars=G;var N,O=-1;if(1===V.s.rn)for(e=0;e<r;e+=1)O!=(R=p[e]).anIndexes[a]&&(O=R.anIndexes[a],N=z.splice(Math.floor(Math.random()*z.length),1)[0]),R.anIndexes[a]=N}t.yOffset=t.finalLineHeight||1.2*t.finalSize,t.ls=t.ls||0,t.ascent=b.ascent*t.finalSize/100},TextProperty.prototype.updateDocumentData=function(t,e){e=void 0===e?this.keysIndex:e;var r=this.copyData({},this.data.d.k[e].s);r=this.copyData(r,t),this.data.d.k[e].s=r,this.recalculate(e),this.elem.addDynamicProperty(this)},TextProperty.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},TextProperty.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},TextProperty.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var TextSelectorProp=function(){var c=Math.max,d=Math.min,u=Math.floor;function i(t,e){this._currentTextLength=-1,this.k=!1,this.data=e,this.elem=t,this.comp=t.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(t),this.s=PropertyFactory.getProp(t,e.s||{k:0},0,0,this),this.e="e"in e?PropertyFactory.getProp(t,e.e,0,0,this):{v:100},this.o=PropertyFactory.getProp(t,e.o||{k:0},0,0,this),this.xe=PropertyFactory.getProp(t,e.xe||{k:0},0,0,this),this.ne=PropertyFactory.getProp(t,e.ne||{k:0},0,0,this),this.a=PropertyFactory.getProp(t,e.a,0,.01,this),this.dynamicProperties.length||this.getValue()}return i.prototype={getMult:function(t){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var e=0,r=0,i=1,s=1;0<this.ne.v?e=this.ne.v/100:r=-this.ne.v/100,0<this.xe.v?i=1-this.xe.v/100:s=1+this.xe.v/100;var a=BezierFactory.getBezierEasing(e,r,i,s).get,n=0,o=this.finalS,h=this.finalE,l=this.data.sh;if(2===l)n=a(n=h===o?h<=t?1:0:c(0,d(.5/(h-o)+(t-o)/(h-o),1)));else if(3===l)n=a(n=h===o?h<=t?0:1:1-c(0,d(.5/(h-o)+(t-o)/(h-o),1)));else if(4===l)h===o?n=0:(n=c(0,d(.5/(h-o)+(t-o)/(h-o),1)))<.5?n*=2:n=1-2*(n-.5),n=a(n);else if(5===l){if(h===o)n=0;else{var p=h-o,m=-p/2+(t=d(c(0,t+.5-o),h-o)),f=p/2;n=Math.sqrt(1-m*m/(f*f))}n=a(n)}else n=6===l?a(n=h===o?0:(t=d(c(0,t+.5-o),h-o),(1+Math.cos(Math.PI+2*Math.PI*t/(h-o)))/2)):(t>=u(o)&&(n=c(0,d(t-o<0?d(h,1)-(o-t):h-t,1))),a(n));return n*this.a.v},getValue:function(t){this.iterateDynamicProperties(),this._mdf=t||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,t&&2===this.data.r&&(this.e.v=this._currentTextLength);var e=2===this.data.r?1:100/this.data.totalChars,r=this.o.v/e,i=this.s.v/e+r,s=this.e.v/e+r;if(s<i){var a=i;i=s,s=a}this.finalS=i,this.finalE=s}},extendPrototype([DynamicPropertyContainer],i),{getTextSelectorProp:function(t,e,r){return new i(t,e,r)}}}(),pool_factory=function(t,e,r,i){var s=0,a=t,n=createSizedArray(a);function o(){return s?n[s-=1]:e()}return{newElement:o,release:function(t){s===a&&(n=pooling.double(n),a*=2),r&&r(t),n[s]=t,s+=1}}},pooling={double:function(t){return t.concat(createSizedArray(t.length))}},point_pool=pool_factory(8,function(){return createTypedArray("float32",2)}),shape_pool=(KA=pool_factory(4,function(){return new ShapePath},function(t){var e,r=t._length;for(e=0;e<r;e+=1)point_pool.release(t.v[e]),point_pool.release(t.i[e]),point_pool.release(t.o[e]),t.v[e]=null,t.i[e]=null,t.o[e]=null;t._length=0,t.c=!1}),KA.clone=function(t){var e,r=KA.newElement(),i=void 0===t._length?t.v.length:t._length;for(r.setLength(i),r.c=t.c,e=0;e<i;e+=1)r.setTripleAt(t.v[e][0],t.v[e][1],t.o[e][0],t.o[e][1],t.i[e][0],t.i[e][1],e);return r},KA),KA,shapeCollection_pool=(TA={newShapeCollection:function(){var t;t=UA?WA[UA-=1]:new ShapeCollection;return t},release:function(t){var e,r=t._length;for(e=0;e<r;e+=1)shape_pool.release(t.shapes[e]);t._length=0,UA===VA&&(WA=pooling.double(WA),VA*=2);WA[UA]=t,UA+=1}},UA=0,VA=4,WA=createSizedArray(VA),TA),TA,UA,VA,WA,segments_length_pool=pool_factory(8,function(){return{lengths:[],totalLength:0}},function(t){var e,r=t.lengths.length;for(e=0;e<r;e+=1)bezier_length_pool.release(t.lengths[e]);t.lengths.length=0}),bezier_length_pool=pool_factory(8,function(){return{addedLength:0,percents:createTypedArray("float32",defaultCurveSegments),lengths:createTypedArray("float32",defaultCurveSegments)}});function BaseRenderer(){}function SVGRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=createNS("svg");var r="";if(e&&e.title){var i=createNS("title"),s=createElementID();i.setAttribute("id",s),i.textContent=e.title,this.svgElement.appendChild(i),r+=s}if(e&&e.description){var a=createNS("desc"),n=createElementID();a.setAttribute("id",n),a.textContent=e.description,this.svgElement.appendChild(a),r+=" "+n}r&&this.svgElement.setAttribute("aria-labelledby",r);var o=createNS("defs");this.svgElement.appendChild(o);var h=createNS("g");this.svgElement.appendChild(h),this.layerElement=h,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!e||!1!==e.hideOnTransparent,viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"}},this.globalData={_mdf:!1,frameNum:-1,defs:o,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}function CanvasRenderer(t,e){this.animationItem=t,this.renderConfig={clearCanvas:!e||void 0===e.clearCanvas||e.clearCanvas,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",className:e&&e.className||"",id:e&&e.id||""},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig,currentGlobalAlpha:-1},this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1,this.rendererType="canvas"}function HybridRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:e&&e.className||"",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!e||!1!==e.hideOnTransparent,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"400%",height:e&&e.filterSize&&e.filterSize.height||"400%",x:e&&e.filterSize&&e.filterSize.x||"-100%",y:e&&e.filterSize&&e.filterSize.y||"-100%"}},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}function MaskElement(t,e,r){this.data=t,this.element=e,this.globalData=r,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i,s=this.globalData.defs,a=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(a),this.solidPath="";var n,o,h,l,p,m,f,c=this.masksProperties,d=0,u=[],y=createElementID(),g="clipPath",v="clip-path";for(i=0;i<a;i++)if(("a"!==c[i].mode&&"n"!==c[i].mode||c[i].inv||100!==c[i].o.k||c[i].o.x)&&(v=g="mask"),"s"!=c[i].mode&&"i"!=c[i].mode||0!==d?l=null:((l=createNS("rect")).setAttribute("fill","#ffffff"),l.setAttribute("width",this.element.comp.data.w||0),l.setAttribute("height",this.element.comp.data.h||0),u.push(l)),n=createNS("path"),"n"!=c[i].mode){var b;if(d+=1,n.setAttribute("fill","s"===c[i].mode?"#000000":"#ffffff"),n.setAttribute("clip-rule","nonzero"),0!==c[i].x.k?(v=g="mask",f=PropertyFactory.getProp(this.element,c[i].x,0,null,this.element),b=createElementID(),(p=createNS("filter")).setAttribute("id",b),(m=createNS("feMorphology")).setAttribute("operator","erode"),m.setAttribute("in","SourceGraphic"),m.setAttribute("radius","0"),p.appendChild(m),s.appendChild(p),n.setAttribute("stroke","s"===c[i].mode?"#000000":"#ffffff")):f=m=null,this.storedData[i]={elem:n,x:f,expan:m,lastPath:"",lastOperator:"",filterId:b,lastRadius:0},"i"==c[i].mode){h=u.length;var E=createNS("g");for(o=0;o<h;o+=1)E.appendChild(u[o]);var x=createNS("mask");x.setAttribute("mask-type","alpha"),x.setAttribute("id",y+"_"+d),x.appendChild(n),s.appendChild(x),E.setAttribute("mask","url("+locationHref+"#"+y+"_"+d+")"),u.length=0,u.push(E)}else u.push(n);c[i].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[i]={elem:n,lastPath:"",op:PropertyFactory.getProp(this.element,c[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,c[i],3),invRect:l},this.viewData[i].prop.k||this.drawPath(c[i],this.viewData[i].prop.v,this.viewData[i])}else this.viewData[i]={op:PropertyFactory.getProp(this.element,c[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,c[i],3),elem:n,lastPath:""},s.appendChild(n);for(this.maskElement=createNS(g),a=u.length,i=0;i<a;i+=1)this.maskElement.appendChild(u[i]);0<d&&(this.maskElement.setAttribute("id",y),this.element.maskedElement.setAttribute(v,"url("+locationHref+"#"+y+")"),s.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}function HierarchyElement(){}function FrameElement(){}function TransformElement(){}function RenderableElement(){}function RenderableDOMElement(){}function ProcessedElement(t,e){this.elem=t,this.pos=e}function SVGStyleData(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=!0===t.hd,this.pElem=createNS("path"),this.msElem=null}function SVGShapeData(t,e,r){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=r,this.lvl=e,this._isAnimated=!!r.k;for(var i=0,s=t.length;i<s;){if(t[i].mProps.dynamicProperties.length){this._isAnimated=!0;break}i+=1}}function SVGTransformData(t,e,r){this.transform={mProps:t,op:e,container:r},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}function SVGStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r,this._isAnimated=!!this._isAnimated}function SVGFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r}function SVGGradientFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,r)}function SVGGradientStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.initGradientData(t,e,r),this._isAnimated=!!this._isAnimated}function ShapeGroupData(){this.it=[],this.prevViewData=[],this.gr=createNS("g")}BaseRenderer.prototype.checkLayers=function(t){var e,r,i=this.layers.length;for(this.completeLayers=!0,e=i-1;0<=e;e--)this.elements[e]||(r=this.layers[e]).ip-r.st<=t-this.layers[e].st&&r.op-r.st>t-this.layers[e].st&&this.buildItem(e),this.completeLayers=!!this.elements[e]&&this.completeLayers;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 13:return this.createCamera(t)}return this.createNull(t)},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(t){this.completeLayers=!1;var e,r,i=t.length,s=this.layers.length;for(e=0;e<i;e+=1)for(r=0;r<s;){if(this.layers[r].id==t[e].id){this.layers[r]=t[e];break}r+=1}},BaseRenderer.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(t,e,r){for(var i=this.elements,s=this.layers,a=0,n=s.length;a<n;)s[a].ind==e&&(i[a]&&!0!==i[a]?(r.push(i[a]),i[a].setAsParent(),void 0!==s[a].parent?this.buildElementParenting(t,s[a].parent,r):t.setHierarchy(r)):(this.buildItem(a),this.addPendingElement(t))),a+=1},BaseRenderer.prototype.addPendingElement=function(t){this.pendingElements.push(t)},BaseRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length;for(e=0;e<r;e+=1)if(t[e].xt){var i=this.createComp(t[e]);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},BaseRenderer.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}},extendPrototype([BaseRenderer],SVGRenderer),SVGRenderer.prototype.createNull=function(t){return new NullElement(t,this.globalData,this)},SVGRenderer.prototype.createShape=function(t){return new SVGShapeElement(t,this.globalData,this)},SVGRenderer.prototype.createText=function(t){return new SVGTextElement(t,this.globalData,this)},SVGRenderer.prototype.createImage=function(t){return new IImageElement(t,this.globalData,this)},SVGRenderer.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)},SVGRenderer.prototype.createSolid=function(t){return new ISolidElement(t,this.globalData,this)},SVGRenderer.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)"),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),void 0!==this.renderConfig.focusable&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var r=createNS("clipPath"),i=createNS("rect");i.setAttribute("width",t.w),i.setAttribute("height",t.h),i.setAttribute("x",0),i.setAttribute("y",0);var s=createElementID();r.setAttribute("id",s),r.appendChild(i),this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+s+")"),e.appendChild(r),this.layers=t.layers,this.elements=createSizedArray(t.layers.length)},SVGRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t++)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRenderer.prototype.updateContainerSize=function(){},SVGRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){e[t]=!0;var r=this.createItem(this.layers[t]);e[t]=r,expressionsPlugin&&(0===this.layers[t].ty&&this.globalData.projectInterface.registerComposition(r),r.initExpressions()),this.appendElementInPos(r,t),this.layers[t].tt&&(this.elements[t-1]&&!0!==this.elements[t-1]?r.setMatte(e[t-1].layerId):(this.buildItem(t-1),this.addPendingElement(r)))}},SVGRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,r=this.elements.length;e<r;){if(this.elements[e]===t){t.setMatte(this.elements[e-1].layerId);break}e+=1}}},SVGRenderer.prototype.renderFrame=function(t){if(this.renderedFrame!==t&&!this.destroyed){null===t?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,r=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=r-1;0<=e;e--)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<r;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},SVGRenderer.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){for(var i,s=0;s<e;)this.elements[s]&&!0!==this.elements[s]&&this.elements[s].getBaseElement()&&(i=this.elements[s].getBaseElement()),s+=1;i?this.layerElement.insertBefore(r,i):this.layerElement.appendChild(r)}},SVGRenderer.prototype.hide=function(){this.layerElement.style.display="none"},SVGRenderer.prototype.show=function(){this.layerElement.style.display="block"},extendPrototype([BaseRenderer],CanvasRenderer),CanvasRenderer.prototype.createShape=function(t){return new CVShapeElement(t,this.globalData,this)},CanvasRenderer.prototype.createText=function(t){return new CVTextElement(t,this.globalData,this)},CanvasRenderer.prototype.createImage=function(t){return new CVImageElement(t,this.globalData,this)},CanvasRenderer.prototype.createComp=function(t){return new CVCompElement(t,this.globalData,this)},CanvasRenderer.prototype.createSolid=function(t){return new CVSolidElement(t,this.globalData,this)},CanvasRenderer.prototype.createNull=SVGRenderer.prototype.createNull,CanvasRenderer.prototype.ctxTransform=function(t){if(1!==t[0]||0!==t[1]||0!==t[4]||1!==t[5]||0!==t[12]||0!==t[13])if(this.renderConfig.clearCanvas){this.transformMat.cloneFromProps(t);var e=this.contextData.cTr.props;this.transformMat.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),this.contextData.cTr.cloneFromProps(this.transformMat.props);var r=this.contextData.cTr.props;this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13])}else this.canvasContext.transform(t[0],t[1],t[4],t[5],t[12],t[13])},CanvasRenderer.prototype.ctxOpacity=function(t){if(!this.renderConfig.clearCanvas)return this.canvasContext.globalAlpha*=t<0?0:t,void(this.globalData.currentGlobalAlpha=this.contextData.cO);this.contextData.cO*=t<0?0:t,this.globalData.currentGlobalAlpha!==this.contextData.cO&&(this.canvasContext.globalAlpha=this.contextData.cO,this.globalData.currentGlobalAlpha=this.contextData.cO)},CanvasRenderer.prototype.reset=function(){this.renderConfig.clearCanvas?this.contextData.reset():this.canvasContext.restore()},CanvasRenderer.prototype.save=function(t){if(this.renderConfig.clearCanvas){t&&this.canvasContext.save();var e=this.contextData.cTr.props;this.contextData._length<=this.contextData.cArrPos&&this.contextData.duplicate();var r,i=this.contextData.saved[this.contextData.cArrPos];for(r=0;r<16;r+=1)i[r]=e[r];this.contextData.savedOp[this.contextData.cArrPos]=this.contextData.cO,this.contextData.cArrPos+=1}else this.canvasContext.save()},CanvasRenderer.prototype.restore=function(t){if(this.renderConfig.clearCanvas){t&&(this.canvasContext.restore(),this.globalData.blendMode="source-over"),this.contextData.cArrPos-=1;var e,r=this.contextData.saved[this.contextData.cArrPos],i=this.contextData.cTr.props;for(e=0;e<16;e+=1)i[e]=r[e];this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13]),r=this.contextData.savedOp[this.contextData.cArrPos],this.contextData.cO=r,this.globalData.currentGlobalAlpha!==r&&(this.canvasContext.globalAlpha=r,this.globalData.currentGlobalAlpha=r)}else this.canvasContext.restore()},CanvasRenderer.prototype.configAnimation=function(t){this.animationItem.wrapper?(this.animationItem.container=createTag("canvas"),this.animationItem.container.style.width="100%",this.animationItem.container.style.height="100%",this.animationItem.container.style.transformOrigin=this.animationItem.container.style.mozTransformOrigin=this.animationItem.container.style.webkitTransformOrigin=this.animationItem.container.style["-webkit-transform"]="0px 0px 0px",this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.animationItem.container.setAttribute("id",this.renderConfig.id)):this.canvasContext=this.renderConfig.context,this.data=t,this.layers=t.layers,this.transformCanvas={w:t.w,h:t.h,sx:0,sy:0,tx:0,ty:0},this.setupGlobalData(t,document.body),this.globalData.canvasContext=this.canvasContext,(this.globalData.renderer=this).globalData.isDashed=!1,this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.transformCanvas=this.transformCanvas,this.elements=createSizedArray(t.layers.length),this.updateContainerSize()},CanvasRenderer.prototype.updateContainerSize=function(){var t,e,r,i;if(this.reset(),this.animationItem.wrapper&&this.animationItem.container?(t=this.animationItem.wrapper.offsetWidth,e=this.animationItem.wrapper.offsetHeight,this.animationItem.container.setAttribute("width",t*this.renderConfig.dpr),this.animationItem.container.setAttribute("height",e*this.renderConfig.dpr)):(t=this.canvasContext.canvas.width*this.renderConfig.dpr,e=this.canvasContext.canvas.height*this.renderConfig.dpr),-1!==this.renderConfig.preserveAspectRatio.indexOf("meet")||-1!==this.renderConfig.preserveAspectRatio.indexOf("slice")){var s=this.renderConfig.preserveAspectRatio.split(" "),a=s[1]||"meet",n=s[0]||"xMidYMid",o=n.substr(0,4),h=n.substr(4);r=t/e,i=this.transformCanvas.w/this.transformCanvas.h,this.transformCanvas.sy=r<i&&"meet"===a||i<r&&"slice"===a?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),t/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=e/(this.transformCanvas.h/this.renderConfig.dpr),e/(this.transformCanvas.h/this.renderConfig.dpr)),this.transformCanvas.tx="xMid"===o&&(i<r&&"meet"===a||r<i&&"slice"===a)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))/2*this.renderConfig.dpr:"xMax"===o&&(i<r&&"meet"===a||r<i&&"slice"===a)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))*this.renderConfig.dpr:0,this.transformCanvas.ty="YMid"===h&&(r<i&&"meet"===a||i<r&&"slice"===a)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))/2*this.renderConfig.dpr:"YMax"===h&&(r<i&&"meet"===a||i<r&&"slice"===a)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))*this.renderConfig.dpr:0}else"none"==this.renderConfig.preserveAspectRatio?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr)):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0;this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1],this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip(),this.renderFrame(this.renderedFrame,!0)},CanvasRenderer.prototype.destroy=function(){var t;for(this.renderConfig.clearCanvas&&(this.animationItem.wrapper.innerHTML=""),t=(this.layers?this.layers.length:0)-1;0<=t;t-=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRenderer.prototype.renderFrame=function(t,e){if((this.renderedFrame!==t||!0!==this.renderConfig.clearCanvas||e)&&!this.destroyed&&-1!==t){this.renderedFrame=t,this.globalData.frameNum=t-this.animationItem._isFirstFrame,this.globalData.frameId+=1,this.globalData._mdf=!this.renderConfig.clearCanvas||e,this.globalData.projectInterface.currentFrame=t;var r,i=this.layers.length;for(this.completeLayers||this.checkLayers(t),r=0;r<i;r++)(this.completeLayers||this.elements[r])&&this.elements[r].prepareFrame(t-this.layers[r].st);if(this.globalData._mdf){for(!0===this.renderConfig.clearCanvas?this.canvasContext.clearRect(0,0,this.transformCanvas.w,this.transformCanvas.h):this.save(),r=i-1;0<=r;r-=1)(this.completeLayers||this.elements[r])&&this.elements[r].renderFrame();!0!==this.renderConfig.clearCanvas&&this.restore()}}},CanvasRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){var r=this.createItem(this.layers[t],this,this.globalData);(e[t]=r).initExpressions()}},CanvasRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){this.pendingElements.pop().checkParenting()}},CanvasRenderer.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRenderer.prototype.show=function(){this.animationItem.container.style.display="block"},extendPrototype([BaseRenderer],HybridRenderer),HybridRenderer.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){this.pendingElements.pop().checkParenting()}},HybridRenderer.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){var i=this.layers[e];if(i.ddd&&this.supports3d)this.addTo3dContainer(r,e);else if(this.threeDElements)this.addTo3dContainer(r,e);else{for(var s,a,n=0;n<e;)this.elements[n]&&!0!==this.elements[n]&&this.elements[n].getBaseElement&&(a=this.elements[n],s=(this.layers[n].ddd?this.getThreeDContainerByPos(n):a.getBaseElement())||s),n+=1;s?i.ddd&&this.supports3d||this.layerElement.insertBefore(r,s):i.ddd&&this.supports3d||this.layerElement.appendChild(r)}}},HybridRenderer.prototype.createShape=function(t){return this.supports3d?new HShapeElement(t,this.globalData,this):new SVGShapeElement(t,this.globalData,this)},HybridRenderer.prototype.createText=function(t){return this.supports3d?new HTextElement(t,this.globalData,this):new SVGTextElement(t,this.globalData,this)},HybridRenderer.prototype.createCamera=function(t){return this.camera=new HCameraElement(t,this.globalData,this),this.camera},HybridRenderer.prototype.createImage=function(t){return this.supports3d?new HImageElement(t,this.globalData,this):new IImageElement(t,this.globalData,this)},HybridRenderer.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.globalData,this):new SVGCompElement(t,this.globalData,this)},HybridRenderer.prototype.createSolid=function(t){return this.supports3d?new HSolidElement(t,this.globalData,this):new ISolidElement(t,this.globalData,this)},HybridRenderer.prototype.createNull=SVGRenderer.prototype.createNull,HybridRenderer.prototype.getThreeDContainerByPos=function(t){for(var e=0,r=this.threeDElements.length;e<r;){if(this.threeDElements[e].startPos<=t&&this.threeDElements[e].endPos>=t)return this.threeDElements[e].perspectiveElem;e+=1}},HybridRenderer.prototype.createThreeDContainer=function(t,e){var r=createTag("div");styleDiv(r);var i=createTag("div");styleDiv(i),"3d"===e&&(r.style.width=this.globalData.compSize.w+"px",r.style.height=this.globalData.compSize.h+"px",r.style.transformOrigin=r.style.mozTransformOrigin=r.style.webkitTransformOrigin="50% 50%",i.style.transform=i.style.webkitTransform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"),r.appendChild(i);var s={container:i,perspectiveElem:r,startPos:t,endPos:t,type:e};return this.threeDElements.push(s),s},HybridRenderer.prototype.build3dContainers=function(){var t,e,r=this.layers.length,i="";for(t=0;t<r;t+=1)this.layers[t].ddd&&3!==this.layers[t].ty?"3d"!==i&&(i="3d",e=this.createThreeDContainer(t,"3d")):"2d"!==i&&(i="2d",e=this.createThreeDContainer(t,"2d")),e.endPos=Math.max(e.endPos,t);for(t=(r=this.threeDElements.length)-1;0<=t;t--)this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)},HybridRenderer.prototype.addTo3dContainer=function(t,e){for(var r=0,i=this.threeDElements.length;r<i;){if(e<=this.threeDElements[r].endPos){for(var s,a=this.threeDElements[r].startPos;a<e;)this.elements[a]&&this.elements[a].getBaseElement&&(s=this.elements[a].getBaseElement()),a+=1;s?this.threeDElements[r].container.insertBefore(t,s):this.threeDElements[r].container.appendChild(t);break}r+=1}},HybridRenderer.prototype.configAnimation=function(t){var e=createTag("div"),r=this.animationItem.wrapper;e.style.width=t.w+"px",e.style.height=t.h+"px",styleDiv(this.resizerElem=e),e.style.transformStyle=e.style.webkitTransformStyle=e.style.mozTransformStyle="flat",this.renderConfig.className&&e.setAttribute("class",this.renderConfig.className),r.appendChild(e),e.style.overflow="hidden";var i=createNS("svg");i.setAttribute("width","1"),i.setAttribute("height","1"),styleDiv(i),this.resizerElem.appendChild(i);var s=createNS("defs");i.appendChild(s),this.data=t,this.setupGlobalData(t,i),this.globalData.defs=s,this.layers=t.layers,this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.animationItem.container=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t++)this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRenderer.prototype.updateContainerSize=function(){var t,e,r,i,s=this.animationItem.wrapper.offsetWidth,a=this.animationItem.wrapper.offsetHeight;i=s/a<this.globalData.compSize.w/this.globalData.compSize.h?(t=s/this.globalData.compSize.w,e=s/this.globalData.compSize.w,r=0,(a-this.globalData.compSize.h*(s/this.globalData.compSize.w))/2):(t=a/this.globalData.compSize.h,e=a/this.globalData.compSize.h,r=(s-this.globalData.compSize.w*(a/this.globalData.compSize.h))/2,0),this.resizerElem.style.transform=this.resizerElem.style.webkitTransform="matrix3d("+t+",0,0,0,0,"+e+",0,0,0,0,1,0,"+r+","+i+",0,1)"},HybridRenderer.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRenderer.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRenderer.prototype.show=function(){this.resizerElem.style.display="block"},HybridRenderer.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var t,e=this.globalData.compSize.w,r=this.globalData.compSize.h,i=this.threeDElements.length;for(t=0;t<i;t+=1)this.threeDElements[t].perspectiveElem.style.perspective=this.threeDElements[t].perspectiveElem.style.webkitPerspective=Math.sqrt(Math.pow(e,2)+Math.pow(r,2))+"px"}},HybridRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length,i=createTag("div");for(e=0;e<r;e+=1)if(t[e].xt){var s=this.createComp(t[e],i,this.globalData.comp,null);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}},MaskElement.prototype.getMaskProperty=function(t){return this.viewData[t].prop},MaskElement.prototype.renderFrame=function(t){var e,r=this.element.finalTransform.mat,i=this.masksProperties.length;for(e=0;e<i;e++)if((this.viewData[e].prop._mdf||t)&&this.drawPath(this.masksProperties[e],this.viewData[e].prop.v,this.viewData[e]),(this.viewData[e].op._mdf||t)&&this.viewData[e].elem.setAttribute("fill-opacity",this.viewData[e].op.v),"n"!==this.masksProperties[e].mode&&(this.viewData[e].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[e].invRect.setAttribute("transform",r.getInverseMatrix().to2dCSS()),this.storedData[e].x&&(this.storedData[e].x._mdf||t))){var s=this.storedData[e].expan;this.storedData[e].x.v<0?("erode"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="erode",this.storedData[e].elem.setAttribute("filter","url("+locationHref+"#"+this.storedData[e].filterId+")")),s.setAttribute("radius",-this.storedData[e].x.v)):("dilate"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="dilate",this.storedData[e].elem.setAttribute("filter",null)),this.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" "},MaskElement.prototype.drawPath=function(t,e,r){var i,s,a=" M"+e.v[0][0]+","+e.v[0][1];for(s=e._length,i=1;i<s;i+=1)a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[i][0]+","+e.i[i][1]+" "+e.v[i][0]+","+e.v[i][1];if(e.c&&1<s&&(a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),r.lastPath!==a){var n="";r.elem&&(e.c&&(n=t.inv?this.solidPath+a:a),r.elem.setAttribute("d",n)),r.lastPath=a}},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null},HierarchyElement.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(t){this.hierarchy=t},setAsParent:function(){this._isParent=!0},checkParenting:function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent,[])}},FrameElement.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(t,e){var r,i=this.dynamicProperties.length;for(r=0;r<i;r+=1)(e||this._isParent&&"transform"===this.dynamicProperties[r].propType)&&(this.dynamicProperties[r].getValue(),this.dynamicProperties[r]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&this.dynamicProperties.push(t)}},TransformElement.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new Matrix},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var t,e=this.finalTransform.mat,r=0,i=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;r<i;){if(this.hierarchy[r].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}r+=1}if(this.finalTransform._matMdf)for(t=this.finalTransform.mProp.v.props,e.cloneFromProps(t),r=0;r<i;r+=1)t=this.hierarchy[r].finalTransform.mProp.v.props,e.transform(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}},globalToLocal:function(t){var e=[];e.push(this.finalTransform);for(var r=!0,i=this.comp;r;)i.finalTransform?(i.data.hasMask&&e.splice(0,0,i.finalTransform),i=i.comp):r=!1;var s,a,n=e.length;for(s=0;s<n;s+=1)a=e[s].mat.applyToPointArray(0,0,0),t=[t[0]-a[0],t[1]-a[1],0];return t},mHelper:new Matrix},RenderableElement.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(t){-1===this.renderableComponents.indexOf(t)&&this.renderableComponents.push(t)},removeRenderableComponent:function(t){-1!==this.renderableComponents.indexOf(t)&&this.renderableComponents.splice(this.renderableComponents.indexOf(t),1)},prepareRenderableFrame:function(t){this.checkLayerLimits(t)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?!0!==this.isInRange&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):!1!==this.isInRange&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var t,e=this.renderableComponents.length;for(t=0;t<e;t+=1)this.renderableComponents[t].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}},extendPrototype([RenderableElement,createProxyFunction({initElement:function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){this.hidden||this.isInRange&&!this.isTransparent||((this.baseElement||this.layerElement).style.display="none",this.hidden=!0)},show:function(){this.isInRange&&!this.isTransparent&&(this.data.hd||((this.baseElement||this.layerElement).style.display="block"),this.hidden=!1,this._isFirstFrame=!0)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}})],RenderableDOMElement),SVGStyleData.prototype.reset=function(){this.d="",this._mdf=!1},SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=!0},extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData),extendPrototype([DynamicPropertyContainer],SVGFillStyleData),SVGGradientFillStyleData.prototype.initGradientData=function(t,e,r){this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.s=PropertyFactory.getProp(t,e.s,1,null,this),this.e=PropertyFactory.getProp(t,e.e,1,null,this),this.h=PropertyFactory.getProp(t,e.h||{k:0},0,.01,this),this.a=PropertyFactory.getProp(t,e.a||{k:0},0,degToRads,this),this.g=new GradientProperty(t,e.g,this),this.style=r,this.stops=[],this.setGradientData(r.pElem,e),this.setGradientOpacity(e,r),this._isAnimated=!!this._isAnimated},SVGGradientFillStyleData.prototype.setGradientData=function(t,e){var r=createElementID(),i=createNS(1===e.t?"linearGradient":"radialGradient");i.setAttribute("id",r),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var s,a,n,o=[];for(n=4*e.g.p,a=0;a<n;a+=4)s=createNS("stop"),i.appendChild(s),o.push(s);t.setAttribute("gf"===e.ty?"fill":"stroke","url("+locationHref+"#"+r+")"),this.gf=i,this.cst=o},SVGGradientFillStyleData.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var r,i,s,a=createNS("mask"),n=createNS("path");a.appendChild(n);var o=createElementID(),h=createElementID();a.setAttribute("id",h);var l=createNS(1===t.t?"linearGradient":"radialGradient");l.setAttribute("id",o),l.setAttribute("spreadMethod","pad"),l.setAttribute("gradientUnits","userSpaceOnUse"),s=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var p=this.stops;for(i=4*t.g.p;i<s;i+=2)(r=createNS("stop")).setAttribute("stop-color","rgb(255,255,255)"),l.appendChild(r),p.push(r);n.setAttribute("gf"===t.ty?"fill":"stroke","url("+locationHref+"#"+o+")"),this.of=l,this.ms=a,this.ost=p,this.maskId=h,e.msElem=n}},extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData),extendPrototype([SVGGradientFillStyleData,DynamicPropertyContainer],SVGGradientStrokeStyleData);var SVGElementsRenderer=function(){var y=new Matrix,g=new Matrix;function e(t,e,r){(r||e.transform.op._mdf)&&e.transform.container.setAttribute("opacity",e.transform.op.v),(r||e.transform.mProps._mdf)&&e.transform.container.setAttribute("transform",e.transform.mProps.v.to2dCSS())}function r(t,e,r){var i,s,a,n,o,h,l,p,m,f,c,d=e.styles.length,u=e.lvl;for(h=0;h<d;h+=1){if(n=e.sh._mdf||r,e.styles[h].lvl<u){for(p=g.reset(),f=u-e.styles[h].lvl,c=e.transformers.length-1;!n&&0<f;)n=e.transformers[c].mProps._mdf||n,f--,c--;if(n)for(f=u-e.styles[h].lvl,c=e.transformers.length-1;0<f;)m=e.transformers[c].mProps.v.props,p.transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]),f--,c--}else p=y;if(s=(l=e.sh.paths)._length,n){for(a="",i=0;i<s;i+=1)(o=l.shapes[i])&&o._length&&(a+=buildShapeString(o,o._length,o.c,p));e.caches[h]=a}else a=e.caches[h];e.styles[h].d+=!0===t.hd?"":a,e.styles[h]._mdf=n||e.styles[h]._mdf}}function i(t,e,r){var i=e.style;(e.c._mdf||r)&&i.pElem.setAttribute("fill","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("fill-opacity",e.o.v)}function s(t,e,r){a(t,e,r),n(t,e,r)}function a(t,e,r){var i,s,a,n,o,h=e.gf,l=e.g._hasOpacity,p=e.s.v,m=e.e.v;if(e.o._mdf||r){var f="gf"===t.ty?"fill-opacity":"stroke-opacity";e.style.pElem.setAttribute(f,e.o.v)}if(e.s._mdf||r){var c=1===t.t?"x1":"cx",d="x1"===c?"y1":"cy";h.setAttribute(c,p[0]),h.setAttribute(d,p[1]),l&&!e.g._collapsable&&(e.of.setAttribute(c,p[0]),e.of.setAttribute(d,p[1]))}if(e.g._cmdf||r){i=e.cst;var u=e.g.c;for(a=i.length,s=0;s<a;s+=1)(n=i[s]).setAttribute("offset",u[4*s]+"%"),n.setAttribute("stop-color","rgb("+u[4*s+1]+","+u[4*s+2]+","+u[4*s+3]+")")}if(l&&(e.g._omdf||r)){var y=e.g.o;for(a=(i=e.g._collapsable?e.cst:e.ost).length,s=0;s<a;s+=1)n=i[s],e.g._collapsable||n.setAttribute("offset",y[2*s]+"%"),n.setAttribute("stop-opacity",y[2*s+1])}if(1===t.t)(e.e._mdf||r)&&(h.setAttribute("x2",m[0]),h.setAttribute("y2",m[1]),l&&!e.g._collapsable&&(e.of.setAttribute("x2",m[0]),e.of.setAttribute("y2",m[1])));else if((e.s._mdf||e.e._mdf||r)&&(o=Math.sqrt(Math.pow(p[0]-m[0],2)+Math.pow(p[1]-m[1],2)),h.setAttribute("r",o),l&&!e.g._collapsable&&e.of.setAttribute("r",o)),e.e._mdf||e.h._mdf||e.a._mdf||r){o||(o=Math.sqrt(Math.pow(p[0]-m[0],2)+Math.pow(p[1]-m[1],2)));var g=Math.atan2(m[1]-p[1],m[0]-p[0]),v=o*(1<=e.h.v?.99:e.h.v<=-1?-.99:e.h.v),b=Math.cos(g+e.a.v)*v+p[0],E=Math.sin(g+e.a.v)*v+p[1];h.setAttribute("fx",b),h.setAttribute("fy",E),l&&!e.g._collapsable&&(e.of.setAttribute("fx",b),e.of.setAttribute("fy",E))}}function n(t,e,r){var i=e.style,s=e.d;s&&(s._mdf||r)&&s.dashStr&&(i.pElem.setAttribute("stroke-dasharray",s.dashStr),i.pElem.setAttribute("stroke-dashoffset",s.dashoffset[0])),e.c&&(e.c._mdf||r)&&i.pElem.setAttribute("stroke","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("stroke-opacity",e.o.v),(e.w._mdf||r)&&(i.pElem.setAttribute("stroke-width",e.w.v),i.msElem&&i.msElem.setAttribute("stroke-width",e.w.v))}return{createRenderFunction:function(t){t.ty;switch(t.ty){case"fl":return i;case"gf":return a;case"gs":return s;case"st":return n;case"sh":case"el":case"rc":case"sr":return r;case"tr":return e}}}}();function ShapeTransformManager(){this.sequences={},this.sequenceList=[],this.transform_key_count=0}function CVShapeData(t,e,r,i){this.styledShapes=[],this.tr=[0,0,0,0,0,0];var s=4;"rc"==e.ty?s=5:"el"==e.ty?s=6:"sr"==e.ty&&(s=7),this.sh=ShapePropertyFactory.getShapeProp(t,e,s,t);var a,n,o=r.length;for(a=0;a<o;a+=1)r[a].closed||(n={transforms:i.addTransformSequence(r[a].transforms),trNodes:[]},this.styledShapes.push(n),r[a].elements.push(n))}function BaseElement(){}function NullElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initFrame(),this.initTransform(t,e,r),this.initHierarchy()}function SVGBaseElement(){}function IShapeElement(){}function ITextElement(){}function ICompElement(){}function IImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}function ISolidElement(t,e,r){this.initElement(t,e,r)}function SVGCompElement(t,e,r){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function SVGTextElement(t,e,r){this.textSpans=[],this.renderType="svg",this.initElement(t,e,r)}function SVGShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,r),this.prevViewData=[]}function SVGTintFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");if(r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r),(r=createNS("feColorMatrix")).setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),r.setAttribute("result","f2"),t.appendChild(r),this.matrixFilter=r,100!==e.effectElements[2].p.v||e.effectElements[2].p.k){var i,s=createNS("feMerge");t.appendChild(s),(i=createNS("feMergeNode")).setAttribute("in","SourceGraphic"),s.appendChild(i),(i=createNS("feMergeNode")).setAttribute("in","f2"),s.appendChild(i)}}function SVGFillFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),t.appendChild(r),this.matrixFilter=r}function SVGGaussianBlurEffect(t,e){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","300%"),t.setAttribute("height","300%"),this.filterManager=e;var r=createNS("feGaussianBlur");t.appendChild(r),this.feGaussianBlur=r}function SVGStrokeEffect(t,e){this.initialized=!1,this.filterManager=e,this.elem=t,this.paths=[]}function SVGTritoneFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r);var i=createNS("feComponentTransfer");i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.matrixFilter=i;var s=createNS("feFuncR");s.setAttribute("type","table"),i.appendChild(s),this.feFuncR=s;var a=createNS("feFuncG");a.setAttribute("type","table"),i.appendChild(a),this.feFuncG=a;var n=createNS("feFuncB");n.setAttribute("type","table"),i.appendChild(n),this.feFuncB=n}function SVGProLevelsFilter(t,e){this.filterManager=e;var r=this.filterManager.effectElements,i=createNS("feComponentTransfer");(r[10].p.k||0!==r[10].p.v||r[11].p.k||1!==r[11].p.v||r[12].p.k||1!==r[12].p.v||r[13].p.k||0!==r[13].p.v||r[14].p.k||1!==r[14].p.v)&&(this.feFuncR=this.createFeFunc("feFuncR",i)),(r[17].p.k||0!==r[17].p.v||r[18].p.k||1!==r[18].p.v||r[19].p.k||1!==r[19].p.v||r[20].p.k||0!==r[20].p.v||r[21].p.k||1!==r[21].p.v)&&(this.feFuncG=this.createFeFunc("feFuncG",i)),(r[24].p.k||0!==r[24].p.v||r[25].p.k||1!==r[25].p.v||r[26].p.k||1!==r[26].p.v||r[27].p.k||0!==r[27].p.v||r[28].p.k||1!==r[28].p.v)&&(this.feFuncB=this.createFeFunc("feFuncB",i)),(r[31].p.k||0!==r[31].p.v||r[32].p.k||1!==r[32].p.v||r[33].p.k||1!==r[33].p.v||r[34].p.k||0!==r[34].p.v||r[35].p.k||1!==r[35].p.v)&&(this.feFuncA=this.createFeFunc("feFuncA",i)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),i=createNS("feComponentTransfer")),(r[3].p.k||0!==r[3].p.v||r[4].p.k||1!==r[4].p.v||r[5].p.k||1!==r[5].p.v||r[6].p.k||0!==r[6].p.v||r[7].p.k||1!==r[7].p.v)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.feFuncRComposed=this.createFeFunc("feFuncR",i),this.feFuncGComposed=this.createFeFunc("feFuncG",i),this.feFuncBComposed=this.createFeFunc("feFuncB",i))}function SVGDropShadowEffect(t,e){var r=e.container.globalData.renderConfig.filterSize;t.setAttribute("x",r.x),t.setAttribute("y",r.y),t.setAttribute("width",r.width),t.setAttribute("height",r.height),this.filterManager=e;var i=createNS("feGaussianBlur");i.setAttribute("in","SourceAlpha"),i.setAttribute("result","drop_shadow_1"),i.setAttribute("stdDeviation","0"),this.feGaussianBlur=i,t.appendChild(i);var s=createNS("feOffset");s.setAttribute("dx","25"),s.setAttribute("dy","0"),s.setAttribute("in","drop_shadow_1"),s.setAttribute("result","drop_shadow_2"),this.feOffset=s,t.appendChild(s);var a=createNS("feFlood");a.setAttribute("flood-color","#00ff00"),a.setAttribute("flood-opacity","1"),a.setAttribute("result","drop_shadow_3"),this.feFlood=a,t.appendChild(a);var n=createNS("feComposite");n.setAttribute("in","drop_shadow_3"),n.setAttribute("in2","drop_shadow_2"),n.setAttribute("operator","in"),n.setAttribute("result","drop_shadow_4"),t.appendChild(n);var o,h=createNS("feMerge");t.appendChild(h),o=createNS("feMergeNode"),h.appendChild(o),(o=createNS("feMergeNode")).setAttribute("in","SourceGraphic"),this.feMergeNode=o,this.feMerge=h,this.originalNodeAdded=!1,h.appendChild(o)}ShapeTransformManager.prototype={addTransformSequence:function(t){var e,r=t.length,i="_";for(e=0;e<r;e+=1)i+=t[e].transform.key+"_";var s=this.sequences[i];return s||(s={transforms:[].concat(t),finalTransform:new Matrix,_mdf:!1},this.sequences[i]=s,this.sequenceList.push(s)),s},processSequence:function(t,e){for(var r,i=0,s=t.transforms.length,a=e;i<s&&!e;){if(t.transforms[i].transform.mProps._mdf){a=!0;break}i+=1}if(a)for(t.finalTransform.reset(),i=s-1;0<=i;i-=1)r=t.transforms[i].transform.mProps.v.props,t.finalTransform.transform(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15]);t._mdf=a},processSequences:function(t){var e,r=this.sequenceList.length;for(e=0;e<r;e+=1)this.processSequence(this.sequenceList[e],t)},getNewKey:function(){return"_"+this.transform_key_count++}},CVShapeData.prototype.setAsAnimated=SVGShapeData.prototype.setAsAnimated,BaseElement.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;t<e;){if("n"!==this.data.masksProperties[t].mode&&!1!==this.data.masksProperties[t].cl)return!0;t+=1}return!1},initExpressions:function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var t=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(t),0===this.data.ty||this.data.xt?this.compInterface=CompExpressionInterface(this):4===this.data.ty?(this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):5===this.data.ty&&(this.layerInterface.textInterface=TextExpressionInterface(this),this.layerInterface.text=this.layerInterface.textInterface)},setBlendMode:function(){var t=getBlendMode(this.data.bm);(this.baseElement||this.layerElement).style["mix-blend-mode"]=t},initBaseData:function(t,e,r){this.globalData=e,this.comp=r,this.data=t,this.layerId=createElementID(),this.data.sr||(this.data.sr=1),this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}},NullElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},NullElement.prototype.renderFrame=function(){},NullElement.prototype.getBaseElement=function(){return null},NullElement.prototype.destroy=function(){},NullElement.prototype.sourceRectAtTime=function(){},NullElement.prototype.hide=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement),SVGBaseElement.prototype={initRendererElement:function(){this.layerElement=createNS("g")},createContainerElements:function(){this.matteElement=createNS("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var t,e,r,i=null;if(this.data.td){if(3==this.data.td||1==this.data.td){var s=createNS("mask");s.setAttribute("id",this.layerId),s.setAttribute("mask-type",3==this.data.td?"luminance":"alpha"),s.appendChild(this.layerElement),i=s,this.globalData.defs.appendChild(s),featureSupport.maskType||1!=this.data.td||(s.setAttribute("mask-type","luminance"),t=createElementID(),e=filtersFactory.createFilter(t),this.globalData.defs.appendChild(e),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),(r=createNS("g")).appendChild(this.layerElement),i=r,s.appendChild(r),r.setAttribute("filter","url("+locationHref+"#"+t+")"))}else if(2==this.data.td){var a=createNS("mask");a.setAttribute("id",this.layerId),a.setAttribute("mask-type","alpha");var n=createNS("g");a.appendChild(n),t=createElementID(),e=filtersFactory.createFilter(t);var o=createNS("feComponentTransfer");o.setAttribute("in","SourceGraphic"),e.appendChild(o);var h=createNS("feFuncA");h.setAttribute("type","table"),h.setAttribute("tableValues","1.0 0.0"),o.appendChild(h),this.globalData.defs.appendChild(e);var l=createNS("rect");l.setAttribute("width",this.comp.data.w),l.setAttribute("height",this.comp.data.h),l.setAttribute("x","0"),l.setAttribute("y","0"),l.setAttribute("fill","#ffffff"),l.setAttribute("opacity","0"),n.setAttribute("filter","url("+locationHref+"#"+t+")"),n.appendChild(l),n.appendChild(this.layerElement),i=n,featureSupport.maskType||(a.setAttribute("mask-type","luminance"),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),r=createNS("g"),n.appendChild(l),r.appendChild(this.layerElement),i=r,n.appendChild(r)),this.globalData.defs.appendChild(a)}}else this.data.tt?(this.matteElement.appendChild(this.layerElement),i=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0===this.data.ty&&!this.data.hd){var p=createNS("clipPath"),m=createNS("path");m.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var f=createElementID();if(p.setAttribute("id",f),p.appendChild(m),this.globalData.defs.appendChild(p),this.checkMasks()){var c=createNS("g");c.setAttribute("clip-path","url("+locationHref+"#"+f+")"),c.appendChild(this.layerElement),this.transformedElement=c,i?i.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+f+")")}0!==this.data.bm&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData),this.renderableEffectsManager=new SVGEffects(this)},setMatte:function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+locationHref+"#"+t+")")}},IShapeElement.prototype={addShapeToModifiers:function(t){var e,r=this.shapeModifiers.length;for(e=0;e<r;e+=1)this.shapeModifiers[e].addShape(t)},isShapeInAnimatedModifiers:function(t){for(var e=this.shapeModifiers.length;0<e;)if(this.shapeModifiers[0].isAnimatedWithShape(t))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;t<e;t+=1)this.shapes[t].sh.reset();for(t=(e=this.shapeModifiers.length)-1;0<=t;t-=1)this.shapeModifiers[t].processShapes(this._isFirstFrame)}},lcEnum:{1:"butt",2:"round",3:"square"},ljEnum:{1:"miter",2:"round",3:"bevel"},searchProcessedElement:function(t){for(var e=this.processedElements,r=0,i=e.length;r<i;){if(e[r].elem===t)return e[r].pos;r+=1}return 0},addProcessedElement:function(t,e){for(var r=this.processedElements,i=r.length;i;)if(r[i-=1].elem===t)return void(r[i].pos=e);r.push(new ProcessedElement(t,e))},prepareFrame:function(t){this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)}},ITextElement.prototype.initElement=function(t,e,r){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,r),this.textProperty=new TextProperty(this,t.t,this.dynamicProperties),this.textAnimator=new TextAnimatorProperty(t.t,this.renderType,this),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)},ITextElement.prototype.createPathShape=function(t,e){var r,i,s=e.length,a="";for(r=0;r<s;r+=1)i=e[r].ks.k,a+=buildShapeString(i,i.i.length,!0,t);return a},ITextElement.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},ITextElement.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},ITextElement.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},ITextElement.prototype.applyTextPropertiesToMatrix=function(t,e,r,i,s){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r])/2,0,0)}e.translate(i,s,0)},ITextElement.prototype.buildColor=function(t){return"rgb("+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+")"},ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement),ICompElement.prototype.initElement=function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),!this.data.xt&&e.progressiveLoad||this.buildAllItems(),this.hide()},ICompElement.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.isInRange||this.data.xt){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var r,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),r=i-1;0<=r;r-=1)(this.completeLayers||this.elements[r])&&(this.elements[r].prepareFrame(this.renderedFrame-this.layers[r].st),this.elements[r]._mdf&&(this._mdf=!0))}},ICompElement.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ICompElement.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()},extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement),IImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect},extendPrototype([IImageElement],ISolidElement),ISolidElement.prototype.createContent=function(){var t=createNS("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)},extendPrototype([SVGRenderer,ICompElement,SVGBaseElement],SVGCompElement),extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextElement),SVGTextElement.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=createNS("text"))},SVGTextElement.prototype.buildTextContents=function(t){for(var e=0,r=t.length,i=[],s="";e<r;)t[e]===String.fromCharCode(13)||t[e]===String.fromCharCode(3)?(i.push(s),s=""):s+=t[e],e+=1;return i.push(s),i},SVGTextElement.prototype.buildNewText=function(){var t,e,r=this.textProperty.currentData;this.renderedLetters=createSizedArray(r?r.l.length:0),r.fc?this.layerElement.setAttribute("fill",this.buildColor(r.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),r.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(r.sc)),this.layerElement.setAttribute("stroke-width",r.sw)),this.layerElement.setAttribute("font-size",r.finalSize);var i=this.globalData.fontManager.getFontByName(r.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var s=r.fWeight,a=r.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",s)}this.layerElement.setAttribute("aria-label",r.t);var n,o=r.l||[],h=!!this.globalData.fontManager.chars;e=o.length;var l,p=this.mHelper,m="",f=this.data.singleShape,c=0,d=0,u=!0,y=r.tr/1e3*r.finalSize;if(!f||h||r.sz){var g,v,b=this.textSpans.length;for(t=0;t<e;t+=1)h&&f&&0!==t||(n=t<b?this.textSpans[t]:createNS(h?"path":"text"),b<=t&&(n.setAttribute("stroke-linecap","butt"),n.setAttribute("stroke-linejoin","round"),n.setAttribute("stroke-miterlimit","4"),this.textSpans[t]=n,this.layerElement.appendChild(n)),n.style.display="inherit"),p.reset(),p.scale(r.finalSize/100,r.finalSize/100),f&&(o[t].n&&(c=-y,d+=r.yOffset,d+=u?1:0,u=!1),this.applyTextPropertiesToMatrix(r,p,o[t].line,c,d),c+=o[t].l||0,c+=y),h?(l=(g=(v=this.globalData.fontManager.getCharData(r.finalText[t],i.fStyle,this.globalData.fontManager.getFontByName(r.f).fFamily))&&v.data||{}).shapes?g.shapes[0].it:[],f?m+=this.createPathShape(p,l):n.setAttribute("d",this.createPathShape(p,l))):(f&&n.setAttribute("transform","translate("+p.props[12]+","+p.props[13]+")"),n.textContent=o[t].val,n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"));f&&n&&n.setAttribute("d",m)}else{var E=this.textContainer,x="start";switch(r.j){case 1:x="end";break;case 2:x="middle"}E.setAttribute("text-anchor",x),E.setAttribute("letter-spacing",y);var S=this.buildTextContents(r.finalText);for(e=S.length,d=r.ps?r.ps[1]+r.ascent:0,t=0;t<e;t+=1)(n=this.textSpans[t]||createNS("tspan")).textContent=S[t],n.setAttribute("x",0),n.setAttribute("y",d),n.style.display="inherit",E.appendChild(n),this.textSpans[t]=n,d+=r.finalLineHeight;this.layerElement.appendChild(E)}for(;t<this.textSpans.length;)this.textSpans[t].style.display="none",t+=1;this._sizeChanged=!0},SVGTextElement.prototype.sourceRectAtTime=function(t){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var e=this.layerElement.getBBox();this.bbox={top:e.y,left:e.x,width:e.width,height:e.height}}return this.bbox},SVGTextElement.prototype.renderInnerContent=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){var t,e;this._sizeChanged=!0;var r,i,s=this.textAnimator.renderedLetters,a=this.textProperty.currentData.l;for(e=a.length,t=0;t<e;t+=1)a[t].n||(r=s[t],i=this.textSpans[t],r._mdf.m&&i.setAttribute("transform",r.m),r._mdf.o&&i.setAttribute("opacity",r.o),r._mdf.sw&&i.setAttribute("stroke-width",r.sw),r._mdf.sc&&i.setAttribute("stroke",r.sc),r._mdf.fc&&i.setAttribute("fill",r.fc))}},extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement),SVGShapeElement.prototype.initSecondaryElement=function(){},SVGShapeElement.prototype.identityMatrix=new Matrix,SVGShapeElement.prototype.buildExpressionInterface=function(){},SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},SVGShapeElement.prototype.filterUniqueShapes=function(){var t,e,r,i,s=this.shapes.length,a=this.stylesList.length,n=[],o=!1;for(r=0;r<a;r+=1){for(i=this.stylesList[r],o=!1,t=n.length=0;t<s;t+=1)-1!==(e=this.shapes[t]).styles.indexOf(i)&&(n.push(e),o=e._isAnimated||o);1<n.length&&o&&this.setShapesAsAnimated(n)}},SVGShapeElement.prototype.setShapesAsAnimated=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].setAsAnimated()},SVGShapeElement.prototype.createStyleElement=function(t,e){var r,i=new SVGStyleData(t,e),s=i.pElem;if("st"===t.ty)r=new SVGStrokeStyleData(this,t,i);else if("fl"===t.ty)r=new SVGFillStyleData(this,t,i);else if("gf"===t.ty||"gs"===t.ty){r=new("gf"===t.ty?SVGGradientFillStyleData:SVGGradientStrokeStyleData)(this,t,i),this.globalData.defs.appendChild(r.gf),r.maskId&&(this.globalData.defs.appendChild(r.ms),this.globalData.defs.appendChild(r.of),s.setAttribute("mask","url("+locationHref+"#"+r.maskId+")"))}return"st"!==t.ty&&"gs"!==t.ty||(s.setAttribute("stroke-linecap",this.lcEnum[t.lc]||"round"),s.setAttribute("stroke-linejoin",this.ljEnum[t.lj]||"round"),s.setAttribute("fill-opacity","0"),1===t.lj&&s.setAttribute("stroke-miterlimit",t.ml)),2===t.r&&s.setAttribute("fill-rule","evenodd"),t.ln&&s.setAttribute("id",t.ln),t.cl&&s.setAttribute("class",t.cl),t.bm&&(s.style["mix-blend-mode"]=getBlendMode(t.bm)),this.stylesList.push(i),this.addToAnimatedContents(t,r),r},SVGShapeElement.prototype.createGroupElement=function(t){var e=new ShapeGroupData;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=getBlendMode(t.bm)),e},SVGShapeElement.prototype.createTransformElement=function(t,e){var r=TransformPropertyFactory.getTransformProperty(this,t,this),i=new SVGTransformData(r,r.o,e);return this.addToAnimatedContents(t,i),i},SVGShapeElement.prototype.createShapeElement=function(t,e,r){var i=4;"rc"===t.ty?i=5:"el"===t.ty?i=6:"sr"===t.ty&&(i=7);var s=new SVGShapeData(e,r,ShapePropertyFactory.getShapeProp(this,t,i,this));return this.shapes.push(s),this.addShapeToModifiers(s),this.addToAnimatedContents(t,s),s},SVGShapeElement.prototype.addToAnimatedContents=function(t,e){for(var r=0,i=this.animatedContents.length;r<i;){if(this.animatedContents[r].element===e)return;r+=1}this.animatedContents.push({fn:SVGElementsRenderer.createRenderFunction(t),element:e,data:t})},SVGShapeElement.prototype.setElementStyles=function(t){var e,r=t.styles,i=this.stylesList.length;for(e=0;e<i;e+=1)this.stylesList[e].closed||r.push(this.stylesList[e])},SVGShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},SVGShapeElement.prototype.searchShapes=function(t,e,r,i,s,a,n){var o,h,l,p,m,f,c=[].concat(a),d=t.length-1,u=[],y=[];for(o=d;0<=o;o-=1){if((f=this.searchProcessedElement(t[o]))?e[o]=r[f-1]:t[o]._render=n,"fl"==t[o].ty||"st"==t[o].ty||"gf"==t[o].ty||"gs"==t[o].ty)f?e[o].style.closed=!1:e[o]=this.createStyleElement(t[o],s),t[o]._render&&i.appendChild(e[o].style.pElem),u.push(e[o].style);else if("gr"==t[o].ty){if(f)for(l=e[o].it.length,h=0;h<l;h+=1)e[o].prevViewData[h]=e[o].it[h];else e[o]=this.createGroupElement(t[o]);this.searchShapes(t[o].it,e[o].it,e[o].prevViewData,e[o].gr,s+1,c,n),t[o]._render&&i.appendChild(e[o].gr)}else"tr"==t[o].ty?(f||(e[o]=this.createTransformElement(t[o],i)),p=e[o].transform,c.push(p)):"sh"==t[o].ty||"rc"==t[o].ty||"el"==t[o].ty||"sr"==t[o].ty?(f||(e[o]=this.createShapeElement(t[o],c,s)),this.setElementStyles(e[o])):"tm"==t[o].ty||"rd"==t[o].ty||"ms"==t[o].ty?(f?(m=e[o]).closed=!1:((m=ShapeModifiers.getModifier(t[o].ty)).init(this,t[o]),e[o]=m,this.shapeModifiers.push(m)),y.push(m)):"rp"==t[o].ty&&(f?(m=e[o]).closed=!0:(m=ShapeModifiers.getModifier(t[o].ty),(e[o]=m).init(this,t,o,e),this.shapeModifiers.push(m),n=!1),y.push(m));this.addProcessedElement(t[o],o+1)}for(d=u.length,o=0;o<d;o+=1)u[o].closed=!0;for(d=y.length,o=0;o<d;o+=1)y[o].closed=!0},SVGShapeElement.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},SVGShapeElement.prototype.renderShape=function(){var t,e,r=this.animatedContents.length;for(t=0;t<r;t+=1)e=this.animatedContents[t],(this._isFirstFrame||e.element._isAnimated)&&!0!==e.data&&e.fn(e.data,e.element,this._isFirstFrame)},SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null},SVGTintFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute("values",r[0]-e[0]+" 0 0 0 "+e[0]+" "+(r[1]-e[1])+" 0 0 0 "+e[1]+" "+(r[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 "+i+" 0")}},SVGFillFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[2].p.v,r=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+r+" 0")}},SVGGaussianBlurEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=.3*this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=3==r?0:e,s=2==r?0:e;this.feGaussianBlur.setAttribute("stdDeviation",i+" "+s);var a=1==this.filterManager.effectElements[2].p.v?"wrap":"duplicate";this.feGaussianBlur.setAttribute("edgeMode",a)}},SVGStrokeEffect.prototype.initialize=function(){var t,e,r,i,s=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(i=this.elem.maskManager.masksProperties.length,r=0):i=(r=this.filterManager.effectElements[0].p.v-1)+1,(e=createNS("g")).setAttribute("fill","none"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-dashoffset",1);r<i;r+=1)t=createNS("path"),e.appendChild(t),this.paths.push({p:t,m:r});if(3===this.filterManager.effectElements[10].p.v){var a=createNS("mask"),n=createElementID();a.setAttribute("id",n),a.setAttribute("mask-type","alpha"),a.appendChild(e),this.elem.globalData.defs.appendChild(a);var o=createNS("g");for(o.setAttribute("mask","url("+locationHref+"#"+n+")");s[0];)o.appendChild(s[0]);this.elem.layerElement.appendChild(o),this.masker=a,e.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(s=this.elem.layerElement.children||this.elem.layerElement.childNodes;s.length;)this.elem.layerElement.removeChild(s[0]);this.elem.layerElement.appendChild(e),this.elem.layerElement.removeAttribute("mask"),e.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=e},SVGStrokeEffect.prototype.renderFrame=function(t){this.initialized||this.initialize();var e,r,i,s=this.paths.length;for(e=0;e<s;e+=1)if(-1!==this.paths[e].m&&(r=this.elem.maskManager.viewData[this.paths[e].m],i=this.paths[e].p,(t||this.filterManager._mdf||r.prop._mdf)&&i.setAttribute("d",r.lastPath),t||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||r.prop._mdf)){var a;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var n=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,o=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,h=i.getTotalLength();a="0 0 0 "+h*n+" ";var l,p=h*(o-n),m=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100,f=Math.floor(p/m);for(l=0;l<f;l+=1)a+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100+" ";a+="0 "+10*h+" 0 0"}else a="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100;i.setAttribute("stroke-dasharray",a)}if((t||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(t||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(t||this.filterManager.effectElements[3].p._mdf)){var c=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bm_floor(255*c[0])+","+bm_floor(255*c[1])+","+bm_floor(255*c[2])+")")}},SVGTritoneFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v,s=i[0]+" "+r[0]+" "+e[0],a=i[1]+" "+r[1]+" "+e[1],n=i[2]+" "+r[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",s),this.feFuncG.setAttribute("tableValues",a),this.feFuncB.setAttribute("tableValues",n)}},SVGProLevelsFilter.prototype.createFeFunc=function(t,e){var r=createNS(t);return r.setAttribute("type","table"),e.appendChild(r),r},SVGProLevelsFilter.prototype.getTableValue=function(t,e,r,i,s){for(var a,n,o=0,h=Math.min(t,e),l=Math.max(t,e),p=Array.call(null,{length:256}),m=0,f=s-i,c=e-t;o<=256;)n=(a=o/256)<=h?c<0?s:i:l<=a?c<0?i:s:i+f*Math.pow((a-t)/c,1/r),p[m++]=n,o+=256/255;return p.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e,r=this.filterManager.effectElements;this.feFuncRComposed&&(t||r[3].p._mdf||r[4].p._mdf||r[5].p._mdf||r[6].p._mdf||r[7].p._mdf)&&(e=this.getTableValue(r[3].p.v,r[4].p.v,r[5].p.v,r[6].p.v,r[7].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||r[10].p._mdf||r[11].p._mdf||r[12].p._mdf||r[13].p._mdf||r[14].p._mdf)&&(e=this.getTableValue(r[10].p.v,r[11].p.v,r[12].p.v,r[13].p.v,r[14].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||r[17].p._mdf||r[18].p._mdf||r[19].p._mdf||r[20].p._mdf||r[21].p._mdf)&&(e=this.getTableValue(r[17].p.v,r[18].p.v,r[19].p.v,r[20].p.v,r[21].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||r[24].p._mdf||r[25].p._mdf||r[26].p._mdf||r[27].p._mdf||r[28].p._mdf)&&(e=this.getTableValue(r[24].p.v,r[25].p.v,r[26].p.v,r[27].p.v,r[28].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||r[31].p._mdf||r[32].p._mdf||r[33].p._mdf||r[34].p._mdf||r[35].p._mdf)&&(e=this.getTableValue(r[31].p.v,r[32].p.v,r[33].p.v,r[34].p.v,r[35].p.v),this.feFuncA.setAttribute("tableValues",e))}},SVGDropShadowEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){if((t||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p._mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2])))}if((t||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var r=this.filterManager.effectElements[3].p.v,i=(this.filterManager.effectElements[2].p.v-90)*degToRads,s=r*Math.cos(i),a=r*Math.sin(i);this.feOffset.setAttribute("dx",s),this.feOffset.setAttribute("dy",a)}}};var _svgMatteSymbols=[];function SVGMatte3Effect(t,e,r){this.initialized=!1,this.filterManager=e,this.filterElem=t,(this.elem=r).matteElement=createNS("g"),r.matteElement.appendChild(r.layerElement),r.matteElement.appendChild(r.transformedElement),r.baseElement=r.matteElement}function SVGEffects(t){var e,r,i=t.data.ef?t.data.ef.length:0,s=createElementID(),a=filtersFactory.createFilter(s),n=0;for(this.filters=[],e=0;e<i;e+=1)r=null,20===t.data.ef[e].ty?(n+=1,r=new SVGTintFilter(a,t.effectsManager.effectElements[e])):21===t.data.ef[e].ty?(n+=1,r=new SVGFillFilter(a,t.effectsManager.effectElements[e])):22===t.data.ef[e].ty?r=new SVGStrokeEffect(t,t.effectsManager.effectElements[e]):23===t.data.ef[e].ty?(n+=1,r=new SVGTritoneFilter(a,t.effectsManager.effectElements[e])):24===t.data.ef[e].ty?(n+=1,r=new SVGProLevelsFilter(a,t.effectsManager.effectElements[e])):25===t.data.ef[e].ty?(n+=1,r=new SVGDropShadowEffect(a,t.effectsManager.effectElements[e])):28===t.data.ef[e].ty?r=new SVGMatte3Effect(a,t.effectsManager.effectElements[e],t):29===t.data.ef[e].ty&&(n+=1,r=new SVGGaussianBlurEffect(a,t.effectsManager.effectElements[e])),r&&this.filters.push(r);n&&(t.globalData.defs.appendChild(a),t.layerElement.setAttribute("filter","url("+locationHref+"#"+s+")")),this.filters.length&&t.addRenderableComponent(this)}function CVContextData(){this.saved=[],this.cArrPos=0,this.cTr=new Matrix,this.cO=1;var t;for(this.savedOp=createTypedArray("float32",15),t=0;t<15;t+=1)this.saved[t]=createTypedArray("float32",16);this._length=15}function CVBaseElement(){}function CVImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.img=e.imageLoader.getImage(this.assetData),this.initElement(t,e,r)}function CVCompElement(t,e,r){this.completeLayers=!1,this.layers=t.layers,this.pendingElements=[],this.elements=createSizedArray(this.layers.length),this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function CVMaskElement(t,e){this.data=t,this.element=e,this.masksProperties=this.data.masksProperties||[],this.viewData=createSizedArray(this.masksProperties.length);var r,i=this.masksProperties.length,s=!1;for(r=0;r<i;r++)"n"!==this.masksProperties[r].mode&&(s=!0),this.viewData[r]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[r],3);(this.hasMasks=s)&&this.element.addRenderableComponent(this)}function CVShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this.transformsManager=new ShapeTransformManager,this.initElement(t,e,r)}function CVSolidElement(t,e,r){this.initElement(t,e,r)}function CVTextElement(t,e,r){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this.initElement(t,e,r)}function CVEffects(){}function HBaseElement(t,e,r){}function HSolidElement(t,e,r){this.initElement(t,e,r)}function HCompElement(t,e,r){this.layers=t.layers,this.supports3d=!t.hasMask,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function HShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.shapesContainer=createNS("g"),this.initElement(t,e,r),this.prevViewData=[],this.currentBBox={x:999999,y:-999999,h:0,w:0}}function HTextElement(t,e,r){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this.initElement(t,e,r)}function HImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r)}function HCameraElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initHierarchy();var i=PropertyFactory.getProp;if(this.pe=i(this,t.pe,0,0,this),t.ks.p.s?(this.px=i(this,t.ks.p.x,1,0,this),this.py=i(this,t.ks.p.y,1,0,this),this.pz=i(this,t.ks.p.z,1,0,this)):this.p=i(this,t.ks.p,1,0,this),t.ks.a&&(this.a=i(this,t.ks.a,1,0,this)),t.ks.or.k.length&&t.ks.or.k[0].to){var s,a=t.ks.or.k.length;for(s=0;s<a;s+=1)t.ks.or.k[s].to=null,t.ks.or.k[s].ti=null}this.or=i(this,t.ks.or,1,degToRads,this),this.or.sh=!0,this.rx=i(this,t.ks.rx,0,degToRads,this),this.ry=i(this,t.ks.ry,0,degToRads,this),this.rz=i(this,t.ks.rz,0,degToRads,this),this.mat=new Matrix,this._prevMat=new Matrix,this._isFirstFrame=!0,this.finalTransform={mProp:this}}function HEffects(){}SVGMatte3Effect.prototype.findSymbol=function(t){for(var e=0,r=_svgMatteSymbols.length;e<r;){if(_svgMatteSymbols[e]===t)return _svgMatteSymbols[e];e+=1}return null},SVGMatte3Effect.prototype.replaceInParent=function(t,e){var r=t.layerElement.parentNode;if(r){for(var i,s=r.children,a=0,n=s.length;a<n&&s[a]!==t.layerElement;)a+=1;a<=n-2&&(i=s[a+1]);var o=createNS("use");o.setAttribute("href","#"+e),i?r.insertBefore(o,i):r.appendChild(o)}},SVGMatte3Effect.prototype.setElementAsMask=function(t,e){if(!this.findSymbol(e)){var r=createElementID(),i=createNS("mask");i.setAttribute("id",e.layerId),i.setAttribute("mask-type","alpha"),_svgMatteSymbols.push(e);var s=t.globalData.defs;s.appendChild(i);var a=createNS("symbol");a.setAttribute("id",r),this.replaceInParent(e,r),a.appendChild(e.layerElement),s.appendChild(a);var n=createNS("use");n.setAttribute("href","#"+r),i.appendChild(n),e.data.hd=!1,e.show()}t.setMatte(e.layerId)},SVGMatte3Effect.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=this.elem.comp.elements,r=0,i=e.length;r<i;)e[r]&&e[r].data.ind===t&&this.setElementAsMask(this.elem,e[r]),r+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()},SVGEffects.prototype.renderFrame=function(t){var e,r=this.filters.length;for(e=0;e<r;e+=1)this.filters[e].renderFrame(t)},CVContextData.prototype.duplicate=function(){var t=2*this._length,e=this.savedOp;this.savedOp=createTypedArray("float32",t),this.savedOp.set(e);var r=0;for(r=this._length;r<t;r+=1)this.saved[r]=createTypedArray("float32",16);this._length=t},CVContextData.prototype.reset=function(){this.cArrPos=0,this.cTr.reset(),this.cO=1},CVBaseElement.prototype={createElements:function(){},initRendererElement:function(){},createContainerElements:function(){this.canvasContext=this.globalData.canvasContext,this.renderableEffectsManager=new CVEffects(this)},createContent:function(){},setBlendMode:function(){var t=this.globalData;if(t.blendMode!==this.data.bm){t.blendMode=this.data.bm;var e=getBlendMode(this.data.bm);t.canvasContext.globalCompositeOperation=e}},createRenderableComponents:function(){this.maskManager=new CVMaskElement(this.data,this)},hideElement:function(){this.hidden||this.isInRange&&!this.isTransparent||(this.hidden=!0)},showElement:function(){this.isInRange&&!this.isTransparent&&(this.hidden=!1,this._isFirstFrame=!0,this.maskManager._isFirstFrame=!0)},renderFrame:function(){if(!this.hidden&&!this.data.hd){this.renderTransform(),this.renderRenderable(),this.setBlendMode();var t=0===this.data.ty;this.globalData.renderer.save(t),this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),this.renderInnerContent(),this.globalData.renderer.restore(t),this.maskManager.hasMasks&&this.globalData.renderer.restore(!0),this._isFirstFrame&&(this._isFirstFrame=!1)}},destroy:function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager.destroy()},mHelper:new Matrix},CVBaseElement.prototype.hide=CVBaseElement.prototype.hideElement,CVBaseElement.prototype.show=CVBaseElement.prototype.showElement,extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVImageElement),CVImageElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVImageElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVImageElement.prototype.createContent=function(){if(this.img.width&&(this.assetData.w!==this.img.width||this.assetData.h!==this.img.height)){var t=createTag("canvas");t.width=this.assetData.w,t.height=this.assetData.h;var e,r,i=t.getContext("2d"),s=this.img.width,a=this.img.height,n=s/a,o=this.assetData.w/this.assetData.h,h=this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio;o<n&&"xMidYMid slice"===h||n<o&&"xMidYMid slice"!==h?e=(r=a)*o:r=(e=s)/o,i.drawImage(this.img,(s-e)/2,(a-r)/2,e,r,0,0,this.assetData.w,this.assetData.h),this.img=t}},CVImageElement.prototype.renderInnerContent=function(t){this.canvasContext.drawImage(this.img,0,0)},CVImageElement.prototype.destroy=function(){this.img=null},extendPrototype([CanvasRenderer,ICompElement,CVBaseElement],CVCompElement),CVCompElement.prototype.renderInnerContent=function(){var t,e=this.canvasContext;for(e.beginPath(),e.moveTo(0,0),e.lineTo(this.data.w,0),e.lineTo(this.data.w,this.data.h),e.lineTo(0,this.data.h),e.lineTo(0,0),e.clip(),t=this.layers.length-1;0<=t;t-=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},CVCompElement.prototype.destroy=function(){var t;for(t=this.layers.length-1;0<=t;t-=1)this.elements[t]&&this.elements[t].destroy();this.layers=null,this.elements=null},CVMaskElement.prototype.renderFrame=function(){if(this.hasMasks){var t,e,r,i,s=this.element.finalTransform.mat,a=this.element.canvasContext,n=this.masksProperties.length;for(a.beginPath(),t=0;t<n;t++)if("n"!==this.masksProperties[t].mode){this.masksProperties[t].inv&&(a.moveTo(0,0),a.lineTo(this.element.globalData.compSize.w,0),a.lineTo(this.element.globalData.compSize.w,this.element.globalData.compSize.h),a.lineTo(0,this.element.globalData.compSize.h),a.lineTo(0,0)),i=this.viewData[t].v,e=s.applyToPointArray(i.v[0][0],i.v[0][1],0),a.moveTo(e[0],e[1]);var o,h=i._length;for(o=1;o<h;o++)r=s.applyToTriplePoints(i.o[o-1],i.i[o],i.v[o]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5]);r=s.applyToTriplePoints(i.o[o-1],i.i[0],i.v[0]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5])}this.element.globalData.renderer.save(!0),a.clip()}},CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy=function(){this.element=null},extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement],CVShapeElement),CVShapeElement.prototype.initElement=RenderableDOMElement.prototype.initElement,CVShapeElement.prototype.transformHelper={opacity:1,_opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[])},CVShapeElement.prototype.createStyleElement=function(t,e){var r={data:t,type:t.ty,preTransforms:this.transformsManager.addTransformSequence(e),transforms:[],elements:[],closed:!0===t.hd},i={};if("fl"==t.ty||"st"==t.ty?(i.c=PropertyFactory.getProp(this,t.c,1,255,this),i.c.k||(r.co="rgb("+bm_floor(i.c.v[0])+","+bm_floor(i.c.v[1])+","+bm_floor(i.c.v[2])+")")):"gf"!==t.ty&&"gs"!==t.ty||(i.s=PropertyFactory.getProp(this,t.s,1,null,this),i.e=PropertyFactory.getProp(this,t.e,1,null,this),i.h=PropertyFactory.getProp(this,t.h||{k:0},0,.01,this),i.a=PropertyFactory.getProp(this,t.a||{k:0},0,degToRads,this),i.g=new GradientProperty(this,t.g,this)),i.o=PropertyFactory.getProp(this,t.o,0,.01,this),"st"==t.ty||"gs"==t.ty){if(r.lc=this.lcEnum[t.lc]||"round",r.lj=this.ljEnum[t.lj]||"round",1==t.lj&&(r.ml=t.ml),i.w=PropertyFactory.getProp(this,t.w,0,null,this),i.w.k||(r.wi=i.w.v),t.d){var s=new DashProperty(this,t.d,"canvas",this);i.d=s,i.d.k||(r.da=i.d.dashArray,r.do=i.d.dashoffset[0])}}else r.r=2===t.r?"evenodd":"nonzero";return this.stylesList.push(r),i.style=r,i},CVShapeElement.prototype.createGroupElement=function(t){return{it:[],prevViewData:[]}},CVShapeElement.prototype.createTransformElement=function(t){return{transform:{opacity:1,_opMdf:!1,key:this.transformsManager.getNewKey(),op:PropertyFactory.getProp(this,t.o,0,.01,this),mProps:TransformPropertyFactory.getTransformProperty(this,t,this)}}},CVShapeElement.prototype.createShapeElement=function(t){var e=new CVShapeData(this,t,this.stylesList,this.transformsManager);return this.shapes.push(e),this.addShapeToModifiers(e),e},CVShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[]),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame)},CVShapeElement.prototype.addTransformToStyleList=function(t){var e,r=this.stylesList.length;for(e=0;e<r;e+=1)this.stylesList[e].closed||this.stylesList[e].transforms.push(t)},CVShapeElement.prototype.removeTransformFromStyleList=function(){var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].closed||this.stylesList[t].transforms.pop()},CVShapeElement.prototype.closeStyles=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].closed=!0},CVShapeElement.prototype.searchShapes=function(t,e,r,i,s){var a,n,o,h,l,p,m=t.length-1,f=[],c=[],d=[].concat(s);for(a=m;0<=a;a-=1){if((h=this.searchProcessedElement(t[a]))?e[a]=r[h-1]:t[a]._shouldRender=i,"fl"==t[a].ty||"st"==t[a].ty||"gf"==t[a].ty||"gs"==t[a].ty)h?e[a].style.closed=!1:e[a]=this.createStyleElement(t[a],d),f.push(e[a].style);else if("gr"==t[a].ty){if(h)for(o=e[a].it.length,n=0;n<o;n+=1)e[a].prevViewData[n]=e[a].it[n];else e[a]=this.createGroupElement(t[a]);this.searchShapes(t[a].it,e[a].it,e[a].prevViewData,i,d)}else"tr"==t[a].ty?(h||(p=this.createTransformElement(t[a]),e[a]=p),d.push(e[a]),this.addTransformToStyleList(e[a])):"sh"==t[a].ty||"rc"==t[a].ty||"el"==t[a].ty||"sr"==t[a].ty?h||(e[a]=this.createShapeElement(t[a])):"tm"==t[a].ty||"rd"==t[a].ty?(h?(l=e[a]).closed=!1:((l=ShapeModifiers.getModifier(t[a].ty)).init(this,t[a]),e[a]=l,this.shapeModifiers.push(l)),c.push(l)):"rp"==t[a].ty&&(h?(l=e[a]).closed=!0:(l=ShapeModifiers.getModifier(t[a].ty),(e[a]=l).init(this,t,a,e),this.shapeModifiers.push(l),i=!1),c.push(l));this.addProcessedElement(t[a],a+1)}for(this.removeTransformFromStyleList(),this.closeStyles(f),m=c.length,a=0;a<m;a+=1)c[a].closed=!0},CVShapeElement.prototype.renderInnerContent=function(){this.transformHelper.opacity=1,this.transformHelper._opMdf=!1,this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame),this.renderShape(this.transformHelper,this.shapesData,this.itemsData,!0)},CVShapeElement.prototype.renderShapeTransform=function(t,e){(t._opMdf||e.op._mdf||this._isFirstFrame)&&(e.opacity=t.opacity,e.opacity*=e.op.v,e._opMdf=!0)},CVShapeElement.prototype.drawLayer=function(){var t,e,r,i,s,a,n,o,h,l=this.stylesList.length,p=this.globalData.renderer,m=this.globalData.canvasContext;for(t=0;t<l;t+=1)if(("st"!==(o=(h=this.stylesList[t]).type)&&"gs"!==o||0!==h.wi)&&h.data._shouldRender&&0!==h.coOp&&0!==this.globalData.currentGlobalAlpha){for(p.save(),a=h.elements,"st"===o||"gs"===o?(m.strokeStyle="st"===o?h.co:h.grd,m.lineWidth=h.wi,m.lineCap=h.lc,m.lineJoin=h.lj,m.miterLimit=h.ml||0):m.fillStyle="fl"===o?h.co:h.grd,p.ctxOpacity(h.coOp),"st"!==o&&"gs"!==o&&m.beginPath(),p.ctxTransform(h.preTransforms.finalTransform.props),r=a.length,e=0;e<r;e+=1){for("st"!==o&&"gs"!==o||(m.beginPath(),h.da&&(m.setLineDash(h.da),m.lineDashOffset=h.do)),s=(n=a[e].trNodes).length,i=0;i<s;i+=1)"m"==n[i].t?m.moveTo(n[i].p[0],n[i].p[1]):"c"==n[i].t?m.bezierCurveTo(n[i].pts[0],n[i].pts[1],n[i].pts[2],n[i].pts[3],n[i].pts[4],n[i].pts[5]):m.closePath();"st"!==o&&"gs"!==o||(m.stroke(),h.da&&m.setLineDash(this.dashResetter))}"st"!==o&&"gs"!==o&&m.fill(h.r),p.restore()}},CVShapeElement.prototype.renderShape=function(t,e,r,i){var s,a;for(a=t,s=e.length-1;0<=s;s-=1)"tr"==e[s].ty?(a=r[s].transform,this.renderShapeTransform(t,a)):"sh"==e[s].ty||"el"==e[s].ty||"rc"==e[s].ty||"sr"==e[s].ty?this.renderPath(e[s],r[s]):"fl"==e[s].ty?this.renderFill(e[s],r[s],a):"st"==e[s].ty?this.renderStroke(e[s],r[s],a):"gf"==e[s].ty||"gs"==e[s].ty?this.renderGradientFill(e[s],r[s],a):"gr"==e[s].ty?this.renderShape(a,e[s].it,r[s].it):e[s].ty;i&&this.drawLayer()},CVShapeElement.prototype.renderStyledShape=function(t,e){if(this._isFirstFrame||e._mdf||t.transforms._mdf){var r,i,s,a=t.trNodes,n=e.paths,o=n._length;a.length=0;var h=t.transforms.finalTransform;for(s=0;s<o;s+=1){var l=n.shapes[s];if(l&&l.v){for(i=l._length,r=1;r<i;r+=1)1===r&&a.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),a.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[r],l.v[r])});1===i&&a.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),l.c&&i&&(a.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[0],l.v[0])}),a.push({t:"z"}))}}t.trNodes=a}},CVShapeElement.prototype.renderPath=function(t,e){if(!0!==t.hd&&t._shouldRender){var r,i=e.styledShapes.length;for(r=0;r<i;r+=1)this.renderStyledShape(e.styledShapes[r],e.sh)}},CVShapeElement.prototype.renderFill=function(t,e,r){var i=e.style;(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity)},CVShapeElement.prototype.renderGradientFill=function(t,e,r){var i=e.style;if(!i.grd||e.g._mdf||e.s._mdf||e.e._mdf||1!==t.t&&(e.h._mdf||e.a._mdf)){var s=this.globalData.canvasContext,a=e.s.v,n=e.e.v;if(1===t.t)f=s.createLinearGradient(a[0],a[1],n[0],n[1]);else var o=Math.sqrt(Math.pow(a[0]-n[0],2)+Math.pow(a[1]-n[1],2)),h=Math.atan2(n[1]-a[1],n[0]-a[0]),l=o*(1<=e.h.v?.99:e.h.v<=-1?-.99:e.h.v),p=Math.cos(h+e.a.v)*l+a[0],m=Math.sin(h+e.a.v)*l+a[1],f=s.createRadialGradient(p,m,0,a[0],a[1],o);var c,d=t.g.p,u=e.g.c,y=1;for(c=0;c<d;c+=1)e.g._hasOpacity&&e.g._collapsable&&(y=e.g.o[2*c+1]),f.addColorStop(u[4*c]/100,"rgba("+u[4*c+1]+","+u[4*c+2]+","+u[4*c+3]+","+y+")");i.grd=f}i.coOp=e.o.v*r.opacity},CVShapeElement.prototype.renderStroke=function(t,e,r){var i=e.style,s=e.d;s&&(s._mdf||this._isFirstFrame)&&(i.da=s.dashArray,i.do=s.dashoffset[0]),(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity),(e.w._mdf||this._isFirstFrame)&&(i.wi=e.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.itemsData.length=0},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVSolidElement),CVSolidElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVSolidElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVSolidElement.prototype.renderInnerContent=function(){var t=this.canvasContext;t.fillStyle=this.data.sc,t.fillRect(0,0,this.data.sw,this.data.sh)},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement],CVTextElement),CVTextElement.prototype.tHelper=createTag("canvas").getContext("2d"),CVTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=!1;t.fc?(e=!0,this.values.fill=this.buildColor(t.fc)):this.values.fill="rgba(0,0,0,0)",this.fill=e;var r=!1;t.sc&&(r=!0,this.values.stroke=this.buildColor(t.sc),this.values.sWidth=t.sw);var i,s,a=this.globalData.fontManager.getFontByName(t.f),n=t.l,o=this.mHelper;this.stroke=r,this.values.fValue=t.finalSize+"px "+this.globalData.fontManager.getFontByName(t.f).fFamily,s=t.finalText.length;var h,l,p,m,f,c,d,u,y,g,v=this.data.singleShape,b=t.tr/1e3*t.finalSize,E=0,x=0,S=!0,P=0;for(i=0;i<s;i+=1){for(l=(h=this.globalData.fontManager.getCharData(t.finalText[i],a.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily))&&h.data||{},o.reset(),v&&n[i].n&&(E=-b,x+=t.yOffset,x+=S?1:0,S=!1),d=(f=l.shapes?l.shapes[0].it:[]).length,o.scale(t.finalSize/100,t.finalSize/100),v&&this.applyTextPropertiesToMatrix(t,o,n[i].line,E,x),y=createSizedArray(d),c=0;c<d;c+=1){for(m=f[c].ks.k.i.length,u=f[c].ks.k,g=[],p=1;p<m;p+=1)1==p&&g.push(o.applyToX(u.v[0][0],u.v[0][1],0),o.applyToY(u.v[0][0],u.v[0][1],0)),g.push(o.applyToX(u.o[p-1][0],u.o[p-1][1],0),o.applyToY(u.o[p-1][0],u.o[p-1][1],0),o.applyToX(u.i[p][0],u.i[p][1],0),o.applyToY(u.i[p][0],u.i[p][1],0),o.applyToX(u.v[p][0],u.v[p][1],0),o.applyToY(u.v[p][0],u.v[p][1],0));g.push(o.applyToX(u.o[p-1][0],u.o[p-1][1],0),o.applyToY(u.o[p-1][0],u.o[p-1][1],0),o.applyToX(u.i[0][0],u.i[0][1],0),o.applyToY(u.i[0][0],u.i[0][1],0),o.applyToX(u.v[0][0],u.v[0][1],0),o.applyToY(u.v[0][0],u.v[0][1],0)),y[c]=g}v&&(E+=n[i].l,E+=b),this.textSpans[P]?this.textSpans[P].elem=y:this.textSpans[P]={elem:y},P+=1}},CVTextElement.prototype.renderInnerContent=function(){var t,e,r,i,s,a,n=this.canvasContext;this.finalTransform.mat.props;n.font=this.values.fValue,n.lineCap="butt",n.lineJoin="miter",n.miterLimit=4,this.data.singleShape||this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);var o,h=this.textAnimator.renderedLetters,l=this.textProperty.currentData.l;e=l.length;var p,m,f=null,c=null,d=null;for(t=0;t<e;t+=1)if(!l[t].n){if((o=h[t])&&(this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(o.p),this.globalData.renderer.ctxOpacity(o.o)),this.fill){for(o&&o.fc?f!==o.fc&&(f=o.fc,n.fillStyle=o.fc):f!==this.values.fill&&(f=this.values.fill,n.fillStyle=this.values.fill),i=(p=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(a=(m=p[r]).length,this.globalData.canvasContext.moveTo(m[0],m[1]),s=2;s<a;s+=6)this.globalData.canvasContext.bezierCurveTo(m[s],m[s+1],m[s+2],m[s+3],m[s+4],m[s+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.fill()}if(this.stroke){for(o&&o.sw?d!==o.sw&&(d=o.sw,n.lineWidth=o.sw):d!==this.values.sWidth&&(d=this.values.sWidth,n.lineWidth=this.values.sWidth),o&&o.sc?c!==o.sc&&(c=o.sc,n.strokeStyle=o.sc):c!==this.values.stroke&&(c=this.values.stroke,n.strokeStyle=this.values.stroke),i=(p=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(a=(m=p[r]).length,this.globalData.canvasContext.moveTo(m[0],m[1]),s=2;s<a;s+=6)this.globalData.canvasContext.bezierCurveTo(m[s],m[s+1],m[s+2],m[s+3],m[s+4],m[s+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.stroke()}o&&this.globalData.renderer.restore()}},CVEffects.prototype.renderFrame=function(){},HBaseElement.prototype={checkBlendMode:function(){},initRendererElement:function(){this.baseElement=createTag(this.data.tg||"div"),this.data.hasMask?(this.svgElement=createNS("svg"),this.layerElement=createNS("g"),this.maskedElement=this.layerElement,this.svgElement.appendChild(this.layerElement),this.baseElement.appendChild(this.svgElement)):this.layerElement=this.baseElement,styleDiv(this.baseElement)},createContainerElements:function(){this.renderableEffectsManager=new CVEffects(this),this.transformedElement=this.baseElement,this.maskedElement=this.layerElement,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0!==this.data.bm&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&(this.transformedElement.style.transform=this.transformedElement.style.webkitTransform=this.finalTransform.mat.toCSS()),this.finalTransform._opMdf&&(this.transformedElement.style.opacity=this.finalTransform.mProp.o.v)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},destroy:function(){this.layerElement=null,this.transformedElement=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData)},addEffects:function(){},setMatte:function(){}},HBaseElement.prototype.getBaseElement=SVGBaseElement.prototype.getBaseElement,HBaseElement.prototype.destroyBaseElement=HBaseElement.prototype.destroy,HBaseElement.prototype.buildElementParenting=HybridRenderer.prototype.buildElementParenting,extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],HSolidElement),HSolidElement.prototype.createContent=function(){var t;this.data.hasMask?((t=createNS("rect")).setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.svgElement.setAttribute("width",this.data.sw),this.svgElement.setAttribute("height",this.data.sh)):((t=createTag("div")).style.width=this.data.sw+"px",t.style.height=this.data.sh+"px",t.style.backgroundColor=this.data.sc),this.layerElement.appendChild(t)},extendPrototype([HybridRenderer,ICompElement,HBaseElement],HCompElement),HCompElement.prototype._createBaseContainerElements=HCompElement.prototype.createContainerElements,HCompElement.prototype.createContainerElements=function(){this._createBaseContainerElements(),this.data.hasMask?(this.svgElement.setAttribute("width",this.data.w),this.svgElement.setAttribute("height",this.data.h),this.transformedElement=this.baseElement):this.transformedElement=this.layerElement},HCompElement.prototype.addTo3dContainer=function(t,e){for(var r,i=0;i<e;)this.elements[i]&&this.elements[i].getBaseElement&&(r=this.elements[i].getBaseElement()),i+=1;r?this.layerElement.insertBefore(t,r):this.layerElement.appendChild(t)},extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement],HShapeElement),HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderInnerContent,HShapeElement.prototype.createContent=function(){var t;if(this.baseElement.style.fontSize=0,this.data.hasMask)this.layerElement.appendChild(this.shapesContainer),t=this.svgElement;else{t=createNS("svg");var e=this.comp.data?this.comp.data:this.globalData.compSize;t.setAttribute("width",e.w),t.setAttribute("height",e.h),t.appendChild(this.shapesContainer),this.layerElement.appendChild(t)}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,0,[],!0),this.filterUniqueShapes(),this.shapeCont=t},HShapeElement.prototype.getTransformedPoint=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e=t[r].mProps.v.applyToPointArray(e[0],e[1],0);return e},HShapeElement.prototype.calculateShapeBoundingBox=function(t,e){var r,i,s,a,n,o=t.sh.v,h=t.transformers,l=o._length;if(!(l<=1)){for(r=0;r<l-1;r+=1)i=this.getTransformedPoint(h,o.v[r]),s=this.getTransformedPoint(h,o.o[r]),a=this.getTransformedPoint(h,o.i[r+1]),n=this.getTransformedPoint(h,o.v[r+1]),this.checkBounds(i,s,a,n,e);o.c&&(i=this.getTransformedPoint(h,o.v[r]),s=this.getTransformedPoint(h,o.o[r]),a=this.getTransformedPoint(h,o.i[0]),n=this.getTransformedPoint(h,o.v[0]),this.checkBounds(i,s,a,n,e))}},HShapeElement.prototype.checkBounds=function(t,e,r,i,s){this.getBoundsOfCurve(t,e,r,i);var a=this.shapeBoundingBox;s.x=bm_min(a.left,s.x),s.xMax=bm_max(a.right,s.xMax),s.y=bm_min(a.top,s.y),s.yMax=bm_max(a.bottom,s.yMax)},HShapeElement.prototype.shapeBoundingBox={left:0,right:0,top:0,bottom:0},HShapeElement.prototype.tempBoundingBox={x:0,xMax:0,y:0,yMax:0,width:0,height:0},HShapeElement.prototype.getBoundsOfCurve=function(t,e,r,i){for(var s,a,n,o,h,l,p,m=[[t[0],i[0]],[t[1],i[1]]],f=0;f<2;++f)if(a=6*t[f]-12*e[f]+6*r[f],s=-3*t[f]+9*e[f]-9*r[f]+3*i[f],n=3*e[f]-3*t[f],a|=0,n|=0,0!==(s|=0))(h=a*a-4*n*s)<0||(0<(l=(-a+bm_sqrt(h))/(2*s))&&l<1&&m[f].push(this.calculateF(l,t,e,r,i,f)),0<(p=(-a-bm_sqrt(h))/(2*s))&&p<1&&m[f].push(this.calculateF(p,t,e,r,i,f)));else{if(0===a)continue;0<(o=-n/a)&&o<1&&m[f].push(this.calculateF(o,t,e,r,i,f))}this.shapeBoundingBox.left=bm_min.apply(null,m[0]),this.shapeBoundingBox.top=bm_min.apply(null,m[1]),this.shapeBoundingBox.right=bm_max.apply(null,m[0]),this.shapeBoundingBox.bottom=bm_max.apply(null,m[1])},HShapeElement.prototype.calculateF=function(t,e,r,i,s,a){return bm_pow(1-t,3)*e[a]+3*bm_pow(1-t,2)*t*r[a]+3*(1-t)*bm_pow(t,2)*i[a]+bm_pow(t,3)*s[a]},HShapeElement.prototype.calculateBoundingBox=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]&&t[r].sh?this.calculateShapeBoundingBox(t[r],e):t[r]&&t[r].it&&this.calculateBoundingBox(t[r].it,e)},HShapeElement.prototype.currentBoxContains=function(t){return this.currentBBox.x<=t.x&&this.currentBBox.y<=t.y&&this.currentBBox.width+this.currentBBox.x>=t.x+t.width&&this.currentBBox.height+this.currentBBox.y>=t.y+t.height},HShapeElement.prototype.renderInnerContent=function(){if(this._renderShapeFrame(),!this.hidden&&(this._isFirstFrame||this._mdf)){var t=this.tempBoundingBox,e=999999;if(t.x=e,t.xMax=-e,t.y=e,t.yMax=-e,this.calculateBoundingBox(this.itemsData,t),t.width=t.xMax<t.x?0:t.xMax-t.x,t.height=t.yMax<t.y?0:t.yMax-t.y,this.currentBoxContains(t))return;var r=!1;this.currentBBox.w!==t.width&&(this.currentBBox.w=t.width,this.shapeCont.setAttribute("width",t.width),r=!0),this.currentBBox.h!==t.height&&(this.currentBBox.h=t.height,this.shapeCont.setAttribute("height",t.height),r=!0),(r||this.currentBBox.x!==t.x||this.currentBBox.y!==t.y)&&(this.currentBBox.w=t.width,this.currentBBox.h=t.height,this.currentBBox.x=t.x,this.currentBBox.y=t.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),this.shapeCont.style.transform=this.shapeCont.style.webkitTransform="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)")}},extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],HTextElement),HTextElement.prototype.createContent=function(){if(this.isMasked=this.checkMasks(),this.isMasked){this.renderType="svg",this.compW=this.comp.data.w,this.compH=this.comp.data.h,this.svgElement.setAttribute("width",this.compW),this.svgElement.setAttribute("height",this.compH);var t=createNS("g");this.maskedElement.appendChild(t),this.innerElem=t}else this.renderType="html",this.innerElem=this.layerElement;this.checkParenting()},HTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=this.innerElem.style;e.color=e.fill=t.fc?this.buildColor(t.fc):"rgba(0,0,0,0)",t.sc&&(e.stroke=this.buildColor(t.sc),e.strokeWidth=t.sw+"px");var r,i,s=this.globalData.fontManager.getFontByName(t.f);if(!this.globalData.fontManager.chars)if(e.fontSize=t.finalSize+"px",e.lineHeight=t.finalSize+"px",s.fClass)this.innerElem.className=s.fClass;else{e.fontFamily=s.fFamily;var a=t.fWeight,n=t.fStyle;e.fontStyle=n,e.fontWeight=a}var o,h,l,p=t.l;i=p.length;var m,f=this.mHelper,c="",d=0;for(r=0;r<i;r+=1){if(this.globalData.fontManager.chars?(this.textPaths[d]?o=this.textPaths[d]:((o=createNS("path")).setAttribute("stroke-linecap","butt"),o.setAttribute("stroke-linejoin","round"),o.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[d]?l=(h=this.textSpans[d]).children[0]:((h=createTag("div")).style.lineHeight=0,(l=createNS("svg")).appendChild(o),styleDiv(h)))):this.isMasked?o=this.textPaths[d]?this.textPaths[d]:createNS("text"):this.textSpans[d]?(h=this.textSpans[d],o=this.textPaths[d]):(styleDiv(h=createTag("span")),styleDiv(o=createTag("span")),h.appendChild(o)),this.globalData.fontManager.chars){var u,y=this.globalData.fontManager.getCharData(t.finalText[r],s.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily);if(u=y?y.data:null,f.reset(),u&&u.shapes&&(m=u.shapes[0].it,f.scale(t.finalSize/100,t.finalSize/100),c=this.createPathShape(f,m),o.setAttribute("d",c)),this.isMasked)this.innerElem.appendChild(o);else{if(this.innerElem.appendChild(h),u&&u.shapes){document.body.appendChild(l);var g=l.getBBox();l.setAttribute("width",g.width+2),l.setAttribute("height",g.height+2),l.setAttribute("viewBox",g.x-1+" "+(g.y-1)+" "+(g.width+2)+" "+(g.height+2)),l.style.transform=l.style.webkitTransform="translate("+(g.x-1)+"px,"+(g.y-1)+"px)",p[r].yOffset=g.y-1}else l.setAttribute("width",1),l.setAttribute("height",1);h.appendChild(l)}}else o.textContent=p[r].val,o.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked?this.innerElem.appendChild(o):(this.innerElem.appendChild(h),o.style.transform=o.style.webkitTransform="translate3d(0,"+-t.finalSize/1.2+"px,0)");this.isMasked?this.textSpans[d]=o:this.textSpans[d]=h,this.textSpans[d].style.display="block",this.textPaths[d]=o,d+=1}for(;d<this.textSpans.length;)this.textSpans[d].style.display="none",d+=1},HTextElement.prototype.renderInnerContent=function(){if(this.data.singleShape){if(!this._isFirstFrame&&!this.lettersChangedFlag)return;this.isMasked&&this.finalTransform._matMdf&&(this.svgElement.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),this.svgElement.style.transform=this.svgElement.style.webkitTransform="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)")}if(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag){var t,e,r,i,s,a=0,n=this.textAnimator.renderedLetters,o=this.textProperty.currentData.l;for(e=o.length,t=0;t<e;t+=1)o[t].n?a+=1:(i=this.textSpans[t],s=this.textPaths[t],r=n[a],a+=1,r._mdf.m&&(this.isMasked?i.setAttribute("transform",r.m):i.style.transform=i.style.webkitTransform=r.m),i.style.opacity=r.o,r.sw&&r._mdf.sw&&s.setAttribute("stroke-width",r.sw),r.sc&&r._mdf.sc&&s.setAttribute("stroke",r.sc),r.fc&&r._mdf.fc&&(s.setAttribute("fill",r.fc),s.style.color=r.fc));if(this.innerElem.getBBox&&!this.hidden&&(this._isFirstFrame||this._mdf)){var h=this.innerElem.getBBox();this.currentBBox.w!==h.width&&(this.currentBBox.w=h.width,this.svgElement.setAttribute("width",h.width)),this.currentBBox.h!==h.height&&(this.currentBBox.h=h.height,this.svgElement.setAttribute("height",h.height));this.currentBBox.w===h.width+2&&this.currentBBox.h===h.height+2&&this.currentBBox.x===h.x-1&&this.currentBBox.y===h.y-1||(this.currentBBox.w=h.width+2,this.currentBBox.h=h.height+2,this.currentBBox.x=h.x-1,this.currentBBox.y=h.y-1,this.svgElement.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),this.svgElement.style.transform=this.svgElement.style.webkitTransform="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)")}}},extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement],HImageElement),HImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData),e=new Image;this.data.hasMask?(this.imageElem=createNS("image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.imageElem),this.baseElement.setAttribute("width",this.assetData.w),this.baseElement.setAttribute("height",this.assetData.h)):this.layerElement.appendChild(e),e.src=t,this.data.ln&&this.baseElement.setAttribute("id",this.data.ln)},extendPrototype([BaseElement,FrameElement,HierarchyElement],HCameraElement),HCameraElement.prototype.setup=function(){var t,e,r=this.comp.threeDElements.length;for(t=0;t<r;t+=1)"3d"===(e=this.comp.threeDElements[t]).type&&(e.perspectiveElem.style.perspective=e.perspectiveElem.style.webkitPerspective=this.pe.v+"px",e.container.style.transformOrigin=e.container.style.mozTransformOrigin=e.container.style.webkitTransformOrigin="0px 0px 0px",e.perspectiveElem.style.transform=e.perspectiveElem.style.webkitTransform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)")},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var t,e,r=this._isFirstFrame;if(this.hierarchy)for(e=this.hierarchy.length,t=0;t<e;t+=1)r=this.hierarchy[t].finalTransform.mProp._mdf||r;if(r||this.pe._mdf||this.p&&this.p._mdf||this.px&&(this.px._mdf||this.py._mdf||this.pz._mdf)||this.rx._mdf||this.ry._mdf||this.rz._mdf||this.or._mdf||this.a&&this.a._mdf){if(this.mat.reset(),this.hierarchy)for(t=e=this.hierarchy.length-1;0<=t;t-=1){var i=this.hierarchy[t].finalTransform.mProp;this.mat.translate(-i.p.v[0],-i.p.v[1],i.p.v[2]),this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]),this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),this.mat.scale(1/i.s.v[0],1/i.s.v[1],1/i.s.v[2]),this.mat.translate(i.a.v[0],i.a.v[1],i.a.v[2])}if(this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var s;s=this.p?[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]]:[this.px.v-this.a.v[0],this.py.v-this.a.v[1],this.pz.v-this.a.v[2]];var a=Math.sqrt(Math.pow(s[0],2)+Math.pow(s[1],2)+Math.pow(s[2],2)),n=[s[0]/a,s[1]/a,s[2]/a],o=Math.sqrt(n[2]*n[2]+n[0]*n[0]),h=Math.atan2(n[1],o),l=Math.atan2(n[0],-n[2]);this.mat.rotateY(l).rotateX(-h)}this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v);var p=!this._prevMat.equals(this.mat);if((p||this.pe._mdf)&&this.comp.threeDElements){var m;for(e=this.comp.threeDElements.length,t=0;t<e;t+=1)"3d"===(m=this.comp.threeDElements[t]).type&&(p&&(m.container.style.transform=m.container.style.webkitTransform=this.mat.toCSS()),this.pe._mdf&&(m.perspectiveElem.style.perspective=m.perspectiveElem.style.webkitPerspective=this.pe.v+"px"));this.mat.clone(this._prevMat)}}this._isFirstFrame=!1},HCameraElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},HCameraElement.prototype.destroy=function(){},HCameraElement.prototype.getBaseElement=function(){return null},HEffects.prototype.renderFrame=function(){};var animationManager=function(){var t={},s=[],i=0,a=0,n=0,o=!0,h=!1;function r(t){for(var e=0,r=t.target;e<a;)s[e].animation===r&&(s.splice(e,1),e-=1,a-=1,r.isPaused||m()),e+=1}function l(t,e){if(!t)return null;for(var r=0;r<a;){if(s[r].elem==t&&null!==s[r].elem)return s[r].animation;r+=1}var i=new AnimationItem;return f(i,t),i.setData(t,e),i}function p(){n+=1,d()}function m(){n-=1}function f(t,e){t.addEventListener("destroy",r),t.addEventListener("_active",p),t.addEventListener("_idle",m),s.push({elem:e,animation:t}),a+=1}function c(t){var e,r=t-i;for(e=0;e<a;e+=1)s[e].animation.advanceTime(r);i=t,n&&!h?window.requestAnimationFrame(c):o=!0}function e(t){i=t,window.requestAnimationFrame(c)}function d(){!h&&n&&o&&(window.requestAnimationFrame(e),o=!1)}return t.registerAnimation=l,t.loadAnimation=function(t){var e=new AnimationItem;return f(e,null),e.setParams(t),e},t.setSpeed=function(t,e){var r;for(r=0;r<a;r+=1)s[r].animation.setSpeed(t,e)},t.setDirection=function(t,e){var r;for(r=0;r<a;r+=1)s[r].animation.setDirection(t,e)},t.play=function(t){var e;for(e=0;e<a;e+=1)s[e].animation.play(t)},t.pause=function(t){var e;for(e=0;e<a;e+=1)s[e].animation.pause(t)},t.stop=function(t){var e;for(e=0;e<a;e+=1)s[e].animation.stop(t)},t.togglePause=function(t){var e;for(e=0;e<a;e+=1)s[e].animation.togglePause(t)},t.searchAnimations=function(t,e,r){var i,s=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),a=s.length;for(i=0;i<a;i+=1)r&&s[i].setAttribute("data-bm-type",r),l(s[i],t);if(e&&0===a){r||(r="svg");var n=document.getElementsByTagName("body")[0];n.innerHTML="";var o=createTag("div");o.style.width="100%",o.style.height="100%",o.setAttribute("data-bm-type",r),n.appendChild(o),l(o,t)}},t.resize=function(){var t;for(t=0;t<a;t+=1)s[t].animation.resize()},t.goToAndStop=function(t,e,r){var i;for(i=0;i<a;i+=1)s[i].animation.goToAndStop(t,e,r)},t.destroy=function(t){var e;for(e=a-1;0<=e;e-=1)s[e].animation.destroy(t)},t.freeze=function(){h=!0},t.unfreeze=function(){h=!1,d()},t.getRegisteredAnimations=function(){var t,e=s.length,r=[];for(t=0;t<e;t+=1)r.push(s[t].animation);return r},t}(),AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=createElementID(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.subframeEnabled=subframeEnabled,this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=ProjectInterface(),this.imagePreloader=new ImagePreloader};extendPrototype([BaseEvent],AnimationItem),AnimationItem.prototype.setParams=function(t){t.context&&(this.context=t.context),(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e=t.animType?t.animType:t.renderer?t.renderer:"svg";switch(e){case"canvas":this.renderer=new CanvasRenderer(this,t.rendererSettings);break;case"svg":this.renderer=new SVGRenderer(this,t.rendererSettings);break;default:this.renderer=new HybridRenderer(this,t.rendererSettings)}this.renderer.setProjectInterface(this.projectInterface),this.animType=e,""===t.loop||null===t.loop||(!1===t.loop?this.loop=!1:!0===t.loop?this.loop=!0:this.loop=parseInt(t.loop)),this.autoplay=!("autoplay"in t)||t.autoplay,this.name=t.name?t.name:"",this.autoloadSegments=!t.hasOwnProperty("autoloadSegments")||t.autoloadSegments,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.animationData?this.configAnimation(t.animationData):t.path&&(-1!==t.path.lastIndexOf("\\")?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),assetLoader.load(t.path,this.configAnimation.bind(this),function(){this.trigger("data_failed")}.bind(this)))},AnimationItem.prototype.setData=function(t,e){var r={wrapper:t,animationData:e?"object"==typeof e?e:JSON.parse(e):null},i=t.attributes;r.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",r.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:"canvas";var s=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";""===s||(r.loop="false"!==s&&("true"===s||parseInt(s)));var a=i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:!i.getNamedItem("bm-autoplay")||i.getNamedItem("bm-autoplay").value;r.autoplay="false"!==a,r.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"","false"===(i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"")&&(r.prerender=!1),this.setParams(r)},AnimationItem.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e,r,i=this.animationData.layers,s=i.length,a=t.layers,n=a.length;for(r=0;r<n;r+=1)for(e=0;e<s;){if(i[e].id==a[r].id){i[e]=a[r];break}e+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(s=t.assets.length,e=0;e<s;e+=1)this.animationData.assets.push(t.assets[e]);this.animationData.__complete=!1,dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.renderer.includeLayers(t.layers),expressionsPlugin&&expressionsPlugin.initExpressions(this),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||0===t.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.totalFrames);var e=t.shift();this.timeCompleted=e.time*this.frameRate;var r=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,assetLoader.load(r,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},AnimationItem.prototype.loadSegments=function(){this.animationData.segments||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},AnimationItem.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},AnimationItem.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},AnimationItem.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded()}catch(t){this.triggerConfigError(t)}},AnimationItem.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.loaded()?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},AnimationItem.prototype.checkLoaded=function(){this.isLoaded||!this.renderer.globalData.fontManager.loaded()||!this.imagePreloader.loaded()&&"canvas"===this.renderer.rendererType||(this.isLoaded=!0,dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),expressionsPlugin&&expressionsPlugin.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play())},AnimationItem.prototype.resize=function(){this.renderer.updateContainerSize()},AnimationItem.prototype.setSubframe=function(t){this.subframeEnabled=!!t},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.subframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame()},AnimationItem.prototype.renderFrame=function(){if(!1!==this.isLoaded)try{this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},AnimationItem.prototype.play=function(t){t&&this.name!=t||!0===this.isPaused&&(this.isPaused=!1,this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(t){t&&this.name!=t||!1===this.isPaused&&(this.isPaused=!0,this._idle=!0,this.trigger("_idle"))},AnimationItem.prototype.togglePause=function(t){t&&this.name!=t||(!0===this.isPaused?this.play():this.pause())},AnimationItem.prototype.stop=function(t){t&&this.name!=t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},AnimationItem.prototype.goToAndStop=function(t,e,r){r&&this.name!=r||(e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier),this.pause())},AnimationItem.prototype.goToAndPlay=function(t,e,r){this.goToAndStop(t,e,r),this.play()},AnimationItem.prototype.advanceTime=function(t){if(!0!==this.isPaused&&!1!==this.isLoaded){var e=this.currentRawFrame+t*this.frameModifier,r=!1;e>=this.totalFrames-1&&0<this.frameModifier?this.loop&&this.playCount!==this.loop?e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(r=!0,e=this.totalFrames-1):e<0?this.checkSegments(e%this.totalFrames)||(!this.loop||this.playCount--<=0&&!0!==this.loop?(r=!0,e=0):(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0)):this.setCurrentRawFrameValue(e),r&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},AnimationItem.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(0<this.frameModifier&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.timeCompleted=this.totalFrames=t[0]-t[1],this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.timeCompleted=this.totalFrames=t[1]-t[0],this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(t,e){var r=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?r=t:this.currentRawFrame+this.firstFrame>e&&(r=e-t)),this.firstFrame=t,this.timeCompleted=this.totalFrames=e-t,-1!==r&&this.goToAndStop(r,!0)},AnimationItem.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),"object"==typeof t[0]){var r,i=t.length;for(r=0;r<i;r+=1)this.segments.push(t[r])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},AnimationItem.prototype.checkSegments=function(t){return!!this.segments.length&&(this.adjustSegment(this.segments.shift(),t),!0)},AnimationItem.prototype.destroy=function(t){t&&this.name!=t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=this.onLoopComplete=this.onComplete=this.onSegmentStart=this.onDestroy=null,this.renderer=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},AnimationItem.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var r=t.p;-1!==r.indexOf("images/")&&(r=r.split("/")[1]),e=this.assetsPath+r}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},AnimationItem.prototype.getAssetData=function(t){for(var e=0,r=this.assets.length;e<r;){if(t==this.assets[e].id)return this.assets[e];e+=1}},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},AnimationItem.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"loopComplete":this.triggerEvent(t,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new BMCompleteEvent(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new BMDestroyEvent(t,this));break;default:this.triggerEvent(t)}"enterFrame"===t&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===t&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),"complete"===t&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(t,this.frameMult)),"segmentStart"===t&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),"destroy"===t&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},AnimationItem.prototype.triggerRenderFrameError=function(t){var e=new BMRenderFrameErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},AnimationItem.prototype.triggerConfigError=function(t){var e=new BMConfigErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var Expressions=(IW={},IW.initExpressions=function(t){var e=0,r=[];function i(){var t,e=r.length;for(t=0;t<e;t+=1)r[t].release();r.length=0}t.renderer.compInterface=CompExpressionInterface(t.renderer),t.renderer.globalData.projectInterface.registerComposition(t.renderer),t.renderer.globalData.pushExpression=function(){e+=1},t.renderer.globalData.popExpression=function(){0==(e-=1)&&i()},t.renderer.globalData.registerExpressionProperty=function(t){-1===r.indexOf(t)&&r.push(t)}},IW),IW;expressionsPlugin=Expressions;var ExpressionManager=function(){var ob={},Math=BMMath,window=null,document=null;function $bm_isInstanceOfArray(t){return t.constructor===Array||t.constructor===Float32Array}function isNumerable(t,e){return"number"===t||"boolean"===t||"string"===t||e instanceof Number}function $bm_neg(t){var e=typeof t;if("number"===e||"boolean"===e||t instanceof Number)return-t;if($bm_isInstanceOfArray(t)){var r,i=t.length,s=[];for(r=0;r<i;r+=1)s[r]=-t[r];return s}return t.propType?t.v:void 0}var easeInBez=BezierFactory.getBezierEasing(.333,0,.833,.833,"easeIn").get,easeOutBez=BezierFactory.getBezierEasing(.167,.167,.667,1,"easeOut").get,easeInOutBez=BezierFactory.getBezierEasing(.33,0,.667,1,"easeInOut").get;function sum(t,e){var r=typeof t,i=typeof e;if("string"===r||"string"===i)return t+e;if(isNumerable(r,t)&&isNumerable(i,e))return t+e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]=t[0]+e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t+e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]+e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}var add=sum;function sub(t,e){var r=typeof t,i=typeof e;if(isNumerable(r,t)&&isNumerable(i,e))return"string"===r&&(t=parseInt(t)),"string"===i&&(e=parseInt(e)),t-e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]=t[0]-e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t-e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]-e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}function mul(t,e){var r,i,s,a=typeof t,n=typeof e;if(isNumerable(a,t)&&isNumerable(n,e))return t*e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]*e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t*e[i];return r}return 0}function div(t,e){var r,i,s,a=typeof t,n=typeof e;if(isNumerable(a,t)&&isNumerable(n,e))return t/e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]/e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t/e[i];return r}return 0}function mod(t,e){return"string"==typeof t&&(t=parseInt(t)),"string"==typeof e&&(e=parseInt(e)),t%e}var $bm_sum=sum,$bm_sub=sub,$bm_mul=mul,$bm_div=div,$bm_mod=mod;function clamp(t,e,r){if(r<e){var i=r;r=e,e=i}return Math.min(Math.max(t,e),r)}function radiansToDegrees(t){return t/degToRads}var radians_to_degrees=radiansToDegrees;function degreesToRadians(t){return t*degToRads}var degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];function length(t,e){if("number"==typeof t||t instanceof Number)return e=e||0,Math.abs(t-e);e||(e=helperLengthArray);var r,i=Math.min(t.length,e.length),s=0;for(r=0;r<i;r+=1)s+=Math.pow(e[r]-t[r],2);return Math.sqrt(s)}function normalize(t){return div(t,length(t))}function rgbToHsl(t){var e,r,i=t[0],s=t[1],a=t[2],n=Math.max(i,s,a),o=Math.min(i,s,a),h=(n+o)/2;if(n==o)e=r=0;else{var l=n-o;switch(r=.5<h?l/(2-n-o):l/(n+o),n){case i:e=(s-a)/l+(s<a?6:0);break;case s:e=(a-i)/l+2;break;case a:e=(i-s)/l+4}e/=6}return[e,r,h,t[3]]}function hue2rgb(t,e,r){return r<0&&(r+=1),1<r&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function hslToRgb(t){var e,r,i,s=t[0],a=t[1],n=t[2];if(0===a)e=r=i=n;else{var o=n<.5?n*(1+a):n+a-n*a,h=2*n-o;e=hue2rgb(h,o,s+1/3),r=hue2rgb(h,o,s),i=hue2rgb(h,o,s-1/3)}return[e,r,i,t[3]]}function linear(t,e,r,i,s){if(void 0!==i&&void 0!==s||(i=e,s=r,e=0,r=1),r<e){var a=r;r=e,e=a}if(t<=e)return i;if(r<=t)return s;var n=r===e?0:(t-e)/(r-e);if(!i.length)return i+(s-i)*n;var o,h=i.length,l=createTypedArray("float32",h);for(o=0;o<h;o+=1)l[o]=i[o]+(s[o]-i[o])*n;return l}function random(t,e){if(void 0===e&&(void 0===t?(t=0,e=1):(e=t,t=void 0)),e.length){var r,i=e.length;t||(t=createTypedArray("float32",i));var s=createTypedArray("float32",i),a=BMMath.random();for(r=0;r<i;r+=1)s[r]=t[r]+a*(e[r]-t[r]);return s}return void 0===t&&(t=0),t+BMMath.random()*(e-t)}function createPath(t,e,r,i){var s,a=t.length,n=shape_pool.newElement();n.setPathData(!!i,a);var o,h,l=[0,0];for(s=0;s<a;s+=1)o=e&&e[s]?e[s]:l,h=r&&r[s]?r[s]:l,n.setTripleAt(t[s][0],t[s][1],h[0]+t[s][0],h[1]+t[s][1],o[0]+t[s][0],o[1]+t[s][1],s,!0);return n}function initiateExpression(elem,data,property){var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=-1!==val.indexOf("random"),elemType=elem.data.ty,transform,$bm_transform,content,effect,thisProperty=property;thisProperty.valueAtTime=thisProperty.getValueAtTime,Object.defineProperty(thisProperty,"value",{get:function(){return thisProperty.v}}),elem.comp.frameDuration=1/elem.comp.globalData.frameRate,elem.comp.displayStartTime=0;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,name=elem.data.nm,loopIn,loop_in,loopOut,loop_out,smooth,toWorld,fromWorld,fromComp,toComp,fromCompToSurface,position,rotation,anchorPoint,scale,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,__expression_functions=[],scoped_bm_rt;if(data.xf){var i,len=data.xf.length;for(i=0;i<len;i+=1)__expression_functions[i]=eval("(function(){ return "+data.xf[i]+"}())")}var expression_function=eval("[function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}]")[0],numKeys=property.kf?data.k.length:0,active=!this.data||!0!==this.data.hd,wiggle=function(t,e){var r,i,s=this.pv.length?this.pv.length:1,a=createTypedArray("float32",s);var n=Math.floor(5*time);for(i=r=0;r<n;){for(i=0;i<s;i+=1)a[i]+=-e+2*e*BMMath.random();r+=1}var o=5*time,h=o-Math.floor(o),l=createTypedArray("float32",s);if(1<s){for(i=0;i<s;i+=1)l[i]=this.pv[i]+a[i]+(-e+2*e*BMMath.random())*h;return l}return this.pv+a[0]+(-e+2*e*BMMath.random())*h}.bind(this);function loopInDuration(t,e){return loopIn(t,e,!0)}function loopOutDuration(t,e){return loopOut(t,e,!0)}thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut),thisProperty.smooth&&(smooth=thisProperty.smooth.bind(thisProperty)),this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),time,velocity,value,text,textIndex,textTotal,selectorValue;function lookAt(t,e){var r=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],i=Math.atan2(r[0],Math.sqrt(r[1]*r[1]+r[2]*r[2]))/degToRads;return[-Math.atan2(r[1],r[2])/degToRads,i,0]}function easeOut(t,e,r,i,s){return applyEase(easeOutBez,t,e,r,i,s)}function easeIn(t,e,r,i,s){return applyEase(easeInBez,t,e,r,i,s)}function ease(t,e,r,i,s){return applyEase(easeInOutBez,t,e,r,i,s)}function applyEase(t,e,r,i,s,a){void 0===s?(s=r,a=i):e=(e-r)/(i-r);var n=t(e=1<e?1:e<0?0:e);if($bm_isInstanceOfArray(s)){var o,h=s.length,l=createTypedArray("float32",h);for(o=0;o<h;o+=1)l[o]=(a[o]-s[o])*n+s[o];return l}return(a-s)*n+s}function nearestKey(t){var e,r,i,s=data.k.length;if(data.k.length&&"number"!=typeof data.k[0])if(r=-1,(t*=elem.comp.globalData.frameRate)<data.k[0].t)r=1,i=data.k[0].t;else{for(e=0;e<s-1;e+=1){if(t===data.k[e].t){r=e+1,i=data.k[e].t;break}if(t>data.k[e].t&&t<data.k[e+1].t){i=t-data.k[e].t>data.k[e+1].t-t?(r=e+2,data.k[e+1].t):(r=e+1,data.k[e].t);break}}-1===r&&(r=e+1,i=data.k[e].t)}else i=r=0;var a={};return a.index=r,a.time=i/elem.comp.globalData.frameRate,a}function key(t){var e,r,i;if(!data.k.length||"number"==typeof data.k[0])throw new Error("The property has no keyframe at index "+t);t-=1,e={time:data.k[t].t/elem.comp.globalData.frameRate,value:[]};var s=data.k[t].hasOwnProperty("s")?data.k[t].s:data.k[t-1].e;for(i=s.length,r=0;r<i;r+=1)e[r]=s[r],e.value[r]=s[r];return e}function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}function timeToFrames(t,e){return t||0===t||(t=time),e||(e=elem.comp.globalData.frameRate),t*e}function seedRandom(t){BMMath.seedrandom(randSeed+t)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function substring(t,e){return"string"==typeof value?void 0===e?value.substring(t):value.substring(t,e):""}function substr(t,e){return"string"==typeof value?void 0===e?value.substr(t):value.substr(t,e):""}function posterizeTime(t){time=0===t?0:Math.floor(time*t)/t,value=valueAtTime(time)}var index=elem.data.ind,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random()),globalData=elem.globalData;function executeExpression(t){return value=t,_needsRandom&&seedRandom(randSeed),this.frameExpressionId===elem.globalData.frameId&&"textSelector"!==this.propType?value:("textSelector"===this.propType&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(text=elem.layerInterface.text,thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),toComp=thisLayer.toComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),($bm_transform=transform)&&(anchorPoint=transform.anchorPoint)),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),(hasParent=!(!elem.hierarchy||!elem.hierarchy.length))&&!parent&&(parent=elem.hierarchy[0].layerInterface),time=this.comp.renderedFrame/this.comp.globalData.frameRate,needsVelocity&&(velocity=velocityAtTime(time)),expression_function(),this.frameExpressionId=elem.globalData.frameId,"shape"===scoped_bm_rt.propType&&(scoped_bm_rt=scoped_bm_rt.v),scoped_bm_rt)}return executeExpression}return ob.initiateExpression=initiateExpression,ob}(),expressionHelpers={searchExpressions:function(t,e,r){e.x&&(r.k=!0,r.x=!0,r.initiateExpression=ExpressionManager.initiateExpression,r.effectsSequence.push(r.initiateExpression(t,e,r).bind(r)))},getSpeedAtTime:function(t){var e=this.getValueAtTime(t),r=this.getValueAtTime(t+-.01),i=0;if(e.length){var s;for(s=0;s<e.length;s+=1)i+=Math.pow(r[s]-e[s],2);i=100*Math.sqrt(i)}else i=0;return i},getVelocityAtTime:function(t){if(void 0!==this.vel)return this.vel;var e,r,i=this.getValueAtTime(t),s=this.getValueAtTime(t+-.001);if(i.length)for(e=createTypedArray("float32",i.length),r=0;r<i.length;r+=1)e[r]=(s[r]-i[r])/-.001;else e=(s-i)/-.001;return e},getValueAtTime:function(t){return t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastFrame&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<t?this._cachingAtTime.lastIndex:0,this._cachingAtTime.value=this.interpolateValue(t,this._cachingAtTime),this._cachingAtTime.lastFrame=t),this._cachingAtTime.value},getStaticValueAtTime:function(){return this.pv},setGroupProperty:function(t){this.propertyGroup=t}};!function(){function o(t,e,r){if(!this.k||!this.keyframes)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[l.length-1].t;if(h<=p)return this.pv;if(r?s=p-(i=e?Math.abs(p-elem.comp.globalData.frameRate*e):Math.max(0,p-this.elem.data.ip)):((!e||e>l.length-1)&&(e=l.length-1),i=p-(s=l[l.length-1-e].t)),"pingpong"===t){if(Math.floor((h-s)/i)%2!=0)return this.getValueAtTime((i-(h-s)%i+s)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var m=this.getValueAtTime(s/this.comp.globalData.frameRate,0),f=this.getValueAtTime(p/this.comp.globalData.frameRate,0),c=this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0),d=Math.floor((h-s)/i);if(this.pv.length){for(n=(o=new Array(m.length)).length,a=0;a<n;a+=1)o[a]=(f[a]-m[a])*d+c[a];return o}return(f-m)*d+c}if("continue"===t){var u=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(u.length)).length,a=0;a<n;a+=1)o[a]=u[a]+(u[a]-y[a])*((h-p)/this.comp.globalData.frameRate)/5e-4;return o}return u+(h-p)/.001*(u-y)}}return this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0)}function h(t,e,r){if(!this.k)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[0].t;if(p<=h)return this.pv;if(r?s=p+(i=e?Math.abs(elem.comp.globalData.frameRate*e):Math.max(0,this.elem.data.op-p)):((!e||e>l.length-1)&&(e=l.length-1),i=(s=l[e].t)-p),"pingpong"===t){if(Math.floor((p-h)/i)%2==0)return this.getValueAtTime(((p-h)%i+p)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var m=this.getValueAtTime(p/this.comp.globalData.frameRate,0),f=this.getValueAtTime(s/this.comp.globalData.frameRate,0),c=this.getValueAtTime((i-(p-h)%i+p)/this.comp.globalData.frameRate,0),d=Math.floor((p-h)/i)+1;if(this.pv.length){for(n=(o=new Array(m.length)).length,a=0;a<n;a+=1)o[a]=c[a]-(f[a]-m[a])*d;return o}return c-(f-m)*d}if("continue"===t){var u=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(u.length)).length,a=0;a<n;a+=1)o[a]=u[a]+(u[a]-y[a])*(p-h)/.001;return o}return u+(u-y)*(p-h)/.001}}return this.getValueAtTime((i-(p-h)%i+p)/this.comp.globalData.frameRate,0)}function l(t,e){if(!this.k)return this.pv;if(t=.5*(t||.4),(e=Math.floor(e||5))<=1)return this.pv;var r,i,s=this.comp.renderedFrame/this.comp.globalData.frameRate,a=s-t,n=1<e?(s+t-a)/(e-1):1,o=0,h=0;for(r=this.pv.length?createTypedArray("float32",this.pv.length):0;o<e;){if(i=this.getValueAtTime(a+o*n),this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]+=i[h];else r+=i;o+=1}if(this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]/=e;else r/=e;return r}var s=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(t,e,r){var i=s(t,e,r);return i.dynamicProperties.length?i.getValueAtTime=function(t){console.warn("Transform at time not supported")}.bind(i):i.getValueAtTime=function(t){}.bind(i),i.setGroupProperty=expressionHelpers.setGroupProperty,i};var p=PropertyFactory.getProp;PropertyFactory.getProp=function(t,e,r,i,s){var a=p(t,e,r,i,s);a.kf?a.getValueAtTime=expressionHelpers.getValueAtTime.bind(a):a.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(a),a.setGroupProperty=expressionHelpers.setGroupProperty,a.loopOut=o,a.loopIn=h,a.smooth=l,a.getVelocityAtTime=expressionHelpers.getVelocityAtTime.bind(a),a.getSpeedAtTime=expressionHelpers.getSpeedAtTime.bind(a),a.numKeys=1===e.a?e.k.length:0,a.propertyIndex=e.ix;var n=0;return 0!==r&&(n=createTypedArray("float32",1===e.a?e.k[0].s.length:e.k.length)),a._cachingAtTime={lastFrame:initialDefaultFrame,lastIndex:0,value:n},expressionHelpers.searchExpressions(t,e,a),a.k&&s.addDynamicProperty(a),a};var t=ShapePropertyFactory.getConstructorFunction(),e=ShapePropertyFactory.getKeyframedConstructorFunction();function r(){}r.prototype={vertices:function(t,e){this.k&&this.getValue();var r=this.v;void 0!==e&&(r=this.getValueAtTime(e,0));var i,s=r._length,a=r[t],n=r.v,o=createSizedArray(s);for(i=0;i<s;i+=1)o[i]="i"===t||"o"===t?[a[i][0]-n[i][0],a[i][1]-n[i][1]]:[a[i][0],a[i][1]];return o},points:function(t){return this.vertices("v",t)},inTangents:function(t){return this.vertices("i",t)},outTangents:function(t){return this.vertices("o",t)},isClosed:function(){return this.v.c},pointOnPath:function(t,e){var r=this.v;void 0!==e&&(r=this.getValueAtTime(e,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(r));for(var i,s=this._segmentsLength,a=s.lengths,n=s.totalLength*t,o=0,h=a.length,l=0;o<h;){if(l+a[o].addedLength>n){var p=o,m=r.c&&o===h-1?0:o+1,f=(n-l)/a[o].addedLength;i=bez.getPointInSegment(r.v[p],r.v[m],r.o[p],r.i[m],f,a[o]);break}l+=a[o].addedLength,o+=1}return i||(i=r.c?[r.v[0][0],r.v[0][1]]:[r.v[r._length-1][0],r.v[r._length-1][1]]),i},vectorOnPath:function(t,e,r){t=1==t?this.v.c?0:.999:t;var i=this.pointOnPath(t,e),s=this.pointOnPath(t+.001,e),a=s[0]-i[0],n=s[1]-i[1],o=Math.sqrt(Math.pow(a,2)+Math.pow(n,2));return 0===o?[0,0]:"tangent"===r?[a/o,n/o]:[-n/o,a/o]},tangentOnPath:function(t,e){return this.vectorOnPath(t,e,"tangent")},normalOnPath:function(t,e){return this.vectorOnPath(t,e,"normal")},setGroupProperty:expressionHelpers.setGroupProperty,getValueAtTime:expressionHelpers.getStaticValueAtTime},extendPrototype([r],t),extendPrototype([r],e),e.prototype.getValueAtTime=function(t){return this._cachingAtTime||(this._cachingAtTime={shapeValue:shape_pool.clone(this.pv),lastIndex:0,lastTime:initialDefaultFrame}),t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastTime&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastTime<t?this._caching.lastIndex:0,this._cachingAtTime.lastTime=t,this.interpolateShape(t,this._cachingAtTime.shapeValue,this._cachingAtTime)),this._cachingAtTime.shapeValue},e.prototype.initiateExpression=ExpressionManager.initiateExpression;var n=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(t,e,r,i,s){var a=n(t,e,r,i,s);return a.propertyIndex=e.ix,a.lock=!1,3===r?expressionHelpers.searchExpressions(t,e.pt,a):4===r&&expressionHelpers.searchExpressions(t,e.ks,a),a.k&&t.addDynamicProperty(a),a}}(),TextProperty.prototype.getExpressionValue=function(t,e){var r=this.calculateExpression(e);if(t.t===r)return t;var i={};return this.copyData(i,t),i.t=r.toString(),i.__complete=!1,i},TextProperty.prototype.searchProperty=function(){var t=this.searchKeyframes(),e=this.searchExpressions();return this.kf=t||e,this.kf},TextProperty.prototype.searchExpressions=function(){if(this.data.d.x)return this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.addEffect(this.getExpressionValue.bind(this)),!0};var ShapeExpressionInterface=function(){function m(t,e,r){var i,s=[],a=t?t.length:0;for(i=0;i<a;i+=1)"gr"==t[i].ty?s.push(n(t[i],e[i],r)):"fl"==t[i].ty?s.push(o(t[i],e[i],r)):"st"==t[i].ty?s.push(h(t[i],e[i],r)):"tm"==t[i].ty?s.push(l(t[i],e[i],r)):"tr"==t[i].ty||("el"==t[i].ty?s.push(p(t[i],e[i],r)):"sr"==t[i].ty?s.push(f(t[i],e[i],r)):"sh"==t[i].ty?s.push(y(t[i],e[i],r)):"rc"==t[i].ty?s.push(c(t[i],e[i],r)):"rd"==t[i].ty?s.push(d(t[i],e[i],r)):"rp"==t[i].ty&&s.push(u(t[i],e[i],r)));return s}function n(t,e,r){var i=function(t){switch(t){case"ADBE Vectors Group":case"Contents":case 2:return i.content;default:return i.transform}};i.propertyGroup=function(t){return 1===t?i:r(t-1)};var s,a,n,o,h,l=(s=t,a=e,n=i.propertyGroup,(h=function(t){for(var e=0,r=o.length;e<r;){if(o[e]._name===t||o[e].mn===t||o[e].propertyIndex===t||o[e].ix===t||o[e].ind===t)return o[e];e+=1}if("number"==typeof t)return o[t-1]}).propertyGroup=function(t){return 1===t?h:n(t-1)},o=m(s.it,a.it,h.propertyGroup),h.numProperties=o.length,h.propertyIndex=s.cix,h._name=s.nm,h),p=function(e,t,r){function i(t){return 1==t?s:r(--t)}t.transform.mProps.o.setGroupProperty(i),t.transform.mProps.p.setGroupProperty(i),t.transform.mProps.a.setGroupProperty(i),t.transform.mProps.s.setGroupProperty(i),t.transform.mProps.r.setGroupProperty(i),t.transform.mProps.sk&&(t.transform.mProps.sk.setGroupProperty(i),t.transform.mProps.sa.setGroupProperty(i));function s(t){return e.a.ix===t||"Anchor Point"===t?s.anchorPoint:e.o.ix===t||"Opacity"===t?s.opacity:e.p.ix===t||"Position"===t?s.position:e.r.ix===t||"Rotation"===t||"ADBE Vector Rotation"===t?s.rotation:e.s.ix===t||"Scale"===t?s.scale:e.sk&&e.sk.ix===t||"Skew"===t?s.skew:e.sa&&e.sa.ix===t||"Skew Axis"===t?s.skewAxis:void 0}return t.transform.op.setGroupProperty(i),Object.defineProperties(s,{opacity:{get:ExpressionPropertyInterface(t.transform.mProps.o)},position:{get:ExpressionPropertyInterface(t.transform.mProps.p)},anchorPoint:{get:ExpressionPropertyInterface(t.transform.mProps.a)},scale:{get:ExpressionPropertyInterface(t.transform.mProps.s)},rotation:{get:ExpressionPropertyInterface(t.transform.mProps.r)},skew:{get:ExpressionPropertyInterface(t.transform.mProps.sk)},skewAxis:{get:ExpressionPropertyInterface(t.transform.mProps.sa)},_name:{value:e.nm}}),s.ty="tr",s.mn=e.mn,s.propertyGroup=r,s}(t.it[t.it.length-1],e.it[e.it.length-1],i.propertyGroup);return i.content=l,i.transform=p,Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.numProperties=t.np,i.propertyIndex=t.ix,i.nm=t.nm,i.mn=t.mn,i}function o(t,e,r){function i(t){return"Color"===t||"color"===t?i.color:"Opacity"===t||"opacity"===t?i.opacity:void 0}return Object.defineProperties(i,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(r),e.o.setGroupProperty(r),i}function h(t,e,r){function i(t){return 1===t?ob:r(t-1)}function s(t){return 1===t?h:i(t-1)}var a,n,o=t.d?t.d.length:0,h={};for(a=0;a<o;a+=1)n=a,Object.defineProperty(h,t.d[n].nm,{get:ExpressionPropertyInterface(e.d.dataProps[n].p)}),e.d.dataProps[a].p.setGroupProperty(s);function l(t){return"Color"===t||"color"===t?l.color:"Opacity"===t||"opacity"===t?l.opacity:"Stroke Width"===t||"stroke width"===t?l.strokeWidth:void 0}return Object.defineProperties(l,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},strokeWidth:{get:ExpressionPropertyInterface(e.w)},dash:{get:function(){return h}},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(i),e.o.setGroupProperty(i),e.w.setGroupProperty(i),l}function l(e,t,r){function i(t){return 1==t?s:r(--t)}function s(t){return t===e.e.ix||"End"===t||"end"===t?s.end:t===e.s.ix?s.start:t===e.o.ix?s.offset:void 0}return s.propertyIndex=e.ix,t.s.setGroupProperty(i),t.e.setGroupProperty(i),t.o.setGroupProperty(i),s.propertyIndex=e.ix,s.propertyGroup=r,Object.defineProperties(s,{start:{get:ExpressionPropertyInterface(t.s)},end:{get:ExpressionPropertyInterface(t.e)},offset:{get:ExpressionPropertyInterface(t.o)},_name:{value:e.nm}}),s.mn=e.mn,s}function p(e,t,r){function i(t){return 1==t?a:r(--t)}a.propertyIndex=e.ix;var s="tm"===t.sh.ty?t.sh.prop:t.sh;function a(t){return e.p.ix===t?a.position:e.s.ix===t?a.size:void 0}return s.s.setGroupProperty(i),s.p.setGroupProperty(i),Object.defineProperties(a,{size:{get:ExpressionPropertyInterface(s.s)},position:{get:ExpressionPropertyInterface(s.p)},_name:{value:e.nm}}),a.mn=e.mn,a}function f(e,t,r){function i(t){return 1==t?a:r(--t)}var s="tm"===t.sh.ty?t.sh.prop:t.sh;function a(t){return e.p.ix===t?a.position:e.r.ix===t?a.rotation:e.pt.ix===t?a.points:e.or.ix===t||"ADBE Vector Star Outer Radius"===t?a.outerRadius:e.os.ix===t?a.outerRoundness:!e.ir||e.ir.ix!==t&&"ADBE Vector Star Inner Radius"!==t?e.is&&e.is.ix===t?a.innerRoundness:void 0:a.innerRadius}return a.propertyIndex=e.ix,s.or.setGroupProperty(i),s.os.setGroupProperty(i),s.pt.setGroupProperty(i),s.p.setGroupProperty(i),s.r.setGroupProperty(i),e.ir&&(s.ir.setGroupProperty(i),s.is.setGroupProperty(i)),Object.defineProperties(a,{position:{get:ExpressionPropertyInterface(s.p)},rotation:{get:ExpressionPropertyInterface(s.r)},points:{get:ExpressionPropertyInterface(s.pt)},outerRadius:{get:ExpressionPropertyInterface(s.or)},outerRoundness:{get:ExpressionPropertyInterface(s.os)},innerRadius:{get:ExpressionPropertyInterface(s.ir)},innerRoundness:{get:ExpressionPropertyInterface(s.is)},_name:{value:e.nm}}),a.mn=e.mn,a}function c(e,t,r){function i(t){return 1==t?a:r(--t)}var s="tm"===t.sh.ty?t.sh.prop:t.sh;function a(t){return e.p.ix===t?a.position:e.r.ix===t?a.roundness:e.s.ix===t||"Size"===t||"ADBE Vector Rect Size"===t?a.size:void 0}return a.propertyIndex=e.ix,s.p.setGroupProperty(i),s.s.setGroupProperty(i),s.r.setGroupProperty(i),Object.defineProperties(a,{position:{get:ExpressionPropertyInterface(s.p)},roundness:{get:ExpressionPropertyInterface(s.r)},size:{get:ExpressionPropertyInterface(s.s)},_name:{value:e.nm}}),a.mn=e.mn,a}function d(e,t,r){var i=t;function s(t){if(e.r.ix===t||"Round Corners 1"===t)return s.radius}return s.propertyIndex=e.ix,i.rd.setGroupProperty(function(t){return 1==t?s:r(--t)}),Object.defineProperties(s,{radius:{get:ExpressionPropertyInterface(i.rd)},_name:{value:e.nm}}),s.mn=e.mn,s}function u(e,t,r){function i(t){return 1==t?a:r(--t)}var s=t;function a(t){return e.c.ix===t||"Copies"===t?a.copies:e.o.ix===t||"Offset"===t?a.offset:void 0}return a.propertyIndex=e.ix,s.c.setGroupProperty(i),s.o.setGroupProperty(i),Object.defineProperties(a,{copies:{get:ExpressionPropertyInterface(s.c)},offset:{get:ExpressionPropertyInterface(s.o)},_name:{value:e.nm}}),a.mn=e.mn,a}function y(t,e,r){var i=e.sh;function s(t){if("Shape"===t||"shape"===t||"Path"===t||"path"===t||"ADBE Vector Shape"===t||2===t)return s.path}return i.setGroupProperty(function(t){return 1==t?s:r(--t)}),Object.defineProperties(s,{path:{get:function(){return i.k&&i.getValue(),i}},shape:{get:function(){return i.k&&i.getValue(),i}},_name:{value:t.nm},ix:{value:t.ix},propertyIndex:{value:t.ix},mn:{value:t.mn}}),s}return function(t,e,r){var i;function s(t){if("number"==typeof t)return i[t-1];for(var e=0,r=i.length;e<r;){if(i[e]._name===t)return i[e];e+=1}}return s.propertyGroup=r,i=m(t,e,s),s.numProperties=i.length,s}}(),TextExpressionInterface=function(e){var r;function t(){}return Object.defineProperty(t,"sourceText",{get:function(){e.textProperty.getValue();var t=e.textProperty.currentData.t;return void 0!==t&&(e.textProperty.currentData.t=void 0,(r=new String(t)).value=t||new String(t)),r}}),t},LayerExpressionInterface=function(){function s(t,e){var r=new Matrix;if(r.reset(),this._elem.finalTransform.mProp.applyToMatrix(r),this._elem.hierarchy&&this._elem.hierarchy.length){var i,s=this._elem.hierarchy.length;for(i=0;i<s;i+=1)this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);return r.applyToPointArray(t[0],t[1],t[2]||0)}return r.applyToPointArray(t[0],t[1],t[2]||0)}function a(t,e){var r=new Matrix;if(r.reset(),this._elem.finalTransform.mProp.applyToMatrix(r),this._elem.hierarchy&&this._elem.hierarchy.length){var i,s=this._elem.hierarchy.length;for(i=0;i<s;i+=1)this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);return r.inversePoint(t)}return r.inversePoint(t)}function n(t){var e=new Matrix;if(e.reset(),this._elem.finalTransform.mProp.applyToMatrix(e),this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);return e.inversePoint(t)}return e.inversePoint(t)}function o(){return[1,1,1,1]}return function(e){var r;function i(t){switch(t){case"ADBE Root Vectors Group":case"Contents":case 2:return i.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return r;case 4:case"ADBE Effect Parade":case"effects":case"Effects":return i.effect}}i.toWorld=s,i.fromWorld=a,i.toComp=s,i.fromComp=n,i.sampleImage=o,i.sourceRectAtTime=e.sourceRectAtTime.bind(e);var t=getDescriptor(r=TransformExpressionInterface((i._elem=e).finalTransform.mProp),"anchorPoint");return Object.defineProperties(i,{hasParent:{get:function(){return e.hierarchy.length}},parent:{get:function(){return e.hierarchy[0].layerInterface}},rotation:getDescriptor(r,"rotation"),scale:getDescriptor(r,"scale"),position:getDescriptor(r,"position"),opacity:getDescriptor(r,"opacity"),anchorPoint:t,anchor_point:t,transform:{get:function(){return r}},active:{get:function(){return e.isInRange}}}),i.startTime=e.data.st,i.index=e.data.ind,i.source=e.data.refId,i.height=0===e.data.ty?e.data.h:100,i.width=0===e.data.ty?e.data.w:100,i.inPoint=e.data.ip/e.comp.globalData.frameRate,i.outPoint=e.data.op/e.comp.globalData.frameRate,i._name=e.data.nm,i.registerMaskInterface=function(t){i.mask=new MaskManagerInterface(t,e)},i.registerEffectsInterface=function(t){i.effect=t},i}}(),CompExpressionInterface=function(i){function t(t){for(var e=0,r=i.layers.length;e<r;){if(i.layers[e].nm===t||i.layers[e].ind===t)return i.elements[e].layerInterface;e+=1}return null}return Object.defineProperty(t,"_name",{value:i.data.nm}),(t.layer=t).pixelAspect=1,t.height=i.data.h||i.globalData.compSize.h,t.width=i.data.w||i.globalData.compSize.w,t.pixelAspect=1,t.frameDuration=1/i.globalData.frameRate,t.displayStartTime=0,t.numLayers=i.layers.length,t},TransformExpressionInterface=function(t){function e(t){switch(t){case"scale":case"Scale":case"ADBE Scale":case 6:return e.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return e.rotation;case"ADBE Rotate X":return e.xRotation;case"ADBE Rotate Y":return e.yRotation;case"position":case"Position":case"ADBE Position":case 2:return e.position;case"ADBE Position_0":return e.xPosition;case"ADBE Position_1":return e.yPosition;case"ADBE Position_2":return e.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return e.anchorPoint;case"opacity":case"Opacity":case 11:return e.opacity}}if(Object.defineProperty(e,"rotation",{get:ExpressionPropertyInterface(t.r||t.rz)}),Object.defineProperty(e,"zRotation",{get:ExpressionPropertyInterface(t.rz||t.r)}),Object.defineProperty(e,"xRotation",{get:ExpressionPropertyInterface(t.rx)}),Object.defineProperty(e,"yRotation",{get:ExpressionPropertyInterface(t.ry)}),Object.defineProperty(e,"scale",{get:ExpressionPropertyInterface(t.s)}),t.p)var r=ExpressionPropertyInterface(t.p);return Object.defineProperty(e,"position",{get:function(){return t.p?r():[t.px.v,t.py.v,t.pz?t.pz.v:0]}}),Object.defineProperty(e,"xPosition",{get:ExpressionPropertyInterface(t.px)}),Object.defineProperty(e,"yPosition",{get:ExpressionPropertyInterface(t.py)}),Object.defineProperty(e,"zPosition",{get:ExpressionPropertyInterface(t.pz)}),Object.defineProperty(e,"anchorPoint",{get:ExpressionPropertyInterface(t.a)}),Object.defineProperty(e,"opacity",{get:ExpressionPropertyInterface(t.o)}),Object.defineProperty(e,"skew",{get:ExpressionPropertyInterface(t.sk)}),Object.defineProperty(e,"skewAxis",{get:ExpressionPropertyInterface(t.sa)}),Object.defineProperty(e,"orientation",{get:ExpressionPropertyInterface(t.or)}),e},ProjectInterface=function(){function e(t){this.compositions.push(t)}return function(){function t(t){for(var e=0,r=this.compositions.length;e<r;){if(this.compositions[e].data&&this.compositions[e].data.nm===t)return this.compositions[e].prepareFrame&&this.compositions[e].data.xt&&this.compositions[e].prepareFrame(this.currentFrame),this.compositions[e].compInterface;e+=1}}return t.compositions=[],t.currentFrame=0,t.registerComposition=e,t}}(),EffectsExpressionInterface=function(){function l(s,t,e,r){var i,a=[],n=s.ef.length;for(i=0;i<n;i+=1)5===s.ef[i].ty?a.push(l(s.ef[i],t.effectElements[i],t.effectElements[i].propertyGroup,r)):a.push(p(t.effectElements[i],s.ef[i].ty,r,o));function o(t){return 1===t?h:e(t-1)}var h=function(t){for(var e=s.ef,r=0,i=e.length;r<i;){if(t===e[r].nm||t===e[r].mn||t===e[r].ix)return 5===e[r].ty?a[r]:a[r]();r+=1}return a[0]()};return h.propertyGroup=o,"ADBE Color Control"===s.mn&&Object.defineProperty(h,"color",{get:function(){return a[0]()}}),Object.defineProperty(h,"numProperties",{get:function(){return s.np}}),h.active=h.enabled=0!==s.en,h}function p(t,e,r,i){var s=ExpressionPropertyInterface(t.p);return t.p.setGroupProperty&&t.p.setGroupProperty(i),function(){return 10===e?r.comp.compInterface(t.p.v):s()}}return{createEffectsInterface:function(s,t){if(s.effectsManager){var e,a=[],r=s.data.ef,i=s.effectsManager.effectElements.length;for(e=0;e<i;e+=1)a.push(l(r[e],s.effectsManager.effectElements[e],t,s));return function(t){for(var e=s.data.ef||[],r=0,i=e.length;r<i;){if(t===e[r].nm||t===e[r].mn||t===e[r].ix)return a[r];r+=1}}}}}}(),MaskManagerInterface=function(){function a(t,e){this._mask=t,this._data=e}Object.defineProperty(a.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}}),Object.defineProperty(a.prototype,"maskOpacity",{get:function(){return this._mask.op.k&&this._mask.op.getValue(),100*this._mask.op.v}});return function(e,t){var r,i=createSizedArray(e.viewData.length),s=e.viewData.length;for(r=0;r<s;r+=1)i[r]=new a(e.viewData[r],e.masksProperties[r]);return function(t){for(r=0;r<s;){if(e.masksProperties[r].nm===t)return i[r];r+=1}}}}(),ExpressionPropertyInterface=function(){var s={pv:0,v:0,mult:1},n={pv:[0,0,0],v:[0,0,0],mult:1};function o(i,s,a){Object.defineProperty(i,"velocity",{get:function(){return s.getVelocityAtTime(s.comp.currentFrame)}}),i.numKeys=s.keyframes?s.keyframes.length:0,i.key=function(t){if(i.numKeys){var e="";e="s"in s.keyframes[t-1]?s.keyframes[t-1].s:"e"in s.keyframes[t-2]?s.keyframes[t-2].e:s.keyframes[t-2].s;var r="unidimensional"===a?new Number(e):Object.assign({},e);return r.time=s.keyframes[t-1].t/s.elem.comp.globalData.frameRate,r}return 0},i.valueAtTime=s.getValueAtTime,i.speedAtTime=s.getSpeedAtTime,i.velocityAtTime=s.getVelocityAtTime,i.propertyGroup=s.propertyGroup}function e(){return s}return function(t){return t?"unidimensional"===t.propType?function(t){t&&"pv"in t||(t=s);var e=1/t.mult,r=t.pv*e,i=new Number(r);return i.value=r,o(i,t,"unidimensional"),function(){return t.k&&t.getValue(),r=t.v*e,i.value!==r&&((i=new Number(r)).value=r,o(i,t,"unidimensional")),i}}(t):function(e){e&&"pv"in e||(e=n);var r=1/e.mult,i=e.pv.length,s=createTypedArray("float32",i),a=createTypedArray("float32",i);return s.value=a,o(s,e,"multidimensional"),function(){e.k&&e.getValue();for(var t=0;t<i;t+=1)s[t]=a[t]=e.v[t]*r;return s}}(t):e}}(),r5,s5;function SliderEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function AngleEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function ColorEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function PointEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function LayerIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function MaskIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function CheckboxEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function NoValueEffect(){this.p={}}function EffectsManager(){}function EffectsManager(t,e){var r=t.ef||[];this.effectElements=[];var i,s,a=r.length;for(i=0;i<a;i++)s=new GroupEffect(r[i],e),this.effectElements.push(s)}function GroupEffect(t,e){this.init(t,e)}r5=function(){function r(t,e){return this.textIndex=t+1,this.textTotal=e,this.v=this.getValue()*this.mult,this.v}return function(t,e){this.pv=1,this.comp=t.comp,this.elem=t,this.mult=.01,this.propType="textSelector",this.textTotal=e.totalChars,this.selectorValue=100,this.lastValue=[1,1,1],this.k=!0,this.x=!0,this.getValue=ExpressionManager.initiateExpression.bind(this)(t,e,this),this.getMult=r,this.getVelocityAtTime=expressionHelpers.getVelocityAtTime,this.kf?this.getValueAtTime=expressionHelpers.getValueAtTime.bind(this):this.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(this),this.setGroupProperty=expressionHelpers.setGroupProperty}}(),s5=TextSelectorProp.getTextSelectorProp,TextSelectorProp.getTextSelectorProp=function(t,e,r){return 1===e.t?new r5(t,e,r):s5(t,e,r)},extendPrototype([DynamicPropertyContainer],GroupEffect),GroupEffect.prototype.getValue=GroupEffect.prototype.iterateDynamicProperties,GroupEffect.prototype.init=function(t,e){this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var r,i,s=this.data.ef.length,a=this.data.ef;for(r=0;r<s;r+=1){switch(i=null,a[r].ty){case 0:i=new SliderEffect(a[r],e,this);break;case 1:i=new AngleEffect(a[r],e,this);break;case 2:i=new ColorEffect(a[r],e,this);break;case 3:i=new PointEffect(a[r],e,this);break;case 4:case 7:i=new CheckboxEffect(a[r],e,this);break;case 10:i=new LayerIndexEffect(a[r],e,this);break;case 11:i=new MaskIndexEffect(a[r],e,this);break;case 5:i=new EffectsManager(a[r],e,this);break;default:i=new NoValueEffect(a[r],e,this)}i&&this.effectElements.push(i)}};var lottie={},_isFrozen=!1;function setLocationHref(t){locationHref=t}function searchAnimations(){!0===standalone?animationManager.searchAnimations(animationData,standalone,renderer):animationManager.searchAnimations()}function setSubframeRendering(t){subframeEnabled=t}function loadAnimation(t){return!0===standalone&&(t.animationData=JSON.parse(animationData)),animationManager.loadAnimation(t)}function setQuality(t){if("string"==typeof t)switch(t){case"high":defaultCurveSegments=200;break;case"medium":defaultCurveSegments=50;break;case"low":defaultCurveSegments=10}else!isNaN(t)&&1<t&&(defaultCurveSegments=t);roundValues(!(50<=defaultCurveSegments))}function inBrowser(){return"undefined"!=typeof navigator}function installPlugin(t,e){"expressions"===t&&(expressionsPlugin=e)}function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix}}function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(t){for(var e=queryString.split("&"),r=0;r<e.length;r++){var i=e[r].split("=");if(decodeURIComponent(i[0])==t)return decodeURIComponent(i[1])}}lottie.play=animationManager.play,lottie.pause=animationManager.pause,lottie.setLocationHref=setLocationHref,lottie.togglePause=animationManager.togglePause,lottie.setSpeed=animationManager.setSpeed,lottie.setDirection=animationManager.setDirection,lottie.stop=animationManager.stop,lottie.searchAnimations=searchAnimations,lottie.registerAnimation=animationManager.registerAnimation,lottie.loadAnimation=loadAnimation,lottie.setSubframeRendering=setSubframeRendering,lottie.resize=animationManager.resize,lottie.goToAndStop=animationManager.goToAndStop,lottie.destroy=animationManager.destroy,lottie.setQuality=setQuality,lottie.inBrowser=inBrowser,lottie.installPlugin=installPlugin,lottie.freeze=animationManager.freeze,lottie.unfreeze=animationManager.unfreeze,lottie.getRegisteredAnimations=animationManager.getRegisteredAnimations,lottie.__getFactory=getFactory,lottie.version="5.6.8";var standalone="__[STANDALONE]__",animationData="__[ANIMATIONDATA]__",renderer="";if(standalone){var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""},queryString=myScript.src.replace(/^[^\?]+\??/,"");renderer=getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);
	return lottie;
}));;
/* --- e-gallery.min.js --- */
/*! E-Gallery v1.2.0 by Elementor */
var EGallery=function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=9)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}},function(t,e,i){var n=i(5),s=i(6);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?s(t):e}},function(t,e){function i(e){return t.exports=i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(e)}t.exports=i},function(t,e,i){var n=i(7);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t){return(n="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}function s(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=s=function(t){return n(t)}:t.exports=s=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},s(e)}t.exports=s},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function i(e,n){return t.exports=i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(e,n)}t.exports=i},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(0),s=i.n(n),r=i(1),a=i.n(r),o=i(2),l=i.n(o),u=i(3),c=i.n(u),h=i(4),y=i.n(h);var g=function(){function t(e){var i=this;s()(this,t),this.settings=jQuery.extend(!0,this.getDefaultSettings(),e),this.$container=jQuery(this.settings.container),this.timeouts=[],this.initElements(),this.prepareGallery();var n=this.runGallery.bind(this);this.runGallery=this.debounce(function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];i.settings.lazyLoad?n.apply(void 0,e):i.allImagesPromise.then(function(){return n.apply(void 0,e)})},300),this.settings.lazyLoad&&(this.handleScroll=this.debounce(function(){return i.lazyLoadImages()},16)),this.bindEvents(),this.runGallery()}return a()(t,[{key:"getDefaultSettings",value:function(){return{}}},{key:"getItemClass",value:function(t){return this.settings.classesPrefix+t}},{key:"initElements",value:function(){this.elements={$window:jQuery(window)};var t="-"+(this.settings.rtl?"rtl":"ltr"),e=this.getItemClass(this.settings.classes.container)+" "+this.getItemClass(this.settings.type)+" "+this.getItemClass(t);this.settings.lazyLoad&&(e+=" "+this.getItemClass(this.settings.classes.lazyLoad)),this.$container.addClass(e)}},{key:"bindEvents",value:function(){this.elements.$window.on("resize",this.runGallery),this.settings.lazyLoad&&this.elements.$window.on("scroll",this.handleScroll)}},{key:"getNestedObjectData",value:function(t,e){var i=e.split("."),n=i.splice(0,1);return i.length?this.getNestedObjectData(t[n],i.join(".")):{object:t,key:e}}},{key:"getTemplateArgs",value:function(t,e){var i=this.getNestedObjectData(t,e);return i.object[i.key]||""}},{key:"getCurrentBreakpoint",value:function(){var t=Object.keys(this.settings.breakpoints).map(Number).sort(function(t,e){return t-e}),e=0;return t.some(function(t){return innerWidth<t&&(e=t,!0)}),e}},{key:"getCurrentDeviceSetting",value:function(t){var e=this.getCurrentBreakpoint();return e?this.settings.breakpoints[e][t]:this.settings[t]}},{key:"getActiveItems",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.settings.tags,i=[];if(!e.length)return t?(this.$items.each(function(t){i.push(t)}),i):this.$items;var n=this.$items.filter(function(n,s){var r=s.dataset.eGalleryTags;return!!r&&(r=r.split(/[ ,]+/),!!e.some(function(t){return r.includes(t)})&&(t&&i.push(n),!0))});return t?i:n}},{key:"getImageData",value:function(t){return this.settings.tags.length&&(t=this.getActiveItems(!0)[t]),this.imagesData[t]}},{key:"compileTemplate",value:function(t,e){var i=this;return t.replace(/{{([^}]+)}}/g,function(t,n){return i.getTemplateArgs(e,n.trim())})}},{key:"createOverlay",value:function(t){var e=this.settings,i=e.classes,n=e.overlayTemplate,s=jQuery("<div>",{class:this.getItemClass(i.overlay)}),r=this.compileTemplate(n,jQuery.extend(!0,this.settings,t));return s.html(r),s}},{key:"createItem",value:function(t){var e,i=this.settings.classes,n=jQuery("<div>",{class:this.getItemClass(i.item),"data-e-gallery-tags":t.tags}),s=jQuery("<div>",{class:this.getItemClass(i.image)});this.settings.lazyLoad||s.css("background-image","url("+t.thumbnail+")"),this.settings.overlay&&(e=this.createOverlay(t));var r=n;return t.url&&(r=jQuery("<a>",{class:this.getItemClass(i.link),href:t.url}),n.html(r)),r.html(s),e&&r.append(e),n}},{key:"debounce",value:function(t,e){var i,n=this;return function(){for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];clearTimeout(i),i=setTimeout(function(){return t.apply(void 0,r)},e),n.timeouts.push(i)}}},{key:"buildGallery",value:function(){var t=this,e=this.settings.items;this.$items=jQuery(),e.forEach(function(e){var i=t.createItem(e);t.$items=t.$items.add(i),t.$container.append(i)})}},{key:"loadImages",value:function(){var t=this,e=[];this.settings.items.forEach(function(i,n){var s=new Image,r=new Promise(function(t){s.onload=t});e.push(r),r.then(function(){return t.calculateImageSize(s,n)}),s.src=i.thumbnail}),this.allImagesPromise=Promise.all(e)}},{key:"lazyLoadImages",value:function(){var t=this;if(!this.lazyLoadComplete){var e=this.getActiveItems(),i=this.getActiveItems(!0);e.each(function(e,n){var s=t.settings.items[i[e]];if(s.loading||!function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",i=t.getBoundingClientRect().top,n=t.offsetHeight,s=i+n;return("middle"===e?i+n/2:"bottom"===e?s:i)<=innerHeight&&s>=0}(n))return!0;s.loading=!0;var r=jQuery(n),a=new Image;return new Promise(function(t){a.onload=t}).then(function(){r.find(t.settings.selectors.image).css("background-image",'url("'+s.thumbnail+'")').addClass(t.getItemClass(t.settings.classes.imageLoaded)),t.loadedItemsCount++,t.loadedItemsCount===t.settings.items.length&&(t.lazyLoadComplete=!0)}),a.src=s.thumbnail,!0})}}},{key:"calculateImageSize",value:function(t,e){this.imagesData[e]={width:t.width,height:t.height,ratio:t.width/t.height}}},{key:"createImagesData",value:function(){var t=this;this.settings.items.forEach(function(e,i){return t.calculateImageSize(e,i)})}},{key:"makeGalleryFromContent",value:function(){var t=this.settings.selectors,e=this.settings.lazyLoad,i=[];this.$items=this.$container.find(t.items),this.$items.each(function(n,s){var r=jQuery(s).find(t.image);i[n]={thumbnail:r.data("thumbnail")},e?(i[n].width=r.data("width"),i[n].height=r.data("height")):r.css("background-image",'url("'.concat(r.data("thumbnail"),'")'))}),this.settings.items=i}},{key:"prepareGallery",value:function(){this.settings.items?this.buildGallery():this.makeGalleryFromContent(),this.imagesData=[],this.settings.lazyLoad?(this.loadedItemsCount=0,this.lazyLoadComplete=!1,this.createImagesData()):this.loadImages()}},{key:"runGallery",value:function(t){var e=this,i=this.$container[0].style;i.setProperty("--hgap",this.getCurrentDeviceSetting("horizontalGap")+"px"),i.setProperty("--vgap",this.getCurrentDeviceSetting("verticalGap")+"px"),i.setProperty("--animation-duration",this.settings.animationDuration+"ms"),this.$items.addClass(this.getItemClass(this.settings.classes.hidden)),this.getActiveItems().removeClass(this.getItemClass(this.settings.classes.hidden)),this.settings.lazyLoad&&setTimeout(function(){return e.lazyLoadImages()},300),this.run(t)}},{key:"setSettings",value:function(t,e){var i=this.getNestedObjectData(this.settings,t);i.object&&(i.object[i.key]=e,this.runGallery(!0))}},{key:"unbindEvents",value:function(){this.elements.$window.off("resize",this.runGallery)}},{key:"destroy",value:function(){this.unbindEvents(),this.$container.empty(),this.timeouts.forEach(function(t){return clearTimeout(t)})}}]),t}(),f=function(t){function e(){return s()(this,e),l()(this,c()(e).apply(this,arguments))}return y()(e,t),a()(e,[{key:"getDefaultSettings",value:function(){return{aspectRatio:"16:9"}}},{key:"setItemsPosition",value:function(){var t=this.getCurrentDeviceSetting("columns");this.getActiveItems().each(function(e,i){i.style.setProperty("--column",e%t),i.style.setProperty("--row",Math.floor(e/t))})}},{key:"setContainerSize",value:function(){var t=this.getCurrentDeviceSetting("columns"),e=Math.ceil(this.getActiveItems().length/t),i=this.$container[0].style;i.setProperty("--columns",t),i.setProperty("--rows",e);var n=this.getActiveItems().width(),s=this.settings.aspectRatio.split(":"),r=s[1]/s[0],a=(r*n*e+this.getCurrentDeviceSetting("horizontalGap")*(e-1))/this.$container.width()*100;i.setProperty("--aspect-ratio",100*r+"%"),i.setProperty("--container-aspect-ratio",a+"%")}},{key:"run",value:function(){var t=this,e=this.getItemClass(this.settings.classes.animated);this.$container.addClass(e),setTimeout(function(){t.setItemsPosition(),t.setContainerSize(),setTimeout(function(){return t.$container.removeClass(e)},t.settings.animationDuration)},50)}}]),e}(g),m=function(t){function e(){return s()(this,e),l()(this,c()(e).apply(this,arguments))}return y()(e,t),a()(e,[{key:"getDefaultSettings",value:function(){return{idealRowHeight:200,lastRow:"auto",breakpoints:{1024:{idealRowHeight:150},768:{idealRowHeight:100}}}}},{key:"run",value:function(){this.rowsHeights=[],this.rowsCount=0,this.containerWidth=this.$container.width(),this.makeJustifiedRow(0)}},{key:"makeJustifiedRow",value:function(t){for(var e=0,i=t;;i++){var n=this.getImageData(i),s=Math.round(this.getCurrentDeviceSetting("idealRowHeight")*n.ratio);s>this.containerWidth&&(s=this.containerWidth);var r=e+s;if(r>this.containerWidth)if(this.containerWidth-e<r-this.containerWidth){this.fitImagesInContainer(t,i,e),this.rowsCount++,this.makeJustifiedRow(i);break}var a=i===this.getActiveItems().length-1;if(n.computedWidth=s,a){var o=this.getCurrentDeviceSetting("lastRow");if("hide"!==o){var l="fit"===o||.7<=r/this.containerWidth?r:this.containerWidth;this.fitImagesInContainer(t,i+1,l)}this.inflateGalleryHeight();break}e=r}}},{key:"fitImagesInContainer",value:function(t,e,i){for(var n=e-t-1,s=this.getActiveItems(),r=0,a=t;a<e;a++){var o=this.getImageData(a),l=o.computedWidth/i,u=s.get(a),c=this.getItemClass(this.settings.classes.firstRowItem);if(u.style.setProperty("--item-width",l),u.style.setProperty("--gap-count",n),u.style.setProperty("--item-height",o.height/o.width*100+"%"),u.style.setProperty("--item-start",r),u.style.setProperty("--item-row-index",a-t),r+=l,a===t){u.classList.add(c);var h=l*(this.containerWidth-n*this.getCurrentDeviceSetting("horizontalGap"));this.rowsHeights.push(h/o.ratio)}else u.classList.remove(c)}}},{key:"inflateGalleryHeight",value:function(){var t=this.rowsHeights.reduce(function(t,e){return t+e})+this.rowsCount*this.getCurrentDeviceSetting("verticalGap"),e=t/this.containerWidth,i=this.rowsHeights.map(function(e){return e/t*100}),n=-1,s=0;this.getActiveItems().each(function(t,e){"0"===e.style.getPropertyValue("--item-row-index")&&++n&&(s+=i[n-1]),e.style.setProperty("--item-top",s+"%"),e.style.setProperty("--item-height",i[n]+"%"),e.style.setProperty("--row",n)}),this.$container[0].style.setProperty("--container-aspect-ratio",e)}}]),e}(g),d=function(t){function e(){return s()(this,e),l()(this,c()(e).apply(this,arguments))}return y()(e,t),a()(e,[{key:"run",value:function(t){var e=this,i=this.getCurrentBreakpoint();if(t||i!==this.currentBreakpoint){this.currentBreakpoint=i;for(var n=[],s=[],r=[],a=this.getCurrentDeviceSetting("columns"),o=this.$container.width(),l=(o-this.getCurrentDeviceSetting("horizontalGap")*(a-1))/a,u=this.getActiveItems(),c=0,h=0;h<a;h++)s[h]=0,n[h]=0;u.each(function(t,i){var o=e.getImageData(t),u=l/o.ratio,h=t%a;c=n[h],jQuery.each(n,function(t,e){e&&c>e+5&&(c=e,h=t)}),r[t]=n[h],n[h]+=u,i.style.setProperty("--item-height",o.height/o.width*100+"%"),i.style.setProperty("--column",h),i.style.setProperty("--items-in-column",s[h]),s[h]++});var y=Math.max.apply(Math,n),g=n.indexOf(y),f=s[g]-1,m=y/o;this.$container[0].style.setProperty("--columns",a),this.$container[0].style.setProperty("--highest-column-gap-count",f),this.$container.css("padding-bottom",100*m+"%"),u.each(function(t,e){var i=r[t]?r[t]/y*100:0;e.style.setProperty("--percent-height",i+"%")})}}}]),e}(g);i(8);i.d(e,"default",function(){return p});var p=function(){function t(e){s()(this,t),this.userSettings=e,this.initGalleriesTypes(),this.createGallery()}return a()(t,[{key:"getDefaultSettings",value:function(){return{container:null,items:null,type:"grid",tags:[],overlay:!1,overlayTemplate:'<div class="{{ classesPrefix }}{{ classes.overlayTitle }}">{{ title }}</div><div class="{{ classesPrefix }}{{ classes.overlayDescription }}">{{ description }}</div>',columns:5,horizontalGap:10,verticalGap:10,rtl:!1,animationDuration:350,lazyLoad:!1,classesPrefix:"e-gallery-",classes:{container:"container",item:"item",image:"image",overlay:"overlay",overlayTitle:"overlay__title",overlayDescription:"overlay__description",link:"link",firstRowItem:"first-row-item",animated:"-animated",hidden:"item--hidden",lazyLoad:"-lazyload",imageLoaded:"image-loaded"},selectors:{items:".e-gallery-item",image:".e-gallery-image"},breakpoints:{1024:{horizontalGap:5,verticalGap:5,columns:4},768:{horizontalGap:1,verticalGap:1,columns:2}}}}},{key:"initGalleriesTypes",value:function(){this.galleriesTypes={grid:f,justified:m,masonry:d}}},{key:"createGallery",value:function(){var t=jQuery.extend(this.getDefaultSettings(),this.userSettings),e=this.galleriesTypes[t.type];this.galleryHandler=new e(t)}},{key:"setSettings",value:function(t,e){this.galleryHandler.setSettings(t,e)}},{key:"destroy",value:function(){this.galleryHandler.destroy()}}]),t}()}]).default;;
/* --- jquery.sticky.min.js --- */
!function(t){var o=function(o,s){var i,e,n,r,a=!1,c=!1,f=!1,p={},l={to:"top",offset:0,effectsOffset:0,parent:!1,classes:{sticky:"sticky",stickyActive:"sticky-active",stickyEffects:"sticky-effects",spacer:"sticky-spacer"},isRTL:!1,handleScrollbarWidth:!1},d=function(t,o,s){var i={},e=t[0].style;s.forEach((function(t){i[t]=void 0!==e[t]?e[t]:""})),t.data("css-backup-"+o,i)},m=function(t,o){return t.data("css-backup-"+o)};const u=()=>{if(r=b(i,"width"),n=i.offset().left,e.isRTL){const t=e.handleScrollbarWidth?window.innerWidth:document.body.offsetWidth;n=Math.max(t-r-n,0)}};var h=function(){p.$spacer=i.clone().addClass(e.classes.spacer).css({visibility:"hidden",transition:"none",animation:"none"}),i.after(p.$spacer)},y=function(){p.$spacer.remove()},k=function(){d(i,"unsticky",["position","width","margin-top","margin-bottom","top","bottom","inset-inline-start"]);const t={position:"fixed",width:r,marginTop:0,marginBottom:0};t[e.to]=e.offset,t["top"===e.to?"bottom":"top"]="",n&&(t["inset-inline-start"]=n+"px"),i.css(t).addClass(e.classes.stickyActive)},v=function(){i.css(m(i,"unsticky")).removeClass(e.classes.stickyActive)},b=function(t,o,s){var i=getComputedStyle(t[0]),e=parseFloat(i[o]),n="height"===o?["top","bottom"]:["left","right"],r=[];return"border-box"!==i.boxSizing&&r.push("border","padding"),s&&r.push("margin"),r.forEach((function(t){n.forEach((function(o){e+=parseFloat(i[t+"-"+o])}))})),e},w=function(t){var o=p.$window.scrollTop(),s=b(t,"height"),i=innerHeight,e=t.offset().top-o,n=e-i;return{top:{fromTop:e,fromBottom:n},bottom:{fromTop:e+s,fromBottom:n+s}}},g=function(){v(),y(),a=!1,i.trigger("sticky:unstick")},$=function(){var t=w(i),o="top"===e.to;if(c){(o?t.top.fromTop>e.offset:t.bottom.fromBottom<-e.offset)&&(p.$parent.css(m(p.$parent,"childNotFollowing")),i.css(m(i,"notFollowing")),c=!1)}else{var s=w(p.$parent),a=getComputedStyle(p.$parent[0]),f=parseFloat(a[o?"borderBottomWidth":"borderTopWidth"]),l=o?s.bottom.fromTop-f:s.top.fromBottom+f;(o?l<=t.bottom.fromTop:l>=t.top.fromBottom)&&function(){d(p.$parent,"childNotFollowing",["position"]),p.$parent.css("position","relative"),d(i,"notFollowing",["position","inset-inline-start","top","bottom"]);const t={position:"absolute"};if(n=p.$spacer.position().left,e.isRTL){const t=i.parent().outerWidth(),o=p.$spacer.position().left;r=p.$spacer.outerWidth(),n=Math.max(t-r-o,0)}t["inset-inline-start"]=n+"px",t[e.to]="",t["top"===e.to?"bottom":"top"]=0,i.css(t),c=!0}()}},T=function(){var t,o=e.offset;if(a){var s=w(p.$spacer);t="top"===e.to?s.top.fromTop-o:-s.bottom.fromBottom-o,e.parent&&$(),t>0&&g()}else{var n=w(i);(t="top"===e.to?n.top.fromTop-o:-n.bottom.fromBottom-o)<=0&&(u(),h(),k(),a=!0,i.trigger("sticky:stick"),e.parent&&$())}!function(t){f&&-t<e.effectsOffset?(i.removeClass(e.classes.stickyEffects),f=!1):!f&&-t>=e.effectsOffset&&(i.addClass(e.classes.stickyEffects),f=!0)}(t)},B=function(){T()},C=function(){a&&(v(),y(),u(),h(),k(),e.parent&&(c=!1,$()))};this.destroy=function(){a&&g(),p.$window.off("scroll",B).off("resize",C),i.removeClass(e.classes.sticky)},e=jQuery.extend(!0,l,s),i=t(o).addClass(e.classes.sticky),p.$window=t(window),e.parent&&(p.$parent=i.parent(),"parent"!==e.parent&&(p.$parent=p.$parent.closest(e.parent))),p.$window.on({scroll:B,resize:C}),T()};t.fn.sticky=function(s){var i="string"==typeof s;return this.each((function(){var e=t(this);if(i){var n=e.data("sticky");if(!n)throw Error("Trying to perform the `"+s+"` method prior to initialization");if(!n[s])throw ReferenceError("Method `"+s+"` not found in sticky instance");n[s].apply(n,Array.prototype.slice.call(arguments,1)),"destroy"===s&&e.removeData("sticky")}else e.data("sticky",new o(this,s))})),this},window.Sticky=o}(jQuery);;
/* --- hooks.min.js --- */
/*! This file is auto-generated */
"use strict";var wp;(wp||={}).hooks=(()=>{var v=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var I=Object.prototype.hasOwnProperty;var w=(e,n)=>{for(var s in n)v(e,s,{get:n[s],enumerable:!0})},D=(e,n,s,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of g(n))!I.call(e,t)&&t!==s&&v(e,t,{get:()=>n[t],enumerable:!(r=S(n,t))||r.enumerable});return e};var T=e=>D(v({},"__esModule",{value:!0}),e);var le={};w(le,{actions:()=>ae,addAction:()=>J,addFilter:()=>K,applyFilters:()=>N,applyFiltersAsync:()=>ee,createHooks:()=>F,currentAction:()=>te,currentFilter:()=>re,defaultHooks:()=>b,didAction:()=>ie,didFilter:()=>se,doAction:()=>X,doActionAsync:()=>Y,doingAction:()=>ne,doingFilter:()=>oe,filters:()=>ce,hasAction:()=>P,hasFilter:()=>Q,removeAction:()=>L,removeAllActions:()=>U,removeAllFilters:()=>W,removeFilter:()=>M});function z(e){return typeof e!="string"||e===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}var m=z;function E(e){return typeof e!="string"||e===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}var f=E;function Z(e,n){return function(r,t,a,i=10){let c=e[n];if(!f(r)||!m(t))return;if(typeof a!="function"){console.error("The hook callback must be a function.");return}if(typeof i!="number"){console.error("If specified, the hook priority must be a number.");return}let l={callback:a,priority:i,namespace:t};if(c[r]){let o=c[r].handlers,d;for(d=o.length;d>0&&!(i>=o[d-1].priority);d--);d===o.length?o[d]=l:o.splice(d,0,l),c.__current.forEach(h=>{h.name===r&&h.currentIndex>=d&&h.currentIndex++})}else c[r]={handlers:[l],runs:0};r!=="hookAdded"&&e.doAction("hookAdded",r,t,a,i)}}var H=Z;function C(e,n,s=!1){return function(t,a){let i=e[n];if(!f(t)||!s&&!m(a))return;if(!i[t])return 0;let c=0;if(s)c=i[t].handlers.length,i[t]={runs:i[t].runs,handlers:[]};else{let l=i[t].handlers;for(let o=l.length-1;o>=0;o--)l[o].namespace===a&&(l.splice(o,1),c++,i.__current.forEach(d=>{d.name===t&&d.currentIndex>=o&&d.currentIndex--}))}return t!=="hookRemoved"&&e.doAction("hookRemoved",t,a),c}}var p=C;function O(e,n){return function(r,t){let a=e[n];return typeof t<"u"?r in a&&a[r].handlers.some(i=>i.namespace===t):r in a}}var _=O;function j(e,n,s,r){return function(a,...i){let c=e[n];c[a]||(c[a]={handlers:[],runs:0}),c[a].runs++;let l=c[a].handlers;if(!l||!l.length)return s?i[0]:void 0;let o={name:a,currentIndex:0};async function d(){try{c.__current.add(o);let u=s?i[0]:void 0;for(;o.currentIndex<l.length;)u=await l[o.currentIndex].callback.apply(null,i),s&&(i[0]=u),o.currentIndex++;return s?u:void 0}finally{c.__current.delete(o)}}function h(){try{c.__current.add(o);let u=s?i[0]:void 0;for(;o.currentIndex<l.length;)u=l[o.currentIndex].callback.apply(null,i),s&&(i[0]=u),o.currentIndex++;return s?u:void 0}finally{c.__current.delete(o)}}return(r?d:h)()}}var A=j;function $(e,n){return function(){let r=e[n];return Array.from(r.__current).at(-1)?.name??null}}var y=$;function V(e,n){return function(r){let t=e[n];return typeof r>"u"?t.__current.size>0:Array.from(t.__current).some(a=>a.name===r)}}var k=V;function q(e,n){return function(r){let t=e[n];if(f(r))return t[r]&&t[r].runs?t[r].runs:0}}var x=q;var B=class{actions;filters;addAction;addFilter;removeAction;removeFilter;hasAction;hasFilter;removeAllActions;removeAllFilters;doAction;doActionAsync;applyFilters;applyFiltersAsync;currentAction;currentFilter;doingAction;doingFilter;didAction;didFilter;constructor(){this.actions=Object.create(null),this.actions.__current=new Set,this.filters=Object.create(null),this.filters.__current=new Set,this.addAction=H(this,"actions"),this.addFilter=H(this,"filters"),this.removeAction=p(this,"actions"),this.removeFilter=p(this,"filters"),this.hasAction=_(this,"actions"),this.hasFilter=_(this,"filters"),this.removeAllActions=p(this,"actions",!0),this.removeAllFilters=p(this,"filters",!0),this.doAction=A(this,"actions",!1,!1),this.doActionAsync=A(this,"actions",!1,!0),this.applyFilters=A(this,"filters",!0,!1),this.applyFiltersAsync=A(this,"filters",!0,!0),this.currentAction=y(this,"actions"),this.currentFilter=y(this,"filters"),this.doingAction=k(this,"actions"),this.doingFilter=k(this,"filters"),this.didAction=x(this,"actions"),this.didFilter=x(this,"filters")}};function G(){return new B}var F=G;var b=F(),{addAction:J,addFilter:K,removeAction:L,removeFilter:M,hasAction:P,hasFilter:Q,removeAllActions:U,removeAllFilters:W,doAction:X,doActionAsync:Y,applyFilters:N,applyFiltersAsync:ee,currentAction:te,currentFilter:re,doingAction:ne,doingFilter:oe,didAction:ie,didFilter:se,actions:ae,filters:ce}=b;return T(le);})();;
/* --- i18n.min.js --- */
/*! This file is auto-generated */
"use strict";var wp;(wp||={}).i18n=(()=>{var nt=Object.create;var L=Object.defineProperty;var at=Object.getOwnPropertyDescriptor;var it=Object.getOwnPropertyNames;var ut=Object.getPrototypeOf,lt=Object.prototype.hasOwnProperty;var ft=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports),ot=(t,r)=>{for(var e in r)L(t,e,{get:r[e],enumerable:!0})},O=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let u of it(r))!lt.call(t,u)&&u!==e&&L(t,u,{get:()=>r[u],enumerable:!(n=at(r,u))||n.enumerable});return t};var st=(t,r,e)=>(e=t!=null?nt(ut(t)):{},O(r||!t||!t.__esModule?L(e,"default",{value:t,enumerable:!0}):e,t)),pt=t=>O(L({},"__esModule",{value:!0}),t);var $=ft((It,M)=>{M.exports=window.wp.hooks});var yt={};ot(yt,{__:()=>Z,_n:()=>G,_nx:()=>B,_x:()=>q,createI18n:()=>R,defaultI18n:()=>H,getLocaleData:()=>j,hasTranslation:()=>Q,isRTL:()=>J,resetLocaleData:()=>U,setLocaleData:()=>z,sprintf:()=>P,subscribe:()=>X});var ct=/%(((\d+)\$)|(\(([$_a-zA-Z][$_a-zA-Z0-9]*)\)))?[ +0#-]*\d*(\.(\d+|\*))?(ll|[lhqL])?([cduxXefgsp%])/g;function T(t,...r){var e=0;return Array.isArray(r[0])&&(r=r[0]),t.replace(ct,function(){var n,u,l,o,f;return n=arguments[3],u=arguments[5],l=arguments[7],o=arguments[9],o==="%"?"%":(l==="*"&&(l=r[e],e++),u===void 0?(n===void 0&&(n=e+1),e++,f=r[n-1]):r[0]&&typeof r[0]=="object"&&r[0].hasOwnProperty(u)&&(f=r[0][u]),o==="f"?f=parseFloat(f)||0:o==="d"&&(f=parseInt(f)||0),l!==void 0&&(o==="f"?f=f.toFixed(l):o==="s"&&(f=f.substr(0,l))),f??"")})}function P(t,...r){return T(t,...r)}var D,I,h,N;D={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1};I=["(","?"];h={")":["("],":":["?","?:"]};N=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;function b(t){for(var r=[],e=[],n,u,l,o;n=t.match(N);){for(u=n[0],l=t.substr(0,n.index).trim(),l&&r.push(l);o=e.pop();){if(h[u]){if(h[u][0]===o){u=h[u][1]||u;break}}else if(I.indexOf(o)>=0||D[o]<D[u]){e.push(o);break}r.push(o)}h[u]||e.push(u),t=t.substr(n.index+u.length)}return t=t.trim(),t&&r.push(t),r.concat(e.reverse())}var dt={"!":function(t){return!t},"*":function(t,r){return t*r},"/":function(t,r){return t/r},"%":function(t,r){return t%r},"+":function(t,r){return t+r},"-":function(t,r){return t-r},"<":function(t,r){return t<r},"<=":function(t,r){return t<=r},">":function(t,r){return t>r},">=":function(t,r){return t>=r},"==":function(t,r){return t===r},"!=":function(t,r){return t!==r},"&&":function(t,r){return t&&r},"||":function(t,r){return t||r},"?:":function(t,r,e){if(t)throw r;return e}};function g(t,r){var e=[],n,u,l,o,f,_;for(n=0;n<t.length;n++){if(f=t[n],o=dt[f],o){for(u=o.length,l=Array(u);u--;)l[u]=e.pop();try{_=o.apply(null,l)}catch(v){return v}}else r.hasOwnProperty(f)?_=r[f]:_=+f;e.push(_)}return e[0]}function A(t){var r=b(t);return function(e){return g(r,e)}}function E(t){var r=A(t);return function(e){return+r({n:e})}}var S={contextDelimiter:"",onMissingKey:null};function _t(t){var r,e,n;for(r=t.split(";"),e=0;e<r.length;e++)if(n=r[e].trim(),n.indexOf("plural=")===0)return n.substr(7)}function x(t,r){var e;this.data=t,this.pluralForms={},this.options={};for(e in S)this.options[e]=r!==void 0&&e in r?r[e]:S[e]}x.prototype.getPluralForm=function(t,r){var e=this.pluralForms[t],n,u,l;return e||(n=this.data[t][""],l=n["Plural-Forms"]||n["plural-forms"]||n.plural_forms,typeof l!="function"&&(u=_t(n["Plural-Forms"]||n["plural-forms"]||n.plural_forms),l=E(u)),e=this.pluralForms[t]=l),e(r)};x.prototype.dcnpgettext=function(t,r,e,n,u){var l,o,f;return u===void 0?l=0:l=this.getPluralForm(t,u),o=e,r&&(o=r+this.options.contextDelimiter+e),f=this.data[t][o],f&&f[l]?f[l]:(this.options.onMissingKey&&this.options.onMissingKey(e,t),l===0?e:n)};var K={"":{plural_forms(t){return t===1?0:1}}},vt=/^i18n\.(n?gettext|has_translation)(_|$)/,R=(t,r,e)=>{let n=new x({}),u=new Set,l=()=>{u.forEach(a=>a())},o=a=>(u.add(a),()=>u.delete(a)),f=(a="default")=>n.data[a],_=(a,i="default")=>{n.data[i]={...n.data[i],...a},n.data[i][""]={...K[""],...n.data[i]?.[""]},delete n.pluralForms[i]},v=(a,i)=>{_(a,i),l()},V=(a,i="default")=>{n.data[i]={...n.data[i],...a,"":{...K[""],...n.data[i]?.[""],...a?.[""]}},delete n.pluralForms[i],l()},W=(a,i)=>{n.data={},n.pluralForms={},v(a,i)},m=(a="default",i,s,c,d)=>(n.data[a]||_(void 0,a),n.dcnpgettext(a,i,s,c,d)),y=a=>a||"default",Y=(a,i)=>{let s=m(i,void 0,a);return e?(s=e.applyFilters("i18n.gettext",s,a,i),e.applyFilters("i18n.gettext_"+y(i),s,a,i)):s},w=(a,i,s)=>{let c=m(s,i,a);return e?(c=e.applyFilters("i18n.gettext_with_context",c,a,i,s),e.applyFilters("i18n.gettext_with_context_"+y(s),c,a,i,s)):c},k=(a,i,s,c)=>{let d=m(c,void 0,a,i,s);return e?(d=e.applyFilters("i18n.ngettext",d,a,i,s,c),e.applyFilters("i18n.ngettext_"+y(c),d,a,i,s,c)):d},tt=(a,i,s,c,d)=>{let F=m(d,c,a,i,s);return e?(F=e.applyFilters("i18n.ngettext_with_context",F,a,i,s,c,d),e.applyFilters("i18n.ngettext_with_context_"+y(d),F,a,i,s,c,d)):F},rt=()=>w("ltr","text direction")==="rtl",et=(a,i,s)=>{let c=i?i+""+a:a,d=!!n.data?.[s??"default"]?.[c];return e&&(d=e.applyFilters("i18n.has_translation",d,a,i,s),d=e.applyFilters("i18n.has_translation_"+y(s),d,a,i,s)),d};if(t&&v(t,r),e){let a=i=>{vt.test(i)&&l()};e.addAction("hookAdded","core/i18n",a),e.addAction("hookRemoved","core/i18n",a)}return{getLocaleData:f,setLocaleData:v,addLocaleData:V,resetLocaleData:W,subscribe:o,__:Y,_x:w,_n:k,_nx:tt,isRTL:rt,hasTranslation:et}};var C=st($(),1),p=R(void 0,void 0,C.defaultHooks),H=p,j=p.getLocaleData.bind(p),z=p.setLocaleData.bind(p),U=p.resetLocaleData.bind(p),X=p.subscribe.bind(p),Z=p.__.bind(p),q=p._x.bind(p),G=p._n.bind(p),B=p._nx.bind(p),J=p.isRTL.bind(p),Q=p.hasTranslation.bind(p);return pt(yt);})();;
/* --- core.min.js --- */
/*! jQuery UI - v1.13.3 - 2024-04-26
* https://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(x){"use strict";var t,e,i,n,W,C,o,s,r,l,a,h,u;function E(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function L(t,e){return parseInt(x.css(t,e),10)||0}function N(t){return null!=t&&t===t.window}x.ui=x.ui||{},x.ui.version="1.13.3",
/*!
 * jQuery UI :data 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.extend(x.expr.pseudos,{data:x.expr.createPseudo?x.expr.createPseudo(function(e){return function(t){return!!x.data(t,e)}}):function(t,e,i){return!!x.data(t,i[3])}}),
/*!
 * jQuery UI Disable Selection 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.fn.extend({disableSelection:(t="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}}),
/*!
 * jQuery UI Focusable 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.ui.focusable=function(t,e){var i,n,o,s=t.nodeName.toLowerCase();return"area"===s?(o=(i=t.parentNode).name,!(!t.href||!o||"map"!==i.nodeName.toLowerCase())&&0<(i=x("img[usemap='#"+o+"']")).length&&i.is(":visible")):(/^(input|select|textarea|button|object)$/.test(s)?(n=!t.disabled)&&(o=x(t).closest("fieldset")[0])&&(n=!o.disabled):n="a"===s&&t.href||e,n&&x(t).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)t=t.parent(),e=t.css("visibility");return"visible"===e}(x(t)))},x.extend(x.expr.pseudos,{focusable:function(t){return x.ui.focusable(t,null!=x.attr(t,"tabindex"))}}),x.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):x(this[0].form)},
/*!
 * jQuery UI Form Reset Mixin 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.ui.formResetMixin={_formResetHandler:function(){var e=x(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");x.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){var t;this.form=this.element._form(),this.form.length&&((t=this.form.data("ui-form-reset-instances")||[]).length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t))},_unbindFormResetHandler:function(){var t;this.form.length&&((t=this.form.data("ui-form-reset-instances")).splice(x.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))}},x.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 *
 */
x.expr.pseudos||(x.expr.pseudos=x.expr[":"]),x.uniqueSort||(x.uniqueSort=x.unique),x.escapeSelector||(e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,i=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},x.escapeSelector=function(t){return(t+"").replace(e,i)}),x.fn.even&&x.fn.odd||x.fn.extend({even:function(){return this.filter(function(t){return t%2==0})},odd:function(){return this.filter(function(t){return t%2==1})}}),
/*!
 * jQuery UI Keycode 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},
/*!
 * jQuery UI Labels 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.fn.labels=function(){var t,e,i;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),(t=this.attr("id"))&&(i=(i=this.eq(0).parents().last()).add((i.length?i:this).siblings()),t="label[for='"+x.escapeSelector(t)+"']",e=e.add(i.find(t).addBack(t))),this.pushStack(e)):this.pushStack([])},x.ui.plugin={add:function(t,e,i){var n,o=x.ui[t].prototype;for(n in i)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}},
/*!
 * jQuery UI Position 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 *
 * https://api.jqueryui.com/position/
 */
W=Math.max,C=Math.abs,o=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,h=x.fn.position,x.position={scrollbarWidth:function(){var t,e,i;return void 0!==n?n:(i=(e=x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0],x("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),n=t-i)},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?x.position.scrollbarWidth():0,height:e?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),i=N(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:!i&&!n?x(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},x.fn.position=function(f){var c,d,p,g,m,v,y,w,b,_,t,e;return f&&f.of?(v="string"==typeof(f=x.extend({},f)).of?x(document).find(f.of):x(f.of),y=x.position.getWithinInfo(f.within),w=x.position.getScrollInfo(y),b=(f.collision||"flip").split(" "),_={},e=9===(e=(t=v)[0]).nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:N(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()},v[0].preventDefault&&(f.at="left top"),d=e.width,p=e.height,m=x.extend({},g=e.offset),x.each(["my","at"],function(){var t,e,i=(f[this]||"").split(" ");(i=1===i.length?o.test(i[0])?i.concat(["center"]):s.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=o.test(i[0])?i[0]:"center",i[1]=s.test(i[1])?i[1]:"center",t=r.exec(i[0]),e=r.exec(i[1]),_[this]=[t?t[0]:0,e?e[0]:0],f[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===b.length&&(b[1]=b[0]),"right"===f.at[0]?m.left+=d:"center"===f.at[0]&&(m.left+=d/2),"bottom"===f.at[1]?m.top+=p:"center"===f.at[1]&&(m.top+=p/2),c=E(_.at,d,p),m.left+=c[0],m.top+=c[1],this.each(function(){var i,t,r=x(this),l=r.outerWidth(),a=r.outerHeight(),e=L(this,"marginLeft"),n=L(this,"marginTop"),o=l+e+L(this,"marginRight")+w.width,s=a+n+L(this,"marginBottom")+w.height,h=x.extend({},m),u=E(_.my,r.outerWidth(),r.outerHeight());"right"===f.my[0]?h.left-=l:"center"===f.my[0]&&(h.left-=l/2),"bottom"===f.my[1]?h.top-=a:"center"===f.my[1]&&(h.top-=a/2),h.left+=u[0],h.top+=u[1],i={marginLeft:e,marginTop:n},x.each(["left","top"],function(t,e){x.ui.position[b[t]]&&x.ui.position[b[t]][e](h,{targetWidth:d,targetHeight:p,elemWidth:l,elemHeight:a,collisionPosition:i,collisionWidth:o,collisionHeight:s,offset:[c[0]+u[0],c[1]+u[1]],my:f.my,at:f.at,within:y,elem:r})}),f.using&&(t=function(t){var e=g.left-h.left,i=e+d-l,n=g.top-h.top,o=n+p-a,s={target:{element:v,left:g.left,top:g.top,width:d,height:p},element:{element:r,left:h.left,top:h.top,width:l,height:a},horizontal:i<0?"left":0<e?"right":"center",vertical:o<0?"top":0<n?"bottom":"middle"};d<l&&C(e+i)<d&&(s.horizontal="center"),p<a&&C(n+o)<p&&(s.vertical="middle"),W(C(e),C(i))>W(C(n),C(o))?s.important="horizontal":s.important="vertical",f.using.call(this,t,s)}),r.offset(x.extend(h,{using:t}))})):h.apply(this,arguments)},x.ui.position={fit:{left:function(t,e){var i,n=e.within,o=n.isWindow?n.scrollLeft:n.offset.left,n=n.width,s=t.left-e.collisionPosition.marginLeft,r=o-s,l=s+e.collisionWidth-n-o;n<e.collisionWidth?0<r&&l<=0?(i=t.left+r+e.collisionWidth-n-o,t.left+=r-i):t.left=!(0<l&&r<=0)&&l<r?o+n-e.collisionWidth:o:0<r?t.left+=r:0<l?t.left-=l:t.left=W(t.left-s,t.left)},top:function(t,e){var i,n=e.within,n=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,s=t.top-e.collisionPosition.marginTop,r=n-s,l=s+e.collisionHeight-o-n;o<e.collisionHeight?0<r&&l<=0?(i=t.top+r+e.collisionHeight-o-n,t.top+=r-i):t.top=!(0<l&&r<=0)&&l<r?n+o-e.collisionHeight:n:0<r?t.top+=r:0<l?t.top-=l:t.top=W(t.top-s,t.top)}},flip:{left:function(t,e){var i=e.within,n=i.offset.left+i.scrollLeft,o=i.width,i=i.isWindow?i.scrollLeft:i.offset.left,s=t.left-e.collisionPosition.marginLeft,r=s-i,s=s+e.collisionWidth-o-i,l="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,a="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,h=-2*e.offset[0];r<0?((o=t.left+l+a+h+e.collisionWidth-o-n)<0||o<C(r))&&(t.left+=l+a+h):0<s&&(0<(n=t.left-e.collisionPosition.marginLeft+l+a+h-i)||C(n)<s)&&(t.left+=l+a+h)},top:function(t,e){var i=e.within,n=i.offset.top+i.scrollTop,o=i.height,i=i.isWindow?i.scrollTop:i.offset.top,s=t.top-e.collisionPosition.marginTop,r=s-i,s=s+e.collisionHeight-o-i,l="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,a="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,h=-2*e.offset[1];r<0?((o=t.top+l+a+h+e.collisionHeight-o-n)<0||o<C(r))&&(t.top+=l+a+h):0<s&&(0<(n=t.top-e.collisionPosition.marginTop+l+a+h-i)||C(n)<s)&&(t.top+=l+a+h)}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}},x.ui.safeActiveElement=function(e){var i;try{i=e.activeElement}catch(t){i=e.body}return i=(i=i||e.body).nodeName?i:e.body},x.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&x(t).trigger("blur")},
/*!
 * jQuery UI Scroll Parent 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=x(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:x(this[0].ownerDocument||document)},
/*!
 * jQuery UI Tabbable 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.extend(x.expr.pseudos,{tabbable:function(t){var e=x.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&x.ui.focusable(t,i)}}),
/*!
 * jQuery UI Unique ID 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.fn.extend({uniqueId:(u=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++u)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&x(this).removeAttr("id")})}});
/*!
 * jQuery UI Widget 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
var f,c=0,d=Array.prototype.hasOwnProperty,p=Array.prototype.slice;x.cleanData=(f=x.cleanData,function(t){for(var e,i,n=0;null!=(i=t[n]);n++)(e=x._data(i,"events"))&&e.remove&&x(i).triggerHandler("remove");f(t)}),x.widget=function(t,i,e){var n,o,s,r={},l=t.split(".")[0],a=l+"-"+(t=t.split(".")[1]);return e||(e=i,i=x.Widget),Array.isArray(e)&&(e=x.extend.apply(null,[{}].concat(e))),x.expr.pseudos[a.toLowerCase()]=function(t){return!!x.data(t,a)},x[l]=x[l]||{},n=x[l][t],o=x[l][t]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},x.extend(o,n,{version:e.version,_proto:x.extend({},e),_childConstructors:[]}),(s=new i).options=x.widget.extend({},s.options),x.each(e,function(e,n){function o(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}r[e]="function"!=typeof n?n:function(){var t,e=this._super,i=this._superApply;return this._super=o,this._superApply=s,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}}),o.prototype=x.widget.extend(s,{widgetEventPrefix:n&&s.widgetEventPrefix||t},r,{constructor:o,namespace:l,widgetName:t,widgetFullName:a}),n?(x.each(n._childConstructors,function(t,e){var i=e.prototype;x.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete n._childConstructors):i._childConstructors.push(o),x.widget.bridge(t,o),o},x.widget.extend=function(t){for(var e,i,n=p.call(arguments,1),o=0,s=n.length;o<s;o++)for(e in n[o])i=n[o][e],d.call(n[o],e)&&void 0!==i&&(x.isPlainObject(i)?t[e]=x.isPlainObject(t[e])?x.widget.extend({},t[e],i):x.widget.extend({},i):t[e]=i);return t},x.widget.bridge=function(s,e){var r=e.prototype.widgetFullName||s;x.fn[s]=function(i){var t="string"==typeof i,n=p.call(arguments,1),o=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=x.data(this,r);return"instance"===i?(o=e,!1):e?"function"!=typeof e[i]||"_"===i.charAt(0)?x.error("no such method '"+i+"' for "+s+" widget instance"):(t=e[i].apply(e,n))!==e&&void 0!==t?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:x.error("cannot call methods on "+s+" prior to initialization; attempted to call method '"+i+"'")}):o=void 0:(n.length&&(i=x.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=x.data(this,r);t?(t.option(i||{}),t._init&&t._init()):x.data(this,r,new e(i,this))})),o}},x.Widget=function(){},x.Widget._childConstructors=[],x.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=x(e||this.defaultElement||this)[0],this.element=x(e),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=x(),this.hoverable=x(),this.focusable=x(),this.classesElementLookup={},e!==this&&(x.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=x(e.style?e.ownerDocument:e.document||e),this.window=x(this.document[0].defaultView||this.document[0].parentWindow)),this.options=x.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:x.noop,_create:x.noop,_init:x.noop,destroy:function(){var i=this;this._destroy(),x.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:x.noop,widget:function(){return this.element},option:function(t,e){var i,n,o,s=t;if(0===arguments.length)return x.widget.extend({},this.options);if("string"==typeof t)if(s={},t=(i=t.split(".")).shift(),i.length){for(n=s[t]=x.widget.extend({},this.options[t]),o=0;o<i.length-1;o++)n[i[o]]=n[i[o]]||{},n=n[i[o]];if(t=i.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=e}return this._setOptions(s),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,n;for(e in t)n=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&n&&n.length&&(i=x(n.get()),this._removeClass(n,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(o){var s=[],r=this;function t(t,e){for(var i,n=0;n<t.length;n++)i=r.classesElementLookup[t[n]]||x(),i=o.add?(function(){var i=[];o.element.each(function(t,e){x.map(r.classesElementLookup,function(t){return t}).some(function(t){return t.is(e)})||i.push(e)}),r._on(x(i),{remove:"_untrackClassesElement"})}(),x(x.uniqueSort(i.get().concat(o.element.get())))):x(i.not(o.element).get()),r.classesElementLookup[t[n]]=i,s.push(t[n]),e&&o.classes[t[n]]&&s.push(o.classes[t[n]])}return(o=x.extend({element:this.element,classes:this.options.classes||{}},o)).keys&&t(o.keys.match(/\S+/g)||[],!0),o.extra&&t(o.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(i){var n=this;x.each(n.classesElementLookup,function(t,e){-1!==x.inArray(i.target,e)&&(n.classesElementLookup[t]=x(e.not(i.target).get()))}),this._off(x(i.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){var o="string"==typeof t||null===t,e={extra:o?e:i,keys:o?t:e,element:o?this.element:t,add:n="boolean"==typeof n?n:i};return e.element.toggleClass(this._classes(e),n),this},_on:function(o,s,t){var r,l=this;"boolean"!=typeof o&&(t=s,s=o,o=!1),t?(s=r=x(s),this.bindings=this.bindings.add(s)):(t=s,s=this.element,r=this.widget()),x.each(t,function(t,e){function i(){if(o||!0!==l.options.disabled&&!x(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||x.guid++);var t=t.match(/^([\w:-]*)\s*(.*)$/),n=t[1]+l.eventNamespace,t=t[2];t?r.on(n,t,i):s.on(n,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e),this.bindings=x(this.bindings.not(t).get()),this.focusable=x(this.focusable.not(t).get()),this.hoverable=x(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(x(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(x(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var n,o,s=this.options[t];if(i=i||{},(e=x.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(n in o)n in e||(e[n]=o[n]);return this.element.trigger(e,i),!("function"==typeof s&&!1===s.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},x.each({show:"fadeIn",hide:"fadeOut"},function(s,r){x.Widget.prototype["_"+s]=function(e,t,i){var n,o=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||r:s;"number"==typeof(t=t||{})?t={duration:t}:!0===t&&(t={}),n=!x.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&x.effects&&x.effects.effect[o]?e[s](t):o!==s&&e[o]?e[o](t.duration,t.easing,i):e.queue(function(t){x(this)[s](),i&&i.call(e[0]),t()})}})});;
/* --- bdt-uikit.js --- */
/*! bdtUIkit 3.16.3 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */
(function(ge, me) {
  typeof exports == "object" && typeof module < "u" ? module.exports = me() : typeof define == "function" && define.amd ? define("uikit", me) : (ge = typeof globalThis < "u" ? globalThis : ge || self,
  ge.bdtUIkit = me())
}
)(this, function() {
  "use strict";
  const {hasOwnProperty: ge, toString: me} = Object.prototype;
  function Mt(t, e) {
      return ge.call(t, e)
  }
  const wo = /\B([A-Z])/g
    , Zt = ft(t=>t.replace(wo, "-$1").toLowerCase())
    , bo = /-(\w)/g
    , ve = ft(t=>t.replace(bo, bs))
    , _t = ft(t=>t.length ? bs(null, t.charAt(0)) + t.slice(1) : "");
  function bs(t, e) {
      return e ? e.toUpperCase() : ""
  }
  function ht(t, e) {
      var i;
      return (i = t == null ? void 0 : t.startsWith) == null ? void 0 : i.call(t, e)
  }
  function Qt(t, e) {
      var i;
      return (i = t == null ? void 0 : t.endsWith) == null ? void 0 : i.call(t, e)
  }
  function v(t, e) {
      var i;
      return (i = t == null ? void 0 : t.includes) == null ? void 0 : i.call(t, e)
  }
  function $t(t, e) {
      var i;
      return (i = t == null ? void 0 : t.findIndex) == null ? void 0 : i.call(t, e)
  }
  const {isArray: Q, from: _i} = Array
    , {assign: xt} = Object;
  function dt(t) {
      return typeof t == "function"
  }
  function Et(t) {
      return t !== null && typeof t == "object"
  }
  function yt(t) {
      return me.call(t) === "[object Object]"
  }
  function Ut(t) {
      return Et(t) && t === t.window
  }
  function je(t) {
      return Ei(t) === 9
  }
  function qe(t) {
      return Ei(t) >= 1
  }
  function te(t) {
      return Ei(t) === 1
  }
  function Ei(t) {
      return !Ut(t) && Et(t) && t.nodeType
  }
  function Ii(t) {
      return typeof t == "boolean"
  }
  function N(t) {
      return typeof t == "string"
  }
  function ee(t) {
      return typeof t == "number"
  }
  function vt(t) {
      return ee(t) || N(t) && !isNaN(t - parseFloat(t))
  }
  function we(t) {
      return !(Q(t) ? t.length : Et(t) && Object.keys(t).length)
  }
  function V(t) {
      return t === void 0
  }
  function Pi(t) {
      return Ii(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t
  }
  function kt(t) {
      const e = Number(t);
      return isNaN(e) ? !1 : e
  }
  function $(t) {
      return parseFloat(t) || 0
  }
  function R(t) {
      return k(t)[0]
  }
  function k(t) {
      return qe(t) ? [t] : Array.from(t || []).filter(qe)
  }
  function ie(t) {
      if (Ut(t))
          return t;
      t = R(t);
      const e = je(t) ? t : t == null ? void 0 : t.ownerDocument;
      return (e == null ? void 0 : e.defaultView) || window
  }
  function be(t, e) {
      return t === e || Et(t) && Et(e) && Object.keys(t).length === Object.keys(e).length && St(t, (i,s)=>i === e[s])
  }
  function Ai(t, e, i) {
      return t.replace(new RegExp(`${e}|${i}`,"g"), s=>s === e ? i : e)
  }
  function se(t) {
      return t[t.length - 1]
  }
  function St(t, e) {
      for (const i in t)
          if (e(t[i], i) === !1)
              return !1;
      return !0
  }
  function Ve(t, e) {
      return t.slice().sort(({[e]: i=0},{[e]: s=0})=>i > s ? 1 : s > i ? -1 : 0)
  }
  function Nt(t, e) {
      return t.reduce((i,s)=>i + $(dt(e) ? e(s) : s[e]), 0)
  }
  function $s(t, e) {
      const i = new Set;
      return t.filter(({[e]: s})=>i.has(s) ? !1 : i.add(s))
  }
  function U(t, e=0, i=1) {
      return Math.min(Math.max(kt(t) || 0, e), i)
  }
  function P() {}
  function Oi(...t) {
      return [["bottom", "top"], ["right", "left"]].every(([e,i])=>Math.min(...t.map(({[e]: s})=>s)) - Math.max(...t.map(({[i]: s})=>s)) > 0)
  }
  function Ye(t, e) {
      return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
  }
  function Di(t, e, i) {
      const s = e === "width" ? "height" : "width";
      return {
          [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s],
          [e]: i
      }
  }
  function xs(t, e) {
      t = {
          ...t
      };
      for (const i in t)
          t = t[i] > e[i] ? Di(t, i, e[i]) : t;
      return t
  }
  function $o(t, e) {
      t = xs(t, e);
      for (const i in t)
          t = t[i] < e[i] ? Di(t, i, e[i]) : t;
      return t
  }
  const Ge = {
      ratio: Di,
      contain: xs,
      cover: $o
  };
  function ct(t, e, i=0, s=!1) {
      e = k(e);
      const {length: n} = e;
      return n ? (t = vt(t) ? kt(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? n - 1 : e.indexOf(R(t)),
      s ? U(t, 0, n - 1) : (t %= n,
      t < 0 ? t + n : t)) : -1
  }
  function ft(t) {
      const e = Object.create(null);
      return i=>e[i] || (e[i] = t(i))
  }
  class Xe {
      constructor() {
          this.promise = new Promise((e,i)=>{
              this.reject = i,
              this.resolve = e
          }
          )
      }
  }
  function f(t, e, i) {
      var s;
      if (Et(e)) {
          for (const n in e)
              f(t, n, e[n]);
          return
      }
      if (V(i))
          return (s = R(t)) == null ? void 0 : s.getAttribute(e);
      for (const n of k(t))
          dt(i) && (i = i.call(n, f(n, e))),
          i === null ? $e(n, e) : n.setAttribute(e, i)
  }
  function wt(t, e) {
      return k(t).some(i=>i.hasAttribute(e))
  }
  function $e(t, e) {
      k(t).forEach(i=>i.removeAttribute(e))
  }
  function tt(t, e) {
      for (const i of [e, `data-${e}`])
          if (wt(t, i))
              return f(t, i)
  }
  const xo = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
  };
  function Bi(t) {
      return k(t).some(e=>xo[e.tagName.toLowerCase()])
  }
  function q(t) {
      return k(t).some(e=>e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }
  const xe = "input,select,textarea,button";
  function Mi(t) {
      return k(t).some(e=>_(e, xe))
  }
  const ye = `${xe},a[href],[tabindex]`;
  function Je(t) {
      return _(t, ye)
  }
  function A(t) {
      var e;
      return (e = R(t)) == null ? void 0 : e.parentElement
  }
  function ke(t, e) {
      return k(t).filter(i=>_(i, e))
  }
  function _(t, e) {
      return k(t).some(i=>i.matches(e))
  }
  function Y(t, e) {
      return te(t) ? t.closest(ht(e, ">") ? e.slice(1) : e) : k(t).map(i=>Y(i, e)).filter(Boolean)
  }
  function D(t, e) {
      return N(e) ? !!Y(t, e) : R(e).contains(R(t))
  }
  function ne(t, e) {
      const i = [];
      for (; t = A(t); )
          (!e || _(t, e)) && i.push(t);
      return i
  }
  function E(t, e) {
      t = R(t);
      const i = t ? k(t.children) : [];
      return e ? ke(i, e) : i
  }
  function oe(t, e) {
      return e ? k(t).indexOf(R(e)) : E(A(t)).indexOf(t)
  }
  function ut(t, e) {
      return Ni(t, ks(t, e))
  }
  function Se(t, e) {
      return Te(t, ks(t, e))
  }
  function Ni(t, e) {
      return R(Ss(t, R(e), "querySelector"))
  }
  function Te(t, e) {
      return k(Ss(t, R(e), "querySelectorAll"))
  }
  const yo = /(^|[^\\],)\s*[!>+~-]/
    , ys = ft(t=>t.match(yo));
  function ks(t, e=document) {
      return N(t) && ys(t) || je(e) ? e : e.ownerDocument
  }
  const ko = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g
    , So = ft(t=>t.replace(ko, "$1 *"));
  function Ss(t, e=document, i) {
      if (!t || !N(t))
          return t;
      if (t = So(t),
      ys(t)) {
          const s = Co(t);
          t = "";
          for (let n of s) {
              let o = e;
              if (n[0] === "!") {
                  const r = n.substr(1).trim().split(" ");
                  if (o = Y(A(e), r[0]),
                  n = r.slice(1).join(" ").trim(),
                  !n.length && s.length === 1)
                      return o
              }
              if (n[0] === "-") {
                  const r = n.substr(1).trim().split(" ")
                    , a = (o || e).previousElementSibling;
                  o = _(a, n.substr(1)) ? a : null,
                  n = r.slice(1).join(" ")
              }
              o && (t += `${t ? "," : ""}${_o(o)} ${n}`)
          }
          e = document
      }
      try {
          return e[i](t)
      } catch {
          return null
      }
  }
  const To = /.*?[^\\](?:,|$)/g
    , Co = ft(t=>t.match(To).map(e=>e.replace(/,$/, "").trim()));
  function _o(t) {
      const e = [];
      for (; t.parentNode; ) {
          const i = f(t, "id");
          if (i) {
              e.unshift(`#${zi(i)}`);
              break
          } else {
              let {tagName: s} = t;
              s !== "HTML" && (s += `:nth-child(${oe(t) + 1})`),
              e.unshift(s),
              t = t.parentNode
          }
      }
      return e.join(" > ")
  }
  function zi(t) {
      return N(t) ? CSS.escape(t) : ""
  }
  function x(...t) {
      let[e,i,s,n,o=!1] = Fi(t);
      n.length > 1 && (n = Io(n)),
      o != null && o.self && (n = Po(n)),
      s && (n = Eo(s, n));
      for (const r of i)
          for (const a of e)
              a.addEventListener(r, n, o);
      return ()=>zt(e, i, n, o)
  }
  function zt(...t) {
      let[e,i,,s,n=!1] = Fi(t);
      for (const o of i)
          for (const r of e)
              r.removeEventListener(o, s, n)
  }
  function L(...t) {
      const [e,i,s,n,o=!1,r] = Fi(t)
        , a = x(e, i, s, l=>{
          const c = !r || r(l);
          c && (a(),
          n(l, c))
      }
      , o);
      return a
  }
  function m(t, e, i) {
      return Hi(t).every(s=>s.dispatchEvent(Ft(e, !0, !0, i)))
  }
  function Ft(t, e=!0, i=!1, s) {
      return N(t) && (t = new CustomEvent(t,{
          bubbles: e,
          cancelable: i,
          detail: s
      })),
      t
  }
  function Fi(t) {
      return t[0] = Hi(t[0]),
      N(t[1]) && (t[1] = t[1].split(" ")),
      dt(t[2]) && t.splice(2, 0, !1),
      t
  }
  function Eo(t, e) {
      return i=>{
          const s = t[0] === ">" ? Te(t, i.currentTarget).reverse().filter(n=>D(i.target, n))[0] : Y(i.target, t);
          s && (i.current = s,
          e.call(this, i),
          delete i.current)
      }
  }
  function Io(t) {
      return e=>Q(e.detail) ? t(e, ...e.detail) : t(e)
  }
  function Po(t) {
      return function(e) {
          if (e.target === e.currentTarget || e.target === e.current)
              return t.call(null, e)
      }
  }
  function Ts(t) {
      return t && "addEventListener"in t
  }
  function Ao(t) {
      return Ts(t) ? t : R(t)
  }
  function Hi(t) {
      return Q(t) ? t.map(Ao).filter(Boolean) : N(t) ? Te(t) : Ts(t) ? [t] : k(t)
  }
  function Tt(t) {
      return t.pointerType === "touch" || !!t.touches
  }
  function re(t) {
      var e, i;
      const {clientX: s, clientY: n} = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
      return {
          x: s,
          y: n
      }
  }
  const Oo = {
      "animation-iteration-count": !0,
      "column-count": !0,
      "fill-opacity": !0,
      "flex-grow": !0,
      "flex-shrink": !0,
      "font-weight": !0,
      "line-height": !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      "stroke-dasharray": !0,
      "stroke-dashoffset": !0,
      widows: !0,
      "z-index": !0,
      zoom: !0
  };
  function h(t, e, i, s) {
      const n = k(t);
      for (const o of n)
          if (N(e)) {
              if (e = Li(e),
              V(i))
                  return getComputedStyle(o).getPropertyValue(e);
              o.style.setProperty(e, vt(i) && !Oo[e] ? `${i}px` : i || ee(i) ? i : "", s)
          } else if (Q(e)) {
              const r = {};
              for (const a of e)
                  r[a] = h(o, a);
              return r
          } else
              Et(e) && (s = i,
              St(e, (r,a)=>h(o, a, r, s)));
      return n[0]
  }
  const Li = ft(t=>Do(t));
  function Do(t) {
      if (ht(t, "--"))
          return t;
      t = Zt(t);
      const {style: e} = document.documentElement;
      if (t in e)
          return t;
      for (const i of ["webkit", "moz"]) {
          const s = `-${i}-${t}`;
          if (s in e)
              return s
      }
  }
  function y(t, ...e) {
      Cs(t, e, "add")
  }
  function z(t, ...e) {
      Cs(t, e, "remove")
  }
  function Wi(t, e) {
      f(t, "class", i=>(i || "").replace(new RegExp(`\\b${e}\\b\\s?`,"g"), ""))
  }
  function Ri(t, ...e) {
      e[0] && z(t, e[0]),
      e[1] && y(t, e[1])
  }
  function B(t, e) {
      return [e] = ji(e),
      !!e && k(t).some(i=>i.classList.contains(e))
  }
  function j(t, e, i) {
      const s = ji(e);
      V(i) || (i = !!i);
      for (const n of k(t))
          for (const o of s)
              n.classList.toggle(o, i)
  }
  function Cs(t, e, i) {
      e = e.reduce((s,n)=>s.concat(ji(n)), []);
      for (const s of k(t))
          s.classList[i](...e)
  }
  function ji(t) {
      return String(t).split(/[ ,]/).filter(Boolean)
  }
  function Bo(t, e, i=400, s="linear") {
      return i = Math.round(i),
      Promise.all(k(t).map(n=>new Promise((o,r)=>{
          for (const l in e) {
              const c = h(n, l);
              c === "" && h(n, l, c)
          }
          const a = setTimeout(()=>m(n, "transitionend"), i);
          L(n, "transitionend transitioncanceled", ({type: l})=>{
              clearTimeout(a),
              z(n, "bdt-transition"),
              h(n, {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionTimingFunction: ""
              }),
              l === "transitioncanceled" ? r() : o(n)
          }
          , {
              self: !0
          }),
          y(n, "bdt-transition"),
          h(n, {
              transitionProperty: Object.keys(e).map(Li).join(","),
              transitionDuration: `${i}ms`,
              transitionTimingFunction: s,
              ...e
          })
      }
      )))
  }
  const S = {
      start: Bo,
      async stop(t) {
          m(t, "transitionend"),
          await Promise.resolve()
      },
      async cancel(t) {
          m(t, "transitioncanceled"),
          await Promise.resolve()
      },
      inProgress(t) {
          return B(t, "bdt-transition")
      }
  }
    , Ce = "bdt-animation-";
  function _s(t, e, i=200, s, n) {
      return Promise.all(k(t).map(o=>new Promise((r,a)=>{
          m(o, "animationcanceled");
          const l = setTimeout(()=>m(o, "animationend"), i);
          L(o, "animationend animationcanceled", ({type: c})=>{
              clearTimeout(l),
              c === "animationcanceled" ? a() : r(o),
              h(o, "animationDuration", ""),
              Wi(o, `${Ce}\\S*`)
          }
          , {
              self: !0
          }),
          h(o, "animationDuration", `${i}ms`),
          y(o, e, Ce + (n ? "leave" : "enter")),
          ht(e, Ce) && (s && y(o, `bdt-transform-origin-${s}`),
          n && y(o, `${Ce}reverse`))
      }
      )))
  }
  const Mo = new RegExp(`${Ce}(enter|leave)`)
    , pt = {
      in: _s,
      out(t, e, i, s) {
          return _s(t, e, i, s, !0)
      },
      inProgress(t) {
          return Mo.test(f(t, "class"))
      },
      cancel(t) {
          m(t, "animationcanceled")
      }
  };
  function No(t) {
      if (document.readyState !== "loading") {
          t();
          return
      }
      L(document, "DOMContentLoaded", t)
  }
  function X(t, ...e) {
      return e.some(i=>{
          var s;
          return ((s = t == null ? void 0 : t.tagName) == null ? void 0 : s.toLowerCase()) === i.toLowerCase()
      }
      )
  }
  function Es(t) {
      return t = w(t),
      t.innerHTML = "",
      t
  }
  function It(t, e) {
      return V(e) ? w(t).innerHTML : W(Es(t), e)
  }
  const zo = Qe("prepend")
    , W = Qe("append")
    , Ke = Qe("before")
    , Ze = Qe("after");
  function Qe(t) {
      return function(e, i) {
          var s;
          const n = k(N(i) ? Ht(i) : i);
          return (s = w(e)) == null || s[t](...n),
          Is(n)
      }
  }
  function ot(t) {
      k(t).forEach(e=>e.remove())
  }
  function Ue(t, e) {
      for (e = R(Ke(t, e)); e.firstChild; )
          e = e.firstChild;
      return W(e, t),
      e
  }
  function qi(t, e) {
      return k(k(t).map(i=>i.hasChildNodes() ? Ue(k(i.childNodes), e) : W(i, e)))
  }
  function _e(t) {
      k(t).map(A).filter((e,i,s)=>s.indexOf(e) === i).forEach(e=>e.replaceWith(...e.childNodes))
  }
  const Fo = /^\s*<(\w+|!)[^>]*>/
    , Ho = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
  function Ht(t) {
      const e = Ho.exec(t);
      if (e)
          return document.createElement(e[1]);
      const i = document.createElement("div");
      return Fo.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t,
      Is(i.childNodes)
  }
  function Is(t) {
      return t.length > 1 ? t : t[0]
  }
  function Ct(t, e) {
      if (te(t))
          for (e(t),
          t = t.firstElementChild; t; ) {
              const i = t.nextElementSibling;
              Ct(t, e),
              t = i
          }
  }
  function w(t, e) {
      return Ps(t) ? R(Ht(t)) : Ni(t, e)
  }
  function O(t, e) {
      return Ps(t) ? k(Ht(t)) : Te(t, e)
  }
  function Ps(t) {
      return N(t) && ht(t.trim(), "<")
  }
  const Lt = {
      width: ["left", "right"],
      height: ["top", "bottom"]
  };
  function b(t) {
      const e = te(t) ? R(t).getBoundingClientRect() : {
          height: et(t),
          width: Ee(t),
          top: 0,
          left: 0
      };
      return {
          height: e.height,
          width: e.width,
          top: e.top,
          left: e.left,
          bottom: e.top + e.height,
          right: e.left + e.width
      }
  }
  function I(t, e) {
      const i = b(t);
      if (t) {
          const {scrollY: n, scrollX: o} = ie(t)
            , r = {
              height: n,
              width: o
          };
          for (const a in Lt)
              for (const l of Lt[a])
                  i[l] += r[a]
      }
      if (!e)
          return i;
      const s = h(t, "position");
      St(h(t, ["left", "top"]), (n,o)=>h(t, o, e[o] - i[o] + $(s === "absolute" && n === "auto" ? ti(t)[o] : n)))
  }
  function ti(t) {
      let {top: e, left: i} = I(t);
      const {ownerDocument: {body: s, documentElement: n}, offsetParent: o} = R(t);
      let r = o || n;
      for (; r && (r === s || r === n) && h(r, "position") === "static"; )
          r = r.parentNode;
      if (te(r)) {
          const a = I(r);
          e -= a.top + $(h(r, "borderTopWidth")),
          i -= a.left + $(h(r, "borderLeftWidth"))
      }
      return {
          top: e - $(h(t, "marginTop")),
          left: i - $(h(t, "marginLeft"))
      }
  }
  function Wt(t) {
      t = R(t);
      const e = [t.offsetTop, t.offsetLeft];
      for (; t = t.offsetParent; )
          if (e[0] += t.offsetTop + $(h(t, "borderTopWidth")),
          e[1] += t.offsetLeft + $(h(t, "borderLeftWidth")),
          h(t, "position") === "fixed") {
              const i = ie(t);
              return e[0] += i.scrollY,
              e[1] += i.scrollX,
              e
          }
      return e
  }
  const et = As("height")
    , Ee = As("width");
  function As(t) {
      const e = _t(t);
      return (i,s)=>{
          if (V(s)) {
              if (Ut(i))
                  return i[`inner${e}`];
              if (je(i)) {
                  const n = i.documentElement;
                  return Math.max(n[`offset${e}`], n[`scroll${e}`])
              }
              return i = R(i),
              s = h(i, t),
              s = s === "auto" ? i[`offset${e}`] : $(s) || 0,
              s - ae(i, t)
          } else
              return h(i, t, !s && s !== 0 ? "" : +s + ae(i, t) + "px")
      }
  }
  function ae(t, e, i="border-box") {
      return h(t, "boxSizing") === i ? Nt(Lt[e].map(_t), s=>$(h(t, `padding${s}`)) + $(h(t, `border${s}Width`))) : 0
  }
  function ei(t) {
      for (const e in Lt)
          for (const i in Lt[e])
              if (Lt[e][i] === t)
                  return Lt[e][1 - i];
      return t
  }
  function rt(t, e="width", i=window, s=!1) {
      return N(t) ? Nt(Wo(t), n=>{
          const o = jo(n);
          return o ? qo(o === "vh" ? Vo() : o === "vw" ? Ee(ie(i)) : s ? i[`offset${_t(e)}`] : b(i)[e], n) : n
      }
      ) : $(t)
  }
  const Lo = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g
    , Wo = ft(t=>t.toString().replace(/\s/g, "").match(Lo) || [])
    , Ro = /(?:v[hw]|%)$/
    , jo = ft(t=>(t.match(Ro) || [])[0]);
  function qo(t, e) {
      return t * $(e) / 100
  }
  let Ie, le;
  function Vo() {
      return Ie || (le || (le = w("<div>"),
      h(le, {
          height: "100vh",
          position: "fixed"
      }),
      x(window, "resize", ()=>Ie = null)),
      W(document.body, le),
      Ie = le.clientHeight,
      ot(le),
      Ie)
  }
  const Rt = typeof window < "u"
    , J = Rt && document.dir === "rtl"
    , jt = Rt && "ontouchstart"in window
    , he = Rt && window.PointerEvent
    , gt = he ? "pointerdown" : jt ? "touchstart" : "mousedown"
    , ii = he ? "pointermove" : jt ? "touchmove" : "mousemove"
    , Pt = he ? "pointerup" : jt ? "touchend" : "mouseup"
    , At = he ? "pointerenter" : jt ? "" : "mouseenter"
    , qt = he ? "pointerleave" : jt ? "" : "mouseleave"
    , si = he ? "pointercancel" : "touchcancel"
    , G = {
      reads: [],
      writes: [],
      read(t) {
          return this.reads.push(t),
          Yi(),
          t
      },
      write(t) {
          return this.writes.push(t),
          Yi(),
          t
      },
      clear(t) {
          Ds(this.reads, t),
          Ds(this.writes, t)
      },
      flush: Vi
  };
  function Vi(t) {
      Os(G.reads),
      Os(G.writes.splice(0)),
      G.scheduled = !1,
      (G.reads.length || G.writes.length) && Yi(t + 1)
  }
  const Yo = 4;
  function Yi(t) {
      G.scheduled || (G.scheduled = !0,
      t && t < Yo ? Promise.resolve().then(()=>Vi(t)) : requestAnimationFrame(()=>Vi(1)))
  }
  function Os(t) {
      let e;
      for (; e = t.shift(); )
          try {
              e()
          } catch (i) {
              console.error(i)
          }
  }
  function Ds(t, e) {
      const i = t.indexOf(e);
      return ~i && t.splice(i, 1)
  }
  function Gi() {}
  Gi.prototype = {
      positions: [],
      init() {
          this.positions = [];
          let t;
          this.unbind = x(document, "mousemove", e=>t = re(e)),
          this.interval = setInterval(()=>{
              t && (this.positions.push(t),
              this.positions.length > 5 && this.positions.shift())
          }
          , 50)
      },
      cancel() {
          var t;
          (t = this.unbind) == null || t.call(this),
          clearInterval(this.interval)
      },
      movesTo(t) {
          if (this.positions.length < 2)
              return !1;
          const e = t.getBoundingClientRect()
            , {left: i, right: s, top: n, bottom: o} = e
            , [r] = this.positions
            , a = se(this.positions)
            , l = [r, a];
          return Ye(a, e) ? !1 : [[{
              x: i,
              y: n
          }, {
              x: s,
              y: o
          }], [{
              x: i,
              y: o
          }, {
              x: s,
              y: n
          }]].some(u=>{
              const d = Go(l, u);
              return d && Ye(d, e)
          }
          )
      }
  };
  function Go([{x: t, y: e},{x: i, y: s}], [{x: n, y: o},{x: r, y: a}]) {
      const l = (a - o) * (i - t) - (r - n) * (s - e);
      if (l === 0)
          return !1;
      const c = ((r - n) * (e - o) - (a - o) * (t - n)) / l;
      return c < 0 ? !1 : {
          x: t + c * (i - t),
          y: e + c * (s - e)
      }
  }
  function ce(t, e, i, s=!0) {
      const n = new IntersectionObserver(s ? (o,r)=>{
          o.some(a=>a.isIntersecting) && e(o, r)
      }
      : e,i);
      for (const o of k(t))
          n.observe(o);
      return n
  }
  const Xo = Rt && window.ResizeObserver;
  function Pe(t, e, i={
      box: "border-box"
  }) {
      return Xo ? Ms(ResizeObserver, t, e, i) : (Jo(),
      Ae.add(e),
      {
          disconnect() {
              Ae.delete(e)
          }
      })
  }
  let Ae;
  function Jo() {
      if (Ae)
          return;
      Ae = new Set;
      let t;
      const e = ()=>{
          if (!t) {
              t = !0,
              requestAnimationFrame(()=>t = !1);
              for (const i of Ae)
                  i()
          }
      }
      ;
      x(window, "load resize", e),
      x(document, "loadedmetadata load", e, !0)
  }
  function Bs(t, e, i) {
      return Ms(MutationObserver, t, e, i)
  }
  function Ms(t, e, i, s) {
      const n = new t(i);
      for (const o of k(e))
          n.observe(o, s);
      return n
  }
  const K = {};
  K.events = K.created = K.beforeConnect = K.connected = K.beforeDisconnect = K.disconnected = K.destroy = Xi,
  K.args = function(t, e) {
      return e !== !1 && Xi(e || t)
  }
  ,
  K.update = function(t, e) {
      return Ve(Xi(t, dt(e) ? {
          read: e
      } : e), "order")
  }
  ,
  K.props = function(t, e) {
      if (Q(e)) {
          const i = {};
          for (const s of e)
              i[s] = String;
          e = i
      }
      return K.methods(t, e)
  }
  ,
  K.computed = K.methods = function(t, e) {
      return e ? t ? {
          ...t,
          ...e
      } : e : t
  }
  ,
  K.i18n = K.data = function(t, e, i) {
      return i ? Ns(t, e, i) : e ? t ? function(s) {
          return Ns(t, e, s)
      }
      : e : t
  }
  ;
  function Ns(t, e, i) {
      return K.computed(dt(t) ? t.call(i, i) : t, dt(e) ? e.call(i, i) : e)
  }
  function Xi(t, e) {
      return t = t && !Q(t) ? [t] : t,
      e ? t ? t.concat(e) : Q(e) ? e : [e] : t
  }
  function Ko(t, e) {
      return V(e) ? t : e
  }
  function ue(t, e, i) {
      const s = {};
      if (dt(e) && (e = e.options),
      e.extends && (t = ue(t, e.extends, i)),
      e.mixins)
          for (const o of e.mixins)
              t = ue(t, o, i);
      for (const o in t)
          n(o);
      for (const o in e)
          Mt(t, o) || n(o);
      function n(o) {
          s[o] = (K[o] || Ko)(t[o], e[o], i)
      }
      return s
  }
  function de(t, e=[]) {
      try {
          return t ? ht(t, "{") ? JSON.parse(t) : e.length && !v(t, ":") ? {
              [e[0]]: t
          } : t.split(";").reduce((i,s)=>{
              const [n,o] = s.split(/:(.*)/);
              return n && !V(o) && (i[n.trim()] = o.trim()),
              i
          }
          , {}) : {}
      } catch {
          return {}
      }
  }
  function zs(t) {
      if (oi(t) && Ji(t, {
          func: "playVideo",
          method: "play"
      }),
      ni(t))
          try {
              t.play().catch(P)
          } catch {}
  }
  function Fs(t) {
      oi(t) && Ji(t, {
          func: "pauseVideo",
          method: "pause"
      }),
      ni(t) && t.pause()
  }
  function Hs(t) {
      oi(t) && Ji(t, {
          func: "mute",
          method: "setVolume",
          value: 0
      }),
      ni(t) && (t.muted = !0)
  }
  function Ls(t) {
      return ni(t) || oi(t)
  }
  function ni(t) {
      return X(t, "video")
  }
  function oi(t) {
      return X(t, "iframe") && (Ws(t) || Rs(t))
  }
  function Ws(t) {
      return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
  }
  function Rs(t) {
      return !!t.src.match(/vimeo\.com\/video\/.*/)
  }
  async function Ji(t, e) {
      await Qo(t),
      js(t, e)
  }
  function js(t, e) {
      try {
          t.contentWindow.postMessage(JSON.stringify({
              event: "command",
              ...e
          }), "*")
      } catch {}
  }
  const Ki = "_ukPlayer";
  let Zo = 0;
  function Qo(t) {
      if (t[Ki])
          return t[Ki];
      const e = Ws(t)
        , i = Rs(t)
        , s = ++Zo;
      let n;
      return t[Ki] = new Promise(o=>{
          e && L(t, "load", ()=>{
              const r = ()=>js(t, {
                  event: "listening",
                  id: s
              });
              n = setInterval(r, 100),
              r()
          }
          ),
          L(window, "message", o, !1, ({data: r})=>{
              try {
                  return r = JSON.parse(r),
                  e && (r == null ? void 0 : r.id) === s && r.event === "onReady" || i && Number(r == null ? void 0 : r.player_id) === s
              } catch {}
          }
          ),
          t.src = `${t.src}${v(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${s}`}`
      }
      ).then(()=>clearInterval(n))
  }
  function Zi(t, e=0, i=0) {
      return q(t) ? Oi(...Vt(t).map(s=>{
          const {top: n, left: o, bottom: r, right: a} = at(s);
          return {
              top: n - e,
              left: o - i,
              bottom: r + e,
              right: a + i
          }
      }
      ).concat(I(t))) : !1
  }
  function qs(t, {offset: e=0}={}) {
      const i = q(t) ? mt(t, !1, ["hidden"]) : [];
      return i.reduce((r,a,l)=>{
          const {scrollTop: c, scrollHeight: u, offsetHeight: d} = a
            , p = at(a)
            , g = u - p.height
            , {height: T, top: F} = i[l - 1] ? at(i[l - 1]) : I(t);
          let M = Math.ceil(F - p.top - e + c);
          return e > 0 && d < T + e ? M += e : e = 0,
          M > g ? (e -= M - g,
          M = g) : M < 0 && (e -= M,
          M = 0),
          ()=>s(a, M - c).then(r)
      }
      , ()=>Promise.resolve())();
      function s(r, a) {
          return new Promise(l=>{
              const c = r.scrollTop
                , u = n(Math.abs(a))
                , d = Date.now();
              (function p() {
                  const g = o(U((Date.now() - d) / u));
                  r.scrollTop = c + a * g,
                  g === 1 ? l() : requestAnimationFrame(p)
              }
              )()
          }
          )
      }
      function n(r) {
          return 40 * Math.pow(r, .375)
      }
      function o(r) {
          return .5 * (1 - Math.cos(Math.PI * r))
      }
  }
  function Qi(t, e=0, i=0) {
      if (!q(t))
          return 0;
      const [s] = mt(t, !0)
        , {scrollHeight: n, scrollTop: o} = s
        , {height: r} = at(s)
        , a = n - r
        , l = Wt(t)[0] - Wt(s)[0]
        , c = Math.max(0, l - r + e)
        , u = Math.min(a, l + t.offsetHeight - i);
      return U((o - c) / (u - c))
  }
  function mt(t, e=!1, i=[]) {
      const s = Vs(t);
      let n = ne(t).reverse();
      n = n.slice(n.indexOf(s) + 1);
      const o = $t(n, r=>h(r, "position") === "fixed");
      return ~o && (n = n.slice(o)),
      [s].concat(n.filter(r=>h(r, "overflow").split(" ").some(a=>v(["auto", "scroll", ...i], a)) && (!e || r.scrollHeight > at(r).height))).reverse()
  }
  function Vt(t) {
      return mt(t, !1, ["hidden", "clip"])
  }
  function at(t) {
      const e = ie(t)
        , {document: {documentElement: i}} = e;
      let s = t === Vs(t) ? e : t;
      const {visualViewport: n} = e;
      if (Ut(s) && n) {
          let {height: r, width: a, scale: l, pageTop: c, pageLeft: u} = n;
          return r = Math.round(r * l),
          a = Math.round(a * l),
          {
              height: r,
              width: a,
              top: c,
              left: u,
              bottom: c + r,
              right: u + a
          }
      }
      let o = I(s);
      if (h(s, "display") === "inline")
          return o;
      for (let[r,a,l,c] of [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]])
          Ut(s) ? s = i : o[l] += $(h(s, `border-${l}-width`)),
          o[r] = o[a] = s[`client${_t(r)}`],
          o[c] = o[r] + o[l];
      return o
  }
  function Vs(t) {
      return ie(t).document.scrollingElement
  }
  const lt = [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]];
  function Ys(t, e, i) {
      i = {
          attach: {
              element: ["left", "top"],
              target: ["left", "top"],
              ...i.attach
          },
          offset: [0, 0],
          placement: [],
          ...i
      },
      Q(e) || (e = [e, e]),
      I(t, Gs(t, e, i))
  }
  function Gs(t, e, i) {
      const s = Xs(t, e, i)
        , {boundary: n, viewportOffset: o=0, placement: r} = i;
      let a = s;
      for (const [l,[c,,u,d]] of Object.entries(lt)) {
          const p = Uo(t, e[l], o, n, l);
          if (ri(s, p, l))
              continue;
          let g = 0;
          if (r[l] === "flip") {
              const T = i.attach.target[l];
              if (T === d && s[d] <= p[d] || T === u && s[u] >= p[u])
                  continue;
              g = er(t, e, i, l)[u] - s[u];
              const F = tr(t, e[l], o, l);
              if (!ri(Ui(s, g, l), F, l)) {
                  if (ri(s, F, l))
                      continue;
                  if (i.recursion)
                      return !1;
                  const M = ir(t, e, i);
                  if (M && ri(M, F, 1 - l))
                      return M;
                  continue
              }
          } else if (r[l] === "shift") {
              const T = I(e[l])
                , {offset: F} = i;
              g = U(U(s[u], p[u], p[d] - s[c]), T[u] - s[c] + F[l], T[d] - F[l]) - s[u]
          }
          a = Ui(a, g, l)
      }
      return a
  }
  function Xs(t, e, i) {
      let {attach: s, offset: n} = {
          attach: {
              element: ["left", "top"],
              target: ["left", "top"],
              ...i.attach
          },
          offset: [0, 0],
          ...i
      }
        , o = I(t);
      for (const [r,[a,,l,c]] of Object.entries(lt)) {
          const u = s.target[r] === s.element[r] ? at(e[r]) : I(e[r]);
          o = Ui(o, u[l] - o[l] + Js(s.target[r], c, u[a]) - Js(s.element[r], c, o[a]) + +n[r], r)
      }
      return o
  }
  function Ui(t, e, i) {
      const [,s,n,o] = lt[i]
        , r = {
          ...t
      };
      return r[n] = t[s] = t[n] + e,
      r[o] += e,
      r
  }
  function Js(t, e, i) {
      return t === "center" ? i / 2 : t === e ? i : 0
  }
  function Uo(t, e, i, s, n) {
      let o = Zs(...Ks(t, e).map(at));
      return i && (o[lt[n][2]] += i,
      o[lt[n][3]] -= i),
      s && (o = Zs(o, I(Q(s) ? s[n] : s))),
      o
  }
  function tr(t, e, i, s) {
      const [n,o,r,a] = lt[s]
        , [l] = Ks(t, e)
        , c = at(l);
      return ["auto", "scroll"].includes(h(l, `overflow-${o}`)) && (c[r] -= l[`scroll${_t(r)}`],
      c[a] = c[r] + l[`scroll${_t(n)}`]),
      c[r] += i,
      c[a] -= i,
      c
  }
  function Ks(t, e) {
      return Vt(e).filter(i=>D(t, i))
  }
  function Zs(...t) {
      let e = {};
      for (const i of t)
          for (const [,,s,n] of lt)
              e[s] = Math.max(e[s] || 0, i[s]),
              e[n] = Math.min(...[e[n], i[n]].filter(Boolean));
      return e
  }
  function ri(t, e, i) {
      const [,,s,n] = lt[i];
      return t[s] >= e[s] && t[n] <= e[n]
  }
  function er(t, e, {offset: i, attach: s}, n) {
      return Xs(t, e, {
          attach: {
              element: Qs(s.element, n),
              target: Qs(s.target, n)
          },
          offset: sr(i, n)
      })
  }
  function ir(t, e, i) {
      return Gs(t, e, {
          ...i,
          attach: {
              element: i.attach.element.map(Us).reverse(),
              target: i.attach.target.map(Us).reverse()
          },
          offset: i.offset.reverse(),
          placement: i.placement.reverse(),
          recursion: !0
      })
  }
  function Qs(t, e) {
      const i = [...t]
        , s = lt[e].indexOf(t[e]);
      return ~s && (i[e] = lt[e][1 - s % 2 + 2]),
      i
  }
  function Us(t) {
      for (let e = 0; e < lt.length; e++) {
          const i = lt[e].indexOf(t);
          if (~i)
              return lt[1 - e][i % 2 + 2]
      }
  }
  function sr(t, e) {
      return t = [...t],
      t[e] *= -1,
      t
  }
  var nr = Object.freeze({
      __proto__: null,
      $: w,
      $$: O,
      Animation: pt,
      Deferred: Xe,
      Dimensions: Ge,
      MouseTracker: Gi,
      Transition: S,
      addClass: y,
      after: Ze,
      append: W,
      apply: Ct,
      assign: xt,
      attr: f,
      before: Ke,
      boxModelAdjust: ae,
      camelize: ve,
      children: E,
      clamp: U,
      closest: Y,
      createEvent: Ft,
      css: h,
      data: tt,
      dimensions: b,
      each: St,
      empty: Es,
      endsWith: Qt,
      escape: zi,
      fastdom: G,
      filter: ke,
      find: Ni,
      findAll: Te,
      findIndex: $t,
      flipPosition: ei,
      fragment: Ht,
      getEventPos: re,
      getIndex: ct,
      hasAttr: wt,
      hasClass: B,
      hasOwn: Mt,
      hasTouch: jt,
      height: et,
      html: It,
      hyphenate: Zt,
      inBrowser: Rt,
      includes: v,
      index: oe,
      intersectRect: Oi,
      isArray: Q,
      isBoolean: Ii,
      isDocument: je,
      isElement: te,
      isEmpty: we,
      isEqual: be,
      isFocusable: Je,
      isFunction: dt,
      isInView: Zi,
      isInput: Mi,
      isNode: qe,
      isNumber: ee,
      isNumeric: vt,
      isObject: Et,
      isPlainObject: yt,
      isRtl: J,
      isString: N,
      isTag: X,
      isTouch: Tt,
      isUndefined: V,
      isVideo: Ls,
      isVisible: q,
      isVoidElement: Bi,
      isWindow: Ut,
      last: se,
      matches: _,
      memoize: ft,
      mergeOptions: ue,
      mute: Hs,
      noop: P,
      observeIntersection: ce,
      observeMutation: Bs,
      observeResize: Pe,
      off: zt,
      offset: I,
      offsetPosition: Wt,
      offsetViewport: at,
      on: x,
      once: L,
      overflowParents: Vt,
      parent: A,
      parents: ne,
      parseOptions: de,
      pause: Fs,
      play: zs,
      pointInRect: Ye,
      pointerCancel: si,
      pointerDown: gt,
      pointerEnter: At,
      pointerLeave: qt,
      pointerMove: ii,
      pointerUp: Pt,
      position: ti,
      positionAt: Ys,
      prepend: zo,
      propName: Li,
      query: ut,
      queryAll: Se,
      ready: No,
      remove: ot,
      removeAttr: $e,
      removeClass: z,
      removeClasses: Wi,
      replaceClass: Ri,
      scrollIntoView: qs,
      scrollParents: mt,
      scrolledOver: Qi,
      selFocusable: ye,
      selInput: xe,
      sortBy: Ve,
      startsWith: ht,
      sumBy: Nt,
      swap: Ai,
      toArray: _i,
      toBoolean: Pi,
      toEventTargets: Hi,
      toFloat: $,
      toNode: R,
      toNodes: k,
      toNumber: kt,
      toPx: rt,
      toWindow: ie,
      toggleClass: j,
      trigger: m,
      ucfirst: _t,
      uniqueBy: $s,
      unwrap: _e,
      width: Ee,
      within: D,
      wrapAll: Ue,
      wrapInner: qi
  });
  function or(t) {
      const e = t.data;
      t.use = function(n) {
          if (!n.installed)
              return n.call(null, this),
              n.installed = !0,
              this
      }
      ,
      t.mixin = function(n, o) {
          o = (N(o) ? t.component(o) : o) || this,
          o.options = ue(o.options, n)
      }
      ,
      t.extend = function(n) {
          n = n || {};
          const o = this
            , r = function(l) {
              this._init(l)
          };
          return r.prototype = Object.create(o.prototype),
          r.prototype.constructor = r,
          r.options = ue(o.options, n),
          r.super = o,
          r.extend = o.extend,
          r
      }
      ,
      t.update = function(n, o) {
          n = n ? R(n) : document.body;
          for (const r of ne(n).reverse())
              s(r[e], o);
          Ct(n, r=>s(r[e], o))
      }
      ;
      let i;
      Object.defineProperty(t, "container", {
          get() {
              return i || document.body
          },
          set(n) {
              i = w(n)
          }
      });
      function s(n, o) {
          if (n)
              for (const r in n)
                  n[r]._connected && n[r]._callUpdate(o)
      }
  }
  function rr(t) {
      t.prototype._callHook = function(s) {
          var n;
          (n = this.$options[s]) == null || n.forEach(o=>o.call(this))
      }
      ,
      t.prototype._callConnected = function() {
          this._connected || (this._data = {},
          this._computed = {},
          this._initProps(),
          this._callHook("beforeConnect"),
          this._connected = !0,
          this._initEvents(),
          this._initObservers(),
          this._callHook("connected"),
          this._callUpdate())
      }
      ,
      t.prototype._callDisconnected = function() {
          this._connected && (this._callHook("beforeDisconnect"),
          this._disconnectObservers(),
          this._unbindEvents(),
          this._callHook("disconnected"),
          this._connected = !1,
          delete this._watch)
      }
      ,
      t.prototype._callUpdate = function(s="update") {
          this._connected && ((s === "update" || s === "resize") && this._callWatches(),
          this.$options.update && (this._updates || (this._updates = new Set,
          G.read(()=>{
              this._connected && e.call(this, this._updates),
              delete this._updates
          }
          )),
          this._updates.add(s.type || s)))
      }
      ,
      t.prototype._callWatches = function() {
          if (this._watch)
              return;
          const s = !Mt(this, "_watch");
          this._watch = G.read(()=>{
              this._connected && i.call(this, s),
              this._watch = null
          }
          )
      }
      ;
      function e(s) {
          for (const {read: n, write: o, events: r=[]} of this.$options.update) {
              if (!s.has("update") && !r.some(l=>s.has(l)))
                  continue;
              let a;
              n && (a = n.call(this, this._data, s),
              a && yt(a) && xt(this._data, a)),
              o && a !== !1 && G.write(()=>{
                  this._connected && o.call(this, this._data, s)
              }
              )
          }
      }
      function i(s) {
          const {$options: {computed: n}} = this
            , o = {
              ...this._computed
          };
          this._computed = {};
          for (const r in n) {
              const {watch: a, immediate: l} = n[r];
              a && (s && l || Mt(o, r) && !be(o[r], this[r])) && a.call(this, this[r], o[r])
          }
      }
  }
  function ar(t) {
      let e = 0;
      t.prototype._init = function(i) {
          i = i || {},
          i.data = ur(i, this.constructor.options),
          this.$options = ue(this.constructor.options, i, this),
          this.$el = null,
          this.$props = {},
          this._uid = e++,
          this._initData(),
          this._initMethods(),
          this._initComputeds(),
          this._callHook("created"),
          i.el && this.$mount(i.el)
      }
      ,
      t.prototype._initData = function() {
          const {data: i={}} = this.$options;
          for (const s in i)
              this.$props[s] = this[s] = i[s]
      }
      ,
      t.prototype._initMethods = function() {
          const {methods: i} = this.$options;
          if (i)
              for (const s in i)
                  this[s] = i[s].bind(this)
      }
      ,
      t.prototype._initComputeds = function() {
          const {computed: i} = this.$options;
          if (this._computed = {},
          i)
              for (const s in i)
                  lr(this, s, i[s])
      }
      ,
      t.prototype._initProps = function(i) {
          let s;
          i = i || tn(this.$options);
          for (s in i)
              V(i[s]) || (this.$props[s] = i[s]);
          const n = [this.$options.computed, this.$options.methods];
          for (s in this.$props)
              s in i && hr(n, s) && (this[s] = this.$props[s])
      }
      ,
      t.prototype._initEvents = function() {
          this._events = [];
          for (const i of this.$options.events || [])
              if (Mt(i, "handler"))
                  ai(this, i);
              else
                  for (const s in i)
                      ai(this, i[s], s)
      }
      ,
      t.prototype._unbindEvents = function() {
          this._events.forEach(i=>i()),
          delete this._events
      }
      ,
      t.prototype._initObservers = function() {
          this._observers = [fr(this), dr(this)]
      }
      ,
      t.prototype.registerObserver = function(...i) {
          this._observers.push(...i)
      }
      ,
      t.prototype._disconnectObservers = function() {
          this._observers.forEach(i=>i == null ? void 0 : i.disconnect())
      }
  }
  function tn(t) {
      const e = {}
        , {args: i=[], props: s={}, el: n, id: o} = t;
      if (!s)
          return e;
      for (const a in s) {
          const l = Zt(a);
          let c = tt(n, l);
          V(c) || (c = s[a] === Boolean && c === "" ? !0 : ts(s[a], c),
          !(l === "target" && ht(c, "_")) && (e[a] = c))
      }
      const r = de(tt(n, o), i);
      for (const a in r) {
          const l = ve(a);
          V(s[l]) || (e[l] = ts(s[l], r[a]))
      }
      return e
  }
  function lr(t, e, i) {
      Object.defineProperty(t, e, {
          enumerable: !0,
          get() {
              const {_computed: s, $props: n, $el: o} = t;
              return Mt(s, e) || (s[e] = (i.get || i).call(t, n, o)),
              s[e]
          },
          set(s) {
              const {_computed: n} = t;
              n[e] = i.set ? i.set.call(t, s) : s,
              V(n[e]) && delete n[e]
          }
      })
  }
  function ai(t, e, i) {
      yt(e) || (e = {
          name: i,
          handler: e
      });
      let {name: s, el: n, handler: o, capture: r, passive: a, delegate: l, filter: c, self: u} = e;
      if (n = dt(n) ? n.call(t) : n || t.$el,
      Q(n)) {
          n.forEach(d=>ai(t, {
              ...e,
              el: d
          }, i));
          return
      }
      !n || c && !c.call(t) || t._events.push(x(n, s, l ? N(l) ? l : l.call(t) : null, N(o) ? t[o] : o.bind(t), {
          passive: a,
          capture: r,
          self: u
      }))
  }
  function hr(t, e) {
      return t.every(i=>!i || !Mt(i, e))
  }
  function ts(t, e) {
      return t === Boolean ? Pi(e) : t === Number ? kt(e) : t === "list" ? cr(e) : t === Object && N(e) ? de(e) : t ? t(e) : e
  }
  function cr(t) {
      return Q(t) ? t : N(t) ? t.split(/,(?![^(]*\))/).map(e=>vt(e) ? kt(e) : Pi(e.trim())) : [t]
  }
  function ur({data: t={}}, {args: e=[], props: i={}}) {
      Q(t) && (t = t.slice(0, e.length).reduce((s,n,o)=>(yt(n) ? xt(s, n) : s[e[o]] = n,
      s), {}));
      for (const s in t)
          V(t[s]) ? delete t[s] : i[s] && (t[s] = ts(i[s], t[s]));
      return t
  }
  function dr(t) {
      let {el: e, computed: i} = t.$options;
      if (!i)
          return;
      for (const n in i)
          if (i[n].document) {
              e = e.ownerDocument;
              break
          }
      const s = new MutationObserver(()=>t._callWatches());
      return s.observe(e, {
          childList: !0,
          subtree: !0
      }),
      s
  }
  function fr(t) {
      const {$options: e, $props: i} = t
        , {id: s, attrs: n, props: o, el: r} = e;
      if (!o || n === !1)
          return;
      const a = Q(n) ? n : Object.keys(o)
        , l = a.map(u=>Zt(u)).concat(s)
        , c = new MutationObserver(u=>{
          const d = tn(e);
          u.some(({attributeName: p})=>{
              const g = p.replace("data-", "");
              return (g === s ? a : [ve(g), ve(p)]).some(T=>!V(d[T]) && d[T] !== i[T])
          }
          ) && t.$reset()
      }
      );
      return c.observe(r, {
          attributes: !0,
          attributeFilter: l.concat(l.map(u=>`data-${u}`))
      }),
      c
  }
  function pr(t) {
      const e = t.data;
      t.prototype.$create = function(i, s, n) {
          return t[i](s, n)
      }
      ,
      t.prototype.$mount = function(i) {
          const {name: s} = this.$options;
          i[e] || (i[e] = {}),
          !i[e][s] && (i[e][s] = this,
          this.$el = this.$options.el = this.$options.el || i,
          D(i, document) && this._callConnected())
      }
      ,
      t.prototype.$reset = function() {
          this._callDisconnected(),
          this._callConnected()
      }
      ,
      t.prototype.$destroy = function(i=!1) {
          const {el: s, name: n} = this.$options;
          s && this._callDisconnected(),
          this._callHook("destroy"),
          s != null && s[e] && (delete s[e][n],
          we(s[e]) || delete s[e],
          i && ot(this.$el))
      }
      ,
      t.prototype.$emit = function(i) {
          this._callUpdate(i)
      }
      ,
      t.prototype.$update = function(i=this.$el, s) {
          t.update(i, s)
      }
      ,
      t.prototype.$getComponent = t.getComponent,
      Object.defineProperty(t.prototype, "$container", Object.getOwnPropertyDescriptor(t, "container"))
  }
  const Ot = {};
  function gr(t) {
      const {data: e, prefix: i} = t;
      t.component = function(s, n) {
          var o;
          s = Zt(s);
          const r = i + s;
          if (!n)
              return yt(Ot[r]) && (Ot[r] = Ot[`data-${r}`] = t.extend(Ot[r])),
              Ot[r];
          s = ve(s),
          t[s] = function(l, c) {
              const u = t.component(s);
              return u.options.functional ? new u({
                  data: yt(l) ? l : [...arguments]
              }) : l ? O(l).map(d)[0] : d();
              function d(p) {
                  const g = t.getComponent(p, s);
                  if (g)
                      if (c)
                          g.$destroy();
                      else
                          return g;
                  return new u({
                      el: p,
                      data: c
                  })
              }
          }
          ;
          const a = yt(n) ? {
              ...n
          } : n.options;
          return a.id = r,
          a.name = s,
          (o = a.install) == null || o.call(a, t, a, s),
          t._initialized && !a.functional && requestAnimationFrame(()=>t[s](`[${r}],[data-${r}]`)),
          Ot[r] = Ot[`data-${r}`] = yt(n) ? a : n
      }
      ,
      t.getComponents = s=>(s == null ? void 0 : s[e]) || {},
      t.getComponent = (s,n)=>t.getComponents(s)[n],
      t.connect = s=>{
          if (s[e])
              for (const n in s[e])
                  s[e][n]._callConnected();
          for (const n of s.getAttributeNames()) {
              const o = en(n);
              o && t[o](s)
          }
      }
      ,
      t.disconnect = s=>{
          for (const n in s[e])
              s[e][n]._callDisconnected()
      }
  }
  function en(t) {
      const e = Ot[t];
      return e && (yt(e) ? e : e.options).name
  }
  const it = function(t) {
      this._init(t)
  };
  it.util = nr,
  it.data = "__uikit__",
  it.prefix = "bdt-",
  it.options = {},
  it.version = "3.16.3",
  or(it),
  rr(it),
  ar(it),
  gr(it),
  pr(it);
  function mr(t) {
      const {connect: e, disconnect: i} = t;
      if (!Rt || !window.MutationObserver)
          return;
      requestAnimationFrame(function() {
          m(document, "uikit:init", t),
          document.body && Ct(document.body, e),
          new MutationObserver(o=>o.forEach(s)).observe(document, {
              childList: !0,
              subtree: !0
          }),
          new MutationObserver(o=>o.forEach(n)).observe(document, {
              attributes: !0,
              subtree: !0
          }),
          t._initialized = !0
      });
      function s({addedNodes: o, removedNodes: r}) {
          for (const a of o)
              Ct(a, e);
          for (const a of r)
              Ct(a, i)
      }
      function n({target: o, attributeName: r}) {
          var a;
          const l = en(r);
          if (l) {
              if (wt(o, r)) {
                  t[l](o);
                  return
              }
              (a = t.getComponent(o, l)) == null || a.$destroy()
          }
      }
  }
  var st = {
      connected() {
          y(this.$el, this.$options.id)
      }
  }
    , Oe = {
      data: {
          preload: 5
      },
      methods: {
          lazyload(t=this.$el, e=this.$el) {
              this.registerObserver(ce(t, (i,s)=>{
                  for (const n of k(dt(e) ? e() : e))
                      O('[loading="lazy"]', n).slice(0, this.preload - 1).forEach(o=>$e(o, "loading"));
                  for (const n of i.filter(({isIntersecting: o})=>o).map(({target: o})=>o))
                      s.unobserve(n)
              }
              ))
          }
      }
  }
    , Yt = {
      props: {
          cls: Boolean,
          animation: "list",
          duration: Number,
          velocity: Number,
          origin: String,
          transition: String
      },
      data: {
          cls: !1,
          animation: [!1],
          duration: 200,
          velocity: .2,
          origin: !1,
          transition: "ease",
          clsEnter: "bdt-togglabe-enter",
          clsLeave: "bdt-togglabe-leave"
      },
      computed: {
          hasAnimation({animation: t}) {
              return !!t[0]
          },
          hasTransition({animation: t}) {
              return ["slide", "reveal"].some(e=>ht(t[0], e))
          }
      },
      methods: {
          toggleElement(t, e, i) {
              return new Promise(s=>Promise.all(k(t).map(n=>{
                  const o = Ii(e) ? e : !this.isToggled(n);
                  if (!m(n, `before${o ? "show" : "hide"}`, [this]))
                      return Promise.reject();
                  const r = (dt(i) ? i : i === !1 || !this.hasAnimation ? vr : this.hasTransition ? wr : br)(n, o, this)
                    , a = o ? this.clsEnter : this.clsLeave;
                  y(n, a),
                  m(n, o ? "show" : "hide", [this]);
                  const l = ()=>{
                      z(n, a),
                      m(n, o ? "shown" : "hidden", [this])
                  }
                  ;
                  return r ? r.then(l, ()=>(z(n, a),
                  Promise.reject())) : l()
              }
              )).then(s, P))
          },
          isToggled(t=this.$el) {
              return [t] = k(t),
              B(t, this.clsEnter) ? !0 : B(t, this.clsLeave) ? !1 : this.cls ? B(t, this.cls.split(" ")[0]) : q(t)
          },
          _toggle(t, e) {
              if (!t)
                  return;
              e = Boolean(e);
              let i;
              this.cls ? (i = v(this.cls, " ") || e !== B(t, this.cls),
              i && j(t, this.cls, v(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden,
              i && (t.hidden = !e)),
              O("[autofocus]", t).some(s=>q(s) ? s.focus() || !0 : s.blur()),
              i && m(t, "toggled", [e, this])
          }
      }
  };
  function vr(t, e, {_toggle: i}) {
      return pt.cancel(t),
      S.cancel(t),
      i(t, e)
  }
  async function wr(t, e, {animation: i, duration: s, velocity: n, transition: o, _toggle: r}) {
      var a;
      const [l="reveal",c="top"] = ((a = i[0]) == null ? void 0 : a.split("-")) || []
        , u = [["left", "right"], ["top", "bottom"]]
        , d = u[v(u[0], c) ? 0 : 1]
        , p = d[1] === c
        , T = ["width", "height"][u.indexOf(d)]
        , F = `margin-${d[0]}`
        , M = `margin-${c}`;
      let Bt = b(t)[T];
      const vs = S.inProgress(t);
      await S.cancel(t),
      e && r(t, !0);
      const rh = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", F, M].map(vo=>[vo, t.style[vo]]))
        , Re = b(t)
        , ws = $(h(t, F))
        , po = $(h(t, M))
        , Kt = Re[T] + po;
      !vs && !e && (Bt += po);
      const [Ci] = qi(t, "<div>");
      h(Ci, {
          boxSizing: "border-box",
          height: Re.height,
          width: Re.width,
          ...h(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", M])
      }),
      h(t, {
          padding: 0,
          border: 0,
          minWidth: 0,
          minHeight: 0,
          [M]: 0,
          width: Re.width,
          height: Re.height,
          overflow: "hidden",
          [T]: Bt
      });
      const go = Bt / Kt;
      s = (n * Kt + s) * (e ? 1 - go : go);
      const mo = {
          [T]: e ? Kt : 0
      };
      p && (h(t, F, Kt - Bt + ws),
      mo[F] = e ? ws : Kt + ws),
      !p ^ l === "reveal" && (h(Ci, F, -Kt + Bt),
      S.start(Ci, {
          [F]: e ? 0 : -Kt
      }, s, o));
      try {
          await S.start(t, mo, s, o)
      } finally {
          h(t, rh),
          _e(Ci.firstChild),
          e || r(t, !1)
      }
  }
  function br(t, e, i) {
      pt.cancel(t);
      const {animation: s, duration: n, _toggle: o} = i;
      return e ? (o(t, !0),
      pt.in(t, s[0], n, i.origin)) : pt.out(t, s[1] || s[0], n, i.origin).then(()=>o(t, !1))
  }
  function sn(t) {
      return Math.ceil(Math.max(0, ...O("[stroke]", t).map(e=>{
          try {
              return e.getTotalLength()
          } catch {
              return 0
          }
      }
      )))
  }
  let es;
  function nn(t) {
      const e = x(t, "touchmove", s=>{
          if (s.targetTouches.length !== 1)
              return;
          let[{scrollHeight: n, clientHeight: o}] = mt(s.target);
          o >= n && s.cancelable && s.preventDefault()
      }
      , {
          passive: !1
      });
      if (es)
          return e;
      es = !0;
      const {scrollingElement: i} = document;
      return h(i, {
          overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
          touchAction: "none",
          paddingRight: Ee(window) - i.clientWidth || ""
      }),
      ()=>{
          es = !1,
          e(),
          h(i, {
              overflowY: "",
              touchAction: "",
              paddingRight: ""
          })
      }
  }
  function De(t) {
      return ["origin", "pathname", "search"].every(e=>t[e] === location[e])
  }
  function on(t) {
      if (De(t)) {
          const e = decodeURIComponent(t.hash).substring(1);
          return document.getElementById(e) || document.getElementsByName(e)[0]
      }
  }
  function Dt(t, e=t.$el, i="") {
      if (e.id)
          return e.id;
      let s = `${t.$options.id}-${t._uid}${i}`;
      return w(`#${s}`) && (s = Dt(t, e, `${i}-2`)),
      s
  }
  const C = {
      TAB: 9,
      ESC: 27,
      SPACE: 32,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
  };
  var rn = {
      mixins: [st, Oe, Yt],
      props: {
          animation: Boolean,
          targets: String,
          active: null,
          collapsible: Boolean,
          multiple: Boolean,
          toggle: String,
          content: String,
          offset: Number
      },
      data: {
          targets: "> *",
          active: !1,
          animation: !0,
          collapsible: !0,
          multiple: !1,
          clsOpen: "bdt-open",
          toggle: "> .bdt-accordion-title",
          content: "> .bdt-accordion-content",
          offset: 0
      },
      computed: {
          items: {
              get({targets: t}, e) {
                  return O(t, e)
              },
              watch(t, e) {
                  if (e || B(t, this.clsOpen))
                      return;
                  const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
                  i && this.toggle(i, !1)
              },
              immediate: !0
          },
          toggles: {
              get({toggle: t}) {
                  return this.items.map(e=>w(t, e))
              },
              watch() {
                  this.$emit()
              },
              immediate: !0
          },
          contents: {
              get({content: t}) {
                  return this.items.map(e=>{
                      var i;
                      return ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || w(t, e)
                  }
                  )
              },
              watch(t) {
                  for (const e of t)
                      li(e, !B(this.items.find(i=>D(e, i)), this.clsOpen));
                  this.$emit()
              },
              immediate: !0
          }
      },
      connected() {
          this.lazyload()
      },
      events: [{
          name: "click keydown",
          delegate() {
              return `${this.targets} ${this.$props.toggle}`
          },
          async handler(t) {
              var e;
              t.type === "keydown" && t.keyCode !== C.SPACE || (t.preventDefault(),
              (e = this._off) == null || e.call(this),
              this._off = xr(t.target),
              await this.toggle(oe(this.toggles, t.current)),
              this._off())
          }
      }, {
          name: "shown hidden",
          self: !0,
          delegate() {
              return this.targets
          },
          handler() {
              this.$emit()
          }
      }],
      update() {
          const t = ke(this.items, `.${this.clsOpen}`);
          for (const e in this.items) {
              const i = this.toggles[e]
                , s = this.contents[e];
              if (!i || !s)
                  continue;
              i.id = Dt(this, i, `-title-${e}`),
              s.id = Dt(this, s, `-content-${e}`);
              const n = v(t, this.items[e]);
              f(i, {
                  role: X(i, "a") ? "button" : null,
                  "aria-controls": s.id,
                  "aria-expanded": n,
                  "aria-disabled": !this.collapsible && t.length < 2 && n
              }),
              f(s, {
                  role: "region",
                  "aria-labelledby": i.id
              })
          }
      },
      methods: {
          async toggle(t, e) {
              t = this.items[ct(t, this.items)];
              let i = [t];
              const s = ke(this.items, `.${this.clsOpen}`);
              !this.multiple && !v(s, i[0]) && (i = i.concat(s)),
              !(!this.collapsible && s.length < 2 && v(s, t)) && await Promise.all(i.map(n=>this.toggleElement(n, !v(s, n), (o,r)=>{
                  if (j(o, this.clsOpen, r),
                  e === !1 || !this.animation) {
                      li(w(this.content, o), !r);
                      return
                  }
                  return $r(o, r, this)
              }
              )))
          }
      }
  };
  function li(t, e) {
      t && (t.hidden = e)
  }
  async function $r(t, e, {content: i, duration: s, velocity: n, transition: o}) {
      var r;
      i = ((r = t._wrapper) == null ? void 0 : r.firstElementChild) || w(i, t),
      t._wrapper || (t._wrapper = Ue(i, "<div>"));
      const a = t._wrapper;
      h(a, "overflow", "hidden");
      const l = $(h(a, "height"));
      await S.cancel(a),
      li(i, !1);
      const c = Nt(["marginTop", "marginBottom"], d=>h(i, d)) + b(i).height
        , u = l / c;
      s = (n * c + s) * (e ? 1 - u : u),
      h(a, "height", l),
      await S.start(a, {
          height: e ? c : 0
      }, s, o),
      _e(i),
      delete t._wrapper,
      e || li(i, !0)
  }
  function xr(t) {
      const [e] = mt(t, !0);
      let i;
      return function s() {
          i = requestAnimationFrame(()=>{
              const {top: n} = t.getBoundingClientRect();
              n < 0 && (e.scrollTop += n),
              s()
          }
          )
      }(),
      ()=>requestAnimationFrame(()=>cancelAnimationFrame(i))
  }
  var yr = {
      mixins: [st, Yt],
      args: "animation",
      props: {
          animation: Boolean,
          close: String
      },
      data: {
          animation: !0,
          selClose: ".bdt-alert-close",
          duration: 150
      },
      events: {
          name: "click",
          delegate() {
              return this.selClose
          },
          handler(t) {
              t.preventDefault(),
              this.close()
          }
      },
      methods: {
          async close() {
              await this.toggleElement(this.$el, !1, kr),
              this.$destroy(!0)
          }
      }
  };
  function kr(t, e, {duration: i, transition: s, velocity: n}) {
      const o = $(h(t, "height"));
      return h(t, "height", o),
      S.start(t, {
          height: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          borderTop: 0,
          borderBottom: 0,
          opacity: 0
      }, n * o + i, s)
  }
  var an = {
      args: "autoplay",
      props: {
          automute: Boolean,
          autoplay: Boolean
      },
      data: {
          automute: !1,
          autoplay: !0
      },
      connected() {
          this.inView = this.autoplay === "inview",
          this.inView && !wt(this.$el, "preload") && (this.$el.preload = "none"),
          X(this.$el, "iframe") && !wt(this.$el, "allow") && (this.$el.allow = "autoplay"),
          this.automute && Hs(this.$el),
          this.registerObserver(ce(this.$el, ()=>this.$emit(), {}, !1))
      },
      update: {
          read({visible: t}) {
              return Ls(this.$el) ? {
                  prev: t,
                  visible: q(this.$el) && h(this.$el, "visibility") !== "hidden",
                  inView: this.inView && Zi(this.$el)
              } : !1
          },
          write({prev: t, visible: e, inView: i}) {
              !e || this.inView && !i ? Fs(this.$el) : (this.autoplay === !0 && !t || this.inView && i) && zs(this.$el)
          }
      }
  }
    , bt = {
      connected() {
          var t;
          this.registerObserver(Pe(((t = this.$options.resizeTargets) == null ? void 0 : t.call(this)) || this.$el, ()=>this.$emit("resize")))
      }
  }
    , Sr = {
      mixins: [bt, an],
      props: {
          width: Number,
          height: Number
      },
      data: {
          automute: !0
      },
      events: {
          "load loadedmetadata"() {
              this.$emit("resize")
          }
      },
      resizeTargets() {
          return [this.$el, ln(this.$el) || A(this.$el)]
      },
      update: {
          read() {
              const {ratio: t, cover: e} = Ge
                , {$el: i, width: s, height: n} = this;
              let o = {
                  width: s,
                  height: n
              };
              if (!o.width || !o.height) {
                  const c = {
                      width: i.naturalWidth || i.videoWidth || i.clientWidth,
                      height: i.naturalHeight || i.videoHeight || i.clientHeight
                  };
                  o.width ? o = t(c, "width", o.width) : n ? o = t(c, "height", o.height) : o = c
              }
              const {offsetHeight: r, offsetWidth: a} = ln(i) || A(i)
                , l = e(o, {
                  width: a + (a % 2 ? 1 : 0),
                  height: r + (r % 2 ? 1 : 0)
              });
              return !l.width || !l.height ? !1 : l
          },
          write({height: t, width: e}) {
              h(this.$el, {
                  height: t,
                  width: e
              })
          },
          events: ["resize"]
      }
  };
  function ln(t) {
      for (; t = A(t); )
          if (h(t, "position") !== "static")
              return t
  }
  var Be = {
      props: {
          container: Boolean
      },
      data: {
          container: !0
      },
      computed: {
          container({container: t}) {
              return t === !0 && this.$container || t && w(t)
          }
      }
  }
    , hn = {
      props: {
          pos: String,
          offset: null,
          flip: Boolean,
          shift: Boolean,
          inset: Boolean
      },
      data: {
          pos: `bottom-${J ? "right" : "left"}`,
          offset: !1,
          flip: !0,
          shift: !0,
          inset: !1
      },
      connected() {
          this.pos = this.$props.pos.split("-").concat("center").slice(0, 2),
          [this.dir,this.align] = this.pos,
          this.axis = v(["top", "bottom"], this.dir) ? "y" : "x"
      },
      methods: {
          positionAt(t, e, i) {
              let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
              const n = [this.flip && "flip", this.shift && "shift"]
                , o = {
                  element: [this.inset ? this.dir : ei(this.dir), this.align],
                  target: [this.dir, this.align]
              };
              if (this.axis === "y") {
                  for (const l in o)
                      o[l].reverse();
                  s.reverse(),
                  n.reverse()
              }
              const r = Tr(t)
                , a = b(t);
              h(t, {
                  top: -a.height,
                  left: -a.width
              }),
              Ys(t, e, {
                  attach: o,
                  offset: s,
                  boundary: i,
                  placement: n,
                  viewportOffset: this.getViewportOffset(t)
              }),
              r()
          },
          getPositionOffset(t) {
              return rt(this.offset === !1 ? h(t, "--bdt-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (v(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1)
          },
          getShiftOffset(t) {
              return this.align === "center" ? 0 : rt(h(t, "--bdt-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (v(["left", "top"], this.align) ? 1 : -1)
          },
          getViewportOffset(t) {
              return rt(h(t, "--bdt-position-viewport-offset"))
          }
      }
  };
  function Tr(t) {
      const [e] = mt(t)
        , {scrollTop: i} = e;
      return ()=>{
          i !== e.scrollTop && (e.scrollTop = i)
      }
  }
  let Z;
  var cn = {
      mixins: [Be, Oe, hn, Yt],
      args: "pos",
      props: {
          mode: "list",
          toggle: Boolean,
          boundary: Boolean,
          boundaryX: Boolean,
          boundaryY: Boolean,
          target: Boolean,
          targetX: Boolean,
          targetY: Boolean,
          stretch: Boolean,
          delayShow: Number,
          delayHide: Number,
          autoUpdate: Boolean,
          clsDrop: String,
          animateOut: Boolean,
          bgScroll: Boolean
      },
      data: {
          mode: ["click", "hover"],
          toggle: "- *",
          boundary: !1,
          boundaryX: !1,
          boundaryY: !1,
          target: !1,
          targetX: !1,
          targetY: !1,
          stretch: !1,
          delayShow: 0,
          delayHide: 800,
          autoUpdate: !0,
          clsDrop: !1,
          animateOut: !1,
          bgScroll: !0,
          animation: ["bdt-animation-fade"],
          cls: "bdt-open",
          container: !1
      },
      computed: {
          boundary({boundary: t, boundaryX: e, boundaryY: i}, s) {
              return [ut(e || t, s) || window, ut(i || t, s) || window]
          },
          target({target: t, targetX: e, targetY: i}, s) {
              return e = e || t || this.targetEl,
              i = i || t || this.targetEl,
              [e === !0 ? window : ut(e, s), i === !0 ? window : ut(i, s)]
          }
      },
      created() {
          this.tracker = new Gi
      },
      beforeConnect() {
          this.clsDrop = this.$props.clsDrop || `bdt-${this.$options.name}`
      },
      connected() {
          y(this.$el, "bdt-drop", this.clsDrop),
          this.toggle && !this.targetEl && (this.targetEl = Er(this)),
          this._style = (({width: t, height: e})=>({
              width: t,
              height: e
          }))(this.$el.style)
      },
      disconnected() {
          this.isActive() && (this.hide(!1),
          Z = null),
          h(this.$el, this._style)
      },
      events: [{
          name: "click",
          delegate() {
              return ".bdt-drop-close"
          },
          handler(t) {
              t.preventDefault(),
              this.hide(!1)
          }
      }, {
          name: "click",
          delegate() {
              return 'a[href*="#"]'
          },
          handler({defaultPrevented: t, current: e}) {
              const {hash: i} = e;
              !t && i && De(e) && !D(i, this.$el) && this.hide(!1)
          }
      }, {
          name: "beforescroll",
          handler() {
              this.hide(!1)
          }
      }, {
          name: "toggle",
          self: !0,
          handler(t, e) {
              t.preventDefault(),
              this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1)
          }
      }, {
          name: "toggleshow",
          self: !0,
          handler(t, e) {
              t.preventDefault(),
              this.show(e == null ? void 0 : e.$el)
          }
      }, {
          name: "togglehide",
          self: !0,
          handler(t) {
              t.preventDefault(),
              _(this.$el, ":focus,:hover") || this.hide()
          }
      }, {
          name: `${At} focusin`,
          filter() {
              return v(this.mode, "hover")
          },
          handler(t) {
              Tt(t) || this.clearTimers()
          }
      }, {
          name: `${qt} focusout`,
          filter() {
              return v(this.mode, "hover")
          },
          handler(t) {
              !Tt(t) && t.relatedTarget && this.hide()
          }
      }, {
          name: "toggled",
          self: !0,
          handler(t, e) {
              f(this.targetEl, "aria-expanded", e ? !0 : null),
              e && (this.clearTimers(),
              this.position())
          }
      }, {
          name: "show",
          self: !0,
          handler() {
              Z = this,
              this.tracker.init();
              const t = [Ir(this), Ar(this), Or(this), this.autoUpdate && Pr(this), !this.bgScroll && nn(this.$el)];
              L(this.$el, "hide", ()=>t.forEach(e=>e && e()), {
                  self: !0
              })
          }
      }, {
          name: "beforehide",
          self: !0,
          handler() {
              this.clearTimers()
          }
      }, {
          name: "hide",
          handler({target: t}) {
              if (this.$el !== t) {
                  Z = Z === null && D(t, this.$el) && this.isToggled() ? this : Z;
                  return
              }
              Z = this.isActive() ? null : Z,
              this.tracker.cancel()
          }
      }],
      update: {
          write() {
              this.isToggled() && !B(this.$el, this.clsEnter) && this.position()
          }
      },
      methods: {
          show(t=this.targetEl, e=!0) {
              if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1),
              this.targetEl = t,
              this.clearTimers(),
              !this.isActive()) {
                  if (Z) {
                      if (e && Z.isDelaying) {
                          this.showTimer = setTimeout(()=>_(t, ":hover") && this.show(), 10);
                          return
                      }
                      let i;
                      for (; Z && i !== Z && !D(this.$el, Z.$el); )
                          i = Z,
                          Z.hide(!1, !1)
                  }
                  this.container && A(this.$el) !== this.container && W(this.container, this.$el),
                  this.showTimer = setTimeout(()=>this.toggleElement(this.$el, !0), e && this.delayShow || 0)
              }
          },
          hide(t=!0, e=!0) {
              const i = ()=>this.toggleElement(this.$el, !1, this.animateOut && e);
              this.clearTimers(),
              this.isDelaying = Cr(this.$el).some(s=>this.tracker.movesTo(s)),
              t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i()
          },
          clearTimers() {
              clearTimeout(this.showTimer),
              clearTimeout(this.hideTimer),
              this.showTimer = null,
              this.hideTimer = null,
              this.isDelaying = !1
          },
          isActive() {
              return Z === this
          },
          position() {
              z(this.$el, "bdt-drop-stack"),
              h(this.$el, this._style),
              this.$el.hidden = !0;
              const t = this.target.map(n=>_r(this.$el, n))
                , e = this.getViewportOffset(this.$el)
                , i = [[0, ["x", "width", "left", "right"]], [1, ["y", "height", "top", "bottom"]]];
              for (const [n,[o,r]] of i)
                  this.axis !== o && v([o, !0], this.stretch) && h(this.$el, {
                      [r]: Math.min(I(this.boundary[n])[r], t[n][r] - 2 * e),
                      [`overflow-${o}`]: "auto"
                  });
              const s = t[0].width - 2 * e;
              this.$el.hidden = !1,
              h(this.$el, "maxWidth", ""),
              this.$el.offsetWidth > s && y(this.$el, "bdt-drop-stack"),
              h(this.$el, "maxWidth", s),
              this.positionAt(this.$el, this.target, this.boundary);
              for (const [n,[o,r,a,l]] of i)
                  if (this.axis === o && v([o, !0], this.stretch)) {
                      const c = Math.abs(this.getPositionOffset(this.$el))
                        , u = I(this.target[n])
                        , d = I(this.$el);
                      h(this.$el, {
                          [r]: (u[a] > d[a] ? u[a] - Math.max(I(this.boundary[n])[a], t[n][a] + e) : Math.min(I(this.boundary[n])[l], t[n][l] - e) - u[l]) - c,
                          [`overflow-${o}`]: "auto"
                      }),
                      this.positionAt(this.$el, this.target, this.boundary)
                  }
          }
      }
  };
  function Cr(t) {
      const e = [];
      return Ct(t, i=>h(i, "position") !== "static" && e.push(i)),
      e
  }
  function _r(t, e) {
      return at(Vt(e).find(i=>D(t, i)))
  }
  function Er(t) {
      const {$el: e} = t.$create("toggle", ut(t.toggle, t.$el), {
          target: t.$el,
          mode: t.mode
      });
      return f(e, "aria-haspopup", !0),
      t.lazyload(e),
      e
  }
  function Ir(t) {
      const e = ()=>t.$emit()
        , i = x(window, "resize", e)
        , s = Pe(Vt(t.$el).concat(t.target), e);
      return ()=>{
          s.disconnect(),
          i()
      }
  }
  function Pr(t) {
      return x([document, ...Vt(t.$el)], "scroll", ()=>t.$emit(), {
          passive: !0
      })
  }
  function Ar(t) {
      return x(document, "keydown", e=>{
          e.keyCode === C.ESC && t.hide(!1)
      }
      )
  }
  function Or(t) {
      return x(document, gt, ({target: e})=>{
          D(e, t.$el) || L(document, `${Pt} ${si} scroll`, ({defaultPrevented: i, type: s, target: n})=>{
              !i && s === Pt && e === n && !(t.targetEl && D(e, t.targetEl)) && t.hide(!1)
          }
          , !0)
      }
      )
  }
  var un = {
      mixins: [st, Be],
      props: {
          dropdown: String,
          align: String,
          clsDrop: String,
          boundary: Boolean,
          dropbar: Boolean,
          dropbarAnchor: Boolean,
          duration: Number,
          mode: Boolean,
          offset: Boolean,
          stretch: Boolean,
          delayShow: Boolean,
          delayHide: Boolean,
          target: Boolean,
          targetX: Boolean,
          targetY: Boolean,
          animation: Boolean,
          animateOut: Boolean
      },
      data: {
          dropdown: "> li > a, > ul > li > a",
          align: J ? "right" : "left",
          clsDrop: "bdt-dropdown",
          clsDropbar: "bdt-dropnav-dropbar",
          boundary: !0,
          dropbar: !1,
          dropbarAnchor: !1,
          duration: 200,
          container: !1
      },
      computed: {
          dropbarAnchor({dropbarAnchor: t}, e) {
              return ut(t, e) || e
          },
          dropbar: {
              get({dropbar: t}) {
                  return t ? (t = this._dropbar || ut(t, this.$el) || w(`+ .${this.clsDropbar}`, this.$el),
                  t || (this._dropbar = w("<div></div>"))) : null
              },
              watch(t) {
                  y(t, "bdt-dropbar", "bdt-dropbar-top", this.clsDropbar, `bdt-${this.$options.name}-dropbar`)
              },
              immediate: !0
          },
          dropContainer(t, e) {
              return this.container || e
          },
          dropdowns: {
              get({clsDrop: t}, e) {
                  var i;
                  const s = O(`.${t}`, e);
                  if (this.dropContainer !== e)
                      for (const n of O(`.${t}`, this.dropContainer)) {
                          const o = (i = this.getDropdown(n)) == null ? void 0 : i.targetEl;
                          !v(s, n) && o && D(o, this.$el) && s.push(n)
                      }
                  return s
              },
              watch(t) {
                  this.$create("drop", t.filter(e=>!this.getDropdown(e)), {
                      ...this.$props,
                      flip: !1,
                      shift: !0,
                      pos: `bottom-${this.align}`,
                      boundary: this.boundary === !0 ? this.$el : this.boundary
                  })
              },
              immediate: !0
          },
          items: {
              get({dropdown: t}, e) {
                  return O(t, e)
              },
              watch(t) {
                  f(E(this.$el), "role", "presentation"),
                  f(t, {
                      tabindex: -1,
                      role: "menuitem"
                  }),
                  f(t[0], "tabindex", 0)
              },
              immediate: !0
          }
      },
      connected() {
          f(this.$el, "role", "menubar")
      },
      disconnected() {
          ot(this._dropbar),
          delete this._dropbar
      },
      events: [{
          name: "mouseover focusin",
          delegate() {
              return this.dropdown
          },
          handler({current: t, type: e}) {
              const i = this.getActive();
              if (i && v(i.mode, "hover") && i.targetEl && !D(i.targetEl, t) && !i.isDelaying && i.hide(!1),
              e === "focusin")
                  for (const s of this.items)
                      f(s, "tabindex", t === s ? 0 : -1)
          }
      }, {
          name: "keydown",
          delegate() {
              return this.dropdown
          },
          handler(t) {
              const {current: e, keyCode: i} = t
                , s = this.getActive();
              i === C.DOWN && wt(e, "aria-expanded") && (t.preventDefault(),
              !s || s.targetEl !== e ? (e.click(),
              L(this.dropContainer, "show", ({target: n})=>fn(n))) : fn(s.$el)),
              dn(t, this.items, s)
          }
      }, {
          name: "keydown",
          el() {
              return this.dropContainer
          },
          delegate() {
              return `.${this.clsDrop}`
          },
          handler(t) {
              var e;
              const {current: i, keyCode: s} = t;
              if (!v(this.dropdowns, i))
                  return;
              const n = this.getActive();
              let o = -1;
              if (s === C.HOME ? o = 0 : s === C.END ? o = "last" : s === C.UP ? o = "previous" : s === C.DOWN ? o = "next" : s === C.ESC && ((e = n.targetEl) == null || e.focus()),
              ~o) {
                  t.preventDefault();
                  const r = O(ye, i);
                  r[ct(o, r, $t(r, a=>_(a, ":focus")))].focus()
              }
              dn(t, this.items, n)
          }
      }, {
          name: "mouseleave",
          el() {
              return this.dropbar
          },
          filter() {
              return this.dropbar
          },
          handler() {
              const t = this.getActive();
              t && v(t.mode, "hover") && !this.dropdowns.some(e=>_(e, ":hover")) && t.hide()
          }
      }, {
          name: "beforeshow",
          el() {
              return this.dropContainer
          },
          filter() {
              return this.dropbar
          },
          handler({target: t}) {
              this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && Ze(this.dropbarAnchor, this.dropbar),
              y(t, `${this.clsDrop}-dropbar`))
          }
      }, {
          name: "show",
          el() {
              return this.dropContainer
          },
          filter() {
              return this.dropbar
          },
          handler({target: t}) {
              if (!this.isDropbarDrop(t))
                  return;
              const e = this.getDropdown(t)
                , i = ()=>{
                  const s = ne(t, `.${this.clsDrop}`).concat(t).map(a=>I(a))
                    , n = Math.min(...s.map(({top: a})=>a))
                    , o = Math.max(...s.map(({bottom: a})=>a))
                    , r = I(this.dropbar);
                  h(this.dropbar, "top", this.dropbar.offsetTop - (r.top - n)),
                  this.transitionTo(o - n + $(h(t, "marginBottom")), t)
              }
              ;
              this._observer = Pe([e.$el, ...e.target], i),
              i()
          }
      }, {
          name: "beforehide",
          el() {
              return this.dropContainer
          },
          filter() {
              return this.dropbar
          },
          handler(t) {
              const e = this.getActive();
              _(this.dropbar, ":hover") && e.$el === t.target && !this.items.some(i=>e.targetEl !== i && _(i, ":focus")) && t.preventDefault()
          }
      }, {
          name: "hide",
          el() {
              return this.dropContainer
          },
          filter() {
              return this.dropbar
          },
          handler({target: t}) {
              var e;
              if (!this.isDropbarDrop(t))
                  return;
              (e = this._observer) == null || e.disconnect();
              const i = this.getActive();
              (!i || i.$el === t) && this.transitionTo(0)
          }
      }],
      methods: {
          getActive() {
              var t;
              return v(this.dropdowns, (t = Z) == null ? void 0 : t.$el) && Z
          },
          async transitionTo(t, e) {
              const {dropbar: i} = this
                , s = et(i);
              e = s < t && e,
              await S.cancel([e, i]),
              h(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`),
              et(i, s),
              await Promise.all([S.start(i, {
                  height: t
              }, this.duration), S.start(e, {
                  clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`
              }, this.duration).finally(()=>h(e, {
                  clipPath: ""
              }))]).catch(P)
          },
          getDropdown(t) {
              return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
          },
          isDropbarDrop(t) {
              return this.getDropdown(t) && B(t, this.clsDrop)
          }
      }
  };
  function dn(t, e, i) {
      var s, n, o;
      const {current: r, keyCode: a} = t;
      let l = -1;
      a === C.HOME ? l = 0 : a === C.END ? l = "last" : a === C.LEFT ? l = "previous" : a === C.RIGHT ? l = "next" : a === C.TAB && ((s = i.targetEl) == null || s.focus(),
      (n = i.hide) == null || n.call(i, !1)),
      ~l && (t.preventDefault(),
      (o = i.hide) == null || o.call(i, !1),
      e[ct(l, e, e.indexOf(i.targetEl || r))].focus())
  }
  function fn(t) {
      var e;
      w(":focus", t) || (e = w(ye, t)) == null || e.focus()
  }
  var Dr = {
      mixins: [st],
      args: "target",
      props: {
          target: Boolean
      },
      data: {
          target: !1
      },
      computed: {
          input(t, e) {
              return w(xe, e)
          },
          state() {
              return this.input.nextElementSibling
          },
          target({target: t}, e) {
              return t && (t === !0 && A(this.input) === e && this.input.nextElementSibling || w(t, e))
          }
      },
      update() {
          var t;
          const {target: e, input: i} = this;
          if (!e)
              return;
          let s;
          const n = Mi(e) ? "value" : "textContent"
            , o = e[n]
            , r = (t = i.files) != null && t[0] ? i.files[0].name : _(i, "select") && (s = O("option", i).filter(a=>a.selected)[0]) ? s.textContent : i.value;
          o !== r && (e[n] = r)
      },
      events: [{
          name: "change",
          handler() {
              this.$emit()
          }
      }, {
          name: "reset",
          el() {
              return Y(this.$el, "form")
          },
          handler() {
              this.$emit()
          }
      }]
  }
    , pn = {
      mixins: [bt],
      props: {
          margin: String,
          firstColumn: Boolean
      },
      data: {
          margin: "bdt-margin-small-top",
          firstColumn: "bdt-first-column"
      },
      resizeTargets() {
          return [this.$el, ..._i(this.$el.children)]
      },
      connected() {
          this.registerObserver(Bs(this.$el, ()=>this.$reset(), {
              childList: !0,
              attributes: !0,
              attributeFilter: ["style"]
          }))
      },
      update: {
          read() {
              const t = is(this.$el.children);
              return {
                  rows: t,
                  columns: Br(t)
              }
          },
          write({columns: t, rows: e}) {
              for (const i of e)
                  for (const s of i)
                      j(s, this.margin, e[0] !== i),
                      j(s, this.firstColumn, t[0].includes(s))
          },
          events: ["resize"]
      }
  };
  function is(t) {
      return gn(t, "top", "bottom")
  }
  function Br(t) {
      const e = [];
      for (const i of t) {
          const s = gn(i, "left", "right");
          for (let n = 0; n < s.length; n++)
              e[n] = e[n] ? e[n].concat(s[n]) : s[n]
      }
      return J ? e.reverse() : e
  }
  function gn(t, e, i) {
      const s = [[]];
      for (const n of t) {
          if (!q(n))
              continue;
          let o = hi(n);
          for (let r = s.length - 1; r >= 0; r--) {
              const a = s[r];
              if (!a[0]) {
                  a.push(n);
                  break
              }
              let l;
              if (a[0].offsetParent === n.offsetParent ? l = hi(a[0]) : (o = hi(n, !0),
              l = hi(a[0], !0)),
              o[e] >= l[i] - 1 && o[e] !== l[e]) {
                  s.push([n]);
                  break
              }
              if (o[i] - 1 > l[e] || o[e] === l[e]) {
                  a.push(n);
                  break
              }
              if (r === 0) {
                  s.unshift([n]);
                  break
              }
          }
      }
      return s
  }
  function hi(t, e=!1) {
      let {offsetTop: i, offsetLeft: s, offsetHeight: n, offsetWidth: o} = t;
      return e && ([i,s] = Wt(t)),
      {
          top: i,
          left: s,
          bottom: i + n,
          right: s + o
      }
  }
  var ci = {
      connected() {
          mn(this._uid, ()=>this.$emit("scroll"))
      },
      disconnected() {
          vn(this._uid)
      }
  };
  const ui = new Map;
  let Me;
  function mn(t, e) {
      Me = Me || x(window, "scroll", ()=>ui.forEach(i=>i()), {
          passive: !0,
          capture: !0
      }),
      ui.set(t, e)
  }
  function vn(t) {
      ui.delete(t),
      Me && !ui.size && (Me(),
      Me = null)
  }
  var Mr = {
      extends: pn,
      mixins: [st],
      name: "grid",
      props: {
          masonry: Boolean,
          parallax: Number
      },
      data: {
          margin: "bdt-grid-margin",
          clsStack: "bdt-grid-stack",
          masonry: !1,
          parallax: 0
      },
      connected() {
          this.masonry && y(this.$el, "bdt-flex-top bdt-flex-wrap-top"),
          this.parallax && mn(this._uid, ()=>this.$emit("scroll"))
      },
      disconnected() {
          vn(this._uid)
      },
      update: [{
          write({columns: t}) {
              j(this.$el, this.clsStack, t.length < 2)
          },
          events: ["resize"]
      }, {
          read(t) {
              let {columns: e, rows: i} = t;
              if (!e.length || !this.masonry && !this.parallax || wn(this.$el))
                  return t.translates = !1,
                  !1;
              let s = !1;
              const n = E(this.$el)
                , o = e.map(c=>Nt(c, "offsetHeight"))
                , r = zr(n, this.margin) * (i.length - 1)
                , a = Math.max(...o) + r;
              this.masonry && (e = e.map(c=>Ve(c, "offsetTop")),
              s = Nr(i, e));
              let l = Math.abs(this.parallax);
              return l && (l = o.reduce((c,u,d)=>Math.max(c, u + r + (d % 2 ? l : l / 8) - a), 0)),
              {
                  padding: l,
                  columns: e,
                  translates: s,
                  height: s ? a : ""
              }
          },
          write({height: t, padding: e}) {
              h(this.$el, "paddingBottom", e || ""),
              t !== !1 && h(this.$el, "height", t)
          },
          events: ["resize"]
      }, {
          read() {
              return this.parallax && wn(this.$el) ? !1 : {
                  scrolled: this.parallax ? Qi(this.$el) * Math.abs(this.parallax) : !1
              }
          },
          write({columns: t, scrolled: e, translates: i}) {
              e === !1 && !i || t.forEach((s,n)=>s.forEach((o,r)=>h(o, "transform", !e && !i ? "" : `translateY(${(i && -i[n][r]) + (e ? n % 2 ? e : e / 8 : 0)}px)`)))
          },
          events: ["scroll", "resize"]
      }]
  };
  function wn(t) {
      return E(t).some(e=>h(e, "position") === "absolute")
  }
  function Nr(t, e) {
      const i = t.map(s=>Math.max(...s.map(n=>n.offsetHeight)));
      return e.map(s=>{
          let n = 0;
          return s.map((o,r)=>n += r ? i[r - 1] - s[r - 1].offsetHeight : 0)
      }
      )
  }
  function zr(t, e) {
      const [i] = t.filter(s=>B(s, e));
      return $(i ? h(i, "marginTop") : h(t[0], "paddingLeft"))
  }
  var Fr = {
      mixins: [bt],
      args: "target",
      props: {
          target: String,
          row: Boolean
      },
      data: {
          target: "> *",
          row: !0
      },
      computed: {
          elements: {
              get({target: t}, e) {
                  return O(t, e)
              },
              watch() {
                  this.$reset()
              }
          }
      },
      resizeTargets() {
          return [this.$el, ...this.elements]
      },
      update: {
          read() {
              return {
                  rows: (this.row ? is(this.elements) : [this.elements]).map(Hr)
              }
          },
          write({rows: t}) {
              for (const {heights: e, elements: i} of t)
                  i.forEach((s,n)=>h(s, "minHeight", e[n]))
          },
          events: ["resize"]
      }
  };
  function Hr(t) {
      if (t.length < 2)
          return {
              heights: [""],
              elements: t
          };
      h(t, "minHeight", "");
      let e = t.map(Lr);
      const i = Math.max(...e);
      return {
          heights: t.map((s,n)=>e[n].toFixed(2) === i.toFixed(2) ? "" : i),
          elements: t
      }
  }
  function Lr(t) {
      let e = !1;
      q(t) || (e = t.style.display,
      h(t, "display", "block", "important"));
      const i = b(t).height - ae(t, "height", "content-box");
      return e !== !1 && h(t, "display", e),
      i
  }
  var Wr = {
      mixins: [bt],
      props: {
          expand: Boolean,
          offsetTop: Boolean,
          offsetBottom: Boolean,
          minHeight: Number
      },
      data: {
          expand: !1,
          offsetTop: !1,
          offsetBottom: !1,
          minHeight: 0
      },
      resizeTargets() {
          return [this.$el, ...mt(this.$el)]
      },
      update: {
          read({minHeight: t}) {
              if (!q(this.$el))
                  return !1;
              let e = "";
              const i = ae(this.$el, "height", "content-box")
                , {body: s, scrollingElement: n} = document
                , [o] = mt(this.$el)
                , {height: r} = at(o === s ? n : o);
              if (this.expand)
                  e = Math.max(r - (b(o).height - b(this.$el).height) - i, 0);
              else {
                  const a = n === o || s === o;
                  if (e = `calc(${a ? "100vh" : `${r}px`}`,
                  this.offsetTop)
                      if (a) {
                          const l = Wt(this.$el)[0] - Wt(o)[0];
                          e += l > 0 && l < r / 2 ? ` - ${l}px` : ""
                      } else
                          e += ` - ${h(o, "paddingTop")}`;
                  this.offsetBottom === !0 ? e += ` - ${b(this.$el.nextElementSibling).height}px` : vt(this.offsetBottom) ? e += ` - ${this.offsetBottom}vh` : this.offsetBottom && Qt(this.offsetBottom, "px") ? e += ` - ${$(this.offsetBottom)}px` : N(this.offsetBottom) && (e += ` - ${b(ut(this.offsetBottom, this.$el)).height}px`),
                  e += `${i ? ` - ${i}px` : ""})`
              }
              return {
                  minHeight: e,
                  prev: t
              }
          },
          write({minHeight: t}) {
              h(this.$el, {
                  minHeight: t
              }),
              this.minHeight && $(h(this.$el, "minHeight")) < this.minHeight && h(this.$el, "minHeight", this.minHeight)
          },
          events: ["resize"]
      }
  }
    , bn = {
      args: "src",
      props: {
          id: Boolean,
          icon: String,
          src: String,
          style: String,
          width: Number,
          height: Number,
          ratio: Number,
          class: String,
          strokeAnimation: Boolean,
          attributes: "list"
      },
      data: {
          ratio: 1,
          include: ["style", "class"],
          class: "",
          strokeAnimation: !1
      },
      beforeConnect() {
          this.class += " bdt-svg"
      },
      connected() {
          !this.icon && v(this.src, "#") && ([this.src,this.icon] = this.src.split("#")),
          this.svg = this.getSvg().then(t=>{
              if (this._connected) {
                  const e = Vr(t, this.$el);
                  return this.svgEl && e !== this.svgEl && ot(this.svgEl),
                  this.applyAttributes(e, t),
                  this.svgEl = e
              }
          }
          , P),
          this.strokeAnimation && this.svg.then(t=>{
              this._connected && t && (xn(t),
              this.registerObserver(ce(t, (e,i)=>{
                  xn(t),
                  i.disconnect()
              }
              )))
          }
          )
      },
      disconnected() {
          this.svg.then(t=>{
              this._connected || (Bi(this.$el) && (this.$el.hidden = !1),
              ot(t),
              this.svgEl = null)
          }
          ),
          this.svg = null
      },
      methods: {
          async getSvg() {
              return X(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" ? new Promise(t=>L(this.$el, "load", ()=>t(this.getSvg()))) : jr(await Rr(this.src), this.icon) || Promise.reject("SVG not found.")
          },
          applyAttributes(t, e) {
              for (const o in this.$options.props)
                  v(this.include, o) && o in this && f(t, o, this[o]);
              for (const o in this.attributes) {
                  const [r,a] = this.attributes[o].split(":", 2);
                  f(t, r, a)
              }
              this.id || $e(t, "id");
              const i = ["width", "height"];
              let s = i.map(o=>this[o]);
              s.some(o=>o) || (s = i.map(o=>f(e, o)));
              const n = f(e, "viewBox");
              n && !s.some(o=>o) && (s = n.split(" ").slice(2)),
              s.forEach((o,r)=>f(t, i[r], $(o) * this.ratio || null))
          }
      }
  };
  const Rr = ft(async t=>t ? ht(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
  function jr(t, e) {
      return e && v(t, "<symbol") && (t = qr(t, e) || t),
      t = w(t.substr(t.indexOf("<svg"))),
      (t == null ? void 0 : t.hasChildNodes()) && t
  }
  const $n = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g
    , di = {};
  function qr(t, e) {
      if (!di[t]) {
          di[t] = {},
          $n.lastIndex = 0;
          let i;
          for (; i = $n.exec(t); )
              di[t][i[3]] = `<svg xmlns="http://www.w3.org/2000/svg"${i[1]}svg>`
      }
      return di[t][e]
  }
  function xn(t) {
      const e = sn(t);
      e && t.style.setProperty("--bdt-animation-stroke", e)
  }
  function Vr(t, e) {
      if (Bi(e) || X(e, "canvas")) {
          e.hidden = !0;
          const s = e.nextElementSibling;
          return yn(t, s) ? s : Ze(e, t)
      }
      const i = e.lastElementChild;
      return yn(t, i) ? i : W(e, t)
  }
  function yn(t, e) {
      return X(t, "svg") && X(e, "svg") && t.innerHTML === e.innerHTML
  }
  var ss = {
      props: {
          i18n: Object
      },
      data: {
          i18n: null
      },
      methods: {
          t(t, ...e) {
              var i, s, n;
              let o = 0;
              return ((n = ((i = this.i18n) == null ? void 0 : i[t]) || ((s = this.$options.i18n) == null ? void 0 : s[t])) == null ? void 0 : n.replace(/%s/g, ()=>e[o++] || "")) || ""
          }
      }
  }
    , Yr = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>'
    , Gr = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>'
    , Xr = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>'
    , Jr = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>'
    , Kr = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>'
    , Zr = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>'
    , Qr = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>'
    , Ur = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><style>.bdt-navbar-toggle-animate svg>[class*=line-]{transition:.2s ease-in-out;transition-property:transform,opacity;transform-origin:center;opacity:1}.bdt-navbar-toggle svg>.line-3{opacity:0}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-3{opacity:1}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-2{transform:rotate(45deg)}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-3{transform:rotate(-45deg)}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-1,.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-4{opacity:0}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-1{transform:translateY(6px) scaleX(0)}.bdt-navbar-toggle-animate[aria-expanded=true] svg>.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>'
    , ta = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>'
    , ea = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>'
    , ia = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>'
    , sa = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>'
    , na = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>'
    , oa = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>'
    , ra = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>'
    , aa = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>'
    , la = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>'
    , ha = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'
    , ca = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>'
    , ua = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
  const fi = {
      spinner: ca,
      totop: ua,
      marker: Jr,
      "close-icon": Yr,
      "close-large": Gr,
      "drop-parent-icon": Xr,
      "nav-parent-icon": Kr,
      "nav-parent-icon-large": Zr,
      "navbar-parent-icon": Qr,
      "navbar-toggle-icon": Ur,
      "overlay-icon": ta,
      "pagination-next": ea,
      "pagination-previous": ia,
      "search-icon": sa,
      "search-large": na,
      "search-navbar": oa,
      "slidenav-next": ra,
      "slidenav-next-large": aa,
      "slidenav-previous": la,
      "slidenav-previous-large": ha
  }
    , ns = {
      install: xa,
      extends: bn,
      args: "icon",
      props: ["icon"],
      data: {
          include: []
      },
      isIcon: !0,
      beforeConnect() {
          y(this.$el, "bdt-icon")
      },
      methods: {
          async getSvg() {
              const t = ya(this.icon);
              if (!t)
                  throw "Icon not found.";
              return t
          }
      }
  }
    , Gt = {
      args: !1,
      extends: ns,
      data: t=>({
          icon: Zt(t.constructor.options.name)
      }),
      beforeConnect() {
          y(this.$el, this.$options.id)
      }
  }
    , da = {
      extends: Gt,
      beforeConnect() {
          const t = this.$props.icon;
          this.icon = Y(this.$el, ".bdt-nav-primary") ? `${t}-large` : t
      }
  }
    , fa = {
      extends: Gt,
      beforeConnect() {
          this.icon = B(this.$el, "bdt-search-icon") && ne(this.$el, ".bdt-search-large").length ? "search-large" : ne(this.$el, ".bdt-search-navbar").length ? "search-navbar" : this.$props.icon
      }
  }
    , pa = {
      extends: Gt,
      beforeConnect() {
          f(this.$el, "role", "status")
      },
      methods: {
          async getSvg() {
              const t = await ns.methods.getSvg.call(this);
              return this.ratio !== 1 && h(w("circle", t), "strokeWidth", 1 / this.ratio),
              t
          }
      }
  }
    , Xt = {
      extends: Gt,
      mixins: [ss],
      beforeConnect() {
          const t = Y(this.$el, "a,button");
          f(t, "role", this.role !== null && X(t, "a") ? "button" : this.role);
          const e = this.t("label");
          e && !wt(t, "aria-label") && f(t, "aria-label", e)
      }
  }
    , kn = {
      extends: Xt,
      beforeConnect() {
          y(this.$el, "bdt-slidenav");
          const t = this.$props.icon;
          this.icon = B(this.$el, "bdt-slidenav-large") ? `${t}-large` : t
      }
  }
    , ga = {
      extends: Xt,
      i18n: {
          label: "Open menu"
      }
  }
    , ma = {
      extends: Xt,
      i18n: {
          label: "Close"
      },
      beforeConnect() {
          this.icon = `close-${B(this.$el, "bdt-close-large") ? "large" : "icon"}`
      }
  }
    , va = {
      extends: Xt,
      i18n: {
          label: "Open"
      }
  }
    , wa = {
      extends: Xt,
      i18n: {
          label: "Back to top"
      }
  }
    , ba = {
      extends: Xt,
      i18n: {
          label: "Next page"
      },
      data: {
          role: null
      }
  }
    , $a = {
      extends: Xt,
      i18n: {
          label: "Previous page"
      },
      data: {
          role: null
      }
  }
    , pi = {};
  function xa(t) {
      t.icon.add = (e,i)=>{
          const s = N(e) ? {
              [e]: i
          } : e;
          St(s, (n,o)=>{
              fi[o] = n,
              delete pi[o]
          }
          ),
          t._initialized && Ct(document.body, n=>St(t.getComponents(n), o=>{
              o.$options.isIcon && o.icon in s && o.$reset()
          }
          ))
      }
  }
  function ya(t) {
      return fi[t] ? (pi[t] || (pi[t] = w((fi[ka(t)] || fi[t]).trim())),
      pi[t].cloneNode(!0)) : null
  }
  function ka(t) {
      return J ? Ai(Ai(t, "left", "right"), "previous", "next") : t
  }
  const Sa = Rt && "loading"in HTMLImageElement.prototype;
  var Ta = {
      args: "dataSrc",
      props: {
          dataSrc: String,
          sources: String,
          margin: String,
          target: String,
          loading: String
      },
      data: {
          dataSrc: "",
          sources: !1,
          margin: "50%",
          target: !1,
          loading: "lazy"
      },
      connected() {
          if (this.loading !== "lazy") {
              this.load();
              return
          }
          const t = [this.$el, ...Se(this.$props.target, this.$el)];
          Sa && gi(this.$el) && (this.$el.loading = "lazy",
          os(this.$el),
          t.length === 1) || (Pa(this.$el),
          this.registerObserver(ce(t, (e,i)=>{
              this.load(),
              i.disconnect()
          }
          , {
              rootMargin: this.margin
          })))
      },
      disconnected() {
          this._data.image && (this._data.image.onload = "")
      },
      methods: {
          load() {
              if (this._data.image)
                  return this._data.image;
              const t = gi(this.$el) ? this.$el : _a(this.$el, this.dataSrc, this.sources);
              return $e(t, "loading"),
              os(this.$el, t.currentSrc),
              this._data.image = t
          }
      }
  };
  function os(t, e) {
      if (gi(t)) {
          const i = A(t);
          (X(i, "picture") ? E(i) : [t]).forEach(n=>Sn(n, n))
      } else
          e && !v(t.style.backgroundImage, e) && (h(t, "backgroundImage", `url(${zi(e)})`),
          m(t, Ft("load", !1)))
  }
  const Ca = ["data-src", "data-srcset", "sizes"];
  function Sn(t, e) {
      Ca.forEach(i=>{
          const s = tt(t, i);
          s && f(e, i.replace(/^(data-)+/, ""), s)
      }
      )
  }
  function _a(t, e, i) {
      const s = new Image;
      return Ea(s, i),
      Sn(t, s),
      s.onload = ()=>{
          os(t, s.currentSrc)
      }
      ,
      f(s, "src", e),
      s
  }
  function Ea(t, e) {
      if (e = Ia(e),
      e.length) {
          const i = Ht("<picture>");
          for (const s of e) {
              const n = Ht("<source>");
              f(n, s),
              W(i, n)
          }
          W(i, t)
      }
  }
  function Ia(t) {
      if (!t)
          return [];
      if (ht(t, "["))
          try {
              t = JSON.parse(t)
          } catch {
              t = []
          }
      else
          t = de(t);
      return Q(t) || (t = [t]),
      t.filter(e=>!we(e))
  }
  function Pa(t) {
      gi(t) && !wt(t, "src") && f(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>')
  }
  function gi(t) {
      return X(t, "img")
  }
  var mi = {
      props: {
          media: Boolean
      },
      data: {
          media: !1
      },
      connected() {
          const t = Aa(this.media, this.$el);
          if (this.matchMedia = !0,
          t) {
              this.mediaObj = window.matchMedia(t);
              const e = ()=>{
                  this.matchMedia = this.mediaObj.matches,
                  m(this.$el, Ft("mediachange", !1, !0, [this.mediaObj]))
              }
              ;
              this.offMediaObj = x(this.mediaObj, "change", ()=>{
                  e(),
                  this.$emit("resize")
              }
              ),
              e()
          }
      },
      disconnected() {
          var t;
          (t = this.offMediaObj) == null || t.call(this)
      }
  };
  function Aa(t, e) {
      if (N(t)) {
          if (ht(t, "@"))
              t = $(h(e, `--bdt-breakpoint-${t.substr(1)}`));
          else if (isNaN(t))
              return t
      }
      return t && vt(t) ? `(min-width: ${t}px)` : ""
  }
  var Oa = {
      mixins: [st, mi, bt],
      props: {
          fill: String
      },
      data: {
          fill: "",
          clsWrapper: "bdt-leader-fill",
          clsHide: "bdt-leader-hide",
          attrFill: "data-fill"
      },
      computed: {
          fill({fill: t}) {
              return t || h(this.$el, "--bdt-leader-fill-content")
          }
      },
      connected() {
          [this.wrapper] = qi(this.$el, `<span class="${this.clsWrapper}">`)
      },
      disconnected() {
          _e(this.wrapper.childNodes)
      },
      update: {
          read() {
              return {
                  width: Math.trunc(this.$el.offsetWidth / 2),
                  fill: this.fill,
                  hide: !this.matchMedia
              }
          },
          write({width: t, fill: e, hide: i}) {
              j(this.wrapper, this.clsHide, i),
              f(this.wrapper, this.attrFill, new Array(t).join(e))
          },
          events: ["resize"]
      }
  };
  const nt = [];
  var rs = {
      mixins: [st, Be, Yt],
      props: {
          selPanel: String,
          selClose: String,
          escClose: Boolean,
          bgClose: Boolean,
          stack: Boolean,
          role: String
      },
      data: {
          cls: "bdt-open",
          escClose: !0,
          bgClose: !0,
          overlay: !0,
          stack: !1,
          role: "dialog"
      },
      computed: {
          panel({selPanel: t}, e) {
              return w(t, e)
          },
          transitionElement() {
              return this.panel
          },
          bgClose({bgClose: t}) {
              return t && this.panel
          }
      },
      connected() {
          f(this.panel || this.$el, "role", this.role),
          this.overlay && f(this.panel || this.$el, "aria-modal", !0)
      },
      beforeDisconnect() {
          v(nt, this) && this.toggleElement(this.$el, !1, !1)
      },
      events: [{
          name: "click",
          delegate() {
              return `${this.selClose},a[href*="#"]`
          },
          handler(t) {
              const {current: e, defaultPrevented: i} = t
                , {hash: s} = e;
              !i && s && De(e) && !D(s, this.$el) && w(s, document.body) ? this.hide() : _(e, this.selClose) && (t.preventDefault(),
              this.hide())
          }
      }, {
          name: "toggle",
          self: !0,
          handler(t) {
              t.defaultPrevented || (t.preventDefault(),
              this.isToggled() === v(nt, this) && this.toggle())
          }
      }, {
          name: "beforeshow",
          self: !0,
          handler(t) {
              if (v(nt, this))
                  return !1;
              !this.stack && nt.length ? (Promise.all(nt.map(e=>e.hide())).then(this.show),
              t.preventDefault()) : nt.push(this)
          }
      }, {
          name: "show",
          self: !0,
          handler() {
              this.stack && h(this.$el, "zIndex", $(h(this.$el, "zIndex")) + nt.length);
              const t = [this.overlay && Ba(this), this.overlay && nn(this.$el), this.bgClose && Ma(this), this.escClose && Na(this)];
              L(this.$el, "hidden", ()=>t.forEach(e=>e && e()), {
                  self: !0
              }),
              y(document.documentElement, this.clsPage)
          }
      }, {
          name: "shown",
          self: !0,
          handler() {
              Je(this.$el) || f(this.$el, "tabindex", "-1"),
              _(this.$el, ":focus-within") || this.$el.focus()
          }
      }, {
          name: "hidden",
          self: !0,
          handler() {
              v(nt, this) && nt.splice(nt.indexOf(this), 1),
              h(this.$el, "zIndex", ""),
              nt.some(t=>t.clsPage === this.clsPage) || z(document.documentElement, this.clsPage)
          }
      }],
      methods: {
          toggle() {
              return this.isToggled() ? this.hide() : this.show()
          },
          show() {
              return this.container && A(this.$el) !== this.container ? (W(this.container, this.$el),
              new Promise(t=>requestAnimationFrame(()=>this.show().then(t)))) : this.toggleElement(this.$el, !0, Tn)
          },
          hide() {
              return this.toggleElement(this.$el, !1, Tn)
          }
      }
  };
  function Tn(t, e, {transitionElement: i, _toggle: s}) {
      return new Promise((n,o)=>L(t, "show hide", ()=>{
          var r;
          (r = t._reject) == null || r.call(t),
          t._reject = o,
          s(t, e);
          const a = L(i, "transitionstart", ()=>{
              L(i, "transitionend transitioncancel", n, {
                  self: !0
              }),
              clearTimeout(l)
          }
          , {
              self: !0
          })
            , l = setTimeout(()=>{
              a(),
              n()
          }
          , Da(h(i, "transitionDuration")))
      }
      )).then(()=>delete t._reject)
  }
  function Da(t) {
      return t ? Qt(t, "ms") ? $(t) : $(t) * 1e3 : 0
  }
  function Ba(t) {
      return x(document, "focusin", e=>{
          se(nt) === t && !D(e.target, t.$el) && t.$el.focus()
      }
      )
  }
  function Ma(t) {
      return x(document, gt, ({target: e})=>{
          se(nt) !== t || t.overlay && !D(e, t.$el) || D(e, t.panel) || L(document, `${Pt} ${si} scroll`, ({defaultPrevented: i, type: s, target: n})=>{
              !i && s === Pt && e === n && t.hide()
          }
          , !0)
      }
      )
  }
  function Na(t) {
      return x(document, "keydown", e=>{
          e.keyCode === 27 && se(nt) === t && t.hide()
      }
      )
  }
  var za = {
      install: Fa,
      mixins: [rs],
      data: {
          clsPage: "bdt-modal-page",
          selPanel: ".bdt-modal-dialog",
          selClose: ".bdt-modal-close, .bdt-modal-close-default, .bdt-modal-close-outside, .bdt-modal-close-full"
      },
      events: [{
          name: "show",
          self: !0,
          handler() {
              B(this.panel, "bdt-margin-auto-vertical") ? y(this.$el, "bdt-flex") : h(this.$el, "display", "block"),
              et(this.$el)
          }
      }, {
          name: "hidden",
          self: !0,
          handler() {
              h(this.$el, "display", ""),
              z(this.$el, "bdt-flex")
          }
      }]
  };
  function Fa({modal: t}) {
      t.dialog = function(i, s) {
          const n = t(`<div class="bdt-modal"> <div class="bdt-modal-dialog">${i}</div> </div>`, s);
          return n.show(),
          x(n.$el, "hidden", async()=>{
              await Promise.resolve(),
              n.$destroy(!0)
          }
          , {
              self: !0
          }),
          n
      }
      ,
      t.alert = function(i, s) {
          return e(({i18n: n})=>`<div class="bdt-modal-body">${N(i) ? i : It(i)}</div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-primary bdt-modal-close" autofocus>${n.ok}</button> </div>`, s, n=>n.resolve())
      }
      ,
      t.confirm = function(i, s) {
          return e(({i18n: n})=>`<form> <div class="bdt-modal-body">${N(i) ? i : It(i)}</div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-default bdt-modal-close" type="button">${n.cancel}</button> <button class="bdt-button bdt-button-primary" autofocus>${n.ok}</button> </div> </form>`, s, n=>n.reject())
      }
      ,
      t.prompt = function(i, s, n) {
          return e(({i18n: o})=>`<form class="bdt-form-stacked"> <div class="bdt-modal-body"> <label>${N(i) ? i : It(i)}</label> <input class="bdt-input" value="${s || ""}" autofocus> </div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-default bdt-modal-close" type="button">${o.cancel}</button> <button class="bdt-button bdt-button-primary">${o.ok}</button> </div> </form>`, n, o=>o.resolve(null), o=>w("input", o.$el).value)
      }
      ,
      t.i18n = {
          ok: "Ok",
          cancel: "Cancel"
      };
      function e(i, s, n, o) {
          s = {
              bgClose: !1,
              escClose: !0,
              role: "alertdialog",
              i18n: t.i18n,
              ...s
          };
          const r = t.dialog(i(s), s)
            , a = new Xe;
          let l = !1;
          return x(r.$el, "submit", "form", c=>{
              c.preventDefault(),
              a.resolve(o == null ? void 0 : o(r)),
              l = !0,
              r.hide()
          }
          ),
          x(r.$el, "hide", ()=>!l && n(a)),
          a.promise.dialog = r,
          a.promise
      }
  }
  var Ha = {
      extends: rn,
      data: {
          targets: "> .bdt-parent",
          toggle: "> a",
          content: "> ul"
      }
  }
    , La = {
      extends: un,
      data: {
          dropdown: ".bdt-navbar-nav > li > a, .bdt-navbar-item, .bdt-navbar-toggle",
          clsDrop: "bdt-navbar-dropdown"
      },
      computed: {
          items: {
              get({dropdown: t}, e) {
                  return O(t, e)
              },
              watch(t) {
                  const e = B(this.$el, "bdt-navbar-justify");
                  for (const i of O(".bdt-navbar-nav, .bdt-navbar-left, .bdt-navbar-right", this.$el))
                      h(i, "flexGrow", e ? O(this.dropdown, i).length : "");
                  f(O(".bdt-navbar-nav", this.$el), "role", "group"),
                  f(O(".bdt-navbar-nav > *", this.$el), "role", "presentation"),
                  f(t, {
                      tabindex: -1,
                      role: "menuitem"
                  }),
                  f(t[0], "tabindex", 0)
              },
              immediate: !0
          }
      }
  }
    , Cn = {
      props: {
          swiping: Boolean
      },
      data: {
          swiping: !0
      },
      computed: {
          swipeTarget(t, e) {
              return e
          }
      },
      connected() {
          this.swiping && ai(this, {
              el: this.swipeTarget,
              name: gt,
              passive: !0,
              handler(t) {
                  if (!Tt(t))
                      return;
                  const e = re(t)
                    , i = "tagName"in t.target ? t.target : A(t.target);
                  L(document, `${Pt} ${si} scroll`, s=>{
                      const {x: n, y: o} = re(s);
                      (s.type !== "scroll" && i && n && Math.abs(e.x - n) > 100 || o && Math.abs(e.y - o) > 100) && setTimeout(()=>{
                          m(i, "swipe"),
                          m(i, `swipe${Wa(e.x, e.y, n, o)}`)
                      }
                      )
                  }
                  )
              }
          })
      }
  };
  function Wa(t, e, i, s) {
      return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down"
  }
  var Ra = {
      mixins: [rs, Cn],
      args: "mode",
      props: {
          mode: String,
          flip: Boolean,
          overlay: Boolean
      },
      data: {
          mode: "slide",
          flip: !1,
          overlay: !1,
          clsPage: "bdt-offcanvas-page",
          clsContainer: "bdt-offcanvas-container",
          selPanel: ".bdt-offcanvas-bar",
          clsFlip: "bdt-offcanvas-flip",
          clsContainerAnimation: "bdt-offcanvas-container-animation",
          clsSidebarAnimation: "bdt-offcanvas-bar-animation",
          clsMode: "bdt-offcanvas",
          clsOverlay: "bdt-offcanvas-overlay",
          selClose: ".bdt-offcanvas-close",
          container: !1
      },
      computed: {
          clsFlip({flip: t, clsFlip: e}) {
              return t ? e : ""
          },
          clsOverlay({overlay: t, clsOverlay: e}) {
              return t ? e : ""
          },
          clsMode({mode: t, clsMode: e}) {
              return `${e}-${t}`
          },
          clsSidebarAnimation({mode: t, clsSidebarAnimation: e}) {
              return t === "none" || t === "reveal" ? "" : e
          },
          clsContainerAnimation({mode: t, clsContainerAnimation: e}) {
              return t !== "push" && t !== "reveal" ? "" : e
          },
          transitionElement({mode: t}) {
              return t === "reveal" ? A(this.panel) : this.panel
          }
      },
      update: {
          read() {
              this.isToggled() && !q(this.$el) && this.hide()
          },
          events: ["resize"]
      },
      events: [{
          name: "touchmove",
          self: !0,
          passive: !1,
          filter() {
              return this.overlay
          },
          handler(t) {
              t.cancelable && t.preventDefault()
          }
      }, {
          name: "show",
          self: !0,
          handler() {
              this.mode === "reveal" && !B(A(this.panel), this.clsMode) && (Ue(this.panel, "<div>"),
              y(A(this.panel), this.clsMode));
              const {body: t, scrollingElement: e} = document;
              y(t, this.clsContainer, this.clsFlip),
              h(t, "touch-action", "pan-y pinch-zoom"),
              h(this.$el, "display", "block"),
              h(this.panel, "maxWidth", e.clientWidth),
              y(this.$el, this.clsOverlay),
              y(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode),
              et(t),
              y(t, this.clsContainerAnimation),
              this.clsContainerAnimation && ja()
          }
      }, {
          name: "hide",
          self: !0,
          handler() {
              z(document.body, this.clsContainerAnimation),
              h(document.body, "touch-action", "")
          }
      }, {
          name: "hidden",
          self: !0,
          handler() {
              this.clsContainerAnimation && qa(),
              this.mode === "reveal" && _e(this.panel),
              z(this.panel, this.clsSidebarAnimation, this.clsMode),
              z(this.$el, this.clsOverlay),
              h(this.$el, "display", ""),
              h(this.panel, "maxWidth", ""),
              z(document.body, this.clsContainer, this.clsFlip)
          }
      }, {
          name: "swipeLeft swipeRight",
          handler(t) {
              this.isToggled() && Qt(t.type, "Left") ^ this.flip && this.hide()
          }
      }]
  };
  function ja() {
      _n().content += ",user-scalable=0"
  }
  function qa() {
      const t = _n();
      t.content = t.content.replace(/,user-scalable=0$/, "")
  }
  function _n() {
      return w('meta[name="viewport"]', document.head) || W(document.head, '<meta name="viewport">')
  }
  var Va = {
      mixins: [st, bt],
      props: {
          selContainer: String,
          selContent: String,
          minHeight: Number
      },
      data: {
          selContainer: ".bdt-modal",
          selContent: ".bdt-modal-dialog",
          minHeight: 150
      },
      computed: {
          container({selContainer: t}, e) {
              return Y(e, t)
          },
          content({selContent: t}, e) {
              return Y(e, t)
          }
      },
      resizeTargets() {
          return [this.container, this.content]
      },
      update: {
          read() {
              return !this.content || !this.container || !q(this.$el) ? !1 : {
                  max: Math.max(this.minHeight, et(this.container) - (b(this.content).height - et(this.$el)))
              }
          },
          write({max: t}) {
              h(this.$el, {
                  minHeight: this.minHeight,
                  maxHeight: t
              })
          },
          events: ["resize"]
      }
  }
    , Ya = {
      mixins: [bt],
      props: ["width", "height"],
      resizeTargets() {
          return [this.$el, A(this.$el)]
      },
      connected() {
          y(this.$el, "bdt-responsive-width")
      },
      update: {
          read() {
              return q(this.$el) && this.width && this.height ? {
                  width: Ee(A(this.$el)),
                  height: this.height
              } : !1
          },
          write(t) {
              et(this.$el, Ge.contain({
                  height: this.height,
                  width: this.width
              }, t).height)
          },
          events: ["resize"]
      }
  }
    , Ga = {
      props: {
          offset: Number
      },
      data: {
          offset: 0
      },
      connected() {
          Xa(this)
      },
      disconnected() {
          Ja(this)
      },
      methods: {
          async scrollTo(t) {
              t = t && w(t) || document.body,
              m(this.$el, "beforescroll", [this, t]) && (await qs(t, {
                  offset: this.offset
              }),
              m(this.$el, "scrolled", [this, t]))
          }
      }
  };
  const Ne = new Set;
  function Xa(t) {
      Ne.size || x(document, "click", En),
      Ne.add(t)
  }
  function Ja(t) {
      Ne.delete(t),
      Ne.size || zt(document, "click", En)
  }
  function En(t) {
      if (!t.defaultPrevented)
          for (const e of Ne)
              D(t.target, e.$el) && De(e.$el) && (t.preventDefault(),
              e.scrollTo(on(e.$el)))
  }
  var Ka = {
      mixins: [ci],
      args: "cls",
      props: {
          cls: String,
          target: String,
          hidden: Boolean,
          margin: String,
          repeat: Boolean,
          delay: Number
      },
      data: ()=>({
          cls: "",
          target: !1,
          hidden: !0,
          margin: "-1px",
          repeat: !1,
          delay: 0,
          inViewClass: "bdt-scrollspy-inview"
      }),
      computed: {
          elements: {
              get({target: t}, e) {
                  return t ? O(t, e) : [e]
              },
              watch(t, e) {
                  this.hidden && h(ke(t, `:not(.${this.inViewClass})`), "opacity", 0),
                  be(t, e) || this.$reset()
              },
              immediate: !0
          }
      },
      connected() {
          this._data.elements = new Map,
          this.registerObserver(ce(this.elements, t=>{
              const e = this._data.elements;
              for (const {target: i, isIntersecting: s} of t) {
                  e.has(i) || e.set(i, {
                      cls: tt(i, "bdt-scrollspy-class") || this.cls
                  });
                  const n = e.get(i);
                  !this.repeat && n.show || (n.show = s)
              }
              this.$emit()
          }
          , {
              rootMargin: this.margin
          }, !1))
      },
      disconnected() {
          for (const [t,e] of this._data.elements.entries())
              z(t, this.inViewClass, (e == null ? void 0 : e.cls) || "")
      },
      update: [{
          write(t) {
              for (const [e,i] of t.elements.entries())
                  i.show && !i.inview && !i.queued ? (i.queued = !0,
                  t.promise = (t.promise || Promise.resolve()).then(()=>new Promise(s=>setTimeout(s, this.delay))).then(()=>{
                      this.toggle(e, !0),
                      setTimeout(()=>{
                          i.queued = !1,
                          this.$emit()
                      }
                      , 300)
                  }
                  )) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1)
          }
      }],
      methods: {
          toggle(t, e) {
              var i;
              const s = this._data.elements.get(t);
              if (s) {
                  if ((i = s.off) == null || i.call(s),
                  h(t, "opacity", !e && this.hidden ? 0 : ""),
                  j(t, this.inViewClass, e),
                  j(t, s.cls),
                  /\bbdt-animation-/.test(s.cls)) {
                      const n = ()=>Wi(t, "bdt-animation-[\\w-]+");
                      e ? s.off = L(t, "animationcancel animationend", n) : n()
                  }
                  m(t, e ? "inview" : "outview"),
                  s.inview = e,
                  this.$update(t)
              }
          }
      }
  }
    , Za = {
      mixins: [ci],
      props: {
          cls: String,
          closest: String,
          scroll: Boolean,
          overflow: Boolean,
          offset: Number
      },
      data: {
          cls: "bdt-active",
          closest: !1,
          scroll: !1,
          overflow: !0,
          offset: 0
      },
      computed: {
          links: {
              get(t, e) {
                  return O('a[href*="#"]', e).filter(i=>i.hash && De(i))
              },
              watch(t) {
                  this.scroll && this.$create("scroll", t, {
                      offset: this.offset || 0
                  })
              },
              immediate: !0
          },
          elements({closest: t}) {
              return Y(this.links, t || "*")
          }
      },
      update: [{
          read() {
              const t = this.links.map(on).filter(Boolean)
                , {length: e} = t;
              if (!e || !q(this.$el))
                  return !1;
              const [i] = mt(t, !0)
                , {scrollTop: s, scrollHeight: n} = i
                , o = at(i)
                , r = n - o.height;
              let a = !1;
              if (s === r)
                  a = e - 1;
              else {
                  for (let l = 0; l < t.length && !(I(t[l]).top - o.top - this.offset > 0); l++)
                      a = +l;
                  a === !1 && this.overflow && (a = 0)
              }
              return {
                  active: a
              }
          },
          write({active: t}) {
              const e = t !== !1 && !B(this.elements[t], this.cls);
              this.links.forEach(i=>i.blur());
              for (let i = 0; i < this.elements.length; i++)
                  j(this.elements[i], this.cls, +i === t);
              e && m(this.$el, "active", [t, this.elements[t]])
          },
          events: ["scroll", "resize"]
      }]
  }
    , Qa = {
      mixins: [st, mi, bt, ci],
      props: {
          position: String,
          top: null,
          bottom: null,
          start: null,
          end: null,
          offset: String,
          overflowFlip: Boolean,
          animation: String,
          clsActive: String,
          clsInactive: String,
          clsFixed: String,
          clsBelow: String,
          selTarget: String,
          showOnUp: Boolean,
          targetOffset: Number
      },
      data: {
          position: "top",
          top: !1,
          bottom: !1,
          start: !1,
          end: !1,
          offset: 0,
          overflowFlip: !1,
          animation: "",
          clsActive: "bdt-active",
          clsInactive: "",
          clsFixed: "bdt-sticky-fixed",
          clsBelow: "bdt-sticky-below",
          selTarget: "",
          showOnUp: !1,
          targetOffset: !1
      },
      computed: {
          selTarget({selTarget: t}, e) {
              return t && w(t, e) || e
          }
      },
      resizeTargets() {
          return document.documentElement
      },
      connected() {
          this.start = In(this.start || this.top),
          this.end = In(this.end || this.bottom),
          this.placeholder = w("+ .bdt-sticky-placeholder", this.$el) || w('<div class="bdt-sticky-placeholder"></div>'),
          this.isFixed = !1,
          this.setActive(!1),
          this.registerObserver(Pe(this.$el, ()=>!this.isFixed && this.$emit("resize")))
      },
      disconnected() {
          this.isFixed && (this.hide(),
          z(this.selTarget, this.clsInactive)),
          Pn(this.$el),
          ot(this.placeholder),
          this.placeholder = null
      },
      events: [{
          name: "resize",
          el() {
              return [window, window.visualViewport]
          },
          handler() {
              this.$emit("resizeViewport")
          }
      }, {
          name: "load hashchange popstate",
          el() {
              return window
          },
          filter() {
              return this.targetOffset !== !1
          },
          handler() {
              const {scrollingElement: t} = document;
              !location.hash || t.scrollTop === 0 || setTimeout(()=>{
                  const e = I(w(location.hash))
                    , i = I(this.$el);
                  this.isFixed && Oi(e, i) && (t.scrollTop = e.top - i.height - rt(this.targetOffset, "height", this.placeholder) - rt(this.offset, "height", this.placeholder))
              }
              )
          }
      }],
      update: [{
          read({height: t, width: e, margin: i, sticky: s}, n) {
              if (this.inactive = !this.matchMedia || !q(this.$el),
              this.inactive)
                  return;
              const o = this.isFixed && n.has("resize") && !s;
              o && (h(this.selTarget, "transition", "0s"),
              this.hide()),
              this.active || ({height: t, width: e} = I(this.$el),
              i = h(this.$el, "margin")),
              o && (this.show(),
              requestAnimationFrame(()=>h(this.selTarget, "transition", "")));
              const r = rt("100vh", "height")
                , a = et(window)
                , l = document.scrollingElement.scrollHeight - r;
              let c = this.position;
              this.overflowFlip && t > r && (c = c === "top" ? "bottom" : "top");
              const u = this.isFixed ? this.placeholder : this.$el;
              let d = rt(this.offset, "height", s ? this.$el : u);
              c === "bottom" && (t < a || this.overflowFlip) && (d += a - t);
              const p = this.overflowFlip ? 0 : Math.max(0, t + d - r)
                , g = I(u).top
                , T = I(this.$el).height
                , F = (this.start === !1 ? g : as(this.start, this.$el, g)) - d
                , M = this.end === !1 ? l : Math.min(l, as(this.end, this.$el, g + t, !0) - T - d + p);
              return s = l && !this.showOnUp && F + d === g && M === Math.min(l, as("!*", this.$el, 0, !0) - T - d + p) && h(A(this.$el), "overflowY") === "visible",
              {
                  start: F,
                  end: M,
                  offset: d,
                  overflow: p,
                  topOffset: g,
                  height: t,
                  elHeight: T,
                  width: e,
                  margin: i,
                  top: Wt(u)[0],
                  sticky: s
              }
          },
          write({height: t, width: e, margin: i, offset: s, sticky: n}) {
              if ((this.inactive || n || !this.isFixed) && Pn(this.$el),
              this.inactive)
                  return;
              n && (t = e = i = 0,
              h(this.$el, {
                  position: "sticky",
                  top: s
              }));
              const {placeholder: o} = this;
              h(o, {
                  height: t,
                  width: e,
                  margin: i
              }),
              D(o, document) || (o.hidden = !0),
              (n ? Ke : Ze)(this.$el, o)
          },
          events: ["resize", "resizeViewport"]
      }, {
          read({scroll: t=0, dir: e="down", overflow: i, overflowScroll: s=0, start: n, end: o}) {
              const r = document.scrollingElement.scrollTop;
              return {
                  dir: t <= r ? "down" : "up",
                  prevDir: e,
                  scroll: r,
                  prevScroll: t,
                  offsetParentTop: I((this.isFixed ? this.placeholder : this.$el).offsetParent).top,
                  overflowScroll: U(s + U(r, n, o) - U(t, n, o), 0, i)
              }
          },
          write(t, e) {
              const i = e.has("scroll")
                , {initTimestamp: s=0, dir: n, prevDir: o, scroll: r, prevScroll: a=0, top: l, start: c, topOffset: u, height: d} = t;
              if (r < 0 || r === a && i || this.showOnUp && !i && !this.isFixed)
                  return;
              const p = Date.now();
              if ((p - s > 300 || n !== o) && (t.initScroll = r,
              t.initTimestamp = p),
              !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(a - r) <= 10))
                  if (this.inactive || r < c || this.showOnUp && (r <= c || n === "down" && i || n === "up" && !this.isFixed && r <= u + d)) {
                      if (!this.isFixed) {
                          pt.inProgress(this.$el) && l > r && (pt.cancel(this.$el),
                          this.hide());
                          return
                      }
                      this.animation && r > u ? (pt.cancel(this.$el),
                      pt.out(this.$el, this.animation).then(()=>this.hide(), P)) : this.hide()
                  } else
                      this.isFixed ? this.update() : this.animation && r > u ? (pt.cancel(this.$el),
                      this.show(),
                      pt.in(this.$el, this.animation).catch(P)) : this.show()
          },
          events: ["resize", "resizeViewport", "scroll"]
      }],
      methods: {
          show() {
              this.isFixed = !0,
              this.update(),
              this.placeholder.hidden = !1
          },
          hide() {
              const {offset: t, sticky: e} = this._data;
              this.setActive(!1),
              z(this.$el, this.clsFixed, this.clsBelow),
              e ? h(this.$el, "top", t) : h(this.$el, {
                  position: "",
                  top: "",
                  width: "",
                  marginTop: ""
              }),
              this.placeholder.hidden = !0,
              this.isFixed = !1
          },
          update() {
              let {width: t, scroll: e=0, overflow: i, overflowScroll: s=0, start: n, end: o, offset: r, topOffset: a, height: l, elHeight: c, offsetParentTop: u, sticky: d} = this._data;
              const p = n !== 0 || e > n;
              if (!d) {
                  let g = "fixed";
                  e > o && (r += o - u,
                  g = "absolute"),
                  h(this.$el, {
                      position: g,
                      width: t
                  }),
                  h(this.$el, "marginTop", 0, "important")
              }
              i && (r -= s),
              h(this.$el, "top", r),
              this.setActive(p),
              j(this.$el, this.clsBelow, e > a + (d ? Math.min(l, c) : l)),
              y(this.$el, this.clsFixed)
          },
          setActive(t) {
              const e = this.active;
              this.active = t,
              t ? (Ri(this.selTarget, this.clsInactive, this.clsActive),
              e !== t && m(this.$el, "active")) : (Ri(this.selTarget, this.clsActive, this.clsInactive),
              e !== t && m(this.$el, "inactive"))
          }
      }
  };
  function as(t, e, i, s) {
      if (!t)
          return 0;
      if (vt(t) || N(t) && t.match(/^-?\d/))
          return i + rt(t, "height", e, !0);
      {
          const n = t === !0 ? A(e) : ut(t, e);
          return I(n).bottom - (s && n && D(e, n) ? $(h(n, "paddingBottom")) : 0)
      }
  }
  function In(t) {
      return t === "true" ? !0 : t === "false" ? !1 : t
  }
  function Pn(t) {
      h(t, {
          position: "",
          top: "",
          marginTop: "",
          width: ""
      })
  }
  const ls = ".bdt-disabled *, .bdt-disabled, [disabled]";
  var An = {
      mixins: [Oe, Cn, Yt],
      args: "connect",
      props: {
          connect: String,
          toggle: String,
          itemNav: String,
          active: Number,
          followFocus: Boolean
      },
      data: {
          connect: "~.bdt-switcher",
          toggle: "> * > :first-child",
          itemNav: !1,
          active: 0,
          cls: "bdt-active",
          attrItem: "bdt-switcher-item",
          selVertical: ".bdt-nav",
          followFocus: !1
      },
      computed: {
          connects: {
              get({connect: t}, e) {
                  return Se(t, e)
              },
              watch(t) {
                  this.swiping && h(t, "touchAction", "pan-y pinch-zoom"),
                  this.$emit()
              },
              document: !0,
              immediate: !0
          },
          connectChildren: {
              get() {
                  return this.connects.map(t=>E(t)).flat()
              },
              watch() {
                  const t = this.index();
                  for (const e of this.connects)
                      E(e).forEach((i,s)=>j(i, this.cls, s === t)),
                      this.lazyload(this.$el, E(e));
                  this.$emit()
              },
              immediate: !0
          },
          toggles: {
              get({toggle: t}, e) {
                  return O(t, e)
              },
              watch(t) {
                  this.$emit();
                  const e = this.index();
                  this.show(~e ? e : t[this.active] || t[0])
              },
              immediate: !0
          },
          children() {
              return E(this.$el).filter(t=>this.toggles.some(e=>D(e, t)))
          },
          swipeTarget() {
              return this.connects
          }
      },
      connected() {
          f(this.$el, "role", "tablist")
      },
      events: [{
          name: "click keydown",
          delegate() {
              return this.toggle
          },
          handler(t) {
              !_(t.current, ls) && (t.type === "click" || t.keyCode === C.SPACE) && (t.preventDefault(),
              this.show(t.current))
          }
      }, {
          name: "keydown",
          delegate() {
              return this.toggle
          },
          handler(t) {
              const {current: e, keyCode: i} = t
                , s = _(this.$el, this.selVertical);
              let n = i === C.HOME ? 0 : i === C.END ? "last" : i === C.LEFT && !s || i === C.UP && s ? "previous" : i === C.RIGHT && !s || i === C.DOWN && s ? "next" : -1;
              if (~n) {
                  t.preventDefault();
                  const o = this.toggles.filter(a=>!_(a, ls))
                    , r = o[ct(n, o, o.indexOf(e))];
                  r.focus(),
                  this.followFocus && this.show(r)
              }
          }
      }, {
          name: "click",
          el() {
              return this.connects.concat(this.itemNav ? Se(this.itemNav, this.$el) : [])
          },
          delegate() {
              return `[${this.attrItem}],[data-${this.attrItem}]`
          },
          handler(t) {
              Y(t.target, "a,button") && (t.preventDefault(),
              this.show(tt(t.current, this.attrItem)))
          }
      }, {
          name: "swipeRight swipeLeft",
          filter() {
              return this.swiping
          },
          el() {
              return this.connects
          },
          handler({type: t}) {
              this.show(Qt(t, "Left") ? "next" : "previous")
          }
      }],
      update() {
          var t;
          f(this.connects, "role", "presentation"),
          f(E(this.$el), "role", "presentation");
          for (const e in this.toggles) {
              const i = this.toggles[e]
                , s = (t = this.connects[0]) == null ? void 0 : t.children[e];
              f(i, "role", "tab"),
              s && (i.id = Dt(this, i, `-tab-${e}`),
              s.id = Dt(this, s, `-tabpanel-${e}`),
              f(i, "aria-controls", s.id),
              f(s, {
                  role: "tabpanel",
                  "aria-labelledby": i.id
              }))
          }
          f(this.$el, "aria-orientation", _(this.$el, this.selVertical) ? "vertical" : null)
      },
      methods: {
          index() {
              return $t(this.children, t=>B(t, this.cls))
          },
          show(t) {
              const e = this.toggles.filter(r=>!_(r, ls))
                , i = this.index()
                , s = ct(!qe(t) || v(e, t) ? t : 0, e, ct(this.toggles[i], e))
                , n = ct(e[s], this.toggles);
              this.children.forEach((r,a)=>{
                  j(r, this.cls, n === a),
                  f(this.toggles[a], {
                      "aria-selected": n === a,
                      tabindex: n === a ? null : -1
                  })
              }
              );
              const o = i >= 0 && i !== s;
              this.connects.forEach(async({children: r})=>{
                  await this.toggleElement(k(r).filter(a=>B(a, this.cls)), !1, o),
                  await this.toggleElement(r[n], !0, o)
              }
              )
          }
      }
  }
    , Ua = {
      mixins: [st],
      extends: An,
      props: {
          media: Boolean
      },
      data: {
          media: 960,
          attrItem: "bdt-tab-item",
          selVertical: ".bdt-tab-left,.bdt-tab-right"
      },
      connected() {
          const t = B(this.$el, "bdt-tab-left") ? "bdt-tab-left" : B(this.$el, "bdt-tab-right") ? "bdt-tab-right" : !1;
          t && this.$create("toggle", this.$el, {
              cls: t,
              mode: "media",
              media: this.media
          })
      }
  };
  const tl = 32;
  var el = {
      mixins: [Oe, mi, Yt],
      args: "target",
      props: {
          href: String,
          target: null,
          mode: "list",
          queued: Boolean
      },
      data: {
          href: !1,
          target: !1,
          mode: "click",
          queued: !0
      },
      computed: {
          target({href: t, target: e}, i) {
              return e = Se(e || t, i),
              e.length && e || [i]
          }
      },
      connected() {
          v(this.mode, "media") || (Je(this.$el) || f(this.$el, "tabindex", "0"),
          !this.cls && X(this.$el, "a") && f(this.$el, "role", "button")),
          this.lazyload(this.$el, ()=>this.target)
      },
      events: [{
          name: gt,
          filter() {
              return v(this.mode, "hover")
          },
          handler(t) {
              this._preventClick = null,
              !(!Tt(t) || this._showState || this.$el.disabled) && (m(this.$el, "focus"),
              L(document, gt, ()=>m(this.$el, "blur"), !0, e=>!D(e.target, this.$el)),
              v(this.mode, "click") && (this._preventClick = !0))
          }
      }, {
          name: `${At} ${qt} focus blur`,
          filter() {
              return v(this.mode, "hover")
          },
          handler(t) {
              if (Tt(t) || this.$el.disabled)
                  return;
              const e = v([At, "focus"], t.type)
                , i = this.isToggled(this.target);
              if (!(!e && (t.type === qt && _(this.$el, ":focus") || t.type === "blur" && _(this.$el, ":hover")))) {
                  if (this._showState && e && i !== this._showState) {
                      e || (this._showState = null);
                      return
                  }
                  this._showState = e ? i : null,
                  this.toggle(`toggle${e ? "show" : "hide"}`)
              }
          }
      }, {
          name: "keydown",
          filter() {
              return v(this.mode, "click") && !X(this.$el, "input")
          },
          handler(t) {
              t.keyCode === tl && (t.preventDefault(),
              this.$el.click())
          }
      }, {
          name: "click",
          filter() {
              return ["click", "hover"].some(t=>v(this.mode, t))
          },
          handler(t) {
              let e;
              (this._preventClick || Y(t.target, 'a[href="#"], a[href=""]') || (e = Y(t.target, "a[href]")) && (!this.isToggled(this.target) || e.hash && _(this.target, e.hash))) && t.preventDefault(),
              !this._preventClick && v(this.mode, "click") && this.toggle()
          }
      }, {
          name: "mediachange",
          filter() {
              return v(this.mode, "media")
          },
          el() {
              return this.target
          },
          handler(t, e) {
              e.matches ^ this.isToggled(this.target) && this.toggle()
          }
      }],
      methods: {
          async toggle(t) {
              if (!m(this.target, t || "toggle", [this]))
                  return;
              if (wt(this.$el, "aria-expanded") && f(this.$el, "aria-expanded", !this.isToggled(this.target)),
              !this.queued)
                  return this.toggleElement(this.target);
              const e = this.target.filter(s=>B(s, this.clsLeave));
              if (e.length) {
                  for (const s of this.target) {
                      const n = v(e, s);
                      this.toggleElement(s, n, n)
                  }
                  return
              }
              const i = this.target.filter(this.isToggled);
              await this.toggleElement(i, !1),
              await this.toggleElement(this.target.filter(s=>!v(i, s)), !0)
          }
      }
  }
    , il = Object.freeze({
      __proto__: null,
      Accordion: rn,
      Alert: yr,
      Close: ma,
      Cover: Sr,
      Drop: cn,
      DropParentIcon: Gt,
      Dropdown: cn,
      Dropnav: un,
      FormCustom: Dr,
      Grid: Mr,
      HeightMatch: Fr,
      HeightViewport: Wr,
      Icon: ns,
      Img: Ta,
      Leader: Oa,
      Margin: pn,
      Marker: va,
      Modal: za,
      Nav: Ha,
      NavParentIcon: da,
      Navbar: La,
      NavbarParentIcon: Gt,
      NavbarToggleIcon: ga,
      Offcanvas: Ra,
      OverflowAuto: Va,
      OverlayIcon: Gt,
      PaginationNext: ba,
      PaginationPrevious: $a,
      Responsive: Ya,
      Scroll: Ga,
      Scrollspy: Ka,
      ScrollspyNav: Za,
      SearchIcon: fa,
      SlidenavNext: kn,
      SlidenavPrevious: kn,
      Spinner: pa,
      Sticky: Qa,
      Svg: bn,
      Switcher: An,
      Tab: Ua,
      Toggle: el,
      Totop: wa,
      Video: an
  });
  St(il, (t,e)=>it.component(e, t)),
  mr(it);
  const sl = ["days", "hours", "minutes", "seconds"];
  var nl = {
      mixins: [st],
      props: {
          date: String,
          clsWrapper: String,
          role: String
      },
      data: {
          date: "",
          clsWrapper: ".bdt-countdown-%unit%",
          role: "timer"
      },
      connected() {
          f(this.$el, "role", this.role),
          this.date = $(Date.parse(this.$props.date)),
          this.end = !1,
          this.start()
      },
      disconnected() {
          this.stop()
      },
      events: [{
          name: "visibilitychange",
          el() {
              return document
          },
          handler() {
              document.hidden ? this.stop() : this.start()
          }
      }],
      methods: {
          start() {
              this.stop(),
              this.update(),
              this.timer || (m(this.$el, "countdownstart"),
              this.timer = setInterval(this.update, 1e3))
          },
          stop() {
              this.timer && (clearInterval(this.timer),
              m(this.$el, "countdownstop"),
              this.timer = null)
          },
          update() {
              const t = ol(this.date);
              t.total || (this.stop(),
              this.end || (m(this.$el, "countdownend"),
              this.end = !0));
              for (const e of sl) {
                  const i = w(this.clsWrapper.replace("%unit%", e), this.$el);
                  if (!i)
                      continue;
                  let s = String(Math.trunc(t[e]));
                  s = s.length < 2 ? `0${s}` : s,
                  i.textContent !== s && (s = s.split(""),
                  s.length !== i.children.length && It(i, s.map(()=>"<span></span>").join("")),
                  s.forEach((n,o)=>i.children[o].textContent = n))
              }
          }
      }
  };
  function ol(t) {
      const e = Math.max(0, t - Date.now()) / 1e3;
      return {
          total: e,
          seconds: e % 60,
          minutes: e / 60 % 60,
          hours: e / 60 / 60 % 24,
          days: e / 60 / 60 / 24
      }
  }
  const hs = "bdt-transition-leave"
    , cs = "bdt-transition-enter";
  function On(t, e, i, s=0) {
      const n = vi(e, !0)
        , o = {
          opacity: 1
      }
        , r = {
          opacity: 0
      }
        , a = u=>()=>n === vi(e) ? u() : Promise.reject()
        , l = a(async()=>{
          y(e, hs),
          await Promise.all(Bn(e).map((u,d)=>new Promise(p=>setTimeout(()=>S.start(u, r, i / 2, "ease").then(p), d * s)))),
          z(e, hs)
      }
      )
        , c = a(async()=>{
          const u = et(e);
          y(e, cs),
          t(),
          h(E(e), {
              opacity: 0
          }),
          await rl();
          const d = E(e)
            , p = et(e);
          h(e, "alignContent", "flex-start"),
          et(e, u);
          const g = Bn(e);
          h(d, r);
          const T = g.map(async(F,M)=>{
              await al(M * s),
              await S.start(F, o, i / 2, "ease")
          }
          );
          u !== p && T.push(S.start(e, {
              height: p
          }, i / 2 + g.length * s, "ease")),
          await Promise.all(T).then(()=>{
              z(e, cs),
              n === vi(e) && (h(e, {
                  height: "",
                  alignContent: ""
              }),
              h(d, {
                  opacity: ""
              }),
              delete e.dataset.transition)
          }
          )
      }
      );
      return B(e, hs) ? Dn(e).then(c) : B(e, cs) ? Dn(e).then(l).then(c) : l().then(c)
  }
  function vi(t, e) {
      return e && (t.dataset.transition = 1 + vi(t)),
      kt(t.dataset.transition) || 0
  }
  function Dn(t) {
      return Promise.all(E(t).filter(S.inProgress).map(e=>new Promise(i=>L(e, "transitionend transitioncanceled", i))))
  }
  function Bn(t) {
      return is(E(t)).reduce((e,i)=>e.concat(Ve(i.filter(s=>Zi(s)), "offsetLeft")), [])
  }
  function rl() {
      return new Promise(t=>requestAnimationFrame(t))
  }
  function al(t) {
      return new Promise(e=>setTimeout(e, t))
  }
  async function ll(t, e, i) {
      await zn();
      let s = E(e);
      const n = s.map(p=>Mn(p, !0))
        , o = {
          ...h(e, ["height", "padding"]),
          display: "block"
      };
      await Promise.all(s.concat(e).map(S.cancel)),
      t(),
      s = s.concat(E(e).filter(p=>!v(s, p))),
      await Promise.resolve(),
      G.flush();
      const r = f(e, "style")
        , a = h(e, ["height", "padding"])
        , [l,c] = hl(e, s, n)
        , u = s.map(p=>({
          style: f(p, "style")
      }));
      s.forEach((p,g)=>c[g] && h(p, c[g])),
      h(e, o),
      m(e, "scroll"),
      G.flush(),
      await zn();
      const d = s.map((p,g)=>A(p) === e && S.start(p, l[g], i, "ease")).concat(S.start(e, a, i, "ease"));
      try {
          await Promise.all(d),
          s.forEach((p,g)=>{
              f(p, u[g]),
              A(p) === e && h(p, "display", l[g].opacity === 0 ? "none" : "")
          }
          ),
          f(e, "style", r)
      } catch {
          f(s, "style", ""),
          cl(e, o)
      }
  }
  function Mn(t, e) {
      const i = h(t, "zIndex");
      return q(t) ? {
          display: "",
          opacity: e ? h(t, "opacity") : "0",
          pointerEvents: "none",
          position: "absolute",
          zIndex: i === "auto" ? oe(t) : i,
          ...Nn(t)
      } : !1
  }
  function hl(t, e, i) {
      const s = e.map((o,r)=>A(o) && r in i ? i[r] ? q(o) ? Nn(o) : {
          opacity: 0
      } : {
          opacity: q(o) ? 1 : 0
      } : !1)
        , n = s.map((o,r)=>{
          const a = A(e[r]) === t && (i[r] || Mn(e[r]));
          if (!a)
              return !1;
          if (!o)
              delete a.opacity;
          else if (!("opacity"in o)) {
              const {opacity: l} = a;
              l % 1 ? o.opacity = 1 : delete a.opacity
          }
          return a
      }
      );
      return [s, n]
  }
  function cl(t, e) {
      for (const i in e)
          h(t, i, "")
  }
  function Nn(t) {
      const {height: e, width: i} = I(t);
      return {
          height: e,
          width: i,
          transform: "",
          ...ti(t),
          ...h(t, ["marginTop", "marginLeft"])
      }
  }
  function zn() {
      return new Promise(t=>requestAnimationFrame(t))
  }
  var Fn = {
      props: {
          duration: Number,
          animation: Boolean
      },
      data: {
          duration: 150,
          animation: "slide"
      },
      methods: {
          animate(t, e=this.$el) {
              const i = this.animation;
              return (i === "fade" ? On : i === "delayed-fade" ? (...n)=>On(...n, 40) : i ? ll : ()=>(t(),
              Promise.resolve()))(t, e, this.duration).catch(P)
          }
      }
  }
    , ul = {
      mixins: [Fn],
      args: "target",
      props: {
          target: Boolean,
          selActive: Boolean
      },
      data: {
          target: null,
          selActive: !1,
          attrItem: "bdt-filter-control",
          cls: "bdt-active",
          duration: 250
      },
      computed: {
          toggles: {
              get({attrItem: t}, e) {
                  return O(`[${t}],[data-${t}]`, e)
              },
              watch(t) {
                  this.updateState();
                  const e = O(this.selActive, this.$el);
                  for (const i of t) {
                      this.selActive !== !1 && j(i, this.cls, v(e, i));
                      const s = wl(i);
                      X(s, "a") && f(s, "role", "button")
                  }
              },
              immediate: !0
          },
          children: {
              get({target: t}, e) {
                  return O(`${t} > *`, e)
              },
              watch(t, e) {
                  e && !gl(t, e) && this.updateState()
              },
              immediate: !0
          }
      },
      events: [{
          name: "click keydown",
          delegate() {
              return `[${this.attrItem}],[data-${this.attrItem}]`
          },
          handler(t) {
              t.type === "keydown" && t.keyCode !== C.SPACE || Y(t.target, "a,button") && (t.preventDefault(),
              this.apply(t.current))
          }
      }],
      methods: {
          apply(t) {
              const e = this.getState()
                , i = Ln(t, this.attrItem, this.getState());
              dl(e, i) || this.setState(i)
          },
          getState() {
              return this.toggles.filter(t=>B(t, this.cls)).reduce((t,e)=>Ln(e, this.attrItem, t), {
                  filter: {
                      "": ""
                  },
                  sort: []
              })
          },
          async setState(t, e=!0) {
              t = {
                  filter: {
                      "": ""
                  },
                  sort: [],
                  ...t
              },
              m(this.$el, "beforeFilter", [this, t]);
              for (const i of this.toggles)
                  j(i, this.cls, pl(i, this.attrItem, t));
              await Promise.all(O(this.target, this.$el).map(i=>{
                  const s = ()=>{
                      fl(t, i, E(i)),
                      this.$update(this.$el)
                  }
                  ;
                  return e ? this.animate(s, i) : s()
              }
              )),
              m(this.$el, "afterFilter", [this])
          },
          updateState() {
              G.write(()=>this.setState(this.getState(), !1))
          }
      }
  };
  function Hn(t, e) {
      return de(tt(t, e), ["filter"])
  }
  function dl(t, e) {
      return ["filter", "sort"].every(i=>be(t[i], e[i]))
  }
  function fl(t, e, i) {
      const s = ml(t);
      i.forEach(r=>h(r, "display", s && !_(r, s) ? "none" : ""));
      const [n,o] = t.sort;
      if (n) {
          const r = vl(i, n, o);
          be(r, i) || W(e, r)
      }
  }
  function Ln(t, e, i) {
      const {filter: s, group: n, sort: o, order: r="asc"} = Hn(t, e);
      return (s || V(o)) && (n ? s ? (delete i.filter[""],
      i.filter[n] = s) : (delete i.filter[n],
      (we(i.filter) || ""in i.filter) && (i.filter = {
          "": s || ""
      })) : i.filter = {
          "": s || ""
      }),
      V(o) || (i.sort = [o, r]),
      i
  }
  function pl(t, e, {filter: i={
      "": ""
  }, sort: [s,n]}) {
      const {filter: o="", group: r="", sort: a, order: l="asc"} = Hn(t, e);
      return V(a) ? r in i && o === i[r] || !o && r && !(r in i) && !i[""] : s === a && n === l
  }
  function gl(t, e) {
      return t.length === e.length && t.every(i=>e.includes(i))
  }
  function ml({filter: t}) {
      let e = "";
      return St(t, i=>e += i || ""),
      e
  }
  function vl(t, e, i) {
      return [...t].sort((s,n)=>tt(s, e).localeCompare(tt(n, e), void 0, {
          numeric: !0
      }) * (i === "asc" || -1))
  }
  function wl(t) {
      return w("a,button", t) || t
  }
  var us = {
      slide: {
          show(t) {
              return [{
                  transform: H(t * -100)
              }, {
                  transform: H()
              }]
          },
          percent(t) {
              return ze(t)
          },
          translate(t, e) {
              return [{
                  transform: H(e * -100 * t)
              }, {
                  transform: H(e * 100 * (1 - t))
              }]
          }
      }
  };
  function ze(t) {
      return Math.abs(h(t, "transform").split(",")[4] / t.offsetWidth) || 0
  }
  function H(t=0, e="%") {
      return t += t ? e : "",
      `translate3d(${t}, 0, 0)`
  }
  function fe(t) {
      return `scale3d(${t}, ${t}, 1)`
  }
  var Wn = {
      ...us,
      fade: {
          show() {
              return [{
                  opacity: 0
              }, {
                  opacity: 1
              }]
          },
          percent(t) {
              return 1 - h(t, "opacity")
          },
          translate(t) {
              return [{
                  opacity: 1 - t
              }, {
                  opacity: t
              }]
          }
      },
      scale: {
          show() {
              return [{
                  opacity: 0,
                  transform: fe(1 - .2)
              }, {
                  opacity: 1,
                  transform: fe(1)
              }]
          },
          percent(t) {
              return 1 - h(t, "opacity")
          },
          translate(t) {
              return [{
                  opacity: 1 - t,
                  transform: fe(1 - .2 * t)
              }, {
                  opacity: t,
                  transform: fe(1 - .2 + .2 * t)
              }]
          }
      }
  };
  function bl(t, e, i, {animation: s, easing: n}) {
      const {percent: o, translate: r, show: a=P} = s
        , l = a(i)
        , c = new Xe;
      return {
          dir: i,
          show(u, d=0, p) {
              const g = p ? "linear" : n;
              return u -= Math.round(u * U(d, -1, 1)),
              this.translate(d),
              wi(e, "itemin", {
                  percent: d,
                  duration: u,
                  timing: g,
                  dir: i
              }),
              wi(t, "itemout", {
                  percent: 1 - d,
                  duration: u,
                  timing: g,
                  dir: i
              }),
              Promise.all([S.start(e, l[1], u, g), S.start(t, l[0], u, g)]).then(()=>{
                  this.reset(),
                  c.resolve()
              }
              , P),
              c.promise
          },
          cancel() {
              S.cancel([e, t])
          },
          reset() {
              for (const u in l[0])
                  h([e, t], u, "")
          },
          forward(u, d=this.percent()) {
              return S.cancel([e, t]),
              this.show(u, d, !0)
          },
          translate(u) {
              this.reset();
              const d = r(u, i);
              h(e, d[1]),
              h(t, d[0]),
              wi(e, "itemtranslatein", {
                  percent: u,
                  dir: i
              }),
              wi(t, "itemtranslateout", {
                  percent: 1 - u,
                  dir: i
              })
          },
          percent() {
              return o(t || e, e, i)
          },
          getDistance() {
              return t == null ? void 0 : t.offsetWidth
          }
      }
  }
  function wi(t, e, i) {
      m(t, Ft(e, !1, !1, i))
  }
  var $l = {
      i18n: {
          next: "Next slide",
          previous: "Previous slide",
          slideX: "Slide %s",
          slideLabel: "%s of %s"
      },
      data: {
          selNav: !1
      },
      computed: {
          nav: {
              get({selNav: t}, e) {
                  return w(t, e)
              },
              watch(t, e) {
                  f(t, "role", "tablist"),
                  e && this.$emit()
              },
              immediate: !0
          },
          selNavItem({attrItem: t}) {
              return `[${t}],[data-${t}]`
          },
          navItems: {
              get(t, e) {
                  return O(this.selNavItem, e)
              },
              watch() {
                  this.$emit()
              }
          }
      },
      connected() {
          f(this.$el, "aria-roledescription", "carousel")
      },
      update: [{
          write() {
              this.slides.forEach((t,e)=>f(t, {
                  role: this.nav ? "tabpanel" : "group",
                  "aria-label": this.t("slideLabel", e + 1, this.length),
                  "aria-roledescription": this.nav ? null : "slide"
              })),
              this.nav && this.length !== this.nav.children.length && It(this.nav, this.slides.map((t,e)=>`<li ${this.attrItem}="${e}"><a href></a></li>`).join("")),
              f(E(this.nav).concat(this.list), "role", "presentation");
              for (const t of this.navItems) {
                  const e = tt(t, this.attrItem)
                    , i = w("a,button", t) || t;
                  let s, n = null;
                  if (vt(e)) {
                      const o = kt(e)
                        , r = this.slides[o];
                      r && (r.id || (r.id = Dt(this, r, `-item-${e}`)),
                      n = r.id),
                      s = this.t("slideX", $(e) + 1),
                      f(i, "role", "tab")
                  } else
                      this.list && (this.list.id || (this.list.id = Dt(this, this.list, "-items")),
                      n = this.list.id),
                      s = this.t(e);
                  f(i, {
                      "aria-controls": n,
                      "aria-label": f(i, "aria-label") || s
                  })
              }
          }
      }, {
          write() {
              this.navItems.concat(this.nav).forEach(t=>t && (t.hidden = !this.maxIndex)),
              this.updateNav()
          },
          events: ["resize"]
      }],
      events: [{
          name: "click keydown",
          delegate() {
              return this.selNavItem
          },
          handler(t) {
              Y(t.target, "a,button") && (t.type === "click" || t.keyCode === C.SPACE) && (t.preventDefault(),
              this.show(tt(t.current, this.attrItem)))
          }
      }, {
          name: "itemshow",
          handler: "updateNav"
      }, {
          name: "keydown",
          delegate() {
              return this.selNavItem
          },
          handler(t) {
              const {current: e, keyCode: i} = t
                , s = tt(e, this.attrItem);
              if (!vt(s))
                  return;
              let n = i === C.HOME ? 0 : i === C.END ? "last" : i === C.LEFT ? "previous" : i === C.RIGHT ? "next" : -1;
              ~n && (t.preventDefault(),
              this.show(n))
          }
      }],
      methods: {
          updateNav() {
              const t = this.getValidIndex();
              let e, i;
              for (const s of this.navItems) {
                  const n = tt(s, this.attrItem)
                    , o = w("a,button", s) || s;
                  if (vt(n)) {
                      const a = kt(n) === t;
                      j(s, this.clsActive, a),
                      f(o, {
                          "aria-selected": a,
                          tabindex: a ? null : -1
                      }),
                      a && (i = o),
                      e = e || _(o, ":focus")
                  } else
                      j(s, "bdt-invisible", this.finite && (n === "previous" && t === 0 || n === "next" && t >= this.maxIndex));
                  e && i && i.focus()
              }
          }
      }
  };
  const ds = {
      passive: !1,
      capture: !0
  }
    , Rn = {
      passive: !0,
      capture: !0
  }
    , xl = "touchstart mousedown"
    , fs = "touchmove mousemove"
    , jn = "touchend touchcancel mouseup click input scroll";
  var yl = {
      props: {
          draggable: Boolean
      },
      data: {
          draggable: !0,
          threshold: 10
      },
      created() {
          for (const t of ["start", "move", "end"]) {
              const e = this[t];
              this[t] = i=>{
                  const s = re(i).x * (J ? -1 : 1);
                  this.prevPos = s === this.pos ? this.prevPos : this.pos,
                  this.pos = s,
                  e(i)
              }
          }
      },
      events: [{
          name: xl,
          passive: !0,
          delegate() {
              return `${this.selList} > *`
          },
          handler(t) {
              !this.draggable || !Tt(t) && kl(t.target) || Y(t.target, xe) || t.button > 0 || this.length < 2 || this.start(t)
          }
      }, {
          name: "dragstart",
          handler(t) {
              t.preventDefault()
          }
      }, {
          name: fs,
          el() {
              return this.list
          },
          handler: P,
          ...ds
      }],
      methods: {
          start() {
              this.drag = this.pos,
              this._transitioner ? (this.percent = this._transitioner.percent(),
              this.drag += this._transitioner.getDistance() * this.percent * this.dir,
              this._transitioner.cancel(),
              this._transitioner.translate(this.percent),
              this.dragging = !0,
              this.stack = []) : this.prevIndex = this.index,
              x(document, fs, this.move, ds),
              x(document, jn, this.end, Rn),
              h(this.list, "userSelect", "none")
          },
          move(t) {
              const e = this.pos - this.drag;
              if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
                  return;
              h(this.list, "pointerEvents", "none"),
              t.cancelable && t.preventDefault(),
              this.dragging = !0,
              this.dir = e < 0 ? 1 : -1;
              const {slides: i} = this;
              let {prevIndex: s} = this
                , n = Math.abs(e)
                , o = this.getIndex(s + this.dir, s)
                , r = this._getDistance(s, o) || i[s].offsetWidth;
              for (; o !== s && n > r; )
                  this.drag -= r * this.dir,
                  s = o,
                  n -= r,
                  o = this.getIndex(s + this.dir, s),
                  r = this._getDistance(s, o) || i[s].offsetWidth;
              this.percent = n / r;
              const a = i[s]
                , l = i[o]
                , c = this.index !== o
                , u = s === o;
              let d;
              [this.index, this.prevIndex].filter(p=>!v([o, s], p)).forEach(p=>{
                  m(i[p], "itemhidden", [this]),
                  u && (d = !0,
                  this.prevIndex = s)
              }
              ),
              (this.index === s && this.prevIndex !== s || d) && m(i[this.index], "itemshown", [this]),
              c && (this.prevIndex = s,
              this.index = o,
              !u && m(a, "beforeitemhide", [this]),
              m(l, "beforeitemshow", [this])),
              this._transitioner = this._translate(Math.abs(this.percent), a, !u && l),
              c && (!u && m(a, "itemhide", [this]),
              m(l, "itemshow", [this]))
          },
          end() {
              if (zt(document, fs, this.move, ds),
              zt(document, jn, this.end, Rn),
              this.dragging)
                  if (this.dragging = null,
                  this.index === this.prevIndex)
                      this.percent = 1 - this.percent,
                      this.dir *= -1,
                      this._show(!1, this.index, !0),
                      this._transitioner = null;
                  else {
                      const t = (J ? this.dir * (J ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                      this.index = t ? this.index : this.prevIndex,
                      t && (this.percent = 1 - this.percent),
                      this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0)
                  }
              h(this.list, {
                  userSelect: "",
                  pointerEvents: ""
              }),
              this.drag = this.percent = null
          }
      }
  };
  function kl(t) {
      return h(t, "userSelect") !== "none" && k(t.childNodes).some(e=>e.nodeType === 3 && e.textContent.trim())
  }
  var Sl = {
      props: {
          autoplay: Boolean,
          autoplayInterval: Number,
          pauseOnHover: Boolean
      },
      data: {
          autoplay: !1,
          autoplayInterval: 7e3,
          pauseOnHover: !0
      },
      connected() {
          f(this.list, "aria-live", "polite"),
          this.autoplay && this.startAutoplay()
      },
      disconnected() {
          this.stopAutoplay()
      },
      update() {
          f(this.slides, "tabindex", "-1")
      },
      events: [{
          name: "visibilitychange",
          el() {
              return document
          },
          filter() {
              return this.autoplay
          },
          handler() {
              document.hidden ? this.stopAutoplay() : this.startAutoplay()
          }
      }, {
          name: `${At} focusin`,
          filter() {
              return this.autoplay
          },
          handler: "stopAutoplay"
      }, {
          name: `${qt} focusout`,
          filter() {
              return this.autoplay
          },
          handler: "startAutoplay"
      }],
      methods: {
          startAutoplay() {
              this.draggable && _(this.$el, ":focus-within") || this.pauseOnHover && _(this.$el, ":hover") || (this.stopAutoplay(),
              this.interval = setInterval(()=>!this.stack.length && this.show("next"), this.autoplayInterval),
              f(this.list, "aria-live", "off"))
          },
          stopAutoplay() {
              clearInterval(this.interval),
              f(this.list, "aria-live", "polite")
          }
      }
  }
    , qn = {
      mixins: [Sl, yl, $l, bt, ss],
      props: {
          clsActivated: Boolean,
          easing: String,
          index: Number,
          finite: Boolean,
          velocity: Number
      },
      data: ()=>({
          easing: "ease",
          finite: !1,
          velocity: 1,
          index: 0,
          prevIndex: -1,
          stack: [],
          percent: 0,
          clsActive: "bdt-active",
          clsActivated: !1,
          Transitioner: !1,
          transitionOptions: {}
      }),
      connected() {
          this.prevIndex = -1,
          this.index = this.getValidIndex(this.$props.index),
          this.stack = []
      },
      disconnected() {
          z(this.slides, this.clsActive)
      },
      computed: {
          duration({velocity: t}, e) {
              return Vn(e.offsetWidth / t)
          },
          list({selList: t}, e) {
              return w(t, e)
          },
          maxIndex() {
              return this.length - 1
          },
          slides: {
              get() {
                  return E(this.list)
              },
              watch() {
                  this.$emit()
              }
          },
          length() {
              return this.slides.length
          }
      },
      methods: {
          show(t, e=!1) {
              var i;
              if (this.dragging || !this.length)
                  return;
              const {stack: s} = this
                , n = e ? 0 : s.length
                , o = ()=>{
                  s.splice(n, 1),
                  s.length && this.show(s.shift(), !0)
              }
              ;
              if (s[e ? "unshift" : "push"](t),
              !e && s.length > 1) {
                  s.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
                  return
              }
              const r = this.getIndex(this.index)
                , a = B(this.slides, this.clsActive) && this.slides[r]
                , l = this.getIndex(t, this.index)
                , c = this.slides[l];
              if (a === c) {
                  o();
                  return
              }
              if (this.dir = Tl(t, r),
              this.prevIndex = r,
              this.index = l,
              a && !m(a, "beforeitemhide", [this]) || !m(c, "beforeitemshow", [this, a])) {
                  this.index = this.prevIndex,
                  o();
                  return
              }
              const u = this._show(a, c, e).then(()=>{
                  a && m(a, "itemhidden", [this]),
                  m(c, "itemshown", [this]),
                  s.shift(),
                  this._transitioner = null,
                  requestAnimationFrame(()=>s.length && this.show(s.shift(), !0))
              }
              );
              return a && m(a, "itemhide", [this]),
              m(c, "itemshow", [this]),
              u
          },
          getIndex(t=this.index, e=this.index) {
              return U(ct(t, this.slides, e, this.finite), 0, this.maxIndex)
          },
          getValidIndex(t=this.index, e=this.prevIndex) {
              return this.getIndex(t, e)
          },
          _show(t, e, i) {
              if (this._transitioner = this._getTransitioner(t, e, this.dir, {
                  easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
                  ...this.transitionOptions
              }),
              !i && !t)
                  return this._translate(1),
                  Promise.resolve();
              const {length: s} = this.stack;
              return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent)
          },
          _getDistance(t, e) {
              return this._getTransitioner(t, t !== e && e).getDistance()
          },
          _translate(t, e=this.prevIndex, i=this.index) {
              const s = this._getTransitioner(e === i ? !1 : e, i);
              return s.translate(t),
              s
          },
          _getTransitioner(t=this.prevIndex, e=this.index, i=this.dir || 1, s=this.transitionOptions) {
              return new this.Transitioner(ee(t) ? this.slides[t] : t,ee(e) ? this.slides[e] : e,i * (J ? -1 : 1),s)
          }
      }
  };
  function Tl(t, e) {
      return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1
  }
  function Vn(t) {
      return .5 * t + 300
  }
  var Yn = {
      mixins: [qn],
      props: {
          animation: String
      },
      data: {
          animation: "slide",
          clsActivated: "bdt-transition-active",
          Animations: us,
          Transitioner: bl
      },
      computed: {
          animation({animation: t, Animations: e}) {
              return {
                  ...e[t] || e.slide,
                  name: t
              }
          },
          transitionOptions() {
              return {
                  animation: this.animation
              }
          }
      },
      events: {
          beforeitemshow({target: t}) {
              y(t, this.clsActive)
          },
          itemshown({target: t}) {
              y(t, this.clsActivated)
          },
          itemhidden({target: t}) {
              z(t, this.clsActive, this.clsActivated)
          }
      }
  }
    , Gn = {
      mixins: [rs, Yn],
      functional: !0,
      props: {
          delayControls: Number,
          preload: Number,
          videoAutoplay: Boolean,
          template: String
      },
      data: ()=>({
          preload: 1,
          videoAutoplay: !1,
          delayControls: 3e3,
          items: [],
          cls: "bdt-open",
          clsPage: "bdt-lightbox-page",
          selList: ".bdt-lightbox-items",
          attrItem: "bdt-lightbox-item",
          selClose: ".bdt-close-large",
          selCaption: ".bdt-lightbox-caption",
          pauseOnHover: !1,
          velocity: 2,
          Animations: Wn,
          template: '<div class="bdt-lightbox bdt-overflow-hidden"> <ul class="bdt-lightbox-items"></ul> <div class="bdt-lightbox-toolbar bdt-position-top bdt-text-right bdt-transition-slide-top bdt-transition-opaque"> <button class="bdt-lightbox-toolbar-icon bdt-close-large" type="button" bdt-close></button> </div> <a class="bdt-lightbox-button bdt-position-center-left bdt-position-medium bdt-transition-fade" href bdt-slidenav-previous bdt-lightbox-item="previous"></a> <a class="bdt-lightbox-button bdt-position-center-right bdt-position-medium bdt-transition-fade" href bdt-slidenav-next bdt-lightbox-item="next"></a> <div class="bdt-lightbox-toolbar bdt-lightbox-caption bdt-position-bottom bdt-text-center bdt-transition-slide-bottom bdt-transition-opaque"></div> </div>'
      }),
      created() {
          const t = w(this.template)
            , e = w(this.selList, t);
          this.items.forEach(()=>W(e, "<li>"));
          const i = w("[bdt-close]", t)
            , s = this.t("close");
          i && s && (i.dataset.i18n = JSON.stringify({
              label: s
          })),
          this.$mount(W(this.container, t))
      },
      computed: {
          caption({selCaption: t}, e) {
              return w(t, e)
          }
      },
      events: [{
          name: `${ii} ${gt} keydown`,
          handler: "showControls"
      }, {
          name: "click",
          self: !0,
          delegate() {
              return `${this.selList} > *`
          },
          handler(t) {
              t.defaultPrevented || this.hide()
          }
      }, {
          name: "shown",
          self: !0,
          handler() {
              this.showControls()
          }
      }, {
          name: "hide",
          self: !0,
          handler() {
              this.hideControls(),
              z(this.slides, this.clsActive),
              S.stop(this.slides)
          }
      }, {
          name: "hidden",
          self: !0,
          handler() {
              this.$destroy(!0)
          }
      }, {
          name: "keyup",
          el() {
              return document
          },
          handler({keyCode: t}) {
              if (!this.isToggled(this.$el) || !this.draggable)
                  return;
              let e = -1;
              t === C.LEFT ? e = "previous" : t === C.RIGHT ? e = "next" : t === C.HOME ? e = 0 : t === C.END && (e = "last"),
              ~e && this.show(e)
          }
      }, {
          name: "beforeitemshow",
          handler(t) {
              this.isToggled() || (this.draggable = !1,
              t.preventDefault(),
              this.toggleElement(this.$el, !0, !1),
              this.animation = Wn.scale,
              z(t.target, this.clsActive),
              this.stack.splice(1, 0, this.index))
          }
      }, {
          name: "itemshow",
          handler() {
              It(this.caption, this.getItem().caption || "");
              for (let t = -this.preload; t <= this.preload; t++)
                  this.loadItem(this.index + t)
          }
      }, {
          name: "itemshown",
          handler() {
              this.draggable = this.$props.draggable
          }
      }, {
          name: "itemload",
          async handler(t, e) {
              const {source: i, type: s, alt: n="", poster: o, attrs: r={}} = e;
              if (this.setItem(e, "<span bdt-spinner></span>"),
              !i)
                  return;
              let a;
              const l = {
                  allowfullscreen: "",
                  style: "max-width: 100%; box-sizing: border-box;",
                  "bdt-responsive": "",
                  "bdt-video": `${this.videoAutoplay}`
              };
              if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
                  const c = Fe("img", {
                      src: i,
                      alt: n,
                      ...r
                  });
                  x(c, "load", ()=>this.setItem(e, c)),
                  x(c, "error", ()=>this.setError(e))
              } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                  const c = Fe("video", {
                      src: i,
                      poster: o,
                      controls: "",
                      playsinline: "",
                      "bdt-video": `${this.videoAutoplay}`,
                      ...r
                  });
                  x(c, "loadedmetadata", ()=>this.setItem(e, c)),
                  x(c, "error", ()=>this.setError(e))
              } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i))
                  this.setItem(e, Fe("iframe", {
                      src: i,
                      allowfullscreen: "",
                      class: "bdt-lightbox-iframe",
                      ...r
                  }));
              else if (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))
                  this.setItem(e, Fe("iframe", {
                      src: `https://www.youtube${a[1] || ""}.com/embed/${a[2]}${a[3] ? `?${a[3]}` : ""}`,
                      width: 1920,
                      height: 1080,
                      ...l,
                      ...r
                  }));
              else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
                  try {
                      const {height: c, width: u} = await (await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, {
                          credentials: "omit"
                      })).json();
                      this.setItem(e, Fe("iframe", {
                          src: `https://player.vimeo.com/video/${a[1]}${a[2] ? `?${a[2]}` : ""}`,
                          width: u,
                          height: c,
                          ...l,
                          ...r
                      }))
                  } catch {
                      this.setError(e)
                  }
          }
      }],
      methods: {
          loadItem(t=this.index) {
              const e = this.getItem(t);
              this.getSlide(e).childElementCount || m(this.$el, "itemload", [e])
          },
          getItem(t=this.index) {
              return this.items[ct(t, this.slides)]
          },
          setItem(t, e) {
              m(this.$el, "itemloaded", [this, It(this.getSlide(t), e)])
          },
          getSlide(t) {
              return this.slides[this.items.indexOf(t)]
          },
          setError(t) {
              this.setItem(t, '<span bdt-icon="icon: bolt; ratio: 2"></span>')
          },
          showControls() {
              clearTimeout(this.controlsTimer),
              this.controlsTimer = setTimeout(this.hideControls, this.delayControls),
              y(this.$el, "bdt-active", "bdt-transition-active")
          },
          hideControls() {
              z(this.$el, "bdt-active", "bdt-transition-active")
          }
      }
  };
  function Fe(t, e) {
      const i = Ht(`<${t}>`);
      return f(i, e),
      i
  }
  var Cl = {
      install: _l,
      props: {
          toggle: String
      },
      data: {
          toggle: "a"
      },
      computed: {
          toggles: {
              get({toggle: t}, e) {
                  return O(t, e)
              },
              watch(t) {
                  this.hide();
                  for (const e of t)
                      X(e, "a") && f(e, "role", "button")
              },
              immediate: !0
          }
      },
      disconnected() {
          this.hide()
      },
      events: [{
          name: "click",
          delegate() {
              return `${this.toggle}:not(.bdt-disabled)`
          },
          handler(t) {
              t.preventDefault(),
              this.show(t.current)
          }
      }],
      methods: {
          show(t) {
              const e = $s(this.toggles.map(Xn), "source");
              if (te(t)) {
                  const {source: i} = Xn(t);
                  t = $t(e, ({source: s})=>i === s)
              }
              return this.panel = this.panel || this.$create("lightboxPanel", {
                  ...this.$props,
                  items: e
              }),
              x(this.panel.$el, "hidden", ()=>this.panel = null),
              this.panel.show(t)
          },
          hide() {
              var t;
              return (t = this.panel) == null ? void 0 : t.hide()
          }
      }
  };
  function _l(t, e) {
      t.lightboxPanel || t.component("lightboxPanel", Gn),
      xt(e.props, t.component("lightboxPanel").options.props)
  }
  function Xn(t) {
      const e = {};
      for (const i of ["href", "caption", "type", "poster", "alt", "attrs"])
          e[i === "href" ? "source" : i] = tt(t, i);
      return e.attrs = de(e.attrs),
      e
  }
  var El = {
      mixins: [Be],
      functional: !0,
      args: ["message", "status"],
      data: {
          message: "",
          status: "",
          timeout: 5e3,
          group: null,
          pos: "top-center",
          clsContainer: "bdt-notification",
          clsClose: "bdt-notification-close",
          clsMsg: "bdt-notification-message"
      },
      install: Il,
      computed: {
          marginProp({pos: t}) {
              return `margin${ht(t, "top") ? "Top" : "Bottom"}`
          },
          startProps() {
              return {
                  opacity: 0,
                  [this.marginProp]: -this.$el.offsetHeight
              }
          }
      },
      created() {
          const t = w(`.${this.clsContainer}-${this.pos}`, this.container) || W(this.container, `<div class="${this.clsContainer} ${this.clsContainer}-${this.pos}" style="display: block"></div>`);
          this.$mount(W(t, `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-bdt-close></a> <div>${this.message}</div> </div>`))
      },
      async connected() {
          const t = $(h(this.$el, this.marginProp));
          await S.start(h(this.$el, this.startProps), {
              opacity: 1,
              [this.marginProp]: t
          }),
          this.timeout && (this.timer = setTimeout(this.close, this.timeout))
      },
      events: {
          click(t) {
              Y(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(),
              this.close()
          },
          [At]() {
              this.timer && clearTimeout(this.timer)
          },
          [qt]() {
              this.timeout && (this.timer = setTimeout(this.close, this.timeout))
          }
      },
      methods: {
          async close(t) {
              const e = i=>{
                  const s = A(i);
                  m(i, "close", [this]),
                  ot(i),
                  s != null && s.hasChildNodes() || ot(s)
              }
              ;
              this.timer && clearTimeout(this.timer),
              t || await S.start(this.$el, this.startProps),
              e(this.$el)
          }
      }
  };
  function Il(t) {
      t.notification.closeAll = function(e, i) {
          Ct(document.body, s=>{
              const n = t.getComponent(s, "notification");
              n && (!e || e === n.group) && n.close(i)
          }
          )
      }
  }
  const bi = {
      x: $i,
      y: $i,
      rotate: $i,
      scale: $i,
      color: ps,
      backgroundColor: ps,
      borderColor: ps,
      blur: Jt,
      hue: Jt,
      fopacity: Jt,
      grayscale: Jt,
      invert: Jt,
      saturate: Jt,
      sepia: Jt,
      opacity: Al,
      stroke: Ol,
      bgx: Zn,
      bgy: Zn
  }
    , {keys: Jn} = Object;
  var Kn = {
      mixins: [mi],
      props: eo(Jn(bi), "list"),
      data: eo(Jn(bi), void 0),
      computed: {
          props(t, e) {
              const i = {};
              for (const n in t)
                  n in bi && !V(t[n]) && (i[n] = t[n].slice());
              const s = {};
              for (const n in i)
                  s[n] = bi[n](n, e, i[n], i);
              return s
          }
      },
      events: {
          load() {
              this.$emit()
          }
      },
      methods: {
          reset() {
              for (const t in this.getCss(0))
                  h(this.$el, t, "")
          },
          getCss(t) {
              const e = {
                  transform: "",
                  filter: ""
              };
              for (const i in this.props)
                  this.props[i](e, t);
              return e.willChange = Object.keys(e).filter(i=>e[i] !== "").join(","),
              e
          }
      }
  };
  function $i(t, e, i) {
      let s = yi(i) || {
          x: "px",
          y: "px",
          rotate: "deg"
      }[t] || "", n;
      return t === "x" || t === "y" ? (t = `translate${_t(t)}`,
      n = o=>$($(o).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "",
      n = o=>yi([o]) ? rt(o, "width", e, !0) / e.offsetWidth : o),
      i.length === 1 && i.unshift(t === "scale" ? 1 : 0),
      i = pe(i, n),
      (o,r)=>{
          o.transform += ` ${t}(${He(i, r)}${s})`
      }
  }
  function ps(t, e, i) {
      return i.length === 1 && i.unshift(Le(e, t, "")),
      i = pe(i, s=>Pl(e, s)),
      (s,n)=>{
          const [o,r,a] = to(i, n)
            , l = o.map((c,u)=>(c += a * (r[u] - c),
          u === 3 ? $(c) : parseInt(c, 10))).join(",");
          s[t] = `rgba(${l})`
      }
  }
  function Pl(t, e) {
      return Le(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map($)
  }
  function Jt(t, e, i) {
      i.length === 1 && i.unshift(0);
      const s = yi(i) || {
          blur: "px",
          hue: "deg"
      }[t] || "%";
      return t = {
          fopacity: "opacity",
          hue: "hue-rotate"
      }[t] || t,
      i = pe(i),
      (n,o)=>{
          const r = He(i, o);
          n.filter += ` ${t}(${r + s})`
      }
  }
  function Al(t, e, i) {
      return i.length === 1 && i.unshift(Le(e, t, "")),
      i = pe(i),
      (s,n)=>{
          s[t] = He(i, n)
      }
  }
  function Ol(t, e, i) {
      i.length === 1 && i.unshift(0);
      const s = yi(i)
        , n = sn(e);
      return i = pe(i.reverse(), o=>(o = $(o),
      s === "%" ? o * n / 100 : o)),
      i.some(([o])=>o) ? (h(e, "strokeDasharray", n),
      (o,r)=>{
          o.strokeDashoffset = He(i, r)
      }
      ) : P
  }
  function Zn(t, e, i, s) {
      i.length === 1 && i.unshift(0);
      const n = t === "bgy" ? "height" : "width";
      s[t] = pe(i, a=>rt(a, n, e));
      const o = ["bgx", "bgy"].filter(a=>a in s);
      if (o.length === 2 && t === "bgx")
          return P;
      if (Le(e, "backgroundSize", "") === "cover")
          return Dl(t, e, i, s);
      const r = {};
      for (const a of o)
          r[a] = Qn(e, a);
      return Un(o, r, s)
  }
  function Dl(t, e, i, s) {
      const n = Bl(e);
      if (!n.width)
          return P;
      const o = {
          width: e.offsetWidth,
          height: e.offsetHeight
      }
        , r = ["bgx", "bgy"].filter(u=>u in s)
        , a = {};
      for (const u of r) {
          const d = s[u].map(([M])=>M)
            , p = Math.min(...d)
            , g = Math.max(...d)
            , T = d.indexOf(p) < d.indexOf(g)
            , F = g - p;
          a[u] = `${(T ? -F : 0) - (T ? p : g)}px`,
          o[u === "bgy" ? "height" : "width"] += F
      }
      const l = Ge.cover(n, o);
      for (const u of r) {
          const d = u === "bgy" ? "height" : "width"
            , p = l[d] - o[d];
          a[u] = `max(${Qn(e, u)},-${p}px) + ${a[u]}`
      }
      const c = Un(r, a, s);
      return (u,d)=>{
          c(u, d),
          u.backgroundSize = `${l.width}px ${l.height}px`,
          u.backgroundRepeat = "no-repeat"
      }
  }
  function Qn(t, e) {
      return Le(t, `background-position-${e.substr(-1)}`, "")
  }
  function Un(t, e, i) {
      return function(s, n) {
          for (const o of t) {
              const r = He(i[o], n);
              s[`background-position-${o.substr(-1)}`] = `calc(${e[o]} + ${r}px)`
          }
      }
  }
  const xi = {};
  function Bl(t) {
      const e = h(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
      if (xi[e])
          return xi[e];
      const i = new Image;
      return e && (i.src = e,
      !i.naturalWidth) ? (i.onload = ()=>{
          xi[e] = gs(i),
          m(t, Ft("load", !1))
      }
      ,
      gs(i)) : xi[e] = gs(i)
  }
  function gs(t) {
      return {
          width: t.naturalWidth,
          height: t.naturalHeight
      }
  }
  function pe(t, e=$) {
      const i = []
        , {length: s} = t;
      let n = 0;
      for (let o = 0; o < s; o++) {
          let[r,a] = N(t[o]) ? t[o].trim().split(" ") : [t[o]];
          if (r = e(r),
          a = a ? $(a) / 100 : null,
          o === 0 ? a === null ? a = 0 : a && i.push([r, 0]) : o === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([r, a]),
          a = 1)),
          i.push([r, a]),
          a === null)
              n++;
          else if (n) {
              const l = i[o - n - 1][1]
                , c = (a - l) / (n + 1);
              for (let u = n; u > 0; u--)
                  i[o - u][1] = l + c * (n - u + 1);
              n = 0
          }
      }
      return i
  }
  function to(t, e) {
      const i = $t(t.slice(1), ([,s])=>e <= s) + 1;
      return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])]
  }
  function He(t, e) {
      const [i,s,n] = to(t, e);
      return ee(i) ? i + Math.abs(i - s) * n * (i < s ? 1 : -1) : +s
  }
  const Ml = /^-?\d+(\S+)?/;
  function yi(t, e) {
      var i;
      for (const s of t) {
          const n = (i = s.match) == null ? void 0 : i.call(s, Ml);
          if (n)
              return n[1]
      }
      return e
  }
  function Le(t, e, i) {
      const s = t.style[e]
        , n = h(h(t, e, i), e);
      return t.style[e] = s,
      n
  }
  function eo(t, e) {
      return t.reduce((i,s)=>(i[s] = e,
      i), {})
  }
  var Nl = {
      mixins: [Kn, bt, ci],
      props: {
          target: String,
          viewport: Number,
          easing: Number,
          start: String,
          end: String
      },
      data: {
          target: !1,
          viewport: 1,
          easing: 1,
          start: 0,
          end: 0
      },
      computed: {
          target({target: t}, e) {
              return io(t && ut(t, e) || e)
          },
          start({start: t}) {
              return rt(t, "height", this.target, !0)
          },
          end({end: t, viewport: e}) {
              return rt(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, !0)
          }
      },
      resizeTargets() {
          return [this.$el, this.target]
      },
      update: {
          read({percent: t}, e) {
              if (e.has("scroll") || (t = !1),
              !q(this.$el))
                  return !1;
              if (!this.matchMedia)
                  return;
              const i = t;
              return t = zl(Qi(this.target, this.start, this.end), this.easing),
              {
                  percent: t,
                  style: i === t ? !1 : this.getCss(t)
              }
          },
          write({style: t}) {
              if (!this.matchMedia) {
                  this.reset();
                  return
              }
              t && h(this.$el, t)
          },
          events: ["scroll", "resize"]
      }
  };
  function zl(t, e) {
      return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e)
  }
  function io(t) {
      return t ? "offsetTop"in t ? t : io(A(t)) : document.documentElement
  }
  var so = {
      update: {
          write() {
              if (this.stack.length || this.dragging)
                  return;
              const t = this.getValidIndex(this.index);
              !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1, this.prevIndex, this.index)
          },
          events: ["resize"]
      }
  }
    , no = {
      mixins: [Oe],
      connected() {
          this.lazyload(this.slides, this.getAdjacentSlides)
      }
  };
  function Fl(t, e, i, {center: s, easing: n, list: o}) {
      const r = new Xe
        , a = t ? We(t, o, s) : We(e, o, s) + b(e).width * i
        , l = e ? We(e, o, s) : a + b(t).width * i * (J ? -1 : 1);
      return {
          dir: i,
          show(c, u=0, d) {
              const p = d ? "linear" : n;
              return c -= Math.round(c * U(u, -1, 1)),
              this.translate(u),
              u = t ? u : U(u, 0, 1),
              ms(this.getItemIn(), "itemin", {
                  percent: u,
                  duration: c,
                  timing: p,
                  dir: i
              }),
              t && ms(this.getItemIn(!0), "itemout", {
                  percent: 1 - u,
                  duration: c,
                  timing: p,
                  dir: i
              }),
              S.start(o, {
                  transform: H(-l * (J ? -1 : 1), "px")
              }, c, p).then(r.resolve, P),
              r.promise
          },
          cancel() {
              S.cancel(o)
          },
          reset() {
              h(o, "transform", "")
          },
          forward(c, u=this.percent()) {
              return S.cancel(o),
              this.show(c, u, !0)
          },
          translate(c) {
              const u = this.getDistance() * i * (J ? -1 : 1);
              h(o, "transform", H(U(-l + (u - u * c), -ki(o), b(o).width) * (J ? -1 : 1), "px"));
              const d = this.getActives()
                , p = this.getItemIn()
                , g = this.getItemIn(!0);
              c = t ? U(c, -1, 1) : 0;
              for (const T of E(o)) {
                  const F = v(d, T)
                    , M = T === p
                    , Bt = T === g
                    , vs = M || !Bt && (F || i * (J ? -1 : 1) === -1 ^ Si(T, o) > Si(t || e));
                  ms(T, `itemtranslate${vs ? "in" : "out"}`, {
                      dir: i,
                      percent: Bt ? 1 - c : M ? c : F ? 1 : 0
                  })
              }
          },
          percent() {
              return Math.abs((h(o, "transform").split(",")[4] * (J ? -1 : 1) + a) / (l - a))
          },
          getDistance() {
              return Math.abs(l - a)
          },
          getItemIn(c=!1) {
              let u = this.getActives()
                , d = ro(o, We(e || t, o, s));
              if (c) {
                  const p = u;
                  u = d,
                  d = p
              }
              return d[$t(d, p=>!v(u, p))]
          },
          getActives() {
              return ro(o, We(t || e, o, s))
          }
      }
  }
  function We(t, e, i) {
      const s = Si(t, e);
      return i ? s - Hl(t, e) : Math.min(s, oo(e))
  }
  function oo(t) {
      return Math.max(0, ki(t) - b(t).width)
  }
  function ki(t) {
      return Nt(E(t), e=>b(e).width)
  }
  function Hl(t, e) {
      return b(e).width / 2 - b(t).width / 2
  }
  function Si(t, e) {
      return t && (ti(t).left + (J ? b(t).width - b(e).width : 0)) * (J ? -1 : 1) || 0
  }
  function ro(t, e) {
      e -= 1;
      const i = b(t).width
        , s = e + i + 2;
      return E(t).filter(n=>{
          const o = Si(n, t)
            , r = o + Math.min(b(n).width, i);
          return o >= e && r <= s
      }
      )
  }
  function ms(t, e, i) {
      m(t, Ft(e, !1, !1, i))
  }
  var Ll = {
      mixins: [st, qn, so, no],
      props: {
          center: Boolean,
          sets: Boolean
      },
      data: {
          center: !1,
          sets: !1,
          attrItem: "bdt-slider-item",
          selList: ".bdt-slider-items",
          selNav: ".bdt-slider-nav",
          clsContainer: "bdt-slider-container",
          Transitioner: Fl
      },
      computed: {
          avgWidth() {
              return ki(this.list) / this.length
          },
          finite({finite: t}) {
              return t || Wl(this.list, this.center)
          },
          maxIndex() {
              if (!this.finite || this.center && !this.sets)
                  return this.length - 1;
              if (this.center)
                  return se(this.sets);
              let t = 0;
              const e = oo(this.list)
                , i = $t(this.slides, s=>{
                  if (t >= e)
                      return !0;
                  t += b(s).width
              }
              );
              return ~i ? i : this.length - 1
          },
          sets({sets: t}) {
              if (!t)
                  return;
              let e = 0;
              const i = []
                , s = b(this.list).width;
              for (let n = 0; n < this.length; n++) {
                  const o = b(this.slides[n]).width;
                  e + o > s && (e = 0),
                  this.center ? e < s / 2 && e + o + b(this.slides[+n + 1]).width / 2 > s / 2 && (i.push(+n),
                  e = s / 2 - o / 2) : e === 0 && i.push(Math.min(+n, this.maxIndex)),
                  e += o
              }
              if (i.length)
                  return i
          },
          transitionOptions() {
              return {
                  center: this.center,
                  list: this.list
              }
          }
      },
      connected() {
          j(this.$el, this.clsContainer, !w(`.${this.clsContainer}`, this.$el))
      },
      update: {
          write() {
              for (const t of this.navItems) {
                  const e = kt(tt(t, this.attrItem));
                  e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !v(this.sets, e))
              }
              this.length && !this.dragging && !this.stack.length && (this.reorder(),
              this._translate(1)),
              this.updateActiveClasses()
          },
          events: ["resize"]
      },
      events: {
          beforeitemshow(t) {
              !this.dragging && this.sets && this.stack.length < 2 && !v(this.sets, this.index) && (this.index = this.getValidIndex());
              const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
              if (!this.dragging && e > 1) {
                  for (let s = 0; s < e; s++)
                      this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                  t.preventDefault();
                  return
              }
              const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
              this.duration = Vn(this.avgWidth / this.velocity) * (b(this.slides[i]).width / this.avgWidth),
              this.reorder()
          },
          itemshow() {
              ~this.prevIndex && y(this._getTransitioner().getItemIn(), this.clsActive)
          },
          itemshown() {
              this.updateActiveClasses()
          }
      },
      methods: {
          reorder() {
              if (this.finite) {
                  h(this.slides, "order", "");
                  return
              }
              const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
              if (this.slides.forEach((n,o)=>h(n, "order", this.dir > 0 && o < t ? 1 : this.dir < 0 && o >= this.index ? -1 : "")),
              !this.center)
                  return;
              const e = this.slides[t];
              let i = b(this.list).width / 2 - b(e).width / 2
                , s = 0;
              for (; i > 0; ) {
                  const n = this.getIndex(--s + t, t)
                    , o = this.slides[n];
                  h(o, "order", n > t ? -2 : -1),
                  i -= b(o).width
              }
          },
          updateActiveClasses() {
              const t = this._getTransitioner(this.index).getActives()
                , e = [this.clsActive, (!this.sets || v(this.sets, $(this.index))) && this.clsActivated || ""];
              for (const i of this.slides) {
                  const s = v(t, i);
                  j(i, e, s),
                  f(i, "aria-hidden", !s),
                  f(O(ye, i), "tabindex", s ? null : -1)
              }
          },
          getValidIndex(t=this.index, e=this.prevIndex) {
              if (t = this.getIndex(t, e),
              !this.sets)
                  return t;
              let i;
              do {
                  if (v(this.sets, t))
                      return t;
                  i = t,
                  t = this.getIndex(t + this.dir, e)
              } while (t !== i);
              return t
          },
          getAdjacentSlides() {
              const {width: t} = b(this.list)
                , e = -t
                , i = t * 2
                , s = b(this.slides[this.index]).width
                , n = this.center ? t / 2 - s / 2 : 0
                , o = new Set;
              for (const r of [-1, 1]) {
                  let a = n + (r > 0 ? s : 0)
                    , l = 0;
                  do {
                      const c = this.slides[this.getIndex(this.index + r + l++ * r)];
                      a += b(c).width * r,
                      o.add(c)
                  } while (this.length > l && a > e && a < i)
              }
              return Array.from(o)
          }
      }
  };
  function Wl(t, e) {
      if (!t || t.length < 2)
          return !0;
      const {width: i} = b(t);
      if (!e)
          return Math.ceil(ki(t)) < Math.trunc(i + Rl(t));
      const s = E(t)
        , n = Math.trunc(i / 2);
      for (const o in s) {
          const r = s[o]
            , a = b(r).width
            , l = new Set([r]);
          let c = 0;
          for (const u of [-1, 1]) {
              let d = a / 2
                , p = 0;
              for (; d < n; ) {
                  const g = s[ct(+o + u + p++ * u, s)];
                  if (l.has(g))
                      return !0;
                  d += b(g).width,
                  l.add(g)
              }
              c = Math.max(c, a / 2 + b(s[ct(+o + u, s)]).width / 2 - (d - n))
          }
          if (c > Nt(s.filter(u=>!l.has(u)), u=>b(u).width))
              return !0
      }
      return !1
  }
  function Rl(t) {
      return Math.max(0, ...E(t).map(e=>b(e).width))
  }
  var ao = {
      mixins: [Kn],
      data: {
          selItem: "!li"
      },
      beforeConnect() {
          this.item = ut(this.selItem, this.$el)
      },
      disconnected() {
          this.item = null
      },
      events: [{
          name: "itemin itemout",
          self: !0,
          el() {
              return this.item
          },
          handler({type: t, detail: {percent: e, duration: i, timing: s, dir: n}}) {
              G.read(()=>{
                  if (!this.matchMedia)
                      return;
                  const o = this.getCss(ho(t, n, e))
                    , r = this.getCss(lo(t) ? .5 : n > 0 ? 1 : 0);
                  G.write(()=>{
                      h(this.$el, o),
                      S.start(this.$el, r, i, s).catch(P)
                  }
                  )
              }
              )
          }
      }, {
          name: "transitioncanceled transitionend",
          self: !0,
          el() {
              return this.item
          },
          handler() {
              S.cancel(this.$el)
          }
      }, {
          name: "itemtranslatein itemtranslateout",
          self: !0,
          el() {
              return this.item
          },
          handler({type: t, detail: {percent: e, dir: i}}) {
              G.read(()=>{
                  if (!this.matchMedia) {
                      this.reset();
                      return
                  }
                  const s = this.getCss(ho(t, i, e));
                  G.write(()=>h(this.$el, s))
              }
              )
          }
      }]
  };
  function lo(t) {
      return Qt(t, "in")
  }
  function ho(t, e, i) {
      return i /= 2,
      lo(t) ^ e < 0 ? i : 1 - i
  }
  var jl = {
      ...us,
      fade: {
          show() {
              return [{
                  opacity: 0,
                  zIndex: 0
              }, {
                  zIndex: -1
              }]
          },
          percent(t) {
              return 1 - h(t, "opacity")
          },
          translate(t) {
              return [{
                  opacity: 1 - t,
                  zIndex: 0
              }, {
                  zIndex: -1
              }]
          }
      },
      scale: {
          show() {
              return [{
                  opacity: 0,
                  transform: fe(1 + .5),
                  zIndex: 0
              }, {
                  zIndex: -1
              }]
          },
          percent(t) {
              return 1 - h(t, "opacity")
          },
          translate(t) {
              return [{
                  opacity: 1 - t,
                  transform: fe(1 + .5 * t),
                  zIndex: 0
              }, {
                  zIndex: -1
              }]
          }
      },
      pull: {
          show(t) {
              return t < 0 ? [{
                  transform: H(30),
                  zIndex: -1
              }, {
                  transform: H(),
                  zIndex: 0
              }] : [{
                  transform: H(-100),
                  zIndex: 0
              }, {
                  transform: H(),
                  zIndex: -1
              }]
          },
          percent(t, e, i) {
              return i < 0 ? 1 - ze(e) : ze(t)
          },
          translate(t, e) {
              return e < 0 ? [{
                  transform: H(30 * t),
                  zIndex: -1
              }, {
                  transform: H(-100 * (1 - t)),
                  zIndex: 0
              }] : [{
                  transform: H(-t * 100),
                  zIndex: 0
              }, {
                  transform: H(30 * (1 - t)),
                  zIndex: -1
              }]
          }
      },
      push: {
          show(t) {
              return t < 0 ? [{
                  transform: H(100),
                  zIndex: 0
              }, {
                  transform: H(),
                  zIndex: -1
              }] : [{
                  transform: H(-30),
                  zIndex: -1
              }, {
                  transform: H(),
                  zIndex: 0
              }]
          },
          percent(t, e, i) {
              return i > 0 ? 1 - ze(e) : ze(t)
          },
          translate(t, e) {
              return e < 0 ? [{
                  transform: H(t * 100),
                  zIndex: 0
              }, {
                  transform: H(-30 * (1 - t)),
                  zIndex: -1
              }] : [{
                  transform: H(-30 * t),
                  zIndex: -1
              }, {
                  transform: H(100 * (1 - t)),
                  zIndex: 0
              }]
          }
      }
  }
    , ql = {
      mixins: [st, Yn, so, no],
      props: {
          ratio: String,
          minHeight: Number,
          maxHeight: Number
      },
      data: {
          ratio: "16:9",
          minHeight: !1,
          maxHeight: !1,
          selList: ".bdt-slideshow-items",
          attrItem: "bdt-slideshow-item",
          selNav: ".bdt-slideshow-nav",
          Animations: jl
      },
      update: {
          read() {
              if (!this.list)
                  return !1;
              let[t,e] = this.ratio.split(":").map(Number);
              return e = e * this.list.offsetWidth / t || 0,
              this.minHeight && (e = Math.max(this.minHeight, e)),
              this.maxHeight && (e = Math.min(this.maxHeight, e)),
              {
                  height: e - ae(this.list, "height", "content-box")
              }
          },
          write({height: t}) {
              t > 0 && h(this.list, "minHeight", t)
          },
          events: ["resize"]
      },
      methods: {
          getAdjacentSlides() {
              return [1, -1].map(t=>this.slides[this.getIndex(this.index + t)])
          }
      }
  }
    , Vl = {
      mixins: [st, Fn],
      props: {
          group: String,
          threshold: Number,
          clsItem: String,
          clsPlaceholder: String,
          clsDrag: String,
          clsDragState: String,
          clsBase: String,
          clsNoDrag: String,
          clsEmpty: String,
          clsCustom: String,
          handle: String
      },
      data: {
          group: !1,
          threshold: 5,
          clsItem: "bdt-sortable-item",
          clsPlaceholder: "bdt-sortable-placeholder",
          clsDrag: "bdt-sortable-drag",
          clsDragState: "bdt-drag",
          clsBase: "bdt-sortable",
          clsNoDrag: "bdt-sortable-nodrag",
          clsEmpty: "bdt-sortable-empty",
          clsCustom: "",
          handle: !1,
          pos: {}
      },
      created() {
          for (const t of ["init", "start", "move", "end"]) {
              const e = this[t];
              this[t] = i=>{
                  xt(this.pos, re(i)),
                  e(i)
              }
          }
      },
      events: {
          name: gt,
          passive: !1,
          handler: "init"
      },
      computed: {
          target() {
              return (this.$el.tBodies || [this.$el])[0]
          },
          items() {
              return E(this.target)
          },
          isEmpty: {
              get() {
                  return we(this.items)
              },
              watch(t) {
                  j(this.target, this.clsEmpty, t)
              },
              immediate: !0
          },
          handles: {
              get({handle: t}, e) {
                  return t ? O(t, e) : this.items
              },
              watch(t, e) {
                  h(e, {
                      touchAction: "",
                      userSelect: ""
                  }),
                  h(t, {
                      touchAction: jt ? "none" : "",
                      userSelect: "none"
                  })
              },
              immediate: !0
          }
      },
      update: {
          write(t) {
              if (!this.drag || !A(this.placeholder))
                  return;
              const {pos: {x: e, y: i}, origin: {offsetTop: s, offsetLeft: n}, placeholder: o} = this;
              h(this.drag, {
                  top: i - s,
                  left: e - n
              });
              const r = this.getSortable(document.elementFromPoint(e, i));
              if (!r)
                  return;
              const {items: a} = r;
              if (a.some(S.inProgress))
                  return;
              const l = Jl(a, {
                  x: e,
                  y: i
              });
              if (a.length && (!l || l === o))
                  return;
              const c = this.getSortable(o)
                , u = Kl(r.target, l, o, e, i, r === c && t.moved !== l);
              u !== !1 && (u && o === u || (r !== c ? (c.remove(o),
              t.moved = l) : delete t.moved,
              r.insert(o, u),
              this.touched.add(r)))
          },
          events: ["move"]
      },
      methods: {
          init(t) {
              const {target: e, button: i, defaultPrevented: s} = t
                , [n] = this.items.filter(o=>D(e, o));
              !n || s || i > 0 || Mi(e) || D(e, `.${this.clsNoDrag}`) || this.handle && !D(e, this.handle) || (t.preventDefault(),
              this.touched = new Set([this]),
              this.placeholder = n,
              this.origin = {
                  target: e,
                  index: oe(n),
                  ...this.pos
              },
              x(document, ii, this.move),
              x(document, Pt, this.end),
              this.threshold || this.start(t))
          },
          start(t) {
              this.drag = Xl(this.$container, this.placeholder);
              const {left: e, top: i} = this.placeholder.getBoundingClientRect();
              xt(this.origin, {
                  offsetLeft: this.pos.x - e,
                  offsetTop: this.pos.y - i
              }),
              y(this.drag, this.clsDrag, this.clsCustom),
              y(this.placeholder, this.clsPlaceholder),
              y(this.items, this.clsItem),
              y(document.documentElement, this.clsDragState),
              m(this.$el, "start", [this, this.placeholder]),
              Yl(this.pos),
              this.move(t)
          },
          move(t) {
              this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
          },
          end() {
              if (zt(document, ii, this.move),
              zt(document, Pt, this.end),
              !this.drag)
                  return;
              Gl();
              const t = this.getSortable(this.placeholder);
              this === t ? this.origin.index !== oe(this.placeholder) && m(this.$el, "moved", [this, this.placeholder]) : (m(t.$el, "added", [t, this.placeholder]),
              m(this.$el, "removed", [this, this.placeholder])),
              m(this.$el, "stop", [this, this.placeholder]),
              ot(this.drag),
              this.drag = null;
              for (const {clsPlaceholder: e, clsItem: i} of this.touched)
                  for (const s of this.touched)
                      z(s.items, e, i);
              this.touched = null,
              z(document.documentElement, this.clsDragState)
          },
          insert(t, e) {
              y(this.items, this.clsItem);
              const i = ()=>e ? Ke(e, t) : W(this.target, t);
              this.animate(i)
          },
          remove(t) {
              D(t, this.target) && this.animate(()=>ot(t))
          },
          getSortable(t) {
              do {
                  const e = this.$getComponent(t, "sortable");
                  if (e && (e === this || this.group !== !1 && e.group === this.group))
                      return e
              } while (t = A(t))
          }
      }
  };
  let co;
  function Yl(t) {
      let e = Date.now();
      co = setInterval(()=>{
          let {x: i, y: s} = t;
          s += document.scrollingElement.scrollTop;
          const n = (Date.now() - e) * .3;
          e = Date.now(),
          mt(document.elementFromPoint(i, t.y)).reverse().some(o=>{
              let {scrollTop: r, scrollHeight: a} = o;
              const {top: l, bottom: c, height: u} = at(o);
              if (l < s && l + 35 > s)
                  r -= n;
              else if (c > s && c - 35 < s)
                  r += n;
              else
                  return;
              if (r > 0 && r < a - u)
                  return o.scrollTop = r,
                  !0
          }
          )
      }
      , 15)
  }
  function Gl() {
      clearInterval(co)
  }
  function Xl(t, e) {
      let i;
      if (X(e, "li", "tr")) {
          i = w("<div>"),
          W(i, e.cloneNode(!0).children);
          for (const s of e.getAttributeNames())
              f(i, s, e.getAttribute(s))
      } else
          i = e.cloneNode(!0);
      return W(t, i),
      h(i, "margin", "0", "important"),
      h(i, {
          boxSizing: "border-box",
          width: e.offsetWidth,
          height: e.offsetHeight,
          padding: h(e, "padding")
      }),
      et(i.firstElementChild, et(e.firstElementChild)),
      i
  }
  function Jl(t, e) {
      return t[$t(t, i=>Ye(e, i.getBoundingClientRect()))]
  }
  function Kl(t, e, i, s, n, o) {
      if (!E(t).length)
          return;
      const r = e.getBoundingClientRect();
      if (!o)
          return Zl(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
      const a = i.getBoundingClientRect()
        , l = uo([r.top, r.bottom], [a.top, a.bottom])
        , [c,u,d,p] = l ? [s, "width", "left", "right"] : [n, "height", "top", "bottom"]
        , g = a[u] < r[u] ? r[u] - a[u] : 0;
      return a[d] < r[d] ? g && c < r[d] + g ? !1 : e.nextElementSibling : g && c > r[p] - g ? !1 : e
  }
  function Zl(t, e) {
      const i = E(t).length === 1;
      i && W(t, e);
      const s = E(t)
        , n = s.some((o,r)=>{
          const a = o.getBoundingClientRect();
          return s.slice(r + 1).some(l=>{
              const c = l.getBoundingClientRect();
              return !uo([a.left, a.right], [c.left, c.right])
          }
          )
      }
      );
      return i && ot(e),
      n
  }
  function uo(t, e) {
      return t[1] > e[0] && e[1] > t[0]
  }
  var Ql = {
      mixins: [Be, Yt, hn],
      args: "title",
      props: {
          delay: Number,
          title: String
      },
      data: {
          pos: "top",
          title: "",
          delay: 0,
          animation: ["bdt-animation-scale-up"],
          duration: 100,
          cls: "bdt-active"
      },
      beforeConnect() {
          this.id = Dt(this),
          this._hasTitle = wt(this.$el, "title"),
          f(this.$el, {
              title: "",
              "aria-describedby": this.id
          }),
          Ul(this.$el)
      },
      disconnected() {
          this.hide(),
          f(this.$el, "title") || f(this.$el, "title", this._hasTitle ? this.title : null)
      },
      methods: {
          show() {
              this.isToggled(this.tooltip || null) || !this.title || (clearTimeout(this.showTimer),
              this.showTimer = setTimeout(this._show, this.delay))
          },
          async hide() {
              _(this.$el, "input:focus") || (clearTimeout(this.showTimer),
              this.isToggled(this.tooltip || null) && (await this.toggleElement(this.tooltip, !1, !1),
              ot(this.tooltip),
              this.tooltip = null))
          },
          _show() {
              this.tooltip = W(this.container, `<div id="${this.id}" class="bdt-${this.$options.name}" role="tooltip"> <div class="bdt-${this.$options.name}-inner">${this.title}</div> </div>`),
              x(this.tooltip, "toggled", (t,e)=>{
                  if (!e)
                      return;
                  const i = ()=>this.positionAt(this.tooltip, this.$el);
                  i();
                  const [s,n] = th(this.tooltip, this.$el, this.pos);
                  this.origin = this.axis === "y" ? `${ei(s)}-${n}` : `${n}-${ei(s)}`;
                  const o = [L(document, `keydown ${gt}`, this.hide, !1, r=>r.type === gt && !D(r.target, this.$el) || r.type === "keydown" && r.keyCode === C.ESC), x([document, ...Vt(this.$el)], "scroll", i, {
                      passive: !0
                  })];
                  L(this.tooltip, "hide", ()=>o.forEach(r=>r()), {
                      self: !0
                  })
              }
              ),
              this.toggleElement(this.tooltip, !0)
          }
      },
      events: {
          focus: "show",
          blur: "hide",
          [`${At} ${qt}`](t) {
              Tt(t) || this[t.type === At ? "show" : "hide"]()
          },
          [gt](t) {
              Tt(t) && this.show()
          }
      }
  };
  function Ul(t) {
      Je(t) || f(t, "tabindex", "0")
  }
  function th(t, e, [i,s]) {
      const n = I(t)
        , o = I(e)
        , r = [["left", "right"], ["top", "bottom"]];
      for (const l of r) {
          if (n[l[0]] >= o[l[1]]) {
              i = l[1];
              break
          }
          if (n[l[1]] <= o[l[0]]) {
              i = l[0];
              break
          }
      }
      const a = v(r[0], i) ? r[1] : r[0];
      return n[a[0]] === o[a[0]] ? s = a[0] : n[a[1]] === o[a[1]] ? s = a[1] : s = "center",
      [i, s]
  }
  var eh = {
      mixins: [ss],
      i18n: {
          invalidMime: "Invalid File Type: %s",
          invalidName: "Invalid File Name: %s",
          invalidSize: "Invalid File Size: %s Kilobytes Max"
      },
      props: {
          allow: String,
          clsDragover: String,
          concurrent: Number,
          maxSize: Number,
          method: String,
          mime: String,
          multiple: Boolean,
          name: String,
          params: Object,
          type: String,
          url: String
      },
      data: {
          allow: !1,
          clsDragover: "bdt-dragover",
          concurrent: 1,
          maxSize: 0,
          method: "POST",
          mime: !1,
          multiple: !1,
          name: "files[]",
          params: {},
          type: "",
          url: "",
          abort: P,
          beforeAll: P,
          beforeSend: P,
          complete: P,
          completeAll: P,
          error: P,
          fail: P,
          load: P,
          loadEnd: P,
          loadStart: P,
          progress: P
      },
      events: {
          change(t) {
              _(t.target, 'input[type="file"]') && (t.preventDefault(),
              t.target.files && this.upload(t.target.files),
              t.target.value = "")
          },
          drop(t) {
              Ti(t);
              const e = t.dataTransfer;
              e != null && e.files && (z(this.$el, this.clsDragover),
              this.upload(e.files))
          },
          dragenter(t) {
              Ti(t)
          },
          dragover(t) {
              Ti(t),
              y(this.$el, this.clsDragover)
          },
          dragleave(t) {
              Ti(t),
              z(this.$el, this.clsDragover)
          }
      },
      methods: {
          async upload(t) {
              if (t = _i(t),
              !t.length)
                  return;
              m(this.$el, "upload", [t]);
              for (const s of t) {
                  if (this.maxSize && this.maxSize * 1e3 < s.size) {
                      this.fail(this.t("invalidSize", this.maxSize));
                      return
                  }
                  if (this.allow && !fo(this.allow, s.name)) {
                      this.fail(this.t("invalidName", this.allow));
                      return
                  }
                  if (this.mime && !fo(this.mime, s.type)) {
                      this.fail(this.t("invalidMime", this.mime));
                      return
                  }
              }
              this.multiple || (t = t.slice(0, 1)),
              this.beforeAll(this, t);
              const e = ih(t, this.concurrent)
                , i = async s=>{
                  const n = new FormData;
                  s.forEach(o=>n.append(this.name, o));
                  for (const o in this.params)
                      n.append(o, this.params[o]);
                  try {
                      const o = await sh(this.url, {
                          data: n,
                          method: this.method,
                          responseType: this.type,
                          beforeSend: r=>{
                              const {xhr: a} = r;
                              x(a.upload, "progress", this.progress);
                              for (const l of ["loadStart", "load", "loadEnd", "abort"])
                                  x(a, l.toLowerCase(), this[l]);
                              return this.beforeSend(r)
                          }
                      });
                      this.complete(o),
                      e.length ? await i(e.shift()) : this.completeAll(o)
                  } catch (o) {
                      this.error(o)
                  }
              }
              ;
              await i(e.shift())
          }
      }
  };
  function fo(t, e) {
      return e.match(new RegExp(`^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`,"i"))
  }
  function ih(t, e) {
      const i = [];
      for (let s = 0; s < t.length; s += e)
          i.push(t.slice(s, s + e));
      return i
  }
  function Ti(t) {
      t.preventDefault(),
      t.stopPropagation()
  }
  function sh(t, e) {
      const i = {
          data: null,
          method: "GET",
          headers: {},
          xhr: new XMLHttpRequest,
          beforeSend: P,
          responseType: "",
          ...e
      };
      return Promise.resolve().then(()=>i.beforeSend(i)).then(()=>nh(t, i))
  }
  function nh(t, e) {
      return new Promise((i,s)=>{
          const {xhr: n} = e;
          for (const o in e)
              if (o in n)
                  try {
                      n[o] = e[o]
                  } catch {}
          n.open(e.method.toUpperCase(), t);
          for (const o in e.headers)
              n.setRequestHeader(o, e.headers[o]);
          x(n, "load", ()=>{
              n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(xt(Error(n.statusText), {
                  xhr: n,
                  status: n.status
              }))
          }
          ),
          x(n, "error", ()=>s(xt(Error("Network Error"), {
              xhr: n
          }))),
          x(n, "timeout", ()=>s(xt(Error("Network Timeout"), {
              xhr: n
          }))),
          n.send(e.data)
      }
      )
  }
  var oh = Object.freeze({
      __proto__: null,
      Countdown: nl,
      Filter: ul,
      Lightbox: Cl,
      LightboxPanel: Gn,
      Notification: El,
      Parallax: Nl,
      Slider: Ll,
      SliderParallax: ao,
      Slideshow: ql,
      SlideshowParallax: ao,
      Sortable: Vl,
      Tooltip: Ql,
      Upload: eh
  });
  return St(oh, (t,e)=>it.component(e, t)),
  it
});;