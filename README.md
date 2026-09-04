# Smart-tech — primera propuesta de sitio

Sitio institucional en Next.js, TypeScript y Tailwind. Incluye servicios con iconos, seis antecedentes filtrables y una página por obra.

## Desarrollo

Usar npm: `npm ci`, `npm run dev`. Verificación y exportación estática: `npm run build`. El resultado queda en `out/`. El lockfile de Yarn anterior se conserva en `docs/legacy/`.

## Contenido

- `src/data/projects.ts`: proyectos, categorías, fechas, alcance, tecnologías y referencias de origen.
- `src/components/site/`: portada, servicios, filtros, navegación y contacto.
- `src/app/obras/[slug]/page.tsx`: detalle de obra.
- `src/app/globals.css`: diseño y adaptación a pantallas pequeñas.
- `public/images/`: fotografías y logo del sitio actual de Smart-tech.

Las fechas y alcances se tomaron del sitio de Smart-tech. La selección es histórica y está pendiente incorporar los proyectos recientes. La imagen de Torre Plaza Alemania se reutiliza tal como aparece en el sitio de origen; puede ser una visualización arquitectónica. Cada obra cuenta por ahora con una sola imagen de referencia.

## Antes de publicación definitiva

Completar y verificar antecedentes recientes, fotografías, información comercial y datos de contacto. Revisar la versión de las dependencias para producción y retirar `robots: noindex` cuando corresponda publicar. Este ejemplo no contiene formulario ni envío simulado: el contacto usa enlaces reales de correo y teléfono.

## Comprobaciones de esta versión

Compilación, validación de tipos y lint de Next.js. Exportación de portada y seis fichas; comprobación de destinos locales e imágenes. No se realizó prueba visual automatizada en navegador.

## GitHub Pages

El workflow `.github/workflows/pages.yml` compila y publica automáticamente cada actualización de `main`. En GitHub, elegir **Settings → Pages → Build and deployment → Source: GitHub Actions**. El enlace esperado es `https://maicorborges.github.io/Smart-tech/`.

El repositorio permanece privado. GitHub Pages desde un repositorio privado requiere un plan de GitHub que lo admita (por ejemplo GitHub Pro); el sitio publicado puede ser público y compartirse con personas sin acceso al código. No se debe cambiar la visibilidad del repositorio como parte automática de esta configuración.

Si el primer workflow falla en `Configure Pages`, completar la selección anterior y reejecutar el workflow desde Actions. No hacen falta tokens nuevos ni secretos para los despliegues normales después de habilitar Pages.

Para verificar localmente la exportación con el mismo prefijo: `NEXT_PUBLIC_BASE_PATH=/Smart-tech npm run build`. En desarrollo normal, `npm run dev` funciona desde la raíz. `next/link` agrega el prefijo automáticamente; `sitePath` lo agrega solo a imágenes y enlaces HTML nativos.

## Ajustes de esta revisión

Hero con altura flexible para mantener visibles y separados sus botones; obras en tres columnas en escritorio; cards de servicios más compactas, conservando iconos y descripciones.
