getID = (id) => {
    return document.getElementById(id);
}

const colorList = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar"
]

// Display color button on screen
var content = "";
colorList.forEach((element) => {
    content += `
            <button class="color-button ${element}"></button>
        `
})

getID("colorContainer").innerHTML = content;

// Change house color


let items = document.querySelectorAll('.color-button');
let house = document.querySelector('.house');

for (let i = 0; i < items.length; i++) {
    items[i].onclick = () => {
        let question = house.classList.contains(`${colorList[i]}`);
        // console.log(question);
        if (question) {
            console.log(question);
            house.classList.remove(`${colorList[i]}`);
            items[i].classList.remove("active");
        } else {
            house.classList.add(`${colorList[i]}`);
            items[i].classList.add("active");
        }
        // console.log(items[i])
    }

}



