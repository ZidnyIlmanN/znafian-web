<template>
  <section class="home" id="home">
    <div class="home-text">
      <h3>Hello, I'm</h3>
      <h1 class="animated-text">Zidny Ilman Nafi'an</h1>
      <h5>Students of <span>Sepuluh Nopember Institute of Technology</span></h5>
      <p>I am a Sepuluh Nopember Institute of Technology (ITS) student, majoring in Information Technology class of 2022</p>
    </div>
    <div class="aing">
      <img :src="require('@/assets/pict-home.png')" alt="pict-home" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroMenu'
}
</script>

<style scoped>
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

.aing img {
  width: 100%;
  max-width: 600px;
  height: auto;
}

@media (max-width: 1366px) {
  .home-text h3{
    font-size: 1.5rem;
  }
  .home-text h1{
    font-size: 2.5rem;
  }
  .home-text h5{
    font-size: 1.6rem;
  }
  .home-text p{
    font-size: 1.3rem;
  }
  .home-text h1::before {
  height: 100%;
  .aing {
    width: 90%;
    margin: 0 auto;
  }
}
}

@media (max-width: 768px) {
  .home {
    grid-template-columns: 1fr;
    text-align: center;
    font-size: 55%;
  }
  .home-text h3{
    font-size: 1.2rem;
  }
  .home-text h1{
    font-size: 1.7rem;
  }
  .home-text h5{
    font-size: 1.3rem;
  }
  .home-text p{
    font-size: 1rem;
  }
  .home-text h1::before {
  height: 100%;
}
  .aing {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
