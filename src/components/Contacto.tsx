import { perfil } from '../data/perfil'
import { Seccion } from './Seccion'

export function Contacto() {
  return (
    <Seccion id="contacto" titulo="Contacto">
      <div className="texto">
        <p>
          Estoy buscando mi primera posición como desarrollador. Si mi perfil te interesa, escribime y te
          respondo a la brevedad.
        </p>
      </div>
      <div className="acciones">
        <a className="boton boton--primario" href={`mailto:${perfil.email}`}>
          {perfil.email}
        </a>
        <a className="boton" href={perfil.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="boton" href={perfil.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </Seccion>
  )
}
