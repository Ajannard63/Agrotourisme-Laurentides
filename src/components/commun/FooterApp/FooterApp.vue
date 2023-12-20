<!--***************************************************
Nom: Oli Boucher
Matricule: 2147514
***************************************************-->

<script setup></script>

<template>
    <footer>
        <div class="footer">

            <!-- [ Section des réseaux ] -->
            <div class="reseaux">
                <div class="logo-footer">
                    <img src="@/assets/img/SVG/logos/logo.svg" alt="">
                    <img src="@/assets/img/SVG/logos/logo-alt.svg" alt="">
                </div>
                <div class="icones">
                    <img src="@/assets/img/icons/facebook.png" alt="">
                    <img src="@/assets/img/icons/instagram.png" alt="">
                    <img src="@/assets/img/icons/twitter.png" alt="">
                    <img src="@/assets/img/icons/youtube.png" alt="">
                </div>
            </div>

            <!-- [ Section Contacter ] -->
            <div class="rejoindre">
                <div>
                    <h2>À travers le monde</h2>
                    <p>1 555 123 4567</p>
                </div>
                <div>
                    <h2>Canada et États-Unis</h2>
                    <p>1 888 555 6789</p>
                </div>
                <div>
                    <h2>Contactez-nous</h2>
                    <p>info@agrotourisme.com</p>
                </div>
            </div>

            <!-- [ Section du rappel de la navigation ] -->
            <div class="nav">
                <div>
                    <ul>
                        <li>
                            <RouterLink to="/activite">Activités</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/agriculture">Agriculture</RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <RouterLink to="/alimentaire">Agroalimentaire</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/hebergement">Hébergement</RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <RouterLink to="/forfaits">Forfaits</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/laurentides">Portrait de la région</RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <RouterLink to="/register">S'inscrire</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/account">Connexion</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- [ Section des crédits de projet ] -->
            <div class="credits">
                <div class="droits">
                    <p>Copyright 2023 Agrotourisme Laurentides inc.</p>
                    <p>Avis légal</p>
                    <p>Politique de confidentialité</p>
                </div>
                <div>Designer par Équipe 9</div>
            </div>
            <div class="infolettre">
                <h2>Infolettre</h2>
                <p>Recevez les dernières nouvelles à propos de Agrotourisme Laurentides</p>
                <div class="input-group">
                    <input type="email" class="input" id="Email" name="Email" placeholder="coco@gmail.com"
                        autocomplete="off">
                    <input class="button--submit" value="S'inscrire" type="submit">
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss"></style>