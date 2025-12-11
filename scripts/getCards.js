import { cardArray } from './script.js';
import { checkFighters, checkActions } from './checkFilters.js';
import { getFighters, getActions } from './getFilteredCards.js';

export function getCards() {
    let array = cardArray;
    
    let [bodvar, chingShih, joan, mamanBrijit, mephisto, milady, mordred, shango, theFeyFolk, theGolem, theWildBunch, wongFeiHung] = checkFighters();
    let [attack, block, heal, directDamage, gainPower] = checkActions();
        
    array = getFighters(array, bodvar, chingShih, joan, mamanBrijit, mephisto, milady, mordred, shango, theFeyFolk, theGolem, theWildBunch, wongFeiHung);

    array = getActions(array, attack, block, heal, directDamage, gainPower);

    return array;
}