<template>
  <div class="accueil">

<!-- Bannière intro "Accroche" -->
    <div class="container p-5 bg-yellow">
      <div class="row">
        <div class="col-sm">
          <h2 class="text-justify mb-4 satisfy h1">Rencontrez des entrepreneurs qui vous correspondent !</h2>
          <p class="text-justify h4"><small class="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo quaerat placeat eaque eos eius, perspiciatis!</small></p>
        </div>
        <Bouton :title="text" class="ascenter col-sm mt-4" @click.native="goToEntrepreneurs()"></Bouton>
      </div>    
    </div>

<!-- Bloc fonctionnement avec pictos et cards -->
      <div class="mt-5 mb-5 pb-4 pt-4 border container">
          <h2 class="block-title satisfy h1">Comment ça fonctionne ?</h2>
          <div class="row">
            <div class="col-sm">
              <p class="h1 mb-5"><i class="fas fa-hand-holding-heart border rounded-circle p-5 bg-yellow"></i></p>
              <p>Je choisis le projet qui me correspond</p>
            </div>
            <div class="col-sm">
              <p class="h1 mb-5"><i class="fas fa-people-arrows border rounded-circle p-5 bg-yellow"></i></p>
              <p>Je rencontre le porteur de projet</p>
            </div>
            <div class="col-sm">
              <p class="h1 mb-5"><i class="fab fa-slideshare border rounded-circle p-5 bg-yellow"></i></p>
              <p>La collaboration démarre</p>
            </div>
          </div>
      </div>

<!-- Bloc Entrepreneurs à l'affiche -->
      <h2 class="block-title mt-5 satisfy h1">Les entrepreneurs à l'affiche</h2>
      <div class="container">
          <div class="row">
            <Carte v-for="projet in projets" :key="projet.id" class="col-sm-4 mb-4">
                <template v-slot:img>
                    <img src="@/assets/pictos/projet1.jpg" class="card-img-top" alt="image présentation du projet"/>
                    <!-- <img :src="projet.image"/>-->
                </template>
                <template v-slot:cardinfo>
                    <h5 class="card-title text-uppercase border p-1">{{ projet.title }}</h5>
                    <p class="text-justify text-capitalize"><small><i class="fas fa-tag"></i> {{ projet.category }}</small></p>
                    <h6 class="card-title text-justify"><small>Un projet porté par :</small> <span class="text-muted text-capitalize"><u>{{ projet.entrepreneur}}</u></span></h6>
                    <p class="card-text text-justify">{{ projet.description }}</p>
                    <p class="card-text border p-2">Montant recherché&nbsp;: {{ projet.financial_needs }}&nbsp;€</p>
                    <p class="card-text text-justify">{{ projet.other_needs }}</p>
                    <a href="" class="btn btn-warning" @click="goToProject(projet.id)">En savoir plus</a>
                </template>
            </Carte>
        </div>
      </div>       
      <Bouton :title="text3" class="mt-5" @click.native="goToEntrepreneurs()"></Bouton>


<!-- Bloc À propos / contact -->
      <div class="container bgGrey mt-5 mb-5 p-5 border">
        <div class="row">
          <div class="col-sm">
            <h3 class="text-justify mb-4 satisfy h1">On est là pour vous !</h3>
            <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <Bouton :title="text2" class="ascenter col-sm" @click.native="goToApropos()"></Bouton>
        </div>
      </div>

  </div>
</template>

<script>
    import Bouton from "@/components/Bouton";
    import Carte from "@/components/Carte";

    export default {
        name: 'Accueil',

        components: { Bouton, Carte },

        data() {
            return {
                text: "Découvrir",
                text2: "Plus d'infos",
                text3: "Découvrez tous les projets",
                projets: "",
            }
        },

        methods: {
            goToProject(identifiant) {
                this.$router.push({ path: `/entrepreneur-details/${identifiant}` });
            },
            goToEntrepreneurs() {
                this.$router.push({ path: '/entrepreneurs/'});
            },
            goToApropos() {
                this.$router.push({ path: '/a-propos/'});
            }
        },

        mounted() {
            const axios = require("axios");
            axios.get('http://localhost:3000/projets3')
            .then(response => (this.projets = response.data))
        }
    };
</script>

<style lang="scss">
    .accueil{
        margin:                 10vh 10vw;
    }

    .block-title {
        grid-column:            1 / 4;
        grid-row:               1 / 1;
        margin-top:             2%;
        margin-bottom:          5%;
    }

    .bg-yellow {
        background-color:      #FBDF00;
    }

    .bgGrey {
        background-color:      #E9E9EB;
        color:                 #2c3e50;
    }

    .yellow {
        color:                 #FBDF00;
    }

    h2 {
        font-size:              1.5em;
        font-weight:            bold;
    }

    h3 {
        font-size:              1.4em;
        font-weight:            bold;
    }

    p {
        font-size:              1em;
    }

    .jselfend {
        justify-self:           end;
    }

    .jselfstart{
        justify-self:           end;
    }

    .ascenter {
        align-self:             center;
    }

    .satisfy {
    font-family:                'Satisfy', cursive;
    }
</style>