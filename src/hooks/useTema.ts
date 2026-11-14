import { useEffect, useState } from 'react'

export type Tema = 'claro' | 'oscuro'

const CLAVE = 'tema'

function temaInicial(): Tema {
  // localStorage puede fallar (modo privado, cookies bloqueadas): en ese caso
  // usamos la preferencia del sistema operativo.
  try {
    const guardado = localStorage.getItem(CLAVE)
    if (guardado === 'claro' || guardado === 'oscuro') return guardado
  } catch {
    /* sin acceso a localStorage */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro'
}

/** Maneja el modo claro/oscuro y recuerda la elección del visitante. */
export function useTema() {
  const [tema, setTema] = useState<Tema>(temaInicial)

  useEffect(() => {
    document.documentElement.dataset.tema = tema
    try {
      localStorage.setItem(CLAVE, tema)
    } catch {
      /* sin acceso a localStorage */
    }
  }, [tema])

  const alternarTema = () => setTema((actual) => (actual === 'oscuro' ? 'claro' : 'oscuro'))

  return { tema, alternarTema }
}
