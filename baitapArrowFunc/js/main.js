// getID = (id) => {
//     return document.getElementById(id);
// }

// const colorList = [
//     "pallet",
//     "viridian",
//     "pewter",
//     "cerulean",
//     "vermillion",
//     "lavender",
//     "celadon",
//     "saffron",
//     "fuschia",
//     "cinnabar"
// ]

// // Display color button on screen
// var content = "";
// colorList.forEach((element) => {
//     content += `
//             <button class="color-button ${element}"></button>
//         `
// })

// getID("colorContainer").innerHTML = content;

// // Change house color


// // let items = document.querySelectorAll('.color-button');
// // let house = document.querySelector('.house');

// // for (let i = 0; i < items.length; i++) {
// //     items[i].onclick = () => {
// //         let question = house.classList.contains(`${colorList[i]}`);
// //         // console.log(question);
// //         if (question) {
// //             console.log(question);
// //             house.classList.remove(`${colorList[i]}`);
// //             items[i].classList.remove("active");
// //         } else {
// //             house.classList.add(`${colorList[i]}`);
// //             items[i].classList.add("active");
// //         }
// //         // console.log(items[i])
// //     }

// // }


// const removeActiveColor = () => {
//     let btnActive = document.getElementsByClassName("color-button");
//     for (let i = 0; i < btnActive.length; i++) {
//         btnActive[i].addEventListener("click", function () {
//             let render = document.getElementsByClassName("active");
//             render[0].className = render[0].className.replace(" active", "");
//             this.className += " active";
//         });
//     }
// }

// const changeColor = (items) => {
//     removeActiveColor();
//     let colorHouse = getID("house").classList;

//     colorHouse.value = `house ${items}`;
// }

// changeColor();

const getEle = id => document.getElementById(id);

const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"]

const renderButton = () => {
    let content = '';
    colorList.forEach((items, idx) => {
        if (idx === 0) {
            content += `<button class= "color-button ${items} active" onclick = changeColor('${items}') ></button>`;
        } else {
            content += `<button class= "color-button ${items}" onclick = changeColor('${items}')></button>`;
        }
    });
    getEle("colorContainer").innerHTML = content;
}

renderButton();

const removeActiveColor = () => {
    let btnActive = document.getElementsByClassName("color-button");
    for (let i = 0; i < btnActive.length; i++) {
        btnActive[i].addEventListener("click", function () {
            let render = document.getElementsByClassName("active");
            render[0].className = render[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

const changeColor = (items) => {
    removeActiveColor();
    let colorHouse = getEle("house").classList;

    colorHouse.value = `house ${items}`;
}

changeColor();