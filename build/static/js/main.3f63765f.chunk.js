(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{31:function(e,t,a){e.exports=a(55)},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(18),r=a.n(o),c=a(59),i=a(57),u=a(19),s=a(20),h=a(21),m=a(29),d=a(22),g=a(6),v=a(28),E=a(23),p=a.n(E),b=a(56),f=a(58),y=a(26),S=a(60),w=a(61),C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={month:1,year:2019,lat:45.5898,long:-122.5951,loading:!1,show:!1,coolingActivated:0,heatingActivated:0},e.handleMonthChange=e.handleMonthChange.bind(Object(g.a)(e)),e.handleYearChange=e.handleYearChange.bind(Object(g.a)(e)),e}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=new Date,t=e.getMonth()+1;this.setState({month:t,year:e.getFullYear()})}},{key:"handleInputChange",value:function(e){var t=this;return console.log(e),console.log(this.state),function(a){console.log(a),t.setState(Object(u.a)({},e,a))}}},{key:"handleYearChange",value:function(e){var t=this;this.setState({year:e.target.value},function(){console.log(t.state)})}},{key:"handleMonthChange",value:function(e){var t=this;this.setState({month:e.target.value},function(){console.log(t.state)})}},{key:"onSubmit",value:function(){var e=this;console.log("Submit"),this.setState({loading:!0});var t={month:this.state.month,year:this.state.year,lat:this.state.lat,long:this.state.long};p.a.post("https://lyons-demo-app.herokuapp.com/api",t).then(function(t){console.log(t.data);var a=t.data;e.setState({coolingActivated:a.coolingActivated,heatingActivated:a.heatingActivated,show:!0,loading:!1})}).catch(function(e){alert(e.response.data.message)}).then(function(){e.setState({loading:!1})})}},{key:"render",value:function(){for(var e,t=this,a=[],n=1948;n<=2030;n++)a.push(n);return a.reverse(),this.state.show&&(e=l.a.createElement(b.a,{bordered:!0},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Cooling Activated"),l.a.createElement("td",null,this.state.coolingActivated)),l.a.createElement("tr",null,l.a.createElement("td",null,"Heating Activated"),l.a.createElement("td",null,this.state.heatingActivated))))),this.state.loading&&(e=l.a.createElement("h1",null,"Loading...")),l.a.createElement(i.a,null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(f.a,null,l.a.createElement(y.a,null,l.a.createElement(S.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(S.a.Label,null,"Select Month"),l.a.createElement(S.a.Control,{as:"select",value:this.state.month,onChange:this.handleMonthChange},["January","February","March","April","May","June","July","August","September","October","November","December"].map(function(e,t){return l.a.createElement("option",{key:t+1,value:t+1},e)})))),l.a.createElement(y.a,null,l.a.createElement(S.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(S.a.Label,null,"Select Year"),l.a.createElement(S.a.Control,{as:"select",value:this.state.year,onChange:this.handleYearChange},a.map(function(e){return l.a.createElement("option",{key:e,value:e},e)}))))),l.a.createElement(f.a,null,l.a.createElement(y.a,null,l.a.createElement(w.a,{onClick:function(){return t.onSubmit()}},"Submit")))),l.a.createElement(f.a,{className:"mt-3"},l.a.createElement(y.a,null,e)))}}]),t}(n.Component);var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement("h1",null,"Hello!"),l.a.createElement("p",null,"Welcome to the demo for the Dark Sky API wrapper."),l.a.createElement("p",null,"Submit a Month and Year below to find out how many times the heating/ cooling came on!"))),l.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.3f63765f.chunk.js.map