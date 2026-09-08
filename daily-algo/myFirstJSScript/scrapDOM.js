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

let baliseImage = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "Ceci est une image de test modifiée");
baliseImage.src = "cheminImage.jpg";
baliseImage.classList.add("nouvelleClasse")
baliseImage.classList.remove("photo")
console.log(baliseImage)

//créons un nouvel element grace a createElement
let nouvelElement = document.createElement("div");
let parentElement = document.getElementById("main");

parentElement.appendChild(nouvelElement);

console.log(parentElement);





// utilisez la propriété innerHTML pour insérer du HTML en quantité importante

let contenuTitre = "Azertype"
let contenuParagraphe = "L'application pour apprendre à taper plus vite !"
let div = `
    <div> 
        <h1>${contenuTitre}</h1>
        <p>${contenuParagraphe}</p>
    </div>
`
body.innerHTML = div;

let nouvelleDiv = document.createElement("div")
let nouveauTitre = document.createElement("h1")
let nouveauParagraphe = document.createElement("p")

nouveauTitre.textContent = contenuTitre;
nouveauParagraphe.textContent = contenuParagraphe;

nouvelleDiv.appendChild(nouveauTitre);
nouvelleDiv.appendChild(nouveauParagraphe);

let body = document.querySelector("body")
body.appendChild(nouvelleDiv)


let monBouton = document.getElementById("monBouton");
monBouton.addEventListener("click", function () {
    console.log("Vous avez cliqué sur le bouton")
});

monBouton.addEventListener("click", () => {
    console.log("Tu as cliqué sur un autre bouton")
});


document.addEventListener('keydown', (event) => {
    console.log(event.key);
});