import type { ReactNode } from 'react'

interface SeccionProps {
  id: string
  titulo: string
  children: ReactNode
}

/** Contenedor común: todas las secciones comparten ancho, espaciado y título. */
export function Seccion({ id, titulo, children }: SeccionProps) {
  return (
    <section id={id} className="seccion" aria-labelledby={`${id}-titulo`}>
      <div className="contenedor">
        <h2 id={`${id}-titulo`} className="seccion__titulo">
          {titulo}
        </h2>
        {children}
      </div>
    </section>
  )
}
