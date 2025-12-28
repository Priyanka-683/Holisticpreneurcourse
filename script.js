document.addEventListener('DOMContentLoaded', () => {
    
    // 1. HERO ANIMATIONS (Page load hote hi turant chalega)
    const heroElements = document.querySelectorAll('.hero-content > *, .hero-visual');
    
    heroElements.forEach((el, i) => {
        // Shuruat mein hidden rakhein (Safe side)
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";

        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 150 * i);
    });

    // 2. MASTERY SCROLL ANIMATION (Jab scroll karke card tak pahunchenge)
    const masteryCards = document.querySelectorAll('.m-card');
    
    const observerOptions = {
        threshold: 0.15, // Jab 15% card dikhe tab trigger ho
        rootMargin: "0px 0px -50px 0px"
    };

    const masteryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered effect: cards ek ke baad ek aayenge
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100); 
                
                // Ek baar animation hone ke baad observe karna band karein
                masteryObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    masteryCards.forEach(card => {
        masteryObserver.observe(card);
    });

    // 3. FLOATING BADGES (Optional: Parallax effect for Hero Badges)
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        document.querySelectorAll('.glass-tag, .glass-badge').forEach(tag => {
            tag.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});















document.addEventListener('DOMContentLoaded', () => {
    const pCards = document.querySelectorAll('.pillar-card');
    
    const pObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered animation: delay based on index
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 50); 
                pObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    pCards.forEach(card => pObserver.observe(card));
});














const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

const footer = document.querySelector('.main-footer');
footer.style.opacity = "0";
footer.style.transform = "translateY(20px)";
footer.style.transition = "all 0.8s ease";
footerObserver.observe(footer);















const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            ctaObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.cta-card').forEach(card => {
    ctaObserver.observe(card);
});














const journeyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach(item => {
    journeyObserver.observe(item);
});
























document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Lesson Checkmark Toggle
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.check-icon');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('fa-circle-check');
            icon.classList.toggle('fa-check-circle');
            
            if(icon.classList.contains('fas')) {
                icon.style.color = "#2ecc71";
            } else {
                icon.style.color = "#e0e0e0";
            }
        });
    });
});


















document.addEventListener("DOMContentLoaded", () => {
    console.log("Script Loaded!"); // F12 daba kar Console mein dekhein ye likha hai ya nahi

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("Element visible hogya!"); 
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
});










document.addEventListener("DOMContentLoaded", () => {
    console.log("Pillar 3 Loaded");

    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        threshold: 0.1, // Element ka 10% dikhte hi trigger hoga
        rootMargin: "0px 0px -50px 0px" // Bottom se thoda pehle trigger
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Ek baar animate hone ke baad observation band
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));

    // Checkmark Toggle logic
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.check-icon');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('fa-circle-check');
            icon.classList.toggle('fa-check-circle');
            
            if(icon.classList.contains('fas')) {
                icon.style.color = "#2ecc71";
            } else {
                icon.style.color = "#e0e0e0";
            }
        });
    });
});










document.addEventListener("DOMContentLoaded", () => {
    console.log("Pillar 4 Script Loaded");

    const observerOptions = {
        threshold: 0.1, // Element ka 10% hissa dikhte hi trigger
        rootMargin: "0px 0px -20px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Force animation for elements already in viewport on load
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('active');
            }
        });
    }, 100);

    // Toggle Checkmark
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.check-icon');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('fa-circle-check');
            icon.classList.toggle('fa-check-circle');
            
            if(icon.classList.contains('fas')) {
                icon.style.color = "#2ecc71";
            } else {
                icon.style.color = "#e0e0e0";
            }
        });
    });
});














document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Toggle Checkmark Logic
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.check-icon');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('fa-circle-check');
            icon.classList.toggle('fa-check-circle');
            
            if(icon.classList.contains('fas')) {
                icon.style.color = "#2ecc71";
            } else {
                icon.style.color = "#e0e0e0";
            }
        });
    });
});















document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.05 }); // Halka sa dikhte hi animate ho jaye

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Toggle Checkmark
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.check-icon');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('fa-circle-check');
            icon.classList.toggle('fa-check-circle');
            
            if(icon.classList.contains('fas')) {
                icon.style.color = "#2ecc71";
            } else {
                icon.style.color = "#e0e0e0";
            }
        });
    });
});








document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Logic
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Ek baar dikhne ke baad trigger rokna (Optional)
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Toggle Checkmark
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.check-icon');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('fa-circle-check');
            icon.classList.toggle('fa-check-circle');
            
            if(icon.classList.contains('fas')) {
                icon.style.color = "#2ecc71";
            } else {
                icon.style.color = "#e0e0e0";
            }
        });
    });
});














document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Logic
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Toggle Checkmark Logic
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.check-icon');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('fa-circle-check');
            icon.classList.toggle('fa-check-circle');
            
            if(icon.classList.contains('fas')) {
                icon.style.color = "#2ecc71";
            } else {
                icon.style.color = "#e0e0e0";
            }
        });
    });
});








document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Logic using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Checkmark Toggle Logic
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.check-icon');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('fa-circle-check');
            icon.classList.toggle('fa-check-circle');
            
            if(icon.classList.contains('fas')) {
                icon.style.color = "#2ecc71"; // Green color on click
            } else {
                icon.style.color = "#e0e0e0"; // Default gray
            }
        });
    });
});
















document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Logic
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Checkmark Toggle Logic
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.check-icon');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('fa-circle-check');
            icon.classList.toggle('fa-check-circle');
            
            if(icon.classList.contains('fas')) {
                icon.style.color = "#2ecc71";
            } else {
                icon.style.color = "#e0e0e0";
            }
        });
    });
});












document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Logic
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Checkmark Toggle Logic
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.check-icon');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('fa-circle-check');
            icon.classList.toggle('fa-check-circle');
            
            if(icon.classList.contains('fas')) {
                icon.style.color = "#2ecc71";
            } else {
                icon.style.color = "#e0e0e0";
            }
        });
    });
});








document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Logic
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Lesson Item Click (Checkmark Toggle)
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.check-icon');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('fa-circle-check');
            icon.classList.toggle('fa-check-circle');
            
            if(icon.classList.contains('fas')) {
                icon.style.color = "#2ecc71"; // Success Green
            } else {
                icon.style.color = "#e0e0e0"; // Default Gray
            }
        });
    });
});









document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Logic
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Interactive Checkmarks
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.check-icon');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('fa-circle-check');
            icon.classList.toggle('fa-check-circle');
            
            if(icon.classList.contains('fas')) {
                icon.style.color = "#2ecc71";
            } else {
                icon.style.color = "#e0e0e0";
            }
        });
    });
});







document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Interactive Checkmarks Logic
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.check-icon');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('fa-circle-check');
            icon.classList.toggle('fa-check-circle');
            
            if(icon.classList.contains('fas')) {
                icon.style.color = "#2ecc71"; // Success Green
            } else {
                icon.style.color = "#e0e0e0"; // Reset to Gray
            }
        });
    });
});








document.addEventListener("DOMContentLoaded", () => {
    // 1. Button ko select karein
    const exploreBtn = document.querySelector('.btn-explore');
    // 2. Target section ko select karein
    const targetSection = document.getElementById('pillars-section');

    if (exploreBtn && targetSection) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Default behavior rokhne ke liye
            
            targetSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            
            console.log("Scrolling to Pillars..."); // Browser console mein check karein
        });
    } else {
        console.error("Button ya Section nahi mila! Check IDs and Classes.");
    }
});










