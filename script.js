
let aside = document.querySelector("aside");
let ceiling = document.querySelector("#ceiling");
let main = document.querySelector("main");
let designSheet = document.querySelector("#designSheetId");
let content = document.querySelectorAll(".content");

function openAside() {
    if(aside.style.display == "grid") {
        aside.style.display = "none";
        ceiling.style.display = "none";
    }else {
        aside.style.display = "grid";
        ceiling.style.display = "grid";
    }
}


if(localStorage.getItem("design") == null)localStorage.setItem("design", "dark");
if(localStorage.getItem("design") == "dark"){
    designSwitch();
    designSwitch();
}else{
    designSwitch();
    designSwitch();
}

function designSwitch(){
    if(localStorage.getItem("design") == "dark") {
        designSheet.setAttribute("href", "css/light.css");
        localStorage.setItem("design", "light");
    }else {
        designSheet.setAttribute("href", "css/dark.css");
        localStorage.setItem("design", "dark");
    }
}


function imageLoaded(divName) {
    divName.querySelector("img").style.display = "block";
}

fetch("recipe.json")
.then(res => res.json())
.then(data => {
    dataArray = Object.keys(data);
    for(i = 0; i < dataArray.length; i++) {
        const div = document.createElement("div");
        div.classList.add("content");
        div.setAttribute("id", dataArray[i]);
        div.onclick = () => {
            sessionStorage.setItem("name", div.id);
            window.location.href = "recipe.html"
        }
        div.innerHTML = `
        <span class="material-symbols-outlined">${data[dataArray[i]].type}</span>
        <img src="images/${data[dataArray[i]].name}.jpg" alt="${dataArray[i]}" onload="imageLoaded(${dataArray[i]})">
        <a>${data[dataArray[i]].name}</a>`;
        
        main.appendChild(div);
    }
})
.catch(err => console.warn(err));