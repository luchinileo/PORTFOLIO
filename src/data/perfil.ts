// Todo el contenido del portfolio vive acá.
// Para cambiar un texto, un link o agregar un proyecto, editá este archivo:
// los componentes solo se encargan de mostrarlo.

export interface Enlace {
  etiqueta: string
  url: string
}

export interface Experiencia {
  puesto: string
  empresa: string
  periodo: string
  resumen: string
  stack: string[]
  logros: string[]
  /** Aclaración visible, por ejemplo cuando el código no es público. */
  nota?: string
}

export interface Proyecto {
  titulo: string
  descripcion: string
  stack: string[]
  codigo?: string
  demo?: string
  /** Texto a mostrar cuando todavía no hay demo o código publicado. */
  estado?: string
}

export interface GrupoHabilidades {
  titulo: string
  items: string[]
}

export const perfil = {
  nombre: 'Leonardo Luchini',
  rol: 'Desarrollador Web Full Stack Junior',
  ubicacion: 'Puerto Madryn, Chubut, Argentina · disponible remoto',
  bajada:
    'Construyo interfaces con React y TypeScript, escribo tests y trabajo con ramas, pull requests y code review.',
  avatar: 'https://avatars.githubusercontent.com/u/104324324?v=4',
  email: 'leoluchini2022@gmail.com',
  github: 'https://github.com/luchinileo',
  linkedin: 'https://www.linkedin.com/in/leonardo-luchini-13b127262/',
  /** Poné la ruta del PDF (por ejemplo '/cv-leonardo-luchini.pdf' dentro de public/) para mostrar el botón. */
  cv: '',
}

export const sobreMi: string[] = [
  'Soy desarrollador web full stack en formación. Empecé con HTML, CSS y JavaScript y hoy trabajo principalmente con React, TypeScript y Node.js.',
  'Actualmente colaboro como desarrollador junior en una aplicación SaaS para gimnasios que ya tiene un gimnasio piloto: tomo tickets, los resuelvo en su propia rama y cada pull request pasa por CI y por la revisión del líder técnico antes de llegar a main.',
  'Lo que más me interesa es escribir código claro, accesible y probado. Busco sumarme a un equipo donde pueda seguir aprendiendo y aportar desde el primer día.',
]

export const experiencias: Experiencia[] = [
  {
    puesto: 'Desarrollador Frontend Junior (colaboración)',
    empresa: 'Aplicación SaaS para gimnasios y coaches',
    periodo: 'Oct 2026 — actualidad',
    resumen:
      'Plataforma multi-tenant donde cada gimnasio tiene su espacio con alumnos, rutinas y su propia marca. Trabajo por tickets con flujo profesional: rama por tarea, PR con plantilla, CI y code review.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vitest', 'GitHub Actions'],
    logros: [
      'Implementé el cálculo de contraste WCAG 2.1 (contrastRatio y pickTextColor) para que el texto sea siempre legible sobre los colores de cada gimnasio, con tests unitarios.',
      'Desarrollé extractPalette: obtiene los colores principal y secundario de la marca a partir de los píxeles del logo, con tests en los valores límite.',
      'Construí la pantalla de login con la marca del gimnasio por props (logo y colores), con respaldo cuando el logo no carga y textos alternativos accesibles.',
      'Creé la pantalla de acceso suspendido, con validación segura de los links de contacto usando la API URL.',
      'Armé el listado de alumnos con buscador y sus estados de carga, vacío y error (en revisión).',
      'Cada entrega pasó lint, typecheck, tests y verificación del bundle en CI, y 4 pull requests ya fueron aprobados y mergeados.',
    ],
    nota: 'Proyecto privado: no puedo compartir el nombre ni el código, pero puedo contar en detalle cómo resolví cada tarea.',
  },
]

export const proyectos: Proyecto[] = [
  {
    titulo: 'Molienda Luchini — landing de cafetería',
    descripcion:
      'Landing page responsive para una cafetería: menú, opiniones, ubicación y formulario de reserva de mesa. Componentes separados y contenido centralizado en un archivo de datos.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    estado: 'Demo en preparación',
  },
  {
    titulo: 'Este portfolio',
    descripcion:
      'Single page hecha sin librerías de UI: componentes en React con TypeScript, CSS propio con variables, modo claro/oscuro y diseño responsive.',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    codigo: 'https://github.com/luchinileo/PORTFOLIO',
  },
]

export const habilidades: GrupoHabilidades[] = [
  {
    titulo: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    titulo: 'Backend y datos',
    items: ['Node.js', 'NestJS', 'MySQL', 'APIs REST'],
  },
  {
    titulo: 'Forma de trabajo',
    items: ['Git y GitHub', 'Pull requests y code review', 'Tests con Vitest', 'CI', 'Accesibilidad (WCAG)'],
  },
]

export const navegacion: Enlace[] = [
  { etiqueta: 'Sobre mí', url: '#sobre-mi' },
  { etiqueta: 'Experiencia', url: '#experiencia' },
  { etiqueta: 'Proyectos', url: '#proyectos' },
  { etiqueta: 'Habilidades', url: '#habilidades' },
  { etiqueta: 'Contacto', url: '#contacto' },
]
