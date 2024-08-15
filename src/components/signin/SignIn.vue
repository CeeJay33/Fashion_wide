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
                    <input type="email" name="itemEmail" placeholder="Enter your Email" v-model="FormData.itemEmail">
                </div>
                <div class="input">
                    <label for="password">Password</label>
                    <input type="password" name="itemPassword" placeholder="Password" v-model="FormData.itemPassword">
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
                itemEmail: '',
                itemPassword: ''
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
      window.location.href = 'http://localhost:80/SignUpClassesPhp/GoogleAuth/login.php';
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
                url: 'http://localhost:80/SignUpClassesPhp/login/',
                withCredentials: true,
                data: {
                    itemEmail: this.FormData.itemEmail,
                    itemPassword: this.FormData.itemPassword
                },
                headers: {
                    "content-type": "application/json"
                }
            });
            this.responseData = response.data;
            if (this.responseData.status === "success" ) {
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
