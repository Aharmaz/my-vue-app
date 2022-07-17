<template>
    <h1>Contact us</h1>
    <ContactUs />
</template>

<script>

import ContactUs from '../components/ContactUs.vue'

export default {
    name: "Contact",
    data() {
        return {
            
        }
    },
    components: {
        ContactUs
    }
}
</script>

<style scoped>
label {
    color: #333;
}

.btn-send {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    width: 80%;
    margin-left: 3px;
    }
.help-block.with-errors {
    color: #ff5050;
    margin-top: 5px;

}

.card{
	margin-left: 10px;
	margin-right: 10px;
}
</style>