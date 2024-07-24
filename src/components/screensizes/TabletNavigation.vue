<template>
  <div class="container">
    <div class="navbar">
      <div class="navbar-left">
        <img :src="require('@/assets/hmm-removebg-preview.png')" alt="Logo" class="logo" />
      </div>
      <div class="navbar-right">
        <div @click="toggleMenu" class="menu-icon" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="menu" :class="{ 'open': isMenuOpen }">
      <a><router-link to="/">HomePage</router-link></a>
      <a><router-link to="/learnmore">LearMore</router-link></a>
      <a><router-link to="/contact-us">Contact Us</router-link></a>
      <a><router-link to="/fashion-designers">Fashion Designers</router-link></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileNavigation",
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 768px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar {
  padding: 20px 0;
  padding: 10px 2.5rem 10px 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  max-width: 100px;
}

.menu-icon {
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
}

.menu-icon span {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #333;
  transition: transform 0.3s, opacity 0.3s;
}

.menu-icon span:nth-child(1) {
  top: 0;
}

.menu-icon span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.menu-icon span:nth-child(3) {
  bottom: 0;
}

.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.active span:nth-child(2) {
  opacity: 0;
}

.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.menu {
  position: fixed;
  top: 10%;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100vh;
  padding: 20px;
  z-index: 999;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.menu.open {
  transform: translateX(0);
}

.menu a {
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: #333;
}
</style>
