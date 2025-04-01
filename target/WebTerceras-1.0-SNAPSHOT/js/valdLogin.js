const formulario=document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,12}$/, // 4 a 12 digitos.
};

const campos = {
    usuario: false,
    password:false
  };

const validarformulario = (e) => {
    switch (e.target.name){
        case "usuario":
          validarCampo(expresiones.usuario, e.target, 'usuario');
          break;
        
        case "password":
         validarCampo(expresiones.password, e.target, 'password');
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
    }
    else {
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
        document.querySelector(`#grupo_${campo} i`).classList.add('bxs-x-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('bxs-check-circle');
        campos[campo] = false;
    }

};

inputs.forEach( (input) => {
    input.addEventListener('keyup', validarformulario);
    input.addEventListener('blur', validarformulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.usuario && campos.password){
      formulario.reset();
      document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');
      setTimeout(() => {
        document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');
      } , 5000);

      document.querySelectorAll('.formulario_grupo-correcto').forEach((icono) => {
        icono.classList.remove('formulario_grupo-correcto');
      });
    }
    else{
      document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
      setTimeout(() => {
        document.getElementById('formulario_mensaje-activo').classList.remove('formulario_mensaje-activo');
      } , 5000);
    }

});
