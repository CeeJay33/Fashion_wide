<template>
    <div>
      <NavBar/>
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
};

</script>