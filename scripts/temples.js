const yearElement = document.getElementById('currentYear');
const modifiedElement = document.getElementById('lastModified');

yearElement.textContent = new Date().getFullYear();
modifiedElement.textContent = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});