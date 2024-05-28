import { app, placa } from '../../data/data'
import './explicacion.css'
export const explicacion = (datosplaca) => {
  let seguro = ''
  if (datosplaca) {
    seguro = datosplaca
  } else {
    seguro = localStorage.getItem('Placa')
  }
  app.innerHTML = ''
  app.style.backgroundImage = 'none'
  const divExplicación = document.createElement('div')
  divExplicación.className = 'div-explicacion'

  divExplicación.innerHTML = `    <h1 class="titulo">
Efectivamente, ${seguro}, esta es la invitación de mi cumpleaños.
</h1>
<br />
<p class="texto">
Si todavía no has visto los apartados anteriores y has venido directamente
aquí, por favor, lee el resto antes.
</p>
<br />
<p class="texto">Si sigues aquí sin ver el resto esto pierde la gracia.</p>
<br />
<p class="texto">Bueno, tú verás.</p>
<br />
<p class="texto">
Por si todavía no lo has pillado, el día <span>29 de junio</span> voy a
celebrar mi 29 cumpleaños. Si has recibido tu número de placa eres una de
las personas invitadas.
</p>
<br />
<p class="texto">
Todavía estoy por cerrar hora y sitio donde realizarlo, pero quiero que
sea un día guay con mi gente, sobre todo, teniendo en cuenta que el año
pasado las circunstancias no me dejaron hacer nada.
</p>
<br />
<p class="texto">
La idea, ya que no habéis sido capaces de sacarme mi artículo de
infiltrado en El salto, va a ser <span>hacer un Rol.</span> En función del
resultado del juego y de vuestra destreza, el Estado (yo) cubrirá una
parte mayor o menor de los costes de la celebración.
</p>
<p class="texto">
<br />
Al inicio de la jornada del día 29 os daré los detalles e
instrucciones a tener en cuenta.
</p>
<br />
<p class="texto">
Espero verte, así que cuando puedas, confirma tu asistencia para calcular
cantidades.
</p>
<br />
<p class="texto">Muchas gracias por tu atención.</p>
<p class="texto ultimo">Atte. Fernando Grande-MarlasKa.</p>`

  app.append(divExplicación)
}
