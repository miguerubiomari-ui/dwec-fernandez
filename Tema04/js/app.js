/*
  Tarea 4 · DWEC · Miguel Ángel Fernández Vega
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  // TODO: como sumar(), con el operador -
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2" );

  if (Number.isNaN(n1) || Number.isNaN(n2)){
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: falta algún número");
  }else{
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  // TODO: como sumar(), con el operador *
  const n1 = leerNumero("numero1");
  const n2 =leerNumero("numero2");

  if ((Number.isNaN(n1) || Number.isNaN(n2)) && (n2 !== 0)){
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: falta algún número");
  }else {
    const resultado = n1 * n2;
    mostrar (`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`)
  }
}

function dividir() {
  // TODO: como sumar(), con el operador /
  // TODO: si el número 2 es 0, muestra un error en rojo. Ojo: en JavaScript, 5 / 0 no da error, da Infinity.
  const n1 = leerNumero("numero1");
  const n2 =leerNumero("numero2");

  if ((Number.isNaN(n1) || Number.isNaN(n2)) && (n2 !== 0)){
    mostrar("Escribe los dos números antes de operar y no pongas 0 como divisor.", "danger");
    console.warn("Dividir: falta algún número");
  }else if (n2 === 0){
    mostrar("No se puede dividir por cero. Prueba de nuevo.","danger");
    console.warn("No se puede dividir entre 0");
  } else {
    const resultado = n1 / n2;
    mostrar (`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`)
  }
}

function potencia() {
  // TODO: como sumar(), con el operador **
    const n1 = leerNumero("numero1");
    const n2 = leerNumero("numero2");

    if (Number.isNaN(n1) || Number.isNaN(n2)){
        mostrar("Escribe los dos número antes de operar.", "danger");
        console.warn("Potencia: falta algún número");
    } else{
        const resultado = n1 ** n2;
        mostrar(`${n1} ** ${n2} = ${resultado}`);
        console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
    }
}
 
function modulo() {
  // TODO: el resto de la división, con el operador %
  // TODO: si el número 2 es 0, muestra un error en rojo (5 % 0 da NaN).
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)){
    mostrar("Escribe los dos números antes de operar.","danger");
    console.warn("Resto: Falta algún número");
  }else if (n2 ===0){
    mostrar("No se puede dividir por cero. Prueva con otro número.", "danger");
    console.warn("No se puede dividir entre cero");
  }else{
    const resultado = n1 % n2;
        mostrar(`${n1} % ${n2} = ${resultado}`);
        console.log(`Resto: ${n1} % ${n2} = ${resultado}`);
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  // TODO: con if, else if y else, di cuál de los dos números es mayor o si son iguales.
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

    if (Number.isNaN(n1) || Number.isNaN(n2)){
    mostrar("Escribe los dos números antes de operar.","danger");
    console.warn("Resto: Falta algún número");
  }else if (n1 === n2){
    mostrar("Los dos números son iguales. Escribe números distintos");
    console.warn("Los números tienen el mismo valor");
  }else if (n1 > n2){
    mostrar(`${n1} es mayor que ${n2}`);
    console.log(`${n1} > ${n2}`);
  }else{
    mostrar(`${n2} es mayor que ${n1}`);
    console.log(`${n2} > ${n1}`);
  }
}

function parOImpar() {
  // TODO: solo con el número 1. Usa el operador % y el ternario ( condición ? "par" : "impar" ).
  // TODO: si el número tiene decimales, avisa de que no es ni par ni impar.
  const n1 =  leerNumero("numero1");
  const n2 = leerNumero("numero2");


  // Cambiar en casa hacer el else con el ternario
  if (Number.isNaN(n1) && n2 !== ''){
    mostrar("Escribe solo un número", "danger");
    console.warn("Par o impar: faltan valores");
  }else if(n1 % 2 === 0){
    mostrar(`El número: ${n1} es par`);
    console.log(`${n1} es par`);
  }else{
    mostrar(`El número: ${n1} es impar`);
    console.log(`${n1} es impar`);
  }
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar("Escribe un número sin decimales que no supere el máximo de repeticiones", "danger");
    console.warn("For: el número falta, es decimal o supera el máximo");
    return;
  }

  for (let i = 1; i <= veces; i++) {
    anadirLinea(`for · repetición ${i} de ${veces}`);
    contador++;
  }

  anadirLinea(`Total: ${contador} ${contador === 1 ? "repetición" : "repeticiones"}`);
  console.log(`For: total ${contador}`);
}

function bucleWhile() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar("Escribe un número sin decimales que no supere el máximo de repeticiones", "danger");
    console.warn("While: el número falta, es decimal o supera el máximo");
    return;
  }

  let i = 1;
  while (i <= veces) {
    anadirLinea(`while · repetición ${i} de ${veces}`);
    contador++;
    i++;
  }

  anadirLinea(`Total: ${contador} ${contador === 1 ? "repetición" : "repeticiones"}`);
  console.log(`While: total ${contador}`);
}

function bucleDoWhile() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar("Escribe un número sin decimales que no supere el máximo de repeticiones", "danger");
    console.warn("Do...while: el número falta, es decimal o supera el máximo");
    return;
  }

  let i = 1;
  do {
    anadirLinea(`do...while · repetición ${i} de ${veces}`);
    contador++;
    i++;
  } while (i <= veces);

  anadirLinea(`Total: ${contador} ${contador === 1 ? "repetición" : "repeticiones"}`);
  console.log(`Do...while: total ${contador}`);
}




// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar("Escribe un número sin decimales que no supere el máximo de repeticiones", "danger");
    console.warn("Badges for: el número falta, es decimal o supera el máximo");
    return;
  }

  for (let i = 1; i <= veces; i++) {
    const color = i % 2 === 0 ? "primary" : "secondary";
    anadirBadge(i, color);
    contador++;
  }

  anadirLinea(`Total: ${contador} ${contador === 1 ? "repetición" : "repeticiones"}`);
  console.log(`Badges for: total ${contador}`);
}

function badgesWhile() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar("Escribe un número sin decimales que no supere el máximo de repeticiones", "danger");
    console.warn("Badges while: el número falta, es decimal o supera el máximo");
    return;
  }

  let i = 1;
  while (i <= veces) {
    const color = i % 2 === 0 ? "primary" : "secondary";
    anadirBadge(i, color);
    contador++;
    i++; // sin esto el bucle sería infinito
  }

  anadirLinea(`Total: ${contador} ${contador === 1 ? "repetición" : "repeticiones"}`);
  console.log(`Badges while: total ${contador}`);
}

function badgesDoWhile() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar("Escribe un número sin decimales que no supere el máximo de repeticiones", "danger");
    console.warn("Badges do...while: el número falta, es decimal o supera el máximo");
    return;
  }

  let i = 1;
  do {
    const color = i % 2 === 0 ? "primary" : "secondary";
    anadirBadge(i, color);
    contador++;
    i++;
  } while (i <= veces);

  anadirLinea(`Total: ${contador} ${contador === 1 ? "repetición" : "repeticiones"}`);
  console.log(`Badges do...while: total ${contador}`);
}