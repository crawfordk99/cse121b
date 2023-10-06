/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: 'Keith Crawford',
    photo: 'w02-task/images/me-2.jpeg',
    favoriteFoods: ['Spaghetti', 'Burgers', 'Pizza', 'Chicken Soup', 'Stuffed Chicken'],
    hobbies: ['Basketball', 'Video Games', 'Anime', 'Writing poems'],
    placesLived: [],

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push ({
    place: 'Waukegan, IL',
    length: '20 years'
})

myProfile.placesLived.push ({
    place: 'Mundelien',
    length: '2 years'
})

myProfile.placesLived.push ({
    place: 'Tucson, AZ',
    length: '1.5 years'
})

myProfile.placesLived.push ({
    place: 'Vancouver, Canada',
    length: '6 months'
})

myProfile.placesLived.push ({
    place: 'Rexburg, ID',
    length: '6 months'
})

myProfile.placesLived.push ({
    place: 'Genoa City, WI',
    length: '3 months'
})
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent= myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(data => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = data.place;
    dd.textContent = data.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

