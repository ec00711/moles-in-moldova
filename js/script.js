document.getElementById("version").innerHTML = "v1.0.0";

const data_array = [];

function AddItem(things, place, dateStr){
    data_array.push({things: things, place: place, date: new Date(dateStr)});
}

// Add items
AddItem("moles", "Moldova", "2025-06-06");
AddItem("dogs", "Denmark", "2025-07-07");

// Generate table
var tableHTML = "";
data_array.forEach((entry) => {
        tableHTML += "<tr>";
        tableHTML += "<td>" + entry.things + "</td>";
        tableHTML += "<td>" + entry.place + "</td>";
        tableHTML += "<td>" + entry.date + "</td></tr>";
        });
document.getElementById("data").innerHTML = tableHTML;