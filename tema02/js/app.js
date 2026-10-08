function saludar() {
    alert("¡Hola! Soy Miguel Ángel.");
    console.log("Botón «Saludar» pulsado.");
}

// b. «Simular un error»: no abre ventana, solo escribe en la consola
function simularError() {
    console.error("Error simulado: no se pudo completar la operación bancaria.");
}

// c. «¿Qué navegador soy?»: userAgent en alert y en consola
function detectarNavegador() {
    alert(navigator.userAgent);
    console.log("Botón «¿Qué navegador soy?» pulsado. userAgent:", navigator.userAgent);
}
function ejemplo() {
    console.log("Mensaje de despedida");
}