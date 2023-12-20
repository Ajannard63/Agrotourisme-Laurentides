<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Page qui présente les forfaits
  ***************************************************-->

<script setup>
import HeaderForfait from '../components/Forfait/HeaderForfait.vue';
import SectionForfait from '../components/Forfait/SectionForfait.vue';
import PartenairesApp from '../components/Accueil/PartenairesApp.vue';
import FilArianne from '../components/commun/Navigation/FilArianne.vue';
</script>

<template>
    <div class="interface">
        <HeaderForfait/>
        <FilArianne>
            <template v-slot:pageActuelle>
                <RouterLink to="/forfaits">Forfaits</RouterLink>
            </template>
        </FilArianne>
        <main>
            <SectionForfait/>
        </main>
        <PartenairesApp/>   
    </div>
</template>

<style lang="scss">
    
</style>