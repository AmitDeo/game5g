(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[8],{373:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,u=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){a=!0,u=i}finally{try{r||null==o.return||o.return()}finally{if(a)throw u}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},375:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return f})),n.d(t,"i",(function(){return p}));var r=n(59),a=n(14),u=n(377),c=function(){return function(e){e({type:a.e}),u.a.get("questions").then((function(t){var n,u=[];for(var c in t.data.data)u.push(Object(r.a)(Object(r.a)({},t.data.data[c]),{},{id:c,isAnswered:!1,isAdvAnswered:!1,userAnswer:null,userAdvAnswer:null,isCelebrated:!1}));e((n=u,{type:a.f,questions:n}))})).catch((function(t){var n;e((n=t,{type:a.d,error:n}))}))}},o=function(){return function(e){e({type:a.o})}},i=function(e){return function(t){t(function(e){return{type:a.h,id:e}}(e))}},l=function(){return function(e){e({type:a.n})}},s=function(e,t,n){return function(r){r(function(e,t,n){return{type:a.j,missed:e,currentQuestion:t,userAnswer:n}}(e,t,n))}},f=function(e,t,n,r){return function(u){u(function(e,t,n,r){return{type:a.i,missed:e,currentQuestion:t,userAnswer:n,is_correct:r}}(e,t,n,r))}},d=function(){return function(e){e({type:a.g})}},m=function(){return function(e){e({type:a.l})}},p=function(e){return function(t){t(function(e){return{type:a.p,swipeObj:e}}(e))}}},377:function(e,t,n){"use strict";var r=n(380),a=n.n(r).a.create({baseURL:"https://dev-tbl8.pantheonsite.io/apis/quiz/"});t.a=a},381:function(e,t,n){"use strict";var r=n(1),a=n.n(r),u=n(382),c=n.n(u);t.a=function(e){return a.a.createElement("button",{className:[c.a.Button,c.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)}},382:function(e,t,n){e.exports={Button:"Button_Button__2Ajf-",Play:"Button_Play__1C743",PulseBtn:"Button_PulseBtn__2bUzW",pulse:"Button_pulse__3NZBm",Danger:"Button_Danger__2nfno"}},449:function(e,t,n){e.exports={Modal:"Modal_Modal__32mLz"}},450:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__Avhg6"}},451:function(e,t,n){e.exports={ResultScreen:"ResultScreen_ResultScreen__1FgZ6",IEScreen:"ResultScreen_IEScreen__3V3na",Invisible:"ResultScreen_Invisible__BS5fe",ModeChanger:"ResultScreen_ModeChanger__UYQAI",On:"ResultScreen_On__17UN-",LastBtn:"ResultScreen_LastBtn__QQk6x"}},465:function(e,t,n){"use strict";n.r(t);var r=n(373),a=n(1),u=n.n(a),c=n(116),o=n(379),i=n(375),l=n(381),s=n(449),f=n.n(s),d=n(115),m=n(450),p=n.n(m),h=function(e){return e.show?u.a.createElement("div",{className:p.a.Backdrop,onClick:e.clicked}):null},b=u.a.memo((function(e){return u.a.createElement(d.a,null,u.a.createElement(h,{show:e.show,clicked:e.modalClosed}),u.a.createElement("div",{className:f.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))}),(function(e,t){return t.show===e.show&&t.children===e.children})),y=n(13),_=n(451),v=n.n(_);t.default=function(e){var t=Object(a.useState)([v.a.ModeChanger]),n=Object(r.a)(t,2),s=n[0],f=n[1],m=Object(c.b)(),p=Object(a.useState)(["Very Nice"]),h=Object(r.a)(p,2),_=h[0],j=h[1],O=Object(a.useState)(!1),E=Object(r.a)(O,2),w=E[0],S=E[1],g=Object(a.useState)(""),B=Object(r.a)(g,2),A=B[0],k=B[1],C=Object(c.c)((function(e){return e.quizBuilder.starttime})),M=Object(c.c)((function(e){return e.quizBuilder.endtime})),N=Object(c.c)((function(e){return e.quizBuilder.missed})),I=Object(c.c)((function(e){return e.quizBuilder.isAdvanced})),R=Object(a.useCallback)((function(){return m(i.c())}),[]);Object(a.useEffect)((function(){R()}),[R]),Object(a.useEffect)((function(){f(I?[v.a.ModeChanger,v.a.On]:[v.a.ModeChanger]);var e=0;j((e=I?100*(10-+N)/10:100*(5-+N)/5)>=95?"Exceptional Job":e>=80&&e<95?"Very Nice":e<80&&e>=50?"You can do better":"Keep Trying")}),[I,N]);var x=function(e,t){e.preventDefault(),S(!0),k(t)};return u.a.createElement(d.a,null,u.a.createElement("div",{className:o.isIE?[v.a.ResultScreen,v.a.IEScreen].join(" "):v.a.ResultScreen},u.a.createElement("h1",null,_),u.a.createElement("p",null,"You missed ",N," items in ",Object(y.c)(Math.floor((M-C)/1e3)),". Watch the video below if you would like a refresher."),u.a.createElement(l.a,{btnType:"Play",clicked:function(e){return x(e,"https://player.vimeo.com/video/458216514?width=640&height=480&iframe=true&autoplay=1?autoplay=1")}},"5G Explained"),u.a.createElement("div",{className:v.a.Invisible},u.a.createElement("div",{className:s.join(" "),onClick:function(){f(I?[v.a.ModeChanger,v.a.On]:[v.a.ModeChanger]),m(i.a())}},u.a.createElement("span",null)),u.a.createElement("h3",null,"Advanced Mode: ",I?"ON":"OFF")),u.a.createElement("div",{className:v.a.LastBtn},u.a.createElement(l.a,{btnType:"Success",clicked:function(){e.history.push({pathname:"/"})}},"Play Again"))),u.a.createElement(b,{show:w,modalClosed:function(){S(!1),k("")}},u.a.createElement("iframe",{src:A,allow:"autoplay; fullscreen",allowFullScreen:!0,className:v.a.IframeClass,frameBorder:"0"})))}}}]);
//# sourceMappingURL=8.1025b206.chunk.js.map