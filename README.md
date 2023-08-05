Overview

The Cat and Dog Food Online Shop project is a simple website designed to offer a user-friendly online shopping experience for pet owners looking to purchase food for their cats and dogs. The project has been implemented using HTML, CSS, and JavaScript without the use of any frameworks.

Features

    Sticky Navigation Menu

The website features a sticky navigation menu that remains fixed to the top of the screen as the user scrolls, ensuring easy access to important links and sections.

    Home Page

The home page is designed with simplicity in mind. It displays images linked to product categories, providing an intuitive way for users to navigate to their desired section.

    Static Footer

The footer remains static throughout the website and contains essential information about the online shop. Additionally, it includes social media links for contact and engagement.

    Cat Paw Pop-up

As users scroll to the bottom of the page, a playful pop-up image of a cat paw appears. When clicked, it disappears, adding a delightful touch to the user experience.

    Product Pages

The product pages feature the same sticky navigation menu found on the home page. The header provides information about the products available.

    Sorting Function

The product pages offer a sorting function to arrange products based on user preferences. Sorting options include alphabetical A-Z, Z-A, Price Ascending, and Price Descending. Additionally, users can select "Choose" for neutral sorting.

    Filtering Function

The left side of the product pages includes a filtering function. Users can filter products by brand, rating stars, and type of food. Multiple brands, ratings ranging from 1 to 5 stars, and food types (dry, canned, snacks) are available for filtering.

    Data Handling with JSON

All product data is stored in objects within a JSON file. The website fetches this data to display products dynamically. Images are stored in a separate folder and linked to the JSON file.

    Product Grid

Products are displayed in a grid-like card layout, including product images, brand and name, rating, product type, price, and an "Add to Cart" button. Clicking the "Add to Cart" button triggers an alert.

    Responsive Design

The website is designed to be responsive, adapting to different screen widths. The product grid layout changes accordingly to provide the best user experience across devices.

    Product Counter

At the end of the product grid on the right side, a product counter displays the total number of products currently shown on the page.

Code Structure

    HTML

    index.html: Home page of the website with linked category images. cat_food.html and dog_food.html: Product pages for cat and dog food.

    CSS

    styles.css: Contains styling for the navigation menu, home page, and footer. product_styles.css: Contains styling specific to the product pages.

    JavaScript

    index.js: Contains shared JavaScript functions. cat_food_script.js and dog_food_script.js: JavaScript files for cat and dog food pages. The fetching data function is different in each file due to different data sources.

Note

The "Load more" button has not been included in the project due to issues with the filter function. Instead, all products are displayed to ensure the filter works as expected.


![home-page](https://github.com/hristowa/Product-Listing-Page/assets/119531049/3a62f975-2fc3-4e41-a44b-430c965de86a)
![home-page2](https://github.com/hristowa/Product-Listing-Page/assets/119531049/70f44d6e-f9ab-4a97-8836-bb7b85f11e51)
![product-page](https://github.com/hristowa/Product-Listing-Page/assets/119531049/22faadea-0be5-4763-a3f0-0977d98519ef)
![pr![product-page3](https://github.com/hristowa/Product-Listing-Page/assets/119531049/ddc9a3a3-4c84-4cc1-9f7f-ef900903c9f2)
oduct-page2](https://github.com/hristowa/Product-Listing-Page/assets/119531049/8ca1fc5b-e01c-4ac0-ad94-bda9f337ab40)
![roduct-page4](https://github.com/hristowa/Product-Listing-Page/assets/119531049/6372435c-c5c4-4309-9a80-19b0dabdbed7)
![responsive-design0](https://github.com/hristowa/Product-Listing-Page/assets/119531049/84d94398-8839-40b6-9e76-4bcc32c9d8ed)
![responsive-design](https://github.com/hristowa/Product-Listing-Page/assets/119531049/07370ccf-568a-43f0-99c3-752815422ef0)

