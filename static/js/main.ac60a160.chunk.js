(this.webpackJsonpfilter=this.webpackJsonpfilter||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(5),c=n.n(i),l=(n(16),n(17),n(3)),u=n(1);var d=function(){var e=Object(l.c)((function(e){return e.filterReducer})),t=e.filter,n=Object(l.b)();return Object(u.jsxs)("div",{className:"filter",children:[Object(u.jsx)("input",{className:"input-filter",name:"filter",onChange:function(e){var t=e.target,a=t.name,r=t.value;n({type:"CHANGE-FIND-FIELD",payload:{name:a,value:r}})},value:t}),Object(u.jsx)("button",{onClick:function(){n({type:"CLEAR-FIND-FIELD",payload:""})},type:"primary",children:"\u2715"})]})};var o=function(){var e=Object(l.c)((function(e){return e.addReducer})),t=Object(l.b)(),n=function(e){var n=e.target,a=n.name,r=n.value;t({type:"CHANGE-FIELD",payload:{name:a,value:r}})},a=function(n){n.preventDefault();var a=e.id,r=e.name,i=e.price;""!==e.name&&""!==e.price&&(""===e.id?(t({type:"ADD-ITEM",payload:{name:r,price:i}}),t({type:"CLEAR-FIELD",payload:""})):(t({type:"UPDATE-ITEM",payload:{id:a,name:r,price:i}}),t({type:"CLEAR-FIELD",payload:""})))};return Object(u.jsxs)("form",{onSubmit:a,children:[Object(u.jsx)("input",{className:"input",name:"name",onChange:n,value:e.name}),Object(u.jsx)("input",{className:"input",name:"price",onChange:n,value:e.price}),Object(u.jsx)("button",{onClick:a,type:"primary",children:"\u2714"}),Object(u.jsx)("button",{onClick:function(){t({type:"CLEAR-FIELD",payload:""})},type:"primary",children:"\u2715"})]})};var s=function(){var e=Object(l.c)((function(e){return e.listReducer})),t=e.items,n=e.filter,a=e.enableFilter,r=Object(l.b)(),i=a?n:t;return Object(u.jsx)("ul",{children:i&&i.map((function(e){return Object(u.jsxs)("li",{style:{marginTop:10},children:[Object(u.jsx)("div",{className:"list-item",children:e.name}),Object(u.jsx)("div",{className:"list-item",children:e.price}),Object(u.jsx)("button",{onClick:function(){r({type:"EDIT-ITEM",payload:e})},children:"\u270e"}),Object(u.jsx)("button",{onClick:function(){r({type:"REMOVE-ITEM",payload:e})},children:"\u2715"})]},e.id)}))})};var j=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{}),Object(u.jsx)(o,{}),Object(u.jsx)(s,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},p=n(9),f=n(11),O=n(2),m=n(4),v={items:[{id:Object(m.a)(),name:"\u0414\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0430",price:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e"},{id:Object(m.a)(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0441\u0442\u0435\u043a\u043b\u0430",price:21e3},{id:Object(m.a)(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0434\u0438\u0441\u043f\u043b\u0435\u044f",price:25e3}],filter:[],copyItems:[],enableFilter:!1};var E=n(6),y={id:"",name:"",price:""};var h={filter:""};var I=Object(p.a)({addReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-FIELD":var n=Object(O.a)({},t.payload);return Object(O.a)(Object(O.a)({},e),{},Object(E.a)({},n.name,n.value));case"CLEAR-FIELD":return y;case"EDIT-ITEM":var a=t.payload,r=a.id,i=a.name,c=a.price;return{id:r,name:i,price:c};case"REMOVE-ITEM":return""!==e.id?y:e;default:return e}},listReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR-FIND-FIELD":return e.filter=[],e.enableFilter=!1,Object(O.a)({},e);case"CHANGE-FIND-FIELD":var n=t.payload.value;return e.enableFilter=""!==n,e.enableFilter&&(e.filter=[],e.items.filter((function(t){return-1===Object.values(t)[1].toString().indexOf(n)&&-1===Object.values(t)[2].toString().indexOf(n)||e.filter.push(t),Object(O.a)({},e)}))),Object(O.a)({},e);case"ADD-ITEM":var a=Object(O.a)({id:Object(m.a)()},t.payload);return Object(O.a)(Object(O.a)({},e),{},{items:[].concat(Object(f.a)(e.items),[a])});case"REMOVE-ITEM":var r=t.payload.id;return e.items=e.items.filter((function(e){return e.id!==r})),e.enableFilter&&(e.filter=e.filter.filter((function(e){return e.id!==r}))),Object(O.a)({},e);case"UPDATE-ITEM":var i=t.payload,c=i.id,l=i.name,u=i.price,d=e.items.find((function(e){return e.id===c}));return d.name=l,d.price=u,Object(O.a)({},e);default:return e}},filterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-FIND-FIELD":var n=t.payload.value;return Object(O.a)(Object(O.a)({},e),{},{filter:n});case"CLEAR-FIND-FIELD":return h;default:return e}}}),D=Object(p.b)(I);c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(l.a,{store:D,children:Object(u.jsx)(j,{})})}),document.getElementById("root")),b()}},[[22,1,2]]]);
//# sourceMappingURL=main.ac60a160.chunk.js.map