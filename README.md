````markdown
# FlowMetrics Landing Page

Landing page profesional creada para FlowMetrics, una plataforma de analítica en tiempo real que ayuda a equipos a tomar decisiones basadas en datos.

---

## Vista previa

![FlowMetrics Hero](https://via.placeholder.com/800x400.png?text=FlowMetrics+Landing+Hero)
*Ejemplo de la sección Hero con llamada a la acción.*

![FlowMetrics Features](https://via.placeholder.com/800x400.png?text=Features+Section)
*Sección de características y beneficios.*

![FlowMetrics Testimonials](https://via.placeholder.com/800x400.png?text=Testimonials+Section)
*Testimonios de clientes y prueba social.*

---

## Tecnologías utilizadas

- **Next.js 13** – Framework React moderno para aplicaciones web rápidas y escalables.
- **React 18** – Librería principal para la construcción de componentes interactivos.
- **TailwindCSS** – Framework de CSS para estilos rápidos y responsivos.
- **TypeScript** – Tipado estático para mayor confiabilidad y mantenimiento.
- **Vercel** – Despliegue y hosting del proyecto (opcional).

---

## Características del proyecto

- **Secciones server-rendered:** La mayoría de las secciones son renderizadas del lado del servidor para maximizar el rendimiento y SEO.
  - Hero
  - Social Proof
  - Features
  - How It Works
  - Pricing
  - Testimonials
  - Final CTA
  - Footer
- **FAQ interactivo:** Componente client-side con acordeón interactivo para preguntas frecuentes.
- **Diseño responsivo:** Adaptable a móviles, tablets y escritorio.
- **Componentes reutilizables:** Botones, tarjetas y contenedores con estilo consistente.
- **SEO-friendly:** Estructura semántica con encabezados jerárquicos y contenido crawlable.

---

## Estructura del proyecto

```text
app/
├─ components/
│  ├─ sections/
│  │  ├─ Header.tsx
│  │  ├─ Hero.tsx
│  │  ├─ SocialProof.tsx
│  │  ├─ Features.tsx
│  │  ├─ HowItWorks.tsx
│  │  ├─ Pricing.tsx
│  │  ├─ Testimonials.tsx
│  │  ├─ FAQ.tsx
│  │  ├─ FinalCTA.tsx
│  │  └─ Footer.tsx
│  └─ ui/
│     ├─ Button.tsx
│     ├─ Card.tsx
│     └─ Container.tsx
├─ globals.css
├─ layout.tsx
└─ page.tsx
````

* **`sections/`**: Componentes de cada sección de la landing.
* **`ui/`**: Componentes reutilizables (Botón, Tarjeta, Contenedor).
* **`globals.css`**: Estilos globales con Tailwind.
* **`layout.tsx` y `page.tsx`**: Configuración principal del layout y página de inicio.

---

## Objetivo del proyecto

El landing page busca:

1. **Demostrar FlowMetrics** como herramienta de análisis en tiempo real.
2. **Convertir visitantes en leads** con CTAs claros y secciones de prueba social.
3. **Ofrecer una experiencia rápida y responsiva**, maximizando la performance y SEO.
4. **Mantener un código limpio y modular**, fácil de mantener y escalar.

---

## Autor

**Nadia Escobbb**
[GitHub](https://github.com/nadiaescobbb) • [Correo](mailto:devcodernadia@gmail.com)

```
