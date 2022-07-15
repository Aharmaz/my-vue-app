<template>
  <div class="container">
    <h1>I am the details page </h1>
    <MovieDetail :movieid="id"/>
  </div>
</template>

<script>
// @ is an alias to /src


import MovieDetail from '../components/MovieDetail.vue'


export default {
  name: 'Details',
  data() {
    return {
        id: this.$route.query.id,


 


    }
  },
  components: {
    MovieDetail
  },
}
</script>

