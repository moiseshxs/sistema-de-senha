let idSala;
$.ajax ({
    type: 'GET',
    url: '../app/Controller/trazerSalas.php',
    dataType: 'json',

    success: function(response) {
        allSalas()
    }
})

$(document).ready(function() {
    
    $('#inserirSala').click(function() {

        var dados = $('#nomeSala').val();
        console.log(dados)
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '../app/Controller/inserirSala.php',
            async: true,
            data:{nomeSala: dados},
            success: function(response) {
                allSalas()
                
            }, error: (e) =>{
                console.log(e)
            }
        })
    })
})
const alterarSala = (idSala) => {
    $(document).ready(function() {

    
})
}

$('#alterarSala').click(function() {
    var dadoNome = $('#salaA').val();
    console.log(dadoNome)
    $.ajax ({
        type: 'POST',
        url: '../app/Controller/alterarNomeSala.php',
        data: {salaId: idSala, salaNome: dadoNome},
        async: true,
        dataType: 'json',
        success: function(response) {
            allSalas()
        }, error: (e) =>{
            console.log(e);
        }
    })
})

const trazerIdSala = (sala, nomeSala) => { 
    console.log(nomeSala);
    idSala = sala;
    document.getElementById("salaA").value = nomeSala 
   
}

const allSalas = async() =>{
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '../app/Controller/trazerSalas.php',
        async: true,

        success: function(response) {
            let newHtml = `<div class="select w-100 overflow-auto" id="salasTotal" style="height: 400px !important">` 
                response.salas.forEach(salas =>{                 
                    newHtml += `<div class="opcao d-flex align-items-center gap-4 justify-content-center" onclick="borda(this)">`
                    newHtml += `<p class="fs-1" id="SalaNome">${salas.nomeSala}</p> <a id="trocarNomeSala" onclick="trazerIdSala('${salas.idSala}', '${salas.nomeSala}')" class="fs-4" data-bs-toggle="modal" data-bs-target="#modalAltera"> <i class='bx bx-edit-alt'></i></a>`
                    newHtml += `</div>`
                })
                newHtml += `<div class="opcao bg-success add d-flex align-items-center justify-content-center">`
                newHtml += `<p class="fs-1 fw-bold" data-bs-toggle="modal" data-bs-target="#modaal">+ ADD SALA</p>`
                newHtml += `</div>`
            newHtml += `</div>`
                $('#salasTotal').html(newHtml)
        }
    })
}
