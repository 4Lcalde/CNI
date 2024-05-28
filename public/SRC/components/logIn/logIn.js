import { placa } from '../../data/data'
import { footer } from '../footer/footer'
import { header } from '../header/header'
import './logIn.css'

export const logIn = () => {
  const divLogin = document.createElement('div')
  divLogin.className = 'login'

  const form = document.createElement('form')
  form.className = 'Formulario'
  const input = document.createElement('input')
  input.type = 'text'
  input.maxLength = 6
  input.placeholder = 'Introduce Nº de placa'
  input.className = 'Input'
  const button = document.createElement('input')
  button.className = 'boton-placa'
  button.type = 'submit'
  button.className = 'submit'

  form.append(input, button)
  divLogin.append(form)
  form.addEventListener('submit', (e) => {
    console.log(placa)
    e.preventDefault()

    const inputValue = Number(input.value)

    if (inputValue === 150222) {
      placa.Nombre = 'Beltrán'
      localStorage.setItem('Placa', 'Beltrán')
      divLogin.remove()
      header()
    } else if (inputValue === 170305) {
      placa.Nombre = 'David'
      localStorage.setItem('Placa', 'David')
      divLogin.remove()
      header()
    } else if (inputValue === 176985) {
      placa.Nombre = 'Cristina'
      localStorage.setItem('Placa', 'Cristina')
      divLogin.remove()
      header()
    } else if (inputValue === 365987) {
      placa.Nombre = 'Enol'
      localStorage.setItem('Placa', 'Enol')
      divLogin.remove()
      header()
    } else if (inputValue === 112536) {
      placa.Nombre = 'Víctor'
      localStorage.setItem('Placa', 'Víctor')
      divLogin.remove()
      header()
    } else if (inputValue === 775868) {
      placa.Nombre = 'Héctor'
      localStorage.setItem('Placa', 'Héctor')
      divLogin.remove()
      header()
    } else if (inputValue === 445558) {
      placa.Nombre = 'Josemi'
      localStorage.setItem('Placa', 'Josemi')
      divLogin.remove()
      header()
    } else if (inputValue === 20345) {
      placa.Nombre = 'Laura'
      localStorage.setItem('Placa', 'Laura')
      divLogin.remove()
      header()
    } else if (inputValue === 171825) {
      placa.Nombre = 'Luis'
      localStorage.setItem('Placa', 'Luis')
      divLogin.remove()
      header()
    } else if (inputValue === 452535) {
      placa.Nombre = 'Marisa'
      localStorage.setItem('Placa', 'Marisa')
      divLogin.remove()
      header()
    } else if (inputValue === 96568) {
      placa.Nombre = 'Marta'
      localStorage.setItem('Placa', 'Marta')
      divLogin.remove()
      header()
    } else if (inputValue === 696587) {
      placa.Nombre = 'Mayte'
      localStorage.setItem('Placa', 'Mayte')
      divLogin.remove()
      header()
    } else if (inputValue === 232541) {
      placa.Nombre = 'Pablo'
      localStorage.setItem('Placa', 'Pablo')
      divLogin.remove()
      header()
    } else if (inputValue === 182659) {
      placa.Nombre = 'Paula'
      localStorage.setItem('Placa', 'Paula')
      divLogin.remove()
      header()
    } else if (inputValue === 332542) {
      placa.Nombre = 'Victoria'
      localStorage.setItem('Placa', 'Victoria')
      divLogin.remove()
      header()
    } else if (inputValue === 19875) {
      placa.Nombre = 'Zyme'
      localStorage.setItem('Placa', 'Zyme')
      divLogin.remove()
      header()
    } else {
      alert('Intoduce un número correcto')
    }

    footer()
  })

  document.body.append(divLogin)
}
