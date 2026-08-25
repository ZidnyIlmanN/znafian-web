<template>
  <div class="home-view">
    <NavbarMenu />
    
    <main class="max-w-container-max mx-auto px-margin-desktop">
      <!-- Hero Section / About -->
      <section id="about" class="pt-12 pb-24 md:pt-16 md:pb-24 swiss-grid hairline-b items-center">
        <div class="col-span-12 md:col-span-7 flex flex-col justify-center gap-8">
          <h1 class="font-display-xl text-display-lg-mobile md:text-display-xl max-w-2xl flex flex-col">
            <CascadeText :texts="['Hello, I\'am', 'Crafting digital']" :gradientWords="['digital', 'solutions', 'Software Engineering']" />
            <CascadeText :texts="['Zidny Ilman Nafi\'an', 'solutions that drive']" :gradientWords="['digital', 'solutions', 'Software Engineering']" />
            <CascadeText :texts="['Software Engineering', 'business value.']" :gradientWords="['digital', 'solutions', 'Software Engineering']" />
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
          <div class="flex flex-col md:flex-row justify-between md:items-center gap-6">
            <div class="flex items-start md:items-center gap-6">
              <img src="@/assets/Institut_Teknologi_Sepuluh_Nopember_seal.svg" alt="ITS Logo" class="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0" />
              <div>
                <h3 class="font-headline-md text-headline-md">Institut Teknologi Sepuluh Nopember (ITS)</h3>
                <p class="font-body-lg text-body-lg text-on-surface-variant mt-1">S1 Teknologi Informasi</p>
              </div>
            </div>
            <div class="pl-[88px] md:pl-0 text-left md:text-right">
              <p class="font-body-md text-body-md font-bold">2022 – Sekarang</p>
              <p class="font-label-caps text-label-caps text-primary mt-1">GPA: 3.10</p>
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

      <!-- Experience Section -->
      <section class="py-24 swiss-grid hairline-b">
        <div class="col-span-12 md:col-span-4">
          <span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">03 / Experience</span>
        </div>
        <div class="col-span-12 md:col-span-8 flex flex-col">
          
          <!-- Entry 01 -->
          <div class="flex flex-col md:flex-row gap-8 py-12 group hover:bg-surface-container-low transition-colors duration-300 hairline-b border-t border-outline-variant md:border-t-0 md:first:pt-0">
            <div class="md:w-1/3">
              <p class="font-headline-md text-headline-md mb-2">2026 – Present</p>
              <p class="font-label-caps text-label-caps text-secondary">ACTIVE ENGAGEMENT</p>
            </div>
            <div class="md:w-2/3">
              <h2 class="font-headline-md text-headline-md mb-2">Manager Digital &amp; Web Administrator</h2>
              <h3 class="font-body-lg text-body-lg font-semibold text-primary mb-6">Senara Skincare</h3>
              <p class="text-on-surface-variant font-body-md text-body-md mb-8 leading-relaxed">
                Orchestrating the digital ecosystem through comprehensive SEO optimization via Google Search Console and analytical frameworks. Spearheading website maintenance protocols and collaborating on high-level digital strategies to maximize brand visibility and conversion architecture.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="border border-outline px-3 py-1 font-label-caps text-label-caps">SEO Strategy</span>
                <span class="border border-outline px-3 py-1 font-label-caps text-label-caps">GSC</span>
                <span class="border border-outline px-3 py-1 font-label-caps text-label-caps">Analytics</span>
              </div>
            </div>
          </div>
          
          <!-- Entry 02 -->
          <div class="flex flex-col md:flex-row gap-8 py-12 group hover:bg-surface-container-low transition-colors duration-300 hairline-b">
            <div class="md:w-1/3">
              <p class="font-headline-md text-headline-md mb-2">2023 – Present</p>
              <p class="font-label-caps text-label-caps text-secondary">CORE ROLE</p>
            </div>
            <div class="md:w-2/3">
              <h2 class="font-headline-md text-headline-md mb-2">Web Developer</h2>
              <h3 class="font-body-lg text-body-lg font-semibold text-primary mb-6">UsahaOne</h3>
              <p class="text-on-surface-variant font-body-md text-body-md mb-8 leading-relaxed">
                Managing the full Software Development Life Cycle (SDLC) for complex digital products. Key highlights include developing advanced POS &amp; AI-driven Financial Management systems, and bespoke digital platforms for MORE Coffee Shop and Senara Skincare. Direct consultation with stakeholders to translate business requirements into technical blueprints.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div class="border-l-2 border-primary pl-4 py-2">
                  <p class="font-label-caps text-label-caps mb-1">POS &amp; AI Financial</p>
                  <p class="font-body-md text-body-md text-secondary">System Architecture</p>
                </div>
                <div class="border-l-2 border-primary pl-4 py-2">
                  <p class="font-label-caps text-label-caps mb-1">Direct Consulting</p>
                  <p class="font-body-md text-body-md text-secondary">Client Strategy</p>
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="border border-outline px-3 py-1 font-label-caps text-label-caps">React</span>
                <span class="border border-outline px-3 py-1 font-label-caps text-label-caps">Node.js</span>
                <span class="border border-outline px-3 py-1 font-label-caps text-label-caps">SDLC</span>
              </div>
            </div>
          </div>

          <!-- Entry 03 -->
          <div class="flex flex-col md:flex-row gap-8 py-12 group hover:bg-surface-container-low transition-colors duration-300 hairline-b">
            <div class="md:w-1/3">
              <p class="font-headline-md text-headline-md mb-2">2023</p>
              <p class="font-label-caps text-label-caps text-secondary">INTERNSHIP</p>
            </div>
            <div class="md:w-2/3">
              <h2 class="font-headline-md text-headline-md mb-2">IT Support Intern</h2>
              <h3 class="font-body-lg text-body-lg font-semibold text-primary mb-6">PT Pertamina EP Subang Field</h3>
              <p class="text-on-surface-variant font-body-md text-body-md mb-8 leading-relaxed">
                Architected and deployed the "Monitoring RAM Civil" application from the ground up. This technical feat involved building a robust full-stack solution using React.js and Supabase, implementing secure authentication, real-time CRUD operations, and managing the end-to-end deployment pipeline.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="border border-outline px-3 py-1 font-label-caps text-label-caps">React.js</span>
                <span class="border border-outline px-3 py-1 font-label-caps text-label-caps">Supabase</span>
                <span class="border border-outline px-3 py-1 font-label-caps text-label-caps">DevOps</span>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <router-link to="/experience" class="font-label-caps text-label-caps underline underline-offset-4 hover:no-underline text-primary">View Full Resume</router-link>
          </div>

        </div>
      </section>

      <!-- Selected Projects -->
      <section class="py-24 swiss-grid md:gap-y-0">
        <div class="col-span-full md:col-span-4 relative md:sticky md:top-32 h-fit md:z-10 pb-4 md:pb-0">
          <div class="flex flex-col gap-6">
            <span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">04 / Selected Projects</span>
            <h2 class="font-display-lg text-display-lg">Featured Work</h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xs">Showcasing our standout projects that blend creativity, strategy, and cutting-edge design.</p>
            <router-link to="/projects" class="bg-primary text-on-primary px-6 py-3 font-label-caps text-label-caps uppercase w-fit mt-4 inline-block">See All Work</router-link>
          </div>
        </div>
        <div class="col-span-full md:col-span-8 flex flex-col gap-24 mt-8 md:mt-0">
          <!-- Featured Projects -->
          <div class="flex flex-col gap-6 group" v-for="project in featuredProjects" :key="project.id">
            <div class="aspect-video rounded-2xl overflow-hidden hairline-t hairline-r hairline-b hairline-l">
              <img class="w-full h-full object-cover transition-all duration-700" :alt="project.title" :src="project.cover"/>
            </div>
            <div class="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant pb-6 gap-4 md:gap-0">
              <div>
                <h3 class="font-headline-md text-headline-md">{{ project.title }}</h3>
                <p class="font-body-md text-body-md text-on-surface-variant">{{ project.category }}</p>
              </div>
              <div class="flex items-center gap-4 md:gap-6">
                <span class="font-label-caps text-label-caps text-on-surface-variant hidden sm:block">{{ project.year || '2024' }}</span>
                <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="border border-primary px-4 py-2 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap flex items-center gap-2">
                  Visit Site <span class="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
                <router-link :to="'/projects/' + project.id" class="font-label-caps text-label-caps underline underline-offset-4 hover:no-underline whitespace-nowrap">View Project</router-link>
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