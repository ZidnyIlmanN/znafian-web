<template>
    <section class="contact" id="contact">
        <div class="social-text">
            <h3>Let's Connect!</h3>
            <p>Want to work together? Find me on these platforms:</p>
        </div>
        <div class="social">    
            <a href="https://www.linkedin.com/in/zidny-ilman-2648b9248" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/jidniin/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com/lilmann02" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
            <a href="https://wa.me/081324327350" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
        </div>
        <div class="links">
        <!-- Tambahkan link tambahan jika ada -->
        </div>
        <div class="copyright">
            <p>&#169;<span>2024 ZNAFIAN</span> All rights reserved.</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactMenu'
}
</script>

<style scoped>
.contact {
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 0;
}

.contact .social-text h3 {
    color: var(--primary);
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 3rem;
}

.contact .social-text p {
    color: white;
    max-width: 500px;
    margin: 1rem auto;
    line-height: 28px;
    font-size: 1rem;
}

.social {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    width: 100%;
}

.social a {
    font-size: 2rem;
    color: #ffffff;
    margin: 0 1rem;
    transition: color 0.3s ease;
}

.social a:hover {
    color: var(--primary);
}

.links {
    margin: 1rem 0;
}

.links a {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    padding: 1rem;
}

.links a:hover {
    color: var(--primary);
}

.copyright {
    margin-top: 1rem;
    font-size: 1rem;
    color: #aaa;
}
@media (max-width: 1366px) {
    .contact .social-text h3{
        font-size: 1.6rem;
    }
    .contact .social-text p {
        font-size: .8rem;
        margin: .8rem auto;
    }
    .copyright {
        font-size: .8rem;
    }
    .social {
        margin: 1.5rem 0;
        width: 90%;
    }
}
@media (max-width: 768px) {
    .contact .social-text h3{
        font-size: 1.4rem;
    }
    .contact .social-text p {
        font-size: .7rem;
        margin: .6rem auto;
    }
    .copyright {
        font-size: .6rem;
    }
    .social {
        margin: 1rem 0;
        width: 80%;
    }
}
</style>
