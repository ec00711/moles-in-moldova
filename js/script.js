/*** Print position when clicked - for placing locations ***/
function printMousePos(event) {
    var canvas = document.getElementById("canvas").getBoundingClientRect();
    
    let x = (event.clientX - canvas.left) / canvas.width;
    let y = (event.clientY - canvas.top) / canvas.height;
    
    console.log("Click X: " + x + " Y: " + y);
}

document.addEventListener("click", printMousePos);


/*** Handle showing/hiding of popup ***/
var popup = document.getElementById("info-popup");

function showPopup(event, entry){
    popup.classList.add("show");
    document.getElementById("popup-text").innerText =
        "I love you more than all the " + entry.things + " in " + entry.place;
    document.getElementById("date-text").innerText =
        entry.who + ", " + entry.dateStr;
}

function hidePopup(event){
    popup.classList.remove("show");
}

var xButton = document.getElementById("close-button");
xButton.addEventListener("click", hidePopup);
var worldMap = document.getElementById("world-map");
worldMap.addEventListener("click", hidePopup);


// Generate array of data
const data_array = [];

function addLocation(things, place, who, dateStr, x, y){
    data_array.push({things: things, place: place, who: who, dateStr: dateStr, left: x, top: y});
}

addLocation("raccoons", "Russia", "F", "2025-06-15", 0.700, 0.270);
addLocation("frogs", "Finland", "E", "2025-06-16", 0.526, 0.298);
addLocation("moles", "Moldova", "F", "2025-06-16", 0.539, 0.403);
addLocation("snakes", "Sardinia", "E", "2025-06-17", 0.4854, 0.4466);
addLocation("alpacas", "Albania", "F", "2025-06-17", 0.5180, 0.4466);
addLocation("crabs", "Croatia", "E", "2025-06-18", 0.5065, 0.4233);
addLocation("iguanas", "Italy", "F", "2025-06-18", 0.497, 0.433);
addLocation("dogs", "Denmark", "F", "2025-06-19", 0.486, 0.344);
addLocation("rats", "Rotterdam", "E", "2025-06-19", 0.4729, 0.3722);
addLocation("gibbons", "Gabon", "E", "2025-06-22", 0.495, 0.661);
addLocation("ravens", "Romania", "F", "2025-06-22", 0.530, 0.417);
addLocation("morris men", "Manchester", "E", "2025-06-23", 0.4547, 0.3629);
//addLocation("lemmings", "Lancre", "F", "2025-06-23", 0.5, 1.1);
addLocation("gators", "Galway", "F", "2025-06-24", 0.4355, 0.3660);
addLocation("guinea pigs", "Ghana", "E", "2025-06-24", 0.453, 0.620);
addLocation("kittens", "Kenya", "E", "2025-06-25", 0.574, 0.661);
addLocation("dragons", "Denmark", "F", "2025-06-25", 0.4921, 0.3505);
//addLocation("morris dancers", "Morpork", "F", "2025-06-26", 0.4, 1.1);
addLocation("donkeys", "Damascus", "E", "2025-06-26", 0.5670, 0.4854);
//addLocation("harfoots", "Hobbiton", "E", "2025-06-27", 0.6, 1.1);
//addLocation("hobbits", "Hobbiton", "F", "2025-06-27", 0.65, 1.1);
addLocation("hamsters", "Honduras", "F", "2025-06-28", 0.1976, 0.5791);
addLocation("sheep", "San Francisco", "E", "2025-06-28", 0.0983, 0.4390);
addLocation("dinosaurs", "Denmark", "F", "2025-06-29", 0.4869, 0.3461);
addLocation("baby bats", "Brazil", "E", "2025-06-29", 0.3060, 0.7062);
addLocation("jaberwockies", "Jerusalem", "E", "2025-06-30", 0.5629, 0.4944);
addLocation("Cheshire cats", "Cheltenham", "F", "2025-06-30", 0.4546, 0.3757);
addLocation("owls", "Owl-bania", "E", "2025-07-13", 0.5184, 0.4421);
addLocation("monarchs", "Monaco", "F", "2025-07-13", 0.4808, 0.4266);

// Add to html
data_array.forEach((entry) => {
    var loc = document.createElement("img");

    loc.classList.add("location");
    loc.src = "assets/location.svg";
    loc.style.top = entry.top*100 + "%";
    loc.style.left = entry.left*100 + "%";

    loc.addEventListener("click", (evt) => showPopup(evt, entry));

    document.getElementById("locations").appendChild(loc);
});
