<template>
    <div class="forminvestisseur border bgYellow">
        <h1 class="mt-5">Inscrivez-vous !</h1>
        <p><small>( C'est gratuit ♥︎ )</small></p>
        <p v-if="success">Votre inscription a bien été effectuée!</p>
        <form class="p-4">
            <div class="form-row mb-4">
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
                    <input type="number" class="form-control" v-model="cp">
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
            <div class="form-row mb-4">
                <div class="form-group mb-5 col-md-6">
                    <label for="amount_to_invest"><strong>Quel montant souhaitez-vous investir?</strong></label>
                    <input type="number" class="form-control" v-model="amount_to_invest">
                </div> 
                <div class="form-group mb-5 col-md-6">
                    <label for="profitability"><strong>Quelle rentabilité annuelle souhaitez-vous?</strong></label>
                    <input type="number" class="form-control" v-model="profitability">
                </div> 
            </div>
            <div class="form-group mb-5">
                <label for="type-project"><strong>Quelle catégorie de projet vous intéresse ?</strong></label>
                <div class="form-check">
                    <input class="form-check-input mr-2" type="radio" value="education" name="type_project" v-model="checkedCategories">
                    <label class="form-check-label mr-5" for="type_project">Éducation</label>
                    <input class="form-check-input mr-2" type="radio" value="ecologie" name="type_project" v-model="checkedCategories">
                    <label class="form-check-label mr-5" for="type_project">Écologie</label>
                    <input class="form-check-input mr-2" type="radio" value="social" name="type_project" v-model="checkedCategories">
                    <label class="form-check-label mr-5" for="type_project">Social</label>
                    <input class="form-check-input mr-2" type="radio" value="emploi" name="type_project" v-model="checkedCategories">
                    <label class="form-check-label mr-5" for="type_project">Emploi</label>
                    <input class="form-check-input mr-2" type="radio" value="mixite" name="type_project" v-model="checkedCategories">
                    <label class="form-check-label mr-5" for="type_project">Mixité</label>
                </div>  
            </div>
            <div>
                <label for="risk"><strong>Quelle est votre appétence au risque ?</strong></label>
                <div class="form-group mb-5">
                <div class="form-check form-check-inline ml-3">
                    <input class="form-check-input" type="radio" name="risk" value="risk0" v-model="checkedRisk">
                    <label class="form-check-label" for="risk">0</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="risk" id="inlineRadio1" value="risk1" v-model="checkedRisk">
                    <label class="form-check-label" for="risk">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="risk" id="inlineRadio2" value="risk2" v-model="checkedRisk">
                    <label class="form-check-label" for="risk">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="risk" id="inlineRadio3" value="risk3" v-model="checkedRisk">
                    <label class="form-check-label" for="risk">3</label>
                </div>
            </div>
            </div>
            <div class="mb-5">
                <label for="why_invest"><strong>Pourquoi souhaitez-vous investir ?</strong></label>
                 <div class="form-group">
                    <div class="form-check form-check-inline ml-3">
                        <input class="form-check-input" type="radio" value="rentabilite annuelle" v-model="checkedWhyInvest">
                        <label class="form-check-label" for="why_invest">Rentabilité annuelle</label>
                    </div>
                    <div class="form-check form-check-inline ml-3">
                        <input class="form-check-input" type="radio" value="aider au developpement de projet" v-model="checkedWhyInvest">
                        <label class="form-check-label" for="why_invest">Aider au développement de projet</label>
                    </div>
                    <div class="form-check form-check-inline ml-3">
                        <input class="form-check-input" type="radio" value="rentabilite et developpement de projet" v-model="checkedWhyInvest">
                        <label class="form-check-label" for="why_invest">Rentabilité et développement de projet</label>
                    </div>
                </div>
            </div>
            <div class="form-row mb-5">
                <div class="form-group col-md-6">
                    <label for="password"><strong>Mot de passe</strong></label>
                    <input type="password" class="form-control" id="password" v-model="password">
                </div>
                <div class="form-group col-md-6">
                    <label for="passwordconfirm"><strong>Confirmez votre mot de passe</strong></label>
                    <input type="password" class="form-control" id="passwordconfirm">
                </div>
            </div>
           
            <Bouton :title="title" @click.native="postForm()"></Bouton>
        </form>
    </div>
</template>

<script>
    import Bouton from "@/components/Bouton";

    export default {
        name: "Forminvestisseur",

        components: { Bouton },

        data() {
            return {
                title: "S'inscrire",
                firstname: "",
                lastname: "",
                address: "",
                cp: "",
                city: "",
                country: "",
                phone: "",
                mail: "",
                amount_to_invest: "",
                profitability: "",
                checkedCategories: "",
                checkedRisk: "",
                checkedWhyInvest: "",
                password: "",
                passwordconfirm: "",
                success: false,
            }
        },
        
        methods: {
            postForm() {
                const axios = require("axios");
                axios.post('http://localhost:3000/investisseurs', {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    address: this.address,
                    cp: this.cp,
                    city: this.city,
                    country: this.country,
                    phone: this.phone,
                    mail: this.mail,
                    risk: this.checkedRisk,
                    amount_to_invest: this.amount_to_invest,
                    profitability: this.profitability,
                    categories: this.checkedCategories,
                    why_invest: this.checkedWhyInvest,
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
                    this.amount_to_invest = "";
                    this.profitability = "";
                    this.checkedCategories = "";
                    this.checkedRisk = "";
                    this.checkedWhyInvest = "";
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

<style>
    .forminvestisseur {
        margin:                 10vh 10vw;
    }

    .bgYellow {
        background-color:       #EFEFEF;
    }
</style>
