import { useState } from 'react'
import { navegacion, perfil } from '../data/perfil'
import { useTema } from '../hooks/useTema'

export function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const { tema, alternarTema } = useTema()
  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <header className="header">
      <div className="contenedor header__fila">
        <a href="#inicio" className="header__logo" onClick={cerrarMenu}>
          {perfil.nombre}
        </a>

        <button
          type="button"
          className="header__boton-menu"
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
          onClick={() => setMenuAbierto((abierto) => !abierto)}
        >
          {menuAbierto ? 'Cerrar' : 'Menú'}
        </button>

        <nav
          id="menu-principal"
          className={`header__nav${menuAbierto ? ' header__nav--abierto' : ''}`}
          aria-label="Principal"
        >
          <ul>
            {navegacion.map((item) => (
              <li key={item.url}>
                <a href={item.url} onClick={cerrarMenu}>
                  {item.etiqueta}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="boton-tema"
            onClick={alternarTema}
            aria-label={tema === 'oscuro' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {tema === 'oscuro' ? '☀' : '☾'}
          </button>
        </nav>
      </div>
    </header>
  )
}
