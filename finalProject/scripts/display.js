/**Display the stats and DOM manipulation */
const displayStats = stats => {
    document.querySelector('#coby-white').innerHTML= `Coby White`;
    const coby= document.querySelector('#coby-white');
    const div= document.createElement('div');
    const divTwo= document.createElement('div');
    const divThree= document.createElement('div');
    div.textContent= `Points Per Game: ${stats.data[0].pts}`;
    divTwo.textContent= `Rebounds Per Game: ${stats.data[0].reb}`;
    divThree.textContent= `Assists Per Game: ${stats.data[0].ast}`;
    coby.appendChild(div);
    coby.appendChild(divTwo);
    coby.appendChild(divThree)
}

export {displayStats};