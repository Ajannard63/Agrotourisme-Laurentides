<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->
<script setup>
import ImageProducteur from '../components/FicheProducteur/ImageProducteur.vue';
import InfosProducteurs from '../components/FicheProducteur/InfosProducteurs.vue';
import RejoindreProducteur from '../components/FicheProducteur/RejoindreProducteur.vue';
import BoutonWeb from '../components/FicheProducteur/BoutonWeb.vue';
import PartenairesApp from '../components/Accueil/PartenairesApp.vue'
import FilArianne3chem from '../components/commun/Navigation/FilArianne3chem.vue';

import { reactive, onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from "axios";

const route = useRoute();
let routeId = computed(() => route.params.id);


const data = reactive({
  id: null,
  entreprise: null,
});
onBeforeMount(() => {
  data.id = routeId.value;
  axios.get('/json/entreprises.json')
    .then(response => {
      const responseData = response.data;
      data.entreprise = responseData.entreprise[data.id];
      console.log(response.data.categories);
    })
    .catch(error => {
      console.error(error);
    });
});
// console.log(data.id);

// var logo = ("src/assets/img/logo_entreprises_membres/"+ data.entreprise.logo);
</script>

<template>
  <div class="interface" v-if="data.entreprise">

    <!-- [ Fil d'Arianne ] -->
    <FilArianne3chem>
      <template v-slot:sousPageActuelle>
        <RouterLink :to="'/fiche-producteur/' + data.id" @click="$router.back()">Secteur</RouterLink>
      </template>
      <template v-slot:pageActuelle>
        <RouterLink :to="'/fiche-producteur/' + data.id">{{ data.entreprise.name }}</RouterLink>
      </template>
    </FilArianne3chem>

    <main class="fiche">
      <!-- [ Fiche ] -->
      <ImageProducteur :entreprise="data.entreprise" />
      <InfosProducteurs :entreprise="data.entreprise" />
      <!-- [ Contact ] -->
      <RejoindreProducteur :entreprise="data.entreprise" />
      <!-- [ Site web ] -->
      <BoutonWeb :entreprise="data.entreprise" />
    </main>
    <PartenairesApp />
  </div>
</template>

<style lang="scss"></style>