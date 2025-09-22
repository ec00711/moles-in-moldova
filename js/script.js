/*** Print position when clicked - for placing locations ***/
function printMousePos(event) {
    var canvas = document.getElementById("canvas").getBoundingClientRect();
    
    let x = (event.clientX - canvas.left) / canvas.width;
    let y = (event.clientY - canvas.top) / canvas.height;
    
    console.log("Click X: " + x + " Y: " + y);
}

document.addEventListener("click", printMousePos);


/*** Handle showing/hiding of popup ***/

function showPopup(event, i){
    current_location_id = i;
    var entry = data_array[i];

    document.getElementById("atuin").classList.remove("flown");
    document.getElementById("hobbit-hole").classList.remove("popped");

    var popup = document.getElementById("info-popup");
    popup.classList.add("show");

    document.getElementById("popup-text").innerText =
        "I love you more than all the " + entry.things + " in " + entry.place;
    document.getElementById("date-text").innerText =
        entry.who + ", " + entry.dateStr;
    
    var canvas = document.getElementById("canvas");
    if(entry.isDiscworld){
        // Discworld
        canvas.style.transform = "scale(1,1) translate(0%,0%)";
        document.getElementById("atuin").classList.add("flown");
    }
    else if(entry.isHobbiton){
        // Hobbiton
        canvas.style.transform = "scale(1,1) translate(0%,0%)";
        document.getElementById("hobbit-hole").classList.add("popped");
    }
    else{
        // Earth
        var panX = 0.5 - entry.left; var panY = 0.5 - entry.top;
        canvas.style.transform = "scale(4,4) translate("+panX*100+"%,"+panY*100+"%)";
    }
    
}

function hidePopup(event){
    current_location_id = -1;
    
    document.getElementById("atuin").classList.remove("flown");
    document.getElementById("hobbit-hole").classList.remove("popped");

    var popup = document.getElementById("info-popup");
    popup.classList.remove("show");
    
    var canvas = document.getElementById("canvas");
    canvas.style.transform = "scale(1,1) translate(0,0)";
}

var xButton = document.getElementById("close-button");
xButton.addEventListener("click", hidePopup);
var worldMap = document.getElementById("world-map");
worldMap.addEventListener("click", hidePopup);


/*** Handle left/right navigation buttons ***/

function goNext(event){
    if(current_location_id < 0){
        // Nothing is selected - do nothing
        return;
    }

    // Calculate ID of next location
    var next_id = current_location_id + 1;
    if(next_id >= data_array.length){
        // Wrap around
        next_id = 0;
    }

    // Go to it
    showPopup(null, next_id);
}

function goPrev(event){
    if(current_location_id < 0){
        // Nothing is selected - do nothing
        return;
    }

    // Calculate ID of previous location
    var prev_id = current_location_id - 1;
    if(prev_id < 0){
        // Wrap around
        prev_id = data_array.length - 1;
    }

    // Go to it
    showPopup(null, prev_id);
}

var nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", goNext);
var prevButton = document.getElementById("prev-button");
prevButton.addEventListener("click", goPrev);


// Generate array of data
const data_array = [];
var current_location_id = -1;

function addLocation(things, place, who, dateStr, x, y, isDiscworld = false, isHobbiton = false){
    data_array.push({things: things, place: place, who: who, dateStr: dateStr, left: x, top: y, isDiscworld: isDiscworld, isHobbiton: isHobbiton});
}

addLocation("raccoons", "Russia", "F", "2025-06-15", 0.6607, 0.0822);
addLocation("frogs", "Finland", "E", "2025-06-16", 0.5477, 0.0796);
addLocation("moles", "Moldova", "F", "2025-06-16", 0.5679, 0.1651);
addLocation("snakes", "Sardinia", "E", "2025-06-17", 0.5230, 0.2076);
addLocation("alpacas", "Albania", "F", "2025-06-17", 0.5502, 0.2072);
addLocation("crabs", "Croatia", "E", "2025-06-18", 0.5373, 0.1776);
addLocation("iguanas", "Italy", "F", "2025-06-18", 0.5309, 0.1940);
addLocation("dogs", "Denmark", "F", "2025-06-19", 0.5264, 0.1142);
addLocation("rats", "Rotterdam", "E", "2025-06-19", 0.5100, 0.1362);
addLocation("gibbons", "Gabon", "E", "2025-06-22", 0.5350, 0.5075);
addLocation("ravens", "Romania", "F", "2025-06-22", 0.5600, 0.1703);
addLocation("morris men", "Manchester", "E", "2025-06-23", 0.4950, 0.1260);
addLocation("lemmings", "Lancre", "F", "2025-06-23", null, null, true);
addLocation("gators", "Galway", "F", "2025-06-24", 0.4810, 0.1270);
addLocation("guinea pigs", "Ghana", "E", "2025-06-24", 0.4983, 0.4462);
addLocation("kittens", "Kenya", "E", "2025-06-25", 0.6083, 0.4905);
addLocation("dragons", "Denmark", "F", "2025-06-25", 0.5200, 0.1100);
addLocation("morris dancers", "Morpork", "F", "2025-06-26", null, null, true);
addLocation("donkeys", "Damascus", "E", "2025-06-26", 0.5932, 0.2521);
addLocation("harfoots", "Hobbiton", "E", "2025-06-27", null, null, false, true);
addLocation("hobbits", "Hobbiton", "F", "2025-06-27", null, null, false, true);
addLocation("hamsters", "Honduras", "F", "2025-06-28", 0.2641, 0.3854);
addLocation("sheep", "San Francisco", "E", "2025-06-28", 0.1960, 0.2242);
addLocation("dinosaurs", "Denmark", "F", "2025-06-29", 0.5214, 0.1205);
addLocation("baby bats", "Brazil", "E", "2025-06-29", 0.3624, 0.5541);
addLocation("jaberwockies", "Jerusalem", "E", "2025-06-30", 0.5907, 0.2668);
addLocation("Cheshire cats", "Cheltenham", "F", "2025-06-30", 0.4955, 0.1362);/*
addLocation("owls", "Owl-bania", "E", "2025-07-13", 0.5184, 0.4421);
addLocation("monarchs", "Monaco", "F", "2025-07-13", 0.4808, 0.4266);
addLocation("sausage dogs", "Sydney", "E", "2025-07-13", 0.9077, 0.8519);
addLocation("dwarfs", "Discworld", "F", "2025-07-13", null, null, true);
addLocation("Smash Dosés", "San Jose", "E", "2025-07-14", 0.1005, 0.4420);
addLocation("piss", "the Pacific", "F", "2025-07-14", 0.9287, 0.5138);
addLocation("parrots", "the Pacific", "F", "2025-07-15", 0.9541, 0.5309);
addLocation("T-Rex", "Tunisia", "F", "2025-07-14", 0.4854, 0.4878);
addLocation("papa bears", "Papua New Guinea", "E", "2025-07-15", 0.8994, 0.6914);
addLocation("caribou", "Klatch", "F", "2025-07-16", null, null, true);
addLocation("bulldogs", "Bangladesh", "E", "2025-07-16", 0.7295, 0.5359);
addLocation("mushrooms", "Mesopotamia", "E", "2025-07-17", 0.5825, 0.4862);
addLocation("molluscs", "Moldova", "F", "2025-07-17", 0.5418, 0.4057);
addLocation("marsupials", "Mayfair", "F", "2025-07-18", 0.4597, 0.3773);
addLocation("giggly wiggly worms", "giggly wiggly Winchester", "E", "2025-07-18", 0.4568, 0.3804);
addLocation("franks", "Finland", "F", "2025-07-19", 0.5293, 0.2644);
addLocation("fins", "Franc-land", "E", "2025-07-19", 0.4673, 0.4112);
addLocation("hippos", "Himalayas", "F", "2025-07-20", 0.7054, 0.4967);
addLocation("pirates", "Pyrenees", "E", "2025-07-20", 0.4618, 0.4312);
addLocation("dinosaurs", "Denmark", "F", "2025-07-21", 0.4869, 0.3461);
addLocation("T-Rex", "Tunisia", "F", "2025-07-21", 0.4854, 0.4878);
addLocation("pterodactyls", "Ptennessee", "E", "2025-07-21", 0.2031, 0.4664);
addLocation("ghosts", "Gran Canaria", "E", "2025-07-22", 0.4121, 0.5154);
addLocation("rubber ducks", "rubber Denmark", "F", "2025-07-22", 0.4838, 0.3480);
addLocation("invertebrates", "Indonesia", "F", "2025-07-23", 0.8247, 0.6650);
addLocation("gastropods", "Guana", "E", "2025-07-23", 0.2637, 0.5656);
addLocation("barbarians", "Bosnia", "E", "2025-08-17", 0.5087, 0.4223);
addLocation("houses", "Herzegovina", "F", "2025-08-17", 0.5114, 0.4322);
addLocation("kitchens", "Kazakhstan", "E", "2025-08-17", 0.6617, 0.3828);
addLocation("orangutans", "Orlando", "F", "2025-08-18", 0.2151, 0.5099);
addLocation("kittens", "Kentucky", "E", "2025-08-18", 0.2082, 0.4512);
addLocation("safeguarding", "Sussex", "F", "2025-08-19", 0.4589, 0.3800);
addLocation("yellow cards", "Yarmouth", "E", "2025-08-19", 0.4563, 0.3814);
addLocation("Ricus", "Russia", "F", "2025-08-20", 0.7901, 0.3023);
addLocation("Fortes", "Fiji", "E", "2025-08-20", 0.9963, 0.7543);
addLocation("quadrupeds", "Queensland", "E", "2025-08-21", 0.8976, 0.7853);
addLocation("feet", "feral France", "F", "2025-08-21", 0.4694, 0.4138);
addLocation("snuggles", "Scandinavia", "F", "2025-08-22", 0.5009, 0.2726);
addLocation("minxy minks", "Minnesota", "E", "2025-08-22", 0.2003, 0.3884);
addLocation("eyeballs", "Egypt", "F", "2025-08-23", 0.5472, 0.5240);
addLocation("witches", "Wales", "E", "2025-08-23", 0.4485, 0.3743);
addLocation("mink", "Minneapolis", "F", "2025-08-24", 0, 0); //!!
addLocation("elks", "El Dorado", "E", "2025-08-25", 0, 0);
addLocation("toasters", "Timbuktu", "F", "2025-08-25", 0, 0);
addLocation("sunflowers", "Sicily", "E", "2025-08-31", 0, 0);
addLocation("delphiniums", "Dartford", "F", "2025-08-31", 0, 0);
addLocation("Admirals", "Argentina", "E", "2025-09-01", 0, 0);
addLocation("lamps", "Lapland", "F", "2025-09-01", 0, 0);
addLocation("manta rays", "Mesopotamia", "F", "2025-09-02", 0, 0);
addLocation("fat cats", "Florence", "E", "2025-09-02", 0, 0);
addLocation("bison", "Bulgaria", "E", "2025-09-03", 0, 0);
addLocation("jobs", "Gibraltar", "F", "2025-09-03", 0, 0);
addLocation("hay", "Hammersmith", "F", "2025-09-04", 0, 0);
addLocation("straw", "Scotland", "E", "2025-09-04", 0, 0);
addLocation("Gromits", "Greece", "F", "2025-09-07", 0, 0);
addLocation("kangaroos", "Klatch", "E", "2025-09-07", null, null, true);
addLocation("Venn diagrams", "Venus", "E", "2025-09-08", 0, 0);
addLocation("heffalumps", "Hemmel Hempstead", "F", "2025-09-08", 0, 0);
addLocation("grumpus'", "GranCanaria", "F", "2025-09-09", 0, 0);
addLocation("grinches", "Greece", "E", "2025-09-09", 0, 0);
addLocation("franks", "Frankh-Morpork", "F", "2025-09-10", null, null, true);
addLocation("Fortes", "Forte-eks (XXXX)", "E", "2025-09-10", null, null, true);
addLocation("flambees", "Florence", "E", "2025-09-11", 0, 0);
addLocation("kittens", "Kettering", "F", "2025-09-11", 0, 0);
addLocation("pomegranates", "Pompeii", "E", "2025-09-14", 0, 0);
addLocation("nectarines", "Naples", "F", "2025-09-14", 0, 0);*/

// Add to html
for (let i = 0; i < data_array.length; i++) {
    var entry = data_array[i];

    var loc = document.createElement("img");
    loc.classList.add("location");
    loc.src = "assets/location.svg";
    loc.style.top = entry.top*100 + "%";
    loc.style.left = entry.left*100 + "%";

    loc.addEventListener("click", (evt) => showPopup(evt, i));

    document.getElementById("locations").appendChild(loc);
};
