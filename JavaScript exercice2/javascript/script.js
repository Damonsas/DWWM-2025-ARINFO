let premon = prompt("Ton prénom ?");
let age = prompt("Ton âge ?");
age = age + 1;

console.log("Je m'appelle " + prenom + " et j'ai " + age + " ans l'année prochaine");



const longueur = prompt ("quelle est la longueur du rectangle ?");
    const largeur = prompt ("quelle est la largeur du rectangle ?");

    surface = parseInt(longueur) * parseInt(largeur);

    console.log("Le rectangle de longueur " + longueur +"cm" + " et de " + largeur + "à pour surface " + surface + "cm²");



let temperatuceCelsius = prompt ("Quelle est la température en Celsius ?");
    let temperatureKelvin = parseFloat (temperatuceCelsius) + 273.15;

    console.log("La température de " + temperatuceCelsius + "°C est égale à " + (temperatuceCelsius + temperatureKelvin) + "K");



let x = prompt ("choississez votre nombre");
let y = prompt ("choississez votre nombre");

if (parseInt(x) > parseInt(y)) {
    console.log(x + "est plus grand que" + y);

}
else if (parseInt(x) === parseInt(y)) {
    console.log(x + "est égal à" + y);
}
else {
    console.log(x + "est plus petit que" + y);
}




