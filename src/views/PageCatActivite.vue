<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
Description: Création, mise en page
***************************************************-->
<!--***************************************************
Nom: Albert Jannard
Matricule: 2147514
Description: Méthode et mécanique d'association des sous catégories à leurs producteurs
***************************************************-->

<script setup>
import HeaderCategorie from "@/components/Categorie/SousCoucheCommun/HeaderCategorie.vue";
import ListeSousCat from "@/components/Categorie/SousCoucheCommun/ListeSousCat.vue";
import CoucheInfolettre from "@/components/Categorie/SousCoucheCommun/CoucheInfolettre.vue";
import CouchePub from "@/components/Categorie/SousCoucheCommun/CouchePub.vue";
import SaviezVous from "../components/Categorie/SousCoucheDetail/SaviezVous.vue";
import PropositionActivite from "../components/Categorie/SousCoucheDetail/PropositionActivite.vue";
import PartenairesApp from "../components/Accueil/PartenairesApp.vue";
import FilArianne from "../components/commun/Navigation/FilArianne.vue";

import { reactive } from "vue";
import axios from "axios";
var data = reactive({
  entreprises: null,
  categories: null,
});

axios.get('/json/entreprises.json')
  .then(response => {
    const responseData = response.data;
    data.categories = responseData.categories.activites;
    data.entreprises = responseData.entreprise;
    console.log(data.entreprises);
  })
  .catch(error => {
    console.error(error);
  });

</script>

<template>
  <div class="interface">
    <HeaderCategorie>
      <template v-slot:image>
        <img class="placeholder-header-categorie" src="@/assets/img/header/header-acti/img_320.jpg" srcset="
                  @/assets/img/header/header-acti/img_320.jpg 320w,
                  @/assets/img/header/header-acti/img_768.jpg 768w,
                  @/assets/img/header/header-acti/img_992.jpg 992w,
                  @/assets/img/header/header-acti/img_1200.jpg 1200w,
                  @/assets/img/header/header-acti/img_1920.jpg 1920w
              " />
      </template>
      <template v-slot:titre>
        <h1>Activité</h1>
      </template>
    </HeaderCategorie>

    <!-- [ Fil d'Arianne ] -->
    <FilArianne>
      <template v-slot:pageActuelle>
        <RouterLink to="/activite">Activités</RouterLink>
      </template>
    </FilArianne>

    <main class="categorie">

      <!-- [ Liste des sous catégories ] -->
      <ListeSousCat v-if="data.categories" :sousCategories="data.categories.categories" :entreprise="data.entreprises">
        <template v-slot:sous-titre>
          <h2>Découvrez une panoplie d'activités <br> pour votre plaisir!</h2>
        </template>
      </ListeSousCat>

      <!-- [ Publicité d'une entreprise ] -->
      <CouchePub>
        <template v-slot:representation>

          <img src="@/assets/img/logo_entreprises_membres/ferme_maraicherie.svg" alt="" class="img-representation">
        </template>
        <template v-slot:titre>
          <h2>Des activités pour les grands jusqu'aux plus petits</h2>
        </template>
        <template v-slot:infos>
          <div class="infos">
            <p>Agrotourisme Laurentides offre une tonne d'activités différentes pour amuser toute la famille. Profitez des
              visites guidées pour en apprendre plus sur les Laurentides ou passez à la Ferme Maraîchèrie et faites votre
              propre autocueillette! </p>
            <RouterLink to="/">Aller</RouterLink>
          </div>
        </template>
        <template v-slot:image>
          <div class="image-pub">
            <img src="@/assets/img/categorie/pomme/img_320.jpg" srcset="
                  @/assets/img/categorie/pomme/img_320.jpg 320w,
                  @/assets/img/categorie/pomme/img_768.jpg 768w,
                  @/assets/img/categorie/pomme/img_992.jpg 992w,
                  @/assets/img/categorie/pomme/img_1200.jpg 1200w,
                  @/assets/img/categorie/pomme/img_1920.jpg 1920w
              " />
          </div>
        </template>
      </CouchePub>

      <CoucheInfolettre />
      <SaviezVous />
      <PropositionActivite />
    </main>
    <PartenairesApp />
  </div>
</template>

<style lang="scss"></style>
