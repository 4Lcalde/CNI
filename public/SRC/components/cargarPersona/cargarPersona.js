import './cargarPersona.css'
import { app, baseDomain, participantes } from '../../data/data'

export const cargarPersona = (persona) => {
  app.style.backgroundImage = 'none'
  const filtrado = participantes.filter(
    (participante) => participante.nombre === persona
  )
  const target = filtrado[0]

  const container = document.querySelector('.container')
  if (persona === 'Mapa') {
    app.style.backgroundImage = 'none'
    container.style.backgroundImage = `${baseDomain}/assets/PERFIL/mapa.png`
    container.innerHTML = ''
    return
  }
  container.style.backgroundImage = 'none'
  container.innerHTML = ''

  const divInfo = document.createElement('div')
  divInfo.className = 'div-info'

  const divImg = document.createElement('div')
  divImg.className = 'div-img'

  const perfil = document.createElement('img')
  perfil.className = 'perfil'
  perfil.src = target.fotoPerfil

  const divDatos = document.createElement('div')
  divDatos.className = 'div-datos'

  for (const propiedad in target) {
    if (propiedad !== 'fotoPerfil' && propiedad !== 'fotos') {
      divDatos.innerHTML += `<p><span>${propiedad}: </span>${target[propiedad]}</p>`
    }
  }

  const divFotos = document.createElement('div')
  divFotos.className = 'div-fotos'
  let contador = 1

  for (const foto of target.fotos) {
    const img = document.createElement('img')
    img.src = foto
    img.classList.add('foto', `foto${contador}`)
    contador++
    divFotos.append(img)
  }

  divImg.append(perfil)
  divInfo.append(divImg, divDatos)
  container.append(divInfo, divFotos)
}
