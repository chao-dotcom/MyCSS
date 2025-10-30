My Design System (React + TypeScript)

Deployed at: `https://strybk.surge.sh/`
Premium, animated, accessible component library themed with styled-components, documented in Storybook, with a demo app.

Install

```bash
npm install my-design-system styled-components react react-dom
```

Quick Start

```tsx
import { ThemeProvider, Button } from 'my-design-system';

export default function App() {
  return (
    <ThemeProvider>
      <Button colorScheme="green">Hello</Button>
    </ThemeProvider>
  );
}
```

Scripts

- Dev Storybook: `npm run storybook`
- Build library: `npm run build`
- Tests: `npm test`
- Typecheck: `npm run typecheck`

Components (selected)

- Buttons (solid/outline/ghost/link, colorScheme, sizes) with premium hover shine
- Inputs, Select (animated listbox), Labels, Badges (animated intents), Switch
- Modal (glass surface, motion), Tooltip, Toast (slide/fade), Tabs (animated indicator)
- Accordion (slide/fade), Pagination (lift on hover), Breadcrumbs, Table (green zebra)
- Avatar, Icon, SegmentedControl (capsule alternative to radios)

Design System

- Tokens: colors (light/dark), palettes, spacing, radii, elevation, motion, glass
- Global type: Manrope (bold), refined letter-spacing
- Accessibility: WCAG 2.1 AA-minded, keyboard support, visible focus

Usage Examples

```tsx
<Button colorScheme="green" size="md">Primary</Button>
<Button variant="outline" colorScheme="green">Outline</Button>
<Badge intent="success" variant="solid" colorScheme="green">Success</Badge>
<SegmentedControl segments={[{id:'free',label:'Free'},{id:'pro',label:'Pro'}]} />
```

Develop Locally

1) Install deps: `npm install`
2) Storybook: `npm run storybook`
3) Demo app:
   - `cd demo-app`
   - `npm install`
   - `npm run dev`

Host on Surge (manual)

- Storybook
  - Build: `npm run build:storybook`
  - Deploy: `npx surge ./storybook-static your-storybook.surge.sh`
- Demo app
  - Build: `cd demo-app && npm run build`
  - Deploy: `npx surge ./dist your-demo.surge.sh`

Contributing

- Lint: `npm run lint` • Typecheck: `npm run typecheck`
- Tests use Vitest + RTL + axe

License

MIT
