document.addEventListener("DOMContentLoaded", function() {
    // Change the Colour of the Navbar
    const navbar = document.getElementById('navbar')
    let hasChanged = false

    window.addEventListener('scroll', function() {
        let scrollDist = document.documentElement.scrollTop || document.body.scrollTop || 0
    
        if (scrollDist > this.window.innerHeight && !hasChanged) {
            navbar.classList.add("colorChangeAdd")
            navbar.classList.remove("colorChangeRemove")
            hasChanged = true
        } else if (scrollDist < this.window.innerHeight && hasChanged) {
            navbar.classList.remove("colorChangeAdd")
            navbar.classList.add("colorChangeRemove")
            hasChanged = false
        }
    })

    // Show Mobile Tabs
    const mobileHamburger = document.getElementById("mobile-hamburger")
    const mobileTabs = document.getElementById("mobile-tabs")
    mobileHamburger.addEventListener("pointerdown", (e) => {
        if (mobileTabs.style.display === "none") {
            mobileTabs.style.display = "flex"
            mobileHamburger.dataset.feather = "x"
        } else {
            mobileTabs.style.display = "none"
            mobileHamburger.dataset.feather = "menu"
        }
    })
})