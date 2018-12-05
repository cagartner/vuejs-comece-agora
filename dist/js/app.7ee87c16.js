(function(e){function t(t){for(var s,o,i=t[0],r=t[1],d=t[2],p=0,v=[];p<i.length;p++)o=i[p],a[o]&&v.push(a[o][0]),a[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);c&&c(t);while(v.length)v.shift()();return l.push.apply(l,d||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],s=!0,i=1;i<n.length;i++){var r=n[i];0!==a[r]&&(s=!1)}s&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={app:0},l=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=r;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Talk")],1)},l=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"talk"}},[s("div",{staticClass:"eg-slideshow"},[s("slide",{staticClass:"slide-1",attrs:{enter:"fadeIn"}},[s("div",{staticClass:"header"},[s("img",{staticClass:"logo",attrs:{src:n("9b19")}}),s("div",{staticClass:"left"},[s("h1",[e._v("Vue.js")]),s("h2",[e._v("Implementando em Projetos já existentes.")])])])]),s("slide",{staticClass:"slide-2",attrs:{enter:"fadeIn"}},[s("img",{attrs:{src:n("8f09")}}),s("h1",[e._v("Quem Sou Eu?")]),s("p",{staticClass:"author"},[e._v("Meu nome é "),s("strong",[e._v("Carlos Augusto Gartner")])]),s("ul",[s("li",[e._v("Desenvolvedor since 2011")]),s("li",[e._v("Full-stack Developer PHP e Node")]),s("li",{staticClass:"trezo"},[e._v("Sênior Frontend Developer na "),s("span",[e._v("Trezo Soluções WEB")])]),s("li",[s("i",{staticClass:"fab fa-github"}),e._v(" github.com/cagartner")]),s("li",[s("i",{staticClass:"fab fa-medium"}),e._v(" medium.com/@cagartner")])])]),s("slide",{staticClass:"slide-3",attrs:{enter:"fadeIn",steps:2}},[s("h1",[e._v("Antes de mais nada...")]),s("eg-transition",{attrs:{enter:"fadeIn"}},[e.step>=2?s("h2",{staticClass:"s-cl"},[e._v("Se pronuncia "),s("strong",{staticClass:"d-cl"},[e._v("VIEW")]),e._v(".")]):e._e()])],1),s("slide",{staticClass:"slide-history",attrs:{enter:"fadeIn",steps:5}},[s("h1",[e._v("Um pouco de "),s("span",{staticClass:"p-cl"},[e._v("história")]),e._v("...")]),s("ul",[e.step>=2?s("li",[e._v("Criado por "),s("span",{staticClass:"p-cl"},[e._v("Evan You")]),e._v(".")]):e._e(),e.step>=3?s("li",[e._v("Iniciado em "),s("span",{staticClass:"p-cl"},[e._v("2013")]),e._v(".")]):e._e(),e.step>=4?s("li",[e._v("Lançado em "),s("span",{staticClass:"p-cl"},[e._v("20014")]),e._v(".")]):e._e(),e.step>=5?s("li",[e._v("Trabalhou na Google com Projetos em Angular.")]):e._e()])]),s("slide",{attrs:{enter:"fadeIn",steps:6}},[s("h1",[e._v("Simplicidade:")]),s("ul",[e.step>=2?s("li",[e._v("runtime")]):e._e(),e.step>=3?s("li",[e._v("webpack")]):e._e(),e.step>=4?s("li",[e._v("web components")]):e._e(),e.step>=5?s("li",[e._v("browserify")]):e._e(),e.step>=6?s("li",[e._v("requirejs")]):e._e()])]),s("slide",{attrs:{enter:"fadeIn",steps:14}},[s("h1",[e._v("Escolha:")]),s("ul",[e.step>=2?s("li",[e._v("Use no HTML")]):e._e(),e.step>=3?s("li",[e._v("Use como string no Javascript")]):e._e(),e.step>=4?s("li",[e._v("Use como JSX")]):e._e(),e.step>=5?s("li",[e._v("Template:"),s("ul",[e.step>=6?s("li",[e._v("HTML Binding")]):e._e(),e.step>=7?s("li",[e._v("JSX")]):e._e(),e.step>=8?s("li",[e._v("Jade")]):e._e(),e.step>=9?s("li",[e._v("Pug")]):e._e()])]):e._e(),e.step>=10?s("li",[e._v("Componente:"),s("ul",[e.step>=11?s("li",[e._v("ES5")]):e._e(),e.step>=12?s("li",[e._v("ES6/ES7")]):e._e(),e.step>=13?s("li",[e._v("ES6 + Flow")]):e._e(),e.step>=14?s("li",[e._v("TypeScript")]):e._e()])]):e._e()])]),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",[e._v("O Básico")]),s("eg-code-block",{attrs:{lang:"html"}},[e._v('<html>\n    <head>\n       // ...\n    </head>\n    <body>\n        <div id="app">\n            '+e._s(e.heloWorldExample)+'\n        </div>\n\n         <script src="https://cdn.jsdelivr.net/npm/vue"><\/script>\n         <script src="app.js"><\/script>\n    </body>\n</html>')]),s("eg-code-block",{attrs:{lang:"js"}},[e._v("// app.js file\nvar app = new Vue({\n    el: '#app',\n    data: {\n        message: 'Hello Vue!'\n    }\n});\n")])],1),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",{staticClass:"d2"},[e._v("Diretivas")]),s("div",{staticClass:"columns wide"},[s("div",{staticClass:"column"},[s("h3",[e._v("v-bind")]),s("eg-code-block",{attrs:{lang:"html"}},[e._v('\x3c!-- sintaxe completa --\x3e\n<a v-bind:href="url"></a>\n\x3c!-- abreviado --\x3e\n<a :href="url"></a>')])],1),s("div",{staticClass:"column"},[s("h3",[e._v("v-on")]),s("eg-code-block",{attrs:{lang:"html"}},[e._v('\x3c!-- sintaxe completa --\x3e\n<a v-on:click="doMethod"></a>\n\x3c!-- abreviado --\x3e\n<a @click="doMethod"></a>\n')])],1)])]),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",{staticClass:"d2"},[e._v("Loop")]),s("eg-code-block",{attrs:{lang:"html"}},[e._v('<ul>\n    <li v-for="todo in todoList">'+e._s(e.exampleLoop)+"</li>\n</ul>")]),s("eg-code-block",{attrs:{lang:"js"}},[e._v('\x3c!-- JS --\x3e\nvar methods = new Vue({\n    el: \'#loop\',\n    data: {\n        todoList: [\n            {id: 1, task: "Fazer Palestras"},\n            {id: 2, task: "Responder Perguntas"},\n            {id: 3, task: "Agradecimentos"},\n        ]\n    }\n})\n')])],1),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",{staticClass:"d2"},[e._v("IF")]),s("eg-code-block",{attrs:{lang:"html"}},[e._v('<ul>\n    <li v-for="todo in todoList" v-if="!todo.finished">'+e._s(e.exampleLoop)+"</li>\n</ul>")]),s("eg-code-block",{attrs:{lang:"js"}},[e._v('\x3c!-- JS --\x3e\nvar methods = new Vue({\n    el: \'#loop\',\n    data: {\n        todoList: [\n            {id: 1, task: "Fazer Palestras", finished: true},\n            {id: 2, task: "Responder Perguntas", finished: false},\n            {id: 3, task: "Agradecimentos", finished: false},\n        ]\n    }\n})\n')])],1),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",{staticClass:"d2"},[e._v("Manipulação de Eventos")]),s("eg-code-block",{attrs:{lang:"html"}},[e._v('\x3c!-- HTML --\x3e\n<div id="methods">\n    <button v-on:click="addCounter()">Adiciona 1</button>\n    <p>Você clicou '+e._s(e.exampleMethod)+" vezes</p>\n</div>")]),s("eg-code-block",{attrs:{lang:"js"}},[e._v("\x3c!-- JS --\x3e\nvar methods = new Vue({\n    el: '#methods',\n    data: {\n        counter: 0\n    },\n    methods: {\n        addCounter: function () {\n            this.counter += 1;\n        }\n    }\n})\n")])],1),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",{staticClass:"d2"},[e._v("Form Input Binding")]),s("eg-code-block",{attrs:{lang:"html"}},[e._v('\x3c!-- HTML --\x3e\n<input v-model="message" placeholder="Me altere">\n<p>Mensagem é: '+e._s(e.exampleFormBinding)+"</p>")]),s("hr"),s("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),s("p",[e._v("Mensagem é: "+e._s(e.message))])],1),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",{staticClass:"d2"},[e._v("Chega de Blábláblá...")]),s("h3",[e._v("Vamos ao que interessa!")])]),s("slide",{attrs:{enter:"fadeIn",steps:2}},[s("h1",{staticClass:"d3"},[e._v("Então, posso implementar em um projeto já existente?")]),e.step>=2?s("h3",[e._v("Resposta: Sim!")]):e._e()]),s("slide",{attrs:{enter:"fadeIn",steps:2}},[s("h1",{staticClass:"d3"},[e._v("Implementação Básica")]),s("eg-code-block",{attrs:{lang:"html"}},[e._v('<html>\n    <head>\n       // ...\n    </head>\n    <body>\n        <div id="app">\n            '+e._s(e.heloWorldExample)+'\n        </div>\n\n         <script src="https://cdn.jsdelivr.net/npm/vue"><\/script>\n         <script src="app.js"><\/script>\n    </body>\n</html>')]),s("eg-code-block",{attrs:{lang:"js"}},[e._v("// app.js file\nvar app = new Vue({\n    el: '#app',\n    data: {\n        message: 'Hello Vue!'\n    }\n});\n")])],1),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",[e._v("Exemplo Prático")]),s("p",[e._v(" github.com/cagartner/vue-exemplo-simples")])]),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",[e._v("Desvatagens")]),s("p",[e._v("Método antigo e ultrapassado")]),s("p",[e._v("Necessário criar vários scripts para cada componente")]),s("p",[e._v("Roda em runtime")])]),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",{staticClass:"d2"},[e._v("Implementação Avançada "),s("br"),e._v(" com Laravel Mix")]),s("p",[e._v("https://laravel-mix.com/docs/2.1/installation")]),s("eg-code-block",{attrs:{lang:"sh"}},[e._v("// pasta do frontend do seu projeto\nnpm init -y\nnpm install laravel-mix --save-dev\ncp node_modules/laravel-mix/setup/webpack.mix.js ./\n// instale Vue.js\nnpm install vue\n")])],1),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",{staticClass:"d2"},[e._v("Crie um arquivo main.js")]),s("eg-code-block",{attrs:{lang:"javascript"}},[e._v("# importe o vue no main.js\nimport Vue from 'vue'\n\n# Import de seus componentes do projeto\nimport HelloWorld from './components/HelloWorld.vue'\n\nnew Vue({\n    el: '#app',\n    components: {\n        'hello-world': HelloWorld\n    }\n})\n")])],1),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",{staticClass:"d2"},[e._v("Configure webpack.mix.js")]),s("eg-code-block",{attrs:{lang:"javascript"}},[e._v("let mix = require('laravel-mix');\n\nmix.js('src/main.js', 'dist/');")]),s("p",[e._v("Veja a mágica acontecer!")])],1),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",{staticClass:"d2"},[e._v("Componente VUE")]),s("p",[e._v("Centralização")]),s("p",[e._v("HTML, CSS e JS no mesmo arquivo")]),s("p",[e._v("Reutilização")])]),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",{staticClass:"d2"},[e._v("Exemplo de Componente")]),s("eg-code-block",{attrs:{lang:"html"}},[e._v('\n<template>\n    <div class="hello-world">\n        '+e._s(e.heloWorldExample)+"\n    </div>\n</template>\n\n<script>\n    export default {\n        name: 'helloWorld',\n        data: function () {\n            return {\n                message: 'Example'\n            }\n        }\n    }\n<\/script>\n\n<style >\n    .hello-world {\n        color: red;\n        font-size: 2rem;\n    }\n</style>\n")])],1),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",{staticClass:"d2"},[e._v("Use como web componente no seu projeto.")]),s("eg-code-block",{attrs:{lang:"html"}},[e._v('<html>\n    <head>\n        // ...\n    </head>\n    <body>\n         <div id="app">\n            <hello-world></hello-world>\n         </div>\n        <script src="build.js"><\/script>\n    </body>\n</html>\n\n')])],1),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",{staticClass:"d2"},[e._v("Desvantagem")]),s("p",[e._v("Sem tag script no meio do código")]),s("p",[e._v("Precisa rodar build para testar")])]),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",[e._v("Dúvidas?")])]),s("slide",{attrs:{enter:"fadeIn"}},[s("h1",[e._v('"Less is More"')]),s("small",{staticClass:"p-cl"},[e._v("You, Evan - Criador do VueJS")])])],1)])},i=[],r=(n("fe80"),n("d973")),d={name:"Talk",data:function(){return{message:"Exemplo",heloWorldExample:"{{ message }}",exampleMethod:"{{ counter }}",exampleFormBinding:"{{ message }}",exampleLoop:"{{ todo.task }}"}},mixins:[r["b"]]},c=d,p=(n("f1a9"),n("2877")),v=Object(p["a"])(c,o,i,!1,null,null,null);v.options.__file="Talk.vue";var u=v.exports,m={name:"app",components:{Talk:u}},_=m,h=(n("5c0b"),Object(p["a"])(_,a,l,!1,null,null,null));h.options.__file="App.vue";var f=h.exports,g=(n("b159"),n("6e2e"),n("1487")),b=n.n(g);n("77ed"),n("15f5");r["a"].hljs=b.a,s["a"].use(r["c"]),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("5e27"),a=n.n(s);a.a},"5e27":function(e,t,n){},"8f09":function(e,t,n){e.exports=n.p+"img/cagartner.150ea2f7.jpg"},"9b19":function(e,t,n){e.exports=n.p+"img/logo.9c55c164.svg"},a5f6:function(e,t,n){},f1a9:function(e,t,n){"use strict";var s=n("a5f6"),a=n.n(s);a.a}});
//# sourceMappingURL=app.7ee87c16.js.map