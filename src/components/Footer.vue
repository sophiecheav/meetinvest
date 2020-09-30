<template>
    <div class="footer border container-fluid">
        <div class="row acenter justify-content-between">
                <div class="ascenter container d-flex flex-column align-items-center col-sm align-self-center mb-5">
                    <div class="text-uppercase mb-2 font-weight-bold">contactez-nous</div>
                    <div class="d-flex flex-column align-items-start">
                        <div><small>25 rue de la Liberté</small></div>
                        <div><small>75020 - Paris</small></div>
                        <div><small>meetinvest@gmail.com</small></div>
                        <div><small>01. 72. 20. 83. 17</small></div>
                    </div>
                </div>
                <div class="ascenter col-sm mb-5">
                     <div class="container">
                        <router-link to="/" class="text-reset">
                            <h4 class="text-reset font-weight-bold fontTitle">Meet Invest</h4>
                        </router-link>
                        <div><small><a href="#" class="text-reset">Mentions Légales</a></small></div>
                        <div><small><a href="#" class="text-reset">CGU</a></small></div>
                    </div>
                </div>
                <div class="col-sm align-self-center justify-content-end mb-5">
                    <div class="container d-flex flex-column align-items-center">
                        <div class="text-uppercase mb-2 font-weight-bold">Suivez-nous</div>
                        <div class="d-flex flex-column align-items-start">
                            <div class="pt-2"><a href="" class="text-reset"><i class="fab fa-facebook-f"></i> Facebook</a></div>
                            <div class="pt-2"><a href="" class="text-reset"><i class="fab fa-twitter"></i> Twitter</a></div>
                            <div class="pt-2"><a href="" class="text-reset"><i class="fab fa-instagram"></i> Instagram</a></div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="container d-flex justify-content-around align-items-center mt-3">
            <small>2020 &copy; MeetInvest</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
    };
</script>

<style lang="scss">
    .grid {
        display:                    grid;
        grid-template-columns:      1fr 1fr 1fr;
    }

    .ascenter {
        align-self:                 center;
    }

    .jstart {
        justify-self:               start;
    }

    .jend {
        justify-self:               end;
    }

    .jcenter {
        justify-self:               center;
    }

    .acenter {
        align-items:                center;
    }

    .footer {
            background-color:       #FBDF00;
            background-size:        cover;
            margin:                 0;
            padding:                5vh 5vw 1vh 5vw;
    }

    .fontTitle {
        font-family:                'Satisfy', cursive;
    }
</style>