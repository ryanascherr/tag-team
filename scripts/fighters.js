export let fighters = [
    // BASE SET
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
                affectsOpponentAlly: true,
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
                affectsFriendlyAlly: true,
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
        name: "Ching Shih",
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
                affectsFriendlyAlly: true,
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
                affectsFriendlyAlly: true,
                hasGainPower: true,
                hasPowerAlly: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Ching Shih",
                name: "Revenge of the Red Flag Fleet",
                copies: 1,
                affectsFriendlyAlly: true,
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
        name: "Joan",
        health: 18,
        startingPower: 1,
        specialTrack: true,
        cards: [
            {
                fighter: "Joan",
                name: "Dieu Premier Servi",
                copies: 1,
                isStartingCard: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Joan",
                name: "Divine Vision",
                copies: 2,
                affectsFriendlyAlly: true,
                hasHeal: true,
            },
            {
                fighter: "Joan",
                name: "Hand of the Righteous",
                copies: 2,
                hasAttack: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Joan",
                name: "Holy Shield",
                copies: 3,
                hasBlock: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Joan",
                name: "Sword of St Michael",
                copies: 2,
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
                copies: 2,
                isStartingCard: true,
                hasAttack: true,
                hasDirectDamage: true,
                hasSelfHarm: true,
                hasNonStarters: true
            },
            {
                fighter: "Maman Brijit",
                name: "Eternal Youth",
                copies: 1,
                hasCancel: true,
                hasConditional: true
            },
            {
                fighter: "Maman Brijit",
                name: "Sacrifice of Love",
                copies: 1,
                affectsFriendlyAlly: true,
                hasDirectDamage: true,
                hasHeal: true,
                hasSelfHarm: true
            },
            {
                fighter: "Maman Brijit",
                name: "Soul Embrace",
                copies: 2,
                affectsFriendlyAlly: true,
                hasDirectDamage: true,
                hasGainPower: true,
                hasSelfHarm: true
            },
            {
                fighter: "Maman Brijit",
                name: "The Black Rooster",
                copies: 2,
                hasCancel: true
            },
            {
                fighter: "Maman Brijit",
                name: "You Are Mine",
                copies: 2,
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
                copies: 3,
                isStartingCard: true,
                hasAttack: true,
                hasGainPower: true,
                hasUniqueIcon: true,
                hasConditional: true,
                hasNonStarters: true
            },
            {
                fighter: "Mephisto",
                name: "Drag You to Hell",
                copies: 1,
                hasConditional: true,
                hasWinCondition: true
            },
            {
                fighter: "Mephisto",
                name: "Fury of the Damned",
                copies: 1,
                hasDirectDamage: true,
                hasConditional: true,
                affectsStartingCard: true
            },
            {
                fighter: "Mephisto",
                name: "Serpent of the Pit",
                copies: 2,
                hasAttack: true,
                hasDirectDamage: true,
                hasUniqueIcon: true,
                hasConditional: true,
                hasSelfHarm: true
            },
            {
                fighter: "Mephisto",
                name: "Serpent of the Void",
                copies: 2,
                hasHeal: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Mephisto",
                name: "Soul Siphon",
                copies: 1,
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
                name: "Dressed to Kill",
                copies: 1,
                isStartingCard: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Milady",
                name: "Checkmate",
                copies: 2,
                hasUniqueIcon: true
            },
            {
                fighter: "Milady",
                name: "I Keep My Friends Close",
                copies: 1,
                affectsFriendlyAlly: true,
                hasHeal: true
            },
            {
                fighter: "Milady",
                name: "Licking My Wounds",
                copies: 2,
                hasHeal: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Milady",
                name: "So Predictable",
                copies: 2,
                hasBlock: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Milady",
                name: "What Doesnt Kill You Makes Me Stronger",
                copies: 1,
                hasAttack: true,
                hasGainPower: true,
                hasConditional: true
            },
            {
                fighter: "Milady",
                name: "With a Stab and a Smile",
                copies: 1,
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
                copies: 1,
                isStartingCard: true,
                hasAttack: true,
                hasGainPower: true,
                hasConditional: true
            },
            {
                fighter: "Mordred",
                name: "Cloak of Shadow",
                copies: 3,
                hasBlock: true,
                hasHeal: true
            },
            {
                fighter: "Mordred",
                name: "Execution",
                copies: 1,
                hasDirectDamage: true,
                hasConditional: true
            },
            {
                fighter: "Mordred",
                name: "Hidden Dagger",
                copies: 3,
                hasAttack: true,
                hasConditional: true
            },
            {
                fighter: "Mordred",
                name: "Vicious Riposte",
                copies: 2,
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
                name: "Aflame!",
                copies: 1,
                isStartingCard: true,
                hasUniqueIcon: true,
                hasWinCondition: true
            },
            {
                fighter: "Shango",
                name: "Breath of Fire",
                copies: 3,
                hasAttack: true,
                hasUniqueIcon: true,
                hasWinCondition: true
            },
            {
                fighter: "Shango",
                name: "Cauterize",
                copies: 1,
                affectsFriendlyAlly: true,
                hasHeal: true
            },
            {
                fighter: "Shango",
                name: "Lightning Strike",
                copies: 2,
                affectsFriendlyAlly: true,
                affectsOpponentAlly: true,
                hasAttack: true,
                hasSelfHarm: true
            },
            {
                fighter: "Shango",
                name: "Thunder Stone",
                copies: 1,
                affectsFriendlyAlly: true,
                hasGainPower: true
            },
            {
                fighter: "Shango",
                name: "Wall of Flame",
                copies: 2,
                affectsFriendlyAlly: true,
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
                name: "All Legends Must Pass",
                copies: 1,
                isStartingCard: true,
                hasUniqueIcon: true,
                hasConditional: true,
                hasWinCondition: true
            },
            {
                fighter: "The Fey Folk",
                name: "Entanglement",
                copies: 2,
                hasCancel: true
            },
            {
                fighter: "The Fey Folk",
                name: "Fairy Ring",
                copies: 2,
                affectsFriendlyAlly: true,
                hasHeal: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Fey Folk",
                name: "Spirit Storm",
                copies: 2,
                hasAttack: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Fey Folk",
                name: "Summoning Leshi",
                copies: 1,
                affectsFriendlyAlly: true,
                hasBlock: true,
                hasGainPower: true
            },
            {
                fighter: "The Fey Folk",
                name: "Summoning Redcap",
                copies: 1,
                affectsFriendlyAlly: true,
                hasAttack: true,
                hasBlock: true
            },
            {
                fighter: "The Fey Folk",
                name: "Summoning The Green Man",
                copies: 1,
                affectsFriendlyAlly: true,
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
                copies: 2,
                isStartingCard: true,
                hasAttack: true,
                hasDirectDamage: true,
                hasUniqueIcon: true,
                hasConditional: true,
                hasSelfHarm: true,
                hasNonStarters: true
            },
            {
                fighter: "The Golem",
                name: "Fist of Clay",
                copies: 3,
                hasAttack: true
            },
            {
                fighter: "The Golem",
                name: "Heal the Wounded",
                copies: 2,
                affectsFriendlyAlly: true,
                hasHeal: true,
                hasInstantBonus: true
            },
            {
                fighter: "The Golem",
                name: "Reanimation",
                copies: 1,
            },
            {
                fighter: "The Golem",
                name: "Self Sacrifice",
                hasGainPower: true,
                affectsFriendlyAlly: true,
                copies: 2,
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
                copies: 1,
                isStartingCard: true,
                hasAttack: true,
                hasGainPower: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "The Wild Bunch",
                name: "Back to the Hideout",
                copies: 1,
                affectsFriendlyAlly: true,
                hasHeal: true,
                hasInstantBonus: true
            },
            {
                fighter: "The Wild Bunch",
                name: "Bribe",
                copies: 2,
                hasBlock: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Wild Bunch",
                name: "Keys to the Armory",
                copies: 1,
                hasGainPower: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Wild Bunch",
                name: "Outlaw Doc",
                affectsFriendlyAlly: true,
                copies: 2,
                hasHeal: true,
                hasInstantBonus: true
            },
            {
                fighter: "The Wild Bunch",
                name: "Sheriffs Personal Gatling Gun",
                copies: 1,
                hasAttack: true,
                hasDirectDamage: true,
                hasUniqueIcon: true,
                hasConditional: true,
                hasSelfHarm: true
            },
            {
                fighter: "The Wild Bunch",
                name: "We Aint Here to Talk",
                copies: 2,
                affectsOpponentAlly: true,
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
                copies: 2,
                isStartingCard: true,
                hasAttack: true,
                hasUniqueIcon: true,
                hasConditional: true,
                hasNonStarters: true
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Chi Focus",
                copies: 1,
                affectsFriendlyAlly: true,
                hasHeal: true,
                hasGainPower: true
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Crippling Touch",
                copies: 2,
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Ging Balance",
                affectsFriendlyAlly: true,
                copies: 2,
                hasBlock: true,
                hasGainPower: true,
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Ging Bridge",
                copies: 1,
                affectsFriendlyAlly: true,
                hasGainPower: true,
            },
            {
                fighter: "Wong Fei-Hung",
                name: "Tiger Fist",
                copies: 2,
                affectsFriendlyAlly: true,
                hasAttack: true,
                hasGainPower: true
            },
        ]
    },
    // ARTHUR'S LEGACY
    {
        name: "Excalibur",
        health: 7,
        startingPower: 0,
        cards: [
            {
                fighter: "Excalibur",
                name: "Sword of Destiny",
                copies: 1,
                affectsFriendlyAlly: true,
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
                copies: 1,
                affectsFriendlyAlly: true,
                hasDirectDamage: true,
                hasUniqueIcon: true,
                hasReflect: true,
                hasSelfHarm: true
            },
            {
                fighter: "Excalibur",
                name: "Pendragons Wrath",
                copies: 2,
                affectsFriendlyAlly: true,
                hasDirectDamage: true,
                hasAttack: true,
                hasUniqueIcon: true,
                hasSelfHarm: true
            },
            {
                fighter: "Excalibur",
                name: "Steel on Steel",
                copies: 2,
                affectsFriendlyAlly: true,
                hasDirectDamage: true,
                hasBlock: true,
                hasGainPower: true,
                hasUniqueIcon: true,
                hasSelfHarm: true
            },
            {
                fighter: "Excalibur",
                name: "Unleashed!",
                copies: 1,
                affectsFriendlyAlly: true,
                hasDirectDamage: true,
                hasAttack: true,
                hasUniqueIcon: true,
                hasSelfHarm: true
            },
            {
                fighter: "Excalibur",
                name: "Unstable Aura",
                copies: 2,
                affectsFriendlyAlly: true,
                hasHeal: true,
                hasUniqueIcon: true,
                hasReflect: true,
                hasSelfHarm: true
            },
            {
                fighter: "Excalibur",
                name: "What Should Not Have Been Broken",
                copies: 1,
                hasHeal: true,
                hasDirectDamage: true,
                hasUniqueIcon: true,
                hasSelfHarm: true
            },
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
                copies: 1,
                isStartingCard: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Merlin",
                name: "Dark Ritual",
                copies: 2,
                hasDirectDamage: true,
                hasGainPower: true,
                hasSelfHarm: true
            },
            {
                fighter: "Merlin",
                name: "Student of the Ancient Knowledge",
                copies: 3,
                hasUniqueIcon: true
            },
            {
                fighter: "Merlin",
                name: "The Standing Stones",
                copies: 2,
                affectsFriendlyAlly: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Merlin",
                name: "Word in the Forgotten Tongue",
                copies: 2,
                hasUniqueIcon: true
            },
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
                copies: 1,
                isStartingCard: true,
                hasGainPower: true,
                hasConditional: true,
                affectsStartingCard: true
            },
            {
                fighter: "Morgan",
                name: "Channel Power",
                copies: 2,
                affectsFriendlyAlly: true,
                hasBlock: true,
                hasGainPower: true
            },
            {
                fighter: "Morgan",
                name: "Crowsclaw Charm",
                copies: 1,
                affectsFriendlyAlly: true,
                hasBlock: true,
                hasHeal: true,
                hasHealAlly: true
            },
            {
                fighter: "Morgan",
                name: "Deadly Diversion",
                copies: 1,
                hasAttack: true,
                hasCancel: true
            },
            {
                fighter: "Morgan",
                name: "Magical Mirror",
                copies: 2,
                hasGainPower: true,
                hasAttack: true,
                hasConditional: true
            },
            {
                fighter: "Morgan",
                name: "Spiral of Life",
                copies: 2,
                affectsFriendlyAlly: true,
                hasHeal: true,
                hasHealBoth: true,
                hasConditional: true
            },
            {
                fighter: "Morgan",
                name: "The Enchantress",
                copies: 1,
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
                copies: 1,
                isStartingCard: true,
                hasAttack: true,
                hasBlock: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Perceval",
                name: "Act of Chivalry",
                copies: 2,
                affectsFriendlyAlly: true,
                hasBlock: true,
                hasHeal: true,
                hasHealBoth: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Perceval",
                name: "Coup de Grace",
                copies: 2,
                hasAttack: true,
                hasConditional: true
            },
            {
                fighter: "Perceval",
                name: "Quest for the Holy Grail",
                copies: 1,
                hasUniqueIcon: true
            },
            {
                fighter: "Perceval",
                name: "The Bleeding Lance",
                copies: 1,
                hasAttack: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Perceval",
                name: "The Quest Begins",
                copies: 2,
                hasAttack: true,
                hasHeal: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Perceval",
                name: "Vision of the Grail",
                copies: 1,
                hasGainPower: true
            },
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
                copies: 1,
                isStartingCard: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Dragon",
                name: "Dragonfire",
                copies: 2,
                hasAttack: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Dragon",
                name: "In the Heart of the Mountain",
                copies: 2,
                hasBlock: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Dragon",
                name: "Soul of the Wyrm",
                copies: 2,
                affectsFriendlyAlly: true,
                hasGainPower: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "The Dragon",
                name: "Tail Slash",
                copies: 2,
                hasAttack: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Dragon",
                name: "Under My Wing",
                affectsFriendlyAlly: true,
                copies: 1,
                hasHeal: true,
                hasHealAlly: true,
                hasUniqueIcon: true
            },
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
                copies: 1,
                isStartingCard: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Green Knight",
                name: "A Blow for a Blow",
                copies: 2,
                hasAttack: true,
                hasConditional: true
            },
            {
                fighter: "The Green Knight",
                name: "Donning the Greenwood Mask",
                copies: 2,
                affectsFriendlyAlly: true,
                hasGainPower: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Green Knight",
                name: "The Green Chapel",
                copies: 2,
                affectsFriendlyAlly: true,
                hasHeal: true,
                hasHealAlly: true,
                hasConditional: true
            },
            {
                fighter: "The Green Knight",
                name: "The Might of the Greenwood",
                copies: 1,
                hasAttack: true,
                hasUniqueIcon: true
            },
            {
                fighter: "The Green Knight",
                name: "The Mighty Battleaxe",
                copies: 2,
                hasAttack: true,
                hasDirectDamage: true,
                hasSelfHarm: true
            },
        ]
    },
    // NEW SET
    {
        name: "Big Brother",
        health: 17,
        startingPower: 2,
        cards: [
            {
                fighter: "Big Brother",
                name: "Giant Hammer",
                copies: 1,
                isStartingCard: true,
                hasUniqueIcon: true,
            },
            {
                fighter: "Big Brother",
                name: "Charge and Chill",
                copies: 2,
                hasUniqueIcon: true,
                hasGainPower: true,
                hasPowerAlly: true
            },
            {
                fighter: "Big Brother",
                name: "Emotional Support",
                copies: 2,
                hasHeal: true,
                hasHealAlly: true,
                affectsFriendlyAlly: true,
            },
            {
                fighter: "Big Brother",
                name: "Rush",
                copies: 2,
                hasAttack: true,
                hasUniqueIcon: true,
            },
            {
                fighter: "Big Brother",
                name: "Sneak Attack",
                copies: 2,
                hasAttack: true,
                hasAttackPartner: true,
                hasUniqueIcon: true,
                affectsOpponentAlly: true
            },
            {
                fighter: "Big Brother",
                name: "Steel Wall",
                copies: 1,
                hasHeal: true,
                hasGainPower: true,
                hasPowerAlly: true,
                hasBlock: true,
            },
        ]
    },
    {
        name: "Brawler",
        cards: [
            {
                fighter: "Brawler",
                name: "Beat",
                copies: 1,
                isStartingCard: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Brawler",
                name: "Beat em Up!",
                copies: 2,
                hasAttack: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Brawler",
                name: "Reversal",
                copies: 2,
                hasBlock: true,
                hasHeal: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Brawler",
                name: "Synchronized Beat",
                copies: 2,
                hasAttack: true,
                hasConditional: true,
                hasGainPower: true,
                affectsFriendlyAlly: true,
                hasUniqueIcon: true,
            },
            {
                fighter: "Brawler",
                name: "Teamwork",
                copies: 1,
                hasAttack: true,
                hasHeal: true,
                hasHealAlly: true,
                affectsFriendlyAlly: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
            {
                fighter: "Brawler",
                name: "Throw",
                copies: 2,
                hasDirectDamage: true,
                hasConditional: true
            },
        ]
    },
    {
        name: "Combo Master",
        cards: [
            {
                fighter: "Combo Master",
                name: "Relentless Pressure",
                copies: 1,
                isStartingCard: true,
                hasAttack: true,
                hasConditional: true,
                hasGainPower: true
            },
            {
                fighter: "Combo Master",
                name: "Change of Plans",
                copies: 2,
                hasConditional: true,
                hasGainPower: true
            },
            {
                fighter: "Combo Master",
                name: "Combotastic",
                copies: 2,
                hasAttack: true
            },
            {
                fighter: "Combo Master",
                name: "Helping Buddy",
                copies: 2,
                hasHeal: true,
                hasHealAlly: true,
                affectsFriendlyAlly: true,
                hasGainPower: true,
                hasInstantBonus: true
            },
            {
                fighter: "Combo Master",
                name: "Launcher",
                copies: 1,
                hasAttack: true,
                hasCancel: true,
                hasDirectDamage: true
            },
            {
                fighter: "Combo Master",
                name: "Rest",
                copies: 2,
                hasBlock: true,
                hasHeal: true,
                hasInstantBonus: true
            }
        ]
    },
    {
        name: "Hunter",
        cards: [
            {
                fighter: "Hunter",
                name: "Call of the Wild",
                copies: 1,
                isStartingCard: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Hunter",
                name: "Command Wolf",
                copies: 1,
                hasUniqueIcon: true
            },
            {
                fighter: "Hunter",
                name: "Focus",
                copies: 2,
                hasUniqueIcon: true
            },
            {
                fighter: "Hunter",
                name: "Heal",
                copies: 2,
                hasUniqueIcon: true,
                hasHeal: true,
                hasHealAlly: true,
                affectsFriendlyAlly: true
            },
            {
                fighter: "Hunter",
                name: "Pack Tactics",
                copies: 2,
                hasBlock: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Hunter",
                name: "Slash",
                copies: 2,
                hasAttack: true,
                hasHeal: true,
                hasHealAlly: true,
                affectsFriendlyAlly: true
            },
        ]
    },
    {
        name: "Ninja",
        cards: [
            {
                fighter: "Ninja",
                name: "Improvise",
                copies: 1,
                isStartingCard: true,
                hasUniqueIcon: true
            },
            {
                fighter: "Ninja",
                name: "Defend",
                copies: 2,
                hasBlock: true,
                hasGainPower: true,
                affectsFriendlyAlly: true
            },
            {
                fighter: "Ninja",
                name: "Meditation",
                copies: 2,
                hasConditional: true,
                hasGainPower: true,
                hasHeal: true
            },
            {
                fighter: "Ninja",
                name: "Smoke Bomb",
                copies: 2,
                hasBlock: true,
                hasAttack: true,
                affectsFriendlyAlly: true
            },
            {
                fighter: "Ninja",
                name: "Surprise Smash",
                copies: 3,
                hasAttack: true,
                hasUniqueIcon: true,
                hasConditional: true
            },
        ]
    },
    {
        name: "Samurai",
        cards: [
            {
                fighter: "Samurai",
                name: "Preparation",
                copies: 1,
                isStartingCard: true,
                hasUniqueIcon: true,
                hasGainPower: true
            },
            {
                fighter: "Samurai",
                name: "Bodyguard",
                copies: 3,
                hasBlock: true,
                hasHeal: true,
                hasHealAlly: true,
                hasHealBoth: true,
                affectsFriendlyAlly: true,
            },
            {
                fighter: "Samurai",
                name: "Hit and Run",
                copies: 2,
                hasAttack: true
            },
            {
                fighter: "Samurai",
                name: "Support",
                copies: 2,
                hasUniqueIcon: true,
                hasGainPower: true,
                affectsFriendlyAlly: true
            },
            {
                fighter: "Samurai",
                name: "Vitality",
                copies: 2,
                hasAttack: true,
                hasHeal: true
            },
        ]
    },
    {
        name: "The Cursed",
        cards: [
            {
                fighter: "The Cursed",
                name: "Cursed Power",
                copies: 2,
                isStartingCard: true,
                hasNonStarters: true,
                hasDirectDamage: true,
                hasGainPower: true,
                hasPowerSelf: true,
                hasSelfHarm: true
            },
            {
                fighter: "The Cursed",
                name: "Ancient Amulet",
                copies: 2,
                hasBlock: true
            },
            {
                fighter: "The Cursed",
                name: "Blood Bound",
                copies: 2,
                hasDirectDamage: true,
                hasHeal: true,
                affectsFriendlyAlly: true
            },
            {
                fighter: "The Cursed",
                name: "Fanatical Frenzy",
                copies: 2,
                hasAttack: true,
                hasAttackBoth: true,
                affectsOpponentAlly: true
            },
            {
                fighter: "The Cursed",
                name: "Ritual Dagger",
                copies: 2,
                hasAttack: true
            },
        ]
    },
];