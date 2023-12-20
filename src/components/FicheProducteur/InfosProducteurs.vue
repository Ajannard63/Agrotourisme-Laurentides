<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
Description: Fiche globale du producteur
***************************************************-->
<!--***************************************************
Nom: Albert Jannard
Matricule: 
Description: Tentative d'affichage random des commodités
***************************************************-->

<script setup>
const props = defineProps({
    entreprise: null,
});
// console.log(props.entreprise.name);
// import { reactive } from 'vue'
//   const props = defineProps({
//     entreprise: null,
//   });
//   const data = reactive({
//     icone1: "src/assets/img/SVG/CatPublic/Fichier11.svg",
//     icone2: "src/assets/img/SVG/CatPublic/Fichier12.svg",
//     icone3: "src/assets/img/SVG/CatPublic/Fichier13.svg",
//     icone4: "src/assets/img/SVG/CatPublic/Fichier14.svg",
//     icone5: "src/assets/img/SVG/CatPublic/Fichier15.svg",
//     icone6: "src/assets/img/SVG/CatPublic/Fichier16.svg",
//     icone7: "src/assets/img/SVG/CatPublic/Fichier17.svg",
//   });

//   const getRandomIcons = () => {
//     const icons = [data.icone1, data.icone2, data.icone3, data.icone4, data.icone5, data.icone6, data.icone7];
//     const randomIcons = [];

//     while (randomIcons.length < 4) {
//       const randomIndex = Math.floor(Math.random() * icons.length);
//       const randomIcon = icons[randomIndex];
//       if (!randomIcons.includes(randomIcon)) {
//         randomIcons.push(randomIcon);
//       }
//     }

//     return randomIcons;
//   };

//   const randomIcons = getRandomIcons();
</script>

<template>
    <section class="a-propos">
        <!-- <h2>Boucherie<br><span>Hébert</span></h2> -->
        <h2 v-if="props.entreprise">{{ props.entreprise.name }}</h2>
        <div class="infos">
            <h3>À propos</h3>
            <p v-if="props.entreprise"> {{ props.entreprise.description }}</p>
            <div class="symbole">
                <img src="@/assets/img/SVG/CatPublic/Fichier15.svg" alt="" class="commodite">
                <img src="@/assets/img/SVG/CatPublic/Fichier17.svg" alt="" class="commodite">
                <img src="@/assets/img/SVG/CatPublic/Fichier11.svg" alt="" class="commodite">
                <img src="@/assets/img/SVG/CatPublic/Fichier16.svg" alt="" class="commodite">
            </div>
            <!-- <div v-for="icon in randomIcons" :key="icon">
                <img :src="icon" alt="Icon" class="random-icon">
            </div> -->
        </div>
    </section>
</template>

<style lang="scss"></style>