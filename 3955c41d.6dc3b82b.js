(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(7),o=(n(0),n(243)),i={id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},s={unversionedId:"tutorials/basic/running_your_app/multi-run",id:"tutorials/basic/running_your_app/multi-run",isDocsHomePage:!1,title:"Multi-run",description:"Sometimes you want to run a parameter sweep.",source:"@site/docs/tutorials/basic/running_your_app/2_multirun.md",slug:"/tutorials/basic/running_your_app/multi-run",permalink:"/docs/next/tutorials/basic/running_your_app/multi-run",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/running_your_app/2_multirun.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1608334290,sidebar_label:"Multi-run",sidebar:"docs",previous:{title:"Putting it all together",permalink:"/docs/next/tutorials/basic/your_first_app/composition"},next:{title:"Output/Working directory",permalink:"/docs/next/tutorials/basic/running_your_app/working_directory"}},c=[{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes you want to run a parameter sweep.\nA parameter sweep is a method of evaluating a function (or a program) with a pre-determined set of parameters.\nThe examples below will clarify what this means."),Object(o.b)("p",null,"To run a parameter sweep, use the ",Object(o.b)("inlineCode",{parentName:"p"},"--multirun")," (",Object(o.b)("inlineCode",{parentName:"p"},"-m"),") flag and pass a comma separated list for each\ndimension you want to sweep.  "),Object(o.b)("p",null,"To run your program with the 3 different schemas in schema config group:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ python my_app.py -m schema=warehouse,support,school\n")),Object(o.b)("p",null,"Here is sweep over the db types (mysql,postgresql) and the schemas (warehouse,support,school).\nOutput does not contain the configuration prints."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"})," $ python my_app.py schema=warehouse,support,school db=mysql,postgresql -m\n[2019-10-01 14:44:16,254] - Launching 6 jobs locally\n[2019-10-01 14:44:16,254] - Sweep output dir : multirun/2019-10-01/14-44-16\n[2019-10-01 14:44:16,254] -     #0 : schema=warehouse db=mysql\n[2019-10-01 14:44:16,321] -     #1 : schema=warehouse db=postgresql\n[2019-10-01 14:44:16,390] -     #2 : schema=support db=mysql\n[2019-10-01 14:44:16,458] -     #3 : schema=support db=postgresql\n[2019-10-01 14:44:16,527] -     #4 : schema=school db=mysql\n[2019-10-01 14:44:16,602] -     #5 : schema=school db=postgresql\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Hydra supports other kind of sweeps, for example a range sweep: ",Object(o.b)("strong",{parentName:"p"},"x=range(1,10)")," or a glob: ",Object(o.b)("strong",{parentName:"p"},"support=glob(*)"),".",Object(o.b)("br",{parentName:"p"}),"\n","See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/advanced/override_grammar/extended"}),"Extended Override syntax")," for details."))),Object(o.b)("h3",{id:"sweeper"},"Sweeper"),Object(o.b)("p",null,"The sweeping logic is implemented by a simple sweeper that is built into Hydra.\nAdditional sweepers are available as plugins.\nFor example, the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/plugins/ax_sweeper"}),"Ax Sweeper")," can automatically find the best parameter combination!"),Object(o.b)("h3",{id:"launcher"},"Launcher"),Object(o.b)("p",null,"A Launcher is what runs your job. Hydra comes with a simple launcher that runs the jobs locally and serially.\nOther launchers are available as plugins for launching in parallel and on different clusters. For example, the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/plugins/joblib_launcher"}),"JobLib Launcher"),"\ncan execute the different parameter combinations in parallel on your local machine using multi-processing."))}l.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);