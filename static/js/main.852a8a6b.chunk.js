(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={container:"Feedback_container__NZjOR",title:"Feedback_title__1TO_-",title__statistics:"Feedback_title__statistics__3OUDH"}},function(t,e,a){t.exports={statistics__list:"Statistics_statistics__list__33me1",item__statistics:"Statistics_item__statistics__etO-c"}},function(t,e,a){t.exports={button__container:"FeedbackOptions_button__container__1Pd8b",button__feedback:"FeedbackOptions_button__feedback__XM-9i",good:"FeedbackOptions_good__b1j20",neutral:"FeedbackOptions_neutral___p_Mx",bad:"FeedbackOptions_bad__5ylMs"}},,,,,,function(t,e,a){t.exports={Notification:"Notification_Notification__aEZFg"}},,,,,,,function(t,e,a){},function(t,e,a){},,,function(t,e,a){"use strict";a.r(e);var c=a(1),s=a.n(c),i=a(6),n=a.n(i),o=(a(17),a(18),a(2)),r=a.n(o),_=a(7),b=a(8),d=a(9),l=a(12),u=a(11),j=a(4),O=a.n(j),h=a(0),f=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(h.jsx)("div",{className:O.a.button__container,children:e.map((function(t){return Object(h.jsx)("button",{className:"".concat(O.a.button__feedback," ").concat(O.a[t]),onClick:function(){a(t)},children:t},t)}))})},k=a(3),x=a.n(k),m=function(t){var e=t.good,a=t.neutral,c=t.bad,s=t.total,i=t.positive;return Object(h.jsxs)("ul",{className:x.a.statistics__list,children:[Object(h.jsxs)("li",{className:x.a.item__statistics,children:["Good:",e]}),Object(h.jsxs)("li",{className:x.a.item__statistics,children:["Neutral:",a]}),Object(h.jsxs)("li",{className:x.a.item__statistics,children:["Bad:",c]}),Object(h.jsxs)("li",{children:["Total:",s]}),Object(h.jsxs)("li",{children:["Positive Feedback:",i,"%"]})]})},p=a(10),v=a.n(p),F=function(t){var e=t.message,a=void 0===e?"":e;return Object(h.jsx)(h.Fragment,{children:a&&Object(h.jsx)("span",{className:v.a.Notification,children:a})})},g=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(b.a)(this,a);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.onSetVoice=function(e){t.setState((function(t){return Object(_.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return Object.keys(t.state).reduce((function(e,a){return e+t.state[a]}),0)},t.countPositiveFeedbackPercentage=function(){return Math.round(t.state.good/t.countTotalFeedback()*100)},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this.countTotalFeedback(),e=this.countPositiveFeedbackPercentage(),a=Object.keys(this.state);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:r.a.title,children:"Please leave feedback"}),Object(h.jsx)(f,{options:a,onLeaveFeedback:this.onSetVoice}),Object(h.jsxs)("div",{className:r.a.statistics,children:[Object(h.jsx)("h2",{className:r.a.title__statistics,children:"Statistics"}),t>0?Object(h.jsx)(m,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:t,positive:e}):Object(h.jsx)(F,{message:"There is no feedback"})]})]})}}]),a}(c.Component);var N=function(){return Object(h.jsx)("div",{className:r.a.container,children:Object(h.jsx)(g,{})})};a(20);n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.852a8a6b.chunk.js.map