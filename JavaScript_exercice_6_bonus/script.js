// exo 1

let nombres = [1, 2, 3, 4, 5]
 
for (let i = 0; i < nombres.length; i++) {
    console.log(String(nombres[i]));
}

// exo 2

let tableau = [1, 2, 3, 7, 6, 8, 9]
function sommeTableau(tableau){
const reducer = (accumulator, curr) => accumulator + curr;
return tableau.reduce(reducer);
}
console.log(tableau)


// exo 3

let tableauMots = [ "pommes", "cidre", "pommeau", "Manzana", "Calvados"]
function motPlusLong(tableauMots){
let plusLong = "";
    for (let mot of tableauMots) {
        if (mot.length > plusLong.length) {
            plusLong = mot;
        }
    }
    return plusLong; 
}
console.log(tableauMots)

//exo 4

let chaine = "abcde"
function inverserChaine(chaine){
    let resultat = "";
    for (let i = chaine.length - 1; i >= 0; i--) {
        resultat += chaine[i];
    }
    return resultat;
}
console.log(inverserChaine("abcde"))

// function inverserChaine(string){
//     return string.split("").reverse().join("")
// }
// console.log(inverserChaine(chaine))


// exo 5

function compterVoyelle(chaine){
    let voyelle = 0;
    for (i = 0; i < chaine.length; i++){
        let lettre = chaine[i];
        if ((lettre === "a") || (lettre === "e") ||(lettre === "i") ||(lettre === "o") ||(lettre === "u") ||(lettre === "y")) {
            voyelle++;
        }
    }
    return voyelle
}

// exo 6

function nombresPairs(tableau) {
    return tableau.filter(n => n % 2 === 0);
}

// exo 7

let produits = [
    { nom: "Stylo", prix: 2 },
    { nom: "Cahier", prix: 5 },
    { nom: "Gomme", prix: 1 }
];

// function compterProprietes(produits){
//     let tabNomProduits = [];
//     for(i in produits){
//         tabNomProduits.push(produits[i].nom)
//     }
//     return tabNomProduits.length;
// }

function compterProprietes(produits){
    return Object.keys(produits).length;
}
console.log(compterProprietes(produits))

// exo 8
// function extraireNoms(produits){
//     let tabNomProduits = [];
//     for(i in produits){
//         tabNomProduits.push(produits[i].nom)
//     }
//     return tabNomProduits.length;
// }
function extraireNoms(produits){
    return produits.map(prod => prod.nom)
}

console.log(extraireNoms(produits))

// exo 9

function fact(n){
    if (n < 0){
        return 'err';
    }
    let resultat = 1;
    while (n > 1){
        resultat *= n;
        n--;
    }
    return resultat;
}
console.log(fact(5))

// Function iterative for

function factorielle(n){
    let f = 1;
    for (let i = 2; i <= n; i++) {
        f *= i;
    }
    return f
}

console.log(factorielle(50))

// function recursive 

function factoriel(nombre){
    if(nombre === 0|| nombre ===1){
        return 1;
    }
    return nombre * factoriel(nombre - 1);
}

console.log(factoriel(5))

// exo 10

function estTrie(array){
    for(i=0; i < array.length -1;i++){
        if(array[i] > array[i+1]){
            return false;
        }
    }
    return true
}
console.log(estTrie(tableau))