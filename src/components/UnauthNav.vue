<template>
  <div>
    <div class="nav-container">
      <nav class="nav">
        <ul class="nav-links">
          <li>
            <a 
              href="#"
              :class="['nav-link', activeLink === 'profile' ? 'active' : '']"
              @click.prevent="setActive('profile')"
              ref="profileLink"
            >
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="6" r="4" stroke="#1C274C" stroke-width="1.5"/>
                <ellipse cx="12" cy="17" rx="7" ry="4" stroke="#1C274C" stroke-width="1.5"/>
              </svg>
              User Profile
            </a>
          </li>
          <li>
            <a 
              href="#"
              :class="['nav-link', activeLink === 'portfolio' ? 'active' : '']"
              @click.prevent="setActive('portfolio')"
              ref="portfolioLink"
            >
              <svg fill="#000000" height="20px" width="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 463">
                <path d="M423.5,100H311V77.013c6.662-2.258,12.141-7.442,14.611-14.293c4.388-12.191-1.958-25.681-14.147-30.073
                  C288.5,24.374,260.85,20,231.5,20s-57,4.374-79.964,12.647C139.347,37.039,133,50.529,137.39,62.723
                  c2.524,7.003,8.053,12.072,14.61,14.29V100H39.5C17.72,100,0,117.72,0,139.5v264C0,425.28,17.72,443,39.5,443h384
                  c21.78,0,39.5-17.72,39.5-39.5v-264C463,117.72,445.28,100,423.5,100z M156.621,46.759C177.972,39.066,203.864,35,231.5,35
                  s53.528,4.066,74.88,11.759c4.41,1.588,6.706,6.47,5.119,10.877c-1.213,3.365-4.427,5.625-7.999,5.625
                  c-0.98,0-1.949-0.17-2.879-0.505C281.375,55.82,256.828,52,231.5,52s-49.875,3.82-69.12,10.756c-4.41,1.587-9.29-0.708-10.878-5.117
                  C149.915,53.229,152.21,48.348,156.621,46.759z M167,77.022c0.155-0.052,0.31-0.099,0.465-0.154C185.121,70.504,207.862,67,231.5,67
                  s46.379,3.504,64.036,9.869c0.153,0.055,0.31,0.093,0.464,0.145V100H167V77.022z M15,139.5c0-13.509,10.991-24.5,24.5-24.5h384
                  c13.509,0,24.5,10.991,24.5,24.5v72c0,48.799-39.701,88.5-88.5,88.5H263v-8.5c0-12.958-10.542-23.5-23.5-23.5h-16
                  c-12.958,0-23.5,10.542-23.5,23.5v8.5h-96.5C54.701,300,15,260.299,15,211.5V139.5z M248,307.5c0,4.687-3.813,8.5-8.5,8.5h-16
                  c-4.687,0-8.5-3.813-8.5-8.5v-16c0-4.687,3.813-8.5,8.5-8.5h16c4.687,0,8.5,3.813,8.5,8.5V307.5z M215,329.403
                  c2.638,1.027,5.503,1.597,8.5,1.597h16c2.997,0,5.862-0.57,8.5-1.597V339.5c0,4.687-3.813,8.5-8.5,8.5h-16
                  c-4.687,0-8.5-3.813-8.5-8.5V329.403z"/>
              </svg>
              User Portfolio
            </a>
          </li>
        </ul>
        <div class="underline" :style="underlineStyle"></div>
      </nav>
    </div>
    <transition 
      :name="slideDirection === 'left' ? 'slide-enter-left slide-leave-left' : 'slide'" 
      mode="out-in">
      <component :is="currentComponent" v-if="currentComponent" key="currentComponent"></component>
    </transition>
  </div>
</template>


<script setup>
import { ref, reactive, onMounted } from 'vue';
import UserProfile from '../components/UnAuthDetails/UserDetails.vue'; // Path to your user profile component
import UserPortfolio from '../components/UnAuthDetails/UserPortfolio.vue'; // Path to your user portfolio component

const activeLink = ref('profile'); // Default active link
const currentComponent = ref(UserProfile); // Default component to show
const underlineStyle = reactive({
  width: '0',
  left: '0'
});
const profileLink = ref(null);
const portfolioLink = ref(null);

const setActive = (link) => {
  const previousLink = activeLink.value; // Store the current link before changing it
  activeLink.value = link;
  currentComponent.value = link === 'profile' ? UserProfile : UserPortfolio; // Set component based on active link
  moveUnderline(link); // Move underline based on active link
  setSlideDirection(previousLink, link); // Set the slide direction based on the active link
};

const moveUnderline = (link) => {
  const targetLink = link === 'profile' ? profileLink.value : portfolioLink.value;
  const linkRect = targetLink.getBoundingClientRect();
  underlineStyle.width = `${linkRect.width}px`;
  underlineStyle.left = `${targetLink.offsetLeft}px`;
};

const slideDirection = ref('right'); // Default slide direction

const setSlideDirection = (previousLink, newLink) => {
  if (previousLink === 'profile' && newLink === 'portfolio') {
    slideDirection.value = 'right'; // Slide in from the right
  } else if (previousLink === 'portfolio' && newLink === 'profile') {
    slideDirection.value = 'left'; // Slide in from the left
  } else {
    slideDirection.value = 'none'; // No slide effect for same links
  }
};

onMounted(() => {
  moveUnderline('profile'); // Set underline on initial load
});
</script>


<style scoped>



.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease; /* Smooth transition for both transform and opacity */
}

.slide-enter, .slide-leave-to {
  opacity: 0; /* Fade out to transparent */
}

.slide-enter {
  transform: translateX(100%); /* Move in from the right */
  opacity: 0; /* Start fully transparent */
}

.slide-leave {
  opacity: 1; /* Start fully opaque */
}

.slide-enter-left {
  transform: translateX(-100%); /* Move in from the left */
  opacity: 0; /* Start fully transparent */
}

.slide-leave-left {
  transform: translateX(100%); /* Move out to the right */
  opacity: 0; /* Fade out to transparent */
}

.active {
  /* Add any styles you want for the active link */
  font-weight: bold;
  color: #1C274C; /* Example color */
}

.nav-container {
  display: flex;
  margin: 3rem 7rem;
  position: relative;
}

.nav {
  position: relative;
}

.nav-links {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center; /* Aligns SVG and text vertically */
  text-decoration: none;
  font-family: "Instrument Sans", sans-serif;
  font-size: 15px;
  color: #434343;
  margin: 0 20px;
  padding-bottom: 10px;
  cursor: pointer;
  position: relative;
}

.nav-link svg {
  margin-right: 8px; /* Space between the icon and text */
}

.nav-link.active {
  font-weight: bold;
  color: #007BFF;
  font-family: "Instrument Sans", sans-serif;
}

.track-line {
  position: absolute;
  bottom: -5px;
  width: auto;
  height: 1.5px;
  background-color: #f3f3f3;
}

.underline {
  position: absolute;
  bottom: -5px;
  height: 2px;
  background-color: #007BFF;
  transition: all 0.3s ease;
}
</style>
