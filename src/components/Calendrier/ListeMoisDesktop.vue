<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->
<script setup>

import ListeActivites from "./ListeActivites.vue";
import { RouterLink } from "vue-router";
import { toRefs, ref } from "vue";

const props = defineProps({
    lesMois: null,
});

const { lesMois } = toRefs(props);
const sectionSelectionnee = ref(null);

const sectionSelect = (objSection) => {
    // console.log(objSection, sectionSelectionnee);
    if (sectionSelectionnee.value === objSection) {
        sectionSelectionnee.value = null;
    } else {
        sectionSelectionnee.value = objSection;
    }
};

</script>

<template>
    <section class="liste">
        <div class="mois">

            <!-- [ Liste des mois du calendrier ] -->
            <div class="liste-mois">
                <ul>
                    <li v-for="objSection in lesMois" :key="objSection.nom">
                        <RouterLink @click.prevent="sectionSelect(objSection)" to="#" :class="{
                            'active-mois': sectionSelectionnee === objSection,
                            'inactive-mois': sectionSelectionnee !== objSection
                        }">
                            {{ objSection.nom }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>

        <!-- [ Liste des activités associées ] -->
        <ListeActivites v-if="sectionSelectionnee" :activites="sectionSelectionnee" />

    </section>
</template>

<style lang="scss"></style>
