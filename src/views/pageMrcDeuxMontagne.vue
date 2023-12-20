<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Page de la mrc des Deux-Montagnes
  ***************************************************-->
<script setup>
import HeaderMRC from '../components/MRC/HeaderMRC.vue';
import PartenairesApp from '../components/Accueil/PartenairesApp.vue';
import TexteIntro from '../components/MRC/TexteIntro.vue';
import SousParagraphe from '../components/MRC/SousParagraphe.vue';
import FilArianne3chem from '../components/commun/Navigation/FilArianne3chem.vue';
</script>

<template>
    <div class="interface">
        <main>
            <HeaderMRC>
                <template v-slot:header>
                    <img class="header-mrc-paysEnHaut" src="@/assets/img/Regions/header-2Mtng/img_320.jpg" srcset="
                  @/assets/img/Regions/header-2Mtng/img_320.jpg 320w,
                  @/assets/img/Regions/header-2Mtng/img_768.jpg 768w,
                  @/assets/img/Regions/header-2Mtng/img_992.jpg 992w,
                  @/assets/img/Regions/header-2Mtng/img_1200.jpg 1200w,
                  @/assets/img/Regions/header-2Mtng/img_1920.jpg 1920w
              " />
                </template>
                <template v-slot:titre>
                    <h1>Deux-Montagnes</h1>
                </template>
                <template v-slot:cercle>
                    <div class="mauve"></div>
                </template>
            </HeaderMRC>

            <!-- [ Fil d'Arianne ] -->
            <FilArianne3chem>
                <template v-slot:sousPageActuelle>
                    <RouterLink to="/laurentides">Portrait de la région</RouterLink>
                </template>
                <template v-slot:pageActuelle>
                    <RouterLink to="/deuxMontagnes">MRC de Deux-Montagnes</RouterLink>
                </template>
            </FilArianne3chem>
            <div class=" bg-zinc-400 p-20 mt-8">
                <img src="@/assets/img/regions/carte2mtng.png" alt="" class="imgMRC mx-auto">
            </div>
            <TexteIntro>
                <template v-slot:paragraphe>
                    La MRC de Deux-Montagnes, située dans la région des Laurentides, possède un riche patrimoine agricole.
                    Avec ses vastes espaces verts et ses terres fertiles, la région est une destination idéale pour les
                    amateurs d'agrotourisme. La MRC de Deux-Montagnes regorge de fermes et de vergers, ainsi que de
                    vignobles, brasseries et distilleries artisanales qui produisent des boissons de qualité supérieure à
                    partir d'ingrédients locaux. Les visiteurs peuvent participer à des visites guidées, des dégustations de
                    produits frais et locaux, des cours de cuisine et des événements saisonniers, tels que la cueillette de
                    pommes et la dégustation de vins. La MRC de Deux-Montagnes est donc un incontournable pour tous ceux qui
                    souhaitent découvrir les délices de l'agrotourisme dans la région des Laurentides.
                </template>
            </TexteIntro>

            <SousParagraphe>
                <template v-slot:sousTitre>
                    La production de <br /> fruits et légumes frais
                </template>
                <template v-slot:paragraphe>
                    La production de fruits et légumes frais : La MRC de Deux-Montagnes abrite de nombreuses fermes et
                    serres qui produisent une grande variété de fruits et légumes frais tout au long de l'année.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les produits de l'érable
                </template>
                <template v-slot:paragraphe>
                    Les produits de l'érable : La région est également reconnue pour sa production de sirop d'érable, de
                    tire d'érable et d'autres produits dérivés de l'érable, qui sont très populaires auprès des touristes.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les fromages artisanaux
                </template>
                <template v-slot:paragraphe>
                    Les fromages artisanaux : La MRC de Deux-Montagnes possède plusieurs fromageries artisanales qui
                    produisent des fromages de qualité supérieure à partir de lait local.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les vignobles <br /> et les cidreries
                </template>
                <template v-slot:paragraphe>
                    Les vignobles et les cidreries : La région compte également plusieurs vignobles et cidreries artisanales
                    qui produisent des vins et des cidres de qualité supérieure à partir de fruits locaux
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les événements saisonniers
                </template>
                <template v-slot:paragraphe>
                    Les événements saisonniers : Tout au long de l'année, la MRC de Deux-Montagnes organise des événements
                    saisonniers, tels que la cueillette de pommes, la dégustation de vins, la fabrication de fromages et la
                    démonstration de l'érablière, qui attirent de nombreux visiteurs.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les circuits touristiques
                </template>
                <template v-slot:paragraphe>
                    Les circuits touristiques de la région permettent aux visiteurs de découvrir les fermes, les vergers,
                    les vignobles et les fromageries de la MRC de Deux-Montagnes, ainsi que les artisans locaux qui
                    produisent des produits uniques.
                </template>
            </SousParagraphe>
        <SousParagraphe>
            <template v-slot:sousTitre>
                Les restaurants locaux
            </template>
            <template v-slot:paragraphe>
                La MRC de Deux-Montagnes compte de nombreux restaurants locaux qui proposent des menus élaborés à partir
                de produits locaux frais, offrant aux visiteurs une expérience culinaire unique et authentique.
            </template>
        </SousParagraphe>
    </main>
    <PartenairesApp />
</div></template>

<style lang="scss"></style>