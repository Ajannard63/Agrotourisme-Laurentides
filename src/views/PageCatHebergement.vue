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
import SliderImg from "../components/Categorie/SousCoucheDetail/SliderImg.vue";
import ForfaitDecouverte from "../components/Categorie/SousCoucheDetail/ForfaitDecouverte.vue";

import { reactive } from "vue";
import axios from "axios";
import PartenairesApp from "../components/Accueil/PartenairesApp.vue";
import FilArianne from "../components/commun/Navigation/FilArianne.vue";
var data = reactive({
  entreprises: null,
  categories: null,
});

axios.get('/json/entreprises.json')
  .then(response => {
    const responseData = response.data;
    data.categories = responseData.categories.hebergement;
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
        <img class="placeholder-header-categorie"
        src="@/assets/img/header/header-heber/img_320.jpg" srcset="
                  @/assets/img/header/header-heber/img_320.jpg 320w,
                  @/assets/img/header/header-heber/img_768.jpg 768w,
                  @/assets/img/header/header-heber/img_992.jpg 992w,
                  @/assets/img/header/header-heber/img_1200.jpg 1200w,
                  @/assets/img/header/header-heber/img_1920.jpg 1920w
              " />
      </template>
      <template v-slot:titre>
        <h1>hébergement</h1>
      </template>
    </HeaderCategorie>

        <!-- [ Fil d'Arianne ] -->
    <FilArianne>
      <template v-slot:pageActuelle>
        <RouterLink to="/hebergement">Hébergements</RouterLink>
      </template>
    </FilArianne>
    <main class="categorie">

            <!-- [ Liste des sous catégories ] -->
      <ListeSousCat v-if="data.categories" :sousCategories="data.categories.categories" :entreprise="data.entreprises">
        <template v-slot:sous-titre>
          <h2>Logez dans <br> nos meilleurs hébergements!</h2>
        </template>
      </ListeSousCat>

            <!-- [ Publicité d'une entreprise ] -->
      <CouchePub>
        <template v-slot:representation>
          <img src="@/assets/img/logo_entreprises_membres/centre_villegiature_saintEustache.svg" alt="" class="img-representation">
        </template>
        <template v-slot:titre>
          <h2>De nouvelles expériences vous attendent!</h2>
        </template>
        <template v-slot:infos>
          <div class="infos">
            <p>Avec Agrotourisme Laurentides, évadez vous de votre quotidien et découvrez des hébergements divers qui vous
              ouvriront les portes sur des paysages tout en nature. Pour de nouvelles aventures, visitez le Centre de
              villégiature de Saint-Eustache.</p>
            <RouterLink to="/">Aller </RouterLink>
          </div>
        </template>
        <template v-slot:image>
          <div class="image-pub"> 
          <img src="@/assets/img/categorie/chalet/img_320.jpg" srcset="
                  @/assets/img/categorie/chalet/img_320.jpg 320w,
                  @/assets/img/categorie/chalet/img_768.jpg 768w,
                  @/assets/img/categorie/chalet/img_992.jpg 992w,
                  @/assets/img/categorie/chalet/img_1200.jpg 1200w,
                  @/assets/img/categorie/chalet/img_1920.jpg 1920w
              " />
          </div>
        </template>
      </CouchePub>
      <CoucheInfolettre />
      <SliderImg />
      <ForfaitDecouverte />
    </main>
    <PartenairesApp />
  </div>
</template>

<style lang="scss"></style>
