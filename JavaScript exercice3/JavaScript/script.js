// Exo1

const prenom = "Martin";
const anneeNaissance = 2000;
let anneeActuelle = 2025;

let age = anneeActuelle - anneeNaissance;

console.log("Bonjour Mr " + prenom + ",vous avez " + age + " ans");


// Exo2

let note_maths = 15;
let note_francais = 12;
let note_histoire = 9;

let moyenne = (note_maths + note_francais + note_histoire) / 3;
console.log("Votre moyenne est de " + moyenne + "/20");

// Exo3

let genre = "Homme";

if (genre === "Homme") {
    console.log("Bonjour Monsieur");
}
else if (genre === "Femme") {
    console.log("Bonjour Madame");
}
else {
    console.log("Bonjour");
}


// Exo4

let heure = prompt ("quelle heure est-il ?");

if (heure <= parseInt(12)) {
    console.log("c'est le matin, tout le monde se lève");
}
else if (heure <= parseInt(20)) {
    console.log("c'est l'apres-midi, c'est l'apéro");
}
else if (heure <= parseInt(24) || heure <= parseInt(5)) {
    console.log("c'est le soir, on se couche");
}
else {
    console.log("ce n'est plus l'heure");
}

// Exo5

let choix = prompt("choisi un nombre entre 1 et 4");
switch (choix) {
    case 1:
        console.log("vous avez choisi le choix 1");
        break;
    case 2:
        console.log("vous avez choisi le choix 2");
        break;
    case 3:
        console.log("vous avez choisi le choix 3");
        break;
    case 4:
        console.log("Ce choix n'existe pas");
        break;    
    
}

// Exo6

let i = 15;
if (3%i === 0 && 5%i === 0) {
    console.log(i + "est un multiple de 3 et de 5");
}
else {
    console.log(i + "n'est pas un multiple de 3 ou de 5");
}

// Exo7

let departement = 44;
let x = 0 ;
let y = 0;
codepostal = departement + x + y;

for (let x = 0; x <= 9; x++) {
    for (let y = 0; y <= 90; y++) {
        console.log("Le code postal est " + codepostal);
    }
}

// Exo8

let valeur = 0;

for (let valeur = 0; valeur <= 20; i++) {
    console.log(valeur );
    if (valeur === 10  ) {
        console.log(valeur + "whoah");
    }
}

// Exo9

let random = Math.floor(Math.random() * 100) + 1;
if (random%2 === 0) {
    console.log(random + " est un nombre pair");
}
else {
    console.log(random + " est un nombre impair");
}

// Exo10


