const $canvas = document.querySelector("#canvas"),
$btnDescargar = document.querySelector("#btnDescargar");



// Listener del botón
$btnDescargar.addEventListener("click", () => {
      // Crear un elemento <a>
      let enlace = document.createElement('a');
      // El título
      enlace.download = "Canvas como imagen.png";
      // Convertir la imagen a Base64 y ponerlo en el enlace
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
});
