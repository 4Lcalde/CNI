import { header } from '../header/header'
import { logIn } from '../logIn/logIn'

export const lanzamiento = () => {
  const usuario = localStorage.getItem('usuario')

  if (usuario) {
    header()
  } else {
    logIn()
  }
}
