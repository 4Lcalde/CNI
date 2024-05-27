import { app, listadoHeader } from '../../data/data'
import './header.css'

export const header = () => {
  const header = document.createElement('header')
  header.id = 'main-header'
  const logo = document.createElement('img')
  logo.className = 'logo'
  logo.src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/CNIescudoespa%C3%B1a2.svg/1200px-CNIescudoespa%C3%B1a2.svg.png'

  logo.addEventListener('click', () => {
    location.reload()
  })

  const nav = document.createElement('nav')
  nav.className = 'nav'
  const ulNav = document.createElement('ul')
  ulNav.className = 'ul-nav'
  const toggle = document.createElement('img')
  toggle.classList.add('toggle', 'boton')
  toggle.src = 'https://i.ibb.co/FWVRkGH/barra-svg.png'

  toggle.addEventListener('click', () => {
    nav.classList.toggle('abierto')
  })

  for (const lista of listadoHeader) {
    const li = document.createElement('li')
    li.className = 'li-nav'
    const a = document.createElement('a')
    a.className = 'a-nav'
    a.textContent = lista.nombre
    li.append(a)
    ulNav.append(li)

    li.addEventListener('click', () => {
      nav.classList.toggle('abierto')
    })

    a.addEventListener('click', () => {
      lista.funcion()
    })
  }

  nav.append(ulNav)
  header.append(logo, nav, toggle)
  document.body.insertBefore(header, document.body.firstChild)
}
