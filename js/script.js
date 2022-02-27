var hamburguer = document.querySelector('.menu-hamburguer')

hamburguer.addEventListener('click', function(){
  document.querySelector('.menu').classList.toggle('show-menu');
  document.querySelector('.line1').classList.toggle('bg-color');
  document.querySelector('.line2').classList.toggle('bg-color');
  document.querySelector('.line3').classList.toggle('bg-color');
})