/* esm.sh - esbuild bundle(react@18.2.0) deno production */
var U=Object.create;var C=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var M=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty;var k=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var B=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of A(t))!z.call(e,u)&&u!==r&&C(e,u,{get:()=>t[u],enumerable:!(o=q(t,u))||o.enumerable});return e};var H=(e,t,r)=>(r=e!=null?U(M(e)):{},B(t||!e||!e.__esModule?C(r,"default",{value:e,enumerable:!0}):r,e));var D=k(n=>{"use strict";var y=Symbol.for("react.element"),W=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),Q=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ee=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),w=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,j={};function p(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||x}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I(){}I.prototype=p.prototype;function v(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||x}var S=v.prototype=new I;S.constructor=v;O(S,p.prototype);S.isPureReactComponent=!0;var b=Array.isArray,g=Object.prototype.hasOwnProperty,E={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,r){var o,u={},c=null,f=null;if(t!=null)for(o in t.ref!==void 0&&(f=t.ref),t.key!==void 0&&(c=""+t.key),t)g.call(t,o)&&!P.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(i===1)u.children=r;else if(1<i){for(var s=Array(i),a=0;a<i;a++)s[a]=arguments[a+2];u.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)u[o]===void 0&&(u[o]=i[o]);return{$$typeof:y,type:e,key:c,ref:f,props:u,_owner:E.current}}function ne(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function R(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function ue(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var $=/\/+/g;function h(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ue(""+e.key):t.toString(36)}function _(e,t,r,o,u){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var f=!1;if(e===null)f=!0;else switch(c){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case y:case W:f=!0}}if(f)return f=e,u=u(f),e=o===""?"."+h(f,0):o,b(u)?(r="",e!=null&&(r=e.replace($,"$&/")+"/"),_(u,t,r,"",function(a){return a})):u!=null&&(R(u)&&(u=ne(u,r+(!u.key||f&&f.key===u.key?"":(""+u.key).replace($,"$&/")+"/")+e)),t.push(u)),1;if(f=0,o=o===""?".":o+":",b(e))for(var i=0;i<e.length;i++){c=e[i];var s=o+h(c,i);f+=_(c,t,r,s,u)}else if(s=re(e),typeof s=="function")for(e=s.call(e),i=0;!(c=e.next()).done;)c=c.value,s=o+h(c,i++),f+=_(c,t,r,s,u);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return f}function d(e,t,r){if(e==null)return e;var o=[],u=0;return _(e,o,"","",function(c){return t.call(r,c,u++)}),o}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},m={transition:null},se={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:m,ReactCurrentOwner:E};n.Children={map:d,forEach:function(e,t,r){d(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};n.Component=p;n.Fragment=Y;n.Profiler=J;n.PureComponent=v;n.StrictMode=G;n.Suspense=Z;n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se;n.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=O({},e.props),u=e.key,c=e.ref,f=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,f=E.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)g.call(t,s)&&!P.hasOwnProperty(s)&&(o[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){i=Array(s);for(var a=0;a<s;a++)i[a]=arguments[a+2];o.children=i}return{$$typeof:y,type:e.type,key:u,ref:c,props:o,_owner:f}};n.createContext=function(e){return e={$$typeof:Q,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:K,_context:e},e.Consumer=e};n.createElement=T;n.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t};n.createRef=function(){return{current:null}};n.forwardRef=function(e){return{$$typeof:X,render:e}};n.isValidElement=R;n.lazy=function(e){return{$$typeof:te,_payload:{_status:-1,_result:e},_init:oe}};n.memo=function(e,t){return{$$typeof:ee,type:e,compare:t===void 0?null:t}};n.startTransition=function(e){var t=m.transition;m.transition={};try{e()}finally{m.transition=t}};n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};n.useCallback=function(e,t){return l.current.useCallback(e,t)};n.useContext=function(e){return l.current.useContext(e)};n.useDebugValue=function(){};n.useDeferredValue=function(e){return l.current.useDeferredValue(e)};n.useEffect=function(e,t){return l.current.useEffect(e,t)};n.useId=function(){return l.current.useId()};n.useImperativeHandle=function(e,t,r){return l.current.useImperativeHandle(e,t,r)};n.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};n.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};n.useMemo=function(e,t){return l.current.useMemo(e,t)};n.useReducer=function(e,t,r){return l.current.useReducer(e,t,r)};n.useRef=function(e){return l.current.useRef(e)};n.useState=function(e){return l.current.useState(e)};n.useSyncExternalStore=function(e,t,r){return l.current.useSyncExternalStore(e,t,r)};n.useTransition=function(){return l.current.useTransition()};n.version="18.2.0"});var L=k((le,V)=>{"use strict";V.exports=D()});var F=H(L()),{Children:ae,Component:pe,Fragment:ye,Profiler:de,PureComponent:_e,StrictMode:me,Suspense:he,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ve,cloneElement:Se,createContext:Ee,createElement:Re,createFactory:Ce,createRef:ke,forwardRef:we,isValidElement:be,lazy:$e,memo:xe,startTransition:Oe,unstable_act:je,useCallback:Ie,useContext:ge,useDebugValue:Pe,useDeferredValue:Te,useEffect:De,useId:Ve,useImperativeHandle:Le,useInsertionEffect:Ne,useLayoutEffect:Fe,useMemo:Ue,useReducer:qe,useRef:Ae,useState:Me,useSyncExternalStore:ze,useTransition:Be,version:He}=F,{default:N,...ce}=F,We=N!==void 0?N:ce;export{ae as Children,pe as Component,ye as Fragment,de as Profiler,_e as PureComponent,me as StrictMode,he as Suspense,ve as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se as cloneElement,Ee as createContext,Re as createElement,Ce as createFactory,ke as createRef,We as default,we as forwardRef,be as isValidElement,$e as lazy,xe as memo,Oe as startTransition,je as unstable_act,Ie as useCallback,ge as useContext,Pe as useDebugValue,Te as useDeferredValue,De as useEffect,Ve as useId,Le as useImperativeHandle,Ne as useInsertionEffect,Fe as useLayoutEffect,Ue as useMemo,qe as useReducer,Ae as useRef,Me as useState,ze as useSyncExternalStore,Be as useTransition,He as version};