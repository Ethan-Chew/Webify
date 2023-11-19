# Testing
This document details how this project can be tested

## Responsiveness
This project will work fine on all phone sizes. Depending on the device's screen size, various elements will be rendered differently, and the font sizes are decreased.
1. **Navigation Bar**
    - On Both Desktop and Mobile, the Navigation Bar spans the top of the screen 
    - On Desktop, company name remains on the left side, and it's various tabs on the right
    - On Mobile, the tabs are hidden and replaced with a Hamburger Icon. When the icon is clicked, a separate section is displayed, revealing the tabs.
2. **Features Showcase**
    - On Desktop, the 3 main features are aligned in a single row
    - On Mobile, the tiers are aligned horizontally, with each row containing only one feature
3. **Pricing Tiers**
    - On Desktop, the 3 tiers are aligned in a single row
    - On Mobile, the tiers are aligned horizontally, with each row containing only one tier

## Home Page
1. Hovering over the 'Get Started' Button will cause it to scale up.
2. An arrow allowing you to jump to the top of the screen will appear once you scrolled past a certain point (1vh -- the height of your screen)
    - Clicking on this arrow will bring you back to the top.
3. Navigate and view different testimonials by clicking on the left and right arrows respectively.
    - As the arrows are clicked, the testimonial will change and current page index will be reflected in the circles below.
4. Contact Us form can only be submitted once all fields are filled in correctly
    - All fields have to be filled in
    - The Email Field has to contain a valid email
    - Once the form has been submitted, the button text will change to reflect the submission ("Submit" -> "Submitted!"), and changes back to "Submit" after 5 seconds
5. Frequently Asked Questions can be expanded/hidden by clicking on the plus/minus icons respectively
    - When the icon is clicked, the answer to the question will be shown

## Domains Page
1. A 'No Domain Found' message is shown when the page is first opened, or an empty input was given
2. After the user inputs a 'domain name' in the text field, randomly generated domains will be displayed in the "Domains for You" section
    - Potential Discounts and Prices are randomly generated
    - Discounts will be reflected with an Aquamarine Tag beside the domain name
3. Users are able to sort the domains by Price (either Ascending or Descending) using the Dropdown
    - Depending on the selection, the order of domains shown will be changed