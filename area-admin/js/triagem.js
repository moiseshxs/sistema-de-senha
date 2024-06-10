let tipo = "Triagem"
let limit = 8
let clicksCarregar =1
let idGuicheA;
let modalInfos = {};


$('#abrirModal').on('click', function (e){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '../app/Controller/trazerSalas.php',
        async: true,
    
         success: function(response) {
               let newHtml = `<div class="col-4 bg-light d-flex gap-1 flex-column w-100 p-1 overflow-auto" id="salasTotal">`
                           response.salas.forEach(sala => {
                            newHtml +=`<div class="sala w-100 bg-secondary border border-dark d-flex justify-content-center align-items-center" onclick="trazerGuiches('${sala.idSala}', '${sala.nomeSala}', this)" id="salaa" style="border: 1px solid black">`
                            newHtml += `<p class="titulo-sala fs-1 fw-bold text-light">${sala.nomeSala}</p>`
                            newHtml +=`</div>`
                           })

               newHtml +=`</div>`
               $('#salasTotal').html(newHtml)
         }
    })
})
    const fade = document.querySelector('#fades');
    const modal = document.querySelector('#pesquisa-sala');
    
const colocaInfo = (senha, id, tipo, status) => {
    modalInfos = {senha, id, tipo, status};
}
const chamaDnv = () => {
    reCall(modalInfos.senha, modalInfos.id,modalInfos.tipo,modalInfos.status, idGuicheA);
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
            console.log(response)
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

const carregar = () =>{
    clicksCarregar ++

}

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
            let newHtml = `<div class="col-4 w-100 bg-light p-1 flex-column d-flex gap-3 overflow-y-auto" id="guiches">`
                newHtml += `<p class="titulo-sala fs-3 fw-bold w-100 text-center text-uppercase">${nomeSala}</p>`
                if(response.guiches == false) {

                } else {
                    response.guiches.forEach(guiche => {
                        newHtml += `<div class="guiche w-100 bg-secondary py-2 d-flex justify-content-center align-items-center" onclick="focar(this, '${guiche.nomeGuiche}', '${idSala}', '${guiche.idGuiche}')">`
                        newHtml += `<p class="titulo-sala fs-1 fw-bold text-light text-uppercase">${guiche.nomeGuiche}</p>`
                        newHtml += `</div>`
                    })
                }
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
        newHtml = `<button id="home-btn" type="button" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Ir para home"><i class="fas fa-home"></i></button>`
        newHtml += `<button type="button" class="btn btn-success" data-bs-dismiss="modal" onclick="trocarInfos('${idSala}', '${guicheAtual}', '${idGuiche}')">Salvar</button>`
    $('.modal-footer').html(newHtml)

     $('[data-bs-toggle="tooltip"]').tooltip();

     $('#home-btn').on('click', function() {
         window.location.href = '../index.php'
     });
}

const trocarInfos = async (idSala, guicheAtual, idGuiche) => {
    console.log(idGuiche);
    idGuicheA = idGuiche
    let newHtml = `<div class="col d-flex flex-column" id="infos">`;
    newHtml += `<div class="row p-0 my-2 d-flex">
                  <div class="col d-flex justify-content-end">
                    <button id="abrirModal" type="button" class="btn btn-dark btn-redondo" data-bs-toggle="modal" data-bs-target="#config">
                      <i class="fas fa-cog"></i>
                    </button>
                  </div>
                </div>`;
    newHtml += `<div class="row p-0 m-0 d-flex">
                  <div class="col m-0 p-0">
                    <p class="fs-5 fw-bold text-uppercase text-end p-0 m-0">Suas informações</p>
                  </div>
                </div>`;
    newHtml += `<div class="row p-0 m-0">
                  <p class="fw-bold fs-5 p-0 m-0 text-end">Sala: <span class="fs-4">${idSala}</span></p>
                  <p class="fw-bold fs-5 p-0 m-0 text-end">Guichê: <span class="fs-4">${guicheAtual}</span></p>
                  <input type="hidden" id="guiche" value="${idGuiche}">
                </div>`;
    newHtml += `</div>`;
    $('#infos').html(newHtml);
}


const senhaAtual = () =>{
    $.ajax({
        type: 'POST',
        dataType: 'json',
        data:{idSenha:localStorage.getItem("idSenhaAtual")},
        url: '../app/Controller/senhaChamadaPeloGuicheTriagem.php',
        async: true,
        success: (response) => {
            console.log(response[0].senha)
            if(response[0].senha){
                console.log("fodase")
                let prefixo = tratamentoPrefixo(response[0].senha.senha)
                let color
                if(prefixo == "AM"){
                    color = "rgb(26, 26, 26);"
                }else if(prefixo == "AR"){
                    color = "rgb(16, 48, 96);"
                }else{
                    color = "rgb(19, 94, 19);"
                }
                let html = `<span id="prefixo-atual" style="color:${color} !important">${prefixo}</span>`
                $("#prefixo-atual").html(html)
                
                document.getElementById("digitos-atual").innerText = (response[0].senha.senha).split(prefixo)[1]
            }
        },
        error:(e) => {
            console.log(e)
        }
    })
}


//função para corrigir senhas menores que 3 digitos ex: 2 => 002
const tratamentoSenha = senha =>{
    if(senha.toString().length ==1 ){
        return "00" + senha
    }else if(senha.toString().length ==2){
        return "0" +senha
    }
    return senha
}
//função que retorna o prefixo de uma senha, ou seja seus dois primeiros caracteres
const tratamentoPrefixo = senha => {
    return newSenha = senha.charAt(0) + senha.charAt(1)
}

//funcao que atualiza os botoes de chamar senhas
const atualizarHtmlProximasSenhas =  (response) =>{

    let prefixo = tratamentoPrefixo(response.senhas.am.senha)
    let senhaAm = response.senhas.am.senha.split(prefixo)[1];
    
    senhaAm = parseInt(senhaAm) + 1 
    senhaAm = tratamentoSenha(senhaAm)

    let prefixoAr = tratamentoPrefixo(response.senhas.ar.senha)
    let senhaAr = response.senhas.ar.senha.split(prefixoAr)[1];
    
    senhaAr = parseInt(senhaAr) + 1 
    senhaAr = tratamentoSenha(senhaAr)

    let prefixoAp = tratamentoPrefixo(response.senhas.ap.senha)
    let senhaAp = response.senhas.ap.senha.split(prefixoAp)[1];
    
    senhaAp = parseInt(senhaAp) + 1 
    senhaAp = tratamentoSenha(senhaAp)
    //construindo as tags
    let senhaAmDiv = "<p id='senhaAm' class='m-0 fs-1 fw-bold'><span class='text-dark'>AM</span>"+ senhaAm +"</p>"
    let senhaArDiv = "<p id='senhaAR' class='m-0 fs-1 fw-bold'><span class='text-primary-emphasis'>AR</span>"+ senhaAr +"</p>"
    let senhaApDiv = "<p id='senhaAP' class='m-0 fs-1 fw-bold'><span class='text-success'>AP</span>"+senhaAp+"</p>"
    //atualizando o html
    $('#senhaAM').html(senhaAmDiv)
    $("#senhaAR").html(senhaArDiv)
    $("#senhaAP").html(senhaApDiv)
}

//funcao que faz requisição ajax para trazer as ultimas senhas chamadas


const update = status =>{

    if(localStorage.getItem('idSenhaAtual') != undefined){
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
                idGuiche: idGuicheA
            },
            url: '../app/Controller/recallSenha.php',
            async: true,
            
            success: function(response) {
                console.log(response)
                localStorage.removeItem("idSenhaAtual")
                localStorage.removeItem("senha-modificada")
                $("#embacada").css('display', 'none')
                $("#senhaAtual").html(`<p id="senhaAtual" class="text-center fs-60 fw-bold text-uppercase p-0 m-0"><span id="prefixo-atual" class="">XX</span><span id="digitos-atual">000</span></p>`)
            },
            error: (e) =>{
                console.log(e)
            }
        })
    }else{
        $.ajax({
            type: 'POST',
            dataType: 'json',
            data:{
                status:status,
                id: localStorage.getItem("idSenhaAtual")
            },
            url: '../app/Controller/atualizarSenhaChamadaPeloGuicheTriagem.php',
            async: true,
            
            success: function(response) {
                console.log(response)
                console.log(localStorage.getItem('idSenhaAtual'))
                localStorage.removeItem("idSenhaAtual")
                $("#embacada").css('display', 'none')
                $("#senhaAtual").html(`<p id="senhaAtual" class="text-center fs-60 fw-bold text-uppercase p-0 m-0"><span id="prefixo-atual" class="">XX</span><span id="digitos-atual">000</span></p>`)
            }
        })
    }
}
}


const buscarUltimasSenhas = async() =>{
    $.ajax({
        type: 'POST',
        data: {
            tipo: "Triagem",
            limit: clicksCarregar

        },
        dataType: 'json',
        url: '../app/Controller/trazerSenhas.php',
        async: true,
        
        success: function(response) {
            console.log(response)
            //construção da tag html
            let newHtml = "<div class='row item'>"
            let icon;
            if(response.result){
            response.result.forEach(senha => {
                if(senha.status == '1' || senha.tipo != 'Triagem'){
                    icon = `<i class='bx bx-check-circle fs-1 text-success'></i>`
                }else if(senha.status == '2'){
                    icon = `<i class='bx bx-x-circle fs-1 text-danger'></i>`
                }
                console.log(senha)
                newHtml += "<div class='col-5 d-flex align-items-center justify-content-center'><p class='h3 fw-bold'>"+senha.senha+"</p></div>"
                newHtml += `<div class='col-3 d-flex align-items-center justify-content-center'>${icon}</div>`
                newHtml += `<div onclick="reCall('${senha.senha}', '${senha.id}', '${senha.tipo}','${senha.status}', ${idGuicheA})" class="col-4 d-flex align-items-center justify-content-center"><button class="btn btn-success fw-semibold">Chamar</button></div>`
            });
            newHtml += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary" id="pesquisarSalas" onclick="todasSalas()">Pesquisar</button><button class="btn btn-success" onclick="carregar(this)">Carregar mais</button></div>`
            newHtml += "</div>"
            //atualizando html
            $('#ultimos').html(newHtml) 
        }

            
        },
        error: (e)=>{
            console.log(e)
        }
    });
}

 

//funcao que insere a senha no banco
const inserirSenha = async(senha, guiche) =>{
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '../app/Controller/inserirSenha.php',
        async: true,
        data: {
            senha:senha,
            guiche: guiche,
            tipo: tipo,
        },
        success: async function(response) {
            //callback em caso de sucesso na requisição
            console.log(response)
              if(response.resposta){
                let prefixo = tratamentoPrefixo(senha)
                let color
                if(prefixo == "AM"){
                    color = "rgb(26, 26, 26);"
                }else if(prefixo == "AR"){
                    color = "rgb(16, 48, 96);"
                }else{
                    color = "rgb(19, 94, 19);"
                }
                let html = `<span id="prefixo-atual" style="color:${color} !important">${prefixo}</span>`
                $("#prefixo-atual").html(html)
                
                document.getElementById("digitos-atual").innerText = (senha).split(prefixo)[1]
                localStorage.setItem("idSenhaAtual", response.resposta)
                $("#embacada").css('display', 'flex')
                atualizarHtmlProximasSenhas(response)
                
                await buscarUltimasSenhas()
            }
        },
        error: (e) =>{
            console.log(e)
        }
    });
}

const reCall = async (senha, id,tipo,status) =>{
    console.log(id)
    await updateSenha(senha, id, tipo, status)
    setTimeout(() =>{
     buscarUltimasSenhas()
}, 500)     
}

const updateSenha = async (senha, id, tipo, status) =>{
    let statusAtualizado = 0
    localStorage.setItem('idSenhaAtual', id)
    let dados;
    if(tipo != 'Triagem'){
        localStorage.setItem('senha-modificada', `${tipo},${status}`)
        let newSenha = senha.toString() 
         dados = {
            senha: newSenha,
            tipo: "Triagem",
            idGuiche: idGuicheA,
            outra_etapa: true,
            status: statusAtualizado
        }
    }else{
        dados = {
            senha: newSenha,
            idGuiche: idGuicheA
        }
    }
    $(document).ready(function() {
    
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '../app/Controller/recallSenha.php',
        async: true,
        data: dados,
        success: function(response) {
            console.log(response)
            let prefixo = tratamentoPrefixo(senha)
            let color
            if(prefixo == "AM"){
                color = "rgb(26, 26, 26);"
            }else if(prefixo == "AR"){
                color = "rgb(16, 48, 96);"
            }else{
                color = "rgb(19, 94, 19);"
            }
            let html = `<span id="prefixo-atual" style="color:${color} !important">${prefixo}</span>`
            $("#prefixo-atual").html(html)
            
            document.getElementById("digitos-atual").innerText = (senha).split(prefixo)[1]
            localStorage.setItem("idSenhaAtual", id)
            $("#embacada").css('display', 'flex')
            atualizarHtmlProximasSenhas(response)
        
            buscarUltimasSenhas()
        },error: (e) =>{
            console.log(e)
        }

    })
})
}



    

    


$(document).ready(function() {

    /// quando clicar na proxima senha 'AM'

    /// Quando usuário clicar em salvar será feito todos os passo abaixo

    
    $('#salvarAM').click(function() {


        let guiche = $("#guiche").val()
        let senha = $("#senhaAM").text()
        let prefixo = tratamentoPrefixo(senha)

        senha = senha.split(prefixo)[1]

        senha = parseInt(senha);
        
        senha = tratamentoSenha(senha)
        senha = prefixo + senha


        inserirSenha(senha, guiche)
        

        return false;
    });



    //preferencial
    $('#salvarAP').click(async function() {

        let guiche = $("#guiche").val()
        let senha = $("#senhaAP").text()
        let prefixo = tratamentoPrefixo(senha)
        senha = senha.split(prefixo)[1]
        console.log(guiche)
        senha = parseInt(senha);
        
        senha = tratamentoSenha(senha)
        senha = prefixo + senha


        inserirSenha(senha, guiche)
        
        return false;
    });




    $('#salvarAR').click(function() {

        let guiche = $("#guiche").val()
        let senha = $("#senhaAR").text()
        let prefixo = tratamentoPrefixo(senha)
        senha = senha.split(prefixo)[1]
        console.log(guiche)
        senha = parseInt(senha);
        
        senha = tratamentoSenha(senha)
        senha = prefixo + senha
        
        inserirSenha(senha, guiche)

                
        

        return false;
    });

    //de 1 em 1 segundo é buscado as ultimas senhas
    
})

if(localStorage.getItem("idSenhaAtual") != undefined){
    senhaAtual()
    $("#embacada").css('display', 'flex')
}

setInterval(()=>{
    console.log("aaaaa")
buscarUltimasSenhas()

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: '../app/Controller/ultimasSenhas.php',
    async: true,
    
    success: function(response) {
        console.log(response)
        atualizarHtmlProximasSenhas(response)

    }
})
}, 1000)
