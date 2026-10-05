---
name: DotDash merchant web
description: Clean, confident merchant ownership through a product-led visual system.
colors:
  blue: "#2453f5"
  blue-hover: "#1640cc"
  ink: "#171918"
  muted: "#565b59"
  yellow: "#f1f47a"
  yellow-hover: "#e5e958"
  paper: "#fff"
  line: "#dfe2df"
  featured: "#eef1ff"
  outline-hover: "#eef1fa"
typography:
  display:
    fontFamily: "Manrope, Noto Sans Thai, sans-serif"
    fontSize: "clamp(3rem,5.2vw,5rem)"
    fontWeight: 800
    lineHeight: 1.13
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Manrope, Noto Sans Thai, sans-serif"
    fontSize: "clamp(2.1rem,3.5vw,3.4rem)"
    fontWeight: 800
    lineHeight: 1.13
    letterSpacing: "-.035em"
  title:
    fontFamily: "Manrope, Noto Sans Thai, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1.13
    letterSpacing: "-.025em"
  body:
    fontFamily: "Manrope, Noto Sans Thai, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  action:
    fontFamily: "Manrope, Noto Sans Thai, sans-serif"
    fontSize: ".95rem"
    fontWeight: 700
    lineHeight: 1.6
  metadata:
    fontFamily: "Manrope, Noto Sans Thai, sans-serif"
    fontSize: ".75rem"
    lineHeight: 1.6
rounded:
  badge: "4px"
  field: "5px"
  control: "8px"
  panel: "12px"
  stage: "16px"
spacing:
  compact: "8px"
  field: "12px"
  small: "16px"
  medium: "24px"
  large: "32px"
  grid: "40px"
  mobile-gutter: "24px"
  desktop-gutter: "56px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "15px 27px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.blue-hover}"
  button-small:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "10px 20px"
    height: "44px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "15px 27px"
  button-outline-hover:
    backgroundColor: "{colors.outline-hover}"
    textColor: "{colors.blue}"
  button-light:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "15px 27px"
  button-light-hover:
    backgroundColor: "{colors.yellow-hover}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "15px 27px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "10px 12px"
  channel-tag:
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "6px 12px"
  calculator:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "32px"
  featured-plan:
    backgroundColor: "{colors.featured}"
    textColor: "{colors.ink}"
    padding: "32px"
---

# Design System: DotDash merchant web

## Overview

**Creative North Star: "Contemporary restaurant brand operations"**

A clean, confident, product-led system makes merchant ownership tangible. White space and near-black Manrope typography carry the sales message; electric blue supplies actions and selected states; citrus yellow makes customer relationships feel visible and approachable.

Real restaurant photography sits inside clearly labeled illustrative product views. Rounded interface panels, restrained borders and selective ambient shadows give the product enough substance to inspect without turning the entire page into floating cards. English and Thai share a single visual identity with explicit Thai typography adjustments.

**Key Characteristics:**
- Bold balanced headings and quiet supporting text.
- Blue actions, yellow relationship surfaces and generous white intervals.
- Real food photography with honest mockup captions.
- Flat information surfaces with soft depth for product illustrations.

Source: `styles.css`, `index.html`, `app.js` and `assets/fonts.css`; approved direction recorded in `BRIEF.md`. This system is scoped to the merchant web artifact, not the surrounding strategy vault.

## Colors

The palette combines vivid blue and citrus yellow with warm near-black text and light neutral dividers. Frontmatter holds the normative color values; contextual one-off illustration colors stay in source.

### Primary
- **Electric Blue** (`blue`): primary actions, selected ordering tabs, inline headline emphasis, benefit icons, savings results and the savings section background.
- **Deep Action Blue** (`blue-hover`): primary button hover.

### Secondary
- **Citrus Yellow** (`yellow`): loyalty panels, ownership and closing bands, selection highlighting and the light button variant.
- **Pressed Citrus** (`yellow-hover`): light button hover.

### Neutral
- **Near-black Ink** (`ink`): headings, brand mark text and the dark relationship section.
- **Supporting Gray** (`muted`): body paragraphs and explanatory metadata.
- **White Paper** (`paper`): page, controls and product surfaces.
- **Quiet Divider** (`line`): section rules, tabs, tags and plan separators.
- **Featured Blue Wash** (`featured`): emphasized pricing surface.
- **Outline Hover Wash** (`outline-hover`): secondary action hover.

**The Action and Relationship Rule.** Blue signals action or selection; yellow carries customer relationship emphasis. Both can form full-width bands where the shipped surface uses them.

## Typography

**Display and Body Font:** Manrope, followed by Noto Sans Thai and sans-serif. Local font files provide weights 400–800 for each family.

**Character:** Compact, strong headings contrast with relaxed body leading. Thai uses the same weight structure with more vertical room and less negative tracking.

### Hierarchy
- **Display:** frontmatter display role for the English hero; large screens above 1450px use 5.1rem. At 1100px and below the base heading becomes 3.6rem; at 800px and below the hero uses `clamp(2.7rem,8.6vw,4.5rem)`.
- **Headline:** frontmatter headline role for section headings; balanced text wrapping.
- **Title:** frontmatter title role for capability and launch headings. Product mockups and plan headings have contextual larger title variants.
- **Body:** frontmatter body role. Supporting text is typically .9–1.1rem; hero description uses 1.7 leading and a 420px desktop measure.
- **Action:** frontmatter action role; small buttons use .85rem.
- **Metadata:** frontmatter metadata role for assumptions, captions, form explanations and compact interface annotations. Smaller metadata remains .75rem on mobile.
- **Numeric emphasis:** plan prices and calculator outputs use weight 800 and tabular numerals; display sizes range from 2rem to 2.7rem by context.

**The Thai Breathing Room Rule.** Thai h1 uses `clamp(2.5rem,4.1vw,4rem)`, 1.35 leading and -.02em tracking; Thai h2 also uses 1.35 leading and -.02em tracking. Below 800px Thai h1 uses `clamp(2.25rem,6.7vw,3.8rem)`.

## Layout

The centered container is capped at 1320px including gutters. Desktop horizontal gutters use the frontmatter desktop-gutter; below 1100px they become 32px, below 800px mobile-gutter. Main sections use the section spacing vertically, reducing to 70px below 800px and 60px below 520px; colored bands have their own tighter intervals.

Desktop uses adjacent copy and product columns, three-column capability and launch grids, and a joined three-column plan container. At 800px the hero, relationship, savings and plans stack. Capability and launch grids stack at 520px. The desktop navigation becomes a visible mobile menu control at 800px; its expanded panel sits immediately beneath the 76px mobile header. Desktop header height is 96px.

Spacing follows the extracted compact-to-large steps; editorial grid gaps intentionally vary with content rather than obeying an invented universal grid. Product illustrations retain their overlapping relationship panel on mobile, with their width and inset reduced to fit.

## Elevation & Depth

Most information is flat, separated through tone, whitespace and fine borders. The storefront and customer illustration alone use ambient resting shadows. Buttons gain a neutral shadow on hover; the dark and yellow button variants inherit the same ambient hover treatment.

### Shadow Vocabulary
- **Action hover:** `0 6px 16px #0000001a`.
- **Storefront illustration:** `0 16px 32px #17235612`.
- **Customer illustration:** `0 12px 24px #27280b15`.

**The Flat Information Rule.** Pricing, capabilities and FAQ depend on rules and tonal surfaces; illustration shadows communicate layering rather than becoming the default card style.

The product illustration arrives over .7s with `cubic-bezier(.16,1,.3,1)`, removing a 12% bottom clip and 3px blur. Reduced-motion preference removes this animation and transitions and disables smooth scrolling.

## Shapes

Controls have gently curved corners; field and tag corners are tighter. Joined plan surfaces and product cards share the panel radius, while the illustrative stage uses the larger stage radius. Membership badges use the small badge radius. Circular avatars, reward stamps and small action marks provide the limited round geometry visible in the build. Thin dividers are generally 1px; selected tabs and launch-step tops use 2px accent rules.

## Components

### Buttons

Confident, compact actions with solid fills. Primary buttons use the frontmatter primitive; the small header variant is shorter. Outline, yellow and dark variants retain the same basic form. Hover changes fill and adds the action shadow over .2s. Outline hover changes its border and text to blue. Every interactive control has a 3px blue focus outline offset by 5px.

### Chips

Channel tags are informational, not filter controls: transparent background, fine divider border, field radius and compact padding. They wrap as a group on narrow widths.

### Cards / Containers

Joined pricing panels use 32px internal padding and divider borders; the featured tier receives the featured wash. Below 800px panels stack with horizontal separators, and padding becomes 30px. The calculator is a white panel with 32px padding, dropping to 24px at 520px. Illustrative product surfaces use the ambient shadows above; the yellow reward example tilts -2deg, reduced to -1deg below 520px.

### Inputs / Fields

White fields have 1px gray borders, field corners and the input primitive's padding. Labels use .8–.85rem with weight 700; calculator labels use .75rem on narrow screens. The slider uses the blue accent with a 28px interaction height. Focus inherits the global outline; native form validity supplies validation behavior.

### Navigation

White sticky header with a fine bottom divider. Desktop links use .9rem and weight 600, shifting to blue on hover. Language options remain visible, with the active language bold and near-black. Mobile expands the links in a vertical white panel; the language switch updates copy without changing the palette or layout model.

### Product Illustrations and Disclosure

Actual food imagery is cropped with `object-fit: cover`; interface content and sample identity remain explicitly illustrative. Product metadata and the visible caption share the metadata role. FAQ and free-plan disclosures use thin rules, clear bold summaries and a plus/minus affordance with a generous focus outline.

## Do's and Don'ts

### Do:
- **Do** use blue for action and selection, and yellow for relationship emphasis.
- **Do** preserve Thai breathing room and the visible language switch.
- **Do** keep metadata at the shipped .75rem minimum and maintain explicit assumptions.
- **Do** retain photograph provenance and label illustrative product views.
- **Do** use ambient depth for layered product views and dividers for information.

### Don't:
- **Don't** turn the illustrative customer data into testimonial or performance evidence.
- **Don't** remove focus outlines or reduced-motion behavior.
- **Don't** promote one-off illustration colors into new global brand accents.

Not canonized: no observed craft-floor defect is promoted into a rule. The pending sales contact is a functional limitation recorded in the brief, not a reusable component behavior or design-system norm; no UI repair is part of this documentation pass.

## Supplied branding and temporary delivery reference

Header and footer use the user-supplied DotDash logo, preserving its colors and proportions. A CSS viewport displays only the original artwork bounds within its white canvas. The delivery row uses two columns on desktop and one on mobile, with an explicitly attributed temporary Owner.com tracking image. See GRAPHIC-BRIEF.md for replacement instructions.

Logo display refined to 145px desktop and 125px mobile. Hero and loyalty now use attributed temporary Owner.com references; delivery provider marks identify the first providers (GrabExpress, Lalamove), with Skootar labeled coming next.

Pilot section: restrained editorial rows, three launch steps, and a definition list of adoption measures. Uses existing colors, typography and responsive spacing. Introduction bookings link directly to Calendly; booking does not enroll the merchant.

Merchant proof: a compact named logo strip follows the hero. An owner-story section follows the pilot, with three portrait videos, native controls and no autoplay. Original source marks keep their colors. Mobile wraps logos and stacks videos.

Partner ticker: three-row viewport, two columns, a 40-second upward loop with soft edge fades. Accessible canonical list is read once; visual duplicates are hidden from assistive technology. Pause/resume and reduced-motion static layout are supported.

## Consolidated pilot and partner terminology
The early pilot section is merged into the final yellow invitation: one headline, three brief steps, plan/fee note, booking CTA and pricing link. The existing #pilot links now reach this closing section; #demo remains an alias within it. User-facing copy uses Partner rather than merchant, including Thai partner labels.

Partner wall revised per user: logos only, complete supplied 28-mark deck set, five columns/two visible rows on desktop and four columns on smaller screens. Vertical loop, pause control, accessible logo alternative text and reduced-motion static grid retained.

Partner quality correction: replace all motion-deck thumbnails with original Figma image fills (320–2048px). Remove the visible Pause logos button per user request. Retain hover pause, automatic offscreen/background pause and the reduced-motion static grid.

Pricing notes and plan-details accordion now fill the shared content container, aligned with the pricing cards. Expanded detail text uses the same width. Responsive page gutters retained.

## Logo-derived palette update
The supplied original logo was quantized to identify its violet (#6c6bf8) and warm yellow (#fdd83c) hues. Primary UI violet is #6254df, a darker companion for white foreground contrast (5.45:1). Secondary yellow is #fdd83c with near-black ink (12.67:1). Hover violet is #4939b5; highlighted-plan surfaces use lavender #f1edff. Existing legacy blue/yellow variables alias the new semantic primary/secondary tokens. Apply across navigation, buttons, headings, links, calculator, featured plan, secondary bands and favicon. Partner and provider logos retain original colors.

Owner stories relocated immediately before the FAQ, after plan details, per user request. Existing section anchor, videos and translated summaries remain intact.

Plan details → owner stories gap reduced: 40px bottom/top padding on desktop (80px combined), 24px each on mobile/tablet (48px combined).

A subtle 1px divider between plan details and owner stories follows the shared responsive content gutters.
