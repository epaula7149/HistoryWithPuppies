(this.webpackJsonpHistoryWithPuppies=this.webpackJsonpHistoryWithPuppies||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),c=n.n(s),i=(n(12),n(1)),o=n(2),u=n(4),l=n(3),p=function(e){var t=e.starWarsShip,n=e.puppy;return r.a.createElement("div",{className:"tc bg-gold dib br3 pa10 ma12 grow bw12 shadow-15"},r.a.createElement("div",null,r.a.createElement("h3",null,t)),r.a.createElement("img",{alt:"pups want to meet you!",src:n}),r.a.createElement("h6",null,"(",n,")"))},h=function(e){var t=e.factOfHistory,n=e.puppy;return r.a.createElement("div",null,r.a.createElement(p,{starWarsShip:t,puppy:n.message}))},f=(n(13),function(e){var t=e.onSearchChange,n=e.onButtonSubmit;return r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form center pa14 br3 shadow-5"},r.a.createElement("input",{className:"pa14 ba b--red bg-white",type:"text",placeholder:"<--- TRY ## (2-75) ---\x3e",onChange:t}),r.a.createElement("div",{className:"center"},r.a.createElement("button",{className:"w-28 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n},"FORCE CLICK HERE"))))}),m=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"10px solid black",height:"500px"}},e.children)},d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(a.Component),g=function(){var e="https://swapi.dev/api/";function t(e,t){return fetch(e).then((function(e){return e.json()})).then((function(e){return"function"===typeof t&&t(e),e})).catch((function(e){console.log(e)}))}function n(n){return function(a,r){return t(e+n+"/"+a+"/",r)}}function a(n){return function(){var a=void 0,r=void 0;if(arguments.length>1?(a=arguments[0],r=arguments[1]):arguments[0]&&("function"===typeof arguments[0]?(r=arguments[0],a=null):(r=null,a=arguments[0])),a){for(var s=new URLSearchParams,c=0,i=Object.keys(a);c<i.length;c++){var o=i[c],u=a[o];s.append(o,u)}return t(e+n+"/?"+s.toString(),r)}return t(e+n+"/",r)}}return{getResources:function(n){return t(e,n)},getPerson:n("people"),getPeople:a("people"),getFilm:n("films"),getFilms:a("films"),getPlanet:n("planets"),getPlanets:a("planets"),getSpecies:n("species"),getAllSpecies:a("species"),getStarship:n("starships"),getStarships:a("starships"),getVehicle:n("vehicles"),getVehicles:a("vehicles")}}(),v=(n(14),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({yearRequested:t.target.value})},e.onButtonSubmit=function(){var t=e.state.yearRequested,n=g.getStarship(t).then((function(e){return e}));n.then((function(t){"Not found"!==t.detail?n.then((function(t){e.setState({factOfHistory:"The "+t.name+" *class="+t.starship_class+"* ("+t.model+") was manufactured by: "+t.manufacturer})})):e.setState({factOfHistory:"There are a ton of ships in Star Wars --- try again (2-75) --- BUT, HAVE A PUPPY!"})})),fetch("https://dog.ceo/api/breeds/image/random",{cache:"reload"}).then((function(e){return e.json()})).then((function(t){return e.setState({puppy:t})}))},e.state={yearRequested:9,factOfHistory:"Jedi Temple of Records...enter",puppy:{message:"https://media1.picsearch.com/is?MSUQjj1ifFWVg5r-CbQAh8pofi3rpn_akE6DH-tw67g&height=224"}},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.factOfHistory,n=e.yearRequested,a=e.puppy;return""===!t?r.a.createElement("h1",null,"Loading from EPA  A P I..."):r.a.createElement("div",{className:"tc"},r.a.createElement("p1",null,r.a.createElement("h1",null,"STAR WARS Ships (with Puppies!)")),r.a.createElement(f,{onSearchChange:this.onSearchChange,onButtonSubmit:this.onButtonSubmit}),r.a.createElement(m,null,r.a.createElement(d,null,r.a.createElement(h,{yearRequested:n,factOfHistory:t,puppy:a}))))}}]),n}(a.Component));n(15);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.ee1151f5.chunk.js.map