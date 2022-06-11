getID = (id) => {
    return document.getElementById(id);
}

getID("confirm").onclick = () => {
    let txtVal = getID("input").value;

    let str = document.getElementsByClassName("heading")[0].innerHTML;
    str = txtVal;

    let chars = [...str];


    let content = "";
    chars.forEach((element) => {
        content += `
            <span>${element}</span>
        `
    
        document.querySelector(".heading").innerHTML = content;
    })

}


// *********************************************************************
// let str = document.getElementsByClassName("heading")[0].innerHTML;

// let chars = [...str];

// let content = "";
// chars.forEach((element) => {
//     content += `
//         <span>${element}</span>
//     `

//     document.querySelector(".heading").innerHTML = content;
// })