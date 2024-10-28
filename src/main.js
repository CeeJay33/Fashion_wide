import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'
import "@/assets/tailwind/tailwind.css";


import App from '@/App.vue';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import DashBoard from '@/views/DashBoard.vue';
import DetailsPage from '@/views/DetailsPage.vue';
import Sec_Siginin from '@/components/signin/SignIn.vue';
import RegisterCus from '@/components/register/RegisterCus.vue';
import VeriFication from '@/components/verify/VeriFication.vue';
import ContactView from '@/views/ContactView.vue';
import DesignerView from '@/views/DesignerView.vue';
import { isAuthenticated } from '@/auth/auth';
import LearnMore from '@/views/LearnMore.vue';
import DesignerSection from '@/views/DesignerSection.vue';
import PopUp from '@/components/popup/PopUp.vue';
import DemoSeach from '@/components/DemoSeach.vue';
import SearcHed from '@/components/SearcHed.vue';
import ProfileSuggest from '@/components/ProfileSuggest.vue';
import MobileNavigation from '@/components/screensizes/MobileNavigation.vue';
import ToogleButton from '@/components/toogle_button/ToogleButton.vue';
import SuccessView from '@/views/SuccessView.vue';
import SuccessRegister from '@/views/SuccessRegister.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
      meta: { requiresAuth: false },
    },

    {
      path: "/about",
      component: AboutView,
      meta: { requiresAuth: false },
    },

    {
      path: "/contact-us",
      component: ContactView,
      meta: { requiresAuth: false },
    },

    {
      path: "/dashboard",
      component: DashBoard,
      meta: { requiresAuth: true },
    },

    {
      path: "/details/:id",
      component: DetailsPage,
      name: "DesignerDetails",
      meta: { requiresAuth: false },
    },

    {
      path: "/search/:name",
      component: SearcHed,
      name: "SearchDetails",
      meta: { requiresAuth: false },
    },

    {
      path: "/profile",
      component: ProfileSuggest,
      meta: { requiresAuth: false },
    },

    {
      path: "/learnMore",
      component: LearnMore,
      meta: { requiresAuth: false },
    },

    {
      path: "/Success_intro",
      component: SuccessRegister,
      meta: { requiresAuth: false},
    },

    {
      path: "/fashion-designers",
      component: DesignerView,
      meta: { requiresAuth: false },
    },

    {
      path: "/success_page",
      component: SuccessView,
      meta: { requiresAuth: false },
    },

    {
      path: "/toogle",
      component: ToogleButton,
      meta: { requiresAuth: false },
    },

    {
      path: "/sign-in-customer",
      component: Sec_Siginin,
      meta: { requiresAuth: false },
    },

    {
      path: "/designer-detail-section",
      component: DesignerSection,
      meta: { requiresAuth: false },
    },

    {
      path: "/register-customer",
      component: RegisterCus,
      meta: { requiresAuth: false },
    },

    {
      path: "/pop-up",
      component: PopUp,
      meta: { requiresAuth: false },
    },

    {
      path: "/mobile",
      component: MobileNavigation,
      meta: { requiresAuth: false },
    },

    {
      path: "/verify-cus",
      component: VeriFication,
      meta: { requiresAuth: false },
    },

    {
      path: "/demo-search",
      component: DemoSeach,
      meta: { requiresAuth: false },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth) {
        const authenticated = await isAuthenticated();

        if (authenticated) {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }
});

export default router;

const app = createApp(App)

app.use(router);


app.mount('#app')