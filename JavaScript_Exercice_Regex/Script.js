// exo 1
let phrase = "j'ai un chat"
let regex = /chat/;
console.log(regex.test(phrase)); // true

// exo 2

let regex2 = /^[A-Z]/;
console.log(regex2.test("Bonjour")); // true

// exo 3
let regexchiffre = /\d/;
let regexlettre = /^[a-zA-Z]*§/;
let regexligne = regexchiffre && regexlettre;
console.log(regexligne.test("Bonjour 123")); 

// exo 4
let regexpostal = /^[0-9]{5}$/;
console.log(regexpostal.test("72700")); // true

// exo 5
let regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(regexemail.test("etiennepellegrin@gmail.com")); // true

// exo 6

let regexnumero = /^O[1-9](\s\d{2}){4}§/;
let tel = "07 56 83 03 25";
console.log(regexnumero.test(tel)); // true

// exo 7

// let regexlenght = /.{8,}$/ ;
// let regexstrenght = /\w/;
// let regexMaj = /[A-Z]/;

const regexmdp = /^(?=.*[A-Z])(?=.*\w).{8,}$/;

console.log(regexmdp.test("")) // false

// exo 8

const prenom = "Danh";
const nom = "Domonsas";

let regexnomprenom = /^[A-Z]/;
console.log(regexnomprenom.test(prenom + nom)) 

// exo 9 

// const mois = [m >=1 && <= 12];
// const jour = [j >= 1 && <= 31];
// const annee = [2000 + a ]

// let m = 3;
// let j = 12;
// let a = 2;

// const année = jour + mois + annee; 

let regexdate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(20\d{2})$/;

console.log(regexdate.test("12/03/2002")); // true
console.log(regexdate.test("21/02/2000")); // true
console.log(regexdate.test("32/13/2020")); // false

//exo 10 

let regexfin = /\.$/
console.log(regexfin.test("le jus de pommes.")) // true
