<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup></script>

<template>
<section class="forfait-accueil" v-motion-slide-visible-once-right>
    <div class="row">
        <img src="@/assets/img/accueil/forfait_famille/img_320.jpg" srcset="
                @/assets/img/accueil/forfait_famille/img_320.jpg 320w,
                @/assets/img/accueil/forfait_famille/img_768.jpg 768w,
                @/assets/img/accueil/forfait_famille/img_992.jpg 992w,
                @/assets/img/accueil/forfait_famille/img_1200.jpg 1200w,
                @/assets/img/accueil/forfait_famille/img_1920.jpg 1920w
            " />
        <div class="forfait">
            <h3>Forfait famille</h3>
            <p>Évadez-vous en famille à la découverte des Laurentides...</p>
            <p class="prix">600$ / 4 personnes</p>
            <RouterLink to="/" class="bouton">
                    Détails
            </RouterLink>
        </div>
    </div>
    <RouterLink to="/forfaits" class="voir-plus">
            Voir tous les forfaits
    </RouterLink>
</section>
</template>

<style lang="scss">
    
</style>