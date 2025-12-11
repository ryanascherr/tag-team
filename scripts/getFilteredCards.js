export function getFighters(array, bodvar, chingShih, joan, mamanBrijit, mephisto, milady, mordred, shango, theFeyFolk, theGolem, theWildBunch, wongFeiHung) {

    if (!bodvar) {
        array = array.filter(card => card.fighter != "Bodvar");
    }
    if (!chingShih) {
        array = array.filter(card => card.fighter != "Ching Shih");
    }
    if (!joan) {
        array = array.filter(card => card.fighter != "Joan");
    }
    if (!mamanBrijit) {
        array = array.filter(card => card.fighter != "Maman Brijit");
    }
    if (!mephisto) {
        array = array.filter(card => card.fighter != "Mephisto");
    }
    if (!milady) {
        array = array.filter(card => card.fighter != "Milady");
    }
    if (!mordred) {
        array = array.filter(card => card.fighter != "Mordred");
    }
    if (!shango) {
        array = array.filter(card => card.fighter != "Shango");
    }
    if (!theFeyFolk) {
        array = array.filter(card => card.fighter != "The Fey Folk");
    }
    if (!theGolem) {
        array = array.filter(card => card.fighter != "The Golem");
    }
    if (!theWildBunch) {
        array = array.filter(card => card.fighter != "The Wild Bunch");
    }
    if (!wongFeiHung) {
        array = array.filter(card => card.fighter != "Wong Fei-Hung");
    }

    return array;
}

export function getActions(array, attack, block, heal, directDamage, gainPower) {

    if (attack) {
        array = array.filter(card => card.hasAttack === true);
    }
    if (block) {
        array = array.filter(card => card.hasBlock === true);
    }
    if (heal) {
        array = array.filter(card => card.hasHeal === true);
    }
    if (directDamage) {
        array = array.filter(card => card.hasDirectDamage === true);
    }
    if (gainPower) {
        array = array.filter(card => card.hasGainPower === true);
    }

    return array;
}