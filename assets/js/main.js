let mobileMenu = document.querySelector('.mobile-menu')
document.querySelector('.mobile-menu-button').addEventListener('click', e => {
  mobileMenu.classList.toggle('hidden')
})

const currentYear = new Date().getFullYear()
document.querySelector('#tradeMarkTime').innerHTML = currentYear
