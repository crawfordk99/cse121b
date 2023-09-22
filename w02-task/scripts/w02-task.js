/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Keith Crawford';
let currentYear = '2023';
let profilePicture = 'images/me-2.jpeg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`)







/* Step 5 - Array */
let favFood = [' Spaghetti', ' Burgers', ' Pizza', ' Chicken Soup', ' Fried Chicken'];
foodElement.innerHTML = favFood;
let stuffed = ' Stuffed Chicken';
favFood.push(stuffed);
foodElement.innerHTML += `<br>${favFood}`;
favFood.splice(0, 1);
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;





