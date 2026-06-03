export let fighters = [
    {
        name: "Bodvar",
        health: 11,
        startingPower: 3,
        specialTrack: true,
        cards: [
            {
                fighter: "Bodvar",
                name: "Enrage",
                copies: 1,
                isStartingCard: true,
                hasAttack: true,
                hasSpecial: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Bodvar",
                name: "Berserk!",
                copies: 2,
                hasAttack: true,
                hasAttackPartner: true,
                hasAttackBoth: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Bodvar",
                name: "Blood Ties",
                copies: 2,
                hasAttack: true,
                hasHeal: true,
                hasHealAlly: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Bodvar",
                name: "Rune of Strength",
                copies: 2,
                hasBlock: true,
                hasGainPower: true,
                hasPowerSelf: true,
            },
            {
                fighter: "Bodvar",
                name: "Rune of Transformation",
                copies: 2,
                hasBlock: true,
                hasSpecial: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Bodvar",
                name: "Spirit Trance",
                copies: 1,
                hasGainPower: true,
                hasPowerSelf: true,
                hasDirectDamage: true,
                hasHurtSelf: true,
                hasConditional: true,
                hasSelfHarm: true
            }
        ]
    },
    {
        name: "Ching-Shih",
        health: 14,
        startingPower: 2,
        specialTrack: true,
        cards: [
            {
                fighter: "Ching Shih",
                name: "Terror of the Seas",
                copies: 1,
                isStartingCard: true,
                hasAttack: true,
                hasHeal: true,
                hasSpecial: true,
                hasDirectDamage: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Ching Shih",
                name: "Gunpowder Wine",
                copies: 1,
                hasHeal: true,
                hasHealAlly: true,
                hasHealBoth: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Ching Shih",
                name: "Join the Fleet!",
                copies: 1,
                hasSpecial: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Ching Shih",
                name: "Outmaneuvered",
                copies: 2,
                hasAttack: true,
                hasSpecial: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Ching Shih",
                name: "Raiding Party",
                copies: 1,
                hasGainPower: true,
                hasPowerAlly: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Ching Shih",
                name: "Revenge of the Red Flag Fleet",
                copies: 1,
                hasAttack: true,
                hasPartnerAttack: true,
                hasAttackBoth: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Ching Shih",
                name: "Secret Harbor",
                copies: 2,
                hasBlock: true,
                hasSpecial: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Ching Shih",
                name: "Spirited Defense",
                copies: 1,
                hasBlock: true,
                hasGainPower: true,
                hasPowerSelf: true
            },
        ]
    },
    {
        name: "Excalibur",
        health: 7,
        startingPower: 0,
        cards: [
            {
                fighter: "Excalibur",
                name: "Sword of Destiny",
                isStartingCard: true,
                hasDirectDamage: true,
                hasGainPower: true,
                hasUniqueIcon: true,
                hasConditional: true,
                hasSelfHarm: true
            },
            {
                fighter: "Excalibur",
                name: "Enchanted Scabbard",
                hasDirectDamage: true,
                hasBlock: true,
                hasUniqueIcon: true,
                hasReflect: true,
                hasSelfHarm: true
            },
            {
                fighter: "Excalibur",
                name: "Pendragons Wrath",
                hasDirectDamage: true,
                hasAttack: true,
                hasUniqueIcon: true,
                hasSelfHarm: true
            },
            {
                fighter: "Excalibur",
                name: "Steel on Steel",
                hasDirectDamage: true,
                hasBlock: true,
                hasGainPower: true,
                hasUniqueIcon: true,
                hasSelfHarm: true
            },
            {
                fighter: "Excalibur",
                name: "Unleashed!",
                hasDirectDamage: true,
                hasAttack: true,
                hasUniqueIcon: true,
                hasSelfHarm: true
            },
            {
                fighter: "Excalibur",
                name: "Unstable Aura",
                hasHeal: true,
                hasUniqueIcon: true,
                hasReflect: true,
                hasSelfHarm: true
            },
            {
                fighter: "Excalibur",
                name: "What Should Not Have Been Broken",
                hasHeal: true,
                hasDirectDamage: true,
                hasUniqueIcon: true,
                hasSelfHarm: true
            },
        ]
    },
    {
        name: "Joan",
        health: 18,
        startingPower: 1,
        specialTrack: true,
        cards: [
            {
                fighter: "Joan",
                name: "Dieu Premier Servi",
                isStartingCard: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Joan",
                name: "Divine Vision",
                hasHeal: true,
            },
            {
                fighter: "Joan",
                name: "Hand of the Righteous",
                hasAttack: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Joan",
                name: "Holy Shield",
                hasBlock: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Joan",
                name: "Sword of St Michael",
                hasAttack: true,
                hasHeal: true,
            }
        ]
    },
    {
        name: "Maman Brijit",
        health: 16,
        startingPower: 2,
        specialHealthTrack: true,
        cards: [
            {
                fighter: "Maman Brijit",
                name: "Chili Pepper Rum",
                isStartingCard: true,
                hasAttack: true,
                hasDirectDamage: true,
                hasSelfHarm: true
            },
            {
                fighter: "Maman Brijit",
                name: "Eternal Youth",
                hasCancel: true,
                hasConditional: true
            },
            {
                fighter: "Maman Brijit",
                name: "Sacrifice of Love",
                hasDirectDamage: true,
                hasHeal: true,
                hasSelfHarm: true
            },
            {
                fighter: "Maman Brijit",
                name: "Soul Embrace",
                hasDirectDamage: true,
                hasGainPower: true,
                hasSelfHarm: true
            },
            {
                fighter: "Maman Brijit",
                name: "The Black Rooster",
                hasCancel: true
            },
            {
                fighter: "Maman Brijit",
                name: "You Are Mine",
                hasBlock: true,
                hasReflect: true
            }
        ]
    },
    {
        name: "Mephisto",
        health: 13,
        startingPower: 1,
        cards: [
            {
                fighter: "Mephisto",
                name: "Twin Serpents",
                isStartingCard: true,
                hasAttack: true,
                hasGainPower: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Mephisto",
                name: "Drag You to Hell",
                hasConditional: true,
                hasWinCondition: true
            },
            {
                fighter: "Mephisto",
                name: "Fury of the Damned",
                hasDirectDamage: true,
                hasConditional: true,
                affectsStartingCard: true
            },
            {
                fighter: "Mephisto",
                name: "Serpent of the Pit",
                hasAttack: true,
                hasDirectDamage: true,
                hasUniqueIcon: true,
                hasConditional: true,
                hasSelfHarm: true
            },
            {
                fighter: "Mephisto",
                name: "Serpent of the Void",
                hasHeal: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Mephisto",
                name: "Soul Siphon",
                hasBlock: true,
                hasHeal: true
            }
        ]
    },
    {
        name: "Merlin",
        health: 100,
        startingPower: 100,
        cards: [
            {
                fighter: "Merlin",
                name: "Master of Order and Chaos",
                isStartingCard: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Merlin",
                name: "Dark Ritual",
                hasDirectDamage: true,
                hasGainPower: true,
                hasSelfHarm: true
            },
            {
                fighter: "Merlin",
                name: "Student of the Ancient Knowledge",
                hasUniqueIcon: true
            },
            {
                fighter: "Merlin",
                name: "The Standing Stones",
                hasUniqueIcon: true
            },
            {
                fighter: "Merlin",
                name: "Word in the Forgotten Tongue",
                hasUniqueIcon: true
            },
        ]
    },
    {
        name: "Milady",
        health: 16,
        startingPower: 1,
        cards: [
            {
                fighter: "Milady",
                name: "Dressed to Kill",
                isStartingCard: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Milady",
                name: "Checkmate",
                hasUniqueIcon: true
            },
            {
                fighter: "Milady",
                name: "I Keep My Friends Close",
                hasHeal: true
            },
            {
                fighter: "Milady",
                name: "Licking My Wounds",
                hasHeal: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Milady",
                name: "So Predictable",
                hasBlock: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Milady",
                name: "What Doesnt Kill You Makes Me Stronger",
                hasAttack: true,
                hasGainPower: true,
                hasConditional: true
            },
            {
                fighter: "Milady",
                name: "With a Stab and a Smile",
                hasAttack: true,
                hasUniqueIcon: true,
                hasConditional: true
            }
        ]
    },
    {
        name: "Mordred",
        health: 19,
        startingPower: 0,
        cards: [
            {
                fighter: "Mordred",
                name: "Dark Power",
                isStartingCard: true,
                hasAttack: true,
                hasGainPower: true,
                hasConditional: true
            },
            {
                fighter: "Mordred",
                name: "Cloak of Shadow",
                hasBlock: true,
                hasHeal: true
            },
            {
                fighter: "Mordred",
                name: "Execution",
                hasDirectDamage: true,
                hasConditional: true
            },
            {
                fighter: "Mordred",
                name: "Hidden Dagger",
                hasAttack: true,
                hasConditional: true
            },
            {
                fighter: "Mordred",
                name: "Vicious Riposte",
                hasAttack: true,
                hasBlock: true
            }
        ]
    },
    {
        name: "Morgan",
        health: 100,
        startingPower: 100,
        cards: [
            {
                fighter: "Morgan",
                name: "My Eyes See All",
                isStartingCard: true,
                hasGainPower: true,
                hasConditional: true,
                affectsStartingCard: true
            },
            {
                fighter: "Morgan",
                name: "Channel Power",
                hasBlock: true,
                hasGainPower: true
            },
            {
                fighter: "Morgan",
                name: "Crowsclaw Charm",
                hasBlock: true,
                hasHeal: true,
                hasHealAlly: true
            },
            {
                fighter: "Morgan",
                name: "Deadly Diversion",
                hasAttack: true,
                hasCancel: true
            },
            {
                fighter: "Morgan",
                name: "Magical Mirror",
                hasGainPower: true,
                hasAttack: true,
                hasConditional: true
            },
            {
                fighter: "Morgan",
                name: "Spiral of Life",
                hasHeal: true,
                hasHealBoth: true,
                hasConditional: true
            },
            {
                fighter: "Morgan",
                name: "The Enchantress",
                hasBlock: true,
                hasDirectDamage: true,
                hasSelfHarm: true
            },
        ]
    },
    {
        name: "Perceval",
        health: 100,
        startingPower: 100,
        cards: [
            {
                fighter: "Perceval",
                name: "The Questing Knight",
                isStartingCard: true,
                hasAttack: true,
                hasBlock: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Perceval",
                name: "Act of Chivalry",
                hasBlock: true,
                hasHeal: true,
                hasHealBoth: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Perceval",
                name: "Coup de Grace",
                hasAttack: true,
                hasConditional: true
            },
            {
                fighter: "Perceval",
                name: "Quest for the Holy Grail",
                hasUniqueIcon: true
            },
            {
                fighter: "Perceval",
                name: "The Bleeding Lance",
                hasAttack: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Perceval",
                name: "The Quest Begins",
                hasAttack: true,
                hasHeal: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Perceval",
                name: "Vision of the Grail",
                hasGainPower: true
            },
        ]
    },
    {
        name: "Shango",
        health: 15,
        startingPower: 0,
        cards: [
            {
                fighter: "Shango",
                name: "Aflame!",
                isStartingCard: true,
                hasUniqueIcon: true,
                hasWinCondition: true
            },
            {
                fighter: "Shango",
                name: "Breath of Fire",
                hasAttack: true,
                hasUniqueIcon: true,
                hasWinCondition: true
            },
            {
                fighter: "Shango",
                name: "Cauterize",
                hasHeal: true
            },
            {
                fighter: "Shango",
                name: "Lightning Strike",
                hasAttack: true,
                hasSelfHarm: true
            },
            {
                fighter: "Shango",
                name: "Thunder Stone",
                hasGainPower: true
            },
            {
                fighter: "Shango",
                name: "Wall of Flame",
                hasBlock: true,
                hasGainPower: true
            }
        ]
    },
    {
        name: "The Dragon",
        health: 100,
        startingPower: 100,
        cards: [
            {
                fighter: "The Dragon",
                name: "Hide of Iron",
                isStartingCard: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Dragon",
                name: "Dragonfire",
                hasAttack: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Dragon",
                name: "In the Heart of the Mountain",
                hasBlock: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Dragon",
                name: "Soul of the Wyrm",
                hasGainPower: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "The Dragon",
                name: "Tail Slash",
                hasAttack: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Dragon",
                name: "Under My Wing",
                hasHeal: true,
                hasHealAlly: true,
                hasUniqueIcon: true
            },
        ]
    },
    {
        name: "The Fey Folk",
        health: 3-5,
        startingPower: 0,
        cards: [
            {
                fighter: "The Fey Folk",
                name: "All Legends Must Pass",
                isStartingCard: true,
                hasUniqueIcon: true,
                hasConditional: true,
                hasWinCondition: true
            },
            {
                fighter: "The Fey Folk",
                name: "Entanglement",
                hasCancel: true
            },
            {
                fighter: "The Fey Folk",
                name: "Fairy Ring",
                hasHeal: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Fey Folk",
                name: "Spirit Storm",
                hasAttack: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Fey Folk",
                name: "Summoning Leshi",
                hasBlock: true,
                hasGainPower: true
            },
            {
                fighter: "The Fey Folk",
                name: "Summoning Redcap",
                hasAttack: true,
                hasBlock: true
            },
            {
                fighter: "The Fey Folk",
                name: "Summoning The Green Man",
                hasBlock: true,
                hasHeal: true
            }
        ]
    },
    {
        name: "The Golem",
        health: 25,
        startingPower: 1,
        cards: [
            {
                fighter: "The Golem",
                name: "Protect the Innocent",
                isStartingCard: true,
                hasAttack: true,
                hasDirectDamage: true,
                hasUniqueIcon: true,
                hasConditional: true,
                hasSelfHarm: true
            },
            {
                fighter: "The Golem",
                name: "Fist of Clay",
                hasAttack: true
            },
            {
                fighter: "The Golem",
                name: "Heal the Wounded",
                hasHeal: true
            },
            {
                fighter: "The Golem",
                name: "Reanimation"
            },
            {
                fighter: "The Golem",
                name: "Self Sacrifice",
                hasGainPower: true
            }
        ]
    },
    {
        name: "The Green Knight",
        health: 100,
        startingPower: 100,
        cards: [
            {
                fighter: "The Green Knight",
                name: "The Greenwood Sap",
                isStartingCard: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Green Knight",
                name: "A Blow for a Blow",
                hasAttack: true,
                hasConditional: true
            },
            {
                fighter: "The Green Knight",
                name: "Donning the Greenwood Mask",
                hasGainPower: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Green Knight",
                name: "The Green Chapel",
                hasHeal: true,
                hasHealAlly: true,
                hasConditional: true
            },
            {
                fighter: "The Green Knight",
                name: "The Might of the Greenwood",
                hasAttack: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Green Knight",
                name: "The Mighty Battleaxe",
                hasAttack: true,
                hasDirectDamage: true,
                hasSelfHarm: true
            },
        ]
    },
    {
        name: "The Wild Bunch",
        health: 5,
        startingPower: 1,
        cards: [
            {
                fighter: "The Wild Bunch",
                name: "Corrupted Lawman",
                isStartingCard: true,
                hasAttack: true,
                hasGainPower: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "The Wild Bunch",
                name: "Back to the Hideout",
                hasHeal: true
            },
            {
                fighter: "The Wild Bunch",
                name: "Bribe",
                hasBlock: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Wild Bunch",
                name: "Keys to the Armory",
                hasGainPower: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Wild Bunch",
                name: "Outlaw Doc",
                hasHeal: true
            },
            {
                fighter: "The Wild Bunch",
                name: "Sheriffs Personal Gatling Gun",
                hasAttack: true,
                hasDirectDamage: true,
                hasUniqueIcon: true,
                hasConditional: true,
                hasSelfHarm: true
            },
            {
                fighter: "The Wild Bunch",
                name: "We Aint Here to Talk",
                hasAttack: true
            }
        ]
    },
    {
        name: "Wong Fei-Hung",
        health: 17,
        startingPower: 2,
        cards: [
            {
                fighter: "Wong Fei-Hung",
                name: "The Harder They Fall",
                isStartingCard: true,
                hasAttack: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Chi Focus",
                hasHeal: true,
                hasGainPower: true
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Crippling Touch"
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Ging Balance",
                hasBlock: true,
                hasGainPower: true
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Ging Bridge",
                hasGainPower: true
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Tiger Fist",
                hasAttack: true,
                hasGainPower: true
            },
        ]
    }
];

import { getCards } from "./getCards.js";
import { placeCards } from "./placeCards.js";
import { openModal, closeModal } from './modalControl.js';

export let cardArray = [];

let allInputs = document.querySelectorAll(".js_criteria");
let fighterInputs = document.querySelectorAll(".js_fighter");
allInputs.forEach((input, index, array) => {
    input.addEventListener('change', function() {
        let array = getCards();
        placeCards(array);
    });
});

getAllCards();

function getAllCards() {
    fighters.forEach((fighter, index, array) => {
        let cards = fighter.cards;
        cards.forEach((card, index, array) => {
            cardArray.push(card);
        })
    })
}

let cardsContainer = document.querySelector(".cards-container");

fighters.forEach((fighter, index, array) => {
    let name = fighter.name;
    name = name.toLocaleLowerCase();
    name = name.replace(/ /g, "-");

    let cards = fighter.cards;
    cards.forEach((card, index, array) => {
        let cardName = card.name;
        cardName = cardName.toLowerCase();
        cardName = cardName.replace(/ /g, "-");
        
        let newImage = document.createElement('img');
        newImage.classList.add("card");
        newImage.src = "./img/" + name + "/cards/" + name + "_card_" + cardName + ".jpg";
        cardsContainer.appendChild(newImage);
    });
});

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains("card")) {
        let card = event.target;
        let src = card.src;
        openModal(src);
    }
});

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains("modal__img") || event.target.classList.contains("modal__content") || event.target.classList.contains("modal__close-btn")) {
        closeModal();
    }
});

// $('html').keyup(function(e){
//     if(e.keyCode == 8 && $(".modal").hasClass("open")){
//         closeModal();
//     }
// });

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains("js_clear-set")) {
        clearFighters();
    }
});

function clearFighters() {
    fighterInputs.forEach((input) => {
        input.checked = false;
    });

    let array = getCards();
    placeCards(array);
}

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains("js_check-set")) {
        checkFighters();
    }
});

function checkFighters() {
    fighterInputs.forEach((input) => {
        input.checked = true;
    });

    let array = getCards();
    placeCards(array);
}