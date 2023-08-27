const ButtonYes = document.getElementById('sim')
const ButtonNo = document.getElementById('nao')

function Fuja() {
  function aleatorio(min, max) {
    return Math.random() * (max - min) + min + '%'
  }

  ButtonYes.style.top = aleatorio(10, 90)
  ButtonYes.style.left = aleatorio(10, 90)
}

function Mensage() {
  alert('HAHAHA ATÉ PARECE QUE IA DIZER NÃO!!')
  window.location.href = 'https://www.youtube.com/watch?v=har3c93pJe0'
}

ButtonYes.addEventListener('mousemove', Fuja)
ButtonNo.addEventListener('click', Mensage)
