/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


var id_usuario=0;
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