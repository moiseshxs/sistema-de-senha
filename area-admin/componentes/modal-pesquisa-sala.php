<div id="pesquisa-sala" class="hide">
    <div id="modal-cabeca">
        <h2 class="w-100 text-center p-3">Visualizar Senhas</h2>
        <div class="p-1 mb-4" style="border-radius: 10px;margin-left: 30%;width: 40%;justify-content: center;align-items: center;display: flex;background-color: rgb(201, 187, 187);"><input id="buscaa" style="border:none;width: 80%;outline:none;background-color: transparent;" placeholder="Pesquisar..."> <button style="height: 30px;border:none;width: 15%;background-color: transparent;justify-content: center;align-items: center;display: flex;padding-left: 5%;"><img style="height: 90%;" src="./imgs/pesquisa.png"></button></div>
    </div>
    <div id="modal-corpo" class="overflow-auto" style="height: 63%;">
        <table class="w-100 h-100" id="modalSenhasAll">
            <tr style="border-bottom: 1px solid black;background-color: rgb(182, 170, 170);height: 10%;">
                <td class="blocos p-2" style="border-right: 1px solid black;">Senha</td>
                <td class="blocos" style="border-right: 1px solid black;">Etapa</td>
                <td class="blocos" style="border-right: 1px solid black;">Atendimento Concluido</td>
                <td class="blocos">Horario</td>
            </tr>

            <tr style="border-bottom: 1px solid rgb(161, 152, 152);height: 10%;" id="senhasAll">
                <td class="blocos" style="border-right: 1px solid black;">AR004</td>
                <td class="blocos" style="border-right: 1px solid black;">Triagem</td>
                <td class="blocos" style="border-right: 1px solid black;">Não</td>
                <td class="blocos">03/05/2023</td>
            </tr>
            <tr style="border-bottom: 1px solid rgb(161, 152, 152);height: 90%;"></tr>

        </table>
    </div>
    <div id="modal-baixo" class=" d-flex w-100 justify-content-end gap-2 pe-4 py-4">
        <button class="fw-bold text-white p-2 px-4 rounded-3" id="fechando-modal" style="outline:none;border:none;background-color: rgb(192, 24, 24);">Fechar</button>
        <button onclick="chamaDnv()" class="fw-bold text-white p-2 px-4 rounded-3" style="outline:none;border:none;background-color: green;">Salvar</button>
    </div>
</div>

<style>
    #pesquisa-sala {
        display: none;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        z-index: 10;
        width: 800px;
        height: 600px;
        border-radius: 20px;
    }

    .blocos {
        width: 25%;
        text-align: center;
        font-weight: bold;
    }
</style>