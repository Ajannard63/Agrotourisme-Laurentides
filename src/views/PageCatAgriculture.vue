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
import { reactive } from "vue";
import HeaderCategorie from "@/components/Categorie/SousCoucheCommun/HeaderCategorie.vue";
import ListeSousCat from "@/components/Categorie/SousCoucheCommun/ListeSousCat.vue";
import CoucheInfolettre from "@/components/Categorie/SousCoucheCommun/CoucheInfolettre.vue";
import CouchePub from "@/components/Categorie/SousCoucheCommun/CouchePub.vue";
import MirabeillePromo from "@/components/Categorie/SousCoucheDetail/MirabeillePromo.vue";
import ForfaitDetente from "@/components/Categorie/SousCoucheDetail/ForfaitDetente.vue";
import PartenairesApp from "../components/Accueil/PartenairesApp.vue";


import axios from "axios";
import FilArianne from "../components/commun/Navigation/FilArianne.vue";
var data = reactive({
  entreprises: null,
  categories: null,
});

axios.get('/json/entreprises.json')
  .then(response => {
    const responseData = response.data;
    data.categories = responseData.categories.agriculteur;
    data.entreprises = responseData.entreprise;
    // console.log(data.categories);
  })
  .catch(error => {
    console.error(error);
  });


</script>

<template >
  <div class="interface">
    <HeaderCategorie>
      <template v-slot:image>
        <img class="placeholder-header-categorie" src="@/assets/img/header/header-agri/img_320.jpg" srcset="
                  @/assets/img/header/header-agri/img_320.jpg 320w,
                  @/assets/img/header/header-agri/img_768.jpg 768w,
                  @/assets/img/header/header-agri/img_992.jpg 992w,
                  @/assets/img/header/header-agri/img_1200.jpg 1200w,
                  @/assets/img/header/header-agri/img_1920.jpg 1920w
              " />
      </template>
      <template v-slot:titre>
        <h1 v-if="data.categories" v-text="data.categories.name"></h1>
      </template>
    </HeaderCategorie>

    <!-- [ Fil d'Arianne ] -->
    <FilArianne>
      <template v-slot:pageActuelle>
        <RouterLink to="/agriculture">Agriculture</RouterLink>
      </template>
    </FilArianne>
    <main class="categorie">

      <!-- [ Liste des sous catégories ] -->
      <ListeSousCat v-if="data.categories" :sousCategories="data.categories.categories" :entreprise="data.entreprises">
        <template v-slot:sous-titre>
          <h2>Découvrez les <br> Agriculteurs d'ici! </h2>
        </template>
      </ListeSousCat>

      <!-- [ Publicité d'une entreprise ] -->
      <CouchePub>
        <template v-slot:representation>
          <img src="@/assets/img/logo_entreprises_membres/logo_ferme_vadeboncoeur.svg" alt="" class="img-representation">
        </template>
        <template v-slot:titre>
          <h2>Les laurentides pour un paysage plus vert</h2>
        </template>
        <template v-slot:infos>
          <div class="infos">
            <p>Agrotourisme Laurentides compte plus de 15 entreprises certifiées Bio pour répondre à vos besoins les plus
              sains! Venez visiter les fermes Vadeboncoeur de Mirabel et voyez comment le marché laitier et maraîcher
              biologique évolue.</p>
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
      <MirabeillePromo />
      <ForfaitDetente />
    </main>
    <PartenairesApp />
  </div>
</template>

<style lang="scss"></style>
