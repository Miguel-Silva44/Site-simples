document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Esconde o formulário
    document.getElementById("cadastroForm").style.display = "none";

    // Mostra a mensagem de sucesso
    document.getElementById("mensagemSucesso").classList.remove("hidden");
});

document.getElementById("voltarBtn").addEventListener("click", function() {
    // Mostra o formulário
    document.getElementById("cadastroForm").style.display = "block";

    // Esconde a mensagem de sucesso
    document.getElementById("mensagemSucesso").classList.add("hidden");

    // Reseta o formulário
    document.getElementById("cadastroForm").reset();
});

document.getElementById("themeSwitcher").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        this.textContent = "Modo Claro";
    } else {
        this.textContent = "Modo Escuro";
    }
});
