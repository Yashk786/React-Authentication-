(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={form:"ProfileForm_form__3PvGF",control:"ProfileForm_control__yx7XQ",action:"ProfileForm_action__3PGXF"}},15:function(e,t,n){e.exports={header:"MainNavigation_header__Pe0yj",logo:"MainNavigation_logo__3Dou7"}},20:function(e,t,n){e.exports={profile:"UserProfile_profile__3NVOJ"}},21:function(e,t,n){e.exports={starting:"StartingPageContent_starting__2k53Z"}},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o,c=n(17),r=n.n(c),i=n(7),s=(n(26),n(1)),a=n.n(s),l=n(2),j=n(11),u=n(0),d=a.a.createContext({token:"",isLoggedIn:!1,logIn:function(e){},logOut:function(){}}),b=function(e){return(new Date).getTime()-new Date(e).getTime()},h=function(e){var t,n=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("expirationTime"),n=b(t);return n<=3600?(localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),null):{token:e,duration:n}}();n&&(t=n.token);var c=Object(s.useState)(t),r=Object(j.a)(c,2),i=r[0],a=r[1],l=!!i,h=Object(s.useCallback)((function(){a(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),o&&clearTimeout(o)}),[]);Object(s.useEffect)((function(){n&&(console.log(n.duration),o=setTimeout(h,n.duration))}),[n,h]);var g={token:i,isLoggedIn:l,logIn:function(e,t){a(e),localStorage.setItem("token",e),localStorage.setItem("expirationTime",t);var n=b(t);o=setTimeout(h,n)},logOut:h};return Object(u.jsx)(d.Provider,{value:g,children:e.children})},g=d,O=n(15),m=n.n(O),x=function(){var e=Object(s.useContext)(g),t=e.isLoggedIn;return Object(u.jsxs)("header",{className:m.a.header,children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("div",{className:m.a.logo,children:"React Auth"})}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[!t&&Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/auth",children:"Login"})}),t&&Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/profile",children:"Profile"})}),t&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:function(){e.logOut()},children:"Logout"})})]})})]})},f=function(e){return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)(x,{}),Object(u.jsx)("main",{children:e.children})]})},p=n(12),v=n.n(p),_=function(){var e=Object(l.g)(),t=Object(s.useRef)(),n=Object(s.useContext)(g);return Object(u.jsxs)("form",{className:v.a.form,onSubmit:function(o){o.preventDefault();var c=t.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDUStYmizIssy19g9nvHLcGKam9zGHI-LQ",{method:"POST",body:JSON.stringify({idToken:n.token,password:c,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}}).then((function(t){e.replace("/")}))},children:[Object(u.jsxs)("div",{className:v.a.control,children:[Object(u.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(u.jsx)("input",{type:"password",id:"new-password",minLength:"7",ref:t})]}),Object(u.jsx)("div",{className:v.a.action,children:Object(u.jsx)("button",{children:"Change Password"})})]})},I=n(20),S=n.n(I),k=function(){return Object(u.jsxs)("section",{className:S.a.profile,children:[Object(u.jsx)("h1",{children:"Your User Profile"}),Object(u.jsx)(_,{})]})},w=n(9),y=n.n(w),L=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),n=Object(s.useState)(!1),o=Object(j.a)(n,2),c=o[0],r=o[1],i=Object(s.useState)(!0),a=Object(j.a)(i,2),d=a[0],b=a[1],h=Object(s.useContext)(g),O=Object(l.g)();return Object(u.jsxs)("section",{className:y.a.auth,children:[Object(u.jsx)("h1",{children:d?"Login":"Sign Up"}),Object(u.jsxs)("form",{onSubmit:function(n){n.preventDefault();var o,c=e.current.value,i=t.current.value;r(!0),o=d?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUStYmizIssy19g9nvHLcGKam9zGHI-LQ":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUStYmizIssy19g9nvHLcGKam9zGHI-LQ",fetch(o,{method:"POST",body:JSON.stringify({email:c,password:i,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return r(!1),e.ok?e.json():e.json().then((function(e){throw new Error("Authentication is failed")}))})).then((function(e){var t=new Date((new Date).getTime()+1e3*+e.expiresIn);h.logIn(e.idToken,t.toISOString()),O.replace("/")})).catch((function(e){return alert(e.message)}))},children:[Object(u.jsxs)("div",{className:y.a.control,children:[Object(u.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(u.jsx)("input",{type:"email",id:"email",required:!0,ref:e})]}),Object(u.jsxs)("div",{className:y.a.control,children:[Object(u.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(u.jsx)("input",{type:"password",id:"password",required:!0,ref:t})]}),Object(u.jsxs)("div",{className:y.a.actions,children:[!c&&Object(u.jsx)("button",{children:d?"Login":"Create Account"}),c&&Object(u.jsx)("p",{children:"Sending request.."}),Object(u.jsx)("button",{type:"button",className:y.a.toggle,onClick:function(){b((function(e){return!e}))},children:d?"Create new account":"Login with existing account"})]})]})]})},N=function(){return Object(u.jsx)(L,{})},P=n(21),T=n.n(P),C=function(){return Object(u.jsx)("section",{className:T.a.starting,children:Object(u.jsx)("h1",{children:"Welcome on Board!"})})},F=function(){return Object(u.jsx)(C,{})};var D=function(){var e=Object(s.useContext)(g);return Object(u.jsx)(f,{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/",exact:!0,children:Object(u.jsx)(F,{})}),!e.isLoggedIn&&Object(u.jsx)(l.b,{path:"/auth",children:Object(u.jsx)(N,{})}),Object(u.jsxs)(l.b,{path:"/profile",children:[e.isLoggedIn&&Object(u.jsx)(k,{}),!e.isLoggedIn&&Object(u.jsx)(l.a,{to:"/auth"})]}),Object(u.jsx)(l.b,{path:"*",children:Object(u.jsx)(l.a,{to:"/"})})]})})};r.a.render(Object(u.jsx)(h,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(D,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={auth:"AuthForm_auth__1wNdP",control:"AuthForm_control__LV6zg",actions:"AuthForm_actions__6iBqI",toggle:"AuthForm_toggle__uygcD"}}},[[36,1,2]]]);
//# sourceMappingURL=main.c048b93b.chunk.js.map