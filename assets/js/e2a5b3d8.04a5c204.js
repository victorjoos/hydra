(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),o=(n(0),n(266)),a=n(273),c={id:"minimal_example",title:"Minimal example"},s={unversionedId:"tutorials/structured_config/minimal_example",id:"version-1.0/tutorials/structured_config/minimal_example",isDocsHomePage:!1,title:"Minimal example",description:"There are four key elements in this example:",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/1_minimal_example.md",slug:"/tutorials/structured_config/minimal_example",permalink:"/docs/tutorials/structured_config/minimal_example",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/structured_config/1_minimal_example.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1618966436,formattedLastUpdatedAt:"4/21/2021",sidebar:"version-1.0/docs",previous:{title:"Introduction to Structured Configs",permalink:"/docs/tutorials/structured_config/intro"},next:{title:"A hierarchical static configuration",permalink:"/docs/tutorials/structured_config/hierarchical_static_config"}},u=[{value:"Duck-typing enables static type checking",id:"duck-typing-enables-static-type-checking",children:[]},{value:"Structured Configs enable Hydra to catch type errors at runtime",id:"structured-configs-enable-hydra-to-catch-type-errors-at-runtime",children:[]},{value:"Duck typing",id:"duck-typing",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(a.a,{to:"examples/tutorials/structured_configs/1_minimal",mdxType:"ExampleGithubLink"}),Object(o.b)("p",null,"There are four key elements in this example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"@dataclass")," describes the application's configuration"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ConfigStore")," manages the Structured Config"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cfg")," is ",Object(o.b)("inlineCode",{parentName:"li"},"duck typed")," as a ",Object(o.b)("inlineCode",{parentName:"li"},"MySQLConfig")," instead of a ",Object(o.b)("inlineCode",{parentName:"li"},"DictConfig")),Object(o.b)("li",{parentName:"ul"},"There is a subtle typo in the code below, can you spot it?")),Object(o.b)("p",null,"In this example, the config node stored in the ",Object(o.b)("inlineCode",{parentName:"p"},"ConfigStore")," replaces the traditional ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml")," file."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app_type_error.py" {18}',title:'"my_app_type_error.py"',"{18}":!0},'from dataclasses import dataclass\n\nimport hydra\nfrom hydra.core.config_store import ConfigStore\n\n@dataclass\nclass MySQLConfig:\n    host: str = "localhost"\n    port: int = 3306\n\ncs = ConfigStore.instance()\n# Registering the Config class with the name \'config\'.\ncs.store(name="config", node=MySQLConfig)\n\n@hydra.main(config_name="config")\ndef my_app(cfg: MySQLConfig) -> None:\n    # pork should be port!\n    if cfg.pork == 80:\n        print("Is this a webserver?!")\n\nif __name__ == "__main__":\n    my_app()\n')),Object(o.b)("h3",{id:"duck-typing-enables-static-type-checking"},"Duck-typing enables static type checking"),Object(o.b)("p",null,"Duck-typing the config object as ",Object(o.b)("inlineCode",{parentName:"p"},"MySQLConfig")," enables static type checkers like ",Object(o.b)("inlineCode",{parentName:"p"},"mypy")," to catch\ntype errors before you run your code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text",metastring:'title="$ mypy my_app_type_error.py"',title:'"$',mypy:!0,'my_app_type_error.py"':!0},'my_app_type_error.py:22: error: "MySQLConfig" has no attribute "pork"\nFound 1 error in 1 file (checked 1 source file)\n')),Object(o.b)("h3",{id:"structured-configs-enable-hydra-to-catch-type-errors-at-runtime"},"Structured Configs enable Hydra to catch type errors at runtime"),Object(o.b)("p",null,"If you forget to run ",Object(o.b)("inlineCode",{parentName:"p"},"mypy"),", Hydra will report the error at runtime:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app_type_error.py"',title:'"$',python:!0,'my_app_type_error.py"':!0},"Traceback (most recent call last):\n  File \"my_app_type_error.py\", line 22, in my_app\n    if cfg.pork == 80:\nomegaconf.errors.ConfigAttributeError: Key 'pork' not in 'MySQLConfig'\n        full_key: pork\n        reference_type=Optional[MySQLConfig]\n        object_type=MySQLConfig\n\nSet the environment variable HYDRA_FULL_ERROR=1 for a complete stack trace.\n")),Object(o.b)("p",null,"Hydra will also catch typos, or type errors in the command line:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ python my_app_type_error.py port=fail\nError merging override port=fail\nValue 'fail' could not be converted to Integer\n        full_key: port\n        reference_type=Optional[MySQLConfig]\n        object_type=MySQLConfig\n")),Object(o.b)("p",null,"We will see additional types of runtime errors that Hydra can catch later in this tutorial. Such as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Trying to read or write a non existent field in your config object"),Object(o.b)("li",{parentName:"ul"},"Assigning a value that is incompatible with the declared type"),Object(o.b)("li",{parentName:"ul"},"Attempting to modify a ",Object(o.b)("a",{parentName:"li",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html#frozen"},"frozen config"))),Object(o.b)("h2",{id:"duck-typing"},"Duck typing"),Object(o.b)("p",null,"In the example above ",Object(o.b)("inlineCode",{parentName:"p"},"cfg")," is duck typed as ",Object(o.b)("inlineCode",{parentName:"p"},"MySQLConfig"),".\nIt is actually an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"DictConfig"),". The duck typing enables static type checking by tools like Mypy or PyCharm.\nThis reduces development time by catching coding errors before you run your application."),Object(o.b)("p",null,"The name ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Duck_typing"},"Duck typing"),' comes from the phrase "If it walks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck".\nIt can be useful when you care about the methods or attributes of an object, not the actual type of the object.'))}p.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||o;return n?i.a.createElement(b,c(c({ref:t},u),{},{components:n})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},268:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(11),a=n(267),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(269),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,p,f=e.isNavLink,d=e.to,b=e.href,m=e.activeClassName,g=e.isActive,y=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,v=void 0===h||h,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,_=Object(r.useContext)(s),k=d||b,C=Object(a.a)(k),D=null==k?void 0:k.replace("pathname://",""),w=void 0!==D?(n=D,v&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,x=Object(r.useRef)(!1),A=f?o.e:o.c,N=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!N&&C&&window.docusaurus.prefetch(w),function(){N&&p&&p.disconnect()}}),[w,N,C]);var L=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,P=!w||!C||L;return w&&C&&!L&&!y&&_.collectLink(w),P?i.a.createElement("a",Object.assign({href:w},k&&!C&&{target:"_blank",rel:"noopener noreferrer"},O)):i.a.createElement(A,Object.assign({},O,{onMouseEnter:function(){x.current||(window.docusaurus.preload(w),x.current=!0)},innerRef:function(e){var t,n;N&&e&&C&&(t=e,n=function(){window.docusaurus.prefetch(w)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:w||""},f&&{isActive:g,activeClassName:m}))}},269:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(10),i=n(267);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,s=o.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},270:function(e,t,n){try{e.exports=n(271)}catch(i){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),i=n(38),o=n(272);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=r.useLocation().pathname;return o.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return o.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return o.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return o.getDocVersionSuggestions(n,i)}},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),o=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return o},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,o,a=t.getActiveVersion(e,n),c=null==a?void 0:a.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:c,alternateDocVersions:c?(i=c.id,o={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(o[e.name]=t)}))})),o):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),o=i.activeVersion!==r;return{latestDocSuggestion:o?null==i?void 0:i.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:o?r:void 0}}},273:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),i=n(0),o=n.n(i),a=n(268),c=n(10),s=n(270);function u(e){return o.a.createElement(a.a,Object(r.a)({},e,{to:(t=e.to,i=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,i}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return o.a.createElement(u,e,o.a.createElement("span",null,"\xa0"),o.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);