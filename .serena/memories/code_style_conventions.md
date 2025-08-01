# Code Style and Conventions

## TypeScript Configuration
- **Strict mode**: Disabled (strict: false) but strictNullChecks enabled
- **Module system**: ESNext with bundler resolution
- **JSX**: Preserve mode for Next.js processing
- **Path mapping**: `@/*` maps to `./src/*`

## File Structure Conventions
- **Components**: Use PascalCase for component files (e.g., `Header.tsx`)
- **Pages**: Use kebab-case or camelCase (Next.js app router)
- **Utilities**: Use camelCase (e.g., `formatDate.ts`)
- **Types**: Define interfaces with PascalCase names
- **Config**: Use `.js` for configuration files when not requiring types

## Component Patterns
- **Default exports** for React components
- **Named exports** for utilities and types
- **Props interfaces** with PascalCase naming (e.g., `HeaderProps`)
- **Functional components** with TypeScript
- **React hooks** following React conventions (useState, useEffect, etc.)

## Import/Export Style
```typescript
// Named imports for utilities
import { formatDate } from '@/app/utils/formatDate';

// Default imports for components
import Header from '@/components/Header';

// Once UI components
import { Flex, Text, Button } from '@/once-ui/components';
```

## CSS and Styling
- **Sass/SCSS** for stylesheets
- **CSS Modules** pattern implied by component structure
- **PostCSS** for modern CSS features
- **Once UI tokens** for consistent design system
- **Responsive design** with mobile-first approach

## Content Conventions
- **MDX files** for blog posts and projects
- **YAML frontmatter** for metadata
- **Internationalization** keys in lowercase with dots (e.g., `about.title`)
- **Image assets** in `/public/images/`
- **Content configuration** in `/src/app/resources/`