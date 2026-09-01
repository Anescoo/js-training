let randomNumber = Math.floor(Math.random() * 100);

if (randomNumber <= 50) {
    console.log("Le chiffre aléatoire est inférieure ou égale à 50 ", randomNumber);
} else {
    console.log("Le chiffre aléatoire est supérieur à 50 ", randomNumber);
}


switch (true) {
    case randomNumber <= 14:
        console.log("T'essayes vraiment là ?!!")
        break;
    case randomNumber === 50:
        console.log("Respect, c'est le chiffre de la condition if !");
        break;
    // case randomNumber !== 50:
    //     console.log("Cherche encore !");
    //     break;
    case randomNumber >= 75:
        console.log("T'es au bout du bout !!")
        break;
    default:
        console.log("Continuer de chercher");

}

let listeMots = ["Cachalot","Pétunia","Serviette"];
let score = 0;
let motUtilisateur = prompt("Veuillez entrer le mot : " + listeMots[0])

if (motUtilisateur === listeMots[0]) {
    score++;
    console.log("Bien joué vous avez bien tapé le mot \"Cachalot\", vous venez de gagner 1 point !", score);
}

motUtilisateur = prompt("Veuillez entrer le mot : " + listeMots[1])


if (motUtilisateur === listeMots[1]) {
    score++;
    console.log("Bien joué vous avez bien tapé le mot \"Pétunia\", vous venez à nouveau de gagner 1 point !", score);
} 

motUtilisateur = prompt("Veuillez entrer le mot : " + listeMots[2])


if (motUtilisateur === listeMots[2]) {
    score++;
    console.log("Bien joué vous avez bien tapé le mot \"Serviette\", vous venez à nouveau de gagner 1 point !", score);
    console.log("Le jeu est terminé, vous avez correctement tapé toute la série de mots. A bientôt !");
} 