// Funcionalidad para los tabs
function openTab(tabName) {
    // Oculta todos los contenidos de tabs
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Remover clase active de todos los botones
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Mostrar el tab específico y activar el botón
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Personalización en tiempo real
document.addEventListener('DOMContentLoaded', function() {
    const bgColorInput = document.getElementById('bgColor');
    const nameColorInput = document.getElementById('nameColor');
    const accentColorInput = document.getElementById('accentColor');
    const demoCard = document.getElementById('demoCard');
    
    // Cambiar color de fondo del body
    bgColorInput.addEventListener('input', function() {
        document.body.style.background = `linear-gradient(135deg, ${this.value} 0%, ${this.value}99 100%)`;
    });
    
    // Cambiar color del nombre
    nameColorInput.addEventListener('input', function() {
        const nameElement = demoCard.querySelector('.nombre');
        nameElement.style.color = this.value;
    });
    
    // Cambiar color de acento
    accentColorInput.addEventListener('input', function() {
        const nameElement = demoCard.querySelector('.nombre');
        const contactElement = demoCard.querySelector('.contacto');
        
        nameElement.style.borderBottomColor = this.value;
        contactElement.style.borderLeftColor = this.value;
    });
    
    // Efecto hover mejorado para la tarjeta
    demoCard.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    demoCard.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
