<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
Description: Création, mise en page
***************************************************-->
<!--***************************************************
Nom: Albert Jannard
Matricule: 2147514
Description: Méthode et mécanique d'association des sous catégories à leurs producteurs respectifs
***************************************************-->
<script setup>
import HeaderCategorie from "@/components/Categorie/SousCoucheCommun/HeaderCategorie.vue";
import ListeSousCat from "@/components/Categorie/SousCoucheCommun/ListeSousCat.vue";
import CoucheInfolettre from "@/components/Categorie/SousCoucheCommun/CoucheInfolettre.vue";
import CouchePub from "@/components/Categorie/SousCoucheCommun/CouchePub.vue";
import CoucheGrille from "../components/Categorie/SousCoucheDetail/CoucheGrille.vue";
import PartenairesApp from "../components/Accueil/PartenairesApp.vue";

import { reactive } from "vue";
import axios from "axios";
import FilArianne from "../components/commun/Navigation/FilArianne.vue";
var data = reactive({
  entreprises: null,
  categories: null,
});

axios.get('/json/entreprises.json')
  .then(response => {
    const responseData = response.data;
    data.categories = responseData.categories.restauration;
    data.entreprises = responseData.entreprise;
    // console.log(data.categories);
  })
  .catch(error => {
    console.error(error);
  });

</script>

<template>
  <div class="interface">
    <HeaderCategorie>
      <template v-slot:image>
        <img class="placeholder-header-categorie" src="@/assets/img/header/header-restau/img_320.jpg" srcset="
                  @/assets/img/header/header-restau/img_320.jpg 320w,
                  @/assets/img/header/header-restau/img_768.jpg 768w,
                  @/assets/img/header/header-restau/img_992.jpg 992w,
                  @/assets/img/header/header-restau/img_1200.jpg 1200w,
                  @/assets/img/header/header-restau/img_1920.jpg 1920w
              " />
      </template>
      <template v-slot:titre>
        <h1>Restauration</h1>
      </template>
    </HeaderCategorie>

    <!-- [ Fil d'Arianne ] -->
    <FilArianne>
      <template v-slot:pageActuelle>
        <RouterLink to="/restauration">Restauration</RouterLink>
      </template>
    </FilArianne>
    <main class="categorie">

      <!-- [ Liste des sous catégories ] -->
      <ListeSousCat v-if="data.categories" :sousCategories="data.categories.categories" :entreprise="data.entreprises">
        <template v-slot:sous-titre>
          <h2>Arrêtez-vous pour une bouchée<br> cuisinée par les meilleurs !</h2>
        </template>
      </ListeSousCat>

      <!-- [ Publicité d'une entreprise ] -->
      <CouchePub>
        <template v-slot:representation>
          <img src="@/assets/img/logo_entreprises_membres/cabane_a_maurice.svg" alt="" class="img-representation">
        </template>
        <template v-slot:titre>
          <h2>Pour les becs sucrés</h2>
        </template>
        <template v-slot:infos>
          <div class="infos">
            <p>Avec Agrotourisme Laurentides les gourmands seront comblés. Que vous soyez sur la route ou que vous ayez
              envie de vous arrêter pour de la vraie gastronomie, vous serez comblé. Cependant, les classique québécois
              sont aussi au menu. Arrêtez vous à La Cabane à Maurice et profitez de la cabane à sucre et de ses bâtons
              sucrés!</p>
            <RouterLink to="/">Aller </RouterLink>
          </div>
        </template>
        <template v-slot:image>
          <div class="image-pub">
            <img src="@/assets/img/categorie/dejeuner/img_320.jpg" srcset="
                  @/assets/img/categorie/dejeuner/img_320.jpg 320w,
                  @/assets/img/categorie/dejeuner/img_768.jpg 768w,
                  @/assets/img/categorie/dejeuner/img_992.jpg 992w,
                  @/assets/img/categorie/dejeuner/img_1200.jpg 1200w,
                  @/assets/img/categorie/dejeuner/img_1920.jpg 1920w
              " />
          </div>
        </template>
      </CouchePub>
      <CoucheInfolettre />
      <CoucheGrille />
    </main>
    <PartenairesApp />
  </div>
</template>

<style lang="scss"></style>
