/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var indiceposicion = 0;
var pages = 0;
var id_publicacion=0;
var longitud;
var edit_contenido;
var edit_categoria;


function cargarNotas(_indice, _cantidad) {
 $.ajax({
        data: {indice: _indice, cantidad: _cantidad},
        type: "GET",
        dataType: "json",
        url: "GetPublicacion"
    }).done(function (data) {
         $("#publicaciones").html("");
        console.log(data);
       longitud = data.publicacion.length;
        console.log(longitud);
        if (longitud > 0) {
           
            
            for (let i = 0; i<longitud; i++) {
                $("#publicaciones").append('<br>');
                //console.log(longitud);
               // console.log(data.publicacion[i]);
                $("#publicaciones").append('<div class="card gedf-card" > <div class="card-header"> <div class="d-flex justify-content-between align-items-center"> <div class="d-flex justify-content-between align-items-center"><div class="mr-2"><img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""> </div> <div class="ml-2"><div class="h5 m-0"></div></div> </div> <div><div class="dropdown"> <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-h"></i></button><div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1"><div class="h6 dropdown-header">Configuration</div><a class="dropdown-item" href="#">Spoiler</a><a class="dropdown-item Editar_nota"  data-toggle="modal" data-target="#exampleModal" href="#" idnota="'+ data.publicacion[i].idpublicacion+'" >Editar publicación</a> <a class="dropdown-item Eliminar_publicacion" href="#" idnota="'+ data.publicacion[i].idpublicacion+'">Eliminar publicación</a></div> </div></div> </div> </div> <div class="card-body"> <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div><a class="card-link" href="#"><img class="card-img-top col-6" src="' + data.publicacion[i].imagen + '" alt="Card image" style="width:50%"></a> <p class="card-text">'+data.publicacion[i].contenido+'</p><p class="card-text">#' + data.publicacion[i].categoria + '</p></div><div class="card-footer text-info"><a href="#" class="card-link text-info"><i class="fa fa-gittip"></i> Me gusta</a><a href="#" class="card-link text-info"><i class="fa fa-comment"></i> Comentar</a> <a href="#" class="card-link text-info"><i class="fa fa-mail-forward"></i> Compartir</a></div></div>');
                //$("#publicaciones").append('<div class="card my-4"><div class="card-body"><img class="card-img-top col-6" src="' + data.publicacion[i].imagen + '" alt="Card image" style="width:50%"><p class="card-text">' + data.publicacion[i].contenido + '</p><a href="#" class="btn btn-primary stretched-link">Ver más</a><button type="button" class="btn btn-primary modal_padre Editar_publicacion2" data-bs-toggle="modal" data-bs-target="#exampleModal" idpublicacion_editar="' + data.publicacion[i].idpublicacion + '">Editar</button> <p> </p> <button href="#" class="btn btn-primary Eliminar_publicacion2" idpublicacion="' + data.publicacion[i].idpublicacion + '">Eliminar</button> </div> </div>');
            //  $("#publicaciones").append('<div class="card gedf-card" > <div class="card-header"> <div class="d-flex justify-content-between align-items-center"> <div class="d-flex justify-content-between align-items-center"><div class="mr-2"><img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""> </div> <div class="ml-2"><div class="h5 m-0">@'+data.publicacion.usuario+'</div><div class="h7 text-muted">'+data.publicacion.usuario+'</div> </div> </div> <div><div class="dropdown"> <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-h"></i></button><div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1"><div class="h6 dropdown-header">Configuration</div><a class="dropdown-item" href="#">Spoiler</a><a class="dropdown-item" href="#">Editar publicación</a> <a class="dropdown-item" href="#">Eliminar publicación</a></div> </div></div> </div> </div> <div class="card-body"> <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div><a class="card-link" href="#"><img class="card-img-top col-6" src="' + data.publicacion.imagen + '" alt="Card image" style="width:50%"></a> <p class="card-text">'+data.publicacion.contenido+'</p> <p class="card-text">#' + data.publicacion.categoria + '</p></div><div class="card-footer text-info"><a href="#" class="card-link text-info"><i class="fa fa-gittip"></i> Me gusta</a><a href="#" class="card-link text-info"><i class="fa fa-comment"></i> Comentar</a> <a href="#" class="card-link text-info"><i class="fa fa-mail-forward"></i> Compartir</a></div></div>');

        }
            
            $(".Editar_nota").click(function(){
                id_publicacion = $(this).attr("idnota");
                
            for (let i = 0; data.publicacion.length > i ; i++) {

                if (data.publicacion[i].idpublicacion == id_publicacion){
                    edit_contenido = data.publicacion[i].contenido;
                    edit_categoria = data.publicacion[i].categoria;
                }
            }
            
            document.getElementById("editar_contenido").value = edit_contenido;
            document.getElementById("editar_cat2").value = edit_categoria;
            console.log($("#editar_categoria").val());
                $("#edit_Post").submit(function (event) {
                    event.preventDefault();
//                     var content = document.getElementById("edit_categoria").value;
//                 console.log(content);
                    $.ajax({
                        data: {"contenido": $("#editar_contenido").val(),

                            "categoria": $("#editar_categoria").val(),
                            //"img": $("#editar_img").val(),
                            idnota: id_publicacion},
                        //data: new FormData(this),
                        type: "POST",
                        dataType: "json",
                        url: "Editar_publicacion",
//                        cache: false,
//            contentType: false,
//            processData: false
                    }).done(function (data) {
                        if (data.respuesta == true) {
                            alert("Se edito la nota exitosamente");
                        } else {
                            alert("No se edito la nota");
                        }
                    }).fail(function () {
                        alert("Error en el servicio");
                    });
                });
            });
            
            
            $(".Eliminar_publicacion").click(function(){
                id_publicacion = $(this).attr("idnota");
            $.ajax({
                 data: {idnota: id_publicacion},
                type: "GET",
                dataType: "json",
                url: "eliminar_Publicacion"
            }).done(function (data) {
                if (data.respuesta == true) {
                    alert("Se elimino la nota exitosamente");
                } else {
                    alert("No se elimino la cuenta");
                }
            }).fail(function () {
                alert("Error en el servicio");
            });
            });
            
            
            
            
            
            
        } else {
            $("#publicaciones").append('<div class="card my-4"><div class="card-body"><h4 class="card-title"> NO HAY NOTAS AUN</h4>  </div> </div>');

        }

    }).fail(function (jqXHR, textEstado) {
        console.log("La solicitud regreso con un error: " + textEstado);
    });
}


$.ajax({
    type: "GET",
    async: false,
    dataType: 'json',
    url: "AllPublicacion"
}).done(function (data) {
    console.log(data);
    if (data.respuesta) {
        var totalnotas = data.cantidad;
        var str = '<li class="page-item " id="Previous"><a class="page-link">Previous</a>  </li>';

        pages = Math.ceil(totalnotas / 2);
        for (let i = 1; i <= pages; i++) {
            str += ' <li class="page-item indice" indice="' + (i - 1) + '"><a class="page-link">' + i + '</a>  </li>';
        }

        str += '<li class="page-item" id="Next"><a class="page-link">Next</a>  </li>';

        $("#paginas").html(str);
        cargarNotas(0, 2);
    }

}).fail(function (error) {
    console.log(error);
});

$(document).ready(function () {
    var x = 5;

    $(".indice").click(function () {
        $(".indice").removeClass("active");
        $(this).addClass("active");
        indiceposicion = $(this).attr("indice");
        cargarNotas((indiceposicion * 2), 2);
    });

    $("#Previous").click(function () {

        if (indiceposicion > 0) {
            $(".indice").removeClass("active");
            indiceposicion--;
            $(".indice:nth-child(" + (indiceposicion + 2) + ")").addClass("active");
            cargarNotas((indiceposicion * 2), 2);

        }
    });

    $("#Next").click(function () {

        if (indiceposicion < pages) {
            $(".indice").removeClass("active");
            indiceposicion++;
            $(".indice:nth-child(" + (indiceposicion + 2) + ")").addClass("active");
            cargarNotas((indiceposicion * 2), 2);
        }
    });

    $("#agregarPublicaciones").submit(function (event) {
        event.preventDefault();
      
        $.ajax({
            data: new FormData(this),
            type: "POST",
            dataType: "json",
            url: "NewPublicacion",
            cache: false,
            contentType: false,
            processData: false
        }).done(function (data) {
            console.log(data);
            alert(data.respuesta);
            if (data.respuesta) {
                alert("Inserte la nota");
                alert(data.publicacion.contenido);
                $("#publicaciones").append('<br>');
                 //$("#publicaciones").append('<div class="card my-4"><img class="card-img-top col-6" src="' + data.publicacion.imagen + '" alt="Card image" style="width:50%"><div class="card-body"><p class="card-text">' + data.publicacion.contenido + '</p></div> </div>');
                $("#publicaciones").append('<div class="card gedf-card" > <div class="card-header"> <div class="d-flex justify-content-between align-items-center"> <div class="d-flex justify-content-between align-items-center"><div class="mr-2"><img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""> </div> <div class="ml-2"><div class="h5 m-0">@'+data.publicacion.usuario+'</div><div class="h7 text-muted">'+data.publicacion.usuario+'</div> </div> </div> <div><div class="dropdown"> <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-h"></i></button><div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1"><div class="h6 dropdown-header">Configuration</div><a class="dropdown-item" href="#">Spoiler</a><a class="dropdown-item" href="#">Editar publicación</a> <a class="dropdown-item" href="#">Eliminar publicación</a></div> </div></div> </div> </div> <div class="card-body"> <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div><a class="card-link" href="#"><img class="card-img-top col-6" src="' + data.publicacion.imagen + '" alt="Card image" style="width:50%"></a> <p class="card-text">'+data.publicacion.contenido+'</p> <p class="card-text">#' + data.publicacion.categoria + '</p></div><div class="card-footer text-info"><a href="#" class="card-link text-info"><i class="fa fa-gittip"></i> Me gusta</a><a href="#" class="card-link text-info"><i class="fa fa-comment"></i> Comentar</a> <a href="#" class="card-link text-info"><i class="fa fa-mail-forward"></i> Compartir</a></div></div>');
              
            } else {
                alert("No pude insertar la nota");
            }
        }).fail(function (jqXHR, textEstado) {
            console.log(jqXHR);
        });

    });

});