/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

$.ajax({
    async: false,
    type: "GET",
    dataType: "json",
    url: "RevisarSession"
}).done(function (data) {
    console.log(data);
    if (data.respuesta) {
        alert("Sesion Activa");
        window.location.href = "mainscreen.html";
    }
}).fail(function (jqXHR, textEstado) {
    console.log("La solicitud regreso con un error: " + textEstado);
});

$(document).ready(function(){
    $('#formulario').submit (function(event){
        event.preventDefault();
        alert("Envio de formulario");
        $.ajax({
            data: {
                "usuario": $("#usuario").val(),
                "password": $("#password").val()
            },
            type: "POST",
            dataType: "json",
            url: "Login"
        }).done(function(data){
            console.log(data);
            if(data.resultado == true){
                alert("Credenciales correctas");
                window.location.href = "mainscreen.html";
            }else {
                alert("Usuario y/o contraseña incorrectas")
            }
        }).fail(function (jqXHR, textEstado){
            console.log("La solicitud marco error" + textEstado);
        });
    });
});

