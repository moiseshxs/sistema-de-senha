$('#abrirModal').on('click', function (e){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '../app/Controller/trazerSalasWithGuiches.php',
        async: true,
    
         success: function(response) {
             console.log(response)

               let newHtml = `<div class="col-4 bg-light w-100 p-1" id="salasTotal">`
                           response.result.forEach(result => {
                            console.log(result.sala);
                               newHtml +=`<div class="sala w-100 bg-secondary border border-dark d-flex justify-content-center align-items-center">`
                               newHtml += `<p class="titulo-sala fs-1 fw-bold text-light">${result.sala}</p>`
                               newHtml +=`</div>`
                           })
               newHtml +=`</div>`
               $('#salasTotal').html(newHtml)
         }
    })
})

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
const buscarUltimasSenhas = async() =>{
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '../app/Controller/trazerSenhas.php',
        async: true,
        
        success: function(response) {
            
            //construção da tag html
            let newHtml = "<div class='row item'>"
            response.result.forEach(senha => {
                
                newHtml += "<div class='col d-flex align-items-center justify-content-center'><p class='h3 fw-bold'>"+senha.senha+"</p></div>"
                newHtml += `<div onclick="reCall('${senha.senha}')" class="col d-flex align-items-center justify-content-center"><button class="btn btn-success fw-semibold">Chamar</button></div>`
            });
            newHtml += "</div>"
            //atualizando html
            $('#ultimos').html(newHtml) 

            
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
        data: {senha:senha,
        guiche: guiche},
        success: async function(response) {
            //callback em caso de sucesso na requisição
              
            atualizarHtmlProximasSenhas(response)
            await buscarUltimasSenhas()
        }
    });
}

const reCall = async (senha) =>{
    await updateSenha(senha)
    setTimeout(() =>{
     trazerSenhas()
}, 500)     
}

const updateSenha = async (senha) =>{
    $(document).ready(function() {
    let newSenha = senha.toString() 
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '../app/Controller/recallSenha.php',
        async: true,
        data: {senha:newSenha,
        },
        success: function(response) {
            console.log(response)
        }

    })
})
}

const trazerSenhas = async() =>{
    $.ajax({
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
                    newHtml += `<div onclick="reCall('${senha.senha}')" class="col d-flex align-items-center justify-content-center"><button class="btn btn-success fw-semibold">Chamar</button></div>`
                    
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
    setInterval(()=>{
    buscarUltimasSenhas()
   
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '../app/Controller/ultimasSenhas.php',
        async: true,
        
        success: function(response) {
            
            atualizarHtmlProximasSenhas(response)

        }
    })
    }, 1000)

})

