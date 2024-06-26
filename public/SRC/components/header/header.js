import { app, listadoHeader } from '../../data/data'
import './header.css'

export const header = (datosPlaca) => {
  const seguro = localStorage.getItem('Placa')
  console.log(seguro)
  app.style.backgroundImage =
    'url(https://i.ibb.co/Jz7Gp2x/17351860-una-carpeta-con-top-secret-estampado-en-la-parte-delantera-y-una-fotograf-a-en-blanco-recor.png)'
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
  const toggle = document.createElement('a')
  toggle.classList.add('toggle', 'boton')
  toggle.textContent = 'MENÚ'

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
      lista.funcion(datosPlaca)
    })
  }

  document.addEventListener('click', (event) => {
    if (
      nav.classList.contains('abierto') &&
      !nav.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      nav.classList.remove('abierto')
    }
  })

  nav.append(ulNav)
  header.append(logo, nav, toggle)
  document.body.insertBefore(header, document.body.firstChild)
}
