class Button extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
            *{
                box-sizing: border-box;
            }
        </style>

        <button class="send-button">Enviar</button>
        `

    const button = this.shadow.querySelector('.send-button')

    button.addEventListener('click', async () => {
      let response = await fetch('https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2024-02-01T00:00:00UTC/fechafin/2024-08-01T23:59:59UTC/estacion/B228/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuZXRtYWxsb3JjYUBob3RtYWlsLmNvbSIsImp0aSI6IjAxYzU4OTM3LWMyM2MtNDgyYi1hNmE5LWFmZDAwNWYyZGIwZiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzIyODUzNDA3LCJ1c2VySWQiOiIwMWM1ODkzNy1jMjNjLTQ4MmItYTZhOS1hZmQwMDVmMmRiMGYiLCJyb2xlIjoiIn0.j6Whx403hmr8iCxQK0E6KJylh0EaY0iKjGvFJOstvC4')
      let data = await response.json()

      response = await fetch(data.datos)
      data = await response.json()

      data = data.map(element => {
        const newElement = {}

        Object.entries(element).forEach(([key, value]) => {
          newElement[key] = value.replace(',', '.')
        })

        return newElement
      })

      response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/weather`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    })
  }
}

customElements.define('button-component', Button)
