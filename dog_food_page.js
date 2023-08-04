//Reading the JSON data
async function fetchProductsData() {
    try {
      const response = await fetch("dog_food_DATA.json");
      const data = await response.json();
      return data.dogFood;
    } catch (error) {
      console.error("Error fetching products data:", error);
      return [];
    }
  }
// Function to create the HTML elements for a product and appending them
function createProductItem(product) {
  const productItem = document.createElement("div");
  productItem.classList.add("product-item");

  const productImage = document.createElement("img");
  productImage.classList.add("product-img");
  productImage.src = product.image;
  productImage.alt = "Product Image";

  const productName = document.createElement("h3");
  productName.classList.add("product-heading");
  productName.textContent = product.productBrand + " " + product.productName;

  const ratingStars = document.createElement("span");
  ratingStars.textContent = "⭐".repeat(product.rating);

  const productFor = document.createElement("p");
  productFor.classList.add("product-info");
  productFor.textContent = "Product For: " + product.productFor;

  const typeFood = document.createElement("p");
  typeFood.classList.add("product-info");
  typeFood.textContent = "Type food: " + product.typeFood;

  const productPrice = document.createElement("p");
  productPrice.classList.add("product-price");
  productPrice.textContent = "$" + product.price;

  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("add-to-cart");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.addEventListener("click", () => {
    alert(`🐶 Added to cart 🐱`);
  });

  productItem.appendChild(productImage);
  productItem.appendChild(productName);
  productItem.appendChild(ratingStars);
  productItem.appendChild(productFor);
  productItem.appendChild(typeFood);
  productItem.appendChild(productPrice);
  productItem.appendChild(addToCartButton);

  return productItem;
}
//Event listener for the "Add to cart" button to add an alert
document.querySelector(".product-list").addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    alert(`🐶 Added to cart 🐱`);
  }
});

let totalProductsDisplayed = 0;
let totalProductsAvailable = 0;

/////Functions for sorting

// Function to SORT products by name (A-Z)
function sortByProductNameAZ(products) {
  return products.sort((a, b) => a.productName.localeCompare(b.productName));
}

//Function to SORT products by name (Z-A)
function sortByProductNameZA(products) {
  return products.sort((a, b) => b.productName.localeCompare(a.productName));
}

//Function to SORT products by price (ascending)
function sortByPriceAsc(products) {
  return products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
}

//Function to SORT products by price (descending)
function sortByPriceDesc(products) {
  return products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
}
function displayAllProducts(products) {
  const productListDiv = document.querySelector(".product-list");
  productListDiv.innerHTML = "";

  products.forEach((product) => {
    const productDiv = createProductItem(product);
    productListDiv.appendChild(productDiv);
  });
}

//Update the products and handeling the "All" option for filtering and switch cases for sorting
async function updateProductList() {
  const productBrandFilter =
    document.getElementById("productBrandFilter").value;
  const ratingFilter = document.getElementById("ratingFilter").value;
  const typeFoodFilter = document.getElementById("typeFoodFilter").value;
  const sortSelect = document.getElementById("sort");
  const selectedOption = sortSelect.value;

  const productListDiv = document.querySelector(".product-list");
  productListDiv.innerHTML = "";

  const productsData = await fetchProductsData();

  let filteredProducts = productsData.filter((product) => {
    return (
      (productBrandFilter === "" ||
        product.productBrand === productBrandFilter) &&
      (ratingFilter === "" ||
        parseInt(product.rating) === parseInt(ratingFilter)) &&
      (typeFoodFilter === "" || product.typeFood === typeFoodFilter)
    );
  });

  // Handle the "All" option for filtering
  if (!productBrandFilter && !ratingFilter && !typeFoodFilter) {
    filteredProducts = productsData;
  }
  //Sorting products
  let sortedProducts;
  switch (selectedOption) {
    case "az":
      sortedProducts = sortByProductNameAZ(filteredProducts);
      break;
    case "za":
      sortedProducts = sortByProductNameZA(filteredProducts);
      break;
    case "priceAsc":
      sortedProducts = sortByPriceAsc(filteredProducts);
      break;
    case "priceDesc":
      sortedProducts = sortByPriceDesc(filteredProducts);
      break;
    default:
      sortedProducts = filteredProducts;
      break;
  }

  productListDiv.innerHTML = "";

  // Create and append the new HTML elements for each product
  sortedProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
          <div class="product-item">
            <img src="${product.image}" alt="${
      product.productName
    }" class="product-img">
            <h3 class="product-heading">${product.productBrand} ${
      product.productName
    }</h3>
            <p>${"⭐".repeat(product.rating)}</p>
            <p class="product-info">Type Food: ${product.typeFood}</p>
            <p class="product-info">Product for: ${product.productFor}</p>
            <p class="product-price"> $ ${product.price}</p>
            <button class="add-to-cart">Add to cart</button>
          </div>
          `;
    displayAllProducts(sortedProducts);
  });

  totalProductsAvailable = sortedProducts.length;

  //Product count
  totalProductsDisplayed = productListDiv.children.length;
  const productCountElement = document.querySelector(".product-count");
  productCountElement.textContent = `Products ${totalProductsDisplayed} of ${totalProductsAvailable}`;

  displayNextBatch(sortedProducts);
}

// Populate the filter options from the JSON data
async function populateFilters() {
  const productsData = await fetchProductsData();
  totalProductsAvailable = productsData.length;
  const productBrandFilter = document.getElementById("productBrandFilter");
  const ratingFilter = document.getElementById("ratingFilter");
  const typeFoodFilter = document.getElementById("typeFoodFilter");

  productBrandFilter.innerHTML =
    '<option value="" class="filter-option">All</option>';
  ratingFilter.innerHTML =
    '<option value="" class="filter-option">All</option>';
  typeFoodFilter.innerHTML =
    '<option value="" class="filter-option">All</option>';

  const uniqueBrands = [
    ...new Set(productsData.map((product) => product.productBrand)),
  ];
  const uniqueRatings = [
    ...new Set(productsData.map((product) => product.rating)),
  ];
  const uniqueTypeFoods = [
    ...new Set(productsData.map((product) => product.typeFood)),
  ];

  uniqueBrands.forEach((brand) => {
    const option = document.createElement("option");
    option.text = brand;
    productBrandFilter.add(option);
  });

  uniqueRatings.forEach((rating) => {
    const option = document.createElement("option");
    option.text = rating;
    ratingFilter.add(option);
  });

  uniqueTypeFoods.forEach((typeFood) => {
    const option = document.createElement("option");
    option.text = typeFood;
    typeFoodFilter.add(option);
  });
}

document
  .getElementById("productBrandFilter")
  .addEventListener("change", updateProductList);
document
  .getElementById("ratingFilter")
  .addEventListener("change", updateProductList);
document
  .getElementById("typeFoodFilter")
  .addEventListener("change", updateProductList);
document.getElementById("sort").addEventListener("change", updateProductList);

updateProductList();
populateFilters();
