(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{"1Uwi":function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),i=t("MUpH"),o=t("vOnD");function a(){var n=Object(i.a)(["\n\n"]);return a=function(){return n},n}var u=o.a.div(a());function l(){var n=Object(i.a)(["\n  min-width: 100px;\n  transition: all 0.5s linear;\n  display: flex;\n  a {\n    cursor: pointer;\n    text-decoration: none;\n    outline: none;\n    color: white;\n    &:active {\n      outline: none;\n      color: white;\n    }\n    &:focus {\n      outline: none;\n      color: white;\n    }\n    :visited {\n      outline: none;\n      color: white;\n    }\n  }\n"]);return l=function(){return n},n}function c(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  transition: all 0.5s linear;\n  margin-right: 16px;\n  margin-top: 16px;\n"]);return c=function(){return n},n}function s(){var n=Object(i.a)(["\n  font-size: 24px;\n  transition: all 0.5s linear;\n"]);return s=function(){return n},n}function f(){var n=Object(i.a)(["\n  font-size: 48px;\n  transition: all 0.5s linear;\n  text-align: center;\n  &.collapsed {\n    text-align: left;\n  }\n"]);return f=function(){return n},n}function d(){var n=Object(i.a)(["\n  display: flex;\n  text-align: center;\n  transition: all 0.5s linear;\n"]);return d=function(){return n},n}function p(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: linear-gradient(\n    -60deg,\n    rgb(49 24 250 / 30%),\n    rgb(205 200 251 / 60%)\n  );\n  color: white;\n  transition: all 0.5s linear-out;\n  &.unset {\n    padding: ",";\n    justify-content: center;\n  }\n  &.collapsed {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    background-image: ",";\n    padding: 30px 30px 20px 30px;\n  }\n"]);return p=function(){return n},n}var m=o.a.div(p(),(function(n){return w(n.yAxis)+"px 30px 20px 30px"}),(function(n){return"linear-gradient(-"+v(n.yAxis)+"deg, rgb(49 24 250 / 30%),\n    rgb(205 200 251 / 60%))"})),v=function(n){return n},w=function(n){return 400-n},b=o.a.div(d()),g=o.a.div(f()),x=o.a.div(s()),h=o.a.div(c()),y=o.a.div(l()),E=function(n){var e=n.yAxis,t=r.useState(!1),i=t[0],o=t[1];return r.useEffect((function(){e>180&&o(!0),e<180&&i&&setTimeout((function(){o(!1)}),100)}),[e]),r.createElement(m,{className:i?"collapsed":"unset",yAxis:e,id:"head-navbar-wrapper"},r.createElement(b,null,r.createElement(g,{className:i?"collapsed":"",id:"head-navbar-wrapper-title"},"Ronit Oommen"),!i&&r.createElement(x,{id:"head-navbar-wrapper-title"},"Web Engineer")),i&&r.createElement(h,{id:"head-navbar-wrapper-other-links"},r.createElement(y,{id:"head-navbar-wrapper-link-1"},r.createElement("a",{href:"https://github.com/ronit123321",target:"_blank"},"Github")),r.createElement(y,{id:"head-navbar-wrapper-link-2"},r.createElement("a",{href:"https://www.linkedin.com/in/ronit-oommen-584596102/",target:"_blank"},"LinkedIn")),r.createElement(y,{id:"head-navbar-wrapper-link-3"},r.createElement("a",{href:"mailto:ronit.oommen@gmail.com"},"Email Me"))))};function O(){var n=Object(i.a)(["\n  display: flex;\n  min-height: 2400px;\n  text-align: center;\n"]);return O=function(){return n},n}var P=o.a.div(O()),j=function(){return r.createElement(P,null,"Hi I am the data for here")},k=t("lTFH");e.default=function(){var n,e,t,i,o,a,l,c,s=(n=r.useState(0),e=n[0],t=n[1],i=r.useRef({x:10,y:150}),o=r.useRef({x:0,y:0}),a=null,l=function(n,e){return Math.round(n.current[e])},c=function(n,r){n.current=r,null===a&&(a=setTimeout((function(){return t(e+1)}),300))},{getElementX:function(){return l(i,"x")},getElementY:function(){return l(i,"y")},getViewportX:function(){return l(o,"x")},getViewportY:function(){return l(o,"y")},setElementPosition:function(n){return c(i,n)},setViewportPosition:function(n){return c(o,n)},renderCount:e}),f=r.useRef(),d=r.useState(0),p=d[0],m=d[1];return Object(k.useScrollPosition)((function(n){var e=n.currPos;m(e.y)}),[s],null,!0),r.createElement(u,null,r.createElement("div",{style:{backgroundImage:"url(https://svgur.com/i/CPw.svg)",backgroundSize:"initial",backgroundRepeat:"no-repeat"},ref:f},r.createElement(E,{yAxis:p})),r.createElement(j,null))}},"4IfK":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useIsomorphicLayoutEffect=void 0;var r=t("q1tI"),i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;e.useIsomorphicLayoutEffect=i},OTAv:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useScrollPosition=u;var r=t("q1tI"),i=t("4IfK"),o="undefined"!=typeof window;function a(n){var e=n.element,t=n.useWindow;if(!o)return{x:0,y:0};var r=(e?e.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:r.left,y:r.top}}function u(n,e,t,u,l){var c=(0,r.useRef)(a({useWindow:u})),s=null,f=function(){var e=a({element:t,useWindow:u});n({prevPos:c.current,currPos:e}),c.current=e,s=null};(0,i.useIsomorphicLayoutEffect)((function(){if(o){var n=function(){l?null===s&&(s=setTimeout(f,l)):f()};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}}),e)}u.defaultProps={deps:[],element:!1,useWindow:!1,wait:null}},QeBL:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),i=t("YwZP"),o=t("1Uwi");e.default=function(){return r.createElement(i.Router,null,r.createElement(i.Redirect,{from:"/",to:"home",noThrow:!0}),r.createElement(o.default,{path:"/home"}))}},lTFH:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useScrollPosition",{enumerable:!0,get:function(){return r.useScrollPosition}});var r=t("OTAv")}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4299fa6996737c0311ff.js.map