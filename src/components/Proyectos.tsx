import { perfil, proyectos } from '../data/perfil'
import { Etiquetas } from './Etiquetas'
import { Seccion } from './Seccion'

export function Proyectos() {
  return (
    <Seccion id="proyectos" titulo="Proyectos">
      <div className="grilla">
        {proyectos.map((proyecto) => (
          <article key={proyecto.titulo} className="tarjeta">
            <h3 className="tarjeta__titulo">{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <Etiquetas items={proyecto.stack} descripcion={`Tecnologías de ${proyecto.titulo}`} />

            <div className="acciones">
              {proyecto.demo && (
                <a className="boton boton--primario" href={proyecto.demo} target="_blank" rel="noreferrer">
                  Ver demo
                </a>
              )}
              {proyecto.codigo && (
                <a className="boton" href={proyecto.codigo} target="_blank" rel="noreferrer">
                  Ver código
                </a>
              )}
              {proyecto.estado && <span className="nota">{proyecto.estado}</span>}
            </div>
          </article>
        ))}
      </div>

      <p className="mas">
        Más proyectos de práctica en{' '}
        <a href={perfil.github} target="_blank" rel="noreferrer">
          mi GitHub
        </a>
        .
      </p>
    </Seccion>
  )
}
