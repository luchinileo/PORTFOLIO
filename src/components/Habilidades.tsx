import { habilidades } from '../data/perfil'
import { Etiquetas } from './Etiquetas'
import { Seccion } from './Seccion'

export function Habilidades() {
  return (
    <Seccion id="habilidades" titulo="Habilidades">
      <div className="grilla">
        {habilidades.map((grupo) => (
          <div key={grupo.titulo} className="tarjeta">
            <h3 className="tarjeta__titulo">{grupo.titulo}</h3>
            <Etiquetas items={grupo.items} descripcion={grupo.titulo} />
          </div>
        ))}
      </div>
    </Seccion>
  )
}
