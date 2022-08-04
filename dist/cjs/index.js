"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@aminbaghbanzadeh/chakra-file-uploader"),t=require("@chakra-ui/react"),n=require("react"),r=require("react-hook-form"),a=require("react-i18next"),o=require("@tinymce/tinymce-react"),l=require("axios"),u=require("react-select-async-paginate"),i=require("@hookform/resolvers/yup"),c=require("react-query"),f=require("react-select/creatable"),d=require("yup");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=s(n),p=s(l),v=s(f),g=function(){return(g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function b(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{i(r.next(e))}catch(e){o(e)}}function u(e){try{i(r.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,u)}i((r=r.apply(e,t||[])).next())}))}function y(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function E(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}var C=n.forwardRef((function(e,n){var r=h(e,[]);return m.default.createElement(t.Checkbox,g({},r,{isChecked:r.checked,onChange:r.onChange,ref:n}),r.title)})),S=function(e){var t=h(e,[]);return m.default.createElement(o.Editor,{value:t.value,tinymceScriptSrc:"/tinymce.min.js",onEditorChange:function(e){return t.onChange(e)},init:{directionality:"rtl",language:"fa",mobile:{menubar:!1,toolbar:"undo redo | formatselect | bold italic backcolor"},menubar:!1,height:300,toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat"}})},w=n.forwardRef((function(e,n){var r=h(e,[]);return m.default.createElement(t.NumberInput,g({ref:n},r,{size:"sm",inputMode:"numeric",min:0,max:1/0,value:r.value||0===r.value?r.value:""}),m.default.createElement(t.NumberInputField,{bg:"#F0F5F7",p:"6"}),m.default.createElement(t.NumberInputStepper,null,m.default.createElement(t.NumberIncrementStepper,null),m.default.createElement(t.NumberDecrementStepper,null)))})),x=function(e){var n=h(e,[]);return m.default.createElement(t.Center,{dir:"ltr"},m.default.createElement(t.HStack,null,m.default.createElement(t.PinInput,{otp:!0,onChange:function(e){return n.onChange(e)},isInvalid:n.isInvalid,autoFocus:!0,size:"lg"},E([],Array(n.count)).map((function(e,n){return m.default.createElement(t.PinInputField,{key:n})})))))},k=function(e){return{control:function(t){return g(g({},t),{padding:"0.3rem",backgroundColor:"#f0f5f7",border:e.isInvalid?"2px solid #E53E3E":"1px solid #E2E8F0",borderRadius:"0.375rem","&focus":{borderColor:"#3182ce !important"}})},input:function(e){return g(g({},e),{color:"#696969",fontSize:"0.875rem"})},valueContainer:function(e){return g(g({},e),{color:"#696969",fontSize:"0.875rem"})},indicatorSeparator:function(e){return g(g({},e),{display:"none"})},indicatorsContainer:function(e){return g(g({},e),{color:"black"})},option:function(e,t){return g(g({},e),{color:t.isSelected?"white":"black",padding:"0.2rem",paddingRight:"0.5rem",fontFamily:"inherit !important",fontSize:"0.875rem","&:hover":g(g({},e),{fontSize:"0.875rem",padding:"0.2rem",color:"white",backgroundColor:"#0385ff !important"})})},loadingMessage:function(e,t){return g(g({},e),{fontSize:"0.875rem"})},noOptionsMessage:function(e,t){return g(g({},e),{fontSize:"0.875rem"})},multiValue:function(e,t){return g(g({},e),{background:"#e8f0fa",fontSize:"0.875rem"})}}},F=n.forwardRef((function(e,n){var r=h(e,[]);return m.default.createElement(u.AsyncPaginate,g({},r,{isClearable:!0,isSearchable:!0,selectRef:n,defaultValue:r.value,styles:k(r),loadOptions:function(e,t){return b(void 0,void 0,void 0,(function(){var n,a,o,l;return y(this,(function(u){switch(u.label){case 0:return[4,p.default.get(""+r.fetchUrl+r.searchQueryFieldName+"="+e+"&"+(null!==(a=r.offsetQueryFieldName)&&void 0!==a?a:"SkipCount")+"="+t.length)];case 1:return[2,{options:(n=u.sent()).data[null!==(o=r.resultFieldName)&&void 0!==o?o:"items"],hasMore:n.data[null!==(l=r.totalCountFieldName)&&void 0!==l?l:"totalCount"]>t.length}]}}))}))},placeholder:"انتخاب کنید.",noOptionsMessage:function(e){return"گزینه ای مرتبط با "+e.inputValue+" یافت نشد."},loadingMessage:function(){return"در حال بارگزاری..."},onChange:function(e,t){return r.onChange(e,t)},components:{LoadingIndicator:function(){return m.default.createElement(t.Spinner,{size:"sm",colorScheme:"blue"})}}}))})),P=function(e){var r=h(e,[]),a=n.useState(),o=a[0],l=a[1];return m.default.createElement(m.default.Fragment,null,m.default.createElement(t.RangeSlider,g({"aria-label":["min","max"],min:1300,max:1401,defaultValue:[1350,1380]},r,{onChangeEnd:function(e){return l(e)}}),m.default.createElement(t.RangeSliderTrack,null,m.default.createElement(t.RangeSliderFilledTrack,null)),m.default.createElement(t.RangeSliderThumb,{index:0}),m.default.createElement(t.RangeSliderThumb,{index:1})),m.default.createElement(t.Center,null,m.default.createElement(t.Badge,{colorScheme:"blue",py:"1",px:"4"},null==o?void 0:o[0]," - ",null==o?void 0:o[1])))},I=function(e){var n=h(e,[]);return m.default.createElement(t.Switch,{onChange:n.onChange})},R=function(e){var n=h(e,[]);return m.default.createElement(t.Textarea,g({},n,{bg:"#F0F5F7"}))},O=n.forwardRef((function(e,n){var r=h(e,[]);return m.default.createElement(t.Input,g({},r,{onChange:r.onChange,ref:n,value:r.value||"",bg:"#f0f5f7",p:"6",color:"#696969",_focus:{bg:"white",border:"1px solid #1967D2"}}))})),T=function(e,t,r,a){var o=n.useState(null),l=o[0],u=o[1];return n.useEffect((function(){a&&function(e,t,n){var r=document.getElementById(e);if(r){var a=window.grecaptcha;u(a)}else{var o=document.createElement("script");o.type="text/javascript",o.src=t,o.id=e,o.onload=function(){var e=window.grecaptcha;e.ready((function(){u(e)}))},document.body.appendChild(o)}r&&n&&n()}("recaptcha-key","https://www.google.com/recaptcha/api.js?render="+t,(function(){}))}),[e]),[n.useCallback((function(){return b(void 0,void 0,void 0,(function(){return y(this,(function(e){switch(e.label){case 0:if(!l||!l.execute)throw new Error("Google Recaptcha has not been loaded");return[4,l.execute(t,{action:"submit"})];case 1:return[2,e.sent()]}}))}))}),[l])]},z=m.default.createContext(void 0);function q(){var e=m.default.useContext(z);if(void 0===e)throw new Error("useAminook must be used within a FormBuilder Tag");return e}var j=function(){return m.default.createElement(t.Skeleton,{h:"12"})},V=n.forwardRef((function(e,n){var r=h(e,[]);return r.options?m.default.createElement(M,g({ref:n},r)):r.fetchUrl?m.default.createElement(N,g({ref:n},r)):m.default.createElement(t.Select,null)})),M=n.forwardRef((function(e,n){var r,a=h(e,[]);return m.default.createElement(t.Select,{ref:n,onChange:a.onChange,bg:"#F0F5F7",size:"lg",fontSize:"sm"},null===(r=a.options)||void 0===r?void 0:r.map((function(e){return m.default.createElement("option",{value:e.value,key:e.value},e.label)})))})),N=n.forwardRef((function(e,t){var n=h(e,[]),r=c.useQuery(n.fetchUrl,(function(){return p.default.get(n.fetchUrl).then((function(e){return e.data}))}),{select:function(e){return e.items.map((function(e){return{label:n.labelProperty?e[n.labelProperty]:e.label,value:n.valueProperty?e[n.valueProperty]:e.value}}))}}),a=r.data;return r.isLoading?m.default.createElement(j,null):m.default.createElement(M,g({ref:t,options:a},n))})),B=n.forwardRef((function(e,t){var r,a=h(e,[]),o=n.useState(),l=o[0],u=o[1],i=n.useState(null!==(r=a.value)&&void 0!==r?r:[]),c=i[0],f=i[1],d=n.useCallback((function(e){u(e)}),[]),s=n.useCallback((function(e){if(l)switch(e.key){case"Enter":case"Tab":e.preventDefault(),e.stopPropagation(),u(""),f((function(e){return E(E([],e),[{label:l,value:l}])})),a.onChange(c.map((function(e){return e.value})).concat(l).join(",")),u("")}}),[l]),p=n.useCallback((function(e,t){a.onChange(e.map((function(e){return e.value})).join(",")),f(e)}),[f]);return m.default.createElement(v.default,g({},a,{components:{DropdownIndicator:null},inputValue:l,isMulti:!0,menuIsOpen:!1,styles:k(a),onChange:p,onInputChange:d,onKeyDown:s,value:c}))})),L=n.forwardRef((function(n,r){var o,l,u,i,c,f,d,s,p,v=h(n,[]),b=a.useTranslation("validations")[0],y=q(),E=y.translation,k=y.router,T=y.formSchema.fields[v.name],z=null!==(o=null==T?void 0:T.meta)&&void 0!==o?o:v.fieldSetting,j={name:v.name,value:v.value};return m.default.createElement(t.Box,{my:v.my,mx:v.mx,display:"inline-block",w:{base:null!==(u=null===(l=v.width)||void 0===l?void 0:l.base)&&void 0!==u?u:"full",md:null!==(c=null===(i=v.width)||void 0===i?void 0:i.md)&&void 0!==c?c:"full"}},m.default.createElement(t.FormControl,{display:v.hidden?"none":"initial",isInvalid:!!v.error,isRequired:null!==(f=null==T?void 0:T.tests.some((function(e){return"required"===e.name})))&&void 0!==f&&f},!(null==z?void 0:z.hideLabel)&&"checkbox"!==z.type&&m.default.createElement(t.FormLabel,{htmlFor:v.name,fontSize:"sm",fontWeight:"bold"},(null==T?void 0:T.label)?null==T?void 0:T.label:(null===(d=null==v?void 0:v.fieldSetting)||void 0===d?void 0:d.label)?null===(s=null==v?void 0:v.fieldSetting)||void 0===s?void 0:s.label:E((k?null==k?void 0:k.pathname:window.location.pathname)+".form.labels."+v.name)),function(){var n,a,o,l;switch(null!==(n=null==z?void 0:z.type)&&void 0!==n?n:null===(a=v.fieldSetting)||void 0===a?void 0:a.type){case"input-text":case"input-mask":return m.default.createElement(O,g({ref:r},g(g({},j),null==z?void 0:z.fieldProps),{onChange:function(e){v.onChange(function(e){var t=[/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g],n=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g];if("string"==typeof e)for(var r=0;r<10;r++)e=e.replace(t[r],r.toString()).replace(n[r],r.toString());return e}(e.target.value))}}));case"input-number":return m.default.createElement(w,g({ref:r},g(g({},j),null==z?void 0:z.fieldProps),{onChange:function(e,t){v.onChange(t)}}));case"checkbox":return m.default.createElement(C,g({ref:r},null==z?void 0:z.fieldProps,j,{checked:j.value,title:null==T?void 0:T.label,onChange:function(e){return v.onChange(e.target.checked,e)}}));case"select":return m.default.createElement(V,g({ref:r},null==z?void 0:z.fieldProps,j,{onChange:function(e){return v.onChange(e.target.value,e)}}));case"switch":return m.default.createElement(I,g({},j,null==z?void 0:z.fieldProps,{onChange:function(e){return v.onChange(e.target.checked)}}));case"text-area":case"text-area":return m.default.createElement(R,g({},j,null==z?void 0:z.fieldProps,{onChange:function(e){return v.onChange(e.target.value,e)}}));case"slider":return m.default.createElement(P,g({},v,null==z?void 0:z.fieldProps));case"input-pin":return m.default.createElement(x,g({},j,null==z?void 0:z.fieldProps,{isInvalid:!!v.error,onChange:function(e){return v.onChange(e)}}));case"editor":return m.default.createElement(S,{value:v.value,onChange:function(e){return v.onChange(e)}});case"uploader":return m.default.createElement(e.ChakraFileUploader,g({},null==z?void 0:z.fieldProps));case"reach-select":return m.default.createElement(F,g({ref:r},null==z?void 0:z.fieldProps,{isInvalid:!!v.error},j,{onChange:function(e){v.onChange(e)}}));case"input-tag":return m.default.createElement(B,g({ref:r},null==z?void 0:z.fieldProps,{isInvalid:!!v.error},j,{onChange:function(e){v.onChange(e)},value:null===(l=null===(o=v.value)||void 0===o?void 0:o.split(","))||void 0===l?void 0:l.map((function(e){return{value:e,label:e}}))}));default:return m.default.createElement(t.Box,null,"Unrecognized field type.")}}(),!!(null==z?void 0:z.helperText)&&m.default.createElement(t.FormHelperText,{fontSize:"xs"},null==z?void 0:z.helperText),!!v.error&&m.default.createElement(t.FormErrorMessage,{fontSize:"xs"},E?b(v.error.type,{path:E((k?k.pathname:window.location.pathname)+".form.labels."+v.name),value:v.value}):null===(p=v.error)||void 0===p?void 0:p.message)))})),A=[/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g],U=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g],D=d.string().transform((function(e,t){return d.string().isType(e)&&null!==e?function(e){if("string"==typeof e)for(var t=0;t<10;t++)e=e.replace(A[t],""+t).replace(U[t],""+t);return e}(e):e}));exports.ControlledFormControl=function(e){var t=h(e,[]),n=q().control;return m.default.createElement(r.Controller,{name:t.name,control:n,render:function(e){var n=e.field,r=e.fieldState;return e.formState,m.default.createElement(L,g({error:r.error},g(g(g({},t),r),n)))}})},exports.FormBuilder=function(e){var n,a=this,o=t.useToast({position:"top",isClosable:!0,variant:"top-accent"}),l=T("recaptcha-key",e.recaptchaApiKey,0,null!==(n=e.doesHaveRecaptcha)&&void 0!==n&&n)[0],u=e.formSchema.describe(),f=c.useMutation(e.mutationFunction,{retry:0}),d=r.useForm({resolver:i.yupResolver(e.formSchema),defaultValues:e.defaultValues?e.defaultValues:void 0});return m.default.createElement(z.Provider,{value:{formSchema:u,control:d.control,translation:e.translation,router:e.router,isLoading:f.isLoading,isError:f.isError}},m.default.createElement(r.FormProvider,g({},d),m.default.createElement("form",{noValidate:!0,style:{width:"100%"},onSubmit:d.handleSubmit((function(t){return b(a,void 0,void 0,(function(){var n;return y(this,(function(r){switch(r.label){case 0:return e.doesHaveRecaptcha?[4,l()]:[3,2];case 1:n=r.sent(),t=g(g({},t),{captchaToken:n}),r.label=2;case 2:return f.mutate(t,{onSuccess:function(n){e.showToastOnSuccess&&o({title:e.successToastMessage,status:"success"}),e.onSubmitSucess&&e.onSubmitSucess(n.data,t)},onError:function(e){o({title:e.code,description:e.message,status:"error"})}}),console.log(t),[2]}}))}))}),(function(t){e.onError&&e.onError(t)}))},e.children)))},exports.FormControl=L,exports.FormSubmitButton=function(e){e.type;var n=e.text;e.onClick;var r=q().isLoading;return m.default.createElement(t.Box,{mt:"10"},m.default.createElement(t.Button,{isLoading:r,loadingText:"در حال ذخیره اطلاعات...",type:"submit",variant:"primary_dark"},n))},exports.Select=V,exports.inherentNumberString=D,exports.mobileIranValidation=/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,exports.phoneNumberIranValidation=/^0[0-9]{2,}[0-9]{7,}$/,exports.selectWithValueExtractor=function(){return d.number().transform((function(e,t){return e?e.value:t?t.value:null}))},exports.useAminook=q;
//# sourceMappingURL=index.js.map
