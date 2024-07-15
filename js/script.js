let url = window.location.href

url = url.split("/")
let prefixUrl = url[url.length -2]
url = url[url.length -1]


if(localStorage.getItem("idGuicheEmUso") != undefined && prefixUrl == "senha"){
    $.ajax({
      type: 'POST',
      data: {
          idGuiche: localStorage.getItem("idGuicheEmUso"),
          //aqui definindo o status do guice como 0(false)
          status: 0
      },
      dataType: 'json',
      url: './app/Controller/alterarUsoGuiche.php',
      success: function(response) {
          localStorage.removeItem("idGuicheEmUso")
          localStorage.removeItem("urlQuandoSelecionouGuiche")
      }
  })
  }