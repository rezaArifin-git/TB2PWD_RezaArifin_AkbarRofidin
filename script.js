document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            if (hamburger.classList.contains("active")) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        }));
    }

    const heroSection = document.querySelector(".hero-section");
    if (heroSection && !heroSection.id) {
        const bgSlides = document.querySelectorAll(".hero-bg-slide");
        if (bgSlides.length > 0) {
            const heroImages = [
                'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
                'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
                'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
                'https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2'
            ];
            let currentImageIndex = 0;
            let currentSlideIndex = 0;

            bgSlides[0].style.backgroundImage = `url('${heroImages[0]}')`;
            bgSlides[1].style.backgroundImage = `url('${heroImages[1]}')`;
            bgSlides[0].style.opacity = 1;
            bgSlides[1].style.opacity = 0;

            setInterval(() => {
                const activeSlide = bgSlides[currentSlideIndex];
                const nextSlide = bgSlides[(currentSlideIndex + 1) % bgSlides.length];
                currentImageIndex = (currentImageIndex + 1) % heroImages.length;
                nextSlide.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
                activeSlide.style.opacity = 0;
                nextSlide.style.opacity = 1;
                currentSlideIndex = (currentSlideIndex + 1) % bgSlides.length;
            }, 5000);
        }
    }

    const homeSwiperEl = document.querySelector(".home-gallery-swiper");
    if (homeSwiperEl) {
        new Swiper(homeSwiperEl, {
            effect: 'slide',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    const destinationSwiperEl = document.querySelector(".destination-gallery-swiper");
    if (destinationSwiperEl) {
        new Swiper(destinationSwiperEl, {
            effect: 'slide',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    const sewaButtons = document.querySelectorAll(".btn-sewa");
    if (sewaButtons.length > 0) {
        sewaButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const cardContent = btn.closest('.equipment-content');
                const itemName = cardContent.querySelector('h3').textContent;
                alert('Anda telah memilih untuk menyewa: ' + itemName);
            });
        });
    }
    
    const pendaftaranForm = document.getElementById("pendaftaran-form");
    if (pendaftaranForm) {
        pendaftaranForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Form berhasil dikirim! Terima kasih telah mendaftar.");
        });
    }

});