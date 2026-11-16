import { perfil } from '../data/perfil'

export function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor">
        <p>
          © {new Date().getFullYear()} {perfil.nombre} · Hecho con React y TypeScript
        </p>
      </div>
    </footer>
  )
}
