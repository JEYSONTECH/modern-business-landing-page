const servicesBtn = document.querySelector('a[href="#services"]');
const projectsBtn = document.querySelector('a[href="#projects"]');

const servicesSection = document.querySelector('#services');
const projectsSection = document.querySelector('#projects');

servicesBtn.addEventListener('click', (e) => {

  e.preventDefault();

  servicesSection.style.display = 'block';

  servicesSection.scrollIntoView({
    behavior: 'smooth'
  });

});

projectsBtn.addEventListener('click', (e) => {

  e.preventDefault();

  projectsSection.style.display = 'block';

  projectsSection.scrollIntoView({
    behavior: 'smooth'
  });

});
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

});

hiddenElements.forEach((el) => observer.observe(el));
