import { cardArray } from './script.js';
import { checkFighters } from './checkFilters.js';
import { getFighters } from './getFilteredCards.js';

export function getCards() {
    let array = cardArray;
    
    let [bodvar, chingShih, joan, mamanBrijit, mephisto, milady, mordred, shango, theFeyFolk, theGolem, theWildBunch, wongFeiHung] = checkFighters();
        
    array = getFighters(array, bodvar, chingShih, joan, mamanBrijit, mephisto, milady, mordred, shango, theFeyFolk, theGolem, theWildBunch, wongFeiHung);

    return array;
}