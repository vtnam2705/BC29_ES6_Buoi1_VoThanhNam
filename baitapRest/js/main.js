getID = (id) => {
    return document.getElementById(id);
}

// Hàm tính trung bình
function average(...arrPts) {
    let total = 0;
    let n = 0;

    for (const num of arrPts) {
        total += num;
        n = arrPts.length;
    }
    return total/n;
}



// --------------------------------------------------
getID("btnKhoi1").onclick = () => {
    let toan = Number(getID("inpToan").value);
    let ly = Number(getID("inpLy").value);
    let hoa = Number(getID("inpHoa").value);


    let consult = average(toan, ly, hoa).toFixed(1);

    getID("tbKhoi1").innerHTML = consult;
};


// -------------------------------------------------------
getID("btnKhoi2").onclick = () => {
    let van = Number(getID("inpVan").value);
    let su = Number(getID("inpSu").value);
    let dia = Number(getID("inpDia").value);
    let eng = Number(getID("inpEnglish").value);


    let consult = average(van, su, dia, eng).toFixed(1);

    getID("tbKhoi2").innerHTML = consult;
}

