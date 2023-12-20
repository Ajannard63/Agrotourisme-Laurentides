<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup></script>

<template>
    <section class="decouverte"
    v-motion
    :initial="{opacity: 0, y: 100,}"
    :visible ="{opacity: 1, y: 0,}">
        <div>
            <!-- [ Image format desktop ] -->
            <img src="@/assets/img/categorie/decouverte/img_320.jpg" srcset="
                  @/assets/img/categorie/decouverte/img_320.jpg 320w,
                  @/assets/img/categorie/decouverte/img_768.jpg 768w,
                  @/assets/img/categorie/decouverte/img_992.jpg 992w,
                  @/assets/img/categorie/decouverte/img_1200.jpg 1200w,
                  @/assets/img/categorie/decouverte/img_1920.jpg 1920w
              " />
        </div>
        <div>
            <div>
                <h2>La Forêt mystérieuse</h2>
            </div>
            <div class="infos">
                <p>Venez-vous détendre dans un cadre exceptionnel au Parc naturel de la Rivière-du-Nord. Ce forfait vous permet de profiter d'une nuitée dans l'une de nos superbes chambres et d'un petit déjeuner continental, ainsi que d'un accès illimité à notre spa nordique...</p>
                <p class="prix">249$ <span>/ personne</span></p>
                <RouterLink to="/forfaits">En savoir plus</RouterLink>
            </div>
        </div>
    </section>
</template>

<style lang="scss"></style>