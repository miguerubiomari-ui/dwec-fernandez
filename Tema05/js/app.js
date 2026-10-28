/*
  Tarea 5 · DWEC · [Tu nombre y apellidos]
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // El modelo: el primer párrafo, por su id
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  //  querySelector y  clase
  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  // querySelectorAll y posición en la lista
  const parrafos = document.querySelectorAll("#contenido p");
  parrafos[2].classList.add("text-danger");

  console.log("Cambios aplicados a los tres párrafos de #contenido");
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  // Selecciono el contenedor de los párrafos
  const contenido = document.querySelector("#contenido");

  // Creo el <p> nuevo (todavía no está en la página)
  const nuevo = document.createElement("p");

  // N = párrafos que habrá una vez añadido este (los actuales + 1)
  const numero = contenido.children.length + 1;
  nuevo.textContent = "Párrafo nuevo " + numero;
  console.log(nuevo.textContent);

  // Lo cuelgo al final de #contenido
  contenido.append(nuevo);

  console.log("Añadido el párrafo número " + numero);
}

function eliminarUltimo() {
  // Busco el último elemnto (hijo) de #contenido
  const ultimo = document.querySelector("#contenido").lastElementChild;
  const aviso = document.querySelector("#aviso2");

  if (ultimo === null) {
    // si no queda parrafo, muestro el aviso
    aviso.classList.remove("d-none");
    console.log("No quedan párrafos que eliminar");
  } else {
    // Hay párrafo: lo borro
    ultimo.remove();
    console.log("Último párrafo eliminado");
  }
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    // Para poner el cursor gris
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    // Para desactivar el gris del ratón para cunado se quite de la zona
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  console.log("Resaltado activado en " + parrafos.length + " párrafos");
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  // Leo lo escrito y le quito los espacios de los extremos
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");

  if (texto === "") {
    // Casilla vacía, muestro el error 
    error.classList.remove("d-none");
    console.log("cambiarTexto: la casilla está vacía");
  } else {
    // Hay texto: lo pongo en el primer párrafo como texto plano y oculto el error
    document.querySelector("#contenido p").textContent = texto;
    error.classList.add("d-none");
    console.log("cambiarTexto: primer párrafo cambiado a «" + texto + "»");
  }
}

function cambiarConHtml() {
  // Lo mismo que cambiarTexto(), pero interpretando el texto como HTML
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");

  if (texto === "") {
    error.classList.remove("d-none");
    console.log("cambiarConHtml: la casilla está vacía");
  } else {
    document.querySelector("#contenido p").innerHTML = texto;
    error.classList.add("d-none");
    console.log("cambiarConHtml: primer párrafo cambiado con innerHTML");
  }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  const entrada = document.querySelector("#tareaInput");
  const error = document.querySelector("#error5");
  const lista = document.querySelector("#listaTareas");

  // Leo el texto y le quito los espacios de los extremos
  const texto = entrada.value.trim();

  if (texto === "") {
    // Casilla vacía: aviso y no añado nada
    error.textContent = "Escribe una tarea antes de añadir.";
    error.classList.remove("d-none");
    console.log("anadirTarea: la casilla está vacía");
  } else {
    // Creo el <li> con su clase de Bootstrap
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    // Creo la casilla de verificación
    const casilla = document.createElement("input");
    casilla.type = "checkbox";
    casilla.classList.add("form-check-input", "me-2");

    // Creo el <span> con el texto (textContent, nunca innerHTML)
    const span = document.createElement("span");
    span.textContent = texto;

    // Meto casilla y span dentro del <li>, y el <li> en la lista
    li.append(casilla, span);
    lista.append(li);

    // Vacío la casilla de texto y oculto el error
    entrada.value = "";
    error.classList.add("d-none");

    // Actualizo el contador
    document.querySelector("#totalTareas").textContent =
      document.querySelectorAll("#listaTareas li").length;

    console.log("anadirTarea: tarea añadida «" + texto + "»");
  }
}

function borrarCompletadas() {
  const error = document.querySelector("#error5");

  // Casillas marcadas dentro de la lista
  const marcadas = document.querySelectorAll("#listaTareas input:checked");

  if (marcadas.length === 0) {
    // No hay ninguna marcada, avisa
    error.textContent = "No hay ninguna tarea marcada para borrar.";
    error.classList.remove("d-none");
    console.log("borrarCompletadas: no hay tareas marcadas");
  } else {
    // Borro el <li> (padre) de cada casilla marcada
    for (const casilla of marcadas) {
      casilla.parentElement.remove();
    }
    error.classList.add("d-none");

    // Actualizo el contador
    document.querySelector("#totalTareas").textContent =
      document.querySelectorAll("#listaTareas li").length;

    console.log("borrarCompletadas: borradas " + marcadas.length + " tareas");
  }
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // Punto de corte de Bootstrap según el ancho (de mayor a menor)
  let punto;
  if (ancho >= 1400) {
    punto = "xxl (desde 1400 px)";
  } else if (ancho >= 1200) {
    punto = "xl (de 1200 a 1399 px)";
  } else if (ancho >= 992) {
    punto = "lg (de 992 a 1199 px)";
  } else if (ancho >= 768) {
    punto = "md (de 768 a 991 px)";
  } else if (ancho >= 576) {
    punto = "sm (de 576 a 767 px)";
  } else {
    punto = "xs (menos de 576 px)";
  }
  document.querySelector("#datoPunto").textContent = punto;

  // Tamaño de la pantalla
  document.querySelector("#datoPantalla").textContent = `${screen.width} × ${screen.height} px`;

  // URL e idioma del navegador
  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;

  console.log("verDatosVentana: ancho " + ancho + " px, punto de corte " + punto);
}