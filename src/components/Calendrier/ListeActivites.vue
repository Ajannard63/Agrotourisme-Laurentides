<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup>
import UneActivite from './UneActivite.vue';

const props = defineProps({
  activites: null,
});
// console.log(props.activites);
</script>

<template>

  <!-- [ Liste des activités ] -->
    <div class="liste-activite ">
        <UneActivite v-for="evenement in activites.evenements" :activite="evenement" />
        
    </div>
</template>

<style lang="scss"></style>