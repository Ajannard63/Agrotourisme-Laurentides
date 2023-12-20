<!-- 
    Auteur: Albert Jannard
    Couche qui contient la liste des producteurs
-->
<script setup>

import VignetteProducteur from './VignetteProducteur.vue';
import { ref, watchEffect } from "vue";
var props = defineProps({
  producteurs: Object,
  entreprises: null,
});
// console.log(props.producteurs);
var mapEntreprise = ref([]);

watchEffect(() => {
  mapEntreprise.value = props.producteurs.entreprise_id.map(x => props.entreprises[x]); 
}, [props.producteurs]);

</script>


<template>
    <TransitionGroup class="producteur hidden" tag="div" name="listProd">
        <VignetteProducteur v-for="entreprise in mapEntreprise" :key="entreprise.name" :producteur="entreprise" />
    </TransitionGroup>
</template>

<style lang="scss">
// Animation de la liste des producteurs
//------------------------------------------------
// Nom: Oli Boucher
// Matricule: 2147514

.listProd-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.listProd-enter-to {
  opacity: 1;
  transform: scale(1);
}
.listProd-enter-active {
  transition: all 0.4s ease;
}

.listProd-leave-from {
  opacity: 1;
  transform: scale(1);
}
.listProd-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.listeProd-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}
</style>