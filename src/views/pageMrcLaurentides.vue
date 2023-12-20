<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Page de la mrc des Laurentides
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
                    <img class="header-mrc-paysEnHaut" src="@/assets/img/regions/header-laurentides/img_320.jpg" srcset="
                  @/assets/img/regions/header-laurentides/img_320.jpg 320w,
                  @/assets/img/regions/header-laurentides/img_768.jpg 768w,
                  @/assets/img/regions/header-laurentides/img_992.jpg 992w,
                  @/assets/img/regions/header-laurentides/img_1200.jpg 1200w,
                  @/assets/img/regions/header-laurentides/img_1920.jpg 1920w
              " />
                </template>
                <template v-slot:titre>
                    <h1>Laurentides</h1>
                </template>
                <template v-slot:cercle>
                    <div class="jaune"></div>
                </template>
            </HeaderMRC>

            <!-- [ Fil d'Arianne ] -->
            <FilArianne3chem>
                <template v-slot:sousPageActuelle>
                    <RouterLink to="/laurentides">portrait de la région</RouterLink>
                </template>
                <template v-slot:pageActuelle>
                    <RouterLink to="/mrcLaurentides">MRC des Laurentides</RouterLink>
                </template>
            </FilArianne3chem>
            <div class=" bg-zinc-400 p-20 mt-8">
                <img src="@/assets/img/regions/carteLaurentides.png" alt="" class="imgMRC mx-auto">
            </div>
            <TexteIntro>
                <template v-slot:paragraphe>
                    La MRC des Laurentides est une destination de choix pour les amateurs d'agrotourisme. Située dans la
                    région des Laurentides, au Québec, la région est renommée pour ses vastes étendues de terres agricoles,
                    de forêts denses et de lacs pittoresques. Les producteurs locaux cultivent une grande variété de fruits,
                    de légumes, de viandes et de produits laitiers, qui sont tous disponibles dans les marchés locaux, les
                    épiceries fines et les restaurants de la région. Les visiteurs peuvent découvrir les fermes locales,
                    participer à des visites guidées et des ateliers culinaires, et rencontrer les producteurs locaux pour
                    en apprendre davantage sur leurs pratiques agricoles. La MRC des Laurentides est une destination
                    incontournable pour les voyageurs qui cherchent à découvrir les traditions culinaires et agricoles de la
                    région, tout en profitant de la beauté naturelle environnante.
                </template>
            </TexteIntro>

            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les producteurs locaux
                </template>
                <template v-slot:paragraphe>
                    Les producteurs locaux : la région regorge de producteurs locaux offrant une variété de produits frais
                    tels que les fruits et légumes, les fromages, les viandes, les vins et les cidres. Certains producteurs
                    offrent des visites guidées de leurs fermes et des dégustations de leurs produits.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les marchés fermiers
                </template>
                <template v-slot:paragraphe>
                    Les marchés fermiers : la région compte plusieurs marchés fermiers, tels que le marché public de
                    Val-David, le marché de Saint-Sauveur et le marché de Sainte-Adèle, offrant une variété de produits
                    locaux frais ainsi que des plats cuisinés et des produits artisanaux.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les vignobles <br /> et cidreries
                </template>
                <template v-slot:paragraphe>
                    Les vignobles et cidreries : la région est connue pour ses vignobles et cidreries, offrant une
                    expérience unique de dégustation de vins, cidres et autres produits locaux.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les restaurants locaux
                </template>
                <template v-slot:paragraphe>
                    Les restaurants locaux : plusieurs restaurants de la région utilisent des ingrédients frais et locaux
                    pour élaborer des plats créatifs et savoureux, offrant ainsi une expérience culinaire authentique.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les activités <br /> agrotouristiques
                </template>
                <template v-slot:paragraphe>
                    Les activités agrotouristiques : la région propose une variété d'activités agrotouristiques, telles que
                    les visites de fermes, les ateliers culinaires, les dégustations de vins et les cueillettes de fruits et
                    légumes de saison.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les sentiers gourmands
                </template>
                <template v-slot:paragraphe>
                    Les sentiers gourmands : la région compte plusieurs sentiers gourmands permettant de découvrir les
                    produits locaux et les artisans de la région, tout en profitant de la nature environnante.
            </template>
        </SousParagraphe>
        <SousParagraphe>
            <template v-slot:sousTitre>
                Les événements agrotouristiques
            </template>
            <template v-slot:paragraphe>
                Les événements agrotouristiques : la région organise plusieurs événements agrotouristiques tout au long
                de l'année, tels que les festivals des vendanges, les fêtes de la citrouille et les marchés de Noël,
                offrant une occasion de découvrir les produits locaux et de rencontrer les producteurs et artisans de la
                région.
            </template>
        </SousParagraphe>
    </main>
    <PartenairesApp />
</div></template>

<style lang="scss"></style>