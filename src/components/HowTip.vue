<template>
  <div class="Main__Container">
    <div class="illustration__section" :class="{ 'hero-dark': isDark }">
      <div class="descriptive__section">
        <h2>Connect with the world’s Fashion Designers.</h2>
        <p>Kaylie allows you to share your profile as you live portfolio</p>
      </div>
      <!-- <div class="descriptive__image">
        <img :src="require('@/assets/pexels-manei-2690323-removebg-preview.png')" alt="">
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
@import url("../styles/howtip.css");
@import url( "@/styles/IsDarkForAll.css");

</style>
