const imagenes = document.querySelectorAll('.imagenes img');
const overlay = document.getElementById('overlay');
const imagenGrande = document.getElementById('imagen-grande');
const cerrar = document.getElementById('cerrar');

imagenes.forEach(img => {
  img.addEventListener('click', () => {
    imagenGrande.src = img.src;
    overlay.classList.add('active');
  });
});

cerrar.addEventListener('click', () => {
  overlay.classList.remove('active');
});

overlay.addEventListener('click', e => {
  if (e.target === overlay || e.target === cerrar) {
    overlay.classList.remove('active');
  }
});

// objetivos
window.addEventListener('scroll', () => {
    document.querySelectorAll('.objetivo').forEach((el, i) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        el.style.transition = `all 0.6s ease ${i * 0.1}s`;
      }
    });
  });

  //frases
  document.addEventListener("DOMContentLoaded", () => {
    const articulos = document.querySelectorAll(".articulo");
    const mostrarAnimacion = () => {
      articulos.forEach((articulo) => {
        const top = articulo.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          articulo.style.animationPlayState = "running";
        }
      });
    };
    window.addEventListener("scroll", mostrarAnimacion);
    mostrarAnimacion();
  });

  //marketing
  function abrirMarketing() {
    window.open('http://blog.hubspot.es/marketing/que-es-marketing-digital', '_blank');
  }