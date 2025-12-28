document.addEventListener("DOMContentLoaded", () => {
    // Animate Hero Elements
    const heroElements = document.querySelectorAll('.animate-up');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transition = "all 0.8s ease-out";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 200);
    });

    // Staggered Card Animation
    const cards = document.querySelectorAll('.animate-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
        }, 600 + (index * 100)); // Starts after hero animations
    });
});
