<template>
    <footer id="footer" class="section-p1">
        <div class="col">
            <!-- <img class="loho" src="./others/hmm-removebg-preview.png" width="150"> -->
            <h4>Contacts</h4>
            <p><strong>Address:</strong> 100 Mende road, Street 3, Maryland</p>
            <p><strong>Phone:</strong> +234 8022619320</p>
            <p><strong>Hours:</strong> 9:00 - 10:00, mon - sat</p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pintrest-p"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div class="col">
            <h4>About</h4>
            <a><router-link to="/learnMore">About Us</router-link></a>
            <a href="#">Delivery information</a>
            <a href="#">Privacy</a>
            <a href="#">Terms & Condition</a>
            <a ><router-link to="/contact-us">Contact Us</router-link></a>
        </div>
        <div class="col">
            <h4>My Account</h4>
            <a><router-link to="/sign-in-customer">Sign In</router-link></a>
            <a href="#">View cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>

        <div class="col install">
            <h4>install App</h4>
            <p>From App Store or Google Play</p>
            <div class="row">
                <!-- <img src="./others/pay/images.png" width="100" alt=""> -->
            </div>
            <!-- <img src="./others/pay/paystack.png" width="300" alt=""> -->
        </div>
        <div class="copyright">
            <p>&#169; 2021,Powered By Joshkaytech - Online Kay_Jay_Boutique</p>
        </div>
    </footer> 
</template>


<style scoped lang="css">
@import url("../styles/footer.css");
</style>