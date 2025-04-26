const contenidoGestion = {
    // Página: Gestion.html
    'Gestion.html': {
      imagen: 'assets/gestion-empresarial.webp',
      titulo: '¿Qué es la Gestión Empresarial?',
      descripcion: 'Es una disciplina que se desglosa en la planificación, organización, orientación y el control todos los recursos de una empresa para alcanzar sus objetivos con la finalidad de un eficiente crecimiento sostenible.',
      boton: 'Leer más sobre gestión'
    },

    // Página: MarcaPersonal.html
    'MarcaPersonal.html': {
      imagen: 'assets/marca-personal.jpg',
      titulo: '¿Por qué trabajar en tu marca personal?',
      descripcion: 'La marca personal es tu reputación como profesional. Desarrollarla te permite destacar, conectar con tu audiencia y generar confianza en tus habilidades y servicios.',
      boton: 'Descúbrelo aquí'
    },

    // Página: Capacitacion.html
    'capacitacion.html': {
      imagen: 'assets/capacitacion.png',
      titulo: '¿Por qué debemos capacitarnos?',
      descripcion: 'La capacitación continua permite desarrollar habilidades nuevas, adaptarse a los cambios del entorno y mejorar el desempeño personal y profesional.',
      boton: 'Ver beneficios'
    },
    // Página: Capacitacion.html
    'marketing.html': {
        imagen: 'assets/markeintg.webp',
        titulo: '¿Qué es Matketing Digital?',
        descripcion: 'Es donde se  promociona productos o servicios de manera online, permitiendo llegar a más personas, medir resultados en tiempo real y mejorar la conexión con los clientes. Es clave para posicionar tu marca y aumentar las ventas.',
        boton: 'Descubre cómo ayuda'
      },
     // Página: Capacitacion.html
    'terciarizacion.html': {
        imagen: 'assets/terciarizacion.jpg',
        titulo: '¿Qué es la Tercerización Estratégica?',
        descripcion: 'La tercerización estratégica permite delegar funciones específicas de tu empresa a expertos externos, optimizando recursos, reduciendo costos y enfocándote en el core de tu negocio.',
        boton: 'Descubre cómo ayuda'
    }
  };

  const path = window.location.pathname.split('/').pop();
  const datos = contenidoGestion[path];

  if (datos) {
    document.getElementById('gestion-imagen').src = datos.imagen;
    document.getElementById('gestion-titulo').textContent = datos.titulo;
    document.getElementById('gestion-descripcion').textContent = datos.descripcion;
    document.getElementById('gestion-boton').textContent = datos.boton;
  }
  window.addEventListener('DOMContentLoaded', () => {
    const gestionBox = document.getElementById('gestion-box');
    gestionBox.style.opacity = '0';
    gestionBox.style.transform = 'translateY(40px)';
    gestionBox.style.transition = 'opacity 1s ease, transform 1s ease';

    setTimeout(() => {
      gestionBox.style.opacity = '1';
      gestionBox.style.transform = 'translateY(0)';
    }, 1000);
  });




//las demas secciones 

// Datos para cada servicio
const faqsData = {
    "Gestion": [
      {
        pregunta: "¿Para que sirve?",
        respuesta: "Al ser un conjunto o grupo de estratégias, permite el desarrollo eficiencite de una empresa, su competitividad y su sostenibilidad."
      },
      {
        pregunta: "¿Que se necesita?",
        respuesta: "Planificación, liderazgo, organización, control, comunicación efectiva, innovacion y mejora continua."
      },
      {
        pregunta: "¿Qué beneficios tiene?",
        respuesta: "Mejora la productividad, fomenta el trabajo en equipo y permite la toma de decisiones basadas en datos."
      }
    ],
    "MarcaPersonal": [
      {
        pregunta: "¿Qué es la Marca Personal?",
        respuesta: "Es la forma en que los demás perciben tu experiencia, valores y habilidades. Es tu identidad profesional."
      },
      {
        pregunta: "¿Por qué trabajar la Marca Personal?",
        respuesta: "Te diferencia en el mercado laboral, fortalece tu credibilidad y genera confianza en tu entorno."
      },
      {
        pregunta: "¿Qué incluye nuestro servicio?",
        respuesta: "Análisis de identidad, construcción del mensaje, diseño visual, redes sociales y posicionamiento estratégico."
      }
    ],
    "capacitacion": [
      {
        pregunta: "¿Qué es la Capacitación Profesional?",
        respuesta: "Es un proceso de formación continua que permite desarrollar habilidades clave para el entorno laboral actual."
      },
      {
        pregunta: "¿A quién está dirigido?",
        respuesta: "A estudiantes, profesionales y empresas que buscan mejorar su competitividad y empleabilidad."
      },
      {
        pregunta: "¿Cómo se realiza?",
        respuesta: "A través de talleres presenciales, webinars y programas personalizados según el rubro."
      }
    ],
    "marketing": [
      {
        pregunta: "¿porque el marketing mejora las ventas ",
        respuesta: "Permite llegar al público ideal con estrategias precisas que aumenten el interés y las conversiones efectivas.."
      },
      {
        pregunta: "¿Qué funciones se pueden tercerizar?",
        respuesta: "Publicidad digital, posicionamiento web, análisis de mercado, comunicación estratégica, ventas online, fidelización de clientes."
      },
      {
        pregunta: "¿Cuál es el beneficio?",
        respuesta: "Aumenta la visibilidad online, mejora las ventas, fideliza clientes y fortalece la presencia de marca digital."
      }
    ],
    "terciarizacion": [
      {
        pregunta: "¿Qué es la Tercerización Estratégica?",
        respuesta: "Es la delegación de funciones específicas de una empresa a terceros especializados para aumentar la eficiencia."
      },
      {
        pregunta: "¿Qué funciones se pueden tercerizar?",
        respuesta: "Marketing, contabilidad, atención al cliente, recursos humanos, entre otros."
      },
      {
        pregunta: "¿Cuál es el beneficio?",
        respuesta: "Reduce costos operativos, mejora la productividad y permite enfocarse en el core del negocio."
      }
    ]
  };
  
  // Detecta el servicio actual por ID o clase en el body
  const currentService = document.body.dataset.servicio; // ejemplo: "gestion-empresarial"
  
  function crearFAQs(servicio) {
    const container = document.getElementById("faq-section");
    const data = faqsData[servicio] || [];
  
    let html = "";
    data.forEach((item, index) => {
      html += `
        <div class="faq-item">
          <div class="faq-pregunta" onclick="toggleRespuesta(this)">
            ${item.pregunta}
            <span class="arrow">▼</span>
          </div>
          <div class="faq-respuesta">${item.respuesta}</div>
        </div>`;
    });
  
    container.innerHTML = html;
  }
  
  // Animación de apertura y cierre
  function toggleRespuesta(element) {
    const respuesta = element.nextElementSibling;
    const arrow = element.querySelector(".arrow");
  
    respuesta.classList.toggle("visible");
    arrow.classList.toggle("rotado");
  }
  
  // Ejecuta al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    crearFAQs(currentService);
  });
  

  //services

  const impactos = {
    "Gestion": {
      titulo: "¿Qué pasa si no hay una buena gestión empresarial?",
      texto: "Una mala gestión empresarial puede llevar a una falta de organización, pérdida de recursos, baja productividad y toma de decisiones poco efectivas. Esto afecta directamente la competitividad y sostenibilidad de la empresa."
    },
    "capacitacion": {
      titulo: "¿Qué pasa si no capacitamos adecuadamente al personal?",
      texto: "La falta de capacitación profesional limita el crecimiento del personal, reduce su eficiencia y puede generar errores operativos. Una plantilla no actualizada puede afectar la calidad del servicio y la satisfacción del cliente."
    },
    "MarcaPersonal": {
      titulo: "¿Qué pasa si no trabajamos en nuestra marca personal?",
      texto: "No desarrollar una marca personal limita la visibilidad profesional, la reputación y las oportunidades de crecimiento. Afecta también la forma en que el público percibe la autoridad y confianza de la empresa."
    },
    "marketing": {
      titulo: "¿Qué pasa si no aplicamos estrategias de marketing digital?",
      texto: "Ignorar el marketing digital puede hacer que la empresa pierda presencia en línea, disminuya sus ventas y quede rezagada frente a la competencia que sí aprovecha los canales digitales para crecer."
    },
    "terciarizacion": {
      titulo: "¿Qué pasa si no optamos por una tercerización estratégica?",
      texto: "No aplicar la tercerización adecuada puede generar sobrecarga operativa, altos costos internos y baja especialización. Delegar procesos a expertos permite enfocarse en el core del negocio y mejorar la eficiencia."
    }
  };

  const servicio = document.body.dataset.servicio; // por ejemplo: 'gestion-empresarial'
  const data = impactos[servicio];

  if (data) {
    document.getElementById("impacto-servicio").innerHTML = `
      <div class="impacto-box">
        <h2>${data.titulo}</h2>
        <p>${data.texto}</p>
      </div>
    `;
  }