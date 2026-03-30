# react-car-logo

PNG logo components for 40 exotic & luxury car brands. One component, pass the make as a slug. React & React Native compatible. TypeScript.

## Installation

```bash
npm install react-car-logo
```

## Quick Start

```tsx
import { ReactCarLogo } from 'react-car-logo';

<ReactCarLogo name="ferrari" />              // 160px (default)
<ReactCarLogo name="ferrari" size="icon" />   // 32px
<ReactCarLogo name="ferrari" size="sm" />     // 80px
<ReactCarLogo name="ferrari" size="lg" />     // 320px
<ReactCarLogo name="ferrari" width={240} />   // custom override
<ReactCarLogo name="ferrari" alt="Logo" />    // accessible alt
```

## Size Presets

| Prop value    | Renders at | Best for                     |
| ------------- | ---------- | ---------------------------- |
| `size="icon"` | 32px       | Inline icons, small UI       |
| `size="sm"`   | 80px       | Nav, tables, thumbnails      |
| `size="md"`   | 160px      | Cards, lists (default)       |
| `size="lg"`   | 320px      | Hero, detail views           |
| `width={N}`   | Npx        | Any custom size              |

## Props

| Prop        | Type                                | Default    | Description                                      |
| ----------- | ----------------------------------- | ---------- | ------------------------------------------------ |
| `name`      | `BrandName`                         | (required) | Brand slug, e.g. `"ferrari"`, `"rolls-royce"`    |
| `size`      | `'icon' \| 'sm' \| 'md' \| 'lg'`   | `'md'`     | Size preset                                      |
| `width`     | `number`                            | --         | Custom width in px (overrides size)              |
| `height`    | `number`                            | --         | Custom height in px (overrides size)             |
| `alt`       | `string`                            | brand name | Accessible alt text                              |
| `loading`   | `'lazy' \| 'eager'`                | `'lazy'`   | Native loading strategy                          |
| `className` | `string`                            | --         | CSS class(es)                                    |
| `style`     | `CSSProperties`                     | --         | Inline styles (merged with `objectFit: contain`) |
| `...rest`   | `ImgHTMLAttributes`                 | --         | Any standard `<img>` attribute                   |

## Brand Metadata

Access metadata for any brand via the `brands` registry:

```tsx
import { brands } from 'react-car-logo';

console.log(brands.ferrari.title);    // "Ferrari"
console.log(brands.ferrari.country);  // "Italy"
console.log(brands.ferrari.region);   // "Italian"
console.log(brands.ferrari.hex);      // "CD212A"
console.log(brands.ferrari.founded);  // 1939
```

## Dynamic Rendering

Pass any slug string to render logos dynamically -- perfect for data-driven UIs:

```tsx
import { ReactCarLogo } from 'react-car-logo';
import type { BrandName } from 'react-car-logo';

const make = 'ferrari' as BrandName;
<ReactCarLogo name={make} size="md" />;
```

## All 40 Brands

**Italian:** Ferrari, Lamborghini, Maserati, Alfa Romeo, Pagani, De Tomaso, Pininfarina, Abarth

**German:** Porsche, BMW, Mercedes-AMG, Brabus, Audi, Maybach, Gumpert

**British:** McLaren, Bentley, Rolls-Royce, Aston Martin, Lotus, Jaguar, TVR, Radical, Arash

**French:** Bugatti, Alpine

**American:** Shelby, Dodge, Chevrolet, Ford, Saleen, Hennessey, SSC, Mosler

**Swedish:** Koenigsegg, Polestar

**Other:** Rimac (Croatia), Zenvo (Denmark), Spyker (Netherlands), W Motors (UAE)

## Legal

All logos are trademarks of their respective owners. See [LEGAL.md](./LEGAL.md) for details.

## License

MIT (source code only). See [LICENSE](./LICENSE).
