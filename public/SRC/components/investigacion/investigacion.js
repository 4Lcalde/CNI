import { app, placa } from '../../data/data'
import './investigacion.css'

export const investigacion = (datosplaca) => {
  let seguro = ''
  if (datosplaca) {
    seguro = datosplaca
  } else {
    seguro = localStorage.getItem('Placa')
  }

  // Asegúrate de que 'app' esté definido en tu contexto
  if (typeof app === 'undefined') {
    console.error('El elemento "app" no está definido.')
    return
  }

  app.innerHTML = ''
  app.style.backgroundImage = 'none'

  const section = document.createElement('section')
  section.className = 'section-investigacion'
  section.innerHTML = `
    <h2 class="subtitulo">Detalles de la investigación</h2>
    <br />
    <p class="texto">
      ${seguro} ,durante las últimas semanas se han extendido los rumores de que los antifas de Carabanchel están tratando de llevar a cabo su acción más grande. Si bien es cierto que este grupúsculo de extrarradio lleva tiempo de capa caída nunca hay que menospreciar su capacidad.
    </p>
    <br />
    <p class="texto">
      El objetivo del departamento de inteligencia será <span> descubrir los detalles de la acción</span> antes de que se lleve a cabo, tratando de minimizar los costes que pueda tener que asumir el Ministerio.
    </p>
    <br />
    <p class="texto">
      Hasta el momento, únicamente tenemos constancia de la fecha de ejecución planeada por el grupo. Será el <span>sábado 29 de Junio de 2024 </span>en conmemoración del
      <span>veintinueve aniversario de nacimiento de su Secretario General, AJ</span
      >.
    </p>
    <br />
    <p class="texto">El lugar y la hora están todavía por determinar.</p>
    <br />
    <p class="texto">
      Según las informaciones que hemos podido obtener a través de chivatazos y escuchas, <span>todas las personas expuestas en el apartado de personajes están invitadas</span>. Es la oportunidad que llevamos años buscando para desmantelar a laorganización.
    </p>
    <br />
    <p class="texto">
      Dependiendo de los resultados obtenidos el Ministerio asumirá una parte proporcional, de mayor o menor cuantía, según el éxito o
      fracaso de la operación.
    </p>
    <br />
    <p class="texto">
      El mismo día 29 se ultimarán los detalles a tener en cuenta así como la lista de objetivos específicos y particulares del cuerpo.
    </p>
    <br />
    <p class="texto">
      De igual manera, <span>se informará con suficiente antelación tanto el lugar como la hora</span > de quedada.
    </p>
    <br />
    <p class="texto">La seguridad del Estado está en tus manos.</p>
    <p class="texto">Cuida esta información. Es totalmente confidencial.</p>
  `

  app.append(section)
}
