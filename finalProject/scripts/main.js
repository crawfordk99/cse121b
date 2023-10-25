/**Imports */
import { displayStats } from "./display.js";
/** Establishing global variables */
let playerAverages = [];
/** Establishing object to fetch data about */

/**const bullsPlayers = {
   name: ['Coby White', 'Patrick Williams', 'Zach Lavine', 'Jevon Carter', 'Demar Derozan',
            'Nikola Vucevic', 'Ayo Dosunmu', 'Dalen Terry', 'Andre Drummond', 'Torrey Craig',
            'Alex Caruso'],
}        
/** fetching NBA data */

/** API has ids for each player which you have to get first 
 * before you can get their stats */
/**async function getPlayerId(player) {
    const response = await fetch(`https://www.balldontlie.io/api/v1/players?search=${player}`)
    if(response.ok) {
        const nbaData= await response.json();
        /** Fetches the stats of each player passing their Id in the API */
       /** await getSeasonAverages(nbaData.data[0].id); 
    }
}*/

/** Getting a single player's data to show their stats */
const getSinglePlayerId = async () => {
    const response = await fetch(`https://www.balldontlie.io/api/v1/players?search=Coby_White`)
    if(response.ok) {
        const cobyData= await response.json();
        /** Fetches the stats of each player passing their Id in the API */
        await getSeasonAverages(cobyData.data[0].id);
    }
}

const getSeasonAverages = async (playerId) => {
    const response = await fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerId}`);
    if(response.ok) {
        const cobyData= await response.json();
        playerAverages=cobyData;
        displayStats(playerAverages);
    }
}

/** call the fetch function for each Bulls Player */
/**bullsPlayers.name.forEach(player => {
    getPlayerId(player)
});*/


getSinglePlayerId();