(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,o){"use strict";o.r(n);var r=o(3),e=o.n(r),c=o(4),i=o(1),u=(o(9),o(0)),a=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function s(){try{return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}catch(t){throw new Error("Invalid answer from server")}}var d=function(){return s().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}))},l=function(){return s().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},f=function(){var t=Object(i.useState)([]),n=Object(c.a)(t,2),o=n[0],r=n[1],e=function(t){try{t().then((function(t){r(t)}))}catch(n){throw new Error("Error")}};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),Object(u.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return e(s)},children:"Load all goods"}),Object(u.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return e(d)},children:"Load 5 first goods"}),Object(u.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return e(l)},children:"Load red goods"}),Object(u.jsx)(a,{goods:o})]})};e.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))},9:function(t,n,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.2bbeffe3.chunk.js.map