import{useRef as e,useState as a,useLayoutEffect as t,createElement as s,forwardRef as r,useCallback as o,useMemo as n}from"react";import{createBrowserHistory as i,createHashHistory as c}from"/v99/history@5.3.0/X-ZS9yZWFjdA/es2022/history.js";import{Router as u,useHref as l,createPath as h,useLocation as f,useResolvedPath as v,useNavigate as y}from"/v99/react-router@6.3.0/X-ZS9yZWFjdA/es2022/react-router.js";import{MemoryRouter as m,Navigate as d,NavigationType as p,Outlet as g,Route as R,Router as P,Routes as N,UNSAFE_LocationContext as C,UNSAFE_NavigationContext as A,UNSAFE_RouteContext as S,createPath as w,createRoutesFromChildren as b,generatePath as L,matchPath as k,matchRoutes as x,parsePath as F,renderMatches as O,resolvePath as j,useHref as E,useInRouterContext as H,useLocation as T,useMatch as U,useNavigate as _,useNavigationType as M,useOutlet as Z,useOutletContext as K,useParams as W,useResolvedPath as B,useRoutes as D}from"/v99/react-router@6.3.0/X-ZS9yZWFjdA/es2022/react-router.js";function X(){return(X=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function I(e,a){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}var q=["onClick","reloadDocument","replace","state","target","to"],z=["aria-current","caseSensitive","className","end","style","to","children"];function G(r){let{basename:o,children:n,window:c}=r,l=e();null==l.current&&(l.current=i({window:c}));let h=l.current,[f,v]=a({action:h.action,location:h.location});return t(()=>h.listen(v),[h]),s(u,{basename:o,children:n,location:f.location,navigationType:f.action,navigator:h})}function J(r){let{basename:o,children:n,window:i}=r,l=e();null==l.current&&(l.current=c({window:i}));let h=l.current,[f,v]=a({action:h.action,location:h.location});return t(()=>h.listen(v),[h]),s(u,{basename:o,children:n,location:f.location,navigationType:f.action,navigator:h})}function Y(e){let{basename:r,children:o,history:n}=e,[i,c]=a({action:n.action,location:n.location});return t(()=>n.listen(c),[n]),s(u,{basename:r,children:o,location:i.location,navigationType:i.action,navigator:n})}var $=r(function(e,a){let{onClick:t,reloadDocument:r,replace:o=!1,state:n,target:i,to:c}=e,u=I(e,q),h=l(c),f=V(c,{replace:o,state:n,target:i});return s("a",X({},u,{href:h,onClick:function(e){t&&t(e),e.defaultPrevented||r||f(e)},ref:a,target:i}))}),Q=r(function(e,a){let{"aria-current":t="page",caseSensitive:r=!1,className:o="",end:n=!1,style:i,to:c,children:u}=e,l=I(e,z),h=f(),y=v(c),m=h.pathname,d=y.pathname;r||(m=m.toLowerCase(),d=d.toLowerCase());let p=m===d||!n&&m.startsWith(d)&&"/"===m.charAt(d.length),g;g="function"==typeof o?o({isActive:p}):[o,p?"active":null].filter(Boolean).join(" ");let R="function"==typeof i?i({isActive:p}):i;return s($,X({},l,{"aria-current":p?t:void 0,className:g,ref:a,style:R,to:c}),"function"==typeof u?u({isActive:p}):u)});function V(e,a){let{target:t,replace:s,state:r}=void 0===a?{}:a,n=y(),i=f(),c=v(e);return o(a=>{if(0===a.button&&(!t||"_self"===t)&&!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)){a.preventDefault();let o=!!s||h(i)===h(c);n(e,{replace:o,state:r})}},[i,n,c,s,r,t,e])}function ee(a){let t=e(ea(a)),s=f(),r=n(()=>{let e=ea(s.search);for(let a of t.current.keys())e.has(a)||t.current.getAll(a).forEach(t=>{e.append(a,t)});return e},[s.search]),i=y(),c=o((e,a)=>{i("?"+ea(e),a)},[i]);return[r,c]}function ea(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((a,t)=>{let s=e[t];return a.concat(Array.isArray(s)?s.map(e=>[t,e]):[[t,s]])},[]))}export{G as BrowserRouter,J as HashRouter,$ as Link,m as MemoryRouter,Q as NavLink,d as Navigate,p as NavigationType,g as Outlet,R as Route,P as Router,N as Routes,C as UNSAFE_LocationContext,A as UNSAFE_NavigationContext,S as UNSAFE_RouteContext,w as createPath,b as createRoutesFromChildren,ea as createSearchParams,L as generatePath,k as matchPath,x as matchRoutes,F as parsePath,O as renderMatches,j as resolvePath,Y as unstable_HistoryRouter,E as useHref,H as useInRouterContext,V as useLinkClickHandler,T as useLocation,U as useMatch,_ as useNavigate,M as useNavigationType,Z as useOutlet,K as useOutletContext,W as useParams,B as useResolvedPath,D as useRoutes,ee as useSearchParams};