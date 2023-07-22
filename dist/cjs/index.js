"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@aminbaghbanzadeh/chakra-file-uploader"),t=require("@chakra-ui/react"),n=require("react"),l=require("react-hook-form"),a=require("@tinymce/tinymce-react"),r=require("@aminbaghbanzadeh/password-policies-screen"),o=require("@chakra-ui/icons"),u=require("axios"),i=require("react-select-async-paginate"),c=require("react-select/creatable"),d=require("@aminbaghbanzadeh/chakra-tree-view"),f=require("@hookform/resolvers/yup"),s=require("fast-deep-equal/react"),m=require("yup");function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var v=p(n),g=p(u),h=p(c),b=p(s),E=function(){return(E=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function S(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n}function y(e,t,n,l){return new(n||(n=Promise))((function(a,r){function o(e){try{i(l.next(e))}catch(e){r(e)}}function u(e){try{i(l.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}i((l=l.apply(e,t||[])).next())}))}function C(e,t){var n,l,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function u(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,u[0]&&(o=0)),o;)try{if(n=1,l&&(a=2&u[0]?l.return:u[0]?l.throw||((a=l.return)&&a.call(l),0):l.next)&&!(a=a.call(l,u[1])).done)return a;switch(l=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,l=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){o.label=u[1];break}if(6===u[0]&&o.label<a[1]){o.label=a[1],a=u;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(u);break}a[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],l=0}finally{n=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}function k(e,t,n){if(n||2===arguments.length)for(var l,a=0,r=t.length;a<r;a++)!l&&a in t||(l||(l=Array.prototype.slice.call(t,0,a)),l[a]=t[a]);return e.concat(l||Array.prototype.slice.call(t))}var w=function(e){var t=[/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g],n=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g];if("string"==typeof e)for(var l=0;l<10;l++)e=e.replace(t[l],l.toString()).replace(n[l],l.toString());return e},x=n.forwardRef((function(e,n){var l=S(e,[]);return v.default.createElement(t.Checkbox,E({},l,{isChecked:l.checked,onChange:l.onChange,ref:n}),l.title)})),P=function(){return v.default.createElement(t.HStack,{spacing:"2"},v.default.createElement(t.Skeleton,{h:"5",rounded:"sm",w:"5"}),v.default.createElement(t.Skeleton,{h:"5",rounded:"sm",w:"40"}))},F=function(e){var t,n=S(e,[]);return v.default.createElement(a.Editor,E({},n.editorProps,{value:n.value,tinymceScriptSrc:process.env.PUBLIC_URL+"/tinymce/tinymce.min.js",onEditorChange:function(e){return n.onChange(e)},init:E({directionality:"rtl",language:"fa",mobile:{menubar:!1,toolbar:"undo redo | formatselect | bold italic backcolor"},menubar:!1,height:300,plugins:["lists","directionality"],toolbar:"undo redo | ltr rtl | blocks |  formatselect | bold italic  | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | "},null===(t=n.editorProps)||void 0===t?void 0:t.init)}))},V=n.forwardRef((function(e,n){var l=S(e,[]);return v.default.createElement(t.NumberInput,E({ref:n},l,{size:"sm",inputMode:"numeric",min:0,max:1/0,value:l.value||0===l.value?NaN==l.value?"":l.value:""}),v.default.createElement(t.NumberInputField,{bg:"#F0F5F7",p:"6"}),v.default.createElement(t.NumberInputStepper,null,v.default.createElement(t.NumberIncrementStepper,null),v.default.createElement(t.NumberDecrementStepper,null)))})),I=n.forwardRef((function(e,l){var a=e.showPasswordStatusScreen,u=e.passwordPolicies,i=S(e,["showPasswordStatusScreen","passwordPolicies"]),c=v.default.useState(!1),d=c[0],f=c[1],s=n.useRef(null);return v.default.createElement(t.Box,null,v.default.createElement(t.InputGroup,null,v.default.createElement(t.Input,E({_focus:{bg:"white",border:"1px solid #1967D2"},bg:"#f0f5f7",p:"6",color:"#696969"},i,{onChange:i.onChange,ref:function(e){l(e),s.current=e},value:i.value||"",type:d?"text":"password"})),v.default.createElement(t.InputRightElement,{width:"4.5rem",top:"calc(50% - 1.25rem)"},v.default.createElement(t.IconButton,{"aria-label":"toggle password showing",icon:d?v.default.createElement(o.ViewOffIcon,null):v.default.createElement(o.ViewIcon,null),onClick:function(){return f(!d)}}))),a&&v.default.createElement(r.PasswordChecker,E({},u,{ref:s})))})),z=function(e){var n=S(e,[]);return v.default.createElement(t.Center,{dir:"ltr"},v.default.createElement(t.HStack,null,v.default.createElement(t.PinInput,{otp:!0,onChange:function(e){return n.onChange(e)},isInvalid:n.isInvalid,autoFocus:!0,size:"lg"},k([],Array(n.count)).map((function(e,n){return v.default.createElement(t.PinInputField,{key:n})})))))},R=function(e){var l=S(e,[]),a=n.useState(l.options),r=a[0],o=a[1];return n.useEffect((function(){l.fetchUrl&&g.default.get(l.fetchUrl).then((function(e){o((function(){var t;return Array.isArray(e.data)?e.data:e.data[null!==(t=l.resultFieldName)&&void 0!==t?t:"items"]}))}))}),[l.fetchUrl]),v.default.createElement(t.RadioGroup,{mt:"4",value:l.value||void 0,onChange:l.onChange,name:l.name},v.default.createElement(t.Stack,{spacing:2},null==r?void 0:r.map((function(e){return v.default.createElement(t.Radio,E({},l.radioProps,{key:e.value,value:e.value.toString()}),e.label)})),!r&&Array(5).fill(0).map((function(e,n){return v.default.createElement(t.HStack,{key:n},v.default.createElement(t.SkeletonCircle,{boxSize:"20px"}),v.default.createElement(t.Skeleton,{h:"5",w:"48"}))}))))},T=function(e){return{control:function(t,n){var l;return E(E({},t),{padding:"0.2rem",backgroundColor:null!==(l=e.backgroundColor)&&void 0!==l?l:"#f0f5f7",border:"2px solid !impoetant",borderWidth:"2px !important",borderColor:e.isInvalid?"#e53e3e !important":n.isFocused?"#1967d2":"#E2E8F0 !important",borderRadius:"0.375rem","&hover":{borderColor:"#cbd5e0 !important"}})},input:function(e){return E(E({},e),{color:"#696969",fontSize:"0.875rem"})},valueContainer:function(e){return E(E({},e),{color:"#696969",fontSize:"0.875rem"})},indicatorSeparator:function(e){return E(E({},e),{display:"none"})},indicatorsContainer:function(e){return E(E({},e),{color:"black"})},option:function(e,t){return E(E({},e),{color:t.isSelected?"white":"black",padding:"0.2rem",paddingRight:"0.5rem",fontFamily:"inherit !important",fontSize:"0.875rem",backgroundColor:t.isSelected?"#0385ff":"#f0f5f7","&:hover":E(E({},e),{fontSize:"0.875rem",padding:"0.2rem",color:"white",backgroundColor:"#0385ff !important"}),"&:focus":E(E({},e),{fontSize:"0.875rem",padding:"0.2rem",color:"white",backgroundColor:"#0385ff !important"}),"&:active":E(E({},e),{fontSize:"0.875rem",padding:"0.2rem",color:"white",backgroundColor:"#0385ff !important"})})},loadingMessage:function(e,t){return E(E({},e),{fontSize:"0.875rem"})},noOptionsMessage:function(e,t){return E(E({},e),{fontSize:"0.875rem"})},multiValue:function(e,t){return E(E({},e),{background:"#d5e1f6",fontSize:"0.875rem",padding:"0.2rem 0.4rem"})},menu:function(e,t){return E(E({},e),{zIndex:"2 !important",marginTop:"0"})},menuList:function(e,t){return E(E({},e),{backgroundColor:"#f0f5f7"})}}},M=i.withAsyncPaginate(h.default),O=n.forwardRef((function(e,a){var r,u=S(e,[]),c=l.useWatch({name:(null===(r=u.dependentTo)||void 0===r?void 0:r.fieldName)||"",disabled:!u.dependentTo}),d=n.useCallback((function(e,t){return y(void 0,void 0,void 0,(function(){var n,l,a,r;return C(this,(function(o){switch(o.label){case 0:return[4,g.default.get(u.fetchUrl.replace(":query",e).replace(":offsetCount",t.length).replace(":dependent",null===(l=u.dependentTo)||void 0===l?void 0:l.valueExtractor(c)),E({},!!u.requestHeaders&&{headers:E({},u.requestHeaders)}))];case 1:return n=o.sent(),[2,{options:Array.isArray(n.data)?n.data:n.data[null!==(a=u.resultFieldName)&&void 0!==a?a:"items"],hasMore:Array.isArray(n.data)?n.data.length>t.length:n.data[null!==(r=u.totalCountFieldName)&&void 0!==r?r:"totalCount"]>t.length}]}}))}))}),[c]);return u.isCreatable?v.default.createElement(M,E({styles:T(u),isRtl:!0,placeholder:"انتخاب کنید.",isClearable:!0,isSearchable:!0,selectRef:a,defaultValue:u.value,noOptionsMessage:function(e){return"گزینه ای مرتبط با "+e.inputValue+" یافت نشد."},loadingMessage:function(){return"در حال بارگزاری..."},onChange:function(e,t){return u.onChange(e,t)},components:{LoadingIndicator:function(){return v.default.createElement(t.Spinner,{size:"sm",colorScheme:"blue"})}},debounceTimeout:2e3,formatCreateLabel:function(e){return v.default.createElement(t.HStack,null,v.default.createElement(o.SearchIcon,null),v.default.createElement(t.Text,null,'"',e,'"'))}},u,{loadOptions:d})):v.default.createElement(i.AsyncPaginate,E({styles:T(u),placeholder:"انتخاب کنید.",noOptionsMessage:function(e){return"گزینه ای مرتبط با "+e.inputValue+" یافت نشد."},isClearable:!0,isSearchable:!0,selectRef:a,defaultValue:u.value,debounceTimeout:2e3,loadingMessage:function(){return"در حال بارگزاری..."},onChange:function(e,t){return u.onChange(e,t)},components:{LoadingIndicator:function(){return v.default.createElement(t.Spinner,{size:"sm",colorScheme:"blue"})}}},u,{isDisabled:!!u.dependentTo&&!c,key:u.dependentTo?u.dependentTo.valueExtractor(c):u.name,loadOptions:d}))})),q=n.forwardRef((function(e,t){var l,a,r=S(e,[]),o=n.useState(),u=o[0],i=o[1],c=n.useState(null!==(l=r.value)&&void 0!==l?l:[]),d=c[0],f=c[1];n.useEffect((function(){r.value&&f(r.value)}),[r.value]);var s=n.useCallback((function(e){i(e)}),[]),m=n.useCallback((function(e){if(u)switch(e.key){case"Enter":case"Tab":e.preventDefault(),e.stopPropagation(),i(""),f((function(e){return k(k([],e),[{label:u,value:u}])})),r.onChange(d.map((function(e){return e.value})).concat(u).join(",")),i("")}}),[u]),p=n.useCallback((function(e,t){r.onChange(e.map((function(e){return e.value})).join(",")),f(e)}),[f]);return v.default.createElement(h.default,E({styles:T(r)},r,{ref:t,placeholder:null!==(a=r.placeholder)&&void 0!==a?a:"انتخاب کنید.",components:{DropdownIndicator:null},inputValue:u,isMulti:!0,menuIsOpen:!1,onChange:p,onInputChange:s,onKeyDown:m,value:d,formatCreateLabel:function(e){return'درج " '+e+' "'},allowCreateWhileLoading:!0}))})),A=n.forwardRef((function(e,n){var l=S(e,[]);return l.options?v.default.createElement(N,E({ref:n},l)):l.fetchUrl?v.default.createElement(D,E({ref:n},l)):v.default.createElement(t.Select,null)})),N=n.forwardRef((function(e,n){var l,a=S(e,[]);return v.default.createElement(t.Select,E({},a,{ref:n,onChange:a.onChange,bg:"#F0F5F7",size:"lg",fontSize:"sm"}),null===(l=a.options)||void 0===l?void 0:l.map((function(e){return v.default.createElement("option",{value:e.value,key:e.value},e.label)})))})),D=n.forwardRef((function(e,n){return S(e,[]),v.default.createElement(t.Box,null)})),H=function(){return v.default.createElement(t.Skeleton,{h:"12",w:"full",borderRadius:"8px"})},L=function(e){var l,a,r=S(e,[]),o=n.useState(null!==(l=r.defaultValue)&&void 0!==l?l:[10,100]),u=o[0],i=o[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement(t.RangeSlider,E({"aria-label":["min","max"],min:r.min,max:r.max,defaultValue:r.defaultValue},r,{value:null!==(a=r.value)&&void 0!==a?a:u,width:"full",onChangeEnd:function(e){i(e),r.onChange(e)},onChange:function(e){i(e)},size:"md"}),v.default.createElement(t.RangeSliderTrack,null,v.default.createElement(t.RangeSliderFilledTrack,null)),v.default.createElement(t.RangeSliderThumb,{index:0,width:16,height:6},v.default.createElement(t.Box,{color:"primary.500",fontSize:"2xs"},"حداقل (",u[0],")")),v.default.createElement(t.RangeSliderThumb,{index:1,width:16,height:6},v.default.createElement(t.Box,{color:"primary.500",fontSize:"2xs"},"حداکثر (",u[1],")"))))},B=function(){return"ontouchstart"in window||navigator.maxTouchPoints>0};function j(e,t){switch(t.type){case"PointerMove":return E(E({},e),{hoverValue:t.payload});case"PointerLeave":return{defaultValue:e.defaultValue,hoverValue:null};case"MouseClick":return E(E({},e),{defaultValue:t.payload});default:return e}}function U(e){var l,a=e.onClick,r=e.initialValue,u=void 0===r?0:r,i=e.ratingValue,c=void 0===i?0:i,d=e.iconsCount,f=void 0===d?5:d,s=e.size,m=void 0===s?20:s,p=e.readonly,g=void 0!==p&&p,h=e.fillColor,b=void 0===h?"#ffbc0b":h,S=e.fillColorArray,y=void 0===S?[]:S,C=e.emptyColor,w=void 0===C?"#cccccc":C,x=e.fullIcon,P=void 0===x?null:x,F=e.emptyIcon,V=void 0===F?null:F,I=e.customIcons,z=void 0===I?[]:I,R=e.rtl,T=void 0!==R&&R,M=e.allowHalfIcon,O=void 0!==M&&M,q=e.allowHover,A=void 0===q||q,N=e.transition,D=void 0!==N&&N,H=e.className,L=void 0===H?"react-simple-star-rating":H,U=e.style,_=e.fullClassName,W=void 0===_?"filled-icons":_,G=e.emptyClassName,$=void 0===G?"empty-icons":G,K=e.fullStyle,X=e.emptyStyle,J=e.showTooltip,Q=void 0!==J&&J,Y=e.tooltipDefaultText,Z=void 0===Y?"امتیاز":Y,ee=e.tooltipArray,te=void 0===ee?[]:ee;e.tooltipClassName,e.tooltipStyle;var ne=n.useReducer(j,{defaultValue:c,hoverValue:null}),le=ne[0],ae=le.defaultValue,re=le.hoverValue,oe=ne[1];v.default.useEffect((function(){return oe({type:"MouseClick",payload:c})}),[c]);var ue=function(e){var t=e.clientX,n=e.currentTarget.children[0].getBoundingClientRect(),l=n.left,a=n.right,r=n.width,o=function(e,t,n){for(var l=100/e,a=n/e,r=100,o=0;o<e;o+=1)if(t<=a*o+a/4){r=0===o&&t<a/2?0:l*o;break}return r}(fe,T?a-t:t-l,r);o>0&&re!==o&&oe({type:"PointerMove",payload:o})},ie=function(){re&&(oe({type:"MouseClick",payload:re}),a&&a(re/20))},ce=n.useMemo((function(){return Math.round(u/f*100)}),[u,f]),de=n.useMemo((function(){return A&&re&&re||ae&&ae||ce}),[A,re,ae,ce]),fe=n.useMemo((function(){return O?2*f:f}),[O,f]),se=n.useCallback((function(e){var t=1;return e&&(t=O?e/fe:e/2/10),Math.round(t-1)}),[O,fe]),me=n.useCallback((function(e){return O?e/2/10:se(e)+1}),[O,se]),pe=function(e){return te.length>0?te[se(e)]:me(e)||0};return v.default.createElement(t.Tooltip,{isDisabled:!Q,label:re&&pe(re)||ae&&pe(ae)||ce&&pe(ce)||Z},v.default.createElement("span",{style:{display:"inline-block",direction:T?"rtl":"ltr",touchAction:"none",position:"relative"}},v.default.createElement("span",{className:L,style:E({position:"relative",display:"inline-block",overflow:"hidden",whiteSpace:"nowrap",cursor:g?"":"pointer",verticalAlign:"middle",userSelect:"none"},U),onPointerMove:g?void 0:ue,onPointerEnter:g?void 0:function(e){B()&&ue(e)},onPointerLeave:g?void 0:function(){B()&&ie(),oe({type:"PointerLeave"})},onClick:g?void 0:ie,"aria-hidden":"true"},v.default.createElement("span",{className:$,style:E({display:"inline-block",color:w},X)},k([],Array(f)).map((function(e,t){var l;return v.default.createElement(n.Fragment,{key:t},(null===(l=z[t])||void 0===l?void 0:l.icon)||V||v.default.createElement(o.StarIcon,{key:t,boxSize:null!=m?m:{base:5,md:8,lg:10},style:{display:"inline-block"}}))}))),v.default.createElement("span",{className:W,style:E((l={position:"absolute",top:0},l[T?"right":"left"]=0,l.color=A&&re&&y[se(re)]||ae&&y[se(ae)]||b,l.overflow="hidden",l.whiteSpace="nowrap",l.display="inline-block",l.transition=D?"width .2s ease, color .2s ease":"",l.width=de+"%",l),K)},k([],Array(f)).map((function(e,t){var l;return v.default.createElement(n.Fragment,{key:t},(null===(l=z[t])||void 0===l?void 0:l.icon)||P||v.default.createElement(o.StarIcon,{boxSize:null!=m?m:{base:5,md:8,lg:10},display:"initial",style:{display:"inline-block"}}))}))))))}var _=function(e){var n=S(e,[]);return v.default.createElement(t.Switch,{onChange:n.onChange})},W=function(e){var n=S(e,[]);return v.default.createElement(t.Textarea,E({},n,{value:n.value||"",bg:"#F0F5F7"}))},G=function(){return v.default.createElement(t.Skeleton,{h:"28",w:"full"})},$=n.forwardRef((function(e,n){var l=S(e,[]);return v.default.createElement(t.Input,E({_focus:{bg:"white",border:"1px solid #1967D2"},bg:"#f0f5f7",p:"1.36rem",color:"#696969"},l,{onChange:l.onChange,ref:n,value:l.value||""}))})),K=function(e){var n=e.width;return v.default.createElement(t.Skeleton,{h:"12",w:n||"full",borderRadius:"8px"})},X=function(){return v.default.createElement(t.VStack,{alignItems:"start"},v.default.createElement(t.HStack,null,v.default.createElement(t.Skeleton,{boxSize:4}),v.default.createElement(t.Skeleton,{w:20,h:3})),v.default.createElement(t.VStack,{alignItems:"start",ps:6},v.default.createElement(t.HStack,null,v.default.createElement(t.Skeleton,{boxSize:4}),v.default.createElement(t.Skeleton,{w:20,h:3})),v.default.createElement(t.VStack,{alignItems:"start",ps:6},v.default.createElement(t.HStack,null,v.default.createElement(t.Skeleton,{boxSize:4}),v.default.createElement(t.Skeleton,{w:20,h:3})),v.default.createElement(t.HStack,null,v.default.createElement(t.Skeleton,{boxSize:4}),v.default.createElement(t.Skeleton,{w:20,h:3})),v.default.createElement(t.HStack,null,v.default.createElement(t.Skeleton,{boxSize:4}),v.default.createElement(t.Skeleton,{w:20,h:3}))),v.default.createElement(t.HStack,null,v.default.createElement(t.Skeleton,{boxSize:4}),v.default.createElement(t.Skeleton,{w:20,h:3})),v.default.createElement(t.HStack,null,v.default.createElement(t.Skeleton,{boxSize:4}),v.default.createElement(t.Skeleton,{w:20,h:3}))))},J=function(e){var l=S(e,[]),a=n.useState(),r=a[0],o=a[1],u=t.useDisclosure(),i=u.isOpen,c=u.onToggle;return n.useEffect((function(){g.default.get(l.fetchUrl,{headers:E({},l.requestHeaders)}).then((function(e){return o(e.data)}))}),[]),v.default.createElement(v.default.Fragment,null,!l.inline&&v.default.createElement(t.Button,E({onClick:c},l.btnProps),l.btnText),v.default.createElement(t.Collapse,{in:!!l.inline||i,animateOpacity:!0},!!l.data||!!r&&v.default.createElement(d.Tree,E({},l,{data:l.data?l.data:l.treeDataTransformer(r)})),!r&&!l.data&&v.default.createElement(X,null)))},Q=v.default.createContext(void 0);function Y(){var e=v.default.useContext(Q);if(void 0===e)throw new Error("useAminook must be used within a FormBuilder Tag");return e}var Z=n.forwardRef((function(n,a){var r,o,u,i,c=S(n,[]),d=Y(),f=d.formSchema,s=d.isDefaultValueFetching,m=l.useFormContext().setValue,p=f.fields[c.name],g=null!==(r=null==p?void 0:p.meta)&&void 0!==r?r:c.fieldSetting,h={name:c.name,value:c.value};return v.default.createElement(t.Box,{my:c.my,mx:c.mx,display:"inline-block",w:null!==(o=c.width)&&void 0!==o?o:"full"},v.default.createElement(t.FormControl,{display:c.hidden?"none":"initial",isInvalid:!!c.error,isRequired:null!==(u=null==p?void 0:p.tests.some((function(e){return"required"===e.name})))&&void 0!==u&&u},!(null==c?void 0:c.hideLabel)&&"checkbox"!==g.type&&v.default.createElement(t.FormLabel,{htmlFor:c.name,fontSize:"sm",fontWeight:"bold",color:s?"gray.300":"#202124"},(null==p?void 0:p.label)?null==p?void 0:p.label:null==c?void 0:c.label),function(){var n,l,r,o,u,i,d;switch(null!==(n=null==g?void 0:g.type)&&void 0!==n?n:null==g?void 0:g.type){case"input-text":case"input-mask":return s?v.default.createElement(K,{width:null===(l=(null==g?void 0:g.fieldProps).width)||void 0===l?void 0:l.toString()}):v.default.createElement($,E({ref:a},E(E({},h),null==g?void 0:g.fieldProps),{onChange:function(e){c.onChange(w(e.target.value))}}));case"input-password":return s?v.default.createElement(K,{width:null===(r=(null==g?void 0:g.fieldProps).width)||void 0===r?void 0:r.toString()}):v.default.createElement(I,E({ref:a},E(E({},h),null==g?void 0:g.fieldProps),{onChange:function(e){c.onChange(w(e.target.value))}}));case"input-number":return s?v.default.createElement(K,{width:null===(o=(null==g?void 0:g.fieldProps).width)||void 0===o?void 0:o.toString()}):v.default.createElement(V,E({ref:a},E(E({},h),null==g?void 0:g.fieldProps),{onChange:function(e,t){c.onChange(t)}}));case"checkbox":return s?v.default.createElement(P,null):v.default.createElement(x,E({ref:a},null==g?void 0:g.fieldProps,h,{checked:h.value,title:null!==(u=null==p?void 0:p.label)&&void 0!==u?u:c.label,onChange:function(e){return c.onChange(e.target.checked,e)}}));case"select":return s?v.default.createElement(H,null):v.default.createElement(A,E({ref:a},null==g?void 0:g.fieldProps,h,{onChange:function(e){return c.onChange(e.target.value,e)}}));case"switch":return v.default.createElement(_,E({},h,null==g?void 0:g.fieldProps,{onChange:function(e){return c.onChange(e.target.checked)}}));case"text-area":return s?v.default.createElement(G,null):v.default.createElement(W,E({},h,null==g?void 0:g.fieldProps,{onChange:function(e){return c.onChange(e.target.value,e)}}));case"slider":return v.default.createElement(L,E({},c,null==g?void 0:g.fieldProps,{onChange:function(e){c.name.split("_").forEach((function(t,n){return m(""+t,e[n])}))}}));case"input-pin":return v.default.createElement(z,E({},h,null==g?void 0:g.fieldProps,{isInvalid:!!c.error,onChange:function(e){return c.onChange(e)}}));case"editor":return v.default.createElement(F,E({},null==g?void 0:g.fieldProps,{value:c.value,onChange:function(e){return c.onChange(e)}}));case"uploader":return s?v.default.createElement(e.ChakraFileUploaderSkeleton,E({},null==g?void 0:g.fieldProps)):v.default.createElement(e.ChakraFileUploader,E({},null==g?void 0:g.fieldProps));case"reach-select":return s?v.default.createElement(H,null):v.default.createElement(O,E({ref:a},null==g?void 0:g.fieldProps,{isInvalid:!!c.error,isDisabled:c.isDisabled},h,{onChange:function(e){c.onChange(e)}}));case"input-tag":return s?v.default.createElement(K,null):v.default.createElement(q,E({ref:a},null==g?void 0:g.fieldProps,{isInvalid:!!c.error},h,{onChange:function(e){c.onChange(e)},value:c.value?null===(d=null===(i=c.value)||void 0===i?void 0:i.split(","))||void 0===d?void 0:d.map((function(e){return{value:e,label:e}})):void 0}));case"tree-view":return v.default.createElement(J,E({},null==g?void 0:g.fieldProps,h,{onChange:function(e){c.onChange(e)},defaultSelected:c.value}));case"radio-group":return v.default.createElement(R,E({},null==g?void 0:g.fieldProps,{name:c.name,value:c.value,onChange:function(e){c.onChange(e)}}));case"star-picker":return v.default.createElement(U,E({},null==g?void 0:g.fieldProps,h,{onClick:function(e){c.onChange(e)},initialValue:c.value}));default:return v.default.createElement(t.Box,null,"Unrecognized field type.")}}(),!!(null==c?void 0:c.helperText)&&v.default.createElement(t.FormHelperText,{fontSize:"xs"},null==c?void 0:c.helperText),!!c.error&&!c.hideError&&v.default.createElement(t.FormErrorMessage,{fontSize:"xs"},null===(i=c.error)||void 0===i?void 0:i.message)))})),ee=[/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g],te=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g],ne=m.string().transform((function(e,t){return m.string().isType(e)&&null!==e?function(e){if("string"==typeof e)for(var t=0;t<10;t++)e=e.replace(ee[t],""+t).replace(te[t],""+t);return e}(e):e}));exports.ControlledFormControl=function(e){var t=S(e,[]),n=Y().control;return v.default.createElement(l.Controller,{name:t.name,control:n,render:function(e){var n=e.field,l=e.fieldState;return e.formState,v.default.createElement(Z,E({error:l.error},E(E(E({},t),l),n)))}})},exports.FormBuilder=function(e){var t,a=this,r=n.useState(!1),o=r[0],u=r[1],i=n.useRef(e.defaultValues);b.default(i.current,e.defaultValues)||(i.current=e.defaultValues);var c=n.useMemo((function(){return e.formSchema.describe()}),[]),d=l.useForm({mode:null!==(t=e.mode)&&void 0!==t?t:"onSubmit",resolver:f.yupResolver(e.formSchema),defaultValues:e.defaultValues?e.defaultValues:void 0});return n.useEffect((function(){console.log("test",d),e.defaultValues&&d.reset(e.defaultValues)}),[i.current]),v.default.createElement(Q.Provider,{value:{formSchema:c,control:d.control,isLoading:o,isError:!1,isDefaultValueFetching:e.isDefaultValueFetching}},v.default.createElement(l.FormProvider,E({},d),v.default.createElement("form",{id:e.id,noValidate:!0,style:{width:"100%"},onSubmit:d.handleSubmit((function(t){return y(a,void 0,void 0,(function(){var n;return C(this,(function(l){switch(l.label){case 0:return e.onSubmitSucess&&e.onSubmitSucess(t),e.mutationFunction?e.doesHaveRecaptcha?(u(!0),[4,e.getRecaptcha()]):[3,2]:[3,3];case 1:n=l.sent(),t=E(E({},t),{captchaToken:n}),u(!1),l.label=2;case 2:e.mutationFunction(t),l.label=3;case 3:return[2]}}))}))}),(function(e){}))},e.children)))},exports.FormControl=Z,exports.FormSubmitButton=function(e){e.type;var n=e.text;e.onClick;var a=S(e,["type","text","onClick"]),r=Y(),o=r.isLoading,u=r.isDefaultValueFetching;l.useFormContext().formState;var i=t.useDisclosure();return i.isOpen,i.onToggle,v.default.createElement(t.Button,E({isLoading:o||a.isLoading,disabled:u||o||a.isLoading,loadingText:"در حال ذخیره اطلاعات...",type:"submit",variant:"primary_dark"},a),n)},exports.Select=A,exports.inherentNumberString=ne,exports.mobileIranValidation=/09-?[0-9]{2}-?[0-9]{3}-?[0-9]{4}$/,exports.phoneNumberIranValidation=/^0[0-9]{2,}[0-9]{7,}$/,exports.selectWithValueExtractor=function(){return m.number().transform((function(e,t){return e?null==e?void 0:e.value:t?null==t?void 0:t.value:null}))},exports.useAminook=Y;
