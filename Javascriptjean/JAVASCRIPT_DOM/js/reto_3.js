function convertirTemperatura() {
    // Obtener el valor ingresado por el usuario en el campo de texto con el id "inputTemperatura"
    let temperatura = parseFloat(document.getElementById("inputTemperatura").value);

    // Obtener las unidades de temperatura seleccionadas por el usuario en los selectores con los ids "selectDesde" y "selectHacia"
    let desde = document.getElementById("selectDesde").value;
    let hacia = document.getElementById("selectHacia").value;

    // Variable para almacenar el resultado de la conversión de temperatura
    let resultado;

    // Estructura de control if-else para determinar qué conversión realizar según las unidades seleccionadas
    if (desde === "fahrenheit" && hacia === "celsius") {
        // Convertir de Fahrenheit a Celsius
        resultado = (temperatura - 32) * 5 / 9;
    } else if (desde === "fahrenheit" && hacia === "kelvin") {
        // Convertir de Fahrenheit a Kelvin
        resultado = (temperatura - 32) * 5 / 9 + 273.15;
    } else if (desde === "celsius" && hacia === "fahrenheit") {
        // Convertir de Celsius a Fahrenheit
        resultado = temperatura * 9 / 5 + 32;
    } else if (desde === "celsius" && hacia === "kelvin") {
        // Convertir de Celsius a Kelvin
        resultado = temperatura + 273.15;
    } else if (desde === "kelvin" && hacia === "fahrenheit") {
        // Convertir de Kelvin a Fahrenheit
        resultado = (temperatura - 273.15) * 9 / 5 + 32;
    } else if (desde === "kelvin" && hacia === "celsius") {
        // Convertir de Kelvin a Celsius
        resultado = temperatura - 273.15;
    } else {
        resultado = temperatura; // Misma unidad de temperatura seleccionada en ambos selectores
    }

    // Limitar el resultado a dos cifras decimales utilizando el método toFixed()
    resultado = resultado.toFixed(2);

    // Mostrar el resultado en una ventana de alerta
    alert("El resultado de la conversión es: " + resultado);
}
