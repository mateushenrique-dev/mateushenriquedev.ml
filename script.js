
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

function darkMode() {
  const nightModeArmazenado = localStorage.getItem('nightModeArmazenado')
  const modeButton = document.querySelector('.site-mode');

  if(nightModeArmazenado) {
    document.querySelector('body').classList.add('dark-theme')
    document.querySelector('.dark-mode').classList.add('escuro')
  }

  function switchMode() {
    document.querySelector('.dark-mode').classList.toggle('branco')
    document.querySelector('.dark-mode').classList.toggle('escuro')
    document.querySelector('body').classList.toggle('dark-theme')
    if (document.querySelector('body').classList[0] === 'dark-theme') {
      localStorage.setItem('nightModeArmazenado', true)
      return
    } else {
      localStorage.removeItem('nightModeArmazenado');
      document.querySelector('.dark-mode').classList.add('branco')
    }
  }

 modeButton.addEventListener('click', switchMode)
}
darkMode()