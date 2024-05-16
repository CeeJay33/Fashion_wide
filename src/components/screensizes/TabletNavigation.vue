<template>
    <div class="container">
      <div class="navbar">
        <div class="navbar-left">
          <img src="logo.png" alt="Logo" class="logo" />
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
      <div class="content">
        <!-- Your content here -->
        <p>Welcome to our website!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
  
  .logo {
    max-width: 100px;
  }
  
  .hamburger {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .hamburger span {
    display: block;
    width: 30px;
    height: 3px;
    background: #333;
    margin-bottom: 5px;
  }
  
  .menu {
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    width: 200px;
    height: 100vh;
    padding: 20px;
    transform: translateX(100%);
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
  