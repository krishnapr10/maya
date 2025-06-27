
// 🔄 Mobile Menu Toggle Script
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('mobileToggle');
    const toggleIcon = document.getElementById('toggleIcon');
    const mobileNav = document.getElementById('mobileNav');

    toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        toggleIcon.src = mobileNav.classList.contains('active')
            ? 'https://img.icons8.com/ios-filled/50/ffffff/delete-sign.png'
            : 'https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png';
        toggleIcon.classList.toggle('rotate');
    });

    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
            toggleIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png';
            toggleIcon.classList.remove('rotate');
        });
    });

    document.addEventListener('click', function (e) {
        if (!mobileNav.contains(e.target) && !toggleBtn.contains(e.target)) {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
            toggleIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png';
            toggleIcon.classList.remove('rotate');
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
            toggleIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png';
            toggleIcon.classList.remove('rotate');
        }
    });
});

// 🎞️ Slider with Dot Navigation
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.slider-dot');
    let currentIndex = 0;
    const slideCount = 3;
    let slideInterval;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 33.33}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startSlider();
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'));
            updateSlider();
            resetInterval();
        });
    });

    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseleave', startSlider);

    startSlider();
});
