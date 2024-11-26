// Le but de cet exercice est de simuler des combats entre des personnages
// Un personnage sera représenté par un nom, un nombre de points de vie, un nombre de points de mana, une force

// 1) Comment faire pour stocker toutes ces informations dans une seule variable ?

//let perso = [n, pdv, pdm, f] ;

// 2) Créer une variable firstPlayer et stocker dedans le personnage "Nico Minoru" qui a 50 points de vie, 100 points de mana, et 10 de force.

let firstPlayer = ["Nico Minoru", 50, 100, 10];
//console.log(firstPlayer);

//  let firstPlayer = {
//     nom : "Nico Minoru",
//     pointDeVie : 50 ,
//     pointDeMana : 100 ,
//     force : 10 ,
//  } ;
//  console.log(firstPlayer);

// 3) Créer une variable secondPlayer et stocker dedans le personnage "Spiderman" qui a 120 points de vie, 0 point de mana, et 50 de force.
let secondPlayer = ["Spiderman", 120, 0, 50];
console.log(secondPlayer);

// ?) Donner 25 points de vie supplémentaires au premier personnage.
firstPlayer[1]+=25;
//console.log(firstPlayer);

// ?) Créer une fonction displayInfo qui reçoit un personnage en entrée et qui affiche dans la console un message à propos de ce personnage (cf en dessous de la fonction).

function displayInfo(player) {
	// for(let i=0 ; i<firstPlayer.length ; i++){
    // console.log(i, firstPlayer[i]);
    // }
    console.log(player[0], "a", player[1], "points de vie", player[2], "points de mana et", player[3], "de force");
}


// Par exemple, 
displayInfo(firstPlayer);
// devra afficher :
// Nico Minoru a 50 points de vie, 100 points de mana et 10 points de force.

// ?) Trouver l'erreur de français dans la fonction précédente (:innocent:) en la testant avec le second personnage.
function displayInfo(player) {
    console.log(player[0], "a", player[1], "points de vie", player[2], "points de mana et", player[3], "de force");
}
displayInfo(secondPlayer);
// ?) Corriger la fonction pour faire disparaître cette erreur.
function displayInfo(player) {
    if (player[1] < 2) {
        console.log("point de vie");
        if (player[2] <2){
            console.log("point de mana");
            } else if (player[3]){
                console.log("point de force");
        }
    }
}
displayInfo(secondPlayer);

// https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2021/11/12201506/clean_259.jpg
// ?) Le deuxième personnage a perdu 3 de vie. Décrémenter la variable correspondante.
secondPlayer[1] -= 3;
console.log(secondPlayer);

// ?) Vérifier que
//displayInfo(secondPlayer);
// affiche bien : "Spiderman a 117 points de vie, 0 point de mana, et 50 de force."

// ?) Écrire une fonction directHit qui reçoit deux personnages en entrée et qui fait perdre des points de vie au second. Le nombre de points de vie perdus sera égal à la force du premier personnage.
function directHit(player1, player2) {
	
}

// ?) Utiliser la fonction précédente pour que le second personnage tape le premier personnage.

// ?) Le second personnage boit une potion de soin ! Ajouter 3 points de vie à Spiderman.

// ?) Le premier personnage va boire plusieurs potions.
let randomNumber = Math.floor(Math.random()*8)+2;
//console.log("Nico Minoru s'apprête à boire",randomNumber,"potions de vie !");
// TODO
displayInfo(firstPlayer);

// ?) Écrire une fonction qui reçoit deux personnages A et B en entrée et qui fait lancer un sort à A pour attaquer B
// Cette fonction doit :
// - vérifier que le personnage a au moins 10 points de mana ; si ce n'est pas le cas, la fonction est terminée
// - faire perdre 10 points de mana à A
// - faire perdre 25 points de vie à B