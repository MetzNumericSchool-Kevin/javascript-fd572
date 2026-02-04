// Aventurier, regarde tout ce que je vends !

// Variable de l'exercice précédent (modifie selon tes valeurs)
const inventaire = [];

const potion_soin = {
  nom: "Potion de soin",
  prix: 50,
  stock: 10,
};
const potion_mana = {
  nom: "Potion de mana",
  prix: 70,
  stock: 5,
};
const potion_endurance = {
  nom: "Potion d'endurance",
  prix: 80,
  stock: 4,
};
inventaire.push(potion_soin);
inventaire.push(potion_mana);
inventaire.push(potion_endurance);

// for(let i = 0; i < inventaire.length ; i++){
//     console.log(inventaire[i].nom + " " +inventaire[i].prix + " " + inventaire[i].stock)
// }

for(const potion of inventaire){
    for(const elem of Object.keys(potion)){
        console.log(elem + " : " +potion[elem])
    }
}