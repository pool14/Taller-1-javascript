// Función para comprobar la selección del usuario
function comprobarSeleccion() {
  // Obtener los valores seleccionados por el usuario en los campos de texto con los ids "nombre", "apellido" y "actividad"
  let nombreSeleccionado = document.getElementById("nombre").value;
  let apellidoSeleccionado = document.getElementById("apellido").value;
  let actividadSeleccionada = document.getElementById("actividad").value;
  
  // Arreglos con las opciones válidas para nombre, apellido y actividad
  let nombres = ["tatiana", "erick", "johan"];
  let apellidos = ["cabrera", "granados", "quintero"];
  let actividades = ["java", "java avanzado", "php"];
  
  // Verificar si la selección del usuario coincide con las opciones válidas
  if (nombres.includes(nombreSeleccionado) && apellidos.includes(apellidoSeleccionado) && actividades.includes(actividadSeleccionada)) {
    // Obtener el índice de la selección de nombre en el arreglo nombres
    let index = nombres.indexOf(nombreSeleccionado);
    
    // Verificar si el apellido y la actividad seleccionada coinciden con la selección de nombre
    if (apellidos[index] === apellidoSeleccionado && actividades[index] === actividadSeleccionada) {
      // Si todas las selecciones coinciden, mostrar el mensaje de respuesta correcta
      document.getElementById("resultado").textContent = "La respuesta es correcta.";
      return;
    }
  }
  
  // Si no coincide alguna selección, mostrar el mensaje de respuesta incorrecta
  document.getElementById("resultado").textContent = "La respuesta es incorrecta.";
}
