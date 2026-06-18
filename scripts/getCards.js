import { checkFighters, checkActions } from './checkFilters.js';
import { getFighters, getActions } from './getFilteredCards.js';
import { fighters } from './fighters.js';

let cardArray = [];

// Update card array to include all cards
getAllCards();
function getAllCards() {
    fighters.forEach((fighter) => {
        let cards = fighter.cards;
        cards.forEach((card) => {
            cardArray.push(card);
        })
    })
}

// Get all of the information on what cards should be displayed and return that array
export function getCards() {
    let array = cardArray;
    
    let [bodvar, chingShih, excalibur, joan, mamanBrijit, mephisto, milady, mordred, shango, theFeyFolk, theGolem, theWildBunch, wongFeiHung, merlin, morgan, perceval, theDragon, theGreenKnight, bigBrother, brawler, comboMaster, hunter, ninja, samurai, theCursed] = checkFighters();
    let [startingCard, attack, block, heal, directDamage, gainPower, uniqueIcon, cancel, conditional, winCondition, affectsStartingCard, reflect, selfHarm, single, multiple, affectsFriendlyAlly, affectsOpponentAlly, instantBonus] = checkActions();
        
    array = getFighters(array, bodvar, chingShih, excalibur, joan, mamanBrijit, mephisto, milady, mordred, shango, theFeyFolk, theGolem, theWildBunch, wongFeiHung, merlin, morgan, perceval, theDragon, theGreenKnight, bigBrother, brawler, comboMaster, hunter, ninja, samurai, theCursed);

    array = getActions(array, startingCard, attack, block, heal, directDamage, gainPower, uniqueIcon, cancel, conditional, winCondition, affectsStartingCard, reflect, selfHarm, single, multiple, affectsFriendlyAlly, affectsOpponentAlly, instantBonus);

    return array;
}