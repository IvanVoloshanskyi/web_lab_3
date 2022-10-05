import { addCard, getInputValues, clearInputs, renderItemsList, } from "./item.js";
const HIDDEN_CLASSNAME = "hidden";
const SELECTED_CLASSNAME = "selected";

const submitButton = document.getElementById("submit-button");
const countButton = document.getElementById("count-button");
const clearFindButton = document.getElementById("clear_button");
const buttonMyShip = document.querySelectorAll("#myship");
const buttonAddShip = document.querySelectorAll("#addship");

const findInput = document.getElementById("find_input");
const searchButton = document.getElementById("search_button");

const homePage = document.getElementById("homepage")
const createPage = document.getElementById("createpage")
const headerItem = document.querySelectorAll("nav-item")


export const nameInput = document.getElementById("name-input");
export const tonnageInput = document.getElementById("tonnage-input");
export const amountInput = document.getElementById("amount-input");

let ships = [];

buttonAddShip.forEach(element => {
    element.addEventListener("click", () => {
        homePage.classList.toggle(HIDDEN_CLASSNAME);
        createPage.classList.toggle(HIDDEN_CLASSNAME);
        headerItem.forEach(item => item.classList.toggle(SELECTED_CLASSNAME));
    });
});


buttonMyShip.forEach(element => {
    element.addEventListener("click", () => {
        homePage.classList.toggle(HIDDEN_CLASSNAME);
        createPage.classList.toggle(HIDDEN_CLASSNAME);
    });
});


const addItem = ({ nameShip, tonnage, amount }) => {
    const newItem = {
        nameShip: nameShip,
        tonnage: tonnage,
        amount: amount,
    }

    ships.push(newItem)
    addCard(newItem)
}


submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    const { nameShip, tonnage, amount } = getInputValues();
    clearInputs();
    console.log(JSON.stringify(ships))

    addItem({ nameShip, tonnage, amount })
})


searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(ships, " <- SHIPS");
    console.log(JSON.stringify(ships))

    const findShips = ships.filter(
        (ship) => ship.nameShip.search(findInput.value) !== -1
    );
    findInput.value = ""
    renderItemsList(findShips)
    console.log(findShips, " <- findShips");


});


clearFindButton.addEventListener("click", (event) => {
    event.preventDefault()
    renderItemsList(ships)

    findInput.value = ""
})


let sortCheckbox = document.getElementById("sorting")

sortCheckbox.addEventListener("change", event => {
    if (sortCheckbox.checked) {
        const sortedShips = ships.sort((a, b) =>{
            return a.amount - b.amount
        })
        renderItemsList(sortedShips)
    } else{ 
        renderItemsList(ships)}
})
        
let countResult = document.getElementById("total-result")
countButton.addEventListener("click", () => {
    countResult.innerHTML = `${ships.length} ships`;
});



renderItemsList(ships);