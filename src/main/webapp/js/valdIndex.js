const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

const campos = {
  usuario: false,
  email: false,
  nombre: false,
  apellido: false,
  password: false
};

let band = 1;

const validarformulario = (e) => {
  switch (e.target.name) {
    case "usuario":
      validarCampo(expresiones.usuario, e.target, 'usuario');
      //console.log(band);
      break;
    case "nombre":
      validarCampo(expresiones.nombre, e.target, 'nombre');
      break;
    case "apellido":
      validarCampo(expresiones.apellido, e.target, 'apellidos');
      break;
    case "email":
      validarCampo(expresiones.correo, e.target, 'email');
      break;
    case "password":
      validarContra(e.target, 'password');
      validarPassword2();
      break;
    case "password2":
      validarPassword2();
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
    document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
    document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
    document.querySelector(`#grupo_${campo} i`).classList.remove('bxs-x-circle');
    document.querySelector(`#grupo_${campo} i`).classList.add('bxs-check-circle');
    campos[campo] = true;
    band = 0;
  }
  else {
    document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
    document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
    document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
    document.querySelector(`#grupo_${campo} i`).classList.add('bxs-x-circle');
    document.querySelector(`#grupo_${campo} i`).classList.remove('bxs-check-circle');
    campos[campo] = false;
    band = 1;
  }

};


const validarContra = (input, campo) => {
  let vald = false;

  //console.log(input.value.length);
  if (input.value.match(/[a-z]/) && input.value.match(/[0-9]/) && input.value.match(/[A-Z]/) && input.value.match(/[!\@\$\%\#\&\(\)\_\-\*\+\-\=\?\¿\<\>\.\,]/)) {
    vald = true;
  }
  else {
    document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
    document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
    document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
    document.querySelector(`#grupo_${campo} i`).classList.add('bxs-x-circle');
    document.querySelector(`#grupo_${campo} i`).classList.remove('bxs-check-circle');
    campos[campo] = false;
  }

  if (input.value.length > 6 && vald) {
    document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
    document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
    document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
    document.querySelector(`#grupo_${campo} i`).classList.remove('bxs-x-circle');
    document.querySelector(`#grupo_${campo} i`).classList.add('bxs-check-circle');
    campos[campo] = true;
  }

};


const validarPassword2 = () => {
  const inputPassword1 = document.getElementById('password');
  const inputPassword2 = document.getElementById('password2');

  //console.log(inputPassword2.value);

  if (inputPassword1.value != inputPassword2.value) {
    document.getElementById('grupo_password2').classList.add('formulario_grupo-incorrecto');
    document.getElementById('grupo_password2').classList.remove('formulario_grupo-correcto');
    document.querySelector('#grupo_password2 .formulario_input-error').classList.add('formulario_input-error-activo');
    document.querySelector(`#grupo_password2 i`).classList.add('bxs-x-circle');
    document.querySelector(`#grupo_password2 i`).classList.remove('bxs-check-circle');
    campos['password'] = false;
  }
  else {
    document.getElementById('grupo_password2').classList.add('formulario_grupo-correcto');
    document.getElementById('grupo_password2').classList.remove('formulario_grupo-incorrecto');
    document.querySelector('#grupo_password2 .formulario_input-error').classList.remove('formulario_input-error-activo');
    document.querySelector(`#grupo_password2 i`).classList.remove('bxs-x-circle');
    document.querySelector(`#grupo_password2 i`).classList.add('bxs-check-circle');
    campos['password'] = true;
  }

};


inputs.forEach((input) => {
  input.addEventListener('keyup', validarformulario);
  input.addEventListener('blur', validarformulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  if (campos.usuario && campos.email && campos.nombre && campos.apellido && campos.password) {
    formulario.reset();
    document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');

    setTimeout(() => {
      document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');
    }, 5000);

    document.querySelectorAll('.formulario_grupo-correto').forEach((icono) => {
      icono.classList.remove('formulario_grupo-correto');
    });

  }
  else {
    document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');

  }
});