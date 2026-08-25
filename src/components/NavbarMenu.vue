<template>
  <header class="docked full-width top-0 sticky z-50 bg-background dark:bg-background border-b border-outline-variant dark:border-outline">
    <div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-container-max mx-auto">
      <router-link to="/" class="font-headline-md text-headline-md font-bold tracking-tighter text-primary dark:text-on-background">ZIDNY</router-link>
      
      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8 items-center">
        <router-link to="/#about" class="font-label-caps text-label-caps transition-colors duration-200" :class="isActive('/#about') ? 'text-primary dark:text-on-background font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-background'">About</router-link>
        <router-link to="/experience" class="font-label-caps text-label-caps transition-colors duration-200" :class="isActive('/experience') ? 'text-primary dark:text-on-background font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-background'">Experience</router-link>
        <router-link to="/#skills" class="font-label-caps text-label-caps transition-colors duration-200" :class="isActive('/#skills') ? 'text-primary dark:text-on-background font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-background'">Skills</router-link>
        <router-link to="/projects" class="font-label-caps text-label-caps transition-colors duration-200" :class="isActive('/projects') ? 'text-primary dark:text-on-background font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-background'">Projects</router-link>
        <router-link to="/contact" class="font-label-caps text-label-caps transition-colors duration-200" :class="isActive('/contact') ? 'text-primary dark:text-on-background font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-background'">Contact</router-link>
      </nav>

      <div class="hidden md:flex gap-4 items-center">
        <a href="/CV_ZidnyIlmanNafi'an_2026_Standar.pdf" download class="border border-primary text-primary px-6 py-2 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all inline-block">Download CV</a>
        <router-link to="/contact" class="bg-primary text-on-primary px-6 py-2 font-label-caps text-label-caps uppercase tracking-widest hover:bg-opacity-90 transition-all inline-block">Let's Talk</router-link>
      </div>

      <!-- Mobile Hamburger Button -->
      <button class="md:hidden flex items-center justify-center p-2 text-primary" @click="isMobileMenuOpen = !isMobileMenuOpen" aria-label="Toggle menu">
        <span class="material-symbols-outlined text-3xl">{{ isMobileMenuOpen ? 'close' : 'menu' }}</span>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-background border-b border-outline-variant py-4 px-margin-mobile flex flex-col gap-4 shadow-lg">
      <router-link @click="isMobileMenuOpen = false" to="/#about" class="font-label-caps text-label-caps py-2 border-b border-outline-variant/30" :class="isActive('/#about') ? 'text-primary font-bold' : 'text-on-surface-variant'">About</router-link>
      <router-link @click="isMobileMenuOpen = false" to="/experience" class="font-label-caps text-label-caps py-2 border-b border-outline-variant/30" :class="isActive('/experience') ? 'text-primary font-bold' : 'text-on-surface-variant'">Experience</router-link>
      <router-link @click="isMobileMenuOpen = false" to="/#skills" class="font-label-caps text-label-caps py-2 border-b border-outline-variant/30" :class="isActive('/#skills') ? 'text-primary font-bold' : 'text-on-surface-variant'">Skills</router-link>
      <router-link @click="isMobileMenuOpen = false" to="/projects" class="font-label-caps text-label-caps py-2 border-b border-outline-variant/30" :class="isActive('/projects') ? 'text-primary font-bold' : 'text-on-surface-variant'">Projects</router-link>
      <router-link @click="isMobileMenuOpen = false" to="/contact" class="font-label-caps text-label-caps py-2 border-b border-outline-variant/30" :class="isActive('/contact') ? 'text-primary font-bold' : 'text-on-surface-variant'">Contact</router-link>
      <a href="/CV_ZidnyIlmanNafi'an_2026_Standar.pdf" download class="border border-primary text-primary px-6 py-4 mt-4 text-center font-label-caps text-label-caps uppercase tracking-widest inline-block w-full">Download CV</a>
      <router-link @click="isMobileMenuOpen = false" to="/contact" class="bg-primary text-on-primary px-6 py-4 mt-2 text-center font-label-caps text-label-caps uppercase tracking-widest inline-block w-full">Let's Talk</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavbarMenu',
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    isActive(path) {
      if (path.includes('#')) {
        const hash = path.slice(path.indexOf('#'));
        // If we are at root, make About active by default if no hash
        if (this.$route.path === '/' && this.$route.hash === '' && path === '/#about') {
            return true;
        }
        return this.$route.path === '/' && this.$route.hash === hash;
      }
      if (path === '/projects') {
        return this.$route.path.startsWith('/projects');
      }
      return this.$route.path === path;
    }
  }
}
</script>
