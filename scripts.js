window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none';
            loader.remove();
        }, 3000);
    }
});

// Email Form Handler
document.addEventListener("DOMContentLoaded", () => {
    const emailForm = document.getElementById("emailForm")
    const emailInput = document.getElementById("emailInput")
    const successMessage = document.getElementById("successMessage")

    emailForm.addEventListener("submit", (e) => {
        e.preventDefault()

        const email = emailInput.value.trim()

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.")
            return
        }

        // Hide form and show success message
        emailForm.style.display = "none"
        successMessage.style.display = "block"

        // Here you would typically send the email to your backend
        console.log("Email submitted:", email)

        // Reset after 5 seconds
        setTimeout(() => {
            emailForm.style.display = "flex"
            successMessage.style.display = "none"
            emailInput.value = ""
        }, 5000)
    })

    // Footer Newsletter Form Handler
    const footerNewsletterForm = document.getElementById("footerNewsletterForm")
    footerNewsletterForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const email = e.target.querySelector('.newsletter-input').value.trim()

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.")
            return
        }

        alert("Thank you for subscribing to our newsletter!")
        e.target.reset()
    })

    // Navigation functionality
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero Slider functionality
    const sliderTrack = document.getElementById("sliderTrack")
    const slides = sliderTrack.querySelectorAll(".slider-slide")
    const dots = document.querySelectorAll(".slider-dot")
    const prevBtn = document.getElementById("prevSlide")
    const nextBtn = document.getElementById("nextSlide")
    let currentSlide = 0

    function showSlide(index) {
        // Hide all slides
        slides.forEach((slide) => slide.classList.remove("active"))
        dots.forEach((dot) => dot.classList.remove("active"))

        // Show current slide
        slides[index].classList.add("active")
        dots[index].classList.add("active")
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length
        showSlide(currentSlide)
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length
        showSlide(currentSlide)
    }

    // Auto-advance slider
    setInterval(nextSlide, 4000)

    // Navigation button handlers
    nextBtn.addEventListener("click", nextSlide)
    prevBtn.addEventListener("click", prevSlide)

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlide = index
            showSlide(currentSlide)
        })
    })

    console.log("Asimply landing page loaded successfully! 🚀")
})



// Get elements
const btn = document.getElementById("backToTop");
const progressPath = document.getElementById("progressPath");

// Scroll listener
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scroll / height) * 100;

    // Show button after some scroll
    if (scroll > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }

    // Animate ring border
    progressPath.style.strokeDashoffset = 100 - scrollPercent;
});

// Smooth scroll to top
btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});