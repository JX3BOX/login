(function(e){function t(t){for(var s,r,n=t[0],c=t[1],o=t[2],p=0,d=[];p<n.length;p++)r=n[p],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&d.push(l[r][0]),l[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,n=1;n<a.length;n++){var c=a[n];0!==l[c]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},l={register:0},i=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://console.cnyixun.com/static/account/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var o=0;o<n.length;o++)t(n[o]);var u=c;i.push([1,"chunk-vendors"]),a()})({"0111":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"m-header"},[a("a",{attrs:{href:e.homepage}},[a("svg",{class:"u-logo",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"256",height:"256",viewBox:"0 0 256 256","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[a("path",{staticClass:"fil0",attrs:{d:"M129.254 5.842l102.93 59.427-31.87 18.4-.982-.566c.994-2.975-.028-5.876-2.019-8.167l-4.238-4.874-4.875-4.238c-4.609-4.007-11.22-2.951-13.087 3.295l-45.859-26.476-48.092 27.766c-3.008-2.576-6.243-4.596-7.711-5.336.556 3.007 1.122 5.906 1.436 8.959l-16.692 9.637-31.87-18.4L129.254 5.842zM236 71.878v118.854l-102.929 59.426v-36.801l71.059-41.026V90.279L236 71.878zm-110.561 178.28l-102.93-59.426V71.878l31.87 18.401v38.385a71.299 71.299 0 00-9.941 3.888c3.476 1.394 6.816 2.952 9.941 4.768v35.011l13.63 7.87c-.448 5.196-.681 10.447-.884 15.81 7.698-.047 17.263-.298 24.365-2.254l33.949 19.6v36.801zM73.64 189.497c.616-12.288.824-17.667 6.46-25.262 5.453 5.878 11.556 10.552 18.453 13.546a44.686 44.686 0 004.644 1.718c-10.202 9.114-15.093 9.273-29.557 9.998zm55.206-82.269a30.61 30.61 0 00-4.996 4.101c-2.432 2.476-4.35 5.302-5.436 8.228l6.691-6.474c1.381-1.335 2.902-4.048 3.741-5.855zm15.54-14.454c-2.664.429-4.875 1.064-6.833 1.861 2.112.623 4.007 1.195 6.817 2.037l.016-3.898zm15.213-7.165l1.942.821 1.516-1.49a56.852 56.852 0 00-6.694-2.647l3.236 3.316zm-7.44-4.519c-3.687-.918-7.615-1.549-11.775-1.863 2.509-1.954 8.004-2.992 11.839-3.871-6.24-2.525-17.137-2.863-26.058-.017-.495 1.506-1.483 3.868-2.685 4.952-1.586 1.43-3.063 2.694-4.373 3.915 10.1-4.479 20.923-4.799 31.527-1.855l1.525-1.261zM82.1 80.589c1.213 7.898-1.998 20.612-2.61 22.231-.613 1.618-1.421 3.479-4.084 10.137-2.664 6.658-2.451 19.463-.66 23.5-4.342-3.055-9.693-4.784-14.795-2.94 8.582 4.379 13.448 14.094 19.147 21.551 13.089 17.129 29.219 25.133 49.926 19.37 10.231-2.847 25.104-22.701 16.335-30.342-15.181 8.569-31.513-2.404-32.155-19.114-.467-12.171 12.786-24.526 25.65-26.107-5.249-1.572-7.043-2.387-13.788-1.313 6.068-4.449 10.642-7.967 21.017-8.998.637-1.192 1.667-2.01 2.687-2.853-12.985-3.363-31.961-2.924-48.429 18.886 4.904-10.82 8.443-15.182 20.698-27.127 3.233-3.151 2.587-7.771 2.183-10.966-3.448 5.663-9.754 8.745-18.349 12.542-6.518 2.879-12.428 7.647-16.78 13.669-1.091-4.665-2.175-8.865-5.993-12.126zm62.075 89.198a95.605 95.605 0 004.608-2.046c-4.35 7.066-14.86 14.943-33.852 17.435 20.304 5.345 39.698 2.31 51.914-10.359-.979 1.719-1.998 3.546-3.118 5.174 14.984-8.658 34.487-34.111 20.514-58.638 2.36 1.92 4.335 4.253 6.008 7.432.11-11.661-3.429-22.244-10.167-30.625l-3.947 4.018 7.299 7.124-5.446 6.584c-2.667 3.225-4.416 3.231-7.72 3.242l-4.616.018c-.087 1.544-.742 2.979-1.882 4.027l-.072 3.376c-.069 3.225-1.915 6.394-5.122 7.359l.001.005c-3.864 1.15-7.022 3.497-9.786 6.353 1.943 1.713 3.186 3.805 3.841 6.157 1.06 3.809.418 8.087-1.322 12.281-1.663 4.008-4.251 7.851-7.135 11.083zm-25.774-43.979l9.782-9.463c1.993-1.929 4.901-6.745 5.964-10.318.226-.761 1.197-1.434 2.541-1.463l6.485-.139.357-1.122c.196-.616.459-.706 1.011-.709l4.176-.02a.392.392 0 00.379-.39l.037-9.184c.007-1.797-.026-2.719 1.393-3.893l2.944-2.433 7.412 7.594 18.945-18.61 1.185-4.634c.463-1.81 1.741-1.749 3.146-.528l4.538 3.945 3.945 4.538c1.22 1.405 1.282 2.683-.528 3.146l-4.634 1.185-18.611 18.945 7.595 7.412-2.434 2.943c-1.173 1.42-2.096 1.387-3.892 1.394l-9.184.037a.39.39 0 00-.39.379l-.02 4.176c-.003.552-.093.815-.709 1.011l-1.122.358-.139 6.484c-.029 1.344-.703 2.315-1.463 2.541-3.573 1.063-8.389 3.971-10.318 5.964l-5.142 5.316c-5.88 2.918-11.824 2.547-17.096-2.205-3.029-2.731-5.197-6.561-5.943-10.779a20.577 20.577 0 01-.21-1.478z"}})])]),a("el-divider",{staticClass:"u-title"},[e._v("JX3BOX")])],1)},l=[],i=a("ee8f"),r=i.JX3BOX,n={name:"CardHeader",data:function(){return{homepage:r.__Root}}},c=n,o=a("2877"),u=Object(o["a"])(c,s,l,!1,null,null,null);t["a"]=u.exports},1:function(e,t,a){e.exports=a("17cb")},"17cb":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),l=a("5c96"),i=a.n(l),r=(a("6b30"),a("0af6")),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"m-card",attrs:{id:"app"}},[a("el-card",{staticClass:"box-card"},[a("CardHeader"),null==e.success?a("main",{staticClass:"m-main"},[a("form",{ref:"registerForm"},[a("div",{staticClass:"u-email"},[a("el-input",{staticClass:"u-text u-email",attrs:{placeholder:"邮箱地址",minlength:"3",maxlength:"50",type:"email"},on:{change:e.checkEmail},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}},[a("template",{slot:"prepend"},[a("svg",{class:"i-mail",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[a("path",{attrs:{d:"M467 61H45C20.218 61 0 81.196 0 106v300c0 24.72 20.128 45 45 45h422c24.72 0 45-20.128 45-45V106c0-24.72-20.128-45-45-45zm-6.214 30L256.954 294.833 51.359 91h409.427zM30 399.788V112.069l144.479 143.24L30 399.788zM51.213 421l144.57-144.57 50.657 50.222c5.864 5.814 15.327 5.795 21.167-.046L317 277.213 460.787 421H51.213zM482 399.787L338.213 256 482 112.212v287.575z"}})])])],2),a("i",{directives:[{name:"show",rawName:"v-show",value:1==e.email_available,expression:"email_available == true"}],staticClass:"el-icon-success u-ok"}),a("div",{staticClass:"u-tip"},[a("el-alert",{directives:[{name:"show",rawName:"v-show",value:0==e.email_validate,expression:"email_validate == false"}],attrs:{title:e.email_validate_tip,type:"error","show-icon":"",closable:!1}}),a("el-alert",{directives:[{name:"show",rawName:"v-show",value:0==e.email_available,expression:"email_available == false"}],attrs:{title:e.email_available_tip,type:"error","show-icon":"",closable:!1}})],1)],1),a("div",{staticClass:"u-pass"},[a("el-input",{staticClass:"u-text",attrs:{placeholder:"输入密码","show-password":""},on:{input:e.checkPass},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}},[a("template",{slot:"prepend"},[a("svg",{class:"i-pass",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[a("path",{attrs:{d:"M437.333 192h-32v-42.667C405.333 66.99 338.344 0 256 0S106.667 66.99 106.667 149.333V192h-32A10.66 10.66 0 0064 202.667v266.667C64 492.865 83.135 512 106.667 512h298.667C428.865 512 448 492.865 448 469.333V202.667A10.66 10.66 0 00437.333 192zM287.938 414.823a10.67 10.67 0 01-10.604 11.844h-42.667a10.67 10.67 0 01-10.604-11.844l6.729-60.51c-10.927-7.948-17.458-20.521-17.458-34.313 0-23.531 19.135-42.667 42.667-42.667s42.667 19.135 42.667 42.667c0 13.792-6.531 26.365-17.458 34.313l6.728 60.51zM341.333 192H170.667v-42.667C170.667 102.281 208.948 64 256 64s85.333 38.281 85.333 85.333V192z"}})])])],2),a("div",{staticClass:"u-tip"},[a("el-alert",{directives:[{name:"show",rawName:"v-show",value:0==e.pass_validate,expression:"pass_validate == false"}],attrs:{title:e.pass_validate_tip,type:"error","show-icon":"",closable:!1}})],1)],1),a("el-button",{staticClass:"u-submit u-button",attrs:{type:"primary",disabled:!e.ready},on:{click:e.submit}},[e._v("注册")])],1),a("footer",{staticClass:"m-footer"},[a("p",{staticClass:"u-login"},[e._v(" 已有账号? "),a("a",{attrs:{href:e.login_url}},[e._v("登录 »")])]),a("p",{staticClass:"u-resetpwd"},[a("a",{attrs:{href:"../password_reset"}},[e._v("忘记密码?")])])])]):e._e(),1==e.success?a("main",{staticClass:"m-main"},[a("el-alert",{attrs:{title:"注册成功",type:"success",description:"一封邮箱验证的邮件已发送至您的邮箱,请注意查收","show-icon":"",closable:!1}}),a("a",{staticClass:"u-skip el-button u-button el-button--primary",attrs:{href:e.login_url}},[e._v("立即登录")])],1):e._e(),0==e.success?a("main",{staticClass:"m-main"},[a("el-alert",{attrs:{title:"注册失败",type:"error",description:"请求异常,请重试","show-icon":"",closable:!1}}),a("el-button",{staticClass:"u-button u-submit",attrs:{type:"primary"},on:{click:e.reset}},[e._v("返回")])],1):e._e()],1),a("Bottom")],1)},c=[],o=(a("d3b7"),a("ac1f"),a("3ca3"),a("841c"),a("ddb0"),a("2b3d"),a("0111")),u=a("9945"),p=u.validator,d=a("bc3a"),m=a("ee8f"),v=m.JX3BOX,h=v.__server,f={name:"Register",data:function(){return{email:"",email_validate:null,email_validate_tip:"必须为有效的Email,长度限3-50个字符",email_available:null,email_available_tip:"邮箱地址已被使用",pass:"",pass_validate:null,pass_validate_tip:"密码有效长度为6-50个字符",success:null,homepage:v.__Root,redirect:""}},computed:{ready:function(){return this.email_validate&&this.email_available&&this.pass_validate},login_url:function(){return"../login?redirect="+this.redirect}},methods:{checkEmail:function(){var e=this;if(""==this.email)return this.email_validate=null,void(this.email_available=null);var t=p(this.email,{isEmail:!0,len:[3,50]});this.email_validate=t,t?d.get(h+"account/has?user_login=".concat(this.email)).then((function(t){e.email_available=!t.data})):this.email_available=null},checkPass:function(){if(""!=this.pass){var e=p(this.pass,{len:[6,50]});this.pass_validate=e}else this.pass_validate=null},submit:function(){var e=this;this.ready&&d.post(h+"account/register/email",{user_login:this.email,user_pass:this.pass}).then((function(t){e.success=!0})).catch((function(t){e.success=!1}))},reset:function(){this.success=null,this.email_validate=null,this.email_available=null,this.pass_validate=null},checkDirect:function(){var e=new URLSearchParams(document.location.search),t=e.get("redirect");this.redirect=t||this.homepage}},filters:{},mounted:function(){this.checkDirect()},components:{CardHeader:o["a"]}},_=f,b=(a("360c"),a("2877")),w=Object(b["a"])(_,n,c,!1,null,null,null),g=w.exports;s["default"].config.productionTip=!1,s["default"].use(i.a),s["default"].component("Bottom",r["a"]),new s["default"]({render:function(e){return e(g)}}).$mount("#app")},"360c":function(e,t,a){"use strict";var s=a("81c0"),l=a.n(s);l.a},"81c0":function(e,t,a){}});
//# sourceMappingURL=register.179c472b.js.map