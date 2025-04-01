/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


$(document).ready(function () {
    
    $("#CerrarSesion").click(function () {
        alert("Estoy cerrando la sesion");
        $.ajax({
            async: false,
            type: "GET",
            dataType: "json",
            url: "CerrarSesion"
        }).done(function (data) {
            console.log(data);
            if (data.respuesta) {
                alert("Cerrando sesion");
                window.location.href = "login.html";
            }
        }).fail(function (jqXHR, textEstado) {
            console.log("La solicitud regreso con un error: " + textEstado);
        });
    });
});

