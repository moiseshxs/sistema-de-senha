let idSala;
let numGuicheProx;
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
    });


})


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
                    newHtml += `<div class="opcao d-flex align-items-center gap-4 justify-content-center" onclick="getGuiche(this,'${salas.idSala}')" id="areaNome">`
                    newHtml += `<p class="fs-2" style="width: 250px" id="SalaNome">${salas.nomeSala}</p> <a id="trocarNomeSala" onclick="trazerIdSala('${salas.idSala}', '${salas.nomeSala}')" class="fs-5" data-bs-toggle="modal" data-bs-target="#modalAltera"> <i class='bx bx-edit-alt'></i></a>`
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
const getGuiche = (div, idSala) => {
    if(div != null) {
    var divs = document.querySelectorAll('.opcao');
    divs.forEach(function(element) {
      element.classList.remove('borda-verde');
    });
    div.classList.add('borda-verde');
}
    $.ajax ({
        type: 'POST',
        data: {idSala: idSala},
        dataType: 'json',
        url: '../app/Controller/trazerGuicheDasSalas.php',
        async: true,

        success: function(response) {
            if(response.guiches.length == null) {
                numGuicheProx = 1;
            } else {
                numGuicheProx = response.guiches.length+1
            }
            
            let newHtml = `<div class="select w-100" style="height: 400px" id="allGuiches">`
            if(response.guiches == false) {
                        
            } else {
                response.guiches.forEach(guiche =>{
                    newHtml += `<div class="opcao safado d-flex align-items-center justify-content-center" >`
                    newHtml += `<p class="fs-1">${guiche.nomeGuiche}</p>`
                    newHtml += `</div>`
                })
            }
                newHtml += `<div class="add bg-success d-flex align-items-center justify-content-center">`
                newHtml += `<p class="fs-1 fw-bold" onclick="addGuicheSala(${idSala})">+ ADD GUICHE</p>`
                newHtml += `</div>`
            newHtml += `</div>`
            $('#allGuiches').html(newHtml)
        }
    })

}

const addGuicheSala = (idSala) => {
    let nomeGuiche
    if(numGuicheProx.toString().length == 1){
        nomeGuiche = `Guichê 0${numGuicheProx}`
    } else {
        nomeGuiche = `Guichê ${numGuicheProx}`
    }
    
    $.ajax ({
        type: 'POST',
        dataType: 'json',
        data: {idSala : idSala, nameGuiche: nomeGuiche},
        url: '../app/Controller/storeGuicheSala.php',
        async: true,

        success: function(response) {
            getGuiche(null, idSala)
        }, error: (e) => {
            console.log(e);
        }
    })
}
