<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->
<script setup>
const props = defineProps({
    entreprise: null,
});

</script>

<template>
    <section class="rejoindre">

        <h3>Nous joindre</h3>
        <div class="infos">
            <img src="@/assets/img/SVG/location_on_FILL1_wght400_GRAD0_opsz48.svg" alt="" class="bg-green-500 p-2 -translate-y-2">
            <div>
                <!-- [ Section adresse ] -->
                <h4>Adresse</h4>
                <p class="text-zinc-500">{{ props.entreprise.address }}, {{ props.entreprise.city }}</p>
                <h4>Code postal</h4>
                <p class="text-zinc-500">{{ props.entreprise.postal_code }}</p>
            </div>
        </div>
        <div class="infos">
            <!-- [ Section contact ] -->
            <img src="@/assets/img/SVG/call_FILL1_wght400_GRAD0_opsz48.svg" alt="" class="bg-green-500 p-2 -translate-y-2">
            <div>
                <h4>Téléphone</h4>
                <p class="text-zinc-500">{{ props.entreprise.phone }}</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss"></style>