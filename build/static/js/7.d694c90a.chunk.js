(this.webpackJsonpogadonate=this.webpackJsonpogadonate||[]).push([[7],{1142:function(e,t,c){"use strict";c.r(t);var n=c(12),s=c(3),d=c(11),j=c(22),a=c(62),i=c(48),l=c(1);t.default=function(){var e=Object(d.c)(),t=Object(d.d)((function(e){return e.userTypeReducer})).user_donations_received,c=Object(s.useState)(!1),r=Object(n.a)(c,2),h=r[0],b=r[1],o=function(e){b(!h)};return Object(s.useEffect)((function(){e(Object(a.h)())}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{className:"text-uppercase text-center mb-4 mt-4",children:"Cash Donations Received"}),Object(l.jsx)(j.A,{children:Object(l.jsx)(j.h,{children:Object(l.jsx)(j.f,{children:Object(l.jsx)(j.g,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-12",children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"table table-responsive  table-condensed table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{}),Object(l.jsx)("th",{scope:"col",children:"Title"}),Object(l.jsx)("th",{scope:"col",children:"Amount"}),Object(l.jsx)("th",{scope:"col",children:"Category"})]})}),Object(l.jsx)("tbody",{children:t.length?t.map((function(e,t){var c=e.fund_type,n=e.fund_cash,s=e.fund_title,d=e.fund_category,j=e.fund_cash_amount,a=e.fund_currency_type;if("Cash"===c){var r="#".concat("a"+t);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("tr",{"data-toggle":"collapse","data-target":r,className:"accordion-toggle",onClick:o,children:[Object(l.jsx)("td",{children:Object(l.jsx)(i.e,{})}),Object(l.jsx)("td",{children:s}),Object(l.jsxs)("td",{children:[a,j]}),Object(l.jsx)("td",{children:d})]}),Object(l.jsx)("tr",{children:Object(l.jsx)("td",{colspan:"12",className:"hiddenRow",children:Object(l.jsx)("div",{className:"accordian-body collapse",id:"a"+t,children:Object(l.jsxs)("table",{className:"table table-condensed table-striped hidden-table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"info",children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Email"}),Object(l.jsx)("th",{children:"Cash Donated"}),Object(l.jsx)("th",{children:"Method"}),Object(l.jsx)("th",{children:"Status"}),Object(l.jsx)("th",{children:"Date"})]})}),Object(l.jsx)("tbody",{children:n.length>0&&n.map((function(e){var t=e.donate_amount,c=e.donate_payment_method,n=e.user,s=e.donate_payment_status,d=e.donate_createdAt,j=e.donate_currency,a=e.id,i=n.first_name,r=n.last_name,h=n.email;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:i+" "+r}),Object(l.jsx)("td",{children:h}),Object(l.jsxs)("td",{children:[j,t]}),Object(l.jsx)("td",{children:c}),Object(l.jsx)("td",{children:s}),Object(l.jsx)("td",{children:Object(l.jsx)("div",{children:d.substring(0,10)})})]},a)}))})]})})})})]})}})):Object(l.jsx)("div",{children:"You have not recieved any donation on your Cash cause"})})]})})})})})})})})}),Object(l.jsx)("h4",{className:"text-uppercase text-center mb-4 mt-4",children:"Item Donations Received"}),Object(l.jsx)(j.A,{children:Object(l.jsx)(j.h,{children:Object(l.jsx)(j.f,{children:Object(l.jsx)(j.g,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsx)("div",{className:"panel panel-default",children:Object(l.jsx)("div",{className:"panel-body",children:Object(l.jsxs)("table",{className:"table table-responsive table-condensed table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{}),Object(l.jsx)("th",{children:"Title"}),Object(l.jsx)("th",{children:"Category"})]})}),Object(l.jsx)("tbody",{children:t.length?t.map((function(e,t){var c=e.fund_type,n=e.fund_item,s=e.fund_title,d=e.fund_category;e.id;if("Item"===c){var j="#".concat("a"+t);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("tr",{"data-toggle":"collapse","data-target":j,className:"accordion-toggle",children:[Object(l.jsx)("td",{children:Object(l.jsx)(i.e,{})}),Object(l.jsx)("td",{children:s}),Object(l.jsx)("td",{children:d})]}),Object(l.jsx)("tr",{children:Object(l.jsx)("td",{colspan:"12",className:"hiddenRow",children:Object(l.jsx)("div",{className:"accordian-body collapse",id:"a"+t,children:Object(l.jsxs)("table",{className:"table table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"info",children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:" Email"}),Object(l.jsx)("th",{children:"Item Donated"}),Object(l.jsx)("th",{children:"Condition"}),Object(l.jsx)("th",{children:"Date"})]})}),Object(l.jsx)("tbody",{children:n.length&&n.map((function(t){var c=t.donate_item_name,n=t.user,s=t.donate_item_condition,d=t.donate_createdAt,j=n.first_name,a=n.last_name,i=n.email;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:j+" "+a}),Object(l.jsx)("td",{children:i}),Object(l.jsx)("td",{children:Object(l.jsx)("div",{children:c})}),Object(l.jsx)("td",{children:Object(l.jsx)("div",{children:s})}),Object(l.jsx)("td",{children:Object(l.jsx)("div",{children:d.substring(0,10)})})]},e.id)}))})]})})})})]})}})):Object(l.jsx)("div",{children:"You have not recieved any donation on your item cause"})})]})})})})})})})})})]})}}}]);
//# sourceMappingURL=7.d694c90a.chunk.js.map