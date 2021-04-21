(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{247:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),o=(n(0),n(266)),i={id:"defaults_list_interpolation",title:"Defaults List interpolation"},s={unversionedId:"upgrades/1.0_to_1.1/defaults_list_interpolation",id:"upgrades/1.0_to_1.1/defaults_list_interpolation",isDocsHomePage:!1,title:"Defaults List interpolation",description:"The defaults lists are used to compose the final config object.",source:"@site/docs/upgrades/1.0_to_1.1/defaults_list_interpolation_changes.md",slug:"/upgrades/1.0_to_1.1/defaults_list_interpolation",permalink:"/docs/next/upgrades/1.0_to_1.1/defaults_list_interpolation",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/1.0_to_1.1/defaults_list_interpolation_changes.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1618966436,formattedLastUpdatedAt:"4/21/2021",sidebar:"docs",previous:{title:"Defaults List Overrides",permalink:"/docs/next/upgrades/1.0_to_1.1/defaults_list_override"},next:{title:"Changes to Package Header",permalink:"/docs/next/upgrades/1.0_to_1.1/changes_to_package_header"}},l=[{value:"Migration examples",id:"migration-examples",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The defaults lists are used to compose the final config object.\nHydra supports a limited form of interpolation in the defaults list.\nThe interpolation style described there is deprecated in favor of a cleaner style more\nappropriate to recursive default lists."),Object(o.b)("h2",{id:"migration-examples"},"Migration examples"),Object(o.b)("p",null,"For example, the following snippet from Hydra 1.0 or older: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - dataset: imagenet\n  - model: alexnet\n  - dataset_model: ${defaults.0.dataset}_${defaults.1.model}\n")),Object(o.b)("p",null,"Changes to this in Hydra 1.1 or newer:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - dataset: imagenet\n  - model: alexnet\n  - dataset_model: ${dataset}_${model}\n")),Object(o.b)("p",null,"The new style is more compact and does not require specifying the exact index of the element in the defaults list.\nThis is enables interpolating using config group values that are coming from recursive defaults."),Object(o.b)("p",null,"Note that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This is non-standard interpolation support that is unique to the defaults list"),Object(o.b)("li",{parentName:"ul"},"interpolation keys in the defaults list can not access values from the composed config because it does not yet\nexist when Hydra is processing the defaults list")),Object(o.b)("p",null,"The Defaults List is described ",Object(o.b)("a",{parentName:"p",href:"/docs/next/advanced/defaults_list"},"here"),"."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Support for the old style will be removed in Hydra 1.2."))))}d.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);