<template>
    <DashboardNav/>
    <!-- <DashContent/> -->
</template>


<script>
import DashboardNav from '@/layouts/DashboardNav.vue';
// import DashContent from '@/components/DashContent/DashContent.vue';
// import axios from 'axios';
// import { isAuthenticated } from '@/auth/auth';
export default {
    name: "DashBoard",
    components: {
        DashboardNav,
        // DashContent
    },

    methods: {
        //  authenticated = await isAuthenticated();
        //     if (authenticated) {
        //         next();
        //     } else {
        //         this.$router.push('/');
        //     }
}
    };
</script>


<style>
   
</style>