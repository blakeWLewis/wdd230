
document.getElementById('todays-date').innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;

const date = new Date(document.lastModified);
document.getElementById("last-modification-date").innerHTML = date;