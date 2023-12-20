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
import ImageAgro from "../components/Categorie/SousCoucheDetail/ImageAgro.vue";
import CouchePub from "../components/Categorie/SousCoucheCommun/CouchePub.vue";
import CoucheMaraicher from "../components/Categorie/SousCoucheDetail/CoucheMaraicher.vue";
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
    data.categories = responseData.categories.agroalimentaire;
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
        <img class="placeholder-header-categorie" src="@/assets/img/header/header-ali/img_320.jpg" srcset="
                  @/assets/img/header/header-ali/img_320.jpg 320w,
                  @/assets/img/header/header-ali/img_768.jpg 768w,
                  @/assets/img/header/header-ali/img_992.jpg 992w,
                  @/assets/img/header/header-ali/img_1200.jpg 1200w,
                  @/assets/img/header/header-ali/img_1920.jpg 1920w
              " />
      </template>
      <template v-slot:titre>
        <h1>Agroalimentaire</h1>
      </template>
    </HeaderCategorie>

    <!-- [ Fil d'Arianne ] -->
    <FilArianne>
      <template v-slot:pageActuelle>
        <RouterLink to="/alimentaire">Agroalimentaire</RouterLink>
      </template>
    </FilArianne>
    <main class="categorie">

      <!-- [ Liste des sous catégories ] -->
      <ListeSousCat v-if="data.categories" :sousCategories="data.categories.categories" :entreprise="data.entreprises">
        <template v-slot:sous-titre>
          <h2>Les Laurentides: Un secteur <br> agroalimentaire complet!</h2>
        </template>
      </ListeSousCat>

      <!-- [ Publicité d'une entreprise ] -->
      <CouchePub>
        <template v-slot:representation>
          <img src="@/assets/img/logo_entreprises_membres/esterel_vignoble.svg" alt="" class="img-representation">
        </template>
        <template v-slot:titre>
          <h2>Préparez vos papilles gustatives!</h2>
        </template>
        <template v-slot:infos>
          <div class="infos">
            <p>Les producteurs affiliés à Agrotourisme Laurentides vous offres des mets préparés, des dégustations et
              toute sorte de produits préparés chez nous. Faites la dégustation de vins et de bières québécois et visitez
              le Vignoble Esterel. </p>
            <RouterLink to="/">Aller</RouterLink>
          </div>
        </template>
        <template v-slot:image>
          <div class="image-pub">
            <img src="@/assets/img/categorie/foin/img_320.jpg" srcset="
                  @/assets/img/categorie/foin/img_320.jpg 320w,
                  @/assets/img/categorie/foin/img_768.jpg 768w,
                  @/assets/img/categorie/foin/img_992.jpg 992w,
                  @/assets/img/categorie/foin/img_1200.jpg 1200w,
                  @/assets/img/categorie/foin/img_1920.jpg 1920w
              " />
          </div>
        </template>
      </CouchePub>
      <CoucheInfolettre />
      <CoucheMaraicher />
      <ImageAgro />
    </main>
    <PartenairesApp />
  </div>
</template>

<style lang="scss"></style>
