import { app, placa } from '../../data/data'
import './inicio.css'

export const inicio = () => {
  app.innerHTML = ''
  app.style.backgroundImage = 'none'
  const section = document.createElement('section')
  section.className = 'section-inicio'
  const uno = document.createElement('h2')
  uno.textContent = `Un placer verte por aquí,  ${placa.Nombre}`
  uno.className = 'subtitulo'
  app.style.padding = '0'

  const dos = document.createElement('h1')
  dos.className = 'titulo'
  dos.textContent =
    'Eres una persona afortunada por formar parte de esta investigación.'

  const tres = document.createElement('h3')
  tres.className = 'texto'
  tres.innerHTML = `  <p class="texto">La cuestión es simple. Después de tantos años infiltrado en el barrio la investigación no da más de sí. </p>
  <br>
  <p  class="texto">En todos los barrios han llegado a descubrir quién era el policía infiltrado dentro del movimiento. Por diversas cuestiones que no entraremos a valorar en este informe, en Carabanchel no han sido capaces.Pero, si bien es cierto que esta incapacidad del aparato de inteligencia y contrainformación carabanchelera deja bastante que desear, la opacidad con la que se trata la información en el grupúsculo hace imposible tener claro cuales van a ser los próximos pasos que llevarán a cabo. </p>
  <br>
  <p class="Text"><span> Sabemos que se está tramando una gran acción por parte del núcleo duro. Sin embargo, es imposible a estar alturas cuantificar los daños que derivarán ni el lugar, fecha u objetivo del mismo. </span></p>
  <br>
  <p class="texto">Como última esperanza para poder mostrar alguna información relevante ante el congreso de la Brigada Autonómica de Información se hace necesario emprender la acción más ambiciosa llevada a cabo hasta la fecha en Carabanchel. Aprovechando que una de las pocas reuniones anuales en las que se puede juntar toda la plana del Estado Mayor de KRBC, el cumpleaños de AJ, se tratará de desenmascarar los planes del próximo golpe. </p>

  <br>
  <p class="texto">Toda la información disponible, así como los datos concretos del evento estarán disponibles en el apartado <span>Investigación</span> de este mismo informe. Mientras que la información sobre los sospechosos puede ser consultada en el apartado <span>Personajes.</span></p>
  <br>
  <p class="texto">Rogamos que a fin de poder llevar a cabo con éxito la citada operación mantenga total y profundo secreto sobre la información contenida en este informe y sobre los medios que el Cuerpo Nacional de Policía y el Centro Nacional de Inteligencia pone a su disposición. </p>
  <br>
  <p class="texto">Cualquier información filtrada, o cualquier exceso en el tratamiento tendrá serias reprimendas sobre usted y sus seres queridos.</p>
  <br>
  <p class="texto">Por favor, actúe con cautela y discrección. </p>`

  section.append(uno, dos, tres)
  app.append(section)
}
