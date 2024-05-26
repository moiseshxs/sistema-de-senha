let tipo = "Apm"

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

const tratamentoPrefixo = senha => {
    return newSenha = senha.charAt(0) + senha.charAt(1)
}

const chamarSenhaAtualCasoRecarregar = () =>{
    let id = localStorage.getItem("idSenhaApm")
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
 if(localStorage.getItem("idSenhaApm") !== undefined){
 chamarSenhaAtualCasoRecarregar()
}



const compareceu = async(status) => {
    if(localStorage.getItem('idSenhaApm') != undefined) {
        console.log(status)
     $.ajax({
         type: 'POST',
         dataType: 'json',
         data: {
             idSenha: localStorage.getItem('idSenhaApm'), 
             tipo: "Apm",
             status: status
            },
         url: '../app/Controller/atualizarAtendimentoApm.php',
         async:true,

         success: function(response) {
            console.log(response)
            localStorage.removeItem("idSenhaApm")
            $('#embaca').css('display', 'none')
            $("#senhaAtual").html(`<p id="senhaAtual" class="text-center" style="font-size: 60px;"><span id="prefixo-atual" class="">00</span><span id="digitos-atual">000</span></p>`)
            
            
         }
     })
    } 
 }


const senhaAtual = async(senha, idSenha) =>{
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
            statusSenha: 0
        },
        url: '../app/Controller/atualizarStatusSenhaApm.php',
        async:true,

        success: function(response) {
            newHtml = `<div class=" h-75 d-flex justify-content-center fs-1 fw-bold" id="senhaAtual">`
            newHtml += `<p class="text-center" style="font-size: 60px;"><span style="color: ${color}">${prefixo}</span>${senhaT}</p>`
            newHtml += `</div>`
    
            $('#embaca').css('display','flex')
            $('#senhaAtual').html(newHtml)
            localStorage.setItem("idSenhaApm", idSenha)
    
           
        }
    })

}


const buscarUltimasSenhasT = async() =>{
    $.ajax({
        data: {tipo: "Apm"
            ,limit: clicksCarregar
        },
        type: 'POST',
        dataType: 'json',
        url: '../app/Controller/trazerSenhas.php',
        async: true,
        
        success: function(response) {
            //construção da tag html
            console.log(response)
            let newHtmlP ="<div class='row item'>" 
            let newHtml = "<div class='row item'>"
            response.result.forEach(senha => {
                let prefixo = tratamentoPrefixo(senha.senha)
                let color
                if(prefixo == "AM"){
                    color = "rgb(26, 26, 26);"
                }else if(prefixo == "AR"){
                    color = "rgb(16, 48, 96);"
                }else{
                    color = "rgb(19, 94, 19);"
                }
                if(prefixo == "AP"){
                    newHtmlP += `<div class='col d-flex align-items-center justify-content-center'><p class='h3 fw-bold'><span style="color:${color}">${prefixo}</span>${(senha.senha).split(prefixo)[1]}</p></div>`
                    newHtmlP += `<div class='col d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold' onclick="senhaAtual('${senha.senha}', '${senha.id}')">Chamar</button></div>`
                }else{
                    newHtml += `<div class='col d-flex align-items-center justify-content-center'><p class='h3 fw-bold'><span style="color:${color}">${prefixo}</span>${(senha.senha).split(prefixo)[1]}</p></div>`
                newHtml += `<div class='col d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold' onclick="senhaAtual('${senha.senha}', '${senha.id}')">Chamar</button></div>`
                }
            });
            newHtml += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary">Pesquisar</button><button class="btn btn-success" onclick="carregar('normal')">Carregar mais</button></div>`
            newHtmlP += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary">Pesquisar</button><button class="btn btn-success" onclick="carregar('normal')">Carregar mais</button></div>`
            newHtml += "</div>"
            newHtmlP += "</div>"
            //atualizando html
            $('#proximos').html(newHtml) 
            $("#preferenciais").html(newHtmlP)
        }
    });
}


const buscarUltimasSenhasAtendidas = async() =>{
    $.ajax({
        data: {tipo: "Apm-Atendidas", limit: atendidos},
        type: 'POST',
        dataType: 'json',
        url: '../app/Controller/trazerSenhas.php',
        async: true,
        
        success: function(response) {
            //construção da tag html
            console.log(response)
            
            let newHtml = "<div class='row item'>"
            response.result.forEach(senha => {
                let prefixo = tratamentoPrefixo(senha.senha)
                let color
                if(prefixo == "AM"){
                    color = "rgb(26, 26, 26);"
                }else if(prefixo == "AR"){
                    color = "rgb(16, 48, 96);"
                }else{
                    color = "rgb(19, 94, 19);"
                }
                
                  
                    newHtml += `<div class='col d-flex align-items-center justify-content-center'><p class='h3 fw-bold'><span style="color:${color}">${prefixo}</span>${(senha.senha).split(prefixo)[1]}</p></div>`
                newHtml += `<div class='col d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold' onclick="senhaAtual('${senha.senha}', '${senha.id}')">Chamar</button></div>`
                
            });
            newHtml += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary">Pesquisar</button><button class="btn btn-success" onclick="carregar('atendidas')">Carregar mais</button></div>`
            newHtml += "</div>"
          
            //atualizando html
            $('#atendidas').html(newHtml) 
           
        }
    });
}

const buscarNaoComparecidas = async() =>{
    $.ajax({
        data: {tipo: "Apm-Nao", limit: nao},
        type: 'POST',
        dataType: 'json',
        url: '../app/Controller/trazerSenhas.php',
        async: true,
        
        success: function(response) {
            //construção da tag html
            console.log(response)
            
            let newHtml = "<div class='row item'>"
            response.result.forEach(senha => {
                let prefixo = tratamentoPrefixo(senha.senha)
                let color
                if(prefixo == "AM"){
                    color = "rgb(26, 26, 26);"
                }else if(prefixo == "AR"){
                    color = "rgb(16, 48, 96);"
                }else{
                    color = "rgb(19, 94, 19);"
                }
                
                  
                    newHtml += `<div class='col d-flex align-items-center justify-content-center'><p class='h3 fw-bold'><span style="color:${color}">${prefixo}</span>${(senha.senha).split(prefixo)[1]}</p></div>`
                newHtml += `<div class='col d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold' onclick="senhaAtual('${senha.senha}', '${senha.id}')">Chamar</button></div>`
                
            });
            newHtml += `<div class='col-12 mt-2 d-flex justify-content-around align-items-center'><button class="btn btn-primary">Pesquisar</button><button class="btn btn-success" onclick="carregar('nao')">Carregar mais</button></div>`
            newHtml += "</div>"
          
            //atualizando html
            $('#nao-comparecidos').html(newHtml) 
           
        }
    });
}






setInterval(() =>{
    buscarUltimasSenhasT()
    buscarUltimasSenhasAtendidas()
    buscarNaoComparecidas()
},1000)