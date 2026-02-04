// Calculs et statistiques

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 7 },
  { nom: "Potion de force", prix: 60, stock: 3 }
];

let val_total_inventaire = 0
let prix_moyen = 0
let stock_total = 0

for(const potion of inventaire){
  val_total_inventaire += potion.prix*potion.stock
  prix_moyen += potion.prix
  stock_total += potion.stock
}

prix_moyen = prix_moyen / inventaire.length

console.log("valeur total de l'inventaire : " + val_total_inventaire)
console.log("prix moyen par potion : " + prix_moyen)
console.log("stock total de potion : " + stock_total)