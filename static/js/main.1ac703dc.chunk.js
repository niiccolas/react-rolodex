(this["webpackJsonpfeline-rolodex"]=this["webpackJsonpfeline-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),o=t.n(c),s=(t(14),t(1)),l=t.n(s),i=t(4),u=t(5),m=t(7),p=t(6),d=t(8),h=(t(16),t(17),function(e){var a=e.name,t=e.email,n=e.avatar;return r.a.createElement("div",{className:"Card"},r.a.createElement("img",{className:"Card__img",alt:"placeholder",src:n.urls[4][512]}),r.a.createElement("h2",{className:"Card__title"},a),r.a.createElement("small",{className:"Card__footer"},t))}),f=(t(18),function(e){var a=e.data,t=a.searchField,n=a.users.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"CardList"},n.map((function(e,a){var t=e.email,n=e.name,c=e.avatar,o=e.id;return r.a.createElement(h,{name:"".concat(n.first," ").concat(n.last),email:t,key:o.value,avatar:c})})))}),g=(t(19),function(e){var a=e.placeholder,t=e.handleChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"SearchBox__input",type:"search",placeholder:a,onChange:t}))}),v=function(e){function a(){var e;return Object(u.a)(this,a),(e=Object(m.a)(this,Object(p.a)(a).call(this))).componentDidMount=Object(i.a)(l.a.mark((function a(){var t,n,r,c,o,s,i,u,m;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://randomuser.me/api/?nat=us,dk,fr,gb&page=1&results=".concat(15));case 3:return t=a.sent,a.next=6,t.json();case 6:return n=a.sent,r=n.results,a.next=10,fetch("https://api.generated.photos/api/v1/faces?gender=female&emotion=joy&age=young-adult&api_key=RmggqtzTU2z8vP7m8rYqDw");case 10:return c=a.sent,a.next=13,c.json();case 13:return o=a.sent,a.next=16,fetch("https://api.generated.photos/api/v1/faces?gender=male&emotion=joy&age=young-adult&api_key=RmggqtzTU2z8vP7m8rYqDw");case 16:return s=a.sent,a.next=19,s.json();case 19:return i=a.sent,a.next=22,fetch("https://api.generated.photos/api/v1/faces?per_page=".concat(15,"&emotion=joy&age=young-adult&api_key=RmggqtzTU2z8vP7m8rYqDw"));case 22:return u=a.sent,a.next=25,u.json();case 25:m=a.sent,m.faces,r.forEach((function(e){e.avatar="female"===e.gender?o.faces.pop():i.faces.pop()})),e.setState({users:r}),a.next=34;break;case 31:a.prev=31,a.t0=a.catch(0),console.log("There was an error: ".concat(a.t0));case 34:case"end":return a.stop()}}),a,null,[[0,31]])}))),e.handleChange=function(a){e.setState({searchField:a.target.value})},e.render=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App__title"},"R_Rolodex"),r.a.createElement(g,{placeholder:"Filter items here\u2026",handleChange:e.handleChange}),r.a.createElement(f,{data:e.state}))},e.state={users:[],searchField:""},e}return Object(d.a)(a,e),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1ac703dc.chunk.js.map