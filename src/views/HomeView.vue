<template>
    <Layout>
      <!-- <PopUp /> -->
  <div class="home__view">
  <section class="hero">
    <div class="home-container">
      <div class="home-badge home-badge--color-cycle">Over 3 million ready-to-work creatives in our community!</div>
      <h1 class="hero__heading">Connect with the world’s Fashion Designers.</h1>
      <div class="home-type-body-large font-weight-500">Connect with a community of millions of top-rated designers
        &amp; agencies around the world.</div>
      <button class="margin-t-32 btn2 btn2--large" data-track-cta="Start hiring">Start hiring today</button>
    </div>
  </section>

  <DesCript/>

  <TopDesigners />
  <CarouSel/>
  <HowTip/>

  <SponSor/>
  </div>
</Layout>
</template>

<script>
import Layout from '@/layouts/LayOut.vue';
import TopDesigners from '@/components/TopDesigners.vue';
import HowTip from '@/components/HowTip.vue';
import DesCript from '@/components/DesCript.vue';
// import CarouSel from '@/components/CarouSel.vue';
import SponSor from '@/components/SponSor.vue';
import { isAuthenticated } from '@/auth/auth';
// import PopUp from '@/components/popup/PopUp.vue';
export default {
  name: "HomeView",
   components: {
     Layout,
     TopDesigners,
     HowTip,
     DesCript,
    //  PopUp,
    //  CarouSel,
     SponSor
   },

   async mounted(){
   const authenticated = await isAuthenticated();
            if (authenticated) {
              this.$router.push('/dashboard');
            } else {
                this.$router.push('/');
            }
   },
};

</script>


<style scoped lang="css">
@import url("../styles/style.css");
</style>
