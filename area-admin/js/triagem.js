let tipo = "Triagem" 
let limit = 8 //essa variavel esta relacionada a quantas senhas serão carregadas nos blocos de visualizar as ultimas, no inicio, se limitam a 8
let clicksCarregar =1 //toda vez que clicarem em carregar mais senhas, será acrescida de + 1, assim definindo o limite de senhas multiplicando pela variavel acima
let idGuicheA; //guarda o id do guiche atual
let modalInfos = {};

//função que se ativa juntamente com o modal
$('#abrirModal').on('click', function (e){
    //requisição ajax para buscar as salas do sistema
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '../app/Controller/trazerSalas.php',
        async: true,
    
         success: function(response) {
            //com a resposta 'response', monta e atualiza o novo html contendo as salas do sistema
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
//função para o modal de pesquisa
const todasSalas = async() => {
    fade.style.display = "block";
    modal.style.display = "block";
    $.ajax ({
        type: 'POST',
        data: {
            //o tipo define o fluxo do codigo no controller trazer senhas
            tipo: 'Nenhum',
            //o limit define quantas senhas serão permitidas no maximo na query
            limit: 100
        },
        dataType: 'json',
        url: '../app/Controller/trazerSenhas.php',
        async: true,
        success: function(response) {
            console.log(response)
            //com o sucesso da requisição, monta-se o html da tabela
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
            //atualizando o html
            $('#modalSenhasAll').html(newHtml);

        }


    })
    //função para fechar modal de pesquisa
    $('#fechando-modal').click(function () {
        fade.style.display = "none";
        modal.style.display = "none";

    })
}
//função de pesquisa no modal
const buscar = (b) => {
    $.ajax ({
        type: 'POST',
        url: '../app/Controller/pesquisaSenha.php',
        dataType: 'json',
        data: {busca: b},

        success: function(response) {
            //com a resposta, monta-se o html
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
            //atualiza o html
            $('#modalSenhasAll').html(newHtml);
            console.log(response)
        }, error: (e) => {
            console.log(e);
        }
    })
}

$(document).ready(function () {
    //função que ativa a função de busca
    $('#buscaa').keyup(function () {
        //ok keyup, ou seja ao apertar uma tecla
        var b = $('#buscaa').val();
        //pega o valor do input
        if(b != '') {
            //se o valor for diferente de vazio, passa o valor como parametro
            buscar(b);
        } else {
            //caso contrario nao se passa parametro
            buscar()
        }
    })
})

const carregar = () =>{
    //função que acumula os clicks que o usuario der no botão 'carregar mais'
    clicksCarregar ++

}
//função que busca os guiches, ainda no modal de escolher guiche, é acionada ao clicar em uma sala 
const trazerGuiches = async(idSala, nomeSala, div) => {

    if(div != null) {
        //seleciona todos os blocos com sala
        var divs = document.querySelectorAll('.sala');
        console.log(divs)
        divs.forEach(function(element) {
            //troca a cor da borda desses blocos para preto
            element.style.border = "1px solid black";
        });
        //e o bloco selecionado troca-se a cor para verde
        div.style.border = "3px solid #00FF00";
        
    }
    //requisição ajax para buscar os guiches no sistema de acordo com o id da sala
    $.ajax ({
        type: 'POST',
        data: {
            idSala: idSala
        },
        dataType: 'json',
        url: '../app/Controller/trazerGuicheDasSalas.php',
        async: true,
        
        success: function(response) {
            //com a resposta da requisição, monta-se o html
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
                //atualizando html
                $('#guiches').html(newHtml)
        }
    })
}
const focar = (div,nomeGuiche, idSala, idGuiche) => {

    let tratamentoNomeGuiche = nomeGuiche.split(' ');
    tratamentoNomeGuiche = tratamentoNomeGuiche[1].charAt(1)
    guicheAtual = tratamentoNomeGuiche;
    //troca a cor da borda dos demais blocos de guiche para preto e o escolhido troca para verde
    if(div != null) {
        var divs = document.querySelectorAll('.guiche');
        console.log(divs)
        divs.forEach(function(element) {
            element.style.border = "1px solid black";
        });
        div.style.border = "3px solid #00FF00";
    }
    //requisição ajax para saber se o guiche esta em uso de acordo com seu id
    $.ajax({

        dataType: 'json',
        url: '../app/Controller/verificaGuicheEmUso.php',
        async: true,
        type: 'POST',
        data: {
            idGuiche: idGuiche
        },
        success: function(response) {
            //com a resposta monta-se o html, porem se o guiche estiver em uso. não é mostrado o botao de escolher o guiche para o usuario
            newHtml = `<button id="home-btn" type="button" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Ir para home"><i class="fas fa-home"></i></button>`
            if(response.verificado.statusGuiche == 1) {
                newHtml += `<div class="w-75 justify-content-center d-flex align-items-center" style="width: 100%!important" ><p class="fw-bold fs-2 text-warning">GUICHÊ EM USO</p></div>`
            } else {
                newHtml += `<button type="button" class="btn btn-success" data-bs-dismiss="modal" onclick="trocarInfos('${idSala}', '${guicheAtual}', '${idGuiche}')">Salvar</button>`
            }
        $('.modal-footer').html(newHtml)
        
         $('[data-bs-toggle="tooltip"]').tooltip();
        
         $('#home-btn').on('click', function() {
             window.location.href = '../index.php'
         });
        }
    })

}
//função acionada quando o guiche for selecionado pelo usuario 
const trocarInfos = async (idSala, guicheAtual, idGuiche) => {
    console.log(idGuiche);
    //requisição que fará o update no campo de 'emUso' do guiche com seu id
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
            //se der sucesso na função
            if(response.success == true ) {
                console.log(idGuiche, "status do guiche mudado");
                //se a variavel que guarda o id do guiche, estiver diferente de indefinida, ou seja, se ja havia um guiche em usi
                if(idGuicheA != undefined){
                    //faz-se uma requisição ajax para alterar o 'emUso' do guiche para false
                    $.ajax({
                        type: 'POST',
                        data: {
                            idGuiche: idGuicheA,
                            //aqui definindo o status do guice como 0(false)
                            status: 0
                        },
                        dataType: 'json',
                        url: '../app/Controller/alterarUsoGuiche.php',
                        success: function(response) {
                            console.log("fodase")
                        }
                    })
                }
                //definindo o id do guiche da resposta como o id do guiche 
                idGuicheA = idGuiche
                //montando o novo html que fica na parte superior da tela do sistema, mostrando as informações atuais de sala e guiche 
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
                
                $('#infos').html(newHtml);
            }
        }
    })
}


//função que pega o id da senha atual e busca suas informações, atualizando o html para o usuario 
const senhaAtual = () =>{
    $.ajax({
        type: 'POST',
        dataType: 'json',
        data:{
            idSenha:localStorage.getItem("idSenhaAtual")
            //o id da senha é armazenado no armazenamento local do navegador, isso acontece porque mesmo que se recarregue a pagina, a senha continue sendo vista pelo usuario
        },
        url: '../app/Controller/senhaChamadaPeloGuicheTriagem.php',
        //apesar do nome do controller, ele é chamado em outras etapas de atendimento também...
        async: true,
        success: (response) => {
            console.log(response[0].senha)
            if(response[0].senha){
                
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
