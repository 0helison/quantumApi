$(document).ready(function() {
    function obterMensagens() {
        var tabelaMensagens = $("#table-message tbody");

        tabelaMensagens.empty();

        $.ajax({
            url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                data.forEach(function(mensagem) {
                    var linha = '<tr>' +
                                    '<td>' + mensagem.nome + '</td>' +
                                    '<td>' + mensagem.email + '</td>' +
                                    '<td>' + mensagem.mensagem + '</td>' +
                                '</tr>';
                    tabelaMensagens.append(linha);
                });
            },
            error: function() {
                console.log('Erro ao obter mensagens da API.');
            }
        });
    }
    obterMensagens();
})