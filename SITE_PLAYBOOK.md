# Georgia Pack & Load Site Playbook

This file is the durable design and implementation memory for every page that follows the approved homepage. New pages should feel like part of this exact site, not like separate templates.

## The approved visual source

- Master reference: `../outputs/georgia-pack-load-complete-homepage-v3.png`
- The reference controls composition, visual hierarchy, section rhythm, type scale, imagery style, and overall mood.
- Reference crops are for visual matching only. Never ship a crop taken from the full-page mockup as a production image; those small crops caused the pixelation that was fixed on the homepage.
- Production images must be high-resolution assets, ideally at least twice their largest CSS display size for Retina screens.

## Brand system

- Palette: cream `#f1eadb`, paper `#f8f2e7`, ink `#171816`, charcoal `#222321`, red `#c8262d`, muted gray `#6c6a63`.
- Use cream rather than pure white for major light sections. Dark sections are almost-black, not blue-black.
- Red is reserved for calls to action, route lines, small kickers, underlines, markers, and selected emphasis.
- Display typography: Bebas Neue (`--font-display`) for the huge poster-style headlines and numerals. Use Oswald (`--font-oswald`) for navigation, labels, buttons, and condensed supporting headings. Use Geist for body copy and Georgia italic for testimonials.
- Major display headings are very tall, tightly tracked, uppercase, and usually use `line-height: .82–.98`, negative letter spacing, and occasional vertical scaling. Do not replace them with ordinary bold sans-serif text.
- Texture is subtle: tiny radial-dot paper texture on cream and charcoal sections. Avoid gradients, glossy cards, rounded SaaS-style panels, and excessive shadows.

## Page composition

- Favor editorial, full-width horizontal bands with strong borders and deliberate asymmetry.
- The visual rhythm alternates cream, charcoal, red, photography, and structured grid sections.
- Use thin gray or red rules to organize content. Red route lines and outlined location dots are recurring visual motifs.
- Desktop layouts are intentionally poster-like and dense. Mobile stacks cleanly without losing the large type, call-first CTA, or image impact.
- Interactions stay restrained and premium: 2–3px button lifts, underline reveals, image zooms around 1.035–1.04, arrow slides, and smooth anchor scrolling. Never use bouncy or gimmicky animation.

## Image production method

The homepage became convincing only after replacing every low-resolution mockup crop with a restored HD production asset.

1. Start from the approved reference crop to preserve the exact subject, crop, color mood, and composition.
2. Use image restoration/generation in `precise-object-edit` mode, explicitly locking the composition and all important objects.
3. Ask for premium photorealistic commercial photography, believable material detail, and no captions or watermarks.
4. Preserve red shirts, black workwear, warm cardboard, white moving trucks, cream warmth, dark charcoal, and the Atlanta/Georgia setting.
5. Generate wide service assets near 2,000px wide. Generate portrait/square assets above 1,100px on the shorter side.
6. Save the master non-destructively, then make an optimized JPEG around quality 88 for the website. Keep final files to roughly 300–700KB when practical.
7. Use `object-fit: cover` and tune `object-position` to match the approved crop. Never stretch an image.
8. Inspect every crop live at desktop and mobile sizes before accepting it.

Current HD asset mapping:

- Hero trucks/Atlanta: `/images/hero-atlanta-hd.jpg` (1433×1098)
- Mover handoff: `/images/story-movers-hd.jpg` (1331×1182)
- Residential move: `/images/residential-hd.jpg` (2081×755)
- Commercial move: `/images/commercial-hd.jpg` (2073×759)
- Packing: `/images/packing-hd.jpg` (2062×763)
- Storage: `/images/storage-hd.jpg` (2081×756)
- Georgia route map: `/images/georgia-map-hd.jpg` (1129×1393)

The visual prompt pattern that worked:

> Restore and upscale this exact approved scene into a crisp, photorealistic high-resolution website image. Preserve the same subject placement, crop, camera angle, background, red/black/cream palette, and aspect ratio. Add believable fine detail only. No new objects, no captions, no watermark, no floating text.

Then add scene-specific invariants such as the exact trucks and Atlanta skyline, movers handing off a box, centered storage aisle, or mover using a tape dispenser.

## Conversion-first behavior

- The primary business action is a phone call. Use the canonical number `770-458-2510` and `tel:7704582510` everywhere.
- The header call button remains prominent on desktop. Mobile gets a persistent call action.
- Every major page should offer both paths: a strong call CTA and a working estimate form.
- Call copy should emphasize real people and low friction: “real move coordinator,” “no phone maze,” “no pressure,” and “no hidden fees.”
- Forms must validate, provide clear success states, preserve keyboard accessibility, and use straightforward fields. The homepage currently simulates successful submission; connect the same components to the chosen inbox/CRM before launch.
- Service and editorial links should naturally lead toward either the phone action or `#final-estimate`.

## Homepage corrections that must carry forward

- Match the approved mockup’s large display type; ordinary bold text looks wrong.
- Keep the “30+ Years Moving Georgia Forward” lockup large and balanced.
- The process route line must pass cleanly between Call and Plan, with visible ring markers, and the heading ends with a short red underline.
- Service names such as Long-distance, Commercial, Packing, and Storage must remain readable and never be hidden behind images or overlays.
- Use the official logo file without tinting, clipping, distortion, or faux color effects. Give the footer logo enough cream breathing room against black.
- Footer menus must sit fully inside the black footer band with generous top and bottom spacing.
- The Georgia map must use the crisp approved outline and route artwork, never a rough CSS polygon.
- The hero must preserve the three trucks on the road with the Atlanta skyline and Westin Peachtree Plaza composition.

## Build and QA checklist for every page

- Compare the live page side by side with its approved concept image.
- Confirm every raster asset has enough natural resolution for Retina display.
- Check desktop, tablet, and phone layouts; inspect image crops at each breakpoint.
- Verify navigation, phone links, anchor links, hover states, menu behavior, form validation, and success states.
- Check that large headlines do not wrap or clip unexpectedly.
- Check that footer content remains entirely on the black background.
- Run the production build and resolve all console errors and failed asset requests.
- Keep each completed page as a focused Git commit and refresh the source ZIP in `../outputs`.

## Implementation source of truth

- Shared fonts and metadata: `app/layout.tsx`
- Shared visual system and responsive behavior: `app/globals.css`
- Homepage components, calls, and forms: `app/page.tsx`
- Commit history documents the correction sequence from the first build through the HD image restoration.
