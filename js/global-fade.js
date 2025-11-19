document.addEventListener("DOMContentLoaded", () => {
    const fadeEls = document.querySelectorAll(".fade-in");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // trigger only once
            }
        });
    }, { threshold: 0.2 }); // triggers when 20% of the element is visible

    fadeEls.forEach(el => observer.observe(el));
});
