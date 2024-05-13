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
                newHtml += "<div class='col d-flex align-items-center justify-content-center'><button class='btn btn-success fw-semibold'>Chamar</button></div>"
            });
            newHtml += "</div>"
            //atualizando html
            $('#proximos').html(newHtml) 

            
        }
    });
}
setInterval(() =>{
    buscarUltimasSenhas()
},1000)