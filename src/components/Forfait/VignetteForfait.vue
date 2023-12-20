<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  ***************************************************-->
<script setup>

const props = defineProps({
  emplacement: Object
});

</script>

<template>

  <div class="vignette-forfaits ">
    <img src="@/assets/img/placeholder.svg" alt="" class="image-forfaits" />
    <div class="infos">
      <img src="@/assets/img/placeholder.svg" alt="" class="symbole" />
      <h3>{{props.emplacement.nom}}</h3>
    </div>
    <RouterLink :to="`/ficheproducteur/`">À propos</RouterLink>
    <!-- Lien si nous arions eux une base de donner fonctionnel -->
    <!-- <RouterLink :to="`/ficheproducteur/${producteur.id}`">À propos</RouterLink> --> 
  </div>
</template>

<style lang="scss"></style>
