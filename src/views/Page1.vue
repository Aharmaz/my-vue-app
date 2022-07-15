<template>
    <h1>Pages 1</h1>
    <router-link :to="{ name : 'Page2', query: { id: da } }">
        <span >Click to pass to page2</span>
    </router-link>
</template>


<script>
export default {
    name: 'Page1',
    data() {
        return {
            da : 'aymane harmaz'
        }
    },
}
</script>