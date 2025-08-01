# Project Architecture and Key Directories

## Main Directory Structure

### `/src/app/` - Next.js App Router
- **`[locale]/`** - Internationalized pages
  - `page.tsx` - Homepage
  - `about/page.tsx` - About page  
  - `work/page.tsx` - Work portfolio (currently disabled)
  - `blog/page.tsx` - Blog posts (currently disabled)
  - `gallery/page.tsx` - Image gallery
  - `layout.tsx` - Root layout with fonts and metadata

### `/src/components/` - Custom Components
- **`blog/`** - Blog-related components (Post, Posts)
- **`work/`** - Portfolio project components (Projects)
- **`about/`** - About page components (TableOfContents)
- **`gallery/`** - Gallery components (MasonryGrid)
- Core components: Header, Footer, RouteGuard, etc.

### `/src/once-ui/` - Design System
- **`components/`** - UI component library (Button, Text, Flex, etc.)
- **`styles/`** - Global styles and CSS tokens
- **`tokens/`** - Design tokens (colors, spacing, typography)
- **`modules/`** - Specialized modules (CodeBlock, etc.)

### `/src/app/resources/` - Configuration & Content
- **`config.js`** - Main site configuration
- **`content.js`** - Site content and data
- **`content-i18n.js`** - Internationalized content
- **`renderContent.js`** - Content rendering utilities

### `/messages/` - Internationalization
- Language-specific translation files
- Currently supports EN and RU locales

### `/public/` - Static Assets
- **`images/`** - Image assets
- Favicon and other static files

## Key Architectural Patterns

### Next.js App Router (v14+)
- File-based routing with `[locale]` dynamic segments
- Server and client components
- Automatic code splitting and optimization

### Once UI Design System
- Comprehensive component library
- Consistent design tokens
- TypeScript interfaces for props

### Internationalization (i18n)
- `next-intl` for translations
- Locale-based routing
- Centralized content management

### Content Management
- MDX for rich content (blog posts, projects)
- YAML frontmatter for metadata
- Git-based content workflow