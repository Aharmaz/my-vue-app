<template>
    <section class="lis-bg-light">
        <div class="container">
            <div class="row justify-content-center">
                    <div class="col-12 col-md-10 text-center">
                        <div class="heading pb-4">
                            <h2>Pick Your Profile</h2>
                            <h5 class="font-weight-normal lis-light">Discover &amp; our different offers</h5>
                        </div>
                    </div>
            </div>
            <div class="row">
                <Child />
                <Student />
                <Adult />
            </div>
        </div>
    </section>
    <br>
    <br>
</template>

<script>

import Child from '@/components/Child.vue'
import Student from '@/components/Student.vue'
import Adult from '@/components/Adult.vue'




export default {
    name: "Prices",
    data() {
        return {
            
        }
    },
    components:  {
        Child,
        Student,
        Adult

    }
}
</script>

<style scoped>
 
 
</style>