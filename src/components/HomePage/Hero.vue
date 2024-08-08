<template>
  <section class="home" id="home">
    <div class="home-text">
      <h3 class="animated-text">Hello, I'm</h3>
      <h1 class="animated-text">Zidny Ilman Nafi'an</h1>
      <h5>Students of <span>Sepuluh Nopember Institute of Technology</span></h5>
      <p class="animated-text">I am a Sepuluh Nopember Institute of Technology (ITS) student, majoring in Information Technology class of 2022</p>
    </div>
    <div class="aing">
      <img :src="require('@/assets/pict-home.png')" alt="pict-home" class="animated-img"/>
    </div>
    <div class="buttons">
      <button @click="downloadCV" class="btn btn-download">Download CV</button>
      <button @click="toggleContact" class="btn btn-contact">Contact Me</button>
    </div>
    <transition name="fade">
      <div v-if="showContact" class="contact-layer" @click.self="toggleContact">
        <div class="contact-content">
          <h2>Contact Me</h2>
          <ul>
            <li><a :href="links.whatsapp" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
            <li><a :href="links.linkedin" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a :href="links.github" target="_blank"><i class="fab fa-github"></i></a></li>
            <li><a :href="links.instagram" target="_blank"><i class="fab fa-instagram"></i></a></li>
            <li><a :href="links.twitter" target="_blank"><i class="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'HeroMenu',
  data() {
    return {
      showContact: false,
      links: {
        whatsapp: 'https://wa.me/081324327350',
        linkedin: 'https://www.linkedin.com/in/zidnyilman2/',
        github: 'https://github.com/ZidnyIlmanN',
        instagram: 'https://www.instagram.com/jidniin/',
        twitter: 'https://twitter.com/lilmann02'
      }
    }
  },
  methods: {
    downloadCV() {
      window.open('https://drive.google.com/file/d/1PiAzcLVfApA-AqM5AYil2miILikrBBFh/view?usp=drive_link', '_blank');
    },
    toggleContact() {
      this.showContact = !this.showContact;
    }
  },
  mounted() {
    const elements = document.querySelectorAll('.animated-text, .animated-img');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('fade-in');
      }, index * 300); // delay each element's animation
    });
  }
}
</script>


<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

section {
  padding: 100px 18%;
  color: #ffffff;
}

.home {
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  padding-bottom: 60px;
}

.home-text h1 {
  margin: 10px 0 25px;
  font-size: 2.7rem;
  line-height: 1;
  font-weight: 600;
  position: relative;
  z-index: 1;
  display: inline-block;
}

.home-text h1::before {
  content: '';
  width: 0%;
  height: 100%;
  background: #c16d00;
  position: absolute;
  top: 0;
  left: 0;
  animation: animate 5s infinite;
  border-right: 5px solid #ffffff;
}

@keyframes animate {
  0% {
    width: 100%;
    z-index: -1;
  }
  50% {
    width: 0%;
    z-index: -1;
  }
  51% {
    width: 0%;
    z-index: -1;
  }
  100% {
    width: 100%;
    z-index: -1;
  }
}

.home-text h5 {
  margin-bottom: 23px;
  font-size: 1.9rem;
  font-weight: 500;
}

span {
  color: #c16d00;
}

.home-text h3 {
  color: var(--primary);
  font-size: 2rem;
  font-weight: 500;
}

.home-text p {
  font-size: 1.5rem;
  color: #c0c0c0;
  line-height: 2.2rem;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 20px 0;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.btn {
  padding: 10px 20px;
  background-color: transparent;
  color: #c16d00;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}

.btn-download {
  color: #fff;
}

.btn:hover {
  background-color: #c16d00;
  color: white;
}

.aing img {
  width: 100%;
  max-width: 600px;
  height: auto;
}

.contact-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fade-in 0.3s ease;
}

.contact-content {
  background: var(--bg);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  width: 80%;
  max-width: 500px;
}

.contact-content h2 {
  margin-bottom: 20px;
  color: #c16d00;
}

.contact-content ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.contact-content ul li {
  margin: 10px 0;
}

.contact-content ul li a {
  color: white;
  text-decoration: none;
  font-size: 2rem;
}

.contact-content ul li a:hover {
  color: #a55d00;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.animated-text{
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out;
}

.animated-img {
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.fade-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 1366px) {
  .home-text h3 {
    font-size: 1.5rem;
  }
  .home-text h1 {
    font-size: 2.5rem;
  }
  .home-text h5 {
    font-size: 1.6rem;
  }
  .home-text p {
    font-size: 1.3rem;
  }
  .aing {
    width: 90%;
    margin: 0 auto;
  }
  .contact-content {
    font-size: 1.5rem;
  }
  .buttons {
    gap: .5rem;
    margin: 1rem 0;
    bottom: 20px;
    left: 50%;
  }
}

@media (max-width: 768px) {
  .home {
    grid-template-columns: 1fr;
    text-align: center;
    font-size: 55%;
  }
  .home-text h3 {
    font-size: 1.2rem;
  }
  .home-text h1 {
    font-size: 1.7rem;
  }
  .home-text h5 {
    font-size: 1.3rem;
  }
  .home-text p {
    font-size: 1rem;
  }
  .aing {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 7rem;
  }
  .buttons {
    flex-direction: column;
    position: absolute;
    bottom: 1rem; /* Mengurangi jarak ke bawah halaman */
    left: 50%;
    transform: translateX(-50%);
  }
  .buttons button {
    width: auto;
    padding: 10px 15px;
    margin-bottom: 5px;
  }
  .contact-content {
    font-size: 1.2rem;
  }
}
</style>
