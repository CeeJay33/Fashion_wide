<template>
  <nav ref="navbar" class="navbar navbar-expand-custom navbar-mainbg">
    <img :src="require('@/assets/hmm-removebg-preview.png')" class="barr" alt="">
    <transition name="navbar-collapse">
      <div class="collapse navbar-collapse" v-show="isNavbarOpen" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
          <li class="nav-item" v-for="(item, index) in items" :key="index" :class="{ 'active': item.route === $route.path }">
            <router-link v-if="item.label !== 'Sign Out'" :to="item.route" class="nav-link" @click="setActive(item)">
              <i :class="item.icon"></i>{{ item.label }}
            </router-link>
            <a v-else class="nav-link" @click="signOut">
              <i :class="item.icon"></i>{{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
  <main>
    <DashNav/>
  </main>
</template>

<script>
import DashNav from './DashNav.vue';
import axios from 'axios';
export default {
  components: {
    DashNav
  },
  data() {
    return {
      isNavbarOpen: true,
      items: [
        { label: 'DashBoard', icon: 'fas fa-tachometer-alt', route: '/dashboard' },
        { label: 'Find Designers', icon: 'far fa-address-book', route: '/fashion-designers' },
        { label: 'Contact Us', icon: 'fas fa-phone', route: '/contact-us' },
        { label: 'Designers', icon: 'far fa-calendar-alt', route: '/fashion-designers' },
        { label: 'Learn More', icon: 'far fa-chart-bar', route: '/learnMore' },
        { label: 'Sign Out', icon: 'far fa-copy', route: '' }
      ]
    };
  },
  methods: {
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
    },
    async signOut() {
      let LOGOUT = await axios({
        method: 'post',
        url: 'http://localhost:80/Fashion2/Fashion/logout_cus.php',
        withCredentials: true,

        headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
      });
     const Successful = LOGOUT.data;
      if(Successful.status === 'success'){
        this.$router.push("/")
      }
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
