const number = /^\d{1,15}$/;
const text = /^[a-z A-ZñÑá-úÁ-Ú]{2,30}/;
const email = /^[a-zA-Z0-9._%+-]+@misena\.edu\.co$/;
const passwordd=/^[A-Za-z\d@$!%*?&0-9]{10,30}$/;


let flag

// DOCUMENTO DE IDENTIDAD 
const form = document.getElementById("validarFormulario");
const numeroDocumento = form.numeroDocumento.value;
const f1 = document.querySelector("#inputNumeroDocumento .feedback");

form.numeroDocumento.addEventListener('input', e => {
  e.preventDefault();

  console.log("se está escribiendo");
  if (number.test(e.target.value)) {
    form.numeroDocumento.classList.remove("is-invalid");
    form.numeroDocumento.classList.add("is-valid");
    f1.style.visibility = "hidden";
    f1.style.opacity = "0";
    flag = true;
  } else {
    form.numeroDocumento.classList.remove("is-valid");
    form.numeroDocumento.classList.add("is-invalid");
    f1.textContent = "Solo puede digitar valores numéricos con una longitud mínima de 1 caracter y máxima de 15";
    f1.style.visibility = "visible";
    f1.style.opacity = "1";
    flag = false;
  }
})
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    if(form.numeroDocumento.value==null || form.numeroDocumento.value==0 || flag==false){
        alert("Debe ingresar el numero de documento valido")
        form.numeroDocumento.focus()
        form.numeroDocumento.setAttribute("class", "form-control error");
    }
    else{
        form.submit()
    }
})

// NOMBRE
const nombre = form.Nombre.value;
const f2 = document.querySelector("#inputNombre .feedback");

form.Nombre.addEventListener('input', e => {
  e.preventDefault();

  console.log("se está escribiendo");
  if (text.test(e.target.value)) {
    form.Nombre.classList.remove("is-invalid");
    form.Nombre.classList.add("is-valid");
    f2.style.visibility = "hidden";
    f2.style.opacity = "0";
    flag = true;
  } else {
    form.Nombre.classList.remove("is-valid");
    form.Nombre.classList.add("is-invalid");
    f2.textContent = "Solo puede digitar letras y deben ser de minimo 2 y maximo 30";
    f2.style.visibility = "visible";
    f2.style.opacity = "1";
    flag = false;
  }
})
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    if(form.Nombre.value==null || form.Nombre.value==0 || flag==false){
        alert("Debe ingresar un nombre valido")
        form.Nombre.focus()
        form.Nombre.setAttribute("class", "form-control error");
    }
    else{
        form.submit()
    }
})


//APELLIDO
const apellido = form.apellido.value;
const f3 = document.querySelector("#inputApellido .feedback");

form.Apellido.addEventListener('input', e => {
  e.preventDefault();

  console.log("se está escribiendo");
  if (text.test(e.target.value)) {
    form.Apellido.classList.remove("is-invalid");
    form.Apellido.classList.add("is-valid");
    f3.style.visibility = "hidden";
    f3.style.opacity = "0";
    flag = true;
  } else {
    form.Apellido.classList.remove("is-valid");
    form.Apellido.classList.add("is-invalid");
    f3.textContent = "Solo puede digitar letras y deben ser de minimo 2 y maximo 30";
    f3.style.visibility = "visible";
    f3.style.opacity = "1";
    flag = false;
  }
})
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    if(form.Apellido.value==null || form.Apellido.value==0 || flag==false){
        alert("Debe ingresar un apellido valido")
        form.Apellido.focus()
        form.Apellido.setAttribute("class", "form-control error");
    }
    else{
        form.submit()
    }
})

//FECHA DE NACIMIENTO
const fechaNacimiento = new Date(form.fechaNacimiento.value);
const f4 = document.querySelector("#inputFechaNacimiento .feedback");
let fechaActual = new Date();
let haceDieciochoAños = new Date(fechaActual.getFullYear() - 18, fechaActual.getMonth(), fechaActual.getDate());

if (fechaNacimiento > haceDieciochoAños) {
    alert("Debes ser mayor de 18 años para registrarte");

}

form.fechaNacimiento.addEventListener('input', e => {
    e.preventDefault();

    console.log("se está escribiendo");
    const fechaIngresada = new Date(e.target.value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaIngresada.getFullYear();

    if (edad < 18) {
        form.fechaNacimiento.classList.remove("is-valid");
        form.fechaNacimiento.classList.add("is-invalid");
        f4.textContent = "Debes ser mayor de 18 años para registrarte";
        f4.style.visibility = "visible";
        f4.style.opacity = "1";
        flag = false;
    } else {
        form.fechaNacimiento.classList.remove("is-invalid");
        form.fechaNacimiento.classList.add("is-valid");
        f4.style.visibility = "hidden";
        f4.style.opacity = "0";
        flag = true;
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.fechaNacimiento.value == null || form.fechaNacimiento.value == 0 || flag == false) {
        alert("Debe ingresar una fecha de nacimiento válida");
        form.fechaNacimiento.focus();
        form.fechaNacimiento.classList.add("is-invalid");
    } else {
        form.submit();
    }
});

// CORREO ELECTRONICO
const correoElectronico = form.correoElectronico.value;
const f5 = document.querySelector("#inputEmail .feedback");

form.correoElectronico.addEventListener('input', e => {
  e.preventDefault();

  console.log("se está escribiendo");
  if (email.test(e.target.value)) {
    form.correoElectronico.classList.remove("is-invalid");
    form.correoElectronico.classList.add("is-valid");
    f5.style.visibility = "hidden";
    f5.style.opacity = "0";
    flag = true;
  } else {
    form.correoElectronico.classList.remove("is-valid");
    form.correoElectronico.classList.add("is-invalid");
    f5.textContent = "Solo puede digitar el correo misena.edu.co";
    f5.style.visibility = "visible";
    f5.style.opacity = "1";
    flag = false;
  }
})

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (form.correoElectronico.value == null || form.correoElectronico.value == 0 || flag == false) {
    alert("Debe ingresar un correo válido");
    form.correoElectronico.focus();
    form.correoElectronico.classList.add("is-invalid");
  } else {
    form.submit();
  }
});

// CONTRASEÑA
const password = form.Password.value;
const f6 = document.querySelector("#inputPassword .feedback");

form.Password.addEventListener('input', e => {
  e.preventDefault();

  console.log("se está escribiendo");
  if (passwordd.test(e.target.value)) {
    form.Password.classList.remove("is-invalid");
    form.Password.classList.add("is-valid");
    f6.style.visibility = "hidden";
    f6.style.opacity = "0";
    flag = true;
  } else {
    form.Password.classList.remove("is-valid");
    form.Password.classList.add("is-invalid");
    f6.textContent = "Dijite una contraseña que contenga mayusculas, minusculas, numeros y simbolos";
    f6.style.visibility = "visible";
    f6.style.opacity = "1";
    flag = false;
  }
})

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (form.Password.value == null || form.Password.value == 0 || flag == false) {
    alert("Debe ingresar una contraseña válida");
    form.Password.focus();
    form.Password.classList.add("is-invalid");
  } else {
    form.submit();
  }
});

//CONFIRMAR CONTRASEÑA
const confirmarPassword = form.confirmarPassword.value;
const f7 = document.querySelector("#inputConfirmarPassword .feedback");

form.confirmarPassword.addEventListener('input', e => {
  e.preventDefault();

  console.log("se está escribiendo");
  if (passwordd.test(e.target.value)) {
    form.confirmarPassword.classList.remove("is-invalid");
    form.confirmarPassword.classList.add("is-valid");
    f7.style.visibility = "hidden";
    f7.style.opacity = "0";
    flag = true;
  } else {
    form.confirmarPassword.classList.remove("is-valid");
    form.confirmarPassword.classList.add("is-invalid");
    f7.textContent = "Dijite una contraseña que contenga mayusculas, minusculas, numeros y simbolos";
    f7.style.visibility = "visible";
    f7.style.opacity = "1";
    flag = false;
  }
})

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (form.confirmarPassword.value == null || form.confirmarPassword.value == 0 || flag == false) {
    alert("Debe ingresar una contraseña válida");
    form.confirmarPassword.focus();
    form.confirmarPassword.classList.add("is-invalid");
  } else {
    form.submit();
  }
});


function mostrarTerminos() {
    const modalTerminos = document.getElementById('modalTerminos');
    modalTerminos.style.display = 'block';
  }
  
  function cerrarTerminos() {
    const modalTerminos = document.getElementById('modalTerminos');
    modalTerminos.style.display = 'none';
  }