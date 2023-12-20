<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup>

import ListeActivites from "./ListeActivites.vue";
import { RouterLink } from "vue-router";
import { toRefs, ref } from "vue";

const props = defineProps({
    lesMois: Array,
});


const { lesMois } = toRefs(props); 
const sectionsSelectionnees = ref(null);

const sectionSelect = (objSection) => {
    if (sectionsSelectionnees.value === objSection) {
        sectionsSelectionnees.value = null;
    } else {
        sectionsSelectionnees.value = objSection;
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
                        <RouterLink @click.prevent="sectionSelect(objSection)" to="#"
                            :class="{ 
                                'active-mois': sectionsSelectionnees === objSection, 
                                'inactive-subcategory': !sectionsSelectionnees !== objSection 
                                }">
                            {{ objSection.nom }}
                        </RouterLink>

                        <!-- [ Liste des activités associées ] -->
                        <ListeActivites v-if="sectionsSelectionnees === objSection" :activites="sectionsSelectionnees" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>



<style lang="scss"></style>
