# DotDash merchant sales page

English-first with Thai. Static landing page with complete plan and CRM comparisons, POS/app add-ons, operating terms, and an interactive plan builder.

## Pricing authority

Updated from the user-designated public rate card: https://factsblend-inc.github.io/dotdash-pricing/ . Source labels its prices September 2026; retrieved 3 October 2026. It supersedes the earlier vault pricing for this landing page only. Public customer-facing detail was imported; password-protected staff notes were not accessed.

## Preview

Run `python3 -m http.server 4173` in this folder.

## Sales contact

Introduction links point to the configured DotDash Calendly booking page. Paage was a visual reference, never a contact destination.

## Pricing calculations

Entry: 990, 1 branch only. Growth: 2350 + 990 × max(0, branches − 2). Pro: 4320 + 990 × max(0, branches − 4). GP charge: min(10% online GMV, branch-adjusted base); add-ons remain separate. Annual fixed billing reduces recurring services by 10%. App setup is separately charged and never discounted. Payment fees are excluded because the source states 0.35%+ and 1.65%+ without specifying the full rate by payment method.

Advanced CRM: 1290 + 290 × extra seats beyond 2 + 290 × extra 1000-credit packs, per account. Meri PoS: 250 per actual branch; Stock: 300; Crew: 500. Stock/Crew require Meri PoS. Entry/Growth app: 1490 per account plus 25000 setup. Pro app included with no setup. Annual billing cannot use GP.

Business context: [[Positioning]] · [[Revenue Model & Pricing]] · [[DotDash MOC]]
