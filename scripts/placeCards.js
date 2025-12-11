export function placeCards(array) {
    let cardsContainer = document.querySelector(".cards-container");
    cardsContainer.innerHTML = "";

    array.forEach((card, index, array) => {
        let name = card.fighter;
        name = name.toLocaleLowerCase();
        name = name.replace(/ /g, "-");

        let cardName = card.name;
        cardName = cardName.toLowerCase();
        cardName = cardName.replace(/ /g, "-");
        
        let newImage = document.createElement('img');
        newImage.src = "./img/" + name + "/cards/" + name + "_card_" + cardName + ".jpg";
        cardsContainer.appendChild(newImage);
    });
}