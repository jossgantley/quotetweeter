(this["webpackJsonpquote-tweeter-app"]=this["webpackJsonpquote-tweeter-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),s=a.n(r),i=(a(12),a(3)),c=a(4),l=a(6),u=a(5),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=function(){var e=Math.floor(Math.random()*n.state.quotes.length);n.setState({text:n.state.quotes[e].text,author:n.state.quotes[e].author})},n.state={text:[],author:[],quotes:[],isLoading:!0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=Math.floor(Math.random()*this.state.quotes.length);fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(a){var n=a.filter((function(e){return null!=e.author}));e.setState({quotes:n,text:a[t].text,author:a[t].author,isLoading:!1})}))}},{key:"render",value:function(){return this.state.isLoading?o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"heading"},o.a.createElement("h1",{className:"big-text"},"The Quote Tweeter")),o.a.createElement("div",{className:"spinner-container"},o.a.createElement("i",{className:"loading spinner fas fa-spinner fa-spin"}))):o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:" heading"},o.a.createElement("h1",{className:"big-text"},"The Quote Tweeter")),o.a.createElement("div",{className:" lightblue",id:"quote-box"},o.a.createElement("h2",{className:"quote-text ",id:"text"},o.a.createElement("i",{className:"darkblue fas fa-quote-left"})," ",this.state.text),o.a.createElement("h4",{className:"darkblue author",id:"author"},"-",this.state.author),o.a.createElement("button",{className:"button "},o.a.createElement("a",{className:"twitter-share-button",id:"tweet-quote",href:"https://twitter.com/intent/tweet?text=".concat(this.state.text,"--").concat(this.state.author),target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"bird fab fa-twitter"})," Tweet")),o.a.createElement("button",{className:"button",id:"new-quote",onClick:this.handleClick},"New Quote")),o.a.createElement("footer",{className:"footer-text"},"by Joss Gantley"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.21338c83.chunk.js.map