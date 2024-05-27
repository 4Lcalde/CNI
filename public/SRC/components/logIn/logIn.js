import { placa } from '../../data/data'
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
  const button = document.createElement('input')
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
      divLogin.remove()
      header()
    } else if (inputValue === 170305) {
      placa.Nombre = 'David'
      divLogin.remove()
      header()
    } else if (inputValue === 176985) {
      placa.Nombre = 'Cris'
      divLogin.remove()
      header()
    } else if (inputValue === 365987) {
      placa.Nombre = 'Enol'
      divLogin.remove()
      header()
    } else if (inputValue === 112536) {
      placa.Nombre = 'Víctor'
      divLogin.remove()
      header()
    } else if (inputValue === 775868) {
      placa.Nombre = 'Héctor'
      divLogin.remove()
      header()
    } else if (inputValue === 445558) {
      placa.Nombre = 'Josemi'
      divLogin.remove()
      header()
    } else if (inputValue === 20345) {
      placa.Nombre = 'Laura'
      divLogin.remove()
      header()
    } else if (inputValue === 171825) {
      placa.Nombre = 'Luis'
      divLogin.remove()
      header()
    } else if (inputValue === 452535) {
      placa.Nombre = 'Marisa'
      divLogin.remove()
      header()
    } else if (inputValue === 96568) {
      placa.Nombre = 'Marta'
      divLogin.remove()
      header()
    } else if (inputValue === 696587) {
      placa.Nombre = 'Mayte'
      divLogin.remove()
      header()
    } else if (inputValue === 232541) {
      placa.Nombre = 'Pablo'
      divLogin.remove()
      header()
    } else if (inputValue === 182659) {
      placa.Nombre = 'Paula'
      divLogin.remove()
      header()
    } else if (inputValue === 332542) {
      placa.Nombre = 'Victoria'
      divLogin.remove()
      header()
    } else if (inputValue === 19875) {
      placa.Nombre = 'Zyme'
      divLogin.remove()
      header()
    } else {
      alert('Intoduce un número correcto')
    }

    console.log(placa)
  })

  document.body.append(divLogin)
}
