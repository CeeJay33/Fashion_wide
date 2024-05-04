<template>
    <nav ref="navbar" class="navbar navbar-expand-custom navbar-mainbg">
      <img :src="require('@/assets/hmm-removebg-preview.png')" class="barr" alt="">
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
  export default {
    data() {
      return {
        isNavbarOpen: true,
        items: [
          { label: 'HomePage', icon: 'fas fa-tachometer-alt', route: '/' },
          { label: 'About Us', icon: 'far fa-address-book', route: '/about' },
          { label: 'Contact Us', icon: 'fas fa-phone', route: '/contact-us' },
          { label: 'Designers', icon: 'far fa-calendar-alt', route: '/fashion-designers' },
          { label: 'Learn More', icon: 'far fa-chart-bar', route: '/learnMore' },
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
  