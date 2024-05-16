<template>
  <div class="pop__up__modal" v-show="isVisible" @click="closeModal">
    <div class="div_modal_pop" @click.stop>
      <div class="form__box">
        <i class="fas fa-x" @click="closeModal"></i>
        <h2>Sign In to Continue</h2>
        <p>Let's get you in as a <strong>Customer</strong></p>
        <form v-on:submit.prevent="addItem" autocomplete="off">
                <div class="error" v-if="responseData.message">
                    <p>{{ responseData.message }}</p>
                </div>
                <div class="input__form">
                    <input type="email" name="itemEmail" placeholder="Enter your Email" v-model="FormData.itemEmail">
                </div>
                <div class="input__form">
                    <input type="password" name="itemPassword" placeholder="Password" v-model="FormData.itemPassword">
                </div>
                <div class="submit">
                    <input type="submit" style="" value="SignUp Now" class="button">
                </div>
          
          <div class="submit">
            <button ><img :src="require('@/assets/vecteezy_colourful-google-logo-in-dark-background_13760951-removebg-preview.png')" alt=""> Continue with Google</button>
          </div>

          <!-- <div class="ssubmit">
            <button >Sign In as Designer</button>
          </div> -->
        </form>
       
        <div class="Forgot">
          <router-link to="">
            <p>Forgot Password</p>
          </router-link>
        </div>
        <div class="sign__up__link">
          <router-link to="/register-customer">
            <p>Get an account</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },

  data() {
        return {
            FormData: {
                itemEmail: '',
                itemPassword: ''
            },
            responseData: {
                message: ''
            }
        };
    },

  methods: {
    openModal() {
      this.$emit('open'); 
    },
    closeModal() {
      this.$emit('close');
    },

    async addItem() {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:80/Fashion2/Fashion/ProgramSignInC.php',
                withCredentials: true,
                data: {
                    itemEmail: this.FormData.itemEmail,
                    itemPassword: this.FormData.itemPassword
                },
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                }
            });
            this.responseData = response.data;
            if (this.responseData.status === "success") {
                this.$router.push('/dashboard');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                this.responseData.message = error.response.data.message;
            } else {
                this.responseData.message = "An error occurred. Please try again later.";
            }
            setTimeout(() => {
                this.responseData.message = '';
            }, 3000);
        }
    }
  }
};
</script>

<style>
.pop__up__modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(17, 17, 17, 0.5); /* Semi-transparent background */
  backdrop-filter: blur(6px); /* Apply blur effect */
  overflow-y: hidden;
  z-index: 9999;
}

.div_modal_pop {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.form__box {
  position: relative;
  background: transparent;
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  padding: 30px 30px;
  margin: auto;
  box-shadow: 0 10px 20px 30px rgba(0, 0, 0, 0.01);
  background-color: #fffffff1;
  z-index: 9999;
  animation: slide-up 0.5s;
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.form__box .fa-x {
  position: absolute;
  top: -25px;
  right: 0;
  font-size: 23px;
  font-family: Arial;
  font-weight: 600;
  cursor: pointer;
  color: #000000;
}

.form__box .error{
  display: block;
    color: #851925;
    text-align: center;
    border-radius: 4px;
    padding: 7px 0;
}

.form__box .fa-x:hover {
  color: red;
}

.input__form {
  margin: 10px 0;
}

.input__form input {
  height: 40px;
  width: 90%;
  padding: 0 15px;
    border-radius: 20px;
    outline: none;
    border: 1px solid #f9f9f9;
    font-size: 15px;
    font-weight: 400;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-top: none;
  border-left: none;
  border-right: none;
}

.form__box h2 {
  font-size: 25px;
  font-weight: 700;
  padding: 10px 0;
}

.form__box p {
  font-size: 14px;
}

.form__box form {
  margin: 1px 0;
}

.form__box form input.button {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #000;
  width: 90%;
  opacity: 0.7;
  font-family: arial;
  font-weight: 600;
  margin: 13px auto;
  font-size: 17px;
  border-radius: 25px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #000;
}

.form__box form button {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #fff;
  width: 90%;
  margin: 13px auto;
  font-family: arial;
  font-weight: 600;
  font-size: 17px;
  border-radius: 25px;
  cursor: pointer;
  background-color: #000;
  border: 1px solid #000;
}

.submit img {
  width: 20px;
  padding-right: 10px;
}
</style>
