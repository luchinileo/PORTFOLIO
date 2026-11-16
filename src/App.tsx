import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SobreMi } from './components/SobreMi'
import { ExperienciaSeccion } from './components/Experiencia'
import { Proyectos } from './components/Proyectos'
import { Habilidades } from './components/Habilidades'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a className="saltar" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <SobreMi />
        <ExperienciaSeccion />
        <Proyectos />
        <Habilidades />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
