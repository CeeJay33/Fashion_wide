<template>
    <nav ref="navbar" class="navbar navbar-expand-custom navbar-mainbg">
      <img :src="require('@/assets/hmm-removebg-preview.png')" class="barr" alt="">
      <div class="search__bar">
        <input type="text" placeholder="Search..." v-model="searchQuery" @keyup="search" @keydown.enter="redirectIfSingleResult" @click="showSuggestions = true">
        <img :src="require('@/assets/search-interface-symbol_54481.png')" alt="Search Icon" v-on:click="redirectIfSingleResult">
      
      <div class="suggestions" v-show="showSuggestions && Array.isArray(searchResults) && searchResults.length > 0">
        <ul>
          <li v-for="result in searchResults" :key="result.uniqued" @click="selectSuggestion(result)">
            {{ result.company_name }}
          </li>
        </ul>
      </div>
    </div>
      <transition name="navbar-collapse">
        <div class="collapse navbar-collapse" v-show="isNavbarOpen" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
            <li class="nav-item" v-for="(item, index) in items" :key="index" :class="{ 'active': item.route === $route.path }">
              <router-link :to="item.route" class="nav-link" @click="setActive(item)">
                <i :class="item.icon"></i>{{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        searchQuery: '',
        searchResults: [],
        showSuggestions: false,
        isNavbarOpen: true,
        items: [
          { label: 'HomePage', icon: 'fas fa-tachometer-alt', route: '/' },
          { label: 'Learn More', icon: 'far fa-chart-bar', route: '/learnMore' },
          { label: 'Contact Us', icon: 'fas fa-phone', route: '/contact-us' },
          { label: 'Find Designers', icon: 'far fa-calendar-alt', route: '/fashion-designers' },
          { label: 'Sign In', icon: 'far fa-copy', route: '/sign-in-customer' }
        ]
      };
    },
    methods: {
      toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
        this.$nextTick(() => this.updateHoriSelector());
      },
      setActive(activeItem) {
        if (activeItem.route === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
  
        this.$nextTick(() => {
          this.updateHoriSelector();
        });
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
    window.location.reload(); // Reload the page after a delay (e.g., 500 milliseconds)
  }, 1000);
        }
      },
      selectSuggestion(result) {
  this.searchQuery = result.company_name;
  this.$router.push({ name: 'SearchDetails', params: { name: result.company_name } });
  this.showSuggestions = false;
  setTimeout(() => {
    window.location.reload(); // Reload the page after a delay (e.g., 500 milliseconds)
  }, 1000); // Adjust the delay time as needed
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
      this.updateHoriSelector();
      window.addEventListener('resize', this.updateHoriSelector);
    },
    unmounted() {
      window.removeEventListener('resize', this.updateHoriSelector);
    }
  };
  </script>

  <style scoped lang="css">
  @import url("@/styles/navbar.css");
  </style>
  