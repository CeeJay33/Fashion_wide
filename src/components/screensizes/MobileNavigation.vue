<template>
    <div class="container">
      <div class="navbar">
        <div class="navbar-left">
          <img :src="require('@/assets/hmm-removebg-preview.png')" alt="Logo" class="logo" />
        </div>
        <div class="navbar-right">
          <button class="hamburger" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div class="menu" :class="{ 'open': isMenuOpen }">
        <!-- Your menu items here -->
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
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
  
  .hamburger {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 999;
  }
  
  .hamburger span {
    display: block;
    width: 30px;
    height: 3px;
    background: #333;
    margin-bottom: 5px;
  }
  
  .menu {
    position: fixed;
    top: 10%;
    left: 0;
    background: #fff;
    width: 200px;
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
  