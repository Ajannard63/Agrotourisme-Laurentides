<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup>

</script>

<template>
    <div class="interface">
        <main>

            <!-- [ Fil d'Ariane simple ] -->
            <div class="arianne">
                <RouterLink to="/">Accueil</RouterLink>
                <p>></p>
                <slot name="pageActuelle"></slot>
            </div>
        </main>
    </div>
</template>

<style lang="scss"></style>
