// JS for Main Landing Page
document.addEventListener("DOMContentLoaded", function() {
    // Typing animation for Hero Section
    const heroTitleTxt = "Design it, Ship it."
    const typingAnim = async (text) => {
        const heroTitle = document.getElementsByClassName("header")[0].getElementsByClassName("typed-title")[0]
        heroTitle.innerText = "" // Reset Text
        // 'Type' text
        const typeText = async (text) => {
            for (let i = 0; i < text.length; i++) {
                heroTitle.insertAdjacentText("beforeend", text[i])
                await new Promise(resolve => setTimeout(resolve, 100))
            }
        }

        // Delete Text
        const deleteText = async (text) => {
            for (let i = text.length; i >= 0; i--) {
                heroTitle.innerText = text.slice(0, i);
                await new Promise(resolve => setTimeout(resolve, 50))
            }
        }
        
        await typeText(text)
        await new Promise(resolve => setTimeout(resolve, 5000)) // Wait 5s before delete animation
        await deleteText(text)
    }
    typingAnim(heroTitleTxt)
    setInterval(() => typingAnim(heroTitleTxt), (100 * heroTitleTxt.length) + (50 * heroTitleTxt.length) + 6000) // Repeat every 1s

    // Testimonial Carousel
    let testimonialIndex = 0
    const carousel = document.getElementsByClassName("carousel-page")
    const pagination = document.getElementsByClassName("pagination-circle")
    const chevrons = document.getElementsByClassName("carousel-icon")

    // Control Testimonial Index, and update View
    function updateShownTestimonial(direction) {
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
        } else if (direction === "right") {
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
    }

    // Add Click function to both Chevron Buttons
    for (let i = 0; i < chevrons.length; i++) {
        chevrons[i].addEventListener("click", function () {
            const direction = chevrons[i].className.baseVal.includes("left") ? "left" : "right"

            // Update View
            updateShownTestimonial(direction)
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
    const faqSections = document.getElementsByClassName("faq-container-header")
    const faqExpansions = document.getElementsByClassName("expand-icon")
    const faqDescs = document.getElementsByClassName("faq-container-desc")
    for (let i = 0; i < faqSections.length; i++) {
        faqArr.push(false)

        faqSections[i].addEventListener("click", function () {
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