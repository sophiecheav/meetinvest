<template>
    <div class="entrepreneurs">

      <!-- encadré jaune / filtrer les projets -->
        <div class="border p-5 mt-5 bgy">
            <h1 class="text-justify mb-4 satisfy">Investisseurs : trouvez le projet qui vous correspond</h1>
            <p class="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, optio, aut esse dolores quibusdam nostrum soluta voluptates dicta iure ullam officiis non nulla? Molestias cumque doloremque sunt! Voluptates, odit tempora.</p>
            <form>
                <div class="form-group row">
                    <label for="category" class="col-sm-3 col-form-label mt-4"><strong>Choisissez une catégorie :</strong></label>
                    <select class="form-control col-sm-2 mt-4" v-model="selected">
                        <option value="Education">Éducation</option>
                        <option value="Ecologie">Écologie</option>
                        <option value="Mixite">Mixité</option>
                        <option value="Emploi">Emploi</option>
                        <option value="Tech">Tech</option>
                        <option value="Social">Social</option>
                        <option value="Handicap">Handicap</option>
                    </select>
                    <button type="button" class="btn mb-2 ml-5 btn-dark mt-4" @click="filterCategory(selected)">Filtrer les projets</button>
                </div>
            </form>
        </div>

        <!-- encart fond gris + bouton : Entrepreneur > inscription entrepreneur -->
        <div class="container border p-5 bg-lightgrey mt-5">
            <div class="row">
                <h2 class="col-sm mt-1 satisfy h1">Vous êtes entrepreneur ?</h2>
                <div class="col-sm mt-3">
                    <button type="button" class="btn mb-2 btn-warning"><a href="/form-entrepreneur">Je propose un projet</a></button>
                </div>
            </div>
        </div>

        <!-- encadré bordure simple grise : vue sur tous les projets -->
        <div class="border p-4 mt-5">
            <h2 class="mb-5 border p-4">Tous les projets</h2>
            <p v-if="projetsNull"><strong>Aucun projet ne correspond malheureusement à votre recherche 💔</strong></p>
            <div class="container">
                <div class="row">
                    <Carte v-for="projet in projets" :key="projet.id" class="col-sm-4 mb-4">
                        <template v-slot:img>
                            <img src="@/assets/pictos/projet1.jpg" class="card-img-top" alt="image présentation du projet">
                            <!-- <img :src="projet.image"/> -->
                        </template>
                        <template v-slot:cardinfo>
                            <h5 class="card-title text-uppercase border p-1">{{ projet.title }}</h5>
                            <p class="text-justify"><small><i class="fas fa-tag"></i> {{ projet.category }}</small></p>
                            <h6 class="card-title text-justify"><small>Un projet porté par :</small> <span class="text-muted text-capitalize"><u>{{ projet.entrepreneur}}</u></span></h6>
                            <p class="card-text text-justify">{{ projet.description }}</p>
                            <p class="card-text border p-2">Montant recherché&nbsp;: {{ projet.financial_needs }}&nbsp;€</p>
                            <p class="card-text text-justify"><small>Autres besoins&nbsp;:</small> {{ projet.other_needs }}</p>
                            <a href="" class="btn btn-warning" @click="goToProject(projet.id)">En savoir plus</a>
                        </template>
                    </Carte>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Carte from "@/components/Carte";

    export default {
        name: "Entrepreneurs",
        components: { Carte },
        data() {
            return {
                projets: "",
                selected: "",
                projetsNull: false,
            }
        },

        methods: {
            goToProject(identifiant) {
                this.$router.push({ path: `/entrepreneur-details/${identifiant}` });
            },

            filterCategory(category) {
                const axios = require("axios");
                axios.get(`http://localhost:3000/projetsCat/${category}`)
                .then(response => (this.projets = response.data))
                .then(response => {
                    if(response == false){
                        this.projetsNull = true;
                    } else {
                        this.projetsNull = false;
                    }
                }) 
            },
        },

        mounted() {
            const axios = require("axios");
            axios.get('http://localhost:3000/projets')
            .then(response => (this.projets = response.data))
        },
            
    };
</script>

<style lang="scss">
    .entrepreneurs {
        margin:                 10vh 10vw;
    }

    .satisfy {
    font-family:                'Satisfy', cursive;
    }

    .bgy {
        background-color:       #FBDF00;
    }

    .bg-lightgrey {
      background-color:         #E9E9EB;
      color:                    #2c3e50;
    }

    .btn-yellow {
      color:                    #FBDF00;
    }
</style>