<template>
    <div class="contact border bgYellow">
        <div v-for="item in projet" :key="item.id">
            <h1 class="mt-5">Contactez {{item.titre}} !</h1>
                <p v-if="success">Votre message a bien été envoyé!</p>
                <form class="p-4">
                    <div class="form-row mb-4">
                        <div class="form-group col-md-6">
                            <label for="lastname"><strong>Nom</strong></label>
                            <input type="text" class="form-control" name="lastname">
                        </div>   
                        <div class="form-group col-md-6">
                            <label for="firstname"><strong>Prénom</strong></label>
                            <input type="text" class="form-control" name="firstname">
                        </div>  
                    </div>
                    <div class="form-group mb-4">
                        <label for="address"><strong>Adresse</strong></label>
                        <input type="text" class="form-control" name="address">
                    </div>  
                    <div class="form-row mb-4">
                        <div class="form-group col-md-6">
                            <label for="cp"><strong>Code Postal</strong></label>
                            <input type="text" class="form-control" name="cp">
                        </div> 
                        <div class="form-group col-md-6">
                            <label for="city"><strong>Ville</strong></label>
                            <input type="text" class="form-control" name="city">
                        </div>  
                    </div>
                    <div class="form-group mb-4">
                        <label for="country"><strong>Pays</strong></label>
                        <input type="text" class="form-control" name="country">
                    </div>  
                    <div class="form-row mb-4">
                        <div class="form-group col-md-6">
                            <label for="phone"><strong>Téléphone</strong></label>
                            <input type="number" class="form-control" name="phone">
                        </div> 
                        <div class="form-group col-md-6">
                            <label for="mail"><strong>Email</strong></label>
                            <input type="email" class="form-control" name="mail">
                        </div>
                    </div>
                    <div class="form-group mb-5">
                        <label for="first_message"><strong>Votre message</strong></label>
                        <textarea type="text" class="form-control" name="first" rows="10"></textarea>
                    </div> 
                    <Bouton :title="title"></Bouton>
                    <!-- <Bouton :title="title" :@click="postForm()"></Bouton> -->
                </form>
            </div>     
    </div>
</template>

<script>
    import Bouton from "@/components/Bouton";

    export default {
        name: "Contact",
        
        components: { Bouton },

        data() {
            return{
                projet: "",
                title: "Envoyer",
                firstname: "",
                lastname: "",
                address: "",
                cp: "",
                city: "",
                country: "",
                phone: "",
                mail: "",
                first_message: "",
                success: false,
            }
        },
        //methods: {
            // postForm() {
            //     const axios = require("axios");
            //     this.axios.post('urldelapi', {
            //         firstname: this.firstname,
            //         lastname: this.lastname,
            //         address: this.address,
            //         cp: this.cp,
            //         city: this.city,
            //         country: this.country,
            //         phone: this.phone,
            //         mail: this.mail,
            //         amount_to_invest: this.amount-to-invest,
            //         profitability: this.profitability,
            //         type_project: this.type-project,
            //         risk: this.risk,
            //         why_invest: this.why_invest,
            //         password: this.password,
            //         passwordconfirm: this.passwordconfirm
            //     })
            //     .then(() => {
            //         this.firstname = "",
            //         this.lastname = "",
            //         this.address = "",
            //         this.cp = "",
            //         this.city = "",
            //         this.country = "",
            //         this.phone = "",
            //         this.mail = "",
            //         this.amount_to_invest = "",
            //         this.profitability = "",
            //         this.type_project = "",
            //         this.risk = "",
            //         this.why_invest = "",
            //         this.password = "",
            //         this.passwordconfirm = "",
            //         this.success = true;
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     }) 
            // },
        //},
        mounted() {
                const axios = require("axios");
                axios.get(`http://localhost:3000/projet/${this.$route.params.id}`)
                .then(response => (this.projet = response.data));
            },
    }
</script>

<style>
    .contact {
        margin: 10vh 10vw;
    }
    .bgYellow {
        background-color: #EFEFEF;
    }
</style>