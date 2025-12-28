document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Intersection Observer
    const observerOptions = {
        threshold: 0.15,
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