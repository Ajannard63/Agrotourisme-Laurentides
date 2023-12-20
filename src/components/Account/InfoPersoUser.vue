<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  ***************************************************-->

 <script setup>
 import axios from 'axios';
 import { reactive, onBeforeMount } from 'vue';
 
 const data = reactive({
     infoPersonnel: null,
     prenom: null,
     nom: null,
     email: null,
     telephone: null,
 });
 
 onBeforeMount(() => {
     axios.get('https://randomuser.me/api/')
         .then(response => {
             data.infoPersonnel = response.data.results[0];
             data.prenom = data.infoPersonnel.name.first;
             data.nom = data.infoPersonnel.name.last;
             data.email = data.infoPersonnel.email;
             data.telephone = data.infoPersonnel.phone;
         })
 })
 </script>
 

<template>
    <div class="information-personnel">
        <div class="titre-form mt-5 p-3 bg-zinc-300 rounded-t">
            <h2 class="titre">Renseignement personnels</h2>
            <i></i>
        </div>
        <form class="flex flex-col gap-5 p-3 border border-t-0 border-black rounded-b">
            <div class="form__group ">
                <input type="text" id="nom" name="nom" required class="form__field w-full" placeholder="Input text"
                    v-model="prenom">
                <label for="name" class="form__label bg-white"> Prénom * {{ prenom }} </label>
            </div>
            <div class="form__group">
                <input type="text" id="nom" name="nom" required class="form__field w-full" placeholder="Input text"
                    v-model="nom">
                <label for="name" class="form__label bg-white"> Nom * </label>
            </div>
            <div class="form__group">
                <input type="text" id="nom" name="nom" required class="form__field w-full" placeholder="Input text"
                    v-model="email">
                <label for="name" class="form__label bg-white"> Email * </label>
            </div>
            <div class="form__group">
                <input type="text" id="nom" name="nom" required class="form__field w-full" placeholder="Input text"
                    v-model="telephone">
                <label for="name" class="form__label bg-white"> Téléphone * </label>
            </div>

            <!-- <input type="submit" value="Enregistrer les modifications"> -->
        </form>
    </div>
</template>

<style lang="scss"></style>