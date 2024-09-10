// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Toggle between light and dark themes
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
}

// Animate header on load
gsap.from("header", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out"
});

// Animate main sections on scroll
gsap.from("main section", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "main",
        start: "top 80%"
    }
});

// Animate each project and skill item on scroll
gsap.utils.toArray(".project-item, .skill-item").forEach(item => {
    gsap.from(item, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
        }
    });
});

// Animate skill bars to grow to their specified width
gsap.utils.toArray(".skill-bar").forEach(bar => {
    gsap.to(bar, {
        width: bar.dataset.width,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: bar,
            start: "top 80%",
        }
    });
});

// Back to top button visibility and scroll functionality
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});
backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typewriter effect for changing titles
const typewriter = document.getElementById('typewriter');
const phrases = ['Frontend Developer', 'UI/UX Enthusiast', 'Tech Explorer'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWrite() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeWrite, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeWrite, 500);
    } else {
        setTimeout(typeWrite, isDeleting ? 50 : 100);
    }
}

typeWrite();