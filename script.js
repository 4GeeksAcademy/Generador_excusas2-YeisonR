let who = ["Mi loro", "Un repartidor", "Mi vecino", "El fantasma de la casa"];
let action = ["escondió", "quemó por accidente", "derramó café en", "robó"];
let what = ["mis apuntes", "el código del proyecto", "mi despertador", "la conexión Wi-Fi"];
let when = ["hace cinco minutos", "anoche", "mientras dormía", "en el peor momento posible"];

function generateExcuse() {
let randomwho = who[Math.floor(Math.random() * who.length)];
let randomaction = action[Math.floor(Math.random() * action.length)];
let randomwhat = what[Math.floor(Math.random() * what.length)];
let randomwhen = when[Math.floor(Math.random() * when.length)]; 

let excuse = randomwho + " " + randomaction + " " + randomwhat + " " + randomwhen;

let element = document.getElementById('excuse');
    if (element) {
        element.innerHTML = excuse;
    }
}

generateExcuse();