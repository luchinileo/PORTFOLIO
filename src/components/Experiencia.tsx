import { experiencias } from '../data/perfil'
import { Etiquetas } from './Etiquetas'
import { Seccion } from './Seccion'

export function ExperienciaSeccion() {
  return (
    <Seccion id="experiencia" titulo="Experiencia">
      <div className="lista">
        {experiencias.map((exp) => (
          <article key={exp.empresa} className="tarjeta">
            <header className="tarjeta__encabezado">
              <div>
                <h3 className="tarjeta__titulo">{exp.puesto}</h3>
                <p className="tarjeta__subtitulo">{exp.empresa}</p>
              </div>
              <p className="tarjeta__periodo">{exp.periodo}</p>
            </header>

            <p>{exp.resumen}</p>
            <ul className="logros">
              {exp.logros.map((logro) => (
                <li key={logro}>{logro}</li>
              ))}
            </ul>
            <Etiquetas items={exp.stack} descripcion={`Tecnologías usadas en ${exp.empresa}`} />
            {exp.nota && <p className="nota">{exp.nota}</p>}
          </article>
        ))}
      </div>
    </Seccion>
  )
}
