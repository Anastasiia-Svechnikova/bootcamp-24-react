"use strict";(self.webpackChunkbootcamp_24_react=self.webpackChunkbootcamp_24_react||[]).push([[820],{4820:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r=n(885),s=n(2791),a=n(2982),c=n(1413),o=n(1694),u=n.n(o),i=n(9085),l=n(4165),m=n(5861),d=n(8383),f={limit:4},p=function(){var t=(0,m.Z)((0,l.Z)().mark((function t(e,n){var r,s;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.mK.post("/posts/".concat(e,"/comments"),n);case 2:return r=t.sent,s=r.data,t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=(0,m.Z)((0,l.Z)().mark((function t(e){var n,r,s,a=arguments;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},t.next=3,d.LY.get("/posts/".concat(e,"/comments"),{params:(0,c.Z)((0,c.Z)({},f),n)});case 3:return r=t.sent,s=r.data,t.abrupt("return",s);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=(0,m.Z)((0,l.Z)().mark((function t(e){return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d.mK.delete("/comments/".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=n(184),v=function(t){var e=t.setComments,n=(0,s.useState)(!1),o=(0,r.Z)(n,2),l=o[0],m=o[1],d=(0,s.useState)(""),f=(0,r.Z)(d,2),h=f[0],b=f[1];return(0,x.jsxs)("form",{action:"#",className:"my-5",onSubmit:function(t){t.preventDefault(),h.trim()?(m(!0),p(10,{content:h}).then((function(t){i.Am.success("You have successfully created a new comment!"),e((function(e){return(0,c.Z)((0,c.Z)({},e),{},{data:[t].concat((0,a.Z)(e.data))})})),b("")})).catch((function(){i.Am.error("Something went wrong!")})).finally((function(){return m(!1)}))):i.Am.error("Fill all required fields!")},children:[(0,x.jsxs)("label",{className:"d-block form-label",children:[(0,x.jsx)("p",{children:"Post content"}),(0,x.jsx)("textarea",{rows:"5",value:h,onChange:function(t){return b(t.target.value)},className:"form-control",placeholder:"Write your feedback"})]}),(0,x.jsxs)("button",{type:"submit",className:u()("btn btn-primary my-2",l?"disabled":""),children:[l&&(0,x.jsx)("span",{className:"spinner-grow spinner-grow-sm mr-2"}),"Submit"]})]})},g=n(9353),w=function(t){var e,n=t.comments,a=t.setComments,o=(0,s.useState)(!0),u=(0,r.Z)(o,2),l=u[0],m=u[1],d=(0,s.useCallback)((function(){return h(10).then(a).catch((function(){i.Am.error("Something went wrong!")}))}),[10,a]);(0,s.useEffect)((function(){m(!0),d().finally((function(){return m(!1)}))}),[d]);return l?(0,x.jsx)("div",{className:"spinner-border text-primary",children:(0,x.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):null!==n&&void 0!==n&&null!==(e=n.data)&&void 0!==e&&e.length?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("ul",{className:"list-group",children:n.data.map((function(t){return(0,x.jsxs)("li",{className:"list-group-item list-group-item-action py-4",children:[(0,x.jsx)("div",{className:"d-flex w-100 justify-content-between",children:(0,x.jsx)("small",{children:(0,g.Z)(new Date(t.created_at),new Date,{addSuffix:!0})})}),(0,x.jsx)("div",{className:"mb-4 mt-3",dangerouslySetInnerHTML:{__html:t.content.replace(/\n/g,"<br/>")}}),(0,x.jsxs)("div",{className:"btn-group",children:[(0,x.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return e=t.id,void b(e).then((function(){a((function(t){return(0,c.Z)((0,c.Z)({},t),{},{data:t.data.filter((function(t){return t.id!==e}))})})),i.Am.success("You have successfully deleted your comment!")})).catch((function(){i.Am.error("Something went wrong!")}));var e},children:"Delete comment"}),(0,x.jsx)("button",{type:"button",className:"btn btn-outline-primary",children:"Edit comment"})]})]},t.id)}))})}):(0,x.jsx)("p",{children:"No comments yet!"})},y=function(){var t=(0,s.useState)(null),e=(0,r.Z)(t,2),n=e[0],a=e[1];return(0,s.useEffect)((function(){window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v,{setComments:a}),(0,x.jsx)(w,{comments:n,setComments:a})]})}}}]);
//# sourceMappingURL=820.3e76f263.chunk.js.map