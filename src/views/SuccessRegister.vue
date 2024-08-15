<template>
  <div class="success_register">
    <h4>{{ message }}</h4>
    <button v-if="buttonVisible" @click="returnHome">Return to homepage</button>
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
      buttonVisible: false 
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
          url: `http://localhost:80/SignUpClassesPhp/GoogleAuth/callback.php?code=${queryParam}`, 
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
          setTimeout(() => {
            this.buttonVisible = true;
          }, 900);
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          this.message = error.response.data.message;
        } else {
          this.message = 'An error occurred. Please try again later.';
        }
        setTimeout(() => {
          this.buttonVisible = true;
        }, 900);
      }
    },

    returnHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.success_register{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
}

.success_register h4{
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px 0;
  font-size: 17px;
}

.success_register button{
  width: 200px;
  padding: 12px 7px;
  background-color: purple;
  border-radius: 18px;
  cursor: pointer;
  font-weight: 600;
  color: #fff;
}
</style>
