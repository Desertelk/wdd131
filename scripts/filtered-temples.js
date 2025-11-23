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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
	templeName: "Lima Peru Los Olivos",
	location: "Lima, Peru",
	dedicated: "2024, January, 14",
	area: 47413,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42522.jpg"
  },
  {
	templeName: "Las Vegas Nevada",
	location: "Las Vegas, Nevada, United States",
	dedicated: "1989, December, 18",
	area: 80350,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/las-vegas-nevada-temple/las-vegas-nevada-temple-51115.jpg"
  },
  {
	templeName: "San Diego California",
	location: "San Diego, California, United States",
	dedicated: "1993, April, 25",
	area: 72000,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-65402.jpg"
  }
  // Add more temple objects here...
];

const container = document.querySelector("#temple-cards");

createTempleCard(temples);

const oldTemples = document.querySelector("#oldtemples");

oldTemples.addEventListener("click", () => {
	document.querySelector("h2").textContent = "Old";
	createTempleCard(temples.filter(temple => temple.dedicated < "1900-01-01"));
	});

const newTemples = document.querySelector("#newtemples");

newTemples.addEventListener("click", () => {
	document.querySelector("h2").textContent = "New";
	createTempleCard(temples.filter(temple => temple.dedicated >= "2000-01-01"));
});

const largeTemples = document.querySelector("#largetemples");
largeTemples.addEventListener("click", () => {
	document.querySelector("h2").textContent = "Large";
	createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallTemples = document.querySelector("#smalltemples");
smallTemples.addEventListener("click", () => {
	document.querySelector("h2").textContent = "Small";
	createTempleCard(temples.filter(temple => temple.area < 10000));
});

const allTemples = document.querySelector("#alltemples");
allTemples.addEventListener("click", () => {
	document.querySelector("h2").textContent = "Home";
	createTempleCard(temples);
});

function createTempleCard(filteredTemples){
	document.querySelector("#temple-cards").innerHTML = "";
	filteredTemples.forEach(temple => {
		const card = document.createElement("section");
		card.classList.add("temple-card");
	
		const name = document.createElement("h3");
		name.textContent = temple.templeName
	
		const location = document.createElement("p");
		location.textContent = `Location: ${temple.location}`;
	
		const dedicated = document.createElement("p");
		dedicated.textContent = `Dedicated: ${temple.dedicated}`;
	
		const area = document.createElement("p");
		area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
	
		const img = document.createElement("img");
		img.src = temple.imageUrl;
		img.alt = `Image of ${temple.templeName} Temple`;
		img.loading = "lazy";
	
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(img);
	
		container.appendChild(card);
	});
}


