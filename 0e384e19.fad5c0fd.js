(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{236:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(i,".").concat(d)]||s[d]||p[d]||o;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},237:function(e,t,n){"use strict";var a=n(0),r=n(19);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},238:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(13),i=n(240),c=n(6),l=Object(a.createContext)({collectLink:function(){}}),b=n(239),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,s,p=e.isNavLink,d=e.to,m=e.href,f=e.activeClassName,O=e["data-noBrokenLinkCheck"],h=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),j=Object(b.b)().withBaseUrl,y=Object(a.useContext)(l),g=d||m,v=Object(i.a)(g),w=null==g?void 0:g.replace("pathname://",""),N=void 0!==w?function(e){return e.startsWith("/")}(n=w)?j(n):n:void 0,k=Object(a.useRef)(!1),x=p?o.e:o.c,C=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!C&&v&&window.docusaurus.prefetch(N),function(){C&&s&&s.disconnect()}}),[N,C,v]);var _=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,H=!N||!v||_;return N&&v&&!_&&!O&&y.collectLink(N),H?r.a.createElement("a",Object.assign({href:N},!v&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(x,Object.assign({},h,{onMouseEnter:function(){k.current||(window.docusaurus.preload(N),k.current=!0)},innerRef:function(e){var t,n;C&&e&&v&&(t=e,n=function(){window.docusaurus.prefetch(N)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),n())}))}))).observe(t))},to:N||""},p&&{activeClassName:f}))}},239:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(237),r=n(240);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,b=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},240:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),o=(n(0),n(236)),i=n(239),c=n(238),l={id:"intro",title:"Getting started",sidebar_label:"Getting started"},b={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting started",description:"Introduction",source:"@site/docs/intro.md",slug:"/intro",permalink:"/docs/next/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/intro.md",version:"current",lastUpdatedBy:"Roopesh V S",lastUpdatedAt:1599341706,sidebar_label:"Getting started",sidebar:"docs",next:{title:"Terminology",permalink:"/docs/next/terminology"}},u=[{value:"Introduction",id:"introduction",children:[{value:"Key features:",id:"key-features",children:[]}]},{value:"Versions",id:"versions",children:[]},{value:"Quick start guide",id:"quick-start-guide",children:[{value:"Installation",id:"installation",children:[]},{value:"Basic example",id:"basic-example",children:[]},{value:"Composition example",id:"composition-example",children:[]},{value:"Multirun",id:"multirun",children:[]}]},{value:"Other stuff",id:"other-stuff",children:[{value:"Community",id:"community",children:[]},{value:"Citing Hydra",id:"citing-hydra",children:[]}]}],s={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Hydra is an open-source Python framework that simplifies the development of research and other complex applications.\nThe key feature is the ability to dynamically create a hierarchical configuration by composition and override it through config files and the command line.\nThe name Hydra comes from its ability to run multiple similar jobs - much like a Hydra with multiple heads."),Object(o.b)("h3",{id:"key-features"},"Key features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Hierarchical configuration composable from multiple sources"),Object(o.b)("li",{parentName:"ul"},"Configuration can be specified or overridden from the command line"),Object(o.b)("li",{parentName:"ul"},"Dynamic command line tab completion"),Object(o.b)("li",{parentName:"ul"},"Run your application locally or launch it to run remotely"),Object(o.b)("li",{parentName:"ul"},"Run multiple jobs with different arguments with a single command")),Object(o.b)("h2",{id:"versions"},"Versions"),Object(o.b)("p",null,"Hydra supports Linux, Mac and Windows."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Docs"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Release notes"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Python Version"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u25ba"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.0 (Stable)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.0 Docs"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/facebookresearch/hydra/releases/tag/hydra-1.0.0rc1"}),"Release notes")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"3.6+"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.11"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(c.a,{to:Object(i.a)("/docs/0.11/intro"),mdxType:"Link"},Object(o.b)("strong",{parentName:"td"},"Switch to 0.11 Docs"))),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/facebookresearch/hydra/releases/tag/0.11.0"}),"Release notes")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.7, 3.5+")))),Object(o.b)("h2",{id:"quick-start-guide"},"Quick start guide"),Object(o.b)("p",null,"This guide will show you some of the most important features of Hydra.\nRead the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/tutorials/basic/your_first_app/simple_cli"}),"tutorial")," to gain a deeper understanding."),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-core --upgrade\n")),Object(o.b)("h3",{id:"basic-example"},"Basic example"),Object(o.b)("p",null,"Config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"db:\n  driver: mysql\n  user: omry\n  pass: secret\n")),Object(o.b)("p",null,"Application:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'{4-6} title="my_app.py"',"{4-6}":!0,title:'"my_app.py"'}),'import hydra\nfrom omegaconf import DictConfig, OmegaConf\n\n@hydra.main(config_name="config")\ndef my_app(cfg : DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),Object(o.b)("p",null,"You can learn more about OmegaConf ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation"}),"here")," later."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),Object(o.b)("p",null,"You can override values in the loaded config from the command line:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:"{4-5}","{4-5}":!0}),"$ python my_app.py db.user=root db.pass=1234\ndb:\n  driver: mysql\n  user: root\n  pass: 1234\n")),Object(o.b)("h3",{id:"composition-example"},"Composition example"),Object(o.b)("p",null,"You may want to alternate between two different databases. To support this create a ",Object(o.b)("inlineCode",{parentName:"p"},"config group")," named db,\nand place one config file for each alternative inside:\nThe directory structure of our application now looks like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"\u251c\u2500\u2500 db\n\u2502   \u251c\u2500\u2500 mysql.yaml\n\u2502   \u2514\u2500\u2500 postgresql.yaml\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 my_app.py\n")),Object(o.b)("p",null,"Here is the new config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - db: mysql\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"defaults")," is a special directive telling Hydra to use db/mysql.yaml when composing the configuration object.\nThe resulting cfg object is a composition of configs from defaults with configs specified in your ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml"),"."),Object(o.b)("p",null,"You can now choose which database configuration to use from the and override values from the command line: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgre_user\nwebsite:\n  domain: example.com\n")),Object(o.b)("p",null,"You can have as many config groups as you need."),Object(o.b)("h3",{id:"multirun"},"Multirun"),Object(o.b)("p",null,"You can run your function multiple times with different configuration easily with the ",Object(o.b)("inlineCode",{parentName:"p"},"--multirun|-m")," flag."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ python my_app.py --multirun db=mysql,postgresql\n[HYDRA] Sweep output dir : multirun/2020-01-09/01-16-29\n[HYDRA] Launching 2 jobs locally\n[HYDRA]        #0 : db=mysql\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\nwebsite:\n    domain: example.com\n\n[HYDRA]        #1 : db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgre_user\nwebsite:\n    domain: example.com\n")),Object(o.b)("p",null,"There is a whole lot more to Hydra. Read the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/tutorials/basic/your_first_app/simple_cli"}),"tutorial")," to learn more."),Object(o.b)("h2",{id:"other-stuff"},"Other stuff"),Object(o.b)("h3",{id:"community"},"Community"),Object(o.b)("p",null,"Ask questions in the chat or StackOverflow (Use the tag #fb-hydra):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://hydra-framework.zulipchat.com"}),"Zulip Chat")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/tagged/fb-hydra"}),"StackOverflow"))),Object(o.b)("p",null,"Follow Hydra on Twitter and Facebook:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.facebook.com/Hydra-Framework-109364473802509/"}),"Facebook page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://twitter.com/Hydra_Framework"}),"Twitter"))),Object(o.b)("h3",{id:"citing-hydra"},"Citing Hydra"),Object(o.b)("p",null,"If you use Hydra in your research please use the following BibTeX entry:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"@Misc{Yadan2019Hydra,\n  author =       {Omry Yadan},\n  title =        {Hydra - A framework for elegantly configuring complex applications},\n  howpublished = {Github},\n  year =         {2019},\n  url =          {https://github.com/facebookresearch/hydra}\n}\n")))}p.isMDXComponent=!0}}]);