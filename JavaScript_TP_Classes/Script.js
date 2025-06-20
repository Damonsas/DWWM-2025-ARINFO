let stagiaire1 = ['Martin', 'DUPONT'];
let stagiaire2 = ['Vincent', 'MARTIN'];
let stagiaire = [stagiaire1, stagiaire2];
console.log(stagiaire);

let stagiaireA = new Stagiaire();
stagiaireA.nom = 'DUPONT';
stagiaireA.prenom = 'Martin';

let stagiaireB = new Stagiaire();
stagiaireB.nom = 'MARTIN';
stagiaireB.prenom = 'Vincent';

let stagiaires = [stagiaireA, stagiaireB];
console.log(stagiaires[1].prenom);

console.log(stagiaires[0].salutation());

let anotherStagiaire = new Stagiaire('ANDERSON', 'Lucette');
console.log(anotherStagiaire.salutation());
