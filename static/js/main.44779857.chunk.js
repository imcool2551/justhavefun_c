(this.webpackJsonpredux=this.webpackJsonpredux||[]).push([[0],{111:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(80),l=n.n(o),c=n(9),u=n(25),i=n.n(u),s=n(84),d=new c.ApolloClient({cache:new c.InMemoryCache,link:Object(s.a)({uri:"https://sangwook.ml/graphql/"}),credentials:"include"}),m=n(24),b=n(8),E=(n(111),n(11)),p=n(50),g=n(15),f=function(e){return{type:"todo/LOGIN",payload:{username:e}}},O=function(){return{type:"todo/LOGUT",payload:{}}};function v(e,t){var n=t.payload,a=n.id,r=n.text;switch(t.type){case"todo/LOGIN":return Object(g.a)(Object(g.a)({},e),{},{username:t.payload.username,isLoggedin:!0});case"todo/LOGUT":return Object(g.a)(Object(g.a)({},e),{},{username:"",isLoggedin:!1});case"todo/INIT":return Object(g.a)(Object(g.a)({},e),{},{fetched:!0});case"todo/ADD":var o={id:a,text:r,done:!1};return Object(g.a)(Object(g.a)({},e),{},{todos:[o].concat(Object(p.a)(e.todos))});case"todo/DELETE":return Object(g.a)(Object(g.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==a}))});case"todo/TOGGLE":return Object(g.a)(Object(g.a)({},e),{},{todos:e.todos.map((function(e){return e.id===a?{id:e.id,text:e.text,done:!e.done}:e}))});case"todo/SEARCH":return Object(g.a)(Object(g.a)({},e),{},{filter:r});default:return e}}var j={username:"",isLoggedin:!1},h=Object(a.createContext)(),y=function(e){var t=e.children,n=Object(a.useReducer)(v,j),o=Object(E.a)(n,2),l=o[0],c=o[1];return r.a.createElement(h.Provider,{value:{isLoggedin:l.isLoggedin,username:l.username,logIn:function(e){return c(f(e))},logOut:function(){return c(O())}}},t)},x=function(){return{type:"counter/INCREMENT"}},T=function(){return{type:"counter/DECREMENT"}},w=function(){return{type:"counter/RESET"}};function L(e,t){switch(t.type){case"counter/INCREMENT":return{number:e.number+1};case"counter/DECREMENT":return{number:e.number-1};case"counter/RESET":return{number:0};default:return e}}var C={number:0},N=Object(a.createContext)(C),k=function(e){var t=e.children,n=Object(a.useReducer)(L,C),o=Object(E.a)(n,2),l=o[0],c=o[1];return r.a.createElement(N.Provider,{value:{number:l.number,increment:function(){c(x())},decrement:function(){c(T())},reset:function(){c(w())}}},t)},S=function(){var e=Object(a.useContext)(h).isLoggedin;return r.a.createElement("nav",null,r.a.createElement(m.b,{to:"/"},"Home")," ",r.a.createElement(m.b,{to:"/todo"},"TODO")," ",r.a.createElement(m.b,{to:"/counter"},"COUNTER")," ",e&&r.a.createElement(m.b,{to:"/logout"}," Logout"))},D=n(31);function I(){var e=Object(D.a)(["\n  query Todos($id: String!) {\n    todos(id: $id) {\n      id\n      text\n      done\n      user {\n        id\n        displayName\n      }\n    }\n  }\n"]);return I=function(){return e},e}function R(){var e=Object(D.a)(["\n  query {\n    allUsers {\n      id\n      displayName\n    }\n  }\n"]);return R=function(){return e},e}function q(){var e=Object(D.a)(["\n  query {\n    myTodos {\n      id\n      text\n      done\n      deleted\n      user {\n        id\n        displayName\n      }\n    }\n  }\n"]);return q=function(){return e},e}function F(){var e=Object(D.a)(["\n  mutation DeleteTodo($id: ID!) {\n    deleteTodo(id: $id) {\n      id\n      text\n      done\n      deleted\n      user {\n        id\n        displayName\n      }\n    }\n  }\n"]);return F=function(){return e},e}function P(){var e=Object(D.a)(["\n  mutation ToggleTodo($id: ID!) {\n    toggleTodo(id: $id) {\n      id\n      text\n      done\n      deleted\n      user {\n        id\n        displayName\n      }\n    }\n  }\n"]);return P=function(){return e},e}function M(){var e=Object(D.a)(["\n  mutation AddTodo($text: String!) {\n    addTodo(text: $text) {\n      id\n      text\n      done\n      deleted\n      user {\n        id\n        displayName\n      }\n    }\n  }\n"]);return M=function(){return e},e}var $=Object(c.gql)(M()),G=Object(c.gql)(P()),U=Object(c.gql)(F()),A=Object(c.gql)(q()),Q=Object(c.gql)(R()),_=Object(c.gql)(I()),H=function(){var e=Object(c.useMutation)($,{update:function(e,t){var n=t.data.addTodo,a=e.readQuery({query:A}).myTodos;console.log(a,"@@@"),e.writeQuery({query:A,data:{myTodos:[n].concat(Object(p.a)(a))}})}}),t=Object(E.a)(e,2),n=t[0],o=t[1],l=o.data,u=o.loading,i=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n({variables:{text:i.current.value}}),i.current.value="",i.current.focus(),console.log(l)}},r.a.createElement("input",{type:"text",placeholder:"Add Todo...",ref:i,disabled:u}),r.a.createElement("button",{disabled:u},"Submit")))},J={textDecoration:"line-through"},z=function(e){var t=e.id,n=e.text,a=e.done,o=Object(c.useMutation)(G),l=Object(E.a)(o,2),u=l[0],i=l[1].loading,s=Object(c.useMutation)(U),d=Object(E.a)(s,2),m=d[0],b=d[1].loading;return i||b?r.a.createElement("li",null,"Loading..."):r.a.createElement("li",null,r.a.createElement("span",{style:a?J:null},n),r.a.createElement("input",{type:"checkbox",checked:a,onChange:function(){console.log(typeof t,t),u({variables:{id:t}})}}),r.a.createElement("button",{onClick:function(){console.log(typeof t,t),m({variables:{id:t}})}},"X"))},B=function(){var e=Object(c.useQuery)(A),t=e.loading,n=e.error,o=e.data,l=Object(a.useContext)(h).username;return Object(a.useEffect)((function(){return d.cache.reset(),function(){d.cache.reset()}}),[]),t?"Loading...":n?"Error: ".concat(n.message):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,l,"'s Todo List"),o.myTodos.filter((function(e){return!e.deleted})).map((function(e){return r.a.createElement(z,Object.assign({},e,{key:e.id}))})))},V=function(){var e=Object(a.useState)(""),t=Object(E.a)(e,2),n=t[0],o=t[1],l=Object(c.useQuery)(Q,{pollInterval:2e3}),u=l.data,i=l.loading,s=l.error,d=Object(c.useLazyQuery)(_),m=Object(E.a)(d,2),b=m[0],p=m[1].data;return i?"Loading Users...":s?"Error..":r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{onChange:function(e){console.log(e.target.value),o(e.target.value),b({variables:{id:e.target.value}})},value:n},u.allUsers.map((function(e){var t=e.id,n=e.displayName;return r.a.createElement("option",{value:t,key:t},n)}))),r.a.createElement("ul",null,p?p.todos.map((function(e,t){var n=e.id,a=e.text;return e.done?r.a.createElement("li",{key:n,style:{textDecoration:"line-through"}},t+1," \ubc88\uc9f8 : ",a):r.a.createElement("li",{key:n},t+1," \ubc88\uc9f8 : ",a)})):r.a.createElement("li",null,"Loading Todos...")))},W=function(){return Object(a.useContext)(h).isLoggedin?r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(B,null),r.a.createElement(V,null)):r.a.createElement(b.a,{to:"/"})},X=function(){var e=Object(a.useContext)(N),t=e.number,n=e.increment,o=e.decrement,l=e.reset;return r.a.createElement("div",null,r.a.createElement("h4",null,t),r.a.createElement("button",{onClick:n},"+"),r.a.createElement("button",{onClick:l},"RESET"),r.a.createElement("button",{onClick:o},"-"))},K=function(e){var t=Object(a.useState)(e),n=Object(E.a)(t,2),r=n[0],o=n[1];return{value:r,onChange:function(e){o(e.target.value)}}},Y=function(){var e=K(""),t=K(""),n=K(""),o=K(""),l=Object(a.useState)(""),c=Object(E.a)(l,2),u=c[0],s=c[1],d=Object(a.useContext)(h),m=d.isLoggedin,p=d.logIn,g=d.logOut;Object(a.useEffect)((function(){i()("/auth/login_check").then((function(e){var t=e.data;t.isLoggedin?p(t.displayName):g()}))}),[]);return r.a.createElement(r.a.Fragment,null,m&&r.a.createElement(b.a,{to:{pathname:"/"}}),r.a.createElement("h3",null,u),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),t.value===n.value?i.a.post("/auth/signup",{email:e.value,password:t.value,displayName:o.value}).then((function(e){var t=e.data;console.log(t),t.success&&p(t.displayName)})).catch((function(e){console.log(e.response);var t=e.response.data.error_msg;s(t[0])})):s("Password does not match!")}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",Object.assign({type:"email",name:"email",placeholder:"Email..."},e))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",Object.assign({type:"password",name:"password",placeholder:"Password..."},t))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password2"},"Password:"),r.a.createElement("input",Object.assign({type:"password",name:"password2",placeholder:"Validate Password..."},n))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Display Name:"),r.a.createElement("input",Object.assign({type:"text",name:"displayName",placeholder:"DisplayName..."},o))),r.a.createElement("div",null,r.a.createElement("button",null,"Sign up"))))},Z=function(){var e=K(""),t=K(""),n=Object(a.useState)(""),o=Object(E.a)(n,2),l=o[0],c=o[1],u=Object(a.useContext)(h),s=u.isLoggedin,d=u.username,b=u.logIn,p=u.logOut;Object(a.useEffect)((function(){i()("/auth/login_check").then((function(e){var t=e.data;t.isLoggedin?b(t.displayName):p()}))}),[]);return s?r.a.createElement("h1",null,"Welcome, ",d):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,l),r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),i.a.post("/auth/login",{email:e.value,password:t.value}).then((function(e){var t=e.data;console.log(t);var n=t.success,a=t.displayName;n&&b(a)})).catch((function(e){console.log(e.response);var t=e.response.data.error_msg;c(t[0])}))}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",Object.assign({type:"email",name:"email",placeholder:"Email..."},e))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",Object.assign({type:"password",name:"password",placeholder:"Password..."},t))),r.a.createElement("div",null,r.a.createElement("button",null,"Log In"))),r.a.createElement("div",null,r.a.createElement("a",{href:"http://localhost:5000/auth/google"},"Google Login")),r.a.createElement("div",null,r.a.createElement(m.b,{to:"/signup"},"Signup")))},ee=function(e){var t=e.history,n=Object(a.useContext)(h).logOut;return Object(a.useEffect)((function(){i.a.post("/auth/logout").then((function(e){console.log(e),n(),t.replace("/")})).catch((function(e){console.log(e.response)})).then((function(){t.replace("/")}))}),[]),r.a.createElement("div",null)},te=function(){return r.a.createElement(y,null,r.a.createElement(k,null,r.a.createElement(m.a,{basename:"/justhavefun_c"},r.a.createElement(S,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:Z}),r.a.createElement(b.b,{path:"/signup",component:Y}),r.a.createElement(b.b,{path:"/logout",component:ee}),r.a.createElement(b.b,{path:"/todo",component:W}),r.a.createElement(b.b,{path:"/counter",component:X})))))};i.a.defaults.baseURL="https://sangwook.ml",i.a.defaults.withCredentials=!0,l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.ApolloProvider,{client:d},r.a.createElement(te,null))),document.getElementById("root"))},85:function(e,t,n){e.exports=n(116)}},[[85,1,2]]]);
//# sourceMappingURL=main.44779857.chunk.js.map