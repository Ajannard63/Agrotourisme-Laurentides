<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  ***************************************************-->
<script setup>

</script>

<template>
    <div class="img-profil-user ">
      <div class="titre-form mt-5 p-3 bg-zinc-300 rounded-t">
        <h2 class="titre">Image de profil</h2>
        <i></i>
      </div>
      <div class="flex flex-row md:flex-col items-center content-center justify-around gap-3 p-3 bg-zinc-400 rounded-b imgUser">
        <div class="imgUser w-2/3 items-center">
          <img src="@/assets/img/placeholder.svg" alt="">
        </div>
        <div class="flex items-center justify-center">
          <label for="upload" class="cursor-pointer bg-zinc-300 transition hover:bg-gray-400 rounded-lg px-4 py-2 text-gray-700 font-xs md:font-medium ">
            <span>Téléverser une image</span>
            <input id="upload" name="upload" type="file" class="absolute top-0 left-0 opacity-0">
          </label>
        </div>
      </div>
    </div>
  </template>

<style lang="scss"></style>