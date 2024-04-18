
// descargar imagenes
function descargarImagen(ruta) {
    var enlace = document.createElement('a');
    enlace.href = ruta;
    enlace.download = obtenerNombreArchivo(ruta);
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}
function obtenerNombreArchivo(ruta) {
    var partesRuta = ruta.split('/');
    return partesRuta[partesRuta.length - 1];
}