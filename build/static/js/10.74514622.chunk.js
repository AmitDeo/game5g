(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[10],{373:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(u){r=!0,c=u}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},375:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"g",(function(){return G})),n.d(t,"e",(function(){return f})),n.d(t,"i",(function(){return h}));var a=n(59),r=n(14),c=n(377),i=function(){return function(e){e({type:r.e}),c.a.get("questions").then((function(t){var n,c=[];for(var i in t.data.data)c.push(Object(a.a)(Object(a.a)({},t.data.data[i]),{},{id:i,isAnswered:!1,isAdvAnswered:!1,userAnswer:null,userAdvAnswer:null,isCelebrated:!1}));e((n=c,{type:r.f,questions:n}))})).catch((function(t){var n;e((n=t,{type:r.d,error:n}))}))}},o=function(){return function(e){e({type:r.o})}},u=function(e){return function(t){t(function(e){return{type:r.h,id:e}}(e))}},l=function(){return function(e){e({type:r.n})}},s=function(e,t,n){return function(a){a(function(e,t,n){return{type:r.j,missed:e,currentQuestion:t,userAnswer:n}}(e,t,n))}},f=function(e,t,n,a){return function(c){c(function(e,t,n,a){return{type:r.i,missed:e,currentQuestion:t,userAnswer:n,is_correct:a}}(e,t,n,a))}},d=function(){return function(e){e({type:r.g})}},G=function(){return function(e){e({type:r.l})}},h=function(e){return function(t){t(function(e){return{type:r.p,swipeObj:e}}(e))}}},377:function(e,t,n){"use strict";var a=n(380),r=n.n(a).a.create({baseURL:"https://dev-tbl8.pantheonsite.io/apis/quiz/"});t.a=r},452:function(e,t,n){e.exports={SingleCard:"SingleCard_SingleCard__wAVX7",InnerBox:"SingleCard_InnerBox__1ZB9Y",TitleText:"SingleCard_TitleText__2ViUK",GraphicContainer:"SingleCard_GraphicContainer__2XH5p",BottomText:"SingleCard_BottomText__2eNtr",Graphic:"SingleCard_Graphic__eio8m",Graphic1G:"SingleCard_Graphic1G__3HOWC",Graphic2G:"SingleCard_Graphic2G__3KeIi",Graphic3G:"SingleCard_Graphic3G__3lMlE",Graphic4G:"SingleCard_Graphic4G__yWG_c",Graphic5G:"SingleCard_Graphic5G__3BN7w"}},453:function(e,t,n){e.exports={CardCarausel:"GCards_CardCarausel__yQYe_",CloseCarausel:"GCards_CloseCarausel__1yt3t",LeftArrow:"GCards_LeftArrow__8R-az",RightArrow:"GCards_RightArrow__23aS6",SelectorDots:"GCards_SelectorDots__YT7qn",ActiveDot:"GCards_ActiveDot__1JkdY"}},466:function(e,t,n){"use strict";n.r(t),n.d(t,"GCards",(function(){return h}));var a=n(373),r=n(1),c=n.n(r),i=n(59),o=n(116),u=n(452),l=n.n(u),s=n(375),f=function(e){var t=Object(r.useRef)(null),n=Object(r.useState)([l.a.Graphic]),u=Object(a.a)(n,2),f=u[0],d=u[1],G=Object(r.useState)(""),h=Object(a.a)(G,2),p=h[0],b=h[1],v=Object(r.useState)(""),m=Object(a.a)(v,2),_=m[0],g=m[1],C=Object(o.b)(),y=Object(o.c)((function(e){return e.quizBuilder.swipeState}));Object(r.useEffect)((function(){switch(e.cardname){case"1G":d([l.a.Graphic,l.a.Graphic1G]),b("Analog"),g("1980's");break;case"2G":d([l.a.Graphic,l.a.Graphic2G]),b("Digital"),g("1990's");break;case"3G":d([l.a.Graphic,l.a.Graphic3G]),b("Digital (CDMA)"),g("2000's");break;case"4G":d([l.a.Graphic,l.a.Graphic4G]),b("LTE"),g("2010's");break;case"5G":default:d([l.a.Graphic,l.a.Graphic5G]),b("NR"),g("2019")}C(s.i({left:0,originalOffset:0,velocity:0,timeOfLastDragEvent:0,touchStartX:0,prevTouchX:0,beingTouched:!1,height:110,intervalId:null}))}),[e.cardname,t.current]);var w=function(){var e=y.left,t=y.velocity,n=y.beingTouched;!n&&e<-.01?((e+=t+=.33)<-350&&(window.clearInterval(y.intervalId),O()),C(s.i(Object(i.a)(Object(i.a)({},y),{},{left:e,velocity:t})))):n||(e=0,t=0,window.clearInterval(y.intervalId),C(s.i(Object(i.a)(Object(i.a)({},y),{},{left:e,velocity:t,intervalId:null,originalOffset:0}))))},O=function(t){C(s.i(Object(i.a)(Object(i.a)({},y),{},{left:0}))),window.setTimeout((function(){return e.onSwipe(function(t){var n=!1;if(t)switch(e.cardname){case"1G":n="2G";break;case"2G":n="3G";break;case"3G":n="4G";break;case"4G":n="5G";break;case"5G":default:n="1G"}else switch(e.cardname){case"1G":n="5G";break;case"2G":n="1G";break;case"3G":n="2G";break;case"4G":n="3G";break;case"5G":n="4G";break;default:n="1G"}return n}(t))}),250)},S=function(e){null!==y.intervalId&&window.clearInterval(y.intervalId),C(s.i(Object(i.a)(Object(i.a)({},y),{},{timeOfLastDragEvent:Date.now(),touchStartX:e,beingTouched:!0,intervalId:null})))},j=function(e){if(y.beingTouched){var t=e,n=Date.now(),a=n-y.timeOfLastDragEvent,r=20*(t-y.prevTouchX)/a,c=t-y.touchStartX+y.originalOffset;c<-50?O(!0):c>50&&O(!1),C(s.i(Object(i.a)(Object(i.a)({},y),{},{left:c,velocity:r,timeOfLastDragEvent:n,prevTouchX:t})))}},k=function(){C(s.i(Object(i.a)(Object(i.a)({},y),{},{touchStartX:0,beingTouched:!1,intervalId:window.setInterval(w(),33)})))},E=function(){k()};return c.a.createElement("div",{className:l.a.SingleCard,ref:t,onTouchStart:function(e){return function(e){e.preventDefault(),S(e.targetTouches[0].clientX)}(e)},onTouchMove:function(e){return function(e){j(e.targetTouches[0].clientX)}(e)},onTouchEnd:function(){k()},onMouseDown:function(e){return function(e){e.preventDefault(),S(e.clientX)}(e)},onMouseMove:function(e){return function(e){j(e.clientX)}(e)},onMouseUp:function(){return E()},onMouseLeave:function(){E()}},c.a.createElement("div",{className:l.a.InnerBox,style:y.beingTouched?{position:"relative",left:y.left}:{position:"relative",left:y.left,transition:"all 250ms ease"}},c.a.createElement("div",{className:l.a.TitleText},c.a.createElement("h2",{style:"5G"==e.cardname?{opacity:0}:{opacity:1}},e.cardname)),c.a.createElement("div",{className:l.a.GraphicContainer},c.a.createElement("div",{className:f.join(" ")})),c.a.createElement("div",{className:l.a.BottomText},c.a.createElement("h3",null,p),c.a.createElement("h4",null,_))))},d=n(453),G=n.n(d),h=function(e){var t=Object(r.useState)("1G"),n=Object(a.a)(t,2),i=n[0],o=n[1],u=Object(r.useState)(["1G","2G","3G","4G","5G"]),l=Object(a.a)(u,2),s=l[0];l[1];Object(r.useEffect)((function(){e.location.cardname&&o(e.location.cardname)}),[e.location.cardname,o]);var d,h=function(e,t){if(t)switch(e){case"1G":t="2G";break;case"2G":t="3G";break;case"3G":t="4G";break;case"4G":t="5G";break;case"5G":default:t="1G"}else switch(e){case"1G":t="5G";break;case"2G":t="1G";break;case"3G":t="2G";break;case"4G":t="3G";break;case"5G":t="4G";break;default:t="1G"}o(t)},p=s.map((function(e,t){return c.a.createElement("li",{key:t,className:i===e?G.a.ActiveDot:""},c.a.createElement("a",{href:"#",onClick:function(t){return function(e,t){e.preventDefault(),o(t)}(t,e)}},e))}));return d=c.a.createElement("ul",{className:G.a.SelectorDots},p),c.a.createElement("div",{className:G.a.CardCarausel},c.a.createElement("span",{className:G.a.CloseCarausel,onClick:function(t){return function(t){t.preventDefault(),e.history.push({pathname:"/quiz"})}(t)}},"Close"),c.a.createElement(f,{cardname:i,onSwipe:function(e){return function(e){o(e)}(e)}}),d,"1G"!==i&&c.a.createElement("span",{className:G.a.LeftArrow,onClick:function(){return h(i)}},"Left"),"5G"!==i&&c.a.createElement("span",{className:G.a.RightArrow,onClick:function(){return h(i,!0)}},"Right"))};t.default=h}}]);
//# sourceMappingURL=10.74514622.chunk.js.map