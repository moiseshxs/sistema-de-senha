const buscarUltimasSenhasT = async() =>{
    $.ajax({
        data: {tipo: "Matricula"},
        type: 'POST',
        dataType: 'json',
        url: '../app/Controller/trazerSenhas.php',
        async: true,
        
        success: function(response) {
            //construção da tag html
            let newHtml = "<div class='row item'>"
            response.result.forEach(senha => {
                newHtml += "<div class='col d-flex align-items-center justify-content-center'><p class='h3 fw-bold'>"+senha.senha+"</p></div>"
                newHtml += `<div class='col d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold' onclick="senhaAtual('${senha.senha}', '${senha.id}')">Chamar</button></div>`
            });
            newHtml += "</div>"
            //atualizando html
            $('#proximos').html(newHtml) 
        }
    });
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
        url: '../app/Controller/atualizarStatusSenhaMatriculaQuandoChamada.php',
        async:true,

        success: function(response) {
            newHtml = `<div class=" h-75 d-flex justify-content-center fs-1 fw-bold" id="senhaAtual">`
            newHtml += `<p class="text-center" style="font-size: 60px;"><span style="color: ${color}">${prefixo}</span>${senhaT}</p>`
            newHtml += `</div>`
    
            $('#embaca').css('display','flex')
            $('#senhaAtual').html(newHtml)
            localStorage.setItem("idSenhaAtualMatricula", idSenha)
    
            newHtml = `<div id="compareceu-area" class="col d-flex justify-content-center align-items-center">`
            newHtml += `<button class="btn btn-success me-3" onclick="compareceu('${idSenha}')">Compareceu</button>`
            newHtml += `<button class="btn btn-danger me-3" onclick="naoCompareceu('${idSenha}')">Não Compareceu</button>`
            newHtml += `</div>`
            $('#compareceu-area').html(newHtml);
        }
    })

}
 const compareceu = async(idSenha) => {
    if(localStorage.getItem('idSenhaAtualMatricula') != undefined) {
     $.ajax({
         type: 'POST',
         dataType: 'json',
         data: {
             idSenha: localStorage.getItem('idSenhaAtualMatricula'), 
             tipo: "Matricula",
             status: 1
            },
         url: '../app/Controller/atualizarSenhaAtendidaNaMatricula.php',
         async:true,

         success: function(response) {
            console.log(response)
            localStorage.removeItem("idSenhaAtual")
            $('#embaca').css('display', 'none')
            $("#senhaAtual").html(`<p id="senhaAtual" class="text-center" style="font-size: 60px;"><span id="prefixo-atual" class="">00</span><span id="digitos-atual">000</span></p>`)
            ultimosAtendidos()
            naoCompareceu()
         }
     })
    } 
 }


const ultimosAtendidos = async() => {
    $.ajax({
        type: 'POST',
        data: {tipo: 1},
        dataType: 'json',
        url: '../app/Controller/trazerSenhasComparecidasMatricula.php',
        async:true,

        success: function(response) {
            console.log(response)
            let newHtml = `<div class="conteudo h-100  overflow-auto gap-2 d-flex flex-column justify-content-start w-100 " id="senhasAtendidas" style="border: transparent">`
            response.senha.forEach(senha => {
                newHtml += `<div id="" class="row item">`
                    newHtml += `<div class="col d-flex align-items-center justify-content-center">`
                        newHtml += `<p class="h3 fw-bold">${senha.senha}</p>`
                    newHtml += `</div>`

                    newHtml += `<div class="col d-flex align-items-center justify-content-center">`
                        newHtml += `<button class="btn btn-success fw-semibold">Chamar</button>`
                    newHtml += `</div>`
                newHtml += `</div>`
            })
            newHtml += `</div>`
            $('#senhasAtendidas').html(newHtml)
        }
    })
}

setInterval(() =>{
    buscarUltimasSenhasT()
},1000)