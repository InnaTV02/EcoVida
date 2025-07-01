document.addEventListener("DOMContentLoaded", () => {
  // Carrusel del inicio 
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

  // Hover en cuadrículas del blog
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
      /*const apellido = formulario.apellido.value.trim();*/
      const correo = formulario.correo.value.trim();
      const mensaje = formulario.mensaje.value.trim();

      if (!nombre ||  !correo || !mensaje) {
        mostrarError("Por favor completa todos los campos.");
        return;
      }

      const correoValido = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!correoValido.test(correo)) {
        mostrarError("Correo inválido. Verifica el formato.");
        return;
      }

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

  // Cortina en productos (solo clic en imagen o título)
  const productos = document.querySelectorAll(".producto");
  productos.forEach(producto => {
    const texto = producto.dataset.info;
    const cortina = producto.querySelector(".info-hover");
    cortina.textContent = texto;

    const imagen = producto.querySelector("img");
    const titulo = producto.querySelector("h3");

    function toggleCortina() {
      producto.classList.toggle("activo");
    }

    if (imagen) {
      imagen.style.cursor = "pointer"; // indica que es clickeable
      imagen.addEventListener("click", toggleCortina);
    }

    if (titulo) {
      titulo.style.cursor = "pointer";
      titulo.addEventListener("click", toggleCortina);
    }
  });
});

// Animación de scroll
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

// Menú hamburguesa
const botonMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul.menu-principal');

if (botonMenu && menu) {
  botonMenu.addEventListener('click', () => {
    menu.classList.toggle('activo');
  });
}

