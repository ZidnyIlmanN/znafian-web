<template>
  <div class="home-view">
    <NavbarMenu />
    
    <main class="max-w-container-max mx-auto px-margin-desktop">
      <!-- Hero Section / About -->
      <section id="about" class="py-24 swiss-grid hairline-b">
        <div class="col-span-12 md:col-span-7 flex flex-col justify-center gap-8">
          <h1 class="font-display-xl text-display-lg-mobile md:text-display-xl max-w-2xl flex flex-col">
            <CascadeText :texts="['Hello, I\'am', 'Crafting digital']" />
            <CascadeText :texts="['Zidny Ilman Nafi\'an', 'solutions that drive']" />
            <CascadeText :texts="['Software Engineer', 'business value.']" />
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            I help businesses build scalable web applications and digital products, from initial concept to deployment and maintenance.
          </p>
          <div class="flex gap-4">
            <router-link to="/projects" class="bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest inline-block">View Projects</router-link>
            <router-link to="/contact" class="border border-primary text-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all inline-block">Contact Me</router-link>
          </div>
        </div>
        <div class="col-span-12 md:col-span-5">
          <div class="aspect-[4/5] rounded-[4rem] overflow-hidden">
            <img class="w-full h-full object-cover" alt="Zidny Ilman Nafi'an" src="@/assets/Pass Photo.jpeg"/>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section class="py-24 swiss-grid hairline-b">
        <div class="col-span-12 md:col-span-4">
          <span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">01 / Education</span>
        </div>
        <div class="col-span-12 md:col-span-8 flex flex-col gap-8">
          <div class="flex flex-col md:flex-row justify-between items-baseline gap-4">
            <div>
              <h3 class="font-headline-md text-headline-md">Institut Teknologi Sepuluh Nopember (ITS)</h3>
              <p class="font-body-lg text-body-lg text-on-surface-variant">S1 Teknologi Informasi</p>
            </div>
            <div class="text-right">
              <p class="font-body-md text-body-md font-bold">2022 – Sekarang</p>
              <p class="font-label-caps text-label-caps text-primary">GPA: 3.10</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-24 swiss-grid hairline-b">
        <div class="col-span-12 md:col-span-4">
          <span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">02 / Expertise</span>
        </div>
        <div class="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Category 1 -->
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2 hairline-b pb-2">
              <span class="material-symbols-outlined text-primary" data-icon="code">code</span>
              <h4 class="font-label-caps text-label-caps uppercase">Languages</h4>
            </div>
            <ul class="flex flex-wrap gap-2">
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">JavaScript</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">TypeScript</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">Python</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">SQL</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">HTML/CSS</li>
            </ul>
          </div>
          <!-- Category 2 -->
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2 hairline-b pb-2">
              <span class="material-symbols-outlined text-primary" data-icon="layers">layers</span>
              <h4 class="font-label-caps text-label-caps uppercase">Frameworks</h4>
            </div>
            <ul class="flex flex-wrap gap-2">
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">React.js</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">Next.js</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">Vue.js</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">Node.js</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">Express.js</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">Tailwind CSS</li>
            </ul>
          </div>
          <!-- Category 3 -->
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2 hairline-b pb-2">
              <span class="material-symbols-outlined text-primary" data-icon="cloud_done">cloud_done</span>
              <h4 class="font-label-caps text-label-caps uppercase">Deployment & SEO</h4>
            </div>
            <ul class="flex flex-wrap gap-2">
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">AWS</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">Vercel</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">Docker</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">Schema Markup</li>
            </ul>
          </div>
          <!-- Category 4 -->
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2 hairline-b pb-2">
              <span class="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>
              <h4 class="font-label-caps text-label-caps uppercase">Tools</h4>
            </div>
            <ul class="flex flex-wrap gap-2">
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">Git</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">GitHub</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">Postman</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">Figma</li>
              <li class="border border-outline-variant px-3 py-1 font-label-caps text-[10px] uppercase">Linux</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Selected Projects -->
      <section class="py-24 swiss-grid">
        <div class="col-span-12 md:col-span-4 sticky top-32 h-fit">
          <div class="flex flex-col gap-6">
            <span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">03 / Selected Projects</span>
            <h2 class="font-display-lg text-display-lg">Featured Work</h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xs">Showcasing our standout projects that blend creativity, strategy, and cutting-edge design.</p>
            <router-link to="/projects" class="bg-primary text-on-primary px-6 py-3 font-label-caps text-label-caps uppercase w-fit mt-4 inline-block">See All Work</router-link>
          </div>
        </div>
        <div class="col-span-12 md:col-span-8 flex flex-col gap-24">
          <!-- Featured Projects -->
          <div class="flex flex-col gap-6 group" v-for="project in featuredProjects" :key="project.id">
            <div class="aspect-video rounded-[3rem] overflow-hidden hairline-t hairline-r hairline-b hairline-l">
              <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" :alt="project.title" :src="project.cover"/>
            </div>
            <div class="flex justify-between items-end border-b border-outline-variant pb-6">
              <div>
                <h3 class="font-headline-md text-headline-md">{{ project.title }}</h3>
                <p class="font-body-md text-body-md text-on-surface-variant">{{ project.category }}</p>
              </div>
              <div class="flex items-center gap-4">
                <span class="font-label-caps text-label-caps text-on-surface-variant">{{ project.year || '2024' }}</span>
                <router-link :to="'/projects/' + project.id" class="font-label-caps text-label-caps underline underline-offset-4 hover:no-underline">View Project</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="py-32 hairline-t text-center flex flex-col items-center gap-10">
        <h2 class="font-display-xl text-display-xl max-w-4xl mx-auto">Let's build something impactful together.</h2>
        <router-link to="/contact" class="bg-primary text-on-primary px-12 py-6 font-headline-md text-headline-md tracking-tighter hover:scale-105 transition-transform inline-block">Let's Talk</router-link>
      </section>
    </main>

    <FooterMenu />
  </div>
</template>

<script>
import NavbarMenu from '@/components/NavbarMenu.vue'
import FooterMenu from '@/components/FooterMenu.vue'
import CascadeText from '@/components/CascadeText.vue'
import { projects } from '@/data/projects.js'

export default {
  name: 'HomeView',
  components: {
    NavbarMenu,
    FooterMenu,
    CascadeText
  },
  data() {
    return {
      projects
    }
  },
  computed: {
    featuredProjects() {
      return this.projects.slice(0, 4)
    }
  },
  mounted() {
    document.title = 'ZIDNY | Software Engineer Portfolio';
  }
}
</script>