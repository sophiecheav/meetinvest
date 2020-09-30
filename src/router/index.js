import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '@/views/accueil.vue'
import APropos from '@/views/aPropos.vue'
import EntrepreneurDetails from '@/views/entrepreneurDetails.vue'
import Entrepreneurs from '@/views/entrepreneurs.vue'
import FormEntrepreneur from '@/views/formEntrepreneur.vue'
import FormInvestisseur from '@/views/formInvestisseur.vue'
import Investisseur from '@/views/investisseur.vue'
// import MentionsLegales from '@/views/mentionsLegales.vue'
import Contact from '@/views/contact.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
  },
  {
    path: '/a-propos',
    name: 'APropos',
    component: APropos,
  },
  {
    path: '/entrepreneur-details',
    name: 'EntrepreneurDetails',
    component: EntrepreneurDetails,
  },
  {
    path: "/entrepreneur-details/:id",
    name: "EntrepreneurDetails",
    component: EntrepreneurDetails,
  },
  {
    path: '/entrepreneurs',
    name: 'Entrepreneurs',
    component: Entrepreneurs,
  },
  {
    path: '/form-entrepreneur',
    name: 'FormEntrepreneur',
    component: FormEntrepreneur,
  },
  {
    path: '/form-investisseur',
    name: 'FormInvestisseur',
    component: FormInvestisseur,
  },
  {
    path: '/investisseur',
    name: 'Investisseur',
    component: Investisseur,
  },
  // {
  //   path: '/mentions-legales',
  //   name: 'MentionsLegales',
  //   component: MentionsLegales,
  // },
  {
    path: '/contact/:id',
    name: 'Contact',
    component: Contact,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
