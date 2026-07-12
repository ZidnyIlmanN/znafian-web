<template>
  <div class="project-detail-view" v-if="project">
    <NavbarMenu />
    
    <main class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <!-- Breadcrumbs -->
      <nav class="pt-24 md:pt-28 pb-4" aria-label="Breadcrumb">
        <ol class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant">
          <li><router-link to="/" class="hover:text-primary transition-colors">Home</router-link></li>
          <li><span class="material-symbols-outlined text-[12px] text-outline mx-1">chevron_right</span></li>
          <li><router-link to="/projects" class="hover:text-primary transition-colors">Works</router-link></li>
          <li><span class="material-symbols-outlined text-[12px] text-outline mx-1">chevron_right</span></li>
          <li class="text-primary truncate max-w-[200px] md:max-w-none">{{ project.title }}</li>
        </ol>
      </nav>

      <!-- Hero Section -->
      <section class="py-12 md:py-20">
        <div class="swiss-grid">
          <div class="col-span-full md:col-span-10">
            <h1 class="font-display-xl text-display-xl md:text-[88px] leading-tight mb-12 uppercase" v-html="formattedTitle">
            </h1>
          </div>
        </div>
        <div class="w-full h-[300px] md:h-[600px] overflow-hidden rounded-xl border border-outline-variant">
          <img class="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" :alt="project.title" :src="project.cover"/>
        </div>
      </section>

      <!-- Info Bar -->
      <section class="border-y border-outline-variant py-8 my-12">
        <div class="swiss-grid gap-y-8 md:gap-y-0">
          <div class="col-span-2 md:col-span-3">
            <span class="font-label-caps text-label-caps text-on-surface-variant block mb-1">CLIENT</span>
            <span class="font-body-lg text-body-lg font-bold">{{ project.client }}</span>
          </div>
          <div class="col-span-2 md:col-span-3">
            <span class="font-label-caps text-label-caps text-on-surface-variant block mb-1">ROLE</span>
            <span class="font-body-lg text-body-lg font-bold">{{ project.role }}</span>
          </div>
          <div class="col-span-4 md:col-span-3 mt-4 md:mt-0">
            <span class="font-label-caps text-label-caps text-on-surface-variant block mb-1">TECH</span>
            <span class="font-body-lg text-body-lg font-bold">{{ project.tech }}</span>
          </div>
          <div class="col-span-4 md:col-span-3 mt-4 md:mt-0">
            <span class="font-label-caps text-label-caps text-on-surface-variant block mb-1">YEAR</span>
            <span class="font-body-lg text-body-lg font-bold">{{ project.year || '2024' }}</span>
          </div>
        </div>
      </section>

      <!-- Project Narrative -->
      <section class="py-16 md:py-24">
        <div class="swiss-grid">
          <!-- Overview -->
          <div class="col-span-full md:col-span-4 mb-16 md:mb-0">
            <h2 class="font-label-caps text-label-caps text-on-surface-variant mb-8">01 / OVERVIEW</h2>
            <p class="font-body-lg text-body-lg text-on-surface mb-6">
              {{ project.overview }}
            </p>
            <a v-if="project.link" :href="project.link" target="_blank" class="font-label-caps text-label-caps text-primary border-b border-primary inline-flex items-center gap-2 hover:gap-4 transition-all mt-4">
              VISIT SITE <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
          <!-- Solution & Visual -->
          <div class="col-span-full md:col-span-7 md:col-start-6">
            <div class="mb-16">
              <h2 class="font-label-caps text-label-caps text-on-surface-variant mb-8">02 / THE SOLUTION</h2>
              <div class="border-l-4 border-primary pl-4 md:pl-8 py-2">
                <p class="font-display-lg-mobile md:text-headline-md font-headline-md leading-relaxed italic">
                  "Building scalable and user-centric digital experiences."
                </p>
              </div>
            </div>
            <div class="space-y-6">
              <p class="font-body-md text-body-md text-on-surface-variant flex gap-4" v-for="(contrib, idx) in project.contributions" :key="idx">
                <span class="text-primary">•</span> 
                <span>{{ contrib }}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Features (List with Dividers) -->
      <section class="py-16 md:py-24 border-t border-outline-variant">
        <div class="swiss-grid">
          <div class="col-span-full md:col-span-3 mb-8 md:mb-0">
            <h2 class="font-label-caps text-label-caps text-on-surface-variant">03 / KEY FEATURES</h2>
          </div>
          <div class="col-span-full md:col-span-9">
            <!-- List Item -->
            <div class="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-outline-variant" v-for="(feature, idx) in project.features" :key="idx">
              <div class="flex items-center gap-8 mb-4 md:mb-0">
                <span class="font-label-caps text-label-caps text-outline">0{{ idx + 1 }}</span>
                <h3 class="font-headline-md text-headline-md group-hover:translate-x-4 transition-transform duration-300">{{ feature.title }}</h3>
              </div>
              <p class="md:w-1/2 font-body-md text-body-md text-on-surface-variant">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Next Project Call to Action -->
      <section class="py-24 md:py-32 border-t border-outline-variant text-center" v-if="nextProject">
        <span class="font-label-caps text-label-caps text-on-surface-variant block mb-8">NEXT PROJECT</span>
        <router-link :to="'/projects/' + nextProject.id" class="group inline-block">
          <h2 class="font-display-xl text-display-lg-mobile md:text-[96px] uppercase group-hover:italic transition-all duration-300">{{ nextProject.title }}</h2>
          <div class="h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 mx-auto mt-4"></div>
        </router-link>
      </section>
    </main>

    <FooterMenu />
  </div>
  <div v-else class="h-screen flex items-center justify-center font-display-md">
    Project not found
  </div>
</template>

<script>
import NavbarMenu from '@/components/NavbarMenu.vue'
import FooterMenu from '@/components/FooterMenu.vue'
import { projects } from '@/data/projects.js'

export default {
  name: 'ProjectDetailView',
  components: {
    NavbarMenu,
    FooterMenu
  },
  data() {
    return {
      projects
    }
  },
  computed: {
    project() {
      const id = parseInt(this.$route.params.id);
      return this.projects.find(p => p.id === id);
    },
    nextProject() {
      if (!this.project || !this.project.nextProjectId) return null;
      return this.projects.find(p => p.id === this.project.nextProjectId);
    },
    formattedTitle() {
      if (!this.project) return '';
      // Simple logic to add a <br/> if title is long enough and has spaces
      const words = this.project.title.split(' ');
      if (words.length > 2) {
        const mid = Math.ceil(words.length / 2);
        return words.slice(0, mid).join(' ') + '<br/>' + words.slice(mid).join(' ');
      }
      return this.project.title;
    }
  },
  watch: {
    '$route.params.id'() {
      this.updateTitle();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  mounted() {
    this.updateTitle();
    window.scrollTo(0, 0);
  },
  methods: {
    updateTitle() {
      if (this.project) {
        document.title = `${this.project.title} | ZIDNY`;
      } else {
        document.title = 'Project Detail | ZIDNY';
      }
    }
  }
}
</script>
