"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[455],{5871:function(e,n,s){s.r(n),s.d(n,{default:function(){return b}});var t=s(4165),a=s(5861),r=s(4942),c=s(1413),i=s(9439),o=s(2791),l=s(1694),u=s.n(l),p=s(7689),d=s(5872),x=s(7692),m=s(9126),f=s(8820),v=s.p+"static/media/signup-login.1e1a94103238f490909f.jpg",h=s(3442),g=s(9032),j=s(5923),N=s(1904),w=s(184),k=function(e){var n=e.options,s=e.onToggleCallBack,t=(0,o.useState)(!0),a=(0,i.Z)(t,2),r=a[0],c=a[1];return(0,w.jsxs)("div",{className:"common-cmp--text_toggler__container",onClick:function(){s&&s(),c(!r)},children:[(0,w.jsx)("input",{type:"checkbox"}),(0,w.jsx)("span",{className:u()("option",{active:r}),children:n[0]}),(0,w.jsx)("span",{className:u()("option",{active:!r}),children:n[1]}),(0,w.jsx)("span",{className:"indicator"})]})},b=function(){var e=(0,o.useState)(!1),n=(0,i.Z)(e,2),s=n[0],l=n[1],b=(0,o.useState)(!1),Z=(0,i.Z)(b,2),y=Z[0],C=Z[1],S=(0,o.useState)({email:"",password:""}),_=(0,i.Z)(S,2),T=_[0],W=_[1],B=(0,o.useState)(""),I=(0,i.Z)(B,2),q=I[0],D=I[1],K=(0,p.s0)(),L=function(e,n){W((function(s){return(0,c.Z)((0,c.Z)({},s),{},(0,r.Z)({},e,n))}))},M=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.W4.googleSignupLogin(n);case 3:s=e.sent,z(s),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),D("\u05ea\u05e7\u05dc\u05d4 \u05d6\u05de\u05e0\u05d9\u05ea \u05d1\u05d7\u05d9\u05d1\u05d5\u05e8 \u05dc\u05d7\u05e9\u05d1\u05d5\u05df, \u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05e9\u05e0\u05d9\u05ea");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),U=(0,d.Nq)({onSuccess:function(e){var n=e.code;return M(n)},flow:"auth-code"}),V=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var a,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!s){e.next=7;break}return e.next=4,j.W4.signup(n);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,j.W4.login(n);case 9:e.t0=e.sent;case 10:(a=e.t0)._id&&z(a),e.next=18;break;case 14:e.prev=14,e.t1=e.catch(0),r=e.t1.message,D(r);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),z=function(e){(0,h.x4)(e),K("/"),s?(0,g.u)({text:"\u05e0\u05e8\u05e9\u05de\u05ea \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4!",title:"\u05d1\u05e8\u05d5\u05da \u05d4\u05d1\u05d0 \u05dc\u05d0\u05ea\u05e8!",type:"success"}):(0,g.u)({text:"\u05d4\u05ea\u05d7\u05d1\u05e8\u05ea \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4!",title:"\u05d1\u05e8\u05d5\u05da \u05d4\u05d1\u05d0 \u05dc\u05d0\u05ea\u05e8!",type:"success"})};return(0,w.jsx)("main",{className:"user-pages--login-signup__container",children:(0,w.jsxs)("div",{className:"layout",children:[(0,w.jsx)("img",{src:v,alt:s?"\u05d4\u05e6\u05d8\u05e8\u05e3 \u05dc\u05de\u05db\u05d1\u05d9\u05e4\u05d3\u05d9\u05d4!":"\u05d4\u05ea\u05d7\u05d1\u05e8 \u05dc\u05de\u05e9\u05ea\u05de\u05e9!"}),(0,w.jsxs)("div",{className:"content-container",children:[(0,w.jsx)(k,{options:["\u05d4\u05ea\u05d7\u05d1\u05e8","\u05d4\u05d9\u05e8\u05e9\u05dd"],onToggleCallBack:function(){return l(!s)}}),(0,w.jsx)(N.U,{text:s?"\u05d4\u05d9\u05e8\u05e9\u05dd \u05dc\u05de\u05db\u05d1\u05d9\u05e4\u05d3\u05d9\u05d4":"\u05d1\u05e8\u05d5\u05da \u05d4\u05e9\u05d1 \u05dc\u05de\u05db\u05d1\u05d9\u05e4\u05d3\u05d9\u05d4!",Icon:s?f.vM4:x.yf9}),(0,w.jsxs)("form",{className:"form-container",onSubmit:function(e){e.preventDefault();var n=T.email,s=T.password;n&&s&&V(T)},children:[(0,w.jsxs)("div",{className:"field",children:[(0,w.jsx)("label",{children:"\u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9"}),(0,w.jsx)("input",{type:"email",name:"email",placeholder:"\u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9",value:T.email,className:u()({pristine:T.email}),onChange:function(e){var n=e.currentTarget,s=n.name,t=n.value;return L(s,t)}})]}),(0,w.jsxs)("div",{className:"field",children:[(0,w.jsx)("label",{children:"\u05e1\u05d9\u05e1\u05de\u05d4"}),(0,w.jsx)("input",{type:y?"text":"password",name:"password",placeholder:"\u05e1\u05d9\u05e1\u05de\u05d4",className:T.password?"pristine":"",value:T.password,onChange:function(e){var n=e.currentTarget,s=n.name,t=n.value;return L(s,t)}}),T.password&&(0,w.jsx)("span",{className:"show-password-icon",onClick:function(){return C(!y)},children:y?(0,w.jsx)(f.p3W,{}):(0,w.jsx)(f.w8I,{})})]}),q&&(0,w.jsx)("div",{className:"error-message",children:q}),(0,w.jsx)("button",{className:"form-login-button",children:s?"\u05d4\u05d9\u05e8\u05e9\u05dd":"\u05d4\u05ea\u05d7\u05d1\u05e8"})]}),(0,w.jsx)("span",{className:"divider"}),(0,w.jsxs)("button",{className:"google-login-button",onClick:function(){return U()},children:[s?"\u05d4\u05d9\u05e8\u05e9\u05dd":"\u05d4\u05ea\u05d7\u05d1\u05e8"," \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea ",(0,w.jsx)(m.VyK,{})]})]})]})})}}}]);
//# sourceMappingURL=455.9a66b35d.chunk.js.map