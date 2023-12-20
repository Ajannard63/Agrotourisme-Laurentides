<!-- 
    Auteur: Albert Jannard
    Vignette d'un producteur
 -->
<script setup>

const props = defineProps({
    producteur: null,
});
console.log(props.producteur);

var logo = ("src/assets/img/logo_entreprises_membres/" + props.producteur.logo);

console.log(logo);
</script>

<template>
    <div v-if="props.producteur" class="vignette-producteur">
        <img src="@/assets/img/placeholder.svg" alt="" class="image-producteur">
        <div class="infos">
            <img :src="logo" alt="" class="symbole">
            <h3> {{ producteur.name }}</h3>
        </div>
        <RouterLink :to="`/ficheproducteur/${producteur.id}`">À propos</RouterLink>
    </div>
</template>

<style lang="scss"></style>