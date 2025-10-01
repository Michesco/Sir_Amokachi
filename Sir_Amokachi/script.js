document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Le site Barber • Hair Artist est prêt !");

    // Animation simple du titre des services au chargement de la page
    const serviceTitle = document.querySelector('.pricing h2');
    if (serviceTitle) {
        serviceTitle.style.transition = 'opacity 1s, transform 1s';
        serviceTitle.style.opacity = '0';
        
        setTimeout(() => {
            serviceTitle.style.opacity = '1';
            serviceTitle.style.transform = 'translateY(0)';
        }, 100);
        serviceTitle.style.transform = 'translateY(-20px)'; 
    }
});