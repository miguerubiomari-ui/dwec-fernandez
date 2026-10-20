# Tarea 4 · Calculadora y bucles

**Autor:** Miguel Ángel Fernández Vega · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27

Esta carpeta contiene una página con Bootstrap llamada «Calculadora y bucles»: una calculadora con seis operaciones, dos comparaciones y seis bucles (tres con texto y tres con badges). Para probarla, abre la carpeta en VS Code, pulsa **Go Live**, escribe dos números y pulsa los botones con la consola abierta (F12).

## Capturas

### a) La página entera

<img src="capturas/a-pagina.png" alt="La página entera con mi nombre en la navbar" width="600">

Se ve mi nombre en la navbar, en la cabecera y en el pie. Las cards están repartidas con la rejilla: los números y el resultado arriba, y debajo la calculadora, las comparaciones y los bucles en tres columnas.

### b) La página en el móvil

<img src="capturas/b-movil.png" alt="La página en el modo móvil de las herramientas de desarrollo" width="300">

En el modo dispositivo de F12 las columnas pasan a ocupar todo el ancho (`col-12`) y las cards quedan una debajo de otra, en lugar de repartidas en columnas como en pantalla grande.

### c) El error de dividir entre 0

![El error de dividir entre 0 con la consola abierta](capturas/c-dividir-cero.png)

En la página aparece un aviso rojo con el texto «No se puede dividir por cero». En la consola sale el `console.warn` correspondiente, porque en JavaScript `5 / 0` da `Infinity` y por eso lo controlo con un `if`.

### d) Los tres bucles con el número 0

![Los tres bucles de texto con el número 0 y la consola abierta](capturas/d-bucles-cero.png)

Con 0, el `for` y el `while` no se repiten ninguna vez y muestran «Total: 0 repeticiones». El `do…while` se repite una vez y muestra «repetición 1 de 0» y «Total: 1 repetición».

### e) Un bucle con badges

![Un bucle con badges](capturas/e-badges.png)

He puesto un 7 en el número 1. El color de cada badge se elige con el operador ternario: los pares son azules (`primary`) y los impares grises (`secondary`).

## Reflexión

El `for` es el más cómodo cuando sé de antemano cuántas vueltas quiero, porque junta en una línea el contador, la condición y el incremento. El `while` comprueba la condición antes de cada vuelta y lo uso cuando no sé cuántas veces voy a repetir, pero tengo que acordarme de hacer `i++` dentro o el bucle sería infinito. El `do…while` ejecuta el bloque primero y comprueba después, así que siempre se repite al menos una vez. Con el 0 se ve la diferencia: el `for` y el `while` no entran ninguna vez y dan «Total: 0 repeticiones», mientras que el `do…while` escribe «repetición 1 de 0» y «Total: 1 repetición», porque la condición `i <= veces` solo se evalúa al final. Usaría `do…while` cuando necesito hacer algo una vez antes de decidir si sigo, por ejemplo pedir un dato y repetirlo si no es válido.

## Fuentes

- [for · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for)
- [while · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while)
- [do...while · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while)
- [Operador condicional (ternario) · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
- [Rejilla de Bootstrap 5.3](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Button group · Bootstrap 5.3](https://getbootstrap.com/docs/5.3/components/button-group/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## Uso de IA

He usado Claude (Anthropic) para revisar mi `app.js`, entender los bucles, además de aplicarles los comparadores ternarios y para preparar la maquetación con Bootstrap de `index.html` a partir del ejemplo del enunciado. Después revisé los cambios, los probé en el navegador con la consola abierta y adapté lo que no entendía para poder explicarlo en la defensa.