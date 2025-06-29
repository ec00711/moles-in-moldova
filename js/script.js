const data_array = [];

function printMousePos(event) {
    var map = document.getElementById("world-map").getBoundingClientRect();
    
    let x = (event.clientX - map.left) / map.width;
    let y = (event.clientY - map.top) / map.height;
    
    console.log("Click X: " + x + " Y: " + y);
}

function AddItem(things, place, dateStr, x, y){
    data_array.push({things: things, place: place, date: new Date(dateStr), left: x*100, top: y*100});
}

// Set up mouse listener for debug
document.addEventListener("click", printMousePos);

// Generate data
AddItem("moles", "Moldova", "2025-06-06", 0.54, 0.38);
AddItem("dogs", "Denmark", "2025-07-07", 0.4875, 0.33);
AddItem("monkeys", "Madagascar", "2025-06-29", 0.607804, 0.71772);

// Add locations
data_array.forEach((entry) => {
    var loc = document.createElement("img");

    loc.classList.add("location");
    loc.src = "assets/location.svg";
    loc.style.top = entry.top + "%";
    loc.style.left = entry.left + "%";

    document.getElementById("locations").appendChild(loc);
});

