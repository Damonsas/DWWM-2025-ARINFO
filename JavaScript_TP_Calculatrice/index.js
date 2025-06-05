let expression = "";
const number = document.querySelectorAll(".chiffre");
const resultat = document.querySelector("#AffResult");
const operateur = document.querySelectorAll(".signeCalc");
const ecran = document.querySelector("#ecran");
console.log(resultat);

  function afficher(val) {
  expression += val;
  ecran.textContent = expression;
}  

function calculer() {
    try {
        const result =eval(expression);
        ecran.textContent = result;
        expression = "";
    }catch{
        ecran.textContent = "Erreur syntaxe";
        expression = "";
    }

}

resultat.addEventListener("click", calculer);

number.forEach( button => {
    button.addEventListener("click",() => afficher(button.textContent))
});

operateur.forEach( button => {
    button.addEventListener("click",() => afficher(button.textContent))
});