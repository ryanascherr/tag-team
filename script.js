let fighters = [
    {
        name: "Bodvar",
        health: 11,
        startingPower: 3,
        specialTrack: true,
        cards: [
            {
                name: "Enrage",
                starter: true,
                copies: 1,
                hasAttack: true,
                hasSpecial: true,
            },
            {
                name: "Berserk!",
                copies: 2,
                hasAttack: true,
                canAttackPartner: true,
                canAttackBoth: true
            },
            {
                name: "Blood Ties",
                copies: 2,
                hasAttack: true,
                hasHeal: true,
                canHealAlly: true
            },
            {
                name: "Rune of Strength",
                copies: 2,
                canBlock: true,
                hasGainPower: true,
                canPowerSelf: true,
            },
            {
                name: "Rune of Transformation",
                copies: 2,
                canBlock: true,
                hasSpecial: true
            },
            {
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
                name: "Terror of the Seas"
            },
            {
                name: "Gunpowder Wine"
            },
            {
                name: "Join the Fleet!"
            },
            {
                name: "Outmaneuvered"
            },
            {
                name: "Raiding Party"
            },
            {
                name: "Revenge of the Red Flag Fleet"
            },
            {
                name: "Secret Harbor"
            },
            {
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
                name: "Dieu Premier Servi"
            },
            {
                name: "Divine Vision"
            },
            {
                name: "Hand of the Righteous"
            },
            {
                name: "Holy Shield"
            },
            {
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
                name: "Chili Pepper Rum"
            },
            {
                name: "Eternal Youth"
            },
            {
                name: "Sacrifice of Love"
            },
            {
                name: "Soul Embrace"
            },
            {
                name: "The Black Rooster"
            },
            {
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
                name: "Twin Serpents"
            },
            {
                name: "Drag You to Hell"
            },
            {
                name: "Fury of the Damned"
            },
            {
                name: "Serpent of the Pit"
            },
            {
                name: "Serpent of the Void"
            },
            {
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
                name: "Dressed to Kill"
            },
            {
                name: "Checkmate"
            },
            {
                name: "I Keep My Friends Close"
            },
            {
                name: "Licking My Wounds"
            },
            {
                name: "So Predictable"
            },
            {
                name: "What Doesnt Kill You Makes Me Stronger"
            },
            {
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
                name: "Dark Power"
            },
            {
                name: "Cloak of Shadow"
            },
            {
                name: "Execution"
            },
            {
                name: "Hidden Dagger"
            },
            {
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
                name: "Aflame!"
            },
            {
                name: "Breath of Fire"
            },
            {
                name: "Cauterize"
            },
            {
                name: "Lightning Strike"
            },
            {
                name: "Thunder Stone"
            },
            {
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
                name: "All Legends Must Pass"
            },
            {
                name: "Entanglement"
            },
            {
                name: "Fairy Ring"
            },
            {
                name: "Spirit Storm"
            },
            {
                name: "Summoning Leshi"
            },
            {
                name: "Summoning Redcap"
            },
            {
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
                name: "Protect the Innocent"
            },
            {
                name: "Fist of Clay"
            },
            {
                name: "Heal the Wounded"
            },
            {
                name: "Reanimation"
            },
            {
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
                name: "Corrupted Lawman"
            },
            {
                name: "Back to the Hideout"
            },
            {
                name: "Bribe"
            },
            {
                name: "Keys to the Armory"
            },
            {
                name: "Outlaw Doc"
            },
            {
                name: "Sheriffs Personal Gatling Gun"
            },
            {
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
                name: "The Harder They Fall"
            },
            {
                name: "Chi Focus"
            },
            {
                name: "Crippling Touch"
            },
            {
                name: "Ging Balance"
            },
            {
                name: "Ging Bridge"
            },
            {
                name: "Tiger Fist"
            },
        ]
    }
];

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