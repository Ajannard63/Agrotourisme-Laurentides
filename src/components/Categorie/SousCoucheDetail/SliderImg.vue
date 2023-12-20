<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup>
</script>

<template>
    <!-- [ Slider interactif ] -->
    <!-- <div class="slider-container">
    <span class="slider-span" id="slider-span1"></span>
    <span class="slider-span" id="slider-span2"></span>
    <span class="slider-span" id="slider-span3"></span>
    <span class="slider-span" id="slider-span4"></span>
    <span class="slider-span" id="slider-span5"></span>
    <span class="slider-span" id="slider-span6"></span>
    <span class="slider-span" id="slider-span7"></span>

    <div class="image-slider">
        <div class="slides-div" id="slide-1">
            <img src="@/assets/img/placeholder.svg" alt="" class="img" id="img1">
            <a href="#slider-span1" class="button" id="button-1"></a>
        </div>
        <div class="slides-div" id="slide-2">
            <img src="@/assets/img/placeholder.svg" alt="" class="img" id="img2">
            <a href="#slider-span2" class="button" id="button-2"></a>
        </div>
        <div class="slides-div" id="slide-3">
            <img src="@/assets/img/placeholder.svg" alt="" class="img" id="img3">
            <a href="#slider-span3" class="button" id="button-3"></a>
        </div>
        <div class="slides-div" id="slide-4">
            <img src="@/assets/img/placeholder.svg" alt="" class="img" id="img4">
            <a href="#slider-span4" class="button" id="button-4"></a>
        </div>
        <div class="slides-div" id="slide-5">
            <img src="@/assets/img/placeholder.svg" alt="" class="img" id="img5">
            <a href="#slider-span5" class="button" id="button-5"></a>
        </div>
        <div class="slides-div" id="slide-6">
            <img src="@/assets/img/placeholder.svg" alt="" class="img" id="img6">
            <a href="#slider-span6" class="button" id="button-6"></a>
        </div>
        <div class="slides-div" id="slide-7">
            <img src="@/assets/img/placeholder.svg" alt="" class="img" id="img7">
            <a href="#slider-span7" class="button" id="button-7"></a>
        </div>
    </div>
</div>
 -->


    <div class="slider" v-motion :initial="{ opacity: 0, y: 100, }" :visibleOnce="{ opacity: 1, y: 0, }">
        <h2>Des paysages magnifiques..</h2>
        <div class="rectangle1"></div>
        <div class="slider-container">
            <div class="wrapper">
                <!-- [ Conteneur des images] -->
                <div class="wrapper-holder">
                    <div id="slider-img-1"></div>
                    <div id="slider-img-2"></div>
                    <div id="slider-img-3"></div>
                    <div id="slider-img-4"></div>
                </div>
            </div>
            <div class="rectangle2"></div>
        </div>
    </div>
</template>

<style lang="scss"></style>