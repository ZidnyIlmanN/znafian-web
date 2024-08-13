<template>
  <!-- Sub Service -->
  <section class="service" id="myskill">
    <div class="heading">
      <span>My Skills</span>
      <h2>Skills I Possess</h2>
    </div>
  </section>

  <div class="service-carousel">
    <div class="service-container" ref="serviceContainer">
      <div class="box" v-for="(skill, index) in skills" :key="index">
        <div class="box-img">
          <img :src="skill.imgSrc" :alt="skill.altText">
        </div>
        <h3>{{ skill.title }}</h3>
        <p>{{ skill.description }}</p>
      </div>
    </div>
  </div>

  <!-- Scrolling Logos -->
  <div class="scrolling-logos">
    <div class="logo-track">
      <div class="logo-box" v-for="(skill, index) in skills" :key="'logo-' + index">
        <img :src="skill.imgSrc" :alt="skill.altText">
      </div>
      <!-- Duplicate logos for infinite scroll effect -->
      <div class="logo-box" v-for="(skill, index) in skills" :key="'logo-dup-' + index">
        <img :src="skill.imgSrc" :alt="skill.altText">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsMenu',
  data() {
    return {
      skills: [
        {
          imgSrc: require('@/assets/PS.svg'),
          altText: 'Photoshop',
          title: 'Photoshop',
          description: 'I possess basic editing skills in Photoshop, which is my default editing software.'
        },
        {
          imgSrc: require('@/assets/AI.svg'),
          altText: 'Adobe Illustrator',
          title: 'Adobe Illustrator',
          description: 'I possess basic editing skills in Adobe Illustrator.'
        },
        {
          imgSrc: require('@/assets/LR.svg'),
          altText: 'Lightroom',
          title: 'Lightroom',
          description: 'I possess basic editing skills in Lightroom.'
        },
        {
          imgSrc: require('@/assets/Canva.png'),
          altText: 'Canva',
          title: 'Canva',
          description: 'Canva is another editing app that I master.'
        },
        {
          imgSrc: require('@/assets/vscode.svg'),
          altText: 'vscode',
          title: 'Visual Studio Code',
          description: 'I frequently use Visual Studio Code as my main development editor.'
        },
        {
          imgSrc: require('@/assets/HTML.svg'),
          altText: 'HTML',
          title: 'HTML',
          description: 'Highly skilled in HTML for creating clean, semantic web structures.'
        },
        {
          imgSrc: require('@/assets/CSS.svg'),
          altText: 'CSS',
          title: 'CSS',
          description: ' Proficient in CSS, crafting responsive designs and complex layouts with precision.'
        },
        {
          imgSrc: require('@/assets/vuejs.png'),
          altText: 'Vue.js',
          title: 'Vue.js',
          description: 'Vue.js is a framework for a website development that I master.'
        }
      ]
    };
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    this.$refs.serviceContainer.querySelectorAll('.box').forEach(box => {
      observer.observe(box);
    });
  }
}
</script>

<style scoped>
.service {
  padding: 100px 18%;
  color: var(--text-light);

}

.heading {
  text-align: center;
  margin-bottom: 2rem;
}

.heading span {
  color: var(--primary); /* Primary color */
  font-size: 2rem;
  font-weight: 600;
}

.heading h2 {
  color: var(--text-light);
  font-size: 2.4rem;
  font-weight: 500;
}

.service-carousel {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  padding-top: 2rem;

}

.service-container {
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding: 2rem;
  scroll-snap-type: x mandatory;
  margin-bottom: 1rem;
}

.service-container::-webkit-scrollbar {
  height: 6px;
}

.service-container::-webkit-scrollbar-thumb {
  background-color: var(--accent);
  border-radius: 10px;
}

.service-container::-webkit-scrollbar-track {
  background: transparent;
}

.service-container .box {
  flex: 0 0 auto;
  width: 10rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 1rem;
  transition: transform 0.3s, background 0.3s, box-shadow 0.3s;
  scroll-snap-align: center;
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.service-container .box.animate {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: transform 1s, opacity 1s;
}

.service-container .box:hover {
  transform: scale(1.15) rotate(2deg);
  background: linear-gradient(135deg, var(--primary), var(--bg));
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.service-container .box .box-img {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  border-radius: 50%;
  background:var(--bg);
  padding: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.service-container .box .box-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.service-container .box h3 {
  font-size: 1.2rem;
  margin: 1rem 0;
  color: var(--text-dark);
}

.service-container .box p {
  color: var(--text-light);
  font-size: 0.85rem;
}

/* Scrolling Logos Section */
.scrolling-logos {
  width: 100%;
  overflow: hidden;
  background: var(--bg);
  padding: 2rem 0; /* Ditambah untuk memberi ruang lebih */
  margin-top: .5rem; /* Menambah jarak dari bagian atas */
  position: relative;
}

.logo-track {
  display: flex;
  width: max-content;
  animation: scrollLeft 15s linear infinite; /* Memperlambat animasi */
  gap: 50px; /* Menambah jarak antar logo */
}

.logo-box {
  width: 80px; /* Membuat logo sedikit lebih besar */
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(100%);
  transition: filter 0.3s, transform 0.3s;
}

.logo-box:hover {
  filter: grayscale(0%);
  transform: scale(1.2);
}

.logo-box img {
  width: 100%;
  object-fit: contain;
}

@keyframes scrollLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}


/* Responsive Styling */
@media (max-width: 1366px) {
  .heading{
    margin-bottom: 1rem;
  }
  .heading span {
    font-size: 1.8rem;
  }
  .heading h2 {
    font-size: 2.5rem;
  }
  .service-container .box {
    width: 9rem;
  }
  .service-container .box h3 {
    font-size: 1.1rem;
  }
  .service-container .box p {
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .heading{ 
    margin-bottom: 1rem;
  }
  .heading span {
    font-size: 1.6rem;
  }
  .heading h2 {
    font-size: 2.2rem;
  }
  .service-container .box {
    width: 8rem;
    padding: 12px;
  }
  .service-container .box .box-img {
    width: 70px;
    height: 70px;
  }
  .logo-box {
    width: 70px; /* Mengecilkan logo pada layar lebih kecil */
  }
  .logo-track {
  gap: 10px; /* Menambah jarak antar logo */
}
}

@media (max-width: 450px) {
  .heading span {
    font-size: 1.4rem;
  }
  
  .heading h2 {
    font-size: 2rem;
  }
  .service-container {
    padding: 1rem;
    gap: 1rem;
  }
  .service-container .box {
    width: 7rem;
    padding: 10px;
    transition: transform 0.3s, background 0.3s, box-shadow 0.3s;
  }
  .service-container .box:hover {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  .service-container .box .box-img {
    width: 60px;
    height: 60px;
  }
  .service-container .box h3 {
    font-size: 1rem;
  }
  .service-container .box p {
    font-size: 0.75rem;
  }
  .logo-box {
    width: 60px; /* Menyesuaikan ukuran logo pada layar HP */
  }
  .logo-track {
    animation: scrollLeft 18s linear infinite; /* Memperlambat lagi animasi untuk layar kecil */
  }
}
</style>
