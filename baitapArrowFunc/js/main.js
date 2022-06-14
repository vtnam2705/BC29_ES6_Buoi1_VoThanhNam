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