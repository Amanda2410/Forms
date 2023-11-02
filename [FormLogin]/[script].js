const senha = document.getElementById("Senha");
const icone = document.getElementById("icone");

icone.addEventListener("click", function () {
if (senha.type === "password") {
    senha.type = "text";
    } else {
    senha.type = "password";
    }
});