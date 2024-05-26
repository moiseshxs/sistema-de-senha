let tipo = "Triagem"
let limit = 8
let clicksCarregar =1
let idGuicheA;

$('#abrirModal').on('click', function (e){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '../app/Controller/trazerSalas.php',
        async: true,
    
         success: function(response) {
               let newHtml = `<div class="col-4 bg-light d-flex gap-1 flex-column w-100 p-1" id="salasTotal">`
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
            let newHtml = `<div class="col-4 w-100 bg-light p-1 flex-column d-flex gap-3" id="guiches">`
                newHtml += `<p class="titulo-sala fs-3 fw-bold w-100 text-center text-uppercase">${nomeSala}</p>`
                response.guiches.forEach(guiche => {
                    newHtml += `<div class="guiche w-100 bg-secondary py-2 d-flex justify-content-center align-items-center" onclick="focar(this, '${guiche.nomeGuiche}', '${idSala}', '${guiche.idGuiche}')">`
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
            localStorage.removeItem("idSenhaAtual")
            $("#embacada").css('display', 'none')
            $("#senhaAtual").html(`<p id="senhaAtual" class="text-center" style="font-size: 60px;"><span id="prefixo-atual" class="">00</span><span id="digitos-atual">000</span></p>`)
        }
    })
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
                if(senha.status == '1'){
                    icon = `<i class='bx bx-check-circle fs-1 text-success'></i>`
                }else if(senha.status == '2'){
                    icon = `<i class='bx bx-x-circle fs-1 text-danger'></i>`
                }
                console.log(senha)
                newHtml += "<div class='col-5 d-flex align-items-center justify-content-center'><p class='h3 fw-bold'>"+senha.senha+"</p></div>"
                newHtml += `<div class='col-3 d-flex align-items-center justify-content-center'>${icon}</div>`
                newHtml += `<div onclick="reCall('${senha.senha}', '${senha.id}', ${idGuicheA})" class="col-4 d-flex align-items-center justify-content-center"><button class="btn btn-success fw-semibold">Chamar</button></div>`
            });
            newHtml += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary">Pesquisar</button><button class="btn btn-success" onclick="carregar()">Carregar mais</button></div>`
           
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
                localStorage.setItem("idSenhaAtual", response.idSenhaAtual)
                $("#embacada").css('display', 'flex')
            atualizarHtmlProximasSenhas(response)
            
            await buscarUltimasSenhas()
        },
        error: (e) =>{
            console.log(e)
        }
    });
}

const reCall = async (senha, id, guicheId) =>{
    console.log(id)
    await updateSenha(senha, id, guicheId)
    setTimeout(() =>{
     trazerSenhas()
}, 500)     
}

const updateSenha = async (senha, id, guicheId) =>{
    localStorage.setItem('idSenhaAtual', id)
    $(document).ready(function() {
    let newSenha = senha.toString() 
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '../app/Controller/recallSenha.php',
        async: true,
        data: {senha:newSenha,
               idGuiche: guicheId
        },
        success: function(response) {
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

const trazerSenhas = async() =>{
    $.ajax({
        data: {tipo: "Triagem"},
        type: 'GET',
        dataType: 'json',
        url: '../app/Controller/trazerSenhas.php',
        async: true,
        
        success: function(response) {
            
            console.log( response)
            let newHtml = "<div class='row item'>"
            if(response.result){
            response.result.forEach(senha => {
                    let prefix = tratamentoPrefixo(senha.senha)
                    let number = senha.senha.split(prefix)[1]
                    number = parseInt(number)
                    console.log(number)
                    newHtml += "<div class='col d-flex align-items-center justify-content-center'><p class='h3 fw-bold'>"+senha.senha+"</p></div>"
                    newHtml += `<div onclick="reCall('${senha.senha}', '${senha.id}')" class="col d-flex align-items-center justify-content-center"><button class="btn btn-success fw-semibold">Chamar</button></div>`
                    
                });
            }
            newHtml += "</div>"
            $('#ultimos').html(newHtml) 
            
            
        }
    });
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
