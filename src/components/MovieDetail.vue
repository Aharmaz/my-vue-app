<template>
    <div class="card h-50">
            <img class="card-img-top" src="../assets/22miles.jpg" alt="card image collar"/>
            <div class="card-body">
              <h5 class="card-title">{{findTitle(movieid)}}</h5>
              <p class="card-text">{{findDescription(movieid)}}</p>
              <p class="card-text"><strong>Initial Release : </strong>{{findInitialRelease(movieid)}}</p>
              <p class="card-text"><strong>Distributed by : </strong>{{findDistribution(movieid)}}</p>
              <p class="card-text"><strong>Budget : </strong>{{findBudget(movieid)}}</p>

        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieDetail',
    

        methods: {
            findTitle(id) {

                for (let i = 0; i < this.movies.length; i++) {
                    if (this.movies[i].id == id) {
                        return this.movies[i].title
                    }
                }
            },
            findDescription(id) {

                for (let i = 0; i < this.movies.length; i++) {
                    if (this.movies[i].id == id) {
                        return this.movies[i].description
                    }
                }
            },
            findInitialRelease(id) {

                for (let i = 0; i < this.movies.length; i++) {
                    if (this.movies[i].id == id) {
                        return this.movies[i].Initialrelease
                    }
                }
            },
            findDistribution(id) {

                for (let i = 0; i < this.movies.length; i++) {
                    if (this.movies[i].id == id) {
                        return this.movies[i].Distribution
                    }
                }
            },
            findBudget(id) {

                for (let i = 0; i < this.movies.length; i++) {
                    if (this.movies[i].id == id) {
                        return this.movies[i].Budget
                    }
                }
            },
            findImage(id) {

                for (let i = 0; i < this.movies.length; i++) {
                    if (this.movies[i].id == id) {
                        return required(this.movies.image)
                    }
                }
            },

        },
    props: ['movieid'],
    data() {
        return {
            
            movies: [
                {
                    id: 1,
                    title: '22 Miles',
                    description: 'An elite paramilitary team called Overwatch is tasked with transporting a police officer (Iko Uwais) with vital information about a potential terrorist attack 22 miles across Southeast Asia from the American embassy to an airfield. With the help of high-tech communications expert Bishop (John Malkovich) and second-in-command Alice (Lauren Cohan), leader Jimmy Silva (Mark Wahlberg) and his team must outrun local military, police and gang leaders to complete their mission.',
                    image: require('../assets/22miles.jpg'),
                    Initialrelease: 'August 9, 2018',
                    Distribution: 'STX Entertainment',
                    Budget: '$66.3 million'
                },
                {
                    id: 2,
                    title: 'The Black Phone',
                    description: 'The Black Phone is finally in theaters, reuniting Ethan Hawke, director Scott Derrickson, and producer Jason Blum for another creepy supernatural tale, their last being Sinister. Mixing a disturbing serial killer story with haunted house tropes, The Black Phone creates a unique horror story filled with surprising revelations and unexpected twists. So, if you want to know exactly what happens at the end of The Black Phone, we are here to recap all the main events and explain how everything ties together in a macabre way.',
                    image: require('../assets/blackphone.jpg'),
                    Initialrelease: 'June 24, 2022',
                    Distribution: 'Universal Pictures',
                    Budget: '$99 million'

                },
                {
                    id: 3,
                    title: 'Designated Survivor',
                    description: 'Designated Survivor tells the story of Tom Kirkman (Kiefer Sutherland), an unassuming Secretary of Housing and Urban development, who is suddenly catapulted to being President of the United States after a mass terrorist attack on the State of the Union address in Washington leaves him - the Designated Survivor - the highest ranking politician in America.',
                    image: require('../assets/designated.jpg'),
                    Initialrelease: 'September 21, 2016',
                    Distribution: 'ABC',
                    Budget: '$120 million'

                },
                {
                    id: 4,
                    title: 'The Old Guard',
                    description: 'Led by a warrior named Andy (Charlize Theron), a covert group of tight-knit mercenaries with a mysterious inability to die have fought to protect the mortal world for centuries. But when the team is recruited to take on an emergency mission and their extraordinary abilities are suddenly exposed, it s up to Andy and Nile Kiki Layne, the newest soldier to join the ranks, to help the group eliminate the threat of those who seek to replicate and monetize their power by any means necessary.',
                    image: require('../assets/theoldguard.jpg'),
                    Initialrelease: 'July 10, 2020',
                    Distribution: 'Netflix',
                    Budget: '$90 million'
                },
                {
                    id: 5,
                    title: 'London has fallen',
                    description: 'After the British Prime Minister has passed away under mysterious circumstances, all leaders of the Western world must attend his funeral. But what starts out as the most protected event on earth. turns into a deadly plot to kill the world s most powerful leaders and unleash a terrifying vision of the future. The President of the United States, his formidable secret service head and a British MI6 agent who trusts no one are the only people that have any hope of stopping it',
                    image: require('../assets/londonhasfallen.jpg'),
                    Initialrelease: 'March 3, 2016',
                    Distribution: 'M2 Pictures',
                    Budget: '$60 million'
                }


            ],
        }
    },
}
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 30vw;
    object-fit: cover;
}
.card {
    padding: 20px;
    margin: 80px;
}
</style>