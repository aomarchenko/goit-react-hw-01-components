(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__2VM8b",avatar:"Profile_avatar__27k2E",description:"Profile_description__15Z3A",stats:"Profile_stats__2NWYr",quantity:"Profile_quantity__1lZTF",label:"Profile_label__1CkjB"}},function(e,a,t){e.exports={statList:"Statistics_statList__33tnY",item:"Statistics_item__V5txQ",label:"Statistics_label__4230R",percentage:"Statistics_percentage__wJ8w0"}},function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,function(e,a,t){e.exports={green:"FriendList_green__1Qsre",red:"FriendList_red__OeTmM",friendList:"FriendList_friendList__iVFwi",item:"FriendList_item__35ZZP"}},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__1o0XW",rows:"TransactionHistory_rows__1M5sX",head:"TransactionHistory_head__3efk6"}},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(8),n=t.n(c),s=t(4),i=t.n(s),r=(t(16),t(1)),d=t.n(r),l=t(0);function o(e){var a=e.username,t=e.tag,c=e.location,n=e.avatar,s=e.stats;return Object(l.jsxs)("div",{className:d.a.profile,children:[Object(l.jsxs)("div",{className:d.a.description,children:[Object(l.jsx)("img",{src:n,alt:"User avatar",className:d.a.avatar}),Object(l.jsx)("p",{className:d.a.name,children:a}),Object(l.jsxs)("p",{className:d.a.tag,children:["@",t]}),Object(l.jsx)("p",{className:d.a.location,children:c})]}),Object(l.jsxs)("ul",{className:d.a.stats,children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:d.a.label,children:"Followers"}),Object(l.jsx)("span",{className:d.a.quantity,children:s.followers})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:d.a.label,children:"Views"}),Object(l.jsx)("span",{className:d.a.quantity,children:s.views})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:d.a.label,children:"Likes"}),Object(l.jsx)("span",{className:d.a.quantity,children:s.likes})]})]})]})}var b=t(3),p=t(2),u=t.n(p);function j(){var e=Math.floor(16777216*Math.random()).toString(16);return"#000000".slice(0,-e.length)+e}function m(e){var a=e.title,t=e.stats;return Object(l.jsxs)("section",{className:u.a.statistics,children:[Object(l.jsx)("h2",{className:u.a.title,children:a}),Object(l.jsx)("ul",{className:u.a.statList,children:t.map((function(e){return Object(l.jsxs)("li",{className:u.a.item,style:{backgroundColor:j()},children:[Object(l.jsx)("span",{className:u.a.label,children:e.label}),Object(l.jsxs)("span",{className:u.a.percentage,children:[e.percentage,"%"]})]},e.id)}))})]})}var f=t(9),h=t(5),y=t.n(h);function O(e){var a=e.friends;return Object(l.jsx)("ul",{className:y.a.friendList,children:a.map((function(e){return Object(l.jsxs)("li",{className:y.a.item,children:[Object(l.jsx)("span",{className:y.a[e.isOnline?"green":"red"]}),Object(l.jsx)("img",{className:"avatar",src:e.avatar,alt:"User avatar",width:"48"}),Object(l.jsx)("p",{className:e.name,children:e.name})]},e.id)}))})}var x=t(10),_=(t(18),t(6)),v=t.n(_);function g(e){var a=e.transactions;return Object(l.jsxs)("table",{className:v.a.transactionHistory,children:[Object(l.jsx)("thead",{className:v.a.head,children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Type"}),Object(l.jsx)("th",{children:"Amount"}),Object(l.jsx)("th",{children:"Currency"})]})}),Object(l.jsx)("tbody",{className:v.a.rows,children:a.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.type}),Object(l.jsx)("td",{children:e.amount}),Object(l.jsx)("td",{children:e.currency})]},e.id)}))})]})}var N=t(11);var w=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{username:b.username,tag:b.tag,location:b.location,avatar:b.avatar,stats:b.stats}),Object(l.jsx)(m,{stats:f}),Object(l.jsx)(O,{friends:x}),Object(l.jsx)(g,{transactions:N})]})};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.querySelector("#root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.bc331fd9.chunk.js.map