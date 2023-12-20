<script setup>
import { RouterView } from 'vue-router';
import NavigationPrincipale from '@/components/commun/Navigation/NavigationPrincipale.vue';
import FooterApp from '@/components/commun/FooterApp/FooterApp.vue';
// import Cursor from '@/components/commun/Cursor/Cursor.vue';

</script>

<template>
  <Cursor />
  <div class="grilleMenuContenu">
    <NavigationPrincipale   class="div1"/>
    <RouterView class="div2" v-slot="{ Component }">
      <Transition name="route" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </div>
  <FooterApp />
</template>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>

