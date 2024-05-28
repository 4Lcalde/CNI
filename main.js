import { footer } from './public/SRC/components/footer/footer'
import { header } from './public/SRC/components/header/header'
import { logIn } from './public/SRC/components/logIn/logIn'
import './style.css'

const datosPlaca = localStorage.getItem('Placa')

if (datosPlaca) {
  header(datosPlaca)
  footer()
} else {
  logIn()
}
