to use _sass/themes.scss to control the color of svg logo:

Way #1:

1. embed <svg>...</svg> element directly into _include/header.html
2. move <style>...</style> element to "_sass/themes.scss" in the corresponding block
3. svg with <object> tag does not support external css file, that might because jekyll or sass is used
4. the current way (inline style in svg file) is not able to toggle dark mode manually, only support OS level dark mode detection (@media (prefers-color-scheme: dark))


Way #2:

prepare 2 svg logo (light and dark)
write a control logic in theme.js file, or using css logic: https://stackoverflow.com/questions/63013985/change-logo-and-other-icon-svg-when-theme-is-changed

Reference:
https://www.sitepoint.com/using-svg-with-media-queries/
https://css-tricks.com/a-complete-guide-to-css-media-queries/
https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes
