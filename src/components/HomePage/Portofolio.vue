<template>
  <section class="portfolio" id="portfolio">
    <div class="heading">
      <h3>Portfolio</h3>
      <h2>My Amazing Works</h2>
      <p>Here are some of my creations:</p>
    </div>
    <div class="menu">
      <button 
        :class="{ active: selectedCategory === 'All Projects' }" 
        @click="filterWorks('All Projects')">
        All Projects
      </button>
      <button 
        :class="{ active: selectedCategory === 'Graphic Design' }" 
        @click="filterWorks('Graphic Design')">
        Graphic Design
      </button>
      <button 
        :class="{ active: selectedCategory === 'WebDev' }" 
        @click="filterWorks('WebDev')">
        WebDev
      </button>
    </div>
    <div class="portfolio-content">
      <div class="col" v-for="(work, index) in filteredWorks" :key="index">
        <img :src="work.imgSrc" :alt="work.title">
        <div class="layer">
          <h3>{{ work.title }}</h3>
          <p>{{ work.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioMenu',
  data() {
    return {
      works: [
      { imgSrc: require('@/assets/Karya1.jpg'), title: 'Graphic Design', description: 'Pertamina EP Subang Field Healthy Exercise Poster' },
      { imgSrc: require('@/assets/Karya2.jpg'), title: 'Graphic Design', description: 'Pertamina EP Subang Field Healthy Exercise Poster' },
      { imgSrc: require('@/assets/Karya3.jpg'), title: 'Graphic Design', description: 'Pertamina 65th Anniversary Broadcast Poster' },
      { imgSrc: require('@/assets/Karya9.jpg'), title: 'Graphic Design', description: 'Pertamina EP Subang Field Water Conservation Broadcast Poster' },
      { imgSrc: require('@/assets/Karya10.jpg'), title: 'Graphic Design', description: 'Pertamina 65th Anniversary Broadcast Poster' },
      { imgSrc: require('@/assets/Karya4.jpg'), title: 'Graphic Design', description: 'Poster for the 76th Indonesian Independence Day Competition for Pertamina Subang Field Employees, Partners, and Families' },
      { imgSrc: require('@/assets/Karya5.jpg'), title: 'Graphic Design', description: '1st Place Winner Poster for the Indonesian Independence Day Competition at Pertamina Subang Field' },
      { imgSrc: require('@/assets/Karya6.jpg'), title: 'Graphic Design', description: 'Poster for the Indonesian Independence Day Competition at Pertamina Subang Field' },
      { imgSrc: require('@/assets/Karya7.jpg'), title: 'Graphic Design', description: 'Social Media Marketing Poster' },
      { imgSrc: require('@/assets/Karya8.jpg'), title: 'Graphic Design', description: 'Poster for a Joint Movie Screening of the G30S/PKI Film' },
      { imgSrc: require('@/assets/Porto-Newsbite.png'), title: 'WebDev', description: 'My news website built using HTML, CSS, Vue.js as the framework, Express.js for the backend, and MySQL.' },
      { imgSrc: require('@/assets/Porto-znafian.png'), title: 'WebDev', description: 'My portfolio website built using HTML, CSS, and Vue.js as the framework.' }
      ],
      filteredWorks: [],
      selectedCategory: 'All Projects'
    };
  },
  mounted() {
    this.filterWorks('All Projects'); // Tampilkan semua karya pada awalnya dan atur sebagai default
  },
  methods: {
    filterWorks(category) {
      this.selectedCategory = category;
      if (category === 'All Projects') {
        this.filteredWorks = this.works;
      } else {
        this.filteredWorks = this.works.filter(work => work.title === category);
      }
    }
  }
}
</script>

<style scoped>
section {
  padding: 100px 18%;
  color: #ffffff;
}

.portfolio {
  padding: 100px 18%;
  background-color: #393E46;
}

.heading {
  text-align: center;
  margin-bottom: 2rem;
}

.heading h3 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--primary);
}

.heading h2 {
  font-size: 2.4rem;
  font-weight: 500;
  color: white;
  margin-bottom: 2rem;
}

.heading p {
  font-size: 1.4rem;
  color: #c0c0c0;
  margin-bottom: 5rem;
}

.menu {
  text-align: center;
  margin-bottom: 2rem;
}
.menu button {
  background-color: #393E46;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  transition: 0.2s linear;
  cursor: pointer;
  font-size: .8rem;
}

.menu button.active {
  background-color:  #c16d00;
}

.menu button:hover {
  background-color: #a35600;
}

.portfolio-content {
  overflow-x: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  grid-gap: 2rem;
  align-items: center;
  text-align: center;
  cursor: pointer;
}

.col {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.col img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  text-align: center;
  padding: 0 20px;
}

.col:hover .layer {
  opacity: 1;
}

.layer h3 {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 600;
  transition: transform 0.3s, opacity 0.3s;
}

.layer p {
  color: #ffffff;
  font-size: 1.2rem;
  margin-top: 1rem;
  transition: transform 0.3s, opacity 0.3s;
}

@media (max-width: 1366px) {
  .heading h3 {
    font-size: 1.8rem;
  }
  .heading h2 {
    font-size: 2.2rem;
  }
  .heading p {
    font-size: 1.2rem;
  }
  .menu button{
    font-size: .7rem;
  }
}
@media (max-width: 768px) {
  .portfolio {
    padding: 50px 10%;
  }

  .heading h3 {
    font-size: 1.6rem;
  }

  .heading h2 {
    font-size: 2rem;
  }

  .heading p {
    font-size: 1rem;
  }
  .menu button{
    font-size: .6rem;
  }
}

@media (max-width: 450px) {
  .heading h3 {
    font-size: 1.4rem;
  }

  .heading h2 {
    font-size: 1.8rem;
  }

  .heading p {
    font-size: 1rem;
  }

  .portfolio-content {
    grid-template-columns: 1fr;
  }
}
</style>
