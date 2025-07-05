document.addEventListener("DOMContentLoaded", () => {
  console.log("JS Loaded");

  const skillHeaders = document.querySelectorAll('.skills__header');
  skillHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentNode;

      document.querySelectorAll('.skills__content').forEach(content => {
        if (content !== parent) {
          content.classList.remove('skills__open');
          content.classList.add('skills__close');
        }
      });

      parent.classList.toggle('skills__open');
      parent.classList.toggle('skills__close');
    });
  });
});

// ===== Projects Toggle Logic (optional, if using it) =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    projectCards.forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
  });
});
/*-----------Toggle icon navbar-----*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick= ()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
/*-----------Scroll section active link-----*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  /*-----------Sticky navbar-----*/

  let header = document.querySelector('header');
  header.classList.toggle('sticky',window,scrollY  > 100);

  /*-----------Remove  toggle icon and navbar-----*/
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};
/*-----------Scroll reveal -----*/
ScrollReveal({ 
    distance:'80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container,skills-box, .contact form', { origin:'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin:'right'});

/*-----------Typed js-----*/
const typed= new Typed('.multiple-text',{
    strings:['Frontend Developer','Web Developer','Content Writer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});
