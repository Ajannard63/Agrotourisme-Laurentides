<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  ***************************************************-->
<script setup>

</script>

<template>
    <div class="information-personnel">
        <div class="titre-form mt-5 p-3 bg-zinc-300 rounded-t">
            <h2 class="titre">Mode de payment</h2>
            <i></i>
        </div>
        <form class="flex flex-col gap-5 p-3 border border-t-0 border-black rounded-b">
            <div class="form__group">
                <input type="text" class="form__field w-full" placeholder="Input text">
                <label for="name" class="form__label"> Nom sur la carte * </label>
            </div>
            <div class="form__group">
                <input type="text" class="form__field w-full" placeholder="Input text">
                <label for="name" class="form__label"> Numéro de la carte * </label>
            </div>
            <div class="flex flex-col md:flex-row gap-5">
                <div class="form__group md:w-1/2">
                    <input type="text" class="form__field w-full" placeholder="Input text">
                    <label for="name" class="form__label"> Date d’expiration * </label>
                </div>
                <div class="form__group md:w-1/2">
                    <input type="text" class="form__field w-full" placeholder="Input text">
                    <label for="name" class="form__label"> Code de sécurité * </label>
                </div>
            </div>
            <div class="form__group">
                <input type="text" class="form__field w-full" placeholder="Input text">
                <label for="name" class="form__label"> Adresse de facturation * </label>
            </div>

            <!-- <input type="submit" value="Enregistrer les modifications"> -->
        </form>
    </div>
</template>

<style lang="scss"></style>