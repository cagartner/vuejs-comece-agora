<template lang="pug">
    #talk
        .eg-slideshow
            slide(enter='fadeIn' class="slide-1")
                .header
                    img(src="../assets/logo.svg" class="logo")
                    .left
                        h1 Vue.js
                        h2 Implementando em Projetos já existentes.
                .content

            slide(enter='fadeIn' class="slide-2")
                img(src="../assets/cagartner.jpg")
                h1 Quem Sou Eu?
                p.author Meu nome é <strong>Carlos Augusto Gartner</strong>
                ul
                    li Desenvolvedor since 2011
                    li Full-stack Developer PHP e Node
                    li.trezo Sênior Frontend Developer na <span>Trezo Soluções WEB</span>

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
                h1 
</template>

<script>
    import 'eagle.js/dist/themes/agrume/agrume.css'

    import {Slideshow} from 'eagle.js'

    export default {
        name: 'Talk',
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
        }
    }

    .trezo span {
        color: #07222d;
    }
</style>
