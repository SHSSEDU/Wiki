"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[818],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},l="\u521b\u5efa\u6587\u6863",i={unversionedId:"tutorial-basics/create-a-document",id:"tutorial-basics/create-a-document",title:"\u521b\u5efa\u6587\u6863",description:"Create your first Doc",source:"@site/docs/tutorial-basics/create-a-document.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-document",permalink:"/docs/tutorial-basics/create-a-document",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create-a-document.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u9875\u9762",permalink:"/docs/tutorial-basics/create-a-page"},next:{title:"Markdown \u7279\u6027",permalink:"/docs/tutorial-basics/markdown-features"}},c={},s=[{value:"\u914d\u7f6e\u4fa7\u8fb9\u680f",id:"\u914d\u7f6e\u4fa7\u8fb9\u680f",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u521b\u5efa\u6587\u6863"},"\u521b\u5efa\u6587\u6863"),(0,a.kt)("p",null,"Create your first Doc"),(0,a.kt)("p",null,"\u6587\u6863\u662f",(0,a.kt)("strong",{parentName:"p"},"\u9875\u9762\u7ec4"),"\uff0c\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fde\u63a5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4fa7\u8fb9\u680f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e0a\u4e00\u4e2a/\u4e0b\u4e00\u4e2a\u5bfc\u822a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7248\u672c\u63a7\u5236"))),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/hello.md")," \u521b\u5efa\u4e00\u4e2a Markdown \u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,a.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/hello"},"http://localhost:3000/docs/hello")," \u4e0a\u627e\u5230\u65b0\u6587\u6863\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u4fa7\u8fb9\u680f"},"\u914d\u7f6e\u4fa7\u8fb9\u680f"),(0,a.kt)("p",null,"\u7cfb\u7edf\u4f1a\u81ea\u52a8\u4ece\u201cdocs\u201d\u6587\u4ef6\u5939",(0,a.kt)("strong",{parentName:"p"},"\u521b\u5efa\u4fa7\u8fb9\u680f"),"\u3002"),(0,a.kt)("p",null,"\u6dfb\u52a0\u5143\u6570\u636e\u4ee5\u81ea\u5b9a\u4e49\u4fa7\u8fb9\u680f\u6807\u7b7e\u548c\u4f4d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"---\nsidebar_label: 'Hi!'\nsidebar_position: 3\n---\n\n# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5728\u201csidebars.js\u201d\u4e2d\u663e\u5f0f\u521b\u5efa\u4fa7\u8fb9\u680f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  tutorialSidebar: [\n    'intro',\n    // highlight-next-line\n    'hello',\n    {\n      type: 'category',\n      label: 'Tutorial',\n      items: ['tutorial-basics/create-a-document'],\n    },\n  ],\n};\n")))}m.isMDXComponent=!0}}]);