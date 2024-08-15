<template>
  <div v-if="!isMobile">
    <nav ref="navbar" class="navbar navbar-expand-custom navbar-mainbg" :class="{ 'navbar-dark': isDark }">
      <img :src="require('@/assets/hmm-removebg-preview.png')" class="barr" alt="">
      
      <transition name="navbar-collapse">
        <div class="collapse navbar-collapse" v-show="isNavbarOpen" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <div class="hori-selector">
              <div class="left"></div>
              <div class="right"></div>
            </div>
            <li class="nav-item" v-for="(item, index) in items" :key="index" :class="{ 'active': item.route === $route.path }">
              <router-link 
                :to="item.route" 
                class="nav-link"
            
                @click="handleMouseOver(item.label)"
               
              >
                <i :class="item.icon"></i>{{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </transition>

      <div class="search__bar">
        <input type="search" placeholder="Search..." v-model="searchQuery" @keyup="search" @keydown.enter="redirectIfSingleResult" @click="showSuggestions = true">
        <img :src="require('@/assets/search-interface-symbol_54481.png')" alt="Search Icon" @click="redirectIfSingleResult">
      
        <div class="suggestions" v-show="showSuggestions && Array.isArray(searchResults) && searchResults.length > 0">
          <ul>
            <li v-for="result in searchResults" :key="result.uniqued" @click="selectSuggestion(result)">
              {{ result.company_name }}
            </li>
          </ul>
        </div>
      </div>
      <ToogleButton :isDark="isDark" @toggle="handleToggle"/>
      <div v-if="isAuthenticated">
        <ProfileSuggest/>
      </div>
      <div v-else>
        <router-link to="/register-customer">
          <button class="margin-t-33">sign up</button>
        </router-link>
      </div>
    </nav>

    <!-- Hover Element -->
    <div 
      class="nav hover__navigation__bar" 
      :class="{ 'show': isHoveringHomePage }"
    >
      <div class="children__container">
        <div class="navigation__hover__links">
          <ul class="hover__links">
            <li>Trending Designers</li>
            <li>Favorites Designers</li>
            <li>Seasonal Designers</li>
            <li>Modelist</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <MobileNavigation/>
  </div>
</template>

<script>
import axios from 'axios';
import ProfileSuggest from './ProfileSuggest.vue';
import MobileNavigation from './screensizes/MobileNavigation.vue';
import { isAuthenticated } from '@/auth/auth';

export default {
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ProfileSuggest,
    MobileNavigation,
  },
  data() {
    return {
      isMobile: false,
      searchQuery: '',
      searchResults: [],
      showSuggestions: false,
      isAuthenticated: false,
      isNavbarOpen: true,
      isHoveringHomePage: false, // New data property for hover state
      items: [
        { label: 'HomePage', icon: 'fas fa-tachometer-alt', route: '/' },
        { label: 'Learn More', icon: 'far fa-chart-bar', route: '/learnMore' },
        { label: 'Contact Us', icon: 'fas fa-phone', route: '/contact-us' },
        { label: 'Find Designers', icon: 'far fa-calendar-alt', route: '/fashion-designers' },
        { label: 'Go Pro', icon: 'far fa-copy', route: '/sign-in-customer' }
      ]
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
      this.$nextTick(() => this.updateHoriSelector());
    },

    async checkAuthentication() {
      const authenticated = await isAuthenticated();
      this.isAuthenticated = authenticated;
    },

    handleMouseOver(label) {
      if (label === 'HomePage') {
        this.isHoveringHomePage = true; // Set true on hover
      }
    },
    // handleMouseLeave(label) {
    //   if (label === 'HomePage') {
    //     this.isHoveringHomePage = false; // Set false when hover is removed
    //   }
    // },

    handleToggle(isDark) {
      this.$emit('toggle', isDark);
    },
    setActive(activeItem) {
      if (activeItem.route === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      this.$nextTick(() => {
        this.updateHoriSelector();
      });
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768;
    },
    async search() {
      this.showSuggestions = true;
      if (this.searchQuery.trim() === '') {
        this.searchResults = [];
        return;
      }
      this.searchResults = await this.fetchSearchResultsFromDatabase(this.searchQuery);
    },
    async fetchSearchResultsFromDatabase(query) {
      const response = await axios.get(`http://localhost:80/Fashion2/Fashion/Searching.php?q=${query}`);
      return response.data;
    },
    redirectIfSingleResult() {
      if (this.searchResults.length === 1) {
        this.$router.push({ name: 'SearchDetails', params: { name: this.searchResults[0].company_name } });
        this.showSuggestions = false;
        setTimeout(() => {
          window.location.reload(); 
        }, 1000);
      }
    },
    selectSuggestion(result) {
      this.searchQuery = result.company_name;
      this.$router.push({ name: 'SearchDetails', params: { name: result.company_name } });
      this.showSuggestions = false;
      setTimeout(() => {
        window.location.reload(); 
      }, 1000); 
    },
    updateHoriSelector() {
      const tabsNewAnim = this.$refs.navbar;
      const activeItemNewAnim = tabsNewAnim.querySelector('.nav-item.active');
      if (!activeItemNewAnim) return;
      const itemPosNewAnimTop = activeItemNewAnim.offsetTop - tabsNewAnim.offsetTop;
      const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft - tabsNewAnim.offsetLeft;
      const activeWidthNewAnimHeight = activeItemNewAnim.offsetHeight;
      const activeWidthNewAnimWidth = activeItemNewAnim.offsetWidth;
      const horiSelector = tabsNewAnim.querySelector('.hori-selector');
      horiSelector.style.top = itemPosNewAnimTop + 'px';
      horiSelector.style.left = itemPosNewAnimLeft + 'px';
      horiSelector.style.height = activeWidthNewAnimHeight + 'px';
      horiSelector.style.width = activeWidthNewAnimWidth + 'px';
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  async created() {
    await this.checkAuthentication(); 
  }
};
</script>

<style scoped lang="css">
@import url("@/styles/navbar.css");
@import url( "@/styles/IsDarkForAll.css");



.nav.hover__navigation__bar.show {
  display: block; /* Show when hovering */
}
</style>
