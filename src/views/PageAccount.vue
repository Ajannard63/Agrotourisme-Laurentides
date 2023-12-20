<!--***************************************************
  Nom: Albert Jannard
  Matricule: 2179003
  Description: Page des information de l'utilisateur
  ***************************************************-->
<script setup>
import InfoPayUser from '../components/Account/InfoPayUser.vue';
import InfoPersoUser from '../components/Account/InfoPersoUser.vue';
import ImgUser from '../components/Account/ImgUser.vue';
import InfoFavUser from '../components/Account/InfoFavUser.vue';
</script>

<template>
    <div class="interface p-3">
        <main class="xl:container xl:mx-auto">
            <h1 class="titre">Compte</h1>
            <div class="nav-dashboard ">
                <nav>
                    <ul class="flex flex-row gap-5 p-2 bg-zinc-300 rounded">
                        <li class="bg-zinc-100 p-2 rounded">Information</li>
                        <li class="p-2 rounded">Notification</li>
                    </ul>
                </nav>
            </div>
            <div class="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-5 lg:grid-cols-2">
                <div class="lg:row-span-1 col-span-2 grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-5">
                    <div>
                        <InfoPersoUser />
                    </div>
                    <div>
                        <InfoPayUser />
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <ImgUser class="h-full lg:h-auto lg:row-span-2" />
                </div>
            </div>
            <hr class="mx-auto border-t-2 border-gray-400 my-4 w-1/2">
            <h1 class="mt-5 text-center text-4xl">Favoris</h1>
            <InfoFavUser />

            
        </main>
    </div>
</template>

<style lang="scss"></style>