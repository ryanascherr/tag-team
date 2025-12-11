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

    return [bodvar, chingShih, joan, mamanBrijit, mephisto, milady, mordred, shango, theFeyFolk, theGolem, theWildBunch, wongFeiHung];
}

export function checkActions() {
    let attack = document.querySelector('.js_attack').checked;
    let block = document.querySelector('.js_block').checked;
    let heal = document.querySelector('.js_heal').checked;
    let directDamage = document.querySelector('.js_direct-damage').checked;
    let gainPower = document.querySelector('.js_gain-power').checked;

    return [attack, block, heal, directDamage, gainPower];
}