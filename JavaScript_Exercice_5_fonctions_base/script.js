// exo 1 

let string = "abcde";

function longueurChaine(string) {
   console.log (string.length)
}


// exo 2 

let tableau =  ["abcde", 12345, "2102", 1203];
let element = ["2102"]

function elementPresent(tableau, element) {
    if (tableau.includes(element)) {
    console.log("présent"); }
    else {
        console.log("absent")
    }

}

// exo 2 bonus 

// let tableaux =  ["abcde", 12345, "2102", 1203];
// let elements = ["2102", 1203]

// function elementPresent(tableaux, elements) {
//     if (element.every(el => tableaux.includes(el))) {
//     console.log("présent"); }
//     else {
//         console.log("absent")
//     }

// }

// exo 3

function compterElements(tableau){
    console.log(tableau.length)
}

// exo 4

let phrase = "je suis une fleur"
function chaineEnMots(phrase){
    console.log(phrase.split(" "))
}

//exo 5 
let tableur = [12, 21, 3, 2, 25, 23, 6 ];
let valeur = 10

function filterNombres(tableur, valeur) {
    let resultat = tableur.filter(number => number > valeur);
    console.log(resultat);
}

// exo 6
function ajouterPropriete(objet, cle, value){
objet[cle] + valeur
}

//exo 7

function fusionnerTableaux(tableau, tableur){
    console.log(tableau.concat(tableur))
}

// exo 8

function inverserTableaux(tableur){
    console.log(tableur.reverse())
}

// exo 9

function extractionSousTableau(tableau, debut, fin){
    return tableau.slice(debut, fin) 
}
console.log(extractionSousTableau(tableau, 0, 3))