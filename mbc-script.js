const conteudo = document.querySelector('.conteudo');
const menu = document.querySelector('.drop-d');
const menu2 = document.querySelector('.menu-2');
const fechar = document.querySelector('.fechar');

menu.addEventListener('click', () => {
  conteudo.classList.add('visivel');
  menu2.classList.remove('visivel');
})
fechar.addEventListener('click', () => {
  conteudo.classList.remove('visivel');
  menu2.classList.add('visivel');
})
// esconder menu

// slide de podutos
const produtos = document.querySelector('#produtos');
