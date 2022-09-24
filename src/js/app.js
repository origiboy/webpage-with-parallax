window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${window.pageYOffset || document.documentElement.scrollTop}px`;
})