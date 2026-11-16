interface EtiquetasProps {
  items: string[]
  descripcion: string
}

/** Lista de tecnologías en forma de "chips". */
export function Etiquetas({ items, descripcion }: EtiquetasProps) {
  return (
    <ul className="etiquetas" aria-label={descripcion}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
