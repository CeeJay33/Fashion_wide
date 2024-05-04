<template>
    <Layout>
     <section id="page-header" class="about-header"  >
        <h2>#Contact</h2>
        <p>LEAVE A MESSAGE.We would love to hear from you.</p>
    </section>

    <section id="contact-details" class="section-p1">
        <div class="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of Our branch nearby you or contact us</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i class="fas fa-map"></i>
                    <p>37 Mende maryland Street Lagos Nigeria</p>
                </li>
                <li>
                    <i class="fas fa-envelope"></i>
                    <p>Chrismiracle911@gmail.com</p>
                </li>
                <li>
                    <i class="fas fa-phone-alt"></i>
                    <p>+234 802 2619 320</p>
                </li>
                <li>
                    <i class="fas fa-clock"></i>
                    <p>Monday to Saturday 9:00am to 6pm</p>
                </li>
            </div>
        </div>

        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5748250153924!2d3.371011035853041!3d6.575219393445592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93a4eda0a6d7%3A0xadf66242432251b0!2sMaryland!5e0!3m2!1sen!2sng!4v1686826561932!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>

    <section id="form-details">
        <form action="">
            <span>LEAVE A MSESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your name">
            <input type="text" placeholder="E-mail">
            <input type="text" placeholder="Subject">
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button class="normal">Submit</button>
        </form>

    </section>
    </Layout>
  </template>
  
  <script>
  import Layout from '@/layouts/LayOut.vue'
  export default {
    name: "AboutView",
    components: {
       Layout,
     },
  };
  </script>
  