// VARIABLES
var restaurants = "assets/data/restaurants.json";
var hotels = "assets/data/hotels.json";
var thingsToDo = "assets/data/thingsToDo.json";

const initialPosition = {
  // Bielefeld center
  lat: 52.022,
  lng: 8.532,
};

const zoomLevel = 12;
var infowindow;
var openMarker;

var markersLoaded = {};
var placesInformation = {};
var service;
var jsonDataCache = {};

// INITMAP


$(document).ready(function () {
  initMap();
});

function initMap() {
  map = new google.maps.Map(document.getElementById("large-map"), {
    center: {
      lat: initialPosition.lat,
      lng: initialPosition.lng,
    },
    zoom: zoomLevel,
  });

  // Google Places
  service = new google.maps.places.PlacesService(map);
}

// BUTTONS
$("#hotelsButton").on("click", function () {
  let placeType = "hotels";
  if (markersLoaded[placeType] == false || markersLoaded[placeType] == null) {
    loadMarkers(
      placeType,
      hotels,
      "assets/images/icons/hotelIcon.png",
      hotelDisplayFunction
    );
    markersLoaded[placeType] = true;      
  }
});

$("#todoButton").on("click", function () {
  let placeType = "thingsToDo";
  if (markersLoaded[placeType] == false || markersLoaded[placeType] == null) {
    loadMarkers(
      placeType,
      thingsToDo,
      "assets/images/icons/thingsToDoIcon.png",
      thingsToDoDisplayFunction
    );
    markersLoaded[placeType] = true;
  } 
});

$("#restaurantButton").on("click", function () {
  let placeType = "restaurants";
  if (markersLoaded[placeType] == false || markersLoaded[placeType] == null) {
    loadMarkers(
      placeType,
      restaurants,
      "assets/images/icons/restaurantIcon.png",
      restaurantDisplayFunction
    );
    markersLoaded[placeType] = true;
  } 
});

// MAP FUNCTIONS

$("#resetButton").on("click", function () {
  initMap();
  markersLoaded = {};
  $("#cardsParent").empty();
});




function getCardHtml(place) {
  let parent = $("#cardsParent")[0];
  htmlToAdd = `<div class="card-deck col-12 col-md-6">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5 class="card-title hind-card hvr-shrink"><a href="${place.website}" target="_blank">${place.name} →</a></h5>
                            <h5 class="card-title hind-card">${place.rating} / 5</h5>
                            <p class="address"><i class="fas fa-map-marked-alt"></i> : ${place.formatted_address}</p>
                            <p class="number"><i class="fas fa-phone"></i> : ${place.formatted_phone_number}</p>
                        </div>
                    </div>
                </div>`;
  parent.innerHTML = parent.innerHTML + htmlToAdd;
}

// GOOGLE PLACES API
function placesCallback(place, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    return getCardHtml(place);
  }
}

function getInfoFromPlacesAPI(placeKind, places) {
  // Loop through all data and contact Google Places using the placeId of each place
  placesInformation[placeKind] = {};
  $("#cardsParent")[0].innerHTML = "";
  $.each(places, function (key, place) {
    var request = {
      placeId: place.placeId,
      fields: [
        "name",
        "rating",
        "formatted_phone_number",
        "formatted_address",
        "website",
      ],
    };
    service.getDetails(request, placesCallback); // Fetch the data
  });
}

function addMarkerListener(infoContent, marker) {
  marker.info = new google.maps.InfoWindow({
    content: infoContent,
    maxWidth: 200,
  });

  google.maps.event.addListener(marker, "click", function () {
    if (openMarker != null) {
      openMarker.info.close();
    }
    marker.info.open(map, marker);
    openMarker = marker;
  });
}

function restaurantDisplayFunction(data) {
  // Set info window content
  infoContent = "<h4>" + data.name + "</h4>";
  infoContent += "<p>" + data.foodType + "</p>";
  infoContent += "<p>" + data.rating + "</p>";
  infoContent += "<p>" + data.reviews1 + "</g>";
  infoContent += "<p>" + data.reviews2 + "</p>";
  return infoContent;
}

function hotelDisplayFunction(data) {
  // Set info window content
  infoContent = "<h4>" + data.name + "</h4>";
  infoContent += "<p>" + data.customerRating + "</p>";
  infoContent += "<p>" + data.feature1 + "</g>";
  infoContent += "<p>" + data.feature2 + "</p>";
  return infoContent;
}

function thingsToDoDisplayFunction(data) {
  // Set info window content
  infoContent = "<h4>" + data.name + "</h4>";
  infoContent += "<p>" + data.activityRating + "</p>";
  infoContent += "<p>" + data.activityInfo + "</g>";
  return infoContent;
}

function loadMarkers(placeType, jsonPath, iconPath, infoDisplayFunction) {
  $.getJSON(jsonPath, function (jsonData) {
    // Loop through the data
    jsonDataCache[placeType] = jsonData;
    $.each(jsonData, function (key, data) {
      let myLatlng = new google.maps.LatLng(data.lat, data.lng); // set position
      let marker = new google.maps.Marker({
        position: myLatlng,
        icon: iconPath,
        animation: google.maps.Animation.DROP,
        map: map,
      });

      let content = infoDisplayFunction(data);
      addMarkerListener(content, marker);
    });
    setTimeout(function(){ getInfoFromPlacesAPI(placeType, jsonData); }, 3000);
    
  });
}
