import { nameInput, tonnageInput, amountInput, } from "./main.js"
let cardContainer = document.getElementById('cards');

let cardTemplate = ({ nameShip, tonnage, amount }) =>
    `               <div class="card">
                        <div class="card-img">
                            <img src="#" alt="250 X 70">
                        </div>
                        <div class="card-text">
                            <div class="card-main-text"><p>"${nameShip}" the name of ship</p></div>
                            <div class="card-secondary-text"><p>${tonnage} tonnage</p></div>
                            <div class="card-secondary-text"><p>${amount} amount</p></div>
                            <div class="card-buttons">
                                <button class="button__edit">Edit</button>
                                <button class="button__remove">Remove</button>
                            </div>
                        </div>
                    </div>`;



export const addCard = ({nameShip, tonnage, amount }) => {
    cardContainer.insertAdjacentHTML(
        "afterbegin",
        cardTemplate({nameShip, tonnage, amount })
    );
};

export const renderItemsList = (items) => {
    cardContainer.innerHTML = "";

    for (const item of items) {
        addCard(item);
    }
};

export const clearInputs = () => {
    nameInput.value = "";
    tonnageInput.value = "";
    amountInput.value = "";
};

export const getInputValues = () => {
    return {
        nameShip: nameInput.value,
        tonnage: tonnageInput.value,
        amount: amountInput.value
    };
};