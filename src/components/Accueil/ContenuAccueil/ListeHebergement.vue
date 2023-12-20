<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup>
import SuggestionHebergement from './SuggestionHebergement.vue';
</script>

<template>
    <section class="hebergement-accueil">
        <h2>Profitez de votre <br> séjour en tout confort</h2>

            <!-- [ Liste des suggestion d'hébergement ] -->
        <div class="liste-hebergement">
            <SuggestionHebergement v-motion-slide-visible-bottom/>
            <SuggestionHebergement v-motion-slide-visible-bottom/>
            <SuggestionHebergement v-motion-slide-visible-bottom/>
        </div>
        <div class="voir-plus">
            <RouterLink to="/hebergement" class="btn">
                Voir plus
            </RouterLink>
        </div>
    </section>
</template>

<style lang="scss"></style>