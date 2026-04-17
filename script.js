let map = L.map('map').setView([20.5937,78.9629],5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:19
}).addTo(map);

function activateSOS(){

navigator.geolocation.getCurrentPosition(function(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

map.setView([lat,lon],15);

L.marker([lat,lon]).addTo(map)
.bindPopup("🚨 User Location")
.openPopup();

document.getElementById("status").innerHTML =
"SOS Activated! Location sent to family.";

playAlarm();

});

}

function fakeSMS(){

document.getElementById("status").innerHTML =
"📩 Emergency SMS sent to trusted contacts.";

}

function startRecording(){

document.getElementById("status").innerHTML =
"🎤 Audio recording started.";

}

function playAlarm(){

let audio = new Audio(
"https://www.soundjay.com/button/beep-07.wav"
);

audio.play();

}