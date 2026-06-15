// TODO
// Fix Wong and Maman starting card in fighter section
// Fix layout of fighter section
// Lazy loading
// Further refactor CSS

import { fighters } from "./fighters.js";
import { getCards } from "./getCards.js";
import { placeCards } from "./placeCards.js";
import { makeLowerCase } from "./makeLowerCase.js";
import { openModal, closeModal } from "./modalControl.js";

// GENERAL START

// When a tab is clicked, hide all tab containers then show the correct one
document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains("js_tab")) {
        let tabElems = document.querySelectorAll(".js_tab");
        let tabContainers = document.querySelectorAll(".tab")
        let cardsTab = document.querySelector(".tab-cards");
        let fightersTab = document.querySelector(".tab-fighters");
        let pairsTab =  document.querySelector(".tab-pair");

        tabElems.forEach((tab) => {
            tab.classList.remove("active");
        });

        event.target.classList.add("active");

        tabContainers.forEach((tabContainer) => {
            tabContainer.classList.add("hidden");
        });

        if (event.target.classList.contains("js_cards")) {
            cardsTab.classList.remove("hidden");
        }
        if (event.target.classList.contains("js_fighters")) {
            fightersTab.classList.remove("hidden");
            displayFighterCards();
        }
        if (event.target.classList.contains("js_pair")) {
            pairsTab.classList.remove("hidden");
        }
    }
});

// GENERAL END
// MODAL START

// When a card is clicked, open modal
document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains("card")) {
        let card = event.target;
        let src = card.src;
        openModal(src);
    }
});

// When modal image or content or close button is clicked, close modal
document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains("modal__img") || event.target.classList.contains("modal__content") || event.target.classList.contains("modal__close-btn")) {
        closeModal();
    }
});

// MODAL END
// CARDS TAB START

let allInputs = document.querySelectorAll(".js_criteria");
let fighterInputs = document.querySelectorAll(".js_fighter");
let cardsContainer = document.querySelector(".cards-container");

// When an input changes, show appropriate cards and show number of results
allInputs.forEach((input) => {
    input.addEventListener('change', function() {
        handleCards();
        displayResultsCount();
    });
});

// Check all filters and show cards accordingly
handleCards();
function handleCards() {
    let array = getCards();
    placeCards(array);
}

// Count how many cards have been displayed and show that number
displayResultsCount();
function displayResultsCount() {
    let resultCount = cardsContainer.childElementCount;
    let resultsElem = document.querySelector(".js_results-number");
    resultsElem.textContent = resultCount + " Cards Found";
}

// When 'clear all' button is clicked, remove checkmarks from all fighters
document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains("js_clear-set")) {
        clearFighters();
    }
});
function clearFighters() {
    fighterInputs.forEach((input) => {
        input.checked = false;
    });

    handleCards();
    displayResultsCount();
}

// When 'check all' button is clicked, add checkmarks to all fighters
document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains("js_check-set")) {
        checkFighters();
    }
});
function checkFighters() {
    fighterInputs.forEach((input) => {
        input.checked = true;
    });

    handleCards();
    displayResultsCount();
}

// When set button is clicked, uncheck all checkboxes and then check the checkboxes of fighters from that set
document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains("js_set")) {
        fighterInputs.forEach((input) => {
            input.checked = false;
        });

        let inputsToBeChecked = [];

        if (event.target.classList.contains("js_base-set-btn")) {
            inputsToBeChecked = this.querySelectorAll(".js_base-set");
        }
        if (event.target.classList.contains("js_arthurs-legacy-btn")) {
            inputsToBeChecked = this.querySelectorAll(".js_arthurs-legacy");
        }
        if (event.target.classList.contains("js_new-set-btn")) {
            inputsToBeChecked = this.querySelectorAll(".js_new-set");
        }

        inputsToBeChecked.forEach((input) => {
            input.checked = true;
        });

        handleCards();
        displayResultsCount();
    }
});

// CARDS TAB END
// FIGHTERS TAB START

let fighterDropdown = document.getElementById("fighter-select");

// When fighter dropdown is changed, show all info for that fighter (i.e., fighter board(s), bio, stats, card distribution, and cards)

fighterDropdown.addEventListener("change", () => {
    displayFighterCards();
});

function displayFighterCards() {
    let selectedValue = fighterDropdown.value;
    let selectedFighter = document.querySelector(".fighter#" + selectedValue);

    let selectedOption = fighterDropdown.options[fighterDropdown.selectedIndex];
    let properName = selectedOption.text;

    showFighter(selectedFighter, properName);
}

function showFighter(selectedFighter, properName) {
    let fighters = document.querySelectorAll(".fighter");

    fighters.forEach((fighter) => {
        fighter.classList.add("hidden");
    });

    selectedFighter.classList.remove("hidden");

    placeFighterCards(properName);
}

// TODO Make this other function
function placeFighterCards(fighterName) {
    let cardsContainer = document.querySelector(".tab-fighters .fighter-cards");
    cardsContainer.innerHTML = "";

    fighters.forEach((fighter) => {
        if (fighter.name === fighterName) {
            fighter.cards.forEach((card) => {
                let name = makeLowerCase(card.fighter);
                let cardName = makeLowerCase(card.name);
                let copies = card.copies;

                for (let i = 0; i < copies; i++) {
                    let newImage = document.createElement('img');
                    newImage.classList.add("card");

                    if (card.hasNonStarters && i !== 0) {
                        newImage.src = "./img/" + name + "/cards/" + name + "_card_" + cardName + "_non-starter.jpg";
                    } else {
                        newImage.src = "./img/" + name + "/cards/" + name + "_card_" + cardName + ".jpg";
                    }

                    cardsContainer.appendChild(newImage);
                }
            })
        }
    })
}

// FIGHTERS TAB END
// PAIRS TAB START

// When 'random pair' button is clicked...
// - Get two different random numbers of fighters
// - Get the fighters' names
// - Show their fighter boards, show their cards, and show their card distributions
document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains("js_random-pair-btn")) {
        let randomNumberOne = Math.floor(Math.random() * 24);
        let randomNumberTwo = Math.floor(Math.random() * 24);

        checkNumbers();
        function checkNumbers() {
            if (randomNumberOne === randomNumberTwo) {
                randomNumberTwo = Math.floor(Math.random() * 24);
                checkNumbers();
            }
        }

        let fighterOne = fighters[randomNumberOne].name;
        let fighterTwo = fighters[randomNumberTwo].name;

        placeFighterBoards(fighterOne, fighterTwo);
        placePairCards(fighterOne, fighterTwo);
    }
});

function placeFighterBoards(fighterOne, fighterTwo) {
    fighterOne = makeLowerCase(fighterOne);
    fighterTwo = makeLowerCase(fighterTwo);

    let boardContainer = document.querySelector(".js_pair-container");
    boardContainer.innerHTML = "";

    if (fighterOne !== "choose-a-fighter") {
        let newImageOne = document.createElement('img');
        newImageOne.classList.add("pair__board");
        newImageOne.src = "./img/" + fighterOne + "/other/" + fighterOne + "_board.jpg";
        boardContainer.appendChild(newImageOne);
    }

    if (fighterTwo !== "choose-a-fighter") {
        let newImageTwo = document.createElement('img');
        newImageTwo.classList.add("pair__board");
        newImageTwo.src = "./img/" + fighterTwo + "/other/" + fighterTwo + "_board.jpg";
        boardContainer.appendChild(newImageTwo);
    }
};

// TODO: Make into other function
function placePairCards(fighterOne, fighterTwo) {
    let cardsContainer = document.querySelector(".tab-pair .fighter-cards");
    cardsContainer.innerHTML = "";

    let numberOfAttacks = 0;
    let numberOfBlocks = 0;
    let numberOfHeals = 0;
    let numberOfPowerGains = 0;

    fighters.forEach((fighter) => {
        if (fighter.name === fighterOne) {
            fighter.cards.forEach((card) => {
                let name = makeLowerCase(card.fighter);
                let cardName = makeLowerCase(card.name);
                let copies = card.copies;

                for (let i = 0; i < copies; i++) {
                    let newImage = document.createElement('img');
                    newImage.classList.add("card");

                    if (card.hasNonStarters && i !== 0) {
                        newImage.src = "./img/" + name + "/cards/" + name + "_card_" + cardName + "_non-starter.jpg";
                    } else {
                        newImage.src = "./img/" + name + "/cards/" + name + "_card_" + cardName + ".jpg";
                    }

                    cardsContainer.appendChild(newImage);

                    if (card.hasAttack) {
                        numberOfAttacks++;
                    }
                    if (card.hasBlock || card.hasReflect) {
                        numberOfBlocks++;
                    }
                    if (card.hasHeal) {
                        numberOfHeals++;
                    }
                    if (card.hasGainPower) {
                        numberOfPowerGains++;
                    }
                }
            })
        };
    })

    fighters.forEach((fighter) => {
        if (fighter.name === fighterTwo) {
            fighter.cards.forEach((card) => {
                let name = makeLowerCase(card.fighter);
                let cardName = makeLowerCase(card.name);
                let copies = card.copies;

                for (let i = 0; i < copies; i++) {
                    let newImage = document.createElement('img');
                    newImage.classList.add("card");

                    if (card.hasNonStarters && i !== 0) {
                        newImage.src = "./img/" + name + "/cards/" + name + "_card_" + cardName + "_non-starter.jpg";
                    } else {
                        newImage.src = "./img/" + name + "/cards/" + name + "_card_" + cardName + ".jpg";
                    }

                    cardsContainer.appendChild(newImage);

                    if (card.hasAttack) {
                        numberOfAttacks++;
                    }
                    if (card.hasBlock || card.hasReflect) {
                        numberOfBlocks++;
                    }
                    if (card.hasHeal) {
                        numberOfHeals++;
                    }
                    if (card.hasGainPower) {
                        numberOfPowerGains++;
                    }
                }
            })
        };
    })

    displayPairStats(numberOfAttacks, numberOfBlocks, numberOfHeals, numberOfPowerGains)
};

// When dropdown is changed, look at both dropdowns and display the info for the appropriate fighters
let pairDropdownOne = document.getElementById("fighter-pair-one");
pairDropdownOne.addEventListener("change", () => {
    handlePairDropdowns();
});

let pairDropdownTwo = document.getElementById("fighter-pair-two");
pairDropdownTwo.addEventListener("change", () => {
    handlePairDropdowns();
});

function handlePairDropdowns() {
    let selectedOptionOne = pairDropdownOne.options[pairDropdownOne.selectedIndex];
    let selectedOptionTwo = pairDropdownTwo.options[pairDropdownTwo.selectedIndex];
    let properNameOne = selectedOptionOne.text;
    let properNameTwo = selectedOptionTwo.text;

    placeFighterBoards(properNameOne, properNameTwo);
    placePairCards(properNameOne, properNameTwo);
}

function displayPairStats(numberOfAttacks, numberOfBlocks, numberOfHeals, numberOfPowerGains) {
    let statsContainer = document.querySelector(".js_pair-stats");

    let attackPercent = (numberOfAttacks/20 * 100).toFixed(0);
    let blockPercent = (numberOfBlocks/20 * 100).toFixed(0);
    let healPercent = (numberOfHeals/20 * 100).toFixed(0);
    let powerGainPercent = (numberOfPowerGains/20 * 100).toFixed(0);

    statsContainer.innerHTML = `
        <h3>Attacks: ${numberOfAttacks} | ${attackPercent}%</h3>
        <h3>Blocks: ${numberOfBlocks} | ${blockPercent}%</h3>
        <h3>Heals: ${numberOfHeals} | ${healPercent}%</h3>
        <h3>Power Gains: ${numberOfPowerGains} | ${powerGainPercent}%</h3>
    `;
}

// PAIRS TAB END