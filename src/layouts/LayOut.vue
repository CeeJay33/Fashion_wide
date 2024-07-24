<template>
    <div>
      <NavBar  :isDark="isDark"/>
        <slot>

        </slot>
       <FooterSec/> 
    </div>
  </template>

  <script>
  import NavBar from '@/components/NavBar.vue';
  import FooterSec from '@/components/FooterSec.vue'

  export default {
  name: "LayOut",
   components: {
     NavBar,
     FooterSec
   },
   data() {
    return {
      isDark: false
    };
  },
  methods: {
    handleToggle(isDark) {
      this.isDark = isDark;
    }
  }
};

</script>