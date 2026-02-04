// Filtrage et sélection

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de vitesse", prix: 35, stock: 8 }
];

const potion_en_stock = []
const potion_abordable = []

for(const potion of inventaire){
  if(potion.stock > 0){
    potion_en_stock.push(potion)
  }
  if(potion.prix < 40){
    potion_abordable.push(potion)
  }
}

console.log("nb potion en stock : " + potion_en_stock.length)
console.log("nb potion qui coutent moins de 40 : " + potion_abordable.length)

console.log(potion_en_stock)
console.log(potion_abordable)
