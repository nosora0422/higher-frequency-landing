# Project Brief — Higher Frequency Brand Identity & Landing Page

## 1. Project Summary
Higher Frequency is a Shopify-native affiliate marketplace for creators. Its core promise: the moment a shopper clicks a creator's link, that sale is locked to the creator in an independent, tamper-proof record — no browser extension, cookie-stuffer, or brand can quietly reroute the credit and commission afterward. This is a direct response to well-known creator-commission theft by tools like Honey and Phia.

This engagement is **not a rebuild**. The existing site runs on the "Field Trip" template ("Higher Frequency" theme variant), and the template's fonts and structural bones are considered acceptable. The scope is a **visual identity refresh** — name, color system, imagery, and core brand assets — applied to a **single landing page**, rebuilt to match an approved Figma design **pixel-for-pixel**, with the section layout and order locked as-is.

## 2. Problem Statement
The current live builds (Field Trip template, current Higher Frequency site) are visually noisy and don't communicate the product's core logic — that clicks are cryptographically/structurally locked to the creator, permanently. Visual busyness is undercutting a message that should read as simple, confident, and final.

## 3. Target User
**Who she is:** A fashion/beauty/lifestyle creator with a strong online presence, North America (US/Canada). Not necessarily "high-end," but savvy, sharp, and has an audience.

**Where her head is at:** She has spent years being underpaid on affiliate commissions and has stopped accepting it as normal. She's seen the Honey and Phia news cycles and recognized her own experience in them — she already knows she's been ripped off; she doesn't need to be convinced of the problem.

**What she needs from this page:** Proof, not a pitch. Her reaction should be *"finally, someone gets it and did something about it,"* not *"here's another platform asking me to sign up for something."* The page needs to read as a **statement/vindication + a mechanism that fixes it**, not a SaaS marketing funnel and not a cutesy rewards-app aesthetic.

## 4. Brand Tone Targets
- **Feels like:** proof + payback, structural fix, confidence, clarity.
- **Does NOT feel like:** a cute rewards app, a corporate dashboard, another platform asking for a signup.
- **Visual register cues from references:**
  - [ShopLTK](https://www.shopltk.com/) / [ShopLTK company site](https://company.shopltk.com/en/company) — polished creator-commerce visual language, credible without being corporate.
  - [Field Trip](https://www.withfieldtrip.com/) — current structural/template baseline.
  - [Current Higher Frequency site](https://funny-marzipan-63edfe.netlify.app/) — what to move away from visually (too busy, concept not legible).

## 5. Deliverable
One landing page, implemented in front-end code (HTML/CSS or the project's existing stack — TBD once repo/template source is available), built from the Figma file:
- **Figma source:** [Field Trip file, node 69-234](https://www.figma.com/design/bql7kA4JvU9SeyRhQnpbMs/Field-Trip?node-id=69-234&t=bCxEa5smQtUPNw7Z-1)

## 6. Hard Constraints
1. **Do not change section layout or order.** The sequence of sections from the Figma design is locked.
2. **Pixel-perfect conversion.** Spacing, type scale, imagery placement, and proportions should match the Figma design as closely as code allows.
3. Font and overall page "bones" (structure inherited from the Field Trip/Higher Frequency template) stay — this is a refresh, not a rearchitecture.
4. Market: North America (US, Canada) — copy, imagery, and any locale-specific details should assume this audience.

## 7. Open Items / Next Steps
- [ ] Confirm access to the Figma file (authenticate Figma MCP) and pull exact section-by-section design context (spacing, color tokens, type, image assets) before writing code.
- [ ] Confirm the target tech stack / where this page will live (is there an existing Shopify theme repo to drop this into, or is this a standalone static page for now?). This project folder is currently empty, so no existing codebase to extend.
- [ ] Confirm final color palette and any locked brand assets (logo, wordmark, icon set) vs. what needs to be designed as part of this refresh.
- [ ] Confirm copywriting: is final section copy coming from the Figma file directly, or does it need to be drafted/adapted?
- [ ] Identify image/photography assets referenced in the Figma design and confirm sourcing (stock, provided, or to be generated).

## 8. Working Approach
1. Load Figma design context for the specified node via the Figma MCP tools (`figma-design-to-code` skill) to extract exact sections, spacing, type, and colors.
2. Scaffold the single landing page section-by-section, preserving the Figma order exactly.
3. Apply the refreshed color system / imagery per the identity refresh, keeping template fonts/structure.
4. Review against the Figma frame side-by-side for pixel accuracy before calling it done.
