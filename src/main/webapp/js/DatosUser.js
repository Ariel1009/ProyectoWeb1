/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var id_usuario=0;
$.ajax({
    async: false,
    type: "GET",
    dataType: "json",
    url: "RevisarSession"
}).done(function (data) {
    console.log(data.usuario);
    
     $("#Perfil").prepend('<img id="fotoUsuario" src="'+data.usuario.fotoPerfil+'" style="width: 100%;"/>');
     $("#usernameNavbar").html (data.usuario.username);
     $("#NombreUsuario").html(data.usuario.nombre);
     $("#ApellidoUsuario").html(data.usuario.apellido);
     $("#EmailUsuario").html(data.usuario.email);
     $("#NacimientoUsuario").html(data.usuario.f_nacimiento);
     $("#envio_Datos").append('<button type="submit" class="btn btn-primary Editar_usuario"  iduser="'+data.usuario.idusuario+'">Editar</button> <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> ');
     //$(#modal-footer).append('<button type="submit" class="btn btn-primary" id="Boton_editar_user">Editar</button>');
     document.getElementById("edit_nombre").value = data.usuario.nombre;
       document.getElementById("edit_apellido").value = data.usuario.apellido;
         document.getElementById("edit_email").value = data.usuario.email;
     
    if (data.respuesta == false) {
        alert("No cuentas con una sesion activa");
        window.location.href = "login.html";
    }
}).fail(function (jqXHR, textEstado) {
    console.log("La solicitud regreso con un error: " + textEstado);
});

$(document).ready(function () {
    $("#Editar_user").submit(function (event) {
        event.preventDefault();
         id_usuario = $(this).attr("iduser");
        $.ajax({
            data: {"nombre": $("#edit_nombre").val(),
                    "apellido": $("#edit_apellido").val(),
                    "email": $("#edit_email").val(),
                    iduser: id_usuario
            }, 
            type: "POST",
            dataType: "json",
            url: "editar_Usuario"
        }).done(function(data){
            if (data.respuesta == true) {
                            alert("Se edito el usuario exitosamente");
                            window.location.href = "mainscreen.html";
                        } else {
                            alert("No se edito el usuario");
                        }
            
         }).fail(function(){
             alert("Error en el servicio");
        });
    });
});

