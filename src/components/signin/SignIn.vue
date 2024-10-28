<template>
    <div class="sign__in">
        <div class="form">
            <h2>Sign In </h2>
            <p>Let's get you in as a <strong>Customer</strong></p>
            <form v-on:submit.prevent="addItem" autocomplete="off">
                <div class="error" v-if="responseData.message">
                    <p>{{ responseData.message }}</p>
                </div>
                <div class="input">
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="Enter your Email" v-model="FormData.email">
                </div>
               
                <div class="submit">
                    <input type="submit" style="" value="SignUp Now" class="button">
                </div>
            </form>
             <div class="submit">
            <button @click="loginWithGoogle"><img :src="require('@/assets/vecteezy_colourful-google-logo-in-dark-background_13760951-removebg-preview.png')" alt=""> Sign In with Google</button>
          </div>
            <div class="Forgot">
                <router-link to="">
                    <p>Forgot Password</p>
                </router-link>
            </div>
            <router-link to="/register-customer">
                <p>Don't have an account Sign Up</p>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { isAuthenticated } from '@/auth/auth';

export default {
    name: "SignIn",

    data() {
        return {
            FormData: {
                email: ''
                // password: ''
            },
            responseData: {
                message: ''
            }
        };
    },

    mounted() {
        this.checkAuth();
    },

    methods: {

        loginWithGoogle() {
      window.location.href = 'http://localhost:80/SignUpClassesPhp/GithubAuth/signUp.php';
        },

       async checkAuth() {
            const authenticated = await isAuthenticated();
                if (authenticated) {
                    this.$router.push('/dashboard');
                } 
        },

    async addItem() {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:80/SignUpClassesPhp/signUp/',
                withCredentials: true,
                data: {
                    email: this.FormData.email
                    // password: this.FormData.password
                    
                },
                headers: {
                    "content-type": "application/json"
                }
            });
            this.responseData = response.data;

            if (this.responseData.status === "success") {
                localStorage.setItem('ss_token', this.responseData.token.ss_token);
                localStorage.setItem('token', this.responseData.token.token);
                // sessionStorage.setItem('ss_token', this.responseData.token.ss_token);
                // sessionStorage.setItem('token', this.responseData.token.token);
                const authenticated = await isAuthenticated();
                if (authenticated) {
                    this.$router.push('/dashboard');
                } else {
                    this.$router.push('/');
                }
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
@import url("@/styles/signin.css");
</style>
