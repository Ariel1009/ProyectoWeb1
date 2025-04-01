/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

$(document).ready(function(){
    
    $('#formulario').submit (function(event){
        event.preventDefault();
        alert("Envio de formulario");
        
        $.ajax({
            data: new FormData(this),
            type: "POST",
            dataType: "json",
            url: "InsertUser",
            cache: false,
            contentType: false,
            processData: false
        }).done(function(data){
            console.log(data);
            if(data.resultado == true){
                alert("Inserte correctamente");
            }else {
                alert("No se pudo insertar");
            }
        }).fail(function (jqXHR, textEstado){
            console.log("La solicitud marco error" + textEstado);
        });
    });
});
