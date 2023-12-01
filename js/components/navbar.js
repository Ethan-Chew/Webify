document.addEventListener("DOMContentLoaded", function() {
    // Change the Colour of the Navbar
    const navbar = document.getElementById('navbar')
    const mobileTabs = document.getElementById("mobile-tabs")
    let hasChanged = false

    if (!navbar.classList.contains("dark")) {
        window.addEventListener('scroll', function() {
            let scrollDist = document.documentElement.scrollTop || document.body.scrollTop || 0 // Get the distance that the user has scrolled
        
            if (scrollDist > this.window.innerHeight && !hasChanged) {
                // If the user has scrolled more than 1 view height, change the colour of the navbar
                navbar.classList.add("colorChangeAdd")
                navbar.classList.remove("colorChangeRemove")
                mobileTabs.classList.add("colorChangeAdd")
                mobileTabs.classList.remove("colorChangeRemove")
                hasChanged = true
            } else if (scrollDist < this.window.innerHeight && hasChanged) {
                // If the user has scrolled less than 1 view height, keep the original navbar colour
                navbar.classList.remove("colorChangeAdd")
                navbar.classList.add("colorChangeRemove")
                mobileTabs.classList.remove("colorChangeAdd")
                mobileTabs.classList.add("colorChangeRemove")
                hasChanged = false
            }
        })
    }


    // Show Mobile Tabs
    const mobileHamburger = document.getElementById("mobile-hamburger")
    mobileHamburger.addEventListener("pointerdown", (e) => {
        if (mobileTabs.style.display !== "flex") {
            // Display the mobile tabs, and change the icon to an 'x'
            mobileTabs.style.display = "flex"
            mobileHamburger.innerHTML = feather.icons['x'].toSvg()
        } else {
            // Hide the mobile tabs and change the icon back to the hamburger menu
            mobileTabs.style.display = "none"
            mobileHamburger.innerHTML = feather.icons['menu'].toSvg()
        }
    })
})