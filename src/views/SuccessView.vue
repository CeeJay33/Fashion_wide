<template>
  <div class="message_section">
    {{ message }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SuccessView',
  
  data() {
    return {
      message: '', 
      responseData: null, 
    };
  },
  
  async mounted() {
    this.fetchScript(); 
  },
  
  methods: {
    async fetchScript() {
      const queryParam = this.$route.query.code; 

      if (!queryParam) {
        this.message = 'Code is missing in the URL';
        return;
      }

      try {
        const response = await axios({
          method: 'get',
          url: `http://localhost:80/SignUpClassesPhp/GoogleAuth/Logincallback.php?code=${queryParam}`, 
          headers: {
            'content-type': 'application/json',
            },
          withCredentials: true,
        });

        this.responseData = response.data;

        if (this.responseData.status === 'success') {
            this.$router.push('/dashboard');
          
        } else {
          this.message = this.responseData.message;
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          this.message = error.response.data.message;
        } else {
          this.message = 'An error occurred. Please try again later.';
        }
      }
    },
  },
};
</script>

<style scoped lang="css">
@import url('../styles/style.css');
</style>
