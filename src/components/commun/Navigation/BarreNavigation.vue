<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  ***************************************************-->
<script setup>
import { ref } from 'vue';

const checked = ref(false);

const emitUpdate = defineEmits(['update']);

function handleChange() {
  checked.value = !checked.value;
  emitUpdate('update', checked.value);

}
</script>
<template>
  <div class="lg:flex lg:flex-col lg:w-20  sticky top-0 left-0">
    <div class="BarreNav bg-zinc-700 flex flex-row items-center justify-between w-full lg:flex-col lg:w-20 lg:h-96 lg:justify-around">
      <div class="flex m-2 ml-8 w-[65px] h-[65px]  ">
        <RouterLink to="/">
          <img src="@/assets/img/SVG/logos/logo-alt.svg" alt="" class="logo-barre relative -left-3 bg-white rounded-full p-2">
        </RouterLink>
      </div>
      <div class="flex-shrink-0 mr-4 lg:mr-2 z-0">
        <label class="container px-10 py-5">
          <input type="checkbox" v-model="checked" @input="handleChange">
          <div class="checkmark">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
      </div>
    </div>
    <div class="hidden lg:flex  items-end h-20 w-64 mt-40  origin-left -rotate-90 translate-y-36 translate-x-2">
      <h3 class=" text-left">Agrotourisme Laurentides</h3>
    </div>
  </div>
</template>

<style></style>
