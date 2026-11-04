/*
  Tarea 6 · DWEC · Miguel Ángel Fernández Vega 
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
 // const estudiante = [Nombre, Apellidos, Curso, Edad];

  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================


const estudiante = {
  nombre: "Miguel Ángel",
  apellidos: "Fernández Vega",
  edad: 21,
  curso: "2º DAW",

  presentarse: function () {
    console.log("presentarse() ejecutado");
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
}
};

function verFicha() {


  //Vacio salida1
  const salida = document.getElementById("salida1");
  salida.textContent = ""; 

  //Creo la lista con la clase de bootrap
  const lista = document.createElement("ul");
  lista.classList.add("list-group");
  
  //Array con las claves
  const claves = ["nombre", "apellidos", "edad", "curso"];

  
  claves.forEach(function(clave){
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = clave + ": " + estudiante[clave];
    lista.append(li);
  });

  //Meto la lista en la página
  salida.append(lista);
  console.log(estudiante);

  // P con la frase
  const frase = document.createElement("p");
  frase.textContent = estudiante.presentarse();
  frase.classList.add("mt-3");
  salida.append(frase);
}

//Para sumar la edad
function cumplirAnios() {

  estudiante.edad = estudiante.edad +1;

  verFicha();
}

//Para borrar curso usando delete
function quitarCurso() {

  delete estudiante.curso;
  console.log("Se ha borrado curso", estudiante);

  verFicha();
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  // Si no quedan colores da un aviso y no se elimina nada
  if (colores.length === 0){
    avisar2("No quedan colores");
  } else {
    // pop quita el últiumo elemento
    const quitar = colores.pop();
    mostrarColores();
    console.log("Ejercicio 2: pop → ha salido:", quitar);
  }
}

function quitarPrimero() {
  
  if (colores.length === 0){
    avisar2("No quedan colores");
  }else {
    // shift quita el primer elemento
    const quitar = colores.shift();
    mostrarColores();
    console.log("Ejercicio 2: shift → ha salido:", quitar);
  }
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {

  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = "Hay " + productos.length + " productos";
  console.log("mostrarProductos: ", productos);
  
}

function ordenarPorPrecio() {
  // Copio el array porque sort() modifica el array sobre el que se llama
  const copia = [...productos];

  // Si a.precio - b.precio es negativo, a va antes, de más barato a más caro
  copia.sort(function (a, b) {
    return a.precio - b.precio;
  });

  // Pinto la copia ordenada y lo digo en el mensaje
  pintarProductos(copia);
  document.querySelector("#mensaje3").textContent = "Ordenados de más barato a más caro.";
  console.log("ordenarPorPrecio:", copia);
}

function filtrarCaros() {
  // Filter recorre cada elemento del array y comprueba si el if da true, actualizando el array con solo los caros
  const caros = productos.filter(function (producto) {
    if (producto.precio > 50) {
      return true;
    } else {
      return false;
    }
  });

  // Pinto solo los caros y escribo cuántos son
  pintarProductos(caros);
  document.querySelector("#mensaje3").textContent = "Hay " + caros.length + " productos de más de 50 €";
  console.log("filtrarCaros:", caros);
}

function buscarProducto() {


  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3"); 

  if (texto === ""){
    mensaje.textContent = "Escribe el nombre de un producto antes de pulsar «Buscar».";
    console.log("buscarProducto: casilla vacía");
    return;
  }

  //el find devuelve el primer producto cuyo nombre empiece por minuscual
  const encontrado = productos.find(function(producto){
    return producto.nombre.toLowerCase().includes(texto);
  });

  if(encontrado === undefined){

    mensaje.textContent = "No hay ningún producto que contenga «" + texto + "».";
    pintarProductos([]);
  }else {
    mensaje.textContent = "Primer producto encontrado: " + encontrado.nombre;
    pintarProductos([encontrado]);
  }

  console.log("buscarProducto:", texto, "→", encontrado);
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Miguel Ángel",
  notas: [],
  // TODO: método media(): si no hay notas devuelve 0; si hay, la suma (con reduce) dividida entre el número de notas.

  // Devuelve false si la nota no es un número o está fuera del rango 0-10
  anadirNota: function(nota){
    if (Number.isNaN(nota) || (nota < 0 || nota > 10)){
      return false;
    }
    this.notas.push(nota);
    return true;
  },

  //Media de las notas con el reduce
  media: function (){
    if (this.notas.length === 0){
      return 0;
    }
    const suma = this.notas.reduce(function(acumulado, nota){
      return acumulado + nota;
    }, 0);
    return suma / this.notas.length;
  }
};

function mostrarNotas() {
  // Vacío la lista de notas antes de volver a pintarla
  const contenedor = document.querySelector("#notas");
  contenedor.textContent = "";

  // Un badge por nota: verde si es 5 o más, rojo si no
  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-1");
    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }
    badge.textContent = nota;
    contenedor.append(badge);
  });

  // Escribo la media con dos decimales, o aviso de que no hay notas
  const media = document.querySelector("#media");
  if (alumno.notas.length === 0) {
    media.textContent = "Todavía no hay notas.";
  } else {
    media.textContent = "Media de " + alumno.notas.length + " notas: " + alumno.media().toFixed(2);
  }

  console.log("mostrarNotas:", alumno.notas, "media:", alumno.media());
}

function anadirNota() {
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");
  const texto = casilla.value.trim();

  // Compruebo la casilla vacía ANTES de convertir, porque Number("") vale 0
  if (texto === "") {
    error.textContent = "Escribe una nota antes de pulsar «Añadir nota».";
    error.classList.remove("d-none");
    console.log("anadirNota: casilla vacía");
    return;
  }

  // Convierto a número y dejo que el método del objeto valide el rango
  const valor = Number(texto);
  const valida = alumno.anadirNota(valor);

  if (valida === false) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    console.log("anadirNota: nota no válida →", texto);
    return;
  }

  // Todo bien: oculto el error, vacío la casilla y repinto
  error.classList.add("d-none");
  casilla.value = "";
  mostrarNotas();
  console.log("anadirNota: añadida", valor);
}

function borrarNotas() {
  // Dejo el array vacío y repinto
  alumno.notas = [];
  mostrarNotas();
  console.log("borrarNotas: lista vacía");
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  // TODO: con map(), un array nuevo con el doble de cada número.
  // TODO: escribe en #salida5 el resultado y, debajo, numeros (para que se vea que no ha cambiado).
}

function verPares() {
  // TODO: con filter(), los números pares (n % 2 === 0). Escríbelos en #salida5 como en verDobles().
}

function verSuma() {
  // TODO: con reduce(), la suma de todos los números (empieza en 0). Escríbela en #salida5.
}

function verCadena() {
  // TODO: los tres seguidos: los pares, después sus dobles y al final la suma de esos dobles.
  //       Escribe en #salida5 una línea por paso.
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  // TODO: vacía #ciudades y pon un badge por ciudad con su posición: «0 · Granada», «1 · Sevilla»...
  //       Pista: forEach le pasa a tu función dos datos: function (ciudad, posicion) { ... }.
}

function verSlice() {
  // TODO: guarda ciudades.slice(2, 5) y escribe en #salida6 qué devuelve y cuántas ciudades siguen en el array.
}

function hacerSplice() {
  // TODO: si quedan menos de 3 ciudades, avisa en #salida6 de que hay que restaurar y no hagas nada más.
  // TODO: si no, ciudades.splice(2, 2): escribe en #salida6 qué devuelve y cuántas quedan, y vuelve a pintar.
}

function restaurarCiudades() {
  // TODO: vuelve a copiar ciudadesOriginal en ciudades y pinta.
}

function buscarCiudad() {
  // TODO: lee #buscarCiudad (value y trim). Si está vacío, avisa.
  // TODO: escribe en #salida6 lo que dan includes() e indexOf() con ese nombre. Si no está, indexOf da -1.
}

mostrarCiudades(); 