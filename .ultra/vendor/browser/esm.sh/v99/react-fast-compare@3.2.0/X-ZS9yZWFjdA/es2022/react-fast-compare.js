var e,r,t,n,o=Object.create,f=Object.defineProperty,u=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,{default:s,...l}=(n=null!=(t=(e=(e,r)=>{var t="u">typeof Element,n="function"==typeof Map,o="function"==typeof Set,f="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;r.exports=function(e,r){try{return function e(r,u){if(r===u)return!0;if(r&&u&&"object"==typeof r&&"object"==typeof u){var i,a,c,s;if(r.constructor!==u.constructor)return!1;if(Array.isArray(r)){if((i=r.length)!=u.length)return!1;for(a=i;0!=a--;)if(!e(r[a],u[a]))return!1;return!0}if(n&&r instanceof Map&&u instanceof Map){if(r.size!==u.size)return!1;for(s=r.entries();!(a=s.next()).done;)if(!u.has(a.value[0]))return!1;for(s=r.entries();!(a=s.next()).done;)if(!e(a.value[1],u.get(a.value[0])))return!1;return!0}if(o&&r instanceof Set&&u instanceof Set){if(r.size!==u.size)return!1;for(s=r.entries();!(a=s.next()).done;)if(!u.has(a.value[0]))return!1;return!0}if(f&&ArrayBuffer.isView(r)&&ArrayBuffer.isView(u)){if((i=r.length)!=u.length)return!1;for(a=i;0!=a--;)if(r[a]!==u[a])return!1;return!0}if(r.constructor===RegExp)return r.source===u.source&&r.flags===u.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===u.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===u.toString();if((i=(c=Object.keys(r)).length)!==Object.keys(u).length)return!1;for(a=i;0!=a--;)if(!Object.prototype.hasOwnProperty.call(u,c[a]))return!1;if(t&&r instanceof Element)return!1;for(a=i;0!=a--;)if(!(("_owner"===c[a]||"__v"===c[a]||"__o"===c[a])&&r.$$typeof)&&!e(r[c[a]],u[c[a]]))return!1;return!0}return r!=r&&u!=u}(e,r)}catch(u){if((u.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw u}}},()=>(r||e((r={exports:{}}).exports,r),r.exports))())?o(a(t)):{},((e,r,t,n)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let o of i(r))c.call(e,o)||void 0===o||f(e,o,{get:()=>r[o],enumerable:!(n=u(r,o))||n.enumerable});return e})(t&&t.__esModule?n:f(n,"default",{value:t,enumerable:!0}),t)),p=void 0!==s?s:l;export{p as default};