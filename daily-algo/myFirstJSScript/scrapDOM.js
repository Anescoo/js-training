let firstH1 = document.getElementById("main");

console.log(firstH1);
//affiche une variable objet de type HTMLElement

console.log(firstH1.clientHeight);

// let div1 = document.getElementById("test1");
let spanzone = document.querySelector("#test1 span");
console.log(spanzone);

let mainn = document.querySelectorAll(".test1 h2");
// console.log(mainn);

let listeInputRadio = document.querySelectorAll(".zoneChoix input");
console.log(listeInputRadio);

for (let i = 0; i < listeInputRadio.length; i++) {
    console.log(listeInputRadio[i]);
}


let motsInput = document.getElementById("mots");
AddS = motsInput.setAttribute("name","optionSources");
console.log(AddS);