# AI Development Rules

These rules must always be followed when generating code.

## General Rules

* Never create unnecessary files.
* Never create duplicate components.
* Always check existing project structure first.
* Reuse existing components whenever possible.
* Keep code simple and maintainable.
* Prioritize readability over clever solutions.
* Generate production-ready code.
* Follow project folder structure.
* Follow existing naming conventions.
* Do not modify unrelated files.

---

## Next.js Rules

* Use App Router only.
* Use Server Components by default.
* Use Client Components only when required.
* Add `"use client"` only when necessary.
* Use Next.js Link component for internal navigation.
* Use Next.js Image component for images.
* Use route folders inside `src/app`.
* Use dynamic routes with `[slug]`.

Correct:

```txt
src/app/produk/[slug]/page.tsx
```

Incorrect:

```txt
src/pages/product-detail.tsx
```

---

## TypeScript Rules

* Always use TypeScript.
* Avoid using `any`.
* Create reusable types inside `src/types`.
* Prefer interfaces and reusable type definitions.
* Use explicit return types when appropriate.

Bad:

```ts
const product: any
```

Good:

```ts
const product: Product
```

---

## Tailwind CSS Rules

* Use Tailwind CSS only.
* Avoid inline styles.
* Avoid CSS files unless absolutely necessary.
* Use responsive utility classes.
* Use mobile-first styling.

Bad:

```tsx
<div style={{ marginTop: "20px" }}>
```

Good:

```tsx
<div className="mt-5">
```

---

## Component Rules

* Components must be reusable.
* Components should have a single responsibility.
* Keep components small.
* Extract repeated UI into reusable components.
* Use PascalCase for component names.

Correct:

```txt
Navbar.tsx
ProductCard.tsx
TrackingTimeline.tsx
```

Incorrect:

```txt
navbar.tsx
productcard.tsx
```

---

## Page Rules

* Keep page files clean.
* Move reusable UI into components.
* Avoid large page files.
* Avoid repeated code between pages.

Bad:

```tsx
page.tsx
500+ lines
```

Good:

```tsx
page.tsx
├── HeroSection
├── ProductGrid
├── CTASection
```

---

## Data Rules

* Use mock data for now.
* Store mock data inside `src/data`.
* Do not hardcode large datasets directly inside components.
* Future API integrations should be easy to implement.

---

## Tracking Order Rules

Current status:

* UI only
* No backend
* No database

Requirements:

* Use mock data
* Create reusable TrackingTimeline component
* Design API-ready architecture
* Invoice number will become API lookup key later

Tracking flow:

1. Order Diterima
2. Produksi
3. Printing
4. Finishing
5. Pengiriman
6. Selesai

---

## Design Rules

* Mobile-first design.
* Responsive on all screen sizes.
* Modern company profile appearance.
* Consistent spacing.
* Consistent typography.
* Consistent button styles.
* Consistent card styles.

---

## Performance Rules

* Avoid unnecessary re-renders.
* Avoid unnecessary state.
* Avoid unnecessary libraries.
* Optimize images.
* Prefer server-side rendering when possible.

---

## File Creation Rules

Before creating a file:

1. Check if similar file already exists.
2. Reuse existing component if possible.
3. Follow folder structure.
4. Use descriptive file names.

Never create:

* duplicate components
* duplicate pages
* duplicate utility functions

---

## Git Rules

Do not modify:

* package-lock.json
* AGENTS.md
* .env files
* configuration files

unless explicitly requested.

---

## Code Generation Preference

When generating code:

* Generate complete code.
* Do not generate pseudo code.
* Do not leave TODO placeholders.
* Use TypeScript.
* Use Tailwind CSS.
* Follow Next.js App Router.
* Follow project structure.
* Prefer reusable components.
* Prefer maintainable architecture.
