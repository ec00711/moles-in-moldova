const data_array = [];

function AddItem(things, place, dateStr, leftPC, topPC){
    data_array.push({things: things, place: place, date: new Date(dateStr), left: leftPC, top: topPC});
}

// Generate data
AddItem("moles", "Moldova", "2025-06-06", 54, 38);
AddItem("dogs", "Denmark", "2025-07-07", 48.75, 33);

// Add locations
data_array.forEach((entry) => {
    var loc = document.createElement("img");

    loc.classList.add("location");
    loc.src = "assets/location.svg";
    loc.style.top = entry.top + "%";
    loc.style.left = entry.left + "%";

    document.getElementById("locations").appendChild(loc);
});
