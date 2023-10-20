/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples')
let templeList = []

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.innerHTML=temple.templeName;
        const image = document.createElement('img');
        image.setAttribute('src', temple.imageUrl);
        image.setAttribute('alt', temple.location);
        article.appendChild(image);
        article.appendChild(h3);
        templesElement.appendChild(article);
    });
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (response.ok) {
        const templeData= await response.json();
        templeList=templeData;
        displayTemples(templeList);
    }
}   

/* reset Function */
function reset() {
    temples.innerHTML = '';
}

/* sortBy Function */
function sortBy (temples) {
    reset();
    let filter = document.querySelector('#sortBy').value;
    switch(filter) {
        case 'utah':
            displayTemples(temples.filter(temple => {
                return temple.location.includes('Utah')
            }));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => {
                return !temple.location.includes('Utah')
            }));
            break;
        case 'older':
            displayTemples(temples.filter(temple => {
                const date = new Date(1950, 0, 1);
                let templeAge = new Date(temple.dedicated);
                return templeAge < date
            }));
            break;
        case 'all': 
            displayTemples(temples);
            break;
    }

}


;

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => {sortBy(templeList)});
getTemples()