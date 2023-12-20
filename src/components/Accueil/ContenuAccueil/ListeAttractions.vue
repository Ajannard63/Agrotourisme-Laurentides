<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup>
import AttractionsPopulaires from './AttractionsPopulaires.vue';
</script>

<template>
    <section class="attraction">
        <h2>Les attractions<br> les plus populaires!</h2>
       <AttractionsPopulaires v-motion-fade-visible-once />
       <AttractionsPopulaires v-motion-fade-visible-once />
       <AttractionsPopulaires v-motion-fade-visible-once />
    </section>
</template>

<style lang="scss">
    
</style>