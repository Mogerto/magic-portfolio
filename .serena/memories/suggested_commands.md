# Development Commands

## Essential Commands

### Development
- `npm run dev` - Start development server (default: http://localhost:3000)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint code linting
- `npm run export` - Export static site

### Installation
- `npm install` - Install all dependencies

## Common Workflow Commands

### Project Setup
```bash
git clone <repository-url>
cd my-portfolio
npm install
npm run dev
```

### Development Workflow
```bash
npm run dev      # Start dev server
npm run lint     # Check code quality
npm run build    # Test production build
```

### Deployment Preparation
```bash
npm run build    # Build for production
npm run start    # Test production build locally
npm run export   # Generate static export (if needed)
```

## System Commands (Linux)
- `ls -la` - List files with details
- `cd <directory>` - Change directory  
- `pwd` - Show current directory
- `grep -r "pattern" .` - Search for patterns in files
- `find . -name "*.tsx" -type f` - Find TypeScript React files
- `git status` - Check git status
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit changes
- `git push` - Push to remote repository