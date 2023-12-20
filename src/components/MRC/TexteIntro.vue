<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Composant qui affiche une image et un sous titre
  ***************************************************-->
  <template>
    <div class=" bg-zinc-300">
        <p class="text-white container text-justify leading-7 mx-auto p-14 ">
            <slot name="paragraphe"></slot>
        </p>
    </div>
    <h1 class="text-center leading-7 mt-24 mb-24">LA RÉGION EST RECONNUE POUR...</h1>
    <div class="bg-zinc-200 w-full h-[314px] mb-24 relative" v-if="data.photo && data.photo.urls">
        <img class="relative w-11/12 w-11/12 md:w-3/4 md:h-full mx-auto -top-8 object-cover lg:rounded-lg z-10" :src="data.photo.urls.regular" alt="Image_forfait" 
      :srcset="`,
        ${data.photo.urls.small} 992w,
        ${data.photo.urls.regular} 1200w,
        ${data.photo.urls.full} 1920w`">
        
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
const data = reactive({
    photo: null,
    loading: true
});
// nubVogpglOw
onMounted(() => {
    //   console.log(props.img);
    fetchPhoto();
})
async function fetchPhoto() {
    const apiKey = 'HzLEEnzFusvpYrW-9hMSLt7-88Nkml-6VQQGrp_4Q0Q';
    const apiUrl = `https://api.unsplash.com/photos/nubVogpglOw?client_id=${apiKey}`;

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