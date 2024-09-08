function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "aqField", "mt-2");
    newNode.setAttribute("rows", "2");
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.parentNode.insertBefore(newNode, aqAddButtonOb);
}

function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", "2");
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.parentNode.insertBefore(newNode, weAddButtonOb);
}

function generateCV() {
    // Personal information
    let namefield = document.getElementById("nameT1").innerHTML = document.getElementById("nameField").value;
    let namefield2 = document.getElementById("nameT2").innerHTML = document.getElementById("nameField").value;

    let contact = document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    let address = document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    // social links
    let link1 = document.getElementById("fbT").href = document.getElementById("fbField").value;
    link1 = document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    let link2 = document.getElementById("LinkedInT").href = document.getElementById("LinkedInField").value;
    link2 = document.getElementById("LinkedInT").innerHTML = document.getElementById("LinkedInField").value;

    let link3 = document.getElementById("instaT").href = document.getElementById("instaField").value;
    link3 = document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    let objective = document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    if (!namefield, !namefield2, !contact, !address) {
        alert("Please fill the required field");
        return;
    }
    // Work Experience
    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        if (e.value.trim() !== "") {
            str += `<li>${e.value}</li>`;
        }
    }
    document.getElementById("weT").innerHTML = str || "<li>No work experience provided.</li>";

    // Academic Qualifications
    let aqs = document.getElementsByClassName("aqField");
    let str2 = "";
    for (let e of aqs) {
        if (e.value.trim() !== "") {
            str2 += `<li>${e.value}</li>`;
        }
    }
    document.getElementById("aqT").innerHTML = str2 || "<li>No qualifications provided.</li>";

    // Switch views
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-image");
let ProfileImage = document.getElementById("profile-image");

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
    ProfileImage.src = URL.createObjectURL(inputFile.files[0]);
}

function editCV() {
    document.getElementById('cv-template').style.display = 'none';
    document.getElementById('cv-form').style.display = 'block';
}

function printCV() {
    window.print();
}
