How to add gradient color to avatar:

1. Change avatar's border color to transparet (See _variable.scss, $avatar-border-color-light)
2. Add a wrapper class outside avatar element (https://css-tricks.com/gradient-borders-in-css/)
3. Add linear-gradient() to wrapper's background, and set wrapper's border-radius to 50% 

For dark mode, change linear-gradient()'s color sets to css variables that defined in _variable.scss in advance.

More gradient color: https://cssgradient.io/

Default avatar border color: lightgrey