# Tarea 3 · Variables, tipos y conversiones

**Autor:** Miguel Ángel Fernández Vega · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27

Esta carpeta contiene un cuaderno de laboratorio con cuatro ejercicios de JavaScript sobre variables, tipos, conversiones y coerción. Para verlo: abrir la carpeta en VS Code, pulsar **Go Live**, abrir la consola con F12 y pulsar «Ejecutar» en cada ejercicio. Cada card muestra el código, lo que esperaba y lo que salió de verdad.

## Capturas

### a) La página entera

<img src="capturas/a-pagina.png" alt="La página entera con mi nombre en la navbar" width="600">

Se ve mi nombre en la navbar (con «Tarea 3 · DWEC» a la derecha), el título «Variables, tipos y conversiones», las instrucciones de uso (F12 y «Ejecutar») y la card del Ejercicio 1 con su código. La etiqueta roja «Falló» sirve para marcar las predicciones en las que me equivoqué.

### b) Consola del ejercicio 1

![Consola del ejercicio 1](capturas/b-consola-ej1.png)

Salida de `typeof` para cada tipo: `20` es `number`, el texto es `string`, `true` es `boolean`, `null` da `object`, la variable sin valor da `undefined` y `10000000000` sigue siendo `number`. La última línea muestra que, tras reasignar la variable `let` con el valor `7`, pasa a ser `number`.

### c) Consola del ejercicio 2

![Consola del ejercicio 2](capturas/c-consola-ej2.png)

Conversiones explícitas: `String(123)` da el texto `"123"`, `Number("1234")` da el número `1234`, `Number("12abc")` da `NaN` y `Number("")` da `0`. En los cuatro casos el tipo resultante es `string` o `number`, incluso con `NaN`.

### d) Consola del ejercicio 3

![Consola del ejercicio 3](capturas/d-consola-ej3.png)

Coerción y comparaciones: `"5" - 2` da `3`, `5 == "5"` es `true` pero `5 === "5"` es `false`, y `"6" == 7` y `"" == 1` dan `false`. También aparecen dos comparaciones con `true` y `1`, y al final un `Uncaught ReferenceError: x is not defined` en `app.js:95`, porque se usa una variable fuera de su ámbito.

### e) Consola del ejercicio 4, con el error de la const

![Consola del ejercicio 4 con el error de la const](capturas/e-consola-ej4.png)

Ficha personal construida con plantillas de cadena: nombre, ciclo (Desarrollo de aplicaciones web), curso (2º) y afición (Videojuegos). La última línea compara dos fichas con `===` y da `false`, porque son objetos distintos aunque tengan contenido parecido.

## Reflexión

Lo más intuitivo fue `"5" - 2`, que da `3`: el operador `-` solo trabaja con números y convierte el texto sin avisar. También resultó natural `Number("1234")` y que `==` compare «por valor» (`5 == "5"` da `true`) mientras que `===` también exige el mismo tipo (`5 === "5"` da `false`). Lo que más me sorprendió fue `typeof null`, que devuelve `object` aunque `null` signifique «sin valor», y que `Number("")` dé `0` en lugar de `NaN`, cuando `Number("12abc")` sí da `NaN`. Otro punto curioso es que `NaN` tiene tipo `number`. Del ejercicio 3 me quedo con que usar `===` evita estas conversiones ocultas, y con que el `ReferenceError` de `x` me recordó que una variable solo existe en el ámbito donde se declara. Por último, en el ejercicio 4 comparar dos fichas con `===` da `false`: con objetos se compara la referencia, no el contenido.

## Fuentes

- [typeof · MDN Web Docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof)
- [Igualdad en JavaScript · MDN Web Docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)

## Uso de IA

He usado Claude (Anthropic) para redactar este README a partir de mis capturas de pantalla.