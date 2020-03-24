// Create a map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);


// Country data
var nations = [
  {
    country: "France",
    city: "Paris",
    location: [48.8589506, 2.276848],
    advLvl: "Level 2: Exercise Increased Caution",
    busVisa: "No visa is required for a stay of up to 90 days.",
    tourVisa: "No visa is required for a stay of up to 90 days.",
    size: 50
  },
  {
    country: "Australia",
    city: "Sydney",
    location: [-33.8473551, 150.6510936],
    advLvl: "Level 1: Exercise Normal Precautions",
    busVisa: "Business ETA is required",
    tourVisa: "Tourist ETA is required",
    size: 50
  },
  {
    country: "China",
    city: "Shanghai",
    location: [31.2243024, 120.9148827],
    advLvl: "Level 4: Do Not Travel",
    busVisa: "Visa required.",
    tourVisa: "Visa required.",
    size: 50
  },
  {
    country: "New Zealand",
    city: "Auckland",
    location: [-36.8621432, 174.5845901],
    advLvl: "Level 1: Exercise Normal Precautions",
    busVisa: "ETA is required",
    tourVisa: "ETA is required",
    size: 50
  },
  {
    country: "Gabon",
    city: "Libreville",
    location: [0.4115524, 9.2941969],
    advLvl: "Level 1: Excercise Normal Precautions",
    busVisa: "Visa required.",
    tourVisa: "Visa required.",
    size: 50
  }
];


  // Color function for countries' points
 function c_color(nations) { 
   switch(nations.advLvl) {
    case "Level 1: Exercise Normal Precautions":
      return "green";
    case "Level 2: Exercise Increased Caution":
      return "yellow";
    case "Level 3: Reconsider Travel":
      return "orange";
    case "Level 4: Do Not Travel":
      return "red";
   }
 
// 	if (nations.advLvl == "Level 1: Excercise Normal Precautions") {
// 		return color = "green";
// 	} 
// 	else if (nations.advLvl == "Level 2: Exercise Increased Caution") {
// 		return color = "yellow";
// 	}
// 	else if (nations.advLvl == "Level 3: Reconsider Travel") {
// 		return color = "#orange";
// 	}
// 	else {
// 		return color = "red";
// 	}
//  };

//  function chooseColor(borough) {
//   switch (borough) {
//   case "Brooklyn":
//     return "yellow";
//   case "Bronx":
//     return "red";
//   case "Manhattan":
//     return "orange";
//   case "Queens":
//     return "green";
//   case "Staten Island":
//     return "purple";
//   default:
//     return "black";
//   }
};

// Loop through the cities array and create one marker for each city object
nations.forEach(nation =>
  // Add circles to map
  L.circle(nation.location, {
    fillOpacity: 0.75,
    color: c_color(nations),
    fillColor: c_color(nations),
    // Adjust radius
    radius: nation.size * 1500
  }).bindPopup("<h1>" + nation.city + "</h1> <hr> <h3>Advisory " + nation.advLvl + "</h3> <hr> <h3>Business Visa: " + nation.busVisa + "</h3> <hr> <h3>Travel Visa: " + nation.tourVisa + "</h3>").addTo(myMap)
  );
