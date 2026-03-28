# react-car-logo

PNG logo components for the top 50 exotic & luxury car brands. React & React Native compatible. Tree-shakeable. TypeScript.

## Installation

```bash
npm install react-car-logo
```

## Quick Start

```tsx
import { Ferrari, McLaren } from 'react-car-logo';

// Or tree-shaken single import:
import Ferrari from 'react-car-logo/logos/Ferrari';

<Ferrari size="md" />           // 160px (default)
<Ferrari size="sm" />           // 80px
<Ferrari size="lg" />           // 320px
<Ferrari width={240} />         // custom override
<Ferrari alt="Ferrari Logo" />  // accessible alt
```

## Size Presets

| Prop value  | Renders at | Fetches PNG | Best for                |
| ----------- | ---------- | ----------- | ----------------------- |
| `size="sm"` | 80px       | 160px (2x)  | Nav, tables, thumbnails |
| `size="md"` | 160px      | 320px (2x)  | Cards, lists (default)  |
| `size="lg"` | 320px      | 640px (2x)  | Hero, detail views      |
| `width={N}` | Npx        | 640px       | Any custom size         |

## Props

| Prop        | Type                    | Default    | Description                                      |
| ----------- | ----------------------- | ---------- | ------------------------------------------------ |
| `size`      | `'sm' \| 'md' \| 'lg'` | `'md'`     | Size preset                                      |
| `width`     | `number`                | --         | Custom width in px (overrides size)              |
| `height`    | `number`                | --         | Custom height in px (overrides size)             |
| `alt`       | `string`                | brand name | Accessible alt text                              |
| `loading`   | `'lazy' \| 'eager'`    | `'lazy'`   | Native loading strategy                          |
| `className` | `string`                | --         | CSS class(es)                                    |
| `style`     | `CSSProperties`         | --         | Inline styles (merged with `objectFit: contain`) |
| `...rest`   | `ImgHTMLAttributes`     | --         | Any standard `<img>` attribute                   |

## Brand Metadata

Each brand exports a `meta` object alongside the component:

```tsx
import { FerrariMeta } from 'react-car-logo';

console.log(FerrariMeta.title);   // "Ferrari"
console.log(FerrariMeta.country); // "Italy"
console.log(FerrariMeta.hex);     // "CD212A"
console.log(FerrariMeta.founded); // 1939
```

## Dynamic Rendering

For rendering logos from string keys:

```tsx
import * as CarLogos from 'react-car-logo/allLogos';

const brandName = 'Ferrari';
const Logo = CarLogos[brandName as keyof typeof CarLogos];
<Logo size="md" />;
```

## React Native

Use the metadata `pngUrl` with React Native's `Image`:

```tsx
import { Image } from 'react-native';
import { FerrariMeta } from 'react-car-logo';

<Image source={{ uri: FerrariMeta.pngUrl }} style={{ width: 160, height: 160 }} />;
```

## All 50 Brands

**Italian:** Ferrari, Lamborghini, Maserati, Alfa Romeo, Pagani, De Tomaso, Pininfarina, Dallara, Abarth, Italdesign

**German:** Porsche, BMW, Mercedes-AMG, Brabus, Audi, Maybach, RUF, Gumpert, Apollo

**British:** McLaren, Bentley, Rolls-Royce, Aston Martin, Lotus, Jaguar, Noble, TVR, Radical, Arash, Lister

**French:** Bugatti, Alpine

**American:** Shelby, Dodge, Chevrolet, Ford, Saleen, Hennessey, SSC, Mosler, Czinger, Glickenhaus

**Swedish:** Koenigsegg, Polestar

**Other:** Rimac (Croatia), Zenvo (Denmark), Spyker (Netherlands), W Motors (UAE), Lykan (UAE), Icona (Italy)

## Legal

All logos are trademarks of their respective owners. See [LEGAL.md](./LEGAL.md) for details.

## License

MIT (source code only). See [LICENSE](./LICENSE).
