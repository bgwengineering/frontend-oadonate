(this.webpackJsonpogadonate=this.webpackJsonpogadonate||[]).push([[4],{1120:function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"f",(function(){return d})),a.d(t,"c",(function(){return b})),a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return y})),a.d(t,"d",(function(){return j}));var n=a(17),r=a.n(n),c=a(7),o=a(33),p=a(29),u=a(85),s=a(79),i=a(9),l=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a,n){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.post("/accounts/profile/personal",Object(c.a)({},e),Object(u.a)(n));case 3:o=t.sent,a({type:i.s,payload:o.data}),a({type:i.gb,payload:"Personal Profile Created"}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:i.r}),a({type:i.eb,payload:t.t0.response.data.detail});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,a){return t.apply(this,arguments)}}()},d=function(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n,o){var l;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p.a.patch("/accounts/profile/personal/".concat(e),Object(c.a)({},t),Object(u.a)(o));case 3:l=a.sent,n({type:i.sb,payload:l.data}),n(Object(s.b)("editForm")),n(Object(s.a)("editForm")),n({type:i.gb,payload:"Personal Profile updated"}),a.next=16;break;case 10:a.prev=10,a.t0=a.catch(0),n({type:i.rb}),n(Object(s.b)("editForm")),n(Object(s.a)("editForm")),n({type:i.eb,payload:a.t0.response.data.detail});case 16:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e,t){return a.apply(this,arguments)}}()},b=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/accounts/profile/personal",Object(u.a)(a));case 3:n=e.sent,t({type:i.I,payload:n.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:i.H}),t({type:i.eb,payload:"Detail: ".concat(e.t0.response)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a,n){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.post("accounts/profile/company",Object(c.a)({},e),Object(u.a)(n));case 3:o=t.sent,a({type:i.j,payload:o.data}),a(Object(s.b)("personalForm")),a(Object(s.a)("personalForm")),a({type:i.gb,payload:"Company Profile Created"}),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:i.i}),a(Object(s.b)("companyForm")),a(Object(s.a)("companyForm")),a({type:i.eb,payload:t.t0.response.data.detail});case 16:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,a){return t.apply(this,arguments)}}()},y=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/accounts/profile/company",Object(u.a)(a));case 3:n=e.sent,t({type:i.w,payload:n.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:i.v}),t({type:i.eb,payload:"Detail: ".concat(e.t0.response)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/accounts/user/fundraised",Object(u.a)(a));case 3:n=e.sent,t({type:i.S,payload:n.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:i.R}),t({type:i.eb,payload:"Detail: ".concat(e.t0.response)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()}},1124:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(12),c=a(402),o=a(1120),p=a(1),u=Object(n.lazy)((function(){return Promise.all([a.e(17),a.e(15)]).then(a.bind(null,1122))}));t.default=function(){var e=Object(r.d)((function(e){return e.userTypeReducer})),t=e.profile_user,a=e.company_user,s=Object(r.c)();return Object(n.useEffect)((function(){s(Object(o.c)()),s(Object(o.b)()),s(Object(o.d)())}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{id:"dashboard-view",children:[Object(p.jsx)(u,{}),t.length>=1||a.length>=1?Object(p.jsx)("h4",{children:"Graph display"}):Object(p.jsx)(c.a,{}),"graph display"]})})}}}]);
//# sourceMappingURL=4.4acb0cb1.chunk.js.map