// Função para alternar o menu lateral
function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    const menuIcon = document.querySelector(".menu-icon"); // Seleciona o ícone do menu

    // Verifica se o menu está aberto ou fechado
    if (sideMenu.style.left === "-280px" || sideMenu.style.left === "") {
        sideMenu.style.left = "0"; // Abre o menu
        menuIcon.classList.add("fixed"); // Adiciona a classe para fixar no topo
    } else {
        sideMenu.style.left = "-280px"; // Fecha o menu
        menuIcon.classList.remove("fixed"); // Remove a classe para voltar à posição original
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.style.left = "-280px"; // Fecha o menu ao carregar a página
});
