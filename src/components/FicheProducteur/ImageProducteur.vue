<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup>
// import { onBeforeMount } from 'vue'
const props = defineProps({
    entreprise: null,
});
var logo = ("src/assets/img/logo_entreprises_membres/" + props.entreprise.logo);
console.log(logo);
</script>

<template>

    <!-- [ Images du producteur et logo ] -->
    <section class="image-prod" >
        <div v-if="props.entreprise.logo">
            <!-- <img :src="logo" alt="logo" class="logo-producteur"> -->
            <img src="@/assets/img/placeholder.svg" alt="logo" class="logo-producteur">
            <img src="@/assets/img/placeholder.svg" alt="" class="image">
        </div>
    </section>
</template>

<style lang="scss">
    
</style>