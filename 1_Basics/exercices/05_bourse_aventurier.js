// Bourse de l'Aventurier 💰

// Variables des exercices précédents (modifie selon tes valeurs)
let stock_potion_soin = 10;
let prix_potion_soin = 50;

let argent_aventurier = 200;

let nb_potion = parseInt(prompt("combien de potion ? "))

let prix_total = nb_potion * prix_potion_soin

if(stock_potion_soin < nb_potion){
    console.log("désolé nous n'avons pas assez de potions")
    
}else if(prix_total > argent_aventurier){
    console.log("vous n'avez pas les moyens d'acheter autant de potions")
    
}else{
    stock_potion_soin = stock_potion_soin - nb_potion
    argent_aventurier = argent_aventurier - prix_total
    console.log(`transaction effectuée : il reste ${stock_potion_soin} et il rest à l'aventurier ${argent_aventurier}`)
}


