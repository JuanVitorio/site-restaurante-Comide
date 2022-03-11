var hamburguer = document.querySelector('.menu-hamburguer')

hamburguer.addEventListener('click', function(){
  document.querySelector('.menu').classList.toggle('show-menu');
  document.querySelector('.line1').classList.toggle('bg-color');
  document.querySelector('.line2').classList.toggle('bg-color');
  document.querySelector('.line3').classList.toggle('bg-color');
})

function topo(){
  window.scroll({
    top:0, behavior: 'smooth'
  })
}

function mid(){
  window.scroll({
    top:650, behavior:'smooth'
  })
}

function low(){
  window.scroll({
    top:1450, behavior:'smooth'
  })
}

function foot(){
  window.scroll({
    top:2050, behavior:'smooth'
  })
}
