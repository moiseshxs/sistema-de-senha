$("#banco").click(() =>{
    $("#loader-space").css('display', 'flex')
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '../app/Controller/resetarBanco.php',
        async: true,
    
         success: function(response) {
             console.log(response)
             $("#loader-space").css('display','none')
             toastr.success("Dados redefinidos como o padrão.", "Sucesso!")
 
                    toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "1000",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                    }
             
         },
         error: (e) =>{
            $("#loader-space").css('display', 'none')
            toastr.error("Erro ao redefinir dados.", "Erro!")
 
                    toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "1000",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                    }
         }
    })
})

$("#senhas").click(() =>{
    $("#loader-space").css('display', 'flex')
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '../app/Controller/resetarSenhas.php',
        async: true,
    
         success: function(response) {
             console.log(response)
             $("#loader-space").css('display','none')
             toastr.success("Senhas apagadas.", "Sucesso!")
 
                    toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "1000",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                    }
             
         },
         error: (e) =>{
            $("#loader-space").css('display', 'none')
            toastr.error("Erro ao apagar senhas.", "Erro!")
            console.log(e)
                    toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "1000",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                    }
         }
    })
})