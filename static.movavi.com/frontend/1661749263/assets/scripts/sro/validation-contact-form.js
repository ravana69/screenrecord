!function(e){var t={};function i(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=43)}({0:function(e,t,i){"use strict";t.a={responsive_breakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200},email_regex:/^[_a-z0-9]+[-a-z0-9_]*(\.[-a-z0-9_]+)*@([a-z0-9][-a-z0-9]*(\.[-a-z0-9]+)*\.([a-z]+))$/i,phone_regex:/^[0-9-()+\s]+$/,SSO_URI:"https://sso-auth.movavi.id",SSO_URI_STAGE:"https://sso-auth.staging.movavi.id",SSO_AUTH_URI_PATH:"/auth/initialize",ID_API:"https://api.movavi.id/api/v1",ID_API_STAGE:"https://api.staging.movavi.id/api/v1",ID_AUTH_PATH:"/auth/authorize",ID_ORDERS_PATH:"/orders/index"}},43:function(e,t,i){e.exports=i(46)},46:function(e,t,i){"use strict";i.r(t),i.d(t,"SubscribeValidationSR",(function(){return g}));var a=i(0);function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var c=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;o(this,e),this._form=t,this._captcha,this._submitBtn=t.querySelectorAll(".mjs-submit-button"),this._action=this._form.getAttribute("action"),this._nameInput=t.querySelector("#inputName"),this._emailInput=t.querySelector("#inputEmail"),this._messageTextarea=t.querySelector("#textareaMessage"),this._emailError=t.querySelector("#responseError"),this._successBlock=t.querySelector("#responseSuccess"),this._fetchData=this._fetchData.bind(this),this._toggleShowError=this._toggleShowError.bind(this),this._formSubmit=this._formSubmit.bind(this),this._category=t.querySelector("#category"),this._inputCategory=t.querySelector("#input-for-category"),this._subCategory=document.querySelectorAll(".tab-pane"),this._subCategoryActive=r(this._subCategory).find((function(e){return!0===e.classList.contains("active")})),this._inputSubCategory=this._subCategoryActive.querySelector("#input-for-category"),this._subCategoryActiveSelect=this._subCategoryActive.querySelector("#category"),this._subCategoryAllSelect=document.querySelectorAll('.tab-content [name="Subcategory"]'),this._dropDownCategory=this._category.closest(".dropdown ").querySelector(".dropdown-menu"),this._categoryVisible=!1,this._subCategoryVisible=!1,this._captchaKey=i||"6Lf2BPcUAAAAAG126cn2ascB8dyDAvTkyPYC6LD1",this._tags=a||"Fastreel",this._subject=n||"Message from VEO contact-us",this._customFields=s||"Video Editor Online (Fastreel)"}var t,i,n;return t=e,(i=[{key:"_checkCategory",value:function(){this._inputSubCategory.parentElement.style.pointerEvents=this._categoryVisible?"all":"none"}},{key:"_validateName",value:function(e){return new RegExp(/^[^\d'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/).test(String(e))}},{key:"_validateEmail",value:function(e){return new RegExp(a.a.email_regex).test(String(e))}},{key:"_isNameValid",value:function(){var e=this._nameInput.value;return!(!this._validateName(e)||null===e||""===e)}},{key:"_isEmailValid",value:function(){var e=this._emailInput.value;return!(!this._validateEmail(e)||null===e||""===e)}},{key:"_isMessageValid",value:function(){var e=this._messageTextarea.value;return!(!(e.length>10)||null===e||""===e)}},{key:"_checkCategoryVisible",value:function(){this._categoryVisible=!0,this._subCategoryVisible=!1}},{key:"_isCategoryValid",value:function(){return this._categoryVisible}},{key:"_checkSubCategoryVisible",value:function(){this._subCategoryVisible=!0}},{key:"_isSubCategoryValid",value:function(){return this._subCategoryVisible}},{key:"_isAllFieldsValid",value:function(){if(this._isNameValid()&&this._isEmailValid()&&this._isMessageValid()&&this._isCategoryValid()){var e=this;window.onloadCallbackRecaptcha=function(i){e._captcha=grecaptcha.getResponse(),t="clear",e._fetchData()};var t,i={sitekey:this._captchaKey,size:"invisible",callback:onloadCallbackRecaptcha};window.captchaCallback=function(){var e=document.querySelector("#recaptcha");grecaptcha.render(e,i),t="done"},this._createRecaptchaScript();var a=this,r=setTimeout((function e(){"done"==t?(a._captcha=grecaptcha.getResponse(),grecaptcha.execute()):"clear"==t?clearTimeout(r):r=setTimeout(e,1e3)}),1e3)}}},{key:"_createRecaptchaScript",value:function(){if("undefined"==typeof grecaptcha){var e=document.createElement("script");e.src="https://www.google.com/recaptcha/api.js?onload=captchaCallback&render=explicit";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}},{key:"_toggleShowError",value:function(e,t){e?(t.classList.remove("is-invalid"),t.classList.add("is-valid")):(t.classList.remove("is-valid"),t.classList.add("is-invalid"))}},{key:"_onChangeName",value:function(){var e=this;this._nameInput.addEventListener("change",(function(){e._toggleShowError(e._isNameValid(),e._nameInput)}))}},{key:"_onChangeEmail",value:function(){var e=this;this._emailInput.addEventListener("change",(function(){e._toggleShowError(e._isEmailValid(),e._emailInput)}))}},{key:"_onChangeMessage",value:function(){var e=this;this._messageTextarea.addEventListener("change",(function(){e._toggleShowError(e._isMessageValid(),e._messageTextarea)}))}},{key:"_onChangeCategory",value:function(){var e=this;this._category.addEventListener("change",(function(){e._checkCategoryVisible(),e._toggleShowError(e._isCategoryValid(),e._inputCategory),e._checkCategory()}))}},{key:"_onChangeSubCategory",value:function(){var e=this;this._subCategoryAllSelect.forEach((function(t){t.addEventListener("change",(function(){e._checkSubCategoryVisible(),e._subCategoryActive=r(e._subCategory).find((function(e){if(e.classList.contains("active"))return e})),e._inputSubCategory=e._subCategoryActive.querySelector("#input-for-category")}))}))}},{key:"_clearDataForm",value:function(){this._successBlock.classList.remove("show"),this._emailError.classList.remove("show"),this._nameInput.classList.remove("is-valid"),this._emailInput.classList.remove("is-valid"),this._messageTextarea.classList.remove("is-valid"),this._inputCategory.classList.remove("is-valid"),this._inputSubCategory.classList.remove("is-valid"),this._nameInput.value="",this._emailInput.value="",this._messageTextarea.value=""}},{key:"_fetchData",value:function(){var e=this,t=new FormData;if(t.append("email",this._emailInput.value),t.append("tags[]",this._tags),t.append("subject",this._subject),this._messageTextarea.value&&t.append("description",this._messageTextarea.value),t.append("custom_fields[cf_product_new]",this._customFields),this._inputCategory.dataset.category)var i=this._inputCategory.dataset.category;else i=this._inputCategory.value;if(this._inputSubCategory.dataset.category)var a=this._inputSubCategory.dataset.category;else a=this._inputSubCategory.value;this._inputCategory.value&&t.append("custom_fields[cf_category]",i),this._inputSubCategory.value&&t.append("custom_fields[cf_subcategory]",a),t.append("captcha",this._captcha),fetch("https://webhook-freshdesk.movavi.com/api/v1/ticket/create",{method:"POST",body:t}).then((function(e){return e.text()})).then((function(t){JSON.parse(t).success?(e._successBlock.classList.add("show"),e._emailError.classList.remove("show"),setTimeout(e._clearDataForm.bind(e),5e3)):(e._emailError.classList.add("show"),e._successBlock.classList.remove("show"),setTimeout(e._clearDataForm.bind(e),5e3))})).catch((function(e){console.error(e),grecaptcha.reset()}))}},{key:"_formSubmit",value:function(){var e=this;this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._submitBtn.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),e._toggleShowError(e._isNameValid(),e._nameInput),e._toggleShowError(e._isEmailValid(),e._emailInput),e._toggleShowError(e._isMessageValid(),e._messageTextarea),e._toggleShowError(e._isCategoryValid(),e._inputCategory),e._isAllFieldsValid()}))}))}},{key:"init",value:function(){this._nameInput&&this._onChangeName(),this._emailInput&&this._onChangeEmail(),this._messageTextarea&&this._onChangeMessage(),this._submitBtn&&this._formSubmit(),this._category&&this._onChangeCategory(),this._inputSubCategory&&(this._onChangeSubCategory(),this._checkCategory())}}])&&s(t.prototype,i),n&&s(t,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,a=y(e);if(t){var r=y(this).constructor;i=Reflect.construct(a,arguments,r)}else i=a.apply(this,arguments);return f(this,i)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}window.addEventListener("load",(function(){var e=document.querySelectorAll(".mjs-form");if(Array.isArray(e)||e.length>0)for(var t=function(t){setTimeout((function(){new c(e[t]).init()}),.01)},i=0;i<e.length;i++)t(i)}));var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t=_(i);function i(){return l(this,i),t.apply(this,arguments)}return i}(c);window.addEventListener("load",(function(){var e=document.querySelectorAll(".mjs-form");if(Array.isArray(e)||e.length>0)for(var t=function(t){setTimeout((function(){new g(e[t],e[t].querySelector("#recaptcha_key").value,"Screen Recorder","Message from SR contact-us","Screen Recorder Online").init()}),.01)},i=0;i<e.length;i++)t(i)}))}});