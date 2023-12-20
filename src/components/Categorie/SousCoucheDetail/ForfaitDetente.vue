<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->
<script setup></script>

<template>
    <section class="forfait-detente"  
    v-motion
    :initial="{opacity: 0, y: 100,}"
    :visibleOnce ="{opacity: 1, y: 0,}"
    >
        <img src="@/assets/img/categorie/forfait_detente/img_320.jpg" srcset="
                  @/assets/img/categorie/forfait_detente/img_320.jpg 320w,
                  @/assets/img/categorie/forfait_detente/img_768.jpg 768w,
                  @/assets/img/categorie/forfait_detente/img_992.jpg 992w,
                  @/assets/img/categorie/forfait_detente/img_1200.jpg 1200w,
                  @/assets/img/categorie/forfait_detente/img_1920.jpg 1920w
              " />
        <div class="card1">
            <h2>Reconnectez avec la nature</h2>
            <p>Prenez une bouffée d'air frais et profitez des forfaits détente qui vous aideront à sortir de votre quotidien</p>
            <RouterLink to="/forfaits"></RouterLink>
        </div>
    </section>
</template>

<style lang="scss"></style>