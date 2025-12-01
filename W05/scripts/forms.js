const yearElement = document.getElementById('currentYear');
const modifiedElement = document.getElementById('lastModified');

yearElement.textContent = new Date().getFullYear();
modifiedElement.textContent = document.lastModified;

const products = [
    {id: "pas101", name: "Chocolate Cake", averagerateing: 4.3},
    {id: "pas102", name: "Alfajor", averagerateing: 4.6},
    {id: "pas103", name: "Cinnamon Rolls", averagerateing: 4.9},
    {id: "pas104", name: "Cupcakes", averagerateing: 4.2},
    {id: "pas105", name: "Chocolate Chip Cookies", averagerateing: 3.9},
    {id: "pas106", name: "Carrot Cake", averagerateing: 4.1},
    {id: "pas107", name: "Lemon Cake", averagerateing: 3.7},
];

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("productName");
    if(select){
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            select.appendChild(option);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("reviewCounter");

    if (counterElement) {
        let count = Number(localStorage.getItem("reviewCount")) || 0;
        count++;
        localStorage.setItem("reviewCount", count);

        counterElement.textContent = count;
    }
});