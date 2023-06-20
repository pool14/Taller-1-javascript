function determinarTipoTriangulo() {
    // Obtener los valores de los lados del triángulo ingresados por el usuario
    let lado1 = parseFloat(document.getElementById("inputLado1").value);
    let lado2 = parseFloat(document.getElementById("inputLado2").value);
    let lado3 = parseFloat(document.getElementById("inputLado3").value);

    // Variable para almacenar el tipo de triángulo
    let tipoTriangulo;

    // Estructura de control if-else para determinar el tipo de triángulo según las longitudes de los lados
    if (lado1 === lado2 && lado1 === lado3) {
        // Si los tres lados son iguales, es un triángulo equilátero
        tipoTriangulo = "Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        // Si al menos dos lados son iguales, es un triángulo isósceles
        tipoTriangulo = "Isósceles";
    } else {
        // Si todos los lados son diferentes, es un triángulo escaleno
        tipoTriangulo = "Escaleno";
    }

    // Mostrar el tipo de triángulo en una ventana de alerta
    alert("El triángulo es de tipo: " + tipoTriangulo);
}
