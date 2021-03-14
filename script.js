const menuHamburguer = document.querySelector('#menu-hamburguer')

function abrirMenu() {
  const menuLista = document.querySelector('.menu ul')
  menuLista.classList.toggle('ativo')
}

menuHamburguer.addEventListener('click', abrirMenu)