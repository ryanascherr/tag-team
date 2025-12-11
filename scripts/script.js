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
                isStarter: true,
                copies: 1,
                hasAttack: true,
                hasSpecial: true,
            },
            {
                fighter: "Bodvar",
                name: "Berserk!",
                copies: 2,
                hasAttack: true,
                hasAttackPartner: true,
                hasAttackBoth: true
            },
            {
                fighter: "Bodvar",
                name: "Blood Ties",
                copies: 2,
                hasAttack: true,
                hasHeal: true,
                hasHealAlly: true
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
                hasSpecial: true
            },
            {
                fighter: "Bodvar",
                name: "Spirit Trance",
                copies: 1,
                hasGainPower: true,
                hasPowerSelf: true,
                hasDirectDamage: true,
                hasHurtSelf: true
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
                isStarter: true,
                hasAttack: true,
                hasHeal: true,
                hasSpecial: true,
                hasDirectDamage: true
            },
            {
                fighter: "Ching Shih",
                name: "Gunpowder Wine",
                copies: 1,
                hasHeal: true,
                hasHealAlly: true,
                hasHealBoth: true
            },
            {
                fighter: "Ching Shih",
                name: "Join the Fleet!",
                copies: 1,
                hasSpecial: true
            },
            {
                fighter: "Ching Shih",
                name: "Outmaneuvered",
                copies: 2,
                hasAttack: true,
                hasSpecial: true
            },
            {
                fighter: "Ching Shih",
                name: "Raiding Party",
                copies: 1,
                hasGainPower: true,
                hasPowerAlly: true
            },
            {
                fighter: "Ching Shih",
                name: "Revenge of the Red Flag Fleet",
                copies: 1,
                hasAttack: true,
                hasPartnerAttack: true,
                hasAttackBoth: true
            },
            {
                fighter: "Ching Shih",
                name: "Secret Harbor",
                copies: 2,
                hasBlock: true,
                hasSpecial: true
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
        name: "Joan",
        health: 18,
        startingPower: 1,
        specialTrack: true,
        cards: [
            {
                fighter: "Joan",
                name: "Dieu Premier Servi"
            },
            {
                fighter: "Joan",
                name: "Divine Vision",
                hasHeal: true,
            },
            {
                fighter: "Joan",
                name: "Hand of the Righteous",
                hasAttack: true
            },
            {
                fighter: "Joan",
                name: "Holy Shield",
                hasBlock: true
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
                hasAttack: true,
                hasDirectDamage: true
            },
            {
                fighter: "Maman Brijit",
                name: "Eternal Youth"
            },
            {
                fighter: "Maman Brijit",
                name: "Sacrifice of Love",
                hasDirectDamage: true,
                hasHeal: true
            },
            {
                fighter: "Maman Brijit",
                name: "Soul Embrace",
                hasDirectDamage: true,
                hasGainPower: true
            },
            {
                fighter: "Maman Brijit",
                name: "The Black Rooster"
            },
            {
                fighter: "Maman Brijit",
                name: "You Are Mine",
                hasBlock: true
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
                hasAttack: true,
                hasGainPower: true
            },
            {
                fighter: "Mephisto",
                name: "Drag You to Hell"
            },
            {
                fighter: "Mephisto",
                name: "Fury of the Damned",
                hasDirectDamage: true
            },
            {
                fighter: "Mephisto",
                name: "Serpent of the Pit",
                hasAttack: true,
                hasDirectDamage: true
            },
            {
                fighter: "Mephisto",
                name: "Serpent of the Void",
                hasHeal: true
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
        name: "Milady",
        health: 16,
        startingPower: 1,
        cards: [
            {
                fighter: "Milady",
                name: "Dressed to Kill"
            },
            {
                fighter: "Milady",
                name: "Checkmate"
            },
            {
                fighter: "Milady",
                name: "I Keep My Friends Close",
                hasHeal: true
            },
            {
                fighter: "Milady",
                name: "Licking My Wounds",
                hasHeal: true
            },
            {
                fighter: "Milady",
                name: "So Predictable",
                hasBlock: true
            },
            {
                fighter: "Milady",
                name: "What Doesnt Kill You Makes Me Stronger",
                hasAttack: true,
                hasGainPower: true
            },
            {
                fighter: "Milady",
                name: "With a Stab and a Smile",
                hasAttack: true
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
                hasAttack: true,
                hasGainPower: true
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
                hasDirectDamage: true
            },
            {
                fighter: "Mordred",
                name: "Hidden Dagger",
                hasAttack: true
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
        name: "Shango",
        health: 15,
        startingPower: 0,
        cards: [
            {
                fighter: "Shango",
                name: "Aflame!"
            },
            {
                fighter: "Shango",
                name: "Breath of Fire",
                hasAttack: true
            },
            {
                fighter: "Shango",
                name: "Cauterize",
                hasHeal: true
            },
            {
                fighter: "Shango",
                name: "Lightning Strike",
                hasAttack: true
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
        name: "The Fey Folk",
        health: 3-5,
        startingPower: 0,
        cards: [
            {
                fighter: "The Fey Folk",
                name: "All Legends Must Pass"
            },
            {
                fighter: "The Fey Folk",
                name: "Entanglement"
            },
            {
                fighter: "The Fey Folk",
                name: "Fairy Ring",
                hasHeal: true
            },
            {
                fighter: "The Fey Folk",
                name: "Spirit Storm",
                hasAttack: true
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
                hasAttack: true,
                hasDirectDamage: true
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
        name: "The Wild Bunch",
        health: 5,
        startingPower: 1,
        cards: [
            {
                fighter: "The Wild Bunch",
                name: "Corrupted Lawman",
                hasAttack: true,
                hasGainPower: true
            },
            {
                fighter: "The Wild Bunch",
                name: "Back to the Hideout",
                hasHeal: true
            },
            {
                fighter: "The Wild Bunch",
                name: "Bribe",
                hasBlock: true
            },
            {
                fighter: "The Wild Bunch",
                name: "Keys to the Armory",
                hasGainPower: true
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
                hasDirectDamage: true
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
                hasAttack: true
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