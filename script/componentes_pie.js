document.addEventListener("DOMContentLoaded", function () {
  // Cargar el archivo footer.html
  fetch("../pie_encabezado/pie.html")
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar el pie de página: ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      // Insertar el contenido en el div con id "footer-placeholder"
      document.getElementById("pie-script").innerHTML = data;
    })
    .catch(error => console.error("Error al cargar el pie de página:", error));
});
