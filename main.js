import { header } from './public/SRC/components/header/header'
import { logIn } from './public/SRC/components/logIn/logIn'
import './style.css'

const datosPlaca = localStorage.getItem('Placa')

if (datosPlaca) {
  header()
} else {
  logIn()
}
