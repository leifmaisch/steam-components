# steam-components

React components for Steam-style badges and levels.

**[Demo](https://steam-components.pages.dev)**

## Components

- **Premier Badge** — CS2 Premier rating (1000–30,000+)
- **Steam Level** — Steam account level
- **FACEIT Level** — FACEIT skill level

## Examples

```tsx
import { PremierBadge } from "@/components/premier-badge"
import { SteamLevel } from "@/components/steam-level"
import { FaceitLevel } from "@/components/faceit-level"

<PremierBadge rating={14999} size="lg" />
<SteamLevel level={42} size="md" />
<FaceitLevel level={7} size="sm" />
```

All components accept `size`: `"sm"` | `"md"` | `"lg"`.

## Setup

```bash
pnpm install
pnpm dev
```
