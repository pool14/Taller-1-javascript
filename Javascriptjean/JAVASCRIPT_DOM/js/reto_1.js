function consultarPropiedad() {
    // Obtener el valor ingresado por el usuario en el campo de texto con el id "palabra"
    let palabra = document.getElementById("palabra").value;

    // Obtener el valor seleccionado por el usuario en el elemento con el id "opcion"
    let opcion = document.getElementById("opcion").value;

    // Variable para almacenar el resultado de la operación
    let resultado;

    // Estructura de control switch para determinar qué operación realizar según la opción seleccionada
    switch (opcion) {
        case "longitud":
            // Calcular y asignar el resultado de la longitud de la palabra
            resultado = "Longitud de la palabra: " + palabra.length;
            break;
        case "mayusculas":
            // Calcular y asignar el resultado de la palabra en mayúsculas
            resultado = "Palabra en mayúsculas: " + palabra.toUpperCase();
            break;
        case "minusculas":
            // Calcular y asignar el resultado de la palabra en minúsculas
            resultado = "Palabra en minúsculas: " + palabra.toLowerCase();
            break;
        case "primer_caracter":
            // Calcular y asignar el resultado del primer carácter de la palabra
            resultado = "Primer carácter de la palabra: " + palabra.charAt(0);
            break;
        default:
            // Opción inválida seleccionada
            resultado = "Opción inválida";
            break;
    }

    // Mostrar el resultado en una ventana de alerta
    window.alert(resultado);
}
