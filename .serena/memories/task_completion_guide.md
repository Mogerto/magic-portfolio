# Task Completion Checklist

## When a development task is completed, always run:

### 1. Code Quality Checks
```bash
npm run lint
```
- Fix any ESLint errors or warnings
- Ensure TypeScript compiles without errors

### 2. Build Verification  
```bash
npm run build
```
- Verify production build succeeds
- Check for any build-time errors
- Ensure all imports and dependencies resolve correctly

### 3. Testing (if applicable)
- Manual testing in development mode (`npm run dev`)
- Test on different screen sizes for responsive design
- Verify internationalization works (if content was changed)
- Test any password-protected routes if modified

### 4. Content Validation
- If MDX content was added/modified, verify it renders correctly
- Check metadata and SEO tags are properly generated
- Verify images load correctly and paths are valid

### 5. Configuration Review
- If config files were modified, ensure they're valid JavaScript/JSON
- Check that routing configuration is correct
- Verify any new environment variables are documented

### 6. Git Workflow (if applicable)
```bash
git add .
git commit -m "descriptive commit message"
git push
```

### 7. Documentation
- Update README.md if new features were added
- Add comments for complex functionality
- Update type definitions if APIs changed

## Pre-deployment Checklist
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes
- [ ] All routes load correctly
- [ ] Responsive design works
- [ ] SEO metadata is correct
- [ ] Images and assets load properly
- [ ] Internationalization works (if applicable)