<!-- 
    Auteur: Albert Jannard
    Couche qui contient la liste des sous-catégories
    et qui affiche la liste des producteurs de la sous-catégorie sélectionnée
-->

<script setup>

// import { RouterLink } from "vue-router";
import ListeProducteur from "./ListeProducteur.vue";
import { toRefs, ref } from "vue";

var props = defineProps({
    sousCategories: null,
    entreprise: null,
});
var { sousCategories } = toRefs(props);
var selectedSubcategory = ref(null);


var selectSubcategory = (objSection) => {
    // console.log(objSection, selectedSubcategory);
    if (selectedSubcategory.value === objSection) {
        selectedSubcategory.value = null;
    } else {
        selectedSubcategory.value = objSection;
    }
};

</script>

<template>
    <section class="liste-producteur">
        <slot name="sous-titre"></slot>
        <div class="sous-cat">
            <div class="liste-sous-cat">
                <ul>
                    <li v-for="subCategoryObj in sousCategories" :key="subCategoryObj">
                        <button @click.prevent="selectSubcategory(subCategoryObj)" to="#" :class="{
                            'active-subcategory': selectedSubcategory === subCategoryObj,
                            'inactive-subcategory': selectedSubcategory !== subCategoryObj
                        }">
                            {{ subCategoryObj.name }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <h3>{{ selectedSubcategory }}</h3> -->
        <ListeProducteur v-if="selectedSubcategory" :producteurs="selectedSubcategory" :entreprises="entreprise" />
    </section>
</template>

<style lang="scss">
@import "@/assets/scss/base/variables.scss";

.active-subcategory {
    letter-spacing: 3px !important;
    background-color: var(--vert400) !important;
    color: hsl(0, 0%, 100%) !important;
    box-shadow: var(--vert1300) 0px 1px 9px 0px !important;
    transform: translateY(10px);
    transition: 100ms !important;
}
</style>


