// Affichage des potions

// Variable de l'exercice précédent (modifie selon tes valeurs)
const potions = ["Potion de soin", "Potion de mana", "Potion d'endurance"];

console.log(potions[0])
console.log(potions[potions.length-1])
for(const potion of potions){
	console.log("Nous avons de la " + potion)
}