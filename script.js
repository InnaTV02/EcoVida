document.addEventListener("DOMContentLoaded", () => {
  //Carrusel del inicio 
  const imagenes = document.querySelectorAll(".carrusel-img");
  let index = 0;

  function mostrarSiguiente() {
    imagenes[index]?.classList.remove("active");
    index = (index + 1) % imagenes.length;
    imagenes[index]?.classList.add("active");
  }

  if (imagenes.length > 0) {
    setInterval(mostrarSiguiente, 3000);
  }

  //  Hover en cuadrículas del blog
  const blogItems = document.querySelectorAll(".blog-item");
  blogItems.forEach(item => {
    const infoBox = item.querySelector(".blog-info");
    if (infoBox) {
      infoBox.textContent = item.dataset.info;
      item.addEventListener("mouseenter", () => {
        infoBox.style.display = "flex";
      });
      item.addEventListener("mouseleave", () => {
        infoBox.style.display = "none";
      });
    }
  });

  // Acordeón de la página "Nosotros"
  const acordeones = document.querySelectorAll(".acordeon");
  acordeones.forEach(acordeon => {
    const titulo = acordeon.querySelector(".acordeon-titulo");
    titulo?.addEventListener("click", () => {
      acordeon.classList.toggle("acordeon-activo");
    });
  });

  // Formulario de contacto con validación 
  const formulario = document.getElementById("formulario-contacto");
  const mensajeExito = document.getElementById("mensaje-exito");
  const mensajeError = document.getElementById("mensaje-error");

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = formulario.nombre.value.trim();
      const apellido = formulario.apellido.value.trim();
      const correo = formulario.correo.value.trim();
      const mensaje = formulario.mensaje.value.trim();

      // Validación de campos vacíos
      if (!nombre || !apellido || !correo || !mensaje) {
        mostrarError("Por favor completa todos los campos.");
        return;
      }

      // Validación de correo electrónico
      const correoValido = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!correoValido.test(correo)) {
        mostrarError("Correo inválido. Verifica el formato.");
        return;
      }

      // Todo correcto: mostrar mensaje de éxito
      mensajeError.style.display = "none";
      mensajeExito.style.display = "block";

      setTimeout(() => {
        mensajeExito.style.display = "none";
        formulario.reset();
      }, 3000);
    });

    function mostrarError(texto) {
      mensajeError.textContent = texto;
      mensajeError.style.display = "block";
      mensajeExito.style.display = "none";
    }
  }
//--------------------------------------------------//


});

//Animación de scroll para cualquier elemento que le haya puesto la clase .animacion-scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('activar-animacion');
      observer.unobserve(entry.target);
    }
  });
});

const elementosAnimados = document.querySelectorAll('.animacion-scroll');
elementosAnimados.forEach(el => observer.observe(el));



//----------------------------------------------//
const botonMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul.menu-principal');

if (botonMenu && menu) {
  botonMenu.addEventListener('click', () => {
    menu.classList.toggle('activo');
  });
}
