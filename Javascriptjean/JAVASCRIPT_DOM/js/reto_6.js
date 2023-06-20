// Abre el modal de la figura especificada
function openModal(figura) {
  let modal = document.getElementById(figura + "Modal"); // Obtiene el elemento del modal según el ID proporcionado
  modal.style.display = "block"; // Establece el estilo de visualización del modal como "block" para mostrarlo
}

// Cierra el modal de la figura especificada
function closeModal(figura) {
  let modal = document.getElementById(figura + "Modal"); // Obtiene el elemento del modal según el ID proporcionado
  modal.style.display = "none"; // Establece el estilo de visualización del modal como "none" para ocultarlo
}

// Calcula el área de un círculo
function calcularAreaCirculo() {
  let radio = parseFloat(document.getElementById("radioCirculo").value); // Obtiene el valor del radio ingresado por el usuario
  let area = Math.PI * radio * radio; // Calcula el área del círculo utilizando la fórmula A = π * r^2

  document.getElementById("resultadoCirculo").innerHTML =
    "Área: " + area.toFixed(2); // Actualiza el contenido del elemento con el resultado del cálculo del área del círculo
}

// Calcula el perímetro de un círculo
function calcularPerimetroCirculo() {
  let radio = parseFloat(document.getElementById("radioCirculo").value); // Obtiene el valor del radio ingresado por el usuario
  let perimetro = 2 * Math.PI * radio; // Calcula el perímetro del círculo utilizando la fórmula P = 2πr

  document.getElementById("resultadoCirculo").innerHTML =
    "<br>Perímetro: " + perimetro.toFixed(2); // Actualiza el contenido del elemento con el resultado del cálculo del perímetro del círculo
}

// Calcula el área y el perímetro de un triángulo
function calcularAreaTriangulo() {
  let base = parseFloat(document.getElementById("baseTriangulo").value); // Obtiene el valor de la base ingresado por el usuario
  let altura = parseFloat(document.getElementById("alturaTriangulo").value); // Obtiene el valor de la altura ingresado por el usuario

  let area = 0.5 * base * altura; // Calcula el área del triángulo utilizando la fórmula A = (1/2) * base * altura
  let perimetro = base + 2 * Math.sqrt(base * base + altura * altura); // Calcula el perímetro del triángulo utilizando la fórmula P = base + 2 * √(base^2 + altura^2)

  document.getElementById("resultadoTriangulo").innerHTML =
    "Área: " + area.toFixed(2); // Actualiza el contenido del elemento con el resultado del cálculo del área del triángulo
}

// Calcula el perímetro de un triángulo
function calcularPerimetroTriangulo() {
  let base = parseFloat(document.getElementById("baseTriangulo").value); // Obtiene el valor de la base ingresado por el usuario
  let altura = parseFloat(document.getElementById("alturaTriangulo").value); // Obtiene el valor de la altura ingresado por el usuario

  let perimetro = base + 2 * Math.sqrt(base * base + altura * altura); // Calcula el perímetro del triángulo utilizando la fórmula P = base + 2 * √(base^2 + altura^2)

  document.getElementById("resultadoTriangulo").innerHTML =
    "<br>Perímetro: " + perimetro.toFixed(2); // Actualiza el contenido del elemento con el resultado del cálculo del perímetro del triángulo
}

// Calcula el área de un rectángulo
function calcularAreaRectangulo() {
  let base = parseFloat(document.getElementById("baseRectangulo").value); // Obtiene el valor de la base ingresado por el usuario
  let altura = parseFloat(document.getElementById("alturaRectangulo").value); // Obtiene el valor de la altura ingresado por el usuario

  let area = base * altura; // Calcula el área del rectángulo utilizando la fórmula A = base * altura

  document.getElementById("resultadoRectangulo").innerHTML =
    "Área: " + area.toFixed(2); // Actualiza el contenido del elemento con el resultado del cálculo del área del rectángulo
}

// Calcula el perímetro de un rectángulo
function calcularPerimetroRectangulo() {
  let base = parseFloat(document.getElementById("baseRectangulo").value); // Obtiene el valor de la base ingresado por el usuario
  let altura = parseFloat(document.getElementById("alturaRectangulo").value); // Obtiene el valor de la altura ingresado por el usuario

  let perimetro = 2 * (base + altura); // Calcula el perímetro del rectángulo utilizando la fórmula P = 2 * (base + altura)

  document.getElementById("resultadoRectangulo").innerHTML =
    "<br>Perímetro: " + perimetro.toFixed(2); // Actualiza el contenido del elemento con el resultado del cálculo del perímetro del rectángulo
}

// Calcula el área de un cuadrado
function calcularAreaCuadrado() {
  let lado = parseFloat(document.getElementById("ladoCuadrado").value); // Obtiene el valor del lado ingresado por el usuario

  let area = lado * lado; // Calcula el área del cuadrado utilizando la fórmula A = lado^2

  document.getElementById("resultadoCuadrado").innerHTML =
    "Área: " + area.toFixed(2); // Actualiza el contenido del elemento con el resultado del cálculo del área del cuadrado
}

// Calcula el perímetro de un cuadrado
function calcularPerimetroCuadrado() {
  let lado = parseFloat(document.getElementById("ladoCuadrado").value); // Obtiene el valor del lado ingresado por el usuario

  let perimetro = 4 * lado; // Calcula el perímetro del cuadrado utilizando la fórmula P = 4 * lado

  document.getElementById("resultadoCuadrado").innerHTML =
    "<br>Perímetro: " + perimetro.toFixed(2); // Actualiza el contenido del elemento con el resultado del cálculo del perímetro del cuadrado
}
