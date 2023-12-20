<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
Description: Navigation simple
***************************************************-->
<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Mécanique de la navigation accessible grâce à une barre de navigation
  ***************************************************-->

<script setup>
import BarreRecherche from "./BarreRecherche.vue";
import BarreNavigation from "./BarreNavigation.vue";
import Logo from "./LogoNav.vue";
import TexteDefilement from "./TexteDefilement.vue";
import LienNavPrincipale from "./LienNavPrincipale.vue";
import CloseNav from "./CloseNavIcon.vue";
import { ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
import anime from 'animejs/lib/anime.es.js';
var navOpen = ref(false);
// console.log(navOpen);
const closeNav = () => {
  navOpen.value = false;

};
watchEffect(() => {
  if (navOpen.value) {
    anime({
      targets: '.menu',
      translateX: [-100, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 200
      
    });
  } else {
    anime({
      targets: '.menu',
      translateX: [0, -100],
      opacity: [1, 0],
      easing: 'easeOutExpo',
      duration: 700
    });
  }
});
</script>

<template>
  <div class="">
    <!-- Composant de la barre  -->
    <BarreNavigation v-model:checked="navOpen" @update="navOpen = $event" />
    <CloseNav @click="closeNav" v-if="navOpen"></CloseNav>
    <nav class="menu z-50 overscroll-contain relative" v-show="navOpen">

      <!-- Composant du logo -->
      <RouterLink to="/" class="cursor-pointer logo-link" @click="closeNav">
        <Logo />
      </RouterLink>

      <!-- Composant de la barre de recherche -->
      <BarreRecherche />
      <!-- Composant du texte de défilement -->
      <TexteDefilement :checked="navOpen" @update="navOpen = $event" @click="closeNav" />
      <!-- Composant des liens de la navigation -->
      <LienNavPrincipale :checked="navOpen" @update="navOpen = $event" @click="closeNav" />

    </nav>
  </div>
</template>

<style lang="scss">
.logo-link {
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
}
</style>
