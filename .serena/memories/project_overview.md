# Project Overview: Magic Portfolio

## Purpose
Magic Portfolio is a modern, responsive portfolio website built with Next.js and Once UI. It's designed to showcase a developer's work, blog posts, and personal information. The template supports internationalization (i18n) and includes features like password-protected routes, MDX support for content, and customizable themes.

## Key Features
- **Modern Tech Stack**: Next.js 14+, React 18, TypeScript
- **Internationalization**: Supports multiple languages (EN/RU)
- **Once UI Design System**: Comprehensive component library
- **MDX Support**: Blog posts and project pages in Markdown with JSX
- **Password Protection**: Selective route protection
- **SEO Optimized**: Automatic open-graph and metadata generation
- **Responsive Design**: Optimized for all screen sizes
- **Dark/Light Theme**: Customizable design tokens

## Current Configuration
- **Base URL**: demo.magic-portfolio.com
- **Languages**: English (default), Russian
- **Theme**: Dark mode with emerald brand color
- **Active Routes**: Home (/), About (/about), Gallery (/gallery)
- **Disabled Routes**: Work (/work), Blog (/blog)
- **Protected Routes**: Some work projects are password-protected

## Project Structure
- `/src/app/` - Next.js 14 app router pages
- `/src/components/` - Custom React components
- `/src/once-ui/` - Design system and UI components
- `/src/app/resources/` - Configuration and content files
- `/messages/` - Internationalization content
- `/public/` - Static assets