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
                starter: true,
                copies: 1,
                hasAttack: true,
                hasSpecial: true,
            },
            {
                fighter: "Bodvar",
                name: "Berserk!",
                copies: 2,
                hasAttack: true,
                canAttackPartner: true,
                canAttackBoth: true
            },
            {
                fighter: "Bodvar",
                name: "Blood Ties",
                copies: 2,
                hasAttack: true,
                hasHeal: true,
                canHealAlly: true
            },
            {
                fighter: "Bodvar",
                name: "Rune of Strength",
                copies: 2,
                canBlock: true,
                hasGainPower: true,
                canPowerSelf: true,
            },
            {
                fighter: "Bodvar",
                name: "Rune of Transformation",
                copies: 2,
                canBlock: true,
                hasSpecial: true
            },
            {
                fighter: "Bodvar",
                name: "Spirit Trance",
                copies: 1,
                hasGainPower: true,
                canPowerSelf: true,
                hasDirectDamage: true,
                canHurtSelf: true
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
                name: "Terror of the Seas"
            },
            {
                fighter: "Ching Shih",
                name: "Gunpowder Wine"
            },
            {
                fighter: "Ching Shih",
                name: "Join the Fleet!"
            },
            {
                fighter: "Ching Shih",
                name: "Outmaneuvered"
            },
            {
                fighter: "Ching Shih",
                name: "Raiding Party"
            },
            {
                fighter: "Ching Shih",
                name: "Revenge of the Red Flag Fleet"
            },
            {
                fighter: "Ching Shih",
                name: "Secret Harbor"
            },
            {
                fighter: "Ching Shih",
                name: "Spirited Defense"
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
                name: "Divine Vision"
            },
            {
                fighter: "Joan",
                name: "Hand of the Righteous"
            },
            {
                fighter: "Joan",
                name: "Holy Shield"
            },
            {
                fighter: "Joan",
                name: "Sword of St Michael"
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
                name: "Chili Pepper Rum"
            },
            {
                fighter: "Maman Brijit",
                name: "Eternal Youth"
            },
            {
                fighter: "Maman Brijit",
                name: "Sacrifice of Love"
            },
            {
                fighter: "Maman Brijit",
                name: "Soul Embrace"
            },
            {
                fighter: "Maman Brijit",
                name: "The Black Rooster"
            },
            {
                fighter: "Maman Brijit",
                name: "You Are Mine"
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
                name: "Twin Serpents"
            },
            {
                fighter: "Mephisto",
                name: "Drag You to Hell"
            },
            {
                fighter: "Mephisto",
                name: "Fury of the Damned"
            },
            {
                fighter: "Mephisto",
                name: "Serpent of the Pit"
            },
            {
                fighter: "Mephisto",
                name: "Serpent of the Void"
            },
            {
                fighter: "Mephisto",
                name: "Soul Siphon"
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
                name: "I Keep My Friends Close"
            },
            {
                fighter: "Milady",
                name: "Licking My Wounds"
            },
            {
                fighter: "Milady",
                name: "So Predictable"
            },
            {
                fighter: "Milady",
                name: "What Doesnt Kill You Makes Me Stronger"
            },
            {
                fighter: "Milady",
                name: "With a Stab and a Smile"
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
                name: "Dark Power"
            },
            {
                fighter: "Mordred",
                name: "Cloak of Shadow"
            },
            {
                fighter: "Mordred",
                name: "Execution"
            },
            {
                fighter: "Mordred",
                name: "Hidden Dagger"
            },
            {
                fighter: "Mordred",
                name: "Vicious Riposte"
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
                name: "Breath of Fire"
            },
            {
                fighter: "Shango",
                name: "Cauterize"
            },
            {
                fighter: "Shango",
                name: "Lightning Strike"
            },
            {
                fighter: "Shango",
                name: "Thunder Stone"
            },
            {
                fighter: "Shango",
                name: "Wall of Flame"
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
                name: "Fairy Ring"
            },
            {
                fighter: "The Fey Folk",
                name: "Spirit Storm"
            },
            {
                fighter: "The Fey Folk",
                name: "Summoning Leshi"
            },
            {
                fighter: "The Fey Folk",
                name: "Summoning Redcap"
            },
            {
                fighter: "The Fey Folk",
                name: "Summoning The Green Man"
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
                name: "Protect the Innocent"
            },
            {
                fighter: "The Golem",
                name: "Fist of Clay"
            },
            {
                fighter: "The Golem",
                name: "Heal the Wounded"
            },
            {
                fighter: "The Golem",
                name: "Reanimation"
            },
            {
                fighter: "The Golem",
                name: "Self Sacrifice"
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
                name: "Corrupted Lawman"
            },
            {
                fighter: "The Wild Bunch",
                name: "Back to the Hideout"
            },
            {
                fighter: "The Wild Bunch",
                name: "Bribe"
            },
            {
                fighter: "The Wild Bunch",
                name: "Keys to the Armory"
            },
            {
                fighter: "The Wild Bunch",
                name: "Outlaw Doc"
            },
            {
                fighter: "The Wild Bunch",
                name: "Sheriffs Personal Gatling Gun"
            },
            {
                fighter: "The Wild Bunch",
                name: "We Aint Here to Talk"
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
                name: "The Harder They Fall"
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Chi Focus"
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Crippling Touch"
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Ging Balance"
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Ging Bridge"
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Tiger Fist"
            },
        ]
    }
];

import { getCards } from "./getCards.js";
import { placeCards } from "./placeCards.js";

export let cardArray = [];

let fighterInputs = document.querySelectorAll(".js_fighter");
fighterInputs.forEach((fighterInput, index, array) => {
    fighterInput.addEventListener('change', function() {
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
        newImage.src = "./img/" + name + "/cards/" + name + "_card_" + cardName + ".jpg";
        cardsContainer.appendChild(newImage);
    });
});