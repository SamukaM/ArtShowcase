(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07ef59a0"],{"05c0":function(t,e,a){"use strict";var r=a("352a"),s=a.n(r);s.a},"352a":function(t,e,a){},"8aa2":function(t,e,a){"use strict";var r=a("e54b"),s=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("967e"));a("96cf");var n=s(a("3b8d")),o=(r(a("7dc5")),s(a("bc3a"))),l={component:{},data:function(t){return{usuario:null,nick:null,email:null,senha:null,idade:null,sexo:null}},methods:{redirect:function(){this.$router.push("/")},redirect1:function(){this.$router.push("login")},redirect2:function(){this.$router.push("register")},redirect3:function(){this.$router.push("AbaCamp")},redirect4:function(){this.$router.push("contact")},registrarUser:function(){var t=(0,n.default)(i.default.mark((function t(){var e=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.default;case 2:return o.default.post("http://localhost:3035/user/register",{usuario:this.usuario,nick:this.nick,email:this.email,senha:this.senha,idade:this.idade,sexo:this.sexo}).then((function(t){200==t.status?(alert("Usuário cadastrado com sucesso!"),e.$router.push("Confirm")):alert("Ocorreu um erro no cadastro.")})),t.next=5,o.default;case 5:o.default.post("http://localhost:3035/user/login",{nick:this.nick,senha:this.senha,user_data:[]}).then((function(t){if(200==t.status){e.user_data=t.data.user,localStorage.setItem("user_data",JSON.stringify(e.user_data));var a=JSON.parse(localStorage.getItem("user_data"));alert("Bem vindo "+a.nick+"!"),a=null,e.$router.push("/confirm")}else alert("Erro no cadastro!")}));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=l},a7c4:function(t,e,a){"use strict";a.r(e);var r=a("feb6"),s=a("fa39");for(var i in s)"default"!==i&&function(t){a.d(e,t,(function(){return s[t]}))}(i);a("05c0");var n=a("2877"),o=Object(n["a"])(s["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},fa39:function(t,e,a){"use strict";a.r(e);var r=a("8aa2"),s=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);e["default"]=s.a},feb6:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"corpo"},[a("div",{staticClass:"corpo-over"},[a("div",{staticClass:"fixed-top"},[a("b-navbar",{staticClass:"nav1",attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-navbar-brand",{staticClass:"title",attrs:{href:"#"},on:{click:t.redirect}},[a("img",{staticClass:"d-inline-block align-top",attrs:{src:"/img/whiteeagle.png",id:"eagle",alt:"eagle"}}),t._v("\n      ArtShowCase \n    ")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"text1"},[a("b-nav-item",{attrs:{href:"#"},on:{click:t.redirect3}},[t._v("Campeonatos")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1)],1)],1)],1)],1),a("center",[a("div",{staticClass:"sessionRegister"},[a("div",{staticClass:"topLoginRegister"},[a("h1",{staticClass:"welcome"},[t._v("É um iniciante?")]),a("img",{staticClass:"logo",attrs:{src:"/img/whiteeagle.png",id:"eagle2",alt:"eagle"}})]),a("b-form-input",{staticClass:"elemento10",attrs:{placeholder:"Nome Completo"},model:{value:t.usuario,callback:function(e){t.usuario=e},expression:"usuario"}}),a("b-form-input",{staticClass:"elemento20",attrs:{placeholder:"Username"},model:{value:t.nick,callback:function(e){t.nick=e},expression:"nick"}}),a("b-form-input",{staticClass:"elemento20",attrs:{placeholder:"E-mail"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("b-form-input",{staticClass:"elemento20",attrs:{placeholder:"Senha"},model:{value:t.senha,callback:function(e){t.senha=e},expression:"senha"}}),a("b-form-input",{staticClass:"elemento20",attrs:{placeholder:"Idade"},model:{value:t.idade,callback:function(e){t.idade=e},expression:"idade"}}),a("br"),a("br"),a("p",{staticClass:"alias"},[t._v("Escolha o seu Sexo")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.sexo,expression:"sexo"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.sexo=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Selecione um:")]),a("option",[t._v("Masculino")]),a("option",[t._v("Feminino")])]),a("br"),a("br"),a("b-button",{staticClass:"button1",attrs:{variant:"primary"},on:{click:t.registrarUser}},[t._v("Cadastrar")]),a("br"),a("br"),a("a",{staticClass:"link2",attrs:{href:"#"},on:{click:t.redirect1}},[t._v("Ainda não possui um perfil? Cadastre agora!")])],1),a("br"),a("br")])],1),t._m(0)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("footer",{attrs:{id:"suport"}},[a("ul",[a("li",[a("a",{attrs:{href:""}},[t._v("SkyHorse")])]),a("li",[a("a",{attrs:{href:""}},[t._v("Sobre Nós")])]),a("a",{staticClass:"right"},[t._v("2019, Projetado por Pietro.S. Codificado por SkyHorse.Labs")])])])])}];a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s}))}}]);
//# sourceMappingURL=chunk-07ef59a0.ef61bca5.js.map