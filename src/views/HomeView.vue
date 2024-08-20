<template>
    <div class="home">
        <NavbarMenu />
        <HeroMenu />
        <EducationMenu />
        <SkillsMenu />
        <PortofolioMenu />
        <ContactMenu />
    </div>
</template>

<script>
// @ is an alias to /src
import NavbarMenu from '@/components/HomePage/NavbarMenu.vue'
import HeroMenu from '@/components/HomePage/Hero.vue'
import EducationMenu from '@/components/HomePage/Education.vue' 
import SkillsMenu from '@/components/HomePage/Skills.vue'
import PortofolioMenu from '@/components/HomePage/Portofolio.vue'
import ContactMenu from '@/components/HomePage/Contact.vue'

export default {
    name: 'HomeView',
    components: {
        NavbarMenu,
        HeroMenu,
        EducationMenu,
        SkillsMenu,
        PortofolioMenu,
        ContactMenu
    },
    mounted() {
    this.updatePageTitle('znafian');
    },
    methods: {
        updatePageTitle(newTitle) {
            document.title = newTitle;
        }
    }
}
</script>

<style>
:root {
    --primary: #c16d00;
    --bg: #222831;
    --primary: #c16d00;
    --bg: #222831;
    --accent: #ffb347;
    --secondary: #393e46;
    --text-light: #eeeeee;
    --text-dark: #222831;
    --width: 100px;
    --height: 50px;
    --quantity: 8;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    scroll-behavior: smooth;
    text-decoration: none;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--bg);
    min-height: 2000px;
}
::-webkit-scrollbar{
    width: 10px;
}

::-webkit-scrollbar-track{
    background: var(--bg);
}

::-webkit-scrollbar-thumb{
    background: #c16d00;
    border-radius: 10px;
}
</style>
