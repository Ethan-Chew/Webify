document.addEventListener("DOMContentLoaded", function() {
    // Change the Colour of the Navbar
    const navbar = document.getElementById('navbar')
    const mobileTabs = document.getElementById("mobile-tabs")
    let hasChanged = false

    window.addEventListener('scroll', function() {
        let scrollDist = document.documentElement.scrollTop || document.body.scrollTop || 0
    
        if (scrollDist > this.window.innerHeight && !hasChanged) {
            navbar.classList.add("colorChangeAdd")
            navbar.classList.remove("colorChangeRemove")
            mobileTabs.classList.add("colorChangeAdd")
            mobileTabs.classList.remove("colorChangeRemove")
            hasChanged = true
        } else if (scrollDist < this.window.innerHeight && hasChanged) {
            navbar.classList.remove("colorChangeAdd")
            navbar.classList.add("colorChangeRemove")
            mobileTabs.classList.remove("colorChangeAdd")
            mobileTabs.classList.add("colorChangeRemove")
            hasChanged = false
        }
    })

    // Show Mobile Tabs
    const mobileHamburger = document.getElementById("mobile-hamburger")
    mobileHamburger.addEventListener("pointerdown", (e) => {
        if (mobileTabs.style.display !== "flex") {
            mobileTabs.style.display = "flex"
            mobileHamburger.innerHTML = feather.icons['x'].toSvg()
        } else {
            mobileTabs.style.display = "none"
            mobileHamburger.innerHTML = feather.icons['menu'].toSvg()
        }
    })
})