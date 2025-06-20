function onProgress(event) {
    console.log(`chargement : ${((event.loaded/event.total) * 100).toFixed(2)}%`);
}

function onError(){
    console.log('Erreur Réseau');
}

function onLoad(){
    console.log(xhr.status);
    console.log(xhr.response);
    let meteo = JSON.parse(xhr.response);
    let paragrapheInfo = document.getElementById("#info");
    paragrapheInfo.innerHTML = `La température est de ${meteo.main.temp}°C`;
}
