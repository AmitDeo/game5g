(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[2],{115:function(e,t,n){"use strict";t.a=function(e){return e.children}},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c}));var r=n(59),a=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},u=function(e,t){-1===e.className.split(" ").indexOf(t)&&(e.className+=" "+t)};var i=function(e){var t,n,r,a=Math.floor(e/60);return a+" : "+(t=e=e-60*a,n="0",r=2,(new Array(r+1).join(n)+t).slice(-r))},c=function(e){var t=Math.floor(e/60);return(t>0?t>1?t+" minutes ":t+" minute ":"")+(e=e-60*t)+" seconds"}},14:function(e,t,n){"use strict";n.d(t,"o",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"h",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"k",(function(){return o})),n.d(t,"j",(function(){return l})),n.d(t,"m",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"l",(function(){return f})),n.d(t,"g",(function(){return b})),n.d(t,"c",(function(){return O})),n.d(t,"i",(function(){return E})),n.d(t,"p",(function(){return v})),n.d(t,"a",(function(){return A}));var r="TOGGLE_ADVANCED",a="START_GAME",u="GET_QUESTION",i="FETCH_QUESTIONS_START",c="FETCH_QUESTIONS_SUCCESS",s="FETCH_QUESTIONS_FAIL",o="INCREMENT_TICKER",l="INCREMENT_ATTEMPT",d="SET_INTERVAL_OBJ",m="CLEAR_INTERVAL_OBJ",f="RESTART_GAME",b="FINISH_GAME",O="DRAG_CARD",E="INCREMENT_ADV_ATTEMPT",v="UPDATE_SWIPE_OBJECT",A="CELEBRATED_ON"},156:function(e,t,n){e.exports={App:"App_App__15LM-",Loading:"App_Loading__1vx9j"}},157:function(e,t,n){e.exports={BacktoTbl:"Layout_BacktoTbl__3Ocxx"}},158:function(e,t,n){e.exports=n(372)},369:function(e,t,n){},370:function(e,t,n){},372:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),u=n(81),i=n.n(u),c=n(111),s=n(116),o=n(53),l=n(155),d=(n(167),n(369),n(370),n(11)),m=n(156),f=n.n(m),b=n(115),O=n(157),E=n.n(O),v=function(e){return a.a.createElement(b.a,null,a.a.createElement("div",{className:E.a.BacktoTbl},a.a.createElement("a",{href:"/",alt:"BacktoTbl"},"\xab Back to Thinkabit Lab")),e.children)},A=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,462))})),p=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,458))})),g=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(7),n.e(5)]).then(n.bind(null,461))})),j=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,465))})),T=a.a.lazy((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,466))})),_=function(e){var t=a.a.createElement(d.d,null,a.a.createElement(d.b,{path:"/cards",exact:!0,render:function(e){return a.a.createElement(T,e)}}),a.a.createElement(d.b,{path:"/cards/:id",exact:!0,render:function(e){return a.a.createElement(T,e)}}),a.a.createElement(d.b,{path:"/result",exact:!0,render:function(e){return a.a.createElement(j,e)}}),a.a.createElement(d.b,{path:"/quiz",exact:!0,render:function(e){return a.a.createElement(g,e)}}),a.a.createElement(d.b,{path:"/instructions",exact:!0,render:function(e){return a.a.createElement(p,e)}}),a.a.createElement(d.b,{path:"/",exact:!0,render:function(e){return a.a.createElement(A,e)}}),a.a.createElement(d.a,{to:"/"}));return a.a.createElement("div",null,a.a.createElement(v,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",{className:f.a.Loading},a.a.createElement("span",null))},t)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=n(59),w=n(15),S=n(14),Q=n(13),N={questions:[],loading:!1,completed:!1,currentQuestion:0,error:null,starttime:null,endtime:null,attempts:0,missed:0,isGameStarted:!1,isGameOver:!1,isAdvanced:!0,isLastQuestion:!1,lastDraggedCard:null,isDragging:!1,correctAnswers:0,swipeState:{left:0,originalOffset:0,velocity:0,timeOfLastDragEvent:0,touchStartX:0,prevTouchX:0,beingTouched:!1,height:0,intervalId:null}},C=function(e,t){return Object(Q.d)(e,{loading:!0})},D=function(e,t){var n;return Object(Q.d)(e,(n={questions:t.questions,loading:!1,completed:!0,currentQuestion:0},Object(w.a)(n,"currentQuestion",0),Object(w.a)(n,"error",null),Object(w.a)(n,"starttime",null),Object(w.a)(n,"endtime",null),Object(w.a)(n,"attempts",0),Object(w.a)(n,"missed",0),Object(w.a)(n,"isGameStarted",!1),Object(w.a)(n,"isGameOver",!1),Object(w.a)(n,"isAdvanced",!0),Object(w.a)(n,"isLastQuestion",!1),Object(w.a)(n,"lastDraggedCard",null),Object(w.a)(n,"isDragging",!1),Object(w.a)(n,"correctAnswers",0),n))},G=function(e,t){return Object(Q.d)(e,{loading:!1,completed:!1,questions:[],error:t.error})},L=function(e,t){var n=t.id,r=e.questions.length,a=!1;return n>=r-1?(n=r-1,a=!0):n<=0&&(n=0),Object(Q.d)(e,{currentQuestion:n,isLastQuestion:a})},k=function(e,t){return Object(Q.d)(e,{ticker:e.ticker+1})},q=function(e,t){return e.questions[t.currentQuestion].isAnswered=!0,e.questions[t.currentQuestion].userAnswer=t.userAnswer,e=J(e),Object(Q.d)(e,{attempts:e.attempts+1,missed:e.missed+t.missed,correctAnswers:e.correctAnswers+e.questions[t.currentQuestion].userAnswer===e.questions[t.currentQuestion].answer?1:0})},I=function(e,t){return e.questions[t.currentQuestion].isAdvAnswered=!0,e.questions[t.currentQuestion].userAdvAnswer=t.userAnswer,e=J(e),Object(Q.d)(e,{attempts:e.attempts+1,missed:e.missed+t.missed,correctAnswers:e.correctAnswers+t.is_correct?1:0})},R=function(e,t){return e.questions[t.currentQuestion].isCelebrated=!0,e},x=function(e,t){var n=new Date;return Object(Q.d)(e,{isGameStarted:!0,starttime:n.getTime(),endtime:null})},y=function(e,t){return Object(Q.d)(e,{isAdvanced:!e.isAdvanced})},B=function(e,t){return Object(Q.d)(e,{intervalObj:t.obj})},M=function(e,t){return clearInterval(e.intervalObj),Object(Q.d)(e,{intervalObj:null})},P=function(e,t){var n=0;e.questions.map((function(t){return t.answer!==t.userAnswer&&(n+=1),e.isAdvanced&&(n+=null!==t.userAdvAnswer&&1===+t.advanced_options[t.userAdvAnswer].is_correct?0:1),null}));var r=new Date;return Object(Q.d)(e,{questions:[],loading:!1,completed:!0,currentQuestion:0,error:null,isGameStarted:!1,isGameOver:!1,intervalObj:null,isLastQuestion:!1,attempts:0,missed:n,endtime:r.getTime()})},z=function(e,t){return Object(Q.d)(e,{intervalObj:null,questions:[],loading:!1,completed:!1,currentQuestion:0,error:null,isGameStarted:!1,isGameOver:!1,ticker:0,isLastQuestion:!1,attempts:0,missed:0,isAdvanced:!0,starttime:null,endtime:null})},U=function(e,t){return Object(Q.d)(e,{lastDraggedCard:t.lastDraggedCard,isDragging:t.isDragging})},F=function(e,t){return Object(Q.d)(e,{swipeState:Object(h.a)({},t.swipeObj)})},J=function(e){if(e.isAdvanced&&e.attempts>=11)return Object(Q.d)(e,{isGameOver:!0});if(!e.isAdvanced&&e.attempts>=6)return Object(Q.d)(e,{isGameOver:!0});var t=e.questions.reduce((function(t,n){return t=e.isAdvanced?t&&null!==n.userAnswer&&null!==n.userAdvAnswer:t&&null!==n.userAnswer}),!0);return Object(Q.d)(e,{isGameOver:t})},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.e:return C(e);case S.f:return D(e,t);case S.d:return G(e,t);case S.k:return k(e);case S.j:return q(e,t);case S.a:return R(e,t);case S.i:return I(e,t);case S.h:return L(e,t);case S.n:return x(e);case S.o:return y(e);case S.h:return L(e,t);case S.m:return B(e,t);case S.b:return M(e);case S.g:return P(e);case S.l:return z(e);case S.c:return U(e,t);case S.p:return F(e,t);default:return e}},H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,X=Object(o.c)({quizBuilder:V}),W=Object(o.e)(X,H(Object(o.a)(l.a))),K=a.a.createElement(s.a,{store:W},a.a.createElement(c.a,{basename:"/think-you-know-wireless-play-the-5g-game/"},a.a.createElement(_,null)));i.a.render(K,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[158,3,4]]]);
//# sourceMappingURL=main.b30f800f.chunk.js.map