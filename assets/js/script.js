/*
$("#btn").dblclick(function(){
    $("#center").remove();
    $("section").before($("h1"));
    $("section").prepend($("#down").addClass("cajita"));
})

$(document).ready(function() {
    $.get({
        url: 'https://reqres.in/api/users?page=2', //DIRECCIÓN SERVER
        data: JSON, //Optativo
        dataType: 'json', //Optativo
        success: function(respuesta) {
            console.table(respuesta);
        },
        error: function() {
            console.error("Sin Respuesta");
        }
    });   
});

$('#btn').click(function(){
    $.post({
        url: 'https://reqres.in/api/users', //DIRECCIÓN SERVER
        data: JSON, //Optativo
        dataType: 'json', //Optativo
        success: function(respuesta) {
            console.table(respuesta);
        },
        error: function() {
            console.error("Sin Respuesta");
        }
    }); 
});
*/

$(document).ready(function() {
    $.get({
        url: 'https://my-json-server.typicode.com/alaravena/ldp3101/usuarios', //DIRECCIÓN SERVER
        data: JSON, //Optativo
        dataType: 'json', //Optativo
        success: function(data){
            $.each(data, function(i, item){
                $('#tabla tbody').append(
                "<tr><td>"+item.id+"</td><td>"+item.nombre+"</td><td>"+item.email+
                "</td><td><button class='editar btn btn-success'><i class='fa-solid fa-pen-to-square text-white'></i></button>"+
                "<button class='borrar btn btn-danger'><i class='fa-solid fa-circle-minus text-white'></i></button>"+
                "<button class='detalles btn btn-primary'><i class='fa-solid fa-circle-info text-white'></i></button></td></tr>"
                );
            });
            $('#add').click(function(){
                var agregar = confirm('¿Desea agregar un usuario?');
                if (agregar == true){
                    var uid = parseInt(prompt('¿ID?'));
                    var unombre = prompt('¿Nombre?');
                    var uemail = prompt('¿Email?');
                    $('#tabla tbody').append(
                        "<tr><td>"+uid+"</td><td>"+unombre+"</td><td>"+uemail+
                        "</td><td><button class='editar btn btn-success'><i class='fa-solid fa-pen-to-square text-white'></i></button>"+
                        "<button class='borrar btn btn-danger'><i class='fa-solid fa-circle-minus text-white'></i></button>"+
                        "<button class='detalles btn btn-primary'><i class='fa-solid fa-circle-info text-white'></i></button></td></tr>"
                    );
                }
            });
            $('.editar').click(function(){
                var editar = confirm('¿Desea realizar algún cambio a este usuario?');
                if (editar == true){
                    var nid = parseInt(prompt('¿ID?'));
                    var nnombre = prompt('¿Nombre?');
                    var nemail = prompt('¿Email?');
                    $(this).parents('tr').remove();
                    $('#tabla tbody').prepend(
                        "<tr><td>"+nid+"</td><td>"+nnombre+"</td><td>"+nemail+
                        "</td><td><button class='editar btn btn-success'><i class='fa-solid fa-pen-to-square text-white'></i></button>"+
                        "<button class='borrar btn btn-danger'><i class='fa-solid fa-circle-minus text-white'></i></button>"+
                        "<button class='detalles btn btn-primary'><i class='fa-solid fa-circle-info text-white'></i></button></td></tr>"
                    );
                }
            });
            $('.borrar').click(function(){
                var borrar = confirm('¿Desea eliminar a este usuario?');
                if (borrar == true){
                    $(this).parents('tr').remove();
                }
            });
            /* No logre que la info se viera de uno en uno, perdon :') ni tampoco que se viera la imagen :c */
            $('.detalles').click(function(){
                $.each(data, function(i, item){
                    alert('Los datos de este usuario son:\nID: ' + item.id + '\nNombre: ' + item.nombre +
                    '\nEmail: ' + item.email + '\nEdad: ' + item.edad  + '\nAvatar :' + item.avatar);
                });
            });
        }
    });
});