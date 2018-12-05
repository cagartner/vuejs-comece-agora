<template lang="pug">
    #talk
        .eg-slideshow
            slide(enter='fadeIn' class="slide-1")
                .header
                    img(src="../assets/logo.svg" class="logo")
                    .left
                        h1 Vue.js
                        h2 Implementando em Projetos já existentes.

            slide(enter='fadeIn' class="slide-2")
                img(src="../assets/cagartner.jpg")
                h1 Quem Sou Eu?
                p.author Meu nome é <strong>Carlos Augusto Gartner</strong>
                ul
                    li Desenvolvedor since 2011
                    li Full-stack Developer PHP e Node
                    li.trezo Sênior Frontend Developer na <span>Trezo Soluções WEB</span>
                    li <i class="fab fa-github"></i> github.com/cagartner
                    li <i class="fab fa-medium"></i> medium.com/@cagartner

            slide(enter="fadeIn" class="slide-3" :steps="2")
                h1 Antes de mais nada...
                eg-transition(enter='fadeIn')
                    h2.s-cl(v-if="step >= 2") Se pronuncia <strong class="d-cl">VIEW</strong>.

            slide(enter="fadeIn" class="slide-history" :steps="5")
                h1 Um pouco de <span class="p-cl">história</span>...
                ul
                    li(v-if='step >= 2') Criado por <span class="p-cl">Evan You</span>.
                    li(v-if='step >= 3') Iniciado em <span class="p-cl">2013</span>.
                    li(v-if='step >= 4') Lançado em <span class="p-cl">20014</span>.
                    li(v-if='step >= 5') Trabalhou na Google com Projetos em Angular.

            slide(enter="fadeIn" :steps="6")
                h1 Simplicidade:
                ul
                    li(v-if='step >= 2') runtime
                    li(v-if='step >= 3') webpack
                    li(v-if='step >= 4') web components
                    li(v-if='step >= 5') browserify
                    li(v-if='step >= 6') requirejs

            slide(enter="fadeIn" :steps="14")
                h1 Escolha:
                ul
                    li(v-if='step >= 2') Use no HTML
                    li(v-if='step >= 3') Use como string no Javascript
                    li(v-if='step >= 4') Use como JSX
                    li(v-if='step >= 5') Template:
                        ul
                            li(v-if='step >= 6') HTML Binding
                            li(v-if='step >= 7') JSX
                            li(v-if='step >= 8') Jade
                            li(v-if='step >= 9') Pug
                    li(v-if='step >= 10') Componente:
                        ul
                            li(v-if='step >= 11') ES5
                            li(v-if='step >= 12') ES6/ES7
                            li(v-if='step >= 13') ES6 + Flow
                            li(v-if='step >= 14') TypeScript

            slide(enter="fadeIn")
                h1 O Básico
                eg-code-block(lang="html").
                    &lt;html&gt;
                        &lt;head&gt;
                           // ...
                        &lt;/head&gt;
                        &lt;body&gt;
                            &lt;div id=&quot;app&quot;&gt;
                                {{ heloWorldExample }}
                            &lt;/div&gt;

                             &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue&quot;&gt;&lt;/script&gt;
                             &lt;script src=&quot;app.js&quot;&gt;&lt;/script&gt;
                        &lt;/body&gt;
                    &lt;/html&gt;
                eg-code-block(lang="js").
                    // app.js file
                    var app = new Vue({
                        el: '#app',
                        data: {
                            message: 'Hello Vue!'
                        }
                    });

            slide(enter="fadeIn")
                h1.d2 Diretivas
                .columns.wide
                    .column
                        h3 v-bind
                        eg-code-block(lang="html").
                            &lt;!-- sintaxe completa --&gt;
                            &lt;a v-bind:href=&quot;url&quot;&gt;&lt;/a&gt;
                            &lt;!-- abreviado --&gt;
                            &lt;a :href=&quot;url&quot;&gt;&lt;/a&gt;
                    .column
                        h3 v-on
                        eg-code-block(lang="html").
                            &lt;!-- sintaxe completa --&gt;
                            &lt;a v-on:click=&quot;doMethod&quot;&gt;&lt;/a&gt;
                            &lt;!-- abreviado --&gt;
                            &lt;a @click=&quot;doMethod&quot;&gt;&lt;/a&gt;

            slide(enter="fadeIn")
                h1.d2 Loop
                eg-code-block(lang="html").
                    &lt;ul&gt;
                        &lt;li v-for=&quot;todo in todoList&quot;&gt;{{ exampleLoop }}&lt;/li&gt;
                    &lt;/ul&gt;
                eg-code-block(lang="js").
                    &lt;!-- JS --&gt;
                    var methods = new Vue({
                        el: '#loop',
                        data: {
                            todoList: [
                                {id: 1, task: "Fazer Palestras"},
                                {id: 2, task: "Responder Perguntas"},
                                {id: 3, task: "Agradecimentos"},
                            ]
                        }
                    })

            slide(enter="fadeIn")
                h1.d2 IF
                eg-code-block(lang="html").
                    &lt;ul&gt;
                        &lt;li v-for=&quot;todo in todoList&quot; v-if=&quot;!todo.finished&quot;&gt;{{ exampleLoop }}&lt;/li&gt;
                    &lt;/ul&gt;
                eg-code-block(lang="js").
                    &lt;!-- JS --&gt;
                    var methods = new Vue({
                        el: '#loop',
                        data: {
                            todoList: [
                                {id: 1, task: "Fazer Palestras", finished: true},
                                {id: 2, task: "Responder Perguntas", finished: false},
                                {id: 3, task: "Agradecimentos", finished: false},
                            ]
                        }
                    })

            slide(enter="fadeIn")
                h1.d2 Manipulação de Eventos
                eg-code-block(lang="html").
                    &lt;!-- HTML --&gt;
                    &lt;div id=&quot;methods&quot;&gt;
                        &lt;button v-on:click=&quot;addCounter()&quot;&gt;Adiciona 1&lt;/button&gt;
                        &lt;p&gt;Voc&ecirc; clicou {{ exampleMethod }} vezes&lt;/p&gt;
                    &lt;/div&gt;
                eg-code-block(lang="js").
                    &lt;!-- JS --&gt;
                    var methods = new Vue({
                        el: '#methods',
                        data: {
                            counter: 0
                        },
                        methods: {
                            addCounter: function () {
                                this.counter += 1;
                            }
                        }
                    })

            slide(enter="fadeIn")
                h1.d2 Form Input Binding
                eg-code-block(lang="html").
                    &lt;!-- HTML --&gt;
                    &lt;input v-model=&quot;message&quot; placeholder=&quot;Me altere&quot;&gt;
                    &lt;p&gt;Mensagem é: {{ exampleFormBinding }}&lt;/p&gt;
                hr
                input(v-model="message")
                p Mensagem é: {{ message }}

            slide(enter="fadeIn")
                h1.d2 Chega de Blábláblá...
                h3 Vamos ao que interessa!

            slide(enter="fadeIn" :steps="2")
                h1.d3 Então, posso implementar em um projeto já existente?
                h3(v-if='step >= 2') Resposta: Sim!

            slide(enter="fadeIn" :steps="2")
                h1.d3 Implementação Básica
                eg-code-block(lang="html").
                    &lt;html&gt;
                        &lt;head&gt;
                           // ...
                        &lt;/head&gt;
                        &lt;body&gt;
                            &lt;div id=&quot;app&quot;&gt;
                                {{ heloWorldExample }}
                            &lt;/div&gt;

                             &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue&quot;&gt;&lt;/script&gt;
                             &lt;script src=&quot;app.js&quot;&gt;&lt;/script&gt;
                        &lt;/body&gt;
                    &lt;/html&gt;
                eg-code-block(lang="js").
                    // app.js file
                    var app = new Vue({
                        el: '#app',
                        data: {
                            message: 'Hello Vue!'
                        }
                    });

            slide(enter="fadeIn")
                h1 Exemplo Prático
                p  github.com/cagartner/vue-exemplo-simples

            slide(enter="fadeIn")
                h1 Desvatagens
                p Método antigo e ultrapassado
                p Necessário criar vários scripts para cada componente
                p Roda em runtime

            slide(enter="fadeIn")
                h1.d2 Implementação Avançada <br> com Laravel Mix
                p https://laravel-mix.com/docs/2.1/installation
                eg-code-block(lang="sh").
                    // pasta do frontend do seu projeto
                    npm init -y
                    npm install laravel-mix --save-dev
                    cp node_modules/laravel-mix/setup/webpack.mix.js ./
                    // instale Vue.js
                    npm install vue

            slide(enter="fadeIn")
                h1.d2 Crie um arquivo main.js
                eg-code-block(lang="javascript").
                    # importe o vue no main.js
                    import Vue from 'vue'

                    # Import de seus componentes do projeto
                    import HelloWorld from './components/HelloWorld.vue'

                    new Vue({
                        el: '#app',
                        components: {
                            'hello-world': HelloWorld
                        }
                    })

            slide(enter="fadeIn")
                h1.d2 Configure webpack.mix.js
                eg-code-block(lang="javascript").
                    let mix = require('laravel-mix');

                    mix.js('src/main.js', 'dist/');
                p Veja a mágica acontecer!

            slide(enter="fadeIn")
                h1.d2 Componente VUE
                p Centralização
                p HTML, CSS e JS no mesmo arquivo
                p Reutilização

            slide(enter="fadeIn")
                h1.d2 Exemplo de Componente
                eg-code-block(lang="html").
                    <!-- // components/HelloWorld.Vue -->
                    &lt;template&gt;
                        &lt;div class=&quot;hello-world&quot;&gt;
                            {{ heloWorldExample }}
                        &lt;/div&gt;
                    &lt;/template&gt;

                    &lt;script&gt;
                        export default {
                            name: 'helloWorld',
                            data: function () {
                                return {
                                    message: 'Example'
                                }
                            }
                        }
                    &lt;/script&gt;

                    &lt;style &gt;
                        .hello-world {
                            color: red;
                            font-size: 2rem;
                        }
                    &lt;/style&gt;

            slide(enter="fadeIn")
                h1.d2 Use como web <br>componente no seu projeto.
                eg-code-block(lang="html").
                    &lt;html&gt;
                        &lt;head&gt;
                            // ...
                        &lt;/head&gt;
                        &lt;body&gt;
                             &lt;div id=&quot;app&quot;&gt;
                                &lt;hello-world&gt;&lt;/hello-world&gt;
                             &lt;/div&gt;
                            &lt;script src=&quot;build.js&quot;&gt;&lt;/script&gt;
                        &lt;/body&gt;
                    &lt;/html&gt;


            slide(enter="fadeIn")
                h1.d2 Desvantagem
                p Sem tag script no meio do código
                p Precisa rodar build para testar

            slide(enter="fadeIn")
                h1 OBS
                p Esse slide foi feito em vue
                p https://cagartner.github.io/vuejs-comece-agora/
                p Fonte: https://github.com/cagartner/vuejs-comece-agora

            slide(enter="fadeIn")
                h1 Dúvidas?

            slide(enter="fadeIn")
                h1 "Less is More"
                small.p-cl You, Evan - Criador do VueJS
</template>

<script>
    import 'eagle.js/dist/themes/agrume/agrume.css'
    import {Slideshow} from 'eagle.js'

    export default {
        name: 'Talk',
        data() {
            return {
                message: 'Exemplo',
                heloWorldExample: '{{ message }}',
                exampleMethod: '{{ counter }}',
                exampleFormBinding: '{{ message }}',
                exampleLoop: '{{ todo.task }}'
            }
        },
        mixins: [Slideshow]
    }
</script>

<style lang="scss">

    $bg-color: #f6f6f6;
    $body-color: #2c3e50;
    $primary-color: #42b983;
    $secondary-color: #7f8c8d;

    body {
        color: $body-color;
    }

    #talk {
        background: white;

        .eg-slideshow {
            background: $bg-color;

            .eg-slide {
                display: flex;
                align-items: center;
                justify-content: center;

                h1 {
                    font-size: 8rem;
                    margin: 0;
                }

                h2 {
                    font-size: 6rem;
                    margin: 1rem 0;
                }

                .d1 {
                    font-size: 8rem;
                }

                .d2 {
                    font-size: 6rem;
                }

                .d3 {
                    font-size: 4rem;
                }

                .p-cl {
                    color: $primary-color;
                }

                .s-cl {
                    color: $secondary-color;
                }

                .d-cl {
                    color: $body-color;
                }

                &.slide-1 {
                    .header {
                        display: flex;

                        img {
                            width: 50rem;
                        }

                        .left {
                            width: auto;
                        }

                        h1 {
                            color: $body-color;
                            font-size: 8rem;
                            text-align: left;
                        }

                        h2 {
                            text-align: left;
                            font-size: 6rem;
                            font-weight: 500;
                            color: $secondary-color;
                        }
                    }
                } // end slide 1

                &.slide-2 {
                    text-align: center;

                    img {
                        border-radius: 50%;
                    }

                    h1 {
                        font-size: 5rem;
                    }
                }

                ul {
                    margin: 0 auto;
                    text-align: left;
                }

            }

            .eg-code-block {
                font-size: 1.2rem;
            }
        }
    }

    .columns {
        width: 100%;
        display: flex;
        justify-content: space-between;

        &.wide {
            width: 80vw;
        }

        .column {
            width: 49.5%;
        }
    }

    .trezo span {
        color: #07222d;
    }
</style>
