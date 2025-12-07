const yearElement = document.getElementById('currentYear');
const modifiedElement = document.getElementById('lastModified');

yearElement.textContent = new Date().getFullYear();
modifiedElement.textContent = document.lastModified;

const menuButton = document.querySelector("#menu-toggle");
const navList = document.querySelector(".nav-list");

if (menuButton && navList) {
    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("open");
        navList.classList.toggle("open");

        const isOpen = navList.classList.contains("open");
        menuButton.setAttribute("aria-expanded", isOpen);
    });
}

const products = [
    {id: 1, name: "Chocolate Cake" },
    {id: 2, name: "Cinnamon Roll"},
    {id: 3, name: "Alfajor"},
    {id: 4, name: "Brownie"},
    {id: 5, name: "Carrot Cake"},
    {id: 6, name: "Lemon Cake"},
    {id: 7, name: "Chocolate Chip Cookies"}
];

function populateProductSelect() {
    const select = document.querySelector("#productName");
    if(!select) return;

    const optionsHTML = products
        .map(product => `<option value="${product.name}">${product.name}</option>`)
        .join("");

    select.insertAdjacentHTML("beforeend", optionsHTML);
}

populateProductSelect();


const reviewForm = document.querySelector("#review-form");
if(reviewForm){
    reviewForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const review = {
            product: reviewForm.productName.value,
            rating: reviewForm.rating.value,
            date: reviewForm.receiveDate.value,
            feature: [...reviewForm.querySelectorAll("input[name='features']:checked")]
                .map(f => f.value),
            name: reviewForm.userName.value || "Anonymous"
        };

         const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
         reviews.push(review);

         localStorage.setItem("reviews", JSON.stringify(reviews));

         reviewForm.reset();
         alert("Thank you! Your review has been submitted.");

         window.location.href = "index.html";
    });
}

const menuItems = [
    {
        name: "Chocolate Cake",
        category: "cakes",
        price: "$12.99",
        image: "images/chocolate-cake.jpeg",
        description: "Rich and moist chocolate cake with fudge frosting."
    },
    {
        name: "Chocolate chip cookies",
        category: "cookies",
        price: "$10.00 / dozen",
        image: "images/chocolate-cookies.jpeg",
        description: "Soft and warm chocolate chip cookies."
    },
    {
        name: "Brownies",
        category: "other",
        price: "$4.00 each",
        image: "images/brownies.webp",
        description: "Dense and rich fudge brownes."
    },
    {
        name: "Lemon Cake",
        category: "cakes",
        price: "$15.99",
        image: "images/lemon-cake.webp",
        description: "Light and fluffy cake with a lemon glaze on top."
    },
    {
        name: "Cinnamon Rolls",
        category: "other",
        price: "$5.00 each",
        image: "images/cinnamon-rolls.webp",
        description: "Fluffy cinnamon rolls with a cream cheese frosting on top."
    },
    {
        name: "Alfajores",
        category: "cookies",
        price: "$12.00 / dozen",
        image: "images/alfajor.webp",
        description: "Delectable shortbread cookies with a creamy dulce de leche filling."
    },
    {
        name: "Carrot Cake",
        category: "cakes",
        price: "$14.99",
        image: "images/carrot-cake.webp",
        description: "Sweet carrot cake with a buttercream frosting."
    }  
];

const menuContainer = document.querySelector("#menu-cards");

function displayMenu(items){
    if(!menuContainer) return;

    menuContainer.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("article");
        card.classList.add("menu-card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
            <p>${item.description}</p>
        `;

        menuContainer.appendChild(card);
    });
}

displayMenu(menuItems);

if (filterSelect && searchInput) {
    filterSelect.addEventListener("change", applyFilters);
    searchInput.addEventListener("input", applyFilters);
}

function applyFilters(){
    let filteredItems = menuItems;

    const category = filterSelect.value;
    const searchTerm = searchInput.value.toLowerCase();

    if(category !== "all"){
        filteredItems = filteredItems.filter(item => item.category === category);
    }

    if(searchTerm){
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(searchTerm)
        );
    }

    displayMenu(filteredItems);
}

filterSelect.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);

const reviewSummary = document.querySelector("#review-summary");

if(reviewSummary){
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    if(reviews.length === 0){
        reviewSummary.innerHTML = `<p>No reviews yet! Be the first to share your opinion!</p>`;
    } else {
        reviewSummary.innerHTML = `
            <h3>Customer Reviews</h3>
            <p>${reviews.length} review(s) submitted.</p>
            <p>Latest: ${reviews.at(-1).product} - ${reviews.at(-1).rating}/5</p>
            `;
    }
}