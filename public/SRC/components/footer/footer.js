import './footer.css'
export const footer = () => {
  const footer = document.createElement('footer')

  const p = document.createElement('footer')
  p.className = 'texto'
  p.textContent = 'Salir'

  p.addEventListener('click', () => {
    localStorage.removeItem('Placa')
    location.reload()
  })

  footer.append(p)
  document.body.append(footer)
}
