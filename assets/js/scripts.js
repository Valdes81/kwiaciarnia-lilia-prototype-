// Kwiaciarnia Lilia - Skrypt główny

// ========== BANNER SEZONOWY ==========
function initBanner() {
    const banner = document.getElementById('seasonalBanner');
    if (!banner) return;

    const settings = JSON.parse(localStorage.getItem('liliaBanner') || '{}');

    // Sprawdź czy banner jest włączony
    if (settings.enabled === false) {
        banner.style.display = 'none';
        return;
    }

    // Sprawdź czy użytkownik zamknął banner w tej sesji
    if (sessionStorage.getItem('bannerClosed') === 'true') {
        banner.style.display = 'none';
        return;
    }

    // Ustaw treść bannera
    const text = settings.text || '💐 Walentynki już 14 lutego! Zamów bukiet z wyprzedzeniem i zyskaj darmową dostawę';
    const linkText = settings.linkText || 'Zamów teraz →';
    const linkUrl = settings.linkUrl || 'sklep.html?category=occasional';

    banner.innerHTML = `${text} <a href="${linkUrl}">${linkText}</a> <button class="close-banner" onclick="closeBanner()">×</button>`;
}

function closeBanner() {
    const banner = document.getElementById('seasonalBanner');
    if (banner) {
        banner.style.display = 'none';
        sessionStorage.setItem('bannerClosed', 'true');
    }
}

// Inicjalizuj banner od razu (przed DOMContentLoaded)
initBanner();

document.addEventListener('DOMContentLoaded', function() {
    // Reinicjalizuj banner po załadowaniu DOM (na wypadek)
    initBanner();

    // Smooth scrolling dla kotwic
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Aktywna strona w nawigacji
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.fontWeight = 'bold';
            link.style.backgroundColor = '#d0d0d0';
            link.style.borderRadius = '4px';
        }
    });

    // Formularz - walidacja
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Formularz wysłany! (To jest prototyp - formularz nie jest funkcjonalny)');
            return false;
        });
    });

    // Zamykanie modali po naciśnięciu ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('[id*="Modal"]');
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                }
            });
        }
    });

    // Lazy loading dla placeholderów
    const placeholders = document.querySelectorAll('.placeholder');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.5s';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    placeholders.forEach(placeholder => {
        placeholder.style.opacity = '0';
        imageObserver.observe(placeholder);
    });

    // Hamburger menu dla mobile (responsive)
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');

        if (window.innerWidth <= 768) {
            if (!document.querySelector('.menu-toggle')) {
                const menuToggle = document.createElement('button');
                menuToggle.className = 'menu-toggle';
                menuToggle.innerHTML = '☰';
                menuToggle.style.cssText = 'display: block; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); color: #fff; font-size: 24px; cursor: pointer; position: absolute; right: 20px; top: 50%; transform: translateY(-50%); padding: 8px 12px; border-radius: 4px;';

                menuToggle.addEventListener('click', () => {
                    const isOpen = nav.style.display === 'block';
                    nav.style.display = isOpen ? 'none' : 'block';
                    menuToggle.innerHTML = isOpen ? '☰' : '✕';
                });

                header.querySelector('.container').appendChild(menuToggle);
                nav.style.display = 'none';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = '#111111';
                nav.style.padding = '20px';
                nav.style.borderTop = '1px solid rgba(255,255,255,0.1)';
                nav.style.zIndex = '99';
            }
        } else {
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) {
                menuToggle.remove();
                nav.style = '';
            }
        }
    };

    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    // Animacja liczb (jeśli są statystyki)
    const animateNumbers = () => {
        const numbers = document.querySelectorAll('[data-count]');
        numbers.forEach(num => {
            const target = parseInt(num.getAttribute('data-count'));
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    num.textContent = target;
                    clearInterval(timer);
                } else {
                    num.textContent = Math.floor(current);
                }
            }, 20);
        });
    };

    // Wywołaj animację jeśli elementy istnieją
    if (document.querySelector('[data-count]')) {
        animateNumbers();
    }

    // Placeholder dla funkcji galerii (nadpisywane w galeria.html)
    window.openModal = function(id) {
        const modal = document.getElementById('imageModal');
        if (modal) modal.style.display = 'block';
    };

    window.closeModal = function() {
        const modal = document.getElementById('imageModal');
        if (modal) modal.style.display = 'none';
    };

    // Funkcja filtrowania galerii
    window.filterGallery = function(category) {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    // Scroll do formularza
    window.scrollToForm = function() {
        const form = document.getElementById('formularz');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    };
});
