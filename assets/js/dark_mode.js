
// Automatically switch to dark mode

let mode_detect = window.matchMedia("(prefers-color-scheme: light)");
mode_detect.onchange = (e) => {
    if (e.matches) {
        setTheme("light");
    } else {
        setTheme("dark");
    }
}

/**
 * Ref:
 * https://www.zerostatic.io/docs/jekyll-advance/v2.0/darkmode/
 * https://github.com/mmistakes/jekyll-theme-basically-basic/issues/109
 * https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/change_event#example
 */

document.addEventListener('DOMContentLoaded', function() {
    const mode_toggle = document.getElementById("light-toggle");

    mode_toggle.addEventListener("click", function() {
        toggleTheme(localStorage.getItem("theme"));
    });


});

