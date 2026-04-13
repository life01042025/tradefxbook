# Design Brief

## Direction

**TradeFXBook Premium Fintech** — A high-energy Forex trading journal SaaS landing page combining brutalist dark interfaces with striking neon green accents for maximum trader engagement.

## Tone

Futuristic fintech with luxury tech edge — bold neon-on-black aesthetic inspired by premium trading platforms like Bloomberg terminals, executed with modern glassmorphism and animated details.

## Differentiation

Aggressive neon green (#00ff88) on deep charcoal creates unmistakable trader appeal; paired with smooth micro-interactions and floating orb animations that reward exploration.

## Color Palette

| Token       | OKLCH        | Role                              |
| ----------- | ------------ | --------------------------------- |
| background  | 0.06 0.01 240 | Deep navy-black (dark only)      |
| foreground  | 0.93 0.01 240 | Off-white text                   |
| card        | 0.1 0.02 240  | Slightly elevated card surface   |
| primary     | 0.6 0.2 142   | Neon green accent & CTAs         |
| secondary   | 0.15 0.02 240 | Muted surface for dividers       |
| muted       | 0.15 0.02 240 | Subtle backgrounds & borders     |
| accent      | 0.6 0.2 142   | Glow, highlights, interactive    |
| destructive | 0.65 0.19 22  | Error/warning states             |

## Typography

- **Display**: General Sans 700–900 weight, tight tracking (letter-spacing: -0.02em) for headers, hero stats
- **Body**: Plus Jakarta Sans 400–500 weight, generous line-height (1.6–1.8) for readability
- **Mono**: Geist Mono for statistics, prices, trading metrics
- **Scale**: Hero `text-4xl/5xl`, H2 `text-2xl/3xl`, label `text-xs/sm`, body `text-base/lg`

## Elevation & Depth

Glassmorphism hierarchy via backdrop-blur and transparency layering: deepest backgrounds (0.06 L) → cards (0.1 L) → popovers (0.13 L). Neon green shadows provide accent elevation; no traditional drop shadows.

## Structural Zones

| Zone    | Background                | Border                    | Notes                              |
| ------- | ------------------------- | ------------------------- | ---------------------------------- |
| Header  | 0.1 L (card) + blur       | 1px rgba(0,255,136,0.1)  | Navbar blurs darker on scroll      |
| Content | 0.06 L (background)       | —                         | Alternating 0.08 L for sections   |
| Cards   | 0.1 L + 40% opacity       | 1px rgba(255,255,255,0.1) | Green border on featured cards     |
| Footer  | 0.08 L (darkest)          | 1px rgba(255,255,255,0.08) | Divider line                       |

## Spacing & Rhythm

Spacious rhythm with consistent 24px/32px section gaps. Micro-spacing (8px/12px) for component internals. Button padding: 12px 24px (sm) → 16px 32px (lg). Card gap: 16px grid.

## Component Patterns

- **Buttons**: Neon green fill (primary), transparent border + glow on hover, 8px radius, 600 font weight
- **Cards**: 8px border-radius, 40% card background opacity, 1px border, glow-green-hover on hover, translateY(-4px)
- **Badges**: 4px radius, accent color with text-accent, 500 weight
- **Inputs**: 8px radius, 0.22 L background, accent ring on focus

## Motion

- **Entrance**: Fade-in-up (opacity 0→1, translateY 12px→0) over 0.6s on scroll
- **Hover**: Card lift (translateY -4px) + enhanced glow (0 0 30px rgba(0,255,136,0.4)), 0.3s smooth easing
- **Decorative**: Floating orbs (3s cycle), pulsing glow on featured elements, count-up animations on stats scroll-into-view

## Constraints

- No full-page gradients; only accent gradient text on headings
- Green glow only via box-shadow, never filters
- Limit animations to entrance, hover, and floating orbs — no bouncy animations
- Glassmorphic cards require backdrop-blur for legitimacy

## Signature Detail

Neon green glow shadows paired with floating animation orbs in hero create instantly recognizable "premium trading dashboard" aesthetic without gaudy gradients.
