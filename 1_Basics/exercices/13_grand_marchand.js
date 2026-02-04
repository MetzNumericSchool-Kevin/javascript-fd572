// Recherche dans l'inventaire

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
];

let potion_chere = -1
let nom_potion_cher = ""

let potion_stock = -1
let nom_potion_stock =""

let potion_sup_0 = []

for(const potion of inventaire){
  if (potion.prix > potion_chere){
    potion_chere = potion.prix
    nom_potion_cher = potion.nom
  }
    if (potion.stock > potion_stock){
    potion_stock = potion.stock
    nom_potion_stock = potion.nom
  }
  if (potion.stock > 0){
    potion_sup_0.push(potion.nom)
  }
}

console.log("potion la plus chere : " + nom_potion_cher)
console.log("console avec le plus de stock : " + nom_potion_stock)
console.log("potion avec du stock : " + potion_sup_0)