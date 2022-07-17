<template>
    <div class="col-12 col-md-6 col-lg-4 wow fadeInUp text-center" style="visibility: visible; animation-name: fadeInUp;">
                        <div class="price-table">
                            <div class="price-header lis-bg-light lis-rounded-top py-4 border border-bottom-0 lis-brd-light">
                                <h5 class="text-uppercase lis-latter-spacing-2">ADULT</h5>
                                <h1 class="display-4 lis-font-weight-500"><sup>$</sup> 99 <small>/movie</small></h1>
                                <p class="mb-0">Basic User Membership</p>
                            </div>
                            <div class="border border-top-0 lis-brd-light bg-white py-5 lis-rounded-bottom">
                                <ul class="list-unstyled lis-line-height-3">
                                    <li>One Time Fee</li>
                                    <li>One Listing</li>
                                    <li>90 Days Availability</li>
                                </ul>
                                
                                
                            </div>
                        </div>
    </div>
</template>

<script>
export default {
    name: 'Adult',
    data() {
        
    },
}
</script>




<style scoped>
.lis-bg-light {
    background-color: #00000005;
}

section {
    padding-top: 6.25em;
    padding-bottom: 6.25em;
    position: relative;
}

.pb-4, .py-4 {
    padding-bottom: 1.5rem!important;
}

h2 {
    font-size: 2rem;
}

h1, h2, h3, h4, h5, h6 {
    color: #222222;
    margin: 0 0 15px;
    font-family: "Poppins", sans-serif;
    line-height: 1.75rem;
}

.lis-light {
    color: #707070;
}

.font-weight-normal {
    font-weight: 400!important;
}

h5 {
    font-size: 1.25rem;
}

.price-table {
    -webkit-transition: 0.3s ease;
}

.lis-brd-light {
    border-color: #dadada !important;
}

.lis-rounded-top {
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}

.lis-bg-light {
    background-color: #79f8f4;
}

.pb-4, .py-4 {
    padding-bottom: 1.5rem!important;
}
.lis-latter-spacing-2 {
    letter-spacing: 2px;
}

.text-uppercase {
    text-transform: uppercase!important;
}

.lis-font-weight-500 {
    font-weight: 500;
}

.display-4 {
    font-size: 3.5rem;
}

.price-table sup {
    top: -1.5em;
}

.price-table sup, .price-table small {
    font-size: 1.25rem;
}
.price-table small {
    font-size: 1.25rem;
}

.mb-0, .my-0 {
    margin-bottom: 0!important;
}

 sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
}

.lis-brd-light {
    border-color: #dadada !important;
}
.bg-white {
    background-color: #fff!important;
}
.py-5 {
    padding-bottom: 3rem!important;
}
.lis-line-height-3 {
    line-height: 3 !important;
}

.list-unstyled {
    padding-left: 0;
    list-style: none;
}

.lis-line-height-3 {
    line-height: 3 !important;
}

.btn-primary-outline {
    background-color: transparent;
    color: #21aaff !important;
    border-color: #21a6ff;
}

.btn {
    color: #fff;
    padding: .5rem 1.3rem;
    font-size: 1rem;
    word-wrap: break-word;
}

.lis-rounded-circle-50 {
    border-radius: 50px;
}

.pl-2, .px-2 {
    padding-right: .5rem!important;
}
.btn-primary-outline:hover, .btn-primary-outline:focus {
    background-color: #2172ff;
    border-color: #ffffff;
    color: #fff !important;
}

.lis-bg-primary {
    background-color: #ff214f;
}

.btn-primary {
    background-color: #ff214f;
    border-color: #ff214f;
}

.btn-primary:hover, .btn-primary:focus {
    background-color: #ff214f;
    border-color: #ff214f;
}

.price-table.active {
    transform: scale(1.045);
    -webkit-transform: scale(1.045);
}

.price-table {
    -webkit-transition: 0.3s ease;
}

.lis-rounded-bottom {
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
}

</style>