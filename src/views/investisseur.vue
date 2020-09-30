
<template>
  <div class="investisseur border p-4">
      <div>
          <h1 class="font-weight-bold mb-5 p-4 satisfy border">Comment ça fonctionne ? </h1>
      </div>
      <div class="container mb-5 mt-5">
          <div class="row">
            <div class="ascenter col-sm">
              <div>
                  <h2 class="text-uppercase font-weight-bold text-left mb-4">Le processus</h2>
                  <p class="text-justify mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, unde dolores ullam delectus quidem nihil, et autem officia nulla temporibus porro ipsa id dolor? Quasi eum tempora laudantium enim sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam accusantium dolorem saepe atque nostrum quisquam dicta itaque harum. Quibusdam accusamus tempore nam cum necessitatibus dolor atque quam reiciendis ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus hic neque eligendi odio, laudantium numquam distinctio, repellendus doloremque ducimus qui dolor corporis? Excepturi voluptate placeat voluptates harum accusamus distinctio.</p>
              </div>
            </div>    
          <img src="../assets/pictos/fonctionnement.jpg" alt="image de MeetInvest" class="ascenter col-sm-4">
          </div>
        </div>
        <div class="mt-5 container">
            <div class="row justify-content-center">
                    <router-link to="/form-investisseur">
                        <Bouton :title="name" class="col-sm mb-3"></Bouton>
                    </router-link>                 
                    <router-link to="/entrepreneurs">
                        <Bouton :title="name2" class="col-sm mb-3"></Bouton>
                    </router-link> 
            </div>
        </div>
  </div>
</template>

<script>
    import Bouton from "@/components/Bouton";

    export default {
        name: "Investisseur",
        
        data() {
            return {
                name: "Devenir Investisseur",
                name2: "Découvrir les projets",
            }
        },

        components: { Bouton },
    }
</script>

<style lang="scss">
    .investisseur {
        margin:             10vh 10vw;
    }

    .ascenter {
        align-self:         center;
    }
</style>