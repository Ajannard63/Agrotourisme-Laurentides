<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Page de la mrc des Pays-d'en-Haut
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
                    <img class="header-mrc-paysEnHaut" src="@/assets/img/regions/header-paysEnHaut/img_320.jpg" srcset="
                  @/assets/img/regions/header-paysEnHaut/img_320.jpg 320w,
                  @/assets/img/regions/header-paysEnHaut/img_768.jpg 768w,
                  @/assets/img/regions/header-paysEnHaut/img_992.jpg 992w,
                  @/assets/img/regions/header-paysEnHaut/img_1200.jpg 1200w,
                  @/assets/img/regions/header-paysEnHaut/img_1920.jpg 1920w
              " />
                </template>
                <template v-slot:titre>
                    <h1>Pays-d'en-Haut</h1>
                </template>
                <template v-slot:cercle>
                    <div class="red"></div>
                </template>
            </HeaderMRC>

            <!-- [ Fil d'Arianne ] -->
            <FilArianne3chem>
                <template v-slot:sousPageActuelle>
                    <RouterLink to="/laurentides">Portrait de la région</RouterLink>
                </template>
                <template v-slot:pageActuelle>
                    <RouterLink to="/paysDenHaut">MRC des Pays-d'en-Haut</RouterLink>
                </template>
            </FilArianne3chem>
            <div class=" bg-zinc-400 p-20 mt-8">
                <img src="@/assets/img/regions/cartePEH.png" alt="" class="imgMRC mx-auto">
            </div>
            <TexteIntro>
                <template v-slot:paragraphe>
                    La MRC des Pays-d'en-Haut est une destination de choix pour les amateurs d'agrotourisme. Située dans la
                    région des Laurentides, au Québec, la région est composée de vastes étendues de terres agricoles, de
                    forêts denses et de lacs pittoresques. Les producteurs locaux cultivent une grande variété de fruits, de
                    légumes, de viandes et de produits laitiers, qui sont tous disponibles dans les marchés locaux, les
                    épiceries fines et les restaurants de la région. Les visiteurs peuvent découvrir les fermes locales,
                    participer à des visites guidées et des ateliers culinaires, et rencontrer les producteurs locaux pour
                    en apprendre davantage sur leurs pratiques agricoles. La MRC des Pays-d'en-Haut est une destination
                    incontournable pour les voyageurs qui cherchent à découvrir les traditions culinaires et agricoles de la
                    région, tout en profitant de la beauté naturelle environnante.
                </template>
            </TexteIntro>

            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les producteurs locaux
                </template>
                <template v-slot:paragraphe>
                    Les produits locaux : la région est renommée pour ses producteurs locaux de fruits, de légumes, de
                    viandes, de produits laitiers et de vins. Les visiteurs peuvent découvrir une variété de produits frais
                    dans les marchés locaux, les épiceries fines et les restaurants de la région.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les événements
                </template>
                <template v-slot:paragraphe>
                    Les événements : la MRC des Pays-d'en-Haut est connue pour ses événements agrotouristiques, tels que les
                    marchés publics, les festivals culinaires et les dégustations de vin. Ces événements offrent aux
                    visiteurs l'occasion de découvrir les produits locaux et de rencontrer les producteurs de la région.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les restaurants
                </template>
                <template v-slot:paragraphe>
                    Les restaurants : la région compte de nombreux restaurants qui mettent en valeur les produits locaux
                    dans leurs menus. Les visiteurs peuvent déguster des plats savoureux et créatifs élaborés à partir
                    d'ingrédients frais et de saison.
                </template>
            </SousParagraphe>
            <SousParagraphe>
            <template v-slot:sousTitre>
                La beauté naturelle
            </template>
            <template v-slot:paragraphe>
                La beauté naturelle : la MRC des Pays-d'en-Haut est entourée d'une nature luxuriante, avec ses
                montagnes, ses forêts et ses lacs cristallins. Les visiteurs peuvent profiter de la beauté naturelle
                environnante tout en découvrant les traditions culinaires et agricoles de la région.
            </template>
        </SousParagraphe>
    </main>
    <PartenairesApp />
</div></template>

<style lang="scss"></style>