import{ChakraFileUploader as e,ChakraFileUploaderSkeleton as n}from"@aminbaghbanzadeh/chakra-file-uploader";import{Checkbox as t,HStack as r,Skeleton as a,NumberInput as l,NumberInputField as o,NumberInputStepper as i,NumberIncrementStepper as u,NumberDecrementStepper as c,Box as d,InputGroup as s,Input as f,InputRightElement as m,IconButton as p,Center as v,PinInput as g,PinInputField as h,RadioGroup as E,Stack as b,Radio as y,SkeletonCircle as C,Spinner as w,Text as S,Select as k,RangeSlider as x,RangeSliderTrack as P,RangeSliderFilledTrack as z,RangeSliderThumb as V,Tooltip as F,Switch as T,Textarea as I,VStack as O,useDisclosure as A,Button as L,Collapse as M,FormControl as D,FormLabel as N,FormHelperText as R,FormErrorMessage as j}from"@chakra-ui/react";import U,{forwardRef as q,useRef as _,useState as H,useEffect as B,useCallback as W,useReducer as G,useMemo as $,Fragment as K}from"react";import{useWatch as X,useForm as J,FormProvider as Q,useFormContext as Y,Controller as Z}from"react-hook-form";import{Editor as ee}from"@tinymce/tinymce-react";import{PasswordChecker as ne}from"@aminbaghbanzadeh/password-policies-screen";import{ViewOffIcon as te,ViewIcon as re,SearchIcon as ae,StarIcon as le}from"@chakra-ui/icons";import oe from"axios";import{withAsyncPaginate as ie,AsyncPaginate as ue}from"react-select-async-paginate";import ce from"react-select/creatable";import{Tree as de}from"@aminbaghbanzadeh/chakra-tree-view";import{yupResolver as se}from"@hookform/resolvers/yup";import fe from"fast-deep-equal/react";import{string as me,number as pe}from"yup";var ve=function(){return(ve=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};function ge(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t}function he(e,n,t,r){return new(t||(t=Promise))((function(a,l){function o(e){try{u(r.next(e))}catch(e){l(e)}}function i(e){try{u(r.throw(e))}catch(e){l(e)}}function u(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,i)}u((r=r.apply(e,n||[])).next())}))}function Ee(e,n){var t,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;l&&(l=0,i[0]&&(o=0)),o;)try{if(t=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=n.call(e,o)}catch(e){i=[6,e],r=0}finally{t=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function be(e,n,t){if(t||2===arguments.length)for(var r,a=0,l=n.length;a<l;a++)!r&&a in n||(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))}var ye=function(e){var n=[/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g],t=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g];if("string"==typeof e)for(var r=0;r<10;r++)e=e.replace(n[r],r.toString()).replace(t[r],r.toString());return e},Ce=q((function(e,n){var r=ge(e,[]);return U.createElement(t,ve({},r,{isChecked:r.checked,onChange:r.onChange,ref:n}),r.title)})),we=function(){return U.createElement(r,{spacing:"2"},U.createElement(a,{h:"5",rounded:"sm",w:"5"}),U.createElement(a,{h:"5",rounded:"sm",w:"40"}))},Se=function(e){var n,t=ge(e,[]);return U.createElement(ee,ve({},t.editorProps,{value:t.value,tinymceScriptSrc:process.env.PUBLIC_URL+"/tinymce/tinymce.min.js",onEditorChange:function(e){return t.onChange(e)},init:ve({directionality:"rtl",language:"fa",mobile:{menubar:!1,toolbar:"undo redo | formatselect | bold italic backcolor"},menubar:!1,height:300,plugins:["lists","directionality"],toolbar:"undo redo | ltr rtl | blocks |  formatselect | bold italic  | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | "},null===(n=t.editorProps)||void 0===n?void 0:n.init)}))},ke=q((function(e,n){var t=ge(e,[]);return U.createElement(l,ve({ref:n},t,{size:"sm",inputMode:"numeric",min:0,max:1/0,value:t.value||0===t.value?NaN==t.value?"":t.value:""}),U.createElement(o,{bg:"#F0F5F7",p:"6"}),U.createElement(i,null,U.createElement(u,null),U.createElement(c,null)))})),xe=q((function(e,n){var t=e.showPasswordStatusScreen,r=e.passwordPolicies,a=ge(e,["showPasswordStatusScreen","passwordPolicies"]),l=U.useState(!1),o=l[0],i=l[1],u=_(null);return U.createElement(d,null,U.createElement(s,null,U.createElement(f,ve({_focus:{bg:"white",border:"1px solid #1967D2"},bg:"#f0f5f7",p:"6",color:"#696969"},a,{onChange:a.onChange,ref:function(e){n(e),u.current=e},value:a.value||"",type:o?"text":"password"})),U.createElement(m,{width:"4.5rem",top:"calc(50% - 1.25rem)"},U.createElement(p,{"aria-label":"toggle password showing",icon:o?U.createElement(te,null):U.createElement(re,null),onClick:function(){return i(!o)}}))),t&&U.createElement(ne,ve({},r,{ref:u})))})),Pe=function(e){var n=ge(e,[]);return U.createElement(v,{dir:"ltr"},U.createElement(r,null,U.createElement(g,{otp:!0,onChange:function(e){return n.onChange(e)},isInvalid:n.isInvalid,autoFocus:!0,size:"lg"},be([],Array(n.count)).map((function(e,n){return U.createElement(h,{key:n})})))))},ze=function(e){var n=ge(e,[]),t=H(n.options),l=t[0],o=t[1];return B((function(){n.fetchUrl&&oe.get(n.fetchUrl).then((function(e){o((function(){var t;return Array.isArray(e.data)?e.data:e.data[null!==(t=n.resultFieldName)&&void 0!==t?t:"items"]}))}))}),[n.fetchUrl]),U.createElement(E,{mt:"4",value:n.value||void 0,onChange:n.onChange,name:n.name},U.createElement(b,{spacing:2},null==l?void 0:l.map((function(e){return U.createElement(y,ve({},n.radioProps,{key:e.value,value:e.value.toString()}),e.label)})),!l&&Array(5).fill(0).map((function(e,n){return U.createElement(r,{key:n},U.createElement(C,{boxSize:"20px"}),U.createElement(a,{h:"5",w:"48"}))}))))},Ve=function(e){return{control:function(n,t){var r;return ve(ve({},n),{padding:"0.2rem",backgroundColor:null!==(r=e.backgroundColor)&&void 0!==r?r:"#f0f5f7",border:"2px solid !impoetant",borderWidth:"2px !important",borderColor:e.isInvalid?"#e53e3e !important":t.isFocused?"#1967d2":"#E2E8F0 !important",borderRadius:"0.375rem","&hover":{borderColor:"#cbd5e0 !important"}})},input:function(e){return ve(ve({},e),{color:"#696969",fontSize:"0.875rem"})},valueContainer:function(e){return ve(ve({},e),{color:"#696969",fontSize:"0.875rem"})},indicatorSeparator:function(e){return ve(ve({},e),{display:"none"})},indicatorsContainer:function(e){return ve(ve({},e),{color:"black"})},option:function(e,n){return ve(ve({},e),{color:n.isSelected?"white":"black",padding:"0.2rem",paddingRight:"0.5rem",fontFamily:"inherit !important",fontSize:"0.875rem",backgroundColor:n.isSelected?"#0385ff":"#f0f5f7","&:hover":ve(ve({},e),{fontSize:"0.875rem",padding:"0.2rem",color:"white",backgroundColor:"#0385ff !important"}),"&:focus":ve(ve({},e),{fontSize:"0.875rem",padding:"0.2rem",color:"white",backgroundColor:"#0385ff !important"}),"&:active":ve(ve({},e),{fontSize:"0.875rem",padding:"0.2rem",color:"white",backgroundColor:"#0385ff !important"})})},loadingMessage:function(e,n){return ve(ve({},e),{fontSize:"0.875rem"})},noOptionsMessage:function(e,n){return ve(ve({},e),{fontSize:"0.875rem"})},multiValue:function(e,n){return ve(ve({},e),{background:"#d5e1f6",fontSize:"0.875rem",padding:"0.2rem 0.4rem"})},menu:function(e,n){return ve(ve({},e),{zIndex:"2 !important",marginTop:"0"})},menuList:function(e,n){return ve(ve({},e),{backgroundColor:"#f0f5f7"})}}},Fe=ie(ce),Te=q((function(e,n){var t,a=ge(e,[]),l=X({name:(null===(t=a.dependentTo)||void 0===t?void 0:t.fieldName)||"",disabled:!a.dependentTo}),o=W((function(e,n){return he(void 0,void 0,void 0,(function(){var t,r,o,i;return Ee(this,(function(u){switch(u.label){case 0:return[4,oe.get(a.fetchUrl.replace(":query",e).replace(":offsetCount",n.length).replace(":dependent",null===(r=a.dependentTo)||void 0===r?void 0:r.valueExtractor(l)))];case 1:return t=u.sent(),[2,{options:Array.isArray(t.data)?t.data:t.data[null!==(o=a.resultFieldName)&&void 0!==o?o:"items"],hasMore:Array.isArray(t.data)?t.data.length>n.length:t.data[null!==(i=a.totalCountFieldName)&&void 0!==i?i:"totalCount"]>n.length}]}}))}))}),[l]);return a.isCreatable?U.createElement(Fe,ve({styles:Ve(a),isRtl:!0,placeholder:"انتخاب کنید.",isClearable:!0,isSearchable:!0,selectRef:n,defaultValue:a.value,noOptionsMessage:function(e){return"گزینه ای مرتبط با "+e.inputValue+" یافت نشد."},loadingMessage:function(){return"در حال بارگزاری..."},onChange:function(e,n){return a.onChange(e,n)},components:{LoadingIndicator:function(){return U.createElement(w,{size:"sm",colorScheme:"blue"})}},debounceTimeout:2e3,formatCreateLabel:function(e){return U.createElement(r,null,U.createElement(ae,null),U.createElement(S,null,'"',e,'"'))}},a,{loadOptions:o})):U.createElement(ue,ve({styles:Ve(a),placeholder:"انتخاب کنید.",noOptionsMessage:function(e){return"گزینه ای مرتبط با "+e.inputValue+" یافت نشد."},isClearable:!0,isSearchable:!0,selectRef:n,defaultValue:a.value,debounceTimeout:2e3,loadingMessage:function(){return"در حال بارگزاری..."},onChange:function(e,n){return a.onChange(e,n)},components:{LoadingIndicator:function(){return U.createElement(w,{size:"sm",colorScheme:"blue"})}}},a,{isDisabled:!!a.dependentTo&&!l,key:a.dependentTo?a.dependentTo.valueExtractor(l):a.name,loadOptions:o}))})),Ie=q((function(e,n){var t,r,a=ge(e,[]),l=H(),o=l[0],i=l[1],u=H(null!==(t=a.value)&&void 0!==t?t:[]),c=u[0],d=u[1];B((function(){a.value&&d(a.value)}),[a.value]);var s=W((function(e){i(e)}),[]),f=W((function(e){if(o)switch(e.key){case"Enter":case"Tab":e.preventDefault(),e.stopPropagation(),i(""),d((function(e){return be(be([],e),[{label:o,value:o}])})),a.onChange(c.map((function(e){return e.value})).concat(o).join(",")),i("")}}),[o]),m=W((function(e,n){a.onChange(e.map((function(e){return e.value})).join(",")),d(e)}),[d]);return U.createElement(ce,ve({styles:Ve(a)},a,{ref:n,placeholder:null!==(r=a.placeholder)&&void 0!==r?r:"انتخاب کنید.",components:{DropdownIndicator:null},inputValue:o,isMulti:!0,menuIsOpen:!1,onChange:m,onInputChange:s,onKeyDown:f,value:c,formatCreateLabel:function(e){return'درج " '+e+' "'},allowCreateWhileLoading:!0}))})),Oe=q((function(e,n){var t=ge(e,[]);return t.options?U.createElement(Ae,ve({ref:n},t)):t.fetchUrl?U.createElement(Le,ve({ref:n},t)):U.createElement(k,null)})),Ae=q((function(e,n){var t,r=ge(e,[]);return U.createElement(k,ve({},r,{ref:n,onChange:r.onChange,bg:"#F0F5F7",size:"lg",fontSize:"sm"}),null===(t=r.options)||void 0===t?void 0:t.map((function(e){return U.createElement("option",{value:e.value,key:e.value},e.label)})))})),Le=q((function(e,n){return ge(e,[]),U.createElement(d,null)})),Me=function(){return U.createElement(a,{h:"12",w:"full",borderRadius:"8px"})},De=function(e){var n,t=ge(e,[]),r=H(null!==(n=t.defaultValue)&&void 0!==n?n:[10,100]),a=r[0],l=r[1];return U.createElement(U.Fragment,null,U.createElement(x,ve({"aria-label":["min","max"],min:t.min,max:t.max,defaultValue:t.defaultValue},t,{width:"full",onChangeEnd:function(e){l(e),t.onChange(e)},onChange:function(e){l(e)},size:"md"}),U.createElement(P,null,U.createElement(z,null)),U.createElement(V,{index:0,width:16,height:6},U.createElement(d,{color:"primary.500",fontSize:"2xs"},"حداقل (",a[0],")")),U.createElement(V,{index:1,width:16,height:6},U.createElement(d,{color:"primary.500",fontSize:"2xs"},"حداکثر (",a[1],")"))))},Ne=function(){return"ontouchstart"in window||navigator.maxTouchPoints>0};function Re(e,n){switch(n.type){case"PointerMove":return ve(ve({},e),{hoverValue:n.payload});case"PointerLeave":return{defaultValue:e.defaultValue,hoverValue:null};case"MouseClick":return ve(ve({},e),{defaultValue:n.payload});default:return e}}function je(e){var n,t=e.onClick,r=e.initialValue,a=void 0===r?0:r,l=e.ratingValue,o=void 0===l?0:l,i=e.iconsCount,u=void 0===i?5:i,c=e.size,d=void 0===c?20:c,s=e.readonly,f=void 0!==s&&s,m=e.fillColor,p=void 0===m?"#ffbc0b":m,v=e.fillColorArray,g=void 0===v?[]:v,h=e.emptyColor,E=void 0===h?"#cccccc":h,b=e.fullIcon,y=void 0===b?null:b,C=e.emptyIcon,w=void 0===C?null:C,S=e.customIcons,k=void 0===S?[]:S,x=e.rtl,P=void 0!==x&&x,z=e.allowHalfIcon,V=void 0!==z&&z,T=e.allowHover,I=void 0===T||T,O=e.transition,A=void 0!==O&&O,L=e.className,M=void 0===L?"react-simple-star-rating":L,D=e.style,N=e.fullClassName,R=void 0===N?"filled-icons":N,j=e.emptyClassName,q=void 0===j?"empty-icons":j,_=e.fullStyle,H=e.emptyStyle,B=e.showTooltip,X=void 0!==B&&B,J=e.tooltipDefaultText,Q=void 0===J?"امتیاز":J,Y=e.tooltipArray,Z=void 0===Y?[]:Y;e.tooltipClassName,e.tooltipStyle;var ee=G(Re,{defaultValue:o,hoverValue:null}),ne=ee[0],te=ne.defaultValue,re=ne.hoverValue,ae=ee[1];U.useEffect((function(){return ae({type:"MouseClick",payload:o})}),[o]);var oe=function(e){var n=e.clientX,t=e.currentTarget.children[0].getBoundingClientRect(),r=t.left,a=t.right,l=t.width,o=function(e,n,t){for(var r=100/e,a=t/e,l=100,o=0;o<e;o+=1)if(n<=a*o+a/4){l=0===o&&n<a/2?0:r*o;break}return l}(de,P?a-n:n-r,l);o>0&&re!==o&&ae({type:"PointerMove",payload:o})},ie=function(){re&&(ae({type:"MouseClick",payload:re}),t&&t(re/20))},ue=$((function(){return Math.round(a/u*100)}),[a,u]),ce=$((function(){return I&&re&&re||te&&te||ue}),[I,re,te,ue]),de=$((function(){return V?2*u:u}),[V,u]),se=W((function(e){var n=1;return e&&(n=V?e/de:e/2/10),Math.round(n-1)}),[V,de]),fe=W((function(e){return V?e/2/10:se(e)+1}),[V,se]),me=function(e){return Z.length>0?Z[se(e)]:fe(e)||0};return U.createElement(F,{isDisabled:!X,label:re&&me(re)||te&&me(te)||ue&&me(ue)||Q},U.createElement("span",{style:{display:"inline-block",direction:P?"rtl":"ltr",touchAction:"none",position:"relative"}},U.createElement("span",{className:M,style:ve({position:"relative",display:"inline-block",overflow:"hidden",whiteSpace:"nowrap",cursor:f?"":"pointer",verticalAlign:"middle",userSelect:"none"},D),onPointerMove:f?void 0:oe,onPointerEnter:f?void 0:function(e){Ne()&&oe(e)},onPointerLeave:f?void 0:function(){Ne()&&ie(),ae({type:"PointerLeave"})},onClick:f?void 0:ie,"aria-hidden":"true"},U.createElement("span",{className:q,style:ve({display:"inline-block",color:E},H)},be([],Array(u)).map((function(e,n){var t;return U.createElement(K,{key:n},(null===(t=k[n])||void 0===t?void 0:t.icon)||w||U.createElement(le,{key:n,boxSize:null!=d?d:{base:5,md:8,lg:10},style:{display:"inline-block"}}))}))),U.createElement("span",{className:R,style:ve((n={position:"absolute",top:0},n[P?"right":"left"]=0,n.color=I&&re&&g[se(re)]||te&&g[se(te)]||p,n.overflow="hidden",n.whiteSpace="nowrap",n.display="inline-block",n.transition=A?"width .2s ease, color .2s ease":"",n.width=ce+"%",n),_)},be([],Array(u)).map((function(e,n){var t;return U.createElement(K,{key:n},(null===(t=k[n])||void 0===t?void 0:t.icon)||y||U.createElement(le,{boxSize:null!=d?d:{base:5,md:8,lg:10},display:"initial",style:{display:"inline-block"}}))}))))))}var Ue=function(e){var n=ge(e,[]);return U.createElement(T,{onChange:n.onChange})},qe=function(e){var n=ge(e,[]);return U.createElement(I,ve({},n,{value:n.value||"",bg:"#F0F5F7"}))},_e=function(){return U.createElement(a,{h:"28",w:"full"})},He=q((function(e,n){var t=ge(e,[]);return U.createElement(f,ve({_focus:{bg:"white",border:"1px solid #1967D2"},bg:"#f0f5f7",p:"1.36rem",color:"#696969"},t,{onChange:t.onChange,ref:n,value:t.value||""}))})),Be=function(e){var n=e.width;return U.createElement(a,{h:"12",w:n||"full",borderRadius:"8px"})},We=function(){return U.createElement(O,{alignItems:"start"},U.createElement(r,null,U.createElement(a,{boxSize:4}),U.createElement(a,{w:20,h:3})),U.createElement(O,{alignItems:"start",ps:6},U.createElement(r,null,U.createElement(a,{boxSize:4}),U.createElement(a,{w:20,h:3})),U.createElement(O,{alignItems:"start",ps:6},U.createElement(r,null,U.createElement(a,{boxSize:4}),U.createElement(a,{w:20,h:3})),U.createElement(r,null,U.createElement(a,{boxSize:4}),U.createElement(a,{w:20,h:3})),U.createElement(r,null,U.createElement(a,{boxSize:4}),U.createElement(a,{w:20,h:3}))),U.createElement(r,null,U.createElement(a,{boxSize:4}),U.createElement(a,{w:20,h:3})),U.createElement(r,null,U.createElement(a,{boxSize:4}),U.createElement(a,{w:20,h:3}))))},Ge=function(e){var n=ge(e,[]),t=H(),r=t[0],a=t[1],l=A(),o=l.isOpen,i=l.onToggle;return B((function(){oe.get(n.fetchUrl,{headers:ve({},n.requestHeaders)}).then((function(e){return a(e.data)}))}),[]),U.createElement(U.Fragment,null,!n.inline&&U.createElement(L,ve({onClick:i},n.btnProps),n.btnText),U.createElement(M,{in:!!n.inline||o,animateOpacity:!0},!!n.data||!!r&&U.createElement(de,ve({},n,{data:n.data?n.data:n.treeDataTransformer(r)})),!r&&!n.data&&U.createElement(We,null)))},$e=U.createContext(void 0);function Ke(e){var n,t=this,r=H(!1),a=r[0],l=r[1],o=_(e.defaultValues);fe(o.current,e.defaultValues)||(o.current=e.defaultValues);var i=$((function(){return e.formSchema.describe()}),[]),u=J({mode:null!==(n=e.mode)&&void 0!==n?n:"onSubmit",resolver:se(e.formSchema),defaultValues:e.defaultValues?e.defaultValues:void 0});return B((function(){console.log("test",u),e.defaultValues&&u.reset(e.defaultValues)}),[o.current]),U.createElement($e.Provider,{value:{formSchema:i,control:u.control,isLoading:a,isError:!1,isDefaultValueFetching:e.isDefaultValueFetching}},U.createElement(Q,ve({},u),U.createElement("form",{id:e.id,noValidate:!0,style:{width:"100%"},onSubmit:u.handleSubmit((function(n){return he(t,void 0,void 0,(function(){var t;return Ee(this,(function(r){switch(r.label){case 0:return e.onSubmitSucess&&e.onSubmitSucess(n),e.mutationFunction?e.doesHaveRecaptcha?(l(!0),[4,e.getRecaptcha()]):[3,2]:[3,3];case 1:t=r.sent(),n=ve(ve({},n),{captchaToken:t}),l(!1),r.label=2;case 2:e.mutationFunction(n),r.label=3;case 3:return[2]}}))}))}),(function(e){}))},e.children)))}function Xe(){var e=U.useContext($e);if(void 0===e)throw new Error("useAminook must be used within a FormBuilder Tag");return e}var Je=q((function(t,r){var a,l,o,i,u=ge(t,[]),c=Xe(),s=c.formSchema,f=c.isDefaultValueFetching,m=Y().setValue,p=s.fields[u.name],v=null!==(a=null==p?void 0:p.meta)&&void 0!==a?a:u.fieldSetting,g={name:u.name,value:u.value};return U.createElement(d,{my:u.my,mx:u.mx,display:"inline-block",w:null!==(l=u.width)&&void 0!==l?l:"full"},U.createElement(D,{display:u.hidden?"none":"initial",isInvalid:!!u.error,isRequired:null!==(o=null==p?void 0:p.tests.some((function(e){return"required"===e.name})))&&void 0!==o&&o},!(null==u?void 0:u.hideLabel)&&"checkbox"!==v.type&&U.createElement(N,{htmlFor:u.name,fontSize:"sm",fontWeight:"bold",color:f?"gray.300":"#202124"},(null==p?void 0:p.label)?null==p?void 0:p.label:null==u?void 0:u.label),function(){var t,a,l,o,i,c,s;switch(null!==(t=null==v?void 0:v.type)&&void 0!==t?t:null==v?void 0:v.type){case"input-text":case"input-mask":return f?U.createElement(Be,{width:null===(a=(null==v?void 0:v.fieldProps).width)||void 0===a?void 0:a.toString()}):U.createElement(He,ve({ref:r},ve(ve({},g),null==v?void 0:v.fieldProps),{onChange:function(e){u.onChange(ye(e.target.value))}}));case"input-password":return f?U.createElement(Be,{width:null===(l=(null==v?void 0:v.fieldProps).width)||void 0===l?void 0:l.toString()}):U.createElement(xe,ve({ref:r},ve(ve({},g),null==v?void 0:v.fieldProps),{onChange:function(e){u.onChange(ye(e.target.value))}}));case"input-number":return f?U.createElement(Be,{width:null===(o=(null==v?void 0:v.fieldProps).width)||void 0===o?void 0:o.toString()}):U.createElement(ke,ve({ref:r},ve(ve({},g),null==v?void 0:v.fieldProps),{onChange:function(e,n){u.onChange(n)}}));case"checkbox":return f?U.createElement(we,null):U.createElement(Ce,ve({ref:r},null==v?void 0:v.fieldProps,g,{checked:g.value,title:null!==(i=null==p?void 0:p.label)&&void 0!==i?i:u.label,onChange:function(e){return u.onChange(e.target.checked,e)}}));case"select":return f?U.createElement(Me,null):U.createElement(Oe,ve({ref:r},null==v?void 0:v.fieldProps,g,{onChange:function(e){return u.onChange(e.target.value,e)}}));case"switch":return U.createElement(Ue,ve({},g,null==v?void 0:v.fieldProps,{onChange:function(e){return u.onChange(e.target.checked)}}));case"text-area":return f?U.createElement(_e,null):U.createElement(qe,ve({},g,null==v?void 0:v.fieldProps,{onChange:function(e){return u.onChange(e.target.value,e)}}));case"slider":return U.createElement(De,ve({},u,null==v?void 0:v.fieldProps,{onChange:function(e){u.name.split("_").forEach((function(n,t){return m(""+n,e[t])}))}}));case"input-pin":return U.createElement(Pe,ve({},g,null==v?void 0:v.fieldProps,{isInvalid:!!u.error,onChange:function(e){return u.onChange(e)}}));case"editor":return U.createElement(Se,ve({},null==v?void 0:v.fieldProps,{value:u.value,onChange:function(e){return u.onChange(e)}}));case"uploader":return f?U.createElement(n,ve({},null==v?void 0:v.fieldProps)):U.createElement(e,ve({},null==v?void 0:v.fieldProps));case"reach-select":return f?U.createElement(Me,null):U.createElement(Te,ve({ref:r},null==v?void 0:v.fieldProps,{isInvalid:!!u.error,isDisabled:u.isDisabled},g,{onChange:function(e){u.onChange(e)}}));case"input-tag":return f?U.createElement(Be,null):U.createElement(Ie,ve({ref:r},null==v?void 0:v.fieldProps,{isInvalid:!!u.error},g,{onChange:function(e){u.onChange(e)},value:u.value?null===(s=null===(c=u.value)||void 0===c?void 0:c.split(","))||void 0===s?void 0:s.map((function(e){return{value:e,label:e}})):void 0}));case"tree-view":return U.createElement(Ge,ve({},null==v?void 0:v.fieldProps,g,{onChange:function(e){u.onChange(e)},defaultSelected:u.value}));case"radio-group":return U.createElement(ze,ve({},null==v?void 0:v.fieldProps,{name:u.name,value:u.value,onChange:function(e){u.onChange(e)}}));case"star-picker":return U.createElement(je,ve({},null==v?void 0:v.fieldProps,g,{onClick:function(e){u.onChange(e)},initialValue:u.value}));default:return U.createElement(d,null,"Unrecognized field type.")}}(),!!(null==u?void 0:u.helperText)&&U.createElement(R,{fontSize:"xs"},null==u?void 0:u.helperText),!!u.error&&!u.hideError&&U.createElement(j,{fontSize:"xs"},null===(i=u.error)||void 0===i?void 0:i.message)))})),Qe=function(e){var n=ge(e,[]),t=Xe().control;return U.createElement(Z,{name:n.name,control:t,render:function(e){var t=e.field,r=e.fieldState;return e.formState,U.createElement(Je,ve({error:r.error},ve(ve(ve({},n),r),t)))}})},Ye=function(e){e.type;var n=e.text;e.onClick;var t=ge(e,["type","text","onClick"]),r=Xe(),a=r.isLoading,l=r.isDefaultValueFetching;Y().formState;var o=A();return o.isOpen,o.onToggle,U.createElement(L,ve({isLoading:a||t.isLoading,disabled:l||a||t.isLoading,loadingText:"در حال ذخیره اطلاعات...",type:"submit",variant:"primary_dark"},t),n)},Ze=/09-?[0-9]{2}-?[0-9]{3}-?[0-9]{4}$/,en=/^0[0-9]{2,}[0-9]{7,}$/,nn=[/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g],tn=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g],rn=me().transform((function(e,n){return me().isType(e)&&null!==e?function(e){if("string"==typeof e)for(var n=0;n<10;n++)e=e.replace(nn[n],""+n).replace(tn[n],""+n);return e}(e):e})),an=function(){return pe().transform((function(e,n){return e?e.value:n?n.value:null}))};export{Qe as ControlledFormControl,Ke as FormBuilder,Je as FormControl,Ye as FormSubmitButton,Oe as Select,rn as inherentNumberString,Ze as mobileIranValidation,en as phoneNumberIranValidation,an as selectWithValueExtractor,Xe as useAminook};
