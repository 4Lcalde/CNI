import { app, participantes, personas } from '../../data/data'
import { cargarPersona } from '../cargarPersona/cargarPersona'
import './personajes.css'

export const personajes = () => {
  app.innerHTML = ''
  const section = document.createElement('section')
  section.className = 'section'

  // AQUI EL DIV SELECT
  const divSelect = document.createElement('div')
  divSelect.className = 'div-select'
  const h3 = document.createElement('h3')
  h3.textContent = 'Selecciona a tu sospechoso'

  const select = document.createElement('select')
  select.className = 'select'

  for (const persona of personas) {
    const option = document.createElement('option')
    option.textContent = persona

    select.append(option)
  }

  select.addEventListener('change', (e) => {
    cargarPersona(e.target.value)
  })

  //AQUÍ EL DIV QUE CONTIENE LOS DIVS DE LA INFO
  const divContainer = document.createElement('div')
  divContainer.className = 'container'

  // AQUÍ EL DIV DE LA INFO

  divSelect.append(h3, select)

  section.append(divSelect, divContainer)
  app.append(section)
}
