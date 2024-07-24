<template>
  <NavBar :isDark="isDark" @toggle="handleToggle"/>
      <!-- <PopUp /> -->
  <div class="home__view">
    <HowTip :isDark="isDark"/> 
    <TopDesigners />
  <DesCript/>
    <HomeDesigners/>
  

  <SponSor/>
  </div>
</template>

<script>
// import Layout from '@/layouts/LayOut.vue';
import TopDesigners from '@/components/TopDesigners.vue';
import NavBar from '@/components/NavBar.vue';
import HowTip from '@/components/HowTip.vue';
import DesCript from '@/components/DesCript.vue';
// import CarouSel from '@/components/CarouSel.vue';
import SponSor from '@/components/SponSor.vue';
// import { isAuthenticated } from '@/auth/auth';
// import PopUp from '@/components/popup/PopUp.vue';
import HomeDesigners from '@/components/HomeDesigners.vue';
export default {
  name: "HomeView",
   components: {
    //  Layout,
      NavBar,
     TopDesigners,
     HowTip,
     DesCript,
    //  PopUp,
    //  CarouSel,
     SponSor,
     HomeDesigners
   },

   data() {
    return {
      isDark: false
    };
  },

   async mounted(){
  //  const authenticated = await isAuthenticated();
            // if (authenticated) {
              this.$router.push('/dashboard');
            // } else {
                this.$router.push('/');
            // }
   },

   methods: {
    handleToggle(isDark) {
      this.isDark = isDark;
    }
  }
};

</script>


<style scoped lang="css">
@import url("../styles/style.css");



</style>
