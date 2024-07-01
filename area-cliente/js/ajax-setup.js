
//função que retorna somente o prefixo da senha, caso a senha for "AM012", o retorno sera => AM
const tratamentoPrefixo = senha => {
    return newSenha = senha.charAt(0) + senha.charAt(1)
}

let respostaCache = null;
//variavel responsavel por guardar a senha atual no visor


$(document).ready(function() {
    
    setInterval(() =>{
        //chamada ajax ao arquivo que traz as senhas que irão aparecer no visor
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '../app/Controller/senhaClientes.php',
            async: true,
            
            success: function(response) {
                console.log(response)
                let infos = response.senhas[0]
                
                //se a variavel responsavel por guardar a senha atual no visor estiver vazia, ou for diferente
                //a que veio na requisição, atualiza ela para a nova senha
                if(respostaCache == null || respostaCache != infos.atualizado){
                    respostaCache = infos.atualizado
                let primeira = true
                let newHtml = "<div class='row py-2 w-75 d-flex align-items-center justify-content-center border-bottom border-light border-4'><p class='fs-2 fw-bold text-center text-uppercase text-light lh-1'>Chamadas recentes</p></div>"
                response.senhas.forEach(senhas => {
                    // montando o html das ultimas senhas chamadas
                    if(!primeira){ 
                        newHtml += `<div class="row w-75 my-3 border-bottom border-light border-4"><div class="col  justify-content-center align-items-center"><div class=" row justify-content-center align-items-center d-flex "><div class="col d-flex align-items-center  justify-content-center"><p class="fw-bold text-center text-center text-uppercase fs-1 text-light lh-1" style="font-size: 20px;">${senhas.senha}</p></div><div class="col d-flex align-items-center justify-content-center"><p class="fw-bold text-center text-uppercase text-light lh-1" style="font-size: 20px;">${senhas.tipo}</p></div></div></div><div class="col"><div class="row"><div class="col d-flex align-items-center"><p class="fw-bold text-center text-uppercase text-light lh-1" style="font-size: 20px;">${senhas.sala}</p></div></div><div class="row"><div class="col d-flex align-items-center"><p class="fw-bold text-center text-uppercase text-light lh-1" style="font-size: 20px;">${senhas.guiche}</p></div></div></div></div>` 
                    }
                    primeira = false
                    });
                newHtml += "</div>"
                //atualizando o html das ultimas
                $("#lasts").html(newHtml)
                
                //separando o prefixo dos digitos da senha atual
                let prefixo = tratamentoPrefixo(infos.senha)
                let digitos = infos.senha.split(prefixo)[1]
                //definindo a cor da senha de acordo com seu prefixo
                let color
                if(prefixo == "AM"){
                    color = "rgb(26, 26, 26);"
                }else if(prefixo == "AR"){
                    color = "rgb(16, 48, 96);"
                }else{
                    color = "rgb(19, 94, 19);"
                }
                //montando o html da senha atual
                let senhaHtml = `<p class='fw-bold text-center text-uppercase text-dark' style='font-size: 150px;'><span style='color: ${color};'>${prefixo}</span>${digitos}</p>`
                //pegando a sala e guiche atual, é melhor tirar o split, já que se o nome da sala ou do guiche for unico, ocorre um bug
                let salaAtual = infos.sala

                let guicheAtual = infos.guiche

                let salaHtml = "<p id='salaAtual' class='fw-bold text-center text-uppercase lh-1' style='font-size: 40px; color: #106018;'>" +salaAtual+ "</p>"
                let guicheHtml = "<p id='guicheAtual' class='fw-bold text-center text-uppercase lh-1' style='font-size: 40px; color: #106018;'>"+guicheAtual+"</p>"
                //montando o html do tipo de senha atual
                let tipoAtual = `<p id="tipo" class="fs-1 text-uppercase fw-bold">${infos.tipo}</p>`
                //atualizando os novos htmls
                $("#senhaAtual").html(senhaHtml)
                $("#salaAtual").html(salaHtml)
                $("#guicheAtual").html(guicheHtml)
                $("#tipo").html(tipoAtual)
                //escohendo o audio e o trocando
                let audio = new Audio('./js/bereal.mp3')
                audio.play()
            
            }
            
                
            },
            error: (e)=>{
                console.log(e)
            }
        });
    let date = new Date()
    const fixHora = (hora) => {
        if(hora.toString().lenght <=1 ){
            return `0${hora}`
        }
        return hora
    }
    //arrumar essa função de horario
    let horarioHtml =fixHora(date.getHours()) + ":" + fixHora(date.getMinutes())
    $("#horario").html(horarioHtml)
}, 1000)

})