(this["webpackJsonpseeing-red"]=this["webpackJsonpseeing-red"]||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/hero-video.fcb140fa.mp4"},32:function(e,a,t){e.exports=t(67)},33:function(e,a,t){},39:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),r=t.n(n),o=t(25),c=t.n(o),s=t(8),l=t(7),i=t(5),m=t(26);var d=function(e){var a=Object(n.useState)(0),t=Object(i.a)(a,2),r=(t[0],t[1]),o=0,c=Object(m.throttle)((function(){var a=(document.documentElement||document.body).scrollTop;r((function(e){return o=e,a})),console.log("current scroll ".concat(a)),console.log("previous scroll ".concat(o)),e({previousScrollTop:o,currentScrollTop:a})}),250);Object(n.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[])},u=(t(39),function(e){var a=e.toggleHandler;return r.a.createElement("button",{className:"toggle-button",onClick:a},r.a.createElement("span",{className:"toggle-button__line"}),r.a.createElement("span",{className:"toggle-button__line"}),r.a.createElement("span",{className:"toggle-button__line"}))});var g=function(e){var a=e.toggleHandler,t=Object(n.useState)(!1),o=Object(i.a)(t,2),c=o[0],l=o[1],m=Object(n.useState)(!1),g=Object(i.a)(m,2),p=g[0],_=g[1];d((function(e){var a=e.previousScrollTop,t=e.currentScrollTop,n=a<t,r=t>80;_(t>2),setTimeout((function(){l(n&&r)}),400)}));var f=p?"shadow":"",h=c?"hidden":"";return r.a.createElement("header",{className:"header ".concat(h," ").concat(f)},r.a.createElement("nav",{className:"header__nav"},r.a.createElement("div",{className:"header__logo"},r.a.createElement(s.b,{to:"",className:"header__logo__letters"},"seeing",r.a.createElement("img",{className:"header__logo__icon",src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/mars-icon.svg?alt=media&token=45304e72-ddf7-44f8-bd68-b3005af53638",alt:"Seeing Red logo"}),"RED")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"header__links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/weather",className:"header__links__link"},"Weather")))),r.a.createElement("div",{className:"header__toggle-button"},r.a.createElement(u,{toggleHandler:a}))))},p=(t(44),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__items"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("small",null,"\xa92019 Seeing Red")))))}),_=(t(45),function(e){var a=e.drawerIsOpen,t=e.toggleHandler,n="drawer";return a&&(n="drawer show"),r.a.createElement("nav",{className:n},r.a.createElement("button",{onClick:t,className:"drawer__button"},"X"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/weather",className:"drawer__link",onClick:t},"Weather"))))}),f=(t(46),function(e){var a=e.toggleHandler;return r.a.createElement("div",{className:"backdrop",onClick:a})}),h=function(e,a){Object(n.useEffect)((function(){var t=function(t){t.key===e&&a()};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[a,e])},v=function(e){var a,t=e.children,o=Object(n.useState)(!1),c=Object(i.a)(o,2),s=c[0],l=c[1],m=function(){l(!s)};return h("Escape",(function(){s&&l(!s)})),s&&(a=r.a.createElement(f,{toggleHandler:m})),r.a.createElement("div",{className:"App page-container"},r.a.createElement(g,{toggleHandler:m}),r.a.createElement(_,{drawerIsOpen:s,toggleHandler:m}),a,t,r.a.createElement(p,null))},E=(t(47),t(29)),b=t.n(E),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"hero container"},r.a.createElement("div",{className:"hero__video-wrap"},r.a.createElement("video",{src:b.a,autoPlay:!0,loop:!0,muted:!0},r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/hero-bg.jpg?alt=media&token=897bc3fd-3841-4ccd-8f6a-397d530e23dd",title:"Your browser does not support the <video> tag"}),"Video not supported")),r.a.createElement("div",{className:"hero__overlay"}),r.a.createElement("div",{className:"hero__content"},r.a.createElement("h1",{className:"hero__title"},"We are the Martians"))),r.a.createElement("div",{className:"services"},r.a.createElement("section",{className:"service"},r.a.createElement("img",{className:"service__image",src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/rocket-1.svg?alt=media&token=024575eb-c9ef-4055-8e1c-7a095b6632cc",alt:"rocket launching","data-aos":"fade-in"}),r.a.createElement("div",{className:"service__content","data-aos":"fade-in"},r.a.createElement("h2",{className:"service__title"},"Fly with our state-of-the-art rocket fleet"),r.a.createElement("p",null,"We have partenered with Space X to give you the quickest and safest alternative in outer space travel."),r.a.createElement("button",{className:"service__btn"},"Learn more"))),r.a.createElement("section",{className:"service middle"},r.a.createElement("div",{className:"service__content","data-aos":"fade-in"},r.a.createElement("h2",{className:"service__title"},"Explore the Red Planet any way you want"),r.a.createElement("p",null,"We offer a series of tour packages that will allow you to travel around Mars and its wonders in the fashion that's best adjusted to your needs and preferences."),r.a.createElement("button",{className:"service__btn"},"Learn more")),r.a.createElement("img",{className:"service__image","data-aos":"fade-in",src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/planet-1.svg?alt=media&token=ede9fd17-15f6-4a3f-81ca-e72ada512066",alt:"rocket launching"})),r.a.createElement("section",{className:"service"},r.a.createElement("img",{className:"service__image","data-aos":"fade-in",src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/rocket-3.svg?alt=media&token=7891e5eb-90c3-4d3b-8cdd-c1932a9105a8",alt:"rocket launching"}),r.a.createElement("div",{className:"service__content","data-aos":"fade-in"},r.a.createElement("h2",{className:"service__title"},"Feel at home like the Jetsons!"),r.a.createElement("p",null,"We offer a wide range of luxurious villa-pods, fully equiped with high-speed interplanetary internet, insta-food preparation units, and an optional robo-maid."),r.a.createElement("button",{className:"service__btn"},"Learn more")))))},N=t(30),k=t.n(N),j=(t(65),function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),l=s[0],m=s[1],d=Object(n.useState)(""),u=Object(i.a)(d,2),g=u[0],p=u[1];if(Object(n.useEffect)((function(){var e;(e="https://api.nasa.gov/insight_weather/?api_key=FTxOBfLQCG314D5aXesXFxGafjtCdj3SWlJYCgJ4&feedtype=json&ver=1.0",new Promise((function(a,t){k.a.get(e).then((function(e){a(e.data)})).catch((function(e){return t(e)}))}))).then((function(e){o(e),m(!0)})).catch((function(e){p(e),m(!0)}))}),[]),l){var _,f=t.sol_keys[t.sol_keys.length-1],h=t[f].Season;return"spring"===h?_=r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/spring.svg?alt=media&token=de8eacaf-785d-41ed-8d93-06d5ef8d12bf",alt:"spring season icon",className:"weather__season__icon"}):"summer"===h?_=r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/summer.svg?alt=media&token=c1c802db-e89c-4733-87b4-734b95370d09",alt:"summer season icon",className:"weather__season__icon"}):"fall"===h?_=r.a.createElement("img",{src:"https://console.firebase.google.com/u/0/project/seeing-red/storage/seeing-red.appspot.com/files",alt:"fall season icon",className:"weather__season__icon"}):"winter"===h&&(_=r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/winter.svg?alt=media&token=d9095b14-0524-4247-ba4c-93f8b2144f4e",alt:"winter season icon",className:"weather__season__icon"})),r.a.createElement("section",{className:"weather"},g?r.a.createElement("p",null,g.message):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"weather__day"},"sol ",f),r.a.createElement("div",{className:"weather__season"},_,r.a.createElement("h2",{className:"weather__season__text"},h)),r.a.createElement("div",{className:"weather__temp"},r.a.createElement("div",{className:"weather__temp__max"},r.a.createElement("img",{className:"weather__temp__icon",src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/max-temp.svg?alt=media&token=587ae349-b4e3-438e-b16e-b1657ac2021c",alt:"maximum temperature icon"}),r.a.createElement("h3",{className:"weather__temp__text"},t[f].AT.mx.toFixed(1),"\xb0C")),r.a.createElement("div",{className:"weather__temp__min"},r.a.createElement("img",{className:"weather__temp__icon",src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/min-temp.svg?alt=media&token=9c136708-306f-4a68-9948-83406aa1ea25",alt:"minimum temperature icon"}),r.a.createElement("h3",{className:"weather__temp__text"},t[f].AT.mn.toFixed(1),"\xb0C")))))}return r.a.createElement("div",null,"Loading...")});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(31),O=t.n(y);t(66);O.a.init({duration:1200,once:!0}),c.a.render(r.a.createElement(s.a,{basename:"/seeing-red"},r.a.createElement(v,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:w}),r.a.createElement(l.a,{path:"/weather",component:j})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b525b34e.chunk.js.map