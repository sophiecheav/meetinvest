<template>
    <div class="header">
      <!-- Header Meet Invest gauche, burger menu droite -->
      <div class="grid">
        <router-link to="/" class="text-reset">
          <h2 class="font-weight-bold fontTitle astart">Meet Invest</h2>
        </router-link>

        <button class="font2 aend hamburger burger-open" type="button" name="button" @click.prevent="openBurgerMenu" v-if="burgerDisplay"><i class="fas fa-bars fontLogo"></i></button>

        <!-- Menu bg-yellow sur toute la page -->
        <div class="bgyellow-menu aend" v-if="bgyellowMenuDisplay">
          <button class="burger-close" type="button" name="button" @click.prevent="closeBurgerMenu" v-if="crossDisplay"><i class="fas fa-times"></i></button>
          <nav>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/a-propos">À propos</a></li>
              <li><a href="/entrepreneurs">Annuaire des projets</a></li>
              <li><a href="/investisseur">Devenir investisseur</a></li>
            </ul>
          </nav>
        </div>

      </div>

    </div>
</template>

<script>
    export default {
        name: "header",

        data() {
            return {
                bgyellowMenuDisplay: false,
                crossDisplay: false,
                burgerDisplay: true,
            }
        },

        methods: {
            openBurgerMenu() {
                this.bgyellowMenuDisplay = true;
                this.crossDisplay = true;
                this.burgerDisplay = false;
            },

            closeBurgerMenu() {
                this.bgyellowMenuDisplay = false;
                this.crossDisplay = false;
                this.burgerDisplay = true;
            },
        }
    };
</script>

<style lang="scss" scoped>
    .header {
        background-image:           url('../assets/pictos/wall.jpg');
        background-size:            cover;
        margin:                     0;
        padding:                    1vh 5vw;
        position:                   -webkit-sticky;
        position:                   sticky;
        top:                        0px;
        z-index:                    6;
    }

    .fontTitle {
        font-size:                  xx-largeal;
        font-family:                'Satisfy', cursive;
    }

    .fontLogo {
        font-size:                  x-large;
    }

    .grid {
        display:                    grid;
        grid-template-columns:      1fr 1fr;
        margin:                     3vh 5vw;
    }

    .astart {
        justify-self:               start;
    }

    .aend {
        justify-self:               end;
        text-align:                 right;
    }

    .hamburger {
        border:                     none;
        background-color:           inherit;
    }

    // Menu bg yellow, page entière
    .bgyellow-menu {
      background-color:            #FBDF00;
      width:                        50%;
      font-size:                    1.1em;
      font-weight:                  700;
      display:                      block;
    }

    .bgyellow-menu ul a {
      text-decoration:              none;
      color:                       #2c3e50;
    }

    .bgyellow-menu li {
      list-style-type:              none;
    }

    .bgyellow-menu li a:hover {
      text-decoration:              none;
      color:                       #FFF;
    }

    .burger-close {
      border:                       none;
      font-size:                    1.3em;
      background-color:            #FBDF00;
      color:                       #2c3e50;
    }
</style>