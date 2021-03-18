
function menuHamburguer() {
  const menuHamburguer = document.querySelector('#menu-hamburguer')
  function abrirMenu() {
    const menuLista = document.querySelector('.menu ul')
    menuLista.classList.toggle('ativo')
  }
  menuHamburguer.addEventListener('click', abrirMenu)
  }
menuHamburguer()

function slideLeft() {
  const sections = document.querySelectorAll('.js-slide');
  const windowMetade = window.innerHeight * 0.6
  sections[0].classList.add('slide')
  function slide() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isMetade = (sectionTop - windowMetade)
    if (isMetade < 0) {
      section.classList.add('slide')
    }
  })
  }
  window.addEventListener('scroll', slide)
}
slideLeft()

let i = 0;
let message = 'Mateus Henrique Web Designer';

digitando();

function digitando() {
  if(i < message.length) {
    document.getElementById('text').innerHTML += message.charAt(i);
    i++;
    setTimeout(digitando, 150);
  }
}

