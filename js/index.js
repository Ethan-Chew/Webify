// JS for Main Landing Page

document.addEventListener("DOMContentLoaded", function() {
    const toTop = document.getElementById('goto-top')
    console.log(toTop)
    let hasChanged = false

    window.addEventListener('scroll', function() {
        let scrollDist = document.documentElement.scrollTop || document.body.scrollTop || 0
    
        if (scrollDist > this.window.innerHeight && !hasChanged) {
            toTop.style.cssText -= "display: none;"
            hasChanged = true
        } else if (scrollDist < this.window.innerHeight && hasChanged) {
            toTop.style.cssText += "display: none;"
            hasChanged = false
        }
    })
})