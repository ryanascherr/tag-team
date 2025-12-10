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
    }
];

let cardsContainer = document.querySelector(".cards-container");

fighters.forEach((fighter, index, array) => {
    let name = fighter.name;
    name = name.toLocaleLowerCase();
    let cards = fighter.cards;
    cards.forEach((card, index, array) => {
        let cardName = card.name;
        cardName = cardName.toLowerCase();
        cardName = cardName.replace(/ /g, "-");
        
        let newImage = document.createElement('img');
        newImage.src = "/img/" + name + "/cards/" + name + "_card_" + cardName + ".jpg";
        cardsContainer.appendChild(newImage);
    });
});