(this.webpackJsonpcreate=this.webpackJsonpcreate||[]).push([[0],{108:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(10),r=t.n(c),i=(t(51),t(13)),s=t(2),l=t(111);var m={get:function(e,a,t){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t||(t={}),t=Object.assign({Accept:"application/json","Content-Type":"application/json"},t),n||(t.accessToken=localStorage.getItem("access_token"),null===t.accessToken&&(t.accessToken=""));var o={method:"GET",headers:t};fetch(e,o).then((function(e){return e.json()})).then((function(e){530==e.code||a(e.data)}))}},h={testList:"http://192.168.1.192:3000/api"},E=(t(52),function(){return Object(n.useEffect)((function(){var e=h.testList;m.get(e,(function(e){console.log(e)}))}),[]),o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"home_box clearfix"},o.a.createElement("div",{className:"home_content b_r_5"}),o.a.createElement(l.a,{offsetTop:70},o.a.createElement("div",{className:"home_another b_r_5"}))))}),f=t(110),u=(t(93),function(){return o.a.createElement(l.a,{offsetTop:0},o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"header_box clearfix"},o.a.createElement("div",{className:"header_logo"},o.a.createElement("img",{alt:"",src:t(94),onClick:function(){window.location.href="#/"}})),o.a.createElement("div",{className:"header_nav"},o.a.createElement("span",{onClick:function(){window.location.href="#/"}},"\u9996\u9875"),o.a.createElement("span",{onClick:function(){window.location.href="#/bbpage"}},"\u903c\u903c\u53e8\u53e8"),o.a.createElement("span",null,"\u4e2a\u4eba\u7a7a\u95f4")))))}),A=(f.a.Header,f.a.Content),p=f.a.Footer;f.a.Sider;var k=[{path:"/",component:o.a.memo((function(e){var a=e.route;return o.a.createElement(f.a,{style:{minHeight:"100%"}},o.a.createElement(u,null),o.a.createElement(f.a,null,o.a.createElement(A,null," ",Object(i.a)(a.routes))),o.a.createElement(p,null,"footer"))})),routes:[{path:"/",exact:!0,render:function(){return o.a.createElement(s.a,{to:"/home"})}},{path:"/home",component:E},{path:"/bbpage",component:function(){return o.a.createElement("div",null,"\u6211\u7684\u903c\u903c\u53e8\u53e8\u680f\u76ee")}}]}],w=t(24);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(107);r.a.render(o.a.createElement(w.a,null,Object(i.a)(k)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,a,t){e.exports=t(108)},51:function(e,a,t){},52:function(e,a,t){},93:function(e,a,t){},94:function(e,a){e.exports="data:image/png;base64,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"}},[[46,1,2]]]);
//# sourceMappingURL=main.ff45e377.chunk.js.map