<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup></script>

<template>
<div class="evenement">
    <img src="@/assets/img/placeholder.svg" alt="">
    <div class="infos">
        <div class="info-event">
            <slot name="date"></slot>
            <slot name="nomEvent"></slot>
        </div>
        <div class="bouton">
            <RouterLink to="/calendrier#">
                Détails
            </RouterLink>
        </div>
    </div>
</div>
</template>

<style lang="scss">
    
</style>