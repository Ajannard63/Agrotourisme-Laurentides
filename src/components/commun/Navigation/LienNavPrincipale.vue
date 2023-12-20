<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  ***************************************************-->
<script setup>

</script>

<template>
    <div class="flex flex-col justify-around">
        <ul class="section1 text-2xl lg:text-4xl ">
        <li><RouterLink to="/agriculture">Agriculture</RouterLink></li>
        <li><RouterLink to="/alimentaire">Agroalimentaire</RouterLink></li>
        <li><RouterLink to="/activite">Activités</RouterLink></li>
        <li><RouterLink to="/hebergement">Hébergement</RouterLink></li>
        <li><RouterLink to="/restauration">Restauration</RouterLink></li>
      </ul>
      <ul class="section2">
        <li><RouterLink to="/forfaits">Forfaits</RouterLink></li>
        <li><RouterLink to="/calendrier">Évènements à venir</RouterLink></li>
        <li><RouterLink to="/laurentides">Portrait de la région</RouterLink></li>
        <li><RouterLink to="/register">S'inscrire</RouterLink></li>
        <li><RouterLink to="/account">Compte</RouterLink></li>
      </ul>
    </div>
</template>

<style lang="scss">
    
</style>