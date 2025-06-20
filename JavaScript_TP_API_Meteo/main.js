let xhr = new XMLHttpRequest();
const apiKey = "66f60458f882ea683476551de035fb9975c3e9ce32600ab368401dc0c11d18a7";

const latitude = 33.44;
const longitude = -94.04; 

xhr.open("GET", `https://api.meteo-concept.com/api/=${latitude}&longitude=${longitude}&appid=${apiKey}`);
xhr.send();
xhr.onLoad = onLoad;
xhr.onError = onError;
xhr.onProgress = onProgress;

