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
const inputSwitch = document.querySelectorAll('.form-check-input');
const formFields = document.querySelectorAll('.form-control');
const listItems = document.querySelectorAll('.list-group-item');
const generalLinks = document.querySelectorAll('.general-link');
const techSkillIconText = document.querySelectorAll('.tech-skill-icon');
const offCanvasProject = document.getElementById('offcanvasProject');

// Inicialización de local storage
let initTheme = localStorage.getItem("theme");

function lightMode(){
  body.classList.remove('bg-dark');
  body.classList.remove('text-light');
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
  offCanvasProject.classList.remove('text-light');
  offCanvasProject.setAttribute('data-bs-theme','light');
  localStorage.setItem("theme", "light");
};

function darkMode(){
  body.classList.add('bg-dark');
  body.classList.add('text-light');
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
  offCanvasProject.classList.add('text-light');
  offCanvasProject.setAttribute('data-bs-theme','dark');
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

