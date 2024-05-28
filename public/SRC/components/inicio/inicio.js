import { app, placa } from '../../data/data'
import './inicio.css'

export const inicio = (datosplaca) => {
  const seguro = localStorage.getItem('Placa')
  console.log(seguro)
  app.innerHTML = ''
  app.style.backgroundImage = 'none'
  const section = document.createElement('section')
  section.className = 'section-inicio'
  const uno = document.createElement('h2')

  uno.textContent = `Un placer verte por aquí,  ${seguro}`

  uno.textContent = `Un placer verte por aquí,  ${seguro}`

  uno.className = 'subtitulo'
  app.style.padding = '0'

  const dos = document.createElement('h1')
  dos.className = 'titulo'
  dos.textContent =
    'Eres una persona afortunada por formar parte de esta investigación.'

  const tres = document.createElement('p')
  tres.className = 'texto'
  tres.innerHTML = `  <p class="texto">La cuestión es simple. Después de tantos años infiltrado en el barrio esto no da más de sí. </p>
  <br>
  <p  class="texto">En todos los colectivos han llegado a descubrir quién era el policía infiltrado. Por diversas cuestiones que no entraremos a valorar en este informe, en Carabanchel no han sido capaces. Pero, si bien es cierto que esta incapacidad del aparato de inteligencia y contrainformación carabanchelera deja bastante que desear, la opacidad con la que se trata la información en el grupúsculo hace imposible tener claro cuales van a ser los próximos pasos que llevarán a cabo. </p>
  <br>
  <p class="Text"><span> Sabemos que el núcleo duro trama una gran acción. Sin embargo, es imposible a estas alturas conocer la información específica. </span></p>
  <br>
  <p class="texto">Como última esperanza para obtener información para la Brigada Autonómica de Información se hace necesario emprender la ofensiva más ambiciosa llevada a cabo hasta la fecha en Carabanchel. Aprovechando una de las pocas reuniones anuales en las que se junta toda la plana del Estado Mayor de KRBC, el cumpleaños de AJ, se tratará de desenmascarar el próximo golpe. </p>

  <br>
  <p class="texto">Toda la información disponible, así como los datos concretos del evento estarán disponibles en el apartado <span>Investigación</span> de este mismo informe. Mientras que la información sobre los sospechosos puede ser consultada en <span>Personajes.</span></p>
  <br>
  <p class="texto">Rogamos que a fin de poder llevar a cabo con éxito la citada operación mantenga total y profundo secreto sobre la información contenida en este informe y sobre los medios que el CNP y el CNI pone a su disposición. </p>
  <br>
  <p class="texto">Cualquier información filtrada, o cualquier exceso en el tratamiento tendrá serias reprimendas sobre usted y sus seres queridos.</p>
  <br>
  <p class="texto">Por favor, actúe con cautela y discrección. </p>`

  section.append(uno, dos, tres)
  app.append(section)
}
