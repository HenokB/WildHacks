(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{35:function(e,t,s){},37:function(e,t,s){},56:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var r=s(1),c=s.n(r),n=s(29),a=s.n(n),i=(s(35),s(0));function l(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsxs)("div",{className:"headerTitles",children:[Object(i.jsx)("span",{className:"headerTitleSm",children:"THE AMAZON RAINFOREST"}),Object(i.jsx)("span",{className:"headerTitleLg",children:"Jungle"})]}),Object(i.jsx)("img",{className:"headerImg",src:"https://mediaproxy.salon.com/width/1200/https://media.salon.com/2021/05/brazil-amazon-rainforest-0503211.jpg",alt:""})]})}s(37),s(16);function j(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)("div",{className:"home",children:Object(i.jsxs)("div",{className:"headerText",children:[Object(i.jsx)("p",{children:"The Amazon is the world's biggest rainforest, larger than the next two largest rainforests \u2014 in the Congo Basin and Indonesia \u2014 combined."}),Object(i.jsx)("p",{children:"The Amazon River Basin is home to the largest rainforest on Earth. The basin -- roughly the size of the forty-eight contiguous United States -- covers some 40 percent of the South American continent and includes parts of eight South American countries: Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, and Suriname, as well as French Guiana, a department of France."})]})})]})}var o=s(5),u=s(10),b=s(19),h=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(b.a)(Object(b.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},d={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},O=Object(r.createContext)(d),m=function(e){var t=e.children,s=Object(r.useReducer)(h,d),c=Object(u.a)(s,2),n=c[0],a=c[1];return Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(i.jsx)(O.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:a},children:t})};s(56);function x(){var e=Object(r.useContext)(O),t=e.user,s=e.dispatch;return Object(i.jsxs)("div",{className:"top",children:[Object(i.jsx)("div",{className:"topLeft",children:Object(i.jsx)("span",{children:"JUNGLE"})}),Object(i.jsx)("div",{className:"topCenter",children:t&&Object(i.jsxs)("ul",{className:"topList",children:[Object(i.jsx)("li",{className:"topListItem",children:Object(i.jsx)(o.b,{className:"link",to:"/",children:"HOME"})}),Object(i.jsx)("li",{className:"topListItem",children:Object(i.jsx)(o.b,{className:"link",to:"/forest",children:"FOREST"})}),Object(i.jsx)("li",{className:"topListItem",children:Object(i.jsx)(o.b,{className:"link",to:"/wild-life",children:"WILD LIFE"})}),Object(i.jsx)("li",{className:"topListItem",children:Object(i.jsx)(o.b,{className:"link",to:"/gallery",children:"GALLERY"})})]})}),Object(i.jsx)("div",{className:"topRight",children:Object(i.jsx)("ul",{className:"topList",children:t?Object(i.jsx)("li",{className:"topListItem",onClick:function(){s({type:"LOGOUT"})},children:"LOGOUT"}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("li",{className:"topListItem",children:Object(i.jsx)(o.b,{className:"link",to:"/login",children:"LOGIN"})}),Object(i.jsx)("li",{className:"topListItem",children:Object(i.jsx)(o.b,{className:"link",to:"/register",children:"REGISTER"})})]})})})]})}var p=s(11),g=s.n(p),N=s(13);s(63);function f(){var e=Object(r.useRef)(),t=Object(r.useRef)(),s=Object(r.useContext)(O),c=s.dispatch,n=s.isFetching,a=function(){var s=Object(N.a)(g.a.mark((function s(r){var n,a;return g.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:r.preventDefault(),c({type:"LOGIN_START"});try{n=e.current.value,a=t.current.value,c("guest"===n&&"123123"===a?{type:"LOGIN_SUCCESS",payload:{username:n,password:a}}:{type:"LOGIN_FAILURE"})}catch(i){c({type:"LOGIN_FAILURE"})}case 3:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"login",children:[Object(i.jsx)("span",{className:"loginTitle",children:"Login"}),Object(i.jsxs)("form",{className:"loginForm",onSubmit:a,children:[Object(i.jsx)("label",{children:"Username"}),Object(i.jsx)("input",{type:"text",className:"loginInput",placeholder:"Enter your username...",ref:e}),Object(i.jsx)("label",{children:"Password"}),Object(i.jsx)("input",{type:"password",className:"loginInput",placeholder:"Enter your password...",ref:t}),Object(i.jsx)("button",{className:"loginButton",type:"submit",disabled:n,children:"Login"})]}),Object(i.jsx)("button",{className:"loginRegisterButton",children:Object(i.jsx)(o.b,{className:"link",to:"/register",children:"Register"})})]})}s(64);function v(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),s=t[0],c=t[1],n=Object(r.useState)(""),a=Object(u.a)(n,2),l=a[0],j=a[1],b=Object(r.useState)(""),h=Object(u.a)(b,2),d=h[0],O=h[1],m=Object(r.useState)(!1),x=Object(u.a)(m,2),p=x[0],f=x[1],v=function(){var e=Object(N.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),f(!1),r={username:s,email:l,password:d},console.log(r);try{window.location.replace("/login")}catch(c){f(!0)}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"register",children:[Object(i.jsx)("span",{className:"registerTitle",children:"Register"}),Object(i.jsxs)("form",{className:"registerForm",onSubmit:v,children:[Object(i.jsx)("label",{children:"Username"}),Object(i.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your username...",onChange:function(e){return c(e.target.value)}}),Object(i.jsx)("label",{children:"Email"}),Object(i.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your email...",onChange:function(e){return j(e.target.value)}}),Object(i.jsx)("label",{children:"Password"}),Object(i.jsx)("input",{type:"password",className:"registerInput",placeholder:"Enter your password...",onChange:function(e){return O(e.target.value)}}),Object(i.jsx)("button",{className:"registerButton",type:"submit",children:"Register"})]}),Object(i.jsx)("button",{className:"registerLoginButton",children:Object(i.jsx)(o.b,{className:"link",to:"/login",children:"Login"})}),p&&Object(i.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Something went wrong!"})]})}s(65),s(66);var y=function(){return Object(i.jsxs)("div",{className:"galleryCard",children:[Object(i.jsx)("img",{src:"https://source.unsplash.com/random?amazon+forest/300x400",width:"200",alt:"Forest"}),Object(i.jsx)("p",{children:"Amazon Forest"}),Object(i.jsx)("span",{className:"ImageComment",children:"Tropical forest"})]})};function L(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"gallery",children:[Object(i.jsxs)("div",{className:"galleryTitle",children:[Object(i.jsx)("span",{children:"The Amazon Rainforest"}),Object(i.jsx)("span",{className:"line"})]}),Object(i.jsxs)("div",{className:"galleryTop",children:[Object(i.jsx)(y,{}),Object(i.jsx)(y,{}),Object(i.jsx)(y,{}),Object(i.jsx)(y,{})]}),Object(i.jsxs)("div",{className:"galleryBottom",children:[Object(i.jsx)(y,{}),Object(i.jsx)(y,{}),Object(i.jsx)(y,{}),Object(i.jsx)(y,{})]})]})})}var I=s(2);var S=function(){var e=Object(r.useContext)(O).user;return Object(i.jsxs)(o.a,{basename:"/WildHacks",children:[Object(i.jsx)(x,{}),Object(i.jsxs)(I.c,{children:[Object(i.jsx)(I.a,{exact:!0,path:"/",children:e?Object(i.jsx)(j,{}):Object(i.jsx)(v,{})}),Object(i.jsx)(I.a,{path:"/register",children:e?Object(i.jsx)(j,{}):Object(i.jsx)(v,{})}),Object(i.jsx)(I.a,{path:"/login",children:e?Object(i.jsx)(j,{}):Object(i.jsx)(f,{})}),Object(i.jsx)(I.a,{path:"/forest"}),Object(i.jsx)(I.a,{path:"/wild-life"}),Object(i.jsx)(I.a,{path:"/gallery",children:e?Object(i.jsx)(L,{}):Object(i.jsx)(v,{})})]})]})};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(m,{children:Object(i.jsx)(S,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.d285230f.chunk.js.map