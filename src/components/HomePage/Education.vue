<template>
  <section class="education" id="about">
    <div class="heading">
      <p>About</p>
      <div class="words">
        <span>Me</span>
        <span>Znafian</span>
      </div>
    </div>
    <div class="heading-2">
      <h2>Education Background</h2>
    </div>
    <div class="container animate" ref="educationSection">
      <div class="education-text">
        <div>
          <img class="education-img" :src="require('@/assets/Lambang ITS.png')" alt="Logo" />
        </div>
        <h3>Sepuluh Nopember Institute of Technology</h3>
        <h2>2022-Now</h2>
        <p>Currently, I am a student at Sepuluh Nopember Institute of Technology (ITS), majoring in Information Technology, class of 2022. I am currently in my 5th semester and continue to strive to develop my skills and knowledge in the field of information technology.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationMenu',
  mounted() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    this.$refs.educationSection.querySelectorAll('.education-text').forEach(container => {
      observer.observe(container);
    });
  },
}
</script>

  
<style scoped>
.container .education-text {
  opacity: 0;
  transform: translateY(20px);
}

.container .education-text.animate {
  opacity: 1;
  transform: translateY(0);
  transition: transform 2s, opacity 2s;
}

.education {
  background-color: #393E46;
  padding: 100px 18%;
  color: #ffffff;
}

.education img{
  width: 150px;
  height: 150px;
  border-radius: 100px;
  margin-bottom: 1rem;
  padding: .5rem;
  animation: pulse 3s infinite linear;
}

@keyframes pulse {
  0% { box-shadow: 0 0 5px rgba(165, 209, 249, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0,0,0,0.5); }
  51% { box-shadow: 0 0 20px rgba(0,0,0,0.5); }
  100% { box-shadow: 0 0 5px rgba(165, 209, 249, 0.5); }
}
.heading {
  display: flex;
  justify-content: center;
  box-sizing: content-box;
  height: 2rem; 
}

.words{
  overflow: hidden;
}

.heading p {
  color: var(--primary);
  font-size: 2rem;
  font-weight: 600;
  display: flex;
}
.heading .words span {
  color: var(--primary);
  font-size: 2rem;
  font-weight: 600;
  display: block;
  height: 100%;
  padding-left: 8px;
  animation: spin_words 4s infinite;
}
@keyframes spin_words {
  10%{
    transform: translateY(-110%);
  }
  50%{
    transform: translateY(-100%);
  }
  10%{
    transform: translateY(-110%);
  }
}
  
.heading-2 {
  text-align: center;
}
.heading-2 h2 {
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 4rem;
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
  color: rgb(165, 209, 249);
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
  margin: 0.5rem 0 .5rem;
}
@media (max-width: 1366px) {
  .heading p{
    font-size: 1.8rem;
  }
  .heading .words span {
    font-size: 1.8rem;
  }
  .heading-2 h2 {
    font-size: 2.2rem;
  }
  
  .education img{
    width: 125px;
    height: 125px;
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
  .heading p{
    font-size: 1.6rem;
  }
  .heading .words span {
    font-size: 1.6rem;
  }
  .heading-2 h2 {
    font-size: 2rem;
  }
  .education img{
    width: 100px;
    height: 100px;
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
  .heading p{
    font-size: 1.4rem;
  }
  .heading .words span {
    font-size: 1.4rem;
  }
  .heading-2 h2 {
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
