(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,c){t.exports={container:"Feedback_container__K3BSP",title:"Feedback_title__3pwqc",button__container:"Feedback_button__container__34n7y",button__feedback:"Feedback_button__feedback__381gL",title__statistics:"Feedback_title__statistics__3Y6Gx",statistics__list:"Feedback_statistics__list__BSb0f",item__statistics:"Feedback_item__statistics__hdqcm"}},13:function(t,e,c){},14:function(t,e,c){},17:function(t,e,c){"use strict";c.r(e);var a=c(2),s=c.n(a),n=c(4),i=c.n(n),o=(c(13),c(14),c(1)),r=c.n(o),d=c(5),l=c(6),u=c(8),b=c(7),_=c(0),j=function(t){Object(u.a)(c,t);var e=Object(b.a)(c);function c(){var t;Object(d.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.counterGood=function(){t.setState((function(t){return{good:t.good+1}}))},t.counterNeutral=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.counterBad=function(){t.setState((function(t){return{bad:t.bad+1}}))},t.countTotalFeedback=function(){return Object.keys(t.state).reduce((function(e,c){return e+t.state[c]}),0)},t.countPositiveFeedbackPercentage=function(){return Math.round(t.state.good/t.countTotalFeedback()*100)},t}return Object(l.a)(c,[{key:"render",value:function(){var t=this.countTotalFeedback(),e=this.countPositiveFeedbackPercentage();return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:r.a.title,children:"Please leave feedback"}),Object(_.jsxs)("div",{className:r.a.button__container,children:[Object(_.jsx)("button",{className:r.a.button__feedback,onClick:this.counterGood,children:"Good"}),Object(_.jsx)("button",{className:r.a.button__feedback,onClick:this.counterNeutral,children:"Neutral"}),Object(_.jsx)("button",{className:r.a.button__feedback,onClick:this.counterBad,children:"Bad"})]}),Object(_.jsxs)("div",{className:r.a.statistics,children:[Object(_.jsx)("h2",{className:r.a.title__statistics,children:"Statistics"}),t>0?Object(_.jsxs)("ul",{className:r.a.statistics__list,children:[Object(_.jsxs)("li",{className:r.a.item__statistics,children:["Good:",this.state.good]}),Object(_.jsxs)("li",{className:r.a.item__statistics,children:["Neutral:",this.state.neutral]}),Object(_.jsxs)("li",{className:r.a.item__statistics,children:["Bad:",this.state.bad]}),Object(_.jsxs)("li",{children:["Total:",t]}),Object(_.jsxs)("li",{children:["Positive Feedback:",e,"%"]})]}):"There is no feedback"]})]})}}]),c}(a.Component);var h=function(){return Object(_.jsx)("div",{className:r.a.container,children:Object(_.jsx)(j,{})})};c(16);i.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.bc95ffd0.chunk.js.map