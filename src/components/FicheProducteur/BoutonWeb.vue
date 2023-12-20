<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->
<script setup>
const props = defineProps({
    entreprise: null,
});
</script>

<template>

    <!-- [ Bouton vers page web ] -->
    <div class="bouton-web">
        <a v-if="props.entreprise" :to="props.entreprise.website" target="_blank">Visiter notre site web</a>
    </div>
</template>

<style lang="scss">
</style>