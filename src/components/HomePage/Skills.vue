<template>
  <!-- Sub Service -->
  <section class="service" id="myskill">
    <div class="heading" >
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
  color: #ffffff;
}

.heading {
  text-align: center;
  margin-bottom: 1rem;
}

.heading span {
  color: var(--primary);
  font-size: 2rem;
  font-weight: 600;
}

.heading h2 {
  font-size: 2.4rem;
  font-weight: 500;
}

.service-carousel {
  display: flex;
  width: 90%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  padding-top: .2rem;
}

.service-container {
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding: 4rem;
  scroll-snap-type: x mandatory;
  margin-bottom: 2rem;
}

.service-container::-webkit-scrollbar {
  height: 8px;
}

.service-container::-webkit-scrollbar-thumb {
  background-color: #ffb300;
  border-radius: 10px;
  padding: 10px;
}

.service-container::-webkit-scrollbar-track {
  background: transparent;
}

.service-container .box {
  flex: 0 0 auto;
  width: 20rem; /* Fixed width for each skill box */
  background: var(--primary);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0.8rem;
  transition: transform 0.3s, background 0.3s;
  scroll-snap-align: center;
  opacity: 0;
  transform: translateY(20px);
}

.service-container .box.animate {
  opacity: 1;
  transform: translateY(0);
  transition: transform 1s, opacity 1s;
}

.service-container .box:hover {
  transform: scale(1.05);
  transition: .5s;
  background: #ffb300;
}

.service-container .box .box-img {
  width: 150px;
  height: 150px;
  margin-top: -75px;
}

.service-container .box .box-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.service-container .box h3 {
  font-size: 1.8rem;
  margin: 1rem 0;
}

.service-container .box p {
  color: #2f2f2f;
  font-size: 1rem;
  margin: 1rem 0;
}

@media (max-width: 1366px) {
  .heading span {
    font-size: 1.8rem;
  }
  .heading h2 {
    font-size: 2.2rem;
  }
  .service-carousel {
    display: flex;
    width: 100%;
    padding-top: .5rem;
    border-radius: 0.8rem;
    background: var(--bg);
  }
  .service-container .box {
    width: 19rem; /* Adjust width to fit better on smaller screens */
  }
  .service-container .box h3 {
    font-size: 1.6rem;
  }
  .service-container .box p {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .heading span {
    font-size: 1.6rem;
  }
  .heading h2 {
    font-size: 2rem;
  }
  .service-container .box {
    width: 17rem; /* Adjust width to fit better on smaller screens */
  }
}

@media (max-width: 450px) {
  .heading span {
    font-size: 1.4rem;
  }
  
  .heading h2 {
    font-size: 2rem;
  }
  .service-container .box {
    width: 16rem; /* Adjust width to fit better on small screens */
    margin: 0.5rem;
  }

  .service-container .box .box-img {
    width: 100px;
    height: 100px;
  }

  .service-container .box h3 {
    font-size: 1.6rem;
  }

  .service-container .box p {
    font-size: 1.2rem;
  }
}
</style>
