// Sayfa yüklendiğinde çalışacak animasyonlar
document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scroll (Yumuşak kaydırma)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Reveal (Aşağı indikçe beliren elemanlar)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Animasyonlanacak elemanları seç
    const hiddenElements = document.querySelectorAll('.project-card, .section-header, .footer-content');
    
    hiddenElements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });
});