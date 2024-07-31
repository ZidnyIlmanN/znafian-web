<template>
  <div id="app">
    <nav class="navbar" :class="{ 'navbar-fixed': isNavbarFixed }">
      <a class="navbar-logo" href="#">
        <img :src="require('@/assets/znafian-logo.png')" alt="Logo" />
      </a>
      <div class="navbar-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <div class="toggle-icon"></div>
        <div class="toggle-icon"></div>
        <div class="toggle-icon"></div>
      </div>
      <div class="navbar-menu" :class="{ 'menu-open': isMenuOpen }">
        <div class="navbar-nav">
          <a href="#home" @click="closeMenu">Home</a>
          <a href="#about" @click="closeMenu">About</a>
          <a href="#myskill" @click="closeMenu">My Skills</a>
          <a href="#portfolio" @click="closeMenu">Portfolio</a>
          <a href="#contact" @click="closeMenu">Contact</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarMenu',
  data() {
    return {
      isNavbarFixed: false,
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    closeMenuOnClickOutside(event) {
      const navbarMenu = document.querySelector('.navbar-menu');
      const navbarToggle = document.querySelector('.navbar-toggle');
      if (!navbarToggle.contains(event.target) && !navbarMenu.contains(event.target)) {
        this.isMenuOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.closeMenuOnClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeMenuOnClickOutside);
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 4%;
  background-color: rgba(34, 40, 49, 0.8);
  backdrop-filter: blur(2rem);
  border-bottom: 1px solid #222831;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

.navbar .navbar-logo img {
  width: 40px;
  margin-right: 5px;
}

.navbar .navbar-nav a {
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 0 1rem;
}

.navbar .navbar-nav a::after {
  content: '';
  display: block;
  border: 0;
  border-radius: 10px;
  border-bottom: 0.15rem solid var(--primary);
  transform: scaleX(0);
  transition: 0.2s linear;
}

.navbar .navbar-nav a:hover::after {
  transform: scaleX(1);
}

.navbar-toggle {
  display: none;
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 18px;
    cursor: pointer;
    margin-left: auto;
  }
  .toggle-icon {
    width: 100%;
    height: 2px;
    background-color: #ffffff;
    transition: all 0.3s;
  }
  .active .toggle-icon:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .active .toggle-icon:nth-child(2) {
    opacity: 0;
  }
  .active .toggle-icon:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  .navbar-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    right: -100%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(2px);
    width: 30%;
    height: 100vh;
    transition: 0.3s;
  }
  .menu-open {
    right: 0;
  }
  .navbar-nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
  .navbar-nav a {
    color: #ffffff;
    display: block;
    margin: 1.5rem 0;
    padding: 0.5rem;
    font-size: 1.5em;
  }
  .navbar-nav a::after {
    transform-origin: 0 0;
    border-bottom: 0.15rem solid #EB5E28;
  }
  .navbar-nav a:hover::after {
    transform: scaleX(0.3);
  }
}
</style>
