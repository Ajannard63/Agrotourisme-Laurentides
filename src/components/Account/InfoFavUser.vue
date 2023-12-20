<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  ***************************************************-->
  <script setup>
import { reactive, onMounted } from 'vue';
// import axios from 'axios';

const favorites = reactive({
  Activité: [],
  Producteur: [],
  Hébergement: [],
  Restaurant: [],
});
async function fetchFavorites() {
  try {
    // Remplacez cette partie par vos données temporaires
    const response = {
      data: {
        Activité: [
          { id: 1, name: 'Activité 1' },
          { id: 2, name: 'Activité 2' },
          { id: 3, name: 'Activité 3' },
          // Ajoutez plus d'activités si vous le souhaitez
        ],
        Producteur: [
          { id: 1, name: 'Producteur 1' },
          { id: 2, name: 'Producteur 2' },
          { id: 3, name: 'Producteur 3' },
          // Ajoutez plus de producteurs si vous le souhaitez
        ],
        Hébergement: [
          { id: 1, name: 'Hébergement 1' },
          { id: 2, name: 'Hébergement 2' },
          { id: 3, name: 'Hébergement 3' },
          // Ajoutez plus d'hébergements si vous le souhaitez
        ],
        Restaurant: [
          { id: 1, name: 'Restaurant 1' },
          { id: 2, name: 'Restaurant 2' },
          { id: 3, name: 'Restaurant 3' },
          // Ajoutez plus de restaurants si vous le souhaitez
        ],
      },
    };

    // Affectation des données temporaires à la variable favorites
    Object.assign(favorites, response.data);
  } catch (error) {
    console.error('Erreur lors de la récupération des favoris:', error);
  }
}
// async function fetchFavorites() {
//     try {
//         const response = await axios.get('URL_DE_VOTRE_API/favorites');
//         Object.assign(favorites, response.data);
//     } catch (error) {
//         console.error('Erreur lors de la récupération des favoris:', error);
//     }
// }

onMounted(() => {
  fetchFavorites();
});
</script>

<template>
  <!-- En mode mobile -->
  <div class="flex flex-col mt-5 gap-5 md:hidden">
    <div class="bg-zinc-200 rounded p-3" v-for="(category, categoryName) in favorites" :key="categoryName">
      <h2 class="capitalize mb-2 text-2xl">{{ categoryName }}</h2>
      <div class="p-2 mt-2 bg-zinc-100 rounded" v-for="favorite in category" :key="favorite.id">
        {{ favorite.name }}
      </div>
    </div>
  </div>
  <!-- Plus grand que 576 px de large  -->
  <div class="hidden md:grid grid-cols-1 mt-5 gap-5">
    <div class="bg-zinc-200 rounded px-8 py-5" v-for="(category, categoryName) in favorites" :key="categoryName">
      <h2 class="capitalize mb-2 text-2xl">{{ categoryName }}</h2>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20 place-content-center ">
        <div class="p-2 mt-2 bg-zinc-100 rounded h-96 place-content-center text-center" v-for="favorite in category" :key="favorite.id">
          {{ favorite.name }}
        </div>
      </div>
    </div>
  </div>
</template>
  
  
<style scoped>

</style>