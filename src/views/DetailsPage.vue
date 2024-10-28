<template>
  <LayOut>
  <div>
    <UserNavigate/>
          <UnauthNav/>
    <!-- <UserDetails /> -->
  </div>
  </LayOut>
</template>

<script>
import LayOut from '@/layouts/LayOut.vue';
import UserNavigate from '@/components/UserNavigate.vue';
import UnauthNav from '@/components/UnauthNav.vue';

// import UserDetails from "@/components/UnAuthDetails/UserDetails.vue";
export default {
  components: {
    // UserDetails,
    LayOut,
    UserNavigate,
    UnauthNav

  },
};
</script>
