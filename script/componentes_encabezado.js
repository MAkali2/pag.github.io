document.addEventListener("DOMContentLoaded", function () {
  // Cargar el archivo header.html
  fetch("../pie_encabezado/encabezado.html")
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar el encabezado: ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      // Insertar el contenido en el div con id "header-placeholder"
      document.getElementById("encabezado-script").innerHTML = data;
    })
    .catch(error => console.error("Error al cargar el encabezado:", error));
});