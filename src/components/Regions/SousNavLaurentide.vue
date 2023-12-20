<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->
<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="bg-zinc-200 text-center w-full px-28  sous-nav-carte">
        <h1 class="pt-10 uppercase font-bold">Nos mrc</h1>
        <div class="btn-mrc">

            <!-- [ Argenteuil ] -->
            <RouterLink to="/argenteuil">
                <div class="leBouton">
                    <div class="first-content">
                        <span>
                            <img src="@/assets/img/regions/header-argenteuil/img_320.jpg" alt="">
                        </span>
                    </div>
                    <div class="second-content">
                        <span>Argenteuil</span>
                    </div>
                </div>
            </RouterLink>

            <!-- [ Pays d'en Haut ] -->
            <RouterLink to="/paysDenHaut">
                <div class="leBouton">
                    <div class="first-content">
                        <span>
                            <img src="@/assets/img/regions/header-paysEnHaut/img_320.jpg" alt="">
                        </span>
                    </div>
                    <div class="second-content">
                        <span>Pays d'en haut</span>
                    </div>
                </div>
            </RouterLink>

            <!-- [ Laurentides ] -->
            <RouterLink to="mrcLaurentides">
                <div class="leBouton">
                    <div class="first-content">
                        <span>
                            <img src="@/assets/img/regions/header-laurentides/img_320.jpg" alt="">
                        </span>
                    </div>
                    <div class="second-content">
                        <span>Laurentides</span>
                    </div>
                </div>
            </RouterLink>

            <!-- [ Rivière du Nord ] -->
            <RouterLink to="/riviereDuNord">
                <div class="leBouton">
                    <div class="first-content">
                        <span>

                            <img src="@/assets/img/regions/header-riv/img_320.jpg" alt="">
                        </span>
                    </div>
                    <div class="second-content">
                        <span>Rivière du Nord</span>
                    </div>

                </div>
            </RouterLink>

            <!-- [ Mirabel ] -->
            <RouterLink to="/mirabel">
                <div class="leBouton">
                    <div class="first-content">
                        <span>

                            <img src="@/assets/img/regions/header-mirabel/img_320.jpg" alt="">
                        </span>
                    </div>
                    <div class="second-content">
                        <span>Mirabel</span>
                    </div>
                </div>
            </RouterLink>

            <!-- [ Deux-Montagnes ] -->
            <RouterLink to="/deuxMontagnes">
                <div class="leBouton">
                    <div class="first-content">
                        <span>
                            <img src="@/assets/img/regions/header-2Mtng/img_320.jpg" alt="">
                        </span>
                    </div>
                    <div class="second-content">
                        <span>Deux-Montagne</span>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss"></style>
