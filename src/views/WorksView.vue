<template>
  <div class="works-view">
    <NavbarMenu />
    
    <main class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <!-- Hero Section / Header -->
      <section class="py-16 md:py-24 border-b border-outline-variant">
        <div class="swiss-grid">
          <div class="col-span-4 md:col-span-8">
            <span class="font-label-caps text-label-caps text-on-surface-variant mb-4 block uppercase tracking-widest">Archive</span>
            <h1 class="font-display-lg-mobile md:font-display-xl text-display-lg-mobile md:text-display-xl text-primary leading-none mb-8">Selected<br/>Works</h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-8">
              A curated collection of software engineering projects and graphic designs, focusing on scalable architecture, user-centric design, and technical precision.
            </p>
            <!-- Tabs -->
            <div class="flex flex-wrap gap-4">
              <button @click="activeTab = 'web'" :class="activeTab === 'web' ? 'bg-primary text-on-primary border-primary' : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'" class="border px-6 py-3 font-label-caps text-label-caps uppercase transition-all rounded-full tracking-widest">Web Development</button>
              <button @click="activeTab = 'design'" :class="activeTab === 'design' ? 'bg-primary text-on-primary border-primary' : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'" class="border px-6 py-3 font-label-caps text-label-caps uppercase transition-all rounded-full tracking-widest">Graphic Design</button>
            </div>
          </div>
          <div class="hidden md:flex col-span-4 justify-end items-end">
            <span class="font-label-caps text-label-caps text-outline text-right">
              Ref. 2020 — 2024<br/>Engineering &amp; Design
            </span>
          </div>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="py-16 md:py-32">
        <!-- Web Development -->
        <template v-if="activeTab === 'web'">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-gutter">
            <article v-for="(project, index) in projects" :key="project.id" class="project-card flex flex-col group" :class="{ 'md:mt-24': index % 2 !== 0 }">
              <div class="relative overflow-hidden aspect-video mb-8 rounded-2xl">
                <img class="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105" :alt="project.title" :src="project.cover"/>
              </div>
              <div class="flex justify-between items-start border-t border-outline-variant pt-6">
                <div>
                  <h2 class="font-headline-md text-headline-md text-primary mb-2">{{ project.title }}</h2>
                  <p class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">{{ project.category }}</p>
                </div>
                <div class="text-right flex flex-col items-end">
                  <span class="font-label-caps text-label-caps text-on-surface-variant block mb-4">{{ project.year }}</span>
                  <router-link :to="'/projects/' + project.id" class="font-label-caps text-label-caps text-primary border-b border-primary inline-flex items-center gap-2 group-hover:gap-4 transition-all w-fit">
                    VIEW DETAIL <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </router-link>
                </div>
              </div>
            </article>
          </div>
        </template>

        <!-- Graphic Design -->
        <template v-if="activeTab === 'design'">
          <div class="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            <div v-for="design in graphicDesigns" :key="design.id" class="break-inside-avoid">
              <div class="rounded-2xl overflow-hidden group relative">
                <img class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" :alt="design.title" :src="design.cover"/>
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span class="text-white font-label-caps text-label-caps tracking-widest uppercase">{{ design.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </section>

      <!-- Call to Action -->
      <section class="py-32 border-t border-outline-variant">
        <div class="swiss-grid">
          <div class="col-span-full text-center">
            <h2 class="font-display-lg text-display-lg mb-12">HAVE A PROJECT<br/>IN MIND?</h2>
            <router-link to="/contact" class="inline-block bg-primary text-on-primary px-12 py-6 font-label-caps text-label-caps tracking-[0.2em] hover:scale-105 transition-transform duration-300">
              GET IN TOUCH
            </router-link>
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
import { projects, graphicDesigns } from '@/data/projects.js'

export default {
  name: 'WorksView',
  components: {
    NavbarMenu,
    FooterMenu
  },
  data() {
    return {
      projects,
      graphicDesigns,
      activeTab: 'web'
    }
  },
  mounted() {
    document.title = 'Works | ZIDNY';
  }
}
</script>
<style scoped>
.project-card:hover img {
    transform: scale(1.02);
}
</style>
