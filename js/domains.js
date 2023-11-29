// JS for the Domain Page

document.addEventListener("DOMContentLoaded", function() {
    const domainListContainer = document.getElementsByClassName("domain-list")[0]
    const tlds = [".com", ".net", ".org", ".edu", ".gov", ".mil", ".int", ".biz", ".info", ".name", ".pro", ".coop", ".aero", ".museum", ".jobs", ".mobi", ".tel", ".asia", ".travel", ".tv"]; // List of predefined Top-Level-Domains
    let userSearch = ""
    let displayedDomainDivs = [] // Array of Objects; Stores: Domain Name, Discount, Price, ContainerDOM
    const dropdownSort = document.getElementById("sorter")

    // Reset Domains Container
    const resetContainer = () => {
        domainListContainer.innerHTML = 
            `<div class="default-domainlist">
                <i data-feather="search" class="initial-icon"></i>
                <p class="margin0 cannot-find">Oops! There's nothing here!</p>
                Start by Searching for a Top-Level Domain!
            </div>`
        dropdownSort.style.display = "none"
    }

    // Write Domains to DOM
    const writeToDOM = (userSearch) => {
        domainListContainer.innerHTML = "" // Reset Container's Contents

        // Create Fake Domains
        for (let i = 0; i < tlds.length; i++) {
            let domainInfo = {
                "name": "",
                "discount": 0,
                "price": 0,
                "domElement": null
            }
            // Determine to add discount or not
            domainInfo.price = Math.floor(Math.random() * (120 - 12 + 1) + 12)
            if (Math.random() > 0.6) {
                domainInfo.discount = Math.floor(Math.random() * (80 - 10 + 1) + 10) // Add discount
                domainInfo.price = Math.floor(domainInfo.price * (domainInfo.discount/100))
            }

            // Create and Add HTML Element
            let container = document.createElement('div')
            container.classList.add("container")
            container.innerHTML = 
            `<div class="left">
                <p class="margin0 domain-name">${userSearch}${tlds[i]}</p>
                ${domainInfo.discount > 0 ? `<p class="margin0 discount-tag">${domainInfo.discount}% off</p>` : ""}
            </div>
            <div class="right">
                <p class="margin0 price">$${domainInfo.price}/year</p>
                <button class="add-to-cart">
                    <i data-feather="shopping-cart" style="stroke-width: 3;"></i>
                    Add to Cart
                </button>
            </div>`
            domainListContainer.appendChild(container)

            domainInfo.domElement = container
            displayedDomainDivs.push(domainInfo)
        }
        dropdownSort.style.display = "block"
    }

    // Read Search Field Input and Generate Domains
    const searchBar = document.getElementById("search-bar")
    searchBar.addEventListener("submit", function (e) {
        e.preventDefault()
        displayedDomainDivs = [] // Reset Displayed Domains

        userSearch = searchBar[0].value
        if (userSearch === "") {
            resetContainer()
        } else { 
            writeToDOM(userSearch)
        }

        feather.replace() // Refresh icons
    })

    // Sort Domains
    dropdownSort.addEventListener("change", function () {
        const value = dropdownSort.value
        
        switch (value) {
            case "asc": 
                displayedDomainDivs.sort((a, b) => a.price - b.price)
                break
            case "desc":
                displayedDomainDivs.sort((a, b) => b.price - a.price)
                break
            default:
                // Keep original order
                break
        }

        if (value !== "default") {
            // Update Order
            domainListContainer.innerHTML = "" // Reset Container's Contents
            for (let i = 0; i < displayedDomainDivs.length; i++) {
                domainListContainer.appendChild(displayedDomainDivs[i].domElement)
            }
        }
    })
})