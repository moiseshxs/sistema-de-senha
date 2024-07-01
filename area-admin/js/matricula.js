let guicheAtual;
let idGuicheA;
let clicksCarregar =1
let atendidos = 1
let nao =1
let modalInfos = {};
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

if(localStorage.getItem("idGuicheEmUso") == undefined){
    $("#embacada").css('display', 'flex')
    document.getElementById("text-embacada").innerText = "Selecione um guichê para começar o atendimento"
}

const fade = document.querySelector('#fades');
    const modal = document.querySelector('#pesquisa-sala');
    
const colocaInfo = (senha, id, tipo) => {
    modalInfos = {senha, id, tipo};
    
}
const chamaDnv = () => {
    senhaAtual(modalInfos.senha, modalInfos.id, modalInfos.tipo ,idGuicheA);
    fade.style.display = "none";
    modal.style.display = "none";
}
const todasSalas = async() => {
    fade.style.display = "block";
    modal.style.display = "block";
    $.ajax ({
        type: 'POST',
        data: {
            tipo: 'Nenhum',
            limit: 100
        },
        dataType: 'json',
        url: '../app/Controller/trazerSenhas.php',
        async: true,
        success: function(response) {
            
            var formataData;
            let newHtml = `<table class="w-100 h-100" id="modalSenhasAll">`
                newHtml += `<tr style="border-bottom: 1px solid black;background-color: rgb(182, 170, 170);height: 10%;">`
                newHtml += `<td class="blocos p-2" style="border-right: 1px solid black;">Senha</td>`
                newHtml += `<td class="blocos" style="border-right: 1px solid black;">Etapa</td>`
                newHtml += `<td class="blocos" style="border-right: 1px solid black;">Atendimento Concluido</td>`
                newHtml += `<td class="blocos">Horario</td>`
                newHtml += `</tr>`
            response.result.forEach(senhas => {
                let atendida;
                if(senhas.status === 1) {
                    atendida = "Atendida"
                } else {
                    atendida = "Não Atendida"
                }
                let prefixo = senhas.senha.substring(0,2);
                let restoSenha = senhas.senha.substring(2);

                let color
                if(prefixo == "AM"){
                    color = "rgb(26, 26, 26);"
                }else if(prefixo == "AR"){
                    color = "rgb(16, 48, 96);"
                }else{
                    color = "rgb(19, 94, 19);"
                }

                formataData = senhas.ua.split(" ");
                formataData = formataData[1].split(":");
                newData = formataData[0]+":"+formataData[1]+":"+formataData[2];

                newHtml += `<tr onclick="colocaInfo('${senhas.senha}', '${senhas.id}', '${senhas.tipo}','${senhas.status}')" style="border-bottom: 1px solid rgb(161, 152, 152);height: 10%;" id="senhasAll">`
                newHtml += `<td class="blocos" style="border-right: 1px solid black;"><span style="color: ${color}">${prefixo}</span>${restoSenha}</td>`
                newHtml += `<td class="blocos" style="border-right: 1px solid black;">${senhas.tipo}</td>`
                newHtml += `<td class="blocos" style="border-right: 1px solid black;">${atendida}</td>`
                newHtml += `<td class="blocos">${newData}</td>`
                newHtml += `</tr>`
            })
            newHtml += `<tr style="border-bottom: 1px solid rgb(161, 152, 152);height: 90%;"></tr>`
            newHtml += `</div>`
            $('#modalSenhasAll').html(newHtml);

        }


    })

    $('#fechando-modal').click(function () {
        fade.style.display = "none";
        modal.style.display = "none";

    })
}

const buscar = (b) => {
    $.ajax ({
        type: 'POST',
        url: '../app/Controller/pesquisaSenha.php',
        dataType: 'json',
        data: {busca: b},

        success: function(response) {
            let newHtml = `<table class="w-100 h-100" id="modalSenhasAll">`
            newHtml += `<tr style="border-bottom: 1px solid black;background-color: rgb(182, 170, 170);height: 10%;">`
            newHtml += `<td class="blocos p-2" style="border-right: 1px solid black;">Senha</td>`
            newHtml += `<td class="blocos" style="border-right: 1px solid black;">Etapa</td>`
            newHtml += `<td class="blocos" style="border-right: 1px solid black;">Atendimento Concluido</td>`
            newHtml += `<td class="blocos">Horario</td>`
            newHtml += `</div>`
            console.log(response);
            if(response.result == false) {

            } else {
            response.result.forEach(senha => {
                console.log(senha.statusSenha)
                let atendida;
                if(senha.statusSenha === 1) {
                    atendida = "Atendida"
                } else {
                    atendida = "Não Atendida"
                }
                let prefixo = senha.senha.substring(0,2);
                let restoSenha = senha.senha.substring(2);

                let color
                if(prefixo == "AM"){
                    color = "rgb(26, 26, 26);"
                }else if(prefixo == "AR"){
                    color = "rgb(16, 48, 96);"
                }else{
                    color = "rgb(19, 94, 19);"
                }

                formataData = senha.updateAt.split(" ");
                formataData = formataData[1].split(":");
                newData = formataData[0]+":"+formataData[1]+":"+formataData[2];

                newHtml += `<tr style="border-bottom: 1px solid rgb(161, 152, 152);height: 10%;" id="senhasAll">`
                newHtml += `<td class="blocos" style="border-right: 1px solid black;"><span style="color: ${color}">${prefixo}</span>${restoSenha}</td>`
                newHtml += `<td class="blocos" style="border-right: 1px solid black;">${senha.tipoSenha}</td>`
                newHtml += `<td class="blocos" style="border-right: 1px solid black;">${atendida}</td>`
                newHtml += `<td class="blocos">${newData}</td>`
            })
        }
            newHtml += `<tr style="border-bottom: 1px solid rgb(161, 152, 152);height: 90%;"></tr>`
            newHtml += `</div>`
            $('#modalSenhasAll').html(newHtml);
            console.log(response)
        }, error: (e) => {
            console.log(e);
        }
    })
}

$(document).ready(function () {
    $('#buscaa').keyup(function () {
        var b = $('#buscaa').val();
        if(b != '') {
            buscar(b);
        } else {
            buscar()
        }
    })
})

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
    console.log("dsad")
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
    $.ajax({
        dataType: 'json',
        url: '../app/Controller/verificaGuicheEmUso.php',
        async: true,
        type: 'POST',
        data: {
            idGuiche: idGuiche
        },
        success: function(response) {
            console.log(response)
            newHtml = `<button id="home-btn" type="button" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Ir para home"><i class="fas fa-home"></i></button>`
            if(response.verificado.statusGuiche == 1  && localStorage.getItem("idGuicheEmUso") != response.verificado.id) {
                newHtml += `<div class="w-75 justify-content-center d-flex align-items-center" style="width: 100%!important" ><p class="fw-bold fs-2 text-warning">GUICHÊ EM USO</p></div>`
            } else {
                newHtml += `<button type="button" class="btn btn-success" data-bs-dismiss="modal" onclick="trocarInfos('${idSala}', '${guicheAtual}', '${idGuiche}')">Salvar</button>`
            }
        $('.modal-footer').html(newHtml)
        
         $('[data-bs-toggle="tooltip"]').tooltip();
        
         $('#home-btn').on('click', function() {
             window.location.href = '../index.php'
         });
        },
        error: (e) =>{
            console.log(e)
        }
    })

}

const trocarInfos = async (idSala, guicheAtual, idGuiche) => {
    console.log(idGuiche);
    
    $.ajax({
        type: 'POST',
        data: {
            idGuiche: idGuiche,
            status: 1
        },
        dataType: 'json',
        url: '../app/Controller/alterarUsoGuiche.php',
        success: function(response) {
            console.log(idGuicheA, "idGuicheA");
            if(response.success == true ) {
                console.log(idGuiche, "status do guiche mudado");
                if(idGuicheA != undefined || localStorage.getItem("idGuicheEmUso") != undefined){
                    $.ajax({
                        type: 'POST',
                        data: {
                            idGuiche: localStorage.getItem("idGuicheEmUso"),
                            status: 0
                        },
                        dataType: 'json',
                        url: '../app/Controller/alterarUsoGuiche.php',
                        success: function(response) {
                            console.log("fodase")
                        }
                    })
                }
                idGuicheA = idGuiche
                localStorage.setItem("idGuicheEmUso", idGuiche)
                let url = window.location.href
                url = url.split("/")
                url = url[url.length -1]
                console.log(url)
                localStorage.setItem("urlQuandoSelecionouGuiche", url)
                let newHtml = `
                    <div class="col d-flex flex-column" id="infos">
                      <div class="row p-0 my-2 d-flex">
                        <div class="col d-flex justify-content-end">
                          <button id="abrirModal" type="button" class="btn btn-dark btn-redondo" data-bs-toggle="modal"
                            data-bs-target="#config">
                            <i class="fas fa-cog"></i>
                          </button>
                        </div>
                      </div>
                      <div class="row d-flex m-0 p-0">
                        <div class="col m-0 p-0">
                          <p class="fs-5 fw-bold text-uppercase text-end p-0 m-0">Suas informações</p>
                        </div>
                      </div>
                      <div class="row p-0 m-0">
                        <p class="fw-bold fs-5 p-0 m-0 text-end">Sala: <span class="fs-4">${idSala}</span></p>
                        <p class="fw-bold fs-5 p-0 m-0 text-end">Guichê: <span class="fs-4">${guicheAtual}</span></p>
                        <input type="hidden" id="guiche" value="${idGuiche}">
                      </div>
                    </div>
                `;
                $("#embacada").css('display', 'none')
                document.getElementById("text-embacada").innerText = "Termine o Atendimento Atual"
                $('#infos').html(newHtml);
                trazerNomeSalaEGuiche(idGuicheA)
            }
        },
        error: (e) =>{
            console.log(e)
        }
    })
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
            
            let newHtml = "<div class='row w-100 item'>"
            let newHtmlP = "<div class='row item'>"
            response.result.forEach(senha => {
                
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
                    newHtmlP += `<div class='col-6 d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold' onclick="senhaAtual('${senha.senha}', '${senha.id}', '${senha.tipo}','${senha.status}', '${idGuicheA}')">Chamar</button></div>`
                } else {
                    newHtml += `<div class="col-6 d-flex align-items-center justify-content-center"><p class="h3 fw-bold"><span style="color: ${color}">${prefixo}</span>${senhaT}</p></div>`
                    newHtml += `<div class='col-6 d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold' onclick="senhaAtual('${senha.senha}', '${senha.id}', '${senha.tipo}','${senha.status}', '${idGuicheA}')">Chamar</button></div>`
                }
            });
            newHtml += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary" id="pesquisarSalas" onclick="todasSalas()">Pesquisar</button><button class="btn btn-success" onclick="carregar('normal')">Carregar mais</button></div>`
            newHtmlP += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary" id="pesquisarSalas" onclick="todasSalas()">Pesquisar</button><button class="btn btn-success" onclick="carregar('normal')">Carregar mais</button></div>`
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

const senhaAtual = async(senha, id, tipo, status) =>{
    //pegando os 2 primeiros caracteres da senha
    let statusAtualizado =0
    let prefixo = senha.substring(0,2);
    senhaT = senha.substring(2);
    let dados;
    if(tipo == 'Triagem' && status == '1' ){
        dados = {
            idSenha: id,
            statusSenha: 0,
            idGuiche: localStorage.getItem("idGuicheEmUso"),
        }
    }else{
        localStorage.setItem('senha-modificada', `${tipo},${status}`)
        console.log("fodase")
        let newSenha = senha.toString() 
         dados = {
            senha: newSenha,
            tipo: "Matricula",
            idGuiche: localStorage.getItem("idGuicheEmUso"),
            outra_etapa: true,
            status: statusAtualizado
        }
        
    }
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
        data: dados,
        url: '../app/Controller/atualizarStatusSenhaMatriculaQuandoChamada.php',
        async:true,

        success: async function(response) {
            console.log(response)
            if(response.achou) {
                
            
           
             
    $.ajax ({
        type: 'POST',
        url: '../app/Controller/pegarIdGuicheDaSenhaChamada.php',
        dataType: 'json',
        data: {id: id},

        success: function(response) {
            if(response.idGuiche !== undefined){
                if(response.idGuiche == localStorage.getItem("idGuicheEmUso")){
                    newHtml = `<div class=" h-75 d-flex justify-content-center fs-1 fw-bold" id="senhaAtual">`
                    newHtml += `<p class="text-center" style="font-size: 60px;"><span style="color: ${color}">${prefixo}</span>${senhaT}</p>`
                    newHtml += `</div>`
            
                    $('#embacada').css('display','flex')
                    $('#senhaAtual').html(newHtml)
    
                    localStorage.setItem("idSenhaAtualMatricula", id)
                    seila = $('#guiche').val();
                }
            }
        },
        error: (e) => {
                console.log(e)
            }
        })
            
            
            
            

            }
        }
    }) 
}

 const compareceu = async(status) => {
    if(localStorage.getItem('idSenhaAtualMatricula') != undefined) {

        if(localStorage.getItem('senha-modificada')){
            let infos = localStorage.getItem('senha-modificada').split(',')
            console.log($("#senhaAtual").text())
            $.ajax({
                type: 'POST',
                dataType: 'json',
                data:{
                    status:infos[1],
                    outra_etapa: true,
                    retomada:true,
                    tipo: infos[0],
                    senha: $("#senhaAtual").text(),
                    idGuiche: localStorage.getItem("idGuicheEmUso")
                },
                url: '../app/Controller/recallSenha.php',
                async: true,
                
                success: function(response) {
                    console.log(response)
                    localStorage.removeItem("idSenhaAtual")
                    localStorage.removeItem("senha-modificada")
                    $("#embacada").css('display', 'none')
                    $("#senhaAtual").html(`<p id="senhaAtual" class="text-center fw-bold text-uppercase p-0 m-0 fs-60"><span id="prefixo-atual" class="">XX</span><span id="digitos-atual">000</span></p>`)
                },
                error: (e) =>{
                    console.log(e)
                }
            })
        }else{

        
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
            $('#embacada').css('display', 'none')
            $("#senhaAtual").html(`<p id="senhaAtual" class="text-center fw-bold text-uppercase p-0 m-0 fs-60"><span id="prefixo-atual" class="">XX</span><span id="digitos-atual">000</span></p>`)

         }
     })
    }
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
            newHtml += `<div class='col-6 d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold' onclick="senhaAtual('${senha.senha}', '${senha.id}', '${senha.tipo}','${senha.status}', '${idGuicheA}')">Chamar</button></div>`
        })
        newHtml += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary" id="pesquisarSalas" onclick="todasSalas()">Pesquisar</button><button class="btn btn-success" onclick="carregar('atendidas')">Carregar mais</button></div>`
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
                newHtml += `<div class='col-6 d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold' onclick="senhaAtual('${senha.senha}', '${senha.id}', '${senha.tipo}','${senha.status}', '${idGuicheA}')">Chamar</button></div>`
            })
            newHtml += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary" id="pesquisarSalas" onclick="todasSalas()">Pesquisar</button><button class="btn btn-success" onclick="carregar('nao')">Carregar mais</button></div>`
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
            newHtml = `<div class=" h-100 p-0 m-0 d-flex justify-content-center fs-1 fw-bold" >`
            newHtml += `<p id="senhaAtual" class="text-center fw-bold text-uppercase p-0 m-0 fs-60"><span style="color: ${color}">${prefixo}</span>${senhaT}</p>`
            newHtml += `</div>`
            $("#senhaAtual").html(newHtml)
            $("#embacada").css('display','flex')
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

