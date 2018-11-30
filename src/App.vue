<template>
    <div id="app">
        <Talk></Talk>
    </div>
</template>

<script>
    import Talk from './components/Talk'

    export default {
        name: 'app',
        components: {
            Talk
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');

    body {
        font-family: 'Source Sans Pro', sans-serif;
        background: white;
        margin: 0;
        padding: 0;
    }
</style>
