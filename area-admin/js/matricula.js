let guicheAtual;
let idGuicheA;
let clicksCarregar =1
let atendidos = 1
let nao =1

const carregar = (tipo) =>{
    switch(tipo){
        case 'normal':
            clicksCarregar++
            break
        case 'nao':
            nao++
            break 
        case 'atendidas':
            atendidos++
            break   
    }
}

$('#abrirModal').on('click', function (e){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '../app/Controller/trazerSalas.php',
        async: true,
    
         success: function(response) {
               let newHtml = `<div class="col-4 bg-light w-100 gap-1 d-flex flex-column p-1" id="salasTotal">`
                           response.salas.forEach(sala => {
                            newHtml +=`<div class="sala w-100 bg-secondary d-flex justify-content-center align-items-center" onclick="trazerGuiches('${sala.idSala}', '${sala.nomeSala}', this)" id="salaa" style="border: 1px solid black">`
                            newHtml += `<p class="titulo-sala fs-1 fw-bold text-light">${sala.nomeSala}</p>`
                            newHtml +=`</div>`
                           })

               newHtml +=`</div>`
               $('#salasTotal').html(newHtml)
         }
    })
})

const trazerGuiches = async(idSala, nomeSala, div) => {
    if(div != null) {
        var divs = document.querySelectorAll('.sala');
        console.log(divs)
        divs.forEach(function(element) {
            element.style.border = "1px solid black";
        });
        div.style.border = "3px solid #00FF00";
    }
     $.ajax ({
        type: 'POST',
        data: {idSala: idSala},
        dataType: 'json',
        url: '../app/Controller/trazerGuicheDasSalas.php',
        async: true,

        success: function(response) {
            console.log(response);
            let newHtml = `<div class="col-4 w-100 bg-light p-1 flex-column d-flex gap-3" id="guiches">`
                newHtml += `<p class="titulo-sala fs-3 fw-bold w-100 text-center text-uppercase">${nomeSala}</p>`
                response.guiches.forEach(guiche => {
                    newHtml += `<div class="guiche w-100 bg-secondary py-1 d-flex justify-content-center align-items-center" onclick="focar(this, '${guiche.nomeGuiche}', '${idSala}', '${guiche.idGuiche}')">`
                    newHtml += `<p class="titulo-sala fs-1 fw-bold text-light text-uppercase">${guiche.nomeGuiche}</p>`
                    newHtml += `</div>`
                })
                newHtml += `</div>`
                $('#guiches').html(newHtml)
        }
    })
}
const focar = (div,nomeGuiche, idSala, idGuiche) => {

    let tratamentoNomeGuiche = nomeGuiche.split(' ');
    tratamentoNomeGuiche = tratamentoNomeGuiche[1].charAt(1)
    guicheAtual = tratamentoNomeGuiche;

    if(div != null) {
        var divs = document.querySelectorAll('.guiche');
        console.log(divs)
        divs.forEach(function(element) {
            element.style.border = "1px solid black";
        });
        div.style.border = "3px solid #00FF00";
    }
        newHtml = `<button type="button" class="btn btn-danger btn-safado" data-bs-dismiss="modal">Cancelar</button>`
        newHtml += `<button type="button" class="btn btn-success" data-bs-dismiss="modal" onclick="trocarInfos('${idSala}', '${guicheAtual}', '${idGuiche}')">Salvar</button>`
    $('.modal-footer').html(newHtml)
}

const trocarInfos = async(idSala, guicheAtual, idGuiche) => {
    console.log(idGuiche)
        newHtml = `<div class="col d-flex flex-column suas-informacoes h-100" id="infos">`
            newHtml += `<div class="d-flex justify-content-end fs-5 fw-bold text-uppercase">`
                newHtml += `Suas Informações`
            newHtml += `</div>`
        newHtml += `<div class=" d-flex justify-content-end fs-5"><span class="fw-bold fs-5">Sala</span>: ${idSala}</div>`
            newHtml += `<div class=" d-flex justify-content-end fs-5"><span class="fw-bold fs-5">Guichê</span>: ${guicheAtual}</div>`
        newHtml += `<input type="hidden" id="guiche" value="${idGuiche}">`
        idGuicheA = idGuiche
        $('#infos').html(newHtml);
}


const buscarUltimasSenhasT = async() =>{
    $.ajax({
        data: {
            tipo: "Matricula",
            limit: clicksCarregar
        },
        type: 'POST',
        dataType: 'json',
        url: '../app/Controller/trazerSenhas.php',
        async: true,
        
        success: function(response) {
            //construção da tag html
            console.log(response)
            let newHtml = "<div class='row w-100 item'>"
            let newHtmlP = "<div class='row item'>"
            response.result.forEach(senha => {
                console.log(senha)
                let prefixo = senha.senha.substring(0,2);
                senhaT = senha.senha.substring(2);
                let color
                if(prefixo == "AM"){
                    color = "rgb(26, 26, 26);"
                }else if(prefixo == "AR"){
                    color = "rgb(16, 48, 96);"
                }else{
                    color = "rgb(19, 94, 19);"
                }
                if(prefixo == "AP") {
                    newHtmlP += `<div class="col-6 d-flex align-items-center justify-content-center"><p class="h3 fw-bold"><span style="color: ${color}">${prefixo}</span>${senhaT}</p></div>`
                    newHtmlP += `<div class='col-6 d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold' onclick="senhaAtual('${senha.senha}', '${senha.id}', '${idGuicheA}')">Chamar</button></div>`
                } else {
                    newHtml += `<div class="col-6 d-flex align-items-center justify-content-center"><p class="h3 fw-bold"><span style="color: ${color}">${prefixo}</span>${senhaT}</p></div>`
                    newHtml += `<div class='col-6 d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold' onclick="senhaAtual('${senha.senha}', '${senha.id}', '${idGuicheA}')">Chamar</button></div>`
                }
            });
            newHtml += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary">Pesquisar</button><button class="btn btn-success" onclick="carregar('normal')">Carregar mais</button></div>`
            newHtmlP += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary">Pesquisar</button><button class="btn btn-success" onclick="carregar('normal')">Carregar mais</button></div>`
            newHtml += "</div>"
            newHtmlP += "</div>"
            //atualizando html
            $('#proximos').html(newHtml) 
            $('#preferencial').html(newHtmlP)
        },
        error: (e) =>{
            console.log(e)
        }
    });
}
const senhaAtual = async(senha, idSenha, guicheId) =>{
    //pegando os 2 primeiros caracteres da senha
    let prefixo = senha.substring(0,2);
    senhaT = senha.substring(2);
    let color;
    if(prefixo == "AP") {
        color = "rgb(19, 94, 19);"
    } else if(prefixo == "AM") {
        color = "rgb(26, 26, 26);"
    } else {
        color = "rgb(16, 48, 96);"
    }
    $.ajax ({
        type: 'POST',
        dataType: 'json',
        data: {
            idSenha: idSenha,
            statusSenha: 0,
            idGuiche: guicheId,
        },
        url: '../app/Controller/atualizarStatusSenhaMatriculaQuandoChamada.php',
        async:true,

        success: function(response) {
            newHtml = `<div class=" h-75 d-flex justify-content-center fs-1 fw-bold" id="senhaAtual">`
            newHtml += `<p class="text-center" style="font-size: 60px;"><span style="color: ${color}">${prefixo}</span>${senhaT}</p>`
            newHtml += `</div>`
    
            $('#embaca').css('display','flex')
            $('#senhaAtual').html(newHtml)
            localStorage.setItem("idSenhaAtualMatricula", idSenha)
            seila = $('#guiche').val();
            console.log(seila)
           
        }
    }) 
}

 const compareceu = async(status) => {
    if(localStorage.getItem('idSenhaAtualMatricula') != undefined) {
        console.log(status)
     $.ajax({
         type: 'POST',
         dataType: 'json',
         data: {
             idSenha: localStorage.getItem('idSenhaAtualMatricula'), 
             tipo: "Matricula",
             status: status
            },
         url: '../app/Controller/atualizarSenhaAtendidaNaMatricula.php',
         async:true,

         success: function(response) {
            localStorage.removeItem("idSenhaAtualMatricula")
            $('#embaca').css('display', 'none')
            $("#senhaAtual").html(`<p id="senhaAtual" class="text-center" style="font-size: 60px;"><span id="prefixo-atual" class="">00</span><span id="digitos-atual">000</span></p>`)

         }
     })
    } 
 }

const chamarSenhasAtendidas = () => {
    limit = 8;
    $.ajax({
        type: 'POST',
        dataType: 'json',
        data: {
            tipo: "Matricula-Atendidos",
            limit: atendidos
        },
        url: '../app/Controller/trazerSenhas.php',
        async: true,
        success: function(response) {
        let newHtml = `<div class='row item'>`
            response.result.forEach(senha => {
            let prefixo = senha.senha.substring(0,2);
            let senhaT = senha.senha.substring(2);
            let color;
            if(prefixo == "AM"){
                color = "rgb(26, 26, 26);"
            }else if(prefixo == "AR"){
                color = "rgb(16, 48, 96);"
            }else{
                color = "rgb(19, 94, 19);"
            }
            newHtml += `<div class="col-6 d-flex align-items-center justify-content-center"><p class="h3 fw-bold"><span style="color: ${color}">${prefixo}</span>${senhaT}</p></div>`
            newHtml += `<div class='col-6 d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold' onclick="senhaAtual('${senha.senha}', '${senha.id}', '${idGuicheA}')">Chamar</button></div>`
        })
        newHtml += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary">Pesquisar</button><button class="btn btn-success" onclick="carregar('atendidas')">Carregar mais</button></div>`
        newHtml += `</div>`
        $('#senhasAtendidas').html(newHtml)
        }
    })
}

const naoComparecidos = () => {
    $.ajax ({
        type: 'POST',
        data: {
            tipo: "Matricula-Nao"
            ,limit: nao
        },
        dataType: 'json',
        url: '../app/Controller/trazerSenhas.php',
        async: true,

        success: function(response) {
            console.log(response)
            let newHtml = `<div class='row item' id='senhasNaoAtendidas'>`
            response.result.forEach(senha => {
                let prefixo = senha.senha.substring(0,2);
                let senhaT = senha.senha.substring(2);
                let color;
                if(prefixo == "AM"){
                    color = "rgb(26, 26, 26);"
                }else if(prefixo == "AR"){
                    color = "rgb(16, 48, 96);"
                }else{
                    color = "rgb(19, 94, 19);"
                }
                newHtml += `<div class="col-6 d-flex align-items-center justify-content-center"><p class="h3 fw-bold"><span style="color: ${color}">${prefixo}</span>${senhaT}</p></div>`
                newHtml += `<div class='col-6 d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold' onclick="senhaAtual('${senha.senha}', '${senha.id}', '${idGuicheA}')">Chamar</button></div>`
            })
            newHtml += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary">Pesquisar</button><button class="btn btn-success" onclick="carregar('nao')">Carregar mais</button></div>`
            newHtml += `</div>`
            $('#senhasNaoAtendidas').html(newHtml)
        }
    })
}


 const chamarSenhaAtualCasoRecarregar = () =>{
    let id = localStorage.getItem("idSenhaAtualMatricula")
    $.ajax({
        type: 'POST',
        data: {idSenha: id},
        dataType: 'json',
        url: '../app/Controller/senhaChamadaPeloGuicheTriagem.php',
        async:true,

        success: function(response) {
            console.log()
            let senha = response[0].senha.senha
            let prefixo = senha.substring(0,2);
            senhaT = senha.substring(2);
            let color;
            if(prefixo == "AP") {
                color = "rgb(19, 94, 19);"
            } else if(prefixo == "AM") {
                color = "rgb(26, 26, 26);"
            } else {
                color = "rgb(16, 48, 96);"
            }
            let newHtml
            newHtml = `<div class=" h-75 d-flex justify-content-center fs-1 fw-bold" id="senhaAtual">`
            newHtml += `<p class="text-center" style="font-size: 60px;"><span style="color: ${color}">${prefixo}</span>${senhaT}</p>`
            newHtml += `</div>`
            $("#senhaAtual").html(newHtml)
            $("#embaca").css('display','flex')
        }
    })
 }
 if(localStorage.getItem("idSenhaAtualMatricula") != undefined){
 chamarSenhaAtualCasoRecarregar()
}


setInterval(() =>{
    buscarUltimasSenhasT()
    chamarSenhasAtendidas()
    naoComparecidos()
},1000)