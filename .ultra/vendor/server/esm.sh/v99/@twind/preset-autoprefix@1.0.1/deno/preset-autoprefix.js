/* esm.sh - esbuild bundle(@twind/preset-autoprefix@1.0.1) deno production */
import{cssPropertyAlias as P,cssPropertyPrefixFlags as m,cssValuePrefixFlags as o}from"/v99/style-vendorizer@2.2.3/deno/style-vendorizer.js";var x=[["-webkit-",1],["-moz-",2],["-ms-",4]];function u(){return({stringify:l})=>({stringify(s,e,r){let f="",i=P(s);i&&(f+=l(i,e,r)+";");let t=m(s),F=o(s,e);for(let a of x)t&a[1]&&(f+=l(a[0]+s,e,r)+";"),F&a[1]&&(f+=l(s,a[0]+e,r)+";");return f+l(s,e,r)}})}export{u as default};
