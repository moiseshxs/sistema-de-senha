$(document).ready(function() {

    $('#inserirSala').click(function() {

        var dados = $('#nomeSala').val();
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '../app/Controller/inserirSala.php',
            async: true,
            data:{nomeSala: dados},
            success: function(response) {
                allSalas()
            }
        })
    })

})

const allSalas = async() =>{
    $.ajax({

        type: 'GET',
        dataType: 'json',
        url: '../app/Controller/trazerSalas.php',
        async: true,

        success: function(response) {
            let newHtml = `<div class="select w-100 overflow-auto" id="salasTotal" style="height: 80% !important">` 
                response.salas.forEach(salas =>{                 
                    newHtml += `<div class="opcao d-flex align-items-center justify-content-center" onclick="borda(this)">`
                    newHtml += `<p class="fs-1">${salas.nomeSala}</p>`
                    newHtml += `</div>`
                })
            newHtml += `</div>`
                $('#salasTotal').html(newHtml)
        }
    })
}