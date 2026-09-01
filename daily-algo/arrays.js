//Découverte des tableaux
//Conteneur qui permet de regrouper plusieurs variables

const firstArray = ["Test1", "Test2", "Test3"];

//pour avoir le nombre de contenu que j'ai dans mon tableau.
firstArray.length(); 

//on va voir les méthodes pour manipuler les données d'un tableau.

// push pour ajouter une donnée à un tableau, valeur ajouté à la derniere des places à la limite
firstArray.push["Test4"];

// pop supprime la derniere valeur de la liste
firstArray.pop();

//copie par valeur et par référence

// ici on fait une copie par référence du tableau
let secondArray = [...firstArray];

//ici on fait une copie par valeur du tableau

