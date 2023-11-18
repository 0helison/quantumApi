$(document).ready(function() {
    $("#form-contact").submit(function(event) {
        event.preventDefault(); 

        var nome = $("#name").val();
        var email = $("#email").val();
        var mensagem = $("#message").val();

        var obj = {
            nome: nome,
            email: email,
            mensagem: mensagem
        };

        inserirMensagem(obj);

        $("#name").val("");
        $("#email").val("");
        $("#message").val("");

        alert("Mensagem enviada com sucesso!");
    }); 
});