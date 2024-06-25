let url = window.location.href
url = url.split("/")
url = url[url.length -1]
if (localStorage.getItem("idGuicheEmUso") !== undefined &&  url != localStorage.getItem("urlQuandoSelecionouGuiche")){

    $.ajax({
        type: 'POST',
        data: {
            idGuiche: localStorage.getItem("idGuicheEmUso"),
            //aqui definindo o status do guice como 0(false)
            status: 0
        },
        dataType: 'json',
        url: '../app/Controller/alterarUsoGuiche.php',
        success: function(response) {
            localStorage.removeItem("idGuicheEmUso")
            localStorage.removeItem("urlQuandoSelecionouGuiche")
        }
    })
}

const trazerNomeSalaEGuiche = (id) => {
    $.ajax({
        type: 'POST',
        data: {
            id: id,
            
        },
        dataType: 'json',
        url: '../app/Controller/trazerNomeSalaEGuiche.php',
        success: function(response) {
            console.log(response)
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
        <p class="fw-bold fs-5 p-0 m-0 text-end">Sala: <span class="fs-4">${response.sala}</span></p>
        <p class="fw-bold fs-5 p-0 m-0 text-end">Guichê: <span class="fs-4">${response.guiche}</span></p>
        <input type="hidden" id="guiche" value="${localStorage.getItem("idGuicheEmUso")}">
      </div>
    </div>
`;
$('#infos').html(newHtml);
        },
        error: (e) =>{
            console.log(e)
        }   
    })
}

if(localStorage.getItem("idGuicheEmUso") != undefined){
    console.log("ja nao doi")
    trazerNomeSalaEGuiche(localStorage.getItem("idGuicheEmUso"))
    
    
}