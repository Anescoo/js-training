//Découverte des objets JS
//Regroupe des données pour un meme sujet, dans un objet, un personnage par exemple

let monPersonnage = {
    nom: "Wayne",
    prenom: "Bruce",
    couleurPreferee: "noir"
}

// pour ajouter un élément dans mon objet :
nomPersonnage.vehiculePersonnage = "Batmobile";
console.log(monPersonnage.couleurPreferee);


let ticketCinema = {
    nomFilm: "Batman",
    prix: 7,
    numeroSalle: 3
}

let nom = "Arnaud";
let affichageTexte = "Bonjour " + nom + ", votre film " + ticketCinema.nomFilm + " est en salle " + ticketCinema.numeroSalle + ".";
console.log(affichageTexte);