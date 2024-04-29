const tratamentoPrefixo = senha => {
    return newSenha = senha.charAt(0) + senha.charAt(1)
}

let respostaCache = null;



$(document).ready(function() {
    
    setInterval(() =>{
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '../app/Controller/senhaClientes.php',
        async: true,
        
        success: function(response) {
            let infos = response.senhas[0]
            
            
            if(respostaCache == null || respostaCache != infos.senha){
                respostaCache = infos.senha
            
            let newHtml = "<div class='row py-2 w-75 d-flex align-items-center justify-content-center border-bottom border-light border-4'><p class='fs-2 fw-bold text-center text-uppercase text-light lh-1'>Chamadas recentes</p></div>"
            response.senhas.forEach(senhas => {
                newHtml += "<div class='row py-2 w-75  border-bottom border-light border-4'><div class='col d-flex justify-content-center align-items-center'><p class='fs-1 fw-bold text-center text-uppercase text-light lh-1'>" + senhas.senha+"</p></div><div class='col'><div class='row'><div class='col d-flex align-items-center'><p class='fw-bold text-center text-uppercase text-light lh-1' style='font-size: 20px;'>"+ senhas.sala+"</p></div></div><div class='row'><div class='col d-flex align-items-center'><p class='fw-bold text-center text-uppercase text-light lh-1' style='font-size: 20px;'>"+senhas.guiche+"</p></div></div></div></div>"
            });
            newHtml += "</div>"
            $("#lasts").html(newHtml)
            
            let prefixo = tratamentoPrefixo(infos.senha)
            let digitos = infos.senha.split(prefixo)[1]
            let senhaHtml = "<p class='fw-bold text-center text-uppercase text-dark' style='font-size: 150px;'><span style='color: #106018;'>"+ prefixo+"</span>"+digitos+"</p>"
            let salaAtual = infos.sala.split(" ")[1]
            let guicheAtual = infos.guiche.split(" ")[1]
            let salaHtml = "<p id='salaAtual' class='fw-bold text-center text-uppercase lh-1' style='font-size: 40px; color: #106018;'>" +salaAtual+ "</p>"
            let guicheHtml = "<p id='guicheAtual' class='fw-bold text-center text-uppercase lh-1' style='font-size: 40px; color: #106018;'>"+guicheAtual+"</p>"
            $("#senhaAtual").html(senhaHtml)
            $("#salaAtual").html(salaHtml)
            $("#guicheAtual").html(guicheHtml)
            let audio = new Audio('./js/corinthians.mp3')
            audio.play()
        
        }
        else{
            console.log("aa")
        }
            
        }
    });
    let date = new Date()
    let horarioHtml =date.getHours() + ":" + date.getMinutes()
    $("#horario").html(horarioHtml)
}, 1000)

})