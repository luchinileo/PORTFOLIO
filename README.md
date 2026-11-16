# Portfolio — Leonardo Luchini

Portfolio personal: una sola página con mi experiencia, proyectos, habilidades y contacto.

**Sitio:** https://luchinileo.github.io/PORTFOLIO/

## Tecnologías

- **React 18 + TypeScript** (modo estricto)
- **Vite** para desarrollo y build
- **CSS propio**, sin librerías de UI: variables de diseño, modo claro/oscuro y diseño responsive
- **GitHub Actions** para publicar en GitHub Pages en cada push a `main`

## Decisiones

- **Contenido separado de la presentación:** todos los textos, links y proyectos están en
  [`src/data/perfil.ts`](src/data/perfil.ts), tipados con interfaces. Para sumar un proyecto
  se agrega un objeto a ese archivo, sin tocar componentes.
- **Accesibilidad:** HTML semántico, enlace "Saltar al contenido", foco visible al navegar con
  teclado, menú móvil con `aria-expanded`, respeto de `prefers-reduced-motion` y foto de
  perfil con respaldo (iniciales) si la imagen no carga.
- **Sin dependencias extra:** solo React y React DOM en producción (~49 kB gzip).

## Correrlo localmente

Requiere Node 18 o más nuevo.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # chequea tipos y genera dist/
npm run preview   # sirve el build
```

## Estructura

```
src/
├── data/perfil.ts     # contenido del sitio
├── components/        # una sección por componente
├── hooks/useTema.ts   # modo claro/oscuro
└── styles.css         # estilos globales
```
