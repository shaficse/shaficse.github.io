'use strict';

// Enhance native navigation without taking over anchor URLs or browser history.
const isJapanese = document.documentElement.lang === 'ja';
const menuLabels = isJapanese ? ['ナビゲーションを開く', 'ナビゲーションを閉じる'] : ['Open navigation', 'Close navigation'];
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = [...document.querySelectorAll('.nav-link')];
const mobileViewport = window.matchMedia('(max-width: 1000px)');

function setMenuOpen(open, restoreFocus = false) {
    navMenu.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', menuLabels[open ? 1 : 0]);
    if (restoreFocus) navToggle.focus();
}

navToggle.addEventListener('click', () => {
    setMenuOpen(navToggle.getAttribute('aria-expanded') !== 'true');
});
navLinks.forEach(link => link.addEventListener('click', () => {
    setMenuOpen(false);
    if (mobileViewport.matches) {
        const target = document.getElementById(link.hash.slice(1));
        if (target) {
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
        }
    }
}));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false, true);
    }
});
document.addEventListener('click', event => {
    if (!navbar.contains(event.target)) setMenuOpen(false);
});
navbar.addEventListener('focusout', event => {
    if (!navbar.contains(event.relatedTarget)) setMenuOpen(false);
});
mobileViewport.addEventListener('change', () => {
    const focusWillHide = mobileViewport.matches && navMenu.contains(document.activeElement);
    setMenuOpen(false, focusWillHide);
});
navbar.classList.add('nav-ready');

// Each secondary section belongs to the closest primary navigation destination.
const sectionGroups = {
    about: 'about', education: 'about', experience: 'experience', projects: 'projects',
    publications: 'publications', collaborations: 'publications', skills: 'publications', contact: 'contact'
};
const sections = [...document.querySelectorAll('main > section[id]')];
let scrollQueued = false;
function updateActiveLink() {
    let current = '';
    const offset = navbar.offsetHeight + 45;
    for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) current = sectionGroups[section.id] || '';
    }
    navLinks.forEach(link => {
        const active = link.hash === `#${current}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
    });
    scrollQueued = false;
}
window.addEventListener('scroll', () => {
    if (!scrollQueued) {
        scrollQueued = true;
        window.requestAnimationFrame(updateActiveLink);
    }
}, { passive: true });
window.addEventListener('resize', updateActiveLink);
updateActiveLink();

// Topic filters and text search work together, with an announced result count.
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const projectCards = [...document.querySelectorAll('.project-card')];
const projectSearch = document.getElementById('projectSearch');
const projectResults = document.getElementById('projectResults');
const projectEmpty = document.getElementById('projectEmpty');
const searchableProjects = projectCards.map(card => ({
    card,
    categories: card.dataset.category.split(/\s+/),
    text: card.textContent.toLocaleLowerCase()
}));
let activeFilter = 'all';
function filterProjects() {
    const terms = projectSearch.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let visibleCount = 0;
    searchableProjects.forEach(({ card, categories, text }) => {
        const visible = (activeFilter === 'all' || categories.includes(activeFilter)) && terms.every(term => text.includes(term));
        card.hidden = !visible;
        if (visible) visibleCount++;
    });
    projectResults.textContent = isJapanese ? `${projectCards.length}件中${visibleCount}件のプロジェクトを表示` : `Showing ${visibleCount} of ${projectCards.length} projects`;
    projectEmpty.hidden = visibleCount !== 0;
}
filterButtons.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => {
        const selected = item === button;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
    });
    filterProjects();
}));
projectSearch.addEventListener('input', filterProjects);
document.querySelector('.project-tools').hidden = false;
projectResults.hidden = false;
filterProjects();
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Language links are real pages, so switching and bookmarks also work without JavaScript.
function updateLanguageLinks() {
    document.querySelectorAll('.language-switch a').forEach(link => {
        const url = new URL(link.href);
        url.hash = window.location.hash;
        link.href = url.href;
    });
}
window.addEventListener('hashchange', updateLanguageLinks);
updateLanguageLinks();
