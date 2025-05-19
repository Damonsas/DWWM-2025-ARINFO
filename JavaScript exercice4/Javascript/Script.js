// exo1

let a = 1;
let b = 2;
let c = 3;

if (a === b && a === c) {
    console.log("les trois variables sont égales");
}
else if (a === b || a === c || b === c) {
    console.log("seulement deux variables sont égales");
}

// exo2

let quantite = prompt ("Entrez une quantité");
let unité = prompt ("Entrez une unité entre K, M, G, T");


if (unité === "K") {
    unité = parseInt (1000);
    console.log( résultat);
}
else if (unité === "M") {
    unité = parseInt (1000000);
    console.log( résultat);
}
else if (unité === "G") {  
    unité = parseInt (1000000000);
    console.log( résultat);
}
else if (unité === "T") {  
    unité = parseInt (1000000000000);
    console.log( résultat);
}
const résultat = parseint (quantite) * unité;
console.log(résultat);

// exo3

let quantiteO = prompt ("Entrez une quantité");
let unitéO = promt ("Entrez une unité entre K, M, G, T");


switch (unitéO) {
    case "K":
        unité = 1024;
        break;
    case "M":
        unité = 1024 * 1024;
        break;
    case "G":
        unité = 1024 * 1024 * 1024;
        break;
    case "T":
        unité = 1024 * 1024 * 1024 * 1024;
        break;
    default:
        console.log("Unité non reconnue");
}
const résultatO = parseInt(quantiteO) * unité;
console.log(résultatO);


// exo4

let value = 0;

if (typeof value === Number ) {
console.log("C'est un nombre");
}
else if ( typeof value === String ) {  
console.log("C'est une chaîne de caractères");
}
switch (typeof value) {
    case "number":
        console.log("C'est un nombre");
        break;
    case "string":
        console.log("C'est une chaîne de caractères");
        break;
    default:
        console.log("Type non reconnu");
}
switch (value) {
    case >= 1:
        console.log("C'est un nombre");
        break;
    case 0:
        console.log("C'est un nombre");
        break;
    case (typeof value === "string"):
        console.log("C'est une chaîne de caractères");
        break;

}



