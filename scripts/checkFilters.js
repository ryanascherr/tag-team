export function checkFighters() {
    let bodvar = document.querySelector('.js_bodvar').checked;
    let chingShih = document.querySelector('.js_ching-shih').checked;
    let joan = document.querySelector('.js_joan').checked;
    let mamanBrijit = document.querySelector('.js_maman-brijit').checked;
    let mephisto = document.querySelector('.js_mephisto').checked;
    let milady = document.querySelector('.js_milady').checked;
    let mordred = document.querySelector('.js_mordred').checked;
    let shango = document.querySelector('.js_shango').checked;
    let theFeyFolk = document.querySelector('.js_the-fey-folk').checked;
    let theGolem = document.querySelector('.js_the-golem').checked;
    let theWildBunch = document.querySelector('.js_the-wild-bunch').checked;
    let wongFeiHung = document.querySelector('.js_wong-fei-hung').checked;
    let excalibur = document.querySelector('.js_excalibur').checked;
    let merlin = document.querySelector('.js_merlin').checked;
    let morgan = document.querySelector('.js_morgan').checked;
    let perceval = document.querySelector('.js_perceval').checked;
    let theDragon = document.querySelector('.js_the-dragon').checked;
    let theGreenKnight = document.querySelector('.js_the-green-knight').checked;

    return [bodvar, chingShih, excalibur, joan, mamanBrijit, mephisto, milady, mordred, shango, theFeyFolk, theGolem, theWildBunch, wongFeiHung, merlin, morgan, perceval, theDragon, theGreenKnight];
}

export function checkActions() {
    let startingCard = document.querySelector('.js_starting-card').checked;
    let attack = document.querySelector('.js_attack').checked;
    let block = document.querySelector('.js_block').checked;
    let heal = document.querySelector('.js_heal').checked;
    let directDamage = document.querySelector('.js_direct-damage').checked;
    let gainPower = document.querySelector('.js_gain-power').checked;
    let uniqueIcon = document.querySelector('.js_unique-icon').checked;
    let cancel = document.querySelector('.js_cancel').checked;
    let conditional = document.querySelector('.js_conditional').checked;
    let winCondition = document.querySelector('.js_win-condition').checked;
    let affectsStartingCard = document.querySelector('.js_affects-starting-card').checked;
    let reflect = document.querySelector('.js_reflect').checked;
    let selfHarm = document.querySelector('.js_self-harm').checked;
    let single = document.querySelector('.js_single').checked;
    let multiple = document.querySelector('.js_multiple').checked;

    return [startingCard, attack, block, heal, directDamage, gainPower, uniqueIcon, cancel, conditional, winCondition, affectsStartingCard, reflect, selfHarm, single, multiple];
}