var JE=Object.defineProperty,ZE=Object.defineProperties;var eS=Object.getOwnPropertyDescriptors;var Jo=Object.getOwnPropertySymbols;var Np=Object.prototype.hasOwnProperty,Rp=Object.prototype.propertyIsEnumerable;var Ap=(t,e,n)=>e in t?JE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Kt=(t,e)=>{for(var n in e||(e={}))Np.call(e,n)&&Ap(t,n,e[n]);if(Jo)for(var n of Jo(e))Rp.call(e,n)&&Ap(t,n,e[n]);return t},lr=(t,e)=>ZE(t,eS(e));var Gu=(t,e)=>{var n={};for(var r in t)Np.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Jo)for(var r of Jo(t))e.indexOf(r)<0&&Rp.call(t,r)&&(n[r]=t[r]);return n};const tS=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};tS();var k={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),nS=Symbol.for("react.portal"),rS=Symbol.for("react.fragment"),iS=Symbol.for("react.strict_mode"),sS=Symbol.for("react.profiler"),oS=Symbol.for("react.provider"),aS=Symbol.for("react.context"),lS=Symbol.for("react.forward_ref"),uS=Symbol.for("react.suspense"),cS=Symbol.for("react.memo"),hS=Symbol.for("react.lazy"),Pp=Symbol.iterator;function dS(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var Ey={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sy=Object.assign,_y={};function Vi(t,e,n){this.props=t,this.context=e,this.refs=_y,this.updater=n||Ey}Vi.prototype.isReactComponent={};Vi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ky(){}ky.prototype=Vi.prototype;function md(t,e,n){this.props=t,this.context=e,this.refs=_y,this.updater=n||Ey}var gd=md.prototype=new ky;gd.constructor=md;Sy(gd,Vi.prototype);gd.isPureReactComponent=!0;var Dp=Array.isArray,Iy=Object.prototype.hasOwnProperty,yd={current:null},Cy={key:!0,ref:!0,__self:!0,__source:!0};function Ty(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Iy.call(e,r)&&!Cy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yo,type:t,key:s,ref:o,props:i,_owner:yd.current}}function fS(t,e){return{$$typeof:yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===yo}function pS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Op=/\/+/g;function Qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pS(""+t.key):e.toString(36)}function Ta(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yo:case nS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Qu(o,0):r,Dp(i)?(n="",t!=null&&(n=t.replace(Op,"$&/")+"/"),Ta(i,e,n,"",function(u){return u})):i!=null&&(vd(i)&&(i=fS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Op,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Qu(s,a);o+=Ta(s,e,n,l,i)}else if(l=dS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Qu(s,a++),o+=Ta(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zo(t,e,n){if(t==null)return t;var r=[],i=0;return Ta(t,r,"","",function(s){return e.call(n,s,i++)}),r}function mS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},xa={transition:null},gS={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:xa,ReactCurrentOwner:yd};ee.Children={map:Zo,forEach:function(t,e,n){Zo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zo(t,function(){e++}),e},toArray:function(t){return Zo(t,function(e){return e})||[]},only:function(t){if(!vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Vi;ee.Fragment=rS;ee.Profiler=sS;ee.PureComponent=md;ee.StrictMode=iS;ee.Suspense=uS;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Sy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Iy.call(e,l)&&!Cy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:yo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:aS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:oS,_context:t},t.Consumer=t};ee.createElement=Ty;ee.createFactory=function(t){var e=Ty.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:lS,render:t}};ee.isValidElement=vd;ee.lazy=function(t){return{$$typeof:hS,_payload:{_status:-1,_result:t},_init:mS}};ee.memo=function(t,e){return{$$typeof:cS,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=xa.transition;xa.transition={};try{t()}finally{xa.transition=e}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(t,e){return gt.current.useCallback(t,e)};ee.useContext=function(t){return gt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return gt.current.useEffect(t,e)};ee.useId=function(){return gt.current.useId()};ee.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return gt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};ee.useRef=function(t){return gt.current.useRef(t)};ee.useState=function(t){return gt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return gt.current.useTransition()};ee.version="18.0.0-fc46dba67-20220329";k.exports=ee;var vo=k.exports,xy={exports:{}},$t={},Ay={exports:{}},Ny={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,B){var q=P.length;P.push(B);e:for(;0<q;){var pe=q-1>>>1,O=P[pe];if(0<i(O,B))P[pe]=B,P[q]=O,q=pe;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var B=P[0],q=P.pop();if(q!==B){P[0]=q;e:for(var pe=0,O=P.length,L=O>>>1;pe<L;){var M=2*(pe+1)-1,W=P[M],v=M+1,te=P[v];if(0>i(W,q))v<O&&0>i(te,W)?(P[pe]=te,P[v]=q,pe=v):(P[pe]=W,P[M]=q,pe=M);else if(v<O&&0>i(te,q))P[pe]=te,P[v]=q,pe=v;else break e}}return B}function i(P,B){var q=P.sortIndex-B.sortIndex;return q!==0?q:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,y=!1,g=!1,E=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=P)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function w(P){if(E=!1,m(P),!g)if(n(l)!==null)g=!0,un(_);else{var B=n(u);B!==null&&ct(w,B.startTime-P)}}function _(P,B){g=!1,E&&(E=!1,p(I),I=-1),y=!0;var q=f;try{for(m(B),d=n(l);d!==null&&(!(d.expirationTime>B)||P&&!oe());){var pe=d.callback;if(typeof pe=="function"){d.callback=null,f=d.priorityLevel;var O=pe(d.expirationTime<=B);B=t.unstable_now(),typeof O=="function"?d.callback=O:d===n(l)&&r(l),m(B)}else r(l);d=n(l)}if(d!==null)var L=!0;else{var M=n(u);M!==null&&ct(w,M.startTime-B),L=!1}return L}finally{d=null,f=q,y=!1}}var R=!1,S=null,I=-1,z=5,F=-1;function oe(){return!(t.unstable_now()-F<z)}function me(){if(S!==null){var P=t.unstable_now();F=P;var B=!0;try{B=S(!0,P)}finally{B?Ae():(R=!1,S=null)}}else R=!1}var Ae;if(typeof h=="function")Ae=function(){h(me)};else if(typeof MessageChannel!="undefined"){var be=new MessageChannel,He=be.port2;be.port1.onmessage=me,Ae=function(){He.postMessage(null)}}else Ae=function(){A(me,0)};function un(P){S=P,R||(R=!0,Ae())}function ct(P,B){I=A(function(){P(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||y||(g=!0,un(_))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var q=f;f=B;try{return P()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=f;f=P;try{return B()}finally{f=q}},t.unstable_scheduleCallback=function(P,B,q){var pe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?pe+q:pe):q=pe,P){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=q+O,P={id:c++,callback:B,priorityLevel:P,startTime:q,expirationTime:O,sortIndex:-1},q>pe?(P.sortIndex=q,e(u,P),n(l)===null&&P===n(u)&&(E?(p(I),I=-1):E=!0,ct(w,q-pe))):(P.sortIndex=O,e(l,P),g||y||(g=!0,un(_))),P},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(P){var B=f;return function(){var q=f;f=B;try{return P.apply(this,arguments)}finally{f=q}}}})(Ny);Ay.exports=Ny;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry=k.exports,Dt=Ay.exports;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Py=new Set,Ls={};function br(t,e){wi(t,e),wi(t+"Capture",e)}function wi(t,e){for(Ls[t]=e,t=0;t<e.length;t++)Py.add(e[t])}var kn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),zc=Object.prototype.hasOwnProperty,yS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$p={},Lp={};function vS(t){return zc.call(Lp,t)?!0:zc.call($p,t)?!1:yS.test(t)?Lp[t]=!0:($p[t]=!0,!1)}function wS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ES(t,e,n,r){if(e===null||typeof e=="undefined"||wS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wd=/[\-:]([a-z])/g;function Ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wd,Ed);Ze[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wd,Ed);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wd,Ed);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sd(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ES(e,n,i,r)&&(n=null),r||i===null?vS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var An=Ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),jc=Symbol.for("react.profiler"),Dy=Symbol.for("react.provider"),Oy=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Bc=Symbol.for("react.suspense"),Hc=Symbol.for("react.suspense_list"),Id=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),$y=Symbol.for("react.offscreen"),Mp=Symbol.iterator;function ts(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,Yu;function ds(t){if(Yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yu=e&&e[1]||""}return`
`+Yu+t}var Xu=!1;function Ju(t,e){if(!t||Xu)return"";Xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ds(t):""}function SS(t){switch(t.tag){case 5:return ds(t.type);case 16:return ds("Lazy");case 13:return ds("Suspense");case 19:return ds("SuspenseList");case 0:case 2:case 15:return t=Ju(t.type,!1),t;case 11:return t=Ju(t.type.render,!1),t;case 1:return t=Ju(t.type,!0),t;default:return""}}function qc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case Wr:return"Portal";case jc:return"Profiler";case _d:return"StrictMode";case Bc:return"Suspense";case Hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Oy:return(t.displayName||"Context")+".Consumer";case Dy:return(t._context.displayName||"Context")+".Provider";case kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Id:return e=t.displayName||null,e!==null?e:qc(t.type)||"Memo";case Pn:e=t._payload,t=t._init;try{return qc(t(e))}catch{}}return null}function _S(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(e);case 8:return e===_d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ly(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kS(t){var e=Ly(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ta(t){t._valueTracker||(t._valueTracker=kS(t))}function My(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ly(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wa(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wc(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function by(t,e){e=e.checked,e!=null&&Sd(t,"checked",e,!1)}function Kc(t,e){by(t,e);var n=Xn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gc(t,e.type,Xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gc(t,e,n){(e!=="number"||Wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fs=Array.isArray;function li(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(fs(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xn(n)}}function Fy(t,e){var n=Xn(e.value),r=Xn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Uy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Uy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var na,Vy=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IS=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(t){IS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ss[e]=Ss[t]})});function zy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ss.hasOwnProperty(t)&&Ss[t]?(""+e).trim():e+"px"}function jy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var CS=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xc(t,e){if(e){if(CS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Jc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zc=null;function Cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var eh=null,ui=null,ci=null;function zp(t){if(t=So(t)){if(typeof eh!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Kl(e),eh(t.stateNode,t.type,e))}}function By(t){ui?ci?ci.push(t):ci=[t]:ui=t}function Hy(){if(ui){var t=ui,e=ci;if(ci=ui=null,zp(t),e)for(t=0;t<e.length;t++)zp(e[t])}}function qy(t,e){return t(e)}function Wy(){}var Zu=!1;function Ky(t,e,n){if(Zu)return t(e,n);Zu=!0;try{return qy(t,e,n)}finally{Zu=!1,(ui!==null||ci!==null)&&(Wy(),Hy())}}function bs(t,e){var n=t.stateNode;if(n===null)return null;var r=Kl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var th=!1;if(kn)try{var ns={};Object.defineProperty(ns,"passive",{get:function(){th=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{th=!1}function TS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var _s=!1,Ka=null,Ga=!1,nh=null,xS={onError:function(t){_s=!0,Ka=t}};function AS(t,e,n,r,i,s,o,a,l){_s=!1,Ka=null,TS.apply(xS,arguments)}function NS(t,e,n,r,i,s,o,a,l){if(AS.apply(this,arguments),_s){if(_s){var u=Ka;_s=!1,Ka=null}else throw Error(T(198));Ga||(Ga=!0,nh=u)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jp(t){if(Fr(t)!==t)throw Error(T(188))}function RS(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jp(i),t;if(s===r)return jp(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function Qy(t){return t=RS(t),t!==null?Yy(t):null}function Yy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yy(t);if(e!==null)return e;t=t.sibling}return null}var Xy=Dt.unstable_scheduleCallback,Bp=Dt.unstable_cancelCallback,PS=Dt.unstable_shouldYield,DS=Dt.unstable_requestPaint,Re=Dt.unstable_now,OS=Dt.unstable_getCurrentPriorityLevel,Td=Dt.unstable_ImmediatePriority,Jy=Dt.unstable_UserBlockingPriority,Qa=Dt.unstable_NormalPriority,$S=Dt.unstable_LowPriority,Zy=Dt.unstable_IdlePriority,Bl=null,en=null;function LS(t){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:FS,MS=Math.log,bS=Math.LN2;function FS(t){return t>>>=0,t===0?32:31-(MS(t)/bS|0)|0}var ra=64,ia=4194304;function ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ya(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ps(a):(s&=o,s!==0&&(r=ps(s)))}else o=n&~i,o!==0?r=ps(o):s!==0&&(r=ps(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function US(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=US(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function zS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function ev(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var tv,Ad,nv,rv,iv,ih=!1,sa=[],zn=null,jn=null,Bn=null,Fs=new Map,Us=new Map,On=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(t,e){switch(t){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":Fs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(e.pointerId)}}function rs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=So(e),e!==null&&Ad(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function BS(t,e,n,r,i){switch(e){case"focusin":return zn=rs(zn,t,e,n,r,i),!0;case"dragenter":return jn=rs(jn,t,e,n,r,i),!0;case"mouseover":return Bn=rs(Bn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fs.set(s,rs(Fs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Us.set(s,rs(Us.get(s)||null,t,e,n,r,i)),!0}return!1}function sv(t){var e=dr(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=Gy(n),e!==null){t.blockedOn=e,iv(t.priority,function(){nv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Aa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zc=r,n.target.dispatchEvent(r),Zc=null}else return e=So(n),e!==null&&Ad(e),t.blockedOn=n,!1;e.shift()}return!0}function qp(t,e,n){Aa(t)&&n.delete(e)}function HS(){ih=!1,zn!==null&&Aa(zn)&&(zn=null),jn!==null&&Aa(jn)&&(jn=null),Bn!==null&&Aa(Bn)&&(Bn=null),Fs.forEach(qp),Us.forEach(qp)}function is(t,e){t.blockedOn===e&&(t.blockedOn=null,ih||(ih=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,HS)))}function Vs(t){function e(i){return is(i,t)}if(0<sa.length){is(sa[0],t);for(var n=1;n<sa.length;n++){var r=sa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zn!==null&&is(zn,t),jn!==null&&is(jn,t),Bn!==null&&is(Bn,t),Fs.forEach(e),Us.forEach(e),n=0;n<On.length;n++)r=On[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)sv(n),n.blockedOn===null&&On.shift()}var hi=An.ReactCurrentBatchConfig;function qS(t,e,n,r){var i=he,s=hi.transition;hi.transition=null;try{he=1,Nd(t,e,n,r)}finally{he=i,hi.transition=s}}function WS(t,e,n,r){var i=he,s=hi.transition;hi.transition=null;try{he=4,Nd(t,e,n,r)}finally{he=i,hi.transition=s}}function Nd(t,e,n,r){var i=sh(t,e,n,r);if(i===null)cc(t,e,r,Xa,n),Hp(t,r);else if(BS(i,t,e,n,r))r.stopPropagation();else if(Hp(t,r),e&4&&-1<jS.indexOf(t)){for(;i!==null;){var s=So(i);if(s!==null&&tv(s),s=sh(t,e,n,r),s===null&&cc(t,e,r,Xa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else cc(t,e,r,null,n)}var Xa=null;function sh(t,e,n,r){if(Xa=null,t=Cd(r),t=dr(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xa=t,null}function ov(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OS()){case Td:return 1;case Jy:return 4;case Qa:case $S:return 16;case Zy:return 536870912;default:return 16}default:return 16}}var Un=null,Rd=null,Na=null;function av(){if(Na)return Na;var t,e=Rd,n=e.length,r,i="value"in Un?Un.value:Un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Na=i.slice(t,1<r?1-r:void 0)}function Ra(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function Wp(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oa:Wp,this.isPropagationStopped=Wp,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),e}var zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pd=Lt(zi),Eo=Ce({},zi,{view:0,detail:0}),KS=Lt(Eo),tc,nc,ss,Hl=Ce({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ss&&(ss&&t.type==="mousemove"?(tc=t.screenX-ss.screenX,nc=t.screenY-ss.screenY):nc=tc=0,ss=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:nc}}),Kp=Lt(Hl),GS=Ce({},Hl,{dataTransfer:0}),QS=Lt(GS),YS=Ce({},Eo,{relatedTarget:0}),rc=Lt(YS),XS=Ce({},zi,{animationName:0,elapsedTime:0,pseudoElement:0}),JS=Lt(XS),ZS=Ce({},zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),e_=Lt(ZS),t_=Ce({},zi,{data:0}),Gp=Lt(t_),n_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=i_[t])?!!e[t]:!1}function Dd(){return s_}var o_=Ce({},Eo,{key:function(t){if(t.key){var e=n_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?r_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dd,charCode:function(t){return t.type==="keypress"?Ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),a_=Lt(o_),l_=Ce({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=Lt(l_),u_=Ce({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dd}),c_=Lt(u_),h_=Ce({},zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),d_=Lt(h_),f_=Ce({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p_=Lt(f_),m_=[9,13,27,32],Od=kn&&"CompositionEvent"in window,ks=null;kn&&"documentMode"in document&&(ks=document.documentMode);var g_=kn&&"TextEvent"in window&&!ks,lv=kn&&(!Od||ks&&8<ks&&11>=ks),Yp=String.fromCharCode(32),Xp=!1;function uv(t,e){switch(t){case"keyup":return m_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function y_(t,e){switch(t){case"compositionend":return cv(e);case"keypress":return e.which!==32?null:(Xp=!0,Yp);case"textInput":return t=e.data,t===Yp&&Xp?null:t;default:return null}}function v_(t,e){if(Gr)return t==="compositionend"||!Od&&uv(t,e)?(t=av(),Na=Rd=Un=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lv&&e.locale!=="ko"?null:e.data;default:return null}}var w_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!w_[t.type]:e==="textarea"}function hv(t,e,n,r){By(r),e=Ja(e,"onChange"),0<e.length&&(n=new Pd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Is=null,zs=null;function E_(t){_v(t,0)}function ql(t){var e=Xr(t);if(My(e))return t}function S_(t,e){if(t==="change")return e}var dv=!1;if(kn){var ic;if(kn){var sc="oninput"in document;if(!sc){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),sc=typeof Zp.oninput=="function"}ic=sc}else ic=!1;dv=ic&&(!document.documentMode||9<document.documentMode)}function em(){Is&&(Is.detachEvent("onpropertychange",fv),zs=Is=null)}function fv(t){if(t.propertyName==="value"&&ql(zs)){var e=[];hv(e,zs,t,Cd(t)),Ky(E_,e)}}function __(t,e,n){t==="focusin"?(em(),Is=e,zs=n,Is.attachEvent("onpropertychange",fv)):t==="focusout"&&em()}function k_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(zs)}function I_(t,e){if(t==="click")return ql(e)}function C_(t,e){if(t==="input"||t==="change")return ql(e)}function T_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:T_;function js(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zc.call(e,i)||!sn(t[i],e[i]))return!1}return!0}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,e){var n=tm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tm(n)}}function pv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mv(){for(var t=window,e=Wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wa(t.document)}return e}function $d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function x_(t){var e=mv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pv(n.ownerDocument.documentElement,n)){if(r!==null&&$d(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=nm(n,s);var o=nm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var A_=kn&&"documentMode"in document&&11>=document.documentMode,Qr=null,oh=null,Cs=null,ah=!1;function rm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ah||Qr==null||Qr!==Wa(r)||(r=Qr,"selectionStart"in r&&$d(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cs&&js(Cs,r)||(Cs=r,r=Ja(oh,"onSelect"),0<r.length&&(e=new Pd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Qr)))}function aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},oc={},gv={};kn&&(gv=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function Wl(t){if(oc[t])return oc[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gv)return oc[t]=e[n];return t}var yv=Wl("animationend"),vv=Wl("animationiteration"),wv=Wl("animationstart"),Ev=Wl("transitionend"),Sv=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){Sv.set(t,e),br(e,[t])}for(var ac=0;ac<im.length;ac++){var lc=im[ac],N_=lc.toLowerCase(),R_=lc[0].toUpperCase()+lc.slice(1);rr(N_,"on"+R_)}rr(yv,"onAnimationEnd");rr(vv,"onAnimationIteration");rr(wv,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(Ev,"onTransitionEnd");wi("onMouseEnter",["mouseout","mouseover"]);wi("onMouseLeave",["mouseout","mouseover"]);wi("onPointerEnter",["pointerout","pointerover"]);wi("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function sm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NS(r,e,void 0,t),t.currentTarget=null}function _v(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;sm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;sm(i,a,u),s=l}}}if(Ga)throw t=nh,Ga=!1,nh=null,t}function ve(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var r=t+"__bubble";n.has(r)||(kv(e,t,2,!1),n.add(r))}function uc(t,e,n){var r=0;e&&(r|=4),kv(n,t,r,e)}var la="_reactListening"+Math.random().toString(36).slice(2);function Bs(t){if(!t[la]){t[la]=!0,Py.forEach(function(n){n!=="selectionchange"&&(P_.has(n)||uc(n,!1,t),uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[la]||(e[la]=!0,uc("selectionchange",!1,e))}}function kv(t,e,n,r){switch(ov(e)){case 1:var i=qS;break;case 4:i=WS;break;default:i=Nd}n=i.bind(null,e,n,t),i=void 0,!th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function cc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=dr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ky(function(){var u=s,c=Cd(n),d=[];e:{var f=Sv.get(t);if(f!==void 0){var y=Pd,g=t;switch(t){case"keypress":if(Ra(n)===0)break e;case"keydown":case"keyup":y=a_;break;case"focusin":g="focus",y=rc;break;case"focusout":g="blur",y=rc;break;case"beforeblur":case"afterblur":y=rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=QS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=c_;break;case yv:case vv:case wv:y=JS;break;case Ev:y=d_;break;case"scroll":y=KS;break;case"wheel":y=p_;break;case"copy":case"cut":case"paste":y=e_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Qp}var E=(e&4)!==0,A=!E&&t==="scroll",p=E?f!==null?f+"Capture":null:f;E=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=bs(h,p),w!=null&&E.push(Hs(h,w,m)))),A)break;h=h.return}0<E.length&&(f=new y(f,g,null,n,c),d.push({event:f,listeners:E}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==Zc&&(g=n.relatedTarget||n.fromElement)&&(dr(g)||g[In]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?dr(g):null,g!==null&&(A=Fr(g),g!==A||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(E=Kp,w="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(E=Qp,w="onPointerLeave",p="onPointerEnter",h="pointer"),A=y==null?f:Xr(y),m=g==null?f:Xr(g),f=new E(w,h+"leave",y,n,c),f.target=A,f.relatedTarget=m,w=null,dr(c)===u&&(E=new E(p,h+"enter",g,n,c),E.target=m,E.relatedTarget=A,w=E),A=w,y&&g)t:{for(E=y,p=g,h=0,m=E;m;m=Hr(m))h++;for(m=0,w=p;w;w=Hr(w))m++;for(;0<h-m;)E=Hr(E),h--;for(;0<m-h;)p=Hr(p),m--;for(;h--;){if(E===p||p!==null&&E===p.alternate)break t;E=Hr(E),p=Hr(p)}E=null}else E=null;y!==null&&om(d,f,y,E,!1),g!==null&&A!==null&&om(d,A,g,E,!0)}}e:{if(f=u?Xr(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var _=S_;else if(Jp(f))if(dv)_=C_;else{_=k_;var R=__}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=I_);if(_&&(_=_(t,u))){hv(d,_,n,c);break e}R&&R(t,f,u),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&Gc(f,"number",f.value)}switch(R=u?Xr(u):window,t){case"focusin":(Jp(R)||R.contentEditable==="true")&&(Qr=R,oh=u,Cs=null);break;case"focusout":Cs=oh=Qr=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,rm(d,n,c);break;case"selectionchange":if(A_)break;case"keydown":case"keyup":rm(d,n,c)}var S;if(Od)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Gr?uv(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(lv&&n.locale!=="ko"&&(Gr||I!=="onCompositionStart"?I==="onCompositionEnd"&&Gr&&(S=av()):(Un=c,Rd="value"in Un?Un.value:Un.textContent,Gr=!0)),R=Ja(u,I),0<R.length&&(I=new Gp(I,t,null,n,c),d.push({event:I,listeners:R}),S?I.data=S:(S=cv(n),S!==null&&(I.data=S)))),(S=g_?y_(t,n):v_(t,n))&&(u=Ja(u,"onBeforeInput"),0<u.length&&(c=new Gp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}_v(d,e)})}function Hs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bs(t,n),s!=null&&r.unshift(Hs(t,s,i)),s=bs(t,e),s!=null&&r.push(Hs(t,s,i))),t=t.return}return r}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function om(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=bs(n,s),l!=null&&o.unshift(Hs(n,l,a))):i||(l=bs(n,s),l!=null&&o.push(Hs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var D_=/\r\n?/g,O_=/\u0000|\uFFFD/g;function am(t){return(typeof t=="string"?t:""+t).replace(D_,`
`).replace(O_,"")}function ua(t,e,n){if(e=am(e),am(t)!==e&&n)throw Error(T(425))}function Za(){}var lh=null;function uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,$_=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,L_=typeof queueMicrotask=="function"?queueMicrotask:typeof lm!="undefined"?function(t){return lm.resolve(null).then(t).catch(M_)}:ch;function M_(t){setTimeout(function(){throw t})}function hc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vs(e)}function fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ji=Math.random().toString(36).slice(2),Jt="__reactFiber$"+ji,qs="__reactProps$"+ji,In="__reactContainer$"+ji,hh="__reactEvents$"+ji,b_="__reactListeners$"+ji,F_="__reactHandles$"+ji;function dr(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[In]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=um(t);t!==null;){if(n=t[Jt])return n;t=um(t)}return e}t=n,n=t.parentNode}return null}function So(t){return t=t[Jt]||t[In],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Kl(t){return t[qs]||null}var dh=[],Jr=-1;function ir(t){return{current:t}}function we(t){0>Jr||(t.current=dh[Jr],dh[Jr]=null,Jr--)}function ge(t,e){Jr++,dh[Jr]=t.current,t.current=e}var Jn={},ut=ir(Jn),Ct=ir(!1),Ir=Jn;function Ei(t,e){var n=t.type.contextTypes;if(!n)return Jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(t){return t=t.childContextTypes,t!=null}function el(){we(Ct),we(ut)}function cm(t,e,n){if(ut.current!==Jn)throw Error(T(168));ge(ut,e),ge(Ct,n)}function Iv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,_S(t)||"Unknown",i));return Ce({},n,r)}function tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jn,Ir=ut.current,ge(ut,t),ge(Ct,Ct.current),!0}function hm(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=Iv(t,e,Ir),r.__reactInternalMemoizedMergedChildContext=t,we(Ct),we(ut),ge(ut,t)):we(Ct),ge(Ct,n)}var hn=null,Gl=!1,dc=!1;function Cv(t){hn===null?hn=[t]:hn.push(t)}function U_(t){Gl=!0,Cv(t)}function sr(){if(!dc&&hn!==null){dc=!0;var t=0,e=he;try{var n=hn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}hn=null,Gl=!1}catch(i){throw hn!==null&&(hn=hn.slice(t+1)),Xy(Td,sr),i}finally{he=e,dc=!1}}return null}var V_=An.ReactCurrentBatchConfig;function Gt(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var nl=ir(null),rl=null,Zr=null,Ld=null;function Md(){Ld=Zr=rl=null}function bd(t){var e=nl.current;we(nl),t._currentValue=e}function fh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function di(t,e){rl=t,Ld=Zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Nt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(Ld!==t)if(t={context:t,memoizedValue:e,next:null},Zr===null){if(rl===null)throw Error(T(308));Zr=t,rl.dependencies={lanes:0,firstContext:t}}else Zr=Zr.next=t;return e}var Zt=null,Dn=!1;function Fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hn(t,e){var n=t.updateQueue;n!==null&&(n=n.shared,$e!==null&&(t.mode&1)!==0&&(re&2)===0?(t=n.interleaved,t===null?(e.next=e,Zt===null?Zt=[n]:Zt.push(n)):(e.next=t.next,t.next=e),n.interleaved=e):(t=n.pending,t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e))}function Pa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xd(t,n)}}function dm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function il(t,e,n,r){var i=t.updateQueue;Dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,E=a;switch(f=e,y=n,E.tag){case 1:if(g=E.payload,typeof g=="function"){d=g.call(y,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=E.payload,f=typeof g=="function"?g.call(y,d,f):g,f==null)break e;d=Ce({},d,f);break e;case 2:Dn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ci|=o,t.lanes=o,t.memoizedState=d}}function fm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var xv=new Ry.Component().refs;function ph(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Wn(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),Hn(t,s),e=jt(t,i,r),e!==null&&Pa(e,t,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Wn(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),Hn(t,s),e=jt(t,i,r),e!==null&&Pa(e,t,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Wn(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),Hn(t,i),e=jt(t,r,n),e!==null&&Pa(e,t,r)}};function pm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!js(n,r)||!js(i,s):!0}function Av(t,e,n){var r=!1,i=Jn,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=Tt(e)?Ir:ut.current,r=e.contextTypes,s=(r=r!=null)?Ei(t,i):Jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function mm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function mh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=xv,Fd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=Tt(e)?Ir:ut.current,i.context=Ei(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ph(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ql.enqueueReplaceState(i,i.state,null),il(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}var ei=[],ti=0,sl=null,ol=0,bt=[],Ft=0,Cr=null,pn=1,mn="";function ur(t,e){ei[ti++]=ol,ei[ti++]=sl,sl=t,ol=e}function Nv(t,e,n){bt[Ft++]=pn,bt[Ft++]=mn,bt[Ft++]=Cr,Cr=t;var r=pn;t=mn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pn=1<<32-Xt(e)+i|n<<i|r,mn=s+t}else pn=1<<s|n<<i|r,mn=t}function Ud(t){t.return!==null&&(ur(t,1),Nv(t,1,0))}function Vd(t){for(;t===sl;)sl=ei[--ti],ei[ti]=null,ol=ei[--ti],ei[ti]=null;for(;t===Cr;)Cr=bt[--Ft],bt[Ft]=null,mn=bt[--Ft],bt[Ft]=null,pn=bt[--Ft],bt[Ft]=null}var Rt=null,St=null,Se=!1,Qt=null;function Rv(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,St=fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,St=null,!0):!1;default:return!1}}function gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yh(t){if(Se){var e=St;if(e){var n=e;if(!gm(t,e)){if(gh(t))throw Error(T(418));e=fn(n.nextSibling);var r=Rt;e&&gm(t,e)?Rv(r,n):(t.flags=t.flags&-4097|2,Se=!1,Rt=t)}}else{if(gh(t))throw Error(T(418));t.flags=t.flags&-4097|2,Se=!1,Rt=t}}}function ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function os(t){if(t!==Rt)return!1;if(!Se)return ym(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uh(t.type,t.memoizedProps)),e&&(e=St)){if(gh(t)){for(t=St;t;)t=fn(t.nextSibling);throw Error(T(418))}for(;e;)Rv(t,e),e=fn(e.nextSibling)}if(ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=Rt?fn(t.stateNode.nextSibling):null;return!0}function Si(){St=Rt=null,Se=!1}function zd(t){Qt===null?Qt=[t]:Qt.push(t)}function as(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===xv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function ca(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vm(t){var e=t._init;return e(t._payload)}function Pv(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Zn(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,m,w){return h===null||h.tag!==6?(h=vc(m,p.mode,w),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,w){var _=m.type;return _===Kr?c(p,h,m.props.children,w,m.key):h!==null&&(h.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Pn&&vm(_)===h.type)?(w=i(h,m.props),w.ref=as(p,h,m),w.return=p,w):(w=Ma(m.type,m.key,m.props,null,p.mode,w),w.ref=as(p,h,m),w.return=p,w)}function u(p,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=wc(m,p.mode,w),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,w,_){return h===null||h.tag!==7?(h=Sr(m,p.mode,w,_),h.return=p,h):(h=i(h,m),h.return=p,h)}function d(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=vc(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ea:return m=Ma(h.type,h.key,h.props,null,p.mode,m),m.ref=as(p,null,h),m.return=p,m;case Wr:return h=wc(h,p.mode,m),h.return=p,h;case Pn:var w=h._init;return d(p,w(h._payload),m)}if(fs(h)||ts(h))return h=Sr(h,p.mode,m,null),h.return=p,h;ca(p,h)}return null}function f(p,h,m,w){var _=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:a(p,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ea:return m.key===_?l(p,h,m,w):null;case Wr:return m.key===_?u(p,h,m,w):null;case Pn:return _=m._init,f(p,h,_(m._payload),w)}if(fs(m)||ts(m))return _!==null?null:c(p,h,m,w,null);ca(p,m)}return null}function y(p,h,m,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(h,p,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ea:return p=p.get(w.key===null?m:w.key)||null,l(h,p,w,_);case Wr:return p=p.get(w.key===null?m:w.key)||null,u(h,p,w,_);case Pn:var R=w._init;return y(p,h,m,R(w._payload),_)}if(fs(w)||ts(w))return p=p.get(m)||null,c(h,p,w,_,null);ca(h,w)}return null}function g(p,h,m,w){for(var _=null,R=null,S=h,I=h=0,z=null;S!==null&&I<m.length;I++){S.index>I?(z=S,S=null):z=S.sibling;var F=f(p,S,m[I],w);if(F===null){S===null&&(S=z);break}t&&S&&F.alternate===null&&e(p,S),h=s(F,h,I),R===null?_=F:R.sibling=F,R=F,S=z}if(I===m.length)return n(p,S),Se&&ur(p,I),_;if(S===null){for(;I<m.length;I++)S=d(p,m[I],w),S!==null&&(h=s(S,h,I),R===null?_=S:R.sibling=S,R=S);return Se&&ur(p,I),_}for(S=r(p,S);I<m.length;I++)z=y(S,p,I,m[I],w),z!==null&&(t&&z.alternate!==null&&S.delete(z.key===null?I:z.key),h=s(z,h,I),R===null?_=z:R.sibling=z,R=z);return t&&S.forEach(function(oe){return e(p,oe)}),Se&&ur(p,I),_}function E(p,h,m,w){var _=ts(m);if(typeof _!="function")throw Error(T(150));if(m=_.call(m),m==null)throw Error(T(151));for(var R=_=null,S=h,I=h=0,z=null,F=m.next();S!==null&&!F.done;I++,F=m.next()){S.index>I?(z=S,S=null):z=S.sibling;var oe=f(p,S,F.value,w);if(oe===null){S===null&&(S=z);break}t&&S&&oe.alternate===null&&e(p,S),h=s(oe,h,I),R===null?_=oe:R.sibling=oe,R=oe,S=z}if(F.done)return n(p,S),Se&&ur(p,I),_;if(S===null){for(;!F.done;I++,F=m.next())F=d(p,F.value,w),F!==null&&(h=s(F,h,I),R===null?_=F:R.sibling=F,R=F);return Se&&ur(p,I),_}for(S=r(p,S);!F.done;I++,F=m.next())F=y(S,p,I,F.value,w),F!==null&&(t&&F.alternate!==null&&S.delete(F.key===null?I:F.key),h=s(F,h,I),R===null?_=F:R.sibling=F,R=F);return t&&S.forEach(function(me){return e(p,me)}),Se&&ur(p,I),_}function A(p,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Kr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ea:e:{for(var _=m.key,R=h;R!==null;){if(R.key===_){if(_=m.type,_===Kr){if(R.tag===7){n(p,R.sibling),h=i(R,m.props.children),h.return=p,p=h;break e}}else if(R.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Pn&&vm(_)===R.type){n(p,R.sibling),h=i(R,m.props),h.ref=as(p,R,m),h.return=p,p=h;break e}n(p,R);break}else e(p,R);R=R.sibling}m.type===Kr?(h=Sr(m.props.children,p.mode,w,m.key),h.return=p,p=h):(w=Ma(m.type,m.key,m.props,null,p.mode,w),w.ref=as(p,h,m),w.return=p,p=w)}return o(p);case Wr:e:{for(R=m.key;h!==null;){if(h.key===R)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=wc(m,p.mode,w),h.return=p,p=h}return o(p);case Pn:return R=m._init,A(p,h,R(m._payload),w)}if(fs(m))return g(p,h,m,w);if(ts(m))return E(p,h,m,w);ca(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=vc(m,p.mode,w),h.return=p,p=h),o(p)):n(p,h)}return A}var _i=Pv(!0),Dv=Pv(!1),_o={},tn=ir(_o),Ws=ir(_o),Ks=ir(_o);function fr(t){if(t===_o)throw Error(T(174));return t}function jd(t,e){switch(ge(Ks,e),ge(Ws,t),ge(tn,_o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yc(e,t)}we(tn),ge(tn,e)}function ki(){we(tn),we(Ws),we(Ks)}function Ov(t){fr(Ks.current);var e=fr(tn.current),n=Yc(e,t.type);e!==n&&(ge(Ws,t),ge(tn,n))}function Bd(t){Ws.current===t&&(we(tn),we(Ws))}var Ie=ir(0);function al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function Hd(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var Da=An.ReactCurrentDispatcher,Vt=An.ReactCurrentBatchConfig,Ii=0,xe=null,st=null,Ue=null,ll=!1,Ts=!1,Gs=0,z_=0;function rt(){throw Error(T(321))}function qd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function Wd(t,e,n,r,i,s){if(Ii=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Da.current=t===null||t.memoizedState===null?q_:W_,t=n(r,i),Ts){s=0;do{if(Ts=!1,Gs=0,25<=s)throw Error(T(301));s+=1,Ue=st=null,e.updateQueue=null,Da.current=K_,t=n(r,i)}while(Ts)}if(Da.current=ul,e=st!==null&&st.next!==null,Ii=0,Ue=st=xe=null,ll=!1,e)throw Error(T(300));return t}function Kd(){var t=Gs!==0;return Gs=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?xe.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function ln(){if(st===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=st.next;var e=Ue===null?xe.memoizedState:Ue.next;if(e!==null)Ue=e,st=t;else{if(t===null)throw Error(T(310));st=t,t={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Ue===null?xe.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function wr(t,e){return typeof e=="function"?e(t):e}function ha(t){var e=ln(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=st,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ii&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,xe.lanes|=c,Ci|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,sn(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,Ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function da(t){var e=ln(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);sn(s,e.memoizedState)||(Nt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $v(){}function Lv(t,e){var n=xe,r=ln(),i=e(),s=!sn(r.memoizedState,i);if(s&&(r.memoizedState=i,Nt=!0),r=r.queue,Ys(Fv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Qs(9,bv.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(T(349));(Ii&30)!==0||Mv(n,e,i)}return i}function Mv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bv(t,e,n,r){e.value=n,e.getSnapshot=r,Uv(e)&&jt(t,1,-1)}function Fv(t,e,n){return n(function(){Uv(e)&&jt(t,1,-1)})}function Uv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function pc(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:t},e.queue=t,t=t.dispatch=H_.bind(null,xe,t),[e.memoizedState,t]}function Qs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vv(){return ln().memoizedState}function Oa(t,e,n,r){var i=cn();xe.flags|=t,i.memoizedState=Qs(1|e,n,void 0,r===void 0?null:r)}function Yl(t,e,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(st!==null){var o=st.memoizedState;if(s=o.destroy,r!==null&&qd(r,o.deps)){i.memoizedState=Qs(e,n,s,r);return}}xe.flags|=t,i.memoizedState=Qs(1|e,n,s,r)}function mc(t,e){return Oa(8390656,8,t,e)}function Ys(t,e){return Yl(2048,8,t,e)}function zv(t,e){return Yl(4,2,t,e)}function jv(t,e){return Yl(4,4,t,e)}function Bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hv(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4,4,Bv.bind(null,e,t),n)}function Gd(){}function qv(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wv(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function j_(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=Vt.transition;Vt.transition={};try{t(!1),e()}finally{he=n,Vt.transition=r}}function Kv(){return ln().memoizedState}function B_(t,e,n){var r=Wn(t);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gv(t)?Qv(e,n):(Yv(t,e,n),n=mt(),t=jt(t,r,n),t!==null&&Xv(t,e,r))}function H_(t,e,n){var r=Wn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gv(t))Qv(e,i);else{Yv(t,e,i);var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,sn(a,o))return}catch{}finally{}n=mt(),t=jt(t,r,n),t!==null&&Xv(t,e,r)}}function Gv(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function Qv(t,e){Ts=ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yv(t,e,n){$e!==null&&(t.mode&1)!==0&&(re&2)===0?(t=e.interleaved,t===null?(n.next=n,Zt===null?Zt=[e]:Zt.push(e)):(n.next=t.next,t.next=n),e.interleaved=n):(t=e.pending,t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n)}function Xv(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xd(t,n)}}var ul={readContext:Bt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},q_={readContext:Bt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:mc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oa(4194308,4,Bv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oa(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=B_.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:pc,useDebugValue:Gd,useDeferredValue:function(t){var e=pc(t),n=e[0],r=e[1];return mc(function(){var i=Vt.transition;Vt.transition={};try{r(t)}finally{Vt.transition=i}},[t]),n},useTransition:function(){var t=pc(!1),e=t[0];return t=j_.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=cn();if(Se){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),$e===null)throw Error(T(349));(Ii&30)!==0||Mv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,mc(Fv.bind(null,r,s,t),[t]),r.flags|=2048,Qs(9,bv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=$e.identifierPrefix;if(Se){var n=mn,r=pn;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Gs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=z_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},W_={readContext:Bt,useCallback:qv,useContext:Bt,useEffect:Ys,useImperativeHandle:Hv,useInsertionEffect:zv,useLayoutEffect:jv,useMemo:Wv,useReducer:ha,useRef:Vv,useState:function(){return ha(wr)},useDebugValue:Gd,useDeferredValue:function(t){var e=ha(wr),n=e[0],r=e[1];return Ys(function(){var i=Vt.transition;Vt.transition={};try{r(t)}finally{Vt.transition=i}},[t]),n},useTransition:function(){var t=ha(wr)[0],e=ln().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:Lv,useId:Kv,unstable_isNewReconciler:!1},K_={readContext:Bt,useCallback:qv,useContext:Bt,useEffect:Ys,useImperativeHandle:Hv,useInsertionEffect:zv,useLayoutEffect:jv,useMemo:Wv,useReducer:da,useRef:Vv,useState:function(){return da(wr)},useDebugValue:Gd,useDeferredValue:function(t){var e=da(wr),n=e[0],r=e[1];return Ys(function(){var i=Vt.transition;Vt.transition={};try{r(t)}finally{Vt.transition=i}},[t]),n},useTransition:function(){var t=da(wr)[0],e=ln().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:Lv,useId:Kv,unstable_isNewReconciler:!1};function Qd(t,e){try{var n="",r=e;do n+=SS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var G_=typeof WeakMap=="function"?WeakMap:Map;function Jv(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dl||(dl=!0,xh=r),vh(t,e)},n}function Zv(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vh(t,e),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new G_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lk.bind(null,t,e,n),e.then(t,t))}function Em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sm(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,Hn(n,e))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var e0,wh,t0,n0;e0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wh=function(){};t0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fr(tn.current);var s=null;switch(n){case"input":i=Wc(t,i),r=Wc(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=Qc(t,i),r=Qc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Za)}Xc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ls.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ls.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};n0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ls(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Q_(t,e,n){var r=e.pendingProps;switch(Vd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return Tt(e.type)&&el(),it(e),null;case 3:return r=e.stateNode,ki(),we(Ct),we(ut),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(os(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Qt!==null&&(Rh(Qt),Qt=null))),wh(t,e),it(e),null;case 5:Bd(e);var i=fr(Ks.current);if(n=e.type,t!==null&&e.stateNode!=null)t0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return it(e),null}if(t=fr(tn.current),os(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jt]=e,r[qs]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<ms.length;i++)ve(ms[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":bp(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":Up(r,s),ve("invalid",r)}Xc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(ua(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(ua(r.textContent,a,t),i=["children",""+a]):Ls.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":ta(r),Fp(r,s,!0);break;case"textarea":ta(r),Vp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Za)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Uy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jt]=e,t[qs]=r,e0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jc(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<ms.length;i++)ve(ms[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":bp(t,r),i=Wc(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Up(t,r),i=Qc(t,r),ve("invalid",t);break;default:i=r}Xc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?jy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ms(t,l):typeof l=="number"&&Ms(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ls.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ve("scroll",t):l!=null&&Sd(t,s,l,o))}switch(n){case"input":ta(t),Fp(t,r,!1);break;case"textarea":ta(t),Vp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?li(t,!!r.multiple,s,!1):r.defaultValue!=null&&li(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)n0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=fr(Ks.current),fr(tn.current),os(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jt]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(o=(t.mode&1)!==0,t.tag){case 3:ua(r.nodeValue,n,o);break;case 5:t.memoizedProps[void 0]!==!0&&ua(r.nodeValue,n,o)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=e,e.stateNode=r}return it(e),null;case 13:if(we(Ie),r=e.memoizedState,Se&&St!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(r=St;r;)r=fn(r.nextSibling);return Si(),e.flags|=98560,e}if(r!==null&&r.dehydrated!==null){if(r=os(e),t===null){if(!r)throw Error(T(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(T(317));r[Jt]=e}else Si(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return it(e),null}return Qt!==null&&(Rh(Qt),Qt=null),(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?os(e):n=t.memoizedState!==null,r&&!n&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Ie.current&1)!==0?Me===0&&(Me=3):tf())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return ki(),wh(t,e),t===null&&Bs(e.stateNode.containerInfo),it(e),null;case 10:return bd(e.type._context),it(e),null;case 17:return Tt(e.type)&&el(),it(e),null;case 19:if(we(Ie),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ls(s,!1);else{if(Me!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=al(t),o!==null){for(e.flags|=128,ls(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>Ti&&(e.flags|=128,r=!0,ls(s,!1),e.lanes=4194304)}else{if(!r)if(t=al(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ls(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return it(e),null}else 2*Re()-s.renderingStartTime>Ti&&n!==1073741824&&(e.flags|=128,r=!0,ls(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=Ie.current,ge(Ie,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return ef(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(At&1073741824)!==0&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}var Y_=An.ReactCurrentOwner,Nt=!1;function ht(t,e,n,r){e.child=t===null?Dv(e,null,n,r):_i(e,t.child,n,r)}function _m(t,e,n,r,i){n=n.render;var s=e.ref;return di(e,i),r=Wd(t,e,n,r,s,i),n=Kd(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(Se&&n&&Ud(e),e.flags|=1,ht(t,e,r,i),e.child)}function km(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!nf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,r0(t,e,s,r,i)):(t=Ma(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:js,n(o,r)&&t.ref===e.ref)return Cn(t,e,i)}return e.flags|=1,t=Zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function r0(t,e,n,r,i){if(t!==null&&js(t.memoizedProps,r)&&t.ref===e.ref)if(Nt=!1,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Nt=!0);else return e.lanes=t.lanes,Cn(t,e,i);return Eh(t,e,n,r,i)}function i0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null},ge(ni,At),At|=n;else if((n&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null},r=s!==null?s.baseLanes:n,ge(ni,At),At|=r;else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null},e.updateQueue=null,ge(ni,At),At|=t,null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(ni,At),At|=r;return ht(t,e,i,n),e.child}function s0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Eh(t,e,n,r,i){var s=Tt(n)?Ir:ut.current;return s=Ei(e,s),di(e,i),n=Wd(t,e,n,r,s,i),r=Kd(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(Se&&r&&Ud(e),e.flags|=1,ht(t,e,n,i),e.child)}function Im(t,e,n,r,i){if(Tt(n)){var s=!0;tl(e)}else s=!1;if(di(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Av(e,n,r),mh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=Tt(n)?Ir:ut.current,u=Ei(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&mm(e,o,r,u),Dn=!1;var f=e.memoizedState;o.state=f,il(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ct.current||Dn?(typeof c=="function"&&(ph(e,n,c,r),l=e.memoizedState),(a=Dn||pm(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Tv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Gt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=Tt(n)?Ir:ut.current,l=Ei(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&mm(e,o,r,l),Dn=!1,f=e.memoizedState,o.state=f,il(e,r,o,i);var g=e.memoizedState;a!==d||f!==g||Ct.current||Dn?(typeof y=="function"&&(ph(e,n,y,r),g=e.memoizedState),(u=Dn||pm(e,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Sh(t,e,n,r,s,i)}function Sh(t,e,n,r,i,s){s0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hm(e,n,!1),Cn(t,e,s);r=e.stateNode,Y_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_i(e,t.child,null,s),e.child=_i(e,null,a,s)):ht(t,e,a,s),e.memoizedState=r.state,i&&hm(e,n,!0),e.child}function o0(t){var e=t.stateNode;e.pendingContext?cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cm(t,e.context,!1),jd(t,e.containerInfo)}function Cm(t,e,n,r,i){return Si(),zd(i),e.flags|=256,ht(t,e,n,r),e.child}var fa={dehydrated:null,treeContext:null,retryLane:0};function pa(t){return{baseLanes:t,cachePool:null}}function a0(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ie,i&1),t===null)return yh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(i=r.children,t=r.fallback,s?(r=e.mode,s=e.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=ml(i,r,0,null),t=Sr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pa(n),e.memoizedState=fa,t):_h(e,i));if(i=t.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,ma(t,e,n,Error(T(422)))):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ml({mode:"visible",children:r.children},i,0,null),s=Sr(s,i,n,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&_i(e,t.child,null,n),e.child.memoizedState=pa(n),e.memoizedState=fa,s);if((e.mode&1)===0)e=ma(t,e,n,null);else if(a.data==="$!")e=ma(t,e,n,Error(T(419)));else if(r=(n&t.childLanes)!==0,Nt||r){if(r=$e,r!==null){switch(n&-n){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}r=(s&(r.suspendedLanes|n))!==0?0:s,r!==0&&r!==i.retryLane&&(i.retryLane=r,jt(t,r,-1))}tf(),e=ma(t,e,n,Error(T(421)))}else a.data==="$?"?(e.flags|=128,e.child=t.child,e=uk.bind(null,t),a._reactRetry=e,e=null):(n=i.treeContext,St=fn(a.nextSibling),Rt=e,Se=!0,Qt=null,n!==null&&(bt[Ft++]=pn,bt[Ft++]=mn,bt[Ft++]=Cr,pn=n.id,mn=n.overflow,Cr=e),e=_h(e,e.pendingProps.children),e.flags|=4096);return e}return s?(r=xm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?pa(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=fa,r):(n=Tm(t,e,r.children,n),e.memoizedState=null,n)}return s?(r=xm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?pa(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=fa,r):(n=Tm(t,e,r.children,n),e.memoizedState=null,n)}function _h(t,e){return e=ml({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tm(t,e,n,r){var i=t.child;return t=i.sibling,n=Zn(i,{mode:"visible",children:n}),(e.mode&1)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n}function xm(t,e,n,r,i){var s=e.mode;t=t.child;var o=t.sibling,a={mode:"hidden",children:n};return(s&1)===0&&e.child!==t?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=Zn(t,a),n.subtreeFlags=t.subtreeFlags&14680064),o!==null?r=Zn(o,r):(r=Sr(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function ma(t,e,n,r){return r!==null&&zd(r),_i(e,t.child,null,n),t=_h(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Am(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fh(t.return,e,n)}function gc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function l0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=Ie.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Am(t,n,e);else if(t.tag===19)Am(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ie,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&al(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&al(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gc(e,!0,n,null,s);break;case"together":gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ci|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function X_(t,e,n){switch(e.tag){case 3:o0(e),Si();break;case 5:Ov(e);break;case 1:Tt(e.type)&&tl(e);break;case 4:jd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ie,Ie.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?a0(t,e,n):(ge(Ie,Ie.current&1),t=Cn(t,e,n),t!==null?t.sibling:null);ge(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return l0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,i0(t,e,n)}return Cn(t,e,n)}function J_(t,e){switch(Vd(e),e.tag){case 1:return Tt(e.type)&&el(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ki(),we(Ct),we(ut),Hd(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Bd(e),null;case 13:if(we(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));Si()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Ie),null;case 4:return ki(),null;case 10:return bd(e.type._context),null;case 22:case 23:return ef(),null;case 24:return null;default:return null}}var ga=!1,pr=!1,Z_=typeof WeakSet=="function"?WeakSet:Set,$=null;function cl(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_t(t,e,r)}else n.current=null}function kh(t,e,n){try{n()}catch(r){_t(t,e,r)}}var Nm=!1;function ek(t,e){if(t=mv(),$d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lh={focusedElem:t,selectionRange:n},$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var E=g.memoizedProps,A=g.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?E:Gt(e.type,E),A);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;if(m.nodeType===1)m.textContent="";else if(m.nodeType===9){var w=m.body;w!=null&&(w.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(_){_t(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return g=Nm,Nm=!1,g}function Xs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&kh(e,n,s)}i=i.next}while(i!==r)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rm(t,e,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Bl,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var r=t=t.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&kh(e,n,s),r=r.next}while(r!==t)}break;case 1:if(cl(e,n),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(o){_t(e,n,o)}break;case 5:cl(e,n);break;case 4:h0(t,e,n)}}function u0(t){var e=t.alternate;e!==null&&(t.alternate=null,u0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[qs],delete e[hh],delete e[b_],delete e[F_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c0(t){return t.tag===5||t.tag===3||t.tag===4}function Pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dm(t){e:{for(var e=t.return;e!==null;){if(c0(e))break e;e=e.return}throw Error(T(160))}var n=e;switch(n.tag){case 5:e=n.stateNode,n.flags&32&&(Ms(e,""),n.flags&=-33),n=Pm(t),Th(t,n,e);break;case 3:case 4:e=n.stateNode.containerInfo,n=Pm(t),Ch(t,n,e);break;default:throw Error(T(161))}}function Ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Za));else if(r!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}function Th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}function h0(t,e,n){for(var r=e,i=!1,s,o;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(T(160));switch(s=i.stateNode,i.tag){case 5:o=!1;break e;case 3:s=s.containerInfo,o=!0;break e;case 4:s=s.containerInfo,o=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var a=t,l=r,u=n,c=l;;)if(Rm(a,c,u),c.child!==null&&c.tag!==4)c.child.return=c,c=c.child;else{if(c===l)break e;for(;c.sibling===null;){if(c.return===null||c.return===l)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}o?(a=s,l=r.stateNode,a.nodeType===8?a.parentNode.removeChild(l):a.removeChild(l)):s.removeChild(r.stateNode)}else if(r.tag===18)o?(a=s,l=r.stateNode,a.nodeType===8?hc(a.parentNode,l):a.nodeType===1&&hc(a,l),Vs(a)):hc(s,r.stateNode);else if(r.tag===4){if(r.child!==null){s=r.stateNode.containerInfo,o=!0,r.child.return=r,r=r.child;continue}}else if(Rm(t,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function yc(t,e){switch(e.tag){case 0:case 11:case 14:case 15:Xs(3,e,e.return),Xl(3,e),Xs(5,e,e.return);return;case 1:return;case 5:var n=e.stateNode;if(n!=null){var r=e.memoizedProps,i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(t==="input"&&r.type==="radio"&&r.name!=null&&by(n,r),Jc(t,i),e=Jc(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?jy(n,a):o==="dangerouslySetInnerHTML"?Vy(n,a):o==="children"?Ms(n,a):Sd(n,o,a,e)}switch(t){case"input":Kc(n,r);break;case"textarea":Fy(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?li(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?li(n,!!r.multiple,r.defaultValue,!0):li(n,!!r.multiple,r.multiple?[]:"",!1))}n[qs]=r}}return;case 6:if(e.stateNode===null)throw Error(T(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:t!==null&&t.memoizedState.isDehydrated&&Vs(e.stateNode.containerInfo);return;case 12:return;case 13:Om(e);return;case 19:Om(e);return;case 17:return}throw Error(T(163))}function Om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Z_),e.forEach(function(r){var i=ck.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tk(t,e){for($=e;$!==null;){e=$;var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{h0(t,i,e);var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(I){_t(i,e,I)}}if(n=e.child,(e.subtreeFlags&12854)!==0&&n!==null)n.return=e,$=n;else for(;$!==null;){e=$;try{var o=e.flags;if(o&32&&Ms(e.stateNode,""),o&512){var a=e.alternate;if(a!==null){var l=a.ref;l!==null&&(typeof l=="function"?l(null):l.current=null)}}if(o&8192)switch(e.tag){case 13:if(e.memoizedState!==null){var u=e.alternate;(u===null||u.memoizedState===null)&&(Jd=Re())}break;case 22:var c=e.memoizedState!==null,d=e.alternate,f=d!==null&&d.memoizedState!==null;n=e;e:{r=n,i=c;for(var y=null,g=r;;){if(g.tag===5){if(y===null){y=g;var E=g.stateNode;if(i){var A=E.style;typeof A.setProperty=="function"?A.setProperty("display","none","important"):A.display="none"}else{var p=g.stateNode,h=g.memoizedProps.style,m=h!=null&&h.hasOwnProperty("display")?h.display:null;p.style.display=zy("display",m)}}}else if(g.tag===6)y===null&&(g.stateNode.nodeValue=i?"":g.memoizedProps);else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===r)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)break e;y===g&&(y=null),g=g.return}y===g&&(y=null),g.sibling.return=g.return,g=g.sibling}}if(c&&!f&&(n.mode&1)!==0){$=n;for(var w=n.child;w!==null;){for(n=$=w;$!==null;){r=$;var _=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Xs(4,r,r.return);break;case 1:cl(r,r.return);var R=r.stateNode;if(typeof R.componentWillUnmount=="function"){var S=r.return;try{R.props=r.memoizedProps,R.state=r.memoizedState,R.componentWillUnmount()}catch(I){_t(r,S,I)}}break;case 5:cl(r,r.return);break;case 22:if(r.memoizedState!==null){Lm(n);continue}}_!==null?(_.return=r,$=_):Lm(n)}w=w.sibling}}}switch(o&4102){case 2:Dm(e),e.flags&=-3;break;case 6:Dm(e),e.flags&=-3,yc(e.alternate,e);break;case 4096:e.flags&=-4097;break;case 4100:e.flags&=-4097,yc(e.alternate,e);break;case 4:yc(e.alternate,e)}}catch(I){_t(e,e.return,I)}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}}function nk(t,e,n){$=t,d0(t)}function d0(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ga;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||pr;a=ga;var u=pr;if(ga=o,(pr=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?Mm(i):l!==null?(l.return=o,$=l):Mm(i);for(;s!==null;)$=s,d0(s),s=s.sibling;$=i,ga=a,pr=u}$m(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,$=s):$m(t)}}function $m(t){for(;$!==null;){var e=$;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:pr||Xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pr)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Vs(d)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(T(163))}pr||e.flags&512&&Ih(e)}catch(f){_t(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Lm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Mm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(l){_t(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){_t(e,i,l)}}var s=e.return;try{Ih(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{Ih(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var rk=Math.ceil,hl=An.ReactCurrentDispatcher,Yd=An.ReactCurrentOwner,zt=An.ReactCurrentBatchConfig,re=0,$e=null,Oe=null,Qe=0,At=0,ni=ir(0),Me=0,Js=null,Ci=0,Jl=0,Xd=0,xs=null,Et=null,Jd=0,Ti=1/0,dl=!1,xh=null,qn=null,ya=!1,Vn=null,fl=0,As=0,Ah=null,$a=-1,La=0;function mt(){return(re&6)!==0?Re():$a!==-1?$a:$a=Re()}function Wn(t){return(t.mode&1)===0?1:(re&2)!==0&&Qe!==0?Qe&-Qe:V_.transition!==null?(La===0&&(t=ra,ra<<=1,(ra&4194240)===0&&(ra=64),La=t),La):(t=he,t!==0||(t=window.event,t=t===void 0?16:ov(t.type)),t)}function jt(t,e,n){if(50<As)throw As=0,Ah=null,Error(T(185));var r=Zl(t,e);return r===null?null:(wo(r,e,n),((re&2)===0||r!==$e)&&(r===$e&&((re&2)===0&&(Jl|=e),Me===4&&$n(r,Qe)),xt(r,n),e===1&&re===0&&(t.mode&1)===0&&(Ti=Re()+500,Gl&&sr())),r)}function Zl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function xt(t,e){var n=t.callbackNode;VS(t,e);var r=Ya(t,t===$e?Qe:0);if(r===0)n!==null&&Bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bp(n),e===1)t.tag===0?U_(bm.bind(null,t)):Cv(bm.bind(null,t)),L_(function(){re===0&&sr()}),n=null;else{switch(ev(r)){case 1:n=Td;break;case 4:n=Jy;break;case 16:n=Qa;break;case 536870912:n=Zy;break;default:n=Qa}n=E0(n,f0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function f0(t,e){if($a=-1,La=0,(re&6)!==0)throw Error(T(327));var n=t.callbackNode;if(fi()&&t.callbackNode!==n)return null;var r=Ya(t,t===$e?Qe:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=pl(t,r);else{e=r;var i=re;re|=2;var s=m0();($e!==t||Qe!==e)&&(Ti=Re()+500,Er(t,e));do try{ok();break}catch(a){p0(t,a)}while(1);Md(),hl.current=s,re=i,Oe!==null?e=0:($e=null,Qe=0,e=Me)}if(e!==0){if(e===2&&(i=rh(t),i!==0&&(r=i,e=Nh(t,i))),e===1)throw n=Js,Er(t,0),$n(t,r),xt(t,Re()),n;if(e===6)$n(t,r);else{if(i=t.current.alternate,(r&30)===0&&!ik(i)&&(e=pl(t,r),e===2&&(s=rh(t),s!==0&&(r=s,e=Nh(t,s))),e===1))throw n=Js,Er(t,0),$n(t,r),xt(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:cr(t,Et);break;case 3:if($n(t,r),(r&130023424)===r&&(e=Jd+500-Re(),10<e)){if(Ya(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ch(cr.bind(null,t,Et),e);break}cr(t,Et);break;case 4:if($n(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rk(r/1960))-r,10<r){t.timeoutHandle=ch(cr.bind(null,t,Et),r);break}cr(t,Et);break;case 5:cr(t,Et);break;default:throw Error(T(329))}}}return xt(t,Re()),t.callbackNode===n?f0.bind(null,t):null}function Nh(t,e){var n=xs;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=pl(t,e),t!==2&&(e=Et,Et=n,e!==null&&Rh(e)),t}function Rh(t){Et===null?Et=t:Et.push.apply(Et,t)}function ik(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $n(t,e){for(e&=~Xd,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function bm(t){if((re&6)!==0)throw Error(T(327));fi();var e=Ya(t,0);if((e&1)===0)return xt(t,Re()),null;var n=pl(t,e);if(t.tag!==0&&n===2){var r=rh(t);r!==0&&(e=r,n=Nh(t,r))}if(n===1)throw n=Js,Er(t,0),$n(t,e),xt(t,Re()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,Et),xt(t,Re()),null}function Zd(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Ti=Re()+500,Gl&&sr())}}function Tr(t){Vn!==null&&Vn.tag===0&&(re&6)===0&&fi();var e=re;re|=1;var n=zt.transition,r=he;try{if(zt.transition=null,he=1,t)return t()}finally{he=r,zt.transition=n,re=e,(re&6)===0&&sr()}}function ef(){At=ni.current,we(ni)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$_(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Vd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:ki(),we(Ct),we(ut),Hd();break;case 5:Bd(r);break;case 4:ki();break;case 13:we(Ie);break;case 19:we(Ie);break;case 10:bd(r.type._context);break;case 22:case 23:ef()}n=n.return}if($e=t,Oe=t=Zn(t.current,null),Qe=At=e,Me=0,Js=null,Xd=Jl=Ci=0,Et=xs=null,Zt!==null){for(e=0;e<Zt.length;e++)if(n=Zt[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zt=null}return t}function p0(t,e){do{var n=Oe;try{if(Md(),Da.current=ul,ll){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ll=!1}if(Ii=0,Ue=st=xe=null,Ts=!1,Gs=0,Yd.current=null,n===null||n.return===null){Me=1,Js=e,Oe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Em(o);if(y!==null){y.flags&=-257,Sm(y,o,a,s,e),y.mode&1&&wm(s,u,e),e=y,l=u;var g=e.updateQueue;if(g===null){var E=new Set;E.add(l),e.updateQueue=E}else g.add(l);break e}else{if((e&1)===0){wm(s,u,e),tf();break e}l=Error(T(426))}}else if(Se&&a.mode&1){var A=Em(o);if(A!==null){(A.flags&65536)===0&&(A.flags|=256),Sm(A,o,a,s,e),zd(l);break e}}s=l,Me!==4&&(Me=2),xs===null?xs=[s]:xs.push(s),l=Qd(l,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var p=Jv(a,l,e);dm(a,p);break e;case 1:s=l;var h=a.type,m=a.stateNode;if((a.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qn===null||!qn.has(m)))){a.flags|=65536,e&=-e,a.lanes|=e;var w=Zv(a,s,e);dm(a,w);break e}}a=a.return}while(a!==null)}y0(n)}catch(_){e=_,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function m0(){var t=hl.current;return hl.current=ul,t===null?ul:t}function tf(){(Me===0||Me===3||Me===2)&&(Me=4),$e===null||(Ci&268435455)===0&&(Jl&268435455)===0||$n($e,Qe)}function pl(t,e){var n=re;re|=2;var r=m0();$e===t&&Qe===e||Er(t,e);do try{sk();break}catch(i){p0(t,i)}while(1);if(Md(),re=n,hl.current=r,Oe!==null)throw Error(T(261));return $e=null,Qe=0,Me}function sk(){for(;Oe!==null;)g0(Oe)}function ok(){for(;Oe!==null&&!PS();)g0(Oe)}function g0(t){var e=w0(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?y0(t):Oe=e,Yd.current=null}function y0(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Q_(n,e,At),n!==null){Oe=n;return}}else{if(n=J_(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,Oe=null;return}}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Me===0&&(Me=5)}function cr(t,e){var n=he,r=zt.transition;try{zt.transition=null,he=1,ak(t,e,n)}finally{zt.transition=r,he=n}return null}function ak(t,e,n){do fi();while(Vn!==null);if((re&6)!==0)throw Error(T(327));var r=t.finishedWork,i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(zS(t,s),t===$e&&(Oe=$e=null,Qe=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||ya||(ya=!0,E0(Qa,function(){return fi(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=zt.transition,zt.transition=null;var o=he;he=1;var a=re;re|=4,Yd.current=null,ek(t,r),tk(t,r),x_(lh),lh=null,t.current=r,nk(r),DS(),re=a,he=o,zt.transition=s}else t.current=r;if(ya&&(ya=!1,Vn=t,fl=i),s=t.pendingLanes,s===0&&(qn=null),LS(r.stateNode),xt(t,Re()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)n(e[r]);if(dl)throw dl=!1,t=xh,xh=null,t;return(fl&1)!==0&&t.tag!==0&&fi(),s=t.pendingLanes,(s&1)!==0?t===Ah?As++:(As=0,Ah=t):As=0,sr(),null}function fi(){if(Vn!==null){var t=ev(fl),e=zt.transition,n=he;try{if(zt.transition=null,he=16>t?16:t,Vn===null)var r=!1;else{if(t=Vn,Vn=null,fl=0,(re&6)!==0)throw Error(T(331));var i=re;for(re|=4,$=t.current;$!==null;){var s=$,o=s.child;if(($.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:Xs(8,c,s)}var d=c.child;if(d!==null)d.return=c,$=d;else for(;$!==null;){c=$;var f=c.sibling,y=c.return;if(u0(c),c===u){$=null;break}if(f!==null){f.return=y,$=f;break}$=y}}}var g=s.alternate;if(g!==null){var E=g.child;if(E!==null){g.child=null;do{var A=E.sibling;E.sibling=null,E=A}while(E!==null)}}$=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Xs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,$=p;break e}$=s.return}}var h=t.current;for($=h;$!==null;){o=$;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,$=m;else e:for(o=h;$!==null;){if(a=$,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Xl(9,a)}}catch(_){_t(a,a.return,_)}if(a===o){$=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,$=w;break e}$=a.return}}if(re=i,sr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Bl,t)}catch{}r=!0}return r}finally{he=n,zt.transition=e}}return!1}function Fm(t,e,n){e=Qd(n,e),e=Jv(t,e,1),Hn(t,e),e=mt(),t=Zl(t,1),t!==null&&(wo(t,1,e),xt(t,e))}function _t(t,e,n){if(t.tag===3)Fm(t,t,n);else for(;e!==null;){if(e.tag===3){Fm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){t=Qd(n,t),t=Zv(e,t,1),Hn(e,t),t=mt(),e=Zl(e,1),e!==null&&(wo(e,1,t),xt(e,t));break}}e=e.return}}function lk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Qe&n)===n&&(Me===4||Me===3&&(Qe&130023424)===Qe&&500>Re()-Jd?Er(t,0):Xd|=n),xt(t,e)}function v0(t,e){e===0&&((t.mode&1)===0?e=1:(e=ia,ia<<=1,(ia&130023424)===0&&(ia=4194304)));var n=mt();t=Zl(t,e),t!==null&&(wo(t,e,n),xt(t,n))}function uk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),v0(t,n)}function ck(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),v0(t,n)}var w0;w0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)Nt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Nt=!1,X_(t,e,n);Nt=(t.flags&131072)!==0}else Nt=!1,Se&&(e.flags&1048576)!==0&&Nv(e,ol,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps;var i=Ei(e,ut.current);di(e,n),i=Wd(null,e,r,t,i,n);var s=Kd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tt(r)?(s=!0,tl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fd(e),i.updater=Ql,e.stateNode=i,i._reactInternals=e,mh(e,r,t,n),e=Sh(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Ud(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dk(r),t=Gt(r,t),i){case 0:e=Eh(null,e,r,t,n);break e;case 1:e=Im(null,e,r,t,n);break e;case 11:e=_m(null,e,r,t,n);break e;case 14:e=km(null,e,r,Gt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Eh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Im(t,e,r,i,n);case 3:e:{if(o0(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Tv(t,e),il(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Error(T(423)),e=Cm(t,e,r,n,i);break e}else if(r!==i){i=Error(T(424)),e=Cm(t,e,r,n,i);break e}else for(St=fn(e.stateNode.containerInfo.firstChild),Rt=e,Se=!0,Qt=null,n=Dv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Si(),r===i){e=Cn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return Ov(e),t===null&&yh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uh(r,i)?o=null:s!==null&&uh(r,s)&&(e.flags|=32),s0(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&yh(e),null;case 13:return a0(t,e,n);case 4:return jd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_i(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),_m(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(nl,r._currentValue),r._currentValue=o,s!==null)if(sn(s.value,o)){if(s.children===i.children&&!Ct.current){e=Cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=En(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),fh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,di(e,n),i=Bt(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=Gt(r,e.pendingProps),i=Gt(r.type,i),km(t,e,r,i,n);case 15:return r0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Tt(r)?(t=!0,tl(e)):t=!1,di(e,n),Av(e,r,i),mh(e,r,i,n),Sh(null,e,r,!0,t,n);case 19:return l0(t,e,n);case 22:return i0(t,e,n)}throw Error(T(156,e.tag))};function E0(t,e){return Xy(t,e)}function hk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new hk(t,e,n,r)}function nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dk(t){if(typeof t=="function")return nf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kd)return 11;if(t===Id)return 14}return 2}function Zn(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ma(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")nf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Kr:return Sr(n.children,i,s,e);case _d:o=8,i|=8;break;case jc:return t=Ut(12,n,e,i|2),t.elementType=jc,t.lanes=s,t;case Bc:return t=Ut(13,n,e,i),t.elementType=Bc,t.lanes=s,t;case Hc:return t=Ut(19,n,e,i),t.elementType=Hc,t.lanes=s,t;case $y:return ml(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dy:o=10;break e;case Oy:o=9;break e;case kd:o=11;break e;case Id:o=14;break e;case Pn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Sr(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function ml(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=$y,t.lanes=n,t.stateNode={},t}function vc(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function wc(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ec(0),this.expirationTimes=ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ec(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rf(t,e,n,r,i,s,o,a,l){return t=new fk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null},Fd(s),t}function pk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function S0(t){if(!t)return Jn;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(Tt(n))return Iv(t,n,e)}return e}function _0(t,e,n,r,i,s,o,a,l){return t=rf(n,r,!0,t,i,s,o,a,l),t.context=S0(null),n=t.current,r=mt(),i=Wn(n),s=En(r,i),s.callback=e!=null?e:null,Hn(n,s),t.current.lanes=i,wo(t,i,r),xt(t,r),t}function eu(t,e,n,r){var i=e.current,s=mt(),o=Wn(i);return n=S0(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),Hn(i,e),t=jt(i,o,s),t!==null&&Pa(t,i,o),o}function gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sf(t,e){Um(t,e),(t=t.alternate)&&Um(t,e)}function mk(){return null}var k0=typeof reportError=="function"?reportError:function(t){console.error(t)};function of(t){this._internalRoot=t}tu.prototype.render=of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));eu(t,e,null,null)};tu.prototype.unmount=of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){eu(null,t,null,null)}),e[In]=null}};function tu(t){this._internalRoot=t}tu.prototype.unstable_scheduleHydration=function(t){if(t){var e=rv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<On.length&&e!==0&&e<On[n].priority;n++);On.splice(n,0,t),n===0&&sv(t)}};function af(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function gk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=gl(o);s.call(u)}}var o=_0(e,r,t,0,null,!1,!1,"",Vm);return t._reactRootContainer=o,t[In]=o.current,Bs(t.nodeType===8?t.parentNode:t),Tr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=gl(l);a.call(u)}}var l=rf(t,0,!1,null,null,!1,!1,"",Vm);return t._reactRootContainer=l,t[In]=l.current,Bs(t.nodeType===8?t.parentNode:t),Tr(function(){eu(e,l,n,r)}),l}function ru(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=gl(o);a.call(l)}}eu(e,o,t,i)}else o=gk(n,e,t,i,r);return gl(o)}tv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ps(e.pendingLanes);n!==0&&(xd(e,n|1),xt(e,Re()),(re&6)===0&&(Ti=Re()+500,sr()))}break;case 13:var r=mt();Tr(function(){return jt(t,1,r)}),sf(t,1)}};Ad=function(t){if(t.tag===13){var e=mt();jt(t,134217728,e),sf(t,134217728)}};nv=function(t){if(t.tag===13){var e=mt(),n=Wn(t);jt(t,n,e),sf(t,n)}};rv=function(){return he};iv=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};eh=function(t,e,n){switch(e){case"input":if(Kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kl(r);if(!i)throw Error(T(90));My(r),Kc(r,i)}}}break;case"textarea":Fy(t,n);break;case"select":e=n.value,e!=null&&li(t,!!n.multiple,e,!1)}};qy=Zd;Wy=Tr;var yk={usingClientEntryPoint:!1,Events:[So,Xr,Kl,By,Hy,Zd]},us={findFiberByHostInstance:dr,bundleType:0,version:"18.0.0-fc46dba67-20220329",rendererPackageName:"react-dom"},vk={bundleType:us.bundleType,version:us.version,rendererPackageName:us.rendererPackageName,rendererConfig:us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qy(t),t===null?null:t.stateNode},findFiberByHostInstance:us.findFiberByHostInstance||mk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!va.isDisabled&&va.supportsFiber)try{Bl=va.inject(vk),en=va}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yk;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!af(e))throw Error(T(200));return pk(t,e,null,n)};$t.createRoot=function(t,e){if(!af(t))throw Error(T(299));var n=!1,r="",i=k0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rf(t,1,!1,null,null,n,!1,r,i),t[In]=e.current,Bs(t.nodeType===8?t.parentNode:t),new of(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=Qy(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return Tr(t)};$t.hydrate=function(t,e,n){if(!nu(e))throw Error(T(200));return ru(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!af(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=k0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_0(e,null,t,1,n!=null?n:null,i,!1,s,o),t[In]=e.current,Bs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new tu(e)};$t.render=function(t,e,n){if(!nu(e))throw Error(T(200));return ru(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!nu(t))throw Error(T(40));return t._reactRootContainer?(Tr(function(){ru(null,null,t,!1,function(){t._reactRootContainer=null,t[In]=null})}),!0):!1};$t.unstable_batchedUpdates=Zd;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nu(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return ru(t,e,n,!1,r)};$t.version="18.0.0-fc46dba67-20220329";function I0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I0)}catch(t){console.error(t)}}I0(),xy.exports=$t;var C0,wk=xy.exports;C0=wk.createRoot;function yl(){return yl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yl.apply(this,arguments)}var mr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mr||(mr={}));var zm=function(t){return t},jm="beforeunload",Ek="popstate";function Sk(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var S=r.location,I=S.pathname,z=S.search,F=S.hash,oe=i.state||{};return[oe.idx,zm({pathname:I,search:z,hash:F,state:oe.usr||null,key:oe.key||"default"})]}var o=null;function a(){if(o)y.call(o),o=null;else{var S=mr.Pop,I=s(),z=I[0],F=I[1];if(y.length){if(z!=null){var oe=c-z;oe&&(o={action:S,location:F,retry:function(){_(oe*-1)}},_(oe))}}else h(S)}}r.addEventListener(Ek,a);var l=mr.Pop,u=s(),c=u[0],d=u[1],f=Hm(),y=Hm();c==null&&(c=0,i.replaceState(yl({},i.state,{idx:c}),""));function g(S){return typeof S=="string"?S:Ph(S)}function E(S,I){return I===void 0&&(I=null),zm(yl({pathname:d.pathname,hash:"",search:""},typeof S=="string"?Ur(S):S,{state:I,key:_k()}))}function A(S,I){return[{usr:S.state,key:S.key,idx:I},g(S)]}function p(S,I,z){return!y.length||(y.call({action:S,location:I,retry:z}),!1)}function h(S){l=S;var I=s();c=I[0],d=I[1],f.call({action:l,location:d})}function m(S,I){var z=mr.Push,F=E(S,I);function oe(){m(S,I)}if(p(z,F,oe)){var me=A(F,c+1),Ae=me[0],be=me[1];try{i.pushState(Ae,"",be)}catch{r.location.assign(be)}h(z)}}function w(S,I){var z=mr.Replace,F=E(S,I);function oe(){w(S,I)}if(p(z,F,oe)){var me=A(F,c),Ae=me[0],be=me[1];i.replaceState(Ae,"",be),h(z)}}function _(S){i.go(S)}var R={get action(){return l},get location(){return d},createHref:g,push:m,replace:w,go:_,back:function(){_(-1)},forward:function(){_(1)},listen:function(I){return f.push(I)},block:function(I){var z=y.push(I);return y.length===1&&r.addEventListener(jm,Bm),function(){z(),y.length||r.removeEventListener(jm,Bm)}}};return R}function Bm(t){t.preventDefault(),t.returnValue=""}function Hm(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function _k(){return Math.random().toString(36).substr(2,8)}function Ph(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Ur(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const lf=k.exports.createContext(null),uf=k.exports.createContext(null),Bi=k.exports.createContext({outlet:null,matches:[]});function on(t,e){if(!t)throw new Error(e)}function kk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ur(e):e,i=A0(r.pathname||"/",n);if(i==null)return null;let s=T0(t);Ik(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Ok(s[a],i);return o}function T0(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||on(!1),o.relativePath=o.relativePath.slice(r.length));let a=Kn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&on(!1),T0(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:Pk(a,i.index),routesMeta:l})}),e}function Ik(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Dk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ck=/^:\w+$/,Tk=3,xk=2,Ak=1,Nk=10,Rk=-2,qm=t=>t==="*";function Pk(t,e){let n=t.split("/"),r=n.length;return n.some(qm)&&(r+=Rk),e&&(r+=xk),n.filter(i=>!qm(i)).reduce((i,s)=>i+(Ck.test(s)?Tk:s===""?Ak:Nk),r)}function Dk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ok(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=$k({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Kn([i,c.pathname]),pathnameBase:N0(Kn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Kn([i,c.pathnameBase]))}return s}function $k(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Lk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=Mk(a[d]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Lk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function Mk(t,e){try{return decodeURIComponent(t)}catch{return t}}function bk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ur(t):t;return{pathname:n?n.startsWith("/")?n:Fk(n,e):e,search:Vk(r),hash:zk(i)}}function Fk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function x0(t,e,n){let r=typeof t=="string"?Ur(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=bk(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function Uk(t){return t===""||t.pathname===""?"/":typeof t=="string"?Ur(t).pathname:t.pathname}function A0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const Kn=t=>t.join("/").replace(/\/\/+/g,"/"),N0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Vk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function jk(t){ko()||on(!1);let{basename:e,navigator:n}=k.exports.useContext(lf),{hash:r,pathname:i,search:s}=R0(t),o=i;if(e!=="/"){let a=Uk(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):Kn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function ko(){return k.exports.useContext(uf)!=null}function iu(){return ko()||on(!1),k.exports.useContext(uf).location}function cf(){ko()||on(!1);let{basename:t,navigator:e}=k.exports.useContext(lf),{matches:n}=k.exports.useContext(Bi),{pathname:r}=iu(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=k.exports.useRef(!1);return k.exports.useEffect(()=>{s.current=!0}),k.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=x0(a,JSON.parse(i),r);t!=="/"&&(u.pathname=Kn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}const Bk=k.exports.createContext(null);function Hk(t){let e=k.exports.useContext(Bi).outlet;return e&&k.exports.createElement(Bk.Provider,{value:t},e)}function qk(){let{matches:t}=k.exports.useContext(Bi),e=t[t.length-1];return e?e.params:{}}function R0(t){let{matches:e}=k.exports.useContext(Bi),{pathname:n}=iu(),r=JSON.stringify(e.map(i=>i.pathnameBase));return k.exports.useMemo(()=>x0(t,JSON.parse(r),n),[t,r,n])}function Wk(t,e){ko()||on(!1);let{matches:n}=k.exports.useContext(Bi),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=iu(),a;if(e){var l;let f=typeof e=="string"?Ur(e):e;s==="/"||((l=f.pathname)==null?void 0:l.startsWith(s))||on(!1),a=f}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",d=kk(t,{pathname:c});return Kk(d&&d.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:Kn([s,f.pathname]),pathnameBase:f.pathnameBase==="/"?s:Kn([s,f.pathnameBase])})),n)}function Kk(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>k.exports.createElement(Bi.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function P0(t){return Hk(t.context)}function Ln(t){on(!1)}function Gk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=mr.Pop,navigator:s,static:o=!1}=t;ko()&&on(!1);let a=N0(e),l=k.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ur(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:y="default"}=r,g=k.exports.useMemo(()=>{let E=A0(u,a);return E==null?null:{pathname:E,search:c,hash:d,state:f,key:y}},[a,u,c,d,f,y]);return g==null?null:k.exports.createElement(lf.Provider,{value:l},k.exports.createElement(uf.Provider,{children:n,value:{location:g,navigationType:i}}))}function D0(t){let{children:e,location:n}=t;return Wk(Dh(e),n)}function Dh(t){let e=[];return k.exports.Children.forEach(t,n=>{if(!k.exports.isValidElement(n))return;if(n.type===k.exports.Fragment){e.push.apply(e,Dh(n.props.children));return}n.type!==Ln&&on(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Dh(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oh(){return Oh=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oh.apply(this,arguments)}function Qk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const Yk=["onClick","reloadDocument","replace","state","target","to"];function Xk(t){let{basename:e,children:n,window:r}=t,i=k.exports.useRef();i.current==null&&(i.current=Sk({window:r}));let s=i.current,[o,a]=k.exports.useState({action:s.action,location:s.location});return k.exports.useLayoutEffect(()=>s.listen(a),[s]),k.exports.createElement(Gk,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function Jk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const hf=k.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=Qk(e,Yk),c=jk(l),d=Zk(l,{replace:s,state:o,target:a});function f(y){r&&r(y),!y.defaultPrevented&&!i&&d(y)}return k.exports.createElement("a",Oh({},u,{href:c,onClick:f,ref:n,target:a}))});function Zk(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=cf(),o=iu(),a=R0(t);return k.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!Jk(l)){l.preventDefault();let u=!!r||Ph(o)===Ph(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[c],n[d],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(O0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},tI=function(t){const e=O0(t);return $0.encodeByteArray(e,!0)},L0=function(t){return tI(t).replace(/\./g,"")},nI=function(t){try{return $0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function M0(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function b0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function F0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iI(){return Ve().indexOf("Electron/")>=0}function U0(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sI(){return Ve().indexOf("MSAppHost/")>=0}function oI(){return typeof indexedDB=="object"}function aI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="FirebaseError";class Vr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lI,Object.setPrototypeOf(this,Vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Io.prototype.create)}}class Io{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vr(i,a,r)}}function uI(t,e){return t.replace(cI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cI=/\{\$([^}]+)}/g;function hI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wm(s)&&Wm(o)){if(!vl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ys(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dI(t,e){const n=new fI(t,e);return n.subscribe.bind(n)}class fI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ec),i.error===void 0&&(i.error=Ec),i.complete===void 0&&(i.complete=Ec);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class Km{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new V0(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new z0(this._db.createObjectStore(e,n))}close(){this._db.close()}}class V0{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new z0(this._transaction.objectStore(e))}}class z0{constructor(e){this._store=e}index(e){return new Gm(this._store.index(e))}createIndex(e,n,r){return new Gm(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return vs(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return vs(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return vs(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return vs(e,"Error clearing IndexedDB object store")}}class Gm{constructor(e){this._index=e}get(e){const n=this._index.get(e);return vs(n,"Error reading from IndexedDB")}}function mI(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new Km(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new Km(s.result),o.oldVersion,o.newVersion,new V0(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vI(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yI(t){return t===hr?void 0:t}function vI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const EI={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},SI=se.INFO,_I={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},kI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_I[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class df{constructor(e){this.name=e,this._logLevel=SI,this._logHandler=kI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $h="@firebase/app",Qm="0.7.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=new df("@firebase/app"),TI="@firebase/app-compat",xI="@firebase/analytics-compat",AI="@firebase/analytics",NI="@firebase/app-check-compat",RI="@firebase/app-check",PI="@firebase/auth",DI="@firebase/auth-compat",OI="@firebase/database",$I="@firebase/database-compat",LI="@firebase/functions",MI="@firebase/functions-compat",bI="@firebase/installations",FI="@firebase/installations-compat",UI="@firebase/messaging",VI="@firebase/messaging-compat",zI="@firebase/performance",jI="@firebase/performance-compat",BI="@firebase/remote-config",HI="@firebase/remote-config-compat",qI="@firebase/storage",WI="@firebase/storage-compat",KI="@firebase/firestore",GI="@firebase/firestore-compat",QI="firebase",YI="9.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="[DEFAULT]",XI={[$h]:"fire-core",[TI]:"fire-core-compat",[AI]:"fire-analytics",[xI]:"fire-analytics-compat",[RI]:"fire-app-check",[NI]:"fire-app-check-compat",[PI]:"fire-auth",[DI]:"fire-auth-compat",[OI]:"fire-rtdb",[$I]:"fire-rtdb-compat",[LI]:"fire-fn",[MI]:"fire-fn-compat",[bI]:"fire-iid",[FI]:"fire-iid-compat",[UI]:"fire-fcm",[VI]:"fire-fcm-compat",[zI]:"fire-perf",[jI]:"fire-perf-compat",[BI]:"fire-rc",[HI]:"fire-rc-compat",[qI]:"fire-gcs",[WI]:"fire-gcs-compat",[KI]:"fire-fst",[GI]:"fire-fst-compat","fire-js":"fire-js",[QI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new Map,Lh=new Map;function JI(t,e){try{t.container.addComponent(e)}catch(n){ff.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xi(t){const e=t.name;if(Lh.has(e))return ff.debug(`There were multiple attempts to register component ${e}.`),!1;Lh.set(e,t);for(const n of wl.values())JI(n,t);return!0}function pf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ar=new Io("app","Firebase",ZI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ar.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=YI;function tC(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:j0,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ar.create("bad-app-name",{appName:String(r)});const i=wl.get(r);if(i){if(vl(t,i.options)&&vl(n,i.config))return i;throw Ar.create("duplicate-app",{appName:r})}const s=new wI(r);for(const a of Lh.values())s.addComponent(a);const o=new eC(t,n,s);return wl.set(r,o),o}function B0(t=j0){const e=wl.get(t);if(!e)throw Ar.create("no-app",{appName:t});return e}function Gn(t,e,n){var r;let i=(r=XI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ff.warn(a.join(" "));return}xi(new xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="firebase-heartbeat-database",rC=1,Zs="firebase-heartbeat-store";let Sc=null;function H0(){return Sc||(Sc=mI(nC,rC,(t,e)=>{switch(e){case 0:t.createObjectStore(Zs)}}).catch(t=>{throw Ar.create("storage-open",{originalErrorMessage:t.message})})),Sc}async function iC(t){try{return(await H0()).transaction(Zs).objectStore(Zs).get(q0(t))}catch(e){throw Ar.create("storage-get",{originalErrorMessage:e.message})}}async function Ym(t,e){try{const r=(await H0()).transaction(Zs,"readwrite");return await r.objectStore(Zs).put(e,q0(t)),r.complete}catch(n){throw Ar.create("storage-set",{originalErrorMessage:n.message})}}function q0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=1024,oC=30*24*60*60*1e3;class aC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=oC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xm(),{heartbeatsToSend:n,unsentEntries:r}=lC(this._heartbeatsCache.heartbeats),i=L0(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xm(){return new Date().toISOString().substring(0,10)}function lC(t,e=sC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oI()?aI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ym(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ym(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jm(t){return L0(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){xi(new xr("platform-logger",e=>new II(e),"PRIVATE")),xi(new xr("heartbeat",e=>new aC(e),"PRIVATE")),Gn($h,Qm,t),Gn($h,Qm,"esm2017"),Gn("fire-js","")}cC("");var hC="firebase",dC="9.6.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn(hC,dC,"app");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function mf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function W0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fC=W0,K0=new Io("auth","Firebase",W0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=new df("@firebase/auth");function ba(t,...e){Zm.logLevel<=se.ERROR&&Zm.error(`Auth (${To}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw gf(t,...e)}function nn(t,...e){return gf(t,...e)}function G0(t,e,n){const r=Object.assign(Object.assign({},fC()),{[e]:n});return new Io("auth","Firebase",r).create(e,{appName:t.name})}function pC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&qt(t,"argument-error"),G0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return K0.create(t,...e)}function K(t,e,...n){if(!t)throw gf(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ba(e),new Error(e)}function Tn(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Map;function yn(t){Tn(t instanceof Function,"Expected a class definition");let e=eg.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,eg.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t,e){const n=pf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vl(s,e!=null?e:{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function gC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yC(){return tg()==="http:"||tg()==="https:"}function tg(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yC()||b0()||"connection"in navigator)?navigator.onLine:!0}function wC(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=M0()||F0()}get(){return vC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=new xo(3e4,6e4);function Ao(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function No(t,e,n,r,i={}){return Y0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Co(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Q0.fetch()(X0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Y0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},EC),e);try{const i=new _C(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _c(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _c(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _c(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw G0(t,c,u);qt(t,c)}}catch(i){if(i instanceof Vr)throw i;qt(t,"network-request-failed")}}async function Ro(t,e,n,r,i={}){const s=await No(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function X0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yf(t.config,i):`${t.config.apiScheme}://${i}`}class _C{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),SC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _c(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e){return No(t,"POST","/v1/accounts:delete",e)}async function IC(t,e){return No(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CC(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),i=vf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ns(kc(i.auth_time)),issuedAtTime:Ns(kc(i.iat)),expirationTime:Ns(kc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kc(t){return Number(t)*1e3}function vf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ba("JWT malformed, contained fewer than 3 sections"),null;try{const i=nI(n);return i?JSON.parse(i):(ba("Failed to decode base64 JWT payload"),null)}catch(i){return ba("Caught error parsing JWT payload as JSON",i),null}}function TC(t){const e=vf(t);return K(e,"internal-error"),K(typeof e.exp!="undefined","internal-error"),K(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vr&&xC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ns(this.lastLoginAt),this.creationTime=Ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(t){var e;const n=t.auth,r=await t.getIdToken(),i=await eo(t,IC(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?PC(s.providerUserInfo):[],a=RC(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new J0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function NC(t){const e=Ht(t);await El(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function PC(t){return t.map(e=>{var{providerId:n}=e,r=mf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(t,e){const n=await Y0(t,{},async()=>{const r=Co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=X0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Q0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken!="undefined","internal-error"),K(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):TC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new to;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){K(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class _r{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new J0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await eo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CC(this,e)}reload(){return NC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await El(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await eo(this,kC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:_,providerData:R,stsTokenManager:S}=n;K(m&&S,e,"internal-error");const I=to.fromJSON(this.name,S);K(typeof m=="string",e,"internal-error"),Rn(d,e.name),Rn(f,e.name),K(typeof w=="boolean",e,"internal-error"),K(typeof _=="boolean",e,"internal-error"),Rn(y,e.name),Rn(g,e.name),Rn(E,e.name),Rn(A,e.name),Rn(p,e.name),Rn(h,e.name);const z=new _r({uid:m,auth:e,email:f,emailVerified:w,displayName:d,isAnonymous:_,photoURL:g,phoneNumber:y,tenantId:E,stsTokenManager:I,createdAt:p,lastLoginAt:h});return R&&Array.isArray(R)&&(z.providerData=R.map(F=>Object.assign({},F))),A&&(z._redirectEventId=A),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new to;i.updateFromServerResponse(n);const s=new _r({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await El(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Z0.type="NONE";const ng=Z0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t,e,n){return`firebase:${t}:${e}:${n}`}class pi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new pi(yn(ng),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||yn(ng);const o=Fa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=_r._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new pi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new pi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(n1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(e1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(i1(e))return"Blackberry";if(s1(e))return"Webos";if(wf(e))return"Safari";if((e.includes("chrome/")||t1(e))&&!e.includes("edge/"))return"Chrome";if(r1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function e1(t=Ve()){return/firefox\//i.test(t)}function wf(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function t1(t=Ve()){return/crios\//i.test(t)}function n1(t=Ve()){return/iemobile/i.test(t)}function r1(t=Ve()){return/android/i.test(t)}function i1(t=Ve()){return/blackberry/i.test(t)}function s1(t=Ve()){return/webos/i.test(t)}function su(t=Ve()){return/iphone|ipad|ipod/i.test(t)}function OC(t=Ve()){var e;return su(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $C(){return U0()&&document.documentMode===10}function o1(t=Ve()){return su(t)||r1(t)||s1(t)||i1(t)||/windows phone/i.test(t)||n1(t)}function LC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t,e=[]){let n;switch(t){case"Browser":n=rg(Ve());break;case"Worker":n=`${rg(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${To}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ig(this),this.idTokenSubscription=new ig(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=K0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await El(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ht(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Io("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=a1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Po(t){return Ht(t)}class ig{constructor(e){this.auth=e,this.observer=null,this.addObserver=dI(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function bC(t,e){return No(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e){return Ro(t,"POST","/v1/accounts:signInWithPassword",Ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UC(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",Ao(t,e))}async function VC(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",Ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Ef{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new no(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new no(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return FC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return UC(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return bC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return VC(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t,e){return Ro(t,"POST","/v1/accounts:signInWithIdp",Ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="http://localhost";class Nr extends Ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Nr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mi(e,n)}buildRequest(){const e={requestUri:zC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Co(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BC(t){const e=gs(ys(t)).link,n=e?gs(ys(e)).deep_link_id:null,r=gs(ys(t)).deep_link_id;return(r?gs(ys(r)).link:null)||r||n||e||t}class Sf{constructor(e){var n,r,i,s,o,a;const l=gs(ys(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=jC((i=l.mode)!==null&&i!==void 0?i:null);K(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=BC(e);try{return new Sf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.providerId=Hi.PROVIDER_ID}static credential(e,n){return no._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sf.parseLink(n);return K(r,"argument-error"),no._fromEmailAndCode(e,r.code,r.tenantId)}}Hi.PROVIDER_ID="password";Hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends _f{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Do{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Do{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Do{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Do{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e){return Ro(t,"POST","/v1/accounts:signUp",Ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _r._fromIdTokenResponse(e,r,i),o=sg(r);return new Rr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sg(r);return new Rr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends Vr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Sl(e,n,r,i)}}function l1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sl._fromErrorAndOperation(t,s,e,r):s})}async function qC(t,e,n=!1){const r=await eo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await eo(t,l1(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=vf(s.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),Rr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(t,e,n=!1){const r="signIn",i=await l1(t,r,e),s=await Rr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function KC(t,e){return u1(Po(t),e)}async function GC(t,e,n){const r=Po(t),i=await HC(r,{returnSecureToken:!0,email:e,password:n}),s=await Rr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function QC(t,e,n){return KC(Ht(t),Hi.credential(e,n))}function YC(t,e,n,r){return Ht(t).onAuthStateChanged(e,n,r)}function XC(t){return Ht(t).signOut()}const _l="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(){const t=Ve();return wf(t)||su(t)}const ZC=1e3,eT=10;class h1 extends c1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=JC()&&LC(),this.fallbackToPolling=o1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$C()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,eT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}h1.type="LOCAL";const tT=h1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1 extends c1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}d1.type="SESSION";const f1=d1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ou(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await nT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ou.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=kf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function iT(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(){return typeof rn().WorkerGlobalScope!="undefined"&&typeof rn().importScripts=="function"}async function sT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aT(){return p1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="firebaseLocalStorageDb",lT=1,kl="firebaseLocalStorage",g1="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function au(t,e){return t.transaction([kl],e?"readwrite":"readonly").objectStore(kl)}function uT(){const t=indexedDB.deleteDatabase(m1);return new Oo(t).toPromise()}function bh(){const t=indexedDB.open(m1,lT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kl,{keyPath:g1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kl)?e(r):(r.close(),await uT(),e(await bh()))})})}async function og(t,e,n){const r=au(t,!0).put({[g1]:e,value:n});return new Oo(r).toPromise()}async function cT(t,e){const n=au(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function ag(t,e){const n=au(t,!0).delete(e);return new Oo(n).toPromise()}const hT=800,dT=3;class y1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return p1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ou._getInstance(aT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sT(),!this.activeServiceWorker)return;this.sender=new rT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bh();return await og(e,_l,"1"),await ag(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>og(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ag(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=au(i,!1).getAll();return new Oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}y1.type="LOCAL";const fT=y1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pT().appendChild(r)})}function gT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new xo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(t,e){return e?yn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends Ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yT(t){return u1(t.auth,new If(t),t.bypassAuthState)}function vT(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),WC(n,new If(t),t.bypassAuthState)}async function wT(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),qC(n,new If(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yT;case"linkViaPopup":case"linkViaRedirect":return wT;case"reauthViaPopup":case"reauthViaRedirect":return vT;default:qt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=new xo(2e3,1e4);async function ST(t,e,n){const r=Po(t);pC(t,e,_f);const i=v1(r,n);return new gr(r,"signInViaPopup",e,i).executeNotNull()}class gr extends w1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=kf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ET.get())};e()}}gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="pendingRedirect",Ic=new Map;class kT extends w1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ic.get(this.auth._key());if(!e){try{const r=await IT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ic.set(this.auth._key(),e)}return this.bypassAuthState||Ic.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IT(t,e){const n=TT(e),r=CT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function CT(t){return yn(t._redirectPersistence)}function TT(t){return Fa(_T,t.config.apiKey,t.name)}async function xT(t,e,n=!1){const r=Po(t),i=v1(r,e),o=await new kT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=10*60*1e3;class NT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!E1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AT&&this.cachedEventUids.clear(),this.cachedEventUids.has(lg(e))}saveEventToCache(e){this.cachedEventUids.add(lg(e)),this.lastProcessedEventTime=Date.now()}}function lg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function E1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return E1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(t,e={}){return No(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OT=/^https?/;async function $T(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PT(t);for(const n of e)try{if(LT(n))return}catch{}qt(t,"unauthorized-domain")}function LT(t){const e=Mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OT.test(n))return!1;if(DT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=new xo(3e4,6e4);function ug(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bT(t){return new Promise((e,n)=>{var r,i,s;function o(){ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ug(),n(nn(t,"network-request-failed"))},timeout:MT.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const a=gT("iframefcb");return rn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},mT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ua=null,e})}let Ua=null;function FT(t){return Ua=Ua||bT(t),Ua}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=new xo(5e3,15e3),VT="__/auth/iframe",zT="emulator/auth/iframe",jT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HT(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yf(e,zT):`https://${t.config.authDomain}/${VT}`,r={apiKey:e.apiKey,appName:t.name,v:To},i=BT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Co(r).slice(1)}`}async function qT(t){const e=await FT(t),n=rn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:HT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=rn().setTimeout(()=>{s(o)},UT.get());function l(){rn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KT=500,GT=600,QT="_blank",YT="http://localhost";class cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XT(t,e,n,r=KT,i=GT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},WT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ve().toLowerCase();n&&(a=t1(u)?QT:n),e1(u)&&(e=e||YT,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[y,g])=>`${f}${y}=${g},`,"");if(OC(u)&&a!=="_self")return JT(e||"",a),new cg(null);const d=window.open(e||"",a,c);K(d,t,"popup-blocked");try{d.focus()}catch{}return new cg(d)}function JT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="__/auth/handler",ex="emulator/auth/handler";function hg(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:To,eventId:i};if(e instanceof _f){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Do){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${tx(t)}?${Co(a).slice(1)}`}function tx({config:t}){return t.emulator?yf(t,ex):`https://${t.authDomain}/${ZT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="webStorageSupport";class nx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=f1,this._completeRedirectFn=xT}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=hg(e,n,r,Mh(),i);return XT(e,o,kf())}async _openRedirect(e,n,r,i){return await this._originValidation(e),iT(hg(e,n,r,Mh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qT(e),r=new NT(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cc,{type:Cc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cc];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$T(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return o1()||wf()||su()}}const rx=nx;var dg="@firebase/auth",fg="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ox(t){xi(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{K(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:a1(t)},c=new MC(a,l,u);return gC(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xi(new xr("auth-internal",e=>{const n=Po(e.getProvider("auth").getImmediate());return(r=>new ix(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(dg,fg,sx(t)),Gn(dg,fg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t=B0()){const e=pf(t,"auth");return e.isInitialized()?e.getImmediate():mC(t,{popupRedirectResolver:rx,persistence:[fT,tT,f1]})}ox("Browser");var lx=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},b,Cf=Cf||{},G=lx||self;function Il(){}function Fh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $o(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ux(t){return Object.prototype.hasOwnProperty.call(t,Tc)&&t[Tc]||(t[Tc]=++cx)}var Tc="closure_uid_"+(1e9*Math.random()>>>0),cx=0;function hx(t,e,n){return t.call.apply(t.bind,arguments)}function dx(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=hx:Ye=dx,Ye.apply(null,arguments)}function wa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function or(){this.s=this.s,this.o=this.o}var fx=0,px={};or.prototype.s=!1;or.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),fx!=0)){var t=ux(this);delete px[t]}};or.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},_1=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function mx(t){e:{var e=oA;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function pg(t){return Array.prototype.concat.apply([],arguments)}function Tf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Cl(t){return/^[\s\xa0]*$/.test(t)}var mg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function dt(t,e){return t.indexOf(e)!=-1}function xc(t,e){return t<e?-1:t>e?1:0}var ft;e:{var gg=G.navigator;if(gg){var yg=gg.userAgent;if(yg){ft=yg;break e}}ft=""}function xf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function k1(t){const e={};for(const n in t)e[n]=t[n];return e}var vg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<vg.length;s++)n=vg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Af(t){return Af[" "](t),t}Af[" "]=Il;function gx(t){var e=wx;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var yx=dt(ft,"Opera"),Ai=dt(ft,"Trident")||dt(ft,"MSIE"),C1=dt(ft,"Edge"),Uh=C1||Ai,T1=dt(ft,"Gecko")&&!(dt(ft.toLowerCase(),"webkit")&&!dt(ft,"Edge"))&&!(dt(ft,"Trident")||dt(ft,"MSIE"))&&!dt(ft,"Edge"),vx=dt(ft.toLowerCase(),"webkit")&&!dt(ft,"Edge");function x1(){var t=G.document;return t?t.documentMode:void 0}var Tl;e:{var Ac="",Nc=function(){var t=ft;if(T1)return/rv:([^\);]+)(\)|;)/.exec(t);if(C1)return/Edge\/([\d\.]+)/.exec(t);if(Ai)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(vx)return/WebKit\/(\S+)/.exec(t);if(yx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nc&&(Ac=Nc?Nc[1]:""),Ai){var Rc=x1();if(Rc!=null&&Rc>parseFloat(Ac)){Tl=String(Rc);break e}}Tl=Ac}var wx={};function Ex(){return gx(function(){let t=0;const e=mg(String(Tl)).split("."),n=mg("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=xc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||xc(i[2].length==0,s[2].length==0)||xc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Vh;if(G.document&&Ai){var wg=x1();Vh=wg||parseInt(Tl,10)||void 0}else Vh=void 0;var Sx=Vh,_x=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",Il,e),G.removeEventListener("test",Il,e)}catch{}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};function ro(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(T1){e:{try{Af(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:kx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ro.Z.h.call(this)}}tt(ro,at);var kx={2:"touch",3:"pen",4:"mouse"};ro.prototype.h=function(){ro.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Lo="closure_listenable_"+(1e6*Math.random()|0),Ix=0;function Cx(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++Ix,this.ca=this.fa=!1}function lu(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function uu(t){this.src=t,this.g={},this.h=0}uu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=jh(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Cx(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function zh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=S1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(lu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Nf="closure_lm_"+(1e6*Math.random()|0),Pc={};function A1(t,e,n,r,i){if(r&&r.once)return R1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)A1(t,e[s],n,r,i);return null}return n=Df(n),t&&t[Lo]?t.N(e,n,$o(r)?!!r.capture:!!r,i):N1(t,e,n,!1,r,i)}function N1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=$o(i)?!!i.capture:!!i,a=Pf(t);if(a||(t[Nf]=a=new uu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Tx(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)_x||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(D1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Tx(){function t(n){return e.call(t.src,t.listener,n)}var e=xx;return t}function R1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)R1(t,e[s],n,r,i);return null}return n=Df(n),t&&t[Lo]?t.O(e,n,$o(r)?!!r.capture:!!r,i):N1(t,e,n,!0,r,i)}function P1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)P1(t,e[s],n,r,i);else r=$o(r)?!!r.capture:!!r,n=Df(n),t&&t[Lo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=jh(s,n,r,i),-1<n&&(lu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Pf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jh(e,n,r,i)),(n=-1<t?e[t]:null)&&Rf(n))}function Rf(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Lo])zh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(D1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Pf(e))?(zh(n,t),n.h==0&&(n.src=null,e[Nf]=null)):lu(t)}}}function D1(t){return t in Pc?Pc[t]:Pc[t]="on"+t}function xx(t,e){if(t.ca)t=!0;else{e=new ro(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Rf(t),t=n.call(r,e)}return t}function Pf(t){return t=t[Nf],t instanceof uu?t:null}var Dc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Df(t){return typeof t=="function"?t:(t[Dc]||(t[Dc]=function(e){return t.handleEvent(e)}),t[Dc])}function ze(){or.call(this),this.i=new uu(this),this.P=this,this.I=null}tt(ze,or);ze.prototype[Lo]=!0;ze.prototype.removeEventListener=function(t,e,n,r){P1(this,t,e,n,r)};function Xe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),I1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ea(o,r,!0,e)&&i}if(o=e.g=t,i=Ea(o,r,!0,e)&&i,i=Ea(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ea(o,r,!1,e)&&i}ze.prototype.M=function(){if(ze.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)lu(n[r]);delete t.g[e],t.h--}}this.I=null};ze.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ea(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&zh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Of=G.JSON.stringify;function Ax(){var t=$1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nx{constructor(){this.h=this.g=null}add(e,n){const r=O1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var O1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Rx,t=>t.reset());class Rx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Px(t){G.setTimeout(()=>{throw t},0)}function $f(t,e){Bh||Dx(),Hh||(Bh(),Hh=!0),$1.add(t,e)}var Bh;function Dx(){var t=G.Promise.resolve(void 0);Bh=function(){t.then(Ox)}}var Hh=!1,$1=new Nx;function Ox(){for(var t;t=Ax();){try{t.h.call(t.g)}catch(n){Px(n)}var e=O1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hh=!1}function cu(t,e){ze.call(this),this.h=t||1,this.g=e||G,this.j=Ye(this.kb,this),this.l=Date.now()}tt(cu,ze);b=cu.prototype;b.da=!1;b.S=null;b.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Xe(this,"tick"),this.da&&(Lf(this),this.start()))}};b.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lf(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}b.M=function(){cu.Z.M.call(this),Lf(this),delete this.g};function Mf(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function L1(t){t.g=Mf(()=>{t.g=null,t.i&&(t.i=!1,L1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $x extends or{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:L1(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function io(t){or.call(this),this.h=t,this.g={}}tt(io,or);var Eg=[];function M1(t,e,n,r){Array.isArray(n)||(n&&(Eg[0]=n.toString()),n=Eg);for(var i=0;i<n.length;i++){var s=A1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function b1(t){xf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rf(e)},t),t.g={}}io.prototype.M=function(){io.Z.M.call(this),b1(this)};io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hu(){this.g=!0}hu.prototype.Aa=function(){this.g=!1};function Lx(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Mx(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ri(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Fx(t,n)+(r?" "+r:"")})}function bx(t,e){t.info(function(){return"TIMEOUT: "+e})}hu.prototype.info=function(){};function Fx(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Of(n)}catch{return e}}var zr={},Sg=null;function du(){return Sg=Sg||new ze}zr.Ma="serverreachability";function F1(t){at.call(this,zr.Ma,t)}tt(F1,at);function so(t){const e=du();Xe(e,new F1(e,t))}zr.STAT_EVENT="statevent";function U1(t,e){at.call(this,zr.STAT_EVENT,t),this.stat=e}tt(U1,at);function pt(t){const e=du();Xe(e,new U1(e,t))}zr.Na="timingevent";function V1(t,e){at.call(this,zr.Na,t),this.size=e}tt(V1,at);function Mo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var fu={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},z1={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function bf(){}bf.prototype.h=null;function _g(t){return t.h||(t.h=t.i())}function j1(){}var bo={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ff(){at.call(this,"d")}tt(Ff,at);function Uf(){at.call(this,"c")}tt(Uf,at);var qh;function pu(){}tt(pu,bf);pu.prototype.g=function(){return new XMLHttpRequest};pu.prototype.i=function(){return{}};qh=new pu;function Fo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new io(this),this.P=Ux,t=Uh?125:void 0,this.W=new cu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new B1}function B1(){this.i=null,this.g="",this.h=!1}var Ux=45e3,Wh={},xl={};b=Fo.prototype;b.setTimeout=function(t){this.P=t};function Kh(t,e,n){t.K=1,t.v=gu(xn(e)),t.s=n,t.U=!0,H1(t,null)}function H1(t,e){t.F=Date.now(),Uo(t),t.A=xn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),X1(n.h,"t",r),t.C=0,n=t.l.H,t.h=new B1,t.g=yw(t.l,n?e:null,!t.s),0<t.O&&(t.L=new $x(Ye(t.Ia,t,t.g),t.O)),M1(t.V,t.g,"readystatechange",t.gb),e=t.H?k1(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),so(1),Lx(t.j,t.u,t.A,t.m,t.X,t.s)}b.gb=function(t){t=t.target;const e=this.L;e&&vn(t)==3?e.l():this.Ia(t)};b.Ia=function(t){try{if(t==this.g)e:{const c=vn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>c)&&(c!=3||Uh||this.g&&(this.h.h||this.g.ga()||Tg(this.g)))){this.I||c!=4||e==7||(e==8||0>=d?so(3):so(2)),mu(this);var n=this.g.ba();this.N=n;t:if(q1(this)){var r=Tg(this.g);t="";var i=r.length,s=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){yr(this),Rs(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Mx(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Cl(a)){var u=a;break t}}u=null}if(n=u)ri(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Gh(this,n);else{this.i=!1,this.o=3,pt(12),yr(this),Rs(this);break e}}this.U?(W1(this,c,o),Uh&&this.i&&c==3&&(M1(this.V,this.W,"tick",this.fb),this.W.start())):(ri(this.j,this.m,o,null),Gh(this,o)),c==4&&yr(this),this.i&&!this.I&&(c==4?fw(this.l,this):(this.i=!1,Uo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),yr(this),Rs(this)}}}catch{}finally{}};function q1(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function W1(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=Vx(t,n),i==xl){e==4&&(t.o=4,pt(14),r=!1),ri(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Wh){t.o=4,pt(15),ri(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ri(t.j,t.m,i,null),Gh(t,i);q1(t)&&i!=xl&&i!=Wh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gf(e),e.L=!0,pt(11))):(ri(t.j,t.m,n,"[Invalid Chunked Response]"),yr(t),Rs(t))}b.fb=function(){if(this.g){var t=vn(this.g),e=this.g.ga();this.C<e.length&&(mu(this),W1(this,t,e),this.i&&t!=4&&Uo(this))}};function Vx(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?xl:(n=Number(e.substring(n,r)),isNaN(n)?Wh:(r+=1,r+n>e.length?xl:(e=e.substr(r,n),t.C=r+n,e)))}b.cancel=function(){this.I=!0,yr(this)};function Uo(t){t.Y=Date.now()+t.P,K1(t,t.P)}function K1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Mo(Ye(t.eb,t),e)}function mu(t){t.B&&(G.clearTimeout(t.B),t.B=null)}b.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(bx(this.j,this.A),this.K!=2&&(so(3),pt(17)),yr(this),this.o=2,Rs(this)):K1(this,this.Y-t)};function Rs(t){t.l.G==0||t.I||fw(t.l,t)}function yr(t){mu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Lf(t.W),b1(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Gh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Qh(n.i,t))){if(n.I=t.N,!t.J&&Qh(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Pl(n),wu(n);else break e;Kf(n),pt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Mo(Ye(n.ab,n),6e3));if(1>=ew(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else vr(n,11)}else if((t.J||n.g==t)&&Pl(n),!Cl(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const d=u[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const g=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(dt(g,"spdy")||dt(g,"quic")||dt(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(jf(s,s.h),s.h=null))}if(r.D){const E=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,_e(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=gw(r,r.H?r.la:null,r.W),o.J){tw(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(mu(a),Uo(a)),r.g=o}else hw(r);0<n.l.length&&Eu(n)}else u[0]!="stop"&&u[0]!="close"||vr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?vr(n,7):Wf(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}so(4)}catch{}}function zx(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Fh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Vf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fh(t)||typeof t=="string")_1(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Fh(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=zx(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function qi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof qi)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}b=qi.prototype;b.R=function(){zf(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};b.T=function(){return zf(this),this.g.concat()};function zf(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Pr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Pr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}b.get=function(t,e){return Pr(this.h,t)?this.h[t]:e};b.set=function(t,e){Pr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};b.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Pr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var G1=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function jx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Dr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Dr){this.g=e!==void 0?e:t.g,Al(this,t.j),this.s=t.s,Nl(this,t.i),Rl(this,t.m),this.l=t.l,e=t.h;var n=new oo;n.i=e.i,e.g&&(n.g=new qi(e.g),n.h=e.h),kg(this,n),this.o=t.o}else t&&(n=String(t).match(G1))?(this.g=!!e,Al(this,n[1]||"",!0),this.s=Ps(n[2]||""),Nl(this,n[3]||"",!0),Rl(this,n[4]),this.l=Ps(n[5]||"",!0),kg(this,n[6]||"",!0),this.o=Ps(n[7]||"")):(this.g=!!e,this.h=new oo(null,this.g))}Dr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ws(e,Ig,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ws(e,Ig,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ws(n,n.charAt(0)=="/"?Kx:Wx,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ws(n,Qx)),t.join("")};function xn(t){return new Dr(t)}function Al(t,e,n){t.j=n?Ps(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Nl(t,e,n){t.i=n?Ps(e,!0):e}function Rl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function kg(t,e,n){e instanceof oo?(t.h=e,Yx(t.h,t.g)):(n||(e=ws(e,Gx)),t.h=new oo(e,t.g))}function _e(t,e,n){t.h.set(e,n)}function gu(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bx(t){return t instanceof Dr?xn(t):new Dr(t,void 0)}function Hx(t,e,n,r){var i=new Dr(null,void 0);return t&&Al(i,t),e&&Nl(i,e),n&&Rl(i,n),r&&(i.l=r),i}function Ps(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ws(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ig=/[#\/\?@]/g,Wx=/[#\?:]/g,Kx=/[#\?]/g,Gx=/[#\?@]/g,Qx=/#/g;function oo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ar(t){t.g||(t.g=new qi,t.h=0,t.i&&jx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=oo.prototype;b.add=function(t,e){ar(this),this.i=null,t=Wi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Q1(t,e){ar(t),e=Wi(t,e),Pr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Pr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&zf(t)))}function Y1(t,e){return ar(t),e=Wi(t,e),Pr(t.g.h,e)}b.forEach=function(t,e){ar(this),this.g.forEach(function(n,r){_1(n,function(i){t.call(e,i,r,this)},this)},this)};b.T=function(){ar(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};b.R=function(t){ar(this);var e=[];if(typeof t=="string")Y1(this,t)&&(e=pg(e,this.g.get(Wi(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=pg(e,t[n])}return e};b.set=function(t,e){return ar(this),this.i=null,t=Wi(this,t),Y1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function X1(t,e,n){Q1(t,e),0<n.length&&(t.i=null,t.g.set(Wi(t,e),Tf(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Wi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Yx(t,e){e&&!t.j&&(ar(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Q1(this,r),X1(this,i,n))},t)),t.j=e}var Xx=class{constructor(t,e){this.h=t,this.g=e}};function J1(t){this.l=t||Jx,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ea&&G.g.Ea()&&G.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Jx=10;function Z1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ew(t){return t.h?1:t.g?t.g.size:0}function Qh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jf(t,e){t.g?t.g.add(e):t.h=e}function tw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}J1.prototype.cancel=function(){if(this.i=nw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function nw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Tf(t.i)}function Bf(){}Bf.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};Bf.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function Zx(){this.g=new Bf}function eA(t,e,n){const r=n||"";try{Vf(t,function(i,s){let o=i;$o(i)&&(o=Of(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function tA(t,e){const n=new hu;if(G.Image){const r=new Image;r.onload=wa(Sa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=wa(Sa,n,r,"TestLoadImage: error",!1,e),r.onabort=wa(Sa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=wa(Sa,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Sa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Vo(t){this.l=t.$b||null,this.j=t.ib||!1}tt(Vo,bf);Vo.prototype.g=function(){return new yu(this.l,this.j)};Vo.prototype.i=function(t){return function(){return t}}({});function yu(t,e){ze.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Hf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(yu,ze);var Hf=0;b=yu.prototype;b.open=function(t,e){if(this.readyState!=Hf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ao(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zo(this)),this.readyState=Hf};b.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ao(this)),this.g&&(this.readyState=3,ao(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof G.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rw(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function rw(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}b.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zo(this):ao(this),this.readyState==3&&rw(this)}};b.Ua=function(t){this.g&&(this.response=this.responseText=t,zo(this))};b.Ta=function(t){this.g&&(this.response=t,zo(this))};b.ha=function(){this.g&&zo(this)};function zo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ao(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ao(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(yu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var nA=G.JSON.parse;function Le(t){ze.call(this),this.headers=new qi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=iw,this.K=this.L=!1}tt(Le,ze);var iw="",rA=/^https?$/i,iA=["POST","PUT"];b=Le.prototype;b.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():qh.g(),this.C=this.u?_g(this.u):_g(qh),this.g.onreadystatechange=Ye(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Cg(this,s);return}t=n||"";const i=new qi(this.headers);r&&Vf(r,function(s,o){i.set(o,s)}),r=mx(i.T()),n=G.FormData&&t instanceof G.FormData,!(0<=S1(iA,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{aw(this),0<this.B&&((this.K=sA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.pa,this)):this.A=Mf(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Cg(this,s)}};function sA(t){return Ai&&Ex()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function oA(t){return t.toLowerCase()=="content-type"}b.pa=function(){typeof Cf!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function Cg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sw(t),vu(t)}function sw(t){t.D||(t.D=!0,Xe(t,"complete"),Xe(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),vu(this))};b.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vu(this,!0)),Le.Z.M.call(this)};b.Fa=function(){this.s||(this.F||this.v||this.l?ow(this):this.cb())};b.cb=function(){ow(this)};function ow(t){if(t.h&&typeof Cf!="undefined"&&(!t.C[1]||vn(t)!=4||t.ba()!=2)){if(t.v&&vn(t)==4)Mf(t.Fa,0,t);else if(Xe(t,"readystatechange"),vn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(G1)[1]||null;if(!i&&G.self&&G.self.location){var s=G.self.location.protocol;i=s.substr(0,s.length-1)}r=!rA.test(i?i.toLowerCase():"")}n=r}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var o=2<vn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",sw(t)}}finally{vu(t)}}}}function vu(t,e){if(t.g){aw(t);const n=t.g,r=t.C[0]?Il:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function aw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function vn(t){return t.g?t.g.readyState:0}b.ba=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}};b.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),nA(e)}};function Tg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case iw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}b.Da=function(){return this.m};b.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function aA(t){let e="";return xf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function qf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=aA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function cs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function lw(t){this.za=0,this.l=[],this.h=new hu,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=cs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=cs("baseRetryDelayMs",5e3,t),this.$a=cs("retryDelaySeedMs",1e4,t),this.Ya=cs("forwardChannelMaxRetries",2,t),this.ra=cs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new J1(t&&t.concurrentRequestLimit),this.Ca=new Zx,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}b=lw.prototype;b.ma=8;b.G=1;function Wf(t){if(uw(t),t.G==3){var e=t.V++,n=xn(t.F);_e(n,"SID",t.J),_e(n,"RID",e),_e(n,"TYPE","terminate"),jo(t,n),e=new Fo(t,t.h,e,void 0),e.K=2,e.v=gu(xn(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=yw(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Uo(e)}mw(t)}b.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function wu(t){t.g&&(Gf(t),t.g.cancel(),t.g=null)}function uw(t){wu(t),t.u&&(G.clearTimeout(t.u),t.u=null),Pl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Oc(t,e){t.l.push(new Xx(t.Za++,e)),t.G==3&&Eu(t)}function Eu(t){Z1(t.i)||t.m||(t.m=!0,$f(t.Ha,t),t.C=0)}function lA(t,e){return ew(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Mo(Ye(t.Ha,t,e),pw(t,t.C)),t.C++,!0)}b.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Fo(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=k1(s),I1(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=cw(this,i,e),n=xn(this.F),_e(n,"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),jo(this,n),this.o&&s&&qf(n,this.o,s),jf(this.i,i),this.Ra&&_e(n,"TYPE","init"),this.ja?(_e(n,"$req",e),_e(n,"SID","null"),i.$=!0,Kh(i,n,null)):Kh(i,n,e),this.G=2}}else this.G==3&&(t?xg(this,t):this.l.length==0||Z1(this.i)||xg(this))};function xg(t,e){var n;e?n=e.m:n=t.V++;const r=xn(t.F);_e(r,"SID",t.J),_e(r,"RID",n),_e(r,"AID",t.U),jo(t,r),t.o&&t.s&&qf(r,t.o,t.s),n=new Fo(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cw(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),jf(t.i,n),Kh(n,r,e)}function jo(t,e){t.j&&Vf({},function(n,r){_e(e,r,n)})}function cw(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ye(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{eA(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function hw(t){t.g||t.u||(t.Y=1,$f(t.Ga,t),t.A=0)}function Kf(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Mo(Ye(t.Ga,t),pw(t,t.A)),t.A++,!0)}b.Ga=function(){if(this.u=null,dw(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Mo(Ye(this.bb,this),t)}};b.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,pt(10),wu(this),dw(this))};function Gf(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function dw(t){t.g=new Fo(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=xn(t.oa);_e(e,"RID","rpc"),_e(e,"SID",t.J),_e(e,"CI",t.N?"0":"1"),_e(e,"AID",t.U),jo(t,e),_e(e,"TYPE","xmlhttp"),t.o&&t.s&&qf(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=gu(xn(e)),n.s=null,n.U=!0,H1(n,t)}b.ab=function(){this.v!=null&&(this.v=null,wu(this),Kf(this),pt(19))};function Pl(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function fw(t,e){var n=null;if(t.g==e){Pl(t),Gf(t),t.g=null;var r=2}else if(Qh(t.i,e))n=e.D,tw(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=du(),Xe(r,new V1(r,n,e,i)),Eu(t)}else hw(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&lA(t,e)||r==2&&Kf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:vr(t,5);break;case 4:vr(t,10);break;case 3:vr(t,6);break;default:vr(t,2)}}}function pw(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function vr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ye(t.jb,t);n||(n=new Dr("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||Al(n,"https"),gu(n)),tA(n.toString(),r)}else pt(2);t.G=0,t.j&&t.j.va(e),mw(t),uw(t)}b.jb=function(t){t?(this.h.info("Successfully pinged google.com"),pt(2)):(this.h.info("Failed to ping google.com"),pt(1))};function mw(t){t.G=0,t.I=-1,t.j&&((nw(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Tf(t.l),t.l.length=0),t.j.ua())}function gw(t,e,n){let r=Bx(n);if(r.i!="")e&&Nl(r,e+"."+r.i),Rl(r,r.m);else{const i=G.location;r=Hx(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&xf(t.aa,function(i,s){_e(r,s,i)}),e=t.D,n=t.sa,e&&n&&_e(r,e,n),_e(r,"VER",t.ma),jo(t,r),r}function yw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Le(new Vo({ib:!0})):new Le(t.qa),e.L=t.H,e}function vw(){}b=vw.prototype;b.xa=function(){};b.wa=function(){};b.va=function(){};b.ua=function(){};b.Oa=function(){};function Dl(){if(Ai&&!(10<=Number(Sx)))throw Error("Environmental error: no available transport.")}Dl.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){ze.call(this),this.g=new lw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Cl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Cl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ki(this)}tt(Ot,ze);Ot.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),$f(Ye(t.hb,t,e))),pt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=gw(t,null,t.W),Eu(t)};Ot.prototype.close=function(){Wf(this.g)};Ot.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Oc(this.g,e)}else this.v?(e={},e.__data__=Of(t),Oc(this.g,e)):Oc(this.g,t)};Ot.prototype.M=function(){this.g.j=null,delete this.j,Wf(this.g),delete this.g,Ot.Z.M.call(this)};function ww(t){Ff.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(ww,Ff);function Ew(){Uf.call(this),this.status=1}tt(Ew,Uf);function Ki(t){this.g=t}tt(Ki,vw);Ki.prototype.xa=function(){Xe(this.g,"a")};Ki.prototype.wa=function(t){Xe(this.g,new ww(t))};Ki.prototype.va=function(t){Xe(this.g,new Ew(t))};Ki.prototype.ua=function(){Xe(this.g,"b")};Dl.prototype.createWebChannel=Dl.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;fu.NO_ERROR=0;fu.TIMEOUT=8;fu.HTTP_ERROR=6;z1.COMPLETE="complete";j1.EventType=bo;bo.OPEN="a";bo.CLOSE="b";bo.ERROR="c";bo.MESSAGE="d";ze.prototype.listen=ze.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.La;Le.prototype.getLastErrorCode=Le.prototype.Da;Le.prototype.getStatus=Le.prototype.ba;Le.prototype.getResponseJson=Le.prototype.Qa;Le.prototype.getResponseText=Le.prototype.ga;Le.prototype.send=Le.prototype.ea;var uA=function(){return new Dl},cA=function(){return du()},$c=fu,hA=z1,dA=zr,Ag={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},fA=Vo,_a=j1,pA=Le;const Ng="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi="9.6.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new df("@firebase/firestore");function Rg(){return Or.logLevel}function U(t,...e){if(Or.logLevel<=se.DEBUG){const n=e.map(Qf);Or.debug(`Firestore (${Gi}): ${t}`,...n)}}function er(t,...e){if(Or.logLevel<=se.ERROR){const n=e.map(Qf);Or.error(`Firestore (${Gi}): ${t}`,...n)}}function Pg(t,...e){if(Or.logLevel<=se.WARN){const n=e.map(Qf);Or.warn(`Firestore (${Gi}): ${t}`,...n)}}function Qf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: `+t;throw er(e),new Error(e)}function ye(t,e){t||Y()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Vr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class yA{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Sn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new mA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new wt(e)}}class vA{constructor(e,n,r){this.type="FirstParty",this.user=wt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class wA{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new vA(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SA{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.p=n.token,new EA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yf.A=-1;class Sw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=_A(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Ni(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new lt(0,0))}static max(){return new Z(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _w(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return lo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof lo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends lo{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const kA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends lo{construct(e,n,r){return new kt(e,n,r)}static isValidIdentifier(e){return kA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.fields=e,e.sort(kt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ni(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new et(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const IA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(t){if(ye(!!t),typeof t=="string"){let e=0;const n=IA.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ri(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Iw(t){const e=t.mapValue.fields.__previous_value__;return kw(e)?Iw(e):e}function uo(t){const e=tr(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){return t==null}function Ol(t){return t===0&&1/t==-1/0}function TA(t){return typeof t=="number"&&Number.isInteger(t)&&!Ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(ke.fromString(e))}static fromName(e){return new V(ke.fromString(e).popFirst(5))}static empty(){return new V(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new ke(e.slice()))}}function $r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kw(t)?4:xA(t)?9:10:Y()}function an(t,e){if(t===e)return!0;const n=$r(t);if(n!==$r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uo(t).isEqual(uo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=tr(r.timestampValue),o=tr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ri(r.bytesValue).isEqual(Ri(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return De(r.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(r.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return De(r.integerValue)===De(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=De(r.doubleValue),o=De(i.doubleValue);return s===o?Ol(s)===Ol(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ni(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Dg(s)!==Dg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!an(s[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function co(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function Di(t,e){if(t===e)return 0;const n=$r(t),r=$r(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=De(i.integerValue||i.doubleValue),a=De(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Og(t.timestampValue,e.timestampValue);case 4:return Og(uo(t),uo(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ri(i),a=Ri(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ue(o[l],a[l]);if(u!==0)return u}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ue(De(i.latitude),De(s.latitude));return o!==0?o:ue(De(i.longitude),De(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Di(o[l],a[l]);if(u)return u}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=ue(a[c],u[c]);if(d!==0)return d;const f=Di(o[a[c]],l[u[c]]);if(f!==0)return f}return ue(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Og(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=tr(t),r=tr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function gi(t){return Xh(t)}function Xh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=tr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ri(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Xh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Xh(r.fields[a])}`;return s+"}"}(t.mapValue):Y();var e,n}function Jh(t){return!!t&&"integerValue"in t}function Xf(t){return!!t&&"arrayValue"in t}function $g(t){return!!t&&"nullValue"in t}function Lg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Va(t){return!!t&&"mapValue"in t}function Ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=kt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ds(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Va(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Yt(Ds(this.value))}}function Cw(t){const e=[];return Qi(t.fields,(n,r)=>{const i=new kt([n]);if(Va(r)){const s=Cw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Yh(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ot(e,0,Z.min(),Z.min(),Yt.empty(),0)}static newFoundDocument(e,n,r){return new ot(e,1,n,Z.min(),r,0)}static newNoDocument(e,n){return new ot(e,2,n,Z.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,Z.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function AA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Oi(i,V.empty(),e)}function NA(t){return new Oi(t.readTime,t.key,-1)}class Oi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Oi(Z.min(),V.empty(),-1)}static max(){return new Oi(Z.max(),V.empty(),-1)}}function RA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function Mg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new PA(t,e,n,r,i,s,o)}function Jf(t){const e=X(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+gi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Yi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gi(r)).join(",")),e.P=n}return e.P}function DA(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${gi(r.value)}`;var r}).join(", ")}]`),Yi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>gi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>gi(n)).join(",")),`Target(${e})`}function Zf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!VA(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!an(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fg(t.startAt,e.startAt)&&Fg(t.endAt,e.endAt)}function Zh(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class It extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new OA(e,n,r):n==="array-contains"?new MA(e,r):n==="in"?new bA(e,r):n==="not-in"?new FA(e,r):n==="array-contains-any"?new UA(e,r):new It(e,n,r)}static V(e,n,r){return n==="in"?new $A(e,r):new LA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Di(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.v(Di(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class OA extends It{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.v(n)}}class $A extends It{constructor(e,n){super(e,"in",n),this.keys=Tw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LA extends It{constructor(e,n){super(e,"not-in",n),this.keys=Tw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Tw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class MA extends It{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xf(n)&&co(n.arrayValue,this.value)}}class bA extends It{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&co(this.value.arrayValue,n)}}class FA extends It{constructor(e,n){super(e,"not-in",n)}matches(e){if(co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!co(this.value.arrayValue,n)}}class UA extends It{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>co(this.value.arrayValue,r))}}class $l{constructor(e,n){this.position=e,this.inclusive=n}}class Os{constructor(e,n="asc"){this.field=e,this.dir=n}}function VA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function bg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=Di(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function zA(t,e,n,r,i,s,o,a){return new Su(t,e,n,r,i,s,o,a)}function ep(t){return new Su(t)}function za(t){return!Yi(t.limit)&&t.limitType==="F"}function Ll(t){return!Yi(t.limit)&&t.limitType==="L"}function jA(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function BA(t){for(const e of t.filters)if(e.S())return e.field;return null}function HA(t){return t.collectionGroup!==null}function ho(t){const e=X(t);if(e.D===null){e.D=[];const n=BA(e),r=jA(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new Os(n)),e.D.push(new Os(kt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Os(kt.keyField(),s))}}}return e.D}function Lr(t){const e=X(t);if(!e.C)if(e.limitType==="F")e.C=Mg(e.path,e.collectionGroup,ho(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ho(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Os(s.field,o))}const r=e.endAt?new $l(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new $l(e.startAt.position,!e.startAt.inclusive):null;e.C=Mg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function qA(t,e,n){return new Su(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _u(t,e){return Zf(Lr(t),Lr(e))&&t.limitType===e.limitType}function xw(t){return`${Jf(Lr(t))}|lt:${t.limitType}`}function ed(t){return`Query(target=${DA(Lr(t))}; limitType=${t.limitType})`}function tp(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):V.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=bg(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ho(n),r)||n.endAt&&!function(i,s,o){const a=bg(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ho(n),r))}(t,e)}function WA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Aw(t){return(e,n)=>{let r=!1;for(const i of ho(t)){const s=KA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KA(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Di(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ol(e)?"-0":e}}function Rw(t){return{integerValue:""+t}}function GA(t,e){return TA(e)?Rw(e):Nw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(){this._=void 0}}function QA(t,e,n){return t instanceof Ml?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof fo?Dw(t,e):t instanceof po?Ow(t,e):function(r,i){const s=Pw(r,i),o=Ug(s)+Ug(r.k);return Jh(s)&&Jh(r.k)?Rw(o):Nw(r.M,o)}(t,e)}function YA(t,e,n){return t instanceof fo?Dw(t,e):t instanceof po?Ow(t,e):n}function Pw(t,e){return t instanceof bl?Jh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ml extends ku{}class fo extends ku{constructor(e){super(),this.elements=e}}function Dw(t,e){const n=$w(e);for(const r of t.elements)n.some(i=>an(i,r))||n.push(r);return{arrayValue:{values:n}}}class po extends ku{constructor(e){super(),this.elements=e}}function Ow(t,e){let n=$w(e);for(const r of t.elements)n=n.filter(i=>!an(i,r));return{arrayValue:{values:n}}}class bl extends ku{constructor(e,n){super(),this.M=e,this.k=n}}function Ug(t){return De(t.integerValue||t.doubleValue)}function $w(t){return Xf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function XA(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof fo&&r instanceof fo||n instanceof po&&r instanceof po?Ni(n.elements,r.elements,an):n instanceof bl&&r instanceof bl?an(n.k,r.k):n instanceof Ml&&r instanceof Ml}(t.transform,e.transform)}class JA{constructor(e,n){this.version=e,this.transformResults=n}}class yi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yi}static exists(e){return new yi(void 0,e)}static updateTime(e){return new yi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Iu{}function ZA(t,e,n){t instanceof Cu?function(r,i,s){const o=r.value.clone(),a=jg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Bo?function(r,i,s){if(!ja(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=jg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Lw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function td(t,e,n){t instanceof Cu?function(r,i,s){if(!ja(r.precondition,i))return;const o=r.value.clone(),a=Bg(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(zg(i),o).setHasLocalMutations()}(t,e,n):t instanceof Bo?function(r,i,s){if(!ja(r.precondition,i))return;const o=Bg(r.fieldTransforms,s,i),a=i.data;a.setAll(Lw(r)),a.setAll(o),i.convertToFoundDocument(zg(i),a).setHasLocalMutations()}(t,e,n):function(r,i){ja(r.precondition,i)&&i.convertToNoDocument(Z.min())}(t,e)}function eN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Pw(r.transform,i||null);s!=null&&(n==null&&(n=Yt.empty()),n.set(r.field,s))}return n||null}function Vg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ni(n,r,(i,s)=>XA(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function zg(t){return t.isFoundDocument()?t.version:Z.min()}class Cu extends Iu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class Bo extends Iu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Lw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jg(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,YA(o,a,n[i]))}return r}function Bg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,QA(s,o,e))}return r}class tN extends Iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class nN extends Iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,ne;function iN(t){switch(t){default:return Y();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Mw(t){if(t===void 0)return er("GRPC error has no .code"),x.UNKNOWN;switch(t){case Pe.OK:return x.OK;case Pe.CANCELLED:return x.CANCELLED;case Pe.UNKNOWN:return x.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return x.INTERNAL;case Pe.UNAVAILABLE:return x.UNAVAILABLE;case Pe.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Pe.NOT_FOUND:return x.NOT_FOUND;case Pe.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Pe.ABORTED:return x.ABORTED;case Pe.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Pe.DATA_LOSS:return x.DATA_LOSS;default:return Y()}}(ne=Pe||(Pe={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _w(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ka(this.root,e,this.comparator,!0)}}class ka{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ge.RED,this.left=i!=null?i:Ge.EMPTY,this.right=s!=null?s:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ge(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hg(this.data.getIterator())}getIteratorFrom(e){return new Hg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Hg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=new je(V.comparator);function Mr(){return sN}const oN=new je(V.comparator);function nd(){return oN}function Lc(){return new Xi(t=>t.toString(),(t,e)=>t.isEqual(e))}const aN=new je(V.comparator),lN=new Je(V.comparator);function Ee(...t){let e=lN;for(const n of t)e=e.add(n);return e}const uN=new Je(ue);function bw(){return uN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Ho.createSynthesizedTargetChangeForCurrentChange(e,n)),new Tu(Z.min(),r,bw(),Mr(),Ee())}}class Ho{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ho(et.EMPTY_BYTE_STRING,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,r,i){this.O=e,this.removedTargetIds=n,this.key=r,this.F=i}}class Fw{constructor(e,n){this.targetId=e,this.$=n}}class Uw{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class qg{constructor(){this.B=0,this.L=Kg(),this.U=et.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Ee(),n=Ee(),r=Ee();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Ho(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=Kg()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class cN{constructor(e){this.nt=e,this.st=new Map,this.it=Mr(),this.rt=Wg(),this.ot=new Je(ue)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,r=e.$.count,i=this.wt(n);if(i){const s=i.target;if(Zh(s))if(r===0){const o=new V(s.path);this.ct(n,o,ot.newNoDocument(o,Z.min()))}else ye(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&Zh(a.target)){const l=new V(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.ct(o,l,ot.newNoDocument(l,e))}s.j&&(n.set(o,s.H()),s.J())}});let r=Ee();this.rt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.wt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.it.forEach((s,o)=>o.setReadTime(e));const i=new Tu(e,n,this.ot,this.it,r);return this.it=Mr(),this.rt=Wg(),this.ot=new Je(ue),i}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new qg,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Je(ue),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new qg),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Wg(){return new je(V.comparator)}function Kg(){return new je(V.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class fN{constructor(e,n){this.databaseId=e,this.N=n}}function Fl(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vw(t,e){return t.N?e.toBase64():e.toUint8Array()}function pN(t,e){return Fl(t,e.toTimestamp())}function _n(t){return ye(!!t),Z.fromTimestamp(function(e){const n=tr(e);return new lt(n.seconds,n.nanos)}(t))}function np(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zw(t){const e=ke.fromString(t);return ye(Hw(e)),e}function rd(t,e){return np(t.databaseId,e.path)}function Mc(t,e){const n=zw(e);if(n.get(1)!==t.databaseId.projectId)throw new j(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(jw(n))}function id(t,e){return np(t.databaseId,e)}function mN(t){const e=zw(t);return e.length===4?ke.emptyPath():jw(e)}function sd(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jw(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gg(t,e,n){return{name:rd(t,e),fields:n.value.mapValue.fields}}function gN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.N?(ye(u===void 0||typeof u=="string"),et.fromBase64String(u||"")):(ye(u===void 0||u instanceof Uint8Array),et.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?x.UNKNOWN:Mw(l.code);return new j(u,l.message||"")}(o);n=new Uw(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Mc(t,r.document.name),s=_n(r.document.updateTime),o=new Yt({mapValue:{fields:r.document.fields}}),a=ot.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ba(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Mc(t,r.document),s=r.readTime?_n(r.readTime):Z.min(),o=ot.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ba([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Mc(t,r.document),s=r.removedTargetIds||[];n=new Ba([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new rN(i),o=r.targetId;n=new Fw(o,s)}}return n}function yN(t,e){let n;if(e instanceof Cu)n={update:Gg(t,e.key,e.value)};else if(e instanceof tN)n={delete:rd(t,e.key)};else if(e instanceof Bo)n={update:Gg(t,e.key,e.data),updateMask:xN(e.fieldMask)};else{if(!(e instanceof nN))return Y();n={verify:rd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ml)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof po)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof bl)return{fieldPath:s.field.canonicalString(),increment:o.k};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:pN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function vN(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?_n(r.updateTime):_n(i);return s.isEqual(Z.min())&&(s=_n(i)),new JA(s,r.transformResults||[])}(n,e))):[]}function wN(t,e){return{documents:[id(t,e.path)]}}function EN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=id(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=id(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(d){if(d.op==="=="){if(Lg(d.value))return{unaryFilter:{field:qr(d.field),op:"IS_NAN"}};if($g(d.value))return{unaryFilter:{field:qr(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if(Lg(d.value))return{unaryFilter:{field:qr(d.field),op:"IS_NOT_NAN"}};if($g(d.value))return{unaryFilter:{field:qr(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qr(d.field),op:IN(d.op),value:d.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:qr(c.field),direction:kN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.N||Yi(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function SN(t){let e=mN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=Bw(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new Os(ii(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Yi(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,f=c.values||[];return new $l(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,f=c.values||[];return new $l(f,d)}(n.endAt)),zA(e,i,o,s,a,"F",l,u)}function _N(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bw(t){return t?t.unaryFilter!==void 0?[TN(t)]:t.fieldFilter!==void 0?[CN(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Bw(e)).reduce((e,n)=>e.concat(n)):Y():[]}function kN(t){return hN[t]}function IN(t){return dN[t]}function qr(t){return{fieldPath:t.canonicalString()}}function ii(t){return kt.fromServerFormat(t.fieldPath)}function CN(t){return It.create(ii(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}function TN(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ii(t.unaryFilter.field);return It.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ii(t.unaryFilter.field);return It.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ii(t.unaryFilter.field);return It.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ii(t.unaryFilter.field);return It.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}function xN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(i=>i?N.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function qo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ZA(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&td(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&td(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(Z.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Ni(this.mutations,e.mutations,(n,r)=>Vg(n,r))&&Ni(this.baseMutations,e.baseMutations,(n,r)=>Vg(n,r))}}class rp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=aN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.Jt=e}}function ON(t){const e=SN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qA(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.qe=new LN}addToCollectionParentIndex(e,n){return this.qe.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getFieldIndex(e,n){return N.resolve(null)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class LN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(ke.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new $i(0)}static yn(){return new $i(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==AN)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this.changes=new Xi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}qs(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(i){return V.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.js(e,n.path):HA(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new V(n)).next(r=>{let i=nd();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Ws(e,n,r){const i=n.collectionGroup;let s=nd();return this.indexManager.getCollectionParents(e,i).next(o=>N.forEach(o,a=>{const l=function(u,c){return new Su(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.zs(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}zs(e,n,r){let i;return this.ds.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(s=>{for(const o of s)for(const a of o.mutations){const l=a.key;let u=i.get(l);u==null&&(u=ot.newInvalidDocument(l),i=i.insert(l,u)),td(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(l))}}).next(()=>(i.forEach((s,o)=>{tp(n,o)||(i=i.remove(s))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=i}static Ys(e,n){let r=Ee(),i=Ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ip(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{Xs(e){this.Zs=e}Qs(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(Z.min())?this.ti(e,n):this.Zs.Ks(e,i).next(s=>{const o=this.ei(n,s);return(za(n)||Ll(n))&&this.ni(n.limitType,o,i,r)?this.ti(e,n):(Rg()<=se.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ed(n)),this.Zs.Qs(e,n,AA(r,-1)).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}ei(e,n){let r=new Je(Aw(e));return n.forEach((i,s)=>{tp(e,s)&&(r=r.add(s))}),r}ni(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ti(e,n){return Rg()<=se.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",ed(n)),this.Zs.Qs(e,n,Oi.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,r,i){this.persistence=e,this.si=n,this.M=i,this.ii=new je(ue),this.ri=new Xi(s=>Jf(s),Zf),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(r)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new bN(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function VN(t,e,n,r){return new UN(t,e,n,r)}async function qw(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.Bs.getAllMutationBatches(r).next(s=>(i=s,n.ai(e),n.Bs.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Ee();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.ci.Ks(r,l).next(u=>({hi:u,removedBatchIds:o,addedBatchIds:a}))})})}function zN(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let f=N.resolve();return d.forEach(y=>{f=f.next(()=>u.getEntry(a,y)).next(g=>{const E=l.docVersions.get(y);ye(E!==null),g.version.compareTo(E)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),f.next(()=>o.Bs.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.ci.Ks(r,i))})}function Ww(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function jN(t,e){const n=X(t),r=e.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const a=[];e.targetChanges.forEach((u,c)=>{const d=i.get(c);if(!d)return;a.push(n.fs.removeMatchingKeys(s,u.removedDocuments,c).next(()=>n.fs.addMatchingKeys(s,u.addedDocuments,c)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?f=f.withResumeToken(et.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(c,f),function(y,g,E){return y.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,u)&&a.push(n.fs.updateTargetData(s,f))});let l=Mr();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(BN(s,o,e.documentUpdates).next(u=>{l=u})),!r.isEqual(Z.min())){const u=n.fs.getLastRemoteSnapshotVersion(s).next(c=>n.fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>n.ci.Gs(s,l)).next(()=>l)}).then(s=>(n.ii=i,s))}function BN(t,e,n){let r=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let s=Mr();return n.forEach((o,a)=>{const l=i.get(o);a.isNoDocument()&&a.version.isEqual(Z.min())?(e.removeEntry(o,a.readTime),s=s.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),s=s.insert(o,a)):U("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),s})}function HN(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function qN(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.fs.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):n.fs.allocateTargetId(r).next(o=>(i=new kr(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ii.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ii=n.ii.insert(r.targetId,r),n.ri.set(e,r.targetId)),r})}async function od(t,e,n){const r=X(t),i=r.ii.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qo(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ii=r.ii.remove(e),r.ri.delete(i.target)}function Qg(t,e,n){const r=X(t);let i=Z.min(),s=Ee();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=X(a),d=c.ri.get(u);return d!==void 0?N.resolve(c.ii.get(d)):c.fs.getTargetData(l,u)}(r,o,Lr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.si.Qs(o,e,n?i:Z.min(),n?s:Ee())).next(a=>(WN(r,WA(e),a),{documents:a,li:s})))}function WN(t,e,n){let r=Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.oi.set(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return N.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var r;return this.wi.set(n.id,{id:(r=n).id,version:r.version,createTime:_n(r.createTime)}),N.resolve()}getNamedQuery(e,n){return N.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(r){return{name:r.name,query:ON(r.bundledQuery),readTime:_n(r.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(){this.overlays=new je(V.comparator),this.gi=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Xt(e,n,s)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.gi.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.gi.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const i=Lc(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new je((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Lc(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Lc(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return N.resolve(a)}Xt(e,n,r){if(r===null)return;const i=this.overlays.get(r.key);if(i!==null){const o=this.gi.get(i.largestBatchId).delete(r.key);this.gi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PN(n,r));let s=this.gi.get(n);s===void 0&&(s=Ee(),this.gi.set(n,s)),this.gi.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.yi=new Je(Fe.pi),this.Ii=new Je(Fe.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.yi=this.yi.add(r),this.Ii=this.Ii.add(r)}Ei(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ai(new Fe(e,n))}Ri(e,n){e.forEach(r=>this.removeReference(r,n))}Pi(e){const n=new V(new ke([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.Ii.forEachInRange([r,i],o=>{this.Ai(o),s.push(o.key)}),s}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new V(new ke([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=Ee();return this.Ii.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.yi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return V.comparator(e.key,n.key)||ue(e.vi,n.vi)}static Ti(e,n){return ue(e.vi,n.vi)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new Je(Fe.pi)}checkEmpty(e){return N.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,i){const s=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new RN(s,n,r,i);this.Bs.push(o);for(const a of i)this.Di=this.Di.add(new Fe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.xi(r),s=i<0?0:i;return N.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return N.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.Di.forEachInRange([r,i],o=>{const a=this.Ci(o.vi);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ue);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Di.forEachInRange([s,o],a=>{r=r.add(a.vi)})}),N.resolve(this.Ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new V(s),0);let a=new Je(ue);return this.Di.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.vi)),!0)},o),N.resolve(this.Ni(a))}Ni(e){const n=[];return e.forEach(r=>{const i=this.Ci(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.ki(n.batchId,"removed")===0),this.Bs.shift();let r=this.Di;return N.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Di=r})}_n(e){}containsKey(e,n){const r=new Fe(n,0),i=this.Di.firstAfterOrEqual(r);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.Bs.length,N.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.Mi=e,this.docs=new je(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mi(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=Mr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),N.resolve(r)}getAllFromCollection(e,n,r){let i=Mr();const s=new V(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||RA(NA(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,i){Y()}Oi(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new XN(this)}getSize(e){return N.resolve(this.size)}}class XN extends MN{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(e,i)):this.Kn.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.persistence=e,this.Fi=new Xi(n=>Jf(n),Zf),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.$i=0,this.Bi=new sp,this.targetCount=0,this.Li=$i.gn()}forEachTarget(e,n){return this.Fi.forEach((r,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$i&&(this.$i=n),N.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new $i(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Tn(n),N.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fi.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Bi.Ei(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Bi.Ri(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Bi.Vi(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Bi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n){this.Ui={},this.overlays={},this.es=new Yf(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new JN(this),this.indexManager=new $N,this.ds=function(r){return new YN(r)}(r=>this.referenceDelegate.qi(r)),this.M=new DN(n),this._s=new KN(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ui[e.toKey()];return r||(r=new QN(n,this.referenceDelegate),this.Ui[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new eR(this.es.next());return this.referenceDelegate.Ki(),r(i).next(s=>this.referenceDelegate.Gi(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Qi(e,n){return N.or(Object.values(this.Ui).map(r=>()=>r.containsKey(e,n)))}}class eR extends NN{constructor(e){super(),this.currentSequenceNumber=e}}class op{constructor(e){this.persistence=e,this.ji=new sp,this.Wi=null}static zi(e){return new op(e)}get Hi(){if(this.Wi)return this.Wi;throw Y()}addReference(e,n,r){return this.ji.addReference(r,n),this.Hi.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.ji.removeReference(r,n),this.Hi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),N.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(i=>this.Hi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Hi,r=>{const i=V.fromPath(r);return this.Ji(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(r=>{r?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return N.or([()=>N.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class Yg{constructor(){this.activeTargetIds=bw()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tR{constructor(){this.$r=new Yg,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,r){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new Yg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{Lr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,r,i,s){const o=this.uo(e,n);U("RestConnection","Sending: ",o,r);const a={};return this.ao(a,i,s),this.co(e,o,a,r).then(l=>(U("RestConnection","Received: ",l),l),l=>{throw Pg("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ho(e,n,r,i,s){return this.oo(e,n,r,i,s)}ao(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}uo(e,n){const r=rR[e];return`${this.io}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new pA;a.listenOnce(hA.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case $c.NO_ERROR:const u=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(u)),s(u);break;case $c.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new j(x.DEADLINE_EXCEEDED,"Request time out"));break;case $c.HTTP_ERROR:const c=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const f=function(y){const g=y.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(g)>=0?g:x.UNKNOWN}(d.status);o(new j(f,d.message))}else o(new j(x.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(x.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}lo(e,n,r){const i=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=uA(),o=cA(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new fA({})),this.ao(a.initMessageHeaders,n,r),M0()||F0()||iI()||U0()||sI()||b0()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");U("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,d=!1;const f=new iR({Wr:g=>{d?U("Connection","Not sending because WebChannel is closed:",g):(c||(U("Connection","Opening WebChannel transport."),u.open(),c=!0),U("Connection","WebChannel sending:",g),u.send(g))},zr:()=>u.close()}),y=(g,E,A)=>{g.listen(E,p=>{try{A(p)}catch(h){setTimeout(()=>{throw h},0)}})};return y(u,_a.EventType.OPEN,()=>{d||U("Connection","WebChannel transport opened.")}),y(u,_a.EventType.CLOSE,()=>{d||(d=!0,U("Connection","WebChannel transport closed"),f.no())}),y(u,_a.EventType.ERROR,g=>{d||(d=!0,Pg("Connection","WebChannel transport errored:",g),f.no(new j(x.UNAVAILABLE,"The operation could not be completed")))}),y(u,_a.EventType.MESSAGE,g=>{var E;if(!d){const A=g.data[0];ye(!!A);const p=A,h=p.error||((E=p[0])===null||E===void 0?void 0:E.error);if(h){U("Connection","WebChannel received error:",h);const m=h.status;let w=function(R){const S=Pe[R];if(S!==void 0)return Mw(S)}(m),_=h.message;w===void 0&&(w=x.INTERNAL,_="Unknown error status: "+m+" with message "+h.message),d=!0,f.no(new j(w,_)),u.close()}else U("Connection","WebChannel received:",A),f.so(A)}}),y(o,dA.STAT_EVENT,g=>{g.stat===Ag.PROXY?U("Connection","Detected buffering proxy"):g.stat===Ag.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.eo()},0),f}}function bc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t){return new fN(t,!0)}class Kw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Yn=e,this.timerId=n,this.fo=r,this._o=i,this.wo=s,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),r=Math.max(0,Date.now()-this.po),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n,r,i,s,o,a,l){this.Yn=e,this.Ro=r,this.Po=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Kw(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.qo(r,i)},r=>{e(()=>{const i=new j(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ko(i)})})}qo(e,n){const r=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{r(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(i=>{r(()=>this.Ko(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oR extends Gw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.M=s}Go(e,n){return this.bo.lo("Listen",e,n)}onMessage(e){this.Do.reset();const n=gN(this.M,e),r=function(i){if(!("targetChange"in i))return Z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Z.min():s.readTime?_n(s.readTime):Z.min()}(e);return this.listener.Qo(n,r)}jo(e){const n={};n.database=sd(this.M),n.addTarget=function(i,s){let o;const a=s.target;return o=Zh(a)?{documents:wN(i,a)}:{query:EN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Vw(i,s.resumeToken):s.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=Fl(i,s.snapshotVersion.toTimestamp())),o}(this.M,e);const r=_N(this.M,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=sd(this.M),n.removeTarget=e,this.Fo(n)}}class aR extends Gw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.M=s,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=vN(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.Yo(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=sd(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yN(this.M,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.M=i,this.tu=!1}eu(){if(this.tu)throw new j(x.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.oo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(x.UNKNOWN,i.toString())})}ho(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ho(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(x.UNKNOWN,i.toString())})}terminate(){this.tu=!0}}class uR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(er(n),this.iu=!1):U("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=s,this._u.Lr(o=>{r.enqueueAndForget(async()=>{jr(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=X(a);l.fu.add(4),await Ko(l),l.wu.set("Unknown"),l.fu.delete(4),await Au(l)}(this))})}),this.wu=new uR(r,i)}}async function Au(t){if(jr(t))for(const e of t.du)await e(!0)}async function Ko(t){for(const e of t.du)await e(!1)}function Qw(t,e){const n=X(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),up(n)?lp(n):Ji(n).xo()&&ap(n,e))}function Yw(t,e){const n=X(t),r=Ji(n);n.lu.delete(e),r.xo()&&Xw(n,e),n.lu.size===0&&(r.xo()?r.Mo():jr(n)&&n.wu.set("Unknown"))}function ap(t,e){t.mu.Z(e.targetId),Ji(t).jo(e)}function Xw(t,e){t.mu.Z(e),Ji(t).Wo(e)}function lp(t){t.mu=new cN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),Ji(t).start(),t.wu.ru()}function up(t){return jr(t)&&!Ji(t).Co()&&t.lu.size>0}function jr(t){return X(t).fu.size===0}function Jw(t){t.mu=void 0}async function hR(t){t.lu.forEach((e,n)=>{ap(t,e)})}async function dR(t,e){Jw(t),up(t)?(t.wu.au(e),lp(t)):t.wu.set("Unknown")}async function fR(t,e,n){if(t.wu.set("Online"),e instanceof Uw&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.lu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.lu.delete(o),r.mu.removeTarget(o))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ul(t,r)}else if(e instanceof Ba?t.mu.ut(e):e instanceof Fw?t.mu._t(e):t.mu.ht(e),!n.isEqual(Z.min()))try{const r=await Ww(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.mu.yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.lu.get(l);u&&i.lu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.lu.get(a);if(!l)return;i.lu.set(a,l.withResumeToken(et.EMPTY_BYTE_STRING,l.snapshotVersion)),Xw(i,a);const u=new kr(l.target,a,1,l.sequenceNumber);ap(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Ul(t,r)}}async function Ul(t,e,n){if(!qo(e))throw e;t.fu.add(1),await Ko(t),t.wu.set("Offline"),n||(n=()=>Ww(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await Au(t)})}function Zw(t,e){return e().catch(n=>Ul(t,n,e))}async function Nu(t){const e=X(t),n=nr(e);let r=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;pR(e);)try{const i=await HN(e.localStore,r);if(i===null){e.hu.length===0&&n.Mo();break}r=i.batchId,mR(e,i)}catch(i){await Ul(e,i)}eE(e)&&tE(e)}function pR(t){return jr(t)&&t.hu.length<10}function mR(t,e){t.hu.push(e);const n=nr(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function eE(t){return jr(t)&&!nr(t).Co()&&t.hu.length>0}function tE(t){nr(t).start()}async function gR(t){nr(t).Zo()}async function yR(t){const e=nr(t);for(const n of t.hu)e.Jo(n.mutations)}async function vR(t,e,n){const r=t.hu.shift(),i=rp.from(r,e,n);await Zw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nu(t)}async function wR(t,e){e&&nr(t).Ho&&await async function(n,r){if(i=r.code,iN(i)&&i!==x.ABORTED){const s=n.hu.shift();nr(n).ko(),await Zw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Nu(n)}var i}(t,e),eE(t)&&tE(t)}async function Jg(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=jr(n);n.fu.add(3),await Ko(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await Au(n)}async function ER(t,e){const n=X(t);e?(n.fu.delete(2),await Au(n)):e||(n.fu.add(2),await Ko(n),n.wu.set("Unknown"))}function Ji(t){return t.gu||(t.gu=function(e,n,r){const i=X(e);return i.eu(),new oR(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Hr:hR.bind(null,t),Yr:dR.bind(null,t),Qo:fR.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),up(t)?lp(t):t.wu.set("Unknown")):(await t.gu.stop(),Jw(t))})),t.gu}function nr(t){return t.yu||(t.yu=function(e,n,r){const i=X(e);return i.eu(),new aR(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Hr:gR.bind(null,t),Yr:wR.bind(null,t),Xo:yR.bind(null,t),Yo:vR.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await Nu(t)):(await t.yu.stop(),t.hu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new cp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hp(t,e){if(er("AsyncQueue",`${e}: ${t}`),qo(t))return new j(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=nd(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.pu=new je(V.comparator)}track(e){const n=e.doc.key,r=this.pu.get(n);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(n,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(n):e.type===1&&r.type===2?this.pu=this.pu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):Y():this.pu=this.pu.insert(n,e)}Iu(){const e=[];return this.pu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Li{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Li(e,n,vi.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_u(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.Tu=void 0,this.listeners=[]}}class _R{constructor(){this.queries=new Xi(e=>xw(e),_u),this.onlineState="Unknown",this.Eu=new Set}}async function nE(t,e){const n=X(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new SR),i)try{s.Tu=await n.onListen(r)}catch(o){const a=hp(o,`Initialization of query '${ed(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Au(n.onlineState),s.Tu&&e.Ru(s.Tu)&&dp(n)}async function rE(t,e){const n=X(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function kR(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Ru(i)&&(r=!0);o.Tu=i}}r&&dp(n)}function IR(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function dp(t){t.Eu.forEach(e=>{e.next()})}class iE{constructor(e,n,r){this.query=e,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}Ru(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Li(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),n=!0):this.Su(e,this.onlineState)&&(this.Du(e),n=!0),this.Vu=e,n}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),n=!0),n}Su(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Cu||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(e){e=Li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.key=e}}class oE{constructor(e){this.key=e}}class CR{constructor(e,n){this.query=e,this.$u=n,this.Bu=null,this.current=!1,this.Lu=Ee(),this.mutatedKeys=Ee(),this.Uu=Aw(e),this.qu=new vi(this.Uu)}get Ku(){return this.$u}Gu(e,n){const r=n?n.Qu:new Zg,i=n?n.qu:this.qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=za(this.query)&&i.size===this.query.limit?i.last():null,u=Ll(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const f=i.get(c),y=tp(this.query,d)?d:null,g=!!f&&this.mutatedKeys.has(f.key),E=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let A=!1;f&&y?f.data.isEqual(y.data)?g!==E&&(r.track({type:3,doc:y}),A=!0):this.ju(f,y)||(r.track({type:2,doc:y}),A=!0,(l&&this.Uu(y,l)>0||u&&this.Uu(y,u)<0)&&(a=!0)):!f&&y?(r.track({type:0,doc:y}),A=!0):f&&!y&&(r.track({type:1,doc:f}),A=!0,(l||u)&&(a=!0)),A&&(y?(o=o.add(y),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),za(this.query)||Ll(this.query))for(;o.size>this.query.limit;){const c=za(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{qu:o,Qu:r,ni:a,mutatedKeys:s}}ju(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const s=e.Qu.Iu();s.sort((u,c)=>function(d,f){const y=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return y(d)-y(f)}(u.type,c.type)||this.Uu(u.doc,c.doc)),this.Wu(r);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,l=a!==this.Bu;return this.Bu=a,s.length!==0||l?{snapshot:new Li(this.query,e.qu,i,s,e.mutatedKeys,a===0,l,!1),Hu:o}:{Hu:o}}Au(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Zg,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=Ee(),this.qu.forEach(r=>{this.Ju(r.key)&&(this.Lu=this.Lu.add(r.key))});const n=[];return e.forEach(r=>{this.Lu.has(r)||n.push(new oE(r))}),this.Lu.forEach(r=>{e.has(r)||n.push(new sE(r))}),n}Yu(e){this.$u=e.li,this.Lu=Ee();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Xu(){return Li.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class TR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xR{constructor(e){this.key=e,this.Zu=!1}}class AR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new Xi(a=>xw(a),_u),this.na=new Map,this.sa=new Set,this.ia=new je(V.comparator),this.ra=new Map,this.oa=new sp,this.ua={},this.aa=new Map,this.ca=$i.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function NR(t,e){const n=UR(t);let r,i;const s=n.ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Xu();else{const o=await qN(n.localStore,Lr(e));n.isPrimaryClient&&Qw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await RR(n,e,r,a==="current")}return i}async function RR(t,e,n,r){t.la=(c,d,f)=>async function(y,g,E,A){let p=g.view.Gu(E);p.ni&&(p=await Qg(y.localStore,g.query,!1).then(({documents:w})=>g.view.Gu(w,p)));const h=A&&A.targetChanges.get(g.targetId),m=g.view.applyChanges(p,y.isPrimaryClient,h);return ty(y,g.targetId,m.Hu),m.snapshot}(t,c,d,f);const i=await Qg(t.localStore,e,!0),s=new CR(e,i.li),o=s.Gu(i.documents),a=Ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);ty(t,n,l.Hu);const u=new TR(e,n,s);return t.ea.set(e,u),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),l.snapshot}async function PR(t,e){const n=X(t),r=n.ea.get(e),i=n.na.get(r.targetId);if(i.length>1)return n.na.set(r.targetId,i.filter(s=>!_u(s,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await od(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Yw(n.remoteStore,r.targetId),ad(n,r.targetId)}).catch(Wo)):(ad(n,r.targetId),await od(n.localStore,r.targetId,!0))}async function DR(t,e,n){const r=VR(t);try{const i=await function(s,o){const a=X(s),l=lt.now(),u=o.reduce((d,f)=>d.add(f.key),Ee());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>a.ci.Ks(d,u).next(f=>{c=f;const y=[];for(const g of o){const E=eN(g,c.get(g.key));E!=null&&y.push(new Bo(g.key,E,Cw(E.value.mapValue),yi.exists(!0)))}return a.Bs.addMutationBatch(d,l,y,o)})).then(d=>(d.applyToLocalDocumentSet(c),{batchId:d.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ua[s.currentUser.toKey()];l||(l=new je(ue)),l=l.insert(o,a),s.ua[s.currentUser.toKey()]=l}(r,i.batchId,n),await Go(r,i.changes),await Nu(r.remoteStore)}catch(i){const s=hp(i,"Failed to persist write");n.reject(s)}}async function aE(t,e){const n=X(t);try{const r=await jN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ra.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Zu=!0:i.modifiedDocuments.size>0?ye(o.Zu):i.removedDocuments.size>0&&(ye(o.Zu),o.Zu=!1))}),await Go(n,r,e)}catch(r){await Wo(r)}}function ey(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ea.forEach((s,o)=>{const a=o.view.Au(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=X(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.Au(o)&&(l=!0)}),l&&dp(a)}(r.eventManager,e),i.length&&r.ta.Qo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OR(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ra.get(e),s=i&&i.key;if(s){let o=new je(V.comparator);o=o.insert(s,ot.newNoDocument(s,Z.min()));const a=Ee().add(s),l=new Tu(Z.min(),new Map,new Je(ue),o,a);await aE(r,l),r.ia=r.ia.remove(s),r.ra.delete(e),fp(r)}else await od(r.localStore,e,!1).then(()=>ad(r,e,n)).catch(Wo)}async function $R(t,e){const n=X(t),r=e.batch.batchId;try{const i=await zN(n.localStore,e);uE(n,r,null),lE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Go(n,i)}catch(i){await Wo(i)}}async function LR(t,e,n){const r=X(t);try{const i=await function(s,o){const a=X(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.Bs.lookupMutationBatch(l,o).next(c=>(ye(c!==null),u=c.keys(),a.Bs.removeMutationBatch(l,c))).next(()=>a.Bs.performConsistencyCheck(l)).next(()=>a.ci.Ks(l,u))})}(r.localStore,e);uE(r,e,n),lE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Go(r,i)}catch(i){await Wo(i)}}function lE(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function uE(t,e,n){const r=X(t);let i=r.ua[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ua[r.currentUser.toKey()]=i}}function ad(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.na.get(e))t.ea.delete(r),n&&t.ta.fa(r,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(r=>{t.oa.containsKey(r)||cE(t,r)})}function cE(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);n!==null&&(Yw(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),fp(t))}function ty(t,e,n){for(const r of n)r instanceof sE?(t.oa.addReference(r.key,e),MR(t,r)):r instanceof oE?(U("SyncEngine","Document no longer in limbo: "+r.key),t.oa.removeReference(r.key,e),t.oa.containsKey(r.key)||cE(t,r.key)):Y()}function MR(t,e){const n=e.key,r=n.path.canonicalString();t.ia.get(n)||t.sa.has(r)||(U("SyncEngine","New document in limbo: "+n),t.sa.add(r),fp(t))}function fp(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new V(ke.fromString(e)),r=t.ca.next();t.ra.set(r,new xR(n)),t.ia=t.ia.insert(n,r),Qw(t.remoteStore,new kr(Lr(ep(n.path)),r,2,Yf.A))}}async function Go(t,e,n){const r=X(t),i=[],s=[],o=[];r.ea.isEmpty()||(r.ea.forEach((a,l)=>{o.push(r.la(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=ip.Ys(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ta.Qo(i),await async function(a,l){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>N.forEach(l,d=>N.forEach(d.Hs,f=>u.persistence.referenceDelegate.addReference(c,d.targetId,f)).next(()=>N.forEach(d.Js,f=>u.persistence.referenceDelegate.removeReference(c,d.targetId,f)))))}catch(c){if(!qo(c))throw c;U("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const f=u.ii.get(d),y=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(y);u.ii=u.ii.insert(d,g)}}}(r.localStore,s))}async function bR(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await qw(n.localStore,e);n.currentUser=e,function(i,s){i.aa.forEach(o=>{o.forEach(a=>{a.reject(new j(x.CANCELLED,s))})}),i.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Go(n,r.hi)}}function FR(t,e){const n=X(t),r=n.ra.get(e);if(r&&r.Zu)return Ee().add(r.key);{let i=Ee();const s=n.na.get(e);if(!s)return i;for(const o of s){const a=n.ea.get(o);i=i.unionWith(a.view.Ku)}return i}}function UR(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OR.bind(null,e),e.ta.Qo=kR.bind(null,e.eventManager),e.ta.fa=IR.bind(null,e.eventManager),e}function VR(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$R.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LR.bind(null,e),e}class zR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=xu(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return VN(this.persistence,new FN,e.initialUser,this.M)}wa(e){return new ZN(op.zi,this.M)}_a(e){return new tR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ey(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bR.bind(null,this.syncEngine),await ER(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _R}createDatastore(e){const n=xu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new sR(i));var i;return function(s,o,a,l){return new lR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>ey(this.syncEngine,a,0),o=Xg.vt()?new Xg:new nR,new cR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new AR(r,i,s,o,a,l);return u&&(c.ha=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);U("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await Ko(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=Sw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function HR(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function qR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WR(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Jg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Jg(e.remoteStore,s)),t.onlineComponents=e}async function WR(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await HR(t,new zR)),t.offlineComponents}async function dE(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await qR(t,new jR)),t.onlineComponents}function KR(t){return dE(t).then(e=>e.syncEngine)}async function fE(t){const e=await dE(t),n=e.eventManager;return n.onListen=NR.bind(null,e.syncEngine),n.onUnlisten=PR.bind(null,e.syncEngine),n}function GR(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new hE({next:d=>{s.enqueueAndForget(()=>rE(i,c));const f=d.docs.has(o);!f&&d.fromCache?l.reject(new j(x.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&a&&a.source==="server"?l.reject(new j(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new iE(ep(o.path),u,{includeMetadataChanges:!0,Cu:!0});return nE(i,c)}(await fE(t),t.asyncQueue,e,n,r)),r.promise}function QR(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new hE({next:d=>{s.enqueueAndForget(()=>rE(i,c)),d.fromCache&&a.source==="server"?l.reject(new j(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new iE(o,u,{includeMetadataChanges:!0,Cu:!0});return nE(i,c)}(await fE(t),t.asyncQueue,e,n,r)),r.promise}const ny=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t,e,n){if(!n)throw new j(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YR(t,e,n,r){if(e===!0&&r===!0)throw new j(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ry(t){if(!V.isDocumentKey(t))throw new j(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function iy(t){if(V.isDocumentKey(t))throw new j(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Mi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pp(t);throw new j(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,YR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sy({}),this._settingsFrozen=!1,e instanceof Pi?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new j(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(i.options.projectId)}(e))}get app(){if(!this._app)throw new j(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gA;switch(n.type){case"gapi":const r=n.client;return ye(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new wA(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new j(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ny.get(e);n&&(U("ComponentProvider","Removing Datastore"),ny.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Ru{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ru(this.firestore,e,this._query)}}class Qn extends Ru{constructor(e,n,r){super(e,n,ep(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new V(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function XR(t,e,...n){if(t=Ht(t),pE("collection","path",e),t instanceof mp){const r=ke.fromString(e,...n);return iy(r),new Qn(t,null,r)}{if(!(t instanceof Pt||t instanceof Qn))throw new j(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return iy(r),new Qn(t.firestore,null,r)}}function JR(t,e,...n){if(t=Ht(t),arguments.length===1&&(e=Sw.R()),pE("doc","path",e),t instanceof mp){const r=ke.fromString(e,...n);return ry(r),new Pt(t,null,new V(r))}{if(!(t instanceof Pt||t instanceof Qn))throw new j(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return ry(r),new Pt(t.firestore,t instanceof Qn?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Kw(this,"async_queue_retry"),this.qa=()=>{const n=bc();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=bc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new Sn;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!qo(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(r=>{this.$a=r,this.Ba=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw er("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ba=!1,r))));return this.ka=n,n}enqueueAfterDelay(e,n,r){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const i=cp.createAndSchedule(this,e,n,r,s=>this.ja(s));return this.Fa.push(i),i}Ka(){this.$a&&Y()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}class Pu extends mp{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new ZR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||mE(this),this._firestoreClient.terminate()}}function eP(t=B0()){return pf(t,"firestore").getImmediate()}function gp(t){return t._firestoreClient||mE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new CA(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new BR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bi(et.fromBase64String(e))}catch(n){throw new j(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bi(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=/^__.*__$/;class nP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Bo(e,this.data,this.fieldMask,n,this.fieldTransforms):new Cu(e,this.data,n,this.fieldTransforms)}}function yE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class wp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ya(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new wp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Za({path:r,ec:!1});return i.nc(e),i}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Za({path:r,ec:!1});return i.Ya(),i}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return Vl(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(yE(this.Xa)&&tP.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class rP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||xu(e)}ac(e,n,r,i=!1){return new wp({Xa:e,methodName:n,uc:r,path:kt.emptyPath(),ec:!1,oc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function iP(t){const e=t._freezeSettings(),n=xu(t._databaseId);return new rP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sP(t,e,n,r,i,s={}){const o=t.ac(s.merge||s.mergeFields?2:0,e,n,i);SE("Data must be an object, but it was:",o,r);const a=wE(r,o);let l,u;if(s.merge)l=new Yh(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=oP(e,d,n);if(!o.contains(f))throw new j(x.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);lP(c,f)||c.push(f)}l=new Yh(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new nP(new Yt(a),l,u)}function vE(t,e){if(EE(t=Ht(t)))return SE("Unsupported field value:",e,t),wE(t,e);if(t instanceof gE)return function(n,r){if(!yE(r.Xa))throw r.rc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.rc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=vE(o,r.ic(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ht(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return GA(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=lt.fromDate(n);return{timestampValue:Fl(r.M,i)}}if(n instanceof lt){const i=new lt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fl(r.M,i)}}if(n instanceof vp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bi)return{bytesValue:Vw(r.M,n._byteString)};if(n instanceof Pt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.rc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:np(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.rc(`Unsupported field value: ${pp(n)}`)}(t,e)}function wE(t,e){const n={};return _w(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qi(t,(r,i)=>{const s=vE(i,e.tc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function EE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof vp||t instanceof bi||t instanceof Pt||t instanceof gE)}function SE(t,e,n){if(!EE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=pp(n);throw r==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+r)}}function oP(t,e,n){if((e=Ht(e))instanceof yp)return e._internalPath;if(typeof e=="string")return _E(t,e);throw Vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const aP=new RegExp("[~\\*/\\[\\]]");function _E(t,e,n){if(e.search(aP)>=0)throw Vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yp(...e.split("."))._internalPath}catch{throw Vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new j(x.INVALID_ARGUMENT,a+t+l)}function lP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(IE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uP extends kE{data(){return super.data()}}function IE(t,e){return typeof e=="string"?_E(t,e):e instanceof yp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class CE extends kE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ha(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(IE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ha extends CE{data(e={}){return super.data(e)}}class cP{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Es(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ha(this._firestore,this._userDataWriter,r.key,r,new Es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ha(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Es(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ha(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Es(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:hP(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t){if(Ll(t)&&t.explicitOrderBy.length===0)throw new j(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function fP(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{convertValue(e,n="none"){switch($r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const r={};return Qi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new vp(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Iw(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(uo(e));default:return null}}convertTimestamp(e){const n=tr(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);ye(Hw(r));const i=new Pi(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||er(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){t=Mi(t,Pt);const e=Mi(t.firestore,Pu);return GR(gp(e),t._key).then(n=>EP(e,t,n))}class TE extends pP{constructor(e){super(),this.firestore=e}convertBytes(e){return new bi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function yP(t){t=Mi(t,Ru);const e=Mi(t.firestore,Pu),n=gp(e),r=new TE(e);return dP(t._query),QR(n,t._query).then(i=>new cP(e,r,t,i))}function vP(t,e,n){t=Mi(t,Pt);const r=Mi(t.firestore,Pu),i=mP(t.converter,e,n);return wP(r,[sP(iP(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,yi.none())])}function wP(t,e){return function(n,r){const i=new Sn;return n.asyncQueue.enqueueAndForget(async()=>DR(await KR(n),r,i)),i.promise}(gp(t),e)}function EP(t,e,n){const r=n.docs.get(e._key),i=new TE(t);return new CE(t,i,e._key,r,new Es(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Gi=n})(To),xi(new xr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Pu(i,new yA(n.getProvider("auth-internal")),new SA(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Gn(Ng,"3.4.8",t),Gn(Ng,"3.4.8","esm2017")})();const SP={apiKey:"AIzaSyDcqSVsmSJfz8EUzOH-M_QmUIDChScYT2M",authDomain:"crwn-clothing-db-7e40c.firebaseapp.com",projectId:"crwn-clothing-db-7e40c",storageBucket:"crwn-clothing-db-7e40c.appspot.com",messagingSenderId:"385192004752",appId:"1:385192004752:web:c1b1e437c0efddaf5d1c15"};tC(SP);const xE=new dn;xE.setCustomParameters({prompt:"select_account"});const Qo=ax(),AE=eP(),_P=()=>ST(Qo,xE),NE=async(t,e)=>{if(!t)return;const n=JR(AE,"users",t.uid);if(!(await gP(n)).exists()){const{displayName:i,email:s}=t,o=new Date;try{await vP(n,Kt({displayName:i,email:s,createdAt:o},e))}catch(a){console.log("Error creating the user",a)}}return n},kP=async(t,e)=>{if(!(!t||!e))return await GC(Qo,t,e)},IP=async(t,e)=>{if(!(!t||!e))return await QC(Qo,t,e)},CP=async()=>await XC(Qo),TP=t=>YC(Qo,t),xP=async()=>{const t=XR(AE,"categories"),e=fP(t);return(await yP(e)).docs.reduce((i,s)=>{const{title:o,items:a}=s.data();return i[o.toLowerCase()]=a,i},{})};var Du={exports:{}},Ou={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AP=k.exports,NP=Symbol.for("react.element"),RP=Symbol.for("react.fragment"),PP=Object.prototype.hasOwnProperty,DP=AP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OP={key:!0,ref:!0,__self:!0,__source:!0};function RE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)PP.call(e,r)&&!OP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:NP,type:t,key:s,ref:o,props:i,_owner:DP.current}}Ou.Fragment=RP;Ou.jsx=RE;Ou.jsxs=RE;Du.exports=Ou;const C=Du.exports.jsx,de=Du.exports.jsxs,PE=Du.exports.Fragment,DE=k.exports.createContext({currentUser:null,setCurrentUser:()=>null}),$P=({children:t})=>{const[e,n]=k.exports.useState(null),r={currentUser:e,setCurrentUser:n};return k.exports.useEffect(()=>TP(s=>{s&&NE(s),n(s)}),[]),C(DE.Provider,{value:r,children:t})},LP=(t,e)=>t.find(r=>r.id===e.id)?t.map(r=>r.id===e.id?lr(Kt({},r),{quantity:r.quantity+1}):r):[...t,lr(Kt({},e),{quantity:1})],MP=(t,e)=>t.find(r=>r.id===e.id).quantity===1?t.filter(r=>r.id!==e.id):t.map(r=>r.id===e.id?lr(Kt({},r),{quantity:r.quantity-1}):r),bP=(t,e)=>t.filter(n=>n.id!==e.id),Br=k.exports.createContext({isCartOpen:!1,setIsCartOpen:()=>{},cartItems:[],addItemToCart:()=>{},removeItemFromCart:()=>{},clearItemFromCart:()=>{},cartCount:0,cartTotal:0}),FP=({children:t})=>{const[e,n]=k.exports.useState(!1),[r,i]=k.exports.useState([]),[s,o]=k.exports.useState(0),[a,l]=k.exports.useState(0);k.exports.useEffect(()=>{const y=r.reduce((g,E)=>g+E.quantity,0);o(y)},[r]),k.exports.useEffect(()=>{const y=r.reduce((g,E)=>g+E.quantity*E.price,0);l(y)},[r]);const f={isCartOpen:e,setIsCartOpen:n,addItemToCart:y=>{i(LP(r,y))},removeItemFromCart:y=>{i(MP(r,y))},clearItemFromCart:y=>{i(bP(r,y))},cartItems:r,cartCount:s,cartTotal:a};return C(Br.Provider,{value:f,children:t})};var $u={exports:{}},fe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=typeof Symbol=="function"&&Symbol.for,Ep=Be?Symbol.for("react.element"):60103,Sp=Be?Symbol.for("react.portal"):60106,Lu=Be?Symbol.for("react.fragment"):60107,Mu=Be?Symbol.for("react.strict_mode"):60108,bu=Be?Symbol.for("react.profiler"):60114,Fu=Be?Symbol.for("react.provider"):60109,Uu=Be?Symbol.for("react.context"):60110,_p=Be?Symbol.for("react.async_mode"):60111,Vu=Be?Symbol.for("react.concurrent_mode"):60111,zu=Be?Symbol.for("react.forward_ref"):60112,ju=Be?Symbol.for("react.suspense"):60113,UP=Be?Symbol.for("react.suspense_list"):60120,Bu=Be?Symbol.for("react.memo"):60115,Hu=Be?Symbol.for("react.lazy"):60116,VP=Be?Symbol.for("react.block"):60121,zP=Be?Symbol.for("react.fundamental"):60117,jP=Be?Symbol.for("react.responder"):60118,BP=Be?Symbol.for("react.scope"):60119;function Mt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ep:switch(t=t.type,t){case _p:case Vu:case Lu:case bu:case Mu:case ju:return t;default:switch(t=t&&t.$$typeof,t){case Uu:case zu:case Hu:case Bu:case Fu:return t;default:return e}}case Sp:return e}}}function OE(t){return Mt(t)===Vu}fe.AsyncMode=_p;fe.ConcurrentMode=Vu;fe.ContextConsumer=Uu;fe.ContextProvider=Fu;fe.Element=Ep;fe.ForwardRef=zu;fe.Fragment=Lu;fe.Lazy=Hu;fe.Memo=Bu;fe.Portal=Sp;fe.Profiler=bu;fe.StrictMode=Mu;fe.Suspense=ju;fe.isAsyncMode=function(t){return OE(t)||Mt(t)===_p};fe.isConcurrentMode=OE;fe.isContextConsumer=function(t){return Mt(t)===Uu};fe.isContextProvider=function(t){return Mt(t)===Fu};fe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ep};fe.isForwardRef=function(t){return Mt(t)===zu};fe.isFragment=function(t){return Mt(t)===Lu};fe.isLazy=function(t){return Mt(t)===Hu};fe.isMemo=function(t){return Mt(t)===Bu};fe.isPortal=function(t){return Mt(t)===Sp};fe.isProfiler=function(t){return Mt(t)===bu};fe.isStrictMode=function(t){return Mt(t)===Mu};fe.isSuspense=function(t){return Mt(t)===ju};fe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Lu||t===Vu||t===bu||t===Mu||t===ju||t===UP||typeof t=="object"&&t!==null&&(t.$$typeof===Hu||t.$$typeof===Bu||t.$$typeof===Fu||t.$$typeof===Uu||t.$$typeof===zu||t.$$typeof===zP||t.$$typeof===jP||t.$$typeof===BP||t.$$typeof===VP)};fe.typeOf=Mt;$u.exports=fe;function HP(t){function e(O,L,M,W,v){for(var te=0,D=0,Te=0,ae=0,ce,J,qe=0,vt=0,ie,nt=ie=ce=0,le=0,We=0,Zi=0,Ke=0,Xo=M.length,es=Xo-1,Wt,Q="",Ne="",Wu="",Ku="",Nn;le<Xo;){if(J=M.charCodeAt(le),le===es&&D+ae+Te+te!==0&&(D!==0&&(J=D===47?10:47),ae=Te=te=0,Xo++,es++),D+ae+Te+te===0){if(le===es&&(0<We&&(Q=Q.replace(f,"")),0<Q.trim().length)){switch(J){case 32:case 9:case 59:case 13:case 10:break;default:Q+=M.charAt(le)}J=59}switch(J){case 123:for(Q=Q.trim(),ce=Q.charCodeAt(0),ie=1,Ke=++le;le<Xo;){switch(J=M.charCodeAt(le)){case 123:ie++;break;case 125:ie--;break;case 47:switch(J=M.charCodeAt(le+1)){case 42:case 47:e:{for(nt=le+1;nt<es;++nt)switch(M.charCodeAt(nt)){case 47:if(J===42&&M.charCodeAt(nt-1)===42&&le+2!==nt){le=nt+1;break e}break;case 10:if(J===47){le=nt+1;break e}}le=nt}}break;case 91:J++;case 40:J++;case 34:case 39:for(;le++<es&&M.charCodeAt(le)!==J;);}if(ie===0)break;le++}switch(ie=M.substring(Ke,le),ce===0&&(ce=(Q=Q.replace(d,"").trim()).charCodeAt(0)),ce){case 64:switch(0<We&&(Q=Q.replace(f,"")),J=Q.charCodeAt(1),J){case 100:case 109:case 115:case 45:We=L;break;default:We=un}if(ie=e(L,We,ie,J,v+1),Ke=ie.length,0<P&&(We=n(un,Q,Zi),Nn=a(3,ie,We,L,Ae,me,Ke,J,v,W),Q=We.join(""),Nn!==void 0&&(Ke=(ie=Nn.trim()).length)===0&&(J=0,ie="")),0<Ke)switch(J){case 115:Q=Q.replace(R,o);case 100:case 109:case 45:ie=Q+"{"+ie+"}";break;case 107:Q=Q.replace(h,"$1 $2"),ie=Q+"{"+ie+"}",ie=He===1||He===2&&s("@"+ie,3)?"@-webkit-"+ie+"@"+ie:"@"+ie;break;default:ie=Q+ie,W===112&&(ie=(Ne+=ie,""))}else ie="";break;default:ie=e(L,n(L,Q,Zi),ie,W,v+1)}Wu+=ie,ie=Zi=We=nt=ce=0,Q="",J=M.charCodeAt(++le);break;case 125:case 59:if(Q=(0<We?Q.replace(f,""):Q).trim(),1<(Ke=Q.length))switch(nt===0&&(ce=Q.charCodeAt(0),ce===45||96<ce&&123>ce)&&(Ke=(Q=Q.replace(" ",":")).length),0<P&&(Nn=a(1,Q,L,O,Ae,me,Ne.length,W,v,W))!==void 0&&(Ke=(Q=Nn.trim()).length)===0&&(Q="\0\0"),ce=Q.charCodeAt(0),J=Q.charCodeAt(1),ce){case 0:break;case 64:if(J===105||J===99){Ku+=Q+M.charAt(le);break}default:Q.charCodeAt(Ke-1)!==58&&(Ne+=i(Q,ce,J,Q.charCodeAt(2)))}Zi=We=nt=ce=0,Q="",J=M.charCodeAt(++le)}}switch(J){case 13:case 10:D===47?D=0:1+ce===0&&W!==107&&0<Q.length&&(We=1,Q+="\0"),0<P*q&&a(0,Q,L,O,Ae,me,Ne.length,W,v,W),me=1,Ae++;break;case 59:case 125:if(D+ae+Te+te===0){me++;break}default:switch(me++,Wt=M.charAt(le),J){case 9:case 32:if(ae+te+D===0)switch(qe){case 44:case 58:case 9:case 32:Wt="";break;default:J!==32&&(Wt=" ")}break;case 0:Wt="\\0";break;case 12:Wt="\\f";break;case 11:Wt="\\v";break;case 38:ae+D+te===0&&(We=Zi=1,Wt="\f"+Wt);break;case 108:if(ae+D+te+be===0&&0<nt)switch(le-nt){case 2:qe===112&&M.charCodeAt(le-3)===58&&(be=qe);case 8:vt===111&&(be=vt)}break;case 58:ae+D+te===0&&(nt=le);break;case 44:D+Te+ae+te===0&&(We=1,Wt+="\r");break;case 34:case 39:D===0&&(ae=ae===J?0:ae===0?J:ae);break;case 91:ae+D+Te===0&&te++;break;case 93:ae+D+Te===0&&te--;break;case 41:ae+D+te===0&&Te--;break;case 40:if(ae+D+te===0){if(ce===0)switch(2*qe+3*vt){case 533:break;default:ce=1}Te++}break;case 64:D+Te+ae+te+nt+ie===0&&(ie=1);break;case 42:case 47:if(!(0<ae+te+Te))switch(D){case 0:switch(2*J+3*M.charCodeAt(le+1)){case 235:D=47;break;case 220:Ke=le,D=42}break;case 42:J===47&&qe===42&&Ke+2!==le&&(M.charCodeAt(Ke+2)===33&&(Ne+=M.substring(Ke,le+1)),Wt="",D=0)}}D===0&&(Q+=Wt)}vt=qe,qe=J,le++}if(Ke=Ne.length,0<Ke){if(We=L,0<P&&(Nn=a(2,Ne,We,O,Ae,me,Ke,W,v,W),Nn!==void 0&&(Ne=Nn).length===0))return Ku+Ne+Wu;if(Ne=We.join(",")+"{"+Ne+"}",He*be!==0){switch(He!==2||s(Ne,2)||(be=0),be){case 111:Ne=Ne.replace(w,":-moz-$1")+Ne;break;case 112:Ne=Ne.replace(m,"::-webkit-input-$1")+Ne.replace(m,"::-moz-$1")+Ne.replace(m,":-ms-input-$1")+Ne}be=0}}return Ku+Ne+Wu}function n(O,L,M){var W=L.trim().split(A);L=W;var v=W.length,te=O.length;switch(te){case 0:case 1:var D=0;for(O=te===0?"":O[0]+" ";D<v;++D)L[D]=r(O,L[D],M).trim();break;default:var Te=D=0;for(L=[];D<v;++D)for(var ae=0;ae<te;++ae)L[Te++]=r(O[ae]+" ",W[D],M).trim()}return L}function r(O,L,M){var W=L.charCodeAt(0);switch(33>W&&(W=(L=L.trim()).charCodeAt(0)),W){case 38:return L.replace(p,"$1"+O.trim());case 58:return O.trim()+L.replace(p,"$1"+O.trim());default:if(0<1*M&&0<L.indexOf("\f"))return L.replace(p,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+L}function i(O,L,M,W){var v=O+";",te=2*L+3*M+4*W;if(te===944){O=v.indexOf(":",9)+1;var D=v.substring(O,v.length-1).trim();return D=v.substring(0,O).trim()+D+";",He===1||He===2&&s(D,1)?"-webkit-"+D+D:D}if(He===0||He===2&&!s(v,1))return v;switch(te){case 1015:return v.charCodeAt(10)===97?"-webkit-"+v+v:v;case 951:return v.charCodeAt(3)===116?"-webkit-"+v+v:v;case 963:return v.charCodeAt(5)===110?"-webkit-"+v+v:v;case 1009:if(v.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+v+v;case 978:return"-webkit-"+v+"-moz-"+v+v;case 1019:case 983:return"-webkit-"+v+"-moz-"+v+"-ms-"+v+v;case 883:if(v.charCodeAt(8)===45)return"-webkit-"+v+v;if(0<v.indexOf("image-set(",11))return v.replace(oe,"$1-webkit-$2")+v;break;case 932:if(v.charCodeAt(4)===45)switch(v.charCodeAt(5)){case 103:return"-webkit-box-"+v.replace("-grow","")+"-webkit-"+v+"-ms-"+v.replace("grow","positive")+v;case 115:return"-webkit-"+v+"-ms-"+v.replace("shrink","negative")+v;case 98:return"-webkit-"+v+"-ms-"+v.replace("basis","preferred-size")+v}return"-webkit-"+v+"-ms-"+v+v;case 964:return"-webkit-"+v+"-ms-flex-"+v+v;case 1023:if(v.charCodeAt(8)!==99)break;return D=v.substring(v.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+v+"-ms-flex-pack"+D+v;case 1005:return g.test(v)?v.replace(y,":-webkit-")+v.replace(y,":-moz-")+v:v;case 1e3:switch(D=v.substring(13).trim(),L=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt(L)){case 226:D=v.replace(_,"tb");break;case 232:D=v.replace(_,"tb-rl");break;case 220:D=v.replace(_,"lr");break;default:return v}return"-webkit-"+v+"-ms-"+D+v;case 1017:if(v.indexOf("sticky",9)===-1)break;case 975:switch(L=(v=O).length-10,D=(v.charCodeAt(L)===33?v.substring(0,L):v).substring(O.indexOf(":",7)+1).trim(),te=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:v=v.replace(D,"-webkit-"+D)+";"+v;break;case 207:case 102:v=v.replace(D,"-webkit-"+(102<te?"inline-":"")+"box")+";"+v.replace(D,"-webkit-"+D)+";"+v.replace(D,"-ms-"+D+"box")+";"+v}return v+";";case 938:if(v.charCodeAt(5)===45)switch(v.charCodeAt(6)){case 105:return D=v.replace("-items",""),"-webkit-"+v+"-webkit-box-"+D+"-ms-flex-"+D+v;case 115:return"-webkit-"+v+"-ms-flex-item-"+v.replace(I,"")+v;default:return"-webkit-"+v+"-ms-flex-line-pack"+v.replace("align-content","").replace(I,"")+v}break;case 973:case 989:if(v.charCodeAt(3)!==45||v.charCodeAt(4)===122)break;case 931:case 953:if(F.test(O)===!0)return(D=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?i(O.replace("stretch","fill-available"),L,M,W).replace(":fill-available",":stretch"):v.replace(D,"-webkit-"+D)+v.replace(D,"-moz-"+D.replace("fill-",""))+v;break;case 962:if(v="-webkit-"+v+(v.charCodeAt(5)===102?"-ms-"+v:"")+v,M+W===211&&v.charCodeAt(13)===105&&0<v.indexOf("transform",10))return v.substring(0,v.indexOf(";",27)+1).replace(E,"$1-webkit-$2")+v}return v}function s(O,L){var M=O.indexOf(L===1?":":"{"),W=O.substring(0,L!==3?M:10);return M=O.substring(M+1,O.length-1),B(L!==2?W:W.replace(z,"$1"),M,L)}function o(O,L){var M=i(L,L.charCodeAt(0),L.charCodeAt(1),L.charCodeAt(2));return M!==L+";"?M.replace(S," or ($1)").substring(4):"("+L+")"}function a(O,L,M,W,v,te,D,Te,ae,ce){for(var J=0,qe=L,vt;J<P;++J)switch(vt=ct[J].call(c,O,qe,M,W,v,te,D,Te,ae,ce)){case void 0:case!1:case!0:case null:break;default:qe=vt}if(qe!==L)return qe}function l(O){switch(O){case void 0:case null:P=ct.length=0;break;default:if(typeof O=="function")ct[P++]=O;else if(typeof O=="object")for(var L=0,M=O.length;L<M;++L)l(O[L]);else q=!!O|0}return l}function u(O){return O=O.prefix,O!==void 0&&(B=null,O?typeof O!="function"?He=1:(He=2,B=O):He=0),u}function c(O,L){var M=O;if(33>M.charCodeAt(0)&&(M=M.trim()),pe=M,M=[pe],0<P){var W=a(-1,L,M,M,Ae,me,0,0,0,0);W!==void 0&&typeof W=="string"&&(L=W)}var v=e(un,M,L,0,0);return 0<P&&(W=a(-2,v,M,M,Ae,me,v.length,0,0,0),W!==void 0&&(v=W)),pe="",be=0,me=Ae=1,v}var d=/^\0+/g,f=/[\0\r\f]/g,y=/: */g,g=/zoo|gra/,E=/([,: ])(transform)/g,A=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,w=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,I=/-self|flex-/g,z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,oe=/([^-])(image-set\()/,me=1,Ae=1,be=0,He=1,un=[],ct=[],P=0,B=null,q=0,pe="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var qP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function WP(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var KP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,oy=WP(function(t){return KP.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),kp=$u.exports,GP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},QP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},YP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$E={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ip={};Ip[kp.ForwardRef]=YP;Ip[kp.Memo]=$E;function ay(t){return kp.isMemo(t)?$E:Ip[t.$$typeof]||GP}var XP=Object.defineProperty,JP=Object.getOwnPropertyNames,ly=Object.getOwnPropertySymbols,ZP=Object.getOwnPropertyDescriptor,e2=Object.getPrototypeOf,uy=Object.prototype;function LE(t,e,n){if(typeof e!="string"){if(uy){var r=e2(e);r&&r!==uy&&LE(t,r,n)}var i=JP(e);ly&&(i=i.concat(ly(e)));for(var s=ay(t),o=ay(e),a=0;a<i.length;++a){var l=i[a];if(!QP[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=ZP(e,l);try{XP(t,l,u)}catch{}}}}return t}var t2=LE;function wn(){return(wn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var cy=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},ld=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!$u.exports.typeOf(t)},zl=Object.freeze([]),Yn=Object.freeze({});function mo(t){return typeof t=="function"}function hy(t){return t.displayName||t.name||"Component"}function Cp(t){return t&&typeof t.styledComponentId=="string"}var Fi=typeof process!="undefined"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Tp=typeof window!="undefined"&&"HTMLElement"in window,n2=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function Yo(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var r2=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Yo(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),qa=new Map,jl=new Map,$s=1,Ia=function(t){if(qa.has(t))return qa.get(t);for(;jl.has($s);)$s++;var e=$s++;return qa.set(t,e),jl.set(e,t),e},i2=function(t){return jl.get(t)},s2=function(t,e){e>=$s&&($s=e+1),qa.set(t,e),jl.set(e,t)},o2="style["+Fi+'][data-styled-version="5.3.5"]',a2=new RegExp("^"+Fi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),l2=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},u2=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(a2);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(s2(u,l),l2(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},c2=function(){return typeof window!="undefined"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},ME=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Fi))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Fi,"active"),r.setAttribute("data-styled-version","5.3.5");var o=c2();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},h2=function(){function t(n){var r=this.element=ME(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Yo(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),d2=function(){function t(n){var r=this.element=ME(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),f2=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),dy=Tp,p2={isServer:!Tp,useCSSOMInjection:!n2},bE=function(){function t(n,r,i){n===void 0&&(n=Yn),r===void 0&&(r={}),this.options=wn({},p2,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Tp&&dy&&(dy=!1,function(s){for(var o=document.querySelectorAll(o2),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Fi)!=="active"&&(u2(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Ia(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(wn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new f2(o):s?new h2(o):new d2(o),new r2(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Ia(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ia(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Ia(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=i2(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Fi+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),s+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},t}(),m2=/(a)(d)/gi,fy=function(t){return String.fromCharCode(t+(t>25?39:97))};function ud(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=fy(e%52)+n;return(fy(e%52)+n).replace(m2,"$1-$2")}var si=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},FE=function(t){return si(5381,t)};function g2(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(mo(n)&&!Cp(n))return!1}return!0}var y2=FE("5.3.5"),v2=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&g2(e),this.componentId=n,this.baseHash=si(y2,n),this.baseStyle=r,bE.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Ui(this.rules,e,n,r).join(""),a=ud(si(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=si(this.baseHash,r.hash),d="",f=0;f<u;f++){var y=this.rules[f];if(typeof y=="string")d+=y;else if(y){var g=Ui(y,e,n,r),E=Array.isArray(g)?g.join(""):g;c=si(c,E+f),d+=E}}if(d){var A=ud(c>>>0);if(!n.hasNameForId(i,A)){var p=r(d,"."+A,void 0,i);n.insertRules(i,A,p)}s.push(A)}}return s.join(" ")},t}(),w2=/^\s*\/\/.*$/gm,E2=[":","[",".","#"];function S2(t){var e,n,r,i,s=t===void 0?Yn:t,o=s.options,a=o===void 0?Yn:o,l=s.plugins,u=l===void 0?zl:l,c=new HP(a),d=[],f=function(E){function A(p){if(p)try{E(p+"}")}catch{}}return function(p,h,m,w,_,R,S,I,z,F){switch(p){case 1:if(z===0&&h.charCodeAt(0)===64)return E(h+";"),"";break;case 2:if(I===0)return h+"/*|*/";break;case 3:switch(I){case 102:case 112:return E(m[0]+h),"";default:return h+(F===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(A)}}}(function(E){d.push(E)}),y=function(E,A,p){return A===0&&E2.indexOf(p[n.length])!==-1||p.match(i)?E:"."+e};function g(E,A,p,h){h===void 0&&(h="&");var m=E.replace(w2,""),w=A&&p?p+" "+A+" { "+m+" }":m;return e=h,n=A,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!A?"":A,w)}return c.use([].concat(u,[function(E,A,p){E===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,y))},f,function(E){if(E===-2){var A=d;return d=[],A}}])),g.hash=u.length?u.reduce(function(E,A){return A.name||Yo(15),si(E,A.name)},5381).toString():"",g}var UE=vo.createContext();UE.Consumer;var VE=vo.createContext(),_2=(VE.Consumer,new bE),cd=S2();function k2(){return k.exports.useContext(UE)||_2}function I2(){return k.exports.useContext(VE)||cd}var C2=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=cd);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Yo(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=cd),this.name+e.hash},t}(),T2=/([A-Z])/,x2=/([A-Z])/g,A2=/^ms-/,N2=function(t){return"-"+t.toLowerCase()};function py(t){return T2.test(t)?t.replace(x2,N2).replace(A2,"-ms-"):t}var my=function(t){return t==null||t===!1||t===""};function Ui(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Ui(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(my(t))return"";if(Cp(t))return"."+t.styledComponentId;if(mo(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Ui(l,e,n,r)}var u;return t instanceof C2?n?(t.inject(n,r),t.getName(r)):t:ld(t)?function c(d,f){var y,g,E=[];for(var A in d)d.hasOwnProperty(A)&&!my(d[A])&&(Array.isArray(d[A])&&d[A].isCss||mo(d[A])?E.push(py(A)+":",d[A],";"):ld(d[A])?E.push.apply(E,c(d[A],A)):E.push(py(A)+": "+(y=A,(g=d[A])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||y in qP?String(g).trim():g+"px")+";"));return f?[f+" {"].concat(E,["}"]):E}(t):t.toString()}var gy=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function zE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return mo(t)||ld(t)?gy(Ui(cy(zl,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:gy(Ui(cy(t,n)))}var R2=function(t,e,n){return n===void 0&&(n=Yn),t.theme!==n.theme&&t.theme||e||n.theme},P2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D2=/(^-|-$)/g;function Fc(t){return t.replace(P2,"-").replace(D2,"")}var O2=function(t){return ud(FE(t)>>>0)};function Ca(t){return typeof t=="string"&&!0}var hd=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},$2=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function L2(t,e,n){var r=t[n];hd(e)&&hd(r)?jE(r,e):t[n]=e}function jE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(hd(o))for(var a in o)$2(a)&&L2(t,o[a],a)}return t}var BE=vo.createContext();BE.Consumer;var Uc={};function HE(t,e,n){var r=Cp(t),i=!Ca(t),s=e.attrs,o=s===void 0?zl:s,a=e.componentId,l=a===void 0?function(h,m){var w=typeof h!="string"?"sc":Fc(h);Uc[w]=(Uc[w]||0)+1;var _=w+"-"+O2("5.3.5"+w+Uc[w]);return m?m+"-"+_:_}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(h){return Ca(h)?"styled."+h:"Styled("+hy(h)+")"}(t):u,d=e.displayName&&e.componentId?Fc(e.displayName)+"-"+e.componentId:e.componentId||l,f=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,y=e.shouldForwardProp;r&&t.shouldForwardProp&&(y=e.shouldForwardProp?function(h,m,w){return t.shouldForwardProp(h,m,w)&&e.shouldForwardProp(h,m,w)}:t.shouldForwardProp);var g,E=new v2(n,d,r?t.componentStyle:void 0),A=E.isStatic&&o.length===0,p=function(h,m){return function(w,_,R,S){var I=w.attrs,z=w.componentStyle,F=w.defaultProps,oe=w.foldedComponentIds,me=w.shouldForwardProp,Ae=w.styledComponentId,be=w.target,He=function(W,v,te){W===void 0&&(W=Yn);var D=wn({},v,{theme:W}),Te={};return te.forEach(function(ae){var ce,J,qe,vt=ae;for(ce in mo(vt)&&(vt=vt(D)),vt)D[ce]=Te[ce]=ce==="className"?(J=Te[ce],qe=vt[ce],J&&qe?J+" "+qe:J||qe):vt[ce]}),[D,Te]}(R2(_,k.exports.useContext(BE),F)||Yn,_,I),un=He[0],ct=He[1],P=function(W,v,te,D){var Te=k2(),ae=I2(),ce=v?W.generateAndInjectStyles(Yn,Te,ae):W.generateAndInjectStyles(te,Te,ae);return ce}(z,S,un),B=R,q=ct.$as||_.$as||ct.as||_.as||be,pe=Ca(q),O=ct!==_?wn({},_,{},ct):_,L={};for(var M in O)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?L.as=O[M]:(me?me(M,oy,q):!pe||oy(M))&&(L[M]=O[M]));return _.style&&ct.style!==_.style&&(L.style=wn({},_.style,{},ct.style)),L.className=Array.prototype.concat(oe,Ae,P!==Ae?P:null,_.className,ct.className).filter(Boolean).join(" "),L.ref=B,k.exports.createElement(q,L)}(g,h,m,A)};return p.displayName=c,(g=vo.forwardRef(p)).attrs=f,g.componentStyle=E,g.displayName=c,g.shouldForwardProp=y,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):zl,g.styledComponentId=d,g.target=r?t.target:t,g.withComponent=function(h){var m=e.componentId,w=function(R,S){if(R==null)return{};var I,z,F={},oe=Object.keys(R);for(z=0;z<oe.length;z++)I=oe[z],S.indexOf(I)>=0||(F[I]=R[I]);return F}(e,["componentId"]),_=m&&m+"-"+(Ca(h)?h:Fc(hy(h)));return HE(h,wn({},w,{attrs:f,componentId:_}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?jE({},t.defaultProps,h):h}}),g.toString=function(){return"."+g.styledComponentId},i&&t2(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var dd=function(t){return function e(n,r,i){if(i===void 0&&(i=Yn),!$u.exports.isValidElementType(r))return Yo(1,String(r));var s=function(){return n(r,i,zE.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,wn({},i,{},o))},s.attrs=function(o){return e(n,r,wn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(HE,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){dd[t]=dd(t)});var H=dd;const M2=t=>k.exports.createElement("svg",Kt({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve"},t),k.exports.createElement("g",null,k.exports.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),k.exports.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),k.exports.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),k.exports.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),k.exports.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),k.exports.createElement("g",null),k.exports.createElement("g",null),k.exports.createElement("g",null),k.exports.createElement("g",null),k.exports.createElement("g",null),k.exports.createElement("g",null),k.exports.createElement("g",null),k.exports.createElement("g",null),k.exports.createElement("g",null),k.exports.createElement("g",null),k.exports.createElement("g",null),k.exports.createElement("g",null),k.exports.createElement("g",null),k.exports.createElement("g",null),k.exports.createElement("g",null)),b2=H(M2)`
    width: 32px;
    height: 32px;
`,F2=H.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
`,U2=H.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`,V2=()=>{const t=()=>n(r=>!r),{cartCount:e,setIsCartOpen:n}=k.exports.useContext(Br);return de(F2,{onClick:t,children:[C(b2,{}),C(U2,{children:e})]})},qu=H.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 13px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: 'Open Sans';
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`,qE=H(qu)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`,WE=H(qu)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`,oi={base:"base",google:"google-sign-in",inverted:"inverted"},z2=(t=oi.base)=>({[oi.base]:qu,[oi.google]:qE,[oi.inverted]:WE})[t],go=r=>{var i=r,{children:t,buttonType:e}=i,n=Gu(i,["children","buttonType"]);const s=z2(e);return C(s,lr(Kt({},n),{children:t}))},j2=H.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;

    img {
        width: 30%;
    }
`,B2=H.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    span {
        font-size: 16px;
    }
`,H2=({cartItem:t})=>{const{name:e,imageUrl:n,price:r,quantity:i}=t;return de(j2,{children:[C("img",{src:n,alt:e}),de(B2,{children:[C("span",{children:e}),de("span",{children:[i," x $",r]})]})]})},q2=H.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${qu},
    ${qE},
    ${WE} {
        margin-top: auto;
    }
`,W2=H.span`
    font-size: 18px;
    margin: 50% auto;
`,K2=H.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`,G2=()=>{const{cartItems:t}=k.exports.useContext(Br),e=cf(),n=()=>{e("/checkout")};return de(q2,{children:[C(K2,{children:t.length?t.map(r=>C(H2,{cartItem:r},r.id)):C(W2,{children:"Your Cart is Empty"})}),C(go,{onClick:n,children:"Go To Checkout"})]})},Q2=t=>k.exports.createElement("svg",Kt({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t),k.exports.createElement("title",null,"Group"),k.exports.createElement("desc",null,"Created with Sketch."),k.exports.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},k.exports.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},k.exports.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},k.exports.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),k.exports.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),k.exports.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),k.exports.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),k.exports.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))),Y2=H.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`,X2=H(hf)`
    padding: 16px;
    position: relative;
    right: 10px;
`,J2=H.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`,Vc=H(hf)`
    padding: 10px 15px;
    cursor: pointer;
    text-transform: uppercase;
`,Z2=()=>{const{currentUser:t}=k.exports.useContext(DE),{isCartOpen:e}=k.exports.useContext(Br);return de(PE,{children:[de(Y2,{children:[C(X2,{to:"/",children:C(Q2,{})}),de(J2,{children:[C(Vc,{to:"/shop",children:"Shop"}),t?C(Vc,{as:"span",onClick:CP,children:"SIGN OUT"}):C(Vc,{to:"/auth",children:"SIGN IN"}),C(V2,{})]}),e&&C(G2,{})]}),C(P0,{})]})},KE=H.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({imageUrl:t})=>`url(${t})`};
`,GE=H.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    h2 {
        font-weight: bold;
        margin: 0 6px 0;
        font-size: 22px;
        color: #4a4a4a;
        text-transform: uppercase;
    }

    p {
        font-weight: lighter;
        font-size: 16px;
    }
`,eD=H.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        & ${KE} {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & ${GE} {
        opacity: 0.9;
        }
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }
`,tD=({category:{imageUrl:t,title:e,route:n}})=>{const r=cf();return de(eD,{onClick:()=>r(n),children:[C(KE,{imageUrl:t}),de(GE,{children:[C("h2",{children:e}),C("p",{children:"Shop Now"})]})]})},nD=H.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`,rD=[{id:1,title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",route:"shop/hats"},{id:2,title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",route:"shop/jackets"},{id:3,title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",route:"shop/sneakers"},{id:4,title:"women",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",route:"shop/women"},{id:5,title:"men",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",route:"shop/men"}],iD=()=>C(nD,{children:rD.map(t=>C(tD,{category:t},t.id))}),sD=()=>de("div",{children:[C(P0,{}),C(iD,{})]}),xp=k.exports.createContext({categoriesMap:{}}),oD=({children:t})=>{const[e,n]=k.exports.useState({});k.exports.useEffect(()=>{(async()=>{const s=await xP();n(s)})()},[]);const r={categoriesMap:e};return C(xp.Provider,{value:r,children:t})},aD=H.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    img {
        width: 100%;
        height: 95%;
        object-fit: cover;
        margin-bottom: 5px;
    }

    button {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;
    }

    &:hover {
        img {
            opacity: 0.8;
        }

        button {
        opacity: 0.85;
        display: flex;
        }
    }
`,lD=H.footer`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`,uD=H.span`
    width: 90%;
    margin-bottom: 15px;
`,cD=H.span`
    width: 10%;
`,QE=({product:t})=>{const{addItemToCart:e}=k.exports.useContext(Br),{name:n,price:r,imageUrl:i}=t,s=()=>e(t);return de(aD,{children:[C("img",{src:i,alt:n}),de(lD,{children:[C(uD,{children:n}),C(cD,{children:r})]}),C(go,{buttonType:oi.inverted,onClick:s,children:"Add To Cart"})]})},hD=H.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`,dD=H(hf)`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
`,fD=H.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`,pD=({title:t,products:e})=>de(hD,{children:[C("h2",{children:C(dD,{to:t,children:t.toUpperCase()})}),C(fD,{children:e.filter((n,r)=>r<4).map(n=>C(QE,{product:n},n.id))})]}),mD=()=>{const{categoriesMap:t}=k.exports.useContext(xp);return C(k.exports.Fragment,{children:Object.keys(t).map(e=>{const n=t[e];return C(pD,{title:e,products:n},e)})})},gD=H.h2`
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
`,yD=H.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    margin-top: 52px;
`,vD=()=>{const{categoriesMap:t}=k.exports.useContext(xp),{category:e}=qk(),[n,r]=k.exports.useState(t[e]);return k.exports.useEffect(()=>{r(t[e])},[t,e]),de(PE,{children:[C(gD,{children:e.toUpperCase()}),C(yD,{children:n&&n.map(i=>C(QE,{product:i},i.id))})]})};const wD=()=>de(D0,{children:[C(Ln,{index:!0,element:C(mD,{})}),C(Ln,{path:":category",element:C(vD,{})})]}),fd="grey",ED="black",YE=zE`
    top: -14px;
    font-size: 12px;
    color: ${ED};
`,XE=H.label`
    color: ${fd};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    ${({shrink:t})=>t&&YE}
`,SD=H.input`
    background: none;
    background-color: white;
    color: ${fd};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${fd};
    margin: 25px 0;

    &:focus {
        outline: none;
    }

    &:focus ~ ${XE} {
        ${YE}
    }
`,_D=H.div`
    position: relative;
    margin: 45px 0;

    input[type='password'] {
        letter-spacing: .3em;
    }
`,ai=n=>{var r=n,{label:t}=r,e=Gu(r,["label"]);return de(_D,{children:[C(SD,Kt({},e)),t&&C(XE,{shrink:e.value.length,children:t})]})},kD=H.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }
`,ID=H.div`
    display: flex;
    justify-content: space-between;
`,yy={email:"",password:""},CD=()=>{const[t,e]=k.exports.useState(yy),{email:n,password:r}=t,i=l=>{const{name:u,value:c}=l.target;e(lr(Kt({},t),{[u]:c}))},s=()=>{e(yy)},o=async()=>{await _P()};return de(kD,{children:[C("h2",{children:"Already have an account?"}),C("span",{children:"Sign In with your Email and Password"}),de("form",{onSubmit:async l=>{l.preventDefault();try{const{user:u}=await IP(n,r);s()}catch(u){switch(u.code){case"auth/wrong-password":alert("Incorrect Password!");break;case"auth/user-not-found":alert("User not exists with this email");break;default:console.log(u)}}},children:[C(ai,{type:"email",name:"email",value:n,autoComplete:"off",onChange:i,required:!0,label:"Email"}),C(ai,{type:"password",name:"password",value:r,onChange:i,required:!0,label:"Password"}),de(ID,{children:[C(go,{type:"submit",children:"Sign In"}),C(go,{type:"button",buttonType:oi.google,onClick:o,children:"Google Sign In"})]})]})]})},TD=H.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    h2 {
        margin: 10px 0;
    }
`,vy={displayName:"",email:"",password:"",confirmPassword:""},xD=()=>{const[t,e]=k.exports.useState(vy),{displayName:n,email:r,password:i,confirmPassword:s}=t,o=u=>{const{name:c,value:d}=u.target;e(lr(Kt({},t),{[c]:d}))},a=()=>{e(vy)};return de(TD,{children:[C("h2",{children:"Don't have an account?"}),C("span",{children:"Sign Up with your Email and Password"}),de("form",{onSubmit:async u=>{if(u.preventDefault(),i!==s){console.log("Password Different");return}try{const{user:c}=await kP(r,i);await NE(c,{displayName:n}),a()}catch(c){switch(c.code){case"auth/weak-password":alert("Password should be at least 6 characters");default:console.log(c)}}},children:[C(ai,{type:"text",name:"displayName",value:n,autoComplete:"off",onChange:o,required:!0,label:"Display Name"}),C(ai,{type:"email",name:"email",value:r,autoComplete:"off",onChange:o,required:!0,label:"Email"}),C(ai,{type:"password",name:"password",value:i,onChange:o,required:!0,label:"Password"}),C(ai,{type:"password",name:"confirmPassword",value:s,onChange:o,required:!0,label:"Confirm Password"}),C(go,{type:"submit",children:"Sign Up"})]})]})},AD=H.div`
    display: flex;
    width: 900px;
    justify-content: space-between;
    margin: 30px auto;
`,ND=()=>de(AD,{children:[C(CD,{}),C(xD,{})]}),RD=H.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`,PD=H.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`,pd=H.span`
    width: 23%;
`,DD=H(pd)`
    display: flex;
`,wy=H.div`
    cursor: pointer;
`,OD=H.span`
    margin: 0 10px;
`,$D=H.div`
    padding-left: 12px;
    cursor: pointer;
`,LD=({cartItem:t})=>{const{name:e,imageUrl:n,price:r,quantity:i}=t,{clearItemFromCart:s,addItemToCart:o,removeItemFromCart:a}=k.exports.useContext(Br);return de(RD,{children:[C(PD,{children:C("img",{src:n,alt:e})}),C(pd,{children:e}),de(DD,{children:[C(wy,{onClick:()=>a(t),children:"\u276E"}),C(OD,{children:i}),C(wy,{onClick:()=>o(t),children:"\u276F"})]}),C(pd,{children:r}),C($D,{onClick:()=>s(t),children:"\u2715"})]})},MD=H.div`
    width: 65%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`,bD=H.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`,hs=H.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }
`,FD=H.span`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`,UD=()=>{const{cartItems:t,cartTotal:e}=k.exports.useContext(Br);return de(MD,{children:[de(bD,{children:[C(hs,{children:C("span",{children:"Product"})}),C(hs,{children:C("span",{children:"Description"})}),C(hs,{children:C("span",{children:"Quantity"})}),C(hs,{children:C("span",{children:"Price"})}),C(hs,{children:C("span",{children:"Remove"})})]}),t.map(n=>C(LD,{cartItem:n},n.id)),de(FD,{children:["Total : $",e]})]})},VD=()=>C(D0,{children:de(Ln,{path:"/",element:C(Z2,{}),children:[C(Ln,{index:!0,element:C(sD,{})}),C(Ln,{path:"shop/*",element:C(wD,{})}),C(Ln,{path:"auth",element:C(ND,{})}),C(Ln,{path:"checkout",element:C(UD,{})})]})});C0(document.getElementById("root")).render(C(vo.StrictMode,{children:C(Xk,{children:C($P,{children:C(oD,{children:C(FP,{children:C(VD,{})})})})})}));
