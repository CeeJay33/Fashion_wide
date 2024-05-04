<template>
        <div class="form" id="myForm" style="background-color: #fff; border-top-left-radius: 1px;border-top-right-radius: 1px;" >
        <h2 style="margin-bottom: 2rem;font-size: 19px;text-align: center;">OR</h2> 
        <p>Let's get you in as a Designer</p>
        <form action="" autocomplete="off" id="myForm">
            <div class="error-text">Error</div>
                <div class="input">
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="Enter your Email">
                </div>
                    <div class="input">
                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="Password" >
                    </div>
            <div class="submit">
                <input type="submit" value="SignUp Now" class="button" >
            </div>
        </form>
        <div class="Forgot">
            <a href="recovery.php" style="text-decoration: none;">Forgot Password</a>
        </div>
        <div class="link">Don't have an Account? <a href="./SignUpC.php">Register</a></div>
    </div>
</template>

<script>
export default {
    name: "Sec_Signin",

}
</script>

<style>
@import url("@/styles/signin.css");
</style>