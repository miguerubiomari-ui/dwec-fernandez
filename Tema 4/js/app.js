/*
  Tarea 3 · DWEC · [Tu nombre y apellidos]
  Variables, tipos y conversiones.

  Cómo usar esta plantilla:
  · Hay una función por ejercicio. Cada una se ejecuta al pulsar su botón «Ejecutar» de index.html.
  · Escribe tu código DENTRO de cada función, donde pone TODO. Cuando lo hagas, borra el TODO.
  · Solo console.log() y alert(): el JavaScript no escribe nada dentro de la página.
  · let y const, nunca var. Comillas rectas (" o ').
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");


// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  // Ejemplo: una variable y su typeof en la consola
  const edad = 20;   // number
  console.log("edad =", edad, "→", typeof edad);

  const letras = "Esta variable es un string";
  let verdad = true;
  const nulo = null;
  let indefinido; 
  const numero_grande = 10000000000;

  console.log("texto = ", letras, "->", typeof letras);
  console.log("Booleano = ", verdad, "->", typeof verdad);
  console.log("Nulo = ", nulo, "->", typeof nulo);
  console.log("Indefinido = ", indefinido, "->", typeof indefinido);
  console.log("Int grande = ", numero_grande, "->", typeof numero_grande);

  indefinido = 7;
  console.log("Indeninido con valor actualizado = ", indefinido, "->", typeof indefinido);

}


// Ejercicio 2 · Conversiones explícitas
// Escribe el comentario «espero …» ANTES de ejecutar. Si fallas, no lo cambies: márcalo en la tabla de la página.
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  // Ejemplo: una conversión, tu predicción y el resultado con su tipo
  const a = String(123);   // espero [tu predicción]
  console.log("String(123) →", a, typeof a);

  const b = Number("1234"); // Espero de tipo Number
  console.log('Number("1234")',b,typeof b); 

  const c = Number("12abc"); //Espero Nan;
  console.log('Number("12abc")',c, typeof c);

  const d = Number(""); //Espero 0 de tipo Number
  console.log('Number("")', d, typeof d);
  
  const e = Number(true); //Espero 1 de tipo Number
  console.log = ('Number(true)', e, typeof e);

  const f = Boolean(0); // Espero false
  console.log('Boolean(0)', f, typeof f);

  const g = Boolean("texto"); // Espero Ture
  console.log('Boolean("texto")', g, typeof g);

  const h = Boolean(""); // Espero false
  console.log('Boolean("")', h, typeof h);

}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  // Ejemplo: una expresión que mezcla tipos
  console.log('"5" - 2 →', "5" - 2);   // espero [tu predicción]


  // Ejemplo: la misma pareja comparada con == y con ===
  console.log('5 == "5" →', 5 == "5");     // espero [tu predicción]
  console.log('5 === "5" →', 5 === "5");   // espero [tu predicción]

  console.log('"6" == 7 ->', "6" == 7); // Espero un false
  console.log('"6" == 7 ->', "6" === 7); // Espero un false

  console.log('"" == 1 ->', "" == 1);  // Espero yn false
  console.log('"" == 1 ->', "" === 1);  // Espero un false

  console.log('true == 1 ->', true == 1);// espero true
  console.log('true == 1 ->', true === 1);// espero false

console.log('x == undefined ->', x == undefined);     //Espero un true
console.log('x === undefined ->', x === undefined);   //Espero un true

}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Tus datos, con const
  const nombre = "[Miguel Ángel Fernández Vega]";

  const ciclo = "[Desarrollo de aplicaciones web]";
  const curso = "[2º]";
  const aficion = "[Videojuegos]";

   let horasEstudiades = 7;
  horasEstudiades += 3; 
  // Un dato que cambia, con let


  // La ficha con plantilla de cadena: backticks (`) y ${ }
  const ficha = `Mi nombre es ${nombre} Mi ciclo es ${ciclo} Mi curso es ${curso} Mi afición es ${aficion}`;


  const fichaConMas = `Mi nombre es ${nombre}` + ` Mi ciclo es ${ciclo}` + ` Mi curso es es ${curso}` + ` Mi afición es ${aficion}`;
  console.log(fichaConMas);
  alert(fichaConMas);

    console.log('Comparación de fichas: ficha === fichaConMas', ficha === fichaConMas); // Tiene que dar true

}