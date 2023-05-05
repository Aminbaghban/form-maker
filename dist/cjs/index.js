"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@aminbaghbanzadeh/chakra-file-uploader"),t=require("@chakra-ui/react"),n=require("react"),a=require("react-hook-form"),r=require("@tinymce/tinymce-react"),l=require("@aminbaghbanzadeh/password-policies-screen"),o=require("@chakra-ui/icons"),u=require("axios"),i=require("react-select-async-paginate"),c=require("react-select/creatable"),d=require("@aminbaghbanzadeh/chakra-tree-view"),f=require("@hookform/resolvers/yup"),s=require("yup");function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=m(n),v=m(u),g=m(c),h=function(){return(h=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function b(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}function E(e,t,n,a){return new(n||(n=Promise))((function(r,l){function o(e){try{i(a.next(e))}catch(e){l(e)}}function u(e){try{i(a.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}i((a=a.apply(e,t||[])).next())}))}function S(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function u(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,u[0]&&(o=0)),o;)try{if(n=1,a&&(r=2&u[0]?a.return:u[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,u[1])).done)return r;switch(a=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,a=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){o.label=u[1];break}if(6===u[0]&&o.label<r[1]){o.label=r[1],r=u;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(u);break}r[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],a=0}finally{n=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}function y(e,t,n){if(n||2===arguments.length)for(var a,r=0,l=t.length;r<l;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var C=function(e){var t=[/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g],n=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g];if("string"==typeof e)for(var a=0;a<10;a++)e=e.replace(t[a],a.toString()).replace(n[a],a.toString());return e},k=n.forwardRef((function(e,n){var a=b(e,[]);return p.default.createElement(t.Checkbox,h({},a,{isChecked:a.checked,onChange:a.onChange,ref:n}),a.title)})),w=function(){return p.default.createElement(t.HStack,{spacing:"2"},p.default.createElement(t.Skeleton,{h:"5",rounded:"sm",w:"5"}),p.default.createElement(t.Skeleton,{h:"5",rounded:"sm",w:"40"}))},x=function(e){var t,n=b(e,[]);return p.default.createElement(r.Editor,h({},n.editorProps,{value:n.value,tinymceScriptSrc:process.env.PUBLIC_URL+"/tinymce/tinymce.min.js",onEditorChange:function(e){return n.onChange(e)},init:h({directionality:"rtl",language:"fa",mobile:{menubar:!1,toolbar:"undo redo | formatselect | bold italic backcolor"},menubar:!1,height:300,plugins:["lists","directionality"],toolbar:"undo redo | ltr rtl | blocks |  formatselect | bold italic  | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | "},null===(t=n.editorProps)||void 0===t?void 0:t.init)}))},P=n.forwardRef((function(e,n){var a=b(e,[]);return p.default.createElement(t.NumberInput,h({ref:n},a,{size:"sm",inputMode:"numeric",min:0,max:1/0,value:a.value||0===a.value?NaN==a.value?"":a.value:""}),p.default.createElement(t.NumberInputField,{bg:"#F0F5F7",p:"6"}),p.default.createElement(t.NumberInputStepper,null,p.default.createElement(t.NumberIncrementStepper,null),p.default.createElement(t.NumberDecrementStepper,null)))})),F=n.forwardRef((function(e,a){var r=e.showPasswordStatusScreen,u=e.passwordPolicies,i=b(e,["showPasswordStatusScreen","passwordPolicies"]),c=p.default.useState(!1),d=c[0],f=c[1],s=n.useRef(null);return p.default.createElement(t.Box,null,p.default.createElement(t.InputGroup,null,p.default.createElement(t.Input,h({_focus:{bg:"white",border:"1px solid #1967D2"},bg:"#f0f5f7",p:"6",color:"#696969"},i,{onChange:i.onChange,ref:function(e){a(e),s.current=e},value:i.value||"",type:d?"text":"password"})),p.default.createElement(t.InputRightElement,{width:"4.5rem",top:"calc(50% - 1.25rem)"},p.default.createElement(t.IconButton,{"aria-label":"toggle password showing",icon:d?p.default.createElement(o.ViewOffIcon,null):p.default.createElement(o.ViewIcon,null),onClick:function(){return f(!d)}}))),r&&p.default.createElement(l.PasswordChecker,h({},u,{ref:s})))})),V=function(e){var n=b(e,[]);return p.default.createElement(t.Center,{dir:"ltr"},p.default.createElement(t.HStack,null,p.default.createElement(t.PinInput,{otp:!0,onChange:function(e){return n.onChange(e)},isInvalid:n.isInvalid,autoFocus:!0,size:"lg"},y([],Array(n.count)).map((function(e,n){return p.default.createElement(t.PinInputField,{key:n})})))))},I=function(e){var a=b(e,[]),r=n.useState(a.options),l=r[0],o=r[1];return n.useEffect((function(){a.fetchUrl&&v.default.get(a.fetchUrl).then((function(e){o((function(){var t;return Array.isArray(e.data)?e.data:e.data[null!==(t=a.resultFieldName)&&void 0!==t?t:"items"]}))}))}),[a.fetchUrl]),p.default.createElement(t.RadioGroup,{mt:"4",value:a.value||void 0,onChange:a.onChange,name:a.name},p.default.createElement(t.Stack,{spacing:2},null==l?void 0:l.map((function(e){return p.default.createElement(t.Radio,h({},a.radioProps,{key:e.value,value:e.value.toString()}),e.label)})),!l&&Array(5).fill(0).map((function(e,n){return p.default.createElement(t.HStack,{key:n},p.default.createElement(t.SkeletonCircle,{boxSize:"20px"}),p.default.createElement(t.Skeleton,{h:"5",w:"48"}))}))))},z=function(e){return{control:function(t,n){var a;return h(h({},t),{padding:"0.2rem",backgroundColor:null!==(a=e.backgroundColor)&&void 0!==a?a:"#f0f5f7",border:"2px solid !impoetant",borderWidth:"2px !important",borderColor:e.isInvalid?"#e53e3e !important":n.isFocused?"#1967d2":"#E2E8F0 !important",borderRadius:"0.375rem","&hover":{borderColor:"#cbd5e0 !important"}})},input:function(e){return h(h({},e),{color:"#696969",fontSize:"0.875rem"})},valueContainer:function(e){return h(h({},e),{color:"#696969",fontSize:"0.875rem"})},indicatorSeparator:function(e){return h(h({},e),{display:"none"})},indicatorsContainer:function(e){return h(h({},e),{color:"black"})},option:function(e,t){return h(h({},e),{color:t.isSelected?"white":"black",padding:"0.2rem",paddingRight:"0.5rem",fontFamily:"inherit !important",fontSize:"0.875rem",backgroundColor:t.isSelected?"#0385ff":"#f0f5f7","&:hover":h(h({},e),{fontSize:"0.875rem",padding:"0.2rem",color:"white",backgroundColor:"#0385ff !important"}),"&:focus":h(h({},e),{fontSize:"0.875rem",padding:"0.2rem",color:"white",backgroundColor:"#0385ff !important"}),"&:active":h(h({},e),{fontSize:"0.875rem",padding:"0.2rem",color:"white",backgroundColor:"#0385ff !important"})})},loadingMessage:function(e,t){return h(h({},e),{fontSize:"0.875rem"})},noOptionsMessage:function(e,t){return h(h({},e),{fontSize:"0.875rem"})},multiValue:function(e,t){return h(h({},e),{background:"#d5e1f6",fontSize:"0.875rem",padding:"0.2rem 0.4rem"})},menu:function(e,t){return h(h({},e),{zIndex:"2 !important",marginTop:"0"})},menuList:function(e,t){return h(h({},e),{backgroundColor:"#f0f5f7"})}}},T=i.withAsyncPaginate(g.default),R=n.forwardRef((function(e,r){var l,u=b(e,[]),c=a.useWatch({name:(null===(l=u.dependentTo)||void 0===l?void 0:l.fieldName)||"",disabled:!u.dependentTo}),d=n.useCallback((function(e,t){return E(void 0,void 0,void 0,(function(){var n,a,r,l;return S(this,(function(o){switch(o.label){case 0:return[4,v.default.get(u.fetchUrl.replace(":query",e).replace(":offsetCount",t.length).replace(":dependent",null===(a=u.dependentTo)||void 0===a?void 0:a.valueExtractor(c)))];case 1:return n=o.sent(),[2,{options:Array.isArray(n.data)?n.data:n.data[null!==(r=u.resultFieldName)&&void 0!==r?r:"items"],hasMore:Array.isArray(n.data)?n.data.length>t.length:n.data[null!==(l=u.totalCountFieldName)&&void 0!==l?l:"totalCount"]>t.length}]}}))}))}),[c]);return u.isCreatable?p.default.createElement(T,h({styles:z(u),isRtl:!0,placeholder:"انتخاب کنید.",isClearable:!0,isSearchable:!0,selectRef:r,defaultValue:u.value,noOptionsMessage:function(e){return"گزینه ای مرتبط با "+e.inputValue+" یافت نشد."},loadingMessage:function(){return"در حال بارگزاری..."},onChange:function(e,t){return u.onChange(e,t)},components:{LoadingIndicator:function(){return p.default.createElement(t.Spinner,{size:"sm",colorScheme:"blue"})}},debounceTimeout:2e3,formatCreateLabel:function(e){return p.default.createElement(t.HStack,null,p.default.createElement(o.SearchIcon,null),p.default.createElement(t.Text,null,'"',e,'"'))}},u,{loadOptions:d})):p.default.createElement(i.AsyncPaginate,h({styles:z(u),placeholder:"انتخاب کنید.",noOptionsMessage:function(e){return"گزینه ای مرتبط با "+e.inputValue+" یافت نشد."},isClearable:!0,isSearchable:!0,selectRef:r,defaultValue:u.value,debounceTimeout:2e3,loadingMessage:function(){return"در حال بارگزاری..."},onChange:function(e,t){return u.onChange(e,t)},components:{LoadingIndicator:function(){return p.default.createElement(t.Spinner,{size:"sm",colorScheme:"blue"})}}},u,{isDisabled:!!u.dependentTo&&!c,key:u.dependentTo?u.dependentTo.valueExtractor(c):u.name,loadOptions:d}))})),M=n.forwardRef((function(e,t){var a,r,l=b(e,[]),o=n.useState(),u=o[0],i=o[1],c=n.useState(null!==(a=l.value)&&void 0!==a?a:[]),d=c[0],f=c[1];n.useEffect((function(){l.value&&f(l.value)}),[l.value]);var s=n.useCallback((function(e){i(e)}),[]),m=n.useCallback((function(e){if(u)switch(e.key){case"Enter":case"Tab":e.preventDefault(),e.stopPropagation(),i(""),f((function(e){return y(y([],e),[{label:u,value:u}])})),l.onChange(d.map((function(e){return e.value})).concat(u).join(",")),i("")}}),[u]),v=n.useCallback((function(e,t){l.onChange(e.map((function(e){return e.value})).join(",")),f(e)}),[f]);return p.default.createElement(g.default,h({styles:z(l)},l,{ref:t,placeholder:null!==(r=l.placeholder)&&void 0!==r?r:"انتخاب کنید.",components:{DropdownIndicator:null},inputValue:u,isMulti:!0,menuIsOpen:!1,onChange:v,onInputChange:s,onKeyDown:m,value:d,formatCreateLabel:function(e){return'درج " '+e+' "'},allowCreateWhileLoading:!0}))})),O=n.forwardRef((function(e,n){var a=b(e,[]);return a.options?p.default.createElement(A,h({ref:n},a)):a.fetchUrl?p.default.createElement(N,h({ref:n},a)):p.default.createElement(t.Select,null)})),A=n.forwardRef((function(e,n){var a,r=b(e,[]);return p.default.createElement(t.Select,h({},r,{ref:n,onChange:r.onChange,bg:"#F0F5F7",size:"lg",fontSize:"sm"}),null===(a=r.options)||void 0===a?void 0:a.map((function(e){return p.default.createElement("option",{value:e.value,key:e.value},e.label)})))})),N=n.forwardRef((function(e,n){return b(e,[]),p.default.createElement(t.Box,null)})),D=function(){return p.default.createElement(t.Skeleton,{h:"12",w:"full",borderRadius:"8px"})},L=function(e){var a,r=b(e,[]),l=n.useState(null!==(a=r.defaultValue)&&void 0!==a?a:[10,100]),o=l[0],u=l[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement(t.RangeSlider,h({"aria-label":["min","max"],min:r.min,max:r.max,defaultValue:r.defaultValue},r,{width:"full",onChangeEnd:function(e){u(e),r.onChange(e)},onChange:function(e){u(e)},size:"md"}),p.default.createElement(t.RangeSliderTrack,null,p.default.createElement(t.RangeSliderFilledTrack,null)),p.default.createElement(t.RangeSliderThumb,{index:0,width:16,height:6},p.default.createElement(t.Box,{color:"primary.500",fontSize:"2xs"},"حداقل (",o[0],")")),p.default.createElement(t.RangeSliderThumb,{index:1,width:16,height:6},p.default.createElement(t.Box,{color:"primary.500",fontSize:"2xs"},"حداکثر (",o[1],")"))))},q=function(){return"ontouchstart"in window||navigator.maxTouchPoints>0};function H(e,t){switch(t.type){case"PointerMove":return h(h({},e),{hoverValue:t.payload});case"PointerLeave":return{defaultValue:e.defaultValue,hoverValue:null};case"MouseClick":return h(h({},e),{defaultValue:t.payload});default:return e}}function B(e){var a,r=e.onClick,l=e.initialValue,u=void 0===l?0:l,i=e.ratingValue,c=void 0===i?0:i,d=e.iconsCount,f=void 0===d?5:d,s=e.size,m=void 0===s?20:s,v=e.readonly,g=void 0!==v&&v,b=e.fillColor,E=void 0===b?"#ffbc0b":b,S=e.fillColorArray,C=void 0===S?[]:S,k=e.emptyColor,w=void 0===k?"#cccccc":k,x=e.fullIcon,P=void 0===x?null:x,F=e.emptyIcon,V=void 0===F?null:F,I=e.customIcons,z=void 0===I?[]:I,T=e.rtl,R=void 0!==T&&T,M=e.allowHalfIcon,O=void 0!==M&&M,A=e.allowHover,N=void 0===A||A,D=e.transition,L=void 0!==D&&D,B=e.className,j=void 0===B?"react-simple-star-rating":B,U=e.style,_=e.fullClassName,W=void 0===_?"filled-icons":_,G=e.emptyClassName,$=void 0===G?"empty-icons":G,K=e.fullStyle,X=e.emptyStyle,J=e.showTooltip,Q=void 0!==J&&J,Y=e.tooltipDefaultText,Z=void 0===Y?"امتیاز":Y,ee=e.tooltipArray,te=void 0===ee?[]:ee;e.tooltipClassName,e.tooltipStyle;var ne=n.useReducer(H,{defaultValue:c,hoverValue:null}),ae=ne[0],re=ae.defaultValue,le=ae.hoverValue,oe=ne[1];p.default.useEffect((function(){return oe({type:"MouseClick",payload:c})}),[c]);var ue=function(e){var t=e.clientX,n=e.currentTarget.children[0].getBoundingClientRect(),a=n.left,r=n.right,l=n.width,o=function(e,t,n){for(var a=100/e,r=n/e,l=100,o=0;o<e;o+=1)if(t<=r*o+r/4){l=0===o&&t<r/2?0:a*o;break}return l}(fe,R?r-t:t-a,l);o>0&&le!==o&&oe({type:"PointerMove",payload:o})},ie=function(){le&&(oe({type:"MouseClick",payload:le}),r&&r(le/20))},ce=n.useMemo((function(){return Math.round(u/f*100)}),[u,f]),de=n.useMemo((function(){return N&&le&&le||re&&re||ce}),[N,le,re,ce]),fe=n.useMemo((function(){return O?2*f:f}),[O,f]),se=n.useCallback((function(e){var t=1;return e&&(t=O?e/fe:e/2/10),Math.round(t-1)}),[O,fe]),me=n.useCallback((function(e){return O?e/2/10:se(e)+1}),[O,se]),pe=function(e){return te.length>0?te[se(e)]:me(e)||0};return p.default.createElement(t.Tooltip,{isDisabled:!Q,label:le&&pe(le)||re&&pe(re)||ce&&pe(ce)||Z},p.default.createElement("span",{style:{display:"inline-block",direction:R?"rtl":"ltr",touchAction:"none",position:"relative"}},p.default.createElement("span",{className:j,style:h({position:"relative",display:"inline-block",overflow:"hidden",whiteSpace:"nowrap",cursor:g?"":"pointer",verticalAlign:"middle",userSelect:"none"},U),onPointerMove:g?void 0:ue,onPointerEnter:g?void 0:function(e){q()&&ue(e)},onPointerLeave:g?void 0:function(){q()&&ie(),oe({type:"PointerLeave"})},onClick:g?void 0:ie,"aria-hidden":"true"},p.default.createElement("span",{className:$,style:h({display:"inline-block",color:w},X)},y([],Array(f)).map((function(e,t){var a;return p.default.createElement(n.Fragment,{key:t},(null===(a=z[t])||void 0===a?void 0:a.icon)||V||p.default.createElement(o.StarIcon,{key:t,boxSize:null!=m?m:{base:5,md:8,lg:10},style:{display:"inline-block"}}))}))),p.default.createElement("span",{className:W,style:h((a={position:"absolute",top:0},a[R?"right":"left"]=0,a.color=N&&le&&C[se(le)]||re&&C[se(re)]||E,a.overflow="hidden",a.whiteSpace="nowrap",a.display="inline-block",a.transition=L?"width .2s ease, color .2s ease":"",a.width=de+"%",a),K)},y([],Array(f)).map((function(e,t){var a;return p.default.createElement(n.Fragment,{key:t},(null===(a=z[t])||void 0===a?void 0:a.icon)||P||p.default.createElement(o.StarIcon,{boxSize:null!=m?m:{base:5,md:8,lg:10},display:"initial",style:{display:"inline-block"}}))}))))))}var j=function(e){var n=b(e,[]);return p.default.createElement(t.Switch,{onChange:n.onChange})},U=function(e){var n=b(e,[]);return p.default.createElement(t.Textarea,h({},n,{value:n.value||"",bg:"#F0F5F7"}))},_=function(){return p.default.createElement(t.Skeleton,{h:"28",w:"full"})},W=n.forwardRef((function(e,n){var a=b(e,[]);return p.default.createElement(t.Input,h({_focus:{bg:"white",border:"1px solid #1967D2"},bg:"#f0f5f7",p:"1.36rem",color:"#696969"},a,{onChange:a.onChange,ref:n,value:a.value||""}))})),G=function(e){var n=e.width;return p.default.createElement(t.Skeleton,{h:"12",w:n||"full",borderRadius:"8px"})},$=function(){return p.default.createElement(t.VStack,{alignItems:"start"},p.default.createElement(t.HStack,null,p.default.createElement(t.Skeleton,{boxSize:4}),p.default.createElement(t.Skeleton,{w:20,h:3})),p.default.createElement(t.VStack,{alignItems:"start",ps:6},p.default.createElement(t.HStack,null,p.default.createElement(t.Skeleton,{boxSize:4}),p.default.createElement(t.Skeleton,{w:20,h:3})),p.default.createElement(t.VStack,{alignItems:"start",ps:6},p.default.createElement(t.HStack,null,p.default.createElement(t.Skeleton,{boxSize:4}),p.default.createElement(t.Skeleton,{w:20,h:3})),p.default.createElement(t.HStack,null,p.default.createElement(t.Skeleton,{boxSize:4}),p.default.createElement(t.Skeleton,{w:20,h:3})),p.default.createElement(t.HStack,null,p.default.createElement(t.Skeleton,{boxSize:4}),p.default.createElement(t.Skeleton,{w:20,h:3}))),p.default.createElement(t.HStack,null,p.default.createElement(t.Skeleton,{boxSize:4}),p.default.createElement(t.Skeleton,{w:20,h:3})),p.default.createElement(t.HStack,null,p.default.createElement(t.Skeleton,{boxSize:4}),p.default.createElement(t.Skeleton,{w:20,h:3}))))},K=function(e){var a=b(e,[]),r=n.useState(),l=r[0],o=r[1],u=t.useDisclosure(),i=u.isOpen,c=u.onToggle;return n.useEffect((function(){v.default.get(a.fetchUrl,{headers:h({},a.requestHeaders)}).then((function(e){return o(e.data)}))}),[]),p.default.createElement(p.default.Fragment,null,!a.inline&&p.default.createElement(t.Button,h({onClick:c},a.btnProps),a.btnText),p.default.createElement(t.Collapse,{in:!!a.inline||i,animateOpacity:!0},!!a.data||!!l&&p.default.createElement(d.Tree,h({},a,{data:a.data?a.data:a.treeDataTransformer(l)})),!l&&!a.data&&p.default.createElement($,null)))},X=p.default.createContext(void 0);function J(){var e=p.default.useContext(X);if(void 0===e)throw new Error("useAminook must be used within a FormBuilder Tag");return e}var Q=n.forwardRef((function(n,r){var l,o,u,i,c=b(n,[]),d=J(),f=d.formSchema,s=d.isDefaultValueFetching,m=a.useFormContext().setValue,v=f.fields[c.name],g=null!==(l=null==v?void 0:v.meta)&&void 0!==l?l:c.fieldSetting,E={name:c.name,value:c.value};return p.default.createElement(t.Box,{my:c.my,mx:c.mx,display:"inline-block",w:null!==(o=c.width)&&void 0!==o?o:"full"},p.default.createElement(t.FormControl,{display:c.hidden?"none":"initial",isInvalid:!!c.error,isRequired:null!==(u=null==v?void 0:v.tests.some((function(e){return"required"===e.name})))&&void 0!==u&&u},!(null==c?void 0:c.hideLabel)&&"checkbox"!==g.type&&p.default.createElement(t.FormLabel,{htmlFor:c.name,fontSize:"sm",fontWeight:"bold",color:s?"gray.300":"#202124"},(null==v?void 0:v.label)?null==v?void 0:v.label:null==c?void 0:c.label),function(){var n,a,l,o,u,i,d;switch(null!==(n=null==g?void 0:g.type)&&void 0!==n?n:null==g?void 0:g.type){case"input-text":case"input-mask":return s?p.default.createElement(G,{width:null===(a=(null==g?void 0:g.fieldProps).width)||void 0===a?void 0:a.toString()}):p.default.createElement(W,h({ref:r},h(h({},E),null==g?void 0:g.fieldProps),{onChange:function(e){c.onChange(C(e.target.value))}}));case"input-password":return s?p.default.createElement(G,{width:null===(l=(null==g?void 0:g.fieldProps).width)||void 0===l?void 0:l.toString()}):p.default.createElement(F,h({ref:r},h(h({},E),null==g?void 0:g.fieldProps),{onChange:function(e){c.onChange(C(e.target.value))}}));case"input-number":return s?p.default.createElement(G,{width:null===(o=(null==g?void 0:g.fieldProps).width)||void 0===o?void 0:o.toString()}):p.default.createElement(P,h({ref:r},h(h({},E),null==g?void 0:g.fieldProps),{onChange:function(e,t){c.onChange(t)}}));case"checkbox":return s?p.default.createElement(w,null):p.default.createElement(k,h({ref:r},null==g?void 0:g.fieldProps,E,{checked:E.value,title:null!==(u=null==v?void 0:v.label)&&void 0!==u?u:c.label,onChange:function(e){return c.onChange(e.target.checked,e)}}));case"select":return s?p.default.createElement(D,null):p.default.createElement(O,h({ref:r},null==g?void 0:g.fieldProps,E,{onChange:function(e){return c.onChange(e.target.value,e)}}));case"switch":return p.default.createElement(j,h({},E,null==g?void 0:g.fieldProps,{onChange:function(e){return c.onChange(e.target.checked)}}));case"text-area":return s?p.default.createElement(_,null):p.default.createElement(U,h({},E,null==g?void 0:g.fieldProps,{onChange:function(e){return c.onChange(e.target.value,e)}}));case"slider":return p.default.createElement(L,h({},c,null==g?void 0:g.fieldProps,{onChange:function(e){c.name.split("_").forEach((function(t,n){return m(""+t,e[n])}))}}));case"input-pin":return p.default.createElement(V,h({},E,null==g?void 0:g.fieldProps,{isInvalid:!!c.error,onChange:function(e){return c.onChange(e)}}));case"editor":return p.default.createElement(x,h({},null==g?void 0:g.fieldProps,{value:c.value,onChange:function(e){return c.onChange(e)}}));case"uploader":return s?p.default.createElement(e.ChakraFileUploaderSkeleton,h({},null==g?void 0:g.fieldProps)):p.default.createElement(e.ChakraFileUploader,h({},null==g?void 0:g.fieldProps));case"reach-select":return s?p.default.createElement(D,null):p.default.createElement(R,h({ref:r},null==g?void 0:g.fieldProps,{isInvalid:!!c.error,isDisabled:c.isDisabled},E,{onChange:function(e){c.onChange(e)}}));case"input-tag":return s?p.default.createElement(G,null):p.default.createElement(M,h({ref:r},null==g?void 0:g.fieldProps,{isInvalid:!!c.error},E,{onChange:function(e){c.onChange(e)},value:c.value?null===(d=null===(i=c.value)||void 0===i?void 0:i.split(","))||void 0===d?void 0:d.map((function(e){return{value:e,label:e}})):void 0}));case"tree-view":return p.default.createElement(K,h({},null==g?void 0:g.fieldProps,E,{onChange:function(e){c.onChange(e)},defaultSelected:c.value}));case"radio-group":return p.default.createElement(I,h({},null==g?void 0:g.fieldProps,{name:c.name,value:c.value,onChange:function(e){c.onChange(e)}}));case"star-picker":return p.default.createElement(B,h({},null==g?void 0:g.fieldProps,E,{onClick:function(e){c.onChange(e)},initialValue:c.value}));default:return p.default.createElement(t.Box,null,"Unrecognized field type.")}}(),!!(null==c?void 0:c.helperText)&&p.default.createElement(t.FormHelperText,{fontSize:"xs"},null==c?void 0:c.helperText),!!c.error&&!c.hideError&&p.default.createElement(t.FormErrorMessage,{fontSize:"xs"},null===(i=c.error)||void 0===i?void 0:i.message)))})),Y=[/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g],Z=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g],ee=s.string().transform((function(e,t){return s.string().isType(e)&&null!==e?function(e){if("string"==typeof e)for(var t=0;t<10;t++)e=e.replace(Y[t],""+t).replace(Z[t],""+t);return e}(e):e}));exports.ControlledFormControl=function(e){var t=b(e,[]),n=J().control;return p.default.createElement(a.Controller,{name:t.name,control:n,render:function(e){var n=e.field,a=e.fieldState;return e.formState,p.default.createElement(Q,h({error:a.error},h(h(h({},t),a),n)))}})},exports.FormBuilder=function(e){var r,l=this,o=n.useState(!1),u=o[0],i=o[1];t.useToast({position:"top",isClosable:!0,variant:"top-accent"});var c=n.useMemo((function(){return e.formSchema.describe()}),[]),d=a.useForm({mode:null!==(r=e.mode)&&void 0!==r?r:"onSubmit",resolver:f.yupResolver(e.formSchema),defaultValues:e.defaultValues?e.defaultValues:void 0});return n.useEffect((function(){e.defaultValues&&d.reset(e.defaultValues)}),[e.defaultValues]),n.useEffect((function(){return function(){return d.reset()}}),[]),p.default.createElement(X.Provider,{value:{formSchema:c,control:d.control,isLoading:u,isError:!1,isDefaultValueFetching:e.isDefaultValueFetching}},p.default.createElement(a.FormProvider,h({},d),p.default.createElement("form",{id:e.id,noValidate:!0,style:{width:"100%"},onSubmit:d.handleSubmit((function(t){return E(l,void 0,void 0,(function(){var n;return S(this,(function(a){switch(a.label){case 0:return e.onSubmitSucess&&e.onSubmitSucess(t),e.mutationFunction?e.doesHaveRecaptcha?(i(!0),[4,e.getRecaptcha()]):[3,2]:[3,3];case 1:n=a.sent(),t=h(h({},t),{captchaToken:n}),i(!1),a.label=2;case 2:e.mutationFunction(t),a.label=3;case 3:return[2]}}))}))}),(function(e){}))},e.children)))},exports.FormControl=Q,exports.FormSubmitButton=function(e){e.type;var n=e.text;e.onClick;var r=b(e,["type","text","onClick"]),l=J(),o=l.isLoading,u=l.isDefaultValueFetching;a.useFormContext().formState;var i=t.useDisclosure();return i.isOpen,i.onToggle,p.default.createElement(t.Button,h({isLoading:o||r.isLoading,disabled:u||o||r.isLoading,loadingText:"در حال ذخیره اطلاعات...",type:"submit",variant:"primary_dark"},r),n)},exports.Select=O,exports.inherentNumberString=ee,exports.mobileIranValidation=/09-?[0-9]{2}-?[0-9]{3}-?[0-9]{4}$/,exports.phoneNumberIranValidation=/^0[0-9]{2,}[0-9]{7,}$/,exports.selectWithValueExtractor=function(){return s.number().transform((function(e,t){return e?e.value:t?t.value:null}))},exports.useAminook=J;
