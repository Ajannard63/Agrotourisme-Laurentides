<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup>
import HeaderApp from '@/components/Accueil/ContenuAccueil/HeaderApp.vue'
import TexteIntro from '@/components/Accueil/ContenuAccueil/TexteIntro.vue'
import ListeAttractions from '@/components/Accueil/ContenuAccueil/ListeAttractions.vue'
import ListeHebergement from '@/components/Accueil/ContenuAccueil/ListeHebergement.vue'
import ListeEvenement from '../components/Accueil/ContenuAccueil/ListeEvenement.vue'
import ForfaitPromo from '../components/Accueil/ContenuAccueil/ForfaitPromo.vue'
import PartenairesApp from '../components/Accueil/PartenairesApp.vue'
</script>
<template>
  <div class="interface">
      <HeaderApp />
    <main class="accueil">
      <TexteIntro />
      <ListeAttractions />
      <ListeHebergement />
      <ListeEvenement />
      <ForfaitPromo />
    </main>
    <PartenairesApp />
  </div>
</template>
