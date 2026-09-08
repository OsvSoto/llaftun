# Sitio web de Fundación Llaftun

Reemplazo del sitio WordPress de [fundacionllaftun.cl](https://fundacionllaftun.cl)
por un sitio estático, para ser servido desde el hosting que la fundación ya
tiene contratado.

**React + TypeScript + Vite.** Sin CMS, sin backend y sin base de datos: el
contenido institucional cambia poco y las novedades se publican en Instagram.

## Cómo trabajar

```bash
npm install     # una sola vez
npm run dev     # servidor de desarrollo en http://localhost:5173
npm run build   # compila a dist/
npm run preview # revisa dist/ como se verá en producción
```

## Estructura

```
src/
  content/      Todo el contenido del sitio, como datos tipados
  types/        Las formas que debe tener ese contenido
  pages/        Una página por ruta
  components/   Piezas reutilizables
  styles/       CSS global (paleta y tipografía provisorias)
public/
  materiales/   PDFs descargables + index.json (ver LEEME.txt)
  .htaccess     Enrutado, redirecciones y caché para el hosting Apache
```

### Dónde se edita el contenido

Cada archivo de `src/content/` es contenido, no código: se edita el texto y se
vuelve a compilar. No hay panel de administración a propósito, porque mantener
uno cuesta más de lo que aporta en un sitio que cambia dos o tres veces al año.

La excepción es el **material educativo**: se lee en tiempo de ejecución desde
`/materiales/index.json`, así la fundación puede agregar un PDF por FTP sin
recompilar ni desplegar. Las instrucciones están en `public/materiales/LEEME.txt`.

## Contenido pendiente

El sitio marca de forma visible lo que la fundación todavía no entrega, para que
los vacíos no pasen inadvertidos en las revisiones. Para ver la lista completa:

```bash
grep -rn "PENDIENTE" src/ public/
```

Antes de publicar no debería quedar ninguno.

## Antes de desplegar

Tres cosas hay que confirmar con el hosting, porque cambian decisiones técnicas:

1. **Que sea Apache y permita `.htaccess` con `mod_rewrite`.** Sin eso, recargar
   `/quienes-somos` devuelve un 404 y habría que pasar a rutas con `#`.
2. **Que tenga PHP** (lo tiene, porque hoy corre WordPress), si se quiere un
   formulario de contacto propio en vez de un servicio externo.
3. **Espacio disponible**, considerando unos 30 MB de material pedagógico más
   las fotografías.

## Despliegue

```bash
npm run build
```

Subir el contenido de `dist/` a la raíz pública del hosting (`public_html/` o
equivalente). El `.htaccess` va incluido en `dist/`.

Antes de reemplazar el sitio actual: hacer un respaldo completo del WordPress
(archivos y base de datos) y probar la versión nueva en un subdominio.
