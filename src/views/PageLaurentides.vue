<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Page deu portrait de la région des Laurentides
  ***************************************************-->
<script setup>

import HeaderRegions from "@/components/Regions/HeaderRegions.vue";
import CarrouselImg from "../components/Regions/CarrouselImg.vue";
import CarrouselDeText from "@/components/Regions/CarrouselDeText.vue";
import ContenuLaurentides from "@/components/Regions/ContenuLaurentides.vue";
// import CarteInteractive from "@/components/Regions/CarteInteractive.vue";
import SousNavLaurentide from "../components/Regions/SousNavLaurentide.vue";
import PartenairesApp from "../components/Accueil/PartenairesApp.vue";
import MapboxInteractive from "../components/Regions/MapboxInteractive.vue";
import FilArianne from "../components/commun/Navigation/FilArianne.vue";
</script>

<template>
    <div class="interface">
        <HeaderRegions />
        <FilArianne>
            <template v-slot:pageActuelle>
                <RouterLink to="/laurentides">Portrait de la région</RouterLink>
            </template>
        </FilArianne>
        <main>
            <section>
                <h1 class="uppercase text-5xl text-center lg:text-left">Découvrez les laurentides</h1>
                <CarrouselImg/>
                <CarrouselDeText class="w-1/2 mt-36" />
                <!-- <CarteInteractive/> -->
                <MapboxInteractive/>
                <SousNavLaurentide/>
                <ContenuLaurentides/>
            </section>
        </main>
        <PartenairesApp/>
    </div>
</template>

<style lang="scss"></style>