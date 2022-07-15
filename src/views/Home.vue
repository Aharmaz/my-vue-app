<template>
  <div class="container">
    <Welcome/>
    <br><br>
    <Movie/>
  </div>
</template>

<script>
// @ is an alias to /src

import Welcome from '../components/Welcome.vue'
import Movie from '../components/Movie.vue'


export default {
  name: 'Home',
  components: {
    Welcome,
    Movie
  }
}
</script>
