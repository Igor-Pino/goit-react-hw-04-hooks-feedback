(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{1:function(e,t,c){e.exports={container:"Style_container___lmOX",button:"Style_button__3ns9U",score:"Style_score__17KRp"}},10:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(5),r=c.n(a),i=(c(10),c(1)),o=c.n(i),j=c(0);var l=function(e){var t=e.children;return Object(j.jsxs)("div",{className:o.a.container,children:[Object(j.jsx)("h1",{className:o.a.title,children:"Please leave feedback"}),t]})},b=c(3);var d=function(e){var t=e.options,c=e.onOptionBtn;return Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)("button",{className:o.a.button,type:"button",onClick:function(){return c(e)},children:e},e)}))})};var u=function(){return Object(j.jsx)("p",{className:o.a.notification,children:"No feedback given"})};var O=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),r=Object(b.a)(a,2),i=r[0],l=r[1],O=Object(n.useState)(0),h=Object(b.a)(O,2),x=h[0],p=h[1],m=Object.keys({good:c,neutral:i,bad:x}),f=function(){return c+x+i};return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{onOptionBtn:function(e){switch(e){case"good":s((function(e){return c+1}));break;case"neutral":l((function(e){return i+1}));break;case"bad":p((function(e){return x+1}))}},options:m}),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h2",{className:o.a.statisticTitle,children:"Statistic"})}),0===f()&&Object(j.jsx)(u,{}),0!==f()&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:o.a.score,children:"Good:"}),Object(j.jsx)("span",{className:o.a.amount,children:c})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:o.a.score,children:"Neutral:"}),Object(j.jsx)("span",{className:o.a.amount,children:i})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:o.a.score,children:"Bad:"}),Object(j.jsx)("span",{className:o.a.amount,children:x})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:o.a.score,children:"Total:"}),Object(j.jsx)("span",{className:o.a.amount,children:f()})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:o.a.score,children:"Positiv feedback:"}),Object(j.jsxs)("span",{className:o.a.amount,children:[(c/f()*100).toFixed(),"%"]})]})]})]})};function h(){return Object(j.jsx)("div",{children:Object(j.jsx)(l,{children:Object(j.jsx)(O,{})})})}c(12);r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.querySelector("#root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.153e3c79.chunk.js.map