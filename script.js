function updateStylesheet() {
    const width = window.innerWidth;
    const stylesheet = document.getElementById('responsive-stylesheet');

    if (width >= 550) {
        stylesheet.setAttribute('href', 'escritorio.css');
    } else {
        stylesheet.setAttribute('href', 'movil.css');
    }
}
updateStylesheet();
window.addEventListener('resize', updateStylesheet);