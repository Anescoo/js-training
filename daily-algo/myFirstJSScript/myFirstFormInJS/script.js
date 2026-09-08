let baliseNom = document.getElementById("nom")
let afficheBaliseNom = baliseNom.value
console.log(afficheBaliseNom);

let baliseAccepter = document.getElementById("accepter")
let accepter = baliseAccepter.checked
console.log(accepter);

baliseCouleur = document.querySelectorAll(`<input[name=couleur]>`)
couleur = ""
for (let i = 0; i < baliseCouleur.length; i++ ) {
    if (baliseCouleur[i].checked) {
        couleur = baliseCouleur[i].value
        break
    }
}
console.log(couleur);

const form = document.querySelector('form')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Il n’y a pas eu de rechargement de page");

    // On récupère les deux champs et on affiche leur valeur
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    console.log(nom);
    console.log(email);

    //On fait la vérification
    const baliseNom = document.getElementById("nom")
    const valeurNom = baliseNom.value;
    valeurNom.trim();
    if (valeurNom === "") {
        console.log("Le champ nom est vide")
    } else {
        console.log("Le champ nom est rempli")
    }

});

baliseNom.addEventListener('change', (event) => {
    const valeurNom = event.target.value;
    if (valeurNom === "") {
        console.log("Le champ nom est vide")
    } else {
        console.log("Le champ nom est rempli")

    }
});

const regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");

let maVariable = document.getElementById('idInexistant')

if (maVariable === null) {
    console.log("L'élément n'existe pas")
} else {
    maVariable.createElement("div")
}

try {
    let maVariable = document.getElementById('idInexistant')
    maVariable.createElement("div")
} catch {
    console.log("Il y a eu une erreur dans la création de la div")
}

function verifierChamp () {
    if (verifierChamp.value === "") {
        throw new Error("Le champ `${champ.id} est vide")
    }
}