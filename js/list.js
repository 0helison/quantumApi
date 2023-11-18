function obterMensagens() {
    var tabelaMensagens = $("#table-message tbody");

    tabelaMensagens.empty();

    var consulta = $.ajax({
        url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(){
        console.log('Erro ao obter mensagens da API.');
    });

    consulta.done(function(data) {
        data.forEach(function(dado) {
            var linha = '<tr>' +
                            '<td>' + dado.nome + '</td>' +
                            '<td>' + dado.email + '</td>' +
                            '<td>' + dado.mensagem + '</td>' +
                        '</tr>';
            tabelaMensagens.append(linha);
        });
    });
}

obterMensagens();

