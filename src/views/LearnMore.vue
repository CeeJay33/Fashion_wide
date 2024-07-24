<template>
    <LayOut>
        <div class="Learn__More__section">
            <div class="main__hero__section">
                <div class="hero__descript">
                    <span class="span">Find Designers</span>
                    <h1>Find the Perfect Fashion Designer</h1>
                    <span>Find Talented Fashion Designers for Your Events</span>

                    <div class="buttons1">
                        <!-- <div class="bott1">
                            <button class="btnn">Get an Account </button> -->
                        <!-- </div> -->
                        <!-- <div class="bott2">
                            <button class="btnn">Get an Account</button>
                        </div> -->
                    </div>
                </div>
                <!-- <div class="hero__image">
                    <img :src="require('@/assets/Illustration.png')" alt="">
                </div> -->

            </div>
            <div class="descriptionn">
                <h3>Hire Designers</h3>
                <p>Looking to hire designers for your next project? Discover talented professionals ready to transform
                    your vision into reality. Whether you need graphic designers, web designers, or UI/UX experts, find
                    the perfect match to create stunning designs that resonate with your audience. Collaborate with
                    skilled designers who understand your needs and deliver exceptional results. Hire designers today
                    and bring your creative projects to life!</p>
            </div>

            <div class="second__description">
                <div class="second__desc">
                    <h3>Kalie Offers a Marketplace for Designers</h3>
                    <p>Kalie offers a vibrant marketplace designed exclusively for fashion designers, providing a
                        dynamic platform to showcase their creativity, connect with clients, and sell their products.
                        Whether you specialize in clothing, accessories, or other fashion items, Kalie provides the
                        perfect stage to display your portfolio, attract new opportunities, and reach a global audience.
                        Join Kalie's community of talented fashion designers and explore a world of possibilities to
                        showcase your designs, grow your clientele, and elevate your fashion career to new heights.</p>

                </div>

            </div>
            <div class="about__desc">
                <div class="second__desc">
                    <h3>About-Kalie</h3>
                    <p>Kalie offers a vibrant marketplace designed exclusively for fashion designers, providing a
                        dynamic platform to showcase their creativity, connect with clients, and sell their products.
                        Whether you specialize in clothing, accessories, or other fashion items, Kalie provides the
                        perfect stage to display your portfolio,</p>
                </div>

                <div class="second__desc">
                    <img :src="require('@/assets/typing.jpg')" alt="">
                </div>
            </div>
            <SponSor />
        </div>
    </LayOut>
</template>



<script>
import LayOut from '@/layouts/LayOut.vue';
import SponSor from '@/components/SponSor.vue';
export default {
    name: "LearnMore",

    components: {
        LayOut,
        SponSor
    }
}

</script>


<style>
@import url("@/styles/learn.css");
</style>