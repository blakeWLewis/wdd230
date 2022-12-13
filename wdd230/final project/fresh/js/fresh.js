let is1 = document.getElementById('Ingredient1');
is1.length = 0;
let is1do = document.createElement('option');
is1do.text = 'Select the first ingredient';
is1.add(is1do);
is1.selectedIndex = 0;

let is2 = document.getElementById('Ingredient2');
is2.length = 0;
let is2do = document.createElement('option');
is2do.text = 'Select the second ingredient';
is2.add(is2do);
is2.selectedIndex = 0;

let is3 = document.getElementById('Ingredient3');
is3.length = 0;
let is3do = document.createElement('option');
is3do.text = 'Select the third ingredient';
is3.add(is3do);
is3.selectedIndex = 0;

const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

let ingredients = [];

fetch(url)
.then(
    function(response){
        if(response.status !== 200){
            console.warn(`There was a problem. Status code: ${response.status}`);
            return;
        }

        response.json().then(function(data){
            let option1;
            let option2;
            let option3;
            for(let i = 0; i< data.length; i++) {
                ingredients.push(data[i]);
                option1 = document.createElement('option');
                option1.text = data[i].name;
                option1.value = data[i].id;
                is1.add(option1);
                option2 = document.createElement('option');
                option2.text = data[i].name;
                option2.value = data[i].id;
                is2.add(option2);
                option3 = document.createElement('option');
                option3.text = data[i].name;
                option3.value = data[i].id;
                is3.add(option3);
            }
        })
    }
)

function handleSubmit() {
    let firstName = document.getElementById('first-name').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('cell-phone').value;
    let orderDate = document.getElementById('order-date').value;
    let fruit1SO = parseInt(document.getElementById('Ingredient1').value);
    let fruit1 = ingredients.find(fruit => {return fruit.id === fruit1SO});
    let fruit2SO = parseInt(document.getElementById('Ingredient2').value);
    let fruit2 = ingredients.find(fruit => {return fruit.id === fruit2SO});
    let fruit3SO = parseInt(document.getElementById('Ingredient3').value);
    let fruit3 = ingredients.find(fruit => {return fruit.id === fruit3SO});
    let specialInstructions = document.getElementById('instructions').value;

    let output = 'First Name: ' + firstName;
    output = output + '\n\nEmail: ' + email;
    output = output + '\n\nPhone Number: ' + phoneNumber;
    output = output + '\n\nOrder Date: ' + orderDate;
    output = output + '\n\nFirst Ingredient: ' + fruit1.name + '\n Carbohydrates: ' + fruit1.nutritions.carbohydrates + '\n Protein: ' + fruit1.nutritions.protein + '\n Fat: ' + fruit1.nutritions.fat + '\n Calories: ' + fruit1.nutritions.calories + '\n Sugar: ' + fruit1.nutritions.sugar;
    output = output + '\n\nSecond Ingredient: ' + fruit2.name + '\n Carbohydrates: ' + fruit2.nutritions.carbohydrates + '\n Protein: ' + fruit2.nutritions.protein + '\n Fat: ' + fruit2.nutritions.fat + '\n Calories: ' + fruit2.nutritions.calories + '\n Sugar: ' + fruit2.nutritions.sugar;
    output = output + '\n\nThird Ingredient: ' + fruit3.name + '\n Carbohydrates: ' + fruit3.nutritions.carbohydrates + '\n Protein: ' + fruit3.nutritions.protein + '\n Fat: ' + fruit3.nutritions.fat + '\n Calories: ' + fruit3.nutritions.calories + '\n Sugar: ' + fruit3.nutritions.sugar;
    output = output + '\n\nSpecial Instructions: ' + specialInstructions;

    let outputTA = document.getElementById('order-area');
    outputTA.innerHTML = output;
    outputTA.style.display = "block";

}