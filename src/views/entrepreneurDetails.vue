<template>
    <div class="entrepreneurdetails">
        <div v-for="item in projet" :key="item.id">
            <div class="bgImg border m-5 pt-5 pl-5 pr-5">
                <h1 class="pb-5"><mark>{{item.title}}</mark></h1>
                <p class="text-justify"><i class="fas fa-tag mr-1"></i> <mark> {{item.category}}</mark></p>
                <p class="text-justify"><mark>Un projet porté par : <span class="text-muted"><u class="text-capitalize">{{ item.entrepreneur}}</u></span></mark></p>
            </div>
            <div class="border m-5 pt-5 pl-5 pr-5">
                <h2 class="text-justify mb-5"><u>Description du projet :</u></h2>
                <div class="grid">
                    <div class="item1">
                        <p class="text-justify">{{ item.description }}</p>
                        <div v-if="item.web" class="text-justify"><small><a :href="item.web" class="text-reset"><u>Site web de {{item.title}}</u></a></small></div>
                    </div>
                     <div class="item2">
                        <p class="text-center border p-2 ml-5 bgy"><strong>Montant recherché&nbsp;:</strong> {{ item.financial_needs }}&nbsp;€</p>
                        <p class="text-center border p-2 ml-5">Autres besoins&nbsp;: {{ item.other_needs }}</p>
                     </div>
                     <div class="item3">
                        <h3 class="text-justify mb-4">À propos de <span class="text-capitalize">{{ item.entrepreneur}} :</span></h3>
                        <p class="text-justify">{{ item.entrepreneur_description}}</p>
                     </div>
                </div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="container">
                                    <img src="@/assets/pictos/projet2.jpg" class="text-justify mb-5 d-block img-fluid" width="60%" alt="image présentation du projet">     
                                </div>                            
                            </div>
                            <div class="carousel-item">
                                <div class="container">
                                    <img src="@/assets/pictos/projet2.jpg" class="text-justify mb-5 d-block img-fluid" width="60%" alt="image présentation du projet">     
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="container">
                                    <img src="@/assets/pictos/projet2.jpg" class="text-justify mb-5 d-block img-fluid" width="60%" alt="image présentation du projet">     
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                     </div>
                
                <Bouton :title="buttonTitle" class="mb-5 text-justify" @click.native="goToContact(item.id)"></Bouton>
            </div>
        </div>
    </div>
</template>

<script>
    import Bouton from "@/components/Bouton";

    export default {
        name: "EntrepreneurDetails",

        data() {
            return{
                projet: "",
                buttonTitle: "Contacter cet entrepreneur"
            }
        },

        components: { Bouton },

        methods: {
            goToContact(identifiant) {
                this.$router.push({ path: `/contact/${identifiant}`});
            }
        },

        mounted() {
            const axios = require("axios");
            axios.get(`http://localhost:3000/projet/${this.$route.params.id}`)
            .then(response => (this.projet = response.data));
        },
    }
</script>

<style lang="scss">
    .entrepreneurdetails {
         & .grid {
            display:                    grid;
            grid-template-columns:      repeat(8, 1fr);
            grid-template-areas: 
                                        "a a a a a b b b"
                                        "c c c c c b b b"
                                        "d d d d d d d d";
            grid-gap:                   2em;
         }
         .item1 {
             grid-area :                a;
         }
         .item2 {
             grid-area :                b;
         }
         .item3 {
             grid-area :                c;
         }
         .item4 {
             grid-area :                d;
         }
    }
    .bgImg {
        background-image:               url('../assets/pictos/projet1.jpg');
        background-position:            cover;
    }
    .bgy {
        background-color:               #f9dc4b;
    }
</style>