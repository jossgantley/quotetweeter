(this["webpackJsonpquote-tweeter-app"]=this["webpackJsonpquote-tweeter-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),s=a.n(o),c=(a(12),a(3)),i=a(4),l=a(6),u=a(5),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=function(){var e=Math.floor(Math.random()*n.state.quotes.length);n.setState({text:n.state.quotes[e].text,author:n.state.quotes[e].author})},n.state={text:[],author:[],quotes:[],isLoading:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=Math.floor(Math.random()*this.state.quotes.length);fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(a){var n=a.filter((function(e){return null!=e.author}));e.setState({quotes:n,text:a[t].text,author:a[t].author,isLoading:!1})}))}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container center heading"},r.a.createElement("h1",{className:"big-text"},"The Quote Tweeter")),r.a.createElement("div",{className:"container center"},r.a.createElement("i",{className:"loading spinner fas fa-spinner fa-spin"}))):r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container center heading"},r.a.createElement("h1",{className:"big-text"},"The Quote Tweeter")),r.a.createElement("div",{className:"container center lightblue",id:"quote-box"},r.a.createElement("h2",{className:"quote-text center",id:"text"},r.a.createElement("i",{className:"darkblue fas fa-quote-left"})," ",this.state.text),r.a.createElement("h4",{className:"darkblue author",id:"author"},"-",this.state.author),r.a.createElement("button",{className:"button waves-effect waves-light blue darken-4 btn-large left"},r.a.createElement("a",{className:"twitter-share-button",id:"tweet-quote",href:"https://twitter.com/intent/tweet?text=".concat(this.state.text,"--").concat(this.state.author),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"bird fab fa-twitter"}),"Tweet")),r.a.createElement("button",{className:"button waves-effect waves-light blue darken-4 btn-large right",id:"new-quote",onClick:this.handleClick},"New Quote")),r.a.createElement("footer",{className:" center blue-text text-darken-4"},"by Joss Gantley"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.1438ec86.chunk.js.map