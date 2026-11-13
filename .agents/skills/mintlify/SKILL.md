---
name: mintlify
description: Write and maintain this repo's documentation in docs/ (MDX). Use when creating docs pages, configuring navigation, adding components, or setting up API references.
license: MIT
compatibility: Requires Node.js for the docs CLI. Works with any Git-based workflow.
metadata:
  version: "1.0"
---

# Documentation best practices

This repo's documentation lives under `docs/` as MDX files, with `docs.json` at the docs root holding site-wide settings (navigation, theme, links, API specs). The pages render with an MDX-based docs toolchain, so content is MDX with YAML frontmatter and favors built-in components over custom ones.

When a component, configuration key, or CLI flag is not covered here, check the docs toolchain's own reference before guessing, and prefer the current reference over whatever is in your training data.

## Before you write

### Understand the project

Read `docs.json` in the docs root. This file defines the entire site: navigation structure, theme, colors, links, API and specs.

Understanding the project tells you:

- What pages exist and how they're organized
- What navigation groups are used (and their naming conventions)
- How the site navigation is structured
- What theme and configuration the site uses

### Check for existing content

Search the docs before creating new pages. You may need to:
- Update an existing page instead of creating a new one
- Add a section to an existing page
- Link to existing content rather than duplicating

### Read surrounding content

Before writing, read 2-3 similar pages to understand the site's voice, structure, formatting conventions, and level of detail.

### Understand the components

Review the components the docs toolchain ships and reuse the ones already used across `docs/` before reaching for a custom component.

## Quick reference

### CLI commands
- `npm i -g mint` - Install the docs CLI
- `mint dev` - Local preview at localhost:3000
- `mint broken-links` - Check internal links
- `mint a11y` - Check for accessibility issues in content
- `mint validate` - Validate documentation builds

### Required files
- `docs.json` - Site configuration (navigation, theme, integrations, etc.)
- `*.mdx` files - Documentation pages with YAML frontmatter

### Example file structure
```
docs/
├── docs.json           # Site configuration
├── introduction.mdx
├── quickstart.mdx
├── guides/
│   └── example.mdx
├── openapi.yml         # API specification
├── images/             # Static assets
│   └── example.png
└── snippets/           # Reusable components
    └── component.jsx
```

## Page frontmatter

Every page requires `title` in its frontmatter. Include `description` for SEO and navigation.

```yaml
---
title: "Clear, descriptive title"
description: "Concise summary for SEO and navigation."
---
```

Optional frontmatter fields:
- `sidebarTitle`: Short title for sidebar navigation.
- `icon`: Lucide or Font Awesome icon name, URL, or file path.
- `tag`: Label next to the page title in the sidebar (for example, "NEW").
- `mode`: Page layout mode (`default`, `wide`, `custom`).
- `keywords`: Array of terms related to the page content for local search and SEO.
- Any custom YAML fields for use with personalization or conditional content.

## File conventions

- Match existing naming patterns in the directory
- If there are no existing files or inconsistent file naming patterns, use kebab-case: `getting-started.mdx`, `api-reference.mdx`
- Use root-relative paths without file extensions for internal links: `/getting-started/quickstart`
- Do not use relative paths (`../`) or absolute URLs for internal pages
- When you create a new page, add it to `docs.json` navigation or it won't appear in the sidebar

## Organize content

When a question is about site-wide configuration, start from the global settings in `docs.json`. See if a setting there can achieve what is wanted before adding anything custom.

### Navigation

The `navigation` property in `docs.json` controls site structure. Choose one primary pattern at the root level, then nest others within it.

**Choose your primary pattern:**

| Pattern | When to use |
|---------|-------------|
| **Groups** | Default. Single audience, straightforward hierarchy |
| **Tabs** | Distinct sections with different audiences (Guides vs API Reference) or content types |
| **Anchors** | Want persistent section links at sidebar top. Good for separating docs from external resources |
| **Dropdowns** | Multiple doc sections users switch between, but not distinct enough for tabs |
| **Products** | Multiple products with separate documentation per product |
| **Versions** | Maintaining docs for multiple API/product versions simultaneously |
| **Languages** | Localized content |

**Within your primary pattern:**

- **Groups** - Organize related pages. Can nest groups within groups, but keep hierarchy shallow
- **Menus** - Add dropdown navigation within tabs for quick jumps to specific pages
- **`expanded: false`** - Collapse nested groups by default. Use for reference sections users browse selectively
- **`openapi`** - Auto-generate pages from OpenAPI spec. Add at group/tab level to inherit

**Common combinations:**
- Tabs containing groups (most common for docs with API reference)
- Products containing tabs (multi-product setups)
- Versions containing tabs (versioned API docs)
- Anchors containing groups (simple docs with external resource links)

### Links and paths

- **Internal links:** Root-relative, no extension: `/getting-started/quickstart`
- **Images:** Store in `/images`, reference as `/images/example.png`
- **External links:** Use full URLs, they open in new tabs automatically

## Customize docs sites

**What to customize where:**
- **Brand colors, fonts, logo** → `docs.json`
- **Component styling, layout tweaks** → `custom.css` at the docs root
- **Dark mode** → Enabled by default. Only disable with `"appearance": "light"` in `docs.json` if the brand requires it

Start with `docs.json`. Only add `custom.css` when you need styling that config doesn't support.

## Write content

### Components

The components the toolchain ships are grouped by purpose: structure content, draw attention, show/hide content, document APIs, link to pages, and add visual context. Pick the one that fits the need.

**Common decision points:**

| Need | Use |
|------|-----|
| Hide optional details | `<Accordion>` |
| Long code examples | `<Expandable>` |
| User chooses one option | `<Tabs>` |
| Linked navigation cards | `<Card>` in `<Columns>` |
| Sequential instructions | `<Steps>` |
| Code in multiple languages | `<CodeGroup>` |
| API parameters | `<ParamField>` |
| API response fields | `<ResponseField>` |

**Callouts by severity:**
- `<Note>` - Supplementary info, safe to skip
- `<Info>` - Helpful context such as permissions
- `<Tip>` - Recommendations or best practices
- `<Warning>` - Potentially destructive actions
- `<Check>` - Success confirmation

### Reusable content

**When to use snippets:**
- Exact content appears on more than one page
- Complex components you want to maintain in one place
- Shared content across teams/repos

**When NOT to use snippets:**
- Slight variations needed per page (leads to complex props)

Import snippets with `import { Component } from "/path/to/snippet-name.jsx"`.

## Writing standards

### Voice and structure

- Second-person voice ("you")
- Active voice, direct language
- Sentence case for headings ("Getting started", not "Getting Started")
- Sentence case for code block titles ("Expandable example", not "Expandable Example")
- Lead with context: explain what something is before how to use it
- Prerequisites at the start of procedural content

### What to avoid

**Never use:**
- Marketing language ("powerful", "seamless", "robust", "cutting-edge")
- Filler phrases ("it's important to note", "in order to")
- Excessive conjunctions ("moreover", "furthermore", "additionally")
- Editorializing ("obviously", "simply", "just", "easily")

**Watch for AI-typical patterns:**
- Overly formal or stilted phrasing
- Unnecessary repetition of concepts
- Generic introductions that don't add value
- Concluding summaries that restate what was just said

### Formatting

- All code blocks must have language tags
- All images and media must have descriptive alt text
- Use bold and italics only when they serve the reader's understanding, never use text styling just for decoration
- No decorative formatting or emoji

### Code examples

- Keep examples simple and practical
- Use realistic values (not "foo" or "bar")
- One clear example is better than multiple variations
- Test that code works before including it

## Document APIs

**Choose your approach:**
- **Have an OpenAPI spec?** → Add to `docs.json` with `"openapi": ["openapi.yaml"]`. Pages auto-generate. Reference in navigation as `GET /endpoint`
- **No spec?** → Write endpoints manually with `api: "POST /users"` in frontmatter. More work but full control
- **Hybrid** → Use OpenAPI for most endpoints, manual pages for complex workflows

Prefer generating endpoint pages from an OpenAPI spec. It is the most efficient and easiest to maintain option.

## Deploy

The docs deploy automatically when changes are pushed to the connected Git repository.

**What agents can configure:**
- **Redirects** → Add to `docs.json` with `"redirects": [{"source": "/old", "destination": "/new"}]`
- **SEO indexing** → Control with `"seo": {"indexing": "all"}` to include hidden pages in search

**Requires dashboard setup (human task):**
- Custom domains and subdomains
- Preview deployment settings
- DNS configuration

For `/docs` subpath hosting with Vercel or Cloudflare, agents can help configure rewrite rules.

## Workflow

### 1. Understand the task

Identify what needs to be documented, which pages are affected, and what the reader should accomplish afterward. If any of these are unclear, ask.

### 2. Research

- Read `docs.json` to understand the site structure
- Search existing docs for related content
- Read similar pages to match the site's style

### 3. Plan

- Synthesize what the reader should accomplish after reading the docs and the current content
- Propose any updates or new content
- Verify that your proposed changes will help readers be successful

### 4. Write

- Start with the most important information
- Keep sections focused and scannable
- Use components appropriately (don't overuse them)
- Mark anything uncertain with a TODO comment:

```mdx
{/* TODO: Verify the default timeout value */}
```

### 5. Update navigation

If you created a new page, add it to the appropriate group in `docs.json`.

### 6. Verify

Before submitting:

- [ ] Frontmatter includes title and description
- [ ] All code blocks have language tags
- [ ] Internal links use root-relative paths without file extensions
- [ ] New pages are added to `docs.json` navigation
- [ ] Content matches the style of surrounding pages
- [ ] No marketing language or filler phrases
- [ ] TODOs are clearly marked for anything uncertain
- [ ] Run `mint broken-links` to check links
- [ ] Run `mint validate` to find any errors

## Edge cases

### Migrations

When importing docs from another platform (for example ReadMe or Docusaurus), convert the content to MDX pages using the components described here. A scraping CLI can bootstrap the conversion; otherwise convert the pages manually.

### Hidden pages

Any page that is not included in the `docs.json` navigation is hidden. Use hidden pages for content that should be accessible by URL or indexed for the assistant or search, but not discoverable through the sidebar navigation.

### Exclude pages

The `.mintignore` file is used to exclude files from the docs repository from being processed.

## Common gotchas

1. **Component imports** - JSX components need explicit import, MDX components don't
2. **Frontmatter required** - Every MDX file needs `title` at minimum
3. **Code block language** - Always specify language identifier
4. **Never use `mint.json`** - `mint.json` is deprecated. Only ever use `docs.json`
