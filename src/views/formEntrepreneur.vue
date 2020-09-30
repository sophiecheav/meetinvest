<template>
    <div class="formentrepreneur border bgYellow p-5 ">
      <h1 class="mt-5">Proposez votre projet !</h1>
      <p><small>( C'est gratuit ♥︎ )</small></p>
      <p v-if="success">Votre demande d'inscription a bien été envoyée!</p>

      <form>
        <!-- partie 1 infos entrepreneur -->
        <div class="entrepreneur-id">
          <h2 class="mt-5">Vos coordonnées</h2>
            <div class="form-row mb-2 text-center">
              <div class="form-group col-md-6">
                <label for="lastname"><strong>Nom</strong></label>
                <input type="text" class="form-control" v-model="lastname">
              </div>
              <div class="form-group col-md-6">
                <label for="firstname"><strong>Prénom</strong></label>
                <input type="text" class="form-control" v-model="firstname">
              </div>
            </div>
            <div class="form-group mb-4">
              <label for="address"><strong>Adresse</strong></label>
              <input type="text" class="form-control" v-model="address">
            </div>
            <div class="form-row mb-4">
              <div class="form-group col-md-6">
                <label for="cp"><strong>Code Postal</strong></label>
                <input type="text" class="form-control" v-model="cp">
              </div>
              <div class="form-group col-md-6">
                <label for="city"><strong>Ville</strong></label>
                <input type="text" class="form-control" v-model="city">
              </div>
            </div>
            <div class="form-group mb-4">
              <label for="country"><strong>Pays</strong></label>
              <input type="text" class="form-control" v-model="country">
            </div>
            <div class="form-row mb-4">
              <div class="form-group col-md-6">
                <label for="phone"><strong>Téléphone</strong></label>
                <input type="number" class="form-control" v-model="phone">
              </div>
              <div class="form-group col-md-6">
                <label for="mail"><strong>Email</strong></label>
                <input type="email" class="form-control" v-model="mail">
              </div>
            </div>
        </div>

        <!-- partie 2 infos entreprise -->
        <div class="entreprise mt-3">
          <h2 class="mb-4 mt-5">Informations sur votre entreprise</h2>
            <div class="form-row mb-4">
              <div class="form-group col-md-6">
                <label for="corporate_name"><strong>Raison sociale</strong></label>
                <input type="text" class="form-control" v-model="corporate_name">
              </div>
              <div class="form-group col-md-6">
                <label for="siret"><strong>Numéro siret</strong></label>
                <input type="number" class="form-control" v-model="siret">
              </div>
            </div>
            <div class="form-row mb-4">
              <div class="form-group col-md-6">
                <label for="sales"><strong>Chiffre d'affaires</strong></label>
                <input type="text" class="form-control" v-model="sales">
              </div>
              <div class="form-group col-md-6">
                <label for="share_capital"><strong>Capital social</strong></label>
                <input type="number" class="form-control" v-model="share_capital">
              </div>
            </div>
        </div>

        <!-- partie 3 Le projet -->
        <div class="projet">
          <h2 class="p-4 mt-5">Votre projet en quelques questions...</h2>
              <div class="form-group">
                <label for="project_title"><strong>Nom de votre projet</strong></label>
                <input type="text" class="form-control" v-model="project_title">
              </div>
              <div class="form-group">
                <label for="category"><strong>Choisissez une catégorie</strong></label>
                <select class="form-control" v-model="selected">
                    <option value="Éducation">Éducation</option>
                    <option value="Écologie">Écologie</option>
                    <option value="Mixite">Mixité</option>
                    <option value="Emploi">Emploi</option>
                    <option value="Tech">Tech</option>
                    <option value="Social">Social</option>
                    <option value="Handicap">Handicap</option>
                </select>
              </div>
            <div class="form-group mb-4">
              <label for="description"><strong>Décrivez-le en quelques lignes (5 max)</strong></label>
              <textarea id="description-area" class="form-control" v-model="description" rows="5" cols="33"></textarea>
            </div>
            <div class="form-row mb-4">
              <div class="form-group col-md-6">
                <label for="financial_needs"><strong>Vos besoins financiers pour le réaliser</strong></label>
                <input type="number" class="form-control" v-model="financial_needs">
              </div>
              <div class="form-group col-md-6">
                <label for="other_needs"><strong>D'autres besoins ?</strong></label>
                <input type="text" class="form-control" v-model="other_needs">
              </div>
            </div>
            <!-- attention : partie chargement d'images-->
            <div class="custom-file mb-5">
              <input type="file" class="custom-file-input" id="customFileLangHTML">
              <label class="custom-file-label" for="customFileLangHTML" data-browse="Parcourir"><strong>Chargez une image d'illustration</strong></label>
            </div>
            <div class="form-row mb-4">
              <div class="form-group col-md-6">
                <label for="video_link"><strong>Un lien vers une vidéo ? :</strong></label>
                <input type="" class="form-control" v-model="video_link">
              </div>
              <div class="form-group col-md-6">
                <label for="web"><strong>Un site web ? :</strong></label>
                <input type="" class="form-control" v-model="web">
              </div>
            </div>
      </div>

        <!-- Partie mot de passe-->
            <div class="form-row mb-5">
                <div class="form-group col-md-6">
                    <label for="password"><strong>Choisissez un mot de passe :</strong></label>
                    <input type="password" class="form-control" id="password" name="password">
                </div>
                <div class="form-group col-md-6">
                    <label for="passwordconfirm"><strong>Confirmez votre mot de passe</strong></label>
                    <input type="password" class="form-control" id="passwordconfirm" name="passwordconfirm">
                </div>
            </div>

            <Bouton :title="title" @click.native="postForm()"></Bouton>
      </form>
    </div>
</template>

<script>
    import Bouton from "@/components/Bouton";

    export default {
        name: "Formentrepreneur",

        components: { Bouton },

        data() {
            return{
                title: "Proposez votre projet!",
                file: "",
                firstname: "",
                lastname: "",
                address: "",
                cp: "",
                city: "",
                country: "",
                phone: "",
                mail: "",
                corporate_name: "",
                siret: "",
                share_capital: "",
                sales: "",
                project_title: '',
                financial_needs: "",
                other_needs: '',
                selected: '',
                description: "",
                web: "",
                video_link: "",
                password: "",
                passwordconfirm: "",
                success: false,
            }
        },

        methods: {
            postForm() {
                const axios = require("axios");
                axios.post('http://localhost:3000/entrepreneurs', {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    address: this.address,
                    cp: this.cp,
                    city: this.city,
                    country: this.country,
                    phone: this.phone,
                    mail: this.mail,
                    corporate_name: this.corporate_name,
                    siret: this.siret,
                    share_capital: this.share_capital,
                    sales: this.sales,
                    financial_needs: this.financial_needs,
                    other_needs: this.other_needs,
                    project_title: this.project_title,
                    category: this.selected,
                    description: this.description,
                    web: this.web,
                    video_link: this.video_link,
                    password: this.password,
                })
                .then(() => {
                    this.firstname = "";
                    this.lastname = "";
                    this.address = "";
                    this.cp = "";
                    this.city = "";
                    this.country = "";
                    this.phone = "";
                    this.mail = "";
                    this.corporate_name = "";
                    this.siret = "";
                    this.share_capital = "";
                    this.sales = "";
                    this.financial_needs = "";
                    this.other_needs = "";
                    this.project_title = "";
                    this.selected = "";
                    this.description = "";
                    this.web = "";
                    this.video_link = "";
                    this.password = "";
                    this.success = true;
                })
                .catch((err) => {
                    console.log(err);
                })
            },
        }
    }
</script>

<style lang="scss">
    .formentrepreneur {
        margin:             10vh 10vw;
    }
    
    .bgYellow {
        background-color:   #EFEFEF;
    }
</style>