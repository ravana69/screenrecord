!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var o=function(t){var e="anchor",n="mjs.".concat(e),o=".".concat(n),a=t.fn[e],u={offset:"",duration:600},i="data-anchor",f="data-offset",c={SCROLLED:"scrolled".concat(o),CLICK_DATA_API:"click".concat(o).concat(".data-api")},l={DATA_ANCHOR:"[".concat(i,"]")},s=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=t,this._offset=this._getOffset()||0}var o,a,l;return o=e,l=[{key:"_jQueryInterface",value:function(r){return this.each((function(){var o=t(this),a=o.data(n);if(a||(a=new e(this),o.data(n,a)),"string"==typeof r){if(void 0===a[r])throw new Error('No method named "'.concat(r,'"'));a[r]()}}))}},{key:"VERSION",get:function(){return"1.0.0-alpha.2"}},{key:"Default",get:function(){return u}}],(a=[{key:"scroll",value:function(){var e=this._getTarget(),n=t.Event(c.SCROLLED,{relatedTarget:e});e&&t("html, body").animate({scrollTop:Math.round(e.offset().top)-this._offset},u.duration).promise().then((function(){e.trigger(n)}))}},{key:"dispose",value:function(){t.removeData(this._element,n),this._element=null,this._config=null,this._offset=null}},{key:"_getTarget",value:function(){var e,n=this._element;return(e="A"===n.tagName&&n.hasAttribute("href")?n.hash.substr(1)?"#".concat(n.hash.substr(1)):void 0:t(n).attr(i))?t(e):void 0}},{key:"_getOffset",value:function(){var e,n,r=new RegExp("^#[A-Za-z0-9:.-_]*$","gi"),o=this._element;if(o.hasAttribute(f)){if(n=t(o).attr(f),parseInt(n))e=parseInt(n);else{if(!(n.length>0&&r.test(n)))return!1;e=t(n).outerHeight()}return e}return!1}}])&&r(o.prototype,a),l&&r(o,l),e}();return t(document).on(c.CLICK_DATA_API,l.DATA_ANCHOR,(function(e){e.preventDefault(),s._jQueryInterface.call(t(this),"scroll")})),t.fn[e]=s._jQueryInterface,t.fn[e].Constructor=s,t.fn[e].noConflict=function(){return t.fn[e]=a,s._jQueryInterface},s}(jQuery);e.default=o}]);