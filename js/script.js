zoomRatio = 4;

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

    // Clear assets
    document.getElementById("atuin").classList.remove("flown");
    document.getElementById("hobbit-hole").classList.remove("popped");
    document.getElementById("venus").classList.remove("retrograded");
    document.getElementById("coin").classList.remove("rolled");

    // Set up pop up
    var popup = document.getElementById("info-popup");
    popup.classList.add("show");

    document.getElementById("popup-text").innerText =
        "I love you more than all the " + entry.things + " in " + entry.place;
    document.getElementById("date-text").innerText =
        entry.who + ", " + entry.dateStr;
    
    // Zoom and additional items
    var canvas = document.getElementById("canvas");
    if(entry.type == "disc"){
        // Discworld
        canvas.style.transform = "scale(1,1) translate(0%,0%)";
        document.getElementById("atuin").classList.add("flown");
    }
    else if(entry.type == "hobbit"){
        // Hobbiton
        canvas.style.transform = "scale(1,1) translate(0%,0%)";
        document.getElementById("hobbit-hole").classList.add("popped");
    }
    else if(entry.type == "venus"){
        // Venus
        canvas.style.transform = "scale(1,1) translate(0%,0%)";
        document.getElementById("venus").classList.add("retrograded");
    }
    else if(entry.type == "dorado"){
        // El Dorado
        canvas.style.transform = "scale(1,1) translate(0%,0%)";
        document.getElementById("coin").classList.add("rolled");
    }
    else{
        // Earth
        var panX = 0.5 - entry.left; var panY = 0.5 - entry.top;
        canvas.style.transform = "scale("+zoomRatio+","+zoomRatio+") translate("+panX*100+"%,"+panY*100+"%)";
    }
    
}

function hidePopup(event){
    current_location_id = -1;
    
    document.getElementById("atuin").classList.remove("flown");
    document.getElementById("hobbit-hole").classList.remove("popped");
    document.getElementById("venus").classList.remove("retrograded");
    document.getElementById("coin").classList.remove("rolled");

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

function addLocation(things, place, who, dateStr, x, y, type = ""){
    data_array.push({things: things, place: place, who: who, dateStr: dateStr, left: x, top: y, type: type});
}

addLocation("raccoons", "Russia", "F", "2025-06-15", 0.6607, 0.0822);
addLocation("frogs", "Finland", "E", "2025-06-16", 0.5477, 0.0796);
addLocation("moles", "Moldova", "F", "2025-06-16", 0.5679, 0.1651);
addLocation("snakes", "Sardinia", "E", "2025-06-17", 0.5230, 0.2076);
addLocation("alpacas", "Albania", "F", "2025-06-17", 0.5502, 0.2072);
addLocation("crabs", "Croatia", "E", "2025-06-18", 0.5373, 0.1776);
addLocation("iguanas", "Italy", "F", "2025-06-18", 0.5321, 0.1926);
addLocation("dogs", "Denmark", "F", "2025-06-19", 0.5264, 0.1142);
addLocation("rats", "Rotterdam", "E", "2025-06-19", 0.5100, 0.1362);
addLocation("gibbons", "Gabon", "E", "2025-06-22", 0.5350, 0.5075);
addLocation("ravens", "Romania", "F", "2025-06-22", 0.5600, 0.1703);
addLocation("morris men", "Manchester", "E", "2025-06-23", 0.4950, 0.1260);
addLocation("lemmings", "Lancre", "F", "2025-06-23", null, null, "disc");
addLocation("gators", "Galway", "F", "2025-06-24", 0.4810, 0.1270);
addLocation("guinea pigs", "Ghana", "E", "2025-06-24", 0.4983, 0.4462);
addLocation("kittens", "Kenya", "E", "2025-06-25", 0.6083, 0.4905);
addLocation("dragons", "Denmark", "F", "2025-06-25", 0.5200, 0.1100);
addLocation("morris dancers", "Morpork", "F", "2025-06-26", null, null, "disc");
addLocation("donkeys", "Damascus", "E", "2025-06-26", 0.5932, 0.2521);
addLocation("harfoots", "Hobbiton", "E", "2025-06-27", null, null, "hobbit");
addLocation("hobbits", "Hobbiton", "F", "2025-06-27", null, null, "hobbit");
addLocation("hamsters", "Honduras", "F", "2025-06-28", 0.2641, 0.3854);
addLocation("sheep", "San Francisco", "E", "2025-06-28", 0.1960, 0.2242);
addLocation("dinosaurs", "Denmark", "F", "2025-06-29", 0.5214, 0.1205);
addLocation("baby bats", "Brazil", "E", "2025-06-29", 0.3624, 0.5541);
addLocation("jaberwockies", "Jerusalem", "E", "2025-06-30", 0.5907, 0.2668);
addLocation("Cheshire cats", "Cheltenham", "F", "2025-06-30", 0.4955, 0.1362);
addLocation("owls", "Owl-bania", "E", "2025-07-13", 0.5507, 0.2004);
addLocation("monarchs", "Monaco", "F", "2025-07-13", 0.5174, 0.1855);
addLocation("sausage dogs", "Sydney", "E", "2025-07-13", 0.8843, 0.7456);
addLocation("dwarfs", "Discworld", "F", "2025-07-13", null, null, "disc");
addLocation("Smash Dosés", "San Jose", "E", "2025-07-14", 0.1962, 0.2266);
addLocation("piss", "the Pacific", "F", "2025-07-14", 0.1300, 0.7525);
addLocation("parrots", "the Pacific", "F", "2025-07-15", 0.1600, 0.7227);
addLocation("T-Rex", "Tunisia", "F", "2025-07-14", 0.5260, 0.2393);
addLocation("papa bears", "Papua New Guinea", "E", "2025-07-15", 0.9010, 0.5442);
addLocation("caribou", "Klatch", "F", "2025-07-16", null, null, "disc");
addLocation("bulldogs", "Bangladesh", "E", "2025-07-16", 0.7421, 0.3284);
addLocation("mushrooms", "Mesopotamia", "E", "2025-07-17", 0.6063, 0.2431);
addLocation("molluscs", "Moldova", "F", "2025-07-17", 0.5660, 0.1619);
addLocation("marsupials", "Mayfair", "F", "2025-07-18", 0.5005, 0.1386);
addLocation("giggly wiggly worms", "giggly wiggly Winchester", "E", "2025-07-18", 0.4972, 0.1404);
addLocation("franks", "Finland", "F", "2025-07-19", 0.5518, 0.0714);
addLocation("fins", "Franc-land", "E", "2025-07-19", 0.5086, 0.1708);
addLocation("hippos", "Himalayas", "F", "2025-07-20", 0.7118, 0.2812);
addLocation("pirates", "Pyrenees", "E", "2025-07-20", 0.5008, 0.1933);
addLocation("dinosaurs", "Denmark", "F", "2025-07-21", 0.5238, 0.1145);
addLocation("T-Rex", "Tunisia", "F", "2025-07-21", 0.5216, 0.2469);
addLocation("pterodactyls", "Ptennessee", "E", "2025-07-21", 0.2823, 0.2376);
addLocation("ghosts", "Gran Canaria", "E", "2025-07-22", 0.4605, 0.2946);
addLocation("rubber ducks", "rubber Denmark", "F", "2025-07-22", 0.5190, 0.1144);
addLocation("invertebrates", "Indonesia", "F", "2025-07-23", 0.7846, 0.5109);
addLocation("gastropods", "Guana", "E", "2025-07-23", 0.32615, 0.36172);
addLocation("barbarians", "Bosnia", "E", "2025-08-17", 0.5408, 0.1762);
addLocation("houses", "Herzegovina", "F", "2025-08-17", 0.5423, 0.1861);
addLocation("kitchens", "Kazakhstan", "E", "2025-08-17", 0.6523, 0.1552);
addLocation("orangutans", "Orlando", "F", "2025-08-18", 0.2870, 0.2915);
addLocation("kittens", "Kentucky", "E", "2025-08-18", 0.2858, 0.2277);
addLocation("safeguarding", "Sussex", "F", "2025-08-19", 0.5003, 0.1417);
addLocation("yellow cards", "Yarmouth", "E", "2025-08-19", 0.49738, 0.1429);
addLocation("Ricus", "Russia", "F", "2025-08-20", 0.7591, 0.0908);
addLocation("Fortes", "Fiji", "E", "2025-08-20", 0.9812, 0.6345);
addLocation("quadrupeds", "Queensland", "E", "2025-08-21", 0.8865, 0.6632);
addLocation("feet", "feral France", "F", "2025-08-21", 0.5024, 0.1680);
addLocation("snuggles", "Scandinavia", "F", "2025-08-22", 0.5307, 0.0694);
addLocation("minxy minks", "Minnesota", "E", "2025-08-22", 0.2785, 0.1686);
addLocation("eyeballs", "Egypt", "F", "2025-08-23", 0.5771, 0.2862);
addLocation("witches", "Wales", "E", "2025-08-23", 0.4921, 0.1341);
addLocation("mink", "Minneapolis", "F", "2025-08-24", 0.2796, 0.1736);
addLocation("elks", "El Dorado", "E", "2025-08-25", null, null, "dorado");
addLocation("toasters", "Timbuktu", "F", "2025-08-25", 0.4930, 0.3754);
addLocation("sunflowers", "Sicily", "E", "2025-08-31", 0.5353, 0.2261);
addLocation("delphiniums", "Dartford", "F", "2025-08-31", 0.5007, 0.1387);
addLocation("Admirals", "Argentina", "E", "2025-09-01", 0.3467, 0.7326);
addLocation("lamps", "Lapland", "F", "2025-09-01", 0.5505, 0.0521);
addLocation("manta rays", "Mesopotamia", "F", "2025-09-02", 0.6123, 0.2498);
addLocation("fat cats", "Florence", "E", "2025-09-02", 0.5274, 0.1845);
addLocation("bison", "Bulgaria", "E", "2025-09-03", 0.5612, 0.1940);
addLocation("jobs", "Gibraltar", "F", "2025-09-03", 0.4869, 0.2356);
addLocation("hay", "Hammersmith", "F", "2025-09-04", 0.5006, 0.1386);
addLocation("straw", "Scotland", "E", "2025-09-04", 0.4905, 0.1075);
addLocation("Gromits", "Greece", "F", "2025-09-07", 0.5547, 0.2158);
addLocation("kangaroos", "Klatch", "E", "2025-09-07", null, null, "disc");
addLocation("Venn diagrams", "Venus", "E", "2025-09-08", null, null, "venus");
addLocation("heffalumps", "Hemmel Hempstead", "F", "2025-09-08", 0.4996, 0.1355);
addLocation("grumpus'", "Gran Canaria", "F", "2025-09-09", 0.4597, 0.2945);
addLocation("grinches", "Greece", "E", "2025-09-09", 0.5580, 0.2214);
addLocation("franks", "Frankh-Morpork", "F", "2025-09-10", null, null, "disc");
addLocation("Fortes", "Forte-eks (XXXX)", "E", "2025-09-10", null, null, "disc");
addLocation("flambees", "Florence", "E", "2025-09-11", 0.5273, 0.1844);
addLocation("kittens", "Kettering", "F", "2025-09-11", 0.4985, 0.1287);
addLocation("pomegranates", "Pompeii", "E", "2025-09-14", 0.5358, 0.2056);
addLocation("nectarines", "Naples", "F", "2025-09-14", 0.5352, 0.2050);
addLocation("communists", "Coventry", "F", "2025-09-15", 0.4960, 0.1299);
addLocation("socialists", "Saigon", "E", "2025-09-15", 0.7933, 0.4191);
addLocation("oooks", "Ooozbekistan", "F", "2025-09-16", 0.6485, 0.1850);
addLocation("rawrs", "Rawrmania", "E", "2025-09-16", 0.5556, 0.1635);
addLocation("dropbears", "Dominican Republic", "E", "2025-09-17", 0.3124, 0.3599);
addLocation("wizards", "Wessex", "F", "2025-09-17", 0.4958, 0.1386);
addLocation("soviets", "Sarajevo", "E", "2025-09-18", 0.5431, 0.1854);
addLocation("Nac Mac Feegal", "Nanny Ogg's bar", "F", "2025-09-18", null, null, "disc");
addLocation("hornets", "Honolulu", "E", "2025-09-19", 0.07855, 0.34128);
addLocation("dinosaurs", "Dubrovnik", "F", "2025-09-19", 0.5442, 0.1926);
addLocation("camels", "Cuba", "E", "2025-09-20", 0.2912, 0.3406);
addLocation("Beecham's", "Buenos Aires", "E", "2025-09-21", 0.3520, 0.7549);
addLocation("puppies", "Patagonia", "F", "2025-09-21", 0.3321, 0.7728);

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
