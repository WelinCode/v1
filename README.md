# WelinDev Portfolio

Portafolio personal construido con React, TypeScript y Tailwind CSS.

## Tecnologias

- **React 19** - Biblioteca UI
- **TypeScript** - Tipado estatico
- **Tailwind CSS 4** - Estilos utilitarios
- **Vite** - Build tool y dev server

## Estructura del Proyecto

```
src/
├── components/
│   ├── icons/          # Iconos SVG (Github, LinkedIn, etc.)
│   ├── ui/             # Componentes reutilizables (Tag, SocialLink, ResumeButton)
│   ├── cards/          # Tarjetas (ExperienceCard, ProjectCard)
│   ├── layout/         # Layout (Header, Navigation, Footer)
│   └── sections/       # Secciones (About, Skills, Experience, Projects)
├── hooks/              # Custom hooks (useMousePosition, useActiveSection)
├── data/               # Datos del portafolio
├── App.tsx             # Componente principal
└── index.css           # Estilos base
```

## Caracteristicas

- Efecto spotlight que sigue el cursor
- Navegacion sticky con indicador de seccion activa
- Diseno responsive (mobile/desktop)
- Scroll suave entre secciones
- Componentes modulares y reutilizables

## Instalacion

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para produccion
npm run build
```

## Personalizacion

Edita el archivo `src/data/portfolio.ts` para modificar:

- Informacion personal (`profileData`)
- Secciones de navegacion (`navigationItems`)
- Redes sociales (`socialLinks`)
- Contenido "Sobre mi" (`aboutContent`)
- Experiencia laboral (`experiences`)
- Proyectos (`projects`)
- Habilidades (`skillCategories`)

## Scripts

| Comando | Descripcion |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera build de produccion |
| `npm run preview` | Preview del build de produccion |
| `npm run lint` | Ejecuta ESLint |

## Licencia

MIT
