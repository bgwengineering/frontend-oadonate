<<<<<<< HEAD:build/static/js/19.050786fe.chunk.js
(this.webpackJsonpogadonate=this.webpackJsonpogadonate||[]).push([[19],{1123:function(e,t,s){"use strict";s.r(t);s(3);var n=s(19),c=s(107),l=s(1124),i=s(81),r=s(413),a=s(1125),d=s(10),o=s(11),j=s(1),h=s(76);t.default=function(){var e=Object(d.d)((function(e){return e.userTypeReducer})).user_donations_received,t=Object(d.d)((function(e){return e.fundDonateReducer})).singleCampaignItem,s=Object(d.d)((function(e){return e.fundDonateReducer})).singleCampaign,b=Object(d.d)((function(e){return e.fundDonateReducer})).singleDonateCash,f=Object(d.d)((function(e){return e.orderReducer})).orders,u=Object(d.d)((function(e){return e.orderReducer})).auction,x=(b.length&&b.map((function(e){return e})),(t.length&&t.map((function(e){return e.fund_title}))).length),p=(s.length&&s.map((function(e){return e.fund_title}))).length,m=e.length&&e.map((function(e){return parseInt(e.fund_cash_amount)})),O=m.length&&m.reduce((function(e,t){return e+t}),0),g=(f.length&&f.map((function(e){return e.total_price}))).length,N=u.length&&u.map((function(e){return parseInt(e.bid_amount)})),v=N.length&&N.reduce((function(e,t){return e+t}),0),y=Object(d.d)((function(e){return e.authReducer.user})),w=y.is_affiliate,C=y.affiliate_referal_code;return Object(j.jsx)(j.Fragment,{children:w?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(n.A,{children:[Object(j.jsx)(n.h,{sm:"6",lg:"4",style:{marginTop:"20px"},children:Object(j.jsxs)("div",{className:"pt-4 pl-3",style:{height:"170px",backgroundColor:"#0C5421",color:"#fff"},children:[Object(j.jsxs)("div",{className:" d-flex justify-content-between pr-3",children:[Object(j.jsx)("h4",{children:"Affiliate or referral Code"}),Object(j.jsx)("span",{className:"text-white  icon-position",children:Object(j.jsx)(l.a,{className:"fs-3"})})]}),Object(j.jsxs)("h4",{className:"font-weight-bold",children:["Code: ",C]})]})}),Object(j.jsx)(n.h,{sm:"6",lg:"4",style:{marginTop:"20px"},children:Object(j.jsx)("h4",{className:"text-uppercase text-center fs-2 mt-5",children:"Create your affiliate profile"})}),Object(j.jsx)(n.h,{sm:"6",lg:"4",style:{marginTop:"20px"},children:Object(j.jsxs)("div",{className:"pt-4 pl-3",style:{height:"170px",backgroundColor:"#0C5421",color:"#fff"},children:[Object(j.jsxs)("div",{className:" d-flex justify-content-between pr-3",children:[Object(j.jsx)("h4",{children:"Number of referred users"}),Object(j.jsx)("span",{className:"text-white  icon-position",children:Object(j.jsx)(a.a,{className:"fs-3"})})]}),Object(j.jsxs)("h4",{className:"font-weight-bold",children:["Number:",Object(j.jsx)("span",{className:"referred-user-number",children:"0"})]})]})})]}),Object(j.jsx)("div",{className:"affiliate-link-bounce",children:Object(j.jsx)("div",{className:"ikon",children:Object(j.jsx)(o.b,{title:"Click and fill in your details",style:{backgroundColor:"#C75A00",padding:"18px"},role:"button",to:"dashboard/profile",children:Object(j.jsx)("span",{className:"create-affiliate-profile",children:"Create Affiliate Profile"})})})})]}):Object(j.jsxs)(n.A,{children:[Object(j.jsx)(n.h,{sm:"6",lg:"4",style:{marginTop:"20px"},children:Object(j.jsxs)("div",{className:"pt-4 pl-3",style:{height:"170px",backgroundColor:"#C75A00",color:"#fff"},children:[Object(j.jsxs)("div",{className:" d-flex justify-content-between pr-3",children:[Object(j.jsx)("h4",{children:"Donations"}),Object(j.jsx)("span",{className:"text-white  icon-position",children:Object(j.jsx)(c.c,{className:"fs-3"})})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between pr-3",children:[Object(j.jsx)("p",{className:"mt-2",children:"Total Donations Received"}),Object(j.jsx)("p",{className:"font-weight-bold total-donations-received",children:h(O).format("0,0")})]}),Object(j.jsx)("p",{children:"Total Amount Donated"})]})}),Object(j.jsx)(n.h,{sm:"6",lg:"4",style:{marginTop:"20px"},children:Object(j.jsxs)("div",{className:"pt-4 pl-3",style:{height:"170px",backgroundColor:"#0C5421",color:"#fff"},children:[Object(j.jsxs)("div",{className:" d-flex justify-content-between pr-3",children:[Object(j.jsx)("h4",{children:"Funds Raised"}),Object(j.jsx)("span",{className:"text-white icon-position",children:Object(j.jsx)(i.b,{className:"fs-3"})})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between pr-3",children:[Object(j.jsx)("p",{className:"mt-2",children:"Total item funds raised "}),Object(j.jsx)("p",{className:"font-weight-bold total-donations-received",children:x})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between pr-3",children:[Object(j.jsx)("p",{className:"mt-2",children:"Total cash funds raised"}),Object(j.jsx)("p",{className:"font-weight-bold total-donations-received",children:p})]})]})}),Object(j.jsx)(n.h,{sm:"6",lg:"4",style:{marginTop:"20px"},children:Object(j.jsxs)("div",{className:"pt-4 pl-3 pr-3",style:{height:"170px",backgroundColor:"#C75A00",color:"#fff"},children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between pr-3",children:[Object(j.jsx)("h4",{children:"Total Orders"}),Object(j.jsx)("span",{className:"text-white icon-position",children:Object(j.jsx)(r.b,{className:"fs-3"})})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between pr-3",children:[Object(j.jsx)("p",{className:"mt-2",children:"Total Products Ordered"}),Object(j.jsx)("p",{className:"font-weight-bold total-donations-received",children:h(g).format("0,0")})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between pr-3",children:[Object(j.jsx)("p",{className:"mt-2",children:"Total Bid amount"}),Object(j.jsx)("p",{className:"font-weight-bold total-donations-received",children:h(v).format("0,0")})]})]})})]})})}}}]);
//# sourceMappingURL=19.050786fe.chunk.js.map
=======
(this.webpackJsonpogadonate=this.webpackJsonpogadonate||[]).push([[19],{1139:function(e,t,s){"use strict";s.r(t);s(3);var n=s(19),c=s(109),l=s(1140),i=s(82),r=s(414),a=s(1141),d=s(10),o=s(11),j=s(1),h=s(77);t.default=function(){var e=Object(d.d)((function(e){return e.userTypeReducer})).user_donations_received,t=Object(d.d)((function(e){return e.fundDonateReducer})).singleCampaignItem,s=Object(d.d)((function(e){return e.fundDonateReducer})).singleCampaign,b=Object(d.d)((function(e){return e.fundDonateReducer})).singleDonateCash,f=Object(d.d)((function(e){return e.orderReducer})).orders,u=Object(d.d)((function(e){return e.orderReducer})).auction,x=(b.length&&b.map((function(e){return e})),(t.length&&t.map((function(e){return e.fund_title}))).length),p=(s.length&&s.map((function(e){return e.fund_title}))).length,m=e.length&&e.map((function(e){return parseInt(e.fund_cash_amount)})),O=m.length&&m.reduce((function(e,t){return e+t}),0),g=(f.length&&f.map((function(e){return e.total_price}))).length,N=u.length&&u.map((function(e){return parseInt(e.bid_amount)})),v=N.length&&N.reduce((function(e,t){return e+t}),0),y=Object(d.d)((function(e){return e.authReducer.user})),w=y.is_affiliate,C=y.affiliate_referal_code;return Object(j.jsx)(j.Fragment,{children:w?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(n.A,{children:[Object(j.jsx)(n.h,{sm:"6",lg:"4",style:{marginTop:"20px"},children:Object(j.jsxs)("div",{className:"pt-4 pl-3",style:{height:"170px",backgroundColor:"#0C5421",color:"#fff"},children:[Object(j.jsxs)("div",{className:" d-flex justify-content-between pr-3",children:[Object(j.jsx)("h4",{children:"Affiliate or referral Code"}),Object(j.jsx)("span",{className:"text-white  icon-position",children:Object(j.jsx)(l.a,{className:"fs-3"})})]}),Object(j.jsxs)("h4",{className:"font-weight-bold",children:["Code: ",C]})]})}),Object(j.jsx)(n.h,{sm:"6",lg:"4",style:{marginTop:"20px"},children:Object(j.jsx)("h4",{className:"text-uppercase text-center fs-2 mt-5",children:"Create your affiliate profile"})}),Object(j.jsx)(n.h,{sm:"6",lg:"4",style:{marginTop:"20px"},children:Object(j.jsxs)("div",{className:"pt-4 pl-3",style:{height:"170px",backgroundColor:"#0C5421",color:"#fff"},children:[Object(j.jsxs)("div",{className:" d-flex justify-content-between pr-3",children:[Object(j.jsx)("h4",{children:"Number of referred users"}),Object(j.jsx)("span",{className:"text-white  icon-position",children:Object(j.jsx)(a.a,{className:"fs-3"})})]}),Object(j.jsxs)("h4",{className:"font-weight-bold",children:["Number:",Object(j.jsx)("span",{className:"referred-user-number",children:"0"})]})]})})]}),Object(j.jsx)("div",{className:"affiliate-link-bounce",children:Object(j.jsx)("div",{className:"ikon",children:Object(j.jsx)(o.b,{title:"Click and fill in your details",style:{backgroundColor:"#C75A00",padding:"18px"},role:"button",to:"dashboard/profile",children:Object(j.jsx)("span",{className:"create-affiliate-profile",children:"Create Affiliate Profile"})})})})]}):Object(j.jsxs)(n.A,{children:[Object(j.jsx)(n.h,{sm:"6",lg:"4",style:{marginTop:"20px"},children:Object(j.jsxs)("div",{className:"pt-4 pl-3",style:{height:"170px",backgroundColor:"#C75A00",color:"#fff"},children:[Object(j.jsxs)("div",{className:" d-flex justify-content-between pr-3",children:[Object(j.jsx)("h4",{children:"Donations"}),Object(j.jsx)("span",{className:"text-white  icon-position",children:Object(j.jsx)(c.c,{className:"fs-3"})})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between pr-3",children:[Object(j.jsx)("p",{className:"mt-2",children:"Total Donations Received"}),Object(j.jsx)("p",{className:"font-weight-bold total-donations-received",children:h(O).format("0,0")})]}),Object(j.jsx)("p",{children:"Total Amount Donated"})]})}),Object(j.jsx)(n.h,{sm:"6",lg:"4",style:{marginTop:"20px"},children:Object(j.jsxs)("div",{className:"pt-4 pl-3",style:{height:"170px",backgroundColor:"#0C5421",color:"#fff"},children:[Object(j.jsxs)("div",{className:" d-flex justify-content-between pr-3",children:[Object(j.jsx)("h4",{children:"Funds Raised"}),Object(j.jsx)("span",{className:"text-white icon-position",children:Object(j.jsx)(i.b,{className:"fs-3"})})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between pr-3",children:[Object(j.jsx)("p",{className:"mt-2",children:"Total item funds raised "}),Object(j.jsx)("p",{className:"font-weight-bold total-donations-received",children:x})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between pr-3",children:[Object(j.jsx)("p",{className:"mt-2",children:"Total cash funds raised"}),Object(j.jsx)("p",{className:"font-weight-bold total-donations-received",children:p})]})]})}),Object(j.jsx)(n.h,{sm:"6",lg:"4",style:{marginTop:"20px"},children:Object(j.jsxs)("div",{className:"pt-4 pl-3 pr-3",style:{height:"170px",backgroundColor:"#C75A00",color:"#fff"},children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between pr-3",children:[Object(j.jsx)("h4",{children:"Total Orders"}),Object(j.jsx)("span",{className:"text-white icon-position",children:Object(j.jsx)(r.b,{className:"fs-3"})})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between pr-3",children:[Object(j.jsx)("p",{className:"mt-2",children:"Total Products Ordered"}),Object(j.jsx)("p",{className:"font-weight-bold total-donations-received",children:h(g).format("0,0")})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between pr-3",children:[Object(j.jsx)("p",{className:"mt-2",children:"Total Bid amount"}),Object(j.jsx)("p",{className:"font-weight-bold total-donations-received",children:h(v).format("0,0")})]})]})})]})})}}}]);
//# sourceMappingURL=19.993dd7e6.chunk.js.map
>>>>>>> 40b5defad8180d1d1f3b41ce00f486bd25a199d8:build/static/js/19.993dd7e6.chunk.js
