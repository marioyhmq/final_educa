const modal = document.getElementById("modal");
const imagenModal = document.getElementById("imagenModal");
const cerrar = document.getElementById("cerrar");

// Abrir imagen
document.querySelectorAll('.imagen img').forEach(img => {
  img.addEventListener('click', () => {
    imagenModal.src = img.src;
    modal.style.display = "block";
  });
});

// Cerrar con la X
cerrar.addEventListener('click', () => {
  modal.style.display = "none";
});

// Cerrar haciendo clic fuera de la imagen
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Cerrar con la tecla ESC
document.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});
