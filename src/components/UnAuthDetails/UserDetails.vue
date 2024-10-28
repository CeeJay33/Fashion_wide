<template>
    <div class="main__parent__container flex mb-40">
  <div class="user-profile" >

    <div class="premiumship">
      <p>Pro</p>
    </div>
    <div class="profile-details">
      <img :src="user.avatar" alt="User Avatar" class="avatar" />
      <div class="info">

       <h2 class="user__name">{{ users.company_name }}.</h2>
       <span>{{ users.category }}</span>
      </div>
           

     <div class="user__social__info">
    <div class="user__social">
        <div class="">
            <h3>10k</h3>
            <span>Likes</span>
        </div>
    </div>

    <div class="user__social">
        <div class="">
            <h3>4k</h3>
            <span>Posts</span>
        </div>
    </div>

    <div class="user__social">
        <div class="">
            <h3>45k</h3>
            <span>Followers</span>
        </div>
    </div>
</div>

<div class="user__contact__info">

    <div class="user__email">
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="style=stroke">
<g id="email">
<path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M3.88534 5.2371C3.20538 5.86848 2.75 6.89295 2.75 8.5V15.5C2.75 17.107 3.20538 18.1315 3.88534 18.7629C4.57535 19.4036 5.61497 19.75 7 19.75H17C18.385 19.75 19.4246 19.4036 20.1147 18.7629C20.7946 18.1315 21.25 17.107 21.25 15.5V8.5C21.25 6.89295 20.7946 5.86848 20.1147 5.2371C19.4246 4.59637 18.385 4.25 17 4.25H7C5.61497 4.25 4.57535 4.59637 3.88534 5.2371ZM2.86466 4.1379C3.92465 3.15363 5.38503 2.75 7 2.75H17C18.615 2.75 20.0754 3.15363 21.1353 4.1379C22.2054 5.13152 22.75 6.60705 22.75 8.5V15.5C22.75 17.393 22.2054 18.8685 21.1353 19.8621C20.0754 20.8464 18.615 21.25 17 21.25H7C5.38503 21.25 3.92465 20.8464 2.86466 19.8621C1.79462 18.8685 1.25 17.393 1.25 15.5V8.5C1.25 6.60705 1.79462 5.13152 2.86466 4.1379Z" fill="#000000"/>
<path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M19.3633 7.31026C19.6166 7.63802 19.5562 8.10904 19.2285 8.3623L13.6814 12.6486C12.691 13.4138 11.3089 13.4138 10.3185 12.6486L4.77144 8.3623C4.44367 8.10904 4.38328 7.63802 4.63655 7.31026C4.88982 6.98249 5.36083 6.9221 5.6886 7.17537L11.2356 11.4616C11.6858 11.8095 12.3141 11.8095 12.7642 11.4616L18.3113 7.17537C18.6391 6.9221 19.1101 6.98249 19.3633 7.31026Z" fill="#000000"/>
</g>
</g>
</svg>

<p>{{ users.email }}</p>
    </div>

     <div class="user__email">
<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M15.1007 15.0272L14.5569 14.5107L15.1007 15.0272ZM15.5562 14.5477L16.1 15.0642H16.1L15.5562 14.5477ZM17.9728 14.2123L17.5987 14.8623H17.5987L17.9728 14.2123ZM19.8833 15.312L19.5092 15.962L19.8833 15.312ZM20.4217 18.7584L20.9655 19.2749L20.4217 18.7584ZM19.0011 20.254L18.4573 19.7375L19.0011 20.254ZM17.6763 20.9631L17.7499 21.7095L17.6763 20.9631ZM7.81536 16.4752L8.35915 15.9587L7.81536 16.4752ZM3.00289 6.96594L2.25397 7.00613L2.25397 7.00613L3.00289 6.96594ZM9.47752 8.50311L10.0213 9.01963H10.0213L9.47752 8.50311ZM9.63424 5.6931L10.2466 5.26012L9.63424 5.6931ZM8.37326 3.90961L7.76086 4.3426V4.3426L8.37326 3.90961ZM5.26145 3.60864L5.80524 4.12516L5.26145 3.60864ZM3.69185 5.26114L3.14806 4.74462L3.14806 4.74462L3.69185 5.26114ZM11.0631 13.0559L11.6069 12.5394L11.0631 13.0559ZM15.6445 15.5437L16.1 15.0642L15.0124 14.0312L14.5569 14.5107L15.6445 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4573 19.7375L19.5449 20.7705L20.9655 19.2749L19.8779 18.2419ZM17.6026 20.2167C16.1676 20.3584 12.4233 20.2375 8.35915 15.9587L7.27157 16.9917C11.7009 21.655 15.9261 21.8895 17.7499 21.7095L17.6026 20.2167ZM8.35915 15.9587C4.48303 11.8778 3.83285 8.43556 3.75181 6.92574L2.25397 7.00613C2.35322 8.85536 3.1384 12.6403 7.27157 16.9917L8.35915 15.9587ZM9.7345 9.32159L10.0213 9.01963L8.93372 7.9866L8.64691 8.28856L9.7345 9.32159ZM10.2466 5.26012L8.98565 3.47663L7.76086 4.3426L9.02185 6.12608L10.2466 5.26012ZM4.71766 3.09213L3.14806 4.74462L4.23564 5.77765L5.80524 4.12516L4.71766 3.09213ZM9.1907 8.80507C8.64691 8.28856 8.64622 8.28929 8.64552 8.29002C8.64528 8.29028 8.64458 8.29102 8.64411 8.29152C8.64316 8.29254 8.64219 8.29357 8.64121 8.29463C8.63924 8.29675 8.6372 8.29896 8.6351 8.30127C8.63091 8.30588 8.62646 8.31087 8.62178 8.31625C8.61243 8.32701 8.60215 8.33931 8.59116 8.3532C8.56918 8.38098 8.54431 8.41512 8.51822 8.45588C8.46591 8.53764 8.40917 8.64531 8.36112 8.78033C8.26342 9.0549 8.21018 9.4185 8.27671 9.87257C8.40742 10.7647 8.99198 11.9644 10.5193 13.5724L11.6069 12.5394C10.1793 11.0363 9.82761 10.1106 9.76086 9.65511C9.72866 9.43536 9.76138 9.31957 9.77432 9.28321C9.78159 9.26277 9.78635 9.25709 9.78169 9.26437C9.77944 9.26789 9.77494 9.27451 9.76738 9.28407C9.76359 9.28885 9.75904 9.29437 9.7536 9.30063C9.75088 9.30375 9.74793 9.30706 9.74476 9.31056C9.74317 9.31231 9.74152 9.3141 9.73981 9.31594C9.73896 9.31686 9.73809 9.31779 9.7372 9.31873C9.73676 9.3192 9.73608 9.31992 9.73586 9.32015C9.73518 9.32087 9.7345 9.32159 9.1907 8.80507ZM10.5193 13.5724C12.0422 15.1757 13.1923 15.806 14.0698 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4022 15.7387 15.4823 15.6819C15.5223 15.6535 15.5556 15.6266 15.5824 15.6031C15.5959 15.5913 15.6077 15.5803 15.618 15.5703C15.6232 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6367 15.5518 15.6387 15.5497C15.6397 15.5487 15.6407 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6431 15.5452C15.6438 15.5444 15.6445 15.5437 15.1007 15.0272C14.5569 14.5107 14.5576 14.51 14.5583 14.5093C14.5585 14.509 14.5592 14.5083 14.5596 14.5078C14.5605 14.5069 14.5614 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5674 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.583 14.4846 14.5885 14.4796 14.5933 14.4754C14.6028 14.467 14.6099 14.4616 14.6145 14.4584C14.6239 14.4517 14.6229 14.454 14.6102 14.459C14.5909 14.4666 14.5 14.4987 14.3103 14.4679C13.9077 14.4025 13.0391 14.0472 11.6069 12.5394L10.5193 13.5724ZM8.98565 3.47663C7.97206 2.04305 5.94384 1.80119 4.71766 3.09213L5.80524 4.12516C6.32808 3.57471 7.24851 3.61795 7.76086 4.3426L8.98565 3.47663ZM3.75181 6.92574C3.73038 6.52644 3.90425 6.12654 4.23564 5.77765L3.14806 4.74462C2.61221 5.30877 2.20493 6.09246 2.25397 7.00613L3.75181 6.92574ZM18.4573 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.7499 21.7095C18.497 21.6357 19.1016 21.2373 19.5449 20.7705L18.4573 19.7375ZM10.0213 9.01963C10.9889 8.00095 11.0574 6.40678 10.2466 5.26012L9.02185 6.12608C9.44399 6.72315 9.37926 7.51753 8.93372 7.9866L10.0213 9.01963ZM19.5092 15.962C20.33 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2704 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8861 13.1113 15.0124 14.0312L16.1 15.0642Z" fill="#1C274C"/>
</svg>

<p>{{ users.phone_number }}</p>
    </div>

     <div class="user__email">
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.5017C14.4853 16.5017 16.5 14.487 16.5 12.0017C16.5 9.5164 14.4853 7.50168 12 7.50168C9.51472 7.50168 7.5 9.5164 7.5 12.0017C7.5 14.487 9.51472 16.5017 12 16.5017ZM12 14.5034C10.6184 14.5034 9.49832 13.3833 9.49832 12.0017C9.49832 10.62 10.6184 9.5 12 9.5C13.3816 9.5 14.5017 10.62 14.5017 12.0017C14.5017 13.3833 13.3816 14.5034 12 14.5034Z" fill="#0F0F0F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V2.04938C17.7244 2.51844 21.4816 6.27558 21.9506 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21.9506C21.4816 17.7244 17.7244 21.4816 13 21.9506V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21.9506C6.27558 21.4816 2.51844 17.7244 2.04938 13H1C0.447715 13 0 12.5523 0 12C-1.19209e-07 11.4477 0.447715 11 1 11H2.04938C2.51844 6.27558 6.27558 2.51844 11 2.04938V1ZM12 20.0016C7.58083 20.0016 3.99839 16.4192 3.99839 12C3.99839 7.58083 7.58083 3.99839 12 3.99839C16.4192 3.99839 20.0016 7.58083 20.0016 12C20.0016 16.4192 16.4192 20.0016 12 20.0016Z" fill="#0F0F0F"/>
</svg>

<p>{{ users.address }}</p>
    </div>


     <div class="user__email">
        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>instagram</title>
<path d="M25.805 7.996c0 0 0 0.001 0 0.001 0 0.994-0.806 1.799-1.799 1.799s-1.799-0.806-1.799-1.799c0-0.994 0.806-1.799 1.799-1.799v0c0.993 0.001 1.798 0.805 1.799 1.798v0zM16 20.999c-2.761 0-4.999-2.238-4.999-4.999s2.238-4.999 4.999-4.999c2.761 0 4.999 2.238 4.999 4.999v0c0 0 0 0.001 0 0.001 0 2.76-2.237 4.997-4.997 4.997-0 0-0.001 0-0.001 0h0zM16 8.3c0 0 0 0-0 0-4.253 0-7.7 3.448-7.7 7.7s3.448 7.7 7.7 7.7c4.253 0 7.7-3.448 7.7-7.7v0c0-0 0-0 0-0.001 0-4.252-3.447-7.7-7.7-7.7-0 0-0 0-0.001 0h0zM16 3.704c4.003 0 4.48 0.020 6.061 0.089 1.003 0.012 1.957 0.202 2.84 0.538l-0.057-0.019c1.314 0.512 2.334 1.532 2.835 2.812l0.012 0.034c0.316 0.826 0.504 1.781 0.516 2.778l0 0.005c0.071 1.582 0.087 2.057 0.087 6.061s-0.019 4.48-0.092 6.061c-0.019 1.004-0.21 1.958-0.545 2.841l0.019-0.058c-0.258 0.676-0.64 1.252-1.123 1.726l-0.001 0.001c-0.473 0.484-1.049 0.866-1.692 1.109l-0.032 0.011c-0.829 0.316-1.787 0.504-2.788 0.516l-0.005 0c-1.592 0.071-2.061 0.087-6.072 0.087-4.013 0-4.481-0.019-6.072-0.092-1.008-0.019-1.966-0.21-2.853-0.545l0.059 0.019c-0.676-0.254-1.252-0.637-1.722-1.122l-0.001-0.001c-0.489-0.47-0.873-1.047-1.114-1.693l-0.010-0.031c-0.315-0.828-0.506-1.785-0.525-2.785l-0-0.008c-0.056-1.575-0.076-2.061-0.076-6.053 0-3.994 0.020-4.481 0.076-6.075 0.019-1.007 0.209-1.964 0.544-2.85l-0.019 0.059c0.247-0.679 0.632-1.257 1.123-1.724l0.002-0.002c0.468-0.492 1.045-0.875 1.692-1.112l0.031-0.010c0.823-0.318 1.774-0.509 2.768-0.526l0.007-0c1.593-0.056 2.062-0.075 6.072-0.075zM16 1.004c-4.074 0-4.582 0.019-6.182 0.090-1.315 0.028-2.562 0.282-3.716 0.723l0.076-0.025c-1.040 0.397-1.926 0.986-2.656 1.728l-0.001 0.001c-0.745 0.73-1.333 1.617-1.713 2.607l-0.017 0.050c-0.416 1.078-0.67 2.326-0.697 3.628l-0 0.012c-0.075 1.6-0.090 2.108-0.090 6.182s0.019 4.582 0.090 6.182c0.028 1.315 0.282 2.562 0.723 3.716l-0.025-0.076c0.796 2.021 2.365 3.59 4.334 4.368l0.052 0.018c1.078 0.415 2.326 0.669 3.628 0.697l0.012 0c1.6 0.075 2.108 0.090 6.182 0.090s4.582-0.019 6.182-0.090c1.315-0.029 2.562-0.282 3.716-0.723l-0.076 0.026c2.021-0.796 3.59-2.365 4.368-4.334l0.018-0.052c0.416-1.078 0.669-2.326 0.697-3.628l0-0.012c0.075-1.6 0.090-2.108 0.090-6.182s-0.019-4.582-0.090-6.182c-0.029-1.315-0.282-2.562-0.723-3.716l0.026 0.076c-0.398-1.040-0.986-1.926-1.729-2.656l-0.001-0.001c-0.73-0.745-1.617-1.333-2.607-1.713l-0.050-0.017c-1.078-0.416-2.326-0.67-3.628-0.697l-0.012-0c-1.6-0.075-2.108-0.090-6.182-0.090z"></path>
</svg>

<p>Chrisjosh99</p>
    </div>

</div>

    </div>
  </div>


  <div class="mother__container">
     <div class="user-profile-info">
      <h2>About Me</h2>
      <div class="descript_profile_info pad">
      <span>Hello, I’m {{ users.company_name }} Creative Graphic Designer & User Experience Designer based in Website, I create digital Products a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at.</span>
        </div>
    </div>

      <div class="user-profile-info">
      <h2>Personal Details</h2>
      <div class="descript_profile_info second-user-profile flex items-center justify-start gap-60">
        <div class="user--info">
          <span>Full Name</span>
          <p>{{ users.fname }} {{ users.lname }}</p>
        </div>
        <div class="user--info">
          <span>Company's Name</span>
          <p>{{ users.company_name }}</p>
        </div>

        
        </div>

         <div class="descript_profile_ second-user-profile flex items-center gap-60">
        <div class="user--info">
          <span>Phone</span>
          <p>{{ users.phone_number }}</p>
        </div>
        <div class="user--info">
          <span>Country</span>
          <p>{{ users.address }}</p>
        </div>

        
        </div>

         <div class="descript_profile_ second-user-profile flex items-center gap-60">
        <div class="user--info">
          <span>Email</span>
          <p>{{ users.email }}</p>
        </div>
        <div class="user--info">
          <span>Company's Name</span>
          <p>{{ users.company_name }}</p>
        </div>

        
        </div>
    </div>



    <div class="user-profile-info">
      <h2>Employment</h2>
      <div class="descript_profile_info second-user-profile flex items-center gap-60">
        <div class="user--info">
          <span>Full Name</span>
          <p>{{ users.fname }} {{ users.lname }}</p>
        </div>
        <div class="user--info">
          <span>Company's Name</span>
          <p>{{ users.company_name }}</p>
        </div>

        
        </div>

         <div class="descript_profile_ second-user-profile flex items-center gap-60">
        <div class="user--info">
          <span>Phone</span>
          <p>{{ users.phone_number }}</p>
        </div>
        <div class="user--info">
          <span>Country</span>
          <p>{{ users.address }}</p>
        </div>

        
        </div>

         <div class="descript_profile_ second-user-profile flex items-center gap-60">
        <div class="user--info">
          <span>Email</span>
          <p>{{ users.email }}</p>
        </div>
        <div class="user--info">
          <span>Company's Name</span>
          <p>{{ users.company_name }}</p>
        </div>

        
        </div>
    </div>
  </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';

const user = ref({
  avatar: 'data:image/png;base64,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', 
});

// const editProfile = () => {
//   alert('Edit profile feature coming soon!');
// };

</script>


<script>
import axios from 'axios';
export default {
  data() {
    return {
      users: {},
    };
  },
 async mounted() {
    console.log('Unique parameter:', this.$route.params.id);
    try {
        let response = await axios.get(`http://localhost:80/Fashion2/Fashion/user_info.php?user_id=${this.$route.params.id}`);
      console.log("data:", response.data[0].company_name)
      this.users = response.data[0];
      if (response.data && response.data.length === 0) {
        this.message = 'No designer found';
      }
    } catch (error) {
      this.message = 'An error occurred while fetching data';
      console.error(error);
    }
  },
};

</script>

<style scoped>




.premiumship{
  background-color: rgba(70, 128, 255, 1);
  width: 10%;
  padding: 4px;
  border-radius: 15px;
  position: absolute;
  right: 30px;
  top: 2rem;
}

.premiumship p{
  color: #fff;
}

.user-profile-info{
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 0;
  width: 90%;
  margin-bottom: 2rem;
  height: auto;
}


.user-profile-info h2{
     font-size: 20px;
    font-weight: 500;
    padding: 1.3rem 1.5rem;
    font-family: "Instrument Sans", sans-serif;
}


.descript_profile_info{
    border-top: 1px solid #ddd; /* Line at the top */
  width: auto; /* Adjust width to 90% */
}

.descript_profile_info.pad{
  padding: 1.5rem;
}
.descript_profile_info{
      padding: 0.6rem 1.7rem;
    font-size: 17px;
    color: rgba(91, 107, 121, 1);
    font-family: "Sora", sans-serif;
    
}

.descript_profile_{
    border-top: 1px solid #ddd; /* Line at the top */
  width: auto; /* Adjust width to 90% */
  padding: 0.6rem 1.7rem;
    font-size: 17px;
    color: rgba(91, 107, 121, 1);
    font-family: "Sora", sans-serif;
}


.second-user-profile p{
  color: #101010;
  padding: 6px 0;
}

















.profile-details{
    margin-top: 2rem;
}

.profile-details img{
    margin: 0 auto 0.6rem auto;
    background-color: rgba(233, 240, 255, 1);
}

.profile-details .user__name{
    font-size: 22px;
    font-weight: 500;
    margin: 0.3rem 0;
    font-family: "Instrument Sans", sans-serif;
}


.profile-details span{
    font-size: 19px;
    color: rgba(91, 107, 121, 1);

}
.user-profile {
  border: 1px solid #ddd;
  position: relative;
  border-radius: 12px;
  padding: 16px;
  width: 800px;
  height: 600px;
  margin: 0 2rem 0 9rem;
  text-align: center;
}

.avatar {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
}

.info {
  text-align: center;
}

.info h3 {
  margin: 0;
}

.info p {
  margin: 4px 0;
}

.user__social__info {
  position: relative;
  padding: 20px 10px;
  border-top: 1px solid #e5e5e5; /* Line at the top */
  border-bottom: 1px solid #e5e5e5; /* Line at the bottom */
  width: 90%; /* Adjust width to 90% */
  margin: 1.5rem auto; /* Center the container horizontally */
}

.user__social {
  display: inline-block;
  text-align: center;
  padding: 10px 30px;
  position: relative;
}

.user__social:not(:last-child) {
  border-right: 1px solid #e5e5e5; 
}

.user__social h3 {
  margin: 0;
  font-family: "Sora", sans-serif;
  font-weight: 500;
  font-size: 21px;
}

.user__social span {
  font-size: 17px;
  color: #666;
  font-weight: 500;
  font-family: "Archivo";
}

hr {
  margin: 10px 0;
  border: none;
  border-top: 4px solid #1C274C;
  width: 90%; /* Match the width of the parent container */
  margin-left: auto;
  margin-right: auto;
}



.user__contact__info{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-items: center;
    padding: 0 1rem;
}


.user__email{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0;
}


.user__contact__info p{
   font-family: "Sora", sans-serif;
    font-size: 16px;
    color: rgba(91, 107, 121, 1);
}

button {
  background-color: #1C274C;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2C3E50;
}
</style>
