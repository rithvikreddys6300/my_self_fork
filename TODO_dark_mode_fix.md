# TODO: Dark Mode Logo and Text Visibility Fix

## Planning Steps:
- [ ] 1. Explore project structure to understand the codebase
- [ ] 2. Identify dark mode implementation (CSS variables, Tailwind, etc.)
- [ ] 3. Locate logo components and styling
- [ ] 4. Find text styling that may have visibility issues
- [ ] 5. Analyze current dark mode configuration
- [ ] 6. Fix logo visibility in dark mode
- [ ] 7. Fix text color issues in dark mode
- [ ] 8. Test and verify changes work properly
- [ ] 9. Document the changes made

## Current Status:
- [x] 1. Explore project structure to understand the codebase
- [x] 2. Identify dark mode implementation (CSS variables, Tailwind, etc.)
- [x] 3. Locate logo components and styling
- [x] 4. Find text styling that may have visibility issues
- [x] 5. Analyze current dark mode configuration
- [x] 6. Fix logo visibility in dark mode (create adaptive logo or filter)
- [x] 7. Fix text color issues in dark mode
- [ ] 8. Test and verify changes work properly
- [ ] 9. Document the changes made

## Issues Found:
1. **Logo Issue**: The `/logo.svg` file contains black paths (`#1F1F1F`) that become invisible in dark mode
2. **Text Color Issues**: Several components use `text-design-gray` (#5d5d5d) and `text-design-black` which don't adapt to dark mode
3. **Custom Design Colors**: The custom design colors in tailwind.config.ts don't have dark mode variants

## Fixes Applied:

### 1. Logo Fix
- Added `.logo-adaptive` CSS class in `app/globals.css`
- The class uses CSS filters to invert the logo colors in dark mode
- Applied to logo in `TopMenu.tsx`

### 2. Text Color Fixes
- Replaced `text-design-gray` with `text-gray-600 dark:text-gray-300`
- Replaced `text-design-black` with `text-gray-900 dark:text-white`
- Replaced `text-design-resume` with `text-gray-700 dark:text-gray-300`
- Updated button backgrounds and hover states for dark mode compatibility

### 3. Component Updates
- **TopMenu.tsx**: Logo filter + button colors
- **app/page.tsx**: Main heading, description, and button colors
- **Footer.tsx**: Text and border colors
- **app/[username]/page.tsx**: Footer link colors
- **app/(private)/upload/client.tsx**: All text and button colors
- **PopupSiteLive.tsx**: Text and button colors
- **PreviewActionbar.tsx**: Text and button colors
- **Resume components**: All text colors

## Next Steps:
- [ ] 8. Test and verify changes work properly
- [ ] 9. Document the changes made
