<template>
  <div class="carousel">
    <img src="@/assets/img/placeholder.svg" alt="Image 1" />
    <img src="@/assets/img/placeholder.svg" alt="Image 2" />
    <img src="@/assets/img/placeholder.svg" alt="Image 3" />
    <img src="@/assets/img/placeholder.svg" alt="Image 4" />
    <img src="@/assets/img/placeholder.svg" alt="Image 5" />
  </div>
</template>

<script setup></script>

<style lang="scss">
.carousel {
  position: relative;
  overflow: hidden;

}

.carousel img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s;

  & :first-child {
    position: relative;
    opacity: 1;
  }
}

@keyframes slide {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.carousel img:first-child {
  animation: slide 5s infinite;
}

.carousel img:nth-child(2) {
  animation: slide 5s infinite 1s;
}

.carousel img:nth-child(3) {
  animation: slide 5s infinite 2s;
}

.carousel img:nth-child(4) {
  animation: slide 5s infinite 3s;
}

.carousel img:last-child {
  animation: slide 5s infinite 4s;
}
</style>
