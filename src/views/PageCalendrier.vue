<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup>
import ListeMoisMobile from '@/components/Calendrier/ListeMoisMobile.vue';
import ListeMoisDesktop from '@/components/Calendrier/ListeMoisDesktop.vue';
import HeaderCategorie from "@/components/Categorie/SousCoucheCommun/HeaderCategorie.vue";
import PartenairesApp from '../components/Accueil/PartenairesApp.vue';
import FilArianne from '../components/commun/Navigation/FilArianne.vue';

import { reactive } from "vue";
import axios from "axios";
var data = reactive({
  calendrier: null,
});

axios.get('/json/calendrier.json')
  .then(response => {
    const responseData = response.data;
    data.calendrier = responseData.calendrier;
    // console.log(data.calendrier);
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
        src="@/assets/img/calendrier/header-calendrier/img_320.jpg" srcset="
                  @/assets/img/calendrier/header-calendrier/img_320.jpg 320w,
                  @/assets/img/calendrier/header-calendrier/img_768.jpg 768w,
                  @/assets/img/calendrier/header-calendrier/img_992.jpg 992w,
                  @/assets/img/calendrier/header-calendrier/img_1200.jpg 1200w,
                  @/assets/img/calendrier/header-calendrier/img_1920.jpg 1920w
              " />
      </template>
      <template v-slot:titre>
        <h1>À venir</h1>
      </template>
    </HeaderCategorie>

    <!-- [ Fil d'Arianne ] -->
    <FilArianne>
      <template v-slot:pageActuelle>
        <RouterLink to="/calendrier">Calendrier</RouterLink>
      </template>
    </FilArianne>

    <main class="calendrier">
      <h2>
        Calendrier des <br />
        évènements
      </h2>

      <!-- [ Liste des mois Format mobile ] -->
      <section class="mois-mobile" v-if="data.calendrier">
        <ListeMoisMobile :lesMois="data.calendrier" />
      </section>

      <!-- [ Liste des mois Format desktop ] -->
      <section class="mois-desktop" v-if="data.calendrier">
        <ListeMoisDesktop :lesMois="data.calendrier" /> 
      </section> 
    </main>
    <PartenairesApp />
  </div>
</template>

<style lang="scss"></style>
