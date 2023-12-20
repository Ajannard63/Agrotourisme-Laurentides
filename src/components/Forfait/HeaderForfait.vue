<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  ***************************************************-->
<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="forfaits">
        <div>
            <hr class="premiere">
            <h1>Forfaits</h1>
            <p>
                Laissez vous emporté par les Laurentides et profitez de nos forfaits incroyables pour toutes les occasions.
            </p>
            <RouterLink to="">Voir les forfaits</RouterLink>
        </div>
        <div>
            <img src="@/assets/img/Forfaits/fraises/img_320.jpg" srcset="
                  @/assets/img/Forfaits/fraises/img_320.jpg 320w,
                  @/assets/img/Forfaits/fraises/img_768.jpg 768w,
                  @/assets/img/Forfaits/fraises/img_992.jpg 992w,
                  @/assets/img/Forfaits/fraises/img_1200.jpg 1200w,
                  @/assets/img/Forfaits/fraises/img_1920.jpg 1920w
              " />
        <hr class="seconde">
    </div>
    </header>
</template>

<style lang="scss"></style>