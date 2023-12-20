<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup>
import CalendrierEvenement from './CalendrierEvenement.vue'
</script>

<template>
    <section class="calendrier-accueil">
        <h2>À venir</h2>
        <!-- [ bouton de la page calendrier ] -->
        <RouterLink to="/calendrier#" class="voir-plus">
            Calendrier complet
        </RouterLink>
        <!-- [ Liste des évènements du calendrier ] -->
        <div class="liste-evenement" v-motion-pop-visible-once>
            <CalendrierEvenement>
                <template v-slot:date>
                    <h3>5 janvier</h3>   
                </template>
                <template v-slot:nomEvent>
                    <p>La Randonnée des Saveurs </p>   
                </template>
            </CalendrierEvenement>
            <CalendrierEvenement>
                <template v-slot:date>
                    <h3>20 janvier</h3>   
                </template>
                <template v-slot:nomEvent>
                    <p>Les Vins d'Hiver </p>   
                </template>
            </CalendrierEvenement>
            <CalendrierEvenement>
                <template v-slot:date>
                    <h3>3 février</h3>   
                </template>
                <template v-slot:nomEvent>
                    <p>Chocolats d'antan  </p>   
                </template>
            </CalendrierEvenement>
            <CalendrierEvenement>
                <template v-slot:date>
                    <h3>28 février </h3>   
                </template>
                <template v-slot:nomEvent>
                    <p>Festival de la cabane à sucre des Monts  </p>   
                </template>
            </CalendrierEvenement>
            <CalendrierEvenement>
                <template v-slot:date>
                    <h3>5 mars</h3>   
                </template>
                <template v-slot:nomEvent>
                    <p>Découverte des trésors cachés de la forêt  </p>   
                </template>
            </CalendrierEvenement>
            <CalendrierEvenement>
                <template v-slot:date>
                    <h3>20 mars</h3>   
                </template>
                <template v-slot:nomEvent>
                    <p>Festival des Sucres </p>   
                </template>
            </CalendrierEvenement>
            <CalendrierEvenement>
                <template v-slot:date>
                    <h3>5 avril</h3>   
                </template>
                <template v-slot:nomEvent>
                    <p>Fête du Printemps  </p>   
                </template>
            </CalendrierEvenement>
            <CalendrierEvenement>
                <template v-slot:date>
                    <h3>12 avril</h3>   
                </template>
                <template v-slot:nomEvent>
                    <p>Visite d'une cidrerie</p>   
                </template>
            </CalendrierEvenement>
        </div>
    </section>
</template>

<style lang="scss"></style>