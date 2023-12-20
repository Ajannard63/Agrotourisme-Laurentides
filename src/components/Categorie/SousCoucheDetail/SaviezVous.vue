<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup></script>

<template>
    <section class="saviez-vous">

        <!-- [ Cercles de décoration ] -->
        <div class="cercle"></div>
        <div class="cercle2"></div>
        <img src="@/assets/img/categorie/saviezVous/img_320.jpg" srcset="
                  @/assets/img/categorie/saviezVous/img_320.jpg 320w,
                  @/assets/img/categorie/saviezVous/img_768.jpg 768w,
                  @/assets/img/categorie/saviezVous/img_992.jpg 992w,
                  @/assets/img/categorie/saviezVous/img_1200.jpg 1200w,
                  @/assets/img/categorie/saviezVous/img_1920.jpg 1920w
              " />

        <!-- [ Informations ] -->
        <div class="card" v-motion-slide-visible-right>
            <p><span>Savais-tu</span> que l'industrie agroalimentaire est l'une des plus importantes au monde, en termes de
                production, de revenus et d'emplois ? Elle comprend la production, la transformation et la commercialisation
                de produits alimentaires, tels que les fruits, les légumes, les céréales, les viandes, les produits
                laitiers, les boissons et bien d'autres encore.</p>
        </div>
    </section>
</template>

<style lang="scss"></style>