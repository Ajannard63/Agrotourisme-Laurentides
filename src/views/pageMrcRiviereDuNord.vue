<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Page de la mrc de la rivière du nord
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
                    <img class="header-mrc-paysEnHaut" src="@/assets/img/regions/header-riv/img_320.jpg" srcset="
                  @/assets/img/regions/header-riv/img_320.jpg 320w,
                  @/assets/img/regions/header-riv/img_768.jpg 768w,
                  @/assets/img/regions/header-riv/img_992.jpg 992w,
                  @/assets/img/regions/header-riv/img_1200.jpg 1200w,
                  @/assets/img/regions/header-riv/img_1920.jpg 1920w
              " />
                </template>
                <template v-slot:titre>
                    <h1>Rivière du Nord</h1>
                </template>
                <template v-slot:cercle>
                    <div class="vert"></div>
                </template>
            </HeaderMRC>

            <!-- [ Fil d'Arianne ] -->
            <FilArianne3chem>
                <template v-slot:sousPageActuelle>
                    <RouterLink to="/laurentides">Portrait de la région</RouterLink>
                </template>
                <template v-slot:pageActuelle>
                    <RouterLink to="/riviereDuNord">MRC de la Rivière du Nord</RouterLink>
                </template>
            </FilArianne3chem>
            <div class=" bg-zinc-400 p-20 mt-8">
                <img src="@/assets/img/regions/carteRiv.png" alt="" class="imgMRC mx-auto">
            </div>
            <TexteIntro>
                <template v-slot:paragraphe>
                    La MRC de la Rivière-du-Nord est une destination agrotouristique qui offre une expérience rurale
                    authentique aux visiteurs. Située dans la région des Laurentides, elle est reconnue pour ses paysages
                    bucoliques et ses terres fertiles qui permettent la production d'une grande variété de produits locaux.
                    Les fermes, les vergers, les vignobles et les érablières sont autant d'endroits où les touristes peuvent
                    découvrir les savoir-faire agricoles de la région et déguster des produits frais et savoureux. Les
                    activités agrotouristiques, telles que la cueillette de fruits et légumes de saison, les dégustations de
                    vins et de cidres, ainsi que les visites guidées de fermes, sont populaires auprès des visiteurs. La MRC
                    de la Rivière-du-Nord est une destination idéale pour les amoureux de la nature et les gourmands qui
                    cherchent à s'immerger dans l'univers agricole de la région.
                </template>
            </TexteIntro>

            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les fermes locales
                </template>
                <template v-slot:paragraphe>
                    Les nombreux producteurs locaux offrant une grande variété de produits frais et de qualité, tels que les
                    fruits, les légumes, la viande, le fromage et le miel, entre autres.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les marchés publics
                </template>
                <template v-slot:paragraphe>
                    Les marchés publics offrant des produits frais et locaux de la région, ainsi que des produits
                    artisanaux.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les Vignobles
                </template>
                <template v-slot:paragraphe>
                    Les vignobles et les cidreries qui produisent des vins et des cidres locaux de qualité, offrant une
                    expérience de dégustation unique.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les évènements <br /> annuels
                </template>
                <template v-slot:paragraphe>
                    Les événements annuels mettant en vedette l'agriculture et l'agrotourisme, tels que les festivals de la
                    pomme, les fêtes des récoltes et les événements de dégustation de vin.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les activités <br /> de plein air
                </template>
                <template v-slot:paragraphe>
                    Les sentiers de randonnée pédestre et de vélo qui permettent aux visiteurs de découvrir la beauté
                    naturelle de la région, tout en visitant les exploitations agricoles locales.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                Les hébergements <br /> agrotouristiques
            </template>
            <template v-slot:paragraphe>
                Les hébergements offrant une expérience agrotouristique, tels que les gîtes, les auberges et les
                chalets, permettant aux visiteurs de profiter pleinement de leur séjour dans la région tout en
                découvrant l'agriculture locale.
            </template>
        </SousParagraphe>
    </main>
    <PartenairesApp />
</div></template>

<style lang="scss"></style>