# Navegadores y motores · Interacción con JavaScript

Proyecto del **Tema 02** de la asignatura de Desarrollo Web en Entorno Cliente (DWEC). Consiste en un pequeño sitio web de dos páginas que:

1. **Parte A (`index.html`)**: resume qué motores de renderizado y de JavaScript usa cada navegador y reflexiona sobre cómo probar una web en distintos navegadores.
2. **Parte B (`interaccion.html`)**: ofrece tres botones que ejecutan funciones JavaScript (`alert`, `console.log` y `console.error`) y permiten comprobar el `userAgent` del navegador en el que se abre.

> 🤖 **Este README ha sido creado por Claude (Anthropic)** a partir de los archivos y las capturas del proyecto.

---

## 📁 Estructura del proyecto

```
tema01/
├── index.html          # Parte A: tabla de navegadores y motores
├── interaccion.html    # Parte B: panel de botones con JavaScript
├── js/
│   └── app.js          # Funciones de los tres botones
├── capturas/           # Capturas de pantalla usadas en este README
└── README.md
```

## 🛠️ Tecnologías utilizadas

- **HTML5** para la estructura de las páginas.
- **Bootstrap 5.3.3** (cargado por CDN desde jsDelivr) para el diseño, la rejilla, las tarjetas, la tabla y el menú responsive.
- **JavaScript** (sin librerías) para la interacción de los botones.
- **Visual Studio Code + extensión Live Server** para servir el proyecto en local.

---

## 📄 Parte A · `index.html`

Página con cabecera de navegación (Index / Interacción) y tres bloques de contenido:

- **Tabla comparativa** de los principales navegadores: motor de renderizado, motor de JavaScript, base y si están basados en Chromium.
- **Texto explicativo** sobre por qué casi todos los navegadores comparten motor (construir uno desde cero es carísimo) y qué implica para quien desarrolla.
- **Tarjeta de compatibilidad** sobre *CSS Anchor Positioning* (`anchor-name`), con los navegadores donde funciona y donde falla, la fuente (caniuse.com) y la fecha de consulta.
- **Reflexión final** sobre el orden en que se probaría una web para un cliente: Chrome, Safari en iPhone real y Firefox.

| Navegador   | Motor de renderizado | Motor de JavaScript | Base     | ¿Chromium? |
|-------------|----------------------|---------------------|----------|------------|
| Chrome      | Blink                | V8                  | Chromium | Sí         |
| Edge        | Blink                | V8                  | Chromium | Sí         |
| Opera/Brave | Blink                | V8                  | Chromium | Sí         |
| Firefox     | Gecko                | SpiderMonkey        | Mozilla  | No         |
| Safari      | WebKit               | JavaScriptCore      | Apple    | No         |

### Captura de `index.html` (abierto en Edge)

![Captura de index.html](capturas/Captura_index_html.png)

---

## 🖱️ Parte B · `interaccion.html`

Página con un menú de navegación colapsable (se convierte en botón "hamburguesa" en pantallas pequeñas) y una tarjeta con el **Panel de botones**:

| Botón | Función | Qué hace |
|-------|---------|----------|
| **Saludar** (azul) | `saludar()` | Muestra un `alert` con un saludo que incluye el nombre del autor y escribe un mensaje en la consola. |
| **Simular un error** (rojo) | `simularError()` | No muestra nada al usuario; escribe un error en la consola con `console.error`. |
| **¿Qué navegador soy?** (gris) | `detectarNavegador()` | Muestra el `navigator.userAgent` en un `alert` y también en la consola. |

### Código JavaScript (`js/app.js`)

```javascript
function saludar() {
    alert("¡Hola! Soy Miguel Ángel.");
    console.log("Botón «Saludar» pulsado.");
}

// «Simular un error»: no abre ventana, solo escribe en la consola
function simularError() {
    console.error("Error simulado: no se pudo completar la operación bancaria.");
}

// «¿Qué navegador soy?»: userAgent en alert y en consola
function detectarNavegador() {
    alert(navigator.userAgent);
    console.log("Botón «¿Qué navegador soy?» pulsado. userAgent:", navigator.userAgent);
}
```

Los botones llaman a estas funciones mediante el atributo `onclick` y el script se carga al final del `<body>` con `<script src="js/app.js"></script>`.

---

## 🚀 Cómo ejecutar el proyecto

### Opción 1: abrir el archivo directamente
Haz doble clic en `index.html` o `interaccion.html`. Funciona, pero el navegador trata las URL `file:` como orígenes de seguridad únicos y puede mostrar un aviso en la consola (se ve en la última captura de este README).

### Opción 2: con Live Server (recomendada)
1. Abre la carpeta del proyecto en **Visual Studio Code**.
2. Instala la extensión **Live Server** (Ritwick Dey).
3. Haz clic derecho sobre `interaccion.html` → **Open with Live Server**.
4. El proyecto se abre en `http://127.0.0.1:5500/interaccion.html`.

### Captura de Live Server

VS Code con el servidor iniciado en el puerto 5500 (a la izquierda) y la página `interaccion.html` abierta en el navegador (a la derecha):

![Captura del Live Server](capturas/Captura_del_live_server.png)

---

## 🧪 Pruebas realizadas

### 1. Botón «¿Qué navegador soy?» en distintos navegadores

El `userAgent` cambia según el navegador y el dispositivo, y es útil para ver el motor que hay detrás.

**Chrome (Windows, escritorio):** el `userAgent` indica `Windows NT 10.0`, `Chrome/154` y `Safari/537.36`.

![Aviso en Chrome](capturas/Captura_de_aviso_navegador_crhome.png)

**Edge (emulación de móvil Android):** el `userAgent` indica `Android 16; Pixel 10` y `Edg/154`. Fíjate en que aparecen también `AppleWebKit`, `KHTML, like Gecko` y `Safari`: son restos históricos de compatibilidad, no significan que Edge use WebKit o Gecko. Su motor real es **Blink**.

![Aviso en Edge](capturas/Captura_aviso_edge.png)

### 2. Consola del navegador

Tras pulsar los tres botones, la consola muestra:

- un mensaje informativo del botón **Saludar**,
- un **error en rojo** del botón **Simular un error**,
- el `userAgent` del botón **¿Qué navegador soy?**.

Cada mensaje indica a la derecha el archivo y la línea de `app.js` que lo generó (`app.js:3`, `app.js:8` y `app.js:14`).

![Los tres botones en la consola](capturas/Captura_de_los_tres_botones_en_la_consola.png)

### 3. Diseño responsive (formato móvil)

Con las herramientas de desarrollo de Edge en modo *Responsive* (400 × 645) el menú se colapsa en el botón "hamburguesa" y los botones se reorganizan en varias filas gracias a las utilidades `d-flex flex-wrap gap-2` de Bootstrap.

![interaccion.html en formato móvil](capturas/Captura_interaccion_html_formato_móvil.png)

---

## 📚 Conclusiones

- Casi todos los navegadores actuales se basan en **Chromium (Blink + V8)**; las alternativas son **Firefox (Gecko + SpiderMonkey)** y **Safari (WebKit + JavaScriptCore)**.
- Conviene probar siempre una web en los **tres motores** y consultar fuentes como MDN o *Can I Use* antes de usar una función nueva.
- Las herramientas de desarrollo (consola, modo responsive) permiten depurar y comprobar el comportamiento, pero en móvil es preferible validar también en **dispositivos reales**.
- `console.log` y `console.error` sirven para informar y depurar sin molestar al usuario, mientras que `alert` interrumpe la navegación.

---

*README creado por Claude (Anthropic).*