<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Composant qui affiche une image d'un forfait et son txt
  ***************************************************-->
<template>
    <div class="textMRC container mx-auto">
        <div class="image-pub mb-16" v-if="data.photo && data.photo.urls">
            <img :src="data.photo.urls.regular" alt="Image_séparation" 
      :srcset="`${data.photo.urls.thumb} 320w,
        ${data.photo.urls.small} 768w,
        ${data.photo.urls.regular} 992w,
        ${data.photo.urls.full} 1200w,
        ${data.photo.urls.raw} 1920w`">
          </div>
        <h2 class=" text-center text-4xl text-zinc-400 uppercase"><slot name="sousTitre"></slot></h2>
        <p class="container text-justify leading-7 mx-auto p-16 pt-10 text-zinc-600"><slot name="paragraphe"></slot></p>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';

let randomNumber = ref(null);

const generateRandomNumber = () => {
  let min = 0; // Définir la valeur minimale
  let max = 5; // Définir la valeur maximale
  randomNumber.value = Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = reactive({
  photo: null,
  loading: true,
  photos:[
    "sYffw0LNr7s",
    "1NZawYILuB8",
    "xMh_ww8HN_Q",
    "D0TdBZ6OMoo",
    "8oPEoh-cM6U",
    "LHwfdIKoOcs",
    "ZzbQCZ6l3d8"
  ]
});

async function fetchPhoto() {
  const apiKey = 'HzLEEnzFusvpYrW-9hMSLt7-88Nkml-6VQQGrp_4Q0Q';
  const apiUrl = `https://api.unsplash.com/photos/${data.photos[randomNumber.value]}?client_id=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    data.photo = await response.json();
    data.loading = false;
  } catch (error) {
    console.error('Error fetching photo:', error);
    data.loading = false;
  }
}

onMounted(() => {
    generateRandomNumber();
  fetchPhoto();
})
</script>

<style lang="scss"></style>
