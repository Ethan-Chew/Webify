// JS for Main Landing Page

document.addEventListener("DOMContentLoaded", function() {
    const toTop = document.getElementById('goto-top')
    console.log(toTop)
    let hasChanged = false

    // Handle Page Scroll
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

    // Testimonial Carousel
    let testimonialIndex = 0
    const carousel = document.getElementsByClassName("carousel-page")
    const pagination = document.getElementsByClassName("pagination-circle")
    const chevrons = document.getElementsByClassName("carousel-icon")
    for (let i = 0; i < chevrons.length; i++) {
        // console.log(chevrons[i])
        chevrons[i].addEventListener("click", function () {
            const direction = chevrons[i].className.baseVal.includes("left") ? "left" : "right"

            // Hide the current carousel slider, update pagination
            carousel[testimonialIndex].setAttribute("id", "hidden")
            pagination[testimonialIndex].setAttribute("id", "")

            // Update Index
            if (direction === "left") {
                // Decrease the testimonialIndex
                if (testimonialIndex - 1 < 0) {
                    testimonialIndex = carousel.length -1
                } else {
                    testimonialIndex -= 1
                }
            } else {
                // Increase the testimonialIndex
                if (testimonialIndex + 1 >= carousel.length) {
                    testimonialIndex = 0
                } else {
                    testimonialIndex += 1
                }
            }

            // Show the new carousel slider, update pagination
            carousel[testimonialIndex].setAttribute("id", "")
            pagination[testimonialIndex].setAttribute("id", "active")
        })
    }

    // Handle Contact Us Form Submission
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault()
        const submitButton = document.getElementById("contact-submit")
        submitButton.innerHTML = "Submitted!"

        // Change the text back after 5s
        setTimeout(function () {
            submitButton.innerHTML = "Submit"
        }, 5000)
    })
    
    // FAQ Section
    let faqArr = []
    const faqExpansions = document.getElementsByClassName("expand-icon")
    const faqDescs = document.getElementsByClassName("faq-container-desc")
    for (let i = 0; i < faqExpansions.length; i++) {
        faqArr.push(false)

        faqExpansions[i].addEventListener("click", function () {
            if (faqArr[i] === false) {
                // FAQ is currently hidden, make visible
                faqDescs[i].classList.remove("hidden")
                faqExpansions[i].innerHTML = feather.icons['minus'].toSvg()
            } else {
                // FAQ is currently visible, make hidden
                faqDescs[i].classList.add("hidden")
                faqExpansions[i].innerHTML = feather.icons['plus'].toSvg()
            }
            faqArr[i] = !faqArr[i]
        })
    }
})