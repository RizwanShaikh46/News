(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{103:function(e,t,a){e.exports=a(181)},108:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},179:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(95),c=a.n(l),s=(a(108),a(96)),o=a(97),i=a(102),u=a(101),m=a(98),p=a.n(m),h=(a(154),a(18)),b=a(2);a(155);var d=function(e){return r.a.createElement("article",null,r.a.createElement(h.b,{to:"/"},r.a.createElement("button",{className:"f6 dim no-underline br-pill ba ph3 pv2 mb2 dib black ma2"},"All")),r.a.createElement(h.b,{to:"/business"},r.a.createElement("button",{className:"f6 dim no-underline br-pill ba ph3 pv2 mb2 dib black ma2"},"Business")),r.a.createElement(h.b,{to:"/science"},r.a.createElement("button",{className:"f6 dim no-underline br-pill ba ph3 pv2 mb2 dib black ma1"},"Science")),r.a.createElement(h.b,{to:"/politics"},r.a.createElement("button",{className:"f6 dim no-underline br-pill ba ph3 pv2 mb2 dib black ma1"},"Politics")),r.a.createElement(h.b,{to:"/sports"},r.a.createElement("button",{className:"f6 dim no-underline br-pill ba ph3 pv2 mb2 dib black ma1"},"Sports")))};var E=function(e){return r.a.createElement("section",{className:"mw8 center"},r.a.createElement("h2",{className:"athelas ph3 ph0-1"},"News"),r.a.createElement(d,null),e.children)};var f=function(e){return r.a.createElement("article",{className:"pv4 bt bb b--black-10 ph3 ph0-1"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"w-100 w-60-ns pr3-ns order-2 order-1-ns"},r.a.createElement("a",{href:e.url,style:{textDecoration:"none",color:"black"},target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h1",{className:"f3 athelas mt0 lh-title"},e.title)),r.a.createElement("p",{className:"f5 f4-l lh-copy athelas"},e.content)),r.a.createElement("div",{className:"pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:e.urlToImage,className:"db",alt:""})))),r.a.createElement("p",{className:"f6 lh-copy gray mv0"},"By ",r.a.createElement("span",{className:"ttu"},e.author)),r.a.createElement("time",{className:"f6 db gray"},e.publishedAt))};var g=function(e){return r.a.createElement(E,null,e.articles.map((function(e,t){return r.a.createElement(f,{key:t,title:e.title,content:e.content,urlToImage:e.urlToImage,author:e.author,publishedAt:e.publishedAt,url:e.url})})))};var v=function(e){return r.a.createElement(E,null,e.science.map((function(e,t){return r.a.createElement(f,{key:t,title:e.title,content:e.content,urlToImage:e.urlToImage,author:e.author,publishedAt:e.publishedAt,url:e.url})})))};var y=function(e){return r.a.createElement(E,null,e.business.map((function(e,t){return r.a.createElement(f,{key:t,title:e.title,content:e.content,urlToImage:e.urlToImage,author:e.author,publishedAt:e.publishedAt,url:e.url})})))};var k=function(e){return r.a.createElement(E,null,e.politics.map((function(e,t){return r.a.createElement(f,{key:t,title:e.title,content:e.content,urlToImage:e.urlToImage,author:e.author,publishedAt:e.publishedAt,url:e.url})})))};var w=function(e){return r.a.createElement(E,null,e.sports.map((function(e,t){return r.a.createElement(f,{key:t,title:e.title,content:e.content,urlToImage:e.urlToImage,author:e.author,publishedAt:e.publishedAt,url:e.url})})))},N=a(100),A=a.n(N);a(179);var I=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(A.a,{type:"Puff",color:"#00BFFF",height:200,width:200}))},T=new p.a("cf7313e1ac4246f0a4d6188b4e531d56",{corsProxyUrl:"https://cors-anywhere.herokuapp.com/"}),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={articles:[],science:[],business:[],politics:[],sports:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;T.v2.topHeadlines({language:"en",country:"in"}).then((function(t){e.setState({articles:t.articles})})),T.v2.topHeadlines({category:"science",language:"en",country:"in"}).then((function(t){e.setState({science:t.articles})})),T.v2.topHeadlines({category:"business",language:"en",country:"in"}).then((function(t){e.setState({business:t.articles})})),T.v2.topHeadlines({category:"politics",language:"en",country:"in"}).then((function(t){e.setState({politics:t.articles})})),T.v2.topHeadlines({category:"sports",language:"en",country:"in"}).then((function(t){e.setState({sports:t.articles})}))}},{key:"render",value:function(){return 0===this.state.articles.length?r.a.createElement(I,null):r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/politics"},r.a.createElement(k,{politics:this.state.politics})),r.a.createElement(b.a,{path:"/sports"},r.a.createElement(w,{sports:this.state.sports})),r.a.createElement(b.a,{path:"/business"},r.a.createElement(y,{business:this.state.business})),r.a.createElement(b.a,{path:"/science"},r.a.createElement(v,{science:this.state.science})),r.a.createElement(b.a,{path:"/"},r.a.createElement(g,{articles:this.state.articles})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(180);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[103,1,2]]]);
//# sourceMappingURL=main.e725b17b.chunk.js.map