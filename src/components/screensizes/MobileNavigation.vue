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
      <details>
        <summary>HomePage</summary>
        <a><router-link to="/">HomePage</router-link></a>
        <a><router-link to="/">Go Pro</router-link></a>
      </details>
      <details>
        <summary>Contact Page</summary>
        <a><router-link to="/learnmore">Contact</router-link></a>
        <a><router-link to="/learnmore">Learn More</router-link></a>
      </details>

      <details>
        <summary>Designers</summary>
        <a><router-link to="/contact-us">Find Designers</router-link></a>
      </details>

      <details>
        <summary>Search</summary>
        <a><router-link to="/contact-us">Find Designers</router-link></a>
      </details>
    
      
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
details{
  margin: 2rem 0;
}
 a{
  font-family: arial;
  font-weight: 500;
  padding-left: 0.5rem;

}

 a{
  font-family: arial;
  font-size: 12px;
  font-weight: 600;
  margin-left: 1rem;
  padding-top: 7px;

}
details{
  animation: slide 0.5s;
}

@keyframes slide {
  from {
    transform: translateY(10px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}



.logo {
  max-width: 130px;
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
  height: 3px;
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
  padding: 30px 25px;
  z-index: 999;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}



.menu.open {
  transform: translateX(0);
}

.menu a {
  display: block;
  text-decoration: none;
  color: #4e4e4e;
}
</style>
