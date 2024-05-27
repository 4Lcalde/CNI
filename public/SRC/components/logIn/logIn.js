import { header } from '../header/header'

export const logIn = () => {
  const divLogin = document.createElement('div')
  divLogin.className = 'login'

  const form = document.createElement('form')
  form.className = 'Formulario'
  const input = document.createElement('input')
  input.type = 'text'
  const button = document.createElement('input')
  button.type = 'submit'
  button.className = 'boton'

  form.append(input, button)
  divLogin.append(form)

  document.body.append(divLogin)
}
