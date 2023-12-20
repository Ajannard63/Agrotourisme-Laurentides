<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Composant qui affiche le header du mrc
  ***************************************************-->
  <script setup></script>

<template>
    <header class="header-mrc">
        <slot name="header"></slot>
        <slot name="titre"></slot>
        <slot name="cercle"></slot>
    </header>
</template>

<style></style>