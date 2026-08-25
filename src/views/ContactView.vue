<template>
  <div class="contact-view">
    <NavbarMenu />
    
    <main class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <!-- Hero Section -->
      <section class="py-16 md:py-24 border-b border-outline-variant">
        <div class="swiss-grid">
          <div class="col-span-full">
            <span class="font-label-caps text-label-caps text-secondary mb-8 block uppercase tracking-widest">04 // Contact</span>
            <h1 class="font-display-xl text-display-lg-mobile md:text-display-xl max-w-4xl">
              LET'S TALK
            </h1>
          </div>
        </div>
      </section>

      <!-- Split Content Section -->
      <section class="border-b border-outline-variant">
        <div class="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
          <!-- Left Column: Info -->
          <div class="md:col-span-5 py-16 md:py-24 md:pr-12 md:border-r border-outline-variant flex flex-col justify-between">
            <div>
              <div class="mb-16">
                <span class="font-label-caps text-label-caps text-secondary block mb-4">EMAIL</span>
                <a class="font-headline-md text-headline-md hover:underline underline-offset-8 transition-all duration-300" href="mailto:zidnyilman224@gmail.com">
                  zidnyilman224@gmail.com
                </a>
              </div>
              <div class="mb-16">
                <span class="font-label-caps text-label-caps text-secondary block mb-4">LOCATION</span>
                <p class="font-headline-md text-headline-md">
                  Surabaya, Indonesia
                </p>
              </div>
              <div class="mb-16">
                <span class="font-label-caps text-label-caps text-secondary block mb-4">SOCIALS</span>
                <ul class="flex flex-col gap-2">
                  <li><a class="font-headline-md text-headline-md hover:translate-x-2 transition-transform inline-block" href="https://linkedin.com/in/zidnyilman2" target="_blank" rel="noopener">LinkedIn</a></li>
                  <li><a class="font-headline-md text-headline-md hover:translate-x-2 transition-transform inline-block" href="https://github.com/ZidnyIlmanN" target="_blank" rel="noopener">GitHub</a></li>
                </ul>
              </div>
            </div>
            <div class="pt-12">
              <div class="flex gap-4">
                <span class="material-symbols-outlined text-4xl">alternate_email</span>
                <span class="material-symbols-outlined text-4xl">location_on</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Form -->
          <div class="md:col-span-7 py-16 md:py-24 md:pl-12 bg-surface-container-lowest">
            <form class="space-y-12" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="space-y-4">
                  <label class="font-label-caps text-label-caps text-secondary" for="name">NAME *</label>
                  <input class="w-full bg-transparent border-0 border-b border-outline-variant py-4 font-body-lg text-body-lg placeholder:text-outline/50 transition-colors focus:border-primary focus:outline-none focus:ring-0" id="name" name="name" placeholder="Type your name here" type="text" required/>
                </div>
                <div class="space-y-4">
                  <label class="font-label-caps text-label-caps text-secondary" for="email">EMAIL *</label>
                  <input class="w-full bg-transparent border-0 border-b border-outline-variant py-4 font-body-lg text-body-lg placeholder:text-outline/50 transition-colors focus:border-primary focus:outline-none focus:ring-0" id="email" name="email" placeholder="email@address.com" type="email" required/>
                </div>
              </div>
              <div class="space-y-4">
                <label class="font-label-caps text-label-caps text-secondary" for="subject">SUBJECT</label>
                <input class="w-full bg-transparent border-0 border-b border-outline-variant py-4 font-body-lg text-body-lg placeholder:text-outline/50 transition-colors focus:border-primary focus:outline-none focus:ring-0" id="subject" name="subject" placeholder="What are we discussing?" type="text"/>
              </div>
              <div class="space-y-4">
                <label class="font-label-caps text-label-caps text-secondary" for="message">MESSAGE *</label>
                <textarea class="w-full bg-transparent border-0 border-b border-outline-variant py-4 font-body-lg text-body-lg placeholder:text-outline/50 transition-colors resize-none focus:border-primary focus:outline-none focus:ring-0" id="message" name="message" placeholder="Briefly describe your project or request" rows="4" required></textarea>
              </div>
              <div class="pt-8">
                <button class="group flex items-center justify-between w-full md:w-auto md:min-w-[240px] px-8 py-6 transition-all duration-300 hover:bg-on-surface-variant" :class="isSent ? 'bg-green-600 text-white' : 'bg-primary text-on-primary'" type="submit" :disabled="isSent">
                  <span class="font-label-caps text-label-caps" v-if="!isSent">SEND MESSAGE</span>
                  <span class="font-label-caps text-label-caps" v-else>MESSAGE SENT</span>
                  <span class="material-symbols-outlined ml-8 group-hover:translate-x-2 transition-transform" v-if="!isSent">arrow_forward</span>
                  <span class="material-symbols-outlined ml-8" v-else>check</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- Subheadline Section -->
      <section class="py-24 md:py-48 text-center bg-background">
        <div class="max-w-4xl mx-auto">
          <h2 class="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight">
            Available for new opportunities and collaborations.
          </h2>
          <div class="mt-16 flex justify-center items-center gap-2">
            <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span class="font-label-caps text-label-caps">CURRENTLY ACCEPTING PROJECTS</span>
          </div>
        </div>
      </section>
    </main>

    <FooterMenu />
  </div>
</template>

<script>
import NavbarMenu from '@/components/NavbarMenu.vue'
import FooterMenu from '@/components/FooterMenu.vue'

export default {
  name: 'ContactView',
  components: {
    NavbarMenu,
    FooterMenu
  },
  data() {
    return {
      isSent: false
    }
  },
  mounted() {
    document.title = 'Contact | ZIDNY';
  },
  methods: {
    handleSubmit(e) {
      this.isSent = true;
      e.target.reset();
      setTimeout(() => {
        this.isSent = false;
      }, 3000);
    }
  }
}
</script>
<style scoped>
input:focus, textarea:focus {
  outline: none;
  border-color: #1c1b1b !important;
}
</style>

