// les données sont rangées dans des varaibles
// une variable = ensemble de valeur, nom et type.
// let ou const. let variable dont sa valeur change au cours du code, const déclare une variable dont sa valeur ne change pas.


const monNom = "Arnaud";
let monAge = 23;

//modification d'une variable
// l'année prochaine j'aurais ...
// une fois déclaré, la variable n'a plus besoin de let ou const

monAge = 24;

// pour tester le contenu de la variable on va utiliser console.log pour l'afficher en console.

console.log(monAge);

//types de variables
let int = 14;
let String = "Arnaud";
let boolean = true;

//modifier une valeur

let nombreUtilisateurs = 200;

nombreUtilisateurs = nombreUtilisateurs + 100;
// cette maniere d'écrire est un peu longue à la place on peut faire : 
nombreUtilisateurs += 100;

console.log(nombreUtilisateurs); //affiche 300;

// et maintenant avec une chaine de caractere, ajouts ? = concaténation
let messageBienvenue = "Bienvenue,";
let nomUtilisateur = "Arnaud.clv";
messageBienvenue += nomUtilisateur;
console.log(messageBienvenue); //affiche : Bienvenue, Arnaud.clv

//Exercices

let totalLivres = 500;
totalLivres += 50;
totalLivres -= 10;
totalLivres += 5;



