to use _sass/themes.scss to control the color of svg logo:

1. embed <svg>...</svg> element directly into _include/header.html
2. move <style>...</style> element to "_sass/themes.scss" in the corresponding block
3. svg with <object> tag does not support external css file, that might because jekyll or sass is used
4. the current way (inline style in svg file) is not able to toggle dark mode manually, only support OS level dark mode detection (@media (prefers-color-scheme: dark))