<template>
    <section class="education" id="about">
      <div class="heading">
        <span>Tentang Saya</span>
        <h2>Pendidikan Terakhir - Saat Ini</h2>
      </div>
      <div class="container">
        <div class="education-img">
          <!-- <i class="fa-solid fa-school" alt=""></i> -->
        </div>
        <div class="education-text">
          <i class="fa-solid fa-school" alt=""></i>
          <h3>SMAN 3 Subang</h3>
          <h2>2019-2022</h2>
          <p>Sebelumnya, saya belajar selama 3 tahun di SMAN 3 Subang, Jawa Barat. Di sana saya mengambil jurusan IPA, mulai sekolah pada tahun 2019 dan lulus pada tahun 2022.</p>

          <i class="fa-solid fa-university" alt=""></i>
          <h3>Institut Teknologi Sepuluh Nopember</h3>
          <h2>2022-Now</h2>
          <p>Sekarang saya adalah mahasiswa dari Institut Teknologi Sepuluh Nopember (ITS), jurusan Teknologi Informasi, angkatan 2022. Saat ini saya berada di semester 5 dan terus berupaya untuk mengembangkan keterampilan serta pengetahuan saya di bidang teknologi informasi.</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'EducationMenu'
  }
  </script>
  
  <style scoped>
  .education {
    background-color: #393E46;
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
  
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }
  
  .education-text {
    flex: 1 1 20rem;
    text-align: center;
  }
  
  .education-text i {
    font-size: 5rem;
    text-shadow: 1px 1px 10px rgb(41, 41, 41);
    color: #c16d00;
    margin: 0.5rem 0 1rem;
  }
  
  .education-text h3 {
    font-size: 1.8rem;
    margin-bottom: .3rem;
  }

  .education-text h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  
  .education-text p {
    font-size: 1.4rem;
    color: #c0c0c0;
    line-height: 2rem;
    margin: 0.5rem 0 2rem;
  }
  @media (max-width: 1366px) {
    .heading span {
      font-size: 1.8rem;
    }
    .heading h2 {
      font-size: 2.2rem;
    }
    .education-text h3 {
      font-size: 1.6rem;
    }
    .education-text h2 {
      font-size: 1rem;
    }
    .education-text p {
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
    .education-text h3 {
      font-size: 1.4rem;
    }
    .education-text h2 {
      font-size: .8rem;
    }
    
    .education-text p {
      font-size: 1rem;
    }
    .container {
      flex-direction: column;
      align-items: center;
    }
}
  
  @media (max-width: 450px) {
    .heading span {
      font-size: 1.4rem;
    }
  
    .heading h2 {
      font-size: 2rem;
    }
    .education-text h3 {
    font-size: 1.2rem;
  }
    .education-text h2 {
      font-size: .7rem;
    }
    .education-text p {
      font-size: .8rem;
    }
}
</style>
