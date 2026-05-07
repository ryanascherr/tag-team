import { cardArray } from './script.js';
import { checkFighters, checkActions } from './checkFilters.js';
import { getFighters, getActions } from './getFilteredCards.js';

export function getCards() {
    let array = cardArray;
    
    let [bodvar, chingShih, excalibur, joan, mamanBrijit, mephisto, milady, mordred, shango, theFeyFolk, theGolem, theWildBunch, wongFeiHung, merlin, morgan, perceval, theDragon, theGreenKnight] = checkFighters();
    let [attack, block, heal, directDamage, gainPower] = checkActions();
        
    array = getFighters(array, bodvar, chingShih, excalibur, joan, mamanBrijit, mephisto, milady, mordred, shango, theFeyFolk, theGolem, theWildBunch, wongFeiHung, excalibur, merlin, morgan, perceval, theDragon, theGreenKnight);

    array = getActions(array, attack, block, heal, directDamage, gainPower);

    return array;
}