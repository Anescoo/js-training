// let prixHT = prompt("Saisissez le prix hors taxes : ");
// let tauxTVA = 0.20;
function calculerTVA(prixHT, tauxTVA) {
    let calcul = prixHT * tauxTVA / 100;
    return calcul;
}
let retourFonction = calculerTVA(prompt("Saisissez le prix hors taxes : "), 0.20);
console.log(retourFonction);

