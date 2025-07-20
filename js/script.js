const data_array = [];
var popup = document.getElementById("popup");

function printMousePos(event) {
    var map = document.getElementById("world-map").getBoundingClientRect();
    
    let x = (event.clientX - map.left) / map.width;
    let y = (event.clientY - map.top) / map.height;
    
    console.log("Click X: " + x + " Y: " + y);
}

function AddItem(things, place, who, dateStr, x, y){
    data_array.push({things: things, place: place, who: who, date: new Date(dateStr), left: x, top: y});
}

function showPopup(event, entry){
    popup.classList.add("show");
    document.getElementById("popup-text").innerText =
        "I love you more than all the " + entry.things + " in " + entry.place;
    document.getElementById("date-text").innerText =
        entry.who + ", " + entry.date.toLocaleDateString("en-GB");
}

function hidePopup(event){
    popup.classList.remove("show");
}

// Set up mouse listener for debug
document.addEventListener("click", printMousePos);

// Close pop up when map or X are clicked
var xButton = document.getElementById("close-button");
xButton.addEventListener("click", hidePopup);
var worldMap = document.getElementById("world-map");
worldMap.addEventListener("click", hidePopup);

// Generate data
AddItem("raccoons", "Russia", "F", "2025-06-15", 0.700, 0.270);
AddItem("frogs", "Finland", "E", "2025-06-16", 0.526, 0.298);
AddItem("moles", "Moldova", "F", "2025-06-16", 0.539, 0.403);
AddItem("snakes", "Sardinia", "E", "2025-06-17", 0.4854, 0.4466);
AddItem("alpacas", "Albania", "F", "2025-06-17", 0.5180, 0.4466);
AddItem("crabs", "Croatia", "E", "2025-06-18", 0.5065, 0.4233);
AddItem("iguanas", "Italy", "F", "2025-06-18", 0.497, 0.433);
AddItem("dogs", "Denmark", "F", "2025-06-19", 0.486, 0.344);
AddItem("rats", "Rotterdam", "E", "2025-06-19", 0.4729, 0.3722);
AddItem("gibbons", "Gabon", "E", "2025-06-22", 0.495, 0.661);
AddItem("ravens", "Romania", "F", "2025-06-22", 0.530, 0.417);
AddItem("morris men", "Manchester", "E", "2025-06-23", 0.4547, 0.3629);
//AddItem("lemmings", "Lancre", "F", "2025-06-23", 0.5, 1.1);
AddItem("gators", "Galway", "F", "2025-06-24", 0.4355, 0.3660);
AddItem("guinea pigs", "Ghana", "E", "2025-06-24", 0.453, 0.620);
AddItem("kittens", "Kenya", "E", "2025-06-25", 0.574, 0.661);
AddItem("dragons", "Denmark", "F", "2025-06-25", 0.4921, 0.3505);
//AddItem("morris dancers", "Morpork", "F", "2025-06-26", 0.4, 1.1);
AddItem("donkeys", "Damascus", "E", "2025-06-26", 0.5670, 0.4854);
//AddItem("harfoots", "Hobbiton", "E", "2025-06-27", 0.6, 1.1);
//AddItem("hobbits", "Hobbiton", "F", "2025-06-27", 0.65, 1.1);
AddItem("hamsters", "Honduras", "F", "2025-06-28", 0.1976, 0.5791);
AddItem("sheep", "San Francisco", "E", "2025-06-28", 0.0983, 0.4390);
AddItem("dinosaurs", "Denmark", "F", "2025-06-29", 0.4869, 0.3461);
AddItem("baby bats", "Brazil", "E", "2025-06-29", 0.3060, 0.7062);
AddItem("jaberwockies", "Jerusalem", "E", "2025-06-30", 0.5629, 0.4944);
AddItem("Cheshire cats", "Cheltenham", "F", "2025-06-30", 0.4546, 0.3757);
AddItem("owls", "Owl-bania", "E", "2025-07-13", 0.5184, 0.4421);
AddItem("monarchs", "Monaco", "F", "2025-07-13", 0.4808, 0.4266);

// Add locations
data_array.forEach((entry) => {
    var loc = document.createElement("img");

    loc.classList.add("location");
    loc.src = "assets/location.svg";
    loc.style.top = entry.top*100 + "%";
    loc.style.left = entry.left*100 + "%";

    loc.addEventListener("click", (evt) => showPopup(evt, entry));

    document.getElementById("locations").appendChild(loc);
});
