const navbar = document.getElementById('navbar'),
      menuBtn = document.getElementById('mobile-cta'),
      menuBtnExit = document.getElementById('mobile-exit'),
      homeBtn = document.getElementById('home-btn'),
      aboutBtn = document.getElementById('about-btn'),
      skillsBtn = document.getElementById('skills-btn');
      experienceBtn = document.getElementById('experience-btn'),
      projectsBtn = document.getElementById('projects-btn'),
            
window.addEventListener('scroll', () => {
    if (window.scrollY >=40) {
        navbar.classList.add('active-nav');
    } else {
        navbar.classList.remove('active-nav');
    }
})

menuBtn.addEventListener('click', () => {
    navbar.classList.add('open-menu');
})

menuBtnExit.addEventListener('click', () => {
    navbar.classList.remove('open-menu');
})
            
homeBtn.addEventListener('click', () => {
    navbar.classList.remove('open-menu');
})

aboutBtn.addEventListener('click', () => {
    navbar.classList.remove('open-menu');
})

skillsBtn.addEventListener('click', () => {
    navbar.classList.remove('open-menu');
})

experienceBtn.addEventListener('click', () => {
    navbar.classList.remove('open-menu');
})

projectsBtn.addEventListener('click', () => {
    navbar.classList.remove('open-menu');
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) {
        navbar.classList.remove('open-menu');
    }
})