import { perfil } from '../data/perfil'
import { Avatar } from './Avatar'

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="contenedor hero__grilla">
        <div>
          <p className="hero__saludo">Hola, soy</p>
          <h1 className="hero__nombre">{perfil.nombre}</h1>
          <p className="hero__rol">{perfil.rol}</p>
          <p className="hero__bajada">{perfil.bajada}</p>
          <p className="hero__ubicacion">{perfil.ubicacion}</p>

          <div className="acciones">
            <a className="boton boton--primario" href="#experiencia">
              Ver mi experiencia
            </a>
            <a className="boton" href="#contacto">
              Contactarme
            </a>
            {perfil.cv && (
              <a className="boton" href={perfil.cv} download>
                Descargar CV
              </a>
            )}
          </div>
        </div>

        <Avatar src={perfil.avatar} nombre={perfil.nombre} />
      </div>
    </section>
  )
}
