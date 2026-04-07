const menuBtn = document.getElementById('menu-btn');
const megaMenu = document.getElementById('main-dropdown');
const overlay = document.getElementById('menu-overlay');

menuBtn.addEventListener('click', () => {
    const isActive = megaMenu.classList.toggle('is-active');
    overlay.classList.toggle('is-active');
});

// Arxa fona klikləyəndə menyunu bağla
overlay.addEventListener('click', () => {
    megaMenu.classList.remove('is-active');
    overlay.classList.remove('is-active');
});