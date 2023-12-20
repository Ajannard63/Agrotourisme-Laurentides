<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Page de la mrc d'Argenteuil
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
                    <img class="header-mrc-argenteuil" src="@/assets/img/regions/header-argenteuil/img_320.jpg" srcset="
                  @/assets/img/regions/header-argenteuil/img_320.jpg 320w,
                  @/assets/img/regions/header-argenteuil/img_768.jpg 768w,
                  @/assets/img/regions/header-argenteuil/img_992.jpg 992w,
                  @/assets/img/regions/header-argenteuil/img_1200.jpg 1200w,
                  @/assets/img/regions/header-argenteuil/img_1920.jpg 1920w
              " />
                </template>
                <template v-slot:titre>
                    <h1>Argenteuil</h1>
                </template>
                <template v-slot:cercle>
                    <div class="bleu"></div>
                </template>
            </HeaderMRC>

                <!-- [ Fil d'Arianne ] -->
            <FilArianne3chem>
                <template v-slot:sousPageActuelle>
                    <RouterLink to="/laurentides">Laurentides</RouterLink>
                </template>
                <template v-slot:pageActuelle>
                    <RouterLink to="/argenteuil">MRC d'Argenteuil</RouterLink>
                </template>
            </FilArianne3chem>
            <div class=" bg-zinc-400 p-20 mt-8">
                <img src="@/assets/img/regions/carteArgenteuil.png" alt="" class="imgMRC mx-auto">
            </div>
            <TexteIntro>
                <template v-slot:paragraphe>
                    La MRC d'Argenteuil est une destination idéale pour les amateurs d'agrotourisme. Nichée dans la région
                    des Laurentides, au Québec, la région offre un paysage pittoresque composé de terres agricoles fertiles,
                    de forêts denses et de lacs cristallins. Les producteurs locaux y cultivent une grande variété de
                    fruits, de légumes, de viandes et de produits laitiers, qui sont tous disponibles dans les marchés
                    locaux, les épiceries fines et les restaurants de la région. Les visiteurs peuvent également visiter les
                    fermes locales, participer à des dégustations et des ateliers culinaires, et apprendre des techniques de
                    cuisine auprès de chefs locaux. La MRC d'Argenteuil est une destination de choix pour les voyageurs qui
                    cherchent à découvrir les traditions ulinaires et agricoles de la région.
                </template>
            </TexteIntro>
            
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les fermes locales
                </template>
                <template v-slot:paragraphe>
                    La région compte de nombreuses fermes familiales qui produisent une grande variété de fruits, de
                    légumes, de viandes et de produits laitiers. Les visiteurs peuvent découvrir ces exploitations agricoles
                    en visitant les fermes, en participant à des visites guidées et en achetant des produits frais
                    directement auprès des producteurs.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les marchés locaux
                </template>
                <template v-slot:paragraphe>
                    Les marchés locaux de la MRC d'Argenteuil offrent une grande variété de produits frais et locaux, tels que des fruits et légumes de saison, des produits laitiers, des viandes, des œufs et des produits transformés. Les visiteurs peuvent rencontrer les producteurs locaux, discuter avec eux de leur production et découvrir les produits de la région.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les Vignobles
                </template>
                <template v-slot:paragraphe>
                    La région compte plusieurs vignobles qui produisent des vins de qualité, notamment des vins rouges, blancs et rosés. Les vignobles proposent des visites guidées, des dégustations et des événements tout au long de l'année.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les évènements  saisonniers
                </template>
                <template v-slot:paragraphe>
                    La MRC d'Argenteuil propose des événements saisonniers, tels que la cueillette des pommes, des fraises et des bleuets, ainsi que des festivals culinaires mettant en avant les produits locaux. Ces événements permettent aux visiteurs de découvrir les produits de la région tout en profitant des activités de plein air.La région compte plusieurs vignobles qui produisent des vins de qualité, notamment des vins rouges, blancs et rosés. Les vignobles proposent des visites guidées, des dégustations et des événements tout au long de l'année.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    Les activités de plein air
                </template>
                <template v-slot:paragraphe>
                    La MRC d'Argenteuil offre une variété d'activités de plein air, telles que la randonnée, le vélo, la pêche et la chasse. Les visiteurs peuvent explorer les forêts et les rivières de la région, profiter des lacs pour la baignade et la navigation de plaisance, et observer la faune et la flore locales.
                </template>
            </SousParagraphe>
            <SousParagraphe>
                <template v-slot:sousTitre>
                    La cuisine locale
                </template>
                <template v-slot:paragraphe>
                    Les restaurants de la région proposent une cuisine locale et de saison, mettant en valeur les produits frais et locaux. Les visiteurs peuvent découvrir la gastronomie locale en dégustant des plats traditionnels, en visitant les restaurants gastronomiques et en participant à des événements culinaires.
                </template>
            </SousParagraphe>
        </main>
        <PartenairesApp />
    </div>
</template>

<style lang="scss"></style>