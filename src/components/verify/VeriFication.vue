<template>
  <div class="sign__up">
    <div class="form" style="text-align: center; max-width: 500px;">
      <h2>Verify Your Account</h2>
      <p style="color: green;">We sent you a verification Code. Enter the code below to confirm your email address.</p>
      <form @submit.prevent="submitForm" autocomplete="off">
        <div class="error-text">{{ error }}</div>
        <div class="fields-input">
          <input type="number" name="otp1" class="otp_fields" placeholder="0" min="0" max="9" required v-model="otp[0]" @input="handleInput($event, 0)" @keydown="handleKeyDown($event, 0)">
          <input type="number" name="otp2" class="otp_fields" placeholder="0" min="0" max="9" required v-model="otp[1]" @input="handleInput($event, 1)" @keydown="handleKeyDown($event, 1)">
          <input type="number" name="otp3" class="otp_fields" placeholder="0" min="0" max="9" required v-model="otp[2]" @input="handleInput($event, 2)" @keydown="handleKeyDown($event, 2)">
          <input type="number" name="otp4" class="otp_fields" placeholder="0" min="0" max="9" required v-model="otp[3]" @input="handleInput($event, 3)" @keydown="handleKeyDown($event, 3)">
        </div>
        <div class="submit">
          <input type="submit" value="Verify Now" class="button">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      otp: ['', '', '', ''],
      error: ''
    }
  },
  methods: {
    handleInput(e, index) {
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(-1);
      }
      if (e.target.value !== '') {
        this.otp[index] = e.target.value;
        if (index < this.otp.length - 1) {
          this.$el.querySelectorAll('.otp_fields')[index + 1].focus();
        }
      }
    },
    handleKeyDown(e, index) {
      if (e.key === 'Backspace' && index > 0) {
        this.otp[index] = '';
        this.$el.querySelectorAll('.otp_fields')[index - 1].focus();
      }
    },
    async submitForm() {
      try {
        const Res = await axios({
          method: 'post',
          url: 'http://localhost:80/Fashion2/Fashion/ProgramVerifyC.php',
          withCredentials: true,
          data: {
            otp: this.otp.join('')
          },
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        });
        this.responseData = Res.data;
        if (this.responseData.status === "success") {
          this.$router.push('/dashboard');
        } else {
          this.$router.push('/');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>