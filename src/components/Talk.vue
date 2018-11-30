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
                p(class="author") Meu nome é <strong>Carlos Augusto Gartner</strong>
                ul
                    li Desenvolvedor since 2011
                    li Full-stack Developer PHP e Node
                    li(class="trezo") Sênior Frontend Developer na <span>Trezo Soluções WEB</span>

            slide(enter="fadeIn" class="slide-3")


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

                    ul {
                        margin: 0 auto;
                        text-align: left;
                    }

                    h1 {
                        font-size: 5rem;
                    }
                }
            }
        }
    }

    .trezo span {
        color: #07222d;
    }
</style>
