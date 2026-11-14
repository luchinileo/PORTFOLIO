import { sobreMi } from '../data/perfil'
import { Seccion } from './Seccion'

export function SobreMi() {
  return (
    <Seccion id="sobre-mi" titulo="Sobre mí">
      <div className="texto">
        {sobreMi.map((parrafo) => (
          <p key={parrafo}>{parrafo}</p>
        ))}
      </div>
    </Seccion>
  )
}
