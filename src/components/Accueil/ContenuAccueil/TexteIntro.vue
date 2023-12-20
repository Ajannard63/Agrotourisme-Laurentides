<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->
<script setup>
import IntroSlot from './IntroSlot.vue'
</script>

<template>
    <section class="intro">
        <h2>Les Laurentides,<br> un territoire gourmand!</h2>

        <!-- [ Première section ] -->

        <IntroSlot v-motion-slide-visible-once-right>
            <template v-slot:paragraphe>
                <img src="@/assets/img/accueil/cooking/img_320.jpg" srcset="
                @/assets/img/accueil/cooking/img_320.jpg 320w,
                @/assets/img/accueil/cooking/img_768.jpg 768w,
                @/assets/img/accueil/cooking/img_992.jpg 992w,
                @/assets/img/accueil/cooking/img_1200.jpg 1200w,
                @/assets/img/accueil/cooking/img_1920.jpg 1920w
            " />
                <p>Bienvenue dans les Laurentides, une région du Québec qui est un véritable paradis pour les gourmets ! Les
                    Laurentides offrent une expérience culinaire unique en son genre grâce à sa scène gastronomique
                    florissante, ses produits locaux de qualité supérieure et ses restaurants de renom. Que vous soyez un
                    passionné de cuisine ou simplement un amoureux des bonnes choses, vous êtes sûr de trouver votre bonheur
                    ici.</p>
            </template>
        </IntroSlot>

        <!-- [ Deuxième section ] -->
        <IntroSlot v-motion-slide-visible-once-left>
            <template v-slot:paragraphe>
                <img src="@/assets/img/accueil/vaches/img_320.jpg" srcset="
                @/assets/img/accueil/vaches/img_320.jpg 320w,
                @/assets/img/accueil/vaches/img_768.jpg 768w,
                @/assets/img/accueil/vaches/img_992.jpg 992w,
                @/assets/img/accueil/vaches/img_1200.jpg 1200w,
                @/assets/img/accueil/vaches/img_1920.jpg 1920w
            " />
                <p>Découvrez des produits locaux de première qualité tels que des fromages artisanaux, des légumes
                    biologiques, des viandes succulentes et du sirop d'érable de première qualité. Les marchés fermiers
                    locaux sont le lieu idéal pour découvrir ces produits et les savourer dans les restaurants de la région.
                    Vous pourrez également participer à des événements gastronomiques qui mettent en avant les produits
                    locaux et les chefs locaux. Profitez de la chance de rencontrer des producteurs passionnés et de
                    déguster les produits les plus frais que vous n'ayez jamais goûtés.</p>
            </template>
        </IntroSlot>

        <!-- [ Troisième section ] -->
        <IntroSlot v-motion-slide-visible-once-right>
            <template v-slot:paragraphe>
                <img src="@/assets/img/accueil/paysage/img_320.jpg" srcset="
                @/assets/img/accueil/paysage/img_320.jpg 320w,
                @/assets/img/accueil/paysage/img_768.jpg 768w,
                @/assets/img/accueil/paysage/img_992.jpg 992w,
                @/assets/img/accueil/paysage/img_1200.jpg 1200w,
                @/assets/img/accueil/paysage/img_1920.jpg 1920w
            " />
                <p>Les Laurentides offrent également une expérience culinaire unique grâce à ses auberges et ses gîtes.
                    Offrant des vues spectaculaires sur les montagnes et les lacs environnants, les auberges de la région
                    proposent des menus traditionnels de la région et utilisent des ingrédients locaux pour créer des plats
                    savoureux et originaux. Les gîtes offrent quant à eux des petits-déjeuners copieux et délicieux, souvent
                    composés de produits locaux et de confitures maison. Tout cela dans une ambiance chaleureuse et
                    conviviale.</p>
            </template>
        </IntroSlot>
    </section>
</template>

<style lang="scss"></style>