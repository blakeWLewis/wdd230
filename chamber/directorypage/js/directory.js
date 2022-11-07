
var directory = document.getElementById('directory')

fetch('./js/data.json')
  .then(function (response) {
     return response.json()
    })
  .then(function (jsonObject) {

    jsonObject.forEach(element => {
        let div = document.createElement('div');
        div.setAttribute("class", "card");
        let logo = document.createElement('img');
        logo.setAttribute("src", element.logo);
        logo.setAttribute("class", "logo");
        let text = document.createElement('p');
        text.innerHTML = `${element.name}<br>${element.address.street}<br>${element.address.city}, ${element.address.state} ${element.address.zip}<br>${element.phone}<br>${element.membership}`;
        text.setAttribute("class", "business-text");
        let website = document.createElement("a");
        website.setAttribute("class", "business-website");
        website.setAttribute("href", `http://${element.website}`);
        website.innerHTML = element.website;
        div.appendChild(logo);
        div.appendChild(text);
        div.appendChild(website);
        directory.appendChild(div);
    });
  });



// import data from './data.json' assert {type: 'json'};

// 

// console.log(data);

// for (let b in data) {
//     let name = b.name;
//     console.log(name);
// }

