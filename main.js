document.querySelector(".menuBoton").addEventListener("click", () => {
  document.querySelector(".navMenu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.titulaProyectos', { delay: 1000 });
ScrollReveal().reveal('.proyectos', { delay: 1000 });
ScrollReveal().reveal('.sectionSkills', { delay: 1000 });
ScrollReveal().reveal('.sectionTwo', { delay: 1000 });

