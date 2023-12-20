<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  ***************************************************-->
  <script setup>
// import { onMounted } from 'vue';
import { ref, onMounted, reactive } from 'vue';
import VignetteForfait from './VignetteForfait.vue';

const props = defineProps({
  forfait: Object
});

onMounted(() => {
  // console.log(props.forfait);
  fetchPhoto();
})

const photoId = ref(null);

// eslint-disable-next-line vue/no-setup-props-destructure
const { forfait } = props;

if (forfait && forfait.IdPhoto) {
  photoId.value = forfait.IdPhoto;
}

const data = reactive({
  photo: null,
  loading: true
});


async function fetchPhoto() {
  const apiKey = 'HzLEEnzFusvpYrW-9hMSLt7-88Nkml-6VQQGrp_4Q0Q';
  const apiUrl = `https://api.unsplash.com/photos/${photoId.value}?client_id=${apiKey}`;

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
  <div class="my-32 bg-zinc-300 h-[500px] w-11/12 mx-auto drop-shadow-lg">
    <div class="">
      <h2 class="text-white text-5xl relative inset-4 md:inset-10">{{ forfait.type }}</h2>
    </div>
    <div class="absolute top-40 md:top-32 left-16 md:left-64 drop-shadow-md h-[500px] w-3/4 md:w-2/3"
      v-if="data.photo && data.photo.urls">
      <img class="imageForfaits object-cover" :src="data.photo.urls.regular" alt="Image_forfait" 
      :srcset="`${data.photo.urls.thumb} 320w,
        ${data.photo.urls.small_s3} 768w,
        ${data.photo.urls.small} 992w,
        ${data.photo.urls.regular} 1200w,
        ${data.photo.urls.full} 1920w`">
    </div>
    <div class="circles">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
  <!-- Chaque emplacement a sa vignette  -->
  <div
    class=" mx-8 mt-10 md:mt-22 lg:mt-52 xl:mt-64 2xl:mt-96 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 last-of-type:mb-16 w-11/12">
    <VignetteForfait v-for="emplacement in forfait.emplacements" :key="emplacement.nom" :emplacement="emplacement"
      class="drop-shadow-lg" />
  </div>
</template>

<style lang="scss"></style>
