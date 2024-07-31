<template>
    <section class="portfolio" id="portfolio">
      <div class="heading">
        <h3>Portofolio</h3>
        <h2>Karya Luar Biasa Saya</h2>
        <p>Berikut adalah beberapa karya yang telah saya buat</p>
      </div>
  
      <div class="portfolio-content">
        <div class="col" v-for="(work, index) in works" :key="index">
          <img :src="work.imgSrc" :alt="work.title">
          <div class="layer">
            <h3>{{ work.title }}</h3>
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
          { imgSrc: require('@/assets/Karya1.jpg'), title: 'Desain Grafis' },
          { imgSrc: require('@/assets/Karya2.jpg'), title: 'Desain Grafis' },
          { imgSrc: require('@/assets/Karya3.jpg'), title: 'Desain Grafis' },
          { imgSrc: require('@/assets/Karya4.jpg'), title: 'Desain Grafis' },
          { imgSrc: require('@/assets/Karya5.jpg'), title: 'Desain Grafis' },
          { imgSrc: require('@/assets/Karya6.jpg'), title: 'Desain Grafis' },
          { imgSrc: require('@/assets/Karya7.jpg'), title: 'Desain Grafis' },
          { imgSrc: require('@/assets/Karya8.jpg'), title: 'Desain Grafis' }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
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
  }
  
  .heading p {
    font-size: 1.4rem;
    color: #c0c0c0;
  }
  
  .portfolio-content {
    overflow-x: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    grid-gap: 2rem;
    align-items: center;
    margin-top: 5rem;
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
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .col:hover .layer {
    opacity: 1;
  }
  
  .layer h3 {
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: 500;
    transition: transform 0.3s, opacity 0.3s;
  }
  
  @media (max-width: 768px) {
    .portfolio {
      padding: 50px 10%;
    }
  
    .heading h3 {
      font-size: 1.8rem;
    }
  
    .heading h2 {
      font-size: 2rem;
    }
  
    .heading p {
      font-size: 1.2rem;
    }
  }
  
  @media (max-width: 450px) {
    .heading h3 {
      font-size: 1.6rem;
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
  