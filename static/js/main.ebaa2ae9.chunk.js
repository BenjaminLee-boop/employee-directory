(this.webpackJsonpbrah=this.webpackJsonpbrah||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(15),s=n.n(r),i=(n(21),n(22),n(3)),o=n.n(i),l=n(6),u=n(4),j=n(0);function b(e){var t=e.data;return Object(j.jsx)("div",{children:Object(j.jsxs)("table",{className:"table sortable",id:"sortTable",children:[Object(j.jsx)("thead",{className:"tableHeader",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"First"}),Object(j.jsx)("th",{scope:"col",children:"Last"}),Object(j.jsx)("th",{scope:"col",children:"Email"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.name.first}),Object(j.jsx)("td",{children:e.name.last}),Object(j.jsx)("td",{children:e.email})]},e.email)}))})]})})}var d=n(16),h=n.n(d);var p=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),i=s[0],d=s[1],p=Object(c.useState)([]),f=Object(u.a)(p,2),O=f[0],x=f[1];function m(){return(m=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(O);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://randomuser.me/api/?results=50??nat=au,us");case 2:t=e.sent,a(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Emplyee Search"}),Object(j.jsxs)("div",{className:"input-group mb-3",children:[Object(j.jsx)("div",{className:"input-group-prepend"}),Object(j.jsx)("form",{className:"w-100",onSubmit:function(e){e.preventDefault(),x(n);var t=n.filter((function(e){var t=e.name.first.toLowerCase(),n=i.toLowerCase();if(t.startsWith(n))return e}));console.log(n),a(t),d("")},children:Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Name","aria-label":"Name",value:i,onChange:function(e){d(e.target.value)}})}),Object(j.jsx)("button",{type:"button",class:"btn btn-link float-right",onClick:function(){return function(){return m.apply(this,arguments)}()},children:"Refresh"})]}),Object(j.jsx)(b,{data:n})]})};var f=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(p,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.ebaa2ae9.chunk.js.map