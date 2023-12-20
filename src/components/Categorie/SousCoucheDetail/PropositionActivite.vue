<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup></script>

<template>
    <section class="proposition-activite">
        <h2>Voyez le calendrier des évènements à venir!</h2>
        <RouterLink to="/calendrier">Voir le calendrier</RouterLink>
        <div class="conteneur" v-motion-slide-visible-bottom>

            <!-- [ Activité 1 ] -->
            <div>
                <img src="@/assets/img/categorie/chocolat/img_320.jpg" srcset="
                @/assets/img/categorie/chocolat/img_320.jpg 320w,
                @/assets/img/categorie/chocolat/img_768.jpg 768w,
                @/assets/img/categorie/chocolat/img_992.jpg 992w,
                @/assets/img/categorie/chocolat/img_1200.jpg 1200w,
                @/assets/img/categorie/chocolat/img_1920.jpg 1920w
            " />
                <RouterLink to="/calendrier">Chocolat d'antan</RouterLink>
            </div>

            <!-- [ Activité 2 ] -->
            <div>
                <img src="@/assets/img/categorie/sirop/img_320.jpg" srcset="
                @/assets/img/categorie/sirop/img_320.jpg 320w,
                @/assets/img/categorie/sirop/img_768.jpg 768w,
                @/assets/img/categorie/sirop/img_992.jpg 992w,
                @/assets/img/categorie/sirop/img_1200.jpg 1200w,
                @/assets/img/categorie/sirop/img_1920.jpg 1920w
            " />
                <RouterLink to="/calendrier">Festival des sucres</RouterLink>
            </div>

            <!-- [ Activité 3 ] -->
            <div>
                <img src="@/assets/img/categorie/cheval/img_320.jpg" srcset="
                @/assets/img/categorie/cheval/img_320.jpg 320w,
                @/assets/img/categorie/cheval/img_768.jpg 768w,
                @/assets/img/categorie/cheval/img_992.jpg 992w,
                @/assets/img/categorie/cheval/img_1200.jpg 1200w,
                @/assets/img/categorie/cheval/img_1920.jpg 1920w
            " />
                <RouterLink to="/calendrier">Balade à cheval Boréale</RouterLink>
            </div>
        </div>
    </section>
</template>

<style lang="scss"></style>