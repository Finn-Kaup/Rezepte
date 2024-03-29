
let designSheet = document.querySelector("#designSheetId")

let title = document.querySelector("title");
let headline = document.querySelector("#headline");
let type = document.querySelector("#type");
let image = document.querySelector("#image");
let ingredients = document.querySelector("#ingredients");
let preparation = document.querySelector("#preparation");
let informationen = document.querySelector("#informationen");
let link = document.querySelector("#link");

if(localStorage.getItem("design") == "dark"){
    designSwitch();
    designSwitch();
}else{
    designSwitch();
    designSwitch();
}

function designSwitch(){
    if(localStorage.getItem("design") == "dark") {
        designSheet.setAttribute("href", "../../css/light-recipe.css");
        localStorage.setItem("design", "light");
    }else {
        designSheet.setAttribute("href", "../../css/dark-recipe.css");
        localStorage.setItem("design", "dark");
    }
}


function imageLoaded() {
    image.style.display = "block";
}

fetch("recipe.json")
.then(res => res.json())
.then(data => {
    let name = sessionStorage.getItem("name");
    let current = data[name]
    title.innerHTML = current.name;
    headline.innerHTML = current.name;

    type.innerHTML += current.type;
    fetch(`images/${current.name}.jpg`)
    .then( res => {if(res.ok) image.src = `images/${current.name}.jpg`})
    image.alt = current.name;

    for(i = 0; i < current.ingredients.length; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${current.ingredients[i][0] + " " + current.ingredients[i][1]}</td> <td>${current.ingredients[i][2]}</td>`
        ingredients.appendChild(tr);
    }
    for(i = 0; i < current.preparation.length; i++) {
        preparation.innerHTML  += current.preparation[i] + "<br><br>"
    }
    for(i = 0; i < current.informationen.length; i++) {
        informationen.innerHTML += current.informationen[i] + "<br><br>"
    }
    link.href= current.link
})
.catch(err => console.warn(err));

