"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@chakra-ui/react"),t=require("react"),n=require("react-hook-form"),r=require("react-i18next"),a=require("@tinymce/tinymce-react"),o=require("axios"),l=require("react-query");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=u(t),c=u(o),f=function(){return(f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function s(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{i(r.next(e))}catch(e){o(e)}}function u(e){try{i(r.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,u)}i((r=r.apply(e,t||[])).next())}))}function m(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}var p=function(t){var n=d(t,[]);return i.default.createElement(e.Checkbox,{onChange:n.onChange})},v=function(e){var t=d(e,[]);return i.default.createElement(a.Editor,{value:t.value,tinymceScriptSrc:"/tinymce.min.js",onEditorChange:function(e){return t.onChange(e)},init:{directionality:"rtl",language:"fa",mobile:{menubar:!1,toolbar:"undo redo | formatselect | bold italic backcolor"},height:300,menubar:!0,plugins:["code"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat"}})},h=t.forwardRef((function(t,n){var r=d(t,[]);return i.default.createElement(e.NumberInput,f({ref:n},r,{size:"sm",inputMode:"numeric",min:0,max:1/0,value:r.value||0===r.value?r.value:""}),i.default.createElement(e.NumberInputField,{bg:"#F0F5F7",p:"6"}),i.default.createElement(e.NumberInputStepper,null,i.default.createElement(e.NumberIncrementStepper,null),i.default.createElement(e.NumberDecrementStepper,null)))})),g=function(t){var n=d(t,[]);return i.default.createElement(e.Center,{dir:"ltr"},i.default.createElement(e.HStack,null,i.default.createElement(e.PinInput,{otp:!0,onChange:function(e){return n.onChange(e)},isInvalid:n.isInvalid,autoFocus:!0,size:"lg"},function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}([],Array(n.count)).map((function(t,n){return i.default.createElement(e.PinInputField,{key:n})})))))},b=function(){return i.default.createElement(e.Skeleton,{h:"12"})},y=t.forwardRef((function(t,n){var r=d(t,[]);return r.options?i.default.createElement(E,f({ref:n},r)):r.fetchUrl?i.default.createElement(x,f({ref:n},r)):i.default.createElement(e.Select,null)})),E=t.forwardRef((function(t,n){var r,a=d(t,[]);return i.default.createElement(e.Select,{ref:n,onChange:a.onChange,bg:"#F0F5F7",size:"lg",fontSize:"sm"},null===(r=a.options)||void 0===r?void 0:r.map((function(e){return i.default.createElement("option",{value:e.value,key:e.value},e.label)})))})),x=t.forwardRef((function(e,t){var n=d(e,[]),r=l.useQuery(n.fetchUrl,(function(){return c.default.get(n.fetchUrl).then((function(e){return e.data}))}),{select:function(e){return e.items.map((function(e){return{label:n.labelProperty?e[n.labelProperty]:e.label,value:n.valueProperty?e[n.valueProperty]:e.value}}))}}),a=r.data;return r.isLoading?i.default.createElement(b,null):i.default.createElement(E,f({ref:t,options:a},n))})),w=function(n){var r=d(n,[]),a=t.useState(),o=a[0],l=a[1];return i.default.createElement(i.default.Fragment,null,i.default.createElement(e.RangeSlider,f({"aria-label":["min","max"],min:1300,max:1401,defaultValue:[1350,1380]},r,{onChangeEnd:function(e){return l(e)}}),i.default.createElement(e.RangeSliderTrack,null,i.default.createElement(e.RangeSliderFilledTrack,null)),i.default.createElement(e.RangeSliderThumb,{index:0}),i.default.createElement(e.RangeSliderThumb,{index:1})),i.default.createElement(e.Center,null,i.default.createElement(e.Badge,{colorScheme:"blue",py:"1",px:"4"},null==o?void 0:o[0]," - ",null==o?void 0:o[1])))},S=function(t){var n=d(t,[]);return i.default.createElement(e.Switch,{onChange:n.onChange})},C=function(t){var n=d(t,[]);return i.default.createElement(e.Textarea,f({},n,{bg:"#F0F5F7"}))},k=t.forwardRef((function(t,n){var r=d(t,[]);return i.default.createElement(e.Input,f({},r,{onChange:r.onChange,ref:n,value:r.value||"",bg:"#f0f5f7",p:"6",color:"#696969",_focus:{bg:"white",border:"1px solid #1967D2"}}))})),F=function(e,t,r){if(e&&"reportValidity"in e){var a=n.get(r,t);e.setCustomValidity(a&&a.message||""),e.reportValidity()}},P=function(e,t){var n=function(n){var r=t.fields[n];r&&r.ref&&"reportValidity"in r.ref?F(r.ref,n,e):r.refs&&r.refs.forEach((function(t){return F(t,n,e)}))};for(var r in t.fields)n(r)},O=function(e,t){t.shouldUseNativeValidation&&P(e,t);var r={};for(var a in e){var o=n.get(t.fields,a);n.set(r,a,Object.assign(e[a],{ref:o&&o.ref}))}return r},j=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),function(a,o,l){try{return Promise.resolve(function(n,u){try{var i=(t.context&&"development"===process.env.NODE_ENV&&console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"),Promise.resolve(e["sync"===r.mode?"validateSync":"validate"](a,Object.assign({abortEarly:!1},t,{context:o}))).then((function(e){return l.shouldUseNativeValidation&&P({},l),{values:e,errors:{}}})))}catch(e){return u(e)}return i&&i.then?i.then(void 0,u):i}(0,(function(e){if(!e.inner)throw e;return{values:{},errors:O((t=e,r=!l.shouldUseNativeValidation&&"all"===l.criteriaMode,(t.inner||[]).reduce((function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),r){var a=e[t.path].types,o=a&&a[t.type];e[t.path]=n.appendErrors(t.path,r,e,t.type,o?[].concat(o,t.message):t.message)}return e}),{})),l)};var t,r})))}catch(e){return Promise.reject(e)}}},T=function(e,n,r){var a=t.useState(null),o=a[0],l=a[1];return t.useEffect((function(){!function(e,t,n){var r=document.getElementById(e);if(r){var a=window.grecaptcha;l(a)}else{var o=document.createElement("script");o.type="text/javascript",o.src=t,o.id=e,o.onload=function(){var e=window.grecaptcha;e.ready((function(){l(e)}))},document.body.appendChild(o)}r&&n&&n()}("recaptcha-key","https://www.google.com/recaptcha/api.js?render="+n,(function(){}))}),[e]),[t.useCallback((function(){return s(void 0,void 0,void 0,(function(){return m(this,(function(e){switch(e.label){case 0:if(!o||!o.execute)throw new Error("Google Recaptcha has not been loaded");return[4,o.execute(n,{action:"submit"})];case 1:return[2,e.sent()]}}))}))}),[o])]},I=i.default.createContext(void 0);function V(){var e=i.default.useContext(I);if(void 0===e)throw new Error("useAminook must be used within a FormBuilder Tag");return e}var R=t.forwardRef((function(t,n){var a,o,l,u,c,s,m,b,E=d(t,[]),x=r.useTranslation("validations")[0],F=V(),P=F.translation,O=F.router,j=V().formSchema.fields[E.name],T=null!==(a=null==j?void 0:j.meta)&&void 0!==a?a:E.fieldSetting,I={name:E.name,value:E.value};return i.default.createElement(e.Box,{my:E.my,mx:E.mx,display:"inline-block",w:{base:null!==(l=null===(o=E.width)||void 0===o?void 0:o.base)&&void 0!==l?l:"full",md:null!==(c=null===(u=E.width)||void 0===u?void 0:u.md)&&void 0!==c?c:"full"}},i.default.createElement(e.FormControl,{display:E.hidden?"none":"initial",isInvalid:!!E.error,isRequired:null!==(s=null==j?void 0:j.tests.some((function(e){return"required"===e.name})))&&void 0!==s&&s},!(null==T?void 0:T.hideLabel)&&i.default.createElement(e.FormLabel,{htmlFor:E.name,fontSize:"sm",fontWeight:"bold"},(null==j?void 0:j.label)?j.label:(null===(m=E.fieldSetting)||void 0===m?void 0:m.label)?null===(b=E.fieldSetting)||void 0===b?void 0:b.label:P((O?O.pathname:window.location.pathname)+".form.labels."+E.name)),function(){var t,r;switch(null!==(t=null==T?void 0:T.type)&&void 0!==t?t:null===(r=E.fieldSetting)||void 0===r?void 0:r.type){case"input-text":case"input-mask":return i.default.createElement(k,f({ref:n},f(f({},I),null==T?void 0:T.fieldProps),{onChange:function(e){E.onChange(function(e){var t=[/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g],n=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g];if("string"==typeof e)for(var r=0;r<10;r++)e=e.replace(t[r],r.toString()).replace(n[r],r.toString());return e}(e.target.value))}}));case"input-number":return i.default.createElement(h,f({ref:n},f(f({},I),null==T?void 0:T.fieldProps),{onChange:function(e,t){E.onChange(t)}}));case"checkbox":return i.default.createElement(p,f({},null==T?void 0:T.fieldProps,I,{onChange:function(e){return E.onChange(e.target.checked,e)}}));case"select":return i.default.createElement(y,f({ref:n},null==T?void 0:T.fieldProps,I,{onChange:function(e){return E.onChange(e.target.value,e)}}));case"switch":return i.default.createElement(S,f({},I,null==T?void 0:T.fieldProps,{onChange:function(e){return E.onChange(e.target.checked)}}));case"text-area":case"text-area":return i.default.createElement(C,f({},I,null==T?void 0:T.fieldProps,{onChange:function(e){return E.onChange(e.target.value,e)}}));case"slider":return i.default.createElement(w,f({},E,null==T?void 0:T.fieldProps));case"input-pin":return i.default.createElement(g,f({},I,null==T?void 0:T.fieldProps,{isInvalid:!!E.error,onChange:function(e){return E.onChange(e)}}));case"editor":return i.default.createElement(v,{value:E.value,onChange:function(e){return E.onChange(e)}});default:return i.default.createElement(e.Box,null,"Unrecognized field type.")}}(),!!(null==T?void 0:T.helperText)&&i.default.createElement(e.FormHelperText,{fontSize:"xs"},null==T?void 0:T.helperText),!!E.error&&i.default.createElement(e.FormErrorMessage,{fontSize:"xs"},P?x(E.error.type,{path:P((O?O.pathname:window.location.pathname)+".form.labels."+E.name),value:E.value}):E.error.message)))}));exports.ControlledFormControl=function(e){var t=d(e,[]),r=V().control;return i.default.createElement(n.Controller,{name:t.name,control:r,render:function(e){var n=e.field,r=e.fieldState;return e.formState,i.default.createElement(R,f({error:r.error},f(f(f({},t),r),n)))}})},exports.FormBuilder=function(t){var r=this,a=e.useToast({position:"top",isClosable:!0,variant:"top-accent"}),o=T("recaptcha-key",t.recaptchaApiKey)[0],u=t.formSchema.describe(),c=l.useMutation(t.mutationFunction),d=n.useForm({resolver:j(t.formSchema),defaultValues:t.defaultValues?t.defaultValues:void 0});return i.default.createElement(I.Provider,{value:{formSchema:u,control:d.control,translation:t.translation,router:t.router,isLoading:c.isLoading,isError:c.isError}},i.default.createElement(n.FormProvider,f({},d),i.default.createElement("form",{noValidate:!0,style:{width:"100%"},onSubmit:d.handleSubmit((function(e){return s(r,void 0,void 0,(function(){var n;return m(this,(function(r){switch(r.label){case 0:return t.doesHaveRecaptcha?[4,o()]:[3,2];case 1:n=r.sent(),e=f(f({},e),{captchaToken:n}),r.label=2;case 2:return c.mutate(e,{onSuccess:function(n){t.showToastOnSuccess&&a({title:t.successToastMessage,status:"success"}),t.onSubmitSucess&&t.onSubmitSucess(n.data,e)},onError:function(e){a({title:e.code,description:e.message,status:"error"})}}),console.log(e),[2]}}))}))}),(function(e){t.onError?t.onError(e):console.log(e)}))},t.children)))},exports.FormControl=R,exports.FormSubmitButton=function(t){t.type;var n=t.text;t.onClick;var r=V().isLoading;return i.default.createElement(e.Box,{mt:"10"},i.default.createElement(e.Button,{isLoading:r,loadingText:"در حال ذخیره اطلاعات...",type:"submit",variant:"primary_dark"},n))},exports.Select=y,exports.mobileIranValidation=/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,exports.phoneNumberIranValidation=/^0[0-9]{2,}[0-9]{7,}$/,exports.useAminook=V;
//# sourceMappingURL=index.js.map