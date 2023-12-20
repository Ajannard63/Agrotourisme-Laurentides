<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup></script>

<template>
    <section class="pub" v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }">

        <!-- [ Logo entreprise ] -->
        <slot name="representation"></slot>

        <!-- [ Infos de l'entreprise ] -->
        <div class="separation">
            <slot name="titre"></slot>
            <slot name="infos"></slot>
        </div>
    </section>
    <slot name="image"></slot>
</template>

<style lang="scss"></style>