const tratamentoPrefixo = senha => {
    return newSenha = senha.charAt(0) + senha.charAt(1)
}

const buscarUltimasSenhasT = async() =>{
    $.ajax({
        data: {tipo: "Apm"},
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
            newHtml += "</div>"
            newHtmlP += "</div>"
            //atualizando html
            $('#proximos').html(newHtml) 
            $("#preferenciais").html(newHtmlP)
        }
    });
}






setInterval(() =>{
    buscarUltimasSenhasT()
},1000)