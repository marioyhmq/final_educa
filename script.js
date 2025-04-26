let index = 0;
const slides = document.getElementById('slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(i) {
  index = (i + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

setInterval(() => {
  nextSlide();
}, 5000);

function llamar() {
  const botonera = document.getElementById('botonera');
  botonera.classList.toggle("click");
  const menu = document.getElementById('btn-menu');
  menu.querySelector(".fa-bars").classList.toggle("fa-xmark");
}

// Cambio de color al hacer scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.style.backgroundColor = '#120B2A'; // Morado oscuro
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

// Duplica las imágenes dentro del slider para extenderlo más y evitar espacios vacíos
const sliderTrack = document.getElementById('slider-track');
const totalImgs = sliderTrack.children.length;

for (let i = 0; i < totalImgs; i++) {
  const clone = sliderTrack.children[i].cloneNode(true);
  sliderTrack.appendChild(clone);
}

function scrollFadeIn() {
  const elements = document.querySelectorAll('.scroll-fade');
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', scrollFadeIn);
window.addEventListener('load', scrollFadeIn); // por si ya está en pantalla al cargar

// efecto de la acciones

function scrollFadeIn() {
  const elements = document.querySelectorAll('.scroll-fade');
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', scrollFadeIn);
window.addEventListener('load', scrollFadeIn);


// Parallax efecto dinámico
window.addEventListener('scroll', () => {
  const section = document.getElementById('valores');
  let offset = window.pageYOffset;
  section.style.backgroundPositionY = offset * 0.5 + "px";
});

// Animación al aparecer
const fadeItems = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

fadeItems.forEach(el => observer.observe(el));

//efecto zoom
const zoomItems = document.querySelectorAll('.zoom-in');

const zoomObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.3
});

zoomItems.forEach(el => zoomObserver.observe(el));

//principales servicios

window.addEventListener('scroll', () => {
  document.querySelectorAll('.scroll-fade').forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
});


//porque elegirnos
const frases = [
  "Soluciones digitales a medida, diseñadas para crecer contigo. Creamos estrategias personalizadas que impulsan tu      posicionamiento y fortalecen tu marca en el entorno digital.",
  "Tu éxito es nuestro objetivo. Nos enfocamos en resultados medibles, optimizando cada acción para lograr mayor visibilidad, más clientes y más oportunidades.",
  "No solo asesoramos, te acompañamos.Establecemos relaciones sólidas con nuestros clientes, brindando atención constante y respuestas prácticas a cada necesidad."
];

let actual = 0;
const texto = document.getElementById('texto-destacado');
const botones = document.querySelectorAll('.boton-cambio');

function mostrarFrase(index) {
  texto.style.opacity = 0;
  setTimeout(() => {
    texto.textContent = frases[index];
    texto.style.opacity = 1;
    botones.forEach(btn => btn.classList.remove('active'));
    botones[index].classList.add('active');
  }, 300);
}

botones.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    actual = i;
    mostrarFrase(actual);
  });
});

setInterval(() => {
  actual = (actual + 1) % frases.length;
  mostrarFrase(actual);
}, 5000);
//botonera del banner
function abrirWhatsApp() {
  window.open('https://wa.me/51995619930?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios.', '_blank');
}
function scrollASeccion() {
  const seccionServicios = document.getElementById('servicios');
  if (seccionServicios) {
    seccionServicios.scrollIntoView({ behavior: 'smooth' });
  }
}
//secciones adicionales
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(el => {
    appearOnScroll.observe(el);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const currentURL = window.location.href;
  const servicioCards = document.querySelectorAll(".servicio-card");

  servicioCards.forEach(card => {
    const href = card.getAttribute("href");
    if (href && currentURL.includes(href)) {
      servicioCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    }
  });
});
//animaciones ventajas

const imagenesGaleria = [
  './assets/capacitacion/2.jpeg', './assets/capacitacion/3.jpeg', './assets/capacitacion/4.jpeg', './assets/capacitacion/5.jpeg',
  './assets/capacitacion/6.jpeg', './assets/capacitacion/7.jpeg', './assets/capacitacion/8.jpeg','./assets/capacitacion/9.jpeg',
  './assets/capacitacion/10.jpeg', './assets/capacitacion/11.jpeg', './assets/capacitacion/12.jpeg','./assets/capacitacion/13.jpeg',
  './assets/capacitacion/14.jpeg', './assets/capacitacion/15.jpeg', './assets/capacitacion/16.jpeg','./assets/capacitacion/17.jpeg',
  './assets/capacitacion/18.jpeg',
];

const galeriaContainer = document.getElementById('galeriaContainer');
imagenesGaleria.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Foto de taller EducaPeru";
  img.classList.add('galeria-imagen');
  img.addEventListener('click', () => mostrarImagen(src));
  galeriaContainer.appendChild(img);
});

const modal = document.getElementById('imagenModal');
const modalImg = document.getElementById('imgAmpliada');
const cerrar = document.querySelector('.cerrar');

function mostrarImagen(src) {
  modal.style.display = 'flex';
  modalImg.src = src;
}

cerrar.onclick = function () {
  modal.style.display = 'none';
}

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
//capacitarnos
function abrirCapacitarnos() {
window.open('https://capacitacion.uc.cl/noticias/214-6-beneficios-de-la-capacitacion-laboral', '_blank');
}

//capacitacion 2
const modulos = [
  {
    titulo: "Marketing Digital",
    duracion: "Próximamente",
    objetivo: "Nueva capacitación disponible pronto"
  },
  {
    titulo: "Finanzas para No Financieros",
    duracion: "Próximamente",
    objetivo: "Nueva capacitación disponible pronto"
  },
  {
    titulo: "Liderazgo y Trabajo en Equipo",
    duracion: "Próximamente",
    objetivo: "Nueva capacitación disponible pronto"
  },
  {
    titulo: "CRM Empresarial",
    duracion: "Próximamente",
    objetivo: "Nueva capacitación disponible pronto"
  },
  {
    titulo: "Gestión de Proyectos",
    duracion: "Próximamente",
    objetivo: "Nueva capacitación disponible pronto"
  }
];

const container = document.getElementById("modulosContainer");
modulos.forEach(({ titulo, duracion, objetivo }) => {
  const card = document.createElement("div");
  card.className = "modulo-card";
  card.innerHTML = `
    <h3>${titulo}</h3>
    <p><strong>Duración:</strong> ${duracion}</p>
    <p>${objetivo}</p>
  `;
  container.appendChild(card);
});
const btnFloat = document.getElementById("wa-float");
const chatBox = document.getElementById("wa-chat");
const cerrarBtn = document.getElementById("cerrar-chat");
const input = document.getElementById("wa-input-text");
const body = document.getElementById("wa-body");
const enviarBtn = document.getElementById("enviar-msg");

// Mostrar/Ocultar chat
btnFloat.addEventListener("click", () => {
  chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
});

cerrarBtn.addEventListener("click", () => {
  chatBox.style.display = "none";
  body.innerHTML = `<div class="wa-msg bot">¡Hola! ¿En qué puedo ayudarte hoy?</div>`;
});

// Enviar mensaje y detectar intención
enviarBtn.addEventListener("click", () => {
  const texto = input.value.trim();
  if (!texto) return;

  const msgUser = document.createElement("div");
  msgUser.className = "wa-msg user";
  msgUser.textContent = texto;
  body.appendChild(msgUser);

  input.value = "";

  // Analiza palabras clave
  const textoMinus = texto.toLowerCase();
  let respuesta = "";

  if (textoMinus.includes("precio") || textoMinus.includes("cuesta") || textoMinus.includes("vale") || textoMinus.includes("costo")) {
    respuesta = `
      El precio depende del curso o asesoría que elijas. 
      ¿Deseas conversar directamente con un asesor?
      <br><br>
      <a href="https://wa.me/5192368508?text=Hola,%20quiero%20saber%20el%20precio%20de%20un%20curso%20en%20EducaPeru" target="_blank" style="color:#25d366; font-weight:bold;">👉 Clic aquí para hablar con un asesor</a>
    `;
  } else if (textoMinus.includes("curso") || textoMinus.includes("capacitacion") || textoMinus.includes("formacion")) {
    respuesta = "Ofrecemos cursos de Gestión, Marketing, Marca Personal y más. ¿Sobre cuál deseas saber?";
  } else if (textoMinus.includes("gracias") || textoMinus.includes("ok")) {
    respuesta = "¡Gracias a ti por escribirnos! 😊";
  } else {
    respuesta = "Gracias por tu mensaje. Un asesor te responderá pronto.";
  }

  setTimeout(() => {
    const msgBot = document.createElement("div");
    msgBot.className = "wa-msg bot";
    msgBot.innerHTML = respuesta;
    body.appendChild(msgBot);
    body.scrollTop = body.scrollHeight;
  }, 1000);
});
document.addEventListener('DOMContentLoaded', () => {
  const estadisticas = [
    { valor: 75, descripcion: 'Incremento en la productividad (%)' },
    { valor: 60, descripcion: 'Reducción de costos operativos (%)' },
    { valor: 90, descripcion: 'Mejora en la satisfacción del cliente (%)' },
    { valor: 85, descripcion: 'Optimización de procesos internos (%)' }
  ];

  const contenedor = document.getElementById('estadisticas-contenedor');

  estadisticas.forEach(({ valor, descripcion }) => {
    const div = document.createElement('div');
    div.className = 'estadistica';

    const numero = document.createElement('div');
    numero.className = 'estadistica-numero';
    numero.textContent = '0';

    const texto = document.createElement('div');
    texto.className = 'estadistica-descripcion';
    texto.textContent = descripcion;

    div.appendChild(numero);
    div.appendChild(texto);
    contenedor.appendChild(div);

    let count = 0;
    const velocidad = Math.ceil(valor / 50);
    const animar = () => {
      if (count < valor) {
        count += velocidad;
        if (count > valor) count = valor;
        numero.textContent = `${count}%`;
        requestAnimationFrame(animar);
      }
    };
    animar();
  });
});

//abrir gestion
function abrirGestion() {
window.open('https://www.santanderopenacademy.com/es/blog/gestion-empresarial.html', '_blank');
}
// Animaciones de entrada scroll
function animarScroll() {
  const elementos = document.querySelectorAll('.scroll-animate');
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);


function animarScroll() {
  const elementos = document.querySelectorAll('.scroll-animate');
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);

// Clase de animación
document.querySelectorAll('.scroll-animate').forEach(el => {
  el.classList.add('scroll-hidden');
});


const servicios = document.querySelectorAll('.itemServicio');

const aparecer = () => {
  servicios.forEach((el, i) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = `all 0.6s ease ${i * 0.1}s`;
    }
  });
};

window.addEventListener('scroll', aparecer);
window.addEventListener('load', aparecer);

// faq.js
document.addEventListener("DOMContentLoaded", function () {
  const faqs = {
    "MarcaPersonal": [
      {
        pregunta: "¿Qué es una marca personal?",
        respuesta: "Es la huella que dejas en otros. Construirla te ayuda a destacar profesionalmente."
      },
      {
        pregunta: "¿Por qué debería trabajar mi marca personal?",
        respuesta: "Te diferencia, te posiciona como experto y abre oportunidades laborales o comerciales."
      },
      {
        pregunta: "¿Necesito redes sociales para crear mi marca personal?",
        respuesta: "No son obligatorias, pero sí muy útiles para visibilizar tu trabajo y valores."
      }
    ],
    "capacitacion": [
      {
        pregunta: "¿Los cursos tienen certificación?",
        respuesta: "Sí, todos los cursos de EducaPeru incluyen certificación con respaldo académico."
      },
      {
        pregunta: "¿Las clases son en vivo o grabadas?",
        respuesta: "Contamos con ambos formatos para adaptarnos a tu disponibilidad."
      }
    ]
  };

  const servicio = document.body.getAttribute("data-servicio") || "MarcaPersonal";
  const contenedor = document.getElementById("faqContainer");

  faqs[servicio].forEach(faq => {
    const item = document.createElement("div");
    item.className = "faq-item";

    item.innerHTML = `
      <div class="faq-question">
        <span>${faq.pregunta}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">${faq.respuesta}</div>
    `;

    item.querySelector('.faq-question').addEventListener("click", () => {
      item.classList.toggle("open");
    });

    contenedor.appendChild(item);
  });
});

//marca personal 2

document.addEventListener("DOMContentLoaded", () => {
  const preguntas = [
    {
      icono: "fa-user-pen",
      pregunta: "¿Qué es la marca personal?",
      respuesta: "Es cómo te perciben los demás profesionalmente. Te permite destacarte y posicionarte en tu sector."
    },
    {
      icono: "fa-bullseye",
      pregunta: "¿Por qué es importante trabajarla?",
      respuesta: "Porque fortalece tu visibilidad, autoridad y te abre nuevas oportunidades laborales o de negocio."
    },
    {
      icono: "fa-network-wired",
      pregunta: "¿Necesito redes sociales?",
      respuesta: "Son una herramienta poderosa, pero no obligatoria. Se puede construir marca también offline."
    },
    {
      icono: "fa-graduation-cap",
      pregunta: "¿EducaPeru ofrece asesoría en marca personal?",
      respuesta: "Sí, contamos con capacitaciones, mentorías y recursos para ayudarte a construir tu marca."
    }
  ];

  const contenedor = document.getElementById("faqCards");

  preguntas.forEach(({ icono, pregunta, respuesta }) => {
    const card = document.createElement("div");
    card.className = "faq-card";
    card.innerHTML = `
      <div class="faq-card-icon"><i class="fas ${icono}"></i></div>
      <h3>${pregunta}</h3>
      <p>${respuesta}</p>
    `;
    contenedor.appendChild(card);
  });
});

//Marca Personal
function abrirMarcaPersonal() {
window.open('https://www.utp.edu.pe/blog/que-es-marca-personal#:~:text=En%20el%20competitivo%20mercado%20laboral,personas%20que%20conocen%20y%20respetan.', '_blank');
}
window.addEventListener("load", () => {
  const popup = document.getElementById("popup-alert");
  const closeBtn = document.getElementById("popup-close");
  popup.style.display = "flex";

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // PERSONALIZACIÓN SEGÚN PÁGINA
  const ruta = window.location.pathname;
  const img = document.getElementById("popup-img");
  const title = document.getElementById("popup-title");
  const link = document.getElementById("popup-link");

  if (ruta.includes("cursos")) {
    img.src = "./assets/cursos/curso-capacitacion.jpeg";
    title.textContent = "Capacitación Profesional";
    link.href = "https://wa.me/51995660930?text=Hola,%20quiero%20inscribirme%20en%20Capacitación%20Profesional";
  }
});
AOS.init({
  duration: 800,
  once: true
});

function abrirTerciarizacion() {
  window.open('https://es.linkedin.com/pulse/la-tercerizaci%C3%B3n-estrategia-eficiente-y-regulada-para-5jsze', '_blank');
}

  // Espera a que cargue la página
  const logo = document.getElementById('logoAnimado');

  let scale = 1;
  let rotate = 0;

  const animateLogo = setInterval(() => {
    scale = scale === 1 ? 1.1 : 1;
    rotate += 15;
    logo.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
  }, 300);

  window.addEventListener('load', () => {
    setTimeout(() => {
      clearInterval(animateLogo); // Detener animación
      const preloader = document.getElementById('preloader');
      if (preloader) preloader.style.display = 'none';
    }, 3500); // Duración total del preloader
  });

