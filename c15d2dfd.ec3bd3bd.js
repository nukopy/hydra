(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{181:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return a})),r.d(e,"metadata",(function(){return c})),r.d(e,"rightToc",(function(){return u})),r.d(e,"default",(function(){return l}));var n=r(2),o=r(7),i=(r(0),r(236)),a={id:"intro",title:"Tutorials intro"},c={unversionedId:"tutorials/intro",id:"tutorials/intro",isDocsHomePage:!1,title:"Tutorials intro",description:"Basic Tutorial",source:"@site/docs/tutorials/intro.md",slug:"/tutorials/intro",permalink:"/docs/next/tutorials/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/intro.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1603845527,sidebar:"docs",previous:{title:"Terminology",permalink:"/docs/next/terminology"},next:{title:"A simple command-line application",permalink:"/docs/next/tutorials/basic/your_first_app/simple_cli"}},u=[{value:"Basic Tutorial",id:"basic-tutorial",children:[]},{value:"Structured configs",id:"structured-configs",children:[]}],s={rightToc:u};function l(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"basic-tutorial"},"Basic Tutorial"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/tutorials/basic/your_first_app/simple_cli"}),"Basic Tutorial")," covers basic Hydra concepts."),Object(i.b)("h3",{id:"structured-configs"},"Structured configs"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/tutorials/structured_config/intro"}),"Structured Configs Tutorial")," shows how to create strongly typed configurations."))}l.isMDXComponent=!0},236:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=o.a.createContext({}),l=function(t){var e=o.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=l(t.components);return o.a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},f=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,a=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=l(r),f=n,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?o.a.createElement(b,c(c({ref:e},s),{},{components:r})):o.a.createElement(b,c({ref:e},s))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);