import * as particles from 'particles.js/particles';
import * as particlesApp from 'particles.js/demo/js/app';

const navbar = document.getElementById('navbar'),
      menuBtn = document.getElementById('mobile-cta'),
      sideMenu = document.querySelector('.side-menu'),
      menuBtnExit = document.getElementById('mobile-exit'),
      sideMenuBtns = document.querySelectorAll('.side-menu-btn'),
      skillsSection = document.getElementById('skills-section');
            
window.addEventListener('scroll', () => {
    if (window.scrollY >=40) {
        navbar.classList.add('active-nav');
    } else {
        navbar.classList.remove('active-nav');
    }
})

menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('open-menu');
})

menuBtnExit.addEventListener('click', () => {
    sideMenu.classList.remove('open-menu');
})

sideMenuBtns.forEach((sideMenuBtn) => {
    sideMenuBtn.addEventListener('click', () => {
        sideMenu.classList.remove('open-menu');
    })
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) {
        sideMenu.classList.remove('open-menu');
    }
})

window.addEventListener('scroll', () => {
    if (window.innerWidth <= 900) {
        if (window.scrollY >= 1530 && window.scrollY <= 2500) {
            skillsSection.classList.add('active-section');
        } else {
            skillsSection.classList.remove('active-section');
        }
    } else {
        if (window.scrollY >= 1140 && window.scrollY<=2200) {
            skillsSection.classList.add('active-section');
        } else {
            skillsSection.classList.remove('active-section');
        }
    }
})

