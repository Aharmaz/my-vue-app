<template>
    <h1>Pages 2</h1>
    <br>
    <p>{{id}}</p>
    
</template>

<script>
export default {
    name: 'Page2',
    data() {
        return {
            id: this.$route.query.id
        }
    },
}
</script>