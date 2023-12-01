// Handle Page Scroll
document.addEventListener("DOMContentLoaded", function() {
    const toTop = document.getElementById('goto-top')
    let hasChanged = false

    window.addEventListener('scroll', function() {
        let scrollDist = document.documentElement.scrollTop || document.body.scrollTop || 0
    
        // Hide and show depending on how much the user has scrolled
        if (scrollDist > this.window.innerHeight && !hasChanged) {
            // Scrolled below the main hero section (1 view height)
            toTop.classList.remove("hidden")
            hasChanged = true
        } else if (scrollDist < this.window.innerHeight && hasChanged) {
            // User is still on the hero section
            toTop.classList.add("hidden")
            hasChanged = false
        }
    
        // Ensure the Go to Top button does not intersect footer
        const footerRect = document.getElementsByTagName("footer")[0].getBoundingClientRect()
        const topButtonBottomPos = toTop.offsetTop + toTop.offsetHeight // Distance of the bottom of the button to the top of the footers
        if (footerRect.y < topButtonBottomPos) {
            // If True, Button is lower than the Footer
            let heightDiff = topButtonBottomPos - footerRect.y;
            let style = window.getComputedStyle(toTop);
            let addBottom = parseInt(style.getPropertyValue('bottom')) + heightDiff; // Calculate how much bottom padding to add
            toTop.style.bottom = addBottom + 20 + 'px';
        } else {
            toTop.style.bottom = '' // Remove bottom padding if button higher than footer
        }
    })
})