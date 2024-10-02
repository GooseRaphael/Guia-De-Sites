document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('active');
  });
  
  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
  });
  // Quando o documento estiver carregado
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
  
    // Adiciona a classe move-up quando o mouse está sobre a imagem
    header.addEventListener('mouseover', function() {
      header.classList.add('move-up');
    });
  
    // Remove a classe move-up quando o mouse sai da imagem
    header.addEventListener('mouseout', function() {
      header.classList.remove('move-up');
    });
  
    // Funcionalidade do menu
    document.getElementById('menu-btn').addEventListener('click', function() {
      document.getElementById('sidebar').classList.add('active');
    });
  
    document.getElementById('close-btn').addEventListener('click', function() {
      document.getElementById('sidebar').classList.remove('active');
    });
  });
  