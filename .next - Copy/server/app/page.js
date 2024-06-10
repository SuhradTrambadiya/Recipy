(()=>{var e={};e.id=931,e.ids=[931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},47525:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c}),s(68201),s(44935),s(35866);var r=s(23191),a=s(88716),n=s(37922),i=s.n(n),l=s(95231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,68201)),"C:\\Users\\ketul\\OneDrive - Sheridan College\\reactjs\\recipe\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,44935)),"C:\\Users\\ketul\\OneDrive - Sheridan College\\reactjs\\recipe\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\ketul\\OneDrive - Sheridan College\\reactjs\\recipe\\src\\app\\page.js"],u="/page",m={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},57152:(e,t,s)=>{Promise.resolve().then(s.bind(s,41467))},77957:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,12994,23)),Promise.resolve().then(s.t.bind(s,96114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,79671,23)),Promise.resolve().then(s.t.bind(s,41868,23)),Promise.resolve().then(s.t.bind(s,84759,23))},80391:(e,t,s)=>{Promise.resolve().then(s.bind(s,19297))},41467:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var r=s(10326),a=s(17577),n=s(79740),i=s(90434);function l(){let[e,t]=(0,a.useState)(0),s=e=>{t(e)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.Carousel,{className:"relative w-screen h-screen overflow-hidden",navigation:({length:t})=>r.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2",children:Array(t).fill("").map((t,a)=>r.jsx("span",{className:`block h-1 cursor-pointer rounded-2xl transition-all ${e===a?"w-8 bg-white":"w-4 bg-white/50"}`,onClick:()=>s(a)},a))}),children:[r.jsx("video",{src:"/video1.mp4",className:"h-full w-full object-cover",autoPlay:!0,loop:!0,muted:!0}),r.jsx("video",{src:"/video2.mp4",className:"h-full w-full object-cover",autoPlay:!0,loop:!0,muted:!0}),r.jsx("video",{src:"/video3.mp4",className:"h-full w-full object-cover",autoPlay:!0,loop:!0,muted:!0})]}),(0,r.jsxs)("div",{className:"absolute bottom-1/3 left-1/2 transform -translate-x-1/2 text-center",children:[r.jsx("h1",{className:"title text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4",children:'Welcome to "Recipe" App'}),(0,r.jsxs)("div",{className:"flex gap-4 items-center justify-center",children:[r.jsx(i.default,{href:"/recipy",children:r.jsx("button",{className:"bg-blue-500 text-white py-2 px-4 rounded-md",children:"View Recipes"})}),r.jsx(i.default,{href:"/gallery",children:r.jsx("button",{className:"bg-green-500 text-white py-2 px-4 rounded-md",children:"Explore Gallery"})}),r.jsx(i.default,{href:"https://www.linkedin.com/in/suhrad-trambadiya-b11224238/",children:r.jsx("button",{className:"bg-purple-400 text-white py-2 px-4 rounded-md",children:"Meet the Developer"})})]}),r.jsx("p",{className:"text-gray-300 text-center mt-8",children:'"Good food is the foundation of genuine happiness."'})]})]})}},19297:(e,t,s)=>{"use strict";s.d(t,{default:()=>p});var r=s(10326),a=s(90434);s(17577);var n=s(10219),i=s(6682),l=s(33749),o=s(72591),c=s(17477),d=s(59675),u=s(46226);let m=[{name:"Home",href:"/",current:!0},{name:"Recipes",href:"/recipy",current:!1},{name:"Gallery",href:"/gallery",current:!1}];function x(...e){return e.filter(Boolean).join(" ")}function p(){return r.jsx(n.pJ,{as:"nav",className:"bg-gradient-to-r from-gray-800 to-gray-900 sticky top-0 z-50 w-screen",children:({open:e})=>(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"relative flex h-16 items-center justify-between",children:[r.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:(0,r.jsxs)(n.lG,{className:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[r.jsx("span",{className:"absolute -inset-0.5"}),r.jsx("span",{className:"sr-only",children:"Open main menu"}),e?r.jsx(o.Z,{className:"block h-6 w-6","aria-hidden":"true"}):r.jsx(c.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})}),(0,r.jsxs)("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[r.jsx("div",{className:"flex flex-shrink-0 items-center",children:r.jsx("h1",{className:"bg-blue-gray-700 text-white text-2xl p-2 rounded-full px-4",children:"Suhrad"})}),r.jsx("div",{className:"hidden sm:ml-6 sm:block",children:r.jsx("div",{className:"flex space-x-4",children:m.map(e=>r.jsx(a.default,{href:e.href,className:x(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name))})})]}),(0,r.jsxs)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[(0,r.jsxs)("button",{type:"button",className:"relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",children:[r.jsx("span",{className:"absolute -inset-1.5"}),r.jsx("span",{className:"sr-only",children:"View notifications"}),r.jsx(d.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,r.jsxs)(i.v2,{as:"div",className:"relative ml-3",children:[r.jsx("div",{children:(0,r.jsxs)(i.j2,{className:"relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",children:[r.jsx("span",{className:"absolute -inset-1.5"}),r.jsx("span",{className:"sr-only",children:"Open user menu"}),r.jsx(u.default,{className:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"",width:256,height:256})]})}),r.jsx(l.u,{enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,r.jsxs)(i.sd,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[r.jsx(i.sN,{children:({focus:e})=>r.jsx("a",{href:"#",className:x(e?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Your Profile"})}),r.jsx(i.sN,{children:({focus:e})=>r.jsx("a",{href:"#",className:x(e?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Settings"})}),r.jsx(i.sN,{children:({focus:e})=>r.jsx("a",{href:"#",className:x(e?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Sign out"})})]})})]})]})]})}),r.jsx(n.V2,{className:"sm:hidden",children:r.jsx("div",{className:"space-y-1 px-2 pb-3 pt-2",children:m.map(e=>r.jsx(n.lG,{as:"a",href:e.href,className:x(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name))})})]})})}},44935:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m,metadata:()=>u});var r=s(19510),a=s(1723),n=s.n(a);s(5023);var i=s(68570);let l=(0,i.createProxy)(String.raw`C:\Users\ketul\OneDrive - Sheridan College\reactjs\recipe\src\app\components\Navbar.js`),{__esModule:o,$$typeof:c}=l;l.default;let d=(0,i.createProxy)(String.raw`C:\Users\ketul\OneDrive - Sheridan College\reactjs\recipe\src\app\components\Navbar.js#default`),u={title:"Recipy App",description:"Created By Suhrad"};function m({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:n().className,children:[r.jsx(d,{}),e]})})}},68201:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(19510);s(37816),s(11789),s(73476),s(44797);var a=s(68570);let n=(0,a.createProxy)(String.raw`C:\Users\ketul\OneDrive - Sheridan College\reactjs\recipe\src\app\components\Header.js`),{__esModule:i,$$typeof:l}=n;n.default;let o=(0,a.createProxy)(String.raw`C:\Users\ketul\OneDrive - Sheridan College\reactjs\recipe\src\app\components\Header.js#default`);function c(){return r.jsx(r.Fragment,{children:r.jsx("div",{className:"bg-slate-700 overflow-x-hidden",children:r.jsx(o,{})})})}},73881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},37816:()=>{},11789:()=>{},73476:()=>{},44797:()=>{},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,82,621,740],()=>s(47525));module.exports=r})();