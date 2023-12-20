<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup>
import { ref, onMounted } from 'vue';

const cursorX = ref(0);
const cursorY = ref(0);
const isVisible = ref(true);
const isClicked = ref(false);

const handleMouseMove = (e) => {
  cursorX.value = e.pageX;
  cursorY.value = e.pageY - window.pageYOffset;
};

const handleScroll = () => {
  isVisible.value = true;
};

const handleClick = () => {
  isClicked.value = true;
  setTimeout(() => {
    isClicked.value = false;
  }, 800);
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('click', handleClick);
});

</script>

<template>
  <!-- [ Curseur personnalisé ] -->
  <div class="custom-cursor" :class="{ 'click': isClicked }"
    :style="{ display: isVisible ? 'block' : 'none', left: cursorX + 'px', top: cursorY + 'px' }"></div>
</template>
  
  
<style lang="scss"></style>
  