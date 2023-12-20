import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: () => import("@/views/PageAccueil.vue"),
    },

    // Section Catégories
    {
      path: '/agriculture',
      name: 'agriculture',
      component: () => import("@/views/PageCatAgriculture.vue"),
    },
    {
      path: '/activite',
      name: 'activite',
      component: () => import("@/views/PageCatActivite.vue"),
    },
    {
      path: '/alimentaire',
      name: 'alimentaire',
      component: () => import("@/views/PageCatAlimentaire.vue"),
    },
    {
      path: '/hebergement',
      name: 'hebergement',
      component: () => import("@/views/PageCatHebergement.vue"),
    },
    {
      path: '/restauration',
      name: 'restauration',
      component: () => import("@/views/PageCatRestauration.vue"),
    },

    // Section Producteurs
    {
      path: '/ficheproducteur/:id',
      name: 'ficheproducteur',
      component: () => import("@/views/PageFicheProducteur.vue"),
    },

    // Section Forfaits
    {
      path: '/forfaits',
      name: 'forfaits',
      component: () => import("@/views/PageForfait.vue"),
    },

    // Section Account
    {
      path: '/account',
      name: 'account',
      component: () => import("@/views/PageAccount.vue"),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("@/views/PageRegister.vue"),
    },

    // Section Calendrier
    {
      path: '/calendrier',
      name: 'calendrier',
      component: () => import("@/views/PageCalendrier.vue"),
    },

    // Portrait de la région
    {
      path: '/laurentides',
      name: 'laurentides',
      component: () => import("@/views/PageLaurentides.vue"),
    },

    // Section MRC
    {
      path: '/argenteuil',
      name: 'argenteuil',
      component: () => import("@/views/PageMrcArgenteuil.vue"),
    },
    {
      path: '/deuxMontagnes',
      name: 'deuxMontagnes',
      component: () => import("@/views/PageMrcDeuxMontagne.vue"),
    },
    {
      path: '/mrcLaurentides',
      name: 'mrcLaurentides',
      component: () => import("@/views/PageMrcLaurentides.vue"),
    },
    {
      path: '/mirabel',
      name: 'mirabel',
      component: () => import("@/views/PageMrcMirabel.vue"),
    },
    {
      path: '/paysDenHaut',
      name: 'paysDHaut',
      component: () => import("@/views/PageMrcPaysDHaut.vue"),
    },
    {
      path: '/riviereDuNord',
      name: 'riviereDuNord',
      component: () => import("@/views/PageMrcRiviereDuNord.vue"),
    },
  ]
})
router.beforeEach((to, from, next) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  next();
});
export default router
