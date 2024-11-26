// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.


// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1

// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
let t1 = [26,3,93,25,-7,95];

function sommeTableau(t){
    let somme = 0;
    for(let i=0 ; i<t.length ; i++){
        somme += t[i];
    }
    return somme ;
}

console.log(sommeTableau(t1));
console.log(sommeTableau(t1));

// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.

function sommeValeursPositives(t){
    let somme = 0;
    for(let i=0 ; i<t.length ; i++){
        if (t[i]>0) {
            somme += t[i];
        }
    }
    return somme ;
}
console.log(sommeValeursPositives(t1));


// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.

function sommeValeursNegatives(t){
     somme = sommeTableau(t) - sommeValeursPositives(t);
     return somme ;
}
console.log(sommeValeursNegatives(t1));
