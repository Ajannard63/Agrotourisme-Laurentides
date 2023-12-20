<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Composant qui affiche une image d'un forfait
  ***************************************************-->
<script setup>
// import { onMounted } from 'vue';
import { onMounted, reactive } from 'vue';

const props = defineProps({
  img: null
});

onMounted(() => {
//   console.log(props.img);
  fetchPhoto();
})

const data = reactive({
  photo: null,
  loading: true
});

async function fetchPhoto() {
  const apiKey = 'HzLEEnzFusvpYrW-9hMSLt7-88Nkml-6VQQGrp_4Q0Q';
  const apiUrl = `https://api.unsplash.com/photos/${props.img}?client_id=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    data.photo = await response.json();
    data.loading = false;
    console.log(data.photo);
  } catch (error) {
    console.error('Error fetching photo:', error);
    data.loading = false;
  }
}

</script>


<template>
    <div v-if="data.photo && data.photo.urls">
        <img class="imageForfaits" :src="data.photo.urls.regular" alt="Image_forfait" 
      :srcset="`${data.photo.urls.thumb} 320w,
        ${data.photo.urls.small_s3} 768w,
        ${data.photo.urls.small} 992w,
        ${data.photo.urls.regular} 1200w,
        ${data.photo.urls.full} 1920w`">
    </div>
</template>
