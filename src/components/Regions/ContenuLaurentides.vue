<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Composant qui affiche le contenu de la région des Laurentides
  ***************************************************-->
  <script setup>
import imgRegions from './imgRegions.vue';

import { reactive } from 'vue';
const data = reactive({
    photoId:[
        'RwHv7LgeC7s',
        'LHm2nLdtC9g',
        'aWXVxy8BSzc'
    ]
})
console.log(data.photoId[0]);
</script>

<template>
    <div class="mt-36 w-full flex flex-col justify-center">
        <div class="flex flex-col lg:flex-row items-center w-full gap-10 lg:gap-24 mb-28">
            <div class="  lg:w-1/2 flex justify-center">
                <p class="px-4 lg:px-14 text-justify leading-9 container">
                    L'<span class="uppercase text-2xl ">automne</span> est une saison particulièrement populaire pour
                    l'agrotourisme dans les Laurentides. Les visiteurs viennent de partout pour admirer les couleurs de
                    l'automne et pour participer à la cueillette de pommes et de citrouilles. Les érablières locales ouvrent
                    également leurs portes pour la saison des sucres, offrant des dégustations de sirop d'érable et des
                    visites guidées de leurs installations de production. Les fermes locales proposent également des
                    activités amusantes pour les enfants, comme des labyrinthes de maïs et des promenades en charrette.
                </p>
            </div>
            <div class="imgContenuLaurentides  w-2/3 lg:w-1/2 flex justify-center" >
                <imgRegions :img="data.photoId[0]"/>
            </div>
        </div>
        <div class="flex flex-col-reverse lg:flex-row items-center w-full gap-10 xl:gap-24 mb-28">
            <div class="imgContenuLaurentides  w-2/3 lg:w-1/2 flex justify-center">
                <imgRegions :img="data.photoId[1]"/>
            </div>
            <div class="  lg:w-1/2 items-center flex justify-center">
                <p class="px-4 lg:px-14 text-justify leading-9 container">
                    En <span class="uppercase text-2xl">hiver</span>, les Laurentides offrent également des activités
                    agricoles. Les fermes locales proposent des activités telles que la fabrication de fromage, la traite
                    des vaches et la production de sirop d'érable. Les visiteurs peuvent également profiter de la saison de
                    ski dans les Laurentides et explorer les restaurants locaux, qui proposent des menus mettant en vedette
                    des produits locaux et de saison.
                </p>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row items-center w-full gap-10 xl:gap-24">
            <div class="  lg:w-1/2 flex justify-center ">
                <p class="px-4 lg:px-14 text-justify leading-9  container">
                    En plus de l'agrotourisme, les Laurentides sont également connues pour leurs nombreux <span
                        class="uppercase text-2xl">festivals</span> et événements, qui célèbrent la nourriture, la culture
                    et la nature de la région. Le Festival des couleurs de Mont-Tremblant est l'un des événements les plus
                    populaires de la région, offrant des activités pour toute la famille, y compris des dégustations de
                    produits locaux et des spectacles de musique.
                </p>
        
        </div>
        <div class="imgContenuLaurentides mb-28 w-2/3 lg:w-1/2 flex justify-center">
            <imgRegions :img="data.photoId[2]"/>
        </div>
    </div>
</div>
</template>

<style lang="scss"></style>