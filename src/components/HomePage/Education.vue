<template>
  <section class="education" id="about">
    <div class="heading">
      <span>About Me</span>
      <h2>Education Background - Present</h2>
    </div>
    <div class="container">
      <div class="education-img">
        <!-- <i class="fa-solid fa-school" alt=""></i> -->
      </div>
      <div class="education-text">
        <i class="fa-solid fa-school" alt=""></i>
        <h3>Senior High School 3 Subang</h3>
        <h2>2019-2022</h2>
        <p>Previously, I studied for 3 years at SMAN 3 Subang, West Java. There, I took the Science major, starting school in 2019 and graduating in 2022.</p>

        <i class="fa-solid fa-university" alt=""></i>
        <h3>Sepuluh Nopember Institute of Technology</h3>
        <h2>2022-Now</h2>
        <p>Currently, I am a student at Sepuluh Nopember Institute of Technology (ITS), majoring in Information Technology, class of 2022. I am currently in my 5th semester and continue to strive to develop my skills and knowledge in the field of information technology.</p>
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
  margin-bottom: 4rem;
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
