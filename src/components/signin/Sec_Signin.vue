<template>
  <div class="login-container">
    <header class="header">
      <img src="../../assets/hmm-removebg-preview.png" width="150" alt="">
      <p class="language-switch">Language</p>
    </header>
    <!-- <hr width="100%"> -->
    <div class="login-sub-container">
      <p class="login-instruction">Please login using the AliExpress seller account (do not use buyer account)</p>
      <p class="signup-link">No account yet? <a href="#">Join now for free</a></p>
      <form @submit.prevent="submitForm" id="login-form">
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          @input="toggleButtonState" 
          name="email" 
          placeholder="Email" 
          required
        >
        <div class="password-container">
          <input 
            :type="passwordFieldType" 
            id="password" 
            v-model="password" 
            @input="toggleButtonState" 
            name="password" 
            placeholder="Password" 
            required
          >
          <span class="toggle-password" @click="togglePasswordVisibility">
            <svg v-if="passwordFieldType === 'password'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#999">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#999">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 012.223-4.274M9.879 9.88A3 3 0 0012 15c.525 0 1.025-.14 1.453-.381M9.878 9.88L3 3m0 0l6.878 6.879M3 3l18 18M3 3L5.223 7.276M3 3h6m12.223 7.276A10.05 10.05 0 0119.542 12c-1.274 4.057-5.064 7-9.542 7a10.05 10.05 0 01-1.875-.175m6.349-9.646a3 3 0 00-4.243-4.243"/>
            </svg>
          </span>
        </div>
        <a href="#" class="forgot-password">Forgot password?</a>
        <button type="submit" class="signin-btn" :disabled="!isFormValid">Sign in</button>
      </form>
    </div>
    <footer>
      <p>© 2010-2019 AliExpress.com. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      passwordFieldType: 'password',
      isFormValid: false
    };
  },
  methods: {
    toggleButtonState() {
      this.isFormValid = this.email.length > 0 && this.password.length > 0;
    },
    togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    submitForm() {
      const formData = new FormData();
      formData.append('email', this.email);
      formData.append('password', this.password);

      fetch('http://localhost:80/php_classes/alibaba-login.php', {
        method: 'POST',
        body: formData
      })
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error('Error submitting form');
          }
        })
        .then(data => {
          console.log('Form data submitted successfully:', data);
          this.email = '';
          this.password = '';
          this.isFormValid = false;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
body {
  font-family: "OpenSans", Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 9rem;
  margin-bottom: 1rem;
}

.login-sub-container {
  padding: 20px 40px;
  border-radius: 8px;
  width: 340px;
  margin: auto;
  text-align: center;
}

.login-container {
  padding: 20px 40px;
  border-radius: 8px;
  /* width: 100%; */
  text-align: center;
}

h1 {
  color: #e94e77;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 26px;
  font-family: "OpenSans", Roboto, Arial, Helvetica, sans-serif, SimSun;
}

.language-switch {
  text-align: right;
  color: #555;
  font-size: 14px;
  font-family: "OpenSans";
  margin: 0.5rem 0 0 1rem;
}

.login-instruction {
  color: #000000;
  font-size: 15px;
  text-align: left;
  font-weight: 600;
  margin-bottom: 10px;
}

.signup-link {
  font-size: 12px;
  margin-bottom: 20px;
}

hr {
  border: 1px solid #dfdfdffa;
}

.signup-link a {
  color: #1a73e8;
  text-decoration: none;
}

input[type="email"], input[type="password"] {
  width: 340px;
  padding: 16px 16px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-size: 15px;
  background-color: transparent;
  box-sizing: border-box;
}

input[type="password"] {
  margin-bottom: 10px;
  width: 380px;
}

input[type="email"]:focus, input[type="password"]:focus {
  outline: 1px solid #000; /* Thinner outline */
}

.forgot-password {
  display: block;
  margin-bottom: 20px;
  color: #1a73e8;
  text-decoration: none;
  font-size: 12px;
  text-align: left;
}

.password-container {
  position: relative;
  display: flex;
  align-items: center;
}

.password-container input {
  width: 380px;
  padding: 14px 16px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-size: 14px;
  background-color: transparent;
  box-sizing: border-box;
}

.password-container .toggle-password {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.signin-btn {
  width: 100%;
  padding: 12px;
  background-color: #f76b1c;
  border: none;
  border-radius: 25px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.toggle-password svg {
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
}

.signin-btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

footer {
  margin-top: 20px;
  font-size: 12px;
  color: #999;
}
</style>
