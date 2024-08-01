<template>
  <!-- Sub Service -->
  <section class="service" id="myskill">
    <div class="heading">
      <span>Keahlian Saya</span>
      <h2>Keahlian yang Saya Kuasai</h2>
    </div>
  </section>
  
  <div class="service-container">
    <div class="box" v-for="(skill, index) in skills" :key="index">
      <div class="box-img">
        <img :src="skill.imgSrc" :alt="skill.altText">
      </div>
      <h3>{{ skill.title }}</h3>
      <p>{{ skill.description }}</p>
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
          description: 'Saya menguasai dasar-dasar pengeditan di perangkat lunak Photoshop, yang merupakan perangkat lunak pengeditan default saya.'
        },
        {
          imgSrc: require('@/assets/AI.svg'),
          altText: 'Adobe Illustrator',
          title: 'Adobe Illustrator',
          description: 'Saya menguasai dasar-dasar pengeditan di perangkat lunak Adobe Illustrator.'
        },
        {
          imgSrc: require('@/assets/LR.svg'),
          altText: 'Lightroom',
          title: 'Lightroom',
          description: 'Saya menguasai dasar-dasar pengeditan di perangkat lunak Lightroom.'
        }
      ]
    };
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
  margin-bottom: 2rem;
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

.service-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.service-container .box {
  flex: 1 1 20rem;
  background: var(--primary);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2rem;
  border-radius: 0.8rem;
  transition: transform 0.3s, background 0.3s;
}

.service-container .box:hover {
  transform: scale(1.05);
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
  font-size: 1.4rem;
  margin: 1rem 0;
}
@media (max-width: 1366px) {
  .heading span {
    font-size: 1.8rem;
  }
  .heading h2 {
    font-size: 2.2rem;
  }
  .service-container .box h3 {
    font-size: 1.6rem;
  }
  .service-container .box p {
    font-size: 1.2rem;
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
    flex: 1 1 45%;
  }

  .service-container .box .box-img {
    width: 120px;
    height: 120px;
  }
  .service-container .box h3 {
    font-size: 1.4rem;
  }
  .service-container .box p {
    font-size: 1rem;
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
    flex: 1 1 90%;
    margin: 1rem;
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
