/* esm.sh - esbuild bundle(shallowequal@1.1.0) deno production */
var p=Object.create;var d=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty;var k=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var q=(e,r,t,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let f of g(r))!P.call(e,f)&&f!==t&&d(e,f,{get:()=>r[f],enumerable:!(a=O(r,f))||a.enumerable});return e};var E=(e,r,t)=>(t=e!=null?p(w(e)):{},q(r||!e||!e.__esModule?d(t,"default",{value:e,enumerable:!0}):t,e));var _=k((F,y)=>{y.exports=function(r,t,a,f){var l=a?a.call(f,r,t):void 0;if(l!==void 0)return!!l;if(r===t)return!0;if(typeof r!="object"||!r||typeof t!="object"||!t)return!1;var s=Object.keys(r),h=Object.keys(t);if(s.length!==h.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(t),u=0;u<s.length;u++){var n=s[u];if(!o(n))return!1;var i=r[n],v=t[n];if(l=a?a.call(f,i,v,n):void 0,l===!1||l===void 0&&i!==v)return!1}return!0}});var H=E(_()),{default:c,...z}=H,G=c!==void 0?c:z;export{G as default};
