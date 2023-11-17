// JS for the Domain Page

document.addEventListener("DOMContentLoaded", function() {
    let userSearch = ""
    const tlds = [".com", ".net", ".org", ".edu", ".gov", ".mil", ".int", ".biz", ".info", ".name", ".pro", ".coop", ".aero", ".museum", ".jobs", ".mobi", ".tel", ".asia", ".travel", ".tv"];
    let displayedDomainDivs = []

    // Read Search Field Input
    const searchBar = document.getElementById("search-bar")
    searchBar.addEventListener("submit", function (e) {
        e.preventDefault()

        userSearch = searchBar[0].value
        // Create Fake Domains
        for (let i = 0; i < tlds.length; i++) {
            let container = document.createElement('div')
            container.innerText = `${userSearch}${tlds[i]}`
            document.getElementById("domain-list").appendChild(container)
            
            displayedDomainDivs.push(container)
        }
    })

})