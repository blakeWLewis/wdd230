
document.getElementById('todays-date').innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;

const date = new Date(document.lastModified);
document.getElementById("last-modification-date").innerHTML = date;

if (date.getDay() === 1 || date.getDay() === 2) {
    document.querySelector('.banner').style.display = "block";
} else {
    document.querySelector('.banner').style.display = "none";
}

let temp = 40.0;
let windSpeed = 6.0;
let windChill = calculateWindChill(temp, windSpeed);

document.getElementById('wind-speed-value').innerHTML = windSpeed

document.getElementById('wind-chill-value').innerHTML = windChill

document.getElementById('temprature').innerHTML = temp