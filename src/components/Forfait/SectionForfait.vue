<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  ***************************************************-->
  <script setup>
import CoucheForfait from "../Forfait/CoucheForfait.vue";
import { reactive } from "vue";
import axios from 'axios';

const data = reactive({
  forfaits: []
});

axios.get('/json/forfait.json')
  .then(response => {
    const responseData = response.data;
    const forfaits = responseData.forfaits; 
    data.forfaits = forfaits;
  })
  .catch(error => {
    console.error(error);
  });
</script>

<template>
  <div class="relative ">
    <div class="coucheForfait mx-auto  ">
      <CoucheForfait v-for="forfait in data.forfaits" :key="forfait.id" :forfait="forfait" />
    </div>
  </div>
</template>


<style lang="scss">
.coucheForfait{
  margin: 0;
  padding: 0;
  position: relative;
  right: 0;
  top: 0;
}

</style>
