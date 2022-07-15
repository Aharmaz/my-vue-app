<template>



<div class="row">
    <div class="col-md-4 py-4" v-for="(movie, index) in movies">
          <div class="card h-100">
            <img class="card-img-top" :src="movie.image" alt="card image collar">
            <div class="card-body">
              <h5 class="card-title">{{movie.title}}</h5>
              <p class="card-text">{{movie.description}} </p>
              <button  class="btn btn-primary">
                    <router-link :to="{ name : 'Details', query: { id: movie.id } }">
                        <span style="color:white">Details</span>
                    </router-link>
              </button>
            </div>
          </div>
     </div>
 </div>



</template>

<script>
export default {
    name: "Movie",
    data() {
        return {
            movies: [
                {
                    id: 1,
                    title: '22 Miles',
                    description: 'It follows an elite CIA task force composed of paramilitary officers from the Special Activities Center s Ground Branch, that has to escort a high priority asset 22 miles to an extraction point',
                    image: require('../assets/22miles.jpg'),
                },
                {
                    id: 2,
                    title: 'The Black Phone',
                    description: 'Finney, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use.When a disconnected phone on the wall begins to ring,',
                    image: require('../assets/blackphone.jpg')
                },
                {
                    id: 3,
                    title: 'Designated Survivor',
                    description: 'In the United States, a designated survivor (or designated successor) is a named individual in the presidential line of succession, chosen to stay at an undisclosed secure location.',
                    image: require('../assets/designated.jpg')
                },
                {
                    id: 4,
                    title: 'The Old Guard',
                    description: 'A covert team of immortal mercenaries is suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered',
                    image: require('../assets/theoldguard.jpg')
                },
                {
                    id: 5,
                    title: 'London has fallen',
                    description: 'After the British Prime Minister has passed away under mysterious circumstances, all leaders of the Western world must attend his funeral. But what starts out as the most protected event on earth.',
                    image: require('../assets/londonhasfallen.jpg')
                }


            ]
        }
    },
}
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
</style>