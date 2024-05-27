import './cargarPersona.css'
import { app, participantes } from '../../data/data'

export const cargarPersona = (persona) => {
  console.log(persona)
  app.style.backgroundImage = 'none'
  const filtrado = participantes.filter(
    (participante) => participante.nombre === persona
  )
  const target = filtrado

  const container = document.querySelector('.container')
  if (persona === 'Mapa') {
    app.style.backgroundImage = 'none'

    container.innerHTML =
      '<div class="container" style="background-image: url(&quot;https://i.ibb.co/KDL2RNp/mapa.png&quot;);"></div>'
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
  perfil.src = target[0].fotoPerfil

  const divDatos = document.createElement('div')
  divDatos.className = 'div-datos'

  for (const propiedad in target[0]) {
    if (propiedad !== 'fotoPerfil' && propiedad !== 'fotos') {
      divDatos.innerHTML += `<p><span>${propiedad}: </span>${[
        target[0][propiedad]
      ]}</p>`
    }
  }

  const divFotos = document.createElement('div')
  divFotos.className = 'div-fotos'
  let contador = 1

  for (const foto of target[0].fotos) {
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
