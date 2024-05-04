<template>
    <div class="sign__up">
        <div class="form" id="myForm" >
            <div v-bind:class="{ 'blur': loading }">
            <h2>Sign Up</h2>
            <p>Let's get you started as a <strong>Customer</strong></p>
        
            <form v-on:submit.prevent="addUser" autocomplete="off">
                <div class="error" v-if="ResponseData && ResponseData.status === 'error'">
                    <p>{{ ResponseData.message }}</p>
                </div>
                <div class="input">
                    <label for="fname">First Name</label>
                    <input type="text" name="FirstName" placeholder="First Name" v-model="FormData.FirstName"
                        pattern="[a-zA-Z'.''\s]*" required>
                </div>
                <div class="input">
                    <label for="lname">Last Name</label>
                    <input type="text" name="lname" placeholder="Last Name" v-model="FormData.LastName"
                        pattern="[a-zA-Z'.''\s]*" required>
                </div>
                <div class="input">
                    <label for="email">Email</label>
                    <input type="email" name="email" v-model="FormData.Email" placeholder="Enter your Email" required>
                </div>

                <div class="grid-details">
                    <div class="input">
                        <label for="password">Password</label>
                        <input type="password" name="password" v-model="FormData.Password" placeholder="Password" required>
                    </div>
                    <div class="input">
                        <label for="cpassword">Confirm Password</label>
                        <input type="password" name="cpassword" v-model="FormData.ConPassword" placeholder="Confirm Password" required>
                    </div>
                    <div class="input1">
                        <input type="checkbox" name="check" v-model="FormData.Check" required>
                        <label for="check"> By continuing you accept <a href="">Terms</a> and <a href="">Condition</a></label>
                    </div>
                </div>
                <div class="submit">
                    <input type="submit" value="SignUp Now" class="button">
                </div>
            </form>
           
           
            <div class="link">Already Signed up? <router-link to="/sign-in-customer">Login Now</router-link></div>
        </div>
    </div>
    <div v-if="loading" class="loading">
                <img  :src="require('@/assets/kOnzy.gif')" alt="Loading...">
            </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: "RegisterCus",

    data() {
        return {
            FormData: {
                FirstName: '',
                LastName: '',
                Email: '',
                Password: '',
                ConPassword: '',
                Check: ''
            },
            ResponseData: null,
            loading: false, // Added loading state
        };
    },
    methods: {
        async addUser() {
            this.loading = true;
            try {
                let Response = await axios({
                    method: 'post',
                    url: 'http://localhost:80/Fashion2/Fashion/ProgramSignUpC.php',
                    withCredentials: true,
                    data: {
                        FirstName: this.FormData.FirstName,
                        LastName: this.FormData.LastName,
                        Email: this.FormData.Email,
                        Password: this.FormData.Password,
                        ConPassword: this.FormData.ConPassword,
                        Check: this.FormData.Check
                    },
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    }
                });
                this.ResponseData = Response.data;
                if (this.ResponseData.status === "success") {
                    this.$router.push('/verify-cus');
                } else if (this.ResponseData.status === "error") {
                    setTimeout(() => {
                        this.ResponseData = null;
                    }, 3000);
                }
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    this.ResponseData = { status: 'error', message: error.response.data.message };
                } else {
                    this.ResponseData = { status: 'error', message: 'An error occurred. Please try again later.' };
                }
                setTimeout(() => {
                    this.ResponseData = null;
                }, 3000);
            } finally {
                this.loading = false; 
            }
        }
    }
}
</script>

<style>
@import url("@/styles/signin.css");

/* CSS for the loading spinner */
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    position: absolute;
    top: 0;
    width: 100%;
    height: 80vh;
    
}

.blur {
    filter: blur(4px);
}

.loading img{
    width: 60px;
    filter: blur(0);
}
</style>
