<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Composant qui affiche le header des régions
  ***************************************************-->

<script setup>

</script>

<template>
    <header class="text-center headerRegions ">
        <div class="description">
            <h1>Les Laurentides</h1>
            <p>Donec sit amet nunc hendrerit, ullamcorper mauris ut, pharetra leo. Morbi elementum cursus lacinia. Donec
                euismod, lacus quis dapibus ornare, turpis metus bibendum massa, accumsan dignissim felis eros non mi.
                Quisque suscipit pulvinar ipsum vel molestie. Donec eros purus, maximus ut metus at, finibus euismod nunc.
            </p>
        </div>

        <div class="btn-mrc">
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
    </header>
</template>

<style lang="scss"></style>