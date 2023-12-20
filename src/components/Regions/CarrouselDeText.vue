<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Composant qui fait le carrousel de texte
  ***************************************************-->
  <script setup>
import { defineEmits, ref } from 'vue';

const emits = defineEmits(['update:currentIndex']);
const currentIndex = ref(0);

const handleClick = (index) => {
    currentIndex.value = index;
    emits('update:currentIndex', currentIndex.value);

};
</script>
<template class="">
    <div class="carrouselTxtRegions max-h-fit min-h-96 w-full lg:w-1/2 bg-white mx-auto my-8 shadow-2xl  px-24 py-12 flex justify-around rounded ">
        <div class="h-fit min-h-80 text-lg leading-9">
            <div v-if="currentIndex === 0" >
                <p>
                    La région des Laurentides est particulièrement connue pour ses cultures de pommes, de fraises,
                    de bleuets et de
                    framboises. Les fermes locales offrent des visites guidées et des dégustations de produits
                    frais, ainsi que la
                    possibilité de cueillir vos propres fruits et légumes en fonction de la saison. En été, les
                    marchés fermiers
                    sont l'endroit idéal pour acheter des produits frais, y compris des fruits, des légumes, de la
                    viande et des
                    produits laitiers.
                </p>
            </div>
            <div v-else-if="currentIndex === 1">
                <p>
                    Les Laurentides offrent également une variété de vins locaux produits dans les vignobles de la
                    région. Les vignobles proposent des dégustations de vins, des visites guidées et des événements
                    saisonniers pour les visiteurs. Les cidreries locales proposent également des dégustations de
                    cidre et des visites guidées, offrant une expérience unique pour les amateurs de boissons
                    artisanales.
                </p>
            </div>
            <div v-else-if="currentIndex === 2">
                <p>
                    En plus de la nourriture et des boissons, les Laurentides offrent une variété d'activités de
                    plein air pour les visiteurs qui souhaitent explorer la nature de la région. Les sentiers de
                    randonnée offrent des vues spectaculaires sur la région, tandis que les rivières et les lacs
                    sont parfaits pour la pratique du canoë et du kayak. Les routes pittoresques de la région sont
                    idéales pour les balades à vélo, offrant une vue imprenable sur les paysages locaux.
                </p>
            </div>
        </div>
        <div class="circlesCarousel mt-32">
            <span :class="{ active: currentIndex === 0 }" @click="handleClick(0)">&#9679;</span>
            <span :class="{ active: currentIndex === 1 }" @click="handleClick(1)">&#9679;</span>
            <span :class="{ active: currentIndex === 2 }" @click="handleClick(2)">&#9679;</span>
        </div>
    </div>
</template>
  
  
<style>
.carrouselTxtRegions {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.circlesCarousel {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    color: rgb(63, 63, 63);
}

.circlesCarousel span {
    margin: 0 0.5rem;
    font-size: 2.5rem;
    cursor: pointer;
}

.active {
    color: var(--turquoise);
}
</style>
  