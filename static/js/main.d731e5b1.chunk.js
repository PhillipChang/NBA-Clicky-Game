(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Sixers",image:"./images/76ers.png"},{id:2,name:"Nets",image:"./images/net.png"},{id:3,name:"Pelican",image:"./images/pelican.png"},{id:4,name:"Celtics",image:"./images/celtics.png"},{id:5,name:"Thunder",image:"./images/thunder.png"},{id:6,name:"Raptors",image:"./images/raptors.png"},{id:7,name:"Spurs",image:"./images/spurs.png"},{id:8,name:"Clippers",image:"./images/clippers.png"},{id:9,name:"Bucks",image:"./images/bucks.png"},{id:10,name:"Jazz",image:"./images/jazz.png"},{id:11,name:"Blazers",image:"./images/trailblazers.png"},{id:12,name:"Warriors",image:"./images/warriors.png"}]},,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(3),o=t.n(i),r=(t(16),t(4)),c=t(5),m=t(8),l=t(6),g=t(9);t(17);var d=function(e){return s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.handleBtnClick(e.id,e.name)}})))};t(18);var u=function(e){return s.a.createElement("div",{className:"Wrapper"},e.children)};t(19);var p=function(e){return s.a.createElement("h1",{className:"title"},e.children," Message: ",e.message," Score: ",e.score," Top Score: ",e.topScore)},h=t(1),k=t(7),f=t.n(k),v=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={logos:h,logosClicked:[],score:0,topScore:0,message:""},t.gameDone=function(e){t.state.score>t.state.topScore&&(console.log("this happen"),t.setState({topScore:t.state.score})),t.setState({score:0})},t.handleBtnClick=function(e,a){var n=t.state.logosClicked;null===n?t.setState({logosClicked:n,score:t.state.score+1,message:"Click to start"}):n.includes(e)?(t.setState({logosClicked:[],score:0,message:"Good Game! You lost. Click to play again!"}),t.gameDone()):(t.setState({score:t.state.score+1}),n.push(e)&&t.setState({message:"You have recruited ".concat(a)}),12===n.length&&t.setState({score:12,logosClicked:[],message:"Congrats! You are a true NBA FAN!"})),t.randomize()},t}return Object(g.a)(a,e),Object(c.a)(a,[{key:"randomize",value:function(){f()(this.state.logos),this.setState({logos:h})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(u,null,s.a.createElement(p,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}," Clicky Game "),this.state.logos.map(function(a){return s.a.createElement(d,{id:a.id,key:a.id,name:a.name,image:a.image,handleBtnClick:e.handleBtnClick})})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.d731e5b1.chunk.js.map