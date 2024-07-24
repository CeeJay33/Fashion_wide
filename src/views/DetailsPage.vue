<template>
  <LayOut>
  <div class="designer-details">
    <div v-if="designers.length > 0">
      <div v-for="designer in designers" :key="designer.user_id">
        <img :src="`http://localhost:80/Fashion2/Fashion/${designer.file_path}`">
      </div>
    </div>
    <div v-else>
      <p>No designer found</p>
    </div>
    <p>{{ message }}</p>
  </div>
  </LayOut>
</template>

<script>
import axios from 'axios';
import LayOut from '@/layouts/LayOut.vue';

export default {
  components: {
    LayOut
  },
  data() {
    return {
      designers: [],
      message: '',
    };
  },
  async mounted() {
    console.log('Uniqued parameter:', this.$route.params.id);
    try {
      let response = await axios.get(`http://localhost:80/Fashion2/Fashion/images.php?user_id=${this.$route.params.id}`);
      this.designers = response.data;
      if (response.data && response.data.length === 0) {
        this.message = 'No designer found';
      }
    } catch (error) {
      this.message = 'An error occurred while fetching data';
      console.error(error);
    }
  },
};
</script>

<style scoped>
</style>
