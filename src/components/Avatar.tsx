import { useState } from 'react'

interface AvatarProps {
  src: string
  nombre: string
}

function iniciales(nombre: string) {
  return nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0].toUpperCase())
    .join('')
}

/**
 * Foto de perfil con respaldo: si la imagen no carga, muestra las iniciales
 * en lugar de un ícono roto. Es decorativa (alt vacío) porque el nombre ya
 * está escrito al lado y un lector de pantalla lo leería dos veces.
 */
export function Avatar({ src, nombre }: AvatarProps) {
  const [fallo, setFallo] = useState(false)

  if (fallo || !src) {
    return (
      <div className="avatar avatar--iniciales" aria-hidden="true">
        {iniciales(nombre)}
      </div>
    )
  }

  return <img className="avatar" src={src} alt="" width={220} height={220} onError={() => setFallo(true)} />
}
