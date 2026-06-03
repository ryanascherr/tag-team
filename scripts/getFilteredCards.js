export function getFighters(array, bodvar, chingShih, excalibur, joan, mamanBrijit, mephisto, milady, mordred, shango, theFeyFolk, theGolem, theWildBunch, wongFeiHung, merlin, morgan, perceval, theDragon, theGreenKnight) {

    if (!bodvar) {
        array = array.filter(card => card.fighter != "Bodvar");
    }
    if (!chingShih) {
        array = array.filter(card => card.fighter != "Ching Shih");
    }
    if (!excalibur) {
        array = array.filter(card => card.fighter != "Excalibur");
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
    if (!merlin) {
        array = array.filter(card => card.fighter != "Merlin");
    }
    if (!morgan) {
        array = array.filter(card => card.fighter != "Morgan");
    }
    if (!perceval) {
        array = array.filter(card => card.fighter != "Perceval");
    }
    if (!theDragon) {
        array = array.filter(card => card.fighter != "The Dragon");
    }
    if (!theGreenKnight) {
        array = array.filter(card => card.fighter != "The Green Knight");
    }

    return array;
}

export function getActions(array, startingCard, attack, block, heal, directDamage, gainPower, uniqueIcon, cancel, conditional, winCondition, affectsStartingCard, reflect, selfHarm, single, multiple, affectsFriendlyAlly, affectsOpponentAlly) {

    if (startingCard) {
        array = array.filter(card => card.isStartingCard === true);
    }
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
    if (uniqueIcon) {
        array = array.filter(card => card.hasUniqueIcon === true);
    }
    if (cancel) {
        array = array.filter(card => card.hasCancel === true);
    }
    if (conditional) {
        array = array.filter(card => card.hasConditional === true);
    }
    if (winCondition) {
        array = array.filter(card => card.hasWinCondition === true);
    }
    if (affectsStartingCard) {
        array = array.filter(card => card.affectsStartingCard === true);
    }
    if (reflect) {
        array = array.filter(card => card.hasReflect === true);
    }
    if (selfHarm) {
        array = array.filter(card => card.hasSelfHarm === true);
    }
    if (single) {
        array = array.filter(card => card.copies === 1);
    }
    if (multiple) {
        array = array.filter(card => card.copies !== 1);
    }
    if (affectsFriendlyAlly) {
        array = array.filter(card => card.affectsFriendlyAlly === true);
    }
    if (affectsOpponentAlly) {
        array = array.filter(card => card.affectsOpponentAlly === true);
    }

    return array;
}