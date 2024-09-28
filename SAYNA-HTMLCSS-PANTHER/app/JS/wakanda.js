document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les éléments à animer
    const elements = document.querySelectorAll('.fade-in-slide');
  
    // Fonction pour vérifier si un élément est visible
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1 // Modifier ce seuil si nécessaire
    });
  
    // Observer chaque élément
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const floatingContainer = document.getElementById('floating-container');
    const socialIcons = floatingContainer.querySelector('.social-icons');
    const purpleStripes = document.querySelectorAll('.stripe');

    const updatePosition = () => {
        const scrollY = window.scrollY || window.pageYOffset;

        // Défilement des icônes et des traits
        floatingContainer.style.top = `${Math.max(scrollY * 0.2, 0)}px`;

        // Animation des traits violets
        purpleStripes.forEach(stripe => {
            stripe.style.top = `${Math.max(scrollY * 0.5, 0)}px`;
        });
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition(); // Initial update
});