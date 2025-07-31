document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de política de privacidad cargada');

    // Efecto hover en secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
            this.style.transition = 'box-shadow 0.3s ease';
        });

        section.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
    });

    // Manejo del tema
    handleThemeChange();
    
    // Escuchar cambios en la preferencia de color
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);
});

function handleThemeChange() {
    const logoLight = document.querySelector('.logo-light');
    const logoDark = document.querySelector('.logo-dark');

    if(!logoLight || !logoDark) return; // Validación de elementos

    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        logoLight.style.display = 'none';
        logoDark.style.display = 'block';
    } else {
        logoLight.style.display = 'block';
        logoDark.style.display = 'none';
    }
}