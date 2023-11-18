$(document).ready(function() {
    $("#form-login").submit(function(event) {
        event.preventDefault(); 

        var email = $("#emailLogin").val();
        var senha = $("#passwordLogin").val();

        var objLoginSenha = {
            email: email,
            senha: senha
        };

        var resultadoValidacao = validarUsuario(objLoginSenha);

        $("#emailLogin").val("");
        $("#passwordLogin").val("");

        if (resultadoValidacao) {
            window.location.href = "/html/list.html";
        } else {
            alert("Dados inválidos")
        }
        
    });
});