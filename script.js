// Scroll suave para los enlaces del menú de navegación
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");

        // Clonar elementos para efecto continuo
        Array.from(scrollerInner.children).forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });

        // Ajustar la velocidad de la animación basada en el atributo data-speed
        const speed = scroller.getAttribute("data-speed");
        if (speed === 'fast') {
            scrollerInner.style.animationDuration = '20s'; // Rápido
        } else if (speed === 'slow') {
            scrollerInner.style.animationDuration = '15s'; // Lento
        } else {
            scrollerInner.style.animationDuration = '10s'; // Por defecto
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.section');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Get the target section from the button's data attribute
            const target = button.getAttribute('data-target');
            const targetSection = document.getElementById(target);

            // Show the target section
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    // Remove all show and border classes
    removeBorder();
    removeShow();
    // Add border to current tab item
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}

// Remove show class from all content items
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}

// Listen for tab item click
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});


/* ==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.sidebar');

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('body nav ul li a');

window.onscroll = () => {

    /*==================== sticky navbar ====================*/

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
};


// Seleccionar los elementos del menú móvil
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Agregar un evento de clic para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
    if (mobileMenu.style.display === 'none') {
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
    }
});



// script 2

var typed = new Typed(".multiple-text", {
    strings: ["a Data Engineer", "a Sytem Engineering Student", "from Argentina"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const btnlearning = document.getElementById("learning");