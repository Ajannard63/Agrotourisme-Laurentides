<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Page de la mrc de Mirabel
  ***************************************************-->
<script setup>
import HeaderMRC from '../components/MRC/HeaderMRC.vue';
// import ContenuMrc from '../components/MRC/ContenuMRC.vue';
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
                    <img class="header-mrc-paysEnHaut" src="@/assets/img/regions/header-mirabel/img_320.jpg" srcset="
                  @/assets/img/regions/header-mirabel/img_320.jpg 320w,
                  @/assets/img/regions/header-mirabel/img_768.jpg 768w,
                  @/assets/img/regions/header-mirabel/img_992.jpg 992w,
                  @/assets/img/regions/header-mirabel/img_1200.jpg 1200w,
                  @/assets/img/regions/header-mirabel/img_1920.jpg 1920w
              " />
                </template>
                <template v-slot:titre>
                    <h1>Mirabel</h1>
                </template>
                <template v-slot:cercle>
                    <div class="orange"></div>
                </template>
            </HeaderMRC>

            <!-- [ Fil d'Arianne ] -->
            <FilArianne3chem>
                <template v-slot:sousPageActuelle>
                    <RouterLink to="/laurentides">Portrait de la région</RouterLink>
                </template>
                <template v-slot:pageActuelle>
                    <RouterLink to="/mirabel">MRC de Mirabel</RouterLink>
                </template>
            </FilArianne3chem>
            <!-- <ContenuMrc /> -->
            <div class=" bg-zinc-400 p-20 mt-8">
                <img src="@/assets/img/regions/carteMirabel.png" alt="" class="imgMRC mx-auto">
            </div>
            <TexteIntro>
                <template v-slot:paragraphe>
                    La MRC ou ville de Mirabel, située au nord-ouest de la région métropolitaine de Montréal, est reconnue
                    pour son dynamisme en matière d'agrotourisme. Cette région possède une grande diversité de productions
                    agricoles, allant des fruits et légumes aux produits laitiers et de la viande. En plus de sa proximité
                    avec les grandes villes, la ville de Mirabel est également bordée par les montagnes et les lacs, offrant
                    ainsi un cadre naturel exceptionnel pour la pratique de diverses activités de plein air en lien avec
                    l'agrotourisme, telles que la randonnée pédestre, l'équitation et la pêche. Les visiteurs peuvent
                    profiter d'une expérience immersive en visitant les fermes, en participant à des dégustations de
                    produits locaux et en découvrant les méthodes de production durables et respectueuses de
                    l'environnement. La ville de Mirabel est ainsi une destination de choix pour les amateurs d'agrotourisme
                    à la recherche d'une expérience authentique et immersive en milieu rural.
                </template>
            </TexteIntro>

            <SousParagraphe>
                <template v-slot:sousTitre>
                    La diversité de <br /> productions agricoles
                </template>
                <template v-slot:paragraphe>
                    La diversité de productions agricoles : la ville de Mirabel compte un grand nombre de fermes offrant une
                    variété de productions agricoles, allant des fruits et légumes aux produits laitiers et de la viande.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les circuits <br /> agrotouristiques
                </template>
                <template v-slot:paragraphe>
                    Les circuits agrotouristiques : la ville de Mirabel propose des circuits agrotouristiques permettant de
                    découvrir les fermes de la région et de rencontrer les producteurs locaux. Ces circuits offrent une
                    expérience immersive pour les visiteurs, qui peuvent ainsi en apprendre davantage sur les méthodes de
                    production et les produits locaux.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les évènements <br /> agrotouristiques
                </template>
                <template v-slot:paragraphe>
                    Les événements agrotouristiques : la ville de Mirabel organise plusieurs événements tout au long de
                    l'année, tels que des festivals culinaires, des marchés publics et des activités de cueillette en
                    saison. Ces événements permettent aux visiteurs de découvrir les produits locaux et de rencontrer les
                    producteurs de la région.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les activités <br /> de plein air
                </template>
                <template v-slot:paragraphe>
                    Les activités de plein air : la ville de Mirabel est entourée de montagnes et de lacs, offrant ainsi de
                    nombreuses possibilités d'activités de plein air en lien avec l'agrotourisme, telles que la randonnée
                pédestre, l'équitation et la pêche
            </template>
        </SousParagraphe>
        <SousParagraphe>
            <template v-slot:sousTitre>
                Les initiatives <br /> durables
            </template>
            <template v-slot:paragraphe>
                Les initiatives durables : plusieurs fermes de la ville de Mirabel ont adopté des méthodes de production
                durables et respectueuses de l'environnement, telles que l'agriculture biologique et la permaculture.
                Les visiteurs peuvent ainsi découvrir ces pratiques et en apprendre davantage sur l'importance de
                l'agriculture durable.
            </template>
        </SousParagraphe>
    </main>
    <PartenairesApp />
</div></template>

<style lang="scss"></style>