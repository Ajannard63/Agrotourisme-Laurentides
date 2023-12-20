<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup>
import { toRefs } from "vue";

const props = defineProps({
    activite: null,
});

const { activite } = toRefs(props);
</script>

<template>
    <div class="activite mt-12">

        <!-- [ Image format mobile ] -->
        <img src="@/assets/img/placeholder.svg" alt="" class="image-activite">

        <!-- [ Informations d'une activité ] -->
        <div class="infos">
            <h3> {{ props.activite.nom }}</h3>
            <div class="bloc">
                <div class="sous-infos">
                    <p> {{ activite.date }}</p>
                    <p>{{ activite.prix }}</p>
                    <p>{{ activite.emplacement }} - {{ activite.ville }}</p>
                    <p>{{ activite.description }}</p>
                </div>

                <!-- [ Images au format desktop ] -->
                <div class="image-desktop">
                    <img src="@/assets/img/placeholder.svg" alt="" class="desktop">
                    <img src="@/assets/img/placeholder.svg" alt="" class="desktop">
                </div>
            </div>
        </div>

        <!-- [ Image format mobile ] -->
        <img src="@/assets/img/placeholder.svg" alt="" class="image-activite">
    </div>
</template>

<style lang="scss"></style>