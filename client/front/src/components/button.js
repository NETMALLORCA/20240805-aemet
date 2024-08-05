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
      const response = await fetch('https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2024-02-01T00:00:00UTC/fechafin/2024-08-01T23:59:59UTC/estacion/B228/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuZXRtYWxsb3JjYUBob3RtYWlsLmNvbSIsImp0aSI6IjAxYzU4OTM3LWMyM2MtNDgyYi1hNmE5LWFmZDAwNWYyZGIwZiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzIyODUzNDA3LCJ1c2VySWQiOiIwMWM1ODkzNy1jMjNjLTQ4MmItYTZhOS1hZmQwMDVmMmRiMGYiLCJyb2xlIjoiIn0.j6Whx403hmr8iCxQK0E6KJylh0EaY0iKjGvFJOstvC4')
      const data = await response.json()

      console.log(data.datos)

      const apiresponse = await fetch(data.datos)
      const weatherApi = await response.json()

      consol log (weatherApi)
    })
  }
}

customElements.define('button-component', Button)
