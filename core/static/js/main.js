// Inicializando tooltips al cargar el sitio
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Selección de elementos
const body = document.getElementById('body');
const sunIcon = document.getElementById('sun-icon');
const inputSwitch = document.querySelectorAll('.form-check-input');
const formFields = document.querySelectorAll('.form-control');
const listItems = document.querySelectorAll('.list-group-item');
const generalLinks = document.querySelectorAll('.general-link');
const techSkillIconText = document.querySelectorAll('.tech-skill-icon');
const skillCardFront = document.getElementById('skill-card-front');
const skillCardBack = document.getElementById('skill-card-back');
const skillCardSoft = document.getElementById('skill-card-soft');
const certificateCard = document.querySelectorAll('.certificates-card');
const projectCard = document.querySelectorAll('.project-card');
const offCanvasProject = document.querySelectorAll('.offcanvas');
const footerParagraph = document.getElementById('footer-paragraph');
const footerIcon = document.querySelectorAll('.footer-icon');

// Inicialización de local storage
let initTheme = localStorage.getItem("theme");

function lightMode(){
  body.classList.remove('background-dark-mode');
  body.classList.add('background-light-mode');
  body.classList.remove('text-light');
  sunIcon.classList.remove('text-light');
  sunIcon.classList.add('text-dark');
  inputSwitch.forEach((element)=>{
    element.setAttribute('checked','');
  });
  formFields.forEach((element)=>{
    element.classList.remove('bg-dark');
    element.classList.remove('text-light');
  });
  listItems.forEach((element)=>{
    element.classList.remove('bg-dark');
    element.classList.remove('text-light');
  });
  generalLinks.forEach((element)=>{
    element.classList.remove('link-light');
  });
  techSkillIconText.forEach((element)=>{
    element.classList.remove('text-light');
  });
  projectCard.forEach((element)=>{
    element.classList.remove('text-light');
    element.removeAttribute('style','');
  });
  footerIcon.forEach((element)=>{
    element.classList.remove('text-light');
  });
  certificateCard.forEach((element)=>{
    element.setAttribute('style','background-color: rgba(229, 229, 229,0.8);')
  });
  offCanvasProject.forEach((element)=>{
    element.classList.remove('text-light');
    element.setAttribute('data-bs-theme','light');
  });
  skillCardFront.setAttribute('style', 'background-image: url(/core/static/assets/img/skill-card-fe-light.png);"');
  skillCardBack.setAttribute('style', 'background-image: url(/core/static/assets/img/skill-card-be-light.png);"');
  skillCardSoft.setAttribute('style', 'background-image: url(/core/static/assets/img/skill-card-soft-light.png);"');
  footerParagraph.classList.remove('text-light');
  localStorage.setItem("theme", "light");
};

function darkMode(){
  body.classList.remove('background-light-mode');
  body.classList.add('background-dark-mode');
  body.classList.add('text-light');
  sunIcon.classList.remove('text-dark');
  sunIcon.classList.add('text-light');
  inputSwitch.forEach((element)=>{
    element.removeAttribute('checked','');
  });
  formFields.forEach((element)=>{
    element.classList.add('bg-dark');
    element.classList.add('text-light');
  });
  listItems.forEach((element)=>{
    element.classList.add('bg-dark');
    element.classList.add('text-light');
  });
  generalLinks.forEach((element)=>{
    element.classList.add('link-light');
  });
  techSkillIconText.forEach((element)=>{
    element.classList.add('text-light');
  });
  projectCard.forEach((element)=>{
    element.classList.add('text-light');
    element.setAttribute('style','background-color: rgba(22, 20, 21, 0.8);');
  });
  certificateCard.forEach((element)=>{
    element.removeAttribute('style');
  });
  footerIcon.forEach((element)=>{
    element.classList.add('text-light');
  });
  offCanvasProject.forEach((element)=>{
    element.classList.add('text-light');
    element.setAttribute('data-bs-theme','dark');
  });
  skillCardFront.removeAttribute('style');
  skillCardBack.removeAttribute('style');
  skillCardSoft.removeAttribute('style');
  footerParagraph.classList.add('text-light');
  localStorage.setItem("theme", "dark");
};

 // Inicialización en modo claro
if (initTheme == "light"){
  lightMode();
}


inputSwitch.forEach(function(e){
  e.addEventListener('click', () =>{
    currentTheme = localStorage.getItem("theme");
        if ( currentTheme === "light"){  
            darkMode();
       } else{
            lightMode();
       }
  } )
})

