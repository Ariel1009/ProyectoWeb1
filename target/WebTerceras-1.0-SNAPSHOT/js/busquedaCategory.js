/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var indiceposicion = 0;
var totalpublicaciones = 0;
var data_publicacion_busqueda;
var id_publicacion = 0;
var edit_contenido;
var edit_categoria;
var edit_img;

function cargarNotas_Busqueda(minimo, maximo) {
    $("#publicaciones").html("");
    for (let i = minimo; i<maximo; i++) {
        if (data_publicacion_busqueda.length <= maximo) {
            $("#publicaciones").append('<div class="card gedf-card" > <div class="card-header"> <div class="d-flex justify-content-between align-items-center"> <div class="d-flex justify-content-between align-items-center"><div class="mr-2"><img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""> </div> <div class="ml-2"><div class="h5 m-0"></div></div> </div> <div><div class="dropdown"> <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-h"></i></button><div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1"><div class="h6 dropdown-header">Configuration</div><a class="dropdown-item" href="#">Spoiler</a><a class="dropdown-item Editar_nota"  data-toggle="modal" data-target="#exampleModal" href="#" idnota="' + data_publicacion_busqueda[i].idpublicacion + '" >Editar publicación</a> <a class="dropdown-item Eliminar_publicacion" href="#" idnota="' + data_publicacion_busqueda[i].idpublicacion + '">Eliminar publicación</a></div> </div></div> </div> </div> <div class="card-body"> <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div><a class="card-link" href="#"><img class="card-img-top col-6" src="' + data_publicacion_busqueda[i].imagen + '" alt="Card image" style="width:50%"></a> <p class="card-text">' + data_publicacion_busqueda[i].contenido + '</p><p class="card-text">#' + data_publicacion_busqueda[i].categoria + '</p></div><div class="card-footer text-info"><a href="#" class="card-link text-info"><i class="fa fa-gittip"></i> Me gusta</a><a href="#" class="card-link text-info"><i class="fa fa-comment"></i> Comentar</a> <a href="#" class="card-link text-info"><i class="fa fa-mail-forward"></i> Compartir</a></div></div>');

            $(".Eliminar_publicacion").click(function () {
                id_publicacion = $(this).attr("idnota");
                $.ajax({
                    data: {idnota: id_publicacion},
                    type: "GET",
                    dataType: "json",
                    url: "eliminar_Publicacion"
                }).done(function (data) {
                    if (data.respuesta == true) {
                        alert("Se elimino la nota exitosamente");
                        window.location.href = "mainscreen.html";
                    } else {
                        alert("No se elimino la cuenta");
                    }
                }).fail(function () {
                    alert("Error en el servicio");
                });
            });
            
            $(".Editar_nota").click(function(){
                id_publicacion = $(this).attr("idnota");
                
            for (let i = 0; data_publicacion_busqueda.length > i ; i++) {

                if (data_publicacion_busqueda[i].idpublicacion == id_publicacion){
                    edit_contenido = data_publicacion_busqueda[i].contenido;
                    edit_categoria = data_publicacion_busqueda[i].categoria;
                }
            }
            
             document.getElementById("editar_contenido").value = edit_contenido;
            document.getElementById("editar_cat2").value = edit_categoria;
            
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
                            window.location.href = "mainscreen.html";
                        } else {
                            alert("No se edito la nota");
                        }
                    }).fail(function () {
                        alert("Error en el servicio");
                    });
                });
            });

        }
    }
}

$(document).ready(function(){
    $("#Busqueda_Cate").submit(function(event){
        event.preventDefault();
        console.log($("#SC_CATE").val());
         $.ajax({
            data: {buscar: $("#SC_CATE").val()},
            //data: new FormData(this),
            type: "POST",
            dataType: "json",
            url: "GetCategorias"
        }).done(function(data){
                alert("Se busco correctamente");
                //console.log(data);
                totalpublicaciones = data.publicaciones.length;
                data_publicacion_busqueda = data.publicaciones;
              
               var str = '<li class="page-item " id="Previous"><a class="page-link">Previous</a>  </li>';
               var pages = Math.ceil(totalpublicaciones/2);
               for(let i=0; i <= pages; i++){
                   str +=' <li class="page-item indice" indice="' + (i - 1) + '"><a class="page-link">' + i + '</a>  </li>';
               }
               str += '<li class="page-item" id="Next"><a class="page-link">Next</a>  </li>';

               $("#paginas").html(str);
               cargarNotas_Busqueda(0,2);
               
               
               
               
                $(".indice").click(function () {
                    $(".indice").removeClass("active");
                    $(this).addClass("active");
                    indice_posicion = $(this).attr("indice");
                    cargarNotas_Busqueda((indice_posicion * 2), 2);
                });

                $("#previous").click(function () {
                    $(".indice").removeClass("active");
                    if (indice_posicion > 0) {
                        indice_posicion--;
                        $(".indice:nth-child(" + (indice_posicion + 2) + ")").addClass("active");
                        cargarNotas_Busqueda((indice_posicion * 2), 2);
                    }
                });

                $("#Next").click(function () {
                    $(".indice").removeClass("active");
                    if (indice_posicion < totalpublicaciones) {
                        indice_posicion++;
                        $(".indice:nth-child(" + (indice_posicion + 2) + ")").addClass("active");
                        cargarNotas_Busqueda((indice_posicion * 2),  2);
                    } 
                });
        }).fail(function(){
             alert("Error en el servicio");
        });
    });
});