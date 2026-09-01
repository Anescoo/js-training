console.log("Welcome on loop page !");

// Boucle For quand on sait déjà le nombre de répétition à l'avance (mais beaucoup)
// Boucle While quand on ne sait pas


for (let compteur = 0; compteur < 3; compteur++) {
    console.log(compteur);
}

let i = 0;
while (i < 3) {
    console.log(i);
    i++
}


let listeMots = ["Cachalot", "Pétunia","Serviette"];

for (let i = 0; i < listeMots.length; i++) {  

let askWordToUser = prompt("Choisissez le mot : " + listeMots[i]);
    if (askWordToUser === listeMots[i]) {
        score++;
    }
}
console.log("Votre score est de " + score + " sur " + listeMots.length);


