const yearElement = document.getElementById('currentYear');
const modifiedElement = document.getElementById('lastModified');

yearElement.textContent = new Date().getFullYear();
modifiedElement.textContent = document.lastModified;

const temperature = 12;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return (
        13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) +
        .3965 * temp * Math.pow(speed, 0.16)
    );
}

function canCalculateWindChill(temp, speed) {
    return temp <= 10 && speed > 4.8;
}

const windChillSpan = document.querySelector(".weather-container .data:nth-child(6) .value");

if (calculateWindChill(temperature, windSpeed)) {
    const wc = calculateWindChill(temperature, windSpeed);
    windChillSpan.textContent = wc.toFixed(1) + " °C";
} else {
    windChillSpan.textContent = "N/A";
}